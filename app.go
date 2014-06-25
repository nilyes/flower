package main

import (
	"flower/routers"

	"github.com/insionng/martini"
)

func main() {

	martini.Env = martini.Prod

	m := martini.Classic()
	m.Use(martini.Gzip())
	m.Use(martini.ContextRender("2fd4e1c67a2d28fced849ee1bb76e7391b93eb12", martini.RenderOptions{
		Extensions: []string{".html"},
	}))

	m.Get("/", routers.MainGetHandler)
	m.Get("/:node/:id/", routers.TopicGetHandler)

	m.NotFound(func() string {
		return "shit!"
	})
	m.Run()
}
