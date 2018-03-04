package metrics

import (
	"io"
	"time"

	"github.com/prometheus/client_golang/prometheus"
)

// START OMIT
type ReaderWithMetrics struct {
	r io.Reader
	s prometheus.Summary
}

func (r *ReaderWithMetrics) Read(p []byte) (n int, err error) {
	t := time.Now()
	defer func() { // HLx
		r.s.Observe(time.Since(t).Seconds()) // HLx
	}() // HLx

	return r.r.Read(p)
}

// END OMIT
