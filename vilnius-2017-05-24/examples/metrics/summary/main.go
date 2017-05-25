package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)


func metricsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	requestDuration := time.Duration(rand.Float64()*50) * time.Millisecond

	// START OMIT
	summary := prometheus.NewSummary(prometheus.SummaryOpts{
		Name: "request_duration_seconds",
		Help: "handler duration",
	})

	// ..

	summary.Observe(requestDuration.Seconds())
	// END OMIT

	prometheus.MustRegister(summary)

	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next(w, r)
		summary.Observe(time.Since(start).Seconds())
	}
}

func main() {
	http.HandleFunc("/", metricsMiddleware(handler)) // HLx
	http.Handle("/metrics", promhttp.Handler())
	http.ListenAndServe(":8080", nil)
}

// START OMIT
func handler(w http.ResponseWriter, r *http.Request) {
	time.Sleep(time.Duration(rand.Float64()*50) * time.Millisecond)
}

// END OMIT
