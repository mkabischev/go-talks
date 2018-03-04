package main

import (
	"context"
	"net/http"

	"github.com/opentracing/opentracing-go"
	"github.com/opentracing/opentracing-go/ext"
)

// SPAN1 OMIT
func foo() {
	sp := opentracing.StartSpan("some_operation") // HLx
	defer sp.Finish()

	// ...

}

// SPAN2 OMIT

// SPAN3 OMIT
func bar(parent opentracing.Span) {
	sp := opentracing.StartSpan(
		"another_operation",
		opentracing.ChildOf(parent.Context()), // HLx
	)
	defer sp.Finish()

	// ..

}

// SPAN4 OMIT

// SPAN5 OMIT
func doSmth(ctx context.Context) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "operation_name") // HLx
	defer span.Finish()

	// ..

}

// SPAN6 OMIT

// SPAN7 OMIT
func makeSomeRequest(ctx context.Context) {
	span := opentracing.SpanFromContext(ctx) // HLx
	httpClient := &http.Client{}
	httpReq, _ := http.NewRequest("GET", "http://example.com/", nil)

	opentracing.GlobalTracer().Inject( // HLx
		span.Context(), // HLx
		opentracing.HTTPHeaders, // HLx
		opentracing.HTTPHeadersCarrier(httpReq.Header)) // HLx

	resp, err := httpClient.Do(httpReq)

	// ..
}
// SPAN8 OMIT

func abc() {
	// SPAN9 OMIT
	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		wireContext, err := opentracing.GlobalTracer().Extract(  // HLx
			opentracing.HTTPHeaders, // HLx
			opentracing.HTTPHeadersCarrier(req.Header)) // HLx
		if err != nil {
			// Optionally record something about err here
		}

		// Create the span referring to the RPC client if available.
		// If wireContext == nil, a root span will be created.
		serverSpan := opentracing.StartSpan( // HLx
			"some_operation", // HLx
			ext.RPCServerOption(wireContext)) // HLx

		defer serverSpan.Finish()

		ctx := opentracing.ContextWithSpan(context.Background(), serverSpan)

		// ..
	}
	// SPAN10 OMIT
}
