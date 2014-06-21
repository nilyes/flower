!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
    var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = "".trim,
    l = {},
    m = "1.11.0",
    n = function(a, b) {
        return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
        h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d],
        c = e[d],
        g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a: []) : f = a && n.isPlainObject(a) ? a: {},
        g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    },
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray ||
        function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return ! 1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(c) {
                return ! 1
            }
            if (l.ownLast) for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object": typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript ||
            function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
            f = a.length,
            g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: k && !k.call("\ufeff\xa0") ?
        function(a) {
            return null == a ? "": k.call(a)
        }: function(a) {
            return null == a ? "": (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return - 1
        },
        merge: function(a, b) {
            var c = +b.length,
            d = 0,
            e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
            g = a.length,
            h = s(a),
            i = [];
            if (h) for (; g > f; f++) d = b(a[f], f, c),
            null != d && i.push(d);
            else for (f in a) d = b(a[f], f, c),
            null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f),
            n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            },
            e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return + new Date
        },
        support: l
    }),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length,
        c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
        t = a.document,
        u = 0,
        v = 0,
        w = eb(),
        x = eb(),
        y = eb(),
        z = function(a, b) {
            return a === b && (j = !0),
            0
        },
        A = "undefined",
        B = 1 << 31,
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = D.indexOf ||
        function(a) {
            for (var b = 0,
            c = this.length; c > b; b++) if (this[b] === a) return b;
            return - 1
        },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        M = L.replace("w", "w#"),
        N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
        O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(O),
        U = new RegExp("^" + M + "$"),
        V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = /'|\\/g,
        ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        bb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes),
            D[t.childNodes.length].nodeType
        } catch(cb) {
            G = {
                apply: D.length ?
                function(a, b) {
                    F.apply(a, H.call(b))
                }: function(a, b) {
                    var c = a.length,
                    d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b: t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a)) if (h = f[1]) {
                    if (9 === i) {
                        if (g = b.getElementById(h), !g || !g.parentNode) return d;
                        if (g.id === h) return d.push(g),
                        d
                    } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g),
                    d
                } else {
                    if (f[2]) return G.apply(d, b.getElementsByTagName(a)),
                    d;
                    if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)),
                    d
                }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a),
                        (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q),
                        q = "[id='" + q + "'] ",
                        j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b,
                        v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)),
                        d
                    } catch(w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }
        function eb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function fb(a) {
            return a[s] = !0,
            a
        }
        function gb(a) {
            var b = l.createElement("div");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function hb(a, b) {
            var c = a.split("|"),
            e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }
        function ib(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function lb(a) {
            return fb(function(b) {
                return b = +b,
                fb(function(c, d) {
                    var e, f = a([], c.length, b),
                    g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {},
        f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        },
        k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a: t,
            g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload",
            function() {
                k()
            },
            !1) : g.attachEvent && g.attachEvent("onunload",
            function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")),
                !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s,
                !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            },
            d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ?
            function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            d.find.CLASS = c.getElementsByClassName &&
            function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            },
            p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>",
                a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"),
                a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"),
                q.call(a, "[s!='']:x"),
                p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return ! 0;
                return ! 1
            },
            z = b ?
            function(a, b) {
                if (a === b) return j = !0,
                0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d: (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            }: function(a, b) {
                if (a === b) return j = !0,
                0;
                var c, d = 0,
                f = a.parentNode,
                g = b.parentNode,
                h = [a],
                k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            },
            e) : l
        },
        db.matches = function(a, b) {
            return db(a, null, null, b)
        },
        db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return db(b, l, null, [a]).length > 0
        },
        db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a),
            r(a, b)
        },
        db.attr = function(a, b) { (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
            f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f: c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value: null
        },
        db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        db.uniqueSort = function(a) {
            var b, d = [],
            e = 0,
            f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null,
            a
        },
        e = db.getText = function(a) {
            var b, c = "",
            d = 0,
            f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        },
        d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb),
                    a[3] = (a[4] || a[5] || "").replace(ab, bb),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null: (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b: b ? (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice( - c.length) === c: "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-": !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}),
                                j = k[a] || [],
                                n = j[0] === u && j[1],
                                m = j[0] === u && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [u, n, m];
                                    break
                                }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                        g = f.length;
                        while (g--) d = I.call(a, f[g]),
                        a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                    c = [],
                    d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                        h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a),
                    a = a.replace(ab, bb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = n ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = jb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = kb(b);
        function nb() {}
        nb.prototype = d.filters = d.pseudos,
        d.setFilters = new nb;
        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) { (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                c = !1,
                (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) ! (e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length: h ? db.error(a) : x(a, i).slice(0)
        }
        function pb(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function qb(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = v++;
            return b.first ?
            function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return ! 0
                }
            }
        }
        function rb(a) {
            return a.length > 1 ?
            function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)),
            e && !e[s] && (e = tb(e, f)),
            fb(function(f, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                q = !a || !f && b ? p: sb(p, m, a, h, i),
                r = c ? e || (f ? a: o || d) ? [] : g: q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : G.apply(g, r)
            })
        }
        function ub(a) {
            for (var b, c, e, f = a.length,
            g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                return a === b
            },
            i, !0), l = qb(function(a) {
                return I.call(b, a) > -1
            },
            i, !0), m = [function(a, c, d) {
                return ! g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > j; j++) if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
            else {
                if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                    for (e = ++j; f > e; e++) if (d.relative[a[e].type]) break;
                    return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                        value: " " === a[j - 2].type ? "*": ""
                    })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                }
                m.push(c)
            }
            return rb(m)
        }
        function vb(a, b) {
            var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, i, j, k) {
                var m, n, o, p = 0,
                q = "0",
                r = f && [],
                s = [],
                t = h,
                v = f || e && d.find.TAG("*", k),
                w = u += null == t ? 1 : Math.random() || .1,
                x = v.length;
                for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                    if (e && m) {
                        n = 0;
                        while (o = a[n++]) if (o(m, g, i)) {
                            j.push(m);
                            break
                        }
                        k && (u = w)
                    }
                    c && ((m = !o && m) && p--, f && r.push(m))
                }
                if (p += q, c && q !== p) {
                    n = 0;
                    while (o = b[n++]) o(r, s, g, i);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j));
                        s = sb(s)
                    }
                    G.apply(j, s),
                    k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                }
                return k && (u = w, h = t),
                r
            };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = y[a + " "];
            if (!f) {
                b || (b = ob(a)),
                c = b.length;
                while (c--) f = ub(b[c]),
                f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };
        function wb(a, b, c) {
            for (var d = 0,
            e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }
        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f),
                        e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b),
            e
        }
        return c.sortStable = s.split("").sort(z).join("") === s,
        c.detectDuplicates = !!j,
        k(),
        c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }),
        gb(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width",
        function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || hb("value",
        function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J,
        function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        db
    } (a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a,
        function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    },
    n.fn.extend({
        find: function(a) {
            var b, c = [],
            d = this,
            e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++) if (n.contains(d[b], this)) return ! 0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a: a,
            c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !! x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    B = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return ! b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: z, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = z.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return y.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = z,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    B.prototype = n.fn,
    y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
    D = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
            e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e),
            e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
            d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (n.contains(this, c[b])) return ! 0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    function E(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: n.merge([], a.childNodes)
        }
    },
    function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var F = /\S+/g,
    G = {};
    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({},
        a);
        var b, c, d, e, f, g, h = [],
        i = !a.once && [],
        j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        },
        k = {
            add: function() {
                if (h) {
                    var d = h.length; !
                    function f(b) {
                        n.each(b,
                        function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    } (arguments),
                    b ? e = h.length: c && (g = d, j(c))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments,
                function(a, c) {
                    var d;
                    while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1),
                    b && (e >= d && e--, f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return ! h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return ! i
            },
            fireWith: function(a, c) {
                return ! h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! d
            }
        };
        return k
    },
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b,
                        function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            n.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0,
            c = d.call(arguments),
            e = c.length,
            f = 1 !== e || a && n.isFunction(a.promise) ? e: 0,
            g = 1 === f ? a: n.Deferred(),
            h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            },
            i,
            j,
            k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    },
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++:n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait: !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0,
                a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });
    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }
    function K() { (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I) if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
        else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1),
        a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K),
            a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch(d) {}
            c && c.doScroll && !
            function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch(a) {
                        return setTimeout(e, 50)
                    }
                    J(),
                    n.ready()
                }
            } ()
        }
        return I.promise(b)
    };
    var L = "undefined",
    M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }),
    function() {
        var a = z.createElement("div");
        if (null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch(b) {
                l.deleteExpando = !1
            }
        }
        a = null
    } (),
    n.acceptData = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null: +c + "" === c ? +c: N.test(c) ? n.parseJSON(c) : c
                } catch(e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
            i = a.nodeType,
            j = i ? n.cache: a,
            k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++:h),
            j[k] || (j[k] = i ? {}: {
                toJSON: n.noop
            }),
            ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
            g = j[k],
            e || (g.data || (g.data = {}), g = g.data),
            void 0 !== d && (g[n.camelCase(b)] = d),
            "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g,
            f
        }
    }
    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
            g = f ? n.cache: a,
            h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name,
                    0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = n._queueHooks(a, b),
            g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = n.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0),
            a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    },
    W = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
        i = a.length,
        j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
    },
    X = /^(?:checkbox|radio)$/i; !
    function() {
        var a = z.createDocumentFragment(),
        b = z.createElement("div"),
        c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick",
        function() {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch(d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    } (),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b,
        (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    } ();
    var Y = /^(?:input|select|textarea)$/i,
    Z = /^key/,
    $ = /^(?:mouse|contextmenu)|click/,
    _ = /^(?:focusinfocus|focusoutblur)$/,
    ab = /^([^.]*)(?:\.(.+)|)$/;
    function bb() {
        return ! 0
    }
    function cb() {
        return ! 1
    }
    function db() {
        try {
            return z.activeElement
        } catch(a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                },
                k.elem = a),
                b = (b || "").match(F) || [""],
                h = b.length;
                while (h--) f = ab.exec(b[h]) || [],
                o = q = f[1],
                p = (f[2] || "").split(".").sort(),
                o && (j = n.event.special[o] || {},
                o = (e ? j.delegateType: j.bindType) || o, j = n.event.special[o] || {},
                l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                },
                i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""],
                j = b.length;
                while (j--) if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {},
                    o = (d ? l.delegateType: l.bindType) || o,
                    m = k[o] || [],
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    i = f = m.length;
                    while (f--) g = m[f],
                    !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
            p = j.call(b, "type") ? b.type: b,
            q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b: new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h),
                    l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i: k.bindType || p,
                f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"),
                f && f.apply(h, c),
                f = g && h[g],
                f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null),
                    n.event.triggered = p;
                    try {
                        d[p]()
                    } catch(r) {}
                    n.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
            i = d.call(arguments),
            j = (n._data(this, "events") || {})[a.type] || [],
            k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f],
                c = d.selector + " ",
                void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length),
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                })
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
            f = a,
            g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks: Z.test(e) ? this.keyHooks: {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new n.Event(f),
            b = d.length;
            while (b--) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || z),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement: g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = z.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    },
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb: cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    },
    n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb,
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb,
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit",
            function(a) {
                var b = a.target,
                c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form: void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit",
                function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change",
            function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change",
                function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !Y.test(this.nodeName)
        }
    }),
    l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a),
                g.apply(this, arguments)
            },
            d.guid = g.guid || (g.guid = n.guid++)),
            this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
            c === !1 && (c = cb),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    function eb(a) {
        var b = fb.split("|"),
        c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gb = / jQuery\d+="(?:null|\d+)"/g,
    hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
    ib = /^\s+/,
    jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    kb = /<([\w:]+)/,
    lb = /<tbody/i,
    mb = /<|&#?\w+;/,
    nb = /<(?:script|style|link)/i,
    ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pb = /^$|\/(?:java|ecma)script/i,
    qb = /^true\/(.*)/,
    rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    tb = eb(z),
    ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option,
    sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead,
    sb.th = sb.td;
    function vb(a, b) {
        var c, d, e = 0,
        f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) ! b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }
    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
            g = n._data(b, f),
            h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({},
            g.data))
        }
    }
    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b) if (c) for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
            else Bb(a, f);
            return d = vb(f, "script"),
            d.length > 0 && Ab(d, !i && vb(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length,
            o = eb(b), p = [], q = 0; m > q; q++) if (f = a[q], f || 0 === f) if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
            else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")),
                i = (kb.exec(f) || ["", ""])[1].toLowerCase(),
                k = sb[i] || sb._default,
                h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2],
                e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h: h.firstChild,
                    e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes),
                h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h),
            l.appendChecked || n.grep(vb(p, "input"), wb),
            q = 0;
            while (f = p[q++]) if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                e = 0;
                while (f = h[e++]) pb.test(f.type || "") && c.push(f)
            }
            return h = null,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0,
            i = n.expando,
            j = n.cache,
            k = l.deleteExpando,
            m = n.event.special; null != (d = a[h]); h++) if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }),
    n.fn.extend({
        text: function(a) {
            return W(this,
            function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)),
            c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this,
            function(a) {
                var b = this[0] || {},
                c = 0,
                d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (! ("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {},
                        1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(e) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments,
            function(b) {
                a = this.parentNode,
                n.cleanData(vb(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this: this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
            k = this.length,
            m = this,
            o = k - 1,
            p = a[0],
            q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())),
                d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i,
                j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))),
                b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j],
                pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0,
            e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this: this.clone(!0),
            n(g[d])[b](c),
            f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};
    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
        e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display: n.css(d[0], "display");
        return d.detach(),
        e
    }
    function Gb(a) {
        var b = z,
        c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c),
        c
    } !
    function() {
        var a, b, c = z.createElement("div"),
        d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "float:left;opacity:.5",
        l.opacity = /^0.5/.test(a.style.opacity),
        l.cssFloat = !!a.style.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        l.clearCloneStyle = "content-box" === c.style.backgroundClip,
        a = c = null,
        l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                c = z.createElement("div"),
                e = z.createElement("div"),
                a.appendChild(c).appendChild(e),
                b = !1,
                typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth),
                a.removeChild(c),
                a = c = e = null
            }
            return b
        }
    } ();
    var Hb = /^margin/,
    Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Jb,
    Kb,
    Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    },
    Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
        void 0 === g ? g: g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    },
    Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em": g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)),
        void 0 === g ? g: g + "" || "auto"
    });
    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    } !
    function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
        i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        b = h.getElementsByTagName("a")[0],
        b.style.cssText = "float:left;opacity:.5",
        l.opacity = /^0.5/.test(b.style.opacity),
        l.cssFloat = !!b.style.cssFloat,
        h.style.backgroundClip = "content-box",
        h.cloneNode(!0).style.backgroundClip = "",
        l.clearCloneStyle = "content-box" === h.style.backgroundClip,
        b = h = null,
        n.extend(l, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"),
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                a = z.createElement("div"),
                a.style.cssText = i,
                f.appendChild(a).appendChild(e),
                e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                b = e.getElementsByTagName("td"),
                b[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                d = 0 === b[0].offsetHeight,
                b[0].style.display = "",
                b[1].style.display = "none",
                c = d && 0 === b[0].offsetHeight,
                f.removeChild(a),
                e = f = null,
                c
            },
            boxSizing: function() {
                return null == d && k(),
                d
            },
            boxSizingReliable: function() {
                return null == e && k(),
                e
            },
            pixelPosition: function() {
                return null == f && k(),
                f
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"),
                    d = z.createElement("div"),
                    c.style.cssText = i,
                    b.appendChild(c).appendChild(d),
                    e = d.appendChild(z.createElement("div")),
                    e.style.cssText = d.style.cssText = j,
                    e.style.marginRight = e.style.width = "0",
                    d.style.width = "1px",
                    g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight),
                    b.removeChild(c)
                }
                return g
            }
        });
        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    } (),
    n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f],
        a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
    Ob = /opacity\s*=\s*([^)]*)/,
    Pb = /^(none|table(?!-c[ea]).+)/,
    Qb = new RegExp("^(" + T + ")(.*)$", "i"),
    Rb = new RegExp("^([+-])=(" + T + ")", "i"),
    Sb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Tb = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Ub = ["Webkit", "O", "Moz", "ms"];
    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Ub.length;
        while (e--) if (b = Ub[e] + c, b in a) return b;
        return d
    }
    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c: n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + U[f], !0, e)),
        d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Zb(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = Jb(a),
        g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "",
                    i[b] = c
                } catch(j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get" in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Kb(a, b, d)),
            "normal" === f && b in Tb && (f = Tb[b]),
            "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"],
    function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb,
                function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Mb(l.reliableMarginRight,
    function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        },
        Kb, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }),
    n.fn.extend({
        css: function(a, b) {
            return W(this,
            function(a, b, c) {
                var d, e, f = {},
                g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b,
    $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : $b.propHooks._default.set(this),
            this
        }
    },
    $b.prototype.init.prototype = $b.prototype,
    $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        }
    },
    n.fx = $b.prototype.init,
    n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
    cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    dc = /queueHooks$/,
    ec = [jc],
    fc = {
        "*": [function(a, b) {
            var c = this.createTween(a, b),
            d = c.cur(),
            e = cc.exec(b),
            f = e && e[3] || (n.cssNumber[a] ? "": "px"),
            g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do h = h || ".5",
                g /= h,
                n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }]
    };
    function gc() {
        return setTimeout(function() {
            _b = void 0
        }),
        _b = n.now()
    }
    function hc(a, b) {
        var c, d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e],
        d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
        o = {},
        p = a.style,
        q = a.nodeType && V(a),
        r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], bc.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide": "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0
            }
            o[d] = r && r[d] || n.style(a, d)
        }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m),
            d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function lc(a, b, c) {
        var d, e, f = 0,
        g = ec.length,
        h = n.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: n.extend({},
            b),
            opts: n.extend(!0, {
                specialEasing: {}
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: _b || gc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++) if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            fc[c] = fc[c] || [],
            fc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? ec.unshift(a) : ec.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({},
        a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        },
        d
    },
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
            f = n.speed(b, c, d),
            g = function() {
                var b = lc(this, n.extend({},
                a), f); (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = n.timers,
                g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = n.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: hc("show"),
        slideUp: hc("hide"),
        slideToggle: hc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers,
        c = 0;
        for (_b = n.now(); c < b.length; c++) a = b[c],
        a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        _b = void 0
    },
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    },
    n.fx.interval = 13,
    n.fx.start = function() {
        ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    },
    n.fx.stop = function() {
        clearInterval(ac),
        ac = null
    },
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a: a,
        b = b || "fx",
        this.queue(b,
        function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
    function() {
        var a, b, c, d, e = z.createElement("div");
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = e.getElementsByTagName("a")[0],
        c = z.createElement("select"),
        d = c.appendChild(z.createElement("option")),
        b = e.getElementsByTagName("input")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== e.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = d.selected,
        l.enctype = !!z.createElement("form").enctype,
        c.disabled = !0,
        l.optDisabled = !d.disabled,
        b = z.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value,
        a = b = c = d = e = null
    } ();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a),
                this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": n.isArray(e) && (e = n.map(e,
                    function(a) {
                        return null == a ? "": a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "": c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b: n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                    f = n.makeArray(b),
                    g = e.length;
                    while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0
                    } catch(h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"],
    function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
    qc = /^(?:checked|selected)$/i,
    rc = l.getSetAttribute,
    sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc: nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e: (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e: (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(F);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c,
            n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
            a.removeAttribute(rc ? c: d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ?
        function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f),
            e
        }: function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }),
    rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b: void 0
        }
    },
    pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value: null
    },
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value: void 0
        },
        set: nc.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"],
    function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
    uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch(b) {}
            })
        }
    }),
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a),
            f && (b = n.propFix[b] || b, e = n.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    l.hrefNormalized || n.each(["href", "src"],
    function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
            i = this.length,
            j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d),
                c.className !== g && (c.className = g)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
            i = this.length,
            j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(F) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "",
                c.className !== g && (c.className = g)
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ?
            function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            }: function() {
                if ("string" === c) {
                    var b, d = 0,
                    e = n(this),
                    f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return ! 0;
            return ! 1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
    xc = /\?/,
    yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
        e = n.trim(b + "");
        return e && !n.trim(e.replace(yc,
        function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a: (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    },
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch(e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    };
    var zc, Ac, Bc = /#.*$/,
    Cc = /([?&])_=[^&]*/,
    Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Fc = /^(?:GET|HEAD)$/,
    Gc = /^\/\//,
    Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ic = {},
    Jc = {},
    Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch(Lc) {
        Ac = z.createElement("a"),
        Ac.href = "",
        Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];
    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c)) while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Nc(a, b, c, d) {
        var e = {},
        f = a === Jc;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [],
            function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a: c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
        i = a.dataTypes;
        while ("*" === i[0]) i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({},
            b),
            l = k.context || k,
            m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
            o = n.Deferred(),
            p = n.Callbacks("once memory"),
            q = k.statusCode || {},
            r = {},
            s = {},
            t = 0,
            u = "canceled",
            v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                    else v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80": "443")) === (zc[3] || ("http:" === zc[1] ? "80": "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global,
            h && 0 === n.active++&&n.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Fc.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&": "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&": "?") + "_=" + wc++)),
            k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01": "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1,
                h && m.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                },
                k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch(w) {
                    if (! (2 > t)) throw w;
                    x( - 1, w)
                }
            } else x( - 1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent": 304 === a ? x = "notmodified": (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess": "ajaxError", [v, k, j ? r: s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"],
    function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0),
            n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ?
            function(b) {
                n(this).wrapInner(a.call(this, b))
            }: function() {
                var b = n(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    },
    n.expr.filters.visible = function(a) {
        return ! n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
    Sc = /\[\]$/,
    Tc = /\r?\n/g,
    Uc = /^(?:submit|button|image|reset|file)$/i,
    Vc = /^(?:input|select|textarea|keygen)/i;
    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b,
        function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "": b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    },
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null: n.isArray(c) ? n.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    }: $c;
    var Xc = 0,
    Yc = {},
    Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload",
    function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }),
    l.cors = !!Zc && "withCredentials" in Zc,
    Zc = l.ajax = !!Zc,
    Zc && n.ajaxTransport(function(a) { });
    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    n.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    },
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
    bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url": "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        },
        b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        },
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }), "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1),
        b = b || z;
        var d = v.exec(a),
        e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
        h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)),
        n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c &&
        function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }),
        this
    },
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;
    function ed(a) {
        return n.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
            l = n(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                top: 0,
                left: 0
            },
            e = this[0],
            f = e && e.ownerDocument;
            if (f) return b = f.documentElement,
            n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this,
            function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e: n(f).scrollTop()) : a[d] = e)
            },
            a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"],
    function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition,
        function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px": c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin": "border");
                return W(this,
                function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                },
                b, f ? d: void 0, f, null)
            }
        })
    }),
    n.fn.size = function() {
        return this.length
    },
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return n
    });
    var fd = a.jQuery,
    gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd),
        b && a.jQuery === n && (a.jQuery = fd),
        n
    },
    typeof b === L && (a.jQuery = a.$ = n),
    n
});
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
function(e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }
    function a(t, a, i, o) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, a, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(o),
                    i
                },
                set: function(e) {
                    r(o),
                    i = e
                }
            }),
            n
        } catch(s) {}
        e._definePropertyBroken = !0,
        t[a] = i
    }
    var i = {};
    e.migrateWarnings = [],
    !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"),
    e.migrateTrace === n && (e.migrateTrace = !0),
    e.migrateReset = function() {
        i = {},
        e.migrateWarnings.length = 0
    },
    "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
    s = e.attr,
    u = e.attrHooks.value && e.attrHooks.value.get ||
    function() {
        return null
    },
    c = e.attrHooks.value && e.attrHooks.value.set ||
    function() {
        return n
    },
    l = /^(?:input|button)$/i,
    d = /^[238]$/,
    p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {},
    "jQuery.attrFn is deprecated"),
    e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(),
        g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o: e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
            get: function(t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())),
                r
            }
        },
        f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    },
    e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value: null)
        },
        set: function(e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }
    };
    var g, h, v = e.fn.init,
    m = e.parseJSON,
    y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    },
    e.fn.init.prototype = e.fn,
    e.parseJSON = function(e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    },
    e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    },
    e.browser || (g = e.uaMatch(navigator.userAgent), h = {},
    g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h),
    a(e, "browser", e.browser, "jQuery.browser is deprecated"),
    e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this),
        t.superclass = this,
        t.fn = t.prototype = this(),
        t.fn.constructor = t,
        t.sub = this.sub,
        t.fn.init = function(r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)),
            e.fn.init.call(this, r, a, n)
        },
        t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"),
        t
    },
    e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
        var a, i, o = this[0];
        return ! o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i,
    w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        w.apply(this, arguments)
    },
    e.clean || (e.clean = function(t, a, i, o) {
        a = a || document,
        a = !a.nodeType && a[0] || a,
        a = a.ownerDocument || a,
        r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i) for (c = function(e) {
            return ! e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
        },
        s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add,
    x = e.event.remove,
    k = e.event.trigger,
    N = e.fn.toggle,
    T = e.fn.live,
    M = e.fn.die,
    S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
    C = RegExp("\\b(?:" + S + ")\\b"),
    H = /(?:^|\s)hover(\.\S+|)\b/,
    A = function(t) {
        return "string" != typeof t || e.event.special.hover ? t: (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    e.event.add = function(e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t),
        Q.call(this, e, A(t || ""), n, a, i)
    },
    e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    },
    e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"),
        e.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    },
    e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
        i = t.guid || e.guid++,
        o = 0,
        s = function(n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return e._data(this, "lastToggle" + t.guid, r + 1),
            n.preventDefault(),
            a[r].apply(this, arguments) || !1
        };
        for (s.guid = i; a.length > o;) a[o++].guid = i;
        return this.click(s)
    },
    e.fn.live = function(t, n, a) {
        return r("jQuery.fn.live() is deprecated"),
        T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    },
    e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"),
        M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    },
    e.event.trigger = function(e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"),
        k.call(this, e, t, n || document, a)
    },
    e.each(S.split("|"),
    function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid,
                function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)),
                !1
            }
        }
    })
} (jQuery, window); (function(a) {
    a.getJS = function(b, c) {
        a.ajax({
            dataType: "script",
            cache: true,
            url: b,
            success: c
        })
    }
})(jQuery); (function(d, c) {
    d.inlineCSS = function(b) {
        var a = c.createElement("style"),
        e = c.getElementsByTagName("head")[0];
        a.setAttribute("type", "text/css");
        if (a.styleSheet) a.styleSheet.cssText = b;
        else {
            b = c.createTextNode(b);
            a.appendChild(b)
        }
        e.appendChild(a)
    }
})(jQuery, document); (function(a, c) {
    var b = 0;
    a.openWindow = function(w, D) {
        D = a.extend({
            width: "60%",
            height: "60%",
            top: "middle",
            left: "center",
            location: 1,
            menubar: 0,
            toolbar: 0,
            bookmarks: 0,
            status: 0,
            resizable: 1,
            scroll: 1,
            gui: 40,
            name: "jQuery_popUp",
            nu: 0,
            focus: 1
        },
        D);
        var C = [],
        s = D.nu ? D.name + b++:D.name,
        v = c.screen,
        z = v.height,
        u = v.width,
        y = D.width,
        x = D.height,
        B = D.left,
        A = D.top,
        i = D.gui;
        v = ["location", "menubar", "toolbar", "bookmarks", "status", "resizable", "scroll"];
        var o = v.length,
        q = Math.round,
        t = function(e, d) {
            return q(d * e.replace("%", "") / 100)
        };
        if (y.indexOf) {
            if (y.indexOf("%")) {
                y = t(y, u)
            }
        }
        C.push("width=" + y);
        if (x.indexOf) {
            if (x.indexOf("%")) {
                x = t(x, z)
            }
        }
        C.push("height=" + x);
        if (B.indexOf) {
            if (B.indexOf("%") !== -1) {
                B = t(B, u)
            } else {
                switch (B) {
                case "center":
                    B = q((u - y) / 2);
                    break;
                case "left":
                    B = 0;
                    break;
                case "right":
                    B = u - y
                }
            }
        }
        C.push("left=" + B);
        if (A.indexOf) {
            if (A.indexOf("%") !== -1) {
                A = t(A, z)
            } else {
                switch (A) {
                case "middle":
                    A = q((z - x) / 2) - i;
                    break;
                case "top":
                    A = 0;
                    break;
                case "bottom":
                    A = z - x
                }
            }
        }
        for (C.push("top=" + A); o--;) {
            z = v[o];
            C.push(z + "=" + (D[z] ? "yes": "no"))
        }
        w = c.open(w, s, C.join(","));
        D.focus && w.focus();
        return w
    };
    a.fn.openWindow = function(d) {
        return this.each(function() {
            var f = this,
            e = f.href;
            e && a(f).click(function(g) {
                g.preventDefault();
                a.openWindow(e, d)
            })
        })
    }
})(jQuery, window); (function(c, d) {
    var a, e, b = {
        linkType: "o",
        namespace: "omnitrack"
    };
    c.omniTrack = function(f) {
        if (f.elem) {
            var j = c.extend({},
            b, f),
            k = f.elem,
            h = c(k),
            i = j.name || h.text(),
            g = function() {
                var l = s_gi(j.suite || d.s_account || "aolsvc");
                l.tl(k, j.linkType, i)
            };
            h.bind("click." + j.namespace,
            function() {
                if (e) {
                    g()
                } else {
                    if (a = d.s_265) {
                        a.linkTrackVars = "none";
                        a.linkTrackEvents = "none";
                        a.trackExternalLinks = "true";
                        e = 1;
                        g()
                    }
                }
            })
        } else {
            c.extend(b, f)
        }
    };
    c.fn.omniTrack = function(f) {
        return this.each(function() {
            f.elem = this;
            c.omniTrack(f)
        })
    }
})(jQuery, window); (function(c, b) {
    var a = 0;
    c.openWindow = function(i, f) {
        var t = {
            width: "60%",
            height: "60%",
            top: "middle",
            left: "center",
            location: 1,
            menubar: 0,
            toolbar: 0,
            bookmarks: 0,
            status: 0,
            resizable: 1,
            scroll: 1,
            gui: 40,
            name: "jQuery_popUp",
            nu: 0,
            focus: 1
        },
        e = c.extend(t, f),
        k = [],
        w = (e.nu) ? e.name + a++:e.name,
        d = b.screen,
        u = d.height,
        q = d.width,
        p = e.width,
        n = e.height,
        g = e.left,
        l = e.top,
        m = e.gui,
        h = ["location", "menubar", "toolbar", "bookmarks", "status", "resizable", "scroll"],
        o = h.length,
        s,
        v = Math.round,
        r = function(y, x) {
            return v(x * y.replace("%", "") / 100)
        },
        j;
        if (p.indexOf) {
            if (p.indexOf("%")) {
                p = r(p, q)
            }
        }
        k.push("width=" + p);
        if (n.indexOf) {
            if (n.indexOf("%")) {
                n = r(n, u)
            }
        }
        k.push("height=" + n);
        if (g.indexOf) {
            if (g.indexOf("%") !== -1) {
                g = r(g, q)
            } else {
                switch (g) {
                case "center":
                    g = v((q - p) / 2);
                    break;
                case "left":
                    g = 0;
                    break;
                case "right":
                    g = q - p
                }
            }
        }
        k.push("left=" + g);
        if (l.indexOf) {
            if (l.indexOf("%") !== -1) {
                l = r(l, u)
            } else {
                switch (l) {
                case "middle":
                    l = v((u - n) / 2) - m;
                    break;
                case "top":
                    l = 0;
                    break;
                case "bottom":
                    l = u - n
                }
            }
        }
        k.push("top=" + l);
        while (o--) {
            s = h[o];
            k.push(s + "=" + (e[s] ? "yes": "no"))
        }
        j = b.open(i, w, k.join(","));
        if (e.focus) {
            j.focus()
        }
        return j
    };
    c.fn.openWindow = function(d) {
        return this.each(function() {
            var f = this,
            e = f.href;
            if (e) {
                c(f).bind("click.openwindow",
                function(g) {
                    g.preventDefault();
                    c.openWindow(e, d)
                })
            }
        })
    }
})(jQuery, window);
function launchAolPlayer(c, b) {
    oString = "";
    if (b != null && b != "") {
        oString = "&onestat=" + b
    }
    if (c == null || c == "0") {
        c = ""
    }
    var e = "http://player.play.it/player/aolPlayer.html?v=6.0.42&ur=1&us=1&id=" + c + oString;
    var d = "";
    var a = window.open(e, "AOLPlayer", d, true);
    a.focus()
}; (function(i) {
    i.fn.jcarousel = function(a) {
        if (typeof a == "string") {
            var c = i(this).data("jcarousel"),
            b = Array.prototype.slice.call(arguments, 1);
            return c[a].apply(c, b)
        } else return this.each(function() {
            i(this).data("jcarousel", new h(this, a))
        })
    };
    var p = {
        vertical: false,
        rtl: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: "normal",
        easing: "swing",
        auto: 0,
        wrap: null,
        initCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        buttonNextHTML: "<div></div>",
        buttonPrevHTML: "<div></div>",
        buttonNextEvent: "click",
        buttonPrevEvent: "click",
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    },
    q = false;
    i(window).bind("load.jcarousel",
    function() {
        q = true
    });
    i.jcarousel = function(a, c) {
        this.options = i.extend({},
        p, c || {});
        this.locked = false;
        this.buttonPrev = this.buttonNext = this.list = this.clip = this.container = null;
        if (!c || c.rtl === undefined) this.options.rtl = (i(a).attr("dir") || i("html").attr("dir") || "").toLowerCase() == "rtl";
        this.wh = !this.options.vertical ? "width": "height";
        this.lt = !this.options.vertical ? this.options.rtl ? "right": "left": "top";
        for (var b = "",
        d = a.className.split(" "), e = 0; e < d.length; e++) if (d[e].indexOf("jcarousel-skin") != -1) {
            i(a).removeClass(d[e]);
            b = d[e];
            break
        }
        if (a.nodeName.toUpperCase() == "UL" || a.nodeName.toUpperCase() == "OL") {
            this.list = i(a);
            this.container = this.list.parent();
            if (this.container.hasClass("jcarousel-clip")) {
                if (!this.container.parent().hasClass("jcarousel-container")) this.container = this.container.wrap("<div></div>");
                this.container = this.container.parent()
            } else if (!this.container.hasClass("jcarousel-container")) this.container = this.list.wrap("<div></div>").parent()
        } else {
            this.container = i(a);
            this.list = this.container.find("ul,ol").eq(0)
        }
        b != "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1 && this.container.wrap('<div class=" ' + b + '"></div>');
        this.clip = this.list.parent();
        if (!this.clip.length || !this.clip.hasClass("jcarousel-clip")) this.clip = this.list.wrap("<div></div>").parent();
        this.buttonNext = i(".jcarousel-next", this.container);
        if (this.buttonNext.size() == 0 && this.options.buttonNextHTML != null) this.buttonNext = this.clip.after(this.options.buttonNextHTML).next();
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.buttonPrev = i(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() == 0 && this.options.buttonPrevHTML != null) this.buttonPrev = this.clip.after(this.options.buttonPrevHTML).next();
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.clip.addClass(this.className("jcarousel-clip")).css({
            overflow: "hidden",
            position: "relative"
        });
        this.list.addClass(this.className("jcarousel-list")).css({
            overflow: "hidden",
            position: "relative",
            top: 0,
            margin: 0,
            padding: 0
        }).css(this.options.rtl ? "right": "left", 0);
        this.container.addClass(this.className("jcarousel-container")).css({
            position: "relative"
        }); ! this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
        var f = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
        b = this.list.children("li");
        var g = this;
        if (b.size() > 0) {
            var j = 0;
            e = this.options.offset;
            b.each(function() {
                g.format(this, e++);
                j += g.dimension(this, f)
            });
            this.list.css(this.wh, j + 100 + "px");
            if (!c || c.size === undefined) this.options.size = b.size()
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function() {
            g.next()
        };
        this.funcPrev = function() {
            g.prev()
        };
        this.funcResize = function() {
            g.reload()
        };
        this.options.initCallback != null && this.options.initCallback(this, "init");
        if (!q && i.browser.safari) {
            this.buttons(false, false);
            i(window).bind("load.jcarousel",
            function() {
                g.setup()
            })
        } else this.setup()
    };
    var h = i.jcarousel;
    h.fn = h.prototype = {
        jcarousel: "0.2.5"
    };
    h.fn.extend = h.extend = i.extend;
    h.fn.extend({
        setup: function() {
            this.prevLast = this.prevFirst = this.last = this.first = null;
            this.animating = false;
            this.tail = this.timer = null;
            this.inTail = false;
            if (!this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var a = this.pos(this.options.start);
                this.prevFirst = this.prevLast = null;
                this.animate(a, false);
                i(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize)
            }
        },
        reset: function() {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            this.options.initCallback != null && this.options.initCallback(this, "reset");
            this.setup()
        },
        reload: function() {
            this.tail != null && this.inTail && this.list.css(this.lt, h.intval(this.list.css(this.lt)) + this.tail);
            this.tail = null;
            this.inTail = false;
            this.options.reloadCallback != null && this.options.reloadCallback(this);
            if (this.options.visible != null) {
                var a = this,
                c = Math.ceil(this.clipping() / this.options.visible),
                b = 0,
                d = 0;
                this.list.children("li").each(function(e) {
                    b += a.dimension(this, c);
                    if (e + 1 < a.first) d = b
                });
                this.list.css(this.wh, b + "px");
                this.list.css(this.lt, -d + "px")
            }
            this.scroll(this.first, false)
        },
        lock: function() {
            this.locked = true;
            this.buttons()
        },
        unlock: function() {
            this.locked = false;
            this.buttons()
        },
        size: function(a) {
            if (a != undefined) {
                this.options.size = a;
                this.locked || this.buttons()
            }
            return this.options.size
        },
        has: function(a, c) {
            if (c == undefined || !c) c = a;
            if (this.options.size !== null && c > this.options.size) c = this.options.size;
            for (var b = a; b <= c; b++) {
                var d = this.get(b);
                if (!d.length || d.hasClass("jcarousel-item-placeholder")) return false
            }
            return true
        },
        get: function(a) {
            return i(".jcarousel-item-" + a, this.list)
        },
        add: function(a, c) {
            var b = this.get(a),
            d = 0,
            e = i(c);
            if (b.length == 0) {
                var f;
                b = this.create(a);
                for (var g = h.intval(a); f = this.get(--g);) if (g <= 0 || f.length) {
                    g <= 0 ? this.list.prepend(b) : f.after(b);
                    break
                }
            } else d = this.dimension(b);
            if (e.get(0).nodeName.toUpperCase() == "LI") {
                b.replaceWith(e);
                b = e
            } else b.empty().append(c);
            this.format(b.removeClass(this.className("jcarousel-item-placeholder")), a);
            e = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
            d = this.dimension(b, e) - d;
            a > 0 && a < this.first && this.list.css(this.lt, h.intval(this.list.css(this.lt)) - d + "px");
            this.list.css(this.wh, h.intval(this.list.css(this.wh)) + d + "px");
            return b
        },
        remove: function(a) {
            var c = this.get(a);
            if (! (!c.length || a >= this.first && a <= this.last)) {
                var b = this.dimension(c);
                a < this.first && this.list.css(this.lt, h.intval(this.list.css(this.lt)) + b + "px");
                c.remove();
                this.list.css(this.wh, h.intval(this.list.css(this.wh)) - b + "px")
            }
        },
        next: function() {
            this.stopAuto();
            this.tail != null && !this.inTail ? this.scrollTail(false) : this.scroll((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size != null && this.last == this.options.size ? 1 : this.first + this.options.scroll)
        },
        prev: function() {
            this.stopAuto();
            this.tail != null && this.inTail ? this.scrollTail(true) : this.scroll((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size != null && this.first == 1 ? this.options.size: this.first - this.options.scroll)
        },
        scrollTail: function(a) {
            if (! (this.locked || this.animating || !this.tail)) {
                var c = h.intval(this.list.css(this.lt)); ! a ? c -= this.tail: c += this.tail;
                this.inTail = !a;
                this.prevFirst = this.first;
                this.prevLast = this.last;
                this.animate(c)
            }
        },
        scroll: function(a, c) {
            this.locked || this.animating || this.animate(this.pos(a), c)
        },
        pos: function(a) {
            var c = h.intval(this.list.css(this.lt));
            if (this.locked || this.animating) return c;
            if (this.options.wrap != "circular") a = a < 1 ? 1 : this.options.size && a > this.options.size ? this.options.size: a;
            for (var b = this.first > a,
            d = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first, e = b ? this.get(d) : this.get(this.last), f = b ? d: d - 1, g = null, j = 0, l = false, k = 0; b ? --f >= a: ++f < a;) {
                g = this.get(f);
                l = !g.length;
                if (g.length == 0) {
                    g = this.create(f).addClass(this.className("jcarousel-item-placeholder"));
                    e[b ? "before": "after"](g);
                    if (this.first != null && this.options.wrap == "circular" && this.options.size !== null && (f <= 0 || f > this.options.size)) {
                        e = this.get(this.index(f));
                        if (e.length) g = this.add(f, e.clone(true))
                    }
                }
                e = g;
                k = this.dimension(g);
                if (l) j += k;
                if (this.first != null && (this.options.wrap == "circular" || f >= 1 && (this.options.size == null || f <= this.options.size))) c = b ? c + k: c - k
            }
            d = this.clipping();
            var o = [],
            n = 0;
            f = a;
            var m = 0;
            for (e = this.get(a - 1); ++n;) {
                g = this.get(f);
                l = !g.length;
                if (g.length == 0) {
                    g = this.create(f).addClass(this.className("jcarousel-item-placeholder"));
                    e.length == 0 ? this.list.prepend(g) : e[b ? "before": "after"](g);
                    if (this.first != null && this.options.wrap == "circular" && this.options.size !== null && (f <= 0 || f > this.options.size)) {
                        e = this.get(this.index(f));
                        if (e.length) g = this.add(f, e.clone(true))
                    }
                }
                e = g;
                k = this.dimension(g);
                if (k == 0) throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                if (this.options.wrap != "circular" && this.options.size !== null && f > this.options.size) o.push(g);
                else if (l) j += k;
                m += k;
                if (m >= d) break;
                f++
            }
            for (g = 0; g < o.length; g++) o[g].remove();
            if (j > 0) {
                this.list.css(this.wh, this.dimension(this.list) + j + "px");
                if (b) {
                    c -= j;
                    this.list.css(this.lt, h.intval(this.list.css(this.lt)) - j + "px")
                }
            }
            j = a + n - 1;
            if (this.options.wrap != "circular" && this.options.size && j > this.options.size) j = this.options.size;
            if (f > j) {
                n = 0;
                f = j;
                for (m = 0; ++n;) {
                    g = this.get(f--);
                    if (!g.length) break;
                    m += this.dimension(g);
                    if (m >= d) break
                }
            }
            f = j - n + 1;
            if (this.options.wrap != "circular" && f < 1) f = 1;
            if (this.inTail && b) {
                c += this.tail;
                this.inTail = false
            }
            this.tail = null;
            if (this.options.wrap != "circular" && j == this.options.size && j - n + 1 >= 1) {
                b = h.margin(this.get(j), !this.options.vertical ? "marginRight": "marginBottom");
                if (m - b > d) this.tail = m - d - b
            }
            for (; a-->f;) c += this.dimension(this.get(a));
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = f;
            this.last = j;
            return c
        },
        animate: function(a, c) {
            if (! (this.locked || this.animating)) {
                this.animating = true;
                var b = this,
                d = function() {
                    b.animating = false;
                    a == 0 && b.list.css(b.lt, 0);
                    if (b.options.wrap == "circular" || b.options.wrap == "both" || b.options.wrap == "last" || b.options.size == null || b.last < b.options.size) b.startAuto();
                    b.buttons();
                    b.notify("onAfterAnimation");
                    if (b.options.wrap == "circular" && b.options.size !== null) for (var e = b.prevFirst; e <= b.prevLast; e++) if (e !== null && !(e >= b.first && e <= b.last) && (e < 1 || e > b.options.size)) b.remove(e)
                };
                this.notify("onBeforeAnimation");
                if (!this.options.animation || c == false) {
                    this.list.css(this.lt, a + "px");
                    d()
                } else this.list.animate(!this.options.vertical ? this.options.rtl ? {
                    right: a
                }: {
                    left: a
                }: {
                    top: a
                },
                this.options.animation, this.options.easing, d)
            }
        },
        startAuto: function(a) {
            if (a != undefined) this.options.auto = a;
            if (this.options.auto == 0) return this.stopAuto();
            if (this.timer == null) {
                var c = this;
                this.timer = setTimeout(function() {
                    c.next()
                },
                this.options.auto * 1E3)
            }
        },
        stopAuto: function() {
            if (this.timer != null) {
                clearTimeout(this.timer);
                this.timer = null
            }
        },
        buttons: function(a, c) {
            if (a == undefined || a == null) {
                a = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "first" || this.options.size == null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size != null && this.last >= this.options.size) a = this.tail != null && !this.inTail
            }
            if (c == undefined || c == null) {
                c = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "last" || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size != null && this.first == 1) c = this.tail != null && this.inTail
            }
            var b = this;
            this.buttonNext[a ? "bind": "unbind"](this.options.buttonNextEvent + ".jcarousel", this.funcNext)[a ? "removeClass": "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", a ? false: true);
            this.buttonPrev[c ? "bind": "unbind"](this.options.buttonPrevEvent + ".jcarousel", this.funcPrev)[c ? "removeClass": "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", c ? false: true);
            this.options.buttonNextCallback != null && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function() {
                b.options.buttonNextCallback(b, this, a)
            }).data("jcarouselstate", a);
            this.options.buttonPrevCallback != null && this.buttonPrev.data("jcarouselstate") != c && this.buttonPrev.each(function() {
                b.options.buttonPrevCallback(b, this, c)
            }).data("jcarouselstate", c)
        },
        notify: function(a) {
            var c = this.prevFirst == null ? "init": this.prevFirst < this.first ? "next": "prev";
            this.callback("itemLoadCallback", a, c);
            if (this.prevFirst !== this.first) {
                this.callback("itemFirstInCallback", a, c, this.first);
                this.callback("itemFirstOutCallback", a, c, this.prevFirst)
            }
            if (this.prevLast !== this.last) {
                this.callback("itemLastInCallback", a, c, this.last);
                this.callback("itemLastOutCallback", a, c, this.prevLast)
            }
            this.callback("itemVisibleInCallback", a, c, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", a, c, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function(a, c, b, d, e, f, g) {
            if (! (this.options[a] == undefined || typeof this.options[a] != "object" && c != "onAfterAnimation")) {
                var j = typeof this.options[a] == "object" ? this.options[a][c] : this.options[a];
                if (i.isFunction(j)) {
                    var l = this;
                    if (d === undefined) j(l, b, c);
                    else if (e === undefined) this.get(d).each(function() {
                        j(l, this, d, b, c)
                    });
                    else for (var k = d; k <= e; k++) k !== null && !(k >= f && k <= g) && this.get(k).each(function() {
                        j(l, this, k, b, c)
                    })
                }
            }
        },
        create: function(a) {
            return this.format("<li></li>", a)
        },
        format: function(a, c) {
            a = i(a);
            for (var b = a.get(0).className.split(" "), d = 0; d < b.length; d++) b[d].indexOf("jcarousel-") != -1 && a.removeClass(b[d]);
            a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + c)).css({
                "float": this.options.rtl ? "right": "left",
                "list-style": "none"
            }).attr("jcarouselindex", c);
            return a
        },
        className: function(a) {
            return a + " " + a + (!this.options.vertical ? "-horizontal": "-vertical")
        },
        dimension: function(a, c) {
            var b = a.jquery != undefined ? a[0] : a,
            d = !this.options.vertical ? (b.offsetWidth || h.intval(this.options.itemFallbackDimension)) + h.margin(b, "marginLeft") + h.margin(b, "marginRight") : (b.offsetHeight || h.intval(this.options.itemFallbackDimension)) + h.margin(b, "marginTop") + h.margin(b, "marginBottom");
            if (c == undefined || d == c) return d;
            d = !this.options.vertical ? c - h.margin(b, "marginLeft") - h.margin(b, "marginRight") : c - h.margin(b, "marginTop") - h.margin(b, "marginBottom");
            i(b).css(this.wh, d + "px");
            return this.dimension(b)
        },
        clipping: function() {
            return ! this.options.vertical ? this.clip[0].offsetWidth - h.intval(this.clip.css("borderLeftWidth")) - h.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - h.intval(this.clip.css("borderTopWidth")) - h.intval(this.clip.css("borderBottomWidth"))
        },
        index: function(a, c) {
            if (c == undefined) c = this.options.size;
            return Math.round(((a - 1) / c - Math.floor((a - 1) / c)) * c) + 1
        }
    });
    h.extend({
        defaults: function(a) {
            return i.extend(p, a || {})
        },
        margin: function(a, c) {
            if (!a) return 0;
            var b = a.jquery != undefined ? a[0] : a;
            if (c == "marginRight" && i.browser.safari) {
                var d = {
                    display: "block",
                    "float": "none",
                    width: "auto"
                },
                e,
                f;
                i.swap(b, d,
                function() {
                    e = b.offsetWidth
                });
                d.marginRight = 0;
                i.swap(b, d,
                function() {
                    f = b.offsetWidth
                });
                return f - e
            }
            return h.intval(i.css(b, c))
        },
        intval: function(a) {
            a = parseInt(a);
            return isNaN(a) ? 0 : a
        }
    })
})(jQuery); (function(e, h, l, c) {
    e.fn.sonar = function(o, n) {
        if (typeof o === "boolean") {
            n = o;
            o = c
        }
        return e.sonar(this[0], o, n)
    };
    var f = l.body,
    a = "scrollin",
    m = "scrollout",
    b = function(r, n, t) {
        if (r) {
            f || (f = l.body);
            var s = r,
            u = 0,
            v = f.offsetHeight,
            o = h.innerHeight || l.documentElement.clientHeight || f.clientHeight || 0,
            q = l.documentElement.scrollTop || h.pageYOffset || f.scrollTop || 0,
            p = r.offsetHeight || 0;
            if (!r.sonarElemTop || r.sonarBodyHeight !== v) {
                if (s.offsetParent) {
                    do {
                        u += s.offsetTop
                    } while ( s = s . offsetParent )
                }
                r.sonarElemTop = u;
                r.sonarBodyHeight = v
            }
            n = n === c ? 0 : n;
            return (! (r.sonarElemTop + (t ? 0 : p) < q - n) && !(r.sonarElemTop + (t ? p: 0) > q + o + n))
        }
    },
    d = {},
    j = 0,
    i = function() {
        setTimeout(function() {
            var s, o, t, q, p, r, n;
            for (t in d) {
                o = d[t];
                for (r = 0, n = o.length; r < n; r++) {
                    q = o[r];
                    s = q.elem;
                    p = b(s, q.px, q.full);
                    if (t === m ? !p: p) {
                        if (!q.tr) {
                            if (s[t]) {
                                e(s).trigger(t);
                                q.tr = 1
                            } else {
                                o.splice(r, 1);
                                r--;
                                n--
                            }
                        }
                    } else {
                        q.tr = 0
                    }
                }
            }
        },
        25)
    },
    k = function(n, o) {
        n[o] = 0
    },
    g = function(r, p) {
        var t = p.px,
        q = p.full,
        s = p.evt,
        o = b(r, t, q),
        n = 0;
        r[s] = 1;
        if (s === m ? !o: o) {
            setTimeout(function() {
                e(r).trigger(s === m ? m: a)
            },
            0);
            n = 1
        }
        d[s].push({
            elem: r,
            px: t,
            full: q,
            tr: n
        });
        if (!j) {
            e(h).bind("scroll", i);
            j = 1
        }
    };
    e.sonar = b;
    d[a] = [];
    e.event.special[a] = {
        add: function(n) {
            var p = n.data || {},
            o = this;
            if (!o[a]) {
                g(this, {
                    px: p.distance,
                    full: p.full,
                    evt: a
                })
            }
        },
        remove: function(n) {
            k(this, a)
        }
    };
    d[m] = [];
    e.event.special[m] = {
        add: function(n) {
            var p = n.data || {},
            o = this;
            if (!o[m]) {
                g(o, {
                    px: p.distance,
                    full: p.full,
                    evt: m
                })
            }
        },
        remove: function(n) {
            k(this, m)
        }
    }
})(jQuery, window, document); (function(d, e, f) {
    if (d.getJS && d.sonar) {
        var c = f.protocol + "//" + f.hostname,
        a = {
            options: {
                status: true,
                logging: false,
                cookie: true,
                xfbml: false,
                channelUrl: c + "/_uac/aol-facebook-social-channel.html"
            },
            js: "http://connect.facebook.net/en_US/all.js",
            width: 300,
            CSSclass: "",
            callback: function() {},
            host: "",
            sonar: 1,
            queue: 1
        },
        b = d({});
        d.facebookSocial = function(g) {
            function i(v) {
                var n = v.elem,
                s = v.options,
                l = v.width,
                o = n.innerHTML,
                k, u = v.host,
                m = d(n),
                q = n.name.replace("aol-facebook-", ""),
                t = ["<div", ' class="', n.className || "", '">'],
                p; ! FB._apiKey && FB.init(s);
                if (o.indexOf("<fb") === -1) {
                    k = n.href;
                    if (!k) {
                        k = f.href.replace(/\?.*/, "").replace(/\#.*/, "")
                    }
                    if (u) {
                        k = u + k.replace(c, "")
                    }
                    switch (q) {
                    case "like":
                        t.push('<fb:like href="' + k + '" layout="standard" show_faces="false" action="like" width="' + l + '" ref="' + n.rel + '"></fb:like>');
                        break;
                    case "share":
                        t.push('<fb:share-button href="' + k + '" type="box_count"></fb:share-button>');
                        break;
                    case "activity":
                        t.push('<fb:activity site="' + k + '" header="false" border_color="#ffffff"></fb:activity>');
                        break;
                    case "recommend":
                        t.push('<fb:recommendations site="' + n.href + '" width="' + l + '" height="360" header="false" border_color="#ffffff" />');
                        break;
                    case "livestream":
                        t.push('<fb:live-stream event_app_id="' + v.appId + '" width="300" height="450" always_post_to_friends="false"></fb:live-stream>');
                        break;
                    case "comments":
                        t.push('<fb:comments href="' + k + '"></fb:comments>');
                        break;
                    default:
                        return
                    }
                } else {
                    t.push(o)
                }
                t.push("</div>");
                p = d(t.join(""));
                function r(w) {
                    FB.XFBML.parse(p[0],
                    function() {
                        v.callback();
                        w && w()
                    })
                }
                m.replaceWith(p);
                if (v.sonar) {
                    p.bind("scrollin.aol-facebook-social",
                    function() {
                        p.unbind("scrollin.aol-facebook-social");
                        if (v.queue) {
                            b.queue(r)
                        } else {
                            r()
                        }
                    })
                } else {
                    if (v.queue) {
                        b.queue(r)
                    } else {
                        r()
                    }
                }
            }
            if (!g.elem) {
                d.extend(true, a, g)
            } else {
                var h = d.extend(true, {},
                a, g),
                j;
                if (!e.getElementById("fb-root")) {
                    j = e.createElement("div");
                    j.id = "fb-root";
                    e.body.appendChild(j)
                }
                d.getJS(h.js,
                function() {
                    i(h)
                })
            }
        };
        d.fn.facebookSocial = function(g) {
            return this.each(function() {
                g = g || {};
                g.elem = this;
                d.facebookSocial(g)
            })
        }
    }
    d(document).delegate(".aol-faux-facebook-like", "mouseover",
    function() {
        var i = this,
        g = d(i);
        if (!g.data("init")) {
            g.data("init", 1);
            var h = d(['<a name="aol-facebook-like" id="', g.attr("data-id"), '"><fb:like href="', g.attr("data-href"), '" layout="', g.attr("data-layout"), '" show_faces="', g.attr("data-show_faces"), '" action="', g.attr("data-action"), '" width="', g.attr("data-width"), '" ref="', g.attr("data-ref"), '" class="', g.attr("data-class"), '"></fb:like></a>'].join(""));
            g.append(h);
            h.facebookSocial({
                callback: function() {
                    if (typeof(portal_fbook) != "undefined") {
                        portal_fbook.likeCallback(this.elem);
                    }
                    g.addClass("aol-faux-facebook-like-init");
                    g.removeClass("aol-faux-facebook-like")
                },
                sonar: 0,
                queue: 0
            })
        }
    });
    d(document).delegate(".aol-faux-facebook-like > a", "click",
    function(g) {
        g.preventDefault()
    })
} (jQuery, document, location)); (function(e, t, i) {
    function o(i, o, n) {
        var r = t.createElement(i);
        return o && (r.id = Z + o),
        n && (r.style.cssText = n),
        e(r)
    }
    function n() {
        return i.innerHeight ? i.innerHeight: e(i).height()
    }
    function r(e) {
        var t = k.length,
        i = (z + e) % t;
        return 0 > i ? t + i: i
    }
    function h(e, t) {
        return Math.round((/%/.test(e) ? ("x" === t ? E.width() : n()) / 100 : 1) * parseInt(e, 10))
    }
    function l(e, t) {
        return e.photo || e.photoRegex.test(t)
    }
    function s(e, t) {
        return e.retinaUrl && i.devicePixelRatio > 1 ? t.replace(e.photoRegex, e.retinaSuffix) : t
    }
    function a(e) {
        "contains" in g[0] && !g[0].contains(e.target) && (e.stopPropagation(), g.focus())
    }
    function d() {
        var t, i = e.data(N, Y);
        null == i ? (B = e.extend({},
        X), console && console.log && console.log("Error: cboxElement missing settings object")) : B = e.extend({},
        i);
        for (t in B) e.isFunction(B[t]) && "on" !== t.slice(0, 2) && (B[t] = B[t].call(N));
        B.rel = B.rel || N.rel || e(N).data("rel") || "nofollow",
        B.href = B.href || e(N).attr("href"),
        B.title = B.title || N.title,
        "string" == typeof B.href && (B.href = e.trim(B.href))
    }
    function c(i, o) {
        e(t).trigger(i),
        lt.triggerHandler(i),
        e.isFunction(o) && o.call(N)
    }
    function u(i) {
        q || (N = i, d(), k = e(N), z = 0, "nofollow" !== B.rel && (k = e("." + et).filter(function() {
            var t, i = e.data(this, Y);
            return i && (t = e(this).data("rel") || i.rel || this.rel),
            t === B.rel
        }), z = k.index(N), -1 === z && (k = k.add(N), z = k.length - 1)), w.css({
            opacity: parseFloat(B.opacity),
            cursor: B.overlayClose ? "pointer": "auto",
            visibility: "visible"
        }).show(), J && g.add(w).removeClass(J), B.className && g.add(w).addClass(B.className), J = B.className, B.closeButton ? K.html(B.close).appendTo(y) : K.appendTo("<div/>"), U || (U = $ = !0, g.css({
            visibility: "hidden",
            display: "block"
        }), H = o(st, "LoadedContent", "width:0; height:0; overflow:hidden"), y.css({
            width: "",
            height: ""
        }).append(H), O = x.height() + C.height() + y.outerHeight(!0) - y.height(), _ = b.width() + T.width() + y.outerWidth(!0) - y.width(), D = H.outerHeight(!0), A = H.outerWidth(!0), B.w = h(B.initialWidth, "x"), B.h = h(B.initialHeight, "y"), H.css({
            width: "",
            height: B.h
        }), Q.position(), c(tt, B.onOpen), P.add(L).hide(), g.focus(), B.trapFocus && t.addEventListener && (t.addEventListener("focus", a, !0), lt.one(rt,
        function() {
            t.removeEventListener("focus", a, !0)
        })), B.returnFocus && lt.one(rt,
        function() {
            e(N).focus()
        })), m())
    }
    function f() { ! g && t.body && (V = !1, E = e(i), g = o(st).attr({
            id: Y,
            "class": e.support.opacity === !1 ? Z + "IE": "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), w = o(st, "Overlay").hide(), F = e([o(st, "LoadingOverlay")[0], o(st, "LoadingGraphic")[0]]), v = o(st, "Wrapper"), y = o(st, "Content").append(L = o(st, "Title"), S = o(st, "Current"), I = e('<button type="button"/>').attr({
            id: Z + "Previous"
        }), R = e('<button type="button"/>').attr({
            id: Z + "Next"
        }), M = o("button", "Slideshow"), F), K = e('<button type="button"/>').attr({
            id: Z + "Close"
        }), v.append(o(st).append(o(st, "TopLeft"), x = o(st, "TopCenter"), o(st, "TopRight")), o(st, !1, "clear:left").append(b = o(st, "MiddleLeft"), y, T = o(st, "MiddleRight")), o(st, !1, "clear:left").append(o(st, "BottomLeft"), C = o(st, "BottomCenter"), o(st, "BottomRight"))).find("div div").css({
            "float": "left"
        }), W = o(st, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P = R.add(I).add(S).add(M), e(t.body).append(w, g.append(v, W)))
    }
    function p() {
        function i(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), u(this))
        }
        return g ? (V || (V = !0, R.click(function() {
            Q.next()
        }), I.click(function() {
            Q.prev()
        }), K.click(function() {
            Q.close()
        }), w.click(function() {
            B.overlayClose && Q.close()
        }), e(t).bind("keydown." + Z,
        function(e) {
            var t = e.keyCode;
            U && B.escKey && 27 === t && (e.preventDefault(), Q.close()),
            U && B.arrowKey && k[1] && !e.altKey && (37 === t ? (e.preventDefault(), I.click()) : 39 === t && (e.preventDefault(), R.click()))
        }), e.isFunction(e.fn.on) ? e(t).on("click." + Z, "." + et, i) : e("." + et).live("click." + Z, i)), !0) : !1
    }
    function m() {
        var n, r, a, u = Q.prep,
        f = ++at;
        $ = !0,
        j = !1,
        N = k[z],
        d(),
        c(ht),
        c(it, B.onLoad),
        B.h = B.height ? h(B.height, "y") - D - O: B.innerHeight && h(B.innerHeight, "y"),
        B.w = B.width ? h(B.width, "x") - A - _: B.innerWidth && h(B.innerWidth, "x"),
        B.mw = B.w,
        B.mh = B.h,
        B.maxWidth && (B.mw = h(B.maxWidth, "x") - A - _, B.mw = B.w && B.w < B.mw ? B.w: B.mw),
        B.maxHeight && (B.mh = h(B.maxHeight, "y") - D - O, B.mh = B.h && B.h < B.mh ? B.h: B.mh),
        n = B.href,
        G = setTimeout(function() {
            F.show()
        },
        100),
        B.inline ? (a = o(st).hide().insertBefore(e(n)[0]), lt.one(ht,
        function() {
            a.replaceWith(H.children())
        }), u(e(n))) : B.iframe ? u(" ") : B.html ? u(B.html) : l(B, n) ? (n = s(B, n), j = t.createElement("img"), e(j).addClass(Z + "Photo").bind("error",
        function() {
            B.title = !1,
            u(o(st, "Error").html(B.imgError))
        }).one("load",
        function() {
            var t;
            f === at && (e.each(["alt", "longdesc", "aria-describedby"],
            function(t, i) {
                var o = e(N).attr(i) || e(N).attr("data-" + i);
                o && j.setAttribute(i, o)
            }), B.retinaImage && i.devicePixelRatio > 1 && (j.height = j.height / i.devicePixelRatio, j.width = j.width / i.devicePixelRatio), B.scalePhotos && (r = function() {
                j.height -= j.height * t,
                j.width -= j.width * t
            },
            B.mw && j.width > B.mw && (t = (j.width - B.mw) / j.width, r()), B.mh && j.height > B.mh && (t = (j.height - B.mh) / j.height, r())), B.h && (j.style.marginTop = Math.max(B.mh - j.height, 0) / 2 + "px"), k[1] && (B.loop || k[z + 1]) && (j.style.cursor = "pointer", j.onclick = function() {
                Q.next()
            }), j.style.width = j.width + "px", j.style.height = j.height + "px", setTimeout(function() {
                u(j)
            },
            1))
        }), setTimeout(function() {
            j.src = n
        },
        1)) : n && W.load(n, B.data,
        function(t, i) {
            f === at && u("error" === i ? o(st, "Error").html(B.xhrError) : e(this).contents())
        })
    }
    var w, g, v, y, x, b, T, C, k, E, H, W, F, L, S, M, R, I, K, P, B, O, _, D, A, N, z, j, U, $, q, G, Q, J, V, X = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        href: !1,
        title: !1,
        rel: !1,
        opacity: .9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1
    },
    Y = "colorbox",
    Z = "cbox",
    et = Z + "Element",
    tt = Z + "_open",
    it = Z + "_load",
    ot = Z + "_complete",
    nt = Z + "_cleanup",
    rt = Z + "_closed",
    ht = Z + "_purge",
    lt = e("<a/>"),
    st = "div",
    at = 0,
    dt = {},
    ct = function() {
        function e() {
            clearTimeout(h)
        }
        function t() { (B.loop || k[z + 1]) && (e(), h = setTimeout(Q.next, B.slideshowSpeed))
        }
        function i() {
            M.html(B.slideshowStop).unbind(s).one(s, o),
            lt.bind(ot, t).bind(it, e),
            g.removeClass(l + "off").addClass(l + "on")
        }
        function o() {
            e(),
            lt.unbind(ot, t).unbind(it, e),
            M.html(B.slideshowStart).unbind(s).one(s,
            function() {
                Q.next(),
                i()
            }),
            g.removeClass(l + "on").addClass(l + "off")
        }
        function n() {
            r = !1,
            M.hide(),
            e(),
            lt.unbind(ot, t).unbind(it, e),
            g.removeClass(l + "off " + l + "on")
        }
        var r, h, l = Z + "Slideshow_",
        s = "click." + Z;
        return function() {
            r ? B.slideshow || (lt.unbind(nt, n), n()) : B.slideshow && k[1] && (r = !0, lt.one(nt, n), B.slideshowAuto ? i() : o(), M.show())
        }
    } ();
    e.colorbox || (e(f), Q = e.fn[Y] = e[Y] = function(t, i) {
        var o = this;
        if (t = t || {},
        f(), p()) {
            if (e.isFunction(o)) o = e("<a/>"),
            t.open = !0;
            else if (!o[0]) return o;
            i && (t.onComplete = i),
            o.each(function() {
                e.data(this, Y, e.extend({},
                e.data(this, Y) || X, t))
            }).addClass(et),
            (e.isFunction(t.open) && t.open.call(o) || t.open) && u(o[0])
        }
        return o
    },
    Q.position = function(t, i) {
        function o() {
            x[0].style.width = C[0].style.width = y[0].style.width = parseInt(g[0].style.width, 10) - _ + "px",
            y[0].style.height = b[0].style.height = T[0].style.height = parseInt(g[0].style.height, 10) - O + "px"
        }
        var r, l, s, a = 0,
        d = 0,
        c = g.offset();
        if (E.unbind("resize." + Z), g.css({
            top: -9e4,
            left: -9e4
        }), l = E.scrollTop(), s = E.scrollLeft(), B.fixed ? (c.top -= l, c.left -= s, g.css({
            position: "fixed"
        })) : (a = l, d = s, g.css({
            position: "absolute"
        })), d += B.right !== !1 ? Math.max(E.width() - B.w - A - _ - h(B.right, "x"), 0) : B.left !== !1 ? h(B.left, "x") : Math.round(Math.max(E.width() - B.w - A - _, 0) / 2), a += B.bottom !== !1 ? Math.max(n() - B.h - D - O - h(B.bottom, "y"), 0) : B.top !== !1 ? h(B.top, "y") : Math.round(Math.max(n() - B.h - D - O, 0) / 2), g.css({
            top: c.top,
            left: c.left,
            visibility: "visible"
        }), v[0].style.width = v[0].style.height = "9999px", r = {
            width: B.w + A + _,
            height: B.h + D + O,
            top: a,
            left: d
        },
        t) {
            var u = 0;
            e.each(r,
            function(e) {
                return r[e] !== dt[e] ? (u = t, void 0) : void 0
            }),
            t = u
        }
        dt = r,
        t || g.css(r),
        g.dequeue().animate(r, {
            duration: t || 0,
            complete: function() {
                o(),
                $ = !1,
                v[0].style.width = B.w + A + _ + "px",
                v[0].style.height = B.h + D + O + "px",
                B.reposition && setTimeout(function() {
                    E.bind("resize." + Z, Q.position)
                },
                1),
                i && i()
            },
            step: o
        })
    },
    Q.resize = function(e) {
        var t;
        U && (e = e || {},
        e.width && (B.w = h(e.width, "x") - A - _), e.innerWidth && (B.w = h(e.innerWidth, "x")), H.css({
            width: B.w
        }), e.height && (B.h = h(e.height, "y") - D - O), e.innerHeight && (B.h = h(e.innerHeight, "y")), e.innerHeight || e.height || (t = H.scrollTop(), H.css({
            height: "auto"
        }), B.h = H.height()), H.css({
            height: B.h
        }), t && H.scrollTop(t), Q.position("none" === B.transition ? 0 : B.speed))
    },
    Q.prep = function(i) {
        function n() {
            return B.w = B.w || H.width(),
            B.w = B.mw && B.mw < B.w ? B.mw: B.w,
            B.w
        }
        function h() {
            return B.h = B.h || H.height(),
            B.h = B.mh && B.mh < B.h ? B.mh: B.h,
            B.h
        }
        if (U) {
            var a, d = "none" === B.transition ? 0 : B.speed;
            H.empty().remove(),
            H = o(st, "LoadedContent").append(i),
            H.hide().appendTo(W.show()).css({
                width: n(),
                overflow: B.scrolling ? "auto": "hidden"
            }).css({
                height: h()
            }).prependTo(y),
            W.hide(),
            e(j).css({
                "float": "none"
            }),
            a = function() {
                function i() {
                    e.support.opacity === !1 && g[0].style.removeAttribute("filter")
                }
                var n, h, a = k.length,
                u = "frameBorder",
                f = "allowTransparency";
                U && (h = function() {
                    clearTimeout(G),
                    F.hide(),
                    c(ot, B.onComplete)
                },
                L.html(B.title).add(H).show(), a > 1 ? ("string" == typeof B.current && S.html(B.current.replace("{current}", z + 1).replace("{total}", a)).show(), R[B.loop || a - 1 > z ? "show": "hide"]().html(B.next), I[B.loop || z ? "show": "hide"]().html(B.previous), ct(), B.preloading && e.each([r( - 1), r(1)],
                function() {
                    var i, o, n = k[this],
                    r = e.data(n, Y);
                    r && r.href ? (i = r.href, e.isFunction(i) && (i = i.call(n))) : i = e(n).attr("href"),
                    i && l(r, i) && (i = s(r, i), o = t.createElement("img"), o.src = i)
                })) : P.hide(), B.iframe ? (n = o("iframe")[0], u in n && (n[u] = 0), f in n && (n[f] = "true"), B.scrolling || (n.scrolling = "no"), e(n).attr({
                    src: B.href,
                    name: (new Date).getTime(),
                    "class": Z + "Iframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load", h).appendTo(H), lt.one(ht,
                function() {
                    n.src = "//about:blank"
                }), B.fastIframe && e(n).trigger("load")) : h(), "fade" === B.transition ? g.fadeTo(d, 1, i) : i())
            },
            "fade" === B.transition ? g.fadeTo(d, 0,
            function() {
                Q.position(0, a)
            }) : Q.position(d, a)
        }
    },
    Q.next = function() { ! $ && k[1] && (B.loop || k[z + 1]) && (z = r(1), u(k[z]))
    },
    Q.prev = function() { ! $ && k[1] && (B.loop || z) && (z = r( - 1), u(k[z]))
    },
    Q.close = function() {
        U && !q && (q = !0, U = !1, c(nt, B.onCleanup), E.unbind("." + Z), w.fadeTo(B.fadeOut || 0, 0), g.stop().fadeTo(B.fadeOut || 0, 0,
        function() {
            g.add(w).css({
                opacity: 1,
                cursor: "auto"
            }).hide(),
            c(ht),
            H.empty().remove(),
            setTimeout(function() {
                q = !1,
                c(rt, B.onClosed)
            },
            1)
        }))
    },
    Q.remove = function() {
        g && (g.stop(), e.colorbox.close(), g.stop().remove(), w.remove(), q = !1, g = null, e("." + et).removeData(Y).removeClass(et), e(t).unbind("click." + Z))
    },
    Q.element = function() {
        return e(N)
    },
    Q.settings = X)
})(jQuery, document, window);
var SwipeView = (function(f, m) {
    var k = m.createElement("div").style,
    r = (function() {
        var x = "t,webkitT,MozT,msT,OT".split(","),
        w,
        v = 0,
        u = x.length;
        for (; v < u; v++) {
            w = x[v] + "ransform";
            if (w in k) {
                return x[v].substr(0, x[v].length - 1)
            }
        }
        return false
    })(),
    s = r ? "-" + r.toLowerCase() + "-": "",
    j = n("transform"),
    i = n("transitionDuration"),
    h = n("perspective") in k,
    q = "ontouchstart" in f,
    c = !!r,
    d = n("transition") in k,
    t = h ? " translateZ(0)": "",
    g = "onorientationchange" in f ? "orientationchange": "resize",
    o = q ? "touchstart": "mousedown",
    b = q ? "touchmove": "mousemove",
    l = q ? "touchend": "mouseup",
    p = q ? "touchcancel": "mouseup",
    a = (function() {
        if (r === false) {
            return false
        }
        var u = {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "oTransitionEnd",
            ms: "MSTransitionEnd"
        };
        return u[r]
    })(),
    e = function(y, v) {
        var w, z, x, u;
        this.wrapper = typeof y == "string" ? m.querySelector(y) : y;
        this.options = {
            text: null,
            numberOfPages: 3,
            snapThreshold: null,
            hastyPageFlip: false,
            loop: true
        };
        for (w in v) {
            this.options[w] = v[w]
        }
        this.wrapper.style.overflow = "hidden";
        this.wrapper.style.position = "relative";
        this.masterPages = [];
        z = m.createElement("div");
        z.id = "swipeview-slider";
        z.style.cssText = "position:relative;top:0;height:100%;width:100%;" + s + "transition-duration:0;" + s + "transform:translateZ(0);" + s + "transition-timing-function:ease-out";
        this.wrapper.appendChild(z);
        this.slider = z;
        this.refreshSize();
        for (w = -1; w < 2; w++) {
            z = m.createElement("div");
            z.id = "swipeview-masterpage-" + (w + 1);
            z.style.cssText = s + "transform:translateZ(0);position:absolute;top:0;height:100%;width:100%;left:" + w * 100 + "%";
            if (!z.dataset) {
                z.dataset = {}
            }
            u = w == -1 ? this.options.numberOfPages - 1 : w;
            z.dataset.pageIndex = u;
            z.dataset.upcomingPageIndex = u;
            if (!this.options.loop && w == -1) {
                z.style.visibility = "hidden"
            }
            this.slider.appendChild(z);
            this.masterPages.push(z)
        }
        x = this.masterPages[1].className;
        this.masterPages[1].className = !x ? "swipeview-active": x + " swipeview-active";
        f.addEventListener(g, this, false);
        this.wrapper.addEventListener(o, this, false);
        this.wrapper.addEventListener(b, this, false);
        this.wrapper.addEventListener(l, this, false);
        this.slider.addEventListener(a, this, false);
        if (r == "O") {
            this.slider.addEventListener(a.toLowerCase(), this, false)
        }
    };
    e.prototype = {
        currentMasterPage: 1,
        x: 0,
        page: 0,
        pageIndex: 0,
        customEvents: [],
        onFlip: function(u) {
            this.wrapper.addEventListener("swipeview-flip", u, false);
            this.customEvents.push(["flip", u])
        },
        onMoveOut: function(u) {
            this.wrapper.addEventListener("swipeview-moveout", u, false);
            this.customEvents.push(["moveout", u])
        },
        onMoveIn: function(u) {
            this.wrapper.addEventListener("swipeview-movein", u, false);
            this.customEvents.push(["movein", u])
        },
        onTouchStart: function(u) {
            this.wrapper.addEventListener("swipeview-touchstart", u, false);
            this.customEvents.push(["touchstart", u])
        },
        destroy: function() {
            while (this.customEvents.length) {
                this.wrapper.removeEventListener("swipeview-" + this.customEvents[0][0], this.customEvents[0][1], false);
                this.customEvents.shift()
            }
            f.removeEventListener(g, this, false);
            this.wrapper.removeEventListener(o, this, false);
            this.wrapper.removeEventListener(b, this, false);
            this.wrapper.removeEventListener(l, this, false);
            this.slider.removeEventListener(a, this, false)
        },
        refreshSize: function() {
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.pageWidth = this.wrapperWidth;
            this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth;
            this.snapThreshold = this.options.snapThreshold === null ? Math.round(this.pageWidth * 0.15) : /%/.test(this.options.snapThreshold) ? Math.round(this.pageWidth * this.options.snapThreshold.replace("%", "") / 100) : this.options.snapThreshold
        },
        updatePageCount: function(u) {
            this.options.numberOfPages = u;
            this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth
        },
        goToPage: function(v) {
            var u;
            this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, "");
            for (u = 0; u < 3; u++) {
                className = this.masterPages[u].className;
                /(^|\s)swipeview-loading(\s|$)/.test(className) || (this.masterPages[u].className = !className ? "swipeview-loading": className + " swipeview-loading")
            }
            v = v < 0 ? 0 : v > this.options.numberOfPages - 1 ? this.options.numberOfPages - 1 : v;
            this.page = v;
            this.pageIndex = v;
            this.slider.style[i] = "0s";
            this.__pos( - v * this.pageWidth);
            this.currentMasterPage = (this.page + 1) - Math.floor((this.page + 1) / 3) * 3;
            this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className + " swipeview-active";
            if (this.currentMasterPage === 0) {
                this.masterPages[2].style.left = this.page * 100 - 100 + "%";
                this.masterPages[0].style.left = this.page * 100 + "%";
                this.masterPages[1].style.left = this.page * 100 + 100 + "%";
                this.masterPages[2].dataset.upcomingPageIndex = this.page === 0 ? this.options.numberOfPages - 1 : this.page - 1;
                this.masterPages[0].dataset.upcomingPageIndex = this.page;
                this.masterPages[1].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1
            } else {
                if (this.currentMasterPage == 1) {
                    this.masterPages[0].style.left = this.page * 100 - 100 + "%";
                    this.masterPages[1].style.left = this.page * 100 + "%";
                    this.masterPages[2].style.left = this.page * 100 + 100 + "%";
                    this.masterPages[0].dataset.upcomingPageIndex = this.page === 0 ? this.options.numberOfPages - 1 : this.page - 1;
                    this.masterPages[1].dataset.upcomingPageIndex = this.page;
                    this.masterPages[2].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1
                } else {
                    this.masterPages[1].style.left = this.page * 100 - 100 + "%";
                    this.masterPages[2].style.left = this.page * 100 + "%";
                    this.masterPages[0].style.left = this.page * 100 + 100 + "%";
                    this.masterPages[1].dataset.upcomingPageIndex = this.page === 0 ? this.options.numberOfPages - 1 : this.page - 1;
                    this.masterPages[2].dataset.upcomingPageIndex = this.page;
                    this.masterPages[0].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1
                }
            }
            this.__flip()
        },
        next: function() {
            if (!this.options.loop && this.x == this.maxX) {
                return
            }
            this.directionX = -1;
            this.x -= 1;
            this.__checkPosition()
        },
        prev: function() {
            if (!this.options.loop && this.x === 0) {
                return
            }
            this.directionX = 1;
            this.x += 1;
            this.__checkPosition()
        },
        handleEvent: function(u) {
            switch (u.type) {
            case o:
                this.__start(u);
                break;
            case b:
                this.__move(u);
                break;
            case p:
            case l:
                this.__end(u);
                break;
            case g:
                this.__resize();
                break;
            case a:
            case "otransitionend":
                if (u.target == this.slider && !this.options.hastyPageFlip) {
                    this.__flip()
                }
                break
            }
        },
        __pos: function(u) {
            this.x = u;
            this.slider.style[j] = "translate(" + u + "px,0)" + t
        },
        __resize: function() {
            this.refreshSize();
            this.slider.style[i] = "0s";
            this.__pos( - this.page * this.pageWidth)
        },
        __start: function(v) {
            if (this.initiated) {
                return
            }
            var u = q ? v.touches[0] : v;
            this.initiated = true;
            this.moved = false;
            this.thresholdExceeded = false;
            this.startX = u.pageX;
            this.startY = u.pageY;
            this.pointX = u.pageX;
            this.pointY = u.pageY;
            this.stepsX = 0;
            this.stepsY = 0;
            this.directionX = 0;
            this.directionLocked = false;
            this.slider.style[i] = "0s";
            this.__event("touchstart")
        },
        __move: function(x) {
            if (!this.initiated) {
                return
            }
            var v = q ? x.touches[0] : x,
            w = v.pageX - this.pointX,
            u = v.pageY - this.pointY,
            z = this.x + w,
            y = Math.abs(v.pageX - this.startX);
            this.moved = true;
            this.pointX = v.pageX;
            this.pointY = v.pageY;
            this.directionX = w > 0 ? 1 : w < 0 ? -1 : 0;
            this.stepsX += Math.abs(w);
            this.stepsY += Math.abs(u);
            if (this.stepsX < 10 && this.stepsY < 10) {
                return
            }
            if (!this.directionLocked && this.stepsY > this.stepsX) {
                this.initiated = false;
                return
            }
            x.preventDefault();
            this.directionLocked = true;
            if (!this.options.loop && (z > 0 || z < this.maxX)) {
                z = this.x + (w / 2)
            }
            if (!this.thresholdExceeded && y >= this.snapThreshold) {
                this.thresholdExceeded = true;
                this.__event("moveout")
            } else {
                if (this.thresholdExceeded && y < this.snapThreshold) {
                    this.thresholdExceeded = false;
                    this.__event("movein")
                }
            }
            this.__pos(z)
        },
        __end: function(v) {
            if (!this.initiated) {
                return
            }
            var u = q ? v.changedTouches[0] : v,
            w = Math.abs(u.pageX - this.startX);
            this.initiated = false;
            if (!this.moved) {
                return
            }
            if (!this.options.loop && (this.x > 0 || this.x < this.maxX)) {
                w = 0;
                this.__event("movein")
            }
            if (w < this.snapThreshold) {
                this.slider.style[i] = Math.floor(300 * w / this.snapThreshold) + "ms";
                this.__pos( - this.page * this.pageWidth);
                return
            }
            this.__checkPosition()
        },
        __checkPosition: function() {
            var w, u, v;
            this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, "");
            if (this.directionX > 0) {
                this.page = Math.max(this.page - 1, -Math.ceil(this.x / this.pageWidth));
                this.currentMasterPage = (this.page + 1) - Math.floor((this.page + 1) / 3) * 3;
                this.pageIndex = this.pageIndex == 0 ? this.options.numberOfPages - 1 : this.pageIndex - 1;
                w = this.currentMasterPage - 1;
                w = w < 0 ? 2 : w;
                this.masterPages[w].style.left = this.page * 100 - 100 + "%";
                u = this.page - 1
            } else {
                this.page = -Math.floor(this.x / this.pageWidth);
                this.currentMasterPage = (this.page + 1) - Math.floor((this.page + 1) / 3) * 3;
                this.pageIndex = this.pageIndex == this.options.numberOfPages - 1 ? 0 : this.pageIndex + 1;
                w = this.currentMasterPage + 1;
                w = w > 2 ? 0 : w;
                this.masterPages[w].style.left = this.page * 100 + 100 + "%";
                u = this.page + 1
            }
            v = this.masterPages[this.currentMasterPage].className;
            /(^|\s)swipeview-active(\s|$)/.test(v) || (this.masterPages[this.currentMasterPage].className = !v ? "swipeview-active": v + " swipeview-active");
            v = this.masterPages[w].className;
            /(^|\s)swipeview-loading(\s|$)/.test(v) || (this.masterPages[w].className = !v ? "swipeview-loading": v + " swipeview-loading");
            u = u - Math.floor(u / this.options.numberOfPages) * this.options.numberOfPages;
            this.masterPages[w].dataset.upcomingPageIndex = u;
            newX = -this.page * this.pageWidth;
            this.slider.style[i] = Math.floor(500 * Math.abs(this.x - newX) / this.pageWidth) + "ms";
            if (!this.options.loop) {
                this.masterPages[w].style.visibility = newX === 0 || newX == this.maxX ? "hidden": ""
            }
            if (this.x == newX) {
                this.__flip()
            } else {
                this.__pos(newX);
                if (this.options.hastyPageFlip) {
                    this.__flip()
                }
            }
        },
        __flip: function() {
            this.__event("flip");
            for (var u = 0; u < 3; u++) {
                this.masterPages[u].className = this.masterPages[u].className.replace(/(^|\s)swipeview-loading(\s|$)/, "");
                this.masterPages[u].dataset.pageIndex = this.masterPages[u].dataset.upcomingPageIndex
            }
        },
        __event: function(u) {
            var v = m.createEvent("Event");
            v.initEvent("swipeview-" + u, true, true);
            this.wrapper.dispatchEvent(v)
        }
    };
    function n(u) {
        if (r === "") {
            return u
        }
        u = u.charAt(0).toUpperCase() + u.substr(1);
        return r + u
    }
    return e
})(window, document); (function(f, a, e) {
    var h = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.oRequestAnimationFrame || f.msRequestAnimationFrame ||
    function(i) {
        f.setTimeout(i, 1000 / 60)
    };
    var c = (function() {
        var m = {};
        var n = a.createElement("div").style;
        var k = (function() {
            var r = ["t", "webkitT", "MozT", "msT", "OT"],
            p,
            q = 0,
            o = r.length;
            for (; q < o; q++) {
                p = r[q] + "ransform";
                if (p in n) {
                    return r[q].substr(0, r[q].length - 1)
                }
            }
            return false
        })();
        function l(o) {
            if (k === false) {
                return false
            }
            if (k === "") {
                return o
            }
            return k + o.charAt(0).toUpperCase() + o.substr(1)
        }
        m.getTime = Date.now ||
        function i() {
            return new Date().getTime()
        };
        m.extend = function(q, p) {
            for (var o in p) {
                q[o] = p[o]
            }
        };
        m.addEvent = function(r, q, p, o) {
            r.addEventListener(q, p, !!o)
        };
        m.removeEvent = function(r, q, p, o) {
            r.removeEventListener(q, p, !!o)
        };
        m.momentum = function(u, q, r, o, v, w) {
            var p = u - q,
            s = e.abs(p) / r,
            x,
            t;
            w = w === undefined ? 0.0006 : w;
            x = u + (s * s) / (2 * w) * (p < 0 ? -1 : 1);
            t = s / w;
            if (x < o) {
                x = v ? o - (v / 2.5 * (s / 8)) : o;
                p = e.abs(x - u);
                t = p / s
            } else {
                if (x > 0) {
                    x = v ? v / 2.5 * (s / 8) : 0;
                    p = e.abs(u) + x;
                    t = p / s
                }
            }
            return {
                destination: e.round(x),
                duration: t
            }
        };
        var j = l("transform");
        m.extend(m, {
            hasTransform: j !== false,
            hasPerspective: l("perspective") in n,
            hasTouch: "ontouchstart" in f,
            hasPointer: navigator.msPointerEnabled,
            hasTransition: l("transition") in n
        });
        m.isBadAndroid = /Android /.test(f.navigator.appVersion) && !(/Chrome\/\d/.test(f.navigator.appVersion));
        m.extend(m.style = {},
        {
            transform: j,
            transitionTimingFunction: l("transitionTimingFunction"),
            transitionDuration: l("transitionDuration"),
            transitionDelay: l("transitionDelay"),
            transformOrigin: l("transformOrigin")
        });
        m.hasClass = function(p, q) {
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)");
            return o.test(p.className)
        };
        m.addClass = function(p, q) {
            if (m.hasClass(p, q)) {
                return
            }
            var o = p.className.split(" ");
            o.push(q);
            p.className = o.join(" ")
        };
        m.removeClass = function(p, q) {
            if (!m.hasClass(p, q)) {
                return
            }
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)", "g");
            p.className = p.className.replace(o, " ")
        };
        m.offset = function(o) {
            var q = -o.offsetLeft,
            p = -o.offsetTop;
            while (o = o.offsetParent) {
                q -= o.offsetLeft;
                p -= o.offsetTop
            }
            return {
                left: q,
                top: p
            }
        };
        m.preventDefaultException = function(q, p) {
            for (var o in p) {
                if (p[o].test(q[o])) {
                    return true
                }
            }
            return false
        };
        m.extend(m.eventType = {},
        {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        m.extend(m.ease = {},
        {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(o) {
                    return o * (2 - o)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(o) {
                    return e.sqrt(1 - (--o * o))
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(p) {
                    var o = 4;
                    return (p = p - 1) * p * ((o + 1) * p + o) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(o) {
                    if ((o /= 1) < (1 / 2.75)) {
                        return 7.5625 * o * o
                    } else {
                        if (o < (2 / 2.75)) {
                            return 7.5625 * (o -= (1.5 / 2.75)) * o + 0.75
                        } else {
                            if (o < (2.5 / 2.75)) {
                                return 7.5625 * (o -= (2.25 / 2.75)) * o + 0.9375
                            } else {
                                return 7.5625 * (o -= (2.625 / 2.75)) * o + 0.984375
                            }
                        }
                    }
                }
            },
            elastic: {
                style: "",
                fn: function(o) {
                    var p = 0.22,
                    q = 0.4;
                    if (o === 0) {
                        return 0
                    }
                    if (o == 1) {
                        return 1
                    }
                    return (q * e.pow(2, -10 * o) * e.sin((o - p / 4) * (2 * e.PI) / p) + 1)
                }
            }
        });
        m.tap = function(q, o) {
            var p = a.createEvent("Event");
            p.initEvent(o, true, true);
            p.pageX = q.pageX;
            p.pageY = q.pageY;
            q.target.dispatchEvent(p)
        };
        m.click = function(q) {
            var p = q.target,
            o;
            if (! (/(SELECT|INPUT|TEXTAREA)/i).test(p.tagName)) {
                o = a.createEvent("MouseEvents");
                o.initMouseEvent("click", true, true, q.view, 1, p.screenX, p.screenY, p.clientX, p.clientY, q.ctrlKey, q.altKey, q.shiftKey, q.metaKey, 0, null);
                o._constructed = true;
                p.dispatchEvent(o)
            }
        };
        return m
    })();
    function g(l, j) {
        this.wrapper = typeof l == "string" ? a.querySelector(l) : l;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var k in j) {
            this.options[k] = j[k]
        }
        this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)": "";
        this.options.useTransition = c.hasTransition && this.options.useTransition;
        this.options.useTransform = c.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical": this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? false: this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false: this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? c.ease[this.options.bounceEasing] || c.ease.circular: this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = "tap"
        }
        if (this.options.shrinkScrollbars == "scale") {
            this.options.useTransition = false
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }
    g.prototype = {
        version: "5.1.1",
        _init: function() {
            this._initEvents();
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators()
            }
            if (this.options.mouseWheel) {
                this._initWheel()
            }
            if (this.options.snap) {
                this._initSnap()
            }
            if (this.options.keyBindings) {
                this._initKeys()
            }
        },
        destroy: function() {
            this._initEvents(true);
            this._execEvent("destroy")
        },
        _transitionEnd: function(i) {
            if (i.target != this.scroller || !this.isInTransition) {
                return
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        },
        _start: function(j) {
            if (c.eventType[j.type] != 1) {
                if (j.button !== 0) {
                    return
                }
            }
            if (!this.enabled || (this.initiated && c.eventType[j.type] !== this.initiated)) {
                return
            }
            if (this.options.preventDefault && !c.isBadAndroid && !c.preventDefaultException(j.target, this.options.preventDefaultException)) {
                j.preventDefault()
            }
            var i = j.touches ? j.touches[0] : j,
            k;
            this.initiated = c.eventType[j.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = c.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                k = this.getComputedPosition();
                this._translate(e.round(k.x), e.round(k.y));
                this._execEvent("scrollEnd")
            } else {
                if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd")
                }
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this._execEvent("beforeScrollStart")
        },
        _move: function(n) {
            if (!this.enabled || c.eventType[n.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                n.preventDefault()
            }
            var p = n.touches ? n.touches[0] : n,
            k = p.pageX - this.pointX,
            j = p.pageY - this.pointY,
            o = c.getTime(),
            i,
            q,
            m,
            l;
            this.pointX = p.pageX;
            this.pointY = p.pageY;
            this.distX += k;
            this.distY += j;
            m = e.abs(this.distX);
            l = e.abs(this.distY);
            if (o - this.endTime > 300 && (m < 10 && l < 10)) {
                return
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (m > l + this.options.directionLockThreshold) {
                    this.directionLocked = "h"
                } else {
                    if (l >= m + this.options.directionLockThreshold) {
                        this.directionLocked = "v"
                    } else {
                        this.directionLocked = "n"
                    }
                }
            }
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") {
                    n.preventDefault()
                } else {
                    if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return
                    }
                }
                j = 0
            } else {
                if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        n.preventDefault()
                    } else {
                        if (this.options.eventPassthrough == "vertical") {
                            this.initiated = false;
                            return
                        }
                    }
                    k = 0
                }
            }
            k = this.hasHorizontalScroll ? k: 0;
            j = this.hasVerticalScroll ? j: 0;
            i = this.x + k;
            q = this.y + j;
            if (i > 0 || i < this.maxScrollX) {
                i = this.options.bounce ? this.x + k / 3 : i > 0 ? 0 : this.maxScrollX
            }
            if (q > 0 || q < this.maxScrollY) {
                q = this.options.bounce ? this.y + j / 3 : q > 0 ? 0 : this.maxScrollY
            }
            this.directionX = k > 0 ? -1 : k < 0 ? 1 : 0;
            this.directionY = j > 0 ? -1 : j < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent("scrollStart")
            }
            this.moved = true;
            this._translate(i, q);
            if (o - this.startTime > 300) {
                this.startTime = o;
                this.startX = this.x;
                this.startY = this.y
            }
        },
        _end: function(o) {
            if (!this.enabled || c.eventType[o.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault && !c.preventDefaultException(o.target, this.options.preventDefaultException)) {
                o.preventDefault()
            }
            var q = o.changedTouches ? o.changedTouches[0] : o,
            k,
            j,
            n = c.getTime() - this.startTime,
            i = e.round(this.x),
            t = e.round(this.y),
            s = e.abs(i - this.startX),
            r = e.abs(t - this.startY),
            l = 0,
            p = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = c.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return
            }
            this.scrollTo(i, t);
            if (!this.moved) {
                if (this.options.tap) {
                    c.tap(o, this.options.tap)
                }
                if (this.options.click) {
                    c.click(o)
                }
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && n < 200 && s < 100 && r < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && n < 300) {
                k = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                    destination: i,
                    duration: 0
                };
                j = this.hasVerticalScroll ? c.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                    destination: t,
                    duration: 0
                };
                i = k.destination;
                t = j.destination;
                l = e.max(k.duration, j.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var m = this._nearestSnap(i, t);
                this.currentPage = m;
                l = this.options.snapSpeed || e.max(e.max(e.min(e.abs(i - m.x), 1000), e.min(e.abs(t - m.y), 1000)), 300);
                i = m.x;
                t = m.y;
                this.directionX = 0;
                this.directionY = 0;
                p = this.options.bounceEasing
            }
            if (i != this.x || t != this.y) {
                if (i > 0 || i < this.maxScrollX || t > 0 || t < this.maxScrollY) {
                    p = c.ease.quadratic
                }
                this.scrollTo(i, t, l, p);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var i = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                i.refresh()
            },
            this.options.resizePolling)
        },
        resetPosition: function(j) {
            var i = this.x,
            k = this.y;
            j = j || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                i = 0
            } else {
                if (this.x < this.maxScrollX) {
                    i = this.maxScrollX
                }
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                k = 0
            } else {
                if (this.y < this.maxScrollY) {
                    k = this.maxScrollY
                }
            }
            if (i == this.x && k == this.y) {
                return false
            }
            this.scrollTo(i, k, j, this.options.bounceEasing);
            return true
        },
        disable: function() {
            this.enabled = false
        },
        enable: function() {
            this.enabled = true
        },
        refresh: function() {
            var i = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = c.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        },
        on: function(j, i) {
            if (!this._events[j]) {
                this._events[j] = []
            }
            this._events[j].push(i)
        },
        off: function(k, j) {
            if (!this._events[k]) {
                return
            }
            var i = this._events[k].indexOf(j);
            if (i > -1) {
                this._events[k].splice(i, 1)
            }
        },
        _execEvent: function(m) {
            if (!this._events[m]) {
                return
            }
            var k = 0,
            j = this._events[m].length;
            if (!j) {
                return
            }
            for (; k < j; k++) {
                this._events[m][k].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(i, l, j, k) {
            i = this.x + i;
            l = this.y + l;
            j = j || 0;
            this.scrollTo(i, l, j, k)
        },
        scrollTo: function(i, l, j, k) {
            k = k || c.ease.circular;
            this.isInTransition = this.options.useTransition && j > 0;
            if (!j || (this.options.useTransition && k.style)) {
                this._transitionTimingFunction(k.style);
                this._transitionTime(j);
                this._translate(i, l)
            } else {
                this._animate(i, l, j, k.fn)
            }
        },
        scrollToElement: function(j, k, i, n, m) {
            j = j.nodeType ? j: this.scroller.querySelector(j);
            if (!j) {
                return
            }
            var l = c.offset(j);
            l.left -= this.wrapperOffset.left;
            l.top -= this.wrapperOffset.top;
            if (i === true) {
                i = e.round(j.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
            }
            if (n === true) {
                n = e.round(j.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
            }
            l.left -= i || 0;
            l.top -= n || 0;
            l.left = l.left > 0 ? 0 : l.left < this.maxScrollX ? this.maxScrollX: l.left;
            l.top = l.top > 0 ? 0 : l.top < this.maxScrollY ? this.maxScrollY: l.top;
            k = k === undefined || k === null || k === "auto" ? e.max(e.abs(this.x - l.left), e.abs(this.y - l.top)) : k;
            this.scrollTo(l.left, l.top, k, m)
        },
        _transitionTime: function(k) {
            k = k || 0;
            this.scrollerStyle[c.style.transitionDuration] = k + "ms";
            if (!k && c.isBadAndroid) {
                this.scrollerStyle[c.style.transitionDuration] = "0.001s"
            }
            if (this.indicators) {
                for (var j = this.indicators.length; j--;) {
                    this.indicators[j].transitionTime(k)
                }
            }
        },
        _transitionTimingFunction: function(k) {
            this.scrollerStyle[c.style.transitionTimingFunction] = k;
            if (this.indicators) {
                for (var j = this.indicators.length; j--;) {
                    this.indicators[j].transitionTimingFunction(k)
                }
            }
        },
        _translate: function(j, l) {
            if (this.options.useTransform) {
                this.scrollerStyle[c.style.transform] = "translate(" + j + "px," + l + "px)" + this.translateZ
            } else {
                j = e.round(j);
                l = e.round(l);
                this.scrollerStyle.left = j + "px";
                this.scrollerStyle.top = l + "px"
            }
            this.x = j;
            this.y = l;
            if (this.indicators) {
                for (var k = this.indicators.length; k--;) {
                    this.indicators[k].updatePosition()
                }
            }
        },
        _initEvents: function(i) {
            var j = i ? c.removeEvent: c.addEvent,
            k = this.options.bindToWrapper ? this.wrapper: f;
            j(f, "orientationchange", this);
            j(f, "resize", this);
            if (this.options.click) {
                j(this.wrapper, "click", this, true)
            }
            if (!this.options.disableMouse) {
                j(this.wrapper, "mousedown", this);
                j(k, "mousemove", this);
                j(k, "mousecancel", this);
                j(k, "mouseup", this)
            }
            if (c.hasPointer && !this.options.disablePointer) {
                j(this.wrapper, "MSPointerDown", this);
                j(k, "MSPointerMove", this);
                j(k, "MSPointerCancel", this);
                j(k, "MSPointerUp", this)
            }
            if (c.hasTouch && !this.options.disableTouch) {
                j(this.wrapper, "touchstart", this);
                j(k, "touchmove", this);
                j(k, "touchcancel", this);
                j(k, "touchend", this)
            }
            j(this.scroller, "transitionend", this);
            j(this.scroller, "webkitTransitionEnd", this);
            j(this.scroller, "oTransitionEnd", this);
            j(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var j = f.getComputedStyle(this.scroller, null),
            i,
            k;
            if (this.options.useTransform) {
                j = j[c.style.transform].split(")")[0].split(", ");
                i = +(j[12] || j[4]);
                k = +(j[13] || j[5])
            } else {
                i = +j.left.replace(/[^-\d.]/g, "");
                k = +j.top.replace(/[^-\d.]/g, "")
            }
            return {
                x: i,
                y: k
            }
        },
        _initIndicators: function() {
            var l = this.options.interactiveScrollbars,
            n = typeof this.options.scrollbars != "string",
            p = [],
            k;
            var o = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    k = {
                        el: d("v", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
                if (this.options.scrollX) {
                    k = {
                        el: d("h", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
            }
            if (this.options.indicators) {
                p = p.concat(this.options.indicators)
            }
            for (var m = p.length; m--;) {
                this.indicators.push(new b(this, p[m]))
            }
            function j(r) {
                for (var q = o.indicators.length; q--;) {
                    r.call(o.indicators[q])
                }
            }
            if (this.options.fadeScrollbars) {
                this.on("scrollEnd",
                function() {
                    j(function() {
                        this.fade()
                    })
                });
                this.on("scrollCancel",
                function() {
                    j(function() {
                        this.fade()
                    })
                });
                this.on("scrollStart",
                function() {
                    j(function() {
                        this.fade(1)
                    })
                });
                this.on("beforeScrollStart",
                function() {
                    j(function() {
                        this.fade(1, true)
                    })
                })
            }
            this.on("refresh",
            function() {
                j(function() {
                    this.refresh()
                })
            });
            this.on("destroy",
            function() {
                j(function() {
                    this.destroy()
                });
                delete this.indicators
            })
        },
        _initWheel: function() {
            c.addEvent(this.wrapper, "wheel", this);
            c.addEvent(this.wrapper, "mousewheel", this);
            c.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy",
            function() {
                c.removeEvent(this.wrapper, "wheel", this);
                c.removeEvent(this.wrapper, "mousewheel", this);
                c.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(m) {
            if (!this.enabled) {
                return
            }
            m.preventDefault();
            m.stopPropagation();
            var k, j, n, l, i = this;
            if (this.wheelTimeout === undefined) {
                i._execEvent("scrollStart")
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                i._execEvent("scrollEnd");
                i.wheelTimeout = undefined
            },
            400);
            if ("deltaX" in m) {
                k = -m.deltaX;
                j = -m.deltaY
            } else {
                if ("wheelDeltaX" in m) {
                    k = m.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    j = m.wheelDeltaY / 120 * this.options.mouseWheelSpeed
                } else {
                    if ("wheelDelta" in m) {
                        k = j = m.wheelDelta / 120 * this.options.mouseWheelSpeed
                    } else {
                        if ("detail" in m) {
                            k = j = -m.detail / 3 * this.options.mouseWheelSpeed
                        } else {
                            return
                        }
                    }
                }
            }
            k *= this.options.invertWheelDirection;
            j *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                k = j;
                j = 0
            }
            if (this.options.snap) {
                n = this.currentPage.pageX;
                l = this.currentPage.pageY;
                if (k > 0) {
                    n--
                } else {
                    if (k < 0) {
                        n++
                    }
                }
                if (j > 0) {
                    l--
                } else {
                    if (j < 0) {
                        l++
                    }
                }
                this.goToPage(n, l);
                return
            }
            n = this.x + e.round(this.hasHorizontalScroll ? k: 0);
            l = this.y + e.round(this.hasVerticalScroll ? j: 0);
            if (n > 0) {
                n = 0
            } else {
                if (n < this.maxScrollX) {
                    n = this.maxScrollX
                }
            }
            if (l > 0) {
                l = 0
            } else {
                if (l < this.maxScrollY) {
                    l = this.maxScrollY
                }
            }
            this.scrollTo(n, l, 0)
        },
        _initSnap: function() {
            this.currentPage = {};
            if (typeof this.options.snap == "string") {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap)
            }
            this.on("refresh",
            function() {
                var s = 0,
                q, o = 0,
                k, r, p, u = 0,
                t, w = this.options.snapStepX || this.wrapperWidth,
                v = this.options.snapStepY || this.wrapperHeight,
                j;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return
                }
                if (this.options.snap === true) {
                    r = e.round(w / 2);
                    p = e.round(v / 2);
                    while (u > -this.scrollerWidth) {
                        this.pages[s] = [];
                        q = 0;
                        t = 0;
                        while (t > -this.scrollerHeight) {
                            this.pages[s][q] = {
                                x: e.max(u, this.maxScrollX),
                                y: e.max(t, this.maxScrollY),
                                width: w,
                                height: v,
                                cx: u - r,
                                cy: t - p
                            };
                            t -= v;
                            q++
                        }
                        u -= w;
                        s++
                    }
                } else {
                    j = this.options.snap;
                    q = j.length;
                    k = -1;
                    for (; s < q; s++) {
                        if (s === 0 || j[s].offsetLeft <= j[s - 1].offsetLeft) {
                            o = 0;
                            k++
                        }
                        if (!this.pages[o]) {
                            this.pages[o] = []
                        }
                        u = e.max( - j[s].offsetLeft, this.maxScrollX);
                        t = e.max( - j[s].offsetTop, this.maxScrollY);
                        r = u - e.round(j[s].offsetWidth / 2);
                        p = t - e.round(j[s].offsetHeight / 2);
                        this.pages[o][k] = {
                            x: u,
                            y: t,
                            width: j[s].offsetWidth,
                            height: j[s].offsetHeight,
                            cx: r,
                            cy: p
                        };
                        if (u > this.maxScrollX) {
                            o++
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on("flick",
            function() {
                var i = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1000), e.min(e.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, i)
            })
        },
        _nearestSnap: function(k, p) {
            if (!this.pages.length) {
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                }
            }
            var o = 0,
            n = this.pages.length,
            j = 0;
            if (e.abs(k - this.absStartX) < this.snapThresholdX && e.abs(p - this.absStartY) < this.snapThresholdY) {
                return this.currentPage
            }
            if (k > 0) {
                k = 0
            } else {
                if (k < this.maxScrollX) {
                    k = this.maxScrollX
                }
            }
            if (p > 0) {
                p = 0
            } else {
                if (p < this.maxScrollY) {
                    p = this.maxScrollY
                }
            }
            for (; o < n; o++) {
                if (k >= this.pages[o][0].cx) {
                    k = this.pages[o][0].x;
                    break
                }
            }
            n = this.pages[o].length;
            for (; j < n; j++) {
                if (p >= this.pages[0][j].cy) {
                    p = this.pages[0][j].y;
                    break
                }
            }
            if (o == this.currentPage.pageX) {
                o += this.directionX;
                if (o < 0) {
                    o = 0
                } else {
                    if (o >= this.pages.length) {
                        o = this.pages.length - 1
                    }
                }
                k = this.pages[o][0].x
            }
            if (j == this.currentPage.pageY) {
                j += this.directionY;
                if (j < 0) {
                    j = 0
                } else {
                    if (j >= this.pages[0].length) {
                        j = this.pages[0].length - 1
                    }
                }
                p = this.pages[0][j].y
            }
            return {
                x: k,
                y: p,
                pageX: o,
                pageY: j
            }
        },
        goToPage: function(i, n, j, m) {
            m = m || this.options.bounceEasing;
            if (i >= this.pages.length) {
                i = this.pages.length - 1
            } else {
                if (i < 0) {
                    i = 0
                }
            }
            if (n >= this.pages[i].length) {
                n = this.pages[i].length - 1
            } else {
                if (n < 0) {
                    n = 0
                }
            }
            var l = this.pages[i][n].x,
            k = this.pages[i][n].y;
            j = j === undefined ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(l - this.x), 1000), e.min(e.abs(k - this.y), 1000)), 300) : j;
            this.currentPage = {
                x: l,
                y: k,
                pageX: i,
                pageY: n
            };
            this.scrollTo(l, k, j, m)
        },
        next: function(j, l) {
            var i = this.currentPage.pageX,
            k = this.currentPage.pageY;
            i++;
            if (i >= this.pages.length && this.hasVerticalScroll) {
                i = 0;
                k++
            }
            this.goToPage(i, k, j, l)
        },
        prev: function(j, l) {
            var i = this.currentPage.pageX,
            k = this.currentPage.pageY;
            i--;
            if (i < 0 && this.hasVerticalScroll) {
                i = 0;
                k--
            }
            this.goToPage(i, k, j, l)
        },
        _initKeys: function(l) {
            var k = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            var j;
            if (typeof this.options.keyBindings == "object") {
                for (j in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[j] == "string") {
                        this.options.keyBindings[j] = this.options.keyBindings[j].toUpperCase().charCodeAt(0)
                    }
                }
            } else {
                this.options.keyBindings = {}
            }
            for (j in k) {
                this.options.keyBindings[j] = this.options.keyBindings[j] || k[j]
            }
            c.addEvent(f, "keydown", this);
            this.on("destroy",
            function() {
                c.removeEvent(f, "keydown", this)
            })
        },
        _key: function(n) {
            if (!this.enabled) {
                return
            }
            var i = this.options.snap,
            o = i ? this.currentPage.pageX: this.x,
            m = i ? this.currentPage.pageY: this.y,
            k = c.getTime(),
            j = this.keyTime || 0,
            l = 0.25,
            p;
            if (this.options.useTransition && this.isInTransition) {
                p = this.getComputedPosition();
                this._translate(e.round(p.x), e.round(p.y));
                this.isInTransition = false
            }
            this.keyAcceleration = k - j < 200 ? e.min(this.keyAcceleration + l, 50) : 0;
            switch (n.keyCode) {
            case this.options.keyBindings.pageUp:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    o += i ? 1 : this.wrapperWidth
                } else {
                    m += i ? 1 : this.wrapperHeight
                }
                break;
            case this.options.keyBindings.pageDown:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    o -= i ? 1 : this.wrapperWidth
                } else {
                    m -= i ? 1 : this.wrapperHeight
                }
                break;
            case this.options.keyBindings.end:
                o = i ? this.pages.length - 1 : this.maxScrollX;
                m = i ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                o = 0;
                m = 0;
                break;
            case this.options.keyBindings.left:
                o += i ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                m += i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                o -= i ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                m -= i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return
            }
            if (i) {
                this.goToPage(o, m);
                return
            }
            if (o > 0) {
                o = 0;
                this.keyAcceleration = 0
            } else {
                if (o < this.maxScrollX) {
                    o = this.maxScrollX;
                    this.keyAcceleration = 0
                }
            }
            if (m > 0) {
                m = 0;
                this.keyAcceleration = 0
            } else {
                if (m < this.maxScrollY) {
                    m = this.maxScrollY;
                    this.keyAcceleration = 0
                }
            }
            this.scrollTo(o, m, 0);
            this.keyTime = k
        },
        _animate: function(r, q, l, i) {
            var o = this,
            n = this.x,
            m = this.y,
            j = c.getTime(),
            p = j + l;
            function k() {
                var s = c.getTime(),
                u,
                t,
                v;
                if (s >= p) {
                    o.isAnimating = false;
                    o._translate(r, q);
                    if (!o.resetPosition(o.options.bounceTime)) {
                        o._execEvent("scrollEnd")
                    }
                    return
                }
                s = (s - j) / l;
                v = i(s);
                u = (r - n) * v + n;
                t = (q - m) * v + m;
                o._translate(u, t);
                if (o.isAnimating) {
                    h(k)
                }
            }
            this.isAnimating = true;
            k()
        },
        handleEvent: function(i) {
            switch (i.type) {
            case "touchstart":
            case "MSPointerDown":
            case "mousedown":
                this._start(i);
                break;
            case "touchmove":
            case "MSPointerMove":
            case "mousemove":
                this._move(i);
                break;
            case "touchend":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(i);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(i);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(i);
                break;
            case "keydown":
                this._key(i);
                break;
            case "click":
                if (!i._constructed) {
                    i.preventDefault();
                    i.stopPropagation()
                }
                break
            }
        }
    };
    function d(l, j, k) {
        var m = a.createElement("div"),
        i = a.createElement("div");
        if (k === true) {
            m.style.cssText = "position:absolute;z-index:9999";
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
        }
        i.className = "iScrollIndicator";
        if (l == "h") {
            if (k === true) {
                m.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                i.style.height = "100%"
            }
            m.className = "iScrollHorizontalScrollbar"
        } else {
            if (k === true) {
                m.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                i.style.width = "100%"
            }
            m.className = "iScrollVerticalScrollbar"
        }
        m.style.cssText += ";overflow:hidden";
        if (!j) {
            m.style.pointerEvents = "none"
        }
        m.appendChild(i);
        return m
    }
    function b(j, k) {
        this.wrapper = typeof k.el == "string" ? a.querySelector(k.el) : k.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = j;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var l in k) {
            this.options[l] = k[l]
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                c.addEvent(this.indicator, "touchstart", this);
                c.addEvent(f, "touchend", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(this.indicator, "MSPointerDown", this);
                c.addEvent(f, "MSPointerUp", this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(this.indicator, "mousedown", this);
                c.addEvent(f, "mouseup", this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[c.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[c.style.transitionDuration] = c.isBadAndroid ? "0.001s": "0ms";
            this.wrapperStyle.opacity = "0"
        }
    }
    b.prototype = {
        handleEvent: function(i) {
            switch (i.type) {
            case "touchstart":
            case "MSPointerDown":
            case "mousedown":
                this._start(i);
                break;
            case "touchmove":
            case "MSPointerMove":
            case "mousemove":
                this._move(i);
                break;
            case "touchend":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(i);
                break
            }
        },
        destroy: function() {
            if (this.options.interactive) {
                c.removeEvent(this.indicator, "touchstart", this);
                c.removeEvent(this.indicator, "MSPointerDown", this);
                c.removeEvent(this.indicator, "mousedown", this);
                c.removeEvent(f, "touchmove", this);
                c.removeEvent(f, "MSPointerMove", this);
                c.removeEvent(f, "mousemove", this);
                c.removeEvent(f, "touchend", this);
                c.removeEvent(f, "MSPointerUp", this);
                c.removeEvent(f, "mouseup", this)
            }
            if (this.options.defaultScrollbars) {
                this.wrapper.parentNode.removeChild(this.wrapper)
            }
        },
        _start: function(j) {
            var i = j.touches ? j.touches[0] : j;
            j.preventDefault();
            j.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = i.pageX;
            this.lastPointY = i.pageY;
            this.startTime = c.getTime();
            if (!this.options.disableTouch) {
                c.addEvent(f, "touchmove", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(f, "MSPointerMove", this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(f, "mousemove", this)
            }
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(n) {
            var j = n.touches ? n.touches[0] : n,
            k,
            i,
            o,
            m,
            l = c.getTime();
            if (!this.moved) {
                this.scroller._execEvent("scrollStart")
            }
            this.moved = true;
            k = j.pageX - this.lastPointX;
            this.lastPointX = j.pageX;
            i = j.pageY - this.lastPointY;
            this.lastPointY = j.pageY;
            o = this.x + k;
            m = this.y + i;
            this._pos(o, m);
            n.preventDefault();
            n.stopPropagation()
        },
        _end: function(k) {
            if (!this.initiated) {
                return
            }
            this.initiated = false;
            k.preventDefault();
            k.stopPropagation();
            c.removeEvent(f, "touchmove", this);
            c.removeEvent(f, "MSPointerMove", this);
            c.removeEvent(f, "mousemove", this);
            if (this.scroller.options.snap) {
                var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var j = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - i.x), 1000), e.min(e.abs(this.scroller.y - i.y), 1000)), 300);
                if (this.scroller.x != i.x || this.scroller.y != i.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = i;
                    this.scroller.scrollTo(i.x, i.y, j, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) {
                this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(i) {
            i = i || 0;
            this.indicatorStyle[c.style.transitionDuration] = i + "ms";
            if (!i && c.isBadAndroid) {
                this.indicatorStyle[c.style.transitionDuration] = "0.001s"
            }
        },
        transitionTimingFunction: function(i) {
            this.indicatorStyle[c.style.transitionTimingFunction] = i
        },
        refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block": "none"
            } else {
                if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block": "none"
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block": "none"
                }
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                c.addClass(this.wrapper, "iScrollBothScrollbars");
                c.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "8px"
                    } else {
                        this.wrapper.style.bottom = "8px"
                    }
                }
            } else {
                c.removeClass(this.wrapper, "iScrollBothScrollbars");
                c.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "2px"
                    } else {
                        this.wrapper.style.bottom = "2px"
                    }
                }
            }
            var i = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px"
                } else {
                    this.indicatorWidth = this.indicator.clientWidth
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == "clip") {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px"
                } else {
                    this.indicatorHeight = this.indicator.clientHeight
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == "clip") {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
            }
            this.updatePosition()
        },
        updatePosition: function() {
            var i = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
            j = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (i < this.minBoundaryX) {
                    if (this.options.shrink == "scale") {
                        this.width = e.max(this.indicatorWidth + i, 8);
                        this.indicatorStyle.width = this.width + "px"
                    }
                    i = this.minBoundaryX
                } else {
                    if (i > this.maxBoundaryX) {
                        if (this.options.shrink == "scale") {
                            this.width = e.max(this.indicatorWidth - (i - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + "px";
                            i = this.maxPosX + this.indicatorWidth - this.width
                        } else {
                            i = this.maxBoundaryX
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
                            this.width = this.indicatorWidth;
                            this.indicatorStyle.width = this.width + "px"
                        }
                    }
                }
                if (j < this.minBoundaryY) {
                    if (this.options.shrink == "scale") {
                        this.height = e.max(this.indicatorHeight + j * 3, 8);
                        this.indicatorStyle.height = this.height + "px"
                    }
                    j = this.minBoundaryY
                } else {
                    if (j > this.maxBoundaryY) {
                        if (this.options.shrink == "scale") {
                            this.height = e.max(this.indicatorHeight - (j - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + "px";
                            j = this.maxPosY + this.indicatorHeight - this.height
                        } else {
                            j = this.maxBoundaryY
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
                            this.height = this.indicatorHeight;
                            this.indicatorStyle.height = this.height + "px"
                        }
                    }
                }
            }
            this.x = i;
            this.y = j;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[c.style.transform] = "translate(" + i + "px," + j + "px)" + this.scroller.translateZ
            } else {
                this.indicatorStyle.left = i + "px";
                this.indicatorStyle.top = j + "px"
            }
        },
        _pos: function(i, j) {
            if (i < 0) {
                i = 0
            } else {
                if (i > this.maxPosX) {
                    i = this.maxPosX
                }
            }
            if (j < 0) {
                j = 0
            } else {
                if (j > this.maxPosY) {
                    j = this.maxPosY
                }
            }
            i = this.options.listenX ? e.round(i / this.sizeRatioX) : this.scroller.x;
            j = this.options.listenY ? e.round(j / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(i, j)
        },
        fade: function(l, k) {
            if (k && !this.visible) {
                return
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var j = l ? 250 : 500,
            i = l ? 0 : 300;
            l = l ? "1": "0";
            this.wrapperStyle[c.style.transitionDuration] = j + "ms";
            this.fadeTimeout = setTimeout((function(m) {
                this.wrapperStyle.opacity = m;
                this.visible = +m
            }).bind(this, l), i)
        }
    };
    g.utils = c;
    if (typeof module != "undefined" && module.exports) {
        module.exports = g
    } else {
        f.IScroll = g
    }
})(window, document, Math); (function(b) {
    var a = {
        apiKey: "R_85ecb12b3520446e9dd5b28db270ceb5",
        userName: "aolapi",
        baseurl: "http://api.bit.ly/v3/shorten/",
        callback: function(c) {}
    };
    b.shortUrl = function(e, c) {
        init = function(f) {
            var h = f.elem,
            g = encodeURIComponent;
            b.ajax({
                url: f.baseurl + "?login=" + f.userName + "&apiKey=" + f.apiKey + "&format=json&callback=?&longUrl=" + g(e),
                dataType: "json",
                success: function(i) {
                    if (h) {
                        h.href = i.data.url
                    }
                    f.callback(i.data.url)
                }
            })
        };
        var d = b.extend(true, {},
        a, c);
        init(d)
    };
    b.fn.shortUrl = function(c) {
        return this.each(function() {
            var e = this,
            d = e.href;
            if (d) {
                c = c || {};
                c.elem = this;
                b.shortUrl(d, c)
            }
        })
    }
})(jQuery);
(function(e) {
    function d() {
        var e = o();
        if (e !== u) {
            u = e;
            i.trigger("orientationchange")
        }
    }
    function E(t, n, r, i) {
        var s = r.type;
        r.type = n;
        e.event.dispatch.call(t, r, i);
        r.type = s
    }
    e.attrFn = e.attrFn || {};
    var t = navigator.userAgent.toLowerCase(),
    n = t.indexOf("chrome") > -1 && (t.indexOf("windows") > -1 || t.indexOf("macintosh") > -1 || t.indexOf("linux") > -1) && t.indexOf("mobile") < 0,
    r = {
        tap_pixel_range: 5,
        swipe_h_threshold: 50,
        swipe_v_threshold: 50,
        taphold_threshold: 750,
        doubletap_int: 500,
        touch_capable: "ontouchstart" in document.documentElement && !n,
        orientation_support: "orientation" in window && "onorientationchange" in window,
        startevent: "ontouchstart" in document.documentElement && !n ? "touchstart": "mousedown",
        endevent: "ontouchstart" in document.documentElement && !n ? "touchend": "mouseup",
        moveevent: "ontouchstart" in document.documentElement && !n ? "touchmove": "mousemove",
        tapevent: "ontouchstart" in document.documentElement && !n ? "tap": "click",
        scrollevent: "ontouchstart" in document.documentElement && !n ? "touchmove": "scroll",
        hold_timer: null,
        tap_timer: null
    };
    e.isTouchCapable = function() {
        return r.touch_capable
    };
    e.getStartEvent = function() {
        return r.startevent
    };
    e.getEndEvent = function() {
        return r.endevent
    };
    e.getMoveEvent = function() {
        return r.moveevent
    };
    e.getTapEvent = function() {
        return r.tapevent
    };
    e.getScrollEvent = function() {
        return r.scrollevent
    };
    e.each(["tapstart", "tapend", "tap", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange"],
    function(t, n) {
        e.fn[n] = function(e) {
            return e ? this.on(n, e) : this.trigger(n)
        };
        e.attrFn[n] = true
    });
    e.event.special.tapstart = {
        setup: function() {
            var t = this,
            n = e(t);
            n.on(r.startevent,
            function(e) {
                n.data("callee", arguments.callee);
                if (e.which && e.which !== 1) {
                    return false
                }
                var i = e.originalEvent,
                s = {
                    position: {
                        x: r.touch_capable ? i.touches[0].screenX: e.screenX,
                        y: r.touch_capable ? i.touches[0].screenY: e.screenY
                    },
                    offset: {
                        x: r.touch_capable ? i.touches[0].pageX - i.touches[0].target.offsetLeft: e.offsetX,
                        y: r.touch_capable ? i.touches[0].pageY - i.touches[0].target.offsetTop: e.offsetY
                    },
                    time: (new Date).getTime(),
                    target: e.target
                };
                E(t, "tapstart", e, s);
                return true
            })
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee)
        }
    };
    e.event.special.tapmove = {
        setup: function() {
            var t = this,
            n = e(t);
            n.on(r.moveevent,
            function(e) {
                n.data("callee", arguments.callee);
                var i = e.originalEvent,
                s = {
                    position: {
                        x: r.touch_capable ? i.touches[0].screenX: e.screenX,
                        y: r.touch_capable ? i.touches[0].screenY: e.screenY
                    },
                    offset: {
                        x: r.touch_capable ? i.touches[0].pageX - i.touches[0].target.offsetLeft: e.offsetX,
                        y: r.touch_capable ? i.touches[0].pageY - i.touches[0].target.offsetTop: e.offsetY
                    },
                    time: (new Date).getTime(),
                    target: e.target
                };
                E(t, "tapmove", e, s);
                return true
            })
        },
        remove: function() {
            e(this).off(r.moveevent, e(this).data.callee)
        }
    };
    e.event.special.tapend = {
        setup: function() {
            var t = this,
            n = e(t);
            n.on(r.endevent,
            function(e) {
                n.data("callee", arguments.callee);
                var i = e.originalEvent;
                var s = {
                    position: {
                        x: r.touch_capable ? i.changedTouches[0].screenX: e.screenX,
                        y: r.touch_capable ? i.changedTouches[0].screenY: e.screenY
                    },
                    offset: {
                        x: r.touch_capable ? i.changedTouches[0].pageX - i.changedTouches[0].target.offsetLeft: e.offsetX,
                        y: r.touch_capable ? i.changedTouches[0].pageY - i.changedTouches[0].target.offsetTop: e.offsetY
                    },
                    time: (new Date).getTime(),
                    target: e.target
                };
                E(t, "tapend", e, s);
                return true
            })
        },
        remove: function() {
            e(this).off(r.endevent, e(this).data.callee)
        }
    };
    e.event.special.taphold = {
        setup: function() {
            var t = this,
            n = e(t),
            i,
            s,
            o = {
                x: 0,
                y: 0
            };
            n.on(r.startevent,
            function(e) {
                if (e.which && e.which !== 1) {
                    return false
                } else {
                    n.data("tapheld", false);
                    i = e.target;
                    var s = e.originalEvent;
                    var u = (new Date).getTime(),
                    a = {
                        x: r.touch_capable ? s.touches[0].screenX: e.screenX,
                        y: r.touch_capable ? s.touches[0].screenY: e.screenY
                    },
                    f = {
                        x: r.touch_capable ? s.touches[0].pageX - s.touches[0].target.offsetLeft: e.offsetX,
                        y: r.touch_capable ? s.touches[0].pageY - s.touches[0].target.offsetTop: e.offsetY
                    };
                    o.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX: e.pageX;
                    o.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY: e.pageY;
                    r.hold_timer = window.setTimeout(function() {
                        var l = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX: e.pageX,
                        c = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY: e.pageY;
                        if (e.target == i && o.x == l && o.y == c) {
                            n.data("tapheld", true);
                            var h = (new Date).getTime(),
                            p = {
                                x: r.touch_capable ? s.touches[0].screenX: e.screenX,
                                y: r.touch_capable ? s.touches[0].screenY: e.screenY
                            },
                            d = {
                                x: r.touch_capable ? s.touches[0].pageX - s.touches[0].target.offsetLeft: e.offsetX,
                                y: r.touch_capable ? s.touches[0].pageY - s.touches[0].target.offsetTop: e.offsetY
                            };
                            duration = h - u;
                            var v = {
                                startTime: u,
                                endTime: h,
                                startPosition: a,
                                startOffset: f,
                                endPosition: p,
                                endOffset: d,
                                duration: duration,
                                target: e.target
                            };
                            n.data("callee1", arguments.callee);
                            E(t, "taphold", e, v)
                        }
                    },
                    r.taphold_threshold);
                    return true
                }
            }).on(r.endevent,
            function() {
                n.data("callee2", arguments.callee);
                n.data("tapheld", false);
                window.clearTimeout(r.hold_timer)
            })
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee1).off(r.endevent, e(this).data.callee2)
        }
    };
    e.event.special.doubletap = {
        setup: function() {
            var t = this,
            n = e(t),
            i,
            s,
            o,
            u;
            n.on(r.startevent,
            function(e) {
                if (e.which && e.which !== 1) {
                    return false
                } else {
                    n.data("doubletapped", false);
                    i = e.target;
                    n.data("callee1", arguments.callee);
                    u = e.originalEvent;
                    o = {
                        position: {
                            x: r.touch_capable ? u.touches[0].screenX: e.screenX,
                            y: r.touch_capable ? u.touches[0].screenY: e.screenY
                        },
                        offset: {
                            x: r.touch_capable ? u.touches[0].pageX - u.touches[0].target.offsetLeft: e.offsetX,
                            y: r.touch_capable ? u.touches[0].pageY - u.touches[0].target.offsetTop: e.offsetY
                        },
                        time: (new Date).getTime(),
                        target: e.target
                    };
                    return true
                }
            }).on(r.endevent,
            function(e) {
                var a = (new Date).getTime();
                var f = n.data("lastTouch") || a + 1;
                var l = a - f;
                window.clearTimeout(s);
                n.data("callee2", arguments.callee);
                if (l < r.doubletap_int && l > 0 && e.target == i && l > 100) {
                    n.data("doubletapped", true);
                    window.clearTimeout(r.tap_timer);
                    var c = {
                        position: {
                            x: r.touch_capable ? u.touches[0].screenX: e.screenX,
                            y: r.touch_capable ? u.touches[0].screenY: e.screenY
                        },
                        offset: {
                            x: r.touch_capable ? u.touches[0].pageX - u.touches[0].target.offsetLeft: e.offsetX,
                            y: r.touch_capable ? u.touches[0].pageY - u.touches[0].target.offsetTop: e.offsetY
                        },
                        time: (new Date).getTime(),
                        target: e.target
                    };
                    var h = {
                        firstTap: o,
                        secondTap: c,
                        interval: c.time - o.time
                    };
                    E(t, "doubletap", e, h)
                } else {
                    n.data("lastTouch", a);
                    s = window.setTimeout(function(e) {
                        window.clearTimeout(s)
                    },
                    r.doubletap_int, [e])
                }
                n.data("lastTouch", a)
            })
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee1).off(r.endevent, e(this).data.callee2)
        }
    };
    e.event.special.singletap = {
        setup: function() {
            var t = this,
            n = e(t),
            i = null,
            s = null,
            o = {
                x: 0,
                y: 0
            };
            n.on(r.startevent,
            function(e) {
                if (e.which && e.which !== 1) {
                    return false
                } else {
                    s = (new Date).getTime();
                    i = e.target;
                    n.data("callee1", arguments.callee);
                    o.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX: e.pageX;
                    o.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY: e.pageY;
                    return true
                }
            }).on(r.endevent,
            function(e) {
                n.data("callee2", arguments.callee);
                if (e.target == i) {
                    end_pos_x = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX: e.pageX;
                    end_pos_y = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageY: e.pageY;
                    r.tap_timer = window.setTimeout(function() {
                        if (!n.data("doubletapped") && !n.data("tapheld") && o.x == end_pos_x && o.y == end_pos_y) {
                            var i = e.originalEvent;
                            var u = {
                                position: {
                                    x: r.touch_capable ? i.changedTouches[0].screenX: e.screenX,
                                    y: r.touch_capable ? i.changedTouches[0].screenY: e.screenY
                                },
                                offset: {
                                    x: r.touch_capable ? i.changedTouches[0].pageX - i.changedTouches[0].target.offsetLeft: e.offsetX,
                                    y: r.touch_capable ? i.changedTouches[0].pageY - i.changedTouches[0].target.offsetTop: e.offsetY
                                },
                                time: (new Date).getTime(),
                                target: e.target
                            };
                            if (u.time - s < r.taphold_threshold) {
                                E(t, "singletap", e, u)
                            }
                        }
                    },
                    r.doubletap_int)
                }
            })
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee1).off(r.endevent, e(this).data.callee2)
        }
    };
    e.event.special.tap = {
        setup: function() {
            var t = this,
            n = e(t),
            i = false,
            s = null,
            o,
            u = {
                x: 0,
                y: 0
            };
            n.on(r.startevent,
            function(e) {
                n.data("callee1", arguments.callee);
                if (e.which && e.which !== 1) {
                    return false
                } else {
                    i = true;
                    u.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX: e.pageX;
                    u.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY: e.pageY;
                    o = (new Date).getTime();
                    s = e.target;
                    return true
                }
            }).on(r.endevent,
            function(e) {
                n.data("callee2", arguments.callee);
                var a = e.originalEvent.targetTouches ? e.originalEvent.changedTouches[0].pageX: e.pageX,
                f = e.originalEvent.targetTouches ? e.originalEvent.changedTouches[0].pageY: e.pageY;
                diff_x = u.x - a,
                diff_y = u.y - f;
                if (s == e.target && i && (new Date).getTime() - o < r.taphold_threshold && (u.x == a && u.y == f || diff_x >= -r.tap_pixel_range && diff_x <= r.tap_pixel_range && diff_y >= -r.tap_pixel_range && diff_y <= r.tap_pixel_range)) {
                    var l = e.originalEvent;
                    var c = {
                        position: {
                            x: r.touch_capable ? l.changedTouches[0].screenX: e.screenX,
                            y: r.touch_capable ? l.changedTouches[0].screenY: e.screenY
                        },
                        offset: {
                            x: r.touch_capable ? l.changedTouches[0].pageX - l.changedTouches[0].target.offsetLeft: e.offsetX,
                            y: r.touch_capable ? l.changedTouches[0].pageY - l.changedTouches[0].target.offsetTop: e.offsetY
                        },
                        time: (new Date).getTime(),
                        target: e.target
                    };
                    E(t, "tap", e, c)
                }
            })
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee1).off(r.endevent, e(this).data.callee2)
        }
    };
    e.event.special.swipe = {
        setup: function() {
            function f(t) {
                n = e(t.target);
                n.data("callee1", arguments.callee);
                o.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX: t.pageX;
                o.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY: t.pageY;
                u.x = o.x;
                u.y = o.y;
                i = true;
                var s = t.originalEvent;
                a = {
                    position: {
                        x: r.touch_capable ? s.touches[0].screenX: t.screenX,
                        y: r.touch_capable ? s.touches[0].screenY: t.screenY
                    },
                    offset: {
                        x: r.touch_capable ? s.touches[0].pageX - s.touches[0].target.offsetLeft: t.offsetX,
                        y: r.touch_capable ? s.touches[0].pageY - s.touches[0].target.offsetTop: t.offsetY
                    },
                    time: (new Date).getTime(),
                    target: t.target
                };
                var f = new Date;
                while (new Date - f < 100) {}
            }
            function l(t) {
                n = e(t.target);
                n.data("callee2", arguments.callee);
                u.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX: t.pageX;
                u.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY: t.pageY;
                window.clearTimeout(r.hold_timer);
                var f;
                var l = n.data("xthreshold"),
                c = n.data("ythreshold"),
                h = typeof l !== "undefined" && l !== false && parseInt(l) ? parseInt(l) : r.swipe_h_threshold,
                p = typeof c !== "undefined" && c !== false && parseInt(c) ? parseInt(c) : r.swipe_v_threshold;
                if (o.y > u.y && o.y - u.y > p) {
                    f = "swipeup"
                }
                if (o.x < u.x && u.x - o.x > h) {
                    f = "swiperight"
                }
                if (o.y < u.y && u.y - o.y > p) {
                    f = "swipedown"
                }
                if (o.x > u.x && o.x - u.x > h) {
                    f = "swipeleft"
                }
                if (f != undefined && i) {
                    o.x = 0;
                    o.y = 0;
                    u.x = 0;
                    u.y = 0;
                    i = false;
                    var d = t.originalEvent;
                    endEvnt = {
                        position: {
                            x: r.touch_capable ? d.touches[0].screenX: t.screenX,
                            y: r.touch_capable ? d.touches[0].screenY: t.screenY
                        },
                        offset: {
                            x: r.touch_capable ? d.touches[0].pageX - d.touches[0].target.offsetLeft: t.offsetX,
                            y: r.touch_capable ? d.touches[0].pageY - d.touches[0].target.offsetTop: t.offsetY
                        },
                        time: (new Date).getTime(),
                        target: t.target
                    };
                    var v = Math.abs(a.position.x - endEvnt.position.x),
                    m = Math.abs(a.position.y - endEvnt.position.y);
                    var g = {
                        startEvnt: a,
                        endEvnt: endEvnt,
                        direction: f.replace("swipe", ""),
                        xAmount: v,
                        yAmount: m,
                        duration: endEvnt.time - a.time
                    };
                    s = true;
                    n.trigger("swipe", g).trigger(f, g)
                }
            }
            function c(t) {
                n = e(t.target);
                var o = "";
                n.data("callee3", arguments.callee);
                if (s) {
                    var u = n.data("xthreshold"),
                    f = n.data("ythreshold"),
                    l = typeof u !== "undefined" && u !== false && parseInt(u) ? parseInt(u) : r.swipe_h_threshold,
                    c = typeof f !== "undefined" && f !== false && parseInt(f) ? parseInt(f) : r.swipe_v_threshold;
                    var h = t.originalEvent;
                    endEvnt = {
                        position: {
                            x: r.touch_capable ? h.changedTouches[0].screenX: t.screenX,
                            y: r.touch_capable ? h.changedTouches[0].screenY: t.screenY
                        },
                        offset: {
                            x: r.touch_capable ? h.changedTouches[0].pageX - h.changedTouches[0].target.offsetLeft: t.offsetX,
                            y: r.touch_capable ? h.changedTouches[0].pageY - h.changedTouches[0].target.offsetTop: t.offsetY
                        },
                        time: (new Date).getTime(),
                        target: t.target
                    };
                    if (a.position.y > endEvnt.position.y && a.position.y - endEvnt.position.y > c) {
                        o = "swipeup"
                    }
                    if (a.position.x < endEvnt.position.x && endEvnt.position.x - a.position.x > l) {
                        o = "swiperight"
                    }
                    if (a.position.y < endEvnt.position.y && endEvnt.position.y - a.position.y > c) {
                        o = "swipedown"
                    }
                    if (a.position.x > endEvnt.position.x && a.position.x - endEvnt.position.x > l) {
                        o = "swipeleft"
                    }
                    var p = Math.abs(a.position.x - endEvnt.position.x),
                    d = Math.abs(a.position.y - endEvnt.position.y);
                    var v = {
                        startEvnt: a,
                        endEvnt: endEvnt,
                        direction: o.replace("swipe", ""),
                        xAmount: p,
                        yAmount: d,
                        duration: endEvnt.time - a.time
                    };
                    n.trigger("swipeend", v)
                }
                i = false;
                s = false
            }
            var t = this,
            n = e(t),
            i = false,
            s = false,
            o = {
                x: 0,
                y: 0
            },
            u = {
                x: 0,
                y: 0
            },
            a;
            n.on(r.startevent, f);
            n.on(r.moveevent, l);
            n.on(r.endevent, c)
        },
        remove: function() {
            e(this).off(r.startevent, e(this).data.callee1).off(r.moveevent, e(this).data.callee2).off(r.endevent, e(this).data.callee3)
        }
    };
    e.event.special.scrollstart = {
        setup: function() {
            function o(e, n) {
                i = n;
                E(t, i ? "scrollstart": "scrollend", e)
            }
            var t = this,
            n = e(t),
            i,
            s;
            n.on(r.scrollevent,
            function(e) {
                n.data("callee", arguments.callee);
                if (!i) {
                    o(e, true)
                }
                clearTimeout(s);
                s = setTimeout(function() {
                    o(e, false)
                },
                50)
            })
        },
        remove: function() {
            e(this).off(r.scrollevent, e(this).data.callee)
        }
    };
    var i = e(window),
    s,
    o,
    u,
    a,
    f,
    l = {
        0 : true,
        180 : true
    };
    if (r.orientation_support) {
        var c = window.innerWidth || e(window).width(),
        h = window.innerHeight || e(window).height(),
        p = 50;
        a = c > h && c - h > p;
        f = l[window.orientation];
        if (a && f || !a && !f) {
            l = {
                "-90": true,
                90 : true
            }
        }
    }
    e.event.special.orientationchange = s = {
        setup: function() {
            if (r.orientation_support) {
                return false
            }
            u = o();
            i.on("throttledresize", d);
            return true
        },
        teardown: function() {
            if (r.orientation_support) {
                return false
            }
            i.off("throttledresize", d);
            return true
        },
        add: function(e) {
            var t = e.handler;
            e.handler = function(e) {
                e.orientation = o();
                return t.apply(this, arguments)
            }
        }
    };
    e.event.special.orientationchange.orientation = o = function() {
        var e = true,
        t = document.documentElement;
        if (r.orientation_support) {
            e = l[window.orientation]
        } else {
            e = t && t.clientWidth / t.clientHeight < 1.1
        }
        return e ? "portrait": "landscape"
    };
    e.event.special.throttledresize = {
        setup: function() {
            e(this).on("resize", m)
        },
        teardown: function() {
            e(this).off("resize", m)
        }
    };
    var v = 250,
    m = function() {
        b = (new Date).getTime();
        w = b - g;
        if (w >= v) {
            g = b;
            e(this).trigger("throttledresize")
        } else {
            if (y) {
                window.clearTimeout(y)
            }
            y = window.setTimeout(d, v - w)
        }
    },
    g = 0,
    y,
    b,
    w;
    e.each({
        scrollend: "scrollstart",
        swipeup: "swipe",
        swiperight: "swipe",
        swipedown: "swipe",
        swipeleft: "swipe",
        swipeend: "swipe"
    },
    function(t, n, r) {
        e.event.special[t] = {
            setup: function() {
                e(this).on(n, e.noop)
            }
        }
    })
})(jQuery); (function(b) {
    var c, d, a;
    b.extend({
        roundaboutShapes: {
            def: "lazySusan",
            lazySusan: function(h, f, g, e) {
                return {
                    x: Math.sin(h + f) * e,
                    y: (Math.sin(h + 3 * Math.PI / 2 + f) / 8) * g,
                    z: (Math.cos(h + f) + 1) / 2,
                    scale: (Math.sin(h + Math.PI / 2 + f) / 2) + 0.5
                }
            }
        }
    });
    c = {
        bearing: 0,
        tilt: 0,
        minZ: 100,
        maxZ: 280,
        minOpacity: 0.4,
        maxOpacity: 1,
        minScale: 0.4,
        maxScale: 1,
        duration: 600,
        btnNext: null,
        btnNextCallback: function() {},
        btnPrev: null,
        btnPrevCallback: function() {},
        btnToggleAutoplay: null,
        btnStartAutoplay: null,
        btnStopAutoplay: null,
        easing: "swing",
        clickToFocus: true,
        clickToFocusCallback: function() {},
        focusBearing: 0,
        shape: "lazySusan",
        debug: false,
        childSelector: "li",
        startingChild: null,
        reflect: false,
        floatComparisonThreshold: 0.001,
        autoplay: false,
        autoplayDuration: 1000,
        autoplayPauseOnHover: false,
        autoplayCallback: function() {},
        autoplayInitialDelay: 0,
        enableDrag: false,
        dropDuration: 600,
        dropEasing: "swing",
        dropAnimateTo: "nearest",
        dropCallback: function() {},
        dragAxis: "x",
        dragFactor: 4,
        triggerFocusEvents: true,
        triggerBlurEvents: true,
        responsive: false,
        widthMultiplier: 1,
        widthMultiplierFloor: 999999
    };
    d = {
        autoplayInterval: null,
        autoplayIsRunning: false,
        autoplayStartTimeout: null,
        animating: false,
        childInFocus: -1,
        touchMoveStartPosition: null,
        stopAnimation: false,
        lastAnimationStep: false
    };
    a = {
        init: function(f, i, h) {
            var g, e = (new Date()).getTime();
            f = (typeof f === "object") ? f: {};
            i = (b.isFunction(i)) ? i: function() {};
            i = (b.isFunction(f)) ? f: i;
            g = b.extend({},
            c, f, d);
            return this.each(function() {
                var k = b(this),
                j = k.children(g.childSelector).length,
                n = 360 / j,
                m = (g.startingChild && g.startingChild > (j - 1)) ? (j - 1) : g.startingChild,
                l = (g.startingChild === null) ? g.bearing: 360 - (m * n),
                o = (k.css("position") !== "static") ? k.css("position") : "relative";
                k.css({
                    padding: 0,
                    position: o
                }).addClass("roundabout-holder").data("roundabout", b.extend({},
                g, {
                    startingChild: m,
                    bearing: l,
                    oppositeOfFocusBearing: a.normalize.apply(null, [g.focusBearing - 180]),
                    dragBearing: l,
                    period: n
                }));
                if (h) {
                    k.unbind(".roundabout").children(g.childSelector).unbind(".roundabout")
                } else {
                    if (g.responsive) {
                        b(window).bind("resize.roundabout",
                        function() {
                            a.stopAutoplay.apply(k);
                            a.relayoutChildren.apply(k)
                        })
                    }
                }
                if (g.clickToFocus) {
                    k.children(g.childSelector).each(function(p) {
                        b(this).bind("click.roundabout",
                        function() {
                            var q = a.getPlacement.apply(k, [p]);
                            if (!a.isInFocus.apply(k, [q])) {
                                a.stopAnimation.apply(b(this));
                                if (!k.data("roundabout").animating) {
                                    a.animateBearingToFocus.apply(k, [q, k.data("roundabout").clickToFocusCallback])
                                }
                                return false
                            }
                        })
                    })
                }
                if (g.btnNext) {
                    b(g.btnNext).bind("click.roundabout",
                    function() {
                        if (!k.data("roundabout").animating) {
                            a.animateToNextChild.apply(k, [k.data("roundabout").btnNextCallback])
                        }
                        return false
                    })
                }
                if (g.btnPrev) {
                    b(g.btnPrev).bind("click.roundabout",
                    function() {
                        a.animateToPreviousChild.apply(k, [k.data("roundabout").btnPrevCallback]);
                        return false
                    })
                }
                if (g.btnToggleAutoplay) {
                    b(g.btnToggleAutoplay).bind("click.roundabout",
                    function() {
                        a.toggleAutoplay.apply(k);
                        return false
                    })
                }
                if (g.btnStartAutoplay) {
                    b(g.btnStartAutoplay).bind("click.roundabout",
                    function() {
                        a.startAutoplay.apply(k);
                        return false
                    })
                }
                if (g.btnStopAutoplay) {
                    b(g.btnStopAutoplay).bind("click.roundabout",
                    function() {
                        a.stopAutoplay.apply(k);
                        return false
                    })
                }
                if (g.autoplayPauseOnHover) {
                    k.bind("mouseenter.roundabout.autoplay",
                    function() {
                        a.stopAutoplay.apply(k, [true])
                    }).bind("mouseleave.roundabout.autoplay",
                    function() {
                        a.startAutoplay.apply(k)
                    })
                }
                if (g.enableDrag) {
                    if (!b.isFunction(k.drag)) {
                        if (g.debug) {
                            alert("You do not have the drag plugin loaded.")
                        }
                    } else {
                        if (!b.isFunction(k.drop)) {
                            if (g.debug) {
                                alert("You do not have the drop plugin loaded.")
                            }
                        } else {
                            k.drag(function(r, p) {
                                var q = k.data("roundabout"),
                                s = (q.dragAxis.toLowerCase() === "x") ? "deltaX": "deltaY";
                                a.stopAnimation.apply(k);
                                a.setBearing.apply(k, [q.dragBearing + p[s] / q.dragFactor])
                            }).drop(function(q) {
                                var p = k.data("roundabout"),
                                r = a.getAnimateToMethod(p.dropAnimateTo);
                                a.allowAnimation.apply(k);
                                a[r].apply(k, [p.dropDuration, p.dropEasing, p.dropCallback]);
                                p.dragBearing = p.period * a.getNearestChild.apply(k)
                            })
                        }
                    }
                    k.each(function() {
                        var p = b(this).get(0),
                        r = b(this).data("roundabout"),
                        q = (r.dragAxis.toLowerCase() === "x") ? "pageX": "pageY",
                        s = a.getAnimateToMethod(r.dropAnimateTo);
                        if (p.addEventListener) {
                            p.addEventListener("touchstart",
                            function(t) {
                                r.touchMoveStartPosition = t.touches[0][q]
                            },
                            false);
                            p.addEventListener("touchmove",
                            function(t) {
                                var u = (t.touches[0][q] - r.touchMoveStartPosition) / r.dragFactor;
                                t.preventDefault();
                                a.stopAnimation.apply(b(this));
                                a.setBearing.apply(b(this), [r.dragBearing + u])
                            },
                            false);
                            p.addEventListener("touchend",
                            function(t) {
                                t.preventDefault();
                                a.allowAnimation.apply(b(this));
                                s = a.getAnimateToMethod(r.dropAnimateTo);
                                a[s].apply(b(this), [r.dropDuration, r.dropEasing, r.dropCallback]);
                                r.dragBearing = r.period * a.getNearestChild.apply(b(this))
                            },
                            false)
                        }
                    })
                }
                a.initChildren.apply(k, [i, h])
            })
        },
        initChildren: function(h, f) {
            var e = b(this),
            g = e.data("roundabout");
            h = h ||
            function() {};
            e.children(g.childSelector).each(function(m) {
                var k, j, l, n = a.getPlacement.apply(e, [m]);
                if (f && b(this).data("roundabout")) {
                    k = b(this).data("roundabout").startWidth;
                    j = b(this).data("roundabout").startHeight;
                    l = b(this).data("roundabout").startFontSize
                }
                b(this).addClass("roundabout-moveable-item").css("position", "absolute");
                b(this).data("roundabout", {
                    startWidth: k || b(this).width(),
                    startHeight: j || b(this).height(),
                    startFontSize: l || parseInt(b(this).css("font-size"), 10),
                    degrees: n,
                    backDegrees: a.normalize.apply(null, [n - 180]),
                    childNumber: m,
                    currentScale: 1,
                    parent: e
                })
            });
            a.updateChildren.apply(e);
            if (g.autoplay) {
                g.autoplayStartTimeout = setTimeout(function() {
                    a.startAutoplay.apply(e)
                },
                g.autoplayInitialDelay)
            }
            e.trigger("ready");
            h.apply(e);
            return e
        },
        updateChildren: function() {
            return this.each(function() {
                var e = b(this),
                g = e.data("roundabout"),
                i = -1;
                var f = (b(window).width() <= g.widthMultiplierFloor) ? g.widthMultiplier: 1;
                var h = {
                    bearing: g.bearing,
                    tilt: g.tilt,
                    stage: {
                        width: Math.floor(b(this).width() * 0.9),
                        height: Math.floor(b(this).height() * 0.9)
                    },
                    animating: g.animating,
                    inFocus: g.childInFocus,
                    focusBearingRadian: a.degToRad.apply(null, [g.focusBearing]),
                    shape: b.roundaboutShapes[g.shape] || b.roundaboutShapes[b.roundaboutShapes.def],
                    widthMultiplier: f
                };
                h.midStage = {
                    width: h.stage.width / 2,
                    height: h.stage.height / 2
                };
                h.nudge = {
                    width: h.midStage.width + (h.stage.width * 0.05),
                    height: h.midStage.height + (h.stage.height * 0.05)
                };
                h.zValues = {
                    min: g.minZ,
                    max: g.maxZ,
                    diff: g.maxZ - g.minZ
                };
                h.opacity = {
                    min: g.minOpacity,
                    max: g.maxOpacity,
                    diff: g.maxOpacity - g.minOpacity
                };
                h.scale = {
                    min: g.minScale,
                    max: g.maxScale,
                    diff: g.maxScale - g.minScale
                };
                e.children(g.childSelector).each(function(j) {
                    if (a.updateChild.apply(e, [b(this), h, j,
                    function() {
                        b(this).trigger("ready")
                    }]) && (!h.animating || g.lastAnimationStep)) {
                        i = j;
                        b(this).addClass("roundabout-in-focus")
                    } else {
                        b(this).removeClass("roundabout-in-focus")
                    }
                });
                if (i !== h.inFocus) {
                    if (g.triggerBlurEvents) {
                        e.children(g.childSelector).eq(h.inFocus).trigger("blur")
                    }
                    g.childInFocus = i;
                    if (g.triggerFocusEvents && i !== -1) {
                        e.children(g.childSelector).eq(i).trigger("focus")
                    }
                }
                e.trigger("childrenUpdated")
            })
        },
        updateChild: function(h, g, e, m) {
            var l, n = this,
            f = b(h),
            j = f.data("roundabout"),
            i = [],
            k = a.degToRad.apply(null, [(360 - j.degrees) + g.bearing]);
            m = m ||
            function() {};
            k = a.normalizeRad.apply(null, [k]);
            l = g.shape(k, g.focusBearingRadian, g.tilt, g.widthMultiplier);
            l.scale = (l.scale > 1) ? 1 : l.scale;
            l.adjustedScale = (g.scale.min + (g.scale.diff * l.scale)).toFixed(4);
            l.width = (l.adjustedScale * j.startWidth).toFixed(4);
            l.height = (l.adjustedScale * j.startHeight).toFixed(4);
            f.css({
                left: ((l.x * g.midStage.width + g.nudge.width) - l.width / 2).toFixed(0) + "px",
                top: ((l.y * g.midStage.height + g.nudge.height) - l.height / 2).toFixed(0) + "px",
                width: l.width + "px",
                height: l.height + "px",
                opacity: (g.opacity.min + (g.opacity.diff * l.scale)).toFixed(2),
                zIndex: Math.round(g.zValues.min + (g.zValues.diff * l.z)),
                fontSize: (l.adjustedScale * j.startFontSize).toFixed(1) + "px"
            });
            j.currentScale = l.adjustedScale;
            if (n.data("roundabout").debug) {
                i.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: ' + f.css("width") + '; background-color: #ffc;">');
                i.push('<strong style="font-size: 12px; white-space: nowrap;">Child ' + e + "</strong><br />");
                i.push("<strong>left:</strong> " + f.css("left") + "<br />");
                i.push("<strong>top:</strong> " + f.css("top") + "<br />");
                i.push("<strong>width:</strong> " + f.css("width") + "<br />");
                i.push("<strong>opacity:</strong> " + f.css("opacity") + "<br />");
                i.push("<strong>height:</strong> " + f.css("height") + "<br />");
                i.push("<strong>z-index:</strong> " + f.css("z-index") + "<br />");
                i.push("<strong>font-size:</strong> " + f.css("font-size") + "<br />");
                i.push("<strong>scale:</strong> " + f.data("roundabout").currentScale);
                i.push("</div>");
                f.html(i.join(""))
            }
            f.trigger("reposition");
            m.apply(n);
            return a.isInFocus.apply(n, [j.degrees])
        },
        setBearing: function(e, f) {
            f = f ||
            function() {};
            e = a.normalize.apply(null, [e]);
            this.each(function() {
                var l, g, j, i = b(this),
                k = i.data("roundabout"),
                h = k.bearing;
                k.bearing = e;
                i.trigger("bearingSet");
                a.updateChildren.apply(i);
                l = Math.abs(h - e);
                if (!k.animating || l > 180) {
                    return
                }
                l = Math.abs(h - e);
                i.children(k.childSelector).each(function(n) {
                    var m;
                    if (a.isChildBackDegreesBetween.apply(b(this), [e, h])) {
                        m = (h > e) ? "Clockwise": "Counterclockwise";
                        b(this).trigger("move" + m + "ThroughBack")
                    }
                })
            });
            f.apply(this);
            return this
        },
        adjustBearing: function(f, e) {
            e = e ||
            function() {};
            if (f === 0) {
                return this
            }
            this.each(function() {
                a.setBearing.apply(b(this), [b(this).data("roundabout").bearing + f])
            });
            e.apply(this);
            return this
        },
        setTilt: function(e, f) {
            f = f ||
            function() {};
            this.each(function() {
                b(this).data("roundabout").tilt = e;
                a.updateChildren.apply(b(this))
            });
            f.apply(this);
            return this
        },
        adjustTilt: function(f, e) {
            e = e ||
            function() {};
            this.each(function() {
                a.setTilt.apply(b(this), [b(this).data("roundabout").tilt + f])
            });
            e.apply(this);
            return this
        },
        animateToBearing: function(f, g, j, h, i) {
            var e = (new Date()).getTime();
            i = i ||
            function() {};
            if (b.isFunction(h)) {
                i = h;
                h = null
            } else {
                if (b.isFunction(j)) {
                    i = j;
                    j = null
                } else {
                    if (b.isFunction(g)) {
                        i = g;
                        g = null
                    }
                }
            }
            this.each(function() {
                var q, p, k, l = b(this),
                o = l.data("roundabout"),
                m = (!g) ? o.duration: g,
                n = (j) ? j: o.easing || "swing";
                if (!h) {
                    h = {
                        timerStart: e,
                        start: o.bearing,
                        totalTime: m
                    }
                }
                q = e - h.timerStart;
                if (o.stopAnimation) {
                    a.allowAnimation.apply(l);
                    o.animating = false;
                    return
                }
                if (q < m) {
                    if (!o.animating) {
                        l.trigger("animationStart")
                    }
                    o.animating = true;
                    if (typeof b.easing.def === "string") {
                        p = b.easing[n] || b.easing[b.easing.def];
                        k = p(null, q, h.start, f - h.start, h.totalTime)
                    } else {
                        k = b.easing[n]((q / h.totalTime), q, h.start, f - h.start, h.totalTime)
                    }
                    if (a.compareVersions.apply(null, [b().jquery, "1.7.2"]) >= 0 && !(b.easing.easeOutBack)) {
                        k = h.start + ((f - h.start) * k)
                    }
                    k = a.normalize.apply(null, [k]);
                    o.dragBearing = k;
                    a.setBearing.apply(l, [k,
                    function() {
                        setTimeout(function() {
                            a.animateToBearing.apply(l, [f, m, n, h, i])
                        },
                        0)
                    }])
                } else {
                    o.lastAnimationStep = true;
                    f = a.normalize.apply(null, [f]);
                    a.setBearing.apply(l, [f,
                    function() {
                        l.trigger("animationEnd")
                    }]);
                    o.animating = false;
                    o.lastAnimationStep = false;
                    o.dragBearing = f;
                    i.apply(l)
                }
            });
            return this
        },
        animateToNearbyChild: function(e, g) {
            var f = e[0],
            i = e[1],
            h = e[2] ||
            function() {};
            if (b.isFunction(i)) {
                h = i;
                i = null
            } else {
                if (b.isFunction(f)) {
                    h = f;
                    f = null
                }
            }
            return this.each(function() {
                var n, l, k = b(this),
                p = k.data("roundabout"),
                m = (!p.reflect) ? p.bearing % 360 : p.bearing,
                o = k.children(p.childSelector).length;
                if (!p.animating) {
                    if ((p.reflect && g === "previous") || (!p.reflect && g === "next")) {
                        m = (Math.abs(m) < p.floatComparisonThreshold) ? 360 : m;
                        for (n = 0; n < o; n += 1) {
                            l = {
                                lower: (p.period * n),
                                upper: (p.period * (n + 1))
                            };
                            l.upper = (n === o - 1) ? 360 : l.upper;
                            if (m <= Math.ceil(l.upper) && m >= Math.floor(l.lower)) {
                                if (o === 2 && m === 360) {
                                    a.animateToDelta.apply(k, [ - 180, f, i, h])
                                } else {
                                    a.animateBearingToFocus.apply(k, [l.lower, f, i, h])
                                }
                                break
                            }
                        }
                    } else {
                        m = (Math.abs(m) < p.floatComparisonThreshold || 360 - Math.abs(m) < p.floatComparisonThreshold) ? 0 : m;
                        for (n = o - 1; n >= 0; n -= 1) {
                            l = {
                                lower: p.period * n,
                                upper: p.period * (n + 1)
                            };
                            l.upper = (n === o - 1) ? 360 : l.upper;
                            if (m >= Math.floor(l.lower) && m < Math.ceil(l.upper)) {
                                if (o === 2 && m === 360) {
                                    a.animateToDelta.apply(k, [180, f, i, h])
                                } else {
                                    a.animateBearingToFocus.apply(k, [l.upper, f, i, h])
                                }
                                break
                            }
                        }
                    }
                }
            })
        },
        animateToNearestChild: function(e, g, f) {
            f = f ||
            function() {};
            if (b.isFunction(g)) {
                f = g;
                g = null
            } else {
                if (b.isFunction(e)) {
                    f = e;
                    e = null
                }
            }
            return this.each(function() {
                var h = a.getNearestChild.apply(b(this));
                a.animateToChild.apply(b(this), [h, e, g, f])
            })
        },
        animateToChild: function(e, f, h, g) {
            g = g ||
            function() {};
            if (b.isFunction(h)) {
                g = h;
                h = null
            } else {
                if (b.isFunction(f)) {
                    g = f;
                    f = null
                }
            }
            return this.each(function() {
                var k, i = b(this),
                j = i.data("roundabout");
                if (j.childInFocus !== e && !j.animating) {
                    k = i.children(j.childSelector).eq(e);
                    a.animateBearingToFocus.apply(i, [k.data("roundabout").degrees, f, h, g])
                }
            })
        },
        animateToNextChild: function(e, g, f) {
            return a.animateToNearbyChild.apply(this, [arguments, "next"])
        },
        animateToPreviousChild: function(e, g, f) {
            return a.animateToNearbyChild.apply(this, [arguments, "previous"])
        },
        animateToDelta: function(f, e, h, g) {
            g = g ||
            function() {};
            if (b.isFunction(h)) {
                g = h;
                h = null
            } else {
                if (b.isFunction(e)) {
                    g = e;
                    e = null
                }
            }
            return this.each(function() {
                var i = b(this).data("roundabout").bearing + f;
                a.animateToBearing.apply(b(this), [i, e, h, g])
            })
        },
        animateBearingToFocus: function(f, e, h, g) {
            g = g ||
            function() {};
            if (b.isFunction(h)) {
                g = h;
                h = null
            } else {
                if (b.isFunction(e)) {
                    g = e;
                    e = null
                }
            }
            return this.each(function() {
                var i = b(this).data("roundabout").bearing - f;
                i = (Math.abs(360 - i) < Math.abs(i)) ? 360 - i: -i;
                i = (i > 180) ? -(360 - i) : i;
                if (i !== 0) {
                    a.animateToDelta.apply(b(this), [i, e, h, g])
                }
            })
        },
        stopAnimation: function() {
            return this.each(function() {
                b(this).data("roundabout").stopAnimation = true
            })
        },
        allowAnimation: function() {
            return this.each(function() {
                b(this).data("roundabout").stopAnimation = false
            })
        },
        startAutoplay: function(e) {
            return this.each(function() {
                var f = b(this),
                g = f.data("roundabout");
                e = e || g.autoplayCallback ||
                function() {};
                clearInterval(g.autoplayInterval);
                g.autoplayInterval = setInterval(function() {
                    a.animateToNextChild.apply(f, [e])
                },
                g.autoplayDuration);
                g.autoplayIsRunning = true;
                f.trigger("autoplayStart")
            })
        },
        stopAutoplay: function(e) {
            return this.each(function() {
                clearInterval(b(this).data("roundabout").autoplayInterval);
                b(this).data("roundabout").autoplayInterval = null;
                b(this).data("roundabout").autoplayIsRunning = false;
                if (!e) {
                    b(this).unbind(".autoplay")
                }
                b(this).trigger("autoplayStop")
            })
        },
        toggleAutoplay: function(e) {
            return this.each(function() {
                var f = b(this),
                g = f.data("roundabout");
                e = e || g.autoplayCallback ||
                function() {};
                if (!a.isAutoplaying.apply(b(this))) {
                    a.startAutoplay.apply(b(this), [e])
                } else {
                    a.stopAutoplay.apply(b(this), [e])
                }
            })
        },
        isAutoplaying: function() {
            return (this.data("roundabout").autoplayIsRunning)
        },
        changeAutoplayDuration: function(e) {
            return this.each(function() {
                var f = b(this),
                g = f.data("roundabout");
                g.autoplayDuration = e;
                if (a.isAutoplaying.apply(f)) {
                    a.stopAutoplay.apply(f);
                    setTimeout(function() {
                        a.startAutoplay.apply(f)
                    },
                    10)
                }
            })
        },
        normalize: function(f) {
            var e = f % 360;
            return (e < 0) ? 360 + e: e
        },
        normalizeRad: function(e) {
            while (e < 0) {
                e += (Math.PI * 2)
            }
            while (e > (Math.PI * 2)) {
                e -= (Math.PI * 2)
            }
            return e
        },
        isChildBackDegreesBetween: function(f, e) {
            var g = b(this).data("roundabout").backDegrees;
            if (f > e) {
                return (g >= e && g < f)
            } else {
                return (g < e && g >= f)
            }
        },
        getAnimateToMethod: function(e) {
            e = e.toLowerCase();
            if (e === "next") {
                return "animateToNextChild"
            } else {
                if (e === "previous") {
                    return "animateToPreviousChild"
                }
            }
            return "animateToNearestChild"
        },
        relayoutChildren: function() {
            return this.each(function() {
                var e = b(this),
                f = b.extend({},
                e.data("roundabout"));
                f.startingChild = e.data("roundabout").childInFocus;
                a.init.apply(e, [f, null, true])
            })
        },
        getNearestChild: function() {
            var e = b(this),
            g = e.data("roundabout"),
            f = e.children(g.childSelector).length;
            if (!g.reflect) {
                return ((f) - (Math.round(g.bearing / g.period) % f)) % f
            } else {
                return (Math.round(g.bearing / g.period) % f)
            }
        },
        degToRad: function(e) {
            return a.normalize.apply(null, [e]) * Math.PI / 180
        },
        getPlacement: function(f) {
            var e = this.data("roundabout");
            return (!e.reflect) ? 360 - (e.period * f) : e.period * f
        },
        isInFocus: function(i) {
            var h, e = this,
            g = e.data("roundabout"),
            f = a.normalize.apply(null, [g.bearing]);
            i = a.normalize.apply(null, [i]);
            h = Math.abs(f - i);
            return (h <= g.floatComparisonThreshold || h >= 360 - g.floatComparisonThreshold)
        },
        getChildInFocus: function() {
            var e = b(this).data("roundabout");
            return (e.childInFocus > -1) ? e.childInFocus: false
        },
        compareVersions: function(e, k) {
            var g, j = e.split(/\./i),
            h = k.split(/\./i),
            f = (j.length > h.length) ? j.length: h.length;
            for (g = 0; g <= f; g++) {
                if (j[g] && !h[g] && parseInt(j[g], 10) !== 0) {
                    return 1
                } else {
                    if (h[g] && !j[g] && parseInt(h[g], 10) !== 0) {
                        return - 1
                    } else {
                        if (j[g] === h[g]) {
                            continue
                        }
                    }
                }
                if (j[g] && h[g]) {
                    if (parseInt(j[g], 10) > parseInt(h[g], 10)) {
                        return 1
                    } else {
                        return - 1
                    }
                }
            }
            return 0
        },
        destroy: function() {
            var e = b(this),
            f = e.data("roundabout");
            b(window).unbind(".roundabout");
            e.removeClass("roundabout-holder").removeAttr("style");
            e.children(f.childSelector).removeClass("roundabout-moveable-item").removeClass("roundabout-in-focus").removeData("roundabout").removeAttr("style");
            e.children(f.childSelector).andSelf().unbind(".roundabout").unbind(".roundabout.autoplay").unbind(".roundabout.stopAutoplay");
            if (f.btnNext) {
                b(f.btnNext).unbind(".roundabout")
            }
            if (f.btnPrev) {
                b(f.btnPrev).bind(".roundabout")
            }
            if (f.btnToggleAutoplay) {
                b(f.btnToggleAutoplay).bind(".roundabout")
            }
            if (f.btnStartAutoplay) {
                b(f.btnStartAutoplay).bind(".roundabout")
            }
            if (f.btnStopAutoplay) {
                b(f.btnStopAutoplay).bind(".roundabout")
            }
            e.removeData("roundabout")
        }
    };
    b.fn.roundabout = function(e) {
        if (a[e]) {
            return a[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || b.isFunction(e) || !e) {
                return a.init.apply(this, arguments)
            } else {
                b.error("Method " + e + " does not exist for jQuery.roundabout.")
            }
        }
    }
})(jQuery); (function(aV) {
    var aF = window,
    U = document,
    aA = aV(aF),
    M = aV(U);
    var c = false;
    var aS = false;
    window.AOL || (AOL = {});
    aA.resize(function() {
        fTips.pos()
    });
    M.bind("ajaxComplete",
    function() {
        aP();
        p();
        try {
            aV.trackImp()
        } catch(bb) {}
    });
    M.ready(function() {
        O();
        af.showViewMobile();
        p();
        try {
            aV.trackImp()
        } catch(bb) {}
    });
    function ag(bb) {
        if (!bb) {
            var bb = aF.event
        }
        bb.cancelBubble = true;
        if (bb.stopPropagation) {
            bb.stopPropagation()
        }
    }
    function t() {
        if (aV.browser.msie && aV.browser.version == 6) {
            try {
                U.execCommand("BackgroundImageCache", false, true)
            } catch(bb) {}
        }
    }
    t();
    aV.extend(aV.easing, {
        cubicEaseOut: function(bd, bf, bb, bc) {
            var be = bb + bc;
            return be * ((bd = bd / 1 - 1) * bd * bd + 1) + bb
        }
    });
    aV.ajaxPrefilter(function(bb) {
        bb.url = utils.addAjaxState(bb.url);
        bb.url = utils.addAjaxNum(bb.url)
    });
    aV.ajaxSetup({
        timeout: 20000,
        error: function(bd, bb, bc) {},
        headers: {
            "Aolcom-Ajax": "1"
        }
    });
    aV.trackImp = function() {
        var bd = aV(".imptrk");
        if (bd.length > 0) {
            for (var bc = 0; bc < bd.length; bc++) {
                var be = new Image();
                var bb = aV(bd[bc]);
                be.src = bb.html();
                bb.removeClass("imptrk")
            }
        }
    };
    String.prototype.trim = function() {
        return this.replace(/^\s*/, "").replace(/\s*$/, "")
    };
    function a4() {
        var bb = this;
        this.verDelimiter = "|";
        this.set = function(bc, bf, be, bd) {
            if (be == "session") {
                be = ""
            } else {
                if (be == "persist" || be == null) {
                    be = "EXPIRES=" + new Date(new Date().getTime() + 2 * 365 * 24 * 60 * 60 * 1000).toGMTString()
                } else {
                    be = "EXPIRES=" + be
                }
            } (bd != null) ? bd = "DOMAIN=" + bd + ";": bd = "";
            U.cookie = bc + "=" + bf + ";" + be + ";PATH=/;" + bd
        };
        this.get = function(bc) {
            var bf = U.cookie.split(";");
            for (var bd = 0; bd < bf.length; bd++) {
                var be = bf[bd].trim().split("=");
                if (be[0] == bc) {
                    return be[1]
                }
            }
            return null
        };
        this.appendVer = function(bc, bd) {
            bc = "V" + bc + bb.verDelimiter;
            var be = encodeURI(bd);
            return bc + be
        };
        this.getVer = function(bc) {
            return bc.substring(1, bc.lastIndexOf(bb.verDelimiter))
        };
        this.getOnlyVal = function(bc) {
            var bd = bc.split(bb.verDelimiter);
            return decodeURI(bd[1])
        };
        this.verGetVal = function(bf, bi, bd, bh) {
            var bc = bb.get(bi);
            if (bc == null) {
                return null
            }
            var be = bb.getVer(bc);
            if (be != bf) {
                if (bd == "delete") {
                    var bg = new Date();
                    bg.setFullYear(1970);
                    bb.set(bi, "", bg.toUTCString())
                }
                if (bh == null || bh == false) {
                    return ""
                }
            }
            return bb.getOnlyVal(bc)
        };
        this.verSetVal = function(bc, bd, bh, bg, bf) {
            var be = bb.appendVer(bc, bh);
            bb.set(bd, be, bg, bf)
        }
    }
    cookies = new a4();
    function h() {
        var bb = this;
        this.cache = new Object();
        this.today = new Date().getTime();
        this.counter = 0;
        this.interval = null;
        this.sTime = 0;
        this.update = function() {
            var bi = bb.today;
            bb.today = new Date().getTime();
            var bg = bb.today - bi;
            for (var bf = 0; bf < bb.counter; bf++) {
                var bd = bb.cache[bf];
                var be = bd.timer.timeDifference - bg;
                if (be <= 0) {
                    bb.stop();
                    return
                }
                var bc = bb.calculateTimer(be);
                var bh = bd.event;
                aV(bh).find("span").each(function() {
                    var bj = aV(this);
                    if (aV(bj).hasClass("hours")) {
                        if (bc.hours != bd.timer.hours) {
                            if (bc.hours < 10) {
                                aV(bj).html("0" + bc.hours)
                            } else {
                                aV(bj).html(bc.hours)
                            }
                        }
                    }
                    if (aV(bj).hasClass("minutes")) {
                        if (bc.minutes != bd.timer.minutes) {
                            if (bc.minutes < 10) {
                                aV(bj).html("0" + bc.minutes)
                            } else {
                                aV(bj).html(bc.minutes)
                            }
                        }
                    }
                    if (aV(bj).hasClass("seconds")) {
                        if (bc.seconds != bd.timer.seconds) {
                            if (bc.seconds < 10) {
                                aV(bj).html("0" + bc.seconds)
                            } else {
                                aV(bj).html(bc.seconds)
                            }
                        }
                    }
                });
                bd.timer = bc;
                bb.cache[bf] = bd
            }
        };
        this.constructor = function() {
            bb.setTimer();
            bb.start()
        };
        this.setTimer = function() {
            aV("#dotdServerDate").each(function() {
                bb.sTime = aV(this).html()
            });
            aV("span.dotdtimer").each(function() {
                var bh = aV(this);
                var bd = aV(bh).html();
                var be = bd - bb.sTime;
                if (be <= 0) {
                    aV(bh).html("ended");
                    bb.stop();
                    return
                }
                var bg = bb.calculateTimer(be);
                var bf = '<span class="hours">';
                if (bg.hours < 10) {
                    bf = bf + "0"
                }
                bf = bf + bg.hours + '</span>:<span class="minutes">';
                if (bg.minutes < 10) {
                    bf = bf + "0"
                }
                bf = bf + bg.minutes + '</span>:<span class="seconds">';
                if (bg.seconds < 10) {
                    bf = bf + "0"
                }
                bf = bf + bg.seconds + "</span>";
                aV(bh).html(bf);
                aV(bh).show();
                var bc = new Object();
                bc.event = aV(bh);
                bc.endTime = bd;
                bc.timer = bg;
                bb.cache[bb.counter] = bc;
                bb.counter = bb.counter + 1
            })
        };
        this.start = function() {
            bb.interval = setInterval(function() {
                bb.update()
            },
            1000)
        };
        this.stop = function() {
            aV("span.dotdtime").each(function() {
                var bc = aV(this);
                aV(bc).replaceWith(aV('<span class="dotdtime">Deal Ended</span>'))
            });
            if (bb.interval != null) {
                clearInterval(bb.interval)
            }
        };
        this.calculateTimer = function(bc) {
            var bd = new Object();
            var be = Math.floor(bc / 1000);
            bd.hours = Math.floor(be / 3600);
            be = be - (bd.hours * 3600);
            bd.minutes = Math.floor(be / 60);
            bd.seconds = (be - (bd.minutes * 60));
            bd.timeDifference = bc;
            return bd
        };
        bb.constructor()
    }
    var i = new h();
    function ad() {
        var bb = this;
        this.bind = function(bc) {
            aV(bc).each(function() {
                var bf = aV(this).find("form");
                var bd = aV(this).find(".entryfrm");
                var be = aV("div.contest").attr("id");
                aV(bf).submit(function(bg) {
                    bg.preventDefault();
                    aV(bf).find(".submit").click()
                });
                aV(bf).find("#submit-button").click(function(bj) {
                    aV(bf).find(".err").text("");
                    var bh = aV(bf).find("#email").val();
                    var bi = a7(bh);
                    if (!bi) {
                        aV(bf).find("#emailerr").text("Invalid email");
                        aV(bf).find("#email").focus();
                        return
                    }
                    if (aV(bf).find("#agree").attr("checked") == false) {
                        aV(bf).find("#agreeerr").text("Must agree to Terms and Conditions");
                        aV(bf).find("#agree").focus();
                        return
                    }
                    var bg = aV(bf).serialize();
                    bg = bg + "&m=contest&p=contest&slot=contest-rightrail";
                    aV(bd).html("Submitting....");
                    aV.post("ajax.jsp", bg,
                    function(bk) {
                        aV(bd).parents("div.contestr").replaceWith(bk);
                        bb.bind(".contestr")
                    },
                    "html");
                    omn.omcl("contest_" + be + "_submit_button");
                    bj.preventDefault()
                })
            })
        };
        bb.bind(".contestr")
    }
    new ad();
    function J() {
        var bb = this;
        this.omclDisable = function(bd, bc) {
            bb.omclDisabled[bd] = bc
        };
        this.icid = function(bc, bd) {
            if (bc != null && bd != null && bd != "" && bc.href.indexOf(bd) === -1) {
                bc.href += ((bc.href.indexOf("?") === -1) ? "?": "&") + bd
            }
            return true
        };
        this.isOmclDisabled = function(be) {
            if (typeof(cl_disable) === "undefined") {
                return "false"
            }
            if (cl_disable[be]) {
                return cl_disable[be]
            }
            for (var bd = 0,
            bc = cl_disable.length; bd < bc; bd++) {
                if (be.indexOf(bd) >= 0) {
                    return cl_disable[bd]
                }
            }
            return "false"
        };
        this.omcl = function(bf, bd) {
            if (bb.isOmclDisabled(bf) == "true") {
                return
            }
            if (typeof(p_c_n) != "undefined") {
                bf = bf + "_" + p_c_n
            }
            if (!bd) {
                bd = "o"
            }
            if (typeof s_gi != "undefined" && s_gi != null) {
                var bc = s_gi(cl_account);
                if (segment != "") {
                    bf += "-" + segment
                }
                var be = function() {
                    bc.tl(1, bd, bf);
                    bc.sa(s_account)
                };
                setTimeout(be, 0)
            }
        };
        this.omo = function(bd, bc) {};

        this.pageClick = function(be) {
            var bd = be.target;
            var bc;
            if (bd.tagName == "HTML") {
                return
            }
            while (bd.tagName != "HTML" && bd.tagName != "BODY" && bd.tagName != "A") {
                bd = bd.parentNode
            }
            if (bd.tagName == "A") {
                bc = utils.findClass(bd, /[in]cid-.*/);
                if (bc != "") {
                    bb.icid(bd, bc.replace("cid-", "cid="))
                }
            }
        }
    }
    omn = new J();
    function ay() {
        var bc = this;
        this.params = null;
        this.ajaxParams = null;
        function bb(bd, be) {
            this.key = bd;
            this.value = be
        }
        this.findClass = function(bh, be) {
            if (bh == null || bh.className == null || typeof(bh.className) === "undefined") {
                return ""
            }
            var bd = bh.className;
            var bi = bd.split(" ");
            for (var bg = 0,
            bf = bi.length; bg < bf; bg++) {
                if (bi[bg].match(be)) {
                    return bi[bg]
                }
            }
            return ""
        };
        this.getCleanName = function(be) {
            var bd = be.toLowerCase();
            bd = bd.replace(/[^a-z0-9 ]/g, "");
            bd = bd.replace(/\s+/g, "-");
            return bd
        };
        this.truncateOnWord = function(bh, bd) {
            if (bh.length <= bd) {
                return bh
            }
            var bf = bh.split(" ");
            var be = bh.substring(0, bd);
            var bg = be.split(" ");
            if (bg[bg.length - 1] != bf[bg.length - 1]) {
                bg[bg.length - 1] = ""
            }
            return bg.join(" ").trim() + "..."
        };
        this.addAjaxState = function(bd) {
            var be = bc.getAjaxParams();
            if (be != null && be != "") {
                bd += ((bd.indexOf("?") === -1) ? "?": "&") + be
            }
            return bd
        };
        this.addAjaxNum = function(bd) {
            if (ajaxCacheNum != null && ajaxCacheNum != "") {
                bd += ((bd.indexOf("?") === -1) ? "?": "&") + ajaxCacheNum;
                if (typeof(p_c_n) != "undefined") {
                    bd += ((bd.indexOf("?") === -1) ? "?": "&") + "_c=" + p_c_n
                }
            }
            return bd
        };
        this.getAjaxParams = function() {
            if (bc.ajaxParams === null) {
                var bh = bc.getUrlParams();
                var bf = new Object();
                for (var be = 0,
                bd = bh.length; be < bd; be++) {
                    var bg = bh[be];
                    if (bg.key.indexOf("_track.enabler.") != -1 || bg.key.match("src") || bg.key.match("cobrand")) {
                        bf[bg.key] = bg.value
                    }
                }
                bc.ajaxParams = aV.param(bf)
            }
            return bc.ajaxParams
        };
        this.getUrlParams = function() {
            if (bc.params === null) {
                var bd = window.location.href;
                bc.params = new Array();
                var bg = bd.slice(bd.indexOf("?") + 1).split("&");
                for (var bf = 0,
                be = bg.length; bf < be; bf++) {
                    var bh = bg[bf].split("=");
                    bc.params.push(new bb(bh[0], bh[1]))
                }
            }
            return bc.params
        };
        this.isiPad = function() {
            return (navigator.platform.indexOf("iPad") != -1)
        };
        this.isiOS = function() {
            var bd = navigator.userAgent.toLowerCase();
            return bd.match(/(iphone|ipod|ipad)/)
        };
        this.isResponsive = function() {
            var bd = false;
            if (typeof(AOL.responsiveEnabled) !== "undefined") {
                bd = AOL.responsiveEnabled
            }
            return bd
        };
        bc.getUrlParams()
    }
    utils = new ay();
    AOL.utils = utils;
    function aQ() {
        var bb = this;
        this.cid = "";
        this.omvar = "nb-";
        this.nbslotname = "";
        this.campaignCookieName = "nb_cid";
        this.activebanner = null;
        this.isHomepage = false;
        this.campaignType = "";
        try {
            bb.isHomepage = MTMHP.isHomepage
        } catch(bc) {}
        this.setCampaign = function(bi) {
            var bf = cookies.get(this.campaignCookieName);
            if (bf === null || bf.length < 1) {
                cookies.set(this.campaignCookieName, bi);
                return
            }
            campaignList = bf.split("~");
            var bh = new Array();
            bh.push(bi);
            var bj = 1;
            for (var be = 0,
            bd = campaignList.length; be < bd; be++) {
                var bg = campaignList[be];
                if (bg != bi && bj < 20) {
                    bh.push(bg);
                    bj++
                }
            }
            cookies.set(this.campaignCookieName, bh.join("~"))
        };
        this.bindAction = function() {
            if (aV("#nb-campaign-type").length && aV("#nb-campaign-type").html() != "") {
                bb.campaignType = aV("#nb-campaign-type").html()
            }
            bb.activebanner = aV("#network-banner");
            if (aV("#network-banner-hp").html() != null) {
                bb.activebanner = aV("#network-banner-hp")
            }
            bb.activebanner.live("mouseover",
            function(bd) {
                bb.cid = utils.findClass(this, /cid-.*/).replace("cid-", "")
            });
            bb.activebanner.live("click",
            function(bd) {
                try {
                    if (aV("#banner-clickset").html() == "true") {
                        bb.setCampaign(bb.cid)
                    }
                } catch(bd) {}
            })
        };
        this.bindClose = function() {
            aV("#banner-close").click(function() {
                try {
                    aV("#banner-promo").hide();
                    aV("#banner-centered-promo").hide();
                    aV("#banner-close").hide();
                    bb.activebanner.slideUp("medium");
                    bb.setCampaign(bb.cid);
                    omn.omo(bb.nbslotname + "_" + bb.cid + "_closebtn");
                    omn.omcl(bb.nbslotname + "_" + bb.cid + "_closebtn")
                } catch(bd) {}
            })
        };
        this.constructor = function() {
            bb.bindAction();
            if (parseInt(aV("#banner-delay").html()) > 0) {
                setTimeout(function() {
                    aV(".banner-inner").fadeIn("medium");
                    aV("#network-banner").slideDown("medium")
                },
                parseInt(aV("#banner-delay").html()))
            } else {
                if (bb.campaignType == "mtmhpBanner") {
                    if (! (bb.isHomepage && aV.browser.msie)) {
                        aV("#network-banner").show()
                    }
                } else {
                    aV("#network-banner").show()
                }
            }
            if (aV("#campaign-cookie-name").html() != null) {
                bb.campaignCookieName = aV("#campaign-cookie-name").html()
            }
            if (aV("#nbslotname").html() != null) {
                bb.nbslotname = aV("#nbslotname").html()
            }
            if (bb.campaignType == "mtmhpBanner" && bb.isHomepage && aV.browser.msie) {
                try {
                    bb.cid = utils.findClass(aV("#network-banner")[0], /cid-.*/).replace("cid-", "");
                    aV.get("ajax.jsp?m=networkbanner&p=networkbanner&slot=" + aV("#nb-ishpslot").html() + "&campaignId=" + bb.cid + "&clickTracking=" + aV("#nb-click-tracking").html() + "&largeImageOnClick=" + aV("#nb-large-image-onclick").html() + "&ttid=" + aV("#nb-ttid").html() + "&suffix  =" + MTMHP.mtmhpSuffix,
                    function(be) {
                        if (be != "") {
                            aV("#network-banner").parent().html(be);
                            bb.bindAction();
                            bb.bindClose()
                        }
                    },
                    "html")
                } catch(bd) {}
            }
            bb.bindClose()
        };
        bb.constructor()
    }
    networkBanner = new aQ();
    function a3() {
        var bb = this;
        this.refreshCount = 2;
        this.enableRefresh = false;
        this.adDivIds = [];
        this.constructor = function() {
            if (typeof(oldArticlesCookieVal) !== "undefined" && oldArticlesCookieVal !== null) {
                cookies.set("oldArticles", oldArticlesCookieVal, "session")
            }
            bb.showCaptions();
            bb.showSlideshows()
        };
        this.showCaptions = function() {
            aV(".article .article-content img").each(function() {
                bb.showCaption(aV(this))
            });
            aV(".img-caption div.caption").each(function() {
                var bd = aV(this).closest("tbody").find("img").attr("data-credit");
                if (typeof bd != "undefined" && bd != "") {
                    var bc = aV('<div class="img-credit">' + bd + "</div>");
                    bc.insertBefore(aV(this));
                    if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                        bc.show()
                    }
                }
            })
        };
        this.showCaption = function(bd) {
            var bc = bd.attr("data-caption");
            var bf = bd.css("float");
            if (bc !== undefined && bc !== "") {
                var be = "0 0 8px 0";
                if (bf === "left") {
                    be = "0 20px 10px 0"
                } else {
                    if (bf === "right") {
                        be = "0 0 10px 20px"
                    }
                }
                bd.wrap("<table class='img-caption'><tbody><tr><td></td></tr></tbody></table>").parent().parent().parent().append("<tr><td><div class='caption'>" + bc + "</div></td></tr>").parent().css({
                    "float": bf,
                    margin: be
                })
            } else {
                var bg = "0 0 10px 0";
                if (bf === "right") {
                    bg = "0 0 10px 20px"
                } else {
                    if (bf === "left") {
                        bg = "0 20px 10px 0"
                    }
                }
                bd.css("padding", bg)
            }
        };
        this.setupAdRefresh = function() {
            var bg = [];
            var bf = 2;
            var bi = false;
            var bd = aV(".article-content");
            if (bd.length > 0) {
                var bc = bd.data("enablerefresh");
                if (bc != null && bc === true) {
                    bb.enableRefresh = true
                }
                var be = bd.data("refreshcnt");
                if (typeof(be) != undefined && isNaN(be) == false) {
                    bb.refreshCount = be
                }
            }
            if (bb.enableRefresh == true) {
                try {
                    window.adsDevilAd = window.adsDevilAd || {};
                    adsDevilAd.adinfo = function(bm, bl, bj, bk) {
                        aV("#" + bl).height(bk)
                    }
                } catch(bh) {}
                aV(adsDivs).each(function(bj) {
                    bb.adDivIds[bj] = aV(this).attr("id")
                })
            }
        };
        this.twist = function(bc) {
            aV.each(bc,
            function(bf, be) {
                var bd = aV(be);
                var bg = bd.attr("data-slideshow-id");
                if (bd.data("twist-init") !== true) {
                    bd.data("twist-init", true);
                    if (bd.data("twist") !== undefined) {
                        bd.data("twist").destroy()
                    }
                    bd.twist({
                        data: "http://" + blogsmithDomain + "/_/slideshow/" + bg + "/with-slides?callback=?",
                        thumbnails: true,
                        thumbStyle: "carousel",
                        trackingId: (typeof s_265 != "undefined" && s_265 != null) ? s_265.channel: "",
                        refreshDivId: bb.adDivIds,
                        arrows: false,
                        refreshCount: bb.refreshCount,
                        contentMap: {
                            entryArray: {
                                path: "slides"
                            },
                            photoSrc: {
                                path: function(bh) {
                                    return bh.image_url_large || bh.image_url_template.replace("{size}", "l")
                                }
                            },
                            thumbnail: {
                                path: function(bh) {
                                    return bh.image_url_thumb || bh.image_url_template.replace("{size}", "s")
                                }
                            },
                            caption: {
                                path: "text"
                            },
                            title: {
                                path: "title"
                            },
                            type: {
                                path: "type"
                            },
                            mediaId: {
                                path: "_id"
                            },
                            player: {
                                path: "data.video_embed_code"
                            },
                            tweetLink: {
                                path: "data.tweet_link"
                            },
                            body: {
                                path: "text"
                            },
                            quoteSource: {
                                path: "credits"
                            },
                            text: {
                                path: "text"
                            }
                        }
                    })
                }
            })
        };
        this.showSlideshows = function() {
            var bc = aV(".knot-slideshow");
            if (typeof(blogsmithDomain) !== "undefined" && bc.length > 0) {
                this.setupAdRefresh();
                Aol.getJS("http://o.aolcdn.com/os_merge/?file=/aol/jquery.mmtrack.min.js&file=/aol/twist/twist.data.js&file=/aol/twist/twist.lookup.js&file=/aol/twist/twist.base.js&file=/aol/twist/twist.arrows.js&file=/aol/twist/twist.infobar.js&file=/aol/twist/twist.tweet.js&file=/aol/twist/twist.thumbs.js&file=/aol/twist/twist.track.js&file=/aol/twist/twist.ad.js&file=/aol/sb_adrefresh1.js&file=/aol/twist/twist.video.js&file=/aol/twist/twist.suggest.js",
                function() {
                    aV.twist.prototype.plugins.push({
                        name: "thumbMove",
                        _init: function(bd) {
                            var be = this;
                            bd.topic("built").subscribe(function() {
                                be.doSomething(bd)
                            });
                            return aV.Deferred(function(bf) {
                                bf.resolve(bd)
                            }).promise()
                        },
                        doSomething: function(bd) {
                            bd.$element.data("twist-init", false);
                            if (typeof(bd.$infoBar) !== "undefined" && typeof(bd.$thumbsContainer) !== "undefined") {
                                bd.$infoBar.detach().insertAfter(bd.$thumbsContainer)
                            }
                        }
                    });
                    aV.twist.prototype.plugins.push({
                        name: "swipe",
                        _init: function(bd) {
                            var be = this;
                            bd.topic("built").subscribe(function() {
                                be.doSomething(bd)
                            });
                            return aV.Deferred(function(bf) {
                                bf.resolve(bd)
                            }).promise()
                        },
                        doSomething: function(bd) {
                            if (AOL.isMobileSwipe) {
                                aV(".article-content").delegate("li.aol-twist-slide", "swipeleft",
                                function(be) {
                                    bd.next()
                                });
                                aV(".article-content").delegate("li.aol-twist-slide", "swiperight",
                                function(be) {
                                    bd.prev()
                                })
                            }
                        }
                    });
                    aV.twist.prototype.plugins.push({
                        name: "slideTrack",
                        _init: function(bd) {
                            var be = this;
                            bd.topic("change").subscribe(function() {
                                be.doSomething(bd)
                            });
                            return aV.Deferred(function(bf) {
                                bf.resolve(bd)
                            }).promise()
                        },
                        doSomething: function(bd) {
                            if (window.bN_cfg) {
                                window.bN.set("sliden", bd.active + 1, 1);
                                window.bN.set("slidei", bd.data._id, 1)
                            }
                        }
                    });
                    bb.twist(bc);
                    aV("body").on("hmpg.snap",
                    function(bd) {
                        bb.twist(bc)
                    })
                })
            }
        };
        bb.constructor()
    }
    article = new a3();
    function an() {
        var bb = this;
        this.constructor = function() {
            var bc = aV("#article-rotation-arrows");
            bc.prependTo("#aol-content");
            bc.show();
            bc.css("top", Math.max(0, ((aV(window).height() - bc.outerHeight()) / 2) + aV(window).scrollTop()) + "px")
        };
        bb.constructor()
    }
    artArrows = new an();
    function m() {
        var bb = this;
        this.constructor = function() {
            var bc = cookies.get("mtmhp");
            if (bc != "1") {
                aV(".mtmhpw").css("display", "block")
            }
            aV(".ttanchor").live("click",
            function(bd) {
                if (aV(".style-" + aV(this).attr("id")).attr("style") != undefined && aV(".style-" + aV(this).attr("id")).attr("style") != "") {
                    aV("#banner-tooltip-" + aV(this).attr("id")).css("margin-left", aV(".style-" + aV(this).attr("id")).css("margin-left"));
                    aV("#banner-tooltip-" + aV(this).attr("id")).css("margin-top", aV(".style-" + aV(this).attr("id")).css("margin-top"))
                }
                aV("#banner-tooltip-" + aV(this).attr("id")).show()
            });
            aV("body").click(function() {
                aV(".banner-tooltip").hide()
            });
            aV(".banner-tooltip").live("click",
            function(bd) {})
        };
        bb.constructor()
    }
    mtmhp = new m();
    function aG() {
        var bb = this;
        this.tips = [];
        this.add = function(bc) {
            var bd = new l(bc);
            bb.tips.push(bd)
        };
        this.fetch = function(bd, bc) {
            if (bc == null) {
                bc = true
            }
            aV.getJSON("ajax.jsp?m=featuretips&p=featuretip&slot=" + bd,
            function(bf) {
                if (bf) {
                    var be = new l(bf);
                    bb.tips.push(be);
                    be.create();
                    if (bc) {
                        be.scrollTo()
                    }
                } else {
                    if (console) {
                        console.log("No Featuretip for: " + bd)
                    }
                }
            })
        };
        this.show = function() {
            if (bb.tips.length > 0) {
                var be = cookies.get("stips5");
                if (be && be != "1") {
                    be = be + "~" + p_c_n
                } else {
                    be = p_c_n
                }
                cookies.set("stips5", be, "session")
            }
            for (var bd = 0,
            bc = bb.tips.length; bd < bc; bd++) {
                bb.tips[bd].create()
            }
        };
        this.pos = function() {
            for (var bd = 0,
            bc = bb.tips.length; bd < bc; bd++) {
                bb.tips[bd].position()
            }
        };
        this.hide = function(bc) {
            for (var be = 0,
            bd = bb.tips.length; be < bd; be++) {
                if (bb.tips[be].name == bc) {
                    bb.tips[be].hide()
                }
            }
        };
        this.find = function(bc) {
            for (var be = 0,
            bd = bb.tips.length; be < bd; be++) {
                if (bb.tips[be].name == bc) {
                    return bb.tips[be]
                }
            }
            return null
        }
    }
    fTips = new aG();
    function F() {
        var bd = false;
        var be = aV("#msg-overlay");
        var bg = false;
        if (be.length > 0) {
            var bf = parseFloat(utils.findClass(be[0], /opac-.*/).replace("opac-", ""));
            if (isNaN(bf)) {
                bf = 0.5
            }
            var bj = parseFloat(utils.findClass(be[0], /delay-.*/).replace("delay-", ""));
            if (isNaN(bj)) {
                bj = 5000
            }
            var bc = utils.findClass(be[0], /width-.*/).replace("width-", "");
            var bk = utils.findClass(be[0], /height-.*/).replace("height-", "");
            if (aV.browser.msie && aV.browser.version == "6.0") {
                bk = parseInt(bk.substr(0, 3)) + 30 + bk.substr(3)
            }
            var bh = utils.findClass(be[0], /cid-.*/).replace("cid-", "");
            var bi = parseInt(utils.findClass(be[0], /session-.*/).replace("session-", ""));
            var bb = utils.findClass(be[0], /opt-.*/).replace("opt-", "");
            if (isNaN(bi)) {
                bi = 1
            }
            var bl = true;
            if (utils.findClass(be[0], /bgclk-.*/).replace("bgclk-", "") == "true") {
                bl = false
            }
            aV.colorbox({
                href: "#msg-overlay",
                width: bc,
                height: bk,
                open: true,
                inline: true,
                transition: "none",
                opacity: bf,
                overlayClose: bl,
                scrolling: false,
                close: "<span class='moclose'></span>",
                onOpen: function() {
                    aV("#colorbox").addClass("msgoverlayWr");
                    if (bb != "") {
                        aV("#colorbox").addClass(bb);
                        if (aV(".favorites-container").length > 0) {
                            aV(".favorites-container").addClass("hd");
                            aV("#cboxOverlay").hide()
                        }
                    }
                    if (!bl) {
                        aV("#email-btn").hide();
                        aV("#colorbox").css("z-index", "99");
                        aV(".context-tip").addClass("hd");
                        aV(".context-tip-arrow").addClass("hd")
                    }
                    var bm = (document.height !== undefined) ? document.height: document.body.offsetHeight;
                    aV("#cboxOverlay").height(bm)
                },
                onClosed: function() {
                    if (!bd) {
                        omn.omcl("message-overlay_" + bh + "_overlay_close")
                    }
                    if (bg) {
                        cookies.set("molcls", bh);
                        aV.fn.colorbox.remove()
                    }
                    if (bb != "" && aV(".favorites-container").length > 0) {
                        aV(".favorites-container").removeClass("hd")
                    }
                },
                onComplete: function() {
                    if (bb != "" && aV(".favorites-container").length > 0) {
                        aV("#colorbox").prependTo("#pgbg")
                    }
                    if (AOL.responsiveEnabled) {
                        aV(".email-input").attr("placeholder", aV(".email-input").val()).val("");
                        setTimeout(function() {
                            aV("#colorbox .email-input").focus()
                        },
                        50)
                    }
                }
            });
            aV("#promo-btn").click(function() {
                omn.omcl("message-overlay_" + bh + "_overlay_button");
                bd = true;
                aV.fn.colorbox.close();
                aV.fn.colorbox.remove();
                return false
            })
        }
        this.bind = function() {
            var bm = this;
            aV("#submitmsg").hide();
            bm.form = aV(".molemailform");
            bm.form.submit(function(bn) {
                bm.submit(aV(this));
                bn.preventDefault()
            });
            aV(".emamil-btn").click(function(bn) {
                bm.form.submit();
                bn.preventDefault()
            });
            aV(".email-input").click(function() {
                if (AOL.responsiveEnabled == false) {
                    aV(".email-input").css("color", "#6d6d6d")
                }
                if (aV(".email-input").val().indexOf("Enter") != -1 || aV(".email-input").val().indexOf("Sorry") != -1) {
                    aV(".email-input").val("")
                }
            });
            aV("#cboxClose").live("click", (function() {
                bg = true
            }));
            if (be.length > 0) {
                bm.sessionIncr()
            }
        };
        this.load = function() {
            var br = aV("#elist").val();
            var bo = aV("#ewelcome").val();
            var bm = aV(".email-input").val();
            aV(".email-input").val("Submitting...");
            var bq = "";
            if (aV(".signupchbox:checked").val() !== undefined) {
                bq = aV("#nllist").val()
            }
            var bp = a7(bm);
            if (!bp) {
                bm = "invalid"
            }
            var bn = "ajax.jsp?m=messageoverlay&p=collectemail&slot=message-overlay&email=" + bm + "&welcome=" + bo + "&list=" + br;
            if (bq != "") {
                bn += ";" + bq
            }
            aV("#submitmsg").load(encodeURI(bn),
            function(bs) {
                if (bs.indexOf("Thank") === -1) {
                    aV(".email-input").val(bs);
                    if (AOL.responsiveEnabled == false) {
                        aV(".email-input").css("color", "#ff0000")
                    }
                } else {
                    aV(".signup").hide();
                    aV("#submitmsg").show();
                    bd = true;
                    window.setTimeout(close, bj, null, null)
                }
            })
        };
        this.close = function() {
            aV.fn.colorbox.close();
            aV.fn.colorbox.remove()
        };
        this.submit = function(bm) {
            if (!aV(".signupchbox").length) {
                omn.omcl("message-overlay_" + bh + "_overlay_button")
            } else {
                if (aV(".signupchbox:checked").val() !== undefined) {
                    omn.omcl("message-overlay_" + bh + "_overlay_button_checkboxon")
                } else {
                    omn.omcl("message-overlay_" + bh + "_overlay_button_checkboxoff")
                }
            }
            self.load()
        };
        this.sessionIncr = function() {
            self.setSessionCookie()
        };
        this.setSessionCookie = function() {
            var bm = cookies.get("molcls");
            var bn = [];
            if (bi != 1) {
                if (bm) {
                    cvar = bm.split("~");
                    cname = cvar[0];
                    cnum = cvar[1];
                    if (cname == bh) {
                        if (cnum < bi - 1) {
                            cnum++;
                            bn.push(bh + "~" + cnum)
                        } else {
                            bn.push(bh)
                        }
                    } else {
                        bn.push(bh + "~1")
                    }
                } else {
                    if (bi > 1) {
                        bn.push(bh + "~1")
                    }
                }
            } else {
                bn.push(bh)
            }
            cookies.set("molcls", bn)
        };
        self.bind()
    }
    function a9() {
        var bd = aV("#msg-ol-mtmhp");
        if (bd.length > 0) {
            var bc = parseFloat(utils.findClass(bd[0], /opac-.*/).replace("opac-", ""));
            if (isNaN(bc)) {
                bc = 0.5
            }
            var be = utils.findClass(bd[0], /width-.*/).replace("width-", "");
            var bb = utils.findClass(bd[0], /height-.*/).replace("height-", "");
            if (aV.browser.msie && aV.browser.version == "6.0") {
                bb = parseInt(bb.substr(0, 3)) + 30 + bb.substr(3)
            }
            var bf = utils.findClass(bd[0], /cid-.*/).replace("cid-", "");
            aV("body").on("hmpg.snap",
            function(bg) {
                if (bg.snapPoint <= 479) {} else {}
            });
            aV.colorbox({
                href: "#msg-ol-mtmhp",
                width: be,
                height: bb,
                open: true,
                inline: true,
                transition: "none",
                opacity: bc,
                scrolling: false,
                close: "<span class='moclose'></span>",
                onOpen: function() {
                    aV("#colorbox").addClass("msgolmtmhpWr");
                    var bg = (document.height !== undefined) ? document.height: document.body.offsetHeight;
                    aV("#cboxOverlay").height(bg);
                    aV("body").css("overflow", "hidden")
                },
                onClosed: function() {
                    omn.omcl("message-overlay-mtmhp_" + bf + "_mkhome_close");
                    aV("body").css("overflow", "auto");
                    aV.colorbox.remove()
                },
                onComplete: function() {
                    if (AOL.responsiveEnabled) {}
                }
            })
        }
    }
    aV(document).ready(function() {
        fTips.show();
        F();
        a9()
    });
    function l(bc) {
        var bb = this;
        this.json = bc;
        this.name = null;
        this.tgt = null;
        this.title = null;
        this.txt = null;
        this.tag = null;
        this.x = null;
        this.y = null;
        this.secs = null;
        this.arrowPos = null;
        this.closeB = null;
        this.isWelcome = null;
        this.welcomeTop = null;
        this.welcomeBot = null;
        this.next = null;
        this.nextTxt = null;
        this.tipObj = null;
        this.arrowObj = null;
        this.shadowObj = null;
        this.tgtObj = null;
        this.tipInObj = null;
        this.shown = false;
        this.modal = null;
        this.wrap = null;
        this.hidden = false;
        this.gfcol = null;
        this.gtcol = null;
        this.tcol = null;
        this.lcol = null;
        this.bcol = null;
        this.arrowSrc = null;
        this.isTheme = false;
        this.tracking = null;
        this.constructor = function() {
            bb.name = bc.nm;
            bb.tgt = bc.tgt;
            bb.title = bc.ttl;
            bb.txt = bc.txt;
            bb.tag = bc.tag;
            bb.x = bc.x;
            bb.y = bc.y;
            bb.secs = bc.s;
            bb.arrowPos = bc.arw;
            bb.closeB = bc.cls;
            bb.isWelcome = bc.wel;
            bb.welcomeTop = bc.ttlimg;
            bb.welcomeBot = bc.btmimg;
            bb.next = bc.nxt;
            bb.nextTxt = bc.nxtxt;
            bb.tracking = bc.tracking;
            if (bc.gfcol != null) {
                bb.isTheme = true;
                bb.gfcol = bc.gfcol;
                bb.gtcol = bc.gtcol;
                bb.tcol = bc.tcol;
                bb.lcol = bc.lcol;
                bb.bcol = bc.bcol;
                bb.arrowSrc = bc.asrc
            }
        };
        this.createWelcome = function() {
            var bd = aV("#body");
            bb.wrap = aV("<div id='welcome-new-wrap'></div>");
            bb.tipObj = aV("<div id='welcome-new' id='om_ftip_" + bb.name + "_'></div>");
            bb.tgtObj = aV(bb.tgt);
            if (bb.closeB) {
                aV("<a href='' class='close' title='Close'>Close</a>").click(function(be) {
                    omn.omcl("ftip_" + bb.name + "_close");
                    bb.close();
                    be.preventDefault()
                }).appendTo(bb.tipObj)
            }
            if (bb.welcomeTop != "") {
                bb.tipObj.append(bb.welcomeTop)
            }
            if (bb.txt != "") {
                bb.tipObj.append("<span class='mn'>" + bb.txt + "</span>")
            }
            if (bb.welcomeBot != "") {
                bb.tipObj.append(bb.welcomeBot)
            }
            if (bb.tag != "") {
                bb.tipObj.append(bb.tag)
            }
            bb.modal = aV("<div></div>").click(function(be) {
                omn.omcl("ftip_" + bb.name + "_modal");
                bb.close();
                be.preventDefault()
            }).css({
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "200",
                width: M.width(),
                height: M.height()
            }).appendTo("body");
            bd.prepend(bb.wrap).prepend(bb.tipObj);
            bb.arrowObj = aV("<div></div>")
        };
        this.createTip = function() {
            var bd = aV("#pgbg");
            bb.tipObj = aV("<div class='context-tip " + bb.tracking + "' id='om_ftip_" + bb.name + "_'></div>");
            bb.tgtObj = aV(bb.tgt);
            if (bb.closeB) {
                aV("<a href='' class='welcome-closebutton' title='Close'>Close</a>").click(function(bh) {
                    omn.omcl("ftip_" + bb.name + "_close");
                    bb.close();
                    bh.preventDefault()
                }).appendTo(bb.tipObj)
            }
            if (bb.title != "") {
                bb.tipObj.append("<h6 class='hd'>" + bb.title + "</h6>")
            }
            if (bb.txt != "") {
                if (bb.txt.indexOf("${refreshURL}") != -1) {
                    var be = "?";
                    if (window.location.search.indexOf("?") != -1) {
                        be = "&"
                    }
                    var bf = window.location.search + be;
                    bb.txt = bb.txt.replace("${refreshURL}", bf)
                }
                bb.tipObj.append("<span class='mn'>" + bb.txt + "</span>")
            }
            if (bb.next != "" && bb.nextTxt != "") {
                var bg = aV("<a href='' class='nexttipbut'>" + bb.nextTxt + "</a>").click(function(bh) {
                    omn.omcl("ftip_" + bb.name + "_next");
                    bb.hide();
                    fTips.fetch(bb.next);
                    bh.preventDefault()
                });
                bg.appendTo(bb.tipObj)
            }
            if (bb.tag != "") {
                bb.tipObj.append(bb.tag)
            }
            bb.tipObj.appendTo(bd);
            bb.arrowObj = aV("<div class='context-tip-arrow'></div>").appendTo(bd)
        };
        this.create = function() {
            if (bb.isWelcome) {
                bb.createWelcome()
            } else {
                bb.createTip()
            }
            if (bb.isTheme) {
                bb.arrowObj.css("background-image", 'url("' + bb.arrowSrc + '")');
                bb.tipObj.css("border-color", bb.bcol).css("color", bb.tcol);
                bb.tipObj.addClass("context-tip_theme");
                bb.tipObj.find("a").css("color", bb.lcol);
                bb.tipObj.find("a.welcome-closebutton").css("background", 'url("' + bb.arrowSrc + '") 0px -277px');
                if ((this.arrowPos == 1) || (this.arrowPos == 2) || (this.arrowPos == 3)) {
                    var be = "startColorstr=" + bb.gfcol + ", endColorstr=" + bb.gtcol
                } else {
                    if ((this.arrowPos == 4) || (this.arrowPos == 5) || (this.arrowPos == 6)) {
                        var be = "startColorstr=" + bb.gtcol + ", endColorstr=" + bb.gfcol
                    } else {
                        if (this.arrowPos == 7) {
                            var be = "startColorstr=" + bb.gfcol + ", endColorstr=" + bb.gtcol + ", GradientType=1"
                        } else {
                            if (this.arrowPos == 8) {
                                var be = "startColorstr=" + bb.gtcol + ", endColorstr=" + bb.gfcol + ", GradientType=1"
                            } else {
                                var be = "startColorstr=" + bb.gtcol + ", endColorstr=" + bb.gfcol
                            }
                        }
                    }
                }
                bb.tipObj.css("-ms-filter", "progid:DXImageTransform.Microsoft.gradient(" + be + ")");
                bb.tipObj.css("filter", "progid:DXImageTransform.Microsoft.gradient(" + be + ")");
                if (aV.browser.mozilla) {
                    if ((this.arrowPos == 1) || (this.arrowPos == 2) || (this.arrowPos == 3)) {
                        var be = "top"
                    } else {
                        if ((this.arrowPos == 4) || (this.arrowPos == 5) || (this.arrowPos == 6)) {
                            var be = "bottom"
                        } else {
                            if (this.arrowPos == 7) {
                                var be = "left"
                            } else {
                                if (this.arrowPos == 8) {
                                    var be = "right"
                                } else {
                                    var be = "bottom"
                                }
                            }
                        }
                    }
                    aV(bb.tipObj).css("background", "-moz-linear-gradient(" + be + ", " + bb.gfcol + ", " + bb.gtcol + ")")
                }
                if (aV.browser.safari) {
                    aV(bb.tipObj).css("background", "-webkit-gradient(linear, left top, left bottom, from(" + bb.gfcol + "), to(" + bb.gtcol + "))")
                }
                if ((this.arrowPos != 4) && (this.arrowPos != 5) && (this.arrowPos != 6)) {
                    bb.shadowObj = "<div style='height:7px;position:absolute;z-index:202'><div style='background:url(" + bb.arrowSrc + ") -7px -182px;height:7px;width:20px;float:left'></div><div style='background:url(" + bb.arrowSrc + ") right -201px;height:7px;width:20px;float:right'></div><div style='background:url(" + bb.arrowSrc + ") right -247px;height:7px;margin:0 20px;'></div></div>";
                    var bd = aV("body");
                    bb.shadowObj = aV(bb.shadowObj);
                    aV(bb.shadowObj).appendTo(bd)
                }
            }
            aV(document).trigger("featuretipCreated", [bb]);
            bb.show()
        };
        this.sessionIncr = function() {
            bb.setSessionCookie()
        };
        this.setSessionCookie = function(bg, bd) {
            if (bg == null) {
                bg = false
            }
            var bf = cookies.get("tips5");
            var bh = [];
            var bk = "1";
            if (bg) {
                bk = bd
            }
            if (bf && bf != "1") {
                ctips = bf.split("~");
                var bj = false;
                for (var bi = 0,
                be = ctips.length; bi < be; bi++) {
                    ctipFields = ctips[bi].split(":");
                    ctipName = ctipFields[0];
                    ctipNum = ctipFields[1];
                    if (ctipName == bb.name) {
                        if (ctipNum > -1) {
                            ctipNum++
                        }
                        if (bg) {
                            ctipNum = bd
                        }
                        bj = true
                    }
                    bh.push(ctipName + ":" + ctipNum)
                }
                if (!bj) {
                    bh.push(bb.name + ":" + bk)
                }
            } else {
                bh.push(bb.name + ":" + bk)
            }
            cookies.set("tips5", bh.join("~"), "persist")
        };
        this.show = function(bd) {
            if (bd == null) {
                bd = true
            }
            bb.hidden = false;
            if (bb.tgtObj.length != 0 && aV(bb.tgtObj).is(":visible")) {
                bb.tipObj.show();
                bb.position();
                if (!bb.shown) {
                    bb.sessionIncr()
                }
                bb.shown = true;
                if (bb.secs > 0 && bd) {
                    setTimeout(function() {
                        bb.hide()
                    },
                    bb.secs * 1000)
                }
            }
        };
        this.closeKill = function() {
            bb.setSessionCookie(true, -1)
        };
        this.close = function() {
            bb.closeKill();
            bb.hide()
        };
        this.hide = function() {
            bb.hidden = true;
            bb.tipObj.hide();
            bb.arrowObj.hide();
            if (bb.shadowObj != null) {
                bb.shadowObj.hide()
            }
            if (bb.modal != null) {
                bb.modal.hide()
            }
            if (bb.wrap != null) {
                bb.wrap.hide()
            }
        };
        this.position = function() {
            if (!bb.isWelcome && bb.tgtObj && !bb.hidden) {
                Q(bb.arrowPos, bb.tgtObj, bb.arrowObj, bb.tipObj, bb.x, bb.y, bb.isTheme, bb.shadowObj)
            }
        };
        this.scrollTo = function() {
            var bd;
            switch (bb.arrowPos) {
            case 1:
            case 2:
            case 3:
                bd = bb.tgtObj.offset().top;
                break;
            default:
                bd = bb.tipObj.offset().top;
                break
            }
            window.scrollTo(0, bd + bb.y - 30)
        };
        bb.constructor()
    }
    function Q(bg, bo, bb, bi, bm, bl, be, bd) {
        var bc, bn, bk, bf;
        var bh = aV("#pgbg").offset().top;
        if (bo == null || bo.offset() == null) {
            return
        }
        switch (bg) {
        case "0":
            bb.hide();
        case "1":
            bc = bo.offset().left - 3 + bm;
            bk = bo.offset().top - bh + 17 + bl;
            bn = bc + 5;
            bf = bk - 14;
            bb.addClass("ftiparrowup");
            if (be) {
                bb.css("background-position", "0 0px")
            }
            break;
        case "2":
            bc = bo.offset().left - bi.outerWidth() / 2 + bo.outerWidth() / 2 + 3 + bm;
            bk = bo.offset().top - bh + 17 + bl;
            bn = bc + bi.outerWidth() / 2 - 15;
            bf = bk - 14;
            bb.addClass("ftiparrowup");
            if (be) {
                bb.css("background-position", "0 0px")
            }
            break;
        case "3":
            bc = bo.offset().left - bi.outerWidth() + bo.outerWidth() / 2 + 17 + bm;
            bk = bo.offset().top - bh + 17 + bl;
            bn = bc + bi.outerWidth() - 36;
            bf = bk - 14;
            bb.addClass("ftiparrowup");
            if (be) {
                bb.css("background-position", "0 0px")
            }
            break;
        case "4":
            bc = bo.offset().left - 3 + bm;
            bk = bo.offset().top - bh - bi.outerHeight() - 122 + bl;
            bn = bc + 5;
            bf = bk + bi.outerHeight() - 2;
            bb.addClass("ftiparrowdown").addClass("tiparrowbl");
            if (be) {
                bb.css("background-position", "0 -121px")
            }
            break;
        case "6":
            bc = bo.offset().left - bi.outerWidth() + bo.outerWidth() / 2 + 17 + bm;
            bk = bo.offset().top - bh - bi.outerHeight() - 122 + bl;
            bn = bc + bi.outerWidth() - 36;
            bf = bk + bi.outerHeight() - 2;
            bb.addClass("ftiparrowdown");
            if (be) {
                bb.css("background-position", "0 -121px")
            }
            break;
        case "7":
            bc = bo.offset().left + bo.outerWidth() + 17 + bm;
            bk = bo.offset().top - bh + bo.outerHeight() / 2 - bi.outerHeight() / 2 + bl;
            bn = bc - 14;
            bf = bk + bi.outerHeight() / 2 - 17;
            bb.addClass("ftiparrowleft");
            if (be) {
                bb.css("background-position", "0px -78px")
            }
            break;
        case "8":
            bc = bo.offset().left - bi.outerWidth() - 17 + bm;
            bk = bo.offset().top - bh - bi.outerHeight() / 2 - 100 + bl;
            bn = bc + bi.outerWidth() - 2;
            bf = bk + bi.outerHeight() / 2 - 17;
            bb.addClass("ftiparrowright");
            if (be) {
                bb.css("background-position", "0.4px -30px")
            }
            break;
        case "5":
        default:
            bc = bo.offset().left - bi.outerWidth() / 2 + bo.outerWidth() / 2 + 3 + bm;
            bk = bo.offset().top - bh - bi.outerHeight() - 5 + bl;
            bn = bc + bi.outerWidth() / 2 - 15;
            bf = bk + bi.outerHeight() - 2;
            bb.addClass("ftiparrowdown").addClass("tiparrowbm");
            if (be) {
                bb.css("background-position", "0 -121px")
            }
            break
        }
        bi.css("left", bc + "px").css("top", bk + "px");
        bb.css("left", bn + "px").css("top", bf + "px");
        var bj = bk + bi.height() + 2;
        if (bd != null) {
            bd.css("left", bc + "px").css("top", bj + "px").css("width", bi.width() + "px")
        }
    }


    if (typeof(FIVEMIN) == "undefined") {
        FIVEMIN = {}
    }
    if (typeof(FIVEMIN.AOL) == "undefined") {
        FIVEMIN.AOL = {}
    }
    FIVEMIN.AOL.videoLoaded = function(bb) {
        var bc = (typeof(bb.videoid) != "undefined") ? bb.videoid: bb.ID;
        if (bc != null) {
            if (typeof alreadyLoaded != "undefined" && alreadyLoaded.id == bc && alreadyLoaded.done == true) {
                alreadyLoaded.done = false;
                return
            }
            alreadyLoaded.id = bc;
            alreadyLoaded.done = true;
            aV(".videoListener").trigger("videoStart", [bc, bb])
        }
    };
    alreadyLoaded = new Object();
    if (typeof(AOL) == "undefined") {
        AOL = {}
    }
    if (typeof(AOL.HOMEPAGE) == "undefined") {
        AOL.HOMEPAGE = {}
    }
    AOL.HOMEPAGE.ieToolbars = new Array();
    AOL.HOMEPAGE.ffToolbars = new Array();
    function d() {
        var bb = this;
        this.toolbarlist = null;
        this.ruleShown = false;
        this.toolbarPartner = "";
        this.toolbarVersion = "";
        this.toolbarUniqueID = "";
        this.expiryTime = null;
        this.constructor = function() {
            var be = aV("#intelligentgreeting").find(".toolbarvalues").html();
            if (typeof be != "undefined" && be != null && be != "") {
                bb.processToolbarSettings(be)
            }
            var bc = aV("#intelligentgreeting").find(".expiryTime").html();
            if (typeof bc != "undefined" && bc != "") {
                var bd = parseInt(bc);
                if (!isNaN(bd)) {
                    bb.expiryTime = new Date(new Date().getTime() + bd * 1000).toGMTString()
                }
            }
            aV("#intelligentgreeting .ruleGreeting").each(function() {
                if (bb.ruleShown == false) {
                    var bi = aV(this).attr("trigger");
                    var bh = bi.split(":");
                    var bj = bh[0];
                    var bg = true;
                    if (bh.length >= 1) {
                        bg = bb.isRuleApplicable(bh[1])
                    }
                    if (bg == true) {
                        aV(this).show();
                        aV("#rulewun").show();
                        bb.ruleShown = true;
                        bb.cookieSet(bj)
                    }
                }
            });
            if (bb.ruleShown == false) {
                var bf = aV("#intelligentgreeting").find(".ruleGreetingDefault");
                if (typeof bf != "undefined" && aV(bf).html() != null) {
                    bf.show();
                    aV("#rulewun").show()
                } else {
                    aV("#intelligentgreeting").load("ajax.jsp?m=jumpbar&p=welcomemsg&slot=welcome-messaging",
                    function() {
                        bb.showGreeting()
                    })
                }
            }
        };
        this.showGreeting = function() {
            var bd = new Date();
            var bc = bd.getHours().toLocaleString();
            if (bc > 2 && bc < 12) { (aV("#wam").show())
            } else {
                if (bc > 11 && bc < 17) { (aV("#wpm").show())
                } else {
                    if (bc > 16 && bc < 23) { (aV("#weve").show())
                    } else {
                        if (bc > 22 || bc < 3) { (aV("#wnt").show())
                        } else { ((aV("#wfb").show()))
                        }
                    }
                }
            }
        };
        this.processToolbarSettings = function(bc) {
            var be = bc.split("~");
            try {
                bb.toolbarPartner = be[0];
                bb.toolbarVersion = be[1];
                bb.toolbarUniqueID = be[2]
            } catch(bd) {}
        };
        this.isRuleApplicable = function(bc) {
            if (bc == "oneclick") {
                return bb.oneclick()
            } else {
                if (bc == "toolbar") {
                    return bb.testToolbar()
                } else {
                    if (bc == "mtmhp") {
                        return bb.testMtmhp()
                    } else {
                        if (bc == "browser") {
                            return bb.testBrowserUpgrade()
                        } else {
                            if (bc == "" || bc == "true") {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        };
        this.testMtmhp = function() {
            try {
                return ! MTMHP.isHomepage
            } catch(bc) {
                return true
            }
        };
        this.oneclick = function() {
            if (aV("#aol-oneclick").size() > 0) {
                return false
            } else {
                return true
            }
        };
        this.testToolbar = function() {
            if (bb.toolbarPartner == "" && bb.toolbarVersion == "" && bb.toolbarUniqueID == "") {
                return true
            }
            var bc;
            var be = bb.getToolbarCookie();
            var bd = bb.testToolbarItemMatch(be);
            if (!bd) {
                return false
            }
            if (aV.browser.msie) {
                for (bc = 0; bc < AOL.HOMEPAGE.ieToolbars.length; bc++) {
                    var bf = AOL.HOMEPAGE.ieToolbars[bc];
                    bd = bb.testToolbarItemMatch(bf);
                    if (!bd) {
                        return false
                    }
                }
            } else {
                if (aV.browser.mozilla) {
                    for (bc = 0; bc < AOL.HOMEPAGE.ffToolbars.length; bc++) {
                        bf = AOL.HOMEPAGE.ffToolbars[bc];
                        bd = bb.testToolbarItemMatch(bf);
                        if (!bd) {
                            return false
                        }
                    }
                }
            }
            return true
        };
        this.testToolbarItemMatch = function(bd) {
            var be = bb.toolbarUniqueID == "" ? true: false;
            var bf = bb.toolbarVersion == "" ? true: false;
            var bc = bb.toolbarPartner == "" ? true: false;
            if (bb.toolbarPartner == bd.Partner) {
                bc = true
            }
            if (bb.toolbarVersion == bd.Version) {
                bf = true
            }
            if (bb.toolbarUniqueID == bd.InstallId) {
                be = true
            }
            if (bc && bf && be) {
                return false
            }
            return true
        };
        this.setToolbarCookie = function(be) {
            if (bb.toolbarPartner == "" && bb.toolbarVersion == "" && bb.toolbarUniqueID == "") {
                return
            }
            var bc;
            var bf = bb.toolbarUniqueID == "" ? true: false;
            var bg = bb.toolbarVersion == "" ? true: false;
            var bd = bb.toolbarPartner == "" ? true: false;
            if (bb.toolbarPartner == be.Partner) {
                bd = true
            }
            if (bb.toolbarVersion == be.Version) {
                bg = true
            }
            if (bb.toolbarUniqueID == be.InstallId) {
                bf = true
            }
            if (bd && bg && bf) {
                cookies.set("tlbar", be.Partner + "~" + be.Version + "~" + be.InstallId, "session")
            }
        };
        this.getToolbarCookie = function() {
            var bd = new Object();
            var bc = cookies.get("tlbar");
            if (bc == null) {
                return ""
            }
            var be = bc.split("~");
            bd.Partner = be[0];
            bd.Version = be[1];
            bd.InstallId = be[2];
            return bd
        };
        this.cookieSet = function(bj) {
            var bf = cookies.get("grtrls");
            if ((typeof bf != undefined) && bf != null && bf != "") {
                var bc = bf.split("~");
                var bh = new Array;
                var be = false;
                for (var bd = 0; bd < bc.length; bd++) {
                    var bi = bc[bd].split(":");
                    if (bi[0] == bj) {
                        var bk = parseInt(bi[1]);
                        if (isNaN(bk)) {
                            bk = 0
                        }
                        bk++;
                        bh[bd] = bi[0] + ":" + bk;
                        be = true
                    } else {
                        bh[bd] = bc[bd]
                    }
                }
                if (!be) {
                    bh[bh.length] = bj + ":1"
                }
                var bg = bh.join("~");
                cookies.set("grtrls", bg, bb.expiryTime)
            } else {
                cookies.set("grtrls", bj + ":1", bb.expiryTime)
            }
        };
        bb.constructor()
    }

    function S() {
        if (aS) {
            a6("initDL called: " + new Date());
            a6("dlItems var      : " + dlItems);
            a6("dlRotCookieVal var : " + decodeURIComponent(dlRotCookieVal));
            a6("dlRotn cookie val : " + decodeURIComponent(cookies.get("dlRotn")))
        }
        try {
            if (stcExpTime == null) {
                return
            }
            if (V == null) {
                V = new ax()
            } else {
                a6("dlmodule is not null and its stckUpTread is: " + V.stckUpTread);
                if (V.stckUpTread != null) {
                    a6("dlmodule.stckUpTread is not null - clearing interval" + V.stckUpTread);
                    clearInterval(V.stckUpTread)
                }
                if (V.interval != null) {
                    a6("dlmodule.interval is not null - clearing interval" + V.interval);
                    clearInterval(V.interval)
                }
                V = new ax()
            }
            AOL.dlmodule = V;
            if (stcExpTime > 0) {
                V.stckUpTread = setInterval(function() {
                    V.updateSticknessExpCookie()
                },
                1000);
                a6("Setting Interval stckUpTread: " + V.stckUpTread)
            }
        } catch(bb) {
            stcExpTime = null
        }
    }
    function a6(bb) {
        if (aS) {
            console.log(new Date() + "   " + bb)
        }
    }


    function n() {
        aV(".video-social [name='aol-share']").aolShare({
            services: ["facebook", "twitter", "email"],
            templates: {
                twitter: {
                    twitterStatus: "url={{url}}&text=#aolvideo{{title}}&via=AOL"
                }
            }
        })
    }
    function aP() {
        aV("[name='aol-addthis']").each(function() {
            var be = this,
            bc = be.href;
            bc = bc.substring(bc.indexOf("&body=") + 6, bc.length);
            var bf = aV(this).attr("omni");
            var bd = aV(this).attr("lnid");
            if (aV(be).hasClass("compact")) {
                var bb = aV("<div></div>").addthis({
                    addthis_share: {
                        title: be.title,
                        url: bc,
                        templates: {
                            twitter: "Check out: {{title}} {{url}} by @AOLdotcom"
                        }
                    },
                    html: '<div class="aol-addthis"><a class="addthis_button_compact ' + bd + '" href="#"><span>Share</span></a></div>'
                });
                aV(bb).find(".addthis_button_compact").click(function() {
                    omn.omcl(bf)
                });
                if (bb.html() != "") {
                    aV(be).replaceWith(bb)
                }
            } else {
                aV(be).replaceWith(aV("<div></div>").addthis({
                    addthis_share: {
                        title: be.title,
                        url: bc,
                        templates: {
                            twitter: "Check out: {{title}} {{url}} by @AOLdotcom"
                        }
                    }
                }))
            }
        })
    }
    aP();
    function w(bc) {
        var bb = +new Date;
        setTimeout(function() {
            if ( + new Date - bb < 3000) {
                window.location = bc
            }
        },
        2500)
    }
    function L() {
        var bb = this;
        this.el = null;
        this.preview = null;
        this.body = null;
        this.over = null;
        this.showDelay = 500;
        this.hideDelay = 250;
        this.threshold = 500;
        this.showTimeout = null;
        this.showing = false;
        this.hideTimeout = null;
        this.hiding = false;
        this.showTime = null;
        this.open = false;
        this.previewSlot = null;
        this.loadSlot = null;
        this.placeholder = null;
        this.load = function() {
            bb.body.html("<div class='loading'></div>");
            bb.body.load("ajax.jsp?m=" + bb.loadSlot + "&t=preview&slot=" + bb.loadSlot,
            function() {
                bb.track(bb.body[0])
            })
        };
        this.track = function(bc) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bc);
                    bN.ping(bb.previewSlot)
                }
            } catch(bd) {}
        };
        this.previewClick = function() {
            bb.trackDuration("preview")
        };
        this.iconClick = function() {
            bb.cancelShow();
            bb.trackDuration("icon")
        };
        this.trackDuration = function(bd) {
            if (bb.showTime != null) {
                var bc = new Date();
                var be = bc.getTime() - bb.showTime;
                bb.showTime = null;
                if (be > bb.threshold) {
                    be = Math.round(be / 500) * 500;
                    omn.omcl(bb.previewSlot + "_time_" + bd + "_" + be)
                }
            }
        };
        this.bind = function() {
            aV("#quick-nav, #scrollcurtain-quicknav").find(".qnpreview").hover(function() {
                bb.previewSlot = utils.findClass(this, /pslot-.*/).replace("pslot-", "");
                bb.preview = aV("#preview-" + bb.previewSlot + "-w");
                bb.body = aV("#preview-" + bb.previewSlot + "-c");
                bb.el = aV(this).attr("id");
                bb.wrap = aV("#preview_pl");
                bb.over = aV("#" + aV(this).attr("id") + "-overw");
                try {
                    aV("#preview-container").append(bb.preview);
                    bb.placeholder = aV("#preview-placeholder")
                } catch(bf) {}
                var bd = parseInt(utils.findClass(document.getElementById("preview-" + bb.previewSlot), /show-.*/).replace("show-", ""));
                var be = parseInt(utils.findClass(document.getElementById("preview-" + bb.previewSlot), /hide-.*/).replace("hide-", ""));
                var bc = parseInt(utils.findClass(document.getElementById("preview-" + bb.previewSlot), /thresh-.*/).replace("thresh-", ""));
                bb.loadSlot = utils.findClass(document.getElementById(bb.preview.attr("id")), /load-.*/).replace("load-", "");
                if (!isNaN(bd)) {
                    bb.showDelay = bd
                }
                if (!isNaN(be)) {
                    bb.hideDelay = be
                }
                if (!isNaN(bc)) {
                    bb.threshold = bc
                }
                bb.cancelHide();
                bb.show()
            },
            function() {
                bb.cancelShow();
                bb.hide()
            });
            aV("#quick-nav").find(".preview-w").hover(function() {
                bb.hiding = false
            },
            function() {
                bb.hiding = false;
                bb.cancelShow();
                bb.hide()
            }).click(function() {
                bb.previewClick()
            });
            aV("#quick-nav").find(".preview-over-w").hover(function() {
                bb.hiding = true;
                bb.cancelHide()
            },
            function() {
                bb.hiding = false;
                bb.cancelShow();
                bb.hide()
            }).click(function() {
                bb.iconClick();
                if (aV("#" + bb.el).attr("href").length > 0) {
                    if (aV("#" + bb.el).attr("target") == "_blank") {
                        window.open(aV("#" + bb.el).attr("href"))
                    } else {
                        document.location.href = aV("#" + bb.el).attr("href")
                    }
                }
            })
        };
        this.show = function() {
            if (!bb.showing && !bb.open) {
                bb.showing = true;
                bb.showTimeout = setTimeout(function() {
                    if (bb.showing) {
                        bb.open = true;
                        bb.showTime = null;
                        bb.over.show();
                        bb.placeholder.slideDown();
                        bb.load();
                        bb.preview.slideDown(function() {
                            var bc = new Date();
                            bb.showTime = bc.getTime()
                        })
                    }
                },
                bb.showDelay)
            }
        };
        this.cancelShow = function() {
            bb.showing = false;
            if (bb.showTimeout != null) {
                clearTimeout(bb.showTimeout)
            }
        };
        this.hide = function() {
            if (!bb.hiding) {
                bb.hiding = true;
                bb.hideTimeout = setTimeout(function() {
                    if (bb.hiding && bb.open) {
                        bb.open = false;
                        bb.trackDuration("close");
                        bb.showTime = null;
                        bb.wrap.slideUp();
                        bb.placeholder.slideUp();
                        bb.preview.slideUp(function() {
                            bb.over.hide()
                        })
                    }
                },
                bb.hideDelay)
            }
        };
        this.cancelHide = function() {
            bb.hiding = false;
            if (bb.hideTimeout != null) {
                clearTimeout(bb.hideTimeout)
            }
        };
        bb.bind()
    }
    new L();
    function Z(bc) {
        var bb = this;
        this.el = null;
        this.elParent = null;
        this.preview = null;
        this.body = null;
        this.over = null;
        this.arrow = null;
        this.showDelay = 500;
        this.hideDelay = 250;
        this.threshold = 500;
        this.showTimeout = null;
        this.showing = false;
        this.hideTimeout = null;
        this.hiding = false;
        this.showTime = null;
        this.open = false;
        this.track = function(bd) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bd);
                    bN.ping("mail-preview")
                }
            } catch(be) {}
        };
        this.load = function(bd) {
            bb.body.html("<div class='loading'></div>");
            var bf = new Date().getTimezoneOffset() * -1;
            var be = "ajax.jsp?m=quicknav&p=mail_preview&preview=1&tzo=" + bf + "&callback=?";
            if (typeof(rqServerName) !== "undefined" && rqServerName !== null && rqServerName !== "" && typeof(secM) !== "undefined" && secM !== null && secM === "true") {
                be = "https://" + rqServerName + "/ajax.jsp?m=quicknav&p=mail_preview&preview=1&tzo=" + bf + "&callback=?"
            }
            aV.getJSON(be,
            function(bg) {
                if (bg.count != "") {
                    if (aV(bg.count).text() != 0) {
                        bd.addClass("qnmailcount");
                        bd.find("span").replaceWith(bg.count)
                    } else {
                        bd.removeClass("qnmailcount");
                        bd.find("span").replaceWith("<span></span>")
                    }
                }
                bb.body.html(bg.html);
                bb.track(bb.body[0]);
                bb.openPlaceholder(bd);
                bb.over.fadeIn();
                bb.showArrow(bd);
                bb.preview.fadeIn(function() {
                    var bh = new Date();
                    bb.showTime = bh.getTime()
                })
            })
        };
        this.showArrow = function(bd) {
            if (bb.arrow.length > 0) {
                var be = bd.offset().left;
                var bf = aV("#col3").offset().left;
                var bg = be - bf;
                bb.arrow.css("left", bg)
            }
        };
        this.show = function(bd) {
            if (!bb.showing && !bb.open) {
                bb.showing = true;
                bb.showTimeout = setTimeout(function() {
                    if (bb.showing) {
                        if (aV(".userOptions").length && aV(".usrMnuLst").is(":visible")) {
                            usermenu.close()
                        }
                        bb.open = true;
                        bb.showTime = null;
                        bb.load(bd)
                    }
                },
                bb.showDelay)
            }
        };
        this.openPlaceholder = function(be) {
            if (!be.hasClass("nopushdown")) {
                var bj = bb.preview.height();
                var bf = aV("#col3").offset();
                var bi = be.offset();
                if (bf != null && bi != null) {
                    var bg = bf.top;
                    var bd = bi.top + be.height();
                    if (aV("#col3").find("#mailpreview").size() > 0) {
                        bd = bi.top
                    }
                    var bh = bj - (bg - bd);
                    if (bh > 0) {
                        bb.wrap.css("height", bh)
                    }
                }
                bb.wrap.slideDown()
            }
        };
        this.cancelShow = function() {
            bb.showing = false;
            if (bb.showTimeout != null) {
                clearTimeout(bb.showTimeout)
            }
        };
        this.hide = function() {
            if (!bb.hiding) {
                bb.hiding = true;
                bb.hideTimeout = setTimeout(function() {
                    if (bb.hiding && bb.open) {
                        bb.open = false;
                        bb.trackDuration("close");
                        bb.showTime = null;
                        bb.wrap.slideUp();
                        bb.over.fadeOut();
                        bb.preview.fadeOut()
                    }
                },
                bb.hideDelay)
            }
        };
        this.cancelHide = function() {
            bb.hiding = false;
            if (bb.hideTimeout != null) {
                clearTimeout(bb.hideTimeout)
            }
        };
        this.previewClick = function() {
            bb.trackDuration("preview")
        };
        this.iconClick = function() {
            bb.cancelShow();
            bb.trackDuration("icon")
        };
        this.trackDuration = function(be) {
            if (bb.showTime != null) {
                var bd = new Date();
                var bf = bd.getTime() - bb.showTime;
                bb.showTime = null;
                if (bf > bb.threshold) {
                    bf = Math.round(bf / 500) * 500;
                    omn.omcl("mailpreview_time_" + be + "_" + bf)
                }
            }
        };
        this.triggerPreviewHandler = function(be) {
            var bd = aV(be.currentTarget).offset();
            var bf = aV(be.currentTarget);
            if (bd === null) {
                return
            }
            if (aV("#aol-header").hasClass("aol-global-header")) {
                var bg = aV("#mail_prev_pl").parent().offset();
                bb.preview.css({
                    top: (bd.top + 60),
                    left: (bg.left + 9)
                });
                bb.over.css({
                    top: (bd.top),
                    left: (bg.left + 56)
                });
                bb.preview.addClass("glb-hdr");
                bb.over.addClass("glb-hdr")
            } else {
                bb.preview.css({
                    top: (bd.top + 60),
                    left: (bd.left - bb.preview_left)
                });
                bb.over.css({
                    top: (bd.top),
                    left: (bd.left - 5)
                })
            }
            bb.cancelHide();
            bb.show(bf)
        };
        this.bind = function(bg) {
            if (bg === null || bg.length < 1 || typeof bg[0] === "undefined") {
                return
            }
            $elParent = aV(bg).closest("div.quicknav");
            if ($elParent.length && $elParent.hasClass("nopushdown")) {
                bg.addClass("nopushdown")
            }
            var bi = parseInt(utils.findClass(bg[0], /auth-.*/).replace("auth-", ""));
            if (bi == "1") {
                var be = parseInt(utils.findClass(bg[0], /show-.*/).replace("show-", ""));
                var bh = parseInt(utils.findClass(bg[0], /hide-.*/).replace("hide-", ""));
                var bd = parseInt(utils.findClass(bg[0], /thresh-.*/).replace("thresh-", ""));
                if (!isNaN(be)) {
                    bb.showDelay = be
                }
                if (!isNaN(bh)) {
                    bb.hideDelay = bh
                }
                if (!isNaN(bd)) {
                    bb.threshold = bd
                }
                var bf = $elParent.attr("quick-nav-icons");
                bb.preview_left = 152;
                if (aV("#col3").find("#mailpreview").size() > 0) {
                    bb.preview_left = 0
                }
                if (typeof bf == "undefined") {} else {
                    if (bf == "0") {
                        bb.preview_left = 243
                    } else {
                        if (bf == "1") {
                            bb.preview_left = 205
                        }
                    }
                }
                bg.hover(function(bj) {
                    bb.triggerPreviewHandler(bj)
                },
                function() {
                    bb.cancelShow();
                    bb.hide()
                }).click(function() {
                    bb.iconClick()
                })
            }
        };
        this.initPreview = function() {
            if (! (aV.browser.msie && aV.browser.version <= 7)) {
                bb.preview.remove().appendTo("body");
                bb.over.remove().appendTo("body")
            }
            bb.preview.hover(function() {
                bb.cancelHide()
            },
            function() {
                bb.hide()
            }).click(function() {
                bb.previewClick()
            });
            bb.body.delegate("li.new", "click", aV.proxy(function(be) {
                if (aV("#aol-header").hasClass("aol-global-header")) {
                    var bf = aV(be.target);
                    if (bf.is("a")) {
                        return
                    }
                    if (bf.is("li")) {
                        bf.find(":first-child").trigger("click")
                    } else {
                        bf.parent("li").find(":first-child").trigger("click")
                    }
                }
            }));
            if (aV.browser.msie && aV.browser.version == 6 && aV("#aol-header").hasClass("aol-global-header")) {
                try {
                    bb.body.delegate("li.new", "mouseenter",
                    function() {
                        aV(this).addClass("hover")
                    });
                    bb.body.delegate("li.new", "mouseleave",
                    function() {
                        aV(this).removeClass("hover")
                    })
                } catch(bd) {}
            }
        };
        this.init = function() {
            bb.preview = aV("#mail_prev_w");
            bb.body = aV("#mail_prev");
            bb.wrap = aV("#mail_prev_pl");
            bb.over = aV("#quick-nav-global #mailoverw");
            bb.arrow = aV("#mail-arrow");
            if (bc != null && bc.length > 0) {
                for (var bd in bc) {
                    bb.bind(bc[bd])
                }
            }
            bb.initPreview()
        };
        bb.init()
    }
    var k = new Z([aV("#mailpreview"), aV("#scrollcurtain-quicknav #mailpreview")]);
    function aK() {
        var bb = this;
        this.el = null;
        this.appstore = null;
        this.launch = function(bd) {
            if (ae_dimension == "") {
                ae_dimension = "width=510,height=575"
            }
            var bc = ae_dimension + ",resizable=yes,directories=no,titlebar=no,scrollbars=no,status=no,menubar=no,toolbar=no,";
            if (aV.browser.msie && aV.browser.version <= 7) {
                window.open(bd, "_blank", "width=300,height=600,resizable=yes,directories=no,titlebar=no,scrollbars=no,status=no,menubar=no,toolbar=no,location=1")
            } else {
                if (navigator.userAgent.match(/Chrome/)) {
                    window.open(bd, "_blank", bc + "location=no")
                } else {
                    if (navigator.userAgent.match(/Safari/)) {
                        window.open(bd, "_blank", bc + "location=no")
                    } else {
                        window.open(bd, "_blank", bc + "location=1")
                    }
                }
            }
        };
        this.bind = function() {
            bb.el = aV("#aimexpress,#aim_launch,.aimexpresslaunch");
            bb.el.click(function(bc) {
                var bd = aV(this).attr("name").replace("om_", "");
                if (utils.isiPad()) {
                    bb.appstore = aV(this).attr("href");
                    aV(this).attr("href", "aim:");
                    if (bd != "") {
                        omn.omcl(bd)
                    }
                    w(bb.appstore)
                } else {
                    if (ae_url != "") {
                        if (bd != "") {
                            omn.omcl(bd)
                        }
                        bb.launch(ae_url);
                        bc.preventDefault()
                    }
                }
            })
        };
        bb.bind()
    }


    function aa() {
        var bb = this;
        this.bind = function() {
            aV("#mapquest").click(function(bc) {
                var bd = aV(this).attr("name").replace("om_", "");
                if (bd != "") {
                    omn.omcl(bd)
                }
            })
        };
        bb.bind()
    }
    new aa();
    aV(document).ready(function() {
        try {
            aV("#aol-header-query").focus(function() {
                aV("#search-shadow").show()
            }).blur(function() {
                aV("#search-shadow").hide()
            });
            aV("#aol-header-query").attr("value", "");
            aV("#aol-header-query").keypress(function(bi) {
                bi = (bi) ? bi: event;
                var bh = (bi.charCode) ? bi.charCode: ((bi.which) ? bi.which: bi.keyCode);
                if (bh == 13) {
                    if (aV("#aol-header-query").attr("value") == "") {
                        aV("#aol-header-query").attr("value", aV("#header-ghostText").attr("value"))
                    }
                    omn.omo("header-searchenter");
                    aV("#aol-header-search-button").attr("onclick", "")
                }
            });
            var bd = aV("#header-initFocus").val();
            if (aV(".contest").length) {
                bd = false
            }
            if (c || window.location.href.indexOf("/#") > -1) {
                bd = false
            }
            var bc = aV("#aol-header-search-results").outerWidth() - aV("#aol-header-search-results").width();
            if (bc < 0) {
                bc = 0
            }
            if (aV("#pgbg.aol-global-header-true.tablet").length === 0 && !utils.isResponsive()) {
                aV("#aol-header-search-results").width(aV("#aol-header-query").outerWidth() - bc)
            }
            aV("#aol-header-search").globalSearchBox({
                sclass: "header",
                ghostText: aV("#header-ghostText").val(),
                ghostTextSearch: aV("#header-ghostTextSearch").val(),
                initFocus: bd,
                preserveGhostText: aV("#header-preserveGhostText").val(),
                apiIt: aV("#header-apiIt").val(),
                apiDictionary: aV("#header-apiDictionary").val(),
                apiUrl: aV("#header-apiUrl").val(),
                apiCount: aV("#header-apiCount").val(),
                apiQueryParam: aV("#header-apiQueryParam").val(),
                enableBestMatch: aV("#header-enableBestMatch").val(),
                bestMatchQuery: aV("#header-bestMatchQuery").val(),
                bestMatchAction: aV("#header-bestMatchAction").val(),
                bestMatchPrefix: aV("#header-bestMatchPrefix").val()
            })
        } catch(bg) {}
        try {
            aV("#aol-footer-query").attr("value", "");
            aV("#aol-footer-query").keypress(function(bi) {
                bi = (bi) ? bi: event;
                var bh = (bi.charCode) ? bi.charCode: ((bi.which) ? bi.which: bi.keyCode);
                if (bh == 13) {
                    if (aV("#aol-footer-query").attr("value") == "") {
                        aV("#aol-footer-query").attr("value", aV("#footer-ghostText").attr("value"))
                    }
                    omn.omo("footer-searchenter");
                    aV("#aol-footer-search-button").attr("onclick", "")
                }
            });
            var bf = aV("#footer-initFocus").val();
            if (window.location.href.indexOf("#lifestream") > -1) {
                bf = false
            }
            aV("#aol-footer-search").globalSearchBox({
                sclass: "footer",
                ghostText: aV("#footer-ghostText").val(),
                ghostTextSearch: aV("#footer-ghostTextSearch").val(),
                initFocus: false,
                preserveGhostText: aV("#footer-preserveGhostText").val(),
                apiIt: aV("#footer-apiIt").val(),
                apiDictionary: aV("#footer-apiDictionary").val(),
                apiUrl: aV("#footer-apiUrl").val(),
                apiCount: aV("#footer-apiCount").val(),
                apiQueryParam: aV("#footer-apiQueryParam").val()
            })
        } catch(bg) {}
        try {
            aV("#aol-standalonesearch-query").focus(function() {
                aV("#search-shadow").show()
            }).blur(function() {
                aV("#search-shadow").hide()
            });
            aV("#aol-standalonesearch-query").keypress(function(bi) {
                bi = (bi) ? bi: event;
                var bh = (bi.charCode) ? bi.charCode: ((bi.which) ? bi.which: bi.keyCode);
                if (bh == 13) {
                    if (aV("#aol-standalonesearch-query").attr("value") == "") {
                        aV("#aol-standalonesearch-query").attr("value", aV("#standalonesearch-ghostText").attr("value"))
                    }
                    omn.omo("standalonesearch-searchenter");
                    aV("#aol-standalonesearch-search-button").attr("onclick", "")
                }
            });
            var bc = aV("#aol-standalonesearch-search-results").outerWidth() - aV("#aol-standalonesearch-search-results").width();
            if (bc < 0) {
                bc = 0
            }
            aV("#aol-standalonesearch-search").globalSearchBox({
                sclass: "standalonesearch",
                ghostText: aV("#standalonesearch-ghostText").val(),
                ghostTextSearch: aV("#standalonesearch-ghostTextSearch").val(),
                initFocus: false,
                preserveGhostText: aV("#standalonesearch-preserveGhostText").val(),
                apiIt: aV("#standalonesearch-apiIt").val(),
                apiDictionary: aV("#standalonesearch-apiDictionary").val(),
                apiUrl: aV("#standalonesearch-apiUrl").val(),
                apiCount: aV("#standalonesearch-apiCount").val(),
                apiQueryParam: aV("#standalonesearch-apiQueryParam").val(),
                enableBestMatch: aV("#standalonesearch-enableBestMatch").val(),
                bestMatchQuery: aV("#standalonesearch-bestMatchQuery").val(),
                bestMatchAction: aV("#standalonesearch-bestMatchAction").val(),
                bestMatchPrefix: aV("#standalonesearch-bestMatchPrefix").val()
            });
            var bb = aV("#aol-standalonesearch-query").width() + 13;
            aV("#aol-standalonesearch-search-results").css("width", bb + "px")
        } catch(bg) {}
        try {
            var be = aV("#aol-page-search-query");
            be.blur(function() {
                if (this.value == "") {
                    this.value = this.defaultValue
                }
            });
            be.focus(function() {
                this.value = ""
            });
            aV("#aol-page-search-query").keypress(function(bi) {
                bi = (bi) ? bi: event;
                var bh = (bi.charCode) ? bi.charCode: ((bi.which) ? bi.which: bi.keyCode);
                if (bh == 13) {
                    omn.omo("standalonesearch_searchenter");
                    aV("#aol-page-search-button").attr("onclick", "")
                }
            });
            aV("#aol-page-search-button").click(function() {
                if (be.val() == be[0].defaultValue) {
                    aV("#aol-page-search-query").val("")
                }
            })
        } catch(bg) {}
    });
    aV(".search-tab").bind("click",
    function() {
        if (aV(this).attr("id") == "search-more") {
            omn.omo("searchtabmore")
        } else {
            omn.omo(aV(this).attr("id"))
        }
        var bc = aV("#aol-header-query").attr("value");
        var bb = "";
        if (bc != aV("#header-ghostText").attr("value")) {
            if (aV(this).attr("params") != undefined) {
                bb = "?" + aV(this).attr("params") + escape(bc)
            }
        }
        aV(this).attr("href", aV(this).attr("href") + bb)
    });
    aV("#aol-header-search-button,#aol-footer-search-button,#aolsubmit,#mail-signin-linkout .linkout,#nav .orng-bttn").bind("mouseover.GH",
    function() {
        aV(this).addClass("hover")
    }).bind("mouseout.GH",
    function() {
        aV(this).removeClass("hover")
    });
    function A() {
        var bb = this;
        this.logo = null;
        this.origHref = null;
        this.origTitle = null;
        this.constructor = function() {
            if (typeof(logoH) === "undefined") {
                return
            }
            bb.origHref = logoH;
            bb.origTitle = logoT
        };
        this.getLogo = function() {
            if (bb.logo == null) {
                bb.logo = aV("#aol-header-logo")
            }
            return bb.logo
        };
        this.setAttr = function(bc, be, bd) {
            if (be == null || be == "") {
                bb.getLogo().attr(bc, bd)
            } else {
                bb.getLogo().attr(bc, be)
            }
        };
        this.setHref = function(bc) {
            bb.setAttr("href", bc, bb.origHref)
        };
        this.setTitle = function(bc) {
            bb.setAttr("title", bc, bb.origTitle)
        };
        bb.constructor()
    }
    function ae() {
        var bc = this;
        this.timer = null;
        this.threshold = 500;
        this.omvar = "themechooser";
        this.stylerInterval = null;
        this.initialized = false;
        this.loaded = false;
        this.overlay = null;
        this.open = false;
        this.jcarousel = null;
        this.carousel = null;
        this.showing = false;
        var bb = false;
        this.bind = function() {
            aV("a.themesopen").click(function(bd) {
                aV("#themes").removeClass("doubleRow");
                bc.getThemes();
                bd.preventDefault()
            });
            aV("a.themesopenDouble").click(function(bd) {
                aV("#themes").addClass("doubleRow");
                bb = true;
                bc.getThemes();
                bd.preventDefault()
            });
            aV("#pgbg").click(function() {
                bc.hideThemes()
            });
            aV("body").on("hmpg.snap",
            function(bd) {
                if (bd.snapPoint <= 480) {
                    bc.hideThemes()
                }
            });
            bc.overlay = aV("#themes")
        };
        this.load = function() {
            if (!bc.loaded) {
                bc.loaded = true;
                var be = aV("body").attr("class");
                var bd = be.split(/\s/)[0];
                bc.overlay.load("ajax.jsp?m=skinscarousel&p=skinscarousel&curskin=" + bd,
                function(bg, bf, bh) {
                    if (bc.overlay.is(":empty") && bf == "success") {
                        bc.overlay.html(bg)
                    }
                    var bi = aV(this);
                    if (bb) {
                        bc.startCarouselDouble();
                        bb = true
                    } else {
                        bc.startCarousel()
                    }
                    bi.find("#themesclose").click(function(bj) {
                        bc.hideThemes();
                        bj.preventDefault()
                    })
                })
            }
        };
        this.getThemes = function() {
            if (bc.open) {
                bc.hideThemes()
            } else {
                bc.showThemes()
            }
        };
        this.showThemes = function() {
            bc.showing = true;
            if (bc.jcarousel != null) {
                bc.jcarousel.unlock()
            }
            bc.open = true;
            bc.overlay.slideDown(function() {
                bc.showing = false;
                fTips.pos();
                bc.load()
            });
            if (bc.jcarousel != null) {
                bc.jcarousel.reload()
            }
            omn.omcl(bc.omvar + "open");
            if (typeof(bN) != "undefined") {
                bN.extractIds(bc.overlay.children("div")[0]);
                bN.ping("themechooser")
            }
        };
        this.hideThemes = function() {
            if (bc.open && !bc.showing) {
                if (bc.jcarousel != null) {
                    bc.jcarousel.lock()
                }
                aV("#themes").slideUp(function() {
                    fTips.pos();
                    aV("body").trigger("themesClosed")
                });
                omn.omcl(bc.omvar + "close");
                bc.open = false
            }
        };
        this.startCarousel = function() {
            if (bc.initialized) {
                return
            }
            bc.initialized = true;
            bc.carousel = aV("#themecarousel");
            bc.carousel.jcarousel({
                buttonPrevHTML: null,
                buttonNextHTML: null,
                visible: 9,
                scroll: 9,
                easing: "swing",
                animation: 800,
                wrap: "circular",
                initCallback: function(bd) {
                    aV("#themecarouselnext").bind("click",
                    function(be) {
                        bd.next();
                        be.preventDefault()
                    });
                    aV("#themecarouselprev").bind("click",
                    function(be) {
                        bd.prev();
                        be.preventDefault()
                    })
                }
            }).find("a.themeicon").each(function() {
                var bd = aV(this);
                bd.click(function(bf) {
                    bc.carousel.find(".cur").removeClass("cur");
                    var bg = function(bl, bk, bm, bj, bh, bi) {
                        bc.loadSkin(bk, bj);
                        if (bi && bi != "") {
                            if (typeof(p_c_n) != "undefined") {
                                bi = bi + "_" + p_c_n
                            }
                            var bn = "icid=" + encodeURIComponent(bi);
                            if (bh.indexOf(bn) === -1) {
                                bh += ((bh.indexOf("?") === -1) ? "?": "&") + bn
                            }
                        }
                        pageLogo.setHref(bh);
                        pageLogo.setTitle(bm);
                        aV.get("ajax.jsp?keyType=skin5&value=" + bl + "&m=header&p=settheme",
                        function() {})
                    };
                    if (bd.hasClass("thm-random")) {
                        aV.getJSON("ajax.jsp?m=skinscarousel&p=random",
                        function(bh) {
                            bg("random", bh.name, bh.title, bh.href, bh.url, bh.icid)
                        });
                        omn.omcl("chgskinrandom")
                    } else {
                        var be = bd.attr("rel").split(",");
                        bg(be[0], be[0], be[1], be[2], be[3], be[4]);
                        omn.omcl("chgskin" + be[0])
                    }
                    bd.parent().addClass("cur");
                    bf.preventDefault()
                })
            });
            bc.jcarousel = bc.carousel.data("jcarousel");
            bc.carousel.find("li").hover(function() {
                aV(this).addClass("sel")
            },
            function() {
                aV(this).removeClass("sel")
            })
        };
        this.startCarouselDouble = function() {
            if (bc.initialized) {
                return
            }
            bc.initialized = true;
            var bm = 0;
            if (aV(".visNum" != "")) {
                bm = parseInt(aV(".visNum").html())
            }
            var bg = "",
            bq = "",
            bp = "";
            var bt = aV("#artistInfo");
            if (bt.length) {
                var bs = bt.attr("class").split("--");
                if (bs.length > 2) {
                    bg = bs[0];
                    bq = bs[1];
                    bp = bs[2]
                }
            }
            if (aV("#featured").size()) {
                bm = (bm - 6);
                bg = bq
            }
            bc.carousel = aV("#themecarousel");
            var bf = aV("#themecarousel ul a").eq(2);
            var bn = aV("#themecarousel a.cur");
            if (bf.length && bn.length && !bn.hasClass("thm-random")) {
                bf.swapWith(bn)
            }
            var bk = aV("#themecarousel ul li").length;
            var bh = Math.floor(bk / bm);
            var bi = bk % bm;
            if (bi > 0) {
                bh += 1;
                var bo = bm - bi;
                var bj = "";
                for (var be = 1; be <= bo; be++) {
                    bj += "<li><a class='emptyicon'></a><a class='emptyicon'></a></li>"
                }
                aV("#themecarousel ul").append(bj)
            }
            var bd = bc.carousel.find("#curPage");
            var br = bc.carousel.find("#totalPages");
            var bl = parseInt(br.html());
            bc.carousel.jcarousel({
                buttonPrevHTML: null,
                buttonNextHTML: null,
                visible: bm,
                scroll: bm,
                easing: "swing",
                animation: 800,
                wrap: "circular",
                initCallback: function(bu) {
                    aV("#themecarouselnext").bind("click",
                    function(bw) {
                        bu.next();
                        var bv = parseInt(bd.html());
                        if (bv >= bl) {
                            bv = 1
                        } else {
                            bv = bv + 1
                        }
                        bd.html(bv);
                        bw.preventDefault()
                    });
                    aV("#themecarouselprev").bind("click",
                    function(bw) {
                        bu.prev();
                        var bv = parseInt(bd.html());
                        if (bv == 1) {
                            bv = bl
                        } else {
                            bv = bv - 1
                        }
                        bd.html(bv);
                        bw.preventDefault()
                    })
                }
            }).find("a.themeicon").each(function() {
                var bu = aV(this);
                bu.click(function(bB) {
                    bc.carousel.find(".cur").removeClass("cur");
                    var bC = function(bH, bG, bI, bF, bD, bE) {
                        bc.loadSkin(bG, bF);
                        if (bE && bE != "") {
                            if (typeof(p_c_n) != "undefined") {
                                bE = bE + "_" + p_c_n
                            }
                            var bJ = "icid=" + encodeURIComponent(bE);
                            if (bD.indexOf(bJ) === -1) {
                                bD += ((bD.indexOf("?") === -1) ? "?": "&") + bJ
                            }
                        }
                        pageLogo.setHref(bD);
                        pageLogo.setTitle(bI);
                        aV.get("ajax.jsp?keyType=skin5&value=" + bH + "&m=header&p=settheme",
                        function() {})
                    };
                    var bA = aV("#largeThumb");
                    if (bu.hasClass("thm-random")) {
                        bA.removeClass("preview");
                        bA.attr("style", "");
                        bA.css("background-image", "");
                        aV.getJSON("ajax.jsp?m=skinscarousel&p=random",
                        function(bD) {
                            bC("random", bD.name, bD.title, bD.href, bD.url, bD.icid)
                        });
                        omn.omcl("chgskinrandom")
                    } else {
                        if (bu.children("img").length < 1) {
                            if (bu.attr("rel").length) {
                                var bz = bu.attr("rel").split(",")[0];
                                bA.css("background-image", "url(" + assetsUrl + "/css/canvaschooser/" + bz + ".png)");
                                bA.css("background-position", "0px 0px");
                                bA.addClass("preview")
                            }
                        } else {
                            bA.css("background-image", "url(" + bu.children("img").attr("src") + ")");
                            bA.css("background-position", "0px 0px");
                            bA.addClass("preview")
                        }
                        var bw = bu.attr("rel").split(",");
                        bC(bw[0], bw[0], bw[1], bw[2], bw[3], bw[4]);
                        var by = "",
                        bx = "",
                        bv = "";
                        if (bw[5]) {
                            bv = "<b>" + bw[5] + "</b> "
                        }
                        if (bw[6]) {
                            bx = "'" + bw[6] + "'"
                        }
                        if (bw[7]) {
                            by = aV("#artistInfo a.chooserLink").clone(true);
                            if (!by.length) {
                                by = aV("<a class='chooserLink lnid-sec4_lnk2' name='om_themechoosermoreaboutartist' target='_blank'>" + bg + "</a>")
                            }
                            by.attr("href", bw[7])
                        }
                        aV("#artistInfo").html(bv + bx).append(by);
                        omn.omcl("chgskin" + bw[0])
                    }
                    bu.addClass("cur");
                    bB.preventDefault()
                })
            });
            bc.jcarousel = bc.carousel.data("jcarousel");
            bc.carousel.find("li > a").hover(function() {
                aV(this).addClass("sel")
            },
            function() {
                aV(this).removeClass("sel")
            })
        };
        bc.bind()
    }
    function au(bc) {
        var bb = this;
        this.div = bc;
        this.ul = null;
        this.a = null;
        this.slot = null;
        this.moreNum = 0;
        this.initialHeight = null;
        this.newStory = "";
        this.mhref = "";
        this.mtarget = "";
        this.constructor = function() {
            contentautorefresh.register(ab, null, bb.div);
            bb.initialHeight = aV("#om_news_more-news_link_").height();
            bb.slot = bc.attr("id");
            if (bb.slot != "") {
                bb.bind()
            }
        };
        this.track = function(bd) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bd);
                    bN.ping(bb.slot)
                }
            } catch(be) {}
        };
        this.more = function() {
            var bd = bb.ul.find("li").size();
            aV.get("ajax.jsp?m=news&p=news&more=true&slot=" + bb.slot + "&mn=" + (bb.moreNum++),
            function(bh) {
                if (bh != "") {
                    var bg;
                    var bj;
                    var bi = aV(bh);
                    var bf = bi.attr("class");
                    var be;
                    bi.find("div").each(function() {
                        story = aV(this);
                        bb.ul.before(story)
                    });
                    bi.find("li").each(function() {
                        be = aV(this);
                        if (bf != null && bf != "") {
                            be.addClass(bf)
                        }
                        bb.ul.append(be)
                    });
                    bb.track(be.children("a")[0]);
                    bg = aV(window).height() + aV(window).scrollTop();
                    bj = bb.ul.offset().top + bb.ul.height();
                    if (bg < bj) {
                        bb.div.children().get( - 1).scrollIntoView(false)
                    }
                    bb.newStory = aV(bb.ul.children().get(bd).children[0]);
                    r(bb.newStory)
                } else {
                    if (bb.mtarget == "_blank") {
                        window.open(bb.mhref)
                    } else {
                        U.location = bb.mhref
                    }
                }
            },
            "html")
        };
        this.bind = function() {
            bb.ul = bc.find("ul.headlines");
            bb.a = bc.find("a.newsmoreinline");
            bb.a.unbind("click.newsmodule").bind("click.newsmodule",
            function(bd) {
                if (bb.mhref == "") {
                    bb.mhref = bb.a.attr("href")
                }
                bb.mtarget = bb.a.attr("target");
                var be = "morenews";
                if (bb.slot != null && bb.slot != "") {
                    be = bb.slot
                }
                omn.omcl(be + "_more_" + (bb.moreNum + 1));
                bb.more();
                bd.preventDefault()
            })
        };
        bb.constructor()
    }
    function ba() {
        var bb = this;
        this.contructor = function() {
            bb.bind()
        };
        this.bind = function() {
            aV("div.news-headlines").each(function() {
                new au(aV(this))
            })
        };
        bb.contructor()
    }
    function aD(bc) {
        var bb = this;
        this.parentDiv = aV(bc);
        this.constructor = function() {
            bb.bind();
            aV.each(bb.parentDiv.find(".tweet-date-time"),
            function(be, bg) {
                var bd = aV(bg);
                var bf = bb.formatTime(bd.text());
                bd.html(bf);
                bd.removeClass("dn")
            })
        };
        this.bind = function() {
            bb.parentDiv.find(".twitter-reply").each(function(bd, be) {
                aV(be).click(bb.popAction)
            });
            bb.parentDiv.find(".twitter-retweet").each(function(bd, be) {
                aV(be).click(bb.popAction)
            });
            bb.parentDiv.find(".twitter-favorite").each(function(bd, be) {
                aV(be).click(bb.popAction)
            })
        };
        this.formatTime = function(be) {
            var bl = new Date(be.replace("+0000", "GMT"));
            var bf = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
            var bi = bl.getMinutes();
            var bh = bl.getHours();
            var bk = bl.getMonth();
            var bo = bl.getDate();
            var bn = bl.getFullYear();
            var bm = bi < 10 ? "0" + bi: bi;
            var bd = bh >= 12 ? "PM": "AM";
            var bp = bh > 12 ? bh - 12 : bh;
            var bj = bf[bk];
            var bg = bp + ":" + bm + " " + bd + " - " + bo + " " + bj + " " + (" " + bn).substring(3);
            return bg
        };
        this.popAction = function(bh) {
            bh.preventDefault();
            var bd = (screen.width / 2) - (550 / 2);
            var bi = (screen.height / 2) - (420 / 2);
            var bg = bh.srcElement || bh.target;
            var bf = aV(bg).attr("href");
            var be = window.open(bf, "TwitterAction", "width=550,height=420,left=" + bd + ",top=" + bi)
        };
        bb.constructor()
    }
    aV(".twitter").each(function(bb, bc) {
        new aD(bc)
    });
    function ao(bc) {
        var bb = this;
        this.div = bc.find("div.choose-news-headlines");
        this.ul = null;
        this.a = null;
        this.select = null;
        this.slot = null;
        this.moreNum = 1;
        this.feed = null;
        this.parent = null;
        this.mhref = null;
        this.isRes = false;
        this.hiddenCount = 0;
        this.headlineTotal = 0;
        this.showCntBySnapJson = null;
        this.moreCntBySnapJson = null;
        this.moreClickCntBySnapJson = null;
        this.isRes = false;
        this.constructor = function() {
            if (typeof(AOL.responsiveEnabled) != "undefined") {
                bb.isRes = AOL.responsiveEnabled
            }
            contentautorefresh.register(ab, null, bb.div);
            bb.bind()
        };
        this.track = function(bd) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bd);
                    bN.ping(bb.slot)
                }
            } catch(be) {}
        };
        this.newfeed = function() {
            this.feed = bb.select.val();
            var be = bb.div.find("ul");
            if (be.length === 1) {
                var bd = be.height();
                be.empty().append("<span class='loadingSpinner'></span>").height(bd)
            }
            aV.get("ajax.jsp?m=news&p=choosenews&rndr=ncfd&slot=" + bb.slot + "&_frcToFd=" + (bb.feed),
            function(bf) {
                if (bf != "") {
                    bb.div.replaceWith(bf);
                    bb.bind();
                    aV(bb.parent).trigger("forceRebind");
                    if (bb.isRes && typeof hmpg != "undefined") {
                        hmpg.collapseModules.rebindCollapseFeaturesForAJAX(bb.div, 2)
                    }
                    bb.track(bb.select.find("option:selected")[0]);
                    bb.morenum = 0
                }
            },
            "html")
        };
        this.more = function() {
            var bd = bb.ul.find("li").size();
            var be = "ajax.jsp?m=news&p=choosenews&rndr=mor&slot=" + bb.slot + "&mn=" + (bb.moreNum++) + "&_frcToFd=" + (bb.feed);
            aV.get(be,
            function(bi) {
                if (bi != "") {
                    var bh;
                    var bk;
                    var bj = aV(bi);
                    var bg = bj.attr("class");
                    var bf;
                    bj.find("div").each(function() {
                        story = aV(this);
                        bb.ul.before(story)
                    });
                    bj.find("li").each(function() {
                        bf = aV(this);
                        bb.ul.append(bf)
                    });
                    bh = aV(window).height() + aV(window).scrollTop();
                    bk = bb.ul.offset().top + bb.ul.height();
                    if (bh < bk) {
                        bb.div.children().get( - 1).scrollIntoView(false)
                    }
                    bb.newStory = aV(bb.ul.children().get(bd).children[0]);
                    r(bb.newStory)
                } else {
                    bb.linkOff()
                }
            },
            "html")
        };
        this.linkOff = function() {
            if (bb.mtarget == "_blank") {
                window.open(bb.mhref)
            } else {
                U.location = bb.mhref
            }
        };
        this.bind = function() {
            if (bb.parent == null) {
                bb.parent = bc
            }
            bb.div = bb.parent.find("div.choose-news-headlines");
            bb.ul = bb.div.find("ul.headlines");
            bb.select = aV(bb.div).find("select");
            bb.slot = bb.div.attr("id");
            bb.a = aV(bb.div).find(".choosenewsmoreinline");
            bb.feed = bb.select.val();
            bb.mhref = bb.a.attr("href");
            bb.mtarget = bb.a.attr("target");
            bb.select.unbind("change.choosefeed").bind("change.choosefeed",
            function(bd) {
                bb.newfeed()
            });
            if (bb.isRes == false) {
                bb.a.unbind("click.choosenewsmodule").bind("click.choosenewsmodule",
                function(bd) {
                    bb.more();
                    bd.preventDefault()
                })
            }
        };
        bb.constructor()
    }
    function o() {
        var bb = this;
        this.contructor = function() {
            bb.bind()
        };
        this.bind = function() {
            aV("div.choose-news-headlines").each(function(bc, bd) {
                new ao(aV(bd).parent())
            })
        };
        bb.contructor()
    }
    function a1() {
        var bb = this;
        this.module = null;
        this.slot = null;
        this.inlineLoaded = false;
        this.inlineDiv = null;
        this.displayType = "inline";
        this.dlPaused = false;
        this.playlist = "";
        this.opacity = "";
        this.contructor = function() {
            aV("div[id^='dailyvjmod_']").each(function() {
                contentautorefresh.register(aW, null, aV(this))
            });
            bb.bind()
        };
        this.edit = function() {
            bb.module.load("ajax.jsp?m=dailyvj&p=edit",
            function() {
                bb.bindEdit()
            });
            omn.omcl("vjhostedit")
        };
        this.close = function() {
            bb.module.parent().load("ajax.jsp?m=dailyvj&p=vj",
            function() {
                bb.bind()
            });
            omn.omcl("vjhostcancel")
        };
        this.loadvj = function(be) {
            var bc = utils.findClass(be, /slot-.*/);
            var bf = utils.findClass(be, /host-.*/);
            var bg = bc.replace("slot-", "");
            var bd = bf.replace("host-", "");
            bb.module.parent().load("ajax.jsp?m=dailyvj&p=vj&slot=" + bg + "&host=" + bd,
            function() {
                bb.bind();
                bN.extractIds(document.getElementById("dailyvj"));
                bN.ping("dailyvj")
            });
            omn.omcl("vjhost_" + bd)
        };
        this.inlineScroll = function() {
            bb.div = aV("#inlineClose");
            if (aV("#disableScroll").html() != "true") {
                window.scrollTo(0, (bb.div.offset().top - 15))
            }
        };
        this.bind = function() {
            bb.module = aV("#dailyvj");
            if (bb.module.length === 0) {
                return
            }
            var bc = utils.findClass(bb.module[0], /slot-.*/);
            bb.slot = bc.replace("slot-", "");
            bc = utils.findClass(aV("#dailyvjmod")[0], /display-.*/);
            bb.displayType = bc.replace("display-", "");
            bc = utils.findClass(bb.module[0], /playlist-.*/);
            bb.playlist = bc.replace("playlist-", "");
            bc = utils.findClass(aV("#dailyvjmod")[0], /opacity-.*/);
            bb.opacity = bc.replace("opacity-", "");
            bb.module.find(".edit").click(function(bd) {
                bb.edit();
                bd.preventDefault()
            })
        };
        this.bindEdit = function() {
            bb.module.find("ul.vjlist").find("a").click(function(bc) {
                bb.loadvj(this);
                bc.preventDefault()
            });
            bb.module.find(".vj-close").click(function(bc) {
                bb.close();
                bc.preventDefault()
            })
        };
        bb.contructor()
    }
    function aB() {
        var bb = this;
        this.slot = null;
        this.tabnav = null;
        this.div = null;
        this.num = null;
        this.cache = new Object();
        this.tab1title = null;
        this.tab2title = null;
        this.tab3title = null;
        this.tab4title = null;
        this.constructor = function() {
            var bd = aV("#riverTabsTitle");
            if (bd.length < 1) {
                return
            }
            var bc = bd.html().split(",");
            bb.tabnav = aV("#river-tabs");
            bb.num = rtabcurr;
            bb.tab1title = bc[0];
            bb.tab2title = bc[1];
            bb.tab3title = bc[2];
            bb.tab4title = bc[3];
            bb.slot = aV("#rTabSlt").html();
            bb.bind()
        };
        this.getDiv = function() {
            if (bb.div == null) {
                bb.div = aV("#rtm")
            }
            return bb.div
        };
        this.switchTo = function() {
            cookies.set("rtact", "rt" + bb.num, "session");
            bb.getDiv().load("ajax.jsp?m=river&p=riverslide&rTabNo=" + bb.num + "&slot=" + bb.slot,
            function(bc) {
                bb.cache[bb.num] = bc
            })
        };
        this.bind = function() {
            aV("#rTab1").click(function(bc) {
                bb.num = 1;
                bb.switchTo();
                bc.preventDefault()
            });
            aV("#rTab2").click(function(bc) {
                bb.num = 2;
                bb.switchTo();
                bc.preventDefault()
            });
            aV("#rTab3").click(function(bc) {
                bb.num = 3;
                bb.switchTo();
                bc.preventDefault()
            });
            aV("#rTab4").click(function(bc) {
                bb.num = 4;
                bb.switchTo();
                bc.preventDefault()
            })
        };
        bb.constructor()
    }
    var aw = null;
    function u() {
        var bb = this;
        this.div = aV("#topnewssection");
        this.num = this.inc = 7;
        this.max = 35;
        this.slot = "topnews";
        this.defaultView = "standard";
        this.getMore = function(bc) {
            aV("#tn_more_loading").show();
            aV.get("ajax.jsp?m=topnews&p=topnewsitems&start=" + bb.num + "&slot=" + bb.slot,
            function(bd) {
                aV("#topnewssection").append(bd);
                aV("#tn_more_loading").hide();
                bb.num += bb.inc;
                if (bb.num >= bb.max) {
                    aV("#tn_morestories").hide()
                }
            })
        };
        this.refresh = function() {
            aV("#rtm").load("ajax.jsp?m=topnews&p=topnews&start=0&slot=" + bb.slot,
            function(bc) {})
        };
        this.toggleHeadlines = function() {
            cookies.set("tnView", "headlines");
            bb.refresh()
        };
        this.toggleStandard = function() {
            cookies.set("tnView", "standard");
            bb.refresh()
        }
    }
    function aU() {
        var bb = this;
        this.bindNewsletter = function(bc) {
            aV(bc).each(function() {
                var bd = aV(this).find("form");
                var be = aV(this).find(".nlEmail").val();
                if (AOL.responsiveEnabled) {
                    aV(bd).find("input[name='email']").width(aV(bd).width() - aV(bd).find("a.nlSubmit").width() - 30);
                    aV(this).find("div.nlMsgFollow,div.nlMsg").width("100%");
                    aV("body").on("hmpg.snap",
                    function(bf) {
                        aV(bd).find("input[name='email']").width(aV(bd).width() - aV(bd).find("a.nlSubmit").width() - 30);
                        aV(this).find("div.nlMsgFollow,div.nlMsg").width("100%")
                    })
                } else {
                    aV(bd).find("input[name='email']").width(aV(bd).width() - aV(bd).find("a.nlSubmit").width() - 18);
                    aV(this).find("div.nlMsgFollow,div.nlMsg").width("100%")
                }
                aV(bd).submit(function(bf) {
                    bf.preventDefault();
                    aV(bd).find(".nlSubmit").click()
                });
                aV(aV(this).find(".nlEmail")).click(function(bf) {
                    if (aV(this).val() == be) {
                        aV(this).val("")
                    }
                });
                aV(bd).find(".nlSubmit").click(function(bm) {
                    var bh = aV(bd).find(".listName").val();
                    var bj = aV(bd).find(".welcomeTemplate").val();
                    var bg = aV(bd).find(".nlEmail").val();
                    omn.omcl(aV(this).attr("name"));
                    if (typeof(bN) != "undefined") {
                        bN.extractIds(aV(bd).parent()[0]);
                        bN.ping(aV(bd).parent().attr("id") + "-submit")
                    }
                    var bl = a7(bg);
                    if (!bl) {
                        bg = "invalid"
                    }
                    var bk = aV(aV(aV(this).parent()).parent());
                    aV(aV(bk).children("div")).hide();
                    aV(bd).find(".nlEmail").val("Submitting...");
                    var bi = "ajax.jsp?m=newsletter&p=newsletter&slot=" + aV(bk).attr("id") + "&list=" + bh + "&email=" + bg + "&welcome=" + bj;
                    var bf;
                    aV.get(bi,
                    function(bn) {
                        bf = bn;
                        aV(bd).find(".nlEmail").val(be);
                        aV(bk).replaceWith(bf);
                        bb.bindNewsletter("#" + aV(bk).attr("id"))
                    },
                    "text");
                    bm.preventDefault()
                });
                aV(bd).find(".nlEmail").blur(function() {
                    if (aV(this).val() == "") {
                        aV(this).val(be)
                    }
                })
            })
        };
        bb.bindNewsletter(".newsletterModule")
    }
    function a7(bc) {
        var bb = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return bb.test(bc)
    }
    function ah() {
        var bb = this;
        var bc;
        var bf;
        var be;
        var bd;
        this.init = function() {
            bb.moduleContainer = aV("div.local-amber-alerts");
            if (bb.moduleContainer && bb.moduleContainer.length > 0) {
                bb.getFeedDataAndBuildUI()
            }
        };
        this.addOmnitureIDs = function(bh) {
            var bi = aV(bb.moduleContainer).find("div.local-amber-alerts_containter_" + bh);
            aV.each(aV(bi).find("h2 > a"),
            function(bj, bk) {
                aV(bk).attr("name", "om_local_amberalert_header_" + bh)
            });
            aV.each(aV(bi).find("div.poweredby a"),
            function(bj, bk) {
                aV(bk).attr("name", "om_local_amberalert_header_poweredby_" + bh)
            });
            aV.each(aV(bi).find("div.img-container a"),
            function(bj, bk) {
                aV(bk).attr("name", "om_local_amberalert_victim_image_" + bh + "_" + bj)
            });
            aV(bi).find("a.view_more_lnk").attr("name", "om_local_amberalert_view_more_" + bh);
            aV.each(aV(bi).find("div.desc a"),
            function(bj, bk) {
                aV(bk).attr("name", "om_local_amberalert_victim_lnk_" + bh + "_" + bj)
            });
            aV.each(aV(bi).find("div.amber-alerts-share div.aol-share div.aol-share a"),
            function(bj, bk) {
                aV(bk).attr("name", "local_amberalert_" + aV(bk).attr("class") + "_" + bh + "_" + bj)
            })
        };
        this.bind = function() {
            aV(bb.moduleContainer).find("a").each(function(bh, bi) {
                aV(this).click(function(bj) {
                    omn.omcl(aV(this).attr("name"))
                })
            })
        };
        this.show = function() {
            aV(bb.moduleContainer).slideDown("slow")
        };
        this.createSharingButtons = function() {
            aV(".local-amber-alerts [name='aol-share']").aolShare({
                services: ["facebook", "twitter", "email"],
                templates: {
                    twitter: {
                        twitterStatus: "url={{url}}&text=#aol{{title}}&via=AOL"
                    }
                }
            })
        };
        this.createAlert = function(bl, bi, bk) {
            bb.maleImgSrc = aV(bk).find("img.victims").attr("imgMale");
            bb.femaleImgSrc = aV(bk).find("img.victims").attr("imgFemale");
            bb.moduleContainer = aV("div.local-amber-alerts");
            aV(bb.moduleContainer).append("<div class='local-amber-alerts_containter_" + bi + "'></div>");
            var bh = aV(bb.moduleContainer).find("div.local-amber-alerts_containter_" + bi);
            aV(bk).appendTo(bh);
            aV(bh).find("p.circumstances b").after(bl.Alert.IncidentInformation.MissingPersonCircumstanceText + " ");
            aV(bh).find("a[href$='_ALERTID']").each(function() {
                var bm = aV(this).attr("href");
                aV(this).attr("href", bm.replace("_ALERTID", bl.Alert.AlertId))
            });
            var bj = aV(bh).find("div.amber-alert-victim");
            aV.each(bl.Alert.Victims,
            function(bo, br) {
                victimSection = aV(bj).clone();
                var bm = "";
                try {
                    ls_address = bl.Alert.IncidentInformation.LastSeenAddress;
                    bm = ls_address.AddressCityName + ", " + ls_address.AddressStateName
                } catch(bq) {}
                aV(victimSection).find("a[href$='_ALERTID']").each(function() {
                    var bs = aV(this).attr("href");
                    aV(this).attr("href", bs.replace("_ALERTID", bl.Alert.AlertId))
                });
                aV(victimSection).find("a.name").append(bg(br.PersonGivenName + " " + br.PersonSurName));
                aV(victimSection).find("p.city").append(bg(bm));
                aV(victimSection).find("td.age").append(bg(br.Age));
                aV(victimSection).find("td.gender").append(bg(br.Gender));
                aV(victimSection).find("td.weight").append(bg(br.PhysicalDescription.Weight));
                aV(victimSection).find("td.height").append(bg(br.PhysicalDescription.Height));
                aV(victimSection).find("td.eyes").append(bg(br.PhysicalDescription.PersonEyeColorCode));
                aV(victimSection).find("td.hair").append(bg(br.PhysicalDescription.PersonHairColorCode));
                try {
                    var bp = br.PhysicalDescription.Picture.ExternalPicture.HostedImageUrl
                } catch(bq) {}
                if (bp == undefined) {
                    if (br.Gender == "Male") {
                        bp = bb.maleImgSrc
                    } else {
                        bp = bb.femaleImgSrc
                    }
                    aV(victimSection).find("img.victims").attr("src", bp)
                } else {
                    var bn = aV(victimSection).find("img.victims");
                    aV(bn).attr("src", aV(bn).attr("src") + bp)
                }
                aV(bh).append(victimSection)
            });
            aV(bh).find("div.amber-alert-victim").last().css("border-bottom", "none").css("margin-bottom", "0").css("padding-bottom", "0");
            aV(bj).remove();
            bb.createSharingButtons();
            bb.addOmnitureIDs(bi)
        };
        function bg(bh) {
            if (bh == undefined || bh.length == 0) {
                return "N/A"
            } else {
                return bh
            }
        }
        this.getFeedDataAndBuildUI = function() {
            var bh = aV(bb.moduleContainer).attr("apiURL");
            aV.ajax({
                url: bh + "&callback=?",
                dataType: "jsonp",
                cache: "true",
                jsonpCallback: "social_alert_callback",
                success: function(bi) {
                    bb.feedData = bi;
                    if (bi instanceof Array && bi.length == 0) {
                        return 0
                    }
                    aV.get("ajax.jsp?m=local&p=amberAlerts&get_template=true&slot=local-amber-alerts",
                    function(bj) {
                        if (bi.hasOwnProperty("Alert")) {
                            bb.createAlert(bi, 0, bj)
                        } else {
                            aV.each(bi,
                            function(bk, bl) {
                                bb.createAlert(bl, bk, bj)
                            })
                        }
                        aV(bb.moduleContainer).slideDown("slow",
                        function() {
                            bb.bind()
                        })
                    })
                }
            })
        }
    }
    function N() {
        var bb = this;
        this.module = null;
        this.div = null;
        this.ul = null;
        this.a = null;
        this.slot = null;
        this.wrapper = null;
        this.loaded = false;
        this.form = null;
        this.edit = null;
        this.close = null;
        this.moreRequests = 1;
        this.maxRequests = 5;
        this.maxStories = 42;
        this.storyCount = 8;
        this.viewmoreData;
        this.viewmoreLink = "";
        this.viewmoreLinkTarget = "";
        this.initialHeight = null;
        this.newStory = "";
        this.storePrevZip = "";
        this.moreLinksClass = "localmore";
        this.editOpen = false;
        this.redesignedLocal = null;
        this.wthrIsStandalone = false;
        this.localWrapperId = "#local";
        this.localAjaxPParam = "local";
        this.localAjaxSlotParam = "local";
        this.isRes = false;
        this.init = function() {
            if (typeof(AOL.responsiveEnabled) != "undefined") {
                bb.isRes = AOL.responsiveEnabled
            }
            contentautorefresh.register(Y, null, aV("#local-wrapper"));
            bb.bind()
        };
        this.bind = function(bd) {
            bb.div = aV("#localstories");
            bb.viewmoreData = aV("#local_viewmoreform");
            if (aV("#localstories_location").height() != null) {
                bb.initialHeight = aV("#localstories_location").height()
            }
            var bf = new B();
            var bh = aV("#localstories_location").attr("class");
            if (typeof(bh) != "undefined" && bh.indexOf("wthIsStdAln") != -1) {
                this.wthrIsStandalone = true;
                this.localWrapperId = "#localpage-wrapper";
                this.localAjaxPParam = "localPageWeatherJSON";
                this.localAjaxSlotParam = "local-weather"
            }
            var bc = aV("#localheader");
            if (bc.length < 1) {
                if (bd != "COD") {
                    cod.register(bb.bind)
                }
                return false
            }
            bb.ul = bb.div.find("ul");
            bb.a = aV("#localViewMore");
            var bg = encodeURIComponent(bb.viewmoreData.find("input#moreMax").val());
            if (bg != null && !isNaN(parseInt(bg))) {
                bb.maxRequests = parseInt(bg)
            }
            bg = encodeURIComponent(bb.viewmoreData.find("input#moreLinkCount").val());
            if (bg != null && !isNaN(parseInt(bg))) {
                bb.storyCount = parseInt(bg)
            }
            bb.viewmoreLink = bb.viewmoreData.find("input#moreLink").val();
            bb.viewmoreLinkTarget = bb.viewmoreData.find("input#moreLinkTarget").val();
            if (!bb.isRes) {
                bb.a.click(function(bi) {
                    omn.omcl("localmore_" + bb.moreRequests);
                    bb.more();
                    bi.preventDefault()
                })
            }
            aV("#PatchSurvey").click(function(bi) {
                omn.omcl("om_patchsurvey")
            });
            bb.wrapper = aV("#localstories_location");
            bb.edit = bb.wrapper.find("a.localstories_edit");
            bb.close = aV("#locationclose");
            bb.form = aV("#locallocationform");
            bb.redesignedLocal = bb.close.parents("div.editloc").get(0);
            bb.form.submit(function() {
                fTips.hide("localerror");
                var bi = aV(this).find("input#locz").val();
                if (bi != "") {
                    bb.submit(aV(this))
                } else {
                    fTips.fetch("featuretip-local-error", false);
                    fTips.show("localerror")
                }
                return false
            });
            aV("#locationsubmit").click(function(bi) {
                bb.form.submit();
                bi.preventDefault()
            });
            bb.close.click(function(bi) {
                bb.cancel();
                fTips.hide("localerror");
                bi.preventDefault()
            });
            bb.edit.click(function(bj) {
                bb.storePrevZip = aV("#locz").val();
                var bi = aV("#zip_orig").val();
                aV("#locz").val(bi);
                bb.change();
                bj.preventDefault();
                r(aV("#locz"));
                if (bb.redesignedLocal != null) {
                    bb.redesignededit()
                }
            });
            aV("#locz").focus(function() {
                aV(this).select()
            });
            aV("#locz").click(function() {
                aV(this).val("")
            });
            try {
                aV("#nozip").html(aV("#wcity").html())
            } catch(be) {}
            bc.find("a.feedbackLink").click(function(bi) {
                if (P) {
                    P.localNewsFeedback(this)
                }
                bi.preventDefault()
            });
            if (!aV("#localViewMore").hasClass("localmore")) {
                bb.moreLinkClass = "localmore-noarrow"
            }
            bb.bindToolTips();
            if (bb.isRes && typeof hmpg != "undefined" && hmpg.collapseModules) {
                if (bd == "COD") {
                    hmpg.collapseModules.rebindCollapseFeaturesForAJAX(aV("#local-wrapper"))
                } else {
                    hmpg.collapseModules.rebindCollapseFeaturesForAJAX(aV("#local-wrapper"), 2);
                    hmpg.collapseModules.rebindCollapseFeaturesForAJAX(aV("#localpage-wrapper"), 2)
                }
            }
            return true
        };
        this.redesignededit = function() {
            aV("body").bind("click.localedit",
            function(bd) {
                var bc = aV(bd.target);
                if (!bc.is(".localstories_edit,#locallocationform input,#locallocationform a")) {
                    bb.cancel();
                    fTips.hide("localerror");
                    aV("body").unbind("click.localedit")
                }
            })
        };
        this.bindToolTips = function() {
            if (utils.isiPad()) {
                return
            }
            aV(".localtooltipsli").each(function() {
                aV(this).hover(function() {
                    aV(this).contents("span.localtooltips").css({
                        display: "block"
                    })
                },
                function() {
                    aV(this).contents("span.localtooltips").css({
                        display: "none"
                    })
                })
            })
        };
        this.more = function() {
            var be;
            var bf;
            var bc = bb.ul.find("li").size();
            var bd = bb.moreRequests * bb.storyCount;
            bb.slotname = aV(".localvmslot").html();
            if (bb.moreRequests <= bb.maxRequests && bd < this.maxStories) {
                bb.moreRequests++;
                aV.get("ajax.jsp?m=localstories&p=news&more=true&zip=" + bb.slot + "&localmore=" + bb.moreRequests + "&slot=" + bb.slotname,
                function(bg) {
                    if (bg != "") {
                        aV("#local_stories_list").html(bg);
                        bb.a.attr("class", bb.moreLinkClass + " lnid-sec3_lnk" + bb.moreRequests);
                        bb.bindToolTips();
                        be = aV(window).height() + aV(window).scrollTop();
                        bf = aV("#localstories").offset().top + aV("#localstories").height();
                        if (be < bf) {
                            document.getElementById("localStoryFooter").scrollIntoView(false)
                        }
                        bb.newStory = aV(bb.ul.children().get(bc).children[1]);
                        r(bb.newStory)
                    } else {
                        if (bb.viewmoreLinkTarget != "") {
                            window.open(bb.viewmoreLink)
                        } else {
                            U.location = bb.viewmoreLink
                        }
                    }
                },
                "html");
                if (bb.moreRequests > bb.maxRequests && bb.viewmoreLink == "") {
                    bb.a.hide()
                }
            } else {
                if (bb.viewmoreLinkTarget != "") {
                    window.open(bb.viewmoreLink)
                } else {
                    U.location = bb.viewmoreLink
                }
            }
        };
        this.editLoc = function() {
            aV("#localstories_editloc").show();
            aV("#localstories_edit_div").css("visibility", "hidden");
            return false
        };
        this.load = function(bd) {
            if (bd == null) {
                bd = ""
            }
            bb.moreRequests = 1;
            fTips.hide("localerror");
            aV("#localLoadingGraphic").show();
            try {
                var bc = aV("#local").attr("class");
                if (typeof(bc) != "undefined" && bc.indexOf("rfrsh") > -1) {
                    aV("#local-wrapper").addClass(bc.substr(bc.indexOf("rfrsh")))
                }
            } catch(be) {}
            aV.get("ajax.jsp?m=localstories&p=" + this.localAjaxPParam + "&slot=" + this.localAjaxSlotParam + bd,
            function(bh) {
                var bg = null;
                try {
                    bg = aV.parseJSON(bh)
                } catch(bi) {}
                if (typeof bg != "undefined" && bg != null && bg.reload == "true") {
                    window.location.href = window.location.href
                } else {
                    var bf = bh;
                    if (typeof bg != "undefined" && bg != null && bg.html != null) {
                        bf = bg.html
                    }
                    aV(bb.localWrapperId).html(bf)
                }
                bb.bind();
                r(aV("#locz"))
            },
            "html")
        };
        this.submit = function(bd) {
            omn.omcl("localsave");
            var bc = encodeURIComponent(bd.find("input#locz").val());
            bb.load("&frm_w=1&zip_w=" + bc)
        };
        this.cancel = function() {
            omn.omcl("localclose");
            if (aV("#local_stories_list").length != 0 && !bb.wthrIsStandalone) {
                aV("#locz").val(bb.storePrevZip);
                aV("#localstories_editloc").hide();
                aV("#localstories_edit_div").css("visibility", "visible")
            } else {
                bb.load()
            }
        };
        this.change = function() {
            omn.omcl("localedit");
            aV("#localstories_editloc").show();
            aV("#localstories_edit_div").css("visibility", "hidden")
        };
        bb.init()
    }
    function az() {
        var bb = this;
        this.div = null;
        this.divcontent = null;
        this.ls_signIn = null;
        this.clicks = 0;
        this.viewMoreClicks = 1;
        this.viewMoreClicksCounter = 0;
        this.maxRequests = 5;
        this.a = null;
        this.divmore = null;
        this.viewmore = null;
        this.viewmoreToggle = true;
        this.viewmoreTarget = "";
        this.viewmoreData = null;
        this.initialHeight = null;
        this.twitLogo = "";
        this.facebookLogo = "";
        this.newStory = "";
        this.opaqueDiv = null;
        this.bind = function(bc) {
            bb.div = aV("#lifestreamLayout");
            bb.opaqueDiv = bb.div.find("#opaque");
            bb.viewmoreData = aV("#ls_viewmoreform");
            if (bb.div.height() != null) {
                bb.initialHeight = bb.div.height()
            }
            bb.divmore = bb.div.find("#ls_container");
            bb.divcontent = bb.div.find("#lifestream");
            if (bb.divmore.height() == null) {
                if (bc != "COD") {
                    cod.register(bb.bind)
                }
                return false
            } else {
                aV("#lifeRefresh").show();
                aV("#lifeViewMore").show()
            }
            aV("#lifeRefresh").click(function(bf) {
                omn.omcl("lifestream_refresh");
                bb.refresh();
                bf.preventDefault()
            });
            var bd = encodeURIComponent(bb.viewmoreData.find("input#moreMax").val());
            if (bd != null && !isNaN(parseInt(bd))) {
                bb.maxRequests = parseInt(bd)
            }
            bb.viewmore = bb.div.find("a.view-more");
            bb.toggleViewMore(bb.viewmoreToggle);
            bb.viewmoreTarget = bb.viewmoreData.find("input#moreLinkTarget").val();
            bb.viewmore.click(function(bf) {
                bb.clicks++;
                omn.omcl("lifestream_more_" + bb.clicks);
                bb.more();
                bf.preventDefault()
            });
            var be = aV("#ls_imageform");
            if (be) {
                bb.twitLogo = be.find("input#twitterLogoSrc").val();
                bb.facebookLogo = be.find("input#facebookLogoSrc").val()
            }
            bb.bindOnRefresh();
            return true
        };
        this.bindOnRefresh = function() {
            bb.ls_signInLink = bb.div.find("#ls_signInLink");
            bb.ls_signIn = bb.div.find("#ls_signIn");
            bb.a = bb.div.find("#signinClose");
            bb.a.click(function(bc) {
                bb.toggleSigninOff();
                bc.preventDefault()
            });
            bb.a = bb.div.find("#enhanceClose");
            bb.a.click(function(bc) {
                bb.toggleEnhancedOff();
                bc.preventDefault()
            });
            return true
        };
        this.toggleSigninOff = function() {
            cookies.set("lsSigninView", "signinOff");
            bb.ls_signIn.hide();
            bb.ls_signInLink.show()
        };
        this.toggleEnhancedOff = function() {
            cookies.set("lsEnhanceView", "enhancedOff");
            bb.ls_signIn.hide()
        };
        this.refresh = function() {
            bb.viewMoreClicksCounter = 0;
            bb.toggleViewMore(true);
            aV("#lsRefreshAnim").show();
            aV("#lifeRefresh").hide();
            bb.opaqueDiv.show();
            bb.opaqueDiv.css("position", "absolute");
            bb.opaqueDiv.css("height", bb.divcontent.height() + "px");
            bb.opaqueDiv.css("width", bb.divcontent.width() + "px");
            bb.divcontent.load("ajax.jsp?m=lifestream&p=lifestream_content&slot=lifestream",
            function() {
                bb.divmore = bb.div.find("#ls_container");
                bb.bindOnRefresh();
                aV("#lifeRefresh").show();
                aV("#lsRefreshAnim").hide();
                bb.opaqueDiv.hide()
            })
        };
        this.toggleViewMore = function(bc) {
            bb.viewmoreToggle = bc;
            if (bc) {
                bb.viewmore.show()
            } else {
                if (bb.viewmore != null) {
                    bb.viewmore.hide()
                }
            }
        };
        this.itemImageError = function(bc, be, bd) {
            if (typeof(bd) != "undefined" && bd != "") {
                bc.src = bd
            } else {
                if (be == "Facebook") {
                    bc.src = bb.facebookLogo
                } else {
                    if (be == "Twitter") {
                        bc.src = bb.twitLogo
                    }
                }
            }
        };
        aV("#lifestreamLoading").show();
        bb.bind()
    }
    function B() {
        aV("#ypQuery").keypress(function(bc) {
            bc = (bc) ? bc: event;
            var bb = (bc.charCode) ? bc.charCode: ((bc.which) ? bc.which: bc.keyCode);
            if ((bb == 13 || bb == 3) && document.getElementById("yellowPg-button")) {
                aV("#yellowPg-button").click();
                return false
            }
            return true
        });
        aV("#area").keypress(function(bc) {
            bc = (bc) ? bc: event;
            var bb = (bc.charCode) ? bc.charCode: ((bc.which) ? bc.which: bc.keyCode);
            if ((bb == 13 || bb == 3) && document.getElementById("yellowPg-button")) {
                aV("#yellowPg-button").click();
                return false
            }
            return true
        });
        aV("#yellowPg-button").bind("click",
        function(bf) {
            var bb = "",
            be = "",
            bg = "";
            var bd = aV("#yellowPgForm");
            var bc = bd.find('input[name="searchURL"]').val();
            be = bd.find('input[name="query"]').val();
            bg = bd.find('input[name="area"]').val();
            bd.find('input[name="frmTarget"]').val();
            bc = bc.replace("[query]", be);
            bc = bc.replace("[location]", bg);
            bc = encodeURI(bc);
            if (be !== "") {
                omn.omo(aV("#yellowPg-button").attr("name").replace("om_", ""));
                if (bb == "_blank") {
                    window.open(bc)
                } else {
                    window.location = bc
                }
            }
        })
    }
    function y(bc) {
        var bb = this;
        this.cache = new Object();
        this.today = new Date().getTime();
        this.counter = 0;
        this.interval = null;
        this.sTime = 0;
        this.endTime = 0;
        this.moduleID = 0;
        this.domObject = bc;
        this.update = function() {
            var bj = bb.today;
            bb.today = new Date().getTime();
            var bh = bb.today - bj;
            for (var bg = 0; bg < bb.counter; bg++) {
                var be = bb.cache[bg];
                var bf = be.timer.timeDifference - bh;
                if (bf <= 0) {
                    bb.stop();
                    return
                }
                var bd = bb.calculateTimer(bf);
                var bi = be.event;
                aV(bi).find(".timer-nums").each(function() {
                    var bk = aV(this);
                    if (aV(bk).parent().attr("id") == "hrs") {
                        if (bd.hours != be.timer.hours) {
                            aV(bk).html(bd.hours)
                        }
                    }
                    if (aV(bk).parent().attr("id") == "mins") {
                        if (bd.minutes != be.timer.minutes) {
                            aV(bk).html(bd.minutes)
                        }
                    }
                    if (aV(bk).parent().attr("id") == "days") {
                        if (bd.days != be.timer.days) {
                            aV(bk).html(bd.days)
                        }
                    }
                });
                be.timer = bd;
                bb.cache[bg] = be
            }
        };
        this.constructor = function() {
            bb.setTimer();
            bb.start()
        };
        this.setTimer = function() {
            bb.sTime = aV("#seServerDate").html();
            bb.endTime = aV("#seEndTime", bb.domObject).html();
            aV("#seTimer", bb.domObject).each(function() {
                var bg = aV(this);
                var be = bb.endTime - bb.sTime;
                if (be <= 0) {
                    bb.stop();
                    return
                }
                var bf = bb.calculateTimer(be);
                aV(bg).find("#days").find(".timer-nums").html(bf.days);
                aV(bg).find("#hrs").find(".timer-nums").html(bf.hours);
                aV(bg).find("#mins").find(".timer-nums").html(bf.minutes);
                aV(bg).show();
                var bd = new Object();
                bd.event = aV(bg);
                bd.endTime = bb.endTime;
                bd.timer = bf;
                bb.cache[bb.counter] = bd;
                bb.counter = bb.counter + 1
            })
        };
        this.start = function() {
            bb.interval = setInterval(function() {
                bb.update()
            },
            10000)
        };
        this.stop = function() {
            var bk = bb.domObject;
            var bm = aV("#seReplaceImg", bk);
            if (bm.length > 0) {
                var bd = bm.attr("imgUri");
                var bh = bm.attr("lnk");
                var bj = '<img class="seCountImg" src="' + bd + '">';
                if (bh) {
                    var bl = bm.attr("omni");
                    var bf = bm.attr("targ");
                    var bg = bm.attr("altxt");
                    bj = '<a alt="' + bg + '" title="' + bg + '" class="lnid-sec1_lnk3" name="' + bl + '" href="' + bh + '" target="' + bf + '">' + bj + "</a>"
                }
                aV(bk).html(bj);
                aV(bk).show()
            } else {
                var bi = aV("#cdReplaceOption", bk);
                var be = 0;
                if (bi.length > 0) {
                    be = bi.attr("opt")
                }
                if (be == 2) {
                    bk.parent().hide()
                } else {
                    bk.hide()
                }
            }
            if (bb.interval != null) {
                clearInterval(bb.interval)
            }
        };
        this.calculateTimer = function(bd) {
            var be = new Object();
            var bf = Math.floor(bd / 1000);
            bf += 60;
            be.days = Math.floor(bf / 86400);
            if (be.days < 10) {
                be.days = "0" + be.days
            }
            bf = bf - (be.days * 86400);
            be.hours = Math.floor(bf / 3600);
            if (be.hours < 10) {
                be.hours = "0" + be.hours
            }
            bf = bf - (be.hours * 3600);
            be.minutes = Math.floor(bf / 60);
            if (be.minutes < 10) {
                be.minutes = "0" + be.minutes
            }
            be.seconds = (bf - (be.minutes * 60));
            be.timeDifference = bd;
            return be
        };
        bb.constructor()
    }
    function a2() {
        var bb = this;
        this.constructor = function() {
            aV(".secountdown").each(function() {
                var bc = new y(aV(this))
            })
        };
        bb.constructor()
    }
    var a2 = new a2();
    function aq() {
        var bn = this;
        var bi = encodeURIComponent(window.location.href);
        var bl = 362;
        var bd = 452;
        var be = (((screen.height - bl) / 2) - 100);
        var bb = ((screen.width - bd) / 2);
        function bh() {
            var bo = typeof "s_channel" == "undefined" ? s_channel: "";
            return bo
        }
        function bf() {
            var bo = "channel" in s_265 ? s_265.channel: "";
            bo = bo == "undefined" ? "": bo;
            return bo
        }
        function bj() {
            var bo = typeof s_265 == "undefined" ? bh() : bf();
            return bo
        }

        function bk(br, bs, bp, bq) {
            var bt = (((screen.height - bs) / 2) - 100);
            var bo = ((screen.width - bp) / 2);
            var bu = (br.indexOf("?") == -1 ? br + "?": br + "&");
            aF.open(bu + "referer=" + bi + "&ch=" + bj(), bq, "width=" + bp + ",height=" + bs + ",screenX=" + bo + ",screenY=" + bt + ",top=" + bt + ",left=" + bo + ",resizable=no,copyhistory=yes,scrollbars=no")
        }
        function bc(bo) {
            aF.open(bo, "", "screenX=0,screenY=0,top=0,left=0,location=yes,toolbar=yes,resizable=yes,copyhistory=yes,scrollbars=yes")
        }
        this.bind = function(bo) {
            if (bo === null) {
                bo = aV("body")
            }
            bo.find("a.feedbackLink").click(function(bp) {
                bn.feedback(this);
                bp.preventDefault()
            });
            bo.find("a.surveyLink").click(function(bp) {
                bn.survey(this);
                bp.preventDefault()
            });
            bo.find("a.learnmore").click(function(bp) {
                bn.learnmore(this);
                bp.preventDefault()
            })
        };
        this.feedback = function(bo) {
            bk(bo.href, 480, 618, "feedback_help");
            omn.omcl("feedback")
        };
        this.survey = function(bo) {
            bk(bo.href, 535, 700, "feedback_help");
            omn.omcl("survey")
        };
        this.learnmore = function(bo) {
            bk(bo.href, 450, 618, "feedback_learn");
            omn.omcl("learnmore")
        };
        this.localNewsFeedback = function(bo) {
            bk(bo.href, 480, 618, "feedback_help");
            omn.omcl("feedback-local")
        };
        bn.bind(aV("body"))
    }
    var P = new aq();
    function b() {
        var bb = this;
        this.div = null;
        this.node = null;
        this.started = false;
        this.bind = function() {
            bb.div = aV("#brands");
            bb.node = document.getElementById("brands");
            bb.sonar()
        };
        this.sonar = function() {
            sonar.add({
                obj: bb.node,
                call: function() {
                    bb.createImgTags()
                },
                px: 200
            })
        };
        this.createImgTags = function() {
            if (!bb.started) {
                bb.started = true;
                var bd = utils.findClass(bb.node, /img-.*/);
                var bc = bd.replace("img-", "");
                aV(bb.div).find("a").each(function() {
                    aV(this).prepend("<img src='" + bc + "' alt=''/>")
                })
            }
        };
        bb.bind()
    }
    new b();
    function E() {
        var bb = this;
        this.bind = function() {
            aV("div.rrpromo").click(function() {
                var bd = aV(this).attr("id");
                var bc = bd.replace("om_", "");
                bb.setCookie(bc)
            })
        };
        this.setCookie = function(bc) {
            var bg = cookies.get("rrpmo1");
            cutrrcook = bg.split("-");
            var be = new Array;
            var bf = 0;
            for (var bd = 0; bd < cutrrcook.length; bd++) {
                thisC = cutrrcook[bd].split("~");
                if (thisC.length == 4 && thisC[3] == "0" && thisC[0] == bc) {
                    be[bd] = thisC[0] + "~" + thisC[1] + "~" + thisC[2] + "~1";
                    bf = 1
                } else {
                    be[bd] = cutrrcook[bd]
                }
            }
            final_rrcookie = be.join("-");
            if (bf) {
                cookies.set("rrpmo1", final_rrcookie)
            }
        };
        bb.bind()
    }
    new E();
    partDate = new Date();
    check = partDate.getHours().toLocaleString();
    if (check > 2 && check < 12) { (aV("#wam").show())
    } else {
        if (check > 11 && check < 17) { (aV("#wpm").show())
        } else {
            if (check > 16 && check < 23) { (aV("#weve").show())
            } else {
                if (check > 22 || check < 3) { (aV("#wnt").show())
                } else { ((aV("#wfb").show()))
                }
            }
        }
    }
    function aN() {
        var bc = this;
        this.callbacks = new Array();
        function bb(be) {
            var bd = this;
            this.func = be;
            this.called = false;
            this.call = function() {
                if (!bd.called) {
                    if (bd.func("COD") == true) {
                        bd.called = true
                    }
                }
            }
        }
        this.bind = function() {
            setTimeout(function() {
                aV("div.cod").each(function() {
                    var bd = bc.divRef = aV(this).attr("id");
                    var be = this;
                    sonar.add({
                        obj: this,
                        call: function() {
                            aV(be).load("ajax.jsp?m=" + bd + "&t=cod",
                            function() {
                                bc.broadcast();
                                fTips.pos()
                            })
                        },
                        px: 0
                    })
                })
            },
            500)
        };
        this.register = function(bd) {
            bc.callbacks.push(new bb(bd))
        };
        this.broadcast = function() {
            var bf;
            for (var be = 0,
            bd = bc.callbacks.length; be < bd; be++) {
                bf = bc.callbacks[be];
                if (bf != null) {
                    bf.call()
                }
            }
        };
        bc.bind()
    }
    cod = new aN();
    function aj() {
        var bb = this;
        this.bind = function() {
            contentautorefresh.register(aZ, null, aV("#mktsrchbut"));
            if (aV(".stock-quote-input")[0] && aV(".stock-quote-input")[0].value != "") {
                aV(".stock-quote-input")[0].value = ""
            }
        };
        aV("input.stock-quote-input").keypress(function(bd) {
            omn.omo("marketquotes_searchenter");
            bd = (bd) ? bd: event;
            var bc = (bd.charCode) ? bd.charCode: ((bd.which) ? bd.which: bd.keyCode);
            if ((bc == 13 || bc == 3) && document.getElementById("mktsrchbut")) {
                aV("#mktsrchbut").click();
                return false
            }
            return true
        });
        aV("#mktsrchbut").click(function() {
            omn.omo("marketquotes_searchbutton", "marketquotes_searchenter")
        });
        bb.bind()
    }
    function r(bb) {
        if (!bb) {
            return
        }
        bb.focus()
    }
    function e() {
        for (var bc = 0; bc < adsDivs.length; bc++) {
            var bb = aV(adsDivs[bc]).attr("class");
            if (bb.indexOf("refreshYES") > -1) {
                adsReloadAd(adsDivs[bc])
            }
        }
    }
    function aI() {
        var bd = this;
        var bh = aV(document);
        var bf = aV("#pagerefresh-inactive");
        var bg = null;
        var be = aV("#mail_prev_pl");
        this.disableRefresh = false;
        this.idleTimeout = null;
        this.isIdle = false;
        this.idleTimestamp = null;
        this.idleTimer = null;
        this.pgInactiveDiv = null;
        if (bf.html() != null) {
            bd.pgInactiveDiv = bf.parent();
            bg = bf.html().split(",");
            if (bg[0] != "") {
                bd.idleTimeout = parseInt(bg[0]) * 1000
            } else {
                bd.disableRefresh = true
            }
            this.type = bg[1];
            this.messageslot = bg[2]
        } else {
            bd.disableRefresh = true
        }
        this.setIdleTimeout = function() {
            bd.idleTimestamp = new Date().getTime() + bd.idleTimeout;
            if (bd.idleTimer != null) {
                clearTimeout(bd.idleTimer)
            }
            bd.idleTimer = setTimeout(bb, bd.idleTimeout + 50)
        };
        this.clearIdleTimeout = function() {
            if (bd.idleTimer != null) {
                clearTimeout(bd.idleTimer)
            }
        };
        this.showMessage = function() {
            omn.omcl(bd.messageslot + "-inactive");
            a6("Making pagerefreshproactive ajax request");
            bd.pgInactiveDiv.load("ajax.jsp?m=pagerefresh&p=pagerefreshproactive&message=1&slotname=" + bd.messageslot,
            function(bi) {
                if (status != "error") {
                    bd.track(bd.pgInactiveDiv.children("div")[0]);
                    aV(".pagerefresh-link").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast");
                    be.css("margin-bottom", "0")
                }
            })
        };
        this.track = function(bi) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bi);
                    bN.ping("pagerefresh-inactive")
                }
            } catch(bj) {}
        };
        function bb() {
            if (!bd.isIdle) {
                var bi = new Date().getTime();
                if (bi < bd.idleTimestamp) {
                    a6("_makeIdle setting _makeIdle timeout of : " + bd.idleTimestamp - bi + 50);
                    bd.idleTimer = setTimeout(bb, bd.idleTimestamp - bi + 50);
                    return
                }
                try {
                    if (document.onIdle) {
                        document.onIdle()
                    }
                } catch(bj) {}
            }
            bd.isIdle = true
        }
        function bc() {
            var bi = new Date().getTime();
            bd.idleTimestamp = bi + bd.idleTimeout;
            if (bd.isIdle && !bd.disableRefresh) {
                bd.setIdleTimeout(bd.idleTimeout)
            }
            if (bd.isIdle && document.onBack) {
                document.onBack(bd.isIdle)
            }
            a6("_active setting self.isIdle = false");
            bd.isIdle = false
        }
        bh.ready(function() {
            bh.mousemove(bc);
            bh.mouseenter(bc);
            bh.scroll(bc);
            bh.keydown(bc);
            bh.click(bc);
            bh.dblclick(bc)
        });
        bd.setIdleTimeout(bd.idleTimeout);
        document.onIdle = function() {
            if (bd.type == "banner") {
                bd.disableRefresh = true;
                bd.clearIdleTimeout();
                bd.showMessage()
            } else {
                if (bd.type == "featuretip") {
                    var bi = aV("div#om_ftip_pagerefresh_").length;
                    if (bi < 1 || !aV("div#om_ftip_pagerefresh_").is(":visible")) {
                        if (!bd.disableRefresh) {
                            fTips.fetch(bd.messageslot, true)
                        }
                    }
                }
            }
        }
    }
    idleTimeout = new aI();
    function D() {
        var bb = this;
        this.count = 0;
        this.cmsvars = null;
        this.varDiv = null;
        this.varArray = null;
        this.prevPush = null;
        this.lastPush = null;
        this.checkIntrvl = null;
        this.messageslot = null;
        this.timerIntrvl = null;
        this.disabled = false;
        this.constructor = function() {
            try {
                bb.cmsvars = aV("#lastProactivePush");
                bb.varDiv = bb.cmsvars.parent();
                bb.initVars(bb.cmsvars)
            } catch(bc) {
                bb.disabled = true
            }
        };
        this.initVars = function(bc) {
            bb.count++;
            bb.varArray = aV(bc).html().split("|");
            bb.prevPush = bb.lastPush;
            bb.lastPush = bb.varArray[0];
            if (bb.prevPush == null) {
                bb.prevPush = bb.lastPush
            }
            bb.checkIntrvl = bb.varArray[1];
            bb.messageslot = bb.varArray[2];
            bb.timerIntrvl = setInterval(bb.checkPush, bb.checkIntrvl * 1000)
        };
        this.showMessage = function() {
            omn.omcl(bb.messageslot + "-proactive");
            bb.varDiv.load("ajax.jsp?m=pagerefresh&p=pagerefreshproactive&message=1&slotname=" + bb.messageslot,
            function(bc) {
                if (status != "error") {
                    clearInterval(bb.timerIntrvl);
                    try {
                        idleTimeout.disableRefresh = true;
                        idleTimeout.clearIdleTimeout();
                        idleTimeout.pgInactiveDiv.empty()
                    } catch(bd) {}
                    bb.track(bb.varDiv.children("div")[0]);
                    aV(".pagerefresh-link").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast").animate({
                        opacity: 0.25
                    },
                    "fast").animate({
                        opacity: 1
                    },
                    "fast")
                }
            })
        };
        this.track = function(bc) {
            try {
                if (typeof(bN) != "undefined") {
                    bN.extractIds(bc);
                    bN.ping("pagerefresh-proactive")
                }
            } catch(bd) {}
        };
        this.checkPush = function() {
            bb.varDiv.load("ajax.jsp?m=pagerefresh&p=pagerefreshproactive",
            function(bc) {
                if (status != "error") {
                    clearInterval(bb.timerIntrvl);
                    bb.initVars(bc);
                    if (bb.prevPush != bb.lastPush) {
                        bb.showMessage()
                    }
                }
            })
        };
        bb.constructor()
    }
    proactiveRefresh = new D();
    function O(br) {
        this.opacity = null;
        var bb = aV("#videoDeeplinkConfig");
        if (br != null && aV("#" + br + "-mod").length) {
            bb = aV("#" + br + "-mod").find("#videoDeeplinkConfig")
        }
        if (bb.length) {
            var bt = bb[0];
            var bm = utils.findClass(bt, /fiveminid-.*/).replace("fiveminid-", "");
            if (bm != null && bm != "") {
                if (aV.browser.msie) {
                    c = true
                }
                var bz = utils.findClass(bt, /plist-.*/).replace("plist-", "");
                if (bz === "") {
                    try {
                        var bp = aV("div.dailyvj").get(0);
                        var bf = utils.findClass(bp, /playlist-.*/);
                        bz = bf.replace("playlist-", "")
                    } catch(bg) {}
                }
                var bw = utils.findClass(bt, /pid-.*/).replace("pid-", "");
                var by = new Boolean(utils.findClass(bt, /hideRel-.*/).replace("hideRel-", ""));
                var be = utils.findClass(bt, /op-.*/).replace("op-", "");
                var bv = utils.findClass(bt, /wid-.*/).replace("wid-", "");
                var bq = utils.findClass(bt, /hei-.*/).replace("hei-", "");
                var bi = utils.findClass(bt, /trk-.*/).replace("trk-", "");
                var bk = utils.findClass(bt, /pt-.*/).replace("pt-", "");
                var bh = new Boolean(utils.findClass(bt, /adref-.*/).replace("adref-", ""));
                var bD = new Boolean(utils.findClass(bt, /pre-.*/).replace("pre-", ""));
                var bx = utils.findClass(bt, /loc-.*/).replace("loc-", "");
                var bu = utils.findClass(bt, /src-.*/).replace("src-", "");
                var bo = utils.findClass(bt, /tags-.*/).replace("tags-", "");
                var bj = utils.findClass(bt, /auto-.*/).replace("auto-", "");
                var bC = utils.findClass(bt, /counts-.*/).replace("counts-", "");
                var bc = utils.findClass(bt, /tweet-.*/).replace("tweet-", "");
                var bs = utils.findClass(bt, /trunc-.*/).replace("trunc-", "");
                var bA = utils.findClass(bt, /pac-.*/).replace("pac-", "");
                var bl = utils.findClass(bt, /cp-.*/).replace("cp-", "");
                var bn = aV("#" + bm + "-mod").length;
                if (bb.hasClass("embeddedDeeplink") && aV("#deeplinkedVideo").length) {
                    var bB = {
                        href: "#deeplinkedVideo",
                        inline: true,
                        onOpen: function() {
                            aV("#deeplinkedVideo").show();
                            aV("#cboxClose").addClass(self.closeClass)
                        },
                        onComplete: function() {
                            var bF = aV("#video5min").hasClass("bspid-false");
                            if (bF != null && bF == false) {
                                var bE = new aX(bv, bq, bm, bz, bu, "video5min", bo, bi, bj, bC, bc, bs, bA, bl, by);
                                bE.playModule(bb.parent());
                                aH()
                            }
                        }
                    };
                    if (lightboxManager.dlOffsetPos != null) {
                        bB.top = lightboxManager.dlOffsetPos.top - lightboxManager.dlOffsetPushTop;
                        bB.left = lightboxManager.dlOffsetPos.left;
                        bB.reposition = false
                    }
                    if (be != null && be.length > 0) {
                        bB.opacity = be
                    }
                    lightboxManager.isDeeplinkUrl = true;
                    lightboxManager.launchLightbox(bB)
                } else {
                    if (bn) {
                        var bd = new aX(bv, bq, bm, bz, bu, "video5min", bo, bi, bj, bC, bc, bs, bA, bl, by);
                        bd.playModule(bb.parent())
                    } else {}
                }
            }
        }
    }

    function R() {
        var bb = this;
        this.form = null;
        this.pollId = "";
        this.initSocialSharingTab = function() {
            var bd = [];
            if (aV("ul.results", bb.pollDivId).length > 0) {
                if (typeof dailyPollModuleSharingOptionsForResultsView != "undefined") {
                    bd = dailyPollModuleSharingOptionsForResultsView
                }
            } else {
                bd = bb.sharingOptionsForOptionsView;
                if (typeof dailyPollModuleSharingOptionsForOptionsView != "undefined") {
                    bd = dailyPollModuleSharingOptionsForOptionsView
                }
            }
            aV("[name='aol-share']", bb.pollDivId).aolShare({
                services: bd
            });
            var bc = function(bg, bh, be) {
                var bf = aV(bg);
                if (bf.length > 0) {
                    if (!bf.attr("trackingInitiated")) {
                        bf.attr("trackingInitiated", "true");
                        bf.attr("name", "om_" + bh);
                        bf.click(function() {
                            omn.omcl(bh)
                        });
                        bf.addClass(be)
                    }
                }
            };
            if (aV("ul.results", bb.pollDivId).length > 0) {
                aV(bb.pollDivId + " a.aol-share-email").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_r_poll_email", "lnid-sec5_lnk1")
                });
                aV(bb.pollDivId + " a.aol-share-facebook").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_r_poll_facebook", "lnid-sec5_lnk2")
                });
                aV(bb.pollDivId + " a.aol-share-twitter").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_r_poll_twitter", "lnid-sec5_lnk3")
                })
            } else {
                aV(bb.pollDivId + " a.aol-share-email").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_q_poll_email", "lnid-sec5_lnk2")
                });
                aV(bb.pollDivId + " a.aol-share-facebook").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_q_poll_facebook", "lnid-sec5_lnk3")
                });
                aV(bb.pollDivId + " a.aol-share-twitter").live("mouseenter",
                function() {
                    bc(this, "aolshare_acm_q_poll_twitter", "lnid-sec5_lnk4")
                })
            }
        };
        this.bind = function(bc) {
            bb.module = aV(bb.pollDivId);
            if (bb.module.length === 0) {
                return
            }
            bb.form = aV(bb.pollDivId + " form");
            bb.pollId = bb.form.attr("pollId");
            bb.form.submit(function() {
                fTips.hide(bb.noOptionFeaturetip);
                fTips.hide(bb.systemErrorFeaturetip);
                fTips.hide(bb.systemErrorVotingOut);
                var bf = bb.form.serializeArray();
                if (bf != "") {
                    var be = "";
                    for (var bd = 0; bd < bf.length; bd++) {
                        be = be + bf[bd].name + "=" + bf[bd].value + "&"
                    }
                    be = be + "pollid=" + bb.pollId;
                    bb.submit(be)
                } else {
                    fTips.fetch(bb.noOptionFeaturetipSlot, false);
                    fTips.show(bb.noOptionFeaturetip)
                }
                return false
            });
            aV(bb.pollDivId + " .button").click(function(bd) {
                bb.form.submit();
                bd.preventDefault()
            });
            bb.setPollVoteCookie();
            bb.initSocialSharingTab()
        };
        this.setPollVoteCookie = function() {
            var be = aV(bb.pollDivWrapperId + " #setVotedCookie");
            if (be.length > 0) {
                var bh = aV(be).attr("cval");
                var bg = aV(be).attr("cname");
                var bk = cookies.get(bg);
                if (bk != null && bk.length > 0) {
                    pollCookList = bk.split("~");
                    var bd = new Array();
                    bd.push(bh);
                    var bc = 1;
                    for (var bf = 0,
                    bi = pollCookList.length; bf < bi; bf++) {
                        var bj = pollCookList[bf];
                        if (bj != bh && bc < 20) {
                            bd.push(bj);
                            bc++
                        }
                    }
                    bh = bd.join("~")
                }
                cookies.set(bg, bh)
            }
        };
        this.load = function(be) {
            var bd = aV(bb.pollDivWrapperId).width();
            var bf = aV(bb.pollDivWrapperId).height();
            aV(bb.pollDivWrapperId + " .poll").hide();
            aV(bb.pollDivWrapperId).width(bd);
            aV(bb.pollDivWrapperId).height(bf);
            var bc = aV(bb.pollDivWrapperId + " .poll-loader");
            bc.css("padding", bd / 2 - 20 + "px 0");
            bc.show();
            if (be == null) {
                be = ""
            }
            aV(bb.pollDivWrapperId).load("ajax.jsp?ajax=1&" + bb.ajaxQueryParams + "&" + be,
            function(bh, bi, bg) {
                aV(bb.pollDivWrapperId).height("auto");
                if (bg.status == "200") {
                    bb.bind();
                    if (aV("#voteFailed").length > 0) {
                        fTips.fetch(bb.systemErrorFeaturetipSlot, false);
                        fTips.show(bb.systemErrorFeaturetip)
                    }
                    return
                } else {
                    aV(bb.pollDivWrapperId + " .poll").show();
                    bc.hide();
                    if (bg.status == "420" || bg.status == "418") {
                        fTips.fetch(bb.systemErrorVotingOutSlot, false);
                        fTips.show(bb.systemErrorVotingOut)
                    } else {
                        fTips.fetch(bb.systemErrorFeaturetipSlot, false);
                        fTips.show(bb.systemErrorFeaturetip)
                    }
                }
            })
        };
        this.submit = function(bc) {
            omn.omcl(bb.voteButtonOmnitureId);
            bb.load(bc)
        }
    }
    function ap() {
        var bb = this;
        this.module = null;
        this.content = null;
        this.more = null;
        this.constructor = function() {
            if (typeof(AOL.responsiveEnabled) === "undefined" || AOL.responsiveEnabled === false) {
                bb.bind()
            }
        };
        this.bind = function() {
            bb.module = aV("#aol-trendingstories");
            contentautorefresh.register(ar, null, bb.module);
            bb.content = bb.module.find(".ctnt");
            bb.more = aV("#trendingstories-ViewMore");
            if (bb.module.length == 0 || bb.content.length == 0 | bb.more.length == 0) {
                return
            }
            bb.more.click(function(bc) {
                omn.omcl("trending-stories_more");
                bb.content.load("ajax.jsp?fullfeed=1&m=trendingstories&p=more",
                function() {
                    bb.more.hide();
                    bb.content.find("[name='aol-facebook-like']").facebookSocial()
                });
                bc.preventDefault()
            })
        };
        bb.constructor()
    }
    function q() {
        var bb = this;
        this.init = function() {
            aV(window).unload(function() {
                bb.resizeTopAd()
            })
        };
        this.resizeTopAd = function() {
            var bc = aV("#topad");
            bc.css({
                width: bc.width(),
                height: bc.height()
            })
        };
        bb.init()
    }
    new q();
    function f() {
        var bj = this;
        var bd = aV("#hnav").attr("showdelay");
        var be = bd;
        var bi = aV("#hnav").attr("showdelayonhover");
        var bh = aV("#hnav").attr("hidedelay");
        var bc = 0;
        var bf = 0;
        var bg = 0;
        var bb = '<div class="hnav_bsc"><div class="hnav_bsl"></div><div class="hnav_bsr"></div><div class="hnav_bsm"></div></div>';
        aV("#aol-hnav a").on("click touchend",
        function(bl) {
            var bk = aV(this);
            var bm = bk.attr("href");
            window.location = bm
        });
        this.hnav_open = function() {
            var bk = this;
            bj.hnav_canceltimer();
            bj.opentimer = setTimeout(function() {
                aV("#aol-header-search-results").hide();
                bj.hnav_close();
                var bp = aV(bk).find("div.hnav_menu");
                bj.menuitem = aV(bp).show();
                if (bp.length > 0) {
                    if (aV("#vdosrchrslt").length) {
                        aV("#vdosrchrslt").find("input:text").blur()
                    }
                    var bl = aV.data(bk, "dropdownSet");
                    if (!bl) {
                        var bq = 0;
                        bp.find("ul").each(function() {
                            var br = aV(this).width() + 20;
                            bq += br;
                            aV(this).width(br);
                            aV(this).css("width", br + "px");
                            aV(this).find("li").css("width", (br - 10) + "px")
                        });
                        bp.css("width", bq + 2);
                        bp.height(bp.find("ul").height());
                        var bn = aV(bp).width();
                        var bm = aV(bk).width();
                        if (bm > bn) {
                            aV(bp).width(bm + 10);
                            aV(bp).find(".hnav_bsc").width(bm + 10)
                        } else {
                            aV(bp).width(bn);
                            aV(bp).find(".hnav_bsc").width(bn)
                        }
                        if (!aV(bp).find(".hnavSideShadow").length) {
                            var bo = aV(bk).width() + 1;
                            aV(bp).append("<div class='hnavSideShadow' style='left: " + bo + "px' />")
                        }
                        if (!aV(bp).find(".hnav_bsc").length) {
                            aV(bp).append(bb)
                        }
                        aV.data(bk, "dropdownSet", true)
                    }
                    aV(bk).addClass("selected");
                    omn.omcl(aV(bp).attr("id") + "_hover")
                }
            },
            bd)
        };
        this.hnav_close = function() {
            if (bj.menuitem) {
                bj.menuitem.hide();
                bj.menuitem.parent().removeClass("selected")
            }
        };
        this.hnav_timer_close = function() {
            bj.hnav_cancel_open_timer();
            bj.closetimer = window.setTimeout(bj.hnav_close, bh)
        };
        this.hnav_canceltimer = function() {
            if (bj.closetimer) {
                window.clearTimeout(bj.closetimer);
                bj.closetimer = null
            }
        };
        this.hnav_cancel_open_timer = function() {
            if (bj.opentimer) {
                window.clearTimeout(bj.opentimer);
                bj.opentimer = null
            }
        };
        this.init = function() {
            aV(document).ready(function() {
                aV("#hnav li.nav-top-level").bind("mouseenter", bj.hnav_open);
                aV("#hnav li.nav-top-level").bind("mouseleave", bj.hnav_timer_close);
                aV("#hnav").bind("mouseenter",
                function() {
                    bd = bi
                });
                aV("#hnav").bind("mouseleave",
                function() {
                    bd = be
                });
                aV("#hnav li.nav-top-level").each(function() {
                    aV.data(this, "dropdownSet", false)
                })
            })
        };
        if (aV("#hnav")) {
            bj.init()
        }
    }
    function al() {
        var bb = this;
        this.counter = null;
        this.disabled = false;
        this.glbvar = null;
        this.glbTimeout = null;
        this.usrTimeout = null;
        this.loadingtxt = null;
        this.refdiv = null;
        this.timeoutHandler = null;
        this.callbacks = new Object();
        this.preRefreshCallbacks = new Object();
        this.init = function() {
            if (aV("#cntTimeout").length != 0) {
                try {
                    bb.glbvar = aV("#cntTimeout").html().split("|");
                    bb.glbTimeout = parseInt(bb.glbvar[0]) * 1000;
                    if (isNaN(bb.glbTimeout)) {
                        bb.glbTimeout = 43200000
                    }
                    bb.usrTimeout = parseInt(bb.glbvar[1]) * 1000;
                    if (isNaN(bb.usrTimeout)) {
                        bb.usrTimeout = 900000
                    }
                    bb.loadingtxt = bb.glbvar[2];
                    if (aV("div.rfrsh").length != 0) {
                        bb.bind()
                    }
                    idleTimeout.disableRefresh = false;
                    idleTimeout.idleTimeout = bb.usrTimeout;
                    idleTimeout.setIdleTimeout()
                } catch(bc) {
                    bb.disabled = true
                }
            } else {
                bb.disabled = true
            }
        };
        this.bind = function() {
            try {
                bb.clearTimer(bb.timeoutHandler)
            } catch(bc) {}
            bb.timeoutHandler = setInterval(function() {
                if (idleTimeout.isIdle) {
                    aV("div.rfrsh").each(function() {
                        a6("ContentAutoRefresh running timeoutHandler...");
                        var bf = utils.findClass(this, /rfrshs-.*/).replace("rfrshs-", "");
                        var bd = utils.findClass(this, /rfrsho-.*/).replace("rfrsho-", "");
                        var be = this;
                        bb.refresh(be, bf, bd)
                    });
                    bb.counter += 1;
                    bb.track();
                    idleTimeout.setIdleTimeout()
                }
            },
            bb.glbTimeout)
        };
        this.clearTimer = function() {
            if (bb.timeoutHandler != null) {
                a6("Clearing timeoutHandler in ContentAutoRefresh");
                clearInterval(bb.timeoutHandler)
            }
        };
        this.refresh = function(be, bh, bc) {
            var bg = aV(be).find("h2:first-child");
            var bd = aV(bg).height() + 7;
            var bf = aV(be).find("div:first-child").height();
            if (aV(bg).parent(".sponsored").length > 0) {
                bd = bd + 20
            }
            if (bc != "true") {
                bf = bf - bd + 10
            } else {
                bf = bf;
                bd = 0
            }
            aV(be).children("div:first-child").append("<div class='loading'><div class='loadingoverlay' style='height:" + bf + "px;margin-top:" + bd + "px'></div><div class='loadingGraphic'><i>" + bb.loadingtxt + "</i></div></div>");
            if (bb.preRefreshCallbacks[bh] != null) {
                bb.preRefreshCallbacks[bh]()
            }
            setTimeout(function() {
                a6("Making ajax refresh request for slot:  " + bh + "   : " + new Date());
                aV(be).load("ajax.jsp?ajax=1&t=refresh&m=" + bh,
                function() {
                    aV(be).find("div.loading").hide("slow");
                    if (typeof bb.callbacks[bh] === "function") {
                        bb.callbacks[bh]()
                    }
                })
            },
            2000)
        };
        this.track = function() {
            omn.omcl("contentautorefresh_full_" + bb.counter)
        };
        this.register = function(bg, bf, bc) {
            var bd = aV(bc).parents(".rfrsh")[0];
            if (typeof(bd) === "undefined") {
                bd = aV(bc).find(".rfrsh")[0]
            }
            if (typeof(bd) != "undefined") {
                var be = utils.findClass(bd, /rfrshs-.*/).replace("rfrshs-", "");
                a6("ContentAutoRefresh Registering slot: " + be);
                bb.callbacks[be] = bg;
                if (bf != null) {
                    bb.preRefreshCallbacks[be] = bf
                }
            }
        };
        bb.init()
    }
    contentautorefresh = new al();
    var af = function() {
        function bc(be) {
            var bd = document.cookie.match("(^|;) ?" + be + "=([^;]*)(;|$)");
            if (bd) {
                return (unescape(bd[2]))
            } else {
                return null
            }
        }
        return {
            showViewMobile: function bb() {
                var bd = bc("mobileview");
                if (bd != null && bd == "desktop") {
                    var be = aV("#mobileweb");
                    if (be != null) {
                        be.css("display", "block");
                        be.css("display", "visibile")
                    }
                }
            }
        }
    } ();
    var V = null;
    S();

    function am() {
        var bb = cookies.get("seg_id");
        var be = false;
        if (segEnabled != null && segEnabled == "true" && segGenerationUrl != null && segGenerationUrl.length > 0) {
            if (bb == null || bb.length == 0) {
                be = true
            } else {
                if (segCookieFormatVersion != null && segCookieFormatVersion.length > 0) {
                    var bd = "_" + segCookieFormatVersion;
                    if (!j(bb, bd)) {
                        be = true
                    }
                }
            }
            if (be) {
                var bc = new Image(1, 1);
                aV("#pgbg").append(bc);
                bc.src = segGenerationUrl
            }
        }
    }

    function j(bc, bb) {
        return bc.indexOf(bb, bc.length - bb.length) !== -1
    }
    function p() {
        if (typeof(sLinkObfuscate) === "undefined" || sLinkObfuscate == "" || sLinkObfuscate == "0") {
            return
        }
        function bc(bf) {
            var bh = "";
            for (var bg = 0; bg < bf; bg++) {
                bh += String.fromCharCode(64 + Math.ceil(Math.random() * 26))
            }
            return bh
        }
        function bd(bg) {
            var bi = bg.attr("href");
            if (bg.length > 0 && bi.length > 1) {
                var bk = bg.attr("protocol");
                var bj = "";
                if (bk.length > 1) {
                    bj = bk + "//"
                }
                bj += bg.attr("hostname") + "";
                var bh = bc(16);
                var bf = bj + "/" + bh + "";
                if (bf.indexOf("http") != 0) {
                    bf = "http://" + bf
                }
                bg.attr("_href_obf", bi);
                return bf
            }
            return ""
        }
        function be(bg) {
            var bf = bg.attr("_href_obf");
            var bh = bg.attr("href");
            if (typeof(bf) != "undefined" && bf != null) {
                return bf
            }
            return bh
        }
        function bb(bf) {
            bf.find("a").not(".hrefobf").each(function() {
                aV(this).addClass("hrefobf");
                var bg = aV(this).attr("_href_obf");
                if (typeof(bg) != "undefined") {
                    return
                }
                var bi = aV(this).attr("href");
                var bj = aV(this).attr("pathname");
                if (bi != null && bi != "" && bi != "#" && bj != "/") {
                    var bh = bd(aV(this));
                    aV(this).attr("href", bh)
                } else {
                    aV(this).attr("_href_obf", bi)
                }
            });
            bf.find("a").live("mousedown",
            function() {
                var bh = aV(this).attr("href");
                if (bh != null && bh != "" && bh != "#") {
                    var bg = be(aV(this));
                    aV(this).attr("href", bg)
                }
            })
        }
        if (aV("#" + sLinkObfuscate).length > 0) {
            bb(aV("#" + sLinkObfuscate))
        }
    }
    function g() {
        var bb = this;
        this.constructor = function() {
            aV("div[id^='dailybuzz_']").each(function() {
                contentautorefresh.register(av, null, aV(this))
            })
        };
        bb.constructor()
    }
    function K() {
        var bb = this;
        this.currentPage = 0;
        this.currentDisplay = null;
        this.pages = new Array();
        this.totalPages = -1;
        this.pageNumSpan = null;
        this.bind = function() {
            aV(".dsfeed_pagination").each(function() {
                var bf = null;
                var bg = new Object();
                bg.pages = new Array();
                bg.currentDisplay = null;
                bg.pageNumSpan = aV(this).find(".pagination").find("span");
                bg.totalPages = 0;
                var be = 0;
                var bc = aV(this).find(".postsPerPage").html();
                var bd = 0;
                aV(this).find(".entry").each(function() {
                    if (bd == bc) {
                        bd = 0;
                        bg.pages[bg.totalPages] = aV(bf);
                        if (bg.totalPages == 0) {
                            bg.currentDisplay = bg.pages[bg.totalPages]
                        }
                        if (bg.totalPages > 0) {
                            aV(bg.pages[bg.totalPages]).hide()
                        }
                        bg.totalPages = bg.totalPages + 1
                    }
                    bd = bd + 1;
                    if (bd == bc) {
                        aV(this).addClass("pageEnd")
                    }
                    if (bd == 1) {
                        aV(this).wrap("<div class='postPage'></div>");
                        bf = aV(this).parent()
                    } else {
                        aV(bf).append(this)
                    }
                });
                if (bd != 0 && bd <= bc) {
                    bg.pages[bg.totalPages] = aV(bf);
                    if (bg.totalPages == 0) {
                        bg.currentDisplay = bg.pages[bg.totalPages]
                    }
                    if (bg.totalPages > 0) {
                        aV(bg.pages[bg.totalPages]).hide()
                    }
                }
                aV(this).find("a.left_arrow").click(function(bi) {
                    var bh = aV(this).attr("name").replace("om_", "");
                    be = be - 1;
                    omn.omcl(bh + "_" + be);
                    if (be < 0) {
                        be = bg.totalPages
                    }
                    aV(bg.currentDisplay).hide();
                    bg.currentDisplay = bg.pages[be];
                    bg.currentDisplay.show();
                    bg.pageNumSpan.html(be + 1);
                    bb.loadImages(bg.currentDisplay);
                    bi.preventDefault()
                });
                aV(this).find("a.right_arrow").click(function(bi) {
                    var bh = aV(this).attr("name").replace("om_", "");
                    be = be + 1;
                    omn.omcl(bh + "_" + be);
                    if (bg.totalPages < be) {
                        be = 0
                    }
                    aV(bg.currentDisplay).hide();
                    bg.currentDisplay = bg.pages[be];
                    bg.currentDisplay.show();
                    bb.loadImages(bg.currentDisplay);
                    bg.pageNumSpan.html(be + 1);
                    bi.preventDefault()
                })
            });
            aV(".dsfeed_more").each(function() {
                var bf = null;
                var bg = new Object();
                bg.pages = new Array();
                var be = 0;
                var bi = aV(this).find(".more");
                var bh = aV(this).find(".hideMe");
                bg.totalPages = 0;
                var bc = aV(this).find(".postsPerPage").html();
                var bd = 0;
                aV(this).find(".entry").each(function() {
                    if (bd == bc) {
                        bd = 0;
                        bg.pages[bg.totalPages] = aV(bf);
                        if (bg.totalPages > 0) {
                            aV(bg.pages[bg.totalPages]).hide()
                        }
                        bg.totalPages = bg.totalPages + 1
                    }
                    bd = bd + 1;
                    if (bd == bc) {
                        aV(this).addClass("pageEnd")
                    }
                    if (bd == 1) {
                        aV(this).wrap("<div class='postPage'></div>");
                        bf = aV(this).parent()
                    } else {
                        aV(bf).append(this)
                    }
                });
                if (bd != 0 && bd <= bc) {
                    bg.pages[bg.totalPages] = aV(bf);
                    if (bg.totalPages == 0) {
                        bg.currentDisplay = bg.pages[bg.totalPages]
                    }
                    if (bg.totalPages > 0) {
                        aV(bg.pages[bg.totalPages]).hide()
                    }
                }
                aV(bi).click(function(bl) {
                    var bk = aV(this).attr("name").replace("om_", "");
                    var bj = bg.pages[be];
                    be = be + 1;
                    omn.omcl(bk + "_" + be);
                    var bm = bg.pages[be];
                    bm.show();
                    bb.loadImages(bm);
                    bl.preventDefault();
                    if (bg.totalPages <= be) {
                        aV(bi).hide();
                        aV(bh).hide()
                    }
                    aV(bj).find(".pageEnd").removeClass("pageEnd")
                })
            })
        };
        this.loadImages = function(bc) {
            aV(bc).find("img").each(function() {
                if (aV(this).attr("__src")) {
                    aV(this).attr("src", aV(this).attr("__src"));
                    aV(this).attr("__src", 0)
                }
            })
        };
        bb.bind()
    }
    dsPagination = new K();
    function W() {
        var bb = this;
        this.footer = null;
        this.height = null;
        this.bind = function() {
            bb.footer = aV("#aol-footer")
        };
        this.fix = function() {
            if (bb.footer.length > 0) {
                bb.footer.addClass("fixed")
            }
        };
        this.unfix = function() {
            if (bb.footer.length > 0) {
                bb.footer.removeClass("fixed")
            }
        };
        this.getHeight = function() {
            if (bb.footer.length > 0) {
                return bb.footer.height()
            }
            return 0
        };
        bb.bind()
    }
    aolfooter = new W();
    function I() {
        var bb = this;
        this.footerFollow = null;
        this.bind = function() {
            bb.footerFollow = aV("#follow-aol-footer");
            bb.setupTooltips();
            bb.attachEventHandlers()
        };
        bb.showTooltip = function(bd) {
            var bc = aV(bd).parent("a");
            if (bc.next("div").hasClass("tooltip")) {
                bc.next(".tooltip").css("display", "inline-block")
            }
        };
        bb.hideTooltip = function(bd) {
            var bc = aV(bd).parent();
            if (bc.next("div").hasClass("tooltip")) {
                bc.next(".tooltip").css("display", "none")
            }
        };
        bb.attachEventHandlers = function() {
            aV("#follow-aol-footer").find("a .sprite.icon-").hover(function() {
                bb.showTooltip(this)
            },
            function() {
                bb.hideTooltip(this)
            })
        };
        bb.setupTooltips = function() {
            aV("#follow-aol-footer a").each(function() {
                var be = aV(this).next(".tooltip");
                var bc = be.find(".tooltip-arrow");
                var bf = ((be.width() - aV(this).width()) / 2) + 5;
                var bd = ((be.width() - bc.width()) / 2) + 5;
                be.css("left", -bf + "px");
                bc.css("left", bd + "px")
            })
        };
        bb.bind()
    }
    I();
    function C() {
        var bb = this;
        this.module = null;
        this.moreContent = null;
        this.moreContentEnd = null;
        this.begin = 0;
        this.incnum = 10;
        this.max = 0;
        this.end = 9;
        this.total = 0;
        this.bind = function() {
            bb.module = aV("#continuous-scroll");
            if (bb.module.length < 1) {
                return false
            }
            bb.moreContent = bb.module.find(".more-content");
            bb.moreContentEnd = bb.module.find(".more-content-end");
            this.total = aV(".dnAJXtotal").html();
            bb.incnum = parseInt(aV(".dnAJXinc").html());
            if (bb.begin != "") {
                bb.begin = parseInt(aV(".dnAJXbegin").html())
            }
            if (bb.moreContent.length < 0 || bb.moreContentEnd.length < 0) {
                return false
            }
            aV("#aol-footer").addClass("conts");
            var bc = 0 - aolfooter.getHeight();
            bb.moreContentEnd.bind("scrollin", {
                distance: bc
            },
            bb.loadMore);
            bb.module.bind("scrollin", {
                distance: bc
            },
            function() {
                aolfooter.fix()
            });
            bb.module.bind("scrollout", {
                distance: bc
            },
            function() {
                aolfooter.unfix()
            });
            return true
        };
        this.loadMore = function() {
            if (bb.end >= bb.total) {
                bb.end = bb.total
            }
            if (bb.begin >= bb.end) {
                aV(".more-content-end").css("background", "none")
            }
            if (bb.begin <= bb.end) {
                aV.get("ajax.jsp?m=continuousfeaturedblogs&p=blogs&slot=continuous-featured-blogs&begin=" + bb.begin + "&end=" + bb.end + "&ajax=1",
                function(bc) {
                    bb.moreContentEnd.before(bc);
                    parseInt(bb.begin += bb.incnum);
                    parseInt(bb.end = bb.begin + bb.incnum - 1)
                },
                "html")
            }
        };
        bb.bind()
    }
    C();
    pageLogo = new A();
    themec = new ae();
    aw = new aB();
    quicknav = new Quicknav();
    function ab() {
        newsmodules = new ba();
        newsFeedModules = new o()
    }
    ab();
    function aW() {
        new a1()
    }
    aW();
    function ak() {
        new f()
    }
    ak();
    function av() {
        new g()
    }
    av();
    function ar() {
        new ap()
    }
    ar();
    function aZ() {
        new aj()
    }
    aZ();
    function Y() {
        localmodule = new N()
    }
    Y();
    function aT() {
        amberAlertsModule = new ah();
        amberAlertsModule.init()
    }
    aT();
    lifestreammodule = new az();
    newslettermodule = new aU();
    dailyPollModule = new R();
    dailyPollModule.pollDivId = "#poll";
    dailyPollModule.pollDivWrapperId = "#poll-wrapper";
    dailyPollModule.voteButtonOmnitureId = "poll_votebutton";
    dailyPollModule.ajaxQueryParams = "m=poll&p=poll&slot=poll";
    dailyPollModule.noOptionFeaturetip = "dailypoll_no-option_error";
    dailyPollModule.noOptionFeaturetipSlot = "featuretip-poll-no-option-error";
    dailyPollModule.systemErrorFeaturetip = "dailypoll-system-error";
    dailyPollModule.systemErrorFeaturetipSlot = "featuretip-poll-system-error";
    dailyPollModule.systemErrorVotingOut = "poll-voting-out-error";
    dailyPollModule.systemErrorVotingOutSlot = "featuretip-poll-voting-out-error";
    dailyPollModule.bind();
    sharedPollModule = new R();
    sharedPollModule.pollDivId = "#poll-linkback";
    sharedPollModule.pollDivWrapperId = "#poll-linkback-wrapper";
    sharedPollModule.voteButtonOmnitureId = "poll_votebutton";
    sharedPollModule.ajaxQueryParams = "m=poll&p=poll-linkback&slot=poll-linkback";
    sharedPollModule.noOptionFeaturetip = "sharedpoll_no-option_error";
    sharedPollModule.noOptionFeaturetipSlot = "featuretip-shared-poll-no-option-error";
    sharedPollModule.systemErrorFeaturetip = "sharedpoll-system-error";
    sharedPollModule.systemErrorFeaturetipSlot = "featuretip-shared-poll-system-error";
    sharedPollModule.systemErrorVotingOut = "shared-poll-voting-out-error";
    sharedPollModule.systemErrorVotingOutSlot = "featuretip-shared-poll-voting-out-error";
    sharedPollModule.bind();
    function H() {
        var bb = this;
        var bc = false;
        this.likeCallback = function(bd) {
            if (!bc) {
                bc = true;
                FB.Event.subscribe("edge.create",
                function(be, bf) {
                    bb.track(bf)
                })
            }
        };
        this.track = function(bd) {
            var bf = aV(bd.dom).parents(".aol-faux-facebook-like-init");
            var be = bf.attr("data-id");
            bN.extractIds(bf[0]);
            bN.ping("fblike");
            if (be.indexOf("om_") == 0) {
                omn.omcl("fblike_" + be.substring(3))
            }
        }
    }
    portal_fbook = new H();
    aV.facebookSocial({
        options: {
            appId: 183146218394780
        },
        callback: function() {
            var bb = this.elem;
            portal_fbook.likeCallback(bb)
        }
    });
    aV("[name='aol-facebook-like']").facebookSocial();
    function v() {
        var bb = this;
        this.twFollow = function() {
            if (typeof(twttr) != "undefined") {
                twttr.events.bind("click",
                function(bc) {
                    bb.track(bc)
                })
            }
        };
        this.track = function(bc) {
            var be = aV(bc.target).parents(".aol-twitter-like");
            var bd = be.attr("id");
            bN.extractIds(be[0]);
            bN.ping("twlike");
            if (bd.indexOf("om_") == 0) {
                omn.omcl("twlike_" + bd.substring(3))
            }
        }
    }
    portal_twitter = new v();
    M.ready(function() {
        portal_twitter.twFollow()
    });

    aV.fn.swapWith = function(bb) {
        return this.each(function() {
            var bc = aV(bb).clone(true);
            var bd = aV(this).clone(true);
            aV(bb).replaceWith(bd);
            aV(this).replaceWith(bc)
        })
    };
    aV(".blog-v2 #featblogposts .entry").each(function() {
        var bb = aV(this).find("div.about");
        var bc = bb.find("p.vertical");
        var bd = bb.find("h3.headline");
        var bf = aV(this).find("p.author");
        var be = aV(this).find("p.about");
        var bg = aV(this).find("p.read a.read");
        if (bc.length > 0 && bg.length > 0) {
            bg.replaceWith(bc)
        }
        if (bd.length > 0 && bf.length > 0) {
            bd.swapWith(bf)
        }
        if (be.length > 0 && bb.length > 0) {
            be.appendTo(bb)
        }
    });
    function G(bc) {
        var bb = this;
        this.mod = aV(bc);
        this.carousel = null;
        this.jcarousel = null;
        this.paginate = null;
        this.pages = null;
        this.bind = function() {
            var be = bb.mod.attr("id");
            bb.carousel = bb.mod.find("ul");
            bb.paginate = bb.mod.find(".paginate");
            bb.pages = bb.paginate.find("a");
            bb.carousel.find("li").removeClass("dn");
            bb.carousel.jcarousel({
                buttonPrevHTML: null,
                buttonNextHTML: null,
                visible: 1,
                scroll: 1,
                easing: "swing",
                animation: 400,
                wrap: "both",
                initCallback: function(bf) {
                    aV("#" + be + "next").bind("click",
                    function(bg) {
                        omn.omcl(be + "_next");
                        bf.next();
                        bg.preventDefault()
                    });
                    aV("#" + be + "prev").bind("click",
                    function(bg) {
                        omn.omcl(be + "_prev");
                        bf.prev();
                        bg.preventDefault()
                    });
                    bb.carousel.find("li").on("swipeleft",
                    function(bg) {
                        bf.next();
                        omn.omcl(be + "_next")
                    });
                    bb.carousel.find("li").on("swiperight",
                    function(bg) {
                        bf.prev();
                        omn.omcl(be + "_prev")
                    })
                },
                itemFirstInCallback: {
                    onBeforeAnimation: function(bj, bf, bh, bi) {
                        var bg = aV(bf).find("img");
                        var bk = bg.attr("class");
                        if (bk != "") {
                            bg.attr("src", bk);
                            bg.attr("class", "")
                        }
                        bb.pages.removeClass("sel");
                        bb.paginate.find(".page" + bh).addClass("sel")
                    }
                }
            });
            bb.jcarousel = bb.carousel.data("jcarousel");
            var bd = 1;
            bb.pages.each(function() {
                aV(this).data("page", bd++);
                aV(this).click(function(bg) {
                    var bf = aV(this).data("page");
                    omn.omcl(be + "_page" + bf);
                    bb.jcarousel.scroll(aV.jcarousel.intval(bf));
                    bg.preventDefault()
                })
            })
        };
        bb.bind()
    }
    aV("div.slideshow").each(function() {
        new G(this)
    });
    function a8() {
        var bb = this;
        this.module = null;
        this.content = null;
        this.tabs = null;
        this.loader = null;
        this.bind = function() {
            bb.module = aV("div.headline-wire");
            if (bb.module.length < 1) {
                return
            }
            bb.content = bb.module.find("div.content");
            bb.tabs = bb.module.find("ul.tabs li a");
            bb.loader = bb.module.find("div.loader");
            if (bb.content.length < 1 || bb.tabs.length < 1) {
                return
            }
            bb.tabs.each(function() {
                aV(this).click(function(bd) {
                    var bc = aV(this);
                    var be = utils.findClass(bc[0], /hwtab-.*/).replace("hwtab-", "");
                    bb.loading();
                    aV.get("ajax.jsp?m=headlinewire&p=stories&slot=" + be,
                    function(bf) {
                        bb.content.html(bf);
                        bb.stopLoading();
                        bb.tabs.removeClass("sel");
                        bc.addClass("sel");
                        if (typeof(bN) != "undefined") {
                            bN.extractIds(bb.content.children("div")[0]);
                            bN.ping("headline-wire")
                        }
                    },
                    "html");
                    omn.omcl("headline-wire_tab_" + be);
                    bd.preventDefault()
                })
            })
        };
        this.loading = function() {
            bb.loader.addClass("loading")
        };
        this.stopLoading = function() {
            bb.loader.removeClass("loading")
        };
        this.bind()
    }
    a8();
    function aC() {
        var bb = this;
        this.ul = null;
        this.lis = null;
        this.selectedLi = null;
        this.upnextbanner = null;
        this.maxDisplay = 1;
        this.debug = function(bd) {
            try {
                console.log(bd)
            } catch(bc) {}
        };
        this.constructor = function() {
            bb.ul = aV("ul.playlistPlayer");
            if (bb.ul.length) {
                bb.ul.bind("videoStart",
                function(be, bf, bd) {
                    bb.selectVideoById(bf)
                });
                bb.lis = bb.ul.find("li.vid");
                bb.lis.each(function() {
                    var bd = aV(this).attr("id").split("vod")[1];
                    aV(this).data("videoId", bd)
                });
                bb.upnextbanner = bb.ul.find("img.upnextBanner");
                var bc = utils.findClass(bb.ul[0], /max-.*/).replace("max-", "");
                if (bc != null && bc != "") {
                    bb.maxDisplay = parseInt(bc)
                }
            }
        };
        this.selectVideoById = function(bg) {
            bb.clearSelection();
            bb.selectedLi = bb.ul.find("li#vod" + bg);
            bb.lis = bb.ul.find("li.vid");
            var bf = bb.lis.length;
            for (var bd = 0; bd < bf; bd++) {
                var bc = bb.lis.eq(bd);
                var be = bc.attr("id").split("vod")[1];
                bb.ul.append(bc);
                if (be == bg) {
                    break
                }
            }
            bb.ul.find("li:nth-child(1)").addClass("selected");
            bb.ul.find("li:nth-child(1) div.vidItemDetails").append(bb.upnextbanner);
            if (bb.maxDisplay > 0) {
                bb.updateDisplay()
            }
        };
        this.updateDisplay = function() {
            var bc = 0;
            bb.ul.find("li.vid").each(function() {
                bc++;
                if (bc <= bb.maxDisplay) {
                    aV(this).removeClass("hide");
                    var bd = aV(this).find("img.vidThumb")[0];
                    var be = aV(bd).attr("src");
                    if (be.length < 2) {
                        var bf = aV(bd).attr("__src");
                        if (typeof(bf) != "undefined" && bf.length > 3) {
                            aV(bd).attr("src", bf);
                            aV(bd).attr("__src", "")
                        }
                    }
                } else {
                    aV(this).addClass("hide")
                }
            })
        };
        this.clearSelection = function() {
            bb.lis.each(function() {
                aV(this).removeClass("selected")
            })
        };
        bb.constructor()
    }
    var a = new aC();
    function s(bc) {
        var bb = this;
        this.el = bc;
        this.playlistID = null;
        this.ul = null;
        this.wrapper = null;
        this.errMsg = null;
        this.loading = null;
        this.vid = null;
        this.slot = null;
        this.bind = function(bd) {
            bb.ul = bb.el.find("ul.relatedVids");
            if (bb.ul.length < 1) {
                if (bd != "COD") {
                    cod.register(bb.bind)
                }
                return false
            }
            bb.wrapper = bb.el;
            bb.vid = bb.wrapper.attr("relVidId");
            bb.errMsg = bb.el.find(".relVidErr");
            bb.loading = bb.el.find(".relVidLoadingGraphic");
            bb.slot = utils.findClass(bb.wrapper[0], /slot-.*/).replace("slot-", "");
            bb.ul.bind("videoMetaData",
            function(bf, bg, be) {
                bb.loadNewRelatedVideos(bg, be)
            })
        };
        this.loadNewRelatedVideos = function(bf, be) {
            if (bf && bb.vid != bf) {
                bb.el.find(".relatedVids li").hide();
                bb.errMsg.hide();
                bb.loading.show();
                var bd = bb.wrapper.parent();
                aV.get("ajax.jsp?m=video5min&p=relatedvideos&slot=" + bb.slot + "&vidrel_id=" + bf + "&vidrel_studio=" + be.videoOwner,
                function(bg) {
                    if (bg == null) {
                        bb.loading.hide();
                        bb.errMsg.show()
                    } else {
                        bd.empty().html(bg);
                        bb.el = bd.find("div.relatedVidWrapper");
                        bb.bind()
                    }
                },
                "html")
            }
        };
        bb.bind()
    }
    function aO() {
        aV("div.relatedVidWrapper").each(function() {
            new s(aV(this))
        })
    }
    aO();
    function ai() {
        var bb = this;
        this.mapType = "i";
        this.urlBase = "http://www.mapquestapi.com";
        this.apiKey = "Amjtd%7Cluu22q6zn9%2Crs%3Do5-lz7a0";
        this.wrapper = null;
        this.iframe = null;
        this.zoom = 11;
        this.debug = function(bd) {
            try {
                console.log("LocalMapquest: " + bd)
            } catch(bc) {}
        };
        this.bind = function() {
            bb.wrapper = aV("#local-mapquest-wrapper");
            aV("body").unbind("locChange");
            if (bb.wrapper.length > 0) {
                aV("body").bind("locChange",
                function(be, bd) {
                    bb.updateLocation(bd)
                });
                var bc = utils.findClass(bb.wrapper[0], /zoom-.*/).replace("zoom-", "");
                if (bc != "" && bc != " ") {
                    bb.zoom = bc
                }
                bb.iframe = aV("#locMQIFrame")
            }
            aV(document).on("toggle-local-mapquest",
            function(be, bd) {
                if (bd.toggle_state && bd.toggle_state == 2) {
                    bb.iframe.attr("src", bb.iframe.attr("src"))
                }
                be.stopImmediatePropagation()
            })
        };
        this.init = function() {
            bb.bind();
            cod.register(bb.bind)
        };
        this.updateLocation = function(bg) {
            bg = unescape(bg);
            bb.wrapper.removeClass("dn");
            var bf = bb.iframe.attr("src");
            if (bf.length == 0) {
                bf = aV("input#locMQIFrameSrc").val()
            }
            var bd = "";
            if (bf.indexOf("&q=") > -1) {
                var be = bf.split("&");
                for (var bc = 0; bc < be.length; bc++) {
                    if (be[bc].indexOf("q=") == 0) {
                        be[bc] = "q=" + bg
                    } else {
                        if (be[bc].indexOf("zoom=") == 0) {
                            be[bc] = "zoom=" + bb.zoom
                        }
                    }
                }
                bd = be.join("&")
            } else {
                bd = bf + "&q=" + bg
            }
            bb.iframe.attr("src", bd);
            bb.updateTitle(bd)
        };
        this.updateTitle = function(bd) {
            var bc = aV("#local-mapquest-wrapper h2 a");
            if (bc.length && bc.attr("href") != "") {
                bc.attr("href", bd.split("embed").join(""))
            }
        };
        bb.init()
    }

    function a5() {
        if (aV.browser.msie) {
            aV("a.makeHomepage").click(function() {
                aV(".usrMnuLst").hide();
                aV(".userOptions").removeClass("opn");
                var bd = location.href;
                var bc = utils.findClass(aV(this)[0], /url-.*/).replace("url-", "");
                if (bc != "") {
                    bd = bc
                }
                var bb = utils.findClass(aV(this)[0], /om-.*/).replace("om-", "");
                if (bb != "") {
                    omn.omcl(bb)
                } else {
                    omn.omcl("iemtmhpdialog")
                }
                document.body.style.behavior = "url(#default#homepage)";
                document.body.setHomePage(bd);
                return false
            })
        }
    }
    a5();
    function a0() {
        var bb = this;
        this.$curtain = aV("div#scrollcurtain");
        if (bb.$curtain.length) {
            if (aV("body").length) {
                aV("body").append(bb.$curtain)
            }
            this.showCanvas = false;
            this.addToptriggerHeight = false;
            this.winHeight = aV(window).height();
            this.position = "top";
            this.toptrigger = "";
            this.toptriggerExtra = 0;
            this.bottomtrigger = "";
            this.mailCountText = "";
            var bi = utils.findClass(bb.$curtain[0], /pos-.*/).replace("pos-", "");
            var bf = utils.findClass(bb.$curtain[0], /tt-.*/).replace("tt-", "");
            var bh = utils.findClass(bb.$curtain[0], /tb-.*/).replace("tb-", "");
            var be = utils.findClass(bb.$curtain[0], /mct-.*/).replace("mct-", "");
            var bg = utils.findClass(bb.$curtain[0], /ttx-.*/).replace("ttx-", "");
            bb.showCanvas = Boolean(utils.findClass(bb.$curtain[0], /cnvs-.*/).replace("cnvs-", ""));
            bb.addToptriggerHeight = Boolean(utils.findClass(bb.$curtain[0], /tth-.*/).replace("tth-", ""));
            if (bi != null && bi.length > 0) {
                bb.position = bi
            }
            if (bf != null && bf.length > 0) {
                bb.toptrigger = bf
            }
            if (bh != null && bh.length > 0) {
                bb.bottomtrigger = bh
            }
            if (be != null && be.length > 0) {
                bb.mailCountText = be
            }
            if (bg != null && bg.length > 0 && !isNaN(parseFloat(bg))) {
                bb.toptriggerExtra = parseFloat(bg)
            }
            if (bb.position == "bottom") {
                bb.showCanvas = false;
                bb.$curtain.addClass("curtainbottom");
                bb.$curtain.addClass("canvasless")
            } else {
                bb.$curtain.addClass("curtaintop");
                if (bb.showCanvas) {
                    var bc = aV("#pgbg").length ? aV("#pgbg").css("background-image") : "";
                    bb.$curtain.css("background-image", bc)
                } else {
                    bb.$curtain.addClass("canvasless")
                }
            }
            aV("#scrollcurtain-quicknav").find("a").attr("title", "");
            aV("#scrollcurtain-quicknav").find("a.disabled").removeAttr("href");
            aV("#scrollcurtain-quicknav").find("#mailpreview.auth-1").next(".tooltip").remove();
            this.searchDropdownSized = false;
            this.setDropdownSize = function() {
                if (aV("#aol-scrollcurtain-search-results").length) {
                    var bj = aV("#aol-scrollcurtain-search-results").outerWidth() - aV("#aol-scrollcurtain-search-results").width();
                    if (bj < 0) {
                        bj = 0
                    }
                    aV("#aol-scrollcurtain-search-results").width(aV("#aol-scrollcurtain-query").outerWidth() - bj);
                    aV(".IE7 #aol-scrollcurtain-search-results").width(aV("#aol-scrollcurtain-query").outerWidth() - bj - 4)
                }
                bb.searchDropdownSized = true
            };
            this.tracked = false;
            this.track = function() {
                try {
                    omn.omcl("scrollcurtain-show");
                    if (typeof(bN) != "undefined") {
                        bN.extractIds(bb.$curtain[0]);
                        bN.ping("scrollcurtain")
                    }
                } catch(bj) {}
                bb.tracked = true
            };
            try {
                aV("#aol-scrollcurtain-query").attr("value", "");
                aV("#aol-scrollcurtain-query").keypress(function(bk) {
                    bk = (bk) ? bk: event;
                    var bj = (bk.charCode) ? bk.charCode: ((bk.which) ? bk.which: bk.keyCode);
                    if (bj == 13) {
                        if (aV("#aol-scrollcurtain-query").attr("value") == "") {
                            aV("#aol-scrollcurtain-query").attr("value", aV("#scrollcurtain-ghostText").attr("value"))
                        }
                        omn.omo("scrollcurtain-searchenter");
                        aV("#aol-scrollcurtain-search-button").attr("onclick", "")
                    }
                });
                aV("#aol-scrollcurtain-search").globalSearchBox({
                    sclass: "scrollcurtain",
                    ghostText: aV("#scrollcurtain-ghostText").val(),
                    ghostTextSearch: aV("#scrollcurtain-ghostTextSearch").val(),
                    initFocus: false,
                    preserveGhostText: aV("#scrollcurtain-preserveGhostText").val(),
                    apiIt: aV("#scrollcurtain-apiIt").val(),
                    apiDictionary: aV("#scrollcurtain-apiDictionary").val(),
                    apiUrl: aV("#scrollcurtain-apiUrl").val(),
                    apiCount: aV("#scrollcurtain-apiCount").val(),
                    apiQueryParam: aV("#scrollcurtain-apiQueryParam").val(),
                    enableBestMatch: aV("#scrollcurtain-enableBestMatch").val(),
                    bestMatchQuery: aV("#scrollcurtain-bestMatchQuery").val(),
                    bestMatchAction: aV("#scrollcurtain-bestMatchAction").val(),
                    bestMatchPrefix: aV("#scrollcurtain-bestMatchPrefix").val()
                })
            } catch(bd) {}
            aV(window).bind("scroll",
            function() {
                var bk = 0;
                if (aV(bb.toptrigger).length) {
                    bk = aV(bb.toptrigger).offset().top;
                    if (bb.addToptriggerHeight) {
                        bk += aV(bb.toptrigger).height()
                    }
                }
                bk += bb.toptriggerExtra;
                var bl = aV(bb.bottomtrigger).length ? aV(bb.bottomtrigger).offset().top: aV(document).height();
                var bm = aV(this).scrollTop();
                aV("#aol-scrollcurtain-search-results").hide();
                if (bb.$curtain.is(":hidden") && bm >= bk && bm <= (bl - bb.winHeight)) {
                    bb.$curtain.show();
                    var bj = aV("#pgbg").length ? aV("#pgbg").css("background-image") : "";
                    if (bb.showCanvas && bj != bb.$curtain.css("background-image")) {
                        bb.$curtain.css("background-image", bj)
                    }
                    if (!bb.searchDropdownSized) {
                        bb.setDropdownSize()
                    }
                    if (aV("#aol-header-search-results").length) {
                        aV("#aol-header-search-results").hide()
                    }
                    if (!bb.tracked) {
                        bb.track()
                    }
                } else {
                    if ((bm < bk || bm > (bl - bb.winHeight)) && bb.$curtain.is(":visible")) {
                        if (aV("#aol-scrollcurtain-search-results").length) {
                            aV("#aol-scrollcurtain-search-results").hide()
                        }
                        bb.$curtain.hide()
                    }
                }
            })
        }
    }
    function X() {
        var bb = this;
        bb.defaultItem = null;
        bb.defaultItemTitle = null;
        bb.topItem = null;
        bb.subMenuItem = null;
        bb.openTimer = null;
        bb.closeTimer = null;
        bb.openDelay = -1;
        bb.closeDelay = 400;
        bb.activeItemId = null;
        bb.subMenuActive = false;
        bb.topHoverArea = "text";
        bb.darkOpacity = -1;
        this.init = function() {
            if (aV("#ghnav1").length) {
                bb.autoSelectFirstItem();
                aV("#ghnav1 ul.topLevel").not("ul.subNav").find("li:last-child").addClass("last");
                if (aV("#ghnavExtras").length) {
                    var bc = aV("#ghnavExtras");
                    var bd = utils.findClass(bc[0], /showDelay-.*/).replace("showDelay-", "");
                    var bf = utils.findClass(bc[0], /hideDelay-.*/).replace("hideDelay-", "");
                    var be = utils.findClass(bc[0], /hoverArea-.*/).replace("hoverArea-", "");
                    var bg = utils.findClass(bc[0], /darkOpacity-.*/).replace("darkOpacity-", "");
                    if (be != null && be != "") {
                        bb.topHoverArea = be
                    }
                    if (bf != null && bf != "") {
                        bb.closeDelay = parseInt(bf)
                    }
                    if (bd != null && bd != "") {
                        bb.openDelay = parseInt(bd)
                    }
                    if (bg != null && bg != "") {
                        bb.darkOpacity = parseFloat(bg)
                    }
                }
                if (isNaN(bb.openDelay)) {
                    bb.openDelay = -1
                }
                if (isNaN(bb.closeDelay)) {
                    bb.closeDelay = -1
                }
                if (!isNaN(bb.darkOpacity) && bb.darkOpacity > 0) {
                    aV("#aol-hnav div.format-dark div.ghnav-bg-top").css("opacity", bb.darkOpacity)
                }
                if (bb.topHoverArea.toLowerCase() == "block") {
                    aV("#ghnav1 div.topTitle").bind("mouseenter",
                    function() {
                        bb.cancelCloseTimer();
                        bb.showSubMenu(aV(this).find("a.itemLink"))
                    })
                } else {
                    aV("#ghnav1 a.itemLink").bind("mouseenter",
                    function() {
                        bb.cancelCloseTimer();
                        bb.showSubMenu(this)
                    })
                }
                aV("#ghnav1 ul.subNav").bind("mouseenter",
                function() {
                    bb.cancelCloseTimer();
                    bb.cancelOpenTimer()
                });
                aV(".hnavTrendingNow").bind("mouseenter",
                function() {
                    bb.cancelCloseTimer();
                    bb.cancelOpenTimer()
                });
                aV(".hnavTrendingNow").bind("mouseleave",
                function() {
                    bb.closeMenuHandler()
                });
                if (! (aV.browser.msie && aV.browser.version <= 7)) {
                    aV("#ghnav1 ul.topLevel").bind("mouseleave",
                    function() {
                        bb.closeMenuHandler()
                    });
                    aV("#quick-nav-hnav").bind("mouseenter",
                    function() {
                        bb.closeMenuHandler()
                    })
                } else {
                    aV("#aol-hnav").bind("mouseleave",
                    function() {
                        bb.closeMenuHandler()
                    })
                }
                if (aV.browser.msie && (aV.browser.version == 6 || aV.browser.version == 7)) {
                    aV("#ghnav1 span.ghnavarrow").each(function() {
                        var bh = aV(this).parent().position().left + aV(this).parent().width() / 2 - 9;
                        aV(this).css("left", bh)
                    })
                }
                if (aV.browser.msie && aV.browser.version == 6) {
                    aV("#ghnav1").prepend(aV("#ghnav1 div.ghnav-bg-sub"));
                    aV("#ghnav1").prepend(aV("#ghnav1 div.ghnav-bg-top"));
                    aV("#ghnav1 div.ghnav-bg-top").css("background-color", "transparent")
                }
            }
        };
        this.closeMenuHandler = function() {
            if (bb.closeDelay >= 1) {
                bb.closeTimer = setTimeout(function() {
                    bb.hideSubMenu()
                },
                bb.closeDelay)
            } else {
                bb.hideSubMenu()
            }
        };
        this.showSubMenu = function(bc) {
            aV("#aol-header-search-results").hide();
            bb.cancelCloseTimer();
            bb.hideSubMenu();
            bb.defaultItem.removeClass("topNavSelected");
            aV(bc).parent().parent().addClass("topNavSelected");
            bb.subMenuActive = true;
            if (aV(".announcement-news-bar").length && AOL.pageType.length > 0 && bb.defaultItem.hasClass("topNavSelected")) {
                bb.defaultItem.find("ul.subNav").show()
            }
            if (aV(".hnavTrendingNow").length !== 0) {
                aV(".hnavTrendingNow").hide();
                var bd = aV(bc).attr("data-pos");
                if (aV(".hnavTrendingNow" + bd).length !== 0) {
                    bb.hideSubMenu();
                    bb.defaultItem.removeClass("topNavSelected");
                    aV(bc).parent().parent().addClass("topNavSelected");
                    aV(".hnavTrendingNow").hide();
                    aV(".hnavTrendingNow" + bd).show()
                }
            }
            aV("#ghnav1").trigger("hnavSubMenuShown");
            aV("#ghnav1").css({
                height: "70px"
            });
            aV(".ghnav-bg-sub ").show();
            aV(".ghnavarrow").css({
                display: "block"
            })
        };
        this.hideSubMenu = function() {
            bb.cancelOpenTimer();
            aV("#ghnav1 li.topLevel").removeClass("topNavSelected");
            bb.defaultItem.addClass("topNavSelected");
            bb.subMenuActive = false;
            if (aV(".hnavTrendingNow").length !== 0) {
                if (aV(".announcement-news-bar").length === 0) {
                    var bc = aV(bb.defaultItem).find("a.itemLink");
                    var bd = bc.attr("data-pos");
                    aV(".hnavTrendingNow").hide();
                    if (aV(".hnavTrendingNow" + bd).length !== 0) {
                        aV(".hnavTrendingNow" + bd).show();
                        aV("#ghnav1 li.topLevel").first().find(".subNav").hide()
                    }
                } else {
                    aV("#ghnav1 li.topLevel").first().find(".subNav").hide();
                    aV(".hnavTrendingNow").hide();
                    aV(".ghnav-bg-sub ").hide();
                    aV(".ghnavarrow").hide();
                    aV("#ghnav1").css({
                        height: "auto"
                    });
                    if (AOL.pageType.length > 0) {
                        bb.defaultItem.find("ul.subNav").hide()
                    }
                }
            }
            aV("#ghnav1").trigger("hnavSubMenuHidden")
        };
        this.autoSelectFirstItem = function() {
            if (typeof hnavDefaultHighlightLinkedText !== "undefined" && hnavDefaultHighlightLinkedText.length > 0 && aV("#ghnav1 #ghnav-" + this.scrubId(hnavDefaultHighlightLinkedText)).length > 0) {
                bb.defaultItem = aV("#ghnav1 #ghnav-" + this.scrubId(hnavDefaultHighlightLinkedText)).parent().parent()
            } else {
                bb.defaultItem = aV("#ghnav1 li.first")
            }
            if (bb.defaultItem !== null && bb.defaultItem.length) {
                bb.defaultItem.addClass("topNavSelected");
                bb.defaultItem.addClass("defaultSelected");
                if (aV(".hnavTrendingNow").length !== 0 && aV(".announcement-news-bar").length !== 0) {
                    aV("#ghnav1 li.topLevel").first().find(".subNav").hide();
                    aV(".hnavTrendingNow").hide();
                    aV(".ghnav-bg-sub ").hide();
                    aV(".ghnavarrow").hide();
                    aV("#ghnav1").css({
                        height: "auto"
                    })
                }
                aV(".hnavTrendingNow").hide();
                bb.hideSubMenu()
            }
        };
        this.cancelCloseTimer = function() {
            if (bb.closeTimer) {
                window.clearTimeout(bb.closeTimer);
                bb.closeTimer = null
            }
        };
        this.cancelOpenTimer = function() {
            if (bb.openTimer) {
                window.clearTimeout(bb.openTimer);
                bb.openTimer = null
            }
        };
        this.scrubId = function(bc) {
            return bc.replace(/(:|\.|\[|\])/g, "\\$1")
        };
        init()
    }
    X();
    aV(U).ready(function() {
        a0()
    });
    aV(document).ready(function() {
        if (aV.browser.msie && aV("html").hasClass("IE7")) {
            aV(".next.article-arrow-wrapper").hover(function() {
                aV(".article-arrow.next img").css({
                    left: "-2px",
                    position: "relative",
                    top: "-9485px"
                })
            },
            function() {
                aV(".article-arrow.next img").css({
                    left: "-4px",
                    position: "relative",
                    top: "-9414px"
                })
            });
            aV(".previous.article-arrow-wrapper").hover(function() {
                aV(".article-arrow.previous img").css({
                    left: "0px",
                    position: "relative",
                    top: "-9321px"
                })
            },
            function() {
                aV(".article-arrow.previous img").css({
                    left: "1px",
                    position: "relative",
                    top: "-9259px"
                })
            })
        }
    });

})(jQuery);
function Quicknav() {
    var a = this;
    a.showTooltip = function(d) {
        var c = $(d).parent("a");
        if (c.next("div").hasClass("tooltip")) {
            c.removeAttr("title");
            c.next(".tooltip").css("left", c.position().left - 12);
            c.next(".tooltip").show()
        }
    };
    a.hideTooltip = function(d) {
        var c = $(d).parent();
        if (c.next("div").hasClass("tooltip")) {
            c.next(".tooltip").hide()
        }
    };
    a.attachEventHandlers = function() {
        $("#quick-nav-global, #scrollcurtain-quicknav").find("a:not(.disabled) img").hover(function() {
            a.showTooltip(this)
        },
        function() {
            a.hideTooltip(this)
        });
        $("#quick-nav-global").delegate("a:not(.disabled) img", "touchstart",
        function() {
            $(this).unbind("mouseenter mouseleave");
            a.showTooltip(this)
        });
        $("#quick-nav-global").delegate("a:not(.disabled) img", "touchend",
        function() {
            a.hideTooltip(this)
        })
    };
    $("#quick-nav-global").find("a").each(function() {
        var c = $(this);
        if (c.attr("href") == decodeURIComponent(origUrl) || c.attr("href") == decodeURIComponent(requestPath)) {
            c.addClass("disabled");
            c.click(function() {
                return false
            })
        }
    });
    $("#scrollcurtain-quicknav").find("a").each(function() {
        var c = $(this);
        if (c.attr("href") == decodeURIComponent(origUrl) || c.attr("href") == decodeURIComponent(requestPath)) {
            c.addClass("disabled");
            c.click(function() {
                return false
            })
        }
    });
    if ($.browser.msie && $.browser.version == 6) {
        try {
            $("#quick-nav-global").find("img").hover(function() {
                $(this).addClass("hover");
                $(this).removeClass("nhover")
            },
            function() {
                $(this).removeClass("hover");
                $(this).addClass("nhover")
            })
        } catch(b) {}
    }
    if ($("#aol-header").hasClass("aol-global-header")) {
        $("#quick-nav-global").find("a").attr("title", "");
        $("#quick-nav-global").find("a.disabled").removeAttr("href");
        $("#quick-nav-global").find("#mailpreview.auth-1").next(".tooltip").remove();
        a.attachEventHandlers()
    }
}



if (typeof(AOL) == "undefined") {
    AOL = {}
}
if (typeof(AOL.HOMEPAGE) == "undefined") {
    AOL.HOMEPAGE = {}
}
AOL.HOMEPAGE.ieToolbars = new Array();
AOL.HOMEPAGE.ffToolbars = new Array();
function ieToolbarInitialize(a) {
    AOL.HOMEPAGE.ieToolbars.push(a);
    greetingsDetection.setToolbarCookie(a)
}
if (typeof(AOL) == "undefined") {
    AOL = {}
}
if (typeof(AOL.HOMEPAGE) == "undefined") {
    AOL.HOMEPAGE = {}
}
AOL.HOMEPAGE.ffToolbars = new Array();
function ffToolbarInitialize(a) {
    AOL.HOMEPAGE.ffToolbars.push(a);
    greetingsDetection.setToolbarCookie(a)
}

function UserMenu() {
    var a = this;
    this.container = $("#usrMnu");
    var b = this.container.attr("showdelay");
    var c = this.container.attr("hidedelay");
    this.closetimer = 0;
    this.opentimer = 0;
    this.showing = false;
    this.themeclicked = false;
    this.open = function() {
        a.setUsrMnuLstPosition();
        window.clearTimeout(a.closetimer);
        a.opentimer = setTimeout(function() {
            $(".usrMnuLst").show();
            a.showing = true
        },
        b);
        $("a.themesopenDouble").click(function() {
            a.close()
        });
        $("a.themesopen").click(function() {
            a.close()
        })
    };
    this.clear = function() {
        window.clearTimeout(a.opentimer);
        a.closetimer = window.setTimeout(a.clear, c)
    };
    this.close = function() {
        if (a.showing) {
            $(".usrMnuLst").hide();
            $(".userOptions").removeClass("opn");
            a.showing = false;
            a.themeclicked = false
        }
    };
    this.setUsrMnuLstPosition = function() {
        var e = a.container.offset().top + 40;
        var d = a.container.offset().left - a.container.outerWidth() - 14;
        $(".usrMnuLst").css({
            top: e + "px",
            left: d + "px"
        })
    };
    this.init = function() {
        $(".usrMnuLst").appendTo("body");
        $(".userOptions").click(function(d) {
            a.themeclicked = true;
            if (!$(".userOptions").hasClass("opn")) {
                $(".userOptions").addClass("opn");
                if ($("#themes").is(":visible")) {
                    $("body").on("themesClosed",
                    function() {
                        if (a.themeclicked) {
                            a.open()
                        }
                    })
                } else {
                    a.open()
                }
            } else {
                a.close()
            }
            d.preventDefault()
        });
        $("#pgbg").click(function() {
            a.close()
        })
    };
    if ($("#usrMnu")) {
        if ($("#aol-header").hasClass("dark") || $("#aol-header").hasClass("grey")) {
            a.container.find("li a.themesopenDouble").parent("li").remove()
        }
        a.init()
    }
}
usermenu = new UserMenu();
function BingSearchModule() {
    var a = this;
    this.div = null;
    this.input = null;
    this.logo = null;
    this.btn = null;
    a.form = null;
    this.constructor = function() {
        a.bind()
    };
    this.track = function(b) {
        try {
            if (typeof(bN) != "undefined") {
                bN.extractIds(a.btn[0]);
                bN.click(b)
            }
        } catch(b) {}
    };
    this.bind = function() {
        a.div = $("div.bing-searchbox");
        a.input = $("#header-bing-search-input");
        a.logo = a.div.find(".bingSearchLogo");
        a.btn = $("#header-bing-search-button");
        a.form = a.div.find("form");
        a.logo.attr("disabled", "disabled");
        a.input.addClass("js");
        a.input.focus(function(b) {
            a.logo.css("display", "none");
            a.input.select()
        });
        a.input.blur(function(b) {
            if (this.value.length == 0) {
                a.logo.css("display", "block")
            }
        });
        a.form.submit(function(b) {
            a.track(b)
        })
    };
    a.constructor()
}
var bingSearchMod = new BingSearchModule();
function AppsListModule() {
    var a = this;
    this.iconsWrapper = null;
    this.constructor = function() {
        a.bind()
    };
    this.bind = function() {
        a.iconsWrapper = $("div.apps-icon a");
        a.iconsWrapper.live("click",
        function(b) {
            if (this.getAttribute("downloadurl") != "") {
                a.appDownload(this.getAttribute("downloadurl"))
            }
        })
    };
    this.appDownload = function(c) {
        var b = new Date();
        setTimeout(function() {
            if (new Date() - b < 2000) {
                window.location = c
            }
        },
        500)
    };
    a.constructor()
}
var applistModule = new AppsListModule();
function Dayparting() {
    var a = this;
    this.cookieVer = 1;
    this.cookieName = "tzoffset";
    this.cookieValPrepend = "js_";
    this.cookieExpMillis = 43200000;
    this.constructor = function() {
        if (typeof(glbLocTZCookieVer) != "undefined" && glbLocTZCookieVer.length > 0) {
            a.cookieVer = glbLocTZCookieVer
        }
        if (typeof(glbLocTZCookieExpSecs) != "undefined" && glbLocTZCookieExpSecs.length > 0 && glbLocTZCookieExpSecs.match(/^[0-9]*$/)) {
            try {
                var c = parseInt(glbLocTZCookieExpSecs);
                a.cookieExpMillis = c * 1000
            } catch(b) {}
        }
        a.setOffset()
    };
    this.setOffset = function() {
        var d = cookies.verGetVal(a.cookieVer, a.cookieName, "none", false);
        if (d === null || d.length < 1) {
            var b = new Date();
            b.setTime(b.getTime() + a.cookieExpMillis);
            var c = -1 * (new Date().getTimezoneOffset()) / 60;
            cookies.verSetVal(a.cookieVer, a.cookieName, a.cookieValPrepend + c, b.toUTCString())
        }
    };
    a.constructor()
}
var dayparting = new Dayparting();
function Weatherlocation(b) {
    var a = this;
    this.wrapper = null;
    this.div = b.find(".weatherlocedit");
    this.loaded = false;
    this.form = null;
    this.chngLocHvrToMs = 300;
    this.hnavColorFromat = "light";
    this.bind = function() {
        a.div = b.find(".weatherlocedit");
        a.div.click(function(c) {
            a.change(c);
            c.preventDefault()
        });
        a.form = b.find(".weatherlocform");
        a.form.submit(function(c) {
            c.preventDefault();
            a.submit($(this))
        });
        a.form.find(".weatherlocsubmit").click(function(c) {
            c.preventDefault();
            a.form.submit()
        });
        a.form.find(".wlocz").focus(function() {
            this.select()
        });
        if (a.form.length > 0) {
            a.wrapper.bind("click.cancelWeatherEdit",
            function(c) {
                c.stopPropagation();
                a.closeEditOnClickAway(c)
            });
            return
        }
        if (a.wrapper.find(".wthr_ttl").length != 0) {
            return
        }
    };
    this.closeEditOnClickAway = function(f) {
        var d = f.srcElement || f.target;
        var c = $(d).attr("class");
        if (b.find(".weatherlocform").length != 0 && !c.match(/wlocz|weatherlocsubmit/)) {
            a.wrapper.unbind("click.cancelWeatherEdit");
            a.cancel()
        }
    };
    this.cancelTimer = function(c) {
        if (c != null) {
            window.clearTimeout(c)
        }
    };
    this.load = function(e, g, f) {
        if (e == null) {
            e = ""
        }
        var d = a.wrapper;
        if (g != null) {
            d = g
        }
        var c = "";
        c = "&clrFmat=" + a.hnavColorFromat;
        fTips.hide("weathererror");
        d.load("ajax.jsp?m=weatherlocation&p=weather&slot=weather-location" + c + e,
        function() {
            a.bind();
            if (f != null && !a.form.length) {
                weatherListener.onWeatherLocationChange()
            }
            if (a.form.length) {
                $(".wlocz").focus()
            }
        })
    };
    this.change = function(d) {
        d.preventDefault();
        var c = $(".weatherlocedit").attr("class");
        if (c.indexOf("weathersetloc") != -1) {
            omn.omcl("weather_set")
        } else {
            omn.omcl("weather_edit")
        }
        a.load("&reset_w=1", $(".modbtmWrp"), null)
    };
    this.submit = function(d) {
        omn.omcl("weather_save");
        var c = encodeURIComponent(d.find("input.wlocz").val());
        a.load("&frm_w=1&zip_w=" + c, $(".modbtmWrp"), true)
    };
    this.cancel = function() {
        omn.omcl("weatherloc_close");
        a.load(null, $(".modbtmWrp"), null)
    };
    this.construct = function() {
        a.wrapper = $("body");
        a.chngLocHvrToMs = $(".wthrChngLocDelay").text();
        a.bind()
    };
    a.construct()
}
function WeatherLocationModules() {
    var a = this;
    this.contructor = function() {
        a.bind()
    };
    this.bind = function() {
        $(".weatherlocedit").each(function(b, c) {
            new Weatherlocation($(c).parent().parent())
        })
    };
    a.contructor()
}
function weatherChangeListener() {
    var a = this;
    this.disable = false;
    this.callbacks = new Object();
    this.init = function() {};
    this.onWeatherLocationChange = function() {
        $(".weatherloc").each(function() {
            var b = utils.findClass(this, /weatherloc-.*/).replace("weatherloc-", "");
            a.refreshContent($(this).parent(), b)
        })
    };
    this.refreshContent = function(d, e) {
        if (e == "weather") {
            var c = "&isInHnav=1";
            var b = "&clrFmat=" + weathermodule.hnavColorFromat;
            e = e + c + b
        }
        $(d).load("ajax.jsp?ajax=1&t=refresh&excwrp=true&m=" + e,
        function() {
            if (typeof a.callbacks[e] === "function") {
                a.callbacks[e]()
            }
        })
    };
    this.register = function(e, d) {
        var b = d.parent().find(".weatherloc")[0];
        if (typeof(d) != "undefined") {
            var c = utils.findClass(b, /weatherloc-.*/).replace("weatherloc-", "");
            a.callbacks[c] = e
        }
    };
    a.init()
}
weatherListener = new weatherChangeListener();
function TwentyFourSeven() {
    var a = this;
    this.originalMnid = utils.findClass($("#mod24x7")[0], /mnid-.*/).replace("mnid-", "");
    this.mnid = a.originalMnid;
    this.bCnPing = function() {
        var d = $("ul.rnd").find(".roundabout-in-focus");
        if (!d.hasClass("bCn")) {
            try {
                if (typeof(bN) != "undefined") {
                    var c = utils.findClass(d.find("a.slide-img")[0], /lnid-.*/).replace("lnid-", "");
                    var b = a.mnid.split("-feature")[0];
                    b += "-feature" + c.replace("sec2_lnk", "");
                    bN.extractIds(d[0]);
                    bN.set("mnid", b, 1);
                    bN.set("lnid", c, 1);
                    bN.ping("mod24x7");
                    d.addClass("bCn");
                    if ($("#recent-slider ul").find("a.lnid-" + c).length) {
                        $("#recent-slider ul").find("a.lnid-" + c).closest("li").addClass("bCn")
                    }
                }
            } catch(f) {}
        }
    };
    this.init = function() {
        $(".daypart").each(function() {
            weatherListener.register(init247Module, $(this).parent())
        });
        $("ul.rnd").roundabout({
            minScale: 0.1,
            maxScale: 0.91,
            minOpacity: 1,
            responsive: true,
            widthMultiplier: 1.5,
            clickToFocusCallback: function(b) {
                a.bCnPing()
            }
        },
        function() {
            if (typeof(AOL.responsiveEnabled) !== "undefined" && !AOL.responsiveEnabled) {
                a.bCnPing()
            }
        });
        $("ul.rnd").on("mouseover mouseout", ".roundabout-in-focus a.slide-img",
        function(b) {
            if (b.type === "mouseover") {
                $(this).addClass("hovered")
            } else {
                $(this).removeClass("hovered")
            }
        });
        $("ul.rnd .roundabout-moveable-item a").on("click",
        function(b) {
            if ($(this).parents(".roundabout-in-focus").length < 1) {
                try {
                    if (typeof(bN) !== "undefined") {
                        bN.set("mnid", a.mnid + "-rotate", 1);
                        bN.click(b)
                    }
                } catch(b) {}
            }
        });
        $("ul.rnd").on("click", ".roundabout-in-focus a",
        function(b) {
            try {
                if (window.bN_cfg) {
                    window.bN.set("mnid", a.originalMnid + "-feature" + utils.findClass($("ul.rnd").find(".roundabout-in-focus a.slide-img")[0], /lnid-.*/).replace("lnid-sec2_lnk", ""), 1)
                }
            } catch(b) {}
        });
        $("#mod24x7").on("click", ".btmLink a",
        function(b) {
            try {
                if (window.bN_cfg) {
                    window.bN.set("mnid", a.originalMnid + "-more-features-link", 1)
                }
            } catch(b) {}
        })
    };
    a.init()
}
function init247Module() {
    new TwentyFourSeven();
    new WeatherLocationModules()
}
init247Module();