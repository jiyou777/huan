!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("$GP")) : "function" == typeof define && define.amd ? define(["$GP"], t) : "object" == typeof exports ? exports["Luffy/listNormal@1.0.2index"] = t(require("$GP")) : e["Luffy/listNormal@1.0.2index"] = t(e.$GP)
}("undefined" != typeof self ? self : this, function (e) {
    return function (e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
        }
        var n = {};
        return t.m = e,
            t.c = n,
            t.d = function (e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            t.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e.default
                }
                    : function () {
                        return e
                    }
                    ;
                return t.d(n, "a", n),
                    n
            }
            ,
            t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/Luffy/listNormal/1.0.2/",
            t(t.s = 6)
    }([function (e, t) {
        function n(e, t) {
            var n = e[1] || ""
                , o = e[3];
            if (!o)
                return n;
            if (t && "function" == typeof btoa) {
                var i = r(o);
                return [n].concat(o.sources.map(function (e) {
                    return "/*# sourceURL=" + o.sourceRoot + e + " */"
                })).concat([i]).join("\n")
            }
            return [n].join("\n")
        }
        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }
                ,
                t.i = function (e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0)
                    }
                    for (o = 0; o < e.length; o++) {
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                            t.push(a))
                    }
                }
                ,
                t
        }
    }
        , function (e, t, n) {
            "use strict";
            function r(e, t, n, r) {
                m = n,
                    g = r || {};
                var i = Object(l.a)(e, t);
                return o(i),
                    function (t) {
                        for (var n = [], r = 0; r < i.length; r++) {
                            var a = i[r]
                                , s = f[a.id];
                            s.refs-- ,
                                n.push(s)
                        }
                        t ? (i = Object(l.a)(e, t),
                            o(i)) : i = [];
                        for (var r = 0; r < n.length; r++) {
                            var s = n[r];
                            if (0 === s.refs) {
                                for (var c = 0; c < s.parts.length; c++)
                                    s.parts[c]();
                                delete f[s.id]
                            }
                        }
                    }
            }
            function o(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                        , r = f[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++)
                            r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++)
                            r.parts.push(a(n.parts[o]));
                        r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                    } else {
                        for (var i = [], o = 0; o < n.parts.length; o++)
                            i.push(a(n.parts[o]));
                        f[n.id] = {
                            id: n.id,
                            refs: 1,
                            parts: i
                        }
                    }
                }
            }
            function i() {
                var e = document.createElement("style");
                return e.type = "text/css",
                    d.appendChild(e),
                    e
            }
            function a(e) {
                var t, n, r = document.querySelector("style[" + y + '~="' + e.id + '"]');
                if (r) {
                    if (m)
                        return h;
                    r.parentNode.removeChild(r)
                }
                if (b) {
                    var o = v++;
                    r = p || (p = i()),
                        t = s.bind(null, r, o, !1),
                        n = s.bind(null, r, o, !0)
                } else
                    r = i(),
                        t = c.bind(null, r),
                        n = function () {
                            r.parentNode.removeChild(r)
                        }
                        ;
                return t(e),
                    function (r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)
                                return;
                            t(e = r)
                        } else
                            n()
                    }
            }
            function s(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = x(t, o);
                else {
                    var i = document.createTextNode(o)
                        , a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                }
            }
            function c(e, t) {
                var n = t.css
                    , r = t.media
                    , o = t.sourceMap;
                if (r && e.setAttribute("media", r),
                    g.ssrId && e.setAttribute(y, t.id),
                    o && (n += "\n/*# sourceURL=" + o.sources[0] + " */",
                        n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                    e.styleSheet)
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = r;
            var l = n(2)
                , u = "undefined" != typeof document;
            if ("undefined" != typeof DEBUG && DEBUG && !u)
                throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            var f = {}
                , d = u && (document.head || document.getElementsByTagName("head")[0])
                , p = null
                , v = 0
                , m = !1
                , h = function () { }
                , g = null
                , y = "data-vue-ssr-id"
                , b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
                , x = function () {
                    var e = [];
                    return function (t, n) {
                        return e[t] = n,
                            e.filter(Boolean).join("\n")
                    }
                }()
        }
        , function (e, t, n) {
            "use strict";
            function r(e, t) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o]
                        , a = i[0]
                        , s = i[1]
                        , c = i[2]
                        , l = i[3]
                        , u = {
                            id: e + ":" + o,
                            css: s,
                            media: c,
                            sourceMap: l
                        };
                    r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                        id: a,
                        parts: [u]
                    })
                }
                return n
            }
            t.a = r
        }
        , function (e, t, n) {
            "use strict";
            function r(e, t, n, r, o, i, a, s) {
                e = e || {};
                var c = typeof e.default;
                "object" !== c && "function" !== c || (e = e.default);
                var l = "function" == typeof e ? e.options : e;
                t && (l.render = t,
                    l.staticRenderFns = n,
                    l._compiled = !0),
                    r && (l.functional = !0),
                    i && (l._scopeId = i);
                var u;
                if (a ? (u = function (e) {
                    e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                        o && o.call(this, e),
                        e && e._registeredComponents && e._registeredComponents.add(a)
                }
                    ,
                    l._ssrRegister = u) : o && (u = s ? function () {
                        o.call(this, this.$root.$options.shadowRoot)
                    }
                        : o),
                    u)
                    if (l.functional) {
                        l._injectStyles = u;
                        var f = l.render;
                        l.render = function (e, t) {
                            return u.call(t),
                                f(e, t)
                        }
                    } else {
                        var d = l.beforeCreate;
                        l.beforeCreate = d ? [].concat(d, u) : [u]
                    }
                return {
                    exports: e,
                    options: l
                }
            }
            t.a = r
        }
        , function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(9);
            t.default = {
                mixins: [r.VueExtend.mixin],
                name: "list-normal",
                label: "",
                style: {
                    width: "500px",
                    height: "500px"
                },
                props: {
                    type: {
                        type: String,
                        default: "normal",
                        editor: {
                            ignore: !0
                        }
                    },
                    list: {
                        type: Array,
                        default: function () {
                            return [{
                                url: "",
                                datalist: [{
                                    id: '0',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
                                }, {
                                    id: '1',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",

                                }, {
                                    id: '2',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
                                },{
                                    id: '3',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
                                }, {
                                    id: '4',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",

                                }, {
                                    id: '5',
                                    title: "码良是什么？是如何提供完备的编程接入能力？",
                                    cover: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
                                }]
                            }]
                        },
                        editor: {
                            ignore: !0
                        }
                    }
                },
                data: function () {
                    return {}
                },
                computed: {},
                mounted: function () {
                    try {
                        // this.$parent.$el.style.height = "auto"
                    } catch (e) {
                        console.log(e)
                    }
                },
                methods: {
                    jump: function (e) {
                        e && (window.location.href = e)
                    }
                }
            }
        }
        , , function (e, t, n) {
            "use strict";
            function r(e) {
                n(7)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(4)
                , i = n.n(o);
            for (var a in o)
                "default" !== a && function (e) {
                    n.d(t, e, function () {
                        return o[e]
                    })
                }(a);
            var s = n(10)
                , c = n(3)
                , l = r
                , u = Object(c.a)(i.a, s.a, s.b, !1, l, "data-v-47ecea1a", null);
            t.default = u.exports
        }
        , function (e, t, n) {
            var r = n(8);
            "string" == typeof r && (r = [[e.i, r, ""]]),
                r.locals && (e.exports = r.locals);
            var o = n(1).default;
            o("4ce60760", r, !0, {})
        }
        , function (e, t, n) {
            t = e.exports = n(0)(!1),
                t.push([e.i, '.component[data-v-47ecea1a]{width:100%;height:100%}.component .list[data-v-47ecea1a]{width:100%;overflow:hidden;}.component .list .item{position:relative;width:152px;height:220px;float:left;margin-left:10px;margin-top:10px;}.component .list .item img{width:100%;height:100%;position:absolute;top:0;left:0;background-color:blue}.component .list .item .title{position:absolute;bottom:0;left:0;width:100%;height:36px;line-height:36px;color:#fff;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#000;margin:0}', ""])
        }
        , function (t, n) {
            t.exports = e
        }
        , function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r
            }),
                n.d(t, "b", function () {
                    return o
                });
            var r = function (createElement) {
                var e = this
                    , t = e.$createElement
                    , n = createElement; //n = createElement;
                    console.log(e.list[0].datalist)
                return n("div", {
                    staticClass: "component"
                }, [n("div", {
                    staticClass: "list"
                }, [e.list[0].datalist.map(function (t, r) {
                    return n("div", {
                        key: r,
                        staticClass: "item"
                    }, [n("img", {
                        attrs: {
                            src:t.cover
                        }
                    },''), [n("p", { staticClass: "title" }, [n("span", {}, t.title)])]])
                })])])
            }
                , o = []
        }
    ])
});
