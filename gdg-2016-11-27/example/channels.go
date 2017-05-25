package main

import "fmt"

func doSmth(c chan string) {
	// some long operation
	c <- "result!"
}

func main() {
	c := make(chan string)

	go doSmth(c)

	s := <-c
	fmt.Println(s) // "result!"
}
