package main

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

// LOG1 OMIT
func metricsMiddleware(next http.HandlerFunc) http.HandlerFunc {
	requestDuration := time.Duration(rand.Float64()*50) * time.Millisecond

	// START OMIT
	histogram := prometheus.NewHistogram(prometheus.HistogramOpts{
		Name:    "request_duration_seconds",
		Help:    "handler duration",
		Buckets: []float64{0.01, 0.03, 0.05},
	})

	// ..

	histogram.Observe(requestDuration.Seconds())
	// END OMIT

	prometheus.MustRegister(histogram) // HLx

	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next(w, r)
		histogram.Observe(time.Since(start).Seconds()) // HLx
	}

	// END OMIT
}

func main() {
	http.HandleFunc("/", metricsMiddleware(handler)) // HLx
	http.Handle("/metrics", promhttp.Handler())
	http.ListenAndServe(":8080", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	time.Sleep(time.Duration(rand.Float64()*50) * time.Millisecond)
}
