package main

import (
	"context"
	"fmt"
	"net/http"
	"time"
)

func main() {
	// START OMIT
	deadline := time.Now().Add(50 * time.Millisecond)                   // HLx
	ctx, cancel := context.WithDeadline(context.Background(), deadline) // HLx
	defer cancel()

	req, _ := http.NewRequest("GET", "http://localhost:3333", nil)
	req = req.WithContext(ctx)
	req.Header.Add("X-Deadline", deadline.Format(time.RFC3339)) // HLx

	res, err := http.DefaultClient.Do(req)
	// END OMIT

	fmt.Println(res, err)
}
