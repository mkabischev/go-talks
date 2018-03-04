package metrics

import (
	"github.com/prometheus/client_golang/prometheus"
)

type Conn interface{}

// START OMIT
type Pool struct {
	openedCounter prometheus.Counter // HLx
	idleCounter   prometheus.Counter // HLx

	// ...
}

func (p *Pool) get() (Conn, error) {
	c, err := p.dial()
	if err == nil {
		p.openedCounter.Inc() // HLx
	}

	return c, err
}

func (p *Pool) release(c Conn) {
	p.idleCounter.Inc() // HLx

	// ...
}

// END OMIT
