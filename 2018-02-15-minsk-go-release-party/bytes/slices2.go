package main

import "fmt"

func main() {
	// START OMIT
	text := []byte("Hello FOSDEM!")
	fmt.Printf("text:  %s", desc(text))

	hello := text[0:5:5] // HL
	fmt.Printf("hello: %s", desc(hello))

	hello = append(hello, '#')
	fmt.Printf("hello: %s", desc(hello))

	fmt.Printf("text:  %s", desc(text))
	// END OMIT
}

func desc(b []byte) string {
	return fmt.Sprintf("len: %2d | cap: %2d | %q\n", len(b), cap(b), b)
}
