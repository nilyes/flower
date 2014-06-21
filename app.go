package main

import (
	"flower/routers"
	"github.com/go-martini/martini"

	"github.com/martini-contrib/render"
)

func main() {
	m := martini.Classic()
	m.Use(martini.Static("static"))
	m.Use(render.Renderer(render.Options{
		Extensions: []string{".html"},
	}))

	m.Get("/", routers.MainGetHandler)

	m.Run()
}
