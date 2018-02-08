package example

import (
	"net/http"
)

func SomeMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// do smth

		next.ServeHTTP(w, r)
	})
}

type LoadBalancer interface {
	Next() string
}

type Client struct {
	HttpClient   *http.Client
	LoadBalancer LoadBalancer
}

func (c *Client) Do(r *http.Request) (*http.Response, error) {
	r.URL.Host = c.LoadBalancer.Next()

	return c.HttpClient.Do(r)
}
