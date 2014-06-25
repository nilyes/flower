package routers

import (
	"github.com/insionng/martini"
)

func MainGetHandler(ctx *martini.Cotex) {
	ctx.Data["Version"] = "1.0.1"

	ctx.SetSecureCookie("flower", ctx.Data["Version"].(string), 9600)
	ctx.HTML(200, "main", ctx.Data)
}
