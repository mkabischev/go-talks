package main

import (
	"bytes"
	"fmt"
	"runtime"
)

func main() {
	var start runtime.MemStats
	runtime.ReadMemStats(&start)

	var buf bytes.Buffer // HL
	fmt.Fprintln(&buf, "Hello, FOSDEM gophers!")
	fmt.Printf(buf.String())

	var end runtime.MemStats
	runtime.ReadMemStats(&end)
	fmt.Printf("allocated %d bytes\n", end.Alloc-start.Alloc)
}
