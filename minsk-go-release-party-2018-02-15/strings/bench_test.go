package main_test

import (
	"bytes"
	"fmt"
	"strings"
	"testing"
)

type writer interface {
	Write([]byte) (int, error)
	String() string
}

var out string

func write(w writer) {
	// START OMIT
	for i := 0; i < 10000; i++ {
		fmt.Fprintf(w, "😊")
		out = w.String()
	}
	// END OMIT
}

func BenchmarkBuffer(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var b bytes.Buffer
		write(&b)
	}
}

func BenchmarkBuilder(b *testing.B) {
	for i := 0; i < b.N; i++ {
		var b strings.Builder
		write(&b)
	}
}
