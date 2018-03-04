package main

import (
	"flag"
)

func main() {
	// START OMIT
	stuff := flag.Int("s", 0, "some other stuff\nit's long to explain")
	z := flag.Int("z", 42, "some number")
	flag.Parse()
	// END OMIT
	flag.PrintDefaults()
	_, _ = stuff, z
}
