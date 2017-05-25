package main

import (
	"context"
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/opentracing-contrib/go-stdlib/nethttp"
	"github.com/opentracing/opentracing-go"
	"github.com/opentracing/opentracing-go/ext"
	otlog "github.com/opentracing/opentracing-go/log"
	"github.com/uber/jaeger-client-go"
	"github.com/uber/jaeger-client-go/transport/zipkin"
)

func doWithTrace(tracer opentracing.Tracer) {
	// START OMIT
	// nethttp.Transport from go-stdlib will do the tracing
	c := &http.Client{Transport: &nethttp.Transport{}} // HLx

	// create a top-level span to represent full work of the client
	span := tracer.StartSpan("get http://example.com")
	defer span.Finish()
	ctx := opentracing.ContextWithSpan(context.Background(), span)

	req, _ := http.NewRequest("GET", "http://example.com/", nil)

	req = req.WithContext(ctx)
	//wrap the request in nethttp.TraceRequest
	req, ht := nethttp.TraceRequest(tracer, req) // HLx
	defer ht.Finish()                            // HLx

	res, err := c.Do(req)
	// END OMIT
	if err != nil {
		onError(span, err)
		return
	}
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		onError(span, err)
		return
	}
	fmt.Printf("Received result: %s\n", string(body))

	time.Sleep(1 * time.Second)
}

func onError(span opentracing.Span, err error) {
	// handle errors by recording them in the span
	span.SetTag(string(ext.Error), true)
	span.LogKV(otlog.Error(err))
}

var (
	zipkinURL = flag.String("url",
		"http://localhost:9411/api/v1/spans", "Zipkin server URL")
	serverPort = flag.String("port", "8000", "server port")
	actorKind  = flag.String("actor", "server", "server or client")
)

func main() {
	flag.Parse()

	// Jaeger tracer can be initialized with a transport that will
	// report tracing Spans to a Zipkin backend
	transport, _ := zipkin.NewHTTPTransport(
		*zipkinURL,
		zipkin.HTTPBatchSize(1),
		zipkin.HTTPLogger(jaeger.StdLogger),
	)
	// create Jaeger tracer
	tracer, closer := jaeger.NewTracer(
		"some_service",
		jaeger.NewConstSampler(true), // sample all traces
		jaeger.NewRemoteReporter(transport, nil),
	)

	doWithTrace(tracer)

	// Close the tracer to guarantee that all spans that could
	// be still buffered in memory are sent to the tracing backend
	closer.Close()
}
