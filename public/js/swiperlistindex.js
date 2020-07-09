!
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("$GP")) : "function" == typeof define && define.amd ? define(["$GP"], t) : "object" == typeof exports ? exports["truck/swiperlist@1.0.0index"] = t(require("$GP")) : e["truck/swiperlist@1.0.0index"] = t(e.$GP)
} ("undefined" != typeof self ? self: this,
function(e) {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t),
            r.l = !0,
            r.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        },
        t.n = function(e) {
            var i = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return t.d(i, "a", i),
            i
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "__OSS_BUCKET__truck/swiperlist/1.0.0/",
        t(t.s = 8)
    } ([function(e, t) {
        function i(e, t) {
            var i = e[1] || "",
            r = e[3];
            if (!r) return i;
            if (t && "function" == typeof btoa) {
                var s = n(r);
                return [i].concat(r.sources.map(function(e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                })).concat([s]).join("\n")
            }
            return [i].join("\n")
        }
        function n(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = i(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}": n
                }).join("")
            },
            t.i = function(e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {},
                r = 0; r < this.length; r++) {
                    var s = this[r][0];
                    "number" == typeof s && (n[s] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var o = e[r];
                    "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i: i && (o[2] = "(" + o[2] + ") and (" + i + ")"), t.push(o))
                }
            },
            t
        }
    },
    function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
            v = i,
            g = n || {};
            var s = Object(l.a)(e, t);
            return r(s),
            function(t) {
                for (var i = [], n = 0; n < s.length; n++) {
                    var o = s[n],
                    a = c[o.id];
                    a.refs--,
                    i.push(a)
                }
                t ? (s = Object(l.a)(e, t), r(s)) : s = [];
                for (var n = 0; n < i.length; n++) {
                    var a = i[n];
                    if (0 === a.refs) {
                        for (var d = 0; d < a.parts.length; d++) a.parts[d]();
                        delete c[a.id]
                    }
                }
            }
        }
        function r(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t],
                n = c[i.id];
                if (n) {
                    n.refs++;
                    for (var r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) n.parts.push(o(i.parts[r]));
                    n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
                } else {
                    for (var s = [], r = 0; r < i.parts.length; r++) s.push(o(i.parts[r]));
                    c[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function s() {
            var e = document.createElement("style");
            return e.type = "text/css",
            f.appendChild(e),
            e
        }
        function o(e) {
            var t, i, n = document.querySelector("style[" + b + '~="' + e.id + '"]');
            if (n) {
                if (v) return m;
                n.parentNode.removeChild(n)
            }
            if (x) {
                var r = h++;
                n = p || (p = s()),
                t = a.bind(null, n, r, !1),
                i = a.bind(null, n, r, !0)
            } else n = s(),
            t = d.bind(null, n),
            i = function() {
                n.parentNode.removeChild(n)
            };
            return t(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    t(e = n)
                } else i()
            }
        }
        function a(e, t, i, n) {
            var r = i ? "": n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, r);
            else {
                var s = document.createTextNode(r),
                o = e.childNodes;
                o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(s, o[t]) : e.appendChild(s)
            }
        }
        function d(e, t) {
            var i = t.css,
            n = t.media,
            r = t.sourceMap;
            if (n && e.setAttribute("media", n), g.ssrId && e.setAttribute(b, t.id), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = n;
        var l = i(2),
        u = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = {},
        f = u && (document.head || document.getElementsByTagName("head")[0]),
        p = null,
        h = 0,
        v = !1,
        m = function() {},
        g = null,
        b = "data-vue-ssr-id",
        x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
        y = function() {
            var e = [];
            return function(t, i) {
                return e[t] = i,
                e.filter(Boolean).join("\n")
            }
        } ()
    },
    function(e, t, i) {
        "use strict";
        function n(e, t) {
            for (var i = [], n = {},
            r = 0; r < t.length; r++) {
                var s = t[r],
                o = s[0],
                a = s[1],
                d = s[2],
                l = s[3],
                u = {
                    id: e + ":" + r,
                    css: a,
                    media: d,
                    sourceMap: l
                };
                n[o] ? n[o].parts.push(u) : i.push(n[o] = {
                    id: o,
                    parts: [u]
                })
            }
            return i
        }
        t.a = n
    },
    function(e, t, i) {
        "use strict";
        function n(e, t, i, n, r, s, o, a) {
            e = e || {};
            var d = typeof e.
        default;
            "object" !== d && "function" !== d || (e = e.
        default);
            var l = "function" == typeof e ? e.options: e;
            t && (l.render = t, l.staticRenderFns = i, l._compiled = !0),
            n && (l.functional = !0),
            s && (l._scopeId = s);
            var u;
            if (o ? (u = function(e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                r && r.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(o)
            },
            l._ssrRegister = u) : r && (u = a ?
            function() {
                r.call(this, this.$root.$options.shadowRoot)
            }: r), u) if (l.functional) {
                l._injectStyles = u;
                var c = l.render;
                l.render = function(e, t) {
                    return u.call(t),
                    c(e, t)
                }
            } else {
                var f = l.beforeCreate;
                l.beforeCreate = f ? [].concat(f, u) : [u]
            }
            return {
                exports: e,
                options: l
            }
        }
        t.a = n
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(11);
        i(12);
        t.
    default = {
            mixins: [n.VueExtend.mixin],
            name: "maliangeditor",
            label: "轮播组件",
            style: {
                width: "500px",
                height: "250px"
            },
            stack: !1,
            childLimit: 9999,
            leaf: !1,
            data: function() {
                return {
                    currentIndex: 1,
                    distance: -this.imgWidth,
                    transitionEnd: !0,
                    swiperlength: 3
                }
            },
            props: {
                area: {
                    type: String,
                default:
                    "默认",
                    editer: {
                        label: "区域",
                        type: "enum",
                        defaultList: ["区域1", "区域2", "区域3", "区域4"]
                    }
                },
                terminal: {
                    type: String,
                default:
                    "默认",
                    editer: {
                        label: "终端",
                        type: "enum",
                        defaultList: ["终端1", "终端2"]
                    }
                },
                interfacechoose: {
                default:
                    "",
                    editer: {
                        label: "数据源",
                        type: "enum",
                        defaultList: ["默认", "/getSwiper", "/getinfo"]
                    }
                },
                ispagin: {
                    type: Boolean,
                default:
                    !1,
                    editer: {
                        label: "是否隐藏指示器",
                        type: "ispagin"
                    }
                },
                isbutton: {
                    type: Boolean,
                default:
                    !1,
                    editer: {
                        label: "是否显示切换箭头",
                        type: "isbutton"
                    }
                },
                iscards: {
                    type: Boolean,
                default:
                    !1,
                    editer: {
                        label: "轮播效果",
                        type: "iscards"
                    }
                },
                imgWidth: {
                    type: Number,
                default:
                    500,
                    editer: {
                        label: "轮播区宽度",
                        type: "number"
                    }
                },
                imgHeight: {
                    type: Number,
                default:
                    250,
                    editer: {
                        label: "轮播高度",
                        type: "number"
                    }
                },
                picnum: {
                    type: Number,
                default:
                    3,
                    editer: {
                        label: "图片数量",
                        type: "number"
                    }
                },
                initialSpeed: {
                    type: Number,
                default:
                    30,
                    editer: {
                        label: "轮播速度/px",
                        type: "number"
                    }
                },
                initialInterval: {
                    type: Number,
                default:
                    3,
                    editer: {
                        label: "轮播时间/秒",
                        type: "number"
                    }
                },
                sliders: {
                    type: Array,
                    editer: {
                        label: "none",
                        type: "sliders"
                    },
                default:
                    function() {
                        return [{
                            showimg:
                            !1,
                            label: "轮播标题1",
                            icourl: "",
                            imgurl: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
                            imgid: 0
                        },
                        {
                            showimg: !1,
                            label: "轮播标题2",
                            icourl: "",
                            imgurl: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                            imgid: 1
                        },
                        {
                            showimg: !1,
                            label: "轮播标题3",
                            icourl: "",
                            imgurl: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                            imgid: 2
                        }]
                    }
                }
            },
            computed: {
                containerStyle: function() {
                    return {
                        left: this.distance + "px",
                        width: (this.sliders.length + 2) * this.imgWidth + "px",
                        height: this.imgHeight + "px"
                    }
                },
                windowStyle: function() {
                    return {
                        width: this.imgWidth + "px",
                        height: this.imgHeight + "px"
                    }
                },
                interval: function() {
                    return 1e3 * this.initialInterval
                },
                dotsWidth: function() {
                    return {
                        width: 21 * this.sliders.length + "px",
                        "margin-left": -21 * this.sliders.length / 2 + "px"
                    }
                },
                cardsShow: function() {
                    return {
                        "z-index": 10
                    }
                }
            },
            mounted: function() {
                this.init()
            },
            methods: {
                init: function() {
                    this.play(),
                    window.onblur = function() {
                        this.stop()
                    }.bind(this),
                    window.onfocus = function() {
                        this.play()
                    }.bind(this)
                },
                move: function(e, t, i) {
                    if (console.log(t), this.iscards && (1 == t ? (this.currentIndex > this.picnum && (this.currentIndex = 1), this.currentIndex < 1 && (this.currentIndex = this.picnum)) : -1 == t && (this.currentIndex > this.picnum && (this.currentIndex = 1), this.currentIndex < 1 && (this.currentIndex = this.picnum))), this.transitionEnd) {
                        this.transitionEnd = !1,
                        -1 === t ? this.currentIndex += e / this.imgWidth: this.currentIndex -= e / this.imgWidth,
                        this.currentIndex > this.picnum && (this.currentIndex = 1),
                        this.currentIndex < 1 && (this.currentIndex = this.picnum);
                        var n = this.distance + e * t;
                        this.animate(n, t, i)
                    }
                },
                animate: function(e, t, i) {
                    var n = this;
                    this.temp && (window.clearInterval(this.temp), this.temp = null),
                    this.temp = window.setInterval(function() { - 1 === t && e < n.distance || 1 === t && e > n.distance ? n.distance += i * t: (n.transitionEnd = !0, window.clearInterval(n.temp), n.distance = e, e < -n.sliders.length * n.imgWidth && (n.distance = -n.imgWidth), e > -n.imgWidth && (n.distance = -(n.sliders.length + 2) * n.imgWidth))
                    },
                    20)
                },
                jump: function(e) {
                    var t = e - this.currentIndex >= 0 ? -1 : 1,
                    i = Math.abs(e - this.currentIndex) * this.imgWidth,
                    n = 0 === Math.abs(e - this.currentIndex) ? this.initialSpeed: Math.abs(e - this.currentIndex) * this.initialSpeed;
                    this.move(i, t, n)
                },
                play: function() {
                    var e = this;
                    this.timer && (window.clearInterval(this.timer), this.timer = null),
                    this.timer = window.setInterval(function() {
                        e.move(e.imgWidth, -1, e.initialSpeed)
                    },
                    this.interval)
                },
                stop: function() {
                    window.clearInterval(this.timer),
                    this.timer = null
                }
            },
            watch: {
                swiperlength: function(e) {
                    this.picnum = e
                },
                picnum: function(e) {
                    console.log(e),
                    this.sliders.splice(0, this.sliders.length);
                    for (var t = 0; t < e; t++) {
                        var i = {
                            showimg: !1,
                            label: "轮播图",
                            icourl: "",
                            imgurl: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
                            imgid: t
                        },
                        n = {
                            showimg: !1,
                            label: "轮播图",
                            icourl: "",
                            imgurl: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
                            imgid: t
                        };
                        t % 2 == 0 && this.sliders.push(i),
                        t % 2 == 1 && this.sliders.push(n)
                    }
                    var r = JSON.parse(JSON.stringify(this.sliders));
                    r[0].label = "gaibian",
                    this.sliders = r,
                    console.log(this.sliders)
                },
                interval: function() {
                    this.play()
                },
                sliders: {
                    handler: function(e, t) {
                        console.log(e),
                        this.sliders = e
                    },
                    deep: !0
                }
            }
        }
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = void 0;
        var n = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
            i = null;
            return function() {
                for (var n = this,
                r = arguments.length,
                s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
                clearTimeout(i),
                i = setTimeout(function() {
                    e.apply(n, s)
                },
                t)
            }
        };
        t.
    default = n
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SensorTabIndex = t.SensorClassName = t.SensorStyle = t.SizeSensorId = void 0;
        t.SizeSensorId = "size-sensor-id";
        t.SensorStyle = "display:block;position:absolute;top:0;left:0;height:100%;width:auto;overflow:hidden;pointer-events:none;z-index:-1;opacity:0";
        t.SensorClassName = "size-sensor-object";
        t.SensorTabIndex = "-1"
    },
    ,
    function(e, t, i) {
        "use strict";
        function n(e) {
            i(9)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(4),
        s = i.n(r);
        for (var o in r)"default" !== o &&
        function(e) {
            i.d(t, e,
            function() {
                return r[e]
            })
        } (o);
        var a = i(18),
        d = i(3),
        l = n,
        u = Object(d.a)(s.a, a.a, a.b, !1, l, "data-v-156acebb", null);
        t.
    default = u.exports
    },
    function(e, t, i) {
        var n = i(10);
        "string" == typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
        var r = i(1).
    default;
        r("817a6ee2", n, !0, {})
    },
    function(e, t, i) {
        t = e.exports = i(0)(!1),
        t.push([e.i, ".component[data-v-156acebb]{width:100%;height:100%}[data-v-156acebb]{box-sizing:border-box;margin:0;padding:0}ol[data-v-156acebb],ul[data-v-156acebb]{list-style:none}#slider[data-v-156acebb]{width:100%;height:100%;text-align:center}.window[data-v-156acebb]{position:relative;width:600px;height:400px;margin:0 auto;overflow:hidden}.container[data-v-156acebb]{height:200px;position:absolute;top:0;left:0}.container-cards[data-v-156acebb]{width:500px;height:250px;position:relative}.container-cards li[data-v-156acebb]{width:500px;height:250px;top:0;left:0;position:absolute}.container li[data-v-156acebb]{float:left}.left[data-v-156acebb],.right[data-v-156acebb]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:50px;height:50px;z-index:100;background:#000;opacity:.5;border-radius:50%;cursor:pointer}.left[data-v-156acebb]{left:3%;padding-left:12px;padding-top:10px}.right[data-v-156acebb]{right:3%;padding-right:12px;padding-top:10px}img[data-v-156acebb]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dots[data-v-156acebb]{position:absolute;bottom:10px;left:50%;z-index:100}.dots li[data-v-156acebb]{display:inline-block;width:15px;height:15px;margin:0 3px;border:1px solid #fff;border-radius:50%;background-color:#333;cursor:pointer}.dots .dotted[data-v-156acebb]{background-color:orange}", ""])
    },
    function(t, i) {
        t.exports = e
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ver = t.clear = t.bind = void 0;
        var n = i(13),
        r = function(e, t) {
            var i = (0, n.getSensor)(e);
            return i.bind(t),
            function() {
                i.unbind(t)
            }
        };
        t.bind = r;
        var s = function(e) {
            var t = (0, n.getSensor)(e); (0, n.removeSensor)(t)
        };
        t.clear = s;
        t.ver = "0.2.7"
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeSensor = t.getSensor = void 0;
        var n = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (i(14)),
        r = i(15),
        s = i(6),
        o = {},
        a = function(e) {
            var t = e.getAttribute(s.SizeSensorId);
            if (t && o[t]) return o[t];
            var i = (0, n.
        default)();
            e.setAttribute(s.SizeSensorId, i);
            var a = (0, r.createSensor)(e);
            return o[i] = a,
            a
        };
        t.getSensor = a;
        var d = function(e) {
            var t = e.element.getAttribute(s.SizeSensorId);
            e.element.removeAttribute(s.SizeSensorId),
            e.destroy(),
            t && o[t] && delete o[t]
        };
        t.removeSensor = d
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = void 0;
        var n = 1,
        r = function() {
            return "".concat(n++)
        };
        t.
    default = r
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createSensor = void 0;
        var n = i(16),
        r = i(17),
        s = "undefined" != typeof ResizeObserver ? r.createSensor: n.createSensor;
        t.createSensor = s
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createSensor = void 0;
        var n = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (i(5)),
        r = i(6),
        s = function(e) {
            var t = void 0,
            i = [],
            s = function() {
                "static" === getComputedStyle(e).position && (e.style.position = "relative");
                var t = document.createElement("object");
                return t.onload = function() {
                    t.contentDocument.defaultView.addEventListener("resize", o),
                    o()
                },
                t.setAttribute("style", r.SensorStyle),
                t.setAttribute("class", r.SensorClassName),
                t.setAttribute("tabindex", r.SensorTabIndex),
                t.type = "text/html",
                e.appendChild(t),
                t.data = "about:blank",
                t
            },
            o = (0, n.
        default)(function() {
                i.forEach(function(t) {
                    t(e)
                })
            }),
            a = function(e) {
                t || (t = s()),
                -1 === i.indexOf(e) && i.push(e)
            },
            d = function() {
                t && t.parentNode && (t.contentDocument && t.contentDocument.defaultView.removeEventListener("resize", o), t.parentNode.removeChild(t), t = void 0, i = [])
            };
            return {
                element: e,
                bind: a,
                destroy: d,
                unbind: function(e) {
                    var n = i.indexOf(e); - 1 !== n && i.splice(n, 1),
                    0 === i.length && t && d()
                }
            }
        };
        t.createSensor = s
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createSensor = void 0;
        var n = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (i(5)),
        r = function(e) {
            var t = void 0,
            i = [],
            r = (0, n.
        default)(function() {
                i.forEach(function(t) {
                    t(e)
                })
            }),
            s = function() {
                var t = new ResizeObserver(r);
                return t.observe(e),
                r(),
                t
            },
            o = function(e) {
                t || (t = s()),
                -1 === i.indexOf(e) && i.push(e)
            },
            a = function() {
                t.disconnect(),
                i = [],
                t = void 0
            };
            return {
                element: e,
                bind: o,
                destroy: a,
                unbind: function(e) {
                    var n = i.indexOf(e); - 1 !== n && i.splice(n, 1),
                    0 === i.length && t && a()
                }
            }
        };
        t.createSensor = r
    },
    function(e, t, i) {
        "use strict";
        i.d(t, "a",
        function() {
            return n
        }),
        i.d(t, "b",
        function() {
            return r
        });
        var n = function() {
            var e = this,
            t = e.$createElement,
            i = e._self._c || t;
            return i("div", {
                attrs: {
                    id: "slider"
                }
            },
            [i("div", {
                staticClass: "window",
                style: e.windowStyle,
                on: {
                    mouseover: e.stop,
                    mouseleave: e.play
                }
            },
            [e.iscards ? e._e() : i("ul", {
                staticClass: "container",
                style: e.containerStyle
            },
            [i("li", [i("img", {
                style: "width:" + e.imgWidth + "px;height:" + e.imgHeight + "px",
                attrs: {
                    src: e.sliders[this.sliders.length - 1].imgurl,
                    alt: ""
                }
            })]), e._v(" "), e._l(e.sliders,
            function(t, n) {
                return i("li", {
                    key: n
                },
                [i("img", {
                    style: "width:" + e.imgWidth + "px;height:" + e.imgHeight + "px",
                    attrs: {
                        src: t.imgurl,
                        alt: ""
                    }
                })])
            }), e._v(" "), i("li", [i("img", {
                style: "width:" + e.imgWidth + "px;height:" + e.imgHeight + "px",
                attrs: {
                    src: e.sliders[0].imgurl,
                    alt: ""
                }
            })])], 2), e._v(" "), e.iscards ? i("ul", {
                staticClass: "container-cards"
            },
            e._l(e.sliders,
            function(t, n) {
                return i("li", {
                    key: n,
                    style: e.currentIndex - 1 == n ? e.cardsShow: ""
                },
                [i("img", {
                    style: "width:" + e.imgWidth + "px;height:" + e.imgHeight + "px",
                    attrs: {
                        src: t.imgurl,
                        alt: ""
                    }
                })])
            }), 0) : e._e(), e._v(" "), e.isbutton ? i("ul", {
                staticClass: "direction"
            },
            [i("li", {
                staticClass: "left",
                on: {
                    click: function(t) {
                        return e.move(e.imgWidth, 1, e.initialSpeed)
                    }
                }
            },
            [i("svg", {
                staticClass: "icon",
                attrs: {
                    width: "30px",
                    height: "30.00px",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            },
            [i("path", {
                attrs: {
                    fill: "#ffffff",
                    d: "M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
                }
            })])]), e._v(" "), i("li", {
                staticClass: "right",
                on: {
                    click: function(t) {
                        return e.move(e.imgWidth, -1, e.initialSpeed)
                    }
                }
            },
            [i("svg", {
                staticClass: "icon",
                attrs: {
                    width: "30px",
                    height: "30.00px",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            },
            [i("path", {
                attrs: {
                    fill: "#ffffff",
                    d: "M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
                }
            })])])]) : e._e(), e._v(" "), e.ispagin ? i("ul", {
                staticClass: "dots",
                style: e.dotsWidth
            },
            e._l(e.sliders,
            function(t, n) {
                return i("li", {
                    key: n,
                    class: {
                        dotted: n === e.currentIndex - 1
                    },
                    on: {
                        click: function(t) {
                            return e.jump(n + 1)
                        }
                    }
                })
            }), 0) : e._e()])])
        },
        r = []
    }])
});