!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("$GP")) : "function" == typeof define && define.amd ? define(["$GP"], t) : "object" == typeof exports ? exports["truck/image@0.1.7index"] = t(require("$GP")) : e["truck/image@0.1.7index"] = t(e.$GP)
}("undefined" != typeof self ? self : this, function (e) {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "__OSS_BUCKET__truck/image/0.7.0/", t(t.s = 6)
    }([function (e, t) {
        function n(e, t) {
            var n = e[1] || "", o = e[3];
            if (!o) return n;
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
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            m = n, g = r || {};
            var i = Object(c.a)(e, t);
            return o(i), function (t) {
                for (var n = [], r = 0; r < i.length; r++) {
                    var a = i[r], s = l[a.id];
                    s.refs--, n.push(s)
                }
                t ? (i = Object(c.a)(e, t), o(i)) : i = [];
                for (var r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (0 === s.refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete l[s.id]
                    }
                }
            }
        }

        function o(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], r = l[n.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++) r.parts.push(a(n.parts[o]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var i = [], o = 0; o < n.parts.length; o++) i.push(a(n.parts[o]));
                    l[n.id] = {id: n.id, refs: 1, parts: i}
                }
            }
        }

        function i() {
            var e = document.createElement("style");
            return e.type = "text/css", f.appendChild(e), e
        }

        function a(e) {
            var t, n, r = document.querySelector("style[" + y + '~="' + e.id + '"]');
            if (r) {
                if (m) return v;
                r.parentNode.removeChild(r)
            }
            if (b) {
                var o = h++;
                r = p || (p = i()), t = s.bind(null, r, o, !1), n = s.bind(null, r, o, !0)
            } else r = i(), t = u.bind(null, r), n = function () {
                r.parentNode.removeChild(r)
            };
            return t(e), function (r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                    t(e = r)
                } else n()
            }
        }

        function s(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, o); else {
                var i = document.createTextNode(o), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }

        function u(e, t) {
            var n = t.css, r = t.media, o = t.sourceMap;
            if (r && e.setAttribute("media", r), g.ssrId && e.setAttribute(y, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
        var c = n(2), d = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !d) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var l = {}, f = d && (document.head || document.getElementsByTagName("head")[0]), p = null, h = 0, m = !1,
            v = function () {
            }, g = null, y = "data-vue-ssr-id",
            b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
            x = function () {
                var e = [];
                return function (t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                }
            }()
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o], a = i[0], s = i[1], u = i[2], c = i[3],
                    d = {id: e + ":" + o, css: s, media: u, sourceMap: c};
                r[a] ? r[a].parts.push(d) : n.push(r[a] = {id: a, parts: [d]})
            }
            return n
        }

        t.a = r
    }, function (e, t, n) {
        "use strict";

        function r(e, t, n, r, o, i, a, s) {
            e = e || {};
            var u = typeof e.default;
            "object" !== u && "function" !== u || (e = e.default);
            var c = "function" == typeof e ? e.options : e;
            t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = i);
            var d;
            if (a ? (d = function (e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
            }, c._ssrRegister = d) : o && (d = s ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), d) if (c.functional) {
                c._injectStyles = d;
                var l = c.render;
                c.render = function (e, t) {
                    return d.call(t), l(e, t)
                }
            } else {
                var f = c.beforeCreate;
                c.beforeCreate = f ? [].concat(f, d) : [d]
            }
            return {exports: e, options: c}
        }

        t.a = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(9);
        t.default = {
            mixins: [r.VueExtend.mixin],
            name: "image",
            label: "test",
            style: {width: "200px", height: "200px"},
            props: {
                url: {
                    type: String,
                    editer: {type: "image", label: "图片", desc: "图片地址信息"},
                    default: "https://ymmtest.oss-cn-hangzhou.aliyuncs.com/ymmfile/explore-biz/ymm_1528188057605.png"
                },
                compress: {
                    type: Boolean,
                    default: !0,
                    editer: {type: "checkbox", desc: "按元素实际大小动态访问对应尺寸的图片（只支持阿里oss图片资源），如果关闭会加载原图", label: "图片尺寸优化 "}
                },
                mode: {type: String, default: "widthFix"},
                imgid: {type: Number, default: 2020, editor: {label: "输入图片id获取图片", type: "number"}},
                area: {
                    type: String,
                    default: "默认",
                    editer: {label: "区域", type: "enum", defaultList: ["区域1", "区域2", "区域3", "区域4"]}
                },
                terminal: {
                    type: String,
                    default: "默认",
                    editer: {label: "终端", type: "enum", defaultList: ["终端1", "终端2"]}
                }
            },
            computed: {
                cUrl: function () {
                    var e = this.scopeGet("url");
                    if (!this.compress) return e;
                    var t = this.$attrs["view-meta"] || {},
                        n = /\d+px$/.test(t.width) ? 2 * parseFloat(t.width) | 0 : 750,
                        r = /\d+px$/.test(t.height) ? 2 * parseFloat(t.height) | 0 : 750,
                        o = "heightFix" == this.mode ? "h_" + r : "w_" + n;
                    return e = e.replace(/\.(?:png|jpe?g)$/, "$&?x-oss-process=image/resize," + o)
                }
            },
            editorMethods: {},
            methods: {}
        }
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            n(7)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(4), i = n.n(o);
        for (var a in o) "default" !== a && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(a);
        var s = n(10), u = n(3), c = r, d = Object(u.a)(i.a, s.a, s.b, !1, c, "data-v-2372d27c", null);
        t.default = d.exports
    }, function (e, t, n) {
        var r = n(8);
        "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
        var o = n(1).default;
        o("6613aeaa", r, !0, {})
    }, function (e, t, n) {
        t = e.exports = n(0)(!1), t.push([e.i, ".component[data-v-2372d27c]{vertical-align:bottom;display:block;width:100%;height:100%}.component>img[data-v-2372d27c]{vertical-align:top}.component.scaleToFill>img[data-v-2372d27c]{width:100%;height:100%}.component.aspectFit>img[data-v-2372d27c]{max-width:100%;max-height:100%}.component.widthFix[data-v-2372d27c]{overflow:hidden}.component.widthFix>img[data-v-2372d27c]{width:100%}.component.heightFix[data-v-2372d27c]{overflow:hidden}.component.heightFix>img[data-v-2372d27c]{height:100%}", ""])
    }, function (t, n) {
        t.exports = e
    }, function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return o
        });
        var r = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "component",
                class: [e.mode]
            }, [e.url ? n("img", {attrs: {src: e.url}}) : e._e()])
        }, o = []
    }])
});