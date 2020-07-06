!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("$GP")) : "function" == typeof define && define.amd ? define(["$GP"], e) : "object" == typeof exports ? exports["truck/newList@1.0.0index"] = e(require("$GP")) : t["truck/newList@1.0.0index"] = e(t.$GP)
}("undefined" != typeof self ? self : this, function (t) {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "__OSS_BUCKET__truck/newList/1.0.0/", e(e.s = 43)
    }([function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e, n) {
        var r = n(31)("wks"), o = n(32), i = n(0).Symbol, u = "function" == typeof i;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = r
    }, function (t, e) {
        var n = t.exports = {version: "2.5.7"};
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        var r = n(11), o = n(29);
        t.exports = n(6) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(28)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r = n(0), o = n(2), i = n(9), u = n(4), s = n(12), c = function (t, e, n) {
            var a, f, l, p = t & c.F, d = t & c.G, v = t & c.S, h = t & c.P, m = t & c.B, y = t & c.W,
                g = d ? o : o[e] || (o[e] = {}), b = g.prototype, _ = d ? r : v ? r[e] : (r[e] || {}).prototype;
            d && (n = e);
            for (a in n) (f = !p && _ && void 0 !== _[a]) && s(g, a) || (l = f ? _[a] : n[a], g[a] = d && "function" != typeof _[a] ? n[a] : m && f ? i(l, r) : y && _[a] == l ? function (t) {
                var e = function (e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((g.virtual || (g.virtual = {}))[a] = l, t & c.R && b && !b[a] && u(b, a, l)))
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var r = n(3), o = n(52), i = n(53), u = Object.defineProperty;
        e.f = n(6) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e) {
        function n(t, e) {
            var n = t[1] || "", o = t[3];
            if (!o) return n;
            if (e && "function" == typeof btoa) {
                var i = r(o);
                return [n].concat(o.sources.map(function (t) {
                    return "/*# sourceURL=" + o.sourceRoot + t + " */"
                })).concat([i]).join("\n")
            }
            return [n].join("\n")
        }

        function r(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }

        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map(function (e) {
                    var r = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + r + "}" : r
                }).join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var u = t[o];
                    "number" == typeof u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), e.push(u))
                }
            }, e
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            h = n, y = r || {};
            var i = Object(a.a)(t, e);
            return o(i), function (e) {
                for (var n = [], r = 0; r < i.length; r++) {
                    var u = i[r], s = l[u.id];
                    s.refs--, n.push(s)
                }
                e ? (i = Object(a.a)(t, e), o(i)) : i = [];
                for (var r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete l[s.id]
                    }
                }
            }
        }

        function o(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e], r = l[n.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++) r.parts.push(u(n.parts[o]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var i = [], o = 0; o < n.parts.length; o++) i.push(u(n.parts[o]));
                    l[n.id] = {id: n.id, refs: 1, parts: i}
                }
            }
        }

        function i() {
            var t = document.createElement("style");
            return t.type = "text/css", p.appendChild(t), t
        }

        function u(t) {
            var e, n, r = document.querySelector("style[" + g + '~="' + t.id + '"]');
            if (r) {
                if (h) return m;
                r.parentNode.removeChild(r)
            }
            if (b) {
                var o = v++;
                r = d || (d = i()), e = s.bind(null, r, o, !1), n = s.bind(null, r, o, !0)
            } else r = i(), e = c.bind(null, r), n = function () {
                r.parentNode.removeChild(r)
            };
            return e(t), function (r) {
                if (r) {
                    if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                    e(t = r)
                } else n()
            }
        }

        function s(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = _(e, o); else {
                var i = document.createTextNode(o), u = t.childNodes;
                u[e] && t.removeChild(u[e]), u.length ? t.insertBefore(i, u[e]) : t.appendChild(i)
            }
        }

        function c(t, e) {
            var n = e.css, r = e.media, o = e.sourceMap;
            if (r && t.setAttribute("media", r), y.ssrId && t.setAttribute(g, e.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.default = r;
        var a = n(16), f = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !f) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var l = {}, p = f && (document.head || document.getElementsByTagName("head")[0]), d = null, v = 0, h = !1,
            m = function () {
            }, y = null, g = "data-vue-ssr-id",
            b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
            _ = function () {
                var t = [];
                return function (e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n")
                }
            }()
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o], u = i[0], s = i[1], c = i[2], a = i[3],
                    f = {id: t + ":" + o, css: s, media: c, sourceMap: a};
                r[u] ? r[u].parts.push(f) : n.push(r[u] = {id: u, parts: [f]})
            }
            return n
        }

        e.a = r
    }, function (t, e) {
        var n = Math.ceil, r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e, n) {
        var r = n(5), o = n(0).document, i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(60), o = n(18);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, e, n) {
        var r = n(31)("keys"), o = n(32);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, e, n) {
        var r = n(11).f, o = n(12), i = n(1)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e, n;
            this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            }), this.resolve = o(e), this.reject = o(n)
        }

        var o = n(10);
        t.exports.f = function (t) {
            return new r(t)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n, r, o, i, u, s) {
            t = t || {};
            var c = typeof t.default;
            "object" !== c && "function" !== c || (t = t.default);
            var a = "function" == typeof t ? t.options : t;
            e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), r && (a.functional = !0), i && (a._scopeId = i);
            var f;
            if (u ? (f = function (t) {
                t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(u)
            }, a._ssrRegister = f) : o && (f = s ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), f) if (a.functional) {
                a._injectStyles = f;
                var l = a.render;
                a.render = function (t, e) {
                    return f.call(e), l(t, e)
                }
            } else {
                var p = a.beforeCreate;
                a.beforeCreate = p ? [].concat(p, f) : [f]
            }
            return {exports: t, options: a}
        }

        e.a = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(46), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(r), i = n(83);
        n(84);
        e.default = {
            mixins: [i.VueExtend.mixin],
            name: "maliangeditor",
            label: "list",
            style: {width: "500px", height: "500px"},
            stack: !1,
            childLimit: 9999,
            leaf: !1,
            props: {
                area: {
                    type: String,
                    default: "默认",
                    editer: {label: "区域", type: "enum", defaultList: ["区域1", "区域2", "区域3", "区域4"]}
                },
                terminal: {
                    type: String,
                    default: "默认",
                    editer: {label: "终端", type: "enum", defaultList: ["终端1", "终端2"]}
                },
                isshow: {type: Boolean, default: !0, editor: {label: "是否隐藏文字", type: "isshow"}},
                isshowpic: {type: Boolean, default: !0, editor: {label: "切换文字/图片列表", type: "isshowpic"}},
                spacew: {type: Number, default: 150, editor: {label: "宽", type: "number"}},
                spaceh: {type: Number, default: 230, editor: {label: "高", type: "number"}},
                fontsize: {type: Number, default: 16, editor: {label: "字体大小", type: "number"}},
                leftw: {type: Number, default: 5, editor: {label: "元素之间的距离", type: "Number"}},
                col: {type: Number, default: 3, editor: {label: "列数", type: "number"}},
                row: {type: Number, default: 2, editor: {label: "行数", type: "number"}},
                // colortype:{type: String, default: "#000000", editor: {label: "颜色", type: "text"}},
                imglist: {
                    type: Array, editor: {label: "none", type: "newlist"}, default: function () {
                        return [{
                            showimg: !1,
                            label: "今年端午节为21世纪并列最晚",
                            icourl: "",
                            imgurl: "images/1.jpg",
                            imgid: 0
                        }, {
                            showimg: !1,
                            label: "北京施工工地发现确诊病例3人新",
                            icourl: "",
                            imgurl: "images/1.jpg",
                            imgid: 1
                        }, {
                            showimg: !1,
                            label: "仝卓 承蒙厚爱后会有期",
                            icourl: "",
                            imgurl: "images/1.jpg",
                            imgid: 2
                        }, {
                            showimg: !1,
                            label: "今年端午节为21世纪并列最晚",
                            icourl: "",
                            imgurl: "images/1.jpg",
                            imgid: 3
                        }, {
                            showimg: !1,
                            label: "北京施工工地发现确诊病例3人新",
                            icourl: "",
                            imgurl: "images/1.jpg",
                            imgid: 4
                        }, {showimg: !1, label: "仝卓 承蒙厚爱后会有期", icourl: "", imgurl: "/images/1.jpg", imgid: 5}]
                    }, computed: {}, watch: {}, mounted: function () {
                        function t() {
                            return e.apply(this, arguments)
                        }

                        var e = (0, o.default)(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return t
                    }(), editorMethods: {}, methods: {}
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(19), o = n(8), i = n(54), u = n(4), s = n(7), c = n(55), a = n(23), f = n(63), l = n(1)("iterator"),
            p = !([].keys && "next" in [].keys()), d = function () {
                return this
            };
        t.exports = function (t, e, n, v, h, m, y) {
            c(n, e, v);
            var g, b, _, x = function (t) {
                    if (!p && t in O) return O[t];
                    switch (t) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                }, w = e + " Iterator", S = "values" == h, j = !1, O = t.prototype,
                P = O[l] || O["@@iterator"] || h && O[h], M = P || x(h), T = h ? S ? x("entries") : M : void 0,
                C = "Array" == e ? O.entries || P : P;
            if (C && (_ = f(C.call(new t))) !== Object.prototype && _.next && (a(_, w, !0), r || "function" == typeof _[l] || u(_, l, d)), S && P && "values" !== P.name && (j = !0, M = function () {
                return P.call(this)
            }), r && !y || !p && !j && O[l] || u(O, l, M), s[e] = M, s[w] = d, h) if (g = {
                values: S ? M : x("values"),
                keys: m ? M : x("keys"),
                entries: T
            }, y) for (b in g) b in O || i(O, b, g[b]); else o(o.P + o.F * (p || j), e, g);
            return g
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
        }
    }, function (t, e, n) {
        var r = n(17), o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var r = n(2), o = n(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(19) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        var n = 0, r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(0).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        var r = n(13), o = n(1)("toStringTag"), i = "Arguments" == r(function () {
            return arguments
        }()), u = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        };
        t.exports = function (t) {
            var e, n, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }, function (t, e, n) {
        var r = n(3), o = n(10), i = n(1)("species");
        t.exports = function (t, e) {
            var n, u = r(t).constructor;
            return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n)
        }
    }, function (t, e, n) {
        var r, o, i, u = n(9), s = n(75), c = n(34), a = n(20), f = n(0), l = f.process, p = f.setImmediate,
            d = f.clearImmediate, v = f.MessageChannel, h = f.Dispatch, m = 0, y = {}, g = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e()
                }
            }, b = function (t) {
                g.call(t.data)
            };
        p && d || (p = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return y[++m] = function () {
                s("function" == typeof t ? t : Function(t), e)
            }, r(m), m
        }, d = function (t) {
            delete y[t]
        }, "process" == n(13)(l) ? r = function (t) {
            l.nextTick(u(g, t, 1))
        } : h && h.now ? r = function (t) {
            h.now(u(g, t, 1))
        } : v ? (o = new v, i = o.port2, o.port1.onmessage = b, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in a("script") ? function (t) {
            c.appendChild(a("script")).onreadystatechange = function () {
                c.removeChild(this), g.call(t)
            }
        } : function (t) {
            setTimeout(u(g, t, 1), 0)
        }), t.exports = {set: p, clear: d}
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return {e: !1, v: t()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, function (t, e, n) {
        var r = n(3), o = n(5), i = n(24);
        t.exports = function (t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var r = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60, n = null;
            return function () {
                for (var r = this, o = arguments.length, i = new Array(o), u = 0; u < o; u++) i[u] = arguments[u];
                clearTimeout(n), n = setTimeout(function () {
                    t.apply(r, i)
                }, e)
            }
        };
        e.default = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.SensorTabIndex = e.SensorClassName = e.SensorStyle = e.SizeSensorId = void 0;
        e.SizeSensorId = "size-sensor-id";
        e.SensorStyle = "display:block;position:absolute;top:0;left:0;height:100%;width:auto;overflow:hidden;pointer-events:none;z-index:-1;opacity:0";
        e.SensorClassName = "size-sensor-object";
        e.SensorTabIndex = "-1"
    }, , function (t, e, n) {
        "use strict";

        function r(t) {
            n(44)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n(26), i = n.n(o);
        for (var u in o) "default" !== u && function (t) {
            n.d(e, t, function () {
                return o[t]
            })
        }(u);
        var s = n(90), c = n(25), a = r, f = Object(c.a)(i.a, s.a, s.b, !1, a, "data-v-5b3f76c9", null);
        e.default = f.exports
    }, function (t, e, n) {
        var r = n(45);
        "string" == typeof r && (r = [[t.i, r, ""]]), r.locals && (t.exports = r.locals);
        var o = n(15).default;
        o("b75bc36a", r, !0, {})
    }, function (t, e, n) {
        e = t.exports = n(14)(!1), e.push([t.i, ".component[data-v-5b3f76c9]{width:100%;height:100%}.imglist[data-v-5b3f76c9]{width:500px;height:500px;padding-left:10px}.imglist-item[data-v-5b3f76c9]{width:150px;height:230px;float:left;position:relative}.imglist-item-img[data-v-5b3f76c9]{width:150px;height:230px}.imglist-item-title[data-v-5b3f76c9]{height:30px;line-height:30px;background:#000;color:#fff;position:absolute;bottom:0;left:0;right:0}.imglist-item-title2[data-v-5b3f76c9],.imglist-item-title[data-v-5b3f76c9]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}", ""])
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(47), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(r);
        e.default = function (t) {
            return function () {
                var e = t.apply(this, arguments);
                return new o.default(function (t, n) {
                    function r(i, u) {
                        try {
                            var s = e[i](u), c = s.value
                        } catch (t) {
                            return void n(t)
                        }
                        if (!s.done) return o.default.resolve(c).then(function (t) {
                            r("next", t)
                        }, function (t) {
                            r("throw", t)
                        });
                        t(c)
                    }

                    return r("next")
                })
            }
        }
    }, function (t, e, n) {
        t.exports = {default: n(48), __esModule: !0}
    }, function (t, e, n) {
        n(49), n(50), n(65), n(69), n(81), n(82), t.exports = n(2).Promise
    }, function (t, e) {
    }, function (t, e, n) {
        "use strict";
        var r = n(51)(!0);
        n(27)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
        })
    }, function (t, e, n) {
        var r = n(17), o = n(18);
        t.exports = function (t) {
            return function (e, n) {
                var i, u, s = String(o(e)), c = r(n), a = s.length;
                return c < 0 || c >= a ? t ? "" : void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === a || (u = s.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, function (t, e, n) {
        t.exports = !n(6) && !n(28)(function () {
            return 7 != Object.defineProperty(n(20)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        t.exports = n(4)
    }, function (t, e, n) {
        "use strict";
        var r = n(56), o = n(29), i = n(23), u = {};
        n(4)(u, n(1)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {next: o(1, n)}), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(3), o = n(57), i = n(33), u = n(22)("IE_PROTO"), s = function () {
        }, c = function () {
            var t, e = n(20)("iframe"), r = i.length;
            for (e.style.display = "none", n(34).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
            return c()
        };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[u] = t) : n = c(), void 0 === e ? n : o(n, e)
        }
    }, function (t, e, n) {
        var r = n(11), o = n(3), i = n(58);
        t.exports = n(6) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var n, u = i(e), s = u.length, c = 0; s > c;) r.f(t, n = u[c++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(59), o = n(33);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        var r = n(12), o = n(21), i = n(61)(!1), u = n(22)("IE_PROTO");
        t.exports = function (t, e) {
            var n, s = o(t), c = 0, a = [];
            for (n in s) n != u && r(s, n) && a.push(n);
            for (; e.length > c;) r(s, n = e[c++]) && (~i(a, n) || a.push(n));
            return a
        }
    }, function (t, e, n) {
        var r = n(13);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        var r = n(21), o = n(30), i = n(62);
        t.exports = function (t) {
            return function (e, n, u) {
                var s, c = r(e), a = o(c.length), f = i(u, a);
                if (t && n != n) {
                    for (; a > f;) if ((s = c[f++]) != s) return !0
                } else for (; a > f; f++) if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(17), o = Math.max, i = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var r = n(12), o = n(64), i = n(22)("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        var r = n(18);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        n(66);
        for (var r = n(0), o = n(4), i = n(7), u = n(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
            var a = s[c], f = r[a], l = f && f.prototype;
            l && !l[u] && o(l, u, a), i[a] = i.Array
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(67), o = n(68), i = n(7), u = n(21);
        t.exports = n(27)(Array, "Array", function (t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, e) {
        t.exports = function () {
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {value: e, done: !!t}
        }
    }, function (t, e, n) {
        "use strict";
        var r, o, i, u, s = n(19), c = n(0), a = n(9), f = n(35), l = n(8), p = n(5), d = n(10), v = n(70), h = n(71),
            m = n(36), y = n(37).set, g = n(76)(), b = n(24), _ = n(38), x = n(77), w = n(39), S = c.TypeError,
            j = c.process, O = j && j.versions, P = O && O.v8 || "", M = c.Promise, T = "process" == f(j),
            C = function () {
            }, L = o = b.f, E = !!function () {
                try {
                    var t = M.resolve(1), e = (t.constructor = {})[n(1)("species")] = function (t) {
                        t(C, C)
                    };
                    return (T || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== P.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (t) {
                }
            }(), A = function (t) {
                var e;
                return !(!p(t) || "function" != typeof (e = t.then)) && e
            }, k = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    g(function () {
                        for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) !function (e) {
                            var n, i, u, s = o ? e.ok : e.fail, c = e.resolve, a = e.reject, f = e.domain;
                            try {
                                s ? (o || (2 == t._h && I(t), t._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), f && (f.exit(), u = !0)), n === e.promise ? a(S("Promise-chain cycle")) : (i = A(n)) ? i.call(n, c, a) : c(n)) : a(r)
                            } catch (t) {
                                f && !u && f.exit(), a(t)
                            }
                        }(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && N(t)
                    })
                }
            }, N = function (t) {
                y.call(c, function () {
                    var e, n, r, o = t._v, i = R(t);
                    if (i && (e = _(function () {
                        T ? j.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                    }), t._h = T || R(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                })
            }, R = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            }, I = function (t) {
                y.call(c, function () {
                    var e;
                    T ? j.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({promise: t, reason: t._v})
                })
            }, z = function (t) {
                var e = this;
                e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), k(e, !0))
            }, U = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw S("Promise can't be resolved itself");
                        (e = A(t)) ? g(function () {
                            var r = {_w: n, _d: !1};
                            try {
                                e.call(t, a(U, r, 1), a(z, r, 1))
                            } catch (t) {
                                z.call(r, t)
                            }
                        }) : (n._v = t, n._s = 1, k(n, !1))
                    } catch (t) {
                        z.call({_w: n, _d: !1}, t)
                    }
                }
            };
        E || (M = function (t) {
            v(this, M, "Promise", "_h"), d(t), r.call(this);
            try {
                t(a(U, this, 1), a(z, this, 1))
            } catch (t) {
                z.call(this, t)
            }
        }, r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, r.prototype = n(78)(M.prototype, {
            then: function (t, e) {
                var n = L(m(this, M));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? j.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
            }, catch: function (t) {
                return this.then(void 0, t)
            }
        }), i = function () {
            var t = new r;
            this.promise = t, this.resolve = a(U, t, 1), this.reject = a(z, t, 1)
        }, b.f = L = function (t) {
            return t === M || t === u ? new i(t) : o(t)
        }), l(l.G + l.W + l.F * !E, {Promise: M}), n(23)(M, "Promise"), n(79)("Promise"), u = n(2).Promise, l(l.S + l.F * !E, "Promise", {
            reject: function (t) {
                var e = L(this);
                return (0, e.reject)(t), e.promise
            }
        }), l(l.S + l.F * (s || !E), "Promise", {
            resolve: function (t) {
                return w(s && this === u ? M : this, t)
            }
        }), l(l.S + l.F * !(E && n(80)(function (t) {
            M.all(t).catch(C)
        })), "Promise", {
            all: function (t) {
                var e = this, n = L(e), r = n.resolve, o = n.reject, i = _(function () {
                    var n = [], i = 0, u = 1;
                    h(t, !1, function (t) {
                        var s = i++, c = !1;
                        n.push(void 0), u++, e.resolve(t).then(function (t) {
                            c || (c = !0, n[s] = t, --u || r(n))
                        }, o)
                    }), --u || r(n)
                });
                return i.e && o(i.v), n.promise
            }, race: function (t) {
                var e = this, n = L(e), r = n.reject, o = _(function () {
                    h(t, !1, function (t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return o.e && r(o.v), n.promise
            }
        })
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(9), o = n(72), i = n(73), u = n(3), s = n(30), c = n(74), a = {}, f = {},
            e = t.exports = function (t, e, n, l, p) {
                var d, v, h, m, y = p ? function () {
                    return t
                } : c(t), g = r(n, l, e ? 2 : 1), b = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for (d = s(t.length); d > b; b++) if ((m = e ? g(u(v = t[b])[0], v[1]) : g(t[b])) === a || m === f) return m
                } else for (h = y.call(t); !(v = h.next()).done;) if ((m = o(h, g, v.value, e)) === a || m === f) return m
            };
        e.BREAK = a, e.RETURN = f
    }, function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(7), o = n(1)("iterator"), i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        var r = n(35), o = n(1)("iterator"), i = n(7);
        t.exports = n(2).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var r = n(0), o = n(37).set, i = r.MutationObserver || r.WebKitMutationObserver, u = r.process, s = r.Promise,
            c = "process" == n(13)(u);
        t.exports = function () {
            var t, e, n, a = function () {
                var r, o;
                for (c && (r = u.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (c) n = function () {
                u.nextTick(a)
            }; else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                var f = s.resolve(void 0);
                n = function () {
                    f.then(a)
                }
            } else n = function () {
                o.call(r, a)
            }; else {
                var l = !0, p = document.createTextNode("");
                new i(a).observe(p, {characterData: !0}), n = function () {
                    p.data = l = !l
                }
            }
            return function (r) {
                var o = {fn: r, next: void 0};
                e && (e.next = o), t || (t = o, n()), e = o
            }
        }
    }, function (t, e, n) {
        var r = n(0), o = r.navigator;
        t.exports = o && o.userAgent || ""
    }, function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), o = n(2), i = n(11), u = n(6), s = n(1)("species");
        t.exports = function (t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            u && e && !e[s] && i.f(e, s, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        var r = n(1)("iterator"), o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {
        }
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7], u = i[r]();
                u.next = function () {
                    return {done: n = !0}
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {
            }
            return n
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(8), o = n(2), i = n(0), u = n(36), s = n(39);
        r(r.P + r.R, "Promise", {
            finally: function (t) {
                var e = u(this, o.Promise || i.Promise), n = "function" == typeof t;
                return this.then(n ? function (n) {
                    return s(e, t()).then(function () {
                        return n
                    })
                } : t, n ? function (n) {
                    return s(e, t()).then(function () {
                        throw n
                    })
                } : t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(8), o = n(24), i = n(38);
        r(r.S, "Promise", {
            try: function (t) {
                var e = o.f(this), n = i(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise
            }
        })
    }, function (e, n) {
        e.exports = t
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.ver = e.clear = e.bind = void 0;
        var r = n(85), o = function (t, e) {
            var n = (0, r.getSensor)(t);
            return n.bind(e), function () {
                n.unbind(e)
            }
        };
        e.bind = o;
        var i = function (t) {
            var e = (0, r.getSensor)(t);
            (0, r.removeSensor)(e)
        };
        e.clear = i;
        e.ver = "0.2.7"
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.removeSensor = e.getSensor = void 0;
        var r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n(86)), o = n(87), i = n(41), u = {}, s = function (t) {
            var e = t.getAttribute(i.SizeSensorId);
            if (e && u[e]) return u[e];
            var n = (0, r.default)();
            t.setAttribute(i.SizeSensorId, n);
            var s = (0, o.createSensor)(t);
            return u[n] = s, s
        };
        e.getSensor = s;
        var c = function (t) {
            var e = t.element.getAttribute(i.SizeSensorId);
            t.element.removeAttribute(i.SizeSensorId), t.destroy(), e && u[e] && delete u[e]
        };
        e.removeSensor = c
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var r = 1, o = function () {
            return "".concat(r++)
        };
        e.default = o
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.createSensor = void 0;
        var r = n(88), o = n(89), i = "undefined" != typeof ResizeObserver ? o.createSensor : r.createSensor;
        e.createSensor = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.createSensor = void 0;
        var r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n(40)), o = n(41), i = function (t) {
            var e = void 0, n = [], i = function () {
                "static" === getComputedStyle(t).position && (t.style.position = "relative");
                var e = document.createElement("object");
                return e.onload = function () {
                    e.contentDocument.defaultView.addEventListener("resize", u), u()
                }, e.setAttribute("style", o.SensorStyle), e.setAttribute("class", o.SensorClassName), e.setAttribute("tabindex", o.SensorTabIndex), e.type = "text/html", t.appendChild(e), e.data = "about:blank", e
            }, u = (0, r.default)(function () {
                n.forEach(function (e) {
                    e(t)
                })
            }), s = function (t) {
                e || (e = i()), -1 === n.indexOf(t) && n.push(t)
            }, c = function () {
                e && e.parentNode && (e.contentDocument && e.contentDocument.defaultView.removeEventListener("resize", u), e.parentNode.removeChild(e), e = void 0, n = [])
            };
            return {
                element: t, bind: s, destroy: c, unbind: function (t) {
                    var r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1), 0 === n.length && e && c()
                }
            }
        };
        e.createSensor = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.createSensor = void 0;
        var r = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(n(40)), o = function (t) {
            var e = void 0, n = [], o = (0, r.default)(function () {
                n.forEach(function (e) {
                    e(t)
                })
            }), i = function () {
                var e = new ResizeObserver(o);
                return e.observe(t), o(), e
            }, u = function (t) {
                e || (e = i()), -1 === n.indexOf(t) && n.push(t)
            }, s = function () {
                e.disconnect(), n = [], e = void 0
            };
            return {
                element: t, bind: u, destroy: s, unbind: function (t) {
                    var r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1), 0 === n.length && e && s()
                }
            }
        };
        e.createSensor = o
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        }), n.d(e, "b", function () {
            return o
        });
        var r = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "component"}, [n("div", {
                staticClass: "imglist",
                style: "width:" + (t.spacew + 2 * t.leftw + 10) * t.col + "px;height:" + (t.spaceh + 2 * t.leftw) * t.row + "px;"
            }, t._l(t.imglist, function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "imglist-item",
                    style: "margin:" + parseInt(t.leftw) + "px;width:" + t.spacew + "px;height:" + t.spaceh + "px;"
                }, [t.isshowpic ? n("img", {
                    class: t.isshowpic ? "imglist-item-img" : "none",
                    style: "width:" + t.spacew + "px;height:" + t.spaceh + "px;",
                    attrs: {src: e.imgurl, alt: ""}
                }) : t._e(), t._v(" "), t.isshow ? n("div", {
                    class: t.isshowpic ? "imglist-item-title" : "imglist-item-title2",
                    style: "font-size:" + t.fontsize + "px;"
                }, [n("span", [t._v(t._s(e.label))])]) : t._e()])
            }), 0)])
        }, o = []
    }])
});