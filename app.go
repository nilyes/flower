package main

import (
	"flower/routers"
	"github.com/go-martini/martini"

	"github.com/martini-contrib/gzip"
	"github.com/martini-contrib/render"
)

func main() {
	martini.Env = martini.Prod

	m := martini.Classic()
	m.Use(gzip.All())
	m.Use(martini.Static("static"))
	m.Use(render.Renderer(render.Options{
		Extensions: []string{".html"},
	}))

	m.Get("/", routers.MainGetHandler)
	m.Get("/topic/1/", routers.TopicGetHandler)

	m.Run()
}
