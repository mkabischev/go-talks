package main

// START OMIT

func CalculateSuperExpress() CalculateFunc {
	return func(from, to string) Result { /*...*/ }
}

func CalculateDeliverMe() CalculateFunc {
	return func(from, to string) Result { /*...*/ }
}

func CalculateSlowAndCheap() CalculateFunc {
	return func(from, to string) Result { /*...*/ }
}

var (
	SuperExpress = CalculateSuperExpress()
	DeliverMe    = CalculateDeliverMe()
	SlowAndCheap = CalculateSlowAndCheap()
)

// END OMIT
