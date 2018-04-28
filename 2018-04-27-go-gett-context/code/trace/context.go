package trace

import (
	"context"
)

type key int

const requestID key = 0

func NewContext(ctx context.Context, id string) context.Context {
	return context.WithValue(ctx, requestID, id)
}

func FromContext(ctx context.Context) (id string, ok bool) {
	id, ok = ctx.Value(requestID).(string)

	return id, ok
}
