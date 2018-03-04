package main

// START OMIT

type CalculateFunc func(from, to string) Result

type Result struct {
	Provider string
	Duration int
	Price    float64
}

// END OMIT
