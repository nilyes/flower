package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func handler(w http.ResponseWriter, r *http.Request) {
	defer func() {
		e := recover()
		if e != nil {
			fmt.Println("出现问题：", e) //打印出错误
		}
	}()

	log.Println(r.RequestURI)
	r.RequestURI = "" //不加这条会异常

	resp, err := http.DefaultClient.Do(r)

	if err != nil {
		log.Println(err)
		return
	}
	defer resp.Body.Close()
	for k, v := range resp.Header {
		for _, vv := range v {
			w.Header().Add(k, vv)
		}
	}
	w.WriteHeader(resp.StatusCode)

	for _, c := range resp.Cookies() {
		//log.Println("cookie: ", c.Raw)
		http.SetCookie(w, c)
		//w.Header().Add("Set-Cookie", c.Raw)
	}

	result, err := ioutil.ReadAll(resp.Body)
	if err != nil && err != io.EOF {
		log.Println(err)
		return
	}
	w.Write(result)
}

func main() {
	http.HandleFunc("/", handler)
	log.Println("Start serving on port 8080")
	http.ListenAndServe(":8080", nil)
	os.Exit(0)
}
