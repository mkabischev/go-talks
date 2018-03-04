package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	res, err := http.Get("http://go-meetups.appspot.com/api/groups")
	if err != nil {
		log.Fatal(err)
	}
	if res.StatusCode != http.StatusOK {
		log.Fatal(res.Status)
	}
	var data struct {
		Groups []struct{}
	}
	if err := json.NewDecoder(res.Body).Decode(&data); err != nil {
		log.Fatal(err)
	}
	fmt.Printf("got %d groups\n", len(data.Groups))
}
