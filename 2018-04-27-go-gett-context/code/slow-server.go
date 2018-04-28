package main

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httputil"
	"time"
)

// START OMIT
func DeadlineMiddleware(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		deadline, _ := time.Parse(time.RFC3339, r.Header.Get("X-Deadline"))
		ctx, cancel := context.WithDeadline(r.Context(), deadline) // HLx
		defer cancel()

		r = r.WithContext(ctx) // HLx
		h(w, r)
	}
}

// END OMIT

func handler(w http.ResponseWriter, r *http.Request) {
	rr, _ := httputil.DumpRequest(r, true)
	fmt.Printf("%s\n", rr)
	go func() {
		<-r.Context().Done()
		fmt.Println("error: %v", r.Context().Err())
	}()

	time.Sleep(time.Second)
}

func main() {
	var h http.HandlerFunc = handler
	h = DeadlineMiddleware(h)

	http.HandleFunc("/", h)

	http.ListenAndServe(":3333", nil)
}
