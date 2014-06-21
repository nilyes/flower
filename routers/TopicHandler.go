package routers

import (
	"github.com/martini-contrib/render"
)

func TopicGetHandler(r render.Render) {
	r.HTML(200, "topic", nil)
}
