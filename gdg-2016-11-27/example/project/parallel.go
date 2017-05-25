package main

// START OMIT

func CalculateParallel(from, to string) ([]Result, error) {
	res := make(chan Result, 3)

	go func() { res <- SuperExpress(from, to) }()
	go func() { res <- DeliverMe(from, to) }()
	go func() { res <- SlowAndCheap(from, to) }()

	return []Result{<-res, <-res, <-res}, nil
}

// END OMIT
