package main

// START OMIT

func Calculate(from, to string) ([]Result, error) {
	superExpressResult := SuperExpress(from, to)
	deliverMeResult := DeliverMe(from, to)
	slowAndCheapResult := SlowAndCheap(from, to)

	return []Result{
		superExpressResult,
		deliverMeResult,
		slowAndCheapResult,
	}, nil
}

// END OMIT
