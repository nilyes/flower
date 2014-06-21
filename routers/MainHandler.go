package routers

import (
	"github.com/martini-contrib/render"
)

func MainGetHandler(r render.Render) {
	r.HTML(200, "main", nil)
}
