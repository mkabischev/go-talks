package main

import (
	"errors"
	"time"
)

// START OMIT

func CalculateWithTimeout(from, to string, timeout time.Duration) ([]Result, error) {
	timer := time.After(timeout) // HL

	c := make(chan Result, 3)

	go func() { c <- SuperExpress(from, to) }()
	go func() { c <- DeliverMe(from, to) }()
	go func() { c <- SlowAndCheap(from, to) }()

	var results []Result
	for i := 0; i < 3; i++ {
		select { // HL
		case <-timer: // HL
			return results, errors.New("timed out")
		case result := <-c: // HL
			results = append(results, result)
		} // HL
	}

	return results, nil
}

// END OMIT
