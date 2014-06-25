package routers

import (
	"github.com/insionng/martini"
)

func TopicGetHandler(ctx *martini.Cotex, params martini.Params) {
	node := params["node"]
	id := params["id"]

	ctx.Data["id"] = id
	ctx.Data["node"] = node

	ctx.HTML(200, "topic", ctx.Data)
}

/*
<div>
      <ul class="kaomoji clearfix">
        <li>☆*:.｡. o(≧▽≦)o .｡.:*☆</li>
        <li>_(:з」∠)_</li>
        <li>♪(´ε｀ )</li>
        <li>ψ(｀∇´)ψ</li>
        <li>(－_－＃)</li>
        <li>(=´∀｀)人(´∀｀=)</li>
        <li>\(//∇//)\</li>
        <li>♪(*^^)o∀*∀o(^^*)♪</li>
        <li>(((o(*ﾟ▽ﾟ*)o)))</li>
        <li>(´･_･`)</li>
        <li>σ(^_^;)</li>
        <li>( *｀ω´)</li>
        <li>(ﾉ｀Д´)ﾉ</li>
        <li>(( _ _ ))..zzzZZ</li>
        <li>(￣▽￣)</li>
        <li>ヽ(｀Д´#)ﾉ</li>
        <li>((((；ﾟДﾟ)))))))</li>
        <li>(&gt;_&lt;)</li>
        <li>(T_T)</li>
        <li>( T_T)＼(^-^ )</li>
        <li>ε=ε=ε=ε=ε=ε=┌(;￣◇￣)┘</li>
      </ul>
    </div>
*/
