package main

import (
	"context"
	"net/http"
	"time"
)

// START OMIT
func someHandler(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	deadline, ok := ctx.Deadline() // HLx
	if ok {
		ctx, cancel := context.WithDeadline(ctx, deadline) // HLx
		defer cancel()
	} else {
		deadline = time.Now().Add(50 * time.Millisecond) // HLx
	}

	req, _ := http.NewRequest("GET", "http://localhost:3333", nil)
	req = req.WithContext(ctx)
	req.Header.Add("X-Deadline", deadline.Format(time.RFC3339))
}

// END OMIT
