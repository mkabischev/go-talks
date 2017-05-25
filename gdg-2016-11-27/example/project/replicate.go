package main

// START OMIT
func Replicate(fn CalculateFunc, replicas int) CalculateFunc {
	return func(from, to string) Result {
		c := make(chan Result, replicas)

		for i := 0; i < replicas; i++ {
			go func() {
				c <- fn(from, to)
			}()
		}

		return <-c
	}
}

// END OMIT
