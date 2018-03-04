package main

import (
	"fmt"
	"runtime"
	"strings"
)

func main() {
	var start runtime.MemStats
	runtime.ReadMemStats(&start)

	var b strings.Builder // HL
	fmt.Fprintln(&b, "Hello, FOSDEM gophers!")
	fmt.Printf(b.String())

	var end runtime.MemStats
	runtime.ReadMemStats(&end)
	fmt.Printf("allocated %d bytes\n", end.Alloc-start.Alloc)
}
