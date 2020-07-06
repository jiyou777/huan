!
    function (e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t(require("Truck")) : "function" == typeof define && define.amd ? define("truck/image@0.1.7", ["Truck"], t) : "object" == typeof exports ? exports["truck/menue@0.1.0"] = t(require("Truck")) : e["truck/menue@0.1.0"] = t(e.Truck)
    }(this,
        function (e) {
            return function (e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, t),
                        i.l = !0,
                        i.exports
                }
                var n = {};
                return t.m = e,
                    t.c = n,
                    t.i = function (e) {
                        return e
                    },
                    t.d = function (e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    },
                    t.n = function (e) {
                        var n = e && e.__esModule ?
                            function () {
                                return e.
                                    default
                            } :
                            function () {
                                return e
                            };
                        return t.d(n, "a", n),
                            n
                    },
                    t.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    },
                    t.p = "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/truck/image/0.1.7/",
                    t(t.s = 10)
            }([function (e, t, n) {
                n(6);
                var r = n(4)(n(1), n(5), "data-v-747104a7", null);
                e.exports = r.exports
            },
            function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(9);
                t.default = {
                    mixins: [r.Maliang.mixin],
                    name: "menue",
                    label: "菜单",
                    style: {
                        width: "160px",
                        height: "338px"
                    },
                    data() {
                        return {
                            datalist: {
                                nav: [{
                                    showimg: false,
                                    label: "菜单1",
                                    icourl: '',
                                    imgurl: '',
                                }, {
                                    showimg: false,
                                    label: "菜单2",
                                    icourl: '',
                                    imgurl: ''
                                }, {
                                    showimg: false,
                                    label: "菜单3",
                                    icourl: '',
                                    imgurl: ''
                                }, {
                                    showimg: false,
                                    label: "菜单4",
                                    icourl: '',
                                    imgurl: ''
                                }]

                            }
                        }
                    },
                    props: {

                        // url: {
                        //     type: String,
                        //     editer: {
                        //         type: "menue",
                        //         label: "menue",
                        //         desc: "图片地址信息"
                        //     },
                        //     default: "http://localhost:8565/images/defaultimg.png"
                        // },
                        mould: {
                            type: String,
                            default: "竖显",//横显或者竖显
                            editer: {
                                label: "显示方式",
                                type: "enum",
                                defaultList: ["竖显", "横显"]
                            }
                        },
                        list: {
                            type: Array,
                            editer: {
                                label: "none",//不显示此label
                                type: "menue",
                            },
                            default: function () {
                                return [{
                                    showimg: false,
                                    label: "菜单1",
                                    icourl: '',
                                    imgurl: '',
                                }, {
                                    showimg: false,
                                    label: "菜单2",
                                    icourl: '',
                                    imgurl: ''
                                }, {
                                    showimg: false,
                                    label: "菜单3",
                                    icourl: '',
                                    imgurl: ''
                                }, {
                                    showimg: false,
                                    label: "菜单4",
                                    icourl: '',
                                    imgurl: ''
                                }]
                            },
                        },
                        interfacechoose: {
                            // type: Object,
                            default: "",
                            editer: {
                                label: "数据源",
                                type: "enum",
                                defaultList: ["默认","/getMenue", "/getList"]
                            }
                        },
                        click: {
                            type: Array,
                            default: function () {
                                return []
                            },
                            editer: {
                                label: "点击事件",
                                type: "function"
                            }
                        }
                    },
                    computed: {
                        cList: function () {

                            return this.scopeGet("list")
                        },
                        style:function(){
                            if(this.scopeGet("mould")=="横显"){
                                return {
                                    width: "338px",
                                    height: "160px"
                                  }
                            }else{
                                return {
                                    width: "160px",
                                    height: "338px"
                                  }
                            }
                            
                        }
                    },
                    editerMethods: {
                        jump: {
                            label: "网页跳转",
                            params: [{
                                label: "跳转地址",
                                desc: "参数详细说明：跳转路径 可以是 https 和 ymm 等协议开头的任意链接",
                                type: "string",
                                default: "https://www.baidu.com"
                            }]
                        }
                    },
                    methods: {
                        onClick: function () {
                            this.oncallExecute(this.click)
                        },
                        jump: function (e) {
                            window.location.href = e
                        }
                    }
                }
            }
                , function (e, t, n) {
                    t = e.exports = n(3)(),
                        t.push([e.i, ".component{width:100%;height:100%}.component .menulist{width:100%;height:100%} .component.rows .item{float:left;} .component .menulist .item{list-style:none;line-height:40px;height:40px;text-align:center;}", ""])
                },
            function (e, t) {
                e.exports = function () {
                    var e = [];
                    return e.toString = function () {
                        for (var e = [], t = 0; t < this.length; t++) {
                            var n = this[t];
                            n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                        }
                        return e.join("")
                    },
                        e.i = function (t, n) {
                            "string" == typeof t && (t = [[null, t, ""]]);
                            for (var r = {},
                                i = 0; i < this.length; i++) {
                                var o = this[i][0];
                                "number" == typeof o && (r[o] = !0)
                            }
                            for (i = 0; i < t.length; i++) {
                                var a = t[i];
                                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                            }
                        },
                        e
                }
            },
            function (e, t) {
                e.exports = function (e, t, n, r) {
                    var i, o = e = e || {},
                        a = typeof e.
                            default;
                    "object" !== a && "function" !== a || (i = e, o = e.
                        default);
                    var s = "function" == typeof o ? o.options : o;
                    if (t && (s.render = t.render, s.staticRenderFns = t.staticRenderFns), n && (s._scopeId = n), r) {
                        var c = Object.create(s.computed || null);
                        Object.keys(r).forEach(function (e) {
                            var t = r[e];
                            c[e] = function () {
                                return t
                            }
                        }),
                            s.computed = c
                    }
                    return {
                        esModule: i,
                        exports: o,
                        options: s
                    }
                }
            },

            function (e, t) {
                e.exports = {
                    render: function (createElement) {
                        var e = this,
                            t = e.$createElement,
                            n = createElement;
                            // n.style=e.style
                        //e.list==="/getMenue"?e.list = getMenue():'';
                        return n("div", {
                            staticClass: e.mould=="竖显"?"component":"component rows",
                            style: {
                                color: "#333",
                                fontSize: '16px'
                            },
                        }, [n("div", {
                            staticClass: "menulist"
                        }, [e.cList.map(function (t, r) {
                            return n("div", {
                                key: r,
                                staticClass: "item"
                            }, t.label)
                        })])
                        ])
                    },

                    staticRenderFns: []
                }

            },
            function (e, t, n) {
                var r = n(2);
                "string" == typeof r && (r = [[e.i, r, ""]]),
                    r.locals && (e.exports = r.locals);
                n(7)("1f33d6f2", r, !0)
            },
            function (e, t, n) {
                function r(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            r = d[n.id];
                        if (r) {
                            r.refs++;
                            for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                            for (; i < n.parts.length; i++) r.parts.push(o(n.parts[i]));
                            r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                        } else {
                            for (var a = [], i = 0; i < n.parts.length; i++) a.push(o(n.parts[i]));
                            d[n.id] = {
                                id: n.id,
                                refs: 1,
                                parts: a
                            }
                        }
                    }
                }
                function i() {
                    var e = document.createElement("style");
                    return e.type = "text/css",
                        l.appendChild(e),
                        e
                }
                function o(e) {
                    var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (r) {
                        if (h) return m;
                        r.parentNode.removeChild(r)
                    }
                    if (v) {
                        var o = f++;
                        r = p || (p = i()),
                            t = a.bind(null, r, o, !1),
                            n = a.bind(null, r, o, !0)
                    } else r = i(),
                        t = s.bind(null, r),
                        n = function () {
                            r.parentNode.removeChild(r)
                        };
                    return t(e),
                        function (r) {
                            if (r) {
                                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                                t(e = r)
                            } else n()
                        }
                }
                function a(e, t, n, r) {
                    var i = n ? "" : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = g(t, i);
                    else {
                        var o = document.createTextNode(i),
                            a = e.childNodes;
                        a[t] && e.removeChild(a[t]),
                            a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
                    }
                }
                function s(e, t) {
                    var n = t.css,
                        r = t.media,
                        i = t.sourceMap;
                    if (r && e.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
                var c = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var u = n(8),
                    d = {},
                    l = c && (document.head || document.getElementsByTagName("head")[0]),
                    p = null,
                    f = 0,
                    h = !1,
                    m = function () { },
                    v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
                e.exports = function (e, t, n) {
                    h = n;
                    var i = u(e, t);
                    return r(i),
                        function (t) {
                            for (var n = [], o = 0; o < i.length; o++) {
                                var a = i[o],
                                    s = d[a.id];
                                s.refs-- ,
                                    n.push(s)
                            }
                            t ? (i = u(e, t), r(i)) : i = [];
                            for (var o = 0; o < n.length; o++) {
                                var s = n[o];
                                if (0 === s.refs) {
                                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                    delete d[s.id]
                                }
                            }
                        }
                };
                var g = function () {
                    var e = [];
                    return function (t, n) {
                        return e[t] = n,
                            e.filter(Boolean).join("\n")
                    }
                }()
            },
            function (e, t) {
                e.exports = function (e, t) {
                    for (var n = [], r = {},
                        i = 0; i < t.length; i++) {
                        var o = t[i],
                            a = o[0],
                            s = o[1],
                            c = o[2],
                            u = o[3],
                            d = {
                                id: e + ":" + i,
                                css: s,
                                media: c,
                                sourceMap: u
                            };
                        r[a] ? r[a].parts.push(d) : n.push(r[a] = {
                            id: a,
                            parts: [d]
                        })
                    }
                    return n
                }
            },
            function (e, t) {
                e.exports = Truck
            },
            function (e, t, n) {
                e.exports = n(0)
            }])
        });
function getMenue() {
    // import axiox form 'axiox';
    console.log(fetch)
    return {
        nav: [{
            showimg: false,
            label: "菜单12",
            icourl: '',
            imgurl: '',
        }, {
            showimg: false,
            label: "菜单22",
            icourl: '',
            imgurl: ''
        }, {
            showimg: false,
            label: "菜单3",
            icourl: '',
            imgurl: ''
        }, {
            showimg: false,
            label: "菜单4",
            icourl: '',
            imgurl: ''
        }]
    }
}
//# sourceMappingURL=index.js.map
