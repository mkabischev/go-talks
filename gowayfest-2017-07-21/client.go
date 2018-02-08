package example

import (
	"math/rand"
	"net/http"
	"time"
)

// HTTPClient wraps httpClient
type HTTPClient struct {
	httpClient *http.Client
}

// Do sends HTTP request
func (c *HTTPClient) Do(r *http.Request) (*http.Response, error) {
	return http.DefaultClient.Do(r)
}

// Do sends HTTP request with authorization
func (c *HTTPClient) Do__(r *http.Request) (*http.Response, error) {
	r.Header.Add("Authorization", c.AuthToken)

	return http.DefaultClient.Do(r)
}

// Do sends HTTP request with authorization and load balancing
func (c *HTTPClient) Do2(r *http.Request) (*http.Response, error) {
	r.Header.Add("Authorization", c.AuthToken)
	r.URL.Host = c.Backends[rand.Intn(len(c.Backends))]

	return http.DefaultClient.Do(r)
}

// Do sends HTTP request with authorization, load balancing and retries
func (c *HTTPClient) Do3(r *http.Request) (res *http.Response, err error) {
	r.Header.Add("Authorization", c.AuthToken)
	for i := 0; i < c.RetryAttempts; i++ {
		r.URL.Host = c.Backends[rand.Intn(len(c.Backends))]

		res, err = http.DefaultClient.Do(r)
		if err != nil {
			time.Sleep(time.Duration(i) * c.RetryDelay)
			continue
		}

		break
	}

	return res, err
}

// Do sends HTTP request with authorization, load balancing,
// retries & metrics
func (c *HTTPClient) Do4(r *http.Request) (res *http.Response, err error) {
	r.Header.Add("Authorization", c.AuthToken)
	for i := 0; i < c.RetryAttempts; i++ {
		r.URL.Host = c.Backends[rand.Intn(len(c.Backends))]
		start := time.Now()
		res, err = http.DefaultClient.Do(r)
		c.DurationSummary.Observe(time.Since(start).Seconds())
		if err != nil {
			time.Sleep(time.Duration(i) * c.RetryDelay)
			continue
		}

		break
	}

	return res, err
}

// Do sends HTTP request with authorization, load balancing,
// retries, metrics & logging
func (c *HTTPClient) Do(r *http.Request) (res *http.Response, err error) {
	r.Header.Add("Authorization", c.AuthToken)
	for i := 0; i < c.RetryAttempts; i++ {
		r.URL.Host = c.Backends[rand.Intn(len(c.Backends))]
		c.Logger.Printf("make HTTP call. Method: %v. URL: %v", r.Method, r.URL)
		start := time.Now()
		res, err = http.DefaultClient.Do(r)
		c.DurationSummary.Observe(time.Since(start).Seconds())
		if err != nil {
			c.Logger.Printf("error while making HTTP call: %v", err)
			time.Sleep(time.Duration(i) * c.RetryDelay)
			continue
		}

		break
	}

	c.Logger.Printf("response code: %v", res.StatusCode)

	return res, err
}

// A Handler responds to an HTTP request.
type Handler interface {
    ServeHTTP(ResponseWriter, *Request)
}

// The HandlerFunc type is an adapter to allow the use of
// ordinary functions as HTTP handlers. If f is a function
// with the appropriate signature, HandlerFunc(f) is a
// Handler that calls f.
type HandlerFunc func(ResponseWriter, *Request)

// ServeHTTP calls f(w, r).
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
    f(w, r)
}