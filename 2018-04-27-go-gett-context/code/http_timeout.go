package main

import (
	"context"
	"net/http"
	"time"
)

func main() {
	// START OMIT
	ctx, cancel := context.WithTimeout(context.Background(), 50*time.Millisecond)
	defer cancel()

	req, _ := http.NewRequest("GET", "http://localhost:3333", nil)
	req = req.WithContext(ctx)

	_, err := http.DefaultClient.Do(req) // "Get http://localhost:3333: context deadline exceeded"
	// END OMIT
}
