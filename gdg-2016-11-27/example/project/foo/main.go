package main

import (
	"fmt"
	"math/rand"
	"time"
)

type CalculateFunc func(from, to string) int64

func Simple(from, to string) int64 {

	sleep := time.Duration(rand.Intn(100)) * time.Millisecond
	time.Sleep(sleep)

	fmt.Println("fioo")
	return int64(sleep)
}

func Replicate(fn CalculateFunc, replicas int) CalculateFunc {
	return func(from, to string) int64 {
		c := make(chan int64, replicas)

		for i := 0; i < replicas; i++ {
			go func() {
				c <- fn(from, to)
			}()
		}

		return <-c
	}
}

func main() {
	rand.Seed(time.Now().Unix())
	fmt.Println(Replicate(Simple, 5)("a", "b"))

	<-time.After(2 * time.Second)
	fmt.Println("Hello, playground")
}
