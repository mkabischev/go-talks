package main

import (
	"log"
	"os"
	"text/template"
)

// START OMIT
var tmpl = template.Must(template.New("example").Funcs(template.FuncMap{
	"even": func(x int) bool { return x%2 == 0 },
}).Parse(`
{{ range . }}
	{{ . }} 
	{{ if even . -}}
		even
		{{ continue }} // HL
	{{ end -}}
	odd
	{{ if eq . 5 }}
		{{ break }} // HL
	{{ end }}
{{ end }}
`))

// END OMIT

func main() {
	if err := tmpl.Execute(os.Stdout, []int{1, 2, 3, 4, 5, 6}); err != nil {
		log.Fatal(err)
	}
}
