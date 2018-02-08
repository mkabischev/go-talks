package example

import (
	"encoding/base64"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"os"

	"github.com/prometheus/client_golang/prometheus"
)

// Client is an interface supported by http.Client
type Client interface {
	Do(req *http.Request) (*http.Response, error)
}

// ClientFn is a function that implements Client
type ClientFn func(*http.Request) (*http.Response, error)

// Do is an implementation of Client interface
func (c ClientFn) Do(r *http.Request) (*http.Response, error) {
	return c(r)
}

// Middleware adds additional bevahiour to Client
type Middleware func(Client) Client

// Chain wraps a Client c with all the given middlewares
func Chain(c Client, mw ...Middleware) Client {
	result := c
	for _, middleware := range mw {
		result = middleware(result)
	}

	return result
}

func NewSummary(name string) prometheus.Summary {
	return prometheus.NewSummary(prometheus.SummaryOpts{Name: name})
}

// logging
// auth
// metrics
// retry
// loadBalancer

func foo00() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
	)
}

func foo0() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
		BasicAuthorization("username", "password"),
	)
}

func foo1() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
		BasicAuthorization("username", "password"),
		Metrics(NewSummary("request_duration_seconds")),
	)
}

func foo2() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
		BasicAuthorization("username", "password"),
		Metrics(NewSummary("request_duration_seconds")),
		Backoff(3, 20*time.Millisecond),
	)
}

func foo3() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
		BasicAuthorization("username", "password"),
		Metrics(NewSummary("request_duration_seconds")),
		Backoff(3, 20*time.Millisecond),
		LoadBalancing("instance01", "instance02", "instance03"),
	)
}

func foo10() {
	client := Chain(
		&http.Client{},
		Logging(log.New(os.Stdout, "http: ", log.LstdFlags)),
		BasicAuthorization("username", "password"),
		Metrics(NewSummary("request_duration_seconds")),
		Backoff(3, 20*time.Millisecond),
		Recover(),
	)
}

// Logging returns a Middleware that logs request
func Logging(l *log.Logger) Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (*http.Response, error) {
			l.Printf("HTTP call. Method: %v. URL: %v", r.Method, r.URL)

			return c.Do(r)
		})
	}
}

// Header adds specified header to request
func Header(key, value string) Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (*http.Response, error) {
			r.Header.Add(key, value)

			return c.Do(r)
		})
	}
}

// BasicAuthorization adds header for Basic HTTP Authorization
func BasicAuthorization(username, password string) Middleware {
	value := []byte(username + ":" + password)
	encoded := base64.StdEncoding.EncodeToString(value)

	return Header("Authorization", "Basic "+encoded)
}

// Metrics returns a Middleware that measures the time taken by request
func Metrics(s prometheus.Summary) Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (*http.Response, error) {
			defer func(t time.Time) {
				s.Observe(time.Since(t).Seconds())
			}(time.Now())

			return c.Do(r)
		})
	}
}

// Backoff returns a Middleware that makes configured number of attemps
// to make HTTP call
func Backoff(attemps int, delay time.Duration) Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (res *http.Response, err error) {
			for i := 0; i < attemps; i++ {
				if res, err := c.Do(r); err == nil {
					break
				}

				time.Sleep(time.Duration(i) * delay)
			}

			return res, err
		})
	}
}

// LoadBalancing returns a Middleware that chooses random backend from specified list
func LoadBalancing(backends ...string) Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (res *http.Response, err error) {
			r.URL.Host = backends[rand.Intn(len(backends))]

			return c.Do(r)
		})
	}
}

// Recover returns a middleware that recovers all panics
func Recover() Middleware {
	return func(c Client) Client {
		return ClientFn(func(r *http.Request) (res *http.Response, err error) {
			defer func() {
				if r := recover(); r != nil {
					err = fmt.Errorf("recovered panic: %v", r)
				}
			}()

			return c.Do(r)
		})
	}
}
