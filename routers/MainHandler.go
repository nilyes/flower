package routers

import (
	"flower/models"
	"fmt"

	"github.com/martini-contrib/render"
)

func MainGetHandler(r render.Render) {

	if usr, err := models.GetUserByEmail("insion@sudochina.com"); err != nil {
		fmt.Println(err)
	} else {
		r.HTML(200, "main", usr)
	}
}
