package main

import (
	"context"

	"junolab.net/ms/core/logger"
)

type Logger interface{}

// START OMIT

type key int

const loggerKey key = 0

func ToContext(ctx context.Context, l Logger) context.Context {
	return context.WithValue(ctx, loggerKey, l)
}

func FromContext(ctx context.Context) Logger {
	return ctx.Value(loggerKey).(Logger)
}

// END OMIT

type Request struct{}
type Response struct{}

// HANDLER_START OMIT

func SomeHandler(ctx context.Context, r Request) (*Response, error) {
	l := logger.FromContext(ctx)  // HLx
	l.Debug("something happened") // HLx

	// ...

}

// HANDLER_END OMIT

// PREPARE_START OMIT
l = l.WithField("request_id", NewRequestID()) // HLx
ctx := logger.WithContext(ctx, l) // HLx

// ...

res, err := SomeHandler(ctx, req)

// PREPARE_END OMIT
