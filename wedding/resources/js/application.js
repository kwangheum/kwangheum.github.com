function createMethod(t) {
    return function() {
        throw new Error('The "' + t + "\" method is not available on the playback technology's API")
    }
}
Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            o = function() {
                return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
            };
        return i.prototype = this.prototype, o.prototype = new i, o
    }),
    function(t, e) {
        function n(t) {
            var e = t.length,
                n = ce.type(t);
            return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t) {
            var e = Ce[t] = {};
            return ce.each(t.match(de) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function o(t, n, i, o) {
            if (ce.acceptData(t)) {
                var s, r, a = ce.expando,
                    l = t.nodeType,
                    u = l ? ce.cache : t,
                    c = l ? t[a] : t[a] && a;
                if (c && u[c] && (o || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[a] = ee.pop() || ce.guid++ : a), u[c] || (u[c] = l ? {} : {
                    toJSON: ce.noop
                }), ("object" == typeof n || "function" == typeof n) && (o ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), r = u[c], o || (r.data || (r.data = {}), r = r.data), i !== e && (r[ce.camelCase(n)] = i), "string" == typeof n ? (s = r[n], null == s && (s = r[ce.camelCase(n)])) : s = r, s
            }
        }

        function s(t, e, n) {
            if (ce.acceptData(t)) {
                var i, o, s = t.nodeType,
                    r = s ? ce.cache : t,
                    l = s ? t[ce.expando] : ce.expando;
                if (r[l]) {
                    if (e && (i = n ? r[l] : r[l].data)) {
                        ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !a(i) : !ce.isEmptyObject(i)) return
                    }(n || (delete r[l].data, a(r[l]))) && (s ? ce.cleanData([t], !0) : ce.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
                }
            }
        }

        function r(t, n, i) {
            if (i === e && 1 === t.nodeType) {
                var o = "data-" + n.replace(Se, "-$1").toLowerCase();
                if (i = t.getAttribute(o), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ke.test(i) ? ce.parseJSON(i) : i
                    } catch (s) {}
                    ce.data(t, n, i)
                } else i = e
            }
            return i
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return K.activeElement
            } catch (t) {}
        }

        function h(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function d(t, e, n) {
            if (ce.isFunction(e)) return ce.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ce.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Xe.test(e)) return ce.filter(e, t, n);
                e = ce.filter(e, t)
            }
            return ce.grep(t, function(t) {
                return ce.inArray(t, e) >= 0 !== n
            })
        }

        function p(t) {
            var e = Ue.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function f(t, e) {
            return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
        }

        function v(t) {
            var e = sn.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ce.hasData(t)) {
                var n, i, o, s = ce._data(t),
                    r = ce._data(e, s),
                    a = s.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) ce.event.add(e, n, a[n][i])
                }
                r.data && (r.data = ce.extend({}, r.data))
            }
        }

        function b(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                    o = ce._data(e);
                    for (i in o.events) ce.removeEvent(e, i, o.handle);
                    e.removeAttribute(ce.expando)
                }
                "script" === n && e.text !== t.text ? (g(e).text = t.text, v(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function w(t, n) {
            var i, o, s = 0,
                r = typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== Y ? t.querySelectorAll(n || "*") : e;
            if (!r)
                for (r = [], i = t.childNodes || t; null != (o = i[s]); s++)!n || ce.nodeName(o, n) ? r.push(o) : ce.merge(r, w(o, n));
            return n === e || n && ce.nodeName(t, n) ? ce.merge([t], r) : r
        }

        function _(t) {
            en.test(t.type) && (t.defaultChecked = t.checked)
        }

        function j(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Cn.length; o--;)
                if (e = Cn[o] + n, e in t) return e;
            return i
        }

        function x(t, e) {
            return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
        }

        function T(t, e) {
            for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++) i = t[r], i.style && (s[r] = ce._data(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && x(i) && (s[r] = ce._data(i, "olddisplay", E(i.nodeName)))) : s[r] || (o = x(i), (n && "none" !== n || !o) && ce._data(i, "olddisplay", o ? n : ce.css(i, "display"))));
            for (r = 0; a > r; r++) i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function C(t, e, n) {
            var i = yn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function k(t, e, n, i, o) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += ce.css(t, n + Tn[s], !0, o)), i ? ("content" === n && (r -= ce.css(t, "padding" + Tn[s], !0, o)), "margin" !== n && (r -= ce.css(t, "border" + Tn[s] + "Width", !0, o))) : (r += ce.css(t, "padding" + Tn[s], !0, o), "padding" !== n && (r += ce.css(t, "border" + Tn[s] + "Width", !0, o)));
            return r
        }

        function S(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = hn(t),
                r = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, s);
            if (0 >= o || null == o) {
                if (o = dn(t, e, s), (0 > o || null == o) && (o = t.style[e]), bn.test(o)) return o;
                i = r && (ce.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + k(t, e, n || (r ? "border" : "content"), i, s) + "px"
        }

        function E(t) {
            var e = K,
                n = _n[t];
            return n || (n = P(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = P(t, e), cn.detach()), _n[t] = n), n
        }

        function P(t, e) {
            var n = ce(e.createElement(t)).appendTo(e.body),
                i = ce.css(n[0], "display");
            return n.remove(), i
        }

        function N(t, e, n, i) {
            var o;
            if (ce.isArray(e)) ce.each(e, function(e, o) {
                n || Sn.test(t) ? i(t, o) : N(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ce.type(e)) i(t, e);
            else
                for (o in e) N(t + "[" + o + "]", e[o], n, i)
        }

        function D(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    s = e.toLowerCase().match(de) || [];
                if (ce.isFunction(n))
                    for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function A(t, e, n, i) {
            function o(a) {
                var l;
                return s[a] = !0, ce.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || r || s[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var s = {},
                r = t === zn;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function M(t, n) {
            var i, o, s = ce.ajaxSettings.flatOptions || {};
            for (o in n) n[o] !== e && ((s[o] ? t : i || (i = {}))[o] = n[o]);
            return i && ce.extend(!0, t, i), t
        }

        function I(t, n, i) {
            for (var o, s, r, a, l = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), s === e && (s = t.mimeType || n.getResponseHeader("Content-Type"));
            if (s)
                for (a in l)
                    if (l[a] && l[a].test(s)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in i) r = u[0];
            else {
                for (a in i) {
                    if (!u[0] || t.converters[a + " " + u[0]]) {
                        r = a;
                        break
                    }
                    o || (o = a)
                }
                r = r || o
            }
            return r ? (r !== u[0] && u.unshift(r), i[r]) : void 0
        }

        function F(t, e, n, i) {
            var o, s, r, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (r = u[l + " " + s] || u["* " + s], !r)
                    for (o in u)
                        if (a = o.split(" "), a[1] === s && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                            r === !0 ? r = u[o] : u[o] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: r ? h : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function H() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function B() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function O() {
            return setTimeout(function() {
                Zn = e
            }), Zn = ce.now()
        }

        function L(t, e, n) {
            for (var i, o = (si[e] || []).concat(si["*"]), s = 0, r = o.length; r > s; s++)
                if (i = o[s].call(n, e, t)) return i
        }

        function R(t, e, n) {
            var i, o, s = 0,
                r = oi.length,
                a = ce.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Zn || O(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(s);
                    return a.notifyWith(t, [u, s, n]), 1 > s && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ce.extend({}, e),
                    opts: ce.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Zn || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for ($(c, u.opts.specialEasing); r > s; s++)
                if (i = oi[s].call(u, t, c, u.opts)) return i;
            return ce.map(c, L, u), ce.isFunction(u.opts.start) && u.opts.start.call(t, u), ce.fx.timer(ce.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function $(t, e) {
            var n, i, o, s, r;
            for (n in t)
                if (i = ce.camelCase(n), o = e[i], s = t[n], ce.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), r = ce.cssHooks[i], r && "expand" in r) {
                    s = r.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = o)
                } else e[i] = o
        }

        function X(t, e, n) {
            var i, o, s, r, a, l, u = this,
                c = {},
                h = t.style,
                d = t.nodeType && x(t),
                p = ce._data(t, "fxshow");
            n.queue || (a = ce._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ce.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], ei.exec(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (d ? "hide" : "show")) continue;
                    c[i] = p && p[i] || ce.style(t, i)
                }
            if (!ce.isEmptyObject(c)) {
                p ? "hidden" in p && (d = p.hidden) : p = ce._data(t, "fxshow", {}), s && (p.hidden = !d), d ? ce(t).show() : u.done(function() {
                    ce(t).hide()
                }), u.done(function() {
                    var e;
                    ce._removeData(t, "fxshow");
                    for (e in c) ce.style(t, e, c[e])
                });
                for (i in c) r = L(d ? p[i] : 0, i, u), i in p || (p[i] = r.start, d && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(t, e, n, i, o) {
            return new W.prototype.init(t, e, n, i, o)
        }

        function z(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Tn[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function q(t) {
            return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var U, V, Y = typeof e,
            G = t.location,
            K = t.document,
            J = K.documentElement,
            Q = t.jQuery,
            Z = t.$,
            te = {},
            ee = [],
            ne = "1.10.2",
            ie = ee.concat,
            oe = ee.push,
            se = ee.slice,
            re = ee.indexOf,
            ae = te.toString,
            le = te.hasOwnProperty,
            ue = ne.trim,
            ce = function(t, e) {
                return new ce.fn.init(t, e, V)
            },
            he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            de = /\S+/g,
            pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ve = /^[\],:{}\s]*$/,
            me = /(?:^|:|,)(?:\s*\[)+/g,
            ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            we = /^-ms-/,
            _e = /-([\da-z])/gi,
            je = function(t, e) {
                return e.toUpperCase()
            },
            xe = function(t) {
                (K.addEventListener || "load" === t.type || "complete" === K.readyState) && (Te(), ce.ready())
            },
            Te = function() {
                K.addEventListener ? (K.removeEventListener("DOMContentLoaded", xe, !1), t.removeEventListener("load", xe, !1)) : (K.detachEvent("onreadystatechange", xe), t.detachEvent("onload", xe))
            };
        ce.fn = ce.prototype = {
                jquery: ne,
                constructor: ce,
                init: function(t, n, i) {
                    var o, s;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                        if (o[1]) {
                            if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), ge.test(o[1]) && ce.isPlainObject(n))
                                for (o in n) ce.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if (s = K.getElementById(o[2]), s && s.parentNode) {
                            if (s.id !== o[2]) return i.find(t);
                            this.length = 1, this[0] = s
                        }
                        return this.context = K, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return se.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ce.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return ce.each(this, t, e)
                },
                ready: function(t) {
                    return ce.ready.promise().done(t), this
                },
                slice: function() {
                    return this.pushStack(se.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                map: function(t) {
                    return this.pushStack(ce.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: oe,
                sort: [].sort,
                splice: [].splice
            }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
                var t, n, i, o, s, r, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ce.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (s = arguments[l]))
                        for (o in s) t = a[o], i = s[o], a !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, r = t && ce.isArray(t) ? t : []) : r = t && ce.isPlainObject(t) ? t : {}, a[o] = ce.extend(c, r, i)) : i !== e && (a[o] = i));
                return a
            }, ce.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = Q), ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ce.readyWait++ : ce.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ce.readyWait : !ce.isReady) {
                        if (!K.body) return setTimeout(ce.ready);
                        ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (U.resolveWith(K, [ce]), ce.fn.trigger && ce(K).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ce.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ce.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var n;
                    if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ce.support.ownLast)
                        for (n in t) return le.call(t, n);
                    for (n in t);
                    return n === e || le.call(t, n)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw new Error(t)
                },
                parseHTML: function(t, e, n) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (n = e, e = !1), e = e || K;
                    var i = ge.exec(t),
                        o = !n && [];
                    return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, o), o && ce(o).remove(), ce.merge([], i.childNodes))
                },
                parseJSON: function(e) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ce.trim(e), e && ve.test(e.replace(ye, "@").replace(be, "]").replace(me, ""))) ? new Function("return " + e)() : (ce.error("Invalid JSON: " + e), void 0)
                },
                parseXML: function(n) {
                    var i, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (s) {
                        i = e
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ce.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(we, "ms-").replace(_e, je)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, i) {
                    var o, s = 0,
                        r = t.length,
                        a = n(t);
                    if (i) {
                        if (a)
                            for (; r > s && (o = e.apply(t[s], i), o !== !1); s++);
                        else
                            for (s in t)
                                if (o = e.apply(t[s], i), o === !1) break
                    } else if (a)
                        for (; r > s && (o = e.call(t[s], s, t[s]), o !== !1); s++);
                    else
                        for (s in t)
                            if (o = e.call(t[s], s, t[s]), o === !1) break; return t
                },
                trim: ue && !ue.call("﻿ ") ? function(t) {
                    return null == t ? "" : ue.call(t)
                } : function(t) {
                    return null == t ? "" : (t + "").replace(pe, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : oe.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (re) return re.call(e, t, n);
                        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function(t, n) {
                    var i = n.length,
                        o = t.length,
                        s = 0;
                    if ("number" == typeof i)
                        for (; i > s; s++) t[o++] = n[s];
                    else
                        for (; n[s] !== e;) t[o++] = n[s++];
                    return t.length = o, t
                },
                grep: function(t, e, n) {
                    var i, o = [],
                        s = 0,
                        r = t.length;
                    for (n = !!n; r > s; s++) i = !!e(t[s], s), n !== i && o.push(t[s]);
                    return o
                },
                map: function(t, e, i) {
                    var o, s = 0,
                        r = t.length,
                        a = n(t),
                        l = [];
                    if (a)
                        for (; r > s; s++) o = e(t[s], s, i), null != o && (l[l.length] = o);
                    else
                        for (s in t) o = e(t[s], s, i), null != o && (l[l.length] = o);
                    return ie.apply([], l)
                },
                guid: 1,
                proxy: function(t, n) {
                    var i, o, s;
                    return "string" == typeof n && (s = t[n], n = t, t = s), ce.isFunction(t) ? (i = se.call(arguments, 2), o = function() {
                        return t.apply(n || this, i.concat(se.call(arguments)))
                    }, o.guid = t.guid = t.guid || ce.guid++, o) : e
                },
                access: function(t, n, i, o, s, r, a) {
                    var l = 0,
                        u = t.length,
                        c = null == i;
                    if ("object" === ce.type(i)) {
                        s = !0;
                        for (l in i) ce.access(t, n, l, i[l], !0, r, a)
                    } else if (o !== e && (s = !0, ce.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function(t, e, n) {
                        return c.call(ce(t), n)
                    })), n))
                        for (; u > l; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
                    return s ? t : c ? n.call(t) : u ? n(t[0], i) : r
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, n, i) {
                    var o, s, r = {};
                    for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                    o = n.apply(t, i || []);
                    for (s in e) t.style[s] = r[s];
                    return o
                }
            }), ce.ready.promise = function(e) {
                if (!U)
                    if (U = ce.Deferred(), "complete" === K.readyState) setTimeout(ce.ready);
                    else if (K.addEventListener) K.addEventListener("DOMContentLoaded", xe, !1), t.addEventListener("load", xe, !1);
                else {
                    K.attachEvent("onreadystatechange", xe), t.attachEvent("onload", xe);
                    var n = !1;
                    try {
                        n = null == t.frameElement && K.documentElement
                    } catch (i) {}
                    n && n.doScroll && function o() {
                        if (!ce.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(o, 50)
                            }
                            Te(), ce.ready()
                        }
                    }()
                }
                return U.promise(e)
            }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                te["[object " + e + "]"] = e.toLowerCase()
            }), V = ce(K),
            function(t, e) {
                function n(t, e, n, i) {
                    var o, s, r, a, l, u, c, h, f, g;
                    if ((e ? e.ownerDocument || e : R) !== A && D(e), e = e || A, n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (I && !i) {
                        if (o = be.exec(t))
                            if (r = o[1]) {
                                if (9 === a) {
                                    if (s = e.getElementById(r), !s || !s.parentNode) return n;
                                    if (s.id === r) return n.push(s), n
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && O(e, s) && s.id === r) return n.push(s), n
                            } else {
                                if (o[2]) return te.apply(n, e.getElementsByTagName(t)), n;
                                if ((r = o[3]) && x.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(r)), n
                            }
                        if (x.qsa && (!F || !F.test(t))) {
                            if (h = c = L, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (u = d(t), (c = e.getAttribute("id")) ? h = c.replace(je, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + p(u[l]);
                                f = pe.test(t) && e.parentNode || e, g = u.join(",")
                            }
                            if (g) try {
                                return te.apply(n, f.querySelectorAll(g)), n
                            } catch (v) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return _(t.replace(ue, "$1"), e, n, i)
                }

                function i() {
                    function t(n, i) {
                        return e.push(n += " ") > C.cacheLength && delete t[e.shift()], t[n] = i
                    }
                    var e = [];
                    return t
                }

                function o(t) {
                    return t[L] = !0, t
                }

                function s(t) {
                    var e = A.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function r(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return o(function(e) {
                        return e = +e, o(function(n, i) {
                            for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function h() {}

                function d(t, e) {
                    var i, o, s, r, a, l, u, c = z[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], u = C.preFilter; a;) {
                        (!i || (o = he.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = de.exec(a)) && (i = o.shift(), s.push({
                            value: i,
                            type: o[0].replace(ue, " ")
                        }), a = a.slice(i.length));
                        for (r in C.filter)!(o = me[r].exec(a)) || u[r] && !(o = u[r](o)) || (i = o.shift(), s.push({
                            value: i,
                            type: r,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? n.error(t) : z(t, l).slice(0)
                }

                function p(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir,
                        o = n && "parentNode" === i,
                        s = X++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, s)
                    } : function(e, n, r) {
                        var a, l, u, c = $ + " " + s;
                        if (r) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o)
                                    if (u = e[L] || (e[L] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === T) return a === !0
                                    } else if (l = u[i] = [c], l[1] = t(e, n, r) || T, l[1] === !0) return !0
                    }
                }

                function g(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function v(t, e, n, i, o) {
                    for (var s, r = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, o)) && (r.push(s), u && e.push(a));
                    return r
                }

                function m(t, e, n, i, s, r) {
                    return i && !i[L] && (i = m(i)), s && !s[L] && (s = m(s, r)), o(function(o, r, a, l) {
                        var u, c, h, d = [],
                            p = [],
                            f = r.length,
                            g = o || w(e || "*", a.nodeType ? [a] : a, []),
                            m = !t || !o && e ? g : v(g, d, t, a, l),
                            y = n ? s || (o ? t : f || i) ? [] : r : m;
                        if (n && n(m, y, a, l), i)
                            for (u = v(y, p), i(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(m[p[c]] = h));
                        if (o) {
                            if (s || t) {
                                if (s) {
                                    for (u = [], c = y.length; c--;)(h = y[c]) && u.push(m[c] = h);
                                    s(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(h = y[c]) && (u = s ? ne.call(o, h) : d[c]) > -1 && (o[u] = !(r[u] = h))
                            }
                        } else y = v(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : te.apply(r, y)
                    })
                }

                function y(t) {
                    for (var e, n, i, o = t.length, s = C.relative[t[0].type], r = s || C.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, r, !0), u = f(function(t) {
                        return ne.call(e, t) > -1
                    }, r, !0), c = [
                        function(t, n, i) {
                            return !s && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                        }
                    ]; o > a; a++)
                        if (n = C.relative[t[a].type]) c = [f(g(c), n)];
                        else {
                            if (n = C.filter[t[a].type].apply(null, t[a].matches), n[L]) {
                                for (i = ++a; o > i && !C.relative[t[i].type]; i++);
                                return m(a > 1 && g(c), a > 1 && p(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                            }
                            c.push(n)
                        }
                    return g(c)
                }

                function b(t, e) {
                    var i = 0,
                        s = e.length > 0,
                        r = t.length > 0,
                        a = function(o, a, l, u, c) {
                            var h, d, p, f = [],
                                g = 0,
                                m = "0",
                                y = o && [],
                                b = null != c,
                                w = P,
                                _ = o || r && C.find.TAG("*", c && a.parentNode || a),
                                j = $ += null == w ? 1 : Math.random() || .1;
                            for (b && (P = a !== A && a, T = i); null != (h = _[m]); m++) {
                                if (r && h) {
                                    for (d = 0; p = t[d++];)
                                        if (p(h, a, l)) {
                                            u.push(h);
                                            break
                                        }
                                    b && ($ = j, T = ++i)
                                }
                                s && ((h = !p && h) && g--, o && y.push(h))
                            }
                            if (g += m, s && m !== g) {
                                for (d = 0; p = e[d++];) p(y, f, a, l);
                                if (o) {
                                    if (g > 0)
                                        for (; m--;) y[m] || f[m] || (f[m] = Q.call(u));
                                    f = v(f)
                                }
                                te.apply(u, f), b && !o && f.length > 0 && g + e.length > 1 && n.uniqueSort(u)
                            }
                            return b && ($ = j, P = w), y
                        };
                    return s ? o(a) : a
                }

                function w(t, e, i) {
                    for (var o = 0, s = e.length; s > o; o++) n(t, e[o], i);
                    return i
                }

                function _(t, e, n, i) {
                    var o, s, r, a, l, u = d(t);
                    if (!i && 1 === u.length) {
                        if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === e.nodeType && I && C.relative[s[1].type]) {
                            if (e = (C.find.ID(r.matches[0].replace(xe, Te), e) || [])[0], !e) return n;
                            t = t.slice(s.shift().value.length)
                        }
                        for (o = me.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !C.relative[a = r.type]);)
                            if ((l = C.find[a]) && (i = l(r.matches[0].replace(xe, Te), pe.test(s[0].type) && e.parentNode || e))) {
                                if (s.splice(o, 1), t = i.length && p(s), !t) return te.apply(n, i), n;
                                break
                            }
                    }
                    return E(t, u)(i, e, !I, n, pe.test(t)), n
                }
                var j, x, T, C, k, S, E, P, N, D, A, M, I, F, H, B, O, L = "sizzle" + -new Date,
                    R = t.document,
                    $ = 0,
                    X = 0,
                    W = i(),
                    z = i(),
                    q = i(),
                    U = !1,
                    V = function(t, e) {
                        return t === e ? (U = !0, 0) : 0
                    },
                    Y = typeof e,
                    G = 1 << 31,
                    K = {}.hasOwnProperty,
                    J = [],
                    Q = J.pop,
                    Z = J.push,
                    te = J.push,
                    ee = J.slice,
                    ne = J.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    oe = "[\\x20\\t\\r\\n\\f]",
                    se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = se.replace("w", "w#"),
                    ae = "\\[" + oe + "*(" + se + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + oe + "*\\]",
                    le = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                    ue = new RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
                    he = new RegExp("^" + oe + "*," + oe + "*"),
                    de = new RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
                    pe = new RegExp(oe + "*[+~]"),
                    fe = new RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"),
                    ge = new RegExp(le),
                    ve = new RegExp("^" + re + "$"),
                    me = {
                        ID: new RegExp("^#(" + se + ")"),
                        CLASS: new RegExp("^\\.(" + se + ")"),
                        TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ae),
                        PSEUDO: new RegExp("^" + le),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ie + ")$", "i"),
                        needsContext: new RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ye = /^[^{]+\{\s*\[native \w/,
                    be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    we = /^(?:input|select|textarea|button)$/i,
                    _e = /^h\d$/i,
                    je = /'|\\/g,
                    xe = new RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
                    Te = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    te.apply(J = ee.call(R.childNodes), R.childNodes), J[R.childNodes.length].nodeType
                } catch (Ce) {
                    te = {
                        apply: J.length ? function(t, e) {
                            Z.apply(t, ee.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                S = n.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, x = n.support = {}, D = n.setDocument = function(t) {
                    var e = t ? t.ownerDocument || t : R,
                        n = e.defaultView;
                    return e !== A && 9 === e.nodeType && e.documentElement ? (A = e, M = e.documentElement, I = !S(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                        D()
                    }), x.attributes = s(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = s(function(t) {
                        return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = s(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), x.getById = s(function(t) {
                        return M.appendChild(t).id = L, !e.getElementsByName || !e.getElementsByName(L).length
                    }), x.getById ? (C.find.ID = function(t, e) {
                        if (typeof e.getElementById !== Y && I) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function(t) {
                        var e = t.replace(xe, Te);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete C.find.ID, C.filter.ID = function(t) {
                        var e = t.replace(xe, Te);
                        return function(t) {
                            var n = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), C.find.TAG = x.getElementsByTagName ? function(t, e) {
                        return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, C.find.CLASS = x.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== Y && I ? e.getElementsByClassName(t) : void 0
                    }, H = [], F = [], (x.qsa = ye.test(e.querySelectorAll)) && (s(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || F.push("\\[" + oe + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || F.push(":checked")
                    }), s(function(t) {
                        var n = e.createElement("input");
                        n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && F.push("[*^$]=" + oe + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (x.matchesSelector = ye.test(B = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function(t) {
                        x.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), H.push("!=", le)
                    }), F = F.length && new RegExp(F.join("|")), H = H.length && new RegExp(H.join("|")), O = ye.test(M.contains) || M.compareDocumentPosition ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, V = M.compareDocumentPosition ? function(t, n) {
                        if (t === n) return U = !0, 0;
                        var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                        return i ? 1 & i || !x.sortDetached && n.compareDocumentPosition(t) === i ? t === e || O(R, t) ? -1 : n === e || O(R, n) ? 1 : N ? ne.call(N, t) - ne.call(N, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, n) {
                        var i, o = 0,
                            s = t.parentNode,
                            r = n.parentNode,
                            l = [t],
                            u = [n];
                        if (t === n) return U = !0, 0;
                        if (!s || !r) return t === e ? -1 : n === e ? 1 : s ? -1 : r ? 1 : N ? ne.call(N, t) - ne.call(N, n) : 0;
                        if (s === r) return a(t, n);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = n; i = i.parentNode;) u.unshift(i);
                        for (; l[o] === u[o];) o++;
                        return o ? a(l[o], u[o]) : l[o] === R ? -1 : u[o] === R ? 1 : 0
                    }, e) : A
                }, n.matches = function(t, e) {
                    return n(t, null, null, e)
                }, n.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== A && D(t), e = e.replace(fe, "='$1']"), !(!x.matchesSelector || !I || H && H.test(e) || F && F.test(e))) try {
                        var i = B.call(t, e);
                        if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (o) {}
                    return n(e, A, null, [t]).length > 0
                }, n.contains = function(t, e) {
                    return (t.ownerDocument || t) !== A && D(t), O(t, e)
                }, n.attr = function(t, n) {
                    (t.ownerDocument || t) !== A && D(t);
                    var i = C.attrHandle[n.toLowerCase()],
                        o = i && K.call(C.attrHandle, n.toLowerCase()) ? i(t, n, !I) : e;
                    return o === e ? x.attributes || !I ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
                }, n.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, n.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (U = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(V), U) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return t
                }, k = n.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i]; i++) n += k(e);
                    return n
                }, C = n.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: me,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(xe, Te), t[3] = (t[4] || t[5] || "").replace(xe, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var n, i = !t[5] && t[2];
                            return me.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ge.test(i) && (n = d(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(xe, Te).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = W[t + " "];
                            return e || (e = new RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && W(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(o) {
                                var s = n.attr(o, t);
                                return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s + " ").indexOf(i) > -1 : "|=" === e ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var s = "nth" !== t.slice(0, 3),
                                r = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, h, d, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    m = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (v) {
                                    if (s) {
                                        for (; g;) {
                                            for (h = e; h = h[g];)
                                                if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? v.firstChild : v.lastChild], r && y) {
                                        for (c = v[L] || (v[L] = {}), u = c[t] || [], p = u[0] === $ && u[1], d = u[0] === $ && u[2], h = p && v.childNodes[p]; h = ++p && h && h[g] || (d = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++d && h === e) {
                                                c[t] = [$, p, d];
                                                break
                                            }
                                    } else if (y && (u = (e[L] || (e[L] = {}))[t]) && u[0] === $) d = u[1];
                                    else
                                        for (;
                                            (h = ++p && h && h[g] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++d || (y && ((h[L] || (h[L] = {}))[t] = [$, d]), h !== e)););
                                    return d -= o, d === i || 0 === d % i && d / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                            return s[L] ? s(e) : s.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                                for (var i, o = s(t, e), r = o.length; r--;) i = ne.call(t, o[r]), t[i] = !(n[i] = o[r])
                            }) : function(t) {
                                return s(t, 0, i)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: o(function(t) {
                            var e = [],
                                n = [],
                                i = E(t.replace(ue, "$1"));
                            return i[L] ? o(function(t, e, n, o) {
                                for (var s, r = i(t, null, o, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, o, s) {
                                return e[0] = t, i(e, null, s, n), !n.pop()
                            }
                        }),
                        has: o(function(t) {
                            return function(e) {
                                return n(t, e).length > 0
                            }
                        }),
                        contains: o(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                        }),
                        lang: o(function(t) {
                            return ve.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(xe, Te).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === M
                        },
                        focus: function(t) {
                            return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !C.pseudos.empty(t)
                        },
                        header: function(t) {
                            return _e.test(t.nodeName)
                        },
                        input: function(t) {
                            return we.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (j in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[j] = l(j);
                for (j in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[j] = u(j);
                h.prototype = C.filters = C.pseudos, C.setFilters = new h, E = n.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        s = q[t + " "];
                    if (!s) {
                        for (e || (e = d(t)), n = e.length; n--;) s = y(e[n]), s[L] ? i.push(s) : o.push(s);
                        s = q(t, b(o, i))
                    }
                    return s
                }, x.sortStable = L.split("").sort(V).join("") === L, x.detectDuplicates = U, D(), x.sortDetached = s(function(t) {
                    return 1 & t.compareDocumentPosition(A.createElement("div"))
                }), s(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), x.attributes && s(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || r("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), s(function(t) {
                    return null == t.getAttribute("disabled")
                }) || r(ie, function(t, e, n) {
                    var i;
                    return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null
                }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
            }(t);
        var Ce = {};
        ce.Callbacks = function(t) {
            t = "string" == typeof t ? Ce[t] || i(t) : ce.extend({}, t);
            var n, o, s, r, a, l, u = [],
                c = !t.once && [],
                h = function(e) {
                    for (o = t.memory && e, s = !0, a = l || 0, l = 0, r = u.length, n = !0; u && r > a; a++)
                        if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            o = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && h(c.shift()) : o ? u = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (u) {
                            var e = u.length;
                            ! function i(e) {
                                ce.each(e, function(e, n) {
                                    var o = ce.type(n);
                                    "function" === o ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== o && i(n)
                                })
                            }(arguments), n ? r = u.length : o && (l = e, h(o))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ce.each(arguments, function(t, e) {
                            for (var i;
                                (i = ce.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], r = 0, this
                    },
                    disable: function() {
                        return u = c = o = e, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = e, o || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || s && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : h(e)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!s
                    }
                };
            return d
        }, ce.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ce.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ce.Deferred(function(n) {
                                ce.each(e, function(e, s) {
                                    var r = s[0],
                                        a = ce.isFunction(t[e]) && t[e];
                                    o[s[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ce.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ce.each(e, function(t, s) {
                    var r = s[2],
                        a = s[3];
                    i[s[1]] = r.add, a && r.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                        return o[s[0] + "With"](this === o ? i : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    s = se.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && ce.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : ce.Deferred(),
                    u = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? se.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) s[o] && ce.isFunction(s[o].promise) ? s[o].promise().done(u(o, i, s)).fail(l.reject).progress(u(o, n, e)) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        }), ce.support = function(e) {
            var n, i, o, s, r, a, l, u, c, h = K.createElement("div");
            if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*") || [], i = h.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
            s = K.createElement("select"), a = s.appendChild(K.createElement("option")), o = h.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== h.className, e.leadingWhitespace = 3 === h.firstChild.nodeType, e.tbody = !h.getElementsByTagName("tbody").length, e.htmlSerialize = !!h.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!K.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete h.test
            } catch (d) {
                e.deleteExpando = !1
            }
            o = K.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), r = K.createDocumentFragment(), r.appendChild(o), e.appendChecked = o.checked, e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), h.cloneNode(!0).click());
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) h.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === h.style.backgroundClip;
            for (c in ce(e)) break;
            return e.ownLast = "0" !== c, ce(function() {
                var n, i, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    r = K.getElementsByTagName("body")[0];
                r && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = h.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e.boxSizing = 4 === h.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
                    width: "4px"
                }).width, i = h.appendChild(K.createElement("div")), i.style.cssText = h.style.cssText = s, i.style.marginRight = i.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof h.style.zoom !== Y && (h.innerHTML = "", h.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = h = o = i = null)
            }), n = s = r = a = i = o = null, e
        }({});
        var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Se = /([A-Z])/g;
        ce.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !!t && !a(t)
            },
            data: function(t, e, n) {
                return o(t, e, n)
            },
            removeData: function(t, e) {
                return s(t, e)
            },
            _data: function(t, e, n) {
                return o(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return s(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
                return !e || e !== !0 && t.getAttribute("classid") === e
            }
        }), ce.fn.extend({
            data: function(t, n) {
                var i, o, s = null,
                    a = 0,
                    l = this[0];
                if (t === e) {
                    if (this.length && (s = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; a < i.length; a++) o = i[a].name, 0 === o.indexOf("data-") && (o = ce.camelCase(o.slice(5)), r(l, o, s[o]));
                        ce._data(l, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    ce.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ce.data(this, t, n)
                }) : l ? r(l, t, ce.data(l, t)) : null
            },
            removeData: function(t) {
                return this.each(function() {
                    ce.removeData(this, t)
                })
            }
        }), ce.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ce._data(t, e), n && (!i || ce.isArray(n) ? i = ce._data(t, e, ce.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ce.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = ce._queueHooks(t, e),
                    r = function() {
                        ce.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ce._data(t, n) || ce._data(t, n, {
                    empty: ce.Callbacks("once memory").add(function() {
                        ce._removeData(t, e + "queue"), ce._removeData(t, n)
                    })
                })
            }
        }), ce.fn.extend({
            queue: function(t, n) {
                var i = 2;
                return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ce.queue(this[0], t) : n === e ? this : this.each(function() {
                    var e = ce.queue(this, t, n);
                    ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ce.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, n) {
                var i, o = 1,
                    s = ce.Deferred(),
                    r = this,
                    a = this.length,
                    l = function() {
                        --o || s.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ce._data(r[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
                return l(), s.promise(n)
            }
        });
        var Ee, Pe, Ne = /[\t\r\n\f]/g,
            De = /\r/g,
            Ae = /^(?:input|select|textarea|button|object)$/i,
            Me = /^(?:a|area)$/i,
            Ie = /^(?:checked|selected)$/i,
            Fe = ce.support.getSetAttribute,
            He = ce.support.input;
        ce.fn.extend({
            attr: function(t, e) {
                return ce.access(this, ce.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ce.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return ce.access(this, ce.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ce.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (n) {}
                })
            },
            addClass: function(t) {
                var e, n, i, o, s, r = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(de) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            n.className = ce.trim(i)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, s, r = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(de) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            n.className = t ? ce.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ce.isFunction(t) ? this.each(function(n) {
                    ce(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, o = ce(this), s = t.match(de) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Y || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var n, i, o, s = this[0]; {
                    if (arguments.length) return o = ce.isFunction(t), this.each(function(n) {
                        var s;
                        1 === this.nodeType && (s = o ? t.call(this, n, ce(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ce.isArray(s) && (s = ce.map(s, function(t) {
                            return null == t ? "" : t + ""
                        })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, s, "value") !== e || (this.value = s))
                    });
                    if (s) return i = ce.valHooks[s.type] || ce.valHooks[s.nodeName.toLowerCase()], i && "get" in i && (n = i.get(s, "value")) !== e ? n : (n = s.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
                }
            }
        }), ce.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ce.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ce(n).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, s = ce.makeArray(e), r = o.length; r--;) i = o[r], (i.selected = ce.inArray(ce(i).val(), s) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            },
            attr: function(t, n, i) {
                var o, s, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Y ? ce.prop(t, n, i) : (1 === r && ce.isXMLDoc(t) || (n = n.toLowerCase(), o = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Pe : Ee)), i === e ? o && "get" in o && null !== (s = o.get(t, n)) ? s : (s = ce.find.attr(t, n), null == s ? e : s) : null !== i ? o && "set" in o && (s = o.set(t, i, n)) !== e ? s : (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), void 0))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    s = e && e.match(de);
                if (s && 1 === t.nodeType)
                    for (; n = s[o++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? He && Fe || !Ie.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""), t.removeAttribute(Fe ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, n, i) {
                var o, s, r, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !ce.isXMLDoc(t), r && (n = ce.propFix[n] || n, s = ce.propHooks[n]), i !== e ? s && "set" in s && (o = s.set(t, i, n)) !== e ? o : t[n] = i : s && "get" in s && null !== (o = s.get(t, n)) ? o : t[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ce.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), Pe = {
            set: function(t, e, n) {
                return e === !1 ? ce.removeAttr(t, n) : He && Fe || !Ie.test(n) ? t.setAttribute(!Fe && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(t, n) {
            var i = ce.expr.attrHandle[n] || ce.find.attr;
            ce.expr.attrHandle[n] = He && Fe || !Ie.test(n) ? function(t, n, o) {
                var s = ce.expr.attrHandle[n],
                    r = o ? e : (ce.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
                return ce.expr.attrHandle[n] = s, r
            } : function(t, n, i) {
                return i ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), He && Fe || (ce.attrHooks.value = {
            set: function(t, e, n) {
                return ce.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ee && Ee.set(t, e, n)
            }
        }), Fe || (Ee = {
            set: function(t, n, i) {
                var o = t.getAttributeNode(i);
                return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
            }
        }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(t, n, i) {
            var o;
            return i ? e : (o = t.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ce.valHooks.button = {
            get: function(t, n) {
                var i = t.getAttributeNode(n);
                return i && i.specified ? i.value : e
            },
            set: Ee.set
        }, ce.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Ee.set(t, "" === e ? !1 : e, n)
            }
        }, ce.each(["width", "height"], function(t, e) {
            ce.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ce.support.hrefNormalized || ce.each(["href", "src"], function(t, e) {
            ce.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ce.support.style || (ce.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), ce.support.optSelected || (ce.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ce.propFix[this.toLowerCase()] = this
        }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
            ce.valHooks[this] = {
                set: function(t, e) {
                    return ce.isArray(e) ? t.checked = ce.inArray(ce(t).val(), e) >= 0 : void 0
                }
            }, ce.support.checkOn || (ce.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Be = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            Le = /^(?:mouse|contextmenu)|click/,
            Re = /^(?:focusinfocus|focusoutblur)$/,
            $e = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(t, n, i, o, s) {
                var r, a, l, u, c, h, d, p, f, g, v, m = ce._data(t);
                if (m) {
                    for (i.handler && (u = i, i = u.handler, s = u.selector), i.guid || (i.guid = ce.guid++), (a = m.events) || (a = m.events = {}), (h = m.handle) || (h = m.handle = function(t) {
                        return typeof ce === Y || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = t), n = (n || "").match(de) || [""], l = n.length; l--;) r = $e.exec(n[l]) || [], f = v = r[1], g = (r[2] || "").split(".").sort(), f && (c = ce.event.special[f] || {}, f = (s ? c.delegateType : c.bindType) || f, c = ce.event.special[f] || {}, d = ce.extend({
                        type: f,
                        origType: v,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && ce.expr.match.needsContext.test(s),
                        namespace: g.join(".")
                    }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, o, g, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), ce.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var s, r, a, l, u, c, h, d, p, f, g, v = ce.hasData(t) && ce._data(t);
                if (v && (c = v.events)) {
                    for (e = (e || "").match(de) || [""], u = e.length; u--;)
                        if (a = $e.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (h = ce.event.special[p] || {}, p = (i ? h.delegateType : h.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;) r = d[s], !o && g !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (d.splice(s, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
                            l && !d.length && (h.teardown && h.teardown.call(t, f, v.handle) !== !1 || ce.removeEvent(t, p, v.handle), delete c[p])
                        } else
                            for (p in c) ce.event.remove(t, p + e[u], n, i, !0);
                    ce.isEmptyObject(c) && (delete v.handle, ce._removeData(t, "events"))
                }
            },
            trigger: function(n, i, o, s) {
                var r, a, l, u, c, h, d, p = [o || K],
                    f = le.call(n, "type") ? n.type : n,
                    g = le.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = h = o = o || K, 3 !== o.nodeType && 8 !== o.nodeType && !Re.test(f + ce.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, n = n[ce.expando] ? n : new ce.Event(f, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[f] || {}, s || !c.trigger || c.trigger.apply(o, i) !== !1)) {
                    if (!s && !c.noBubble && !ce.isWindow(o)) {
                        for (u = c.delegateType || f, Re.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), h = l;
                        h === (o.ownerDocument || K) && p.push(h.defaultView || h.parentWindow || t)
                    }
                    for (d = 0;
                        (l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : c.bindType || f, r = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), r && r.apply(l, i), r = a && l[a], r && ce.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !s && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ce.acceptData(o) && a && o[f] && !ce.isWindow(o)) {
                        h = o[a], h && (o[a] = null), ce.event.triggered = f;
                        try {
                            o[f]()
                        } catch (v) {}
                        ce.event.triggered = e, h && (o[a] = h)
                    }
                    return n.result
                }
            },
            dispatch: function(t) {
                t = ce.event.fix(t);
                var n, i, o, s, r, a = [],
                    l = se.call(arguments),
                    u = (ce._data(this, "events") || {})[t.type] || [],
                    c = ce.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ce.event.handlers.call(this, t, u), n = 0;
                        (s = a[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, r = 0;
                            (o = s.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, n) {
                var i, o, s, r, a = [],
                    l = n.delegateCount,
                    u = t.target;
                if (l && u.nodeType && (!t.button || "click" !== t.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], r = 0; l > r; r++) o = n[r], i = o.selector + " ", s[i] === e && (s[i] = o.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length), s[i] && s.push(o);
                            s.length && a.push({
                                elem: u,
                                handlers: s
                            })
                        }
                return l < n.length && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[ce.expando]) return t;
                var e, n, i, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Le.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new ce.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
                return t.target || (t.target = s.srcElement || K), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, s) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, n) {
                    var i, o, s, r = n.button,
                        a = n.fromElement;
                    return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || K, s = o.documentElement, i = o.body, t.pageX = n.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ce.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = ce.extend(new ce.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ce.event.trigger(o, null, e) : ce.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ce.removeEvent = K.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Y && (t[i] = null), t.detachEvent(i, n))
        }, ce.Event = function(t, e) {
            return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && ce.extend(this, e), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, void 0) : new ce.Event(t, e)
        }, ce.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ce.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            ce.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return (!o || o !== i && !ce.contains(i, o)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function(t) {
                    var n = t.target,
                        i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
                    i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ce._data(i, "submitBubbles", !0))
                }), void 0)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), void 0)
            }
        }), ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return Be.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ce.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
                })), !1) : (ce.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Be.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                    }), ce._data(e, "changeBubbles", !0))
                }), void 0)
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ce.event.remove(this, "._change"), !Be.test(this.nodeName)
            }
        }), ce.support.focusinBubbles || ce.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = 0,
                i = function(t) {
                    ce.event.simulate(e, t.target, ce.event.fix(t), !0)
                };
            ce.event.special[e] = {
                setup: function() {
                    0 === n++ && K.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 === --n && K.removeEventListener(t, i, !0)
                }
            }
        }), ce.fn.extend({
            on: function(t, n, i, o, s) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (r in t) this.on(r, n, i, t[r], s);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = u;
                else if (!o) return this;
                return 1 === s && (a = o, o = function(t) {
                    return ce().off(t), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
                    ce.event.add(this, t, o, i, n)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, n, i) {
                var o, s;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, ce(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, n, t[s]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function() {
                    ce.event.remove(this, t, i, n)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ce.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ce.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Xe = /^.[^:#\[\.,]*$/,
            We = /^(?:parents|prev(?:Until|All))/,
            ze = ce.expr.match.needsContext,
            qe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(ce(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ce.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ce.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            has: function(t) {
                var e, n = ce(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ce.contains(this, n[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(d(this, t || [], !0))
            },
            filter: function(t) {
                return this.pushStack(d(this, t || [], !1))
            },
            is: function(t) {
                return !!d(this, "string" == typeof t && ze.test(t) ? ce(t) : t || [], !1).length
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, s = [], r = ze.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                            n = s.push(n);
                            break
                        }
                return this.pushStack(s.length > 1 ? ce.unique(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t),
                    i = ce.merge(this.get(), n);
                return this.pushStack(ce.unique(i))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ce.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ce.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ce.dir(t, "parentNode", n)
            },
            next: function(t) {
                return h(t, "nextSibling")
            },
            prev: function(t) {
                return h(t, "previousSibling")
            },
            nextAll: function(t) {
                return ce.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ce.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ce.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ce.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ce.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ce.sibling(t.firstChild)
            },
            contents: function(t) {
                return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
            }
        }, function(t, e) {
            ce.fn[t] = function(n, i) {
                var o = ce.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ce.filter(i, o)), this.length > 1 && (qe[t] || (o = ce.unique(o)), We.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        }), ce.extend({
            filter: function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            },
            dir: function(t, n, i) {
                for (var o = [], s = t[n]; s && 9 !== s.nodeType && (i === e || 1 !== s.nodeType || !ce(s).is(i));) 1 === s.nodeType && o.push(s), s = s[n];
                return o
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ve = / jQuery\d+="(?:null|\d+)"/g,
            Ye = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            Ge = /^\s+/,
            Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Je = /<([\w:]+)/,
            Qe = /<tbody/i,
            Ze = /<|&#?\w+;/,
            tn = /<(?:script|style|link)/i,
            en = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            on = /^$|\/(?:java|ecma)script/i,
            sn = /^true\/(.*)/,
            rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            an = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = p(K),
            un = ln.appendChild(K.createElement("div"));
        an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ce.fn.extend({
            text: function(t) {
                return ce.access(this, function(t) {
                    return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ce.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && m(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ce.cleanData(w(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ce.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ce.clone(this, t, e)
                })
            },
            html: function(t) {
                return ce.access(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : e;
                    if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ye.test(t) || !ce.support.leadingWhitespace && Ge.test(t) || an[(Je.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Ke, "<$1></$2>");
                        try {
                            for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(w(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = ce.map(this, function(t) {
                        return [t.nextSibling, t.parentNode]
                    }),
                    e = 0;
                return this.domManip(arguments, function(n) {
                    var i = t[e++],
                        o = t[e++];
                    o && (i && i.parentNode !== o && (i = this.nextSibling), ce(this).remove(), o.insertBefore(n, i))
                }, !0), e ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                t = ie.apply([], t);
                var i, o, s, r, a, l, u = 0,
                    c = this.length,
                    h = this,
                    d = c - 1,
                    p = t[0],
                    f = ce.isFunction(p);
                if (f || !(1 >= c || "string" != typeof p || ce.support.checkClone) && nn.test(p)) return this.each(function(i) {
                    var o = h.eq(i);
                    f && (t[0] = p.call(this, i, o.html())), o.domManip(t, e, n)
                });
                if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (r = ce.map(w(l, "script"), g), s = r.length; c > u; u++) o = l, u !== d && (o = ce.clone(o, !0, !0), s && ce.merge(r, w(o, "script"))), e.call(this[u], o, u);
                    if (s)
                        for (a = r[r.length - 1].ownerDocument, ce.map(r, v), u = 0; s > u; u++) o = r[u], on.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(a, o) && (o.src ? ce._evalUrl(o.src) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(rn, "")));
                    l = i = null
                }
                return this
            }
        }), ce.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ce.fn[t] = function(t) {
                for (var n, i = 0, o = [], s = ce(t), r = s.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ce(s[i])[e](n), oe.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ce.extend({
            clone: function(t, e, n) {
                var i, o, s, r, a, l = ce.contains(t.ownerDocument, t);
                if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(s = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))
                    for (i = w(s), a = w(t), r = 0; null != (o = a[r]); ++r) i[r] && b(o, i[r]);
                if (e)
                    if (n)
                        for (a = a || w(t), i = i || w(s), r = 0; null != (o = a[r]); r++) y(o, i[r]);
                    else y(t, s);
                return i = w(s, "script"), i.length > 0 && m(i, !l && w(t, "script")), i = a = o = null, s
            },
            buildFragment: function(t, e, n, i) {
                for (var o, s, r, a, l, u, c, h = t.length, d = p(e), f = [], g = 0; h > g; g++)
                    if (s = t[g], s || 0 === s)
                        if ("object" === ce.type(s)) ce.merge(f, s.nodeType ? [s] : s);
                        else if (Ze.test(s)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Je.exec(s) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + s.replace(Ke, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                    if (!ce.support.leadingWhitespace && Ge.test(s) && f.push(e.createTextNode(Ge.exec(s)[0])), !ce.support.tbody)
                        for (s = "table" !== l || Qe.test(s) ? "<table>" !== c[1] || Qe.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;) ce.nodeName(u = s.childNodes[o], "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (ce.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = d.lastChild
                } else f.push(e.createTextNode(s));
                for (a && d.removeChild(a), ce.support.appendChecked || ce.grep(w(f, "input"), _), g = 0; s = f[g++];)
                    if ((!i || -1 === ce.inArray(s, i)) && (r = ce.contains(s.ownerDocument, s), a = w(d.appendChild(s), "script"), r && m(a), n))
                        for (o = 0; s = a[o++];) on.test(s.type || "") && n.push(s);
                return a = null, d
            },
            cleanData: function(t, e) {
                for (var n, i, o, s, r = 0, a = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = t[r]); r++)
                    if ((e || ce.acceptData(n)) && (o = n[a], s = o && l[o])) {
                        if (s.events)
                            for (i in s.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, s.handle);
                        l[o] && (delete l[o], u ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, ee.push(o))
                    }
            },
            _evalUrl: function(t) {
                return ce.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ce.fn.extend({
            wrapAll: function(t) {
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return ce.isFunction(t) ? this.each(function(e) {
                    ce(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ce(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ce.isFunction(t);
                return this.each(function(n) {
                    ce(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var cn, hn, dn, pn = /alpha\([^)]*\)/i,
            fn = /opacity\s*=\s*([^)]*)/,
            gn = /^(top|right|bottom|left)$/,
            vn = /^(none|table(?!-c[ea]).+)/,
            mn = /^margin/,
            yn = new RegExp("^(" + he + ")(.*)$", "i"),
            bn = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
            wn = new RegExp("^([+-])=(" + he + ")", "i"),
            _n = {
                BODY: "block"
            },
            jn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Tn = ["Top", "Right", "Bottom", "Left"],
            Cn = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(t, n) {
                return ce.access(this, function(t, n, i) {
                    var o, s, r = {},
                        a = 0;
                    if (ce.isArray(n)) {
                        for (s = hn(t), o = n.length; o > a; a++) r[n[a]] = ce.css(t, n[a], !1, s);
                        return r
                    }
                    return i !== e ? ce.style(t, n, i) : ce.css(t, n)
                }, t, n, arguments.length > 1)
            },
            show: function() {
                return T(this, !0)
            },
            hide: function() {
                return T(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    x(this) ? ce(this).show() : ce(this).hide()
                })
            }
        }), ce.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = dn(t, "opacity");
                            return "" === n ? "1" : n
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
                "float": ce.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, n, i, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, r, a, l = ce.camelCase(n),
                        u = t.style;
                    if (n = ce.cssProps[l] || (ce.cssProps[l] = j(u, l)), a = ce.cssHooks[n] || ce.cssHooks[l], i === e) return a && "get" in a && (s = a.get(t, !1, o)) !== e ? s : u[n];
                    if (r = typeof i, "string" === r && (s = wn.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ce.css(t, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, o)) === e))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(t, n, i, o) {
                var s, r, a, l = ce.camelCase(n);
                return n = ce.cssProps[l] || (ce.cssProps[l] = j(t.style, l)), a = ce.cssHooks[n] || ce.cssHooks[l], a && "get" in a && (r = a.get(t, !0, i)), r === e && (r = dn(t, n, o)), "normal" === r && n in xn && (r = xn[n]), "" === i || i ? (s = parseFloat(r), i === !0 || ce.isNumeric(s) ? s || 0 : r) : r
            }
        }), t.getComputedStyle ? (hn = function(e) {
            return t.getComputedStyle(e, null)
        }, dn = function(t, n, i) {
            var o, s, r, a = i || hn(t),
                l = a ? a.getPropertyValue(n) || a[n] : e,
                u = t.style;
            return a && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), bn.test(l) && mn.test(n) && (o = u.width, s = u.minWidth, r = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = s, u.maxWidth = r)), l
        }) : K.documentElement.currentStyle && (hn = function(t) {
            return t.currentStyle
        }, dn = function(t, n, i) {
            var o, s, r, a = i || hn(t),
                l = a ? a[n] : e,
                u = t.style;
            return null == l && u && u[n] && (l = u[n]), bn.test(l) && !gn.test(n) && (o = u.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = o, r && (s.left = r)), "" === l ? "auto" : l
        }), ce.each(["height", "width"], function(t, e) {
            ce.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? 0 === t.offsetWidth && vn.test(ce.css(t, "display")) ? ce.swap(t, jn, function() {
                        return S(t, e, i)
                    }) : S(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && hn(t);
                    return C(t, n, i ? k(t, e, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(t, e) {
                return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    s = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(s.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(s) ? s.replace(pn, o) : s + " " + o)
            }
        }), ce(function() {
            ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                get: function(t, e) {
                    return e ? ce.swap(t, {
                        display: "inline-block"
                    }, dn, [t, "marginRight"]) : void 0
                }
            }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(t, e) {
                ce.cssHooks[e] = {
                    get: function(t, n) {
                        return n ? (n = dn(t, e), bn.test(n) ? ce(t).position()[e] + "px" : n) : void 0
                    }
                }
            })
        }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
        }, ce.expr.filters.visible = function(t) {
            return !ce.expr.filters.hidden(t)
        }), ce.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ce.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Tn[i] + e] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, mn.test(t) || (ce.cssHooks[t + e].set = C)
        });
        var kn = /%20/g,
            Sn = /\[\]$/,
            En = /\r?\n/g,
            Pn = /^(?:submit|button|image|reset|file)$/i,
            Nn = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ce.prop(this, "elements");
                    return t ? ce.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ce(this).is(":disabled") && Nn.test(this.nodeName) && !Pn.test(t) && (this.checked || !en.test(t))
                }).map(function(t, e) {
                    var n = ce(this).val();
                    return null == n ? null : ce.isArray(n) ? ce.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(En, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        }), ce.param = function(t, n) {
            var i, o = [],
                s = function(t, e) {
                    e = ce.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t)) ce.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) N(i, t[i], n, s);
            return o.join("&").replace(kn, "+")
        }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ce.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ce.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Dn, An, Mn = ce.now(),
            In = /\?/,
            Fn = /#.*$/,
            Hn = /([?&])_=[^&]*/,
            Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ln = /^(?:GET|HEAD)$/,
            Rn = /^\/\//,
            $n = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Xn = ce.fn.load,
            Wn = {},
            zn = {},
            qn = "*/".concat("*");
        try {
            An = G.href
        } catch (Un) {
            An = K.createElement("a"), An.href = "", An = An.href
        }
        Dn = $n.exec(An.toLowerCase()) || [], ce.fn.load = function(t, n, i) {
            if ("string" != typeof t && Xn) return Xn.apply(this, arguments);
            var o, s, r, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (r = "POST"), a.length > 0 && ce.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: n
            }).done(function(t) {
                s = arguments, a.html(o ? ce("<div>").append(ce.parseHTML(t)).find(o) : t)
            }).complete(i && function(t, e) {
                a.each(i, s || [t.responseText, e, t])
            }), this
        }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ce.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: An,
                type: "GET",
                isLocal: On.test(Dn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qn,
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
                    "text json": ce.parseJSON,
                    "text xml": ce.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? M(M(t, ce.ajaxSettings), e) : M(ce.ajaxSettings, t)
            },
            ajaxPrefilter: D(Wn),
            ajaxTransport: D(zn),
            ajax: function(t, n) {
                function i(t, n, i, o) {
                    var s, h, y, b, _, x = n;
                    2 !== w && (w = 2, l && clearTimeout(l), c = e, a = o || "", j.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = I(d, j, i)), b = F(d, b, j, s), s ? (d.ifModified && (_ = j.getResponseHeader("Last-Modified"), _ && (ce.lastModified[r] = _), _ = j.getResponseHeader("etag"), _ && (ce.etag[r] = _)), 204 === t || "HEAD" === d.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, h = b.data, y = b.error, s = !y)) : (y = x, (t || !x) && (x = "error", 0 > t && (t = 0))), j.status = t, j.statusText = (n || x) + "", s ? g.resolveWith(p, [h, x, j]) : g.rejectWith(p, [j, x, y]), j.statusCode(m), m = e, u && f.trigger(s ? "ajaxSuccess" : "ajaxError", [j, d, s ? h : y]), v.fireWith(p, [j, x]), u && (f.trigger("ajaxComplete", [j, d]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = e), n = n || {};
                var o, s, r, a, l, u, c, h, d = ce.ajaxSetup({}, n),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? ce(p) : ce.event,
                    g = ce.Deferred(),
                    v = ce.Callbacks("once memory"),
                    m = d.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    _ = "canceled",
                    j = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!h)
                                    for (h = {}; e = Bn.exec(a);) h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else j.always(t[j.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(j).complete = v.add, j.success = j.done, j.error = j.fail, d.url = ((t || d.url || An) + "").replace(Fn, "").replace(Rn, Dn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (o = $n.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === Dn[1] && o[2] === Dn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Dn[3] || ("http:" === Dn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), A(Wn, d, n, j), 2 === w) return j;
                u = d.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ln.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (In.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Hn.test(r) ? r.replace(Hn, "$1_=" + Mn++) : r + (In.test(r) ? "&" : "?") + "_=" + Mn++)), d.ifModified && (ce.lastModified[r] && j.setRequestHeader("If-Modified-Since", ce.lastModified[r]), ce.etag[r] && j.setRequestHeader("If-None-Match", ce.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && j.setRequestHeader("Content-Type", d.contentType), j.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : d.accepts["*"]);
                for (s in d.headers) j.setRequestHeader(s, d.headers[s]);
                if (d.beforeSend && (d.beforeSend.call(p, j, d) === !1 || 2 === w)) return j.abort();
                _ = "abort";
                for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) j[s](d[s]);
                if (c = A(zn, d, n, j)) {
                    j.readyState = 1, u && f.trigger("ajaxSend", [j, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        j.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, c.send(y, i)
                    } catch (x) {
                        if (!(2 > w)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return j
            },
            getJSON: function(t, e, n) {
                return ce.get(t, e, n, "json")
            },
            getScript: function(t, n) {
                return ce.get(t, e, n, "script")
            }
        }), ce.each(["get", "post"], function(t, n) {
            ce[n] = function(t, i, o, s) {
                return ce.isFunction(i) && (s = s || o, o = i, i = e), ce.ajax({
                    url: t,
                    type: n,
                    dataType: s,
                    data: i,
                    success: o
                })
            }
        }), ce.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ce.globalEval(t), t
                }
            }
        }), ce.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ce.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, i = K.head || ce("head")[0] || K.documentElement;
                return {
                    send: function(e, o) {
                        n = K.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(e, !0)
                    }
                }
            }
        });
        var Vn = [],
            Yn = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Vn.pop() || ce.expando + "_" + Mn++;
                return this[t] = !0, t
            }
        }), ce.ajaxPrefilter("json jsonp", function(n, i, o) {
            var s, r, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + s) : n.jsonp !== !1 && (n.url += (In.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return a || ce.error(s + " was not called"), a[0]
            }, n.dataTypes[0] = "json", r = t[s], t[s] = function() {
                a = arguments
            }, o.always(function() {
                t[s] = r, n[s] && (n.jsonpCallback = i.jsonpCallback, Vn.push(s)), a && ce.isFunction(r) && r(a[0]), a = r = e
            }), "script") : void 0
        });
        var Gn, Kn, Jn = 0,
            Qn = t.ActiveXObject && function() {
                var t;
                for (t in Gn) Gn[t](e, !0)
            };
        ce.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && H() || B()
        } : H, Kn = ce.ajaxSettings.xhr(), ce.support.cors = !!Kn && "withCredentials" in Kn, Kn = ce.support.ajax = !!Kn, Kn && ce.ajaxTransport(function(n) {
            if (!n.crossDomain || ce.support.cors) {
                var i;
                return {
                    send: function(o, s) {
                        var r, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in o) l.setRequestHeader(a, o[a])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(t, o) {
                            var a, u, c, h;
                            try {
                                if (i && (o || 4 === l.readyState))
                                    if (i = e, r && (l.onreadystatechange = ce.noop, Qn && delete Gn[r]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        h = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (d) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                    }
                            } catch (p) {
                                o || s(-1, p)
                            }
                            h && s(a, c, h, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Jn, Qn && (Gn || (Gn = {}, ce(t).unload(Qn)), Gn[r] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(e, !0)
                    }
                }
            }
        });
        var Zn, ti, ei = /^(?:toggle|show|hide)$/,
            ni = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            oi = [X],
            si = {
                "*": [
                    function(t, e) {
                        var n = this.createTween(t, e),
                            i = n.cur(),
                            o = ni.exec(e),
                            s = o && o[3] || (ce.cssNumber[t] ? "" : "px"),
                            r = (ce.cssNumber[t] || "px" !== s && +i) && ni.exec(ce.css(n.elem, t)),
                            a = 1,
                            l = 20;
                        if (r && r[3] !== s) {
                            s = s || r[3], o = o || [], r = +i || 1;
                            do a = a || ".5", r /= a, ce.style(n.elem, t, r + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                        }
                        return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
                    }
                ]
            };
        ce.Animation = ce.extend(R, {
            tweener: function(t, e) {
                ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], si[n] = si[n] || [], si[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? oi.unshift(t) : oi.push(t)
            }
        }), ce.Tween = W, W.prototype = {
            constructor: W,
            init: function(t, e, n, i, o, s) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ce.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = W.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ce.each(["toggle", "show", "hide"], function(t, e) {
            var n = ce.fn[e];
            ce.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
            }
        }), ce.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(x).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = ce.isEmptyObject(t),
                    s = ce.speed(e, n, i),
                    r = function() {
                        var e = R(this, ce.extend({}, t), s);
                        (o || ce._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, n, i) {
                var o = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        s = ce.timers,
                        r = ce._data(this);
                    if (n) r[n] && r[n].stop && o(r[n]);
                    else
                        for (n in r) r[n] && r[n].stop && ii.test(n) && o(r[n]);
                    for (n = s.length; n--;) s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e = !1, s.splice(n, 1));
                    (e || !i) && ce.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ce._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        s = ce.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, ce.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ce.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ce.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ce.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ce.extend({}, t) : {
                complete: n || !n && e || ce.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ce.isFunction(e) && e
            };
            return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
            }, i
        }, ce.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ce.timers = [], ce.fx = W.prototype.init, ce.fx.tick = function() {
            var t, n = ce.timers,
                i = 0;
            for (Zn = ce.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
            n.length || ce.fx.stop(), Zn = e
        }, ce.fx.timer = function(t) {
            t() && ce.timers.push(t) && ce.fx.start()
        }, ce.fx.interval = 13, ce.fx.start = function() {
            ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
        }, ce.fx.stop = function() {
            clearInterval(ti), ti = null
        }, ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(t) {
            return ce.grep(ce.timers, function(e) {
                return t === e.elem
            }).length
        }), ce.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var n, i, o = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                r = s && s.ownerDocument;
            if (r) return n = r.documentElement, ce.contains(n, s) ? (typeof s.getBoundingClientRect !== Y && (o = s.getBoundingClientRect()), i = q(r), {
                top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }, ce.offset = {
            setOffset: function(t, e, n) {
                var i = ce.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var o, s, r = ce(t),
                    a = r.offset(),
                    l = ce.css(t, "top"),
                    u = ce.css(t, "left"),
                    c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1,
                    h = {},
                    d = {};
                c ? (d = r.position(), o = d.top, s = d.left) : (o = parseFloat(l) || 0, s = parseFloat(u) || 0), ce.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : r.css(h)
            }
        }, ce.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ce.css(i, "marginTop", !0),
                        left: e.left - n.left - ce.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || J; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");) t = t.offsetParent;
                    return t || J
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = /Y/.test(n);
            ce.fn[t] = function(o) {
                return ce.access(this, function(t, o, s) {
                    var r = q(t);
                    return s === e ? r ? n in r ? r[n] : r.document.documentElement[o] : t[o] : (r ? r.scrollTo(i ? ce(r).scrollLeft() : s, i ? s : ce(r).scrollTop()) : t[o] = s, void 0)
                }, t, o, arguments.length, null)
            }
        }), ce.each({
            Height: "height",
            Width: "width"
        }, function(t, n) {
            ce.each({
                padding: "inner" + t,
                content: n,
                "": "outer" + t
            }, function(i, o) {
                ce.fn[o] = function(o, s) {
                    var r = arguments.length && (i || "boolean" != typeof o),
                        a = i || (o === !0 || s === !0 ? "margin" : "border");
                    return ce.access(this, function(n, i, o) {
                        var s;
                        return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + t], s["scroll" + t], n.body["offset" + t], s["offset" + t], s["client" + t])) : o === e ? ce.css(n, i, a) : ce.style(n, i, o, a)
                    }, n, r ? o : e, r, null)
                }
            })
        }), ce.fn.size = function() {
            return this.length
        }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ce
        }))
    }(window),
    function(t, e) {
        var n = 0,
            i = Array.prototype.slice,
            o = t.cleanData;
        t.cleanData = function(e) {
            for (var n, i = 0; null != (n = e[i]); i++) try {
                t(n).triggerHandler("remove")
            } catch (s) {}
            o(e)
        }, t.widget = function(e, n, i) {
            var o, s, r, a, l = {},
                u = e.split(".")[0];
            e = e.split(".")[1], o = u + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
                return !!t.data(e, o)
            }, t[u] = t[u] || {}, s = t[u][e], r = t[u][e] = function(t, e) {
                return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new r(t, e)
            }, t.extend(r, s, {
                version: i.version,
                _proto: t.extend({}, i),
                _childConstructors: []
            }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
                return t.isFunction(i) ? (l[e] = function() {
                    var t = function() {
                            return n.prototype[e].apply(this, arguments)
                        },
                        o = function(t) {
                            return n.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, n = this._super,
                            s = this._superApply;
                        return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = s, e
                    }
                }(), void 0) : (l[e] = i, void 0)
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix : e
            }, l, {
                constructor: r,
                namespace: u,
                widgetName: e,
                widgetFullName: o
            }), s ? (t.each(s._childConstructors, function(e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, r, n._proto)
            }), delete s._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r)
        }, t.widget.extend = function(n) {
            for (var o, s, r = i.call(arguments, 1), a = 0, l = r.length; l > a; a++)
                for (o in r[a]) s = r[a][o], r[a].hasOwnProperty(o) && s !== e && (n[o] = t.isPlainObject(s) ? t.isPlainObject(n[o]) ? t.widget.extend({}, n[o], s) : t.widget.extend({}, s) : s);
            return n
        }, t.widget.bridge = function(n, o) {
            var s = o.prototype.widgetFullName || n;
            t.fn[n] = function(r) {
                var a = "string" == typeof r,
                    l = i.call(arguments, 1),
                    u = this;
                return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, a ? this.each(function() {
                    var i, o = t.data(this, s);
                    return o ? t.isFunction(o[r]) && "_" !== r.charAt(0) ? (i = o[r].apply(o, l), i !== o && i !== e ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + r + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + r + "'")
                }) : this.each(function() {
                    var e = t.data(this, s);
                    e ? e.option(r || {})._init() : t.data(this, s, new o(r, this))
                }), u
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(n, i) {
                var o, s, r, a = n;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof n)
                    if (a = {}, o = n.split("."), n = o.shift(), o.length) {
                        for (s = a[n] = t.widget.extend({}, this.options[n]), r = 0; r < o.length - 1; r++) s[o[r]] = s[o[r]] || {}, s = s[o[r]];
                        if (n = o.pop(), i === e) return s[n] === e ? null : s[n];
                        s[n] = i
                    } else {
                        if (i === e) return this.options[n] === e ? null : this.options[n];
                        a[n] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(e, n, i) {
                var o, s = this;
                "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, r) {
                    function a() {
                        return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = i.match(/^(\w+)\s*(.*)$/),
                        u = l[1] + s.eventNamespace,
                        c = l[2];
                    c ? o.delegate(c, u, a) : n.bind(u, a)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
            },
            _delay: function(t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, n, i) {
                var o, s, r = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                    for (o in s) o in n || (n[o] = s[o]);
                return this.element.trigger(n, i), !(t.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, n) {
            t.Widget.prototype["_" + e] = function(i, o, s) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var r, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : e;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), r = !t.isEmptyObject(o), o.complete = s, o.delay && i.delay(o.delay), r && t.effects && t.effects.effect[a] ? i[e](o) : a !== e && i[a] ? i[a](o.duration, o.easing, s) : i.queue(function(n) {
                    t(this)[e](), s && s.call(i[0]), n()
                })
            }
        })
    }(jQuery),
    function(t, e) {
        function n(e, n) {
            var o, s, r, a = e.nodeName.toLowerCase();
            return "area" === a ? (o = e.parentNode, s = o.name, e.href && s && "map" === o.nodeName.toLowerCase() ? (r = t("img[usemap=#" + s + "]")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var o = 0,
            s = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            focus: function(e) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), i && i.call(e)
                        }, n)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            scrollParent: function() {
                var e;
                return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function(n) {
                if (n !== e) return this.css("zIndex", n);
                if (this.length)
                    for (var i, o, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (o = parseInt(s.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        s = s.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++o)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    s.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(n) {
                    return !!t.data(n, e)
                }
            }) : function(e, n, i) {
                return !!t.data(e, i[3])
            },
            focusable: function(e) {
                return n(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    o = isNaN(i);
                return (o || i >= 0) && n(e, !o)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
            function o(e, n, i, o) {
                return t.each(s, function() {
                    n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), n
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                r = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(n) {
                return n === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(r, o(this, n) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(r, o(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(n) {
                return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
            disableSelection: function() {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function(e, n, i) {
                    var o, s = t.ui[e].prototype;
                    for (o in i) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([n, i[o]])
                },
                call: function(t, e, n) {
                    var i, o = t.plugins[e];
                    if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (i = 0; i < o.length; i++) t.options[o[i][0]] && o[i][1].apply(t.element, n)
                }
            },
            hasScroll: function(e, n) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    o = !1;
                return e[i] > 0 ? !0 : (e[i] = 1, o = e[i] > 0, e[i] = 0, o)
            }
        })
    }(jQuery),
    function(t) {
        var e = !1;
        t(document).mouseup(function() {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.10.3",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(n) {
                    return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(n) {
                if (!e) {
                    this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                    var i = this,
                        o = 1 === n.which,
                        s = "string" == typeof this.options.cancel && n.target.nodeName ? t(n.target).closest(this.options.cancel).length : !1;
                    return o && !s && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === t.data(n.target, this.widgetName + ".preventClickEvent") && t.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return i._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(t) {
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var n = this.options;
                return this.helper || n.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                    t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(t(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(e) {
                var n = this.options;
                return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _mouseDrag: function(e, n) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                    var i = this._uiHash();
                    if (this._trigger("drag", e, i) === !1) return this._mouseUp({}), !1;
                    this.position = i.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var n = this,
                    i = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger("stop", e) !== !1 && n._clear()
                }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function(e) {
                return t("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(e) {
                return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(e) {
                var n = this.options,
                    i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.element.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, n, i, o = this.options;
                return o.containment ? "window" === o.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === o.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : o.containment.constructor === Array ? (this.containment = o.containment, void 0) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), n = t(o.containment), i = n[0], i && (e = "hidden" !== n.css("overflow"), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, n) {
                n || (n = this.position);
                var i = "absolute" === e ? 1 : -1,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: o.scrollTop(),
                    left: o.scrollLeft()
                }), {
                    top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
                    left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(e) {
                var n, i, o, s, r = this.options,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = e.pageX,
                    u = e.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (u = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (u = n[3] + this.offset.click.top)), r.grid && (o = r.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, u = n ? o - this.offset.click.top >= n[1] || o - this.offset.click.top > n[3] ? o : o - this.offset.click.top >= n[1] ? o - r.grid[1] : o + r.grid[1] : o, s = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - r.grid[0] : s + r.grid[0] : s)), {
                    top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(e, n, i) {
                return i = i || this._uiHash(), t.ui.plugin.call(this, e, [n, i]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, n, i)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, n) {
                var i = t(this).data("ui-draggable"),
                    o = i.options,
                    s = t.extend({}, n, {
                        item: i.element
                    });
                i.sortables = [], t(o.connectToSortable).each(function() {
                    var n = t.data(this, "ui-sortable");
                    n && !n.options.disabled && (i.sortables.push({
                        instance: n,
                        shouldRevert: n.options.revert
                    }), n.refreshPositions(), n._trigger("activate", e, s))
                })
            },
            stop: function(e, n) {
                var i = t(this).data("ui-draggable"),
                    o = t.extend({}, n, {
                        item: i.element
                    });
                t.each(i.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === i.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, o))
                })
            },
            drag: function(e, n) {
                var i = t(this).data("ui-draggable"),
                    o = this;
                t.each(i.sortables, function() {
                    var s = !1,
                        r = this;
                    this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, t.each(i.sortables, function() {
                        return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (s = !1), s
                    })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return n.helper[0]
                    }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", e), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", e), i.dropped = !1)
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var e = t("body"),
                    n = t(this).data("ui-draggable").options;
                e.css("cursor") && (n._cursor = e.css("cursor")), e.css("cursor", n.cursor)
            },
            stop: function() {
                var e = t(this).data("ui-draggable").options;
                e._cursor && t("body").css("cursor", e._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, n) {
                var i = t(n.helper),
                    o = t(this).data("ui-draggable").options;
                i.css("opacity") && (o._opacity = i.css("opacity")), i.css("opacity", o.opacity)
            },
            stop: function(e, n) {
                var i = t(this).data("ui-draggable").options;
                i._opacity && t(n.helper).css("opacity", i._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var e = t(this).data("ui-draggable");
                e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
            },
            drag: function(e) {
                var n = t(this).data("ui-draggable"),
                    i = n.options,
                    o = !1;
                n.scrollParent[0] !== document && "HTML" !== n.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = o = n.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = o = n.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = o = n.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = o = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function() {
                var e = t(this).data("ui-draggable"),
                    n = e.options;
                e.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var n = t(this),
                        i = n.offset();
                    this !== e.element[0] && e.snapElements.push({
                        item: this,
                        width: n.outerWidth(),
                        height: n.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, n) {
                var i, o, s, r, a, l, u, c, h, d, p = t(this).data("ui-draggable"),
                    f = p.options,
                    g = f.snapTolerance,
                    v = n.offset.left,
                    m = v + p.helperProportions.width,
                    y = n.offset.top,
                    b = y + p.helperProportions.height;
                for (h = p.snapElements.length - 1; h >= 0; h--) a = p.snapElements[h].left, l = a + p.snapElements[h].width, u = p.snapElements[h].top, c = u + p.snapElements[h].height, a - g > m || v > l + g || u - g > b || y > c + g || !t.contains(p.snapElements[h].item.ownerDocument, p.snapElements[h].item) ? (p.snapElements[h].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[h].item
                })), p.snapElements[h].snapping = !1) : ("inner" !== f.snapMode && (i = Math.abs(u - b) <= g, o = Math.abs(c - y) <= g, s = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, i && (n.position.top = p._convertPositionTo("relative", {
                    top: u - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), o && (n.position.top = p._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left), r && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left - p.margins.left)), d = i || o || s || r, "outer" !== f.snapMode && (i = Math.abs(u - y) <= g, o = Math.abs(c - b) <= g, s = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, i && (n.position.top = p._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top - p.margins.top), o && (n.position.top = p._convertPositionTo("relative", {
                    top: c - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left), r && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: l - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[h].snapping && (i || o || s || r || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[h].item
                })), p.snapElements[h].snapping = i || o || s || r || d)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function() {
                var e, n = this.data("ui-draggable").options,
                    i = t.makeArray(t(n.stack)).sort(function(e, n) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(n).css("zIndex"), 10) || 0)
                    });
                i.length && (e = parseInt(t(i[0]).css("zIndex"), 10) || 0, t(i).each(function(n) {
                    t(this).css("zIndex", e + n)
                }), this.css("zIndex", e + i.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, n) {
                var i = t(n.helper),
                    o = t(this).data("ui-draggable").options;
                i.css("zIndex") && (o._zIndex = i.css("zIndex")), i.css("zIndex", o.zIndex)
            },
            stop: function(e, n) {
                var i = t(this).data("ui-draggable").options;
                i._zIndex && t(n.helper).css("zIndex", i._zIndex)
            }
        })
    }(jQuery),
    function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            buttonClickSelector: "button[data-remote]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function(e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n)
            },
            fire: function(e, n, i) {
                var o = t.Event(n);
                return e.trigger(o, i), o.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t.attr("href")
            },
            handleRemote: function(i) {
                var o, s, r, a, l, u, c, h;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("cross-domain"), l = a === e ? null : a, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        o = i.attr("method"), s = i.attr("action"), r = i.serializeArray();
                        var d = i.data("ujs:submit-button");
                        d && (r.push(d), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (o = i.data("method"), s = n.href(i), r = i.data("params") || null);
                    h = {
                        type: o || "GET",
                        data: r,
                        dataType: c,
                        beforeSend: function(t, o) {
                            return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o])
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: l
                    }, u && (h.xhrFields = {
                        withCredentials: u
                    }), s && (h.url = s);
                    var p = n.ajax(h);
                    return i.trigger("ajax:send", p), p
                }
                return !1
            },
            handleMethod: function(i) {
                var o = n.href(i),
                    s = i.data("method"),
                    r = i.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    u = t('<form method="post" action="' + o + '"></form>'),
                    c = '<input name="_method" value="' + s + '" type="hidden" />';
                l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && u.attr("target", r), u.hide().append(c).appendTo("body"), u.submit()
            },
            disableFormElements: function(e) {
                e.find(n.disableSelector).each(function() {
                    var e = t(this),
                        n = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
                })
            },
            enableFormElements: function(e) {
                e.find(n.enableSelector).each(function() {
                    var e = t(this),
                        n = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
                })
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"),
                    o = !1;
                return i ? (n.fire(t, "confirm") && (o = n.confirm(i), e = n.fire(t, "confirm:complete", [o])), o && e) : !0
            },
            blankInputs: function(e, n, i) {
                var o, s, r = t(),
                    a = n || "input,textarea",
                    l = e.find(a);
                return l.each(function() {
                    if (o = t(this), s = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !s == !i) {
                        if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                        r = r.add(o)
                    }
                }), r.length ? r : !1
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                    return n.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(t(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var o = t(this),
                s = o.data("method"),
                r = o.data("params");
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e) {
                if (!(!i.metaKey && !i.ctrlKey || s && "GET" !== s || r)) return !0;
                var a = n.handleRemote(o);
                return a === !1 ? n.enableElement(o) : a.error(function() {
                    n.enableElement(o)
                }), !1
            }
            return o.data("method") ? (n.handleMethod(o), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var o = t(this),
                s = o.data("remote") !== e,
                r = n.blankInputs(o, n.requiredInputSelector),
                a = n.nonBlankInputs(o, n.fileInputSelector);
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (r && o.attr("novalidate") == e && n.fire(o, "ajax:aborted:required", [r])) return n.stopEverything(i);
            if (s) {
                if (a) {
                    setTimeout(function() {
                        n.disableFormElements(o)
                    }, 13);
                    var l = n.fire(o, "ajax:aborted:file", [a]);
                    return l || setTimeout(function() {
                        n.enableFormElements(o)
                    }, 13), l
                }
                return n.handleRemote(o), !1
            }
            setTimeout(function() {
                n.disableFormElements(o)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            var o = i.attr("name"),
                s = o ? {
                    name: o,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", s)
        }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
            this == e.target && n.disableFormElements(t(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && n.enableFormElements(t(this))
        }), t(function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        }))
    }(jQuery), $.fn.updateTitle = function() {
        this.data("title") || this.data("title", this.attr("title")), this.hasClass("active") ? this.attr("title", this.data("activeTitle")) : this.attr("title", this.data("title"))
    };
var IScroll = function(t, e, n) {
    function i(t, n) {
        this.wrapper = "string" == typeof t ? e.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeIndicator: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var i in n) this.options[i] = n[i];
        this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function o(t, n, i) {
        var o = e.createElement("div"),
            s = e.createElement("div");
        return i === !0 && (o.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == t ? (i === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (i === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), n || (o.style.pointerEvents = "none"), o.appendChild(s), o
    }

    function s(n, i) {
        this.wrapper = "string" == typeof i.el ? e.querySelector(i.el) : i.el, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = n, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var o in i) this.options[o] = i[o];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (a.addEvent(this.indicator, "touchstart", this), a.addEvent(this.indicator, "MSPointerDown", this), a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "touchend", this), a.addEvent(t, "MSPointerUp", this), a.addEvent(t, "mouseup", this))
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            t.setTimeout(e, 1e3 / 60)
        },
        a = function() {
            function i(t) {
                return r === !1 ? !1 : "" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1)
            }
            var o = {},
                s = e.createElement("div").style,
                r = function() {
                    for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, i = e.length; i > n; n++)
                        if (t = e[n] + "ransform", t in s) return e[n].substr(0, e[n].length - 1);
                    return !1
                }();
            o.getTime = Date.now || function() {
                return (new Date).getTime()
            }, o.extend = function(t, e) {
                for (var n in e) t[n] = e[n]
            }, o.addEvent = function(t, e, n, i) {
                t.addEventListener ? t.addEventListener(e, n, !!i) : "function" == typeof n ? t.attachEvent("on" + e, n) : (n.__handleEvent = n.__handleEvent || function(t) {
                    t = jQuery.event.fix(t), 1 === t.button && (t.button = 0), t.wheelDelta = t.originalEvent.wheelDelta, n.handleEvent(t)
                }, t.attachEvent("on" + e, n.__handleEvent))
            }, o.removeEvent = function(t, e, n, i) {
                t.removeEventListener ? t.removeEventListener(e, n, !!i) : t.detachEvent("on" + e, n.__handleEvent || n)
            }, o.momentum = function(t, e, i, o, s) {
                var r, a, l = t - e,
                    u = i > 0 ? n.abs(l) / i : 0,
                    c = 6e-4;
                return r = t + u * u / (2 * c) * (0 > l ? -1 : 1), a = u / c, o > r ? (r = s ? o - s / 2.5 * (u / 8) : o, l = n.abs(r - t), a = l / u) : r > 0 && (r = s ? s / 2.5 * (u / 8) : 0, l = n.abs(t) + r, a = l / u), {
                    destination: n.round(r),
                    duration: a
                }
            };
            var a = i("transform");
            return o.extend(o, {
                hasTransform: a !== !1,
                hasPerspective: i("perspective") in s,
                hasTouch: "ontouchstart" in t,
                hasPointer: navigator.msPointerEnabled,
                hasTransition: i("transition") in s
            }), o.isAndroidBrowser = /Android/.test(t.navigator.appVersion) && /Version\/\d/.test(t.navigator.appVersion), o.extend(o.style = {}, {
                transform: a,
                transitionTimingFunction: i("transitionTimingFunction"),
                transitionDuration: i("transitionDuration"),
                transformOrigin: i("transformOrigin")
            }), o.hasClass = function(t, e) {
                var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
                return n.test(t.className)
            }, o.addClass = function(t, e) {
                if (!o.hasClass(t, e)) {
                    var n = t.className.split(" ");
                    n.push(e), t.className = n.join(" ")
                }
            }, o.removeClass = function(t, e) {
                if (o.hasClass(t, e)) {
                    var n = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                    t.className = t.className.replace(n, "")
                }
            }, o.offset = function(t) {
                for (var e = -t.offsetLeft, n = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, n -= t.offsetTop;
                return {
                    left: e,
                    top: n
                }
            }, o.extend(o.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), o.extend(o.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(t) {
                        return n.sqrt(1 - --t * t)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(t) {
                        var e = 4;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(t) {
                        var e = .22,
                            i = .4;
                        return 0 === t ? 0 : 1 == t ? 1 : i * n.pow(2, -10 * t) * n.sin((t - e / 4) * 2 * n.PI / e) + 1
                    }
                }
            }), o.tap = function(t, n) {
                var i = e.createEvent("Event");
                i.initEvent(n, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
            }, o.click = function(t) {
                var n, i = t.target;
                "SELECT" != i.tagName && "INPUT" != i.tagName && "TEXTAREA" != i.tagName && (n = e.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, t.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n._constructed = !0, i.dispatchEvent(n))
            }, o
        }();
    return i.prototype = {
        version: "5.0.4",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && (this._transitionTime(0), this.resetPosition(this.options.bounceTime) || this._execEvent("scrollEnd"))
        },
        _start: function(t) {
            if (!(1 != a.eventType[t.type] && 0 !== t.button || !this.enabled || this.initiated && a.eventType[t.type] !== this.initiated)) {
                this.options.preventDefault && !a.isAndroidBrowser && t.preventDefault();
                var e, i = t.touches ? t.touches[0] : t;
                this.initiated = a.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.isAnimating = !1, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(n.round(e.x), n.round(e.y)), this.isInTransition = !1), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("scrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, i, o, s, r = t.touches ? t.touches[0] : t,
                    l = this.hasHorizontalScroll ? r.pageX - this.pointX : 0,
                    u = this.hasVerticalScroll ? r.pageY - this.pointY : 0,
                    c = a.getTime();
                if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += l, this.distY += u, o = n.abs(this.distX), s = n.abs(this.distY), !(c - this.endTime > 300 && 10 > o && 10 > s)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = o > s + this.options.directionLockThreshold ? "h" : s >= o + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return this.initiated = !1, void 0;
                        u = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return this.initiated = !1, void 0;
                        l = 0
                    }
                    e = this.x + l, i = this.y + u, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + u / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = l > 0 ? -1 : 0 > l ? 1 : 0, this.directionY = u > 0 ? -1 : 0 > u ? 1 : 0, this.moved = !0, this._translate(e, i), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
                }
            }
        },
        _end: function(t) {
            if (this.enabled && a.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, i, o = (t.changedTouches ? t.changedTouches[0] : t, a.getTime() - this.startTime),
                    s = n.round(this.x),
                    r = n.round(this.y),
                    l = n.abs(s - this.startX),
                    u = n.abs(r - this.startY),
                    c = 0,
                    h = "";
                if (this.scrollTo(s, r), this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (!this.moved) return this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), void 0;
                    if (this._events.flick && 200 > o && 100 > l && 100 > u) return this._execEvent("flick"), void 0;
                    if (this.options.momentum && 300 > o && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0) : {
                        destination: s,
                        duration: 0
                    }, i = this.hasVerticalScroll ? a.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0) : {
                        destination: r,
                        duration: 0
                    }, s = e.destination, r = i.destination, c = n.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(s, r);
                        this.currentPage = d, s = d.x, r = d.y, c = this.options.snapSpeed || n.max(n.max(n.min(l, 1e3), n.min(l, 1e3)), 300), this.directionX = 0, this.directionY = 0, h = this.options.bounceEasing
                    }
                    return s != this.x || r != this.y ? ((s > 0 || s < this.maxScrollX || r > 0 || r < this.maxScrollY) && (h = a.ease.quadratic), this.scrollTo(s, r, c, h), void 0) : (this._execEvent("scrollEnd"), void 0)
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x,
                n = this.y;
            return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), e == this.x && n == this.y ? !1 : (this.scrollTo(e, n, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            if (this.wrapper.offsetHeight, this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition(), this.options.snap) {
                var t = this._nearestSnap(this.x, this.y);
                if (this.x == t.x && this.y == t.y) return;
                this.currentPage = t, this.scrollTo(t.x, t.y)
            }
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []), this._events[t].push(e)
        },
        _execEvent: function(t, e) {
            if (this._events[t]) {
                var n = 0,
                    i = this._events[t].length;
                if (i)
                    for (; i > n; n++) this._events[t][n].call(this, e)
            }
        },
        scrollBy: function(t, e, n, i) {
            t = this.x + t, e = this.y + e, n = n || 0, this.scrollTo(t, e, n, i)
        },
        scrollTo: function(t, e, n, i) {
            i = i || a.ease.circular, !n || this.options.useTransition && i.style ? (this._transitionTimingFunction(i.style), this._transitionTime(n), this._translate(t, e)) : this._animate(t, e, n, i.fn)
        },
        scrollToElement: function(t, e, i, o, s) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var r = a.offset(t);
                r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, i === !0 && (i = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= i || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, e = void 0 === e || null === e || "auto" === e ? n.max(2 * n.abs(r.left), 2 * n.abs(r.top)) : e, this.scrollTo(r.left, r.top, e, s)
            }
        },
        _transitionTime: function(t) {
            t = t || 0, this.scrollerStyle[a.style.transitionDuration] = t + "ms", this.indicator1 && this.indicator1.transitionTime(t), this.indicator2 && this.indicator2.transitionTime(t)
        },
        _transitionTimingFunction: function(t) {
            this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicator1 && this.indicator1.transitionTimingFunction(t), this.indicator2 && this.indicator2.transitionTimingFunction(t)
        },
        _translate: function(t, e) {
            this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = n.round(t), e = n.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicator1 && this.indicator1.updatePosition(), this.indicator2 && this.indicator2.updatePosition()
        },
        _initEvents: function(n) {
            var i = n ? a.removeEvent : a.addEvent,
                o = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this), i(t, "resize", this), i(this.wrapper, "mousedown", this), i(e, "mousemove", this), i(e, "mousecancel", this), i(e, "mouseup", this), a.hasPointer && (i(this.wrapper, "MSPointerDown", this), i(o, "MSPointerMove", this), i(o, "MSPointerCancel", this), i(o, "MSPointerUp", this)), a.hasTouch && (i(this.wrapper, "touchstart", this), i(o, "touchmove", this), i(o, "touchcancel", this), i(o, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, n, i = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (i = i[a.style.transform].split(")")[0].split(", "), e = +(i[12] || i[4]), n = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d]/g, ""), n = +i.top.replace(/[^-\d]/g, "")), {
                x: e,
                y: n
            }
        },
        _initIndicators: function() {
            var t, e, n = this.options.interactiveScrollbars,
                i = ("object" != typeof this.options.scrollbars, "string" != typeof this.options.scrollbars);
            this.options.scrollbars ? (this.options.scrollY && (t = {
                el: o("v", n, this.options.scrollbars),
                interactive: n,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeIndicator,
                listenX: !1
            }, this.wrapper.appendChild(t.el)), this.options.scrollX && (e = {
                el: o("h", n, this.options.scrollbars),
                interactive: n,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeIndicator,
                listenY: !1
            }, this.wrapper.appendChild(e.el))) : (t = this.options.indicators.length ? this.options.indicators[0] : this.options.indicators, e = this.options.indicators[1] && this.options.indicators[1]), t && (this.indicator1 = new s(this, t)), e && (this.indicator2 = new s(this, e)), this.on("refresh", function() {
                this.indicator1 && this.indicator1.refresh(), this.indicator2 && this.indicator2.refresh()
            }), this.on("destroy", function() {
                this.indicator1 && (this.indicator1.destroy(), this.indicator1 = null), this.indicator2 && (this.indicator2.destroy(), this.indicator2 = null)
            })
        },
        _initWheel: function() {
            a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                var e, i, o, s, r = this;
                if (clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                    r._execEvent("scrollEnd")
                }, 400), t.preventDefault(), t.stopPropagation(), "deltaX" in t) e = -t.deltaX, i = -t.deltaY, 1 === t.deltaMode && (e = e / 3 * this.options.mouseWheelSpeed, i = i / 3 * this.options.mouseWheelSpeed);
                else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i), o = this.x + n.round(this.hasHorizontalScroll ? e : 0), s = this.y + n.round(this.hasVerticalScroll ? i : 0), o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(o, s, 0), this.options.probeType > 1 && this._execEvent("scroll"), this._execEvent(i > 0 ? "mousewheelup" : "mousewheeldown")
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var t, e, i, o, s, r, a = 0,
                    l = 0,
                    u = 0,
                    c = this.options.snapStepX || this.wrapperWidth,
                    h = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.options.snap === !0)
                    for (i = n.round(c / 2), o = n.round(h / 2); u > -this.scrollerWidth;) {
                        for (this.pages[a] = [], t = 0, s = 0; s > -this.scrollerHeight;) this.pages[a][t] = {
                            x: n.max(u, this.maxScrollX),
                            y: n.max(s, this.maxScrollY),
                            width: c,
                            height: h,
                            cx: u - i,
                            cy: s - o
                        }, s -= h, t++;
                        u -= c, a++
                    } else
                        for (r = this.options.snap, t = r.length, e = -1; t > a; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (l = 0, e++), this.pages[l] || (this.pages[l] = []), u = n.max(-r[a].offsetLeft, this.maxScrollX), s = n.max(-r[a].offsetTop, this.maxScrollY), i = u - n.round(r[a].offsetWidth / 2), o = s - n.round(r[a].offsetHeight / 2), this.pages[l][e] = {
                            x: u,
                            y: s,
                            width: r[a].offsetWidth,
                            height: r[a].offsetHeight,
                            cx: i,
                            cy: o
                        }, u > this.maxScrollX && l++;
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 === this.options.snapThreshold % 1 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }), this.on("flick", function() {
                var t = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, e) {
            var i = 0,
                o = this.pages.length,
                s = 0;
            if (n.abs(t - this.absStartX) < this.snapThresholdX && n.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); o > i; i++)
                if (t >= this.pages[i][0].cx) {
                    t = this.pages[i][0].x;
                    break
                }
            for (o = this.pages[i].length; o > s; s++)
                if (e >= this.pages[0][s].cy) {
                    e = this.pages[0][s].y;
                    break
                }
            return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), s == this.currentPage.pageY && (s += this.directionY, 0 > s ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), e = this.pages[0][s].y), {
                x: t,
                y: e,
                pageX: i,
                pageY: s
            }
        },
        goToPage: function(t, e, i, o) {
            o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), e >= this.pages[0].length ? e = this.pages[0].length - 1 : 0 > e && (e = 0);
            var s = this.pages[t][e].x,
                r = this.pages[t][e].y;
            i = void 0 === i ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(s - this.x), 1e3), n.min(n.abs(r - this.y), 1e3)), 300) : i, this.currentPage = {
                x: s,
                y: r,
                pageX: t,
                pageY: e
            }, this.scrollTo(s, r, i, o)
        },
        next: function(t, e) {
            var n = this.currentPage.pageX,
                i = this.currentPage.pageY;
            n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, t, e)
        },
        prev: function(t, e) {
            var n = this.currentPage.pageX,
                i = this.currentPage.pageY;
            n--, 0 > n && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, t, e)
        },
        _initKeys: function() {
            var e, n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (e in n) this.options.keyBindings[e] = this.options.keyBindings[e] || n[e];
            a.addEvent(t, "keydown", this), this.on("destroy", function() {
                a.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            var e = null;
            if (this.enabled) {
                var i, o = this.options.snap,
                    s = o ? this.currentPage.pageX : this.x,
                    r = o ? this.currentPage.pageY : this.y,
                    l = a.getTime(),
                    u = this.keyTime || 0,
                    c = .25;
                switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(n.round(i.x), n.round(i.y)), this.isInTransition = !1), this.keyAcceleration = 200 > l - u ? n.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s += o ? 1 : this.wrapperWidth : (r += o ? 1 : this.wrapperHeight, e = "keyboardup");
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= o ? 1 : this.wrapperWidth : (r -= o ? 1 : this.wrapperHeight, e = "keyboarddown");
                        break;
                    case this.options.keyBindings.end:
                        s = o ? this.pages.length - 1 : this.maxScrollX, r = o ? this.pages[0].length - 1 : this.maxScrollY, e = "keyboardhintdown";
                        break;
                    case this.options.keyBindings.home:
                        s = 0, r = 0, e = "keyboardhintup";
                        break;
                    case this.options.keyBindings.left:
                        s += o ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        r += o ? 1 : 5 + this.keyAcceleration >> 0, e = "keyboardup";
                        break;
                    case this.options.keyBindings.right:
                        s -= o ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        r -= o ? 1 : 5 + this.keyAcceleration >> 0, e = "keyboarddown"
                }
                if (o) return this.goToPage(s, r), void 0;
                s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), e && this._execEvent(e, t), this.scrollTo(s, r, 0), this.keyTime = l, this.enabled && this._execEvent("afterkeyboard")
            }
        },
        _animate: function(t, e, n, i) {
            function o() {
                var d, p, f, g = a.getTime();
                return g >= h ? (s.isAnimating = !1, s._translate(t, e), s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"), void 0) : (g = (g - c) / n, f = i(g), d = (t - l) * f + l, p = (e - u) * f + u, s._translate(d, p), s.isAnimating && r(o), 3 == s.options.probeType && s._execEvent("scroll"), void 0)
            }
            var s = this,
                l = this.x,
                u = this.y,
                c = a.getTime(),
                h = c + n;
            this.isAnimating = !0, o()
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t)
            }
        }
    }, s.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t)
            }
        },
        destroy: function() {
            this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, "MSPointerDown", this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, "MSPointerMove", this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, "MSPointerUp", this), a.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(e) {
            var n = e.touches ? e.touches[0] : e;
            e.preventDefault(), e.stopPropagation(), this.transitionTime(0), this.initiated = !0, this.moved = !1, this.lastPointX = n.pageX, this.lastPointY = n.pageY, this.startTime = a.getTime(), a.addEvent(t, "touchmove", this), a.addEvent(t, "MSPointerMove", this), a.addEvent(t, "mousemove", this), this.scroller._execEvent("scrollStart")
        },
        _move: function(t) {
            var e, n, i, o, s = t.touches ? t.touches[0] : t;
            a.getTime(), this.moved = !0, e = s.pageX - this.lastPointX, this.lastPointX = s.pageX, n = s.pageY - this.lastPointY, this.lastPointY = s.pageY, i = this.x + e, o = this.y + n, this._pos(i, o), t.preventDefault(), t.stopPropagation()
        },
        _end: function(e) {
            this.initiated && (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, "MSPointerMove", this), a.removeEvent(t, "mousemove", this), this.moved && this.scroller._execEvent("scrollEnd"))
        },
        transitionTime: function(t) {
            t = t || 0, this.indicatorStyle[a.style.transitionDuration] = t + "ms"
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[a.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(0), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / this.scroller.scrollerWidth), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / this.scroller.scrollerHeight), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var t = n.round(this.sizeRatioX * this.scroller.x) || 0,
                e = n.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > e ? e = 0 : e > this.maxPosY && (e = this.maxPosY)), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        },
        _pos: function(t, e) {
            0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > e ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? n.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? n.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
        }
    }, i.ease = a.ease, i
}(window, document, Math);
! function(t, e, n) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = n(e, t) : "function" == typeof define && define.amd ? define(function() {
        return n(e, t)
    }) : t[e] = n(e, t)
}(window, "Audio5js", function(t, e) {
    "use strict";

    function n(t) {
        this.message = t
    }

    function i(t) {
        var e, n = {};
        for (e in t) n[e] = "object" == typeof t[e] ? i(t[e]) : t[e];
        return n
    }
    var o = e.ActiveXObject;
    n.prototype = new Error;
    var s = function(t, e) {
            var n, o = i(e);
            for (n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
            return t
        },
        r = function(t, e) {
            return s(t.prototype, e)
        },
        a = {
            on: function(t, e, n) {
                this.subscribe(t, e, n, !1)
            },
            one: function(t, e, n) {
                this.subscribe(t, e, n, !0)
            },
            off: function(t, e) {
                if (void 0 !== this.channels[t]) {
                    var n, i;
                    for (n = 0, i = this.channels[t].length; i > n; n++) {
                        var o = this.channels[t][n].fn;
                        if (o === e) {
                            this.channels[t].splice(n, 1);
                            break
                        }
                    }
                }
            },
            subscribe: function(t, e, n, i) {
                void 0 === this.channels && (this.channels = {}), this.channels[t] = this.channels[t] || [], this.channels[t].push({
                    fn: e,
                    ctx: n,
                    once: i || !1
                })
            },
            trigger: function(t) {
                if (this.channels && this.channels.hasOwnProperty(t)) {
                    for (var e = Array.prototype.slice.call(arguments, 1), n = []; this.channels[t].length > 0;) {
                        var i = this.channels[t].shift();
                        "function" == typeof i.fn && i.fn.apply(i.ctx, e), i.once || n.push(i)
                    }
                    this.channels[t] = n
                }
            }
        },
        l = {
            flash_embed_code: function() {
                var e, n = '<param name="movie" value="$2?playerInstance=window.' + t + "_flash.instances['$1']&datetime=$3\"/>" + '<param name="wmode" value="transparent"/>' + '<param name="allowscriptaccess" value="always" />' + "</object>";
                return e = o ? '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" id="$1">' : '<object type="application/x-shockwave-flash" data="$2?playerInstance=window.' + t + '_flash.instances[\'$1\']&datetime=$3" width="1" height="1" id="$1" >', e + n
            }(),
            can_play: function(t) {
                var e, n = document.createElement("audio");
                switch (t) {
                    case "mp3":
                        e = 'audio/mpeg; codecs="mp3"';
                        break;
                    case "vorbis":
                        e = 'audio/ogg; codecs="vorbis"';
                        break;
                    case "opus":
                        e = 'audio/ogg; codecs="opus"';
                        break;
                    case "webm":
                        e = 'audio/webm; codecs="vorbis"';
                        break;
                    case "mp4":
                        e = 'audio/mp4; codecs="mp4a.40.5"';
                        break;
                    case "wav":
                        e = 'audio/wav; codecs="1"'
                }
                if (void 0 === e) throw new Error("Unspecified Audio Mime Type");
                return !!n.canPlayType && "" !== n.canPlayType(e)
            },
            has_flash: function() {
                var t = !1;
                if (navigator.plugins && navigator.plugins.length && navigator.plugins["Shockwave Flash"]) t = !0;
                else if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    var e = navigator.mimeTypes["application/x-shockwave-flash"];
                    t = e && e.enabledPlugin
                } else try {
                    var n = new o("ShockwaveFlash.ShockwaveFlash");
                    t = "object" == typeof n
                } catch (i) {}
                return t
            }(),
            embedFlash: function(n, i) {
                var o = document.createElement("div");
                if (o.style.position = "absolute", o.style.width = "1px", o.style.height = "1px", o.style.top = "1px", document.body.appendChild(o), "object" == typeof e.swfobject) {
                    var s = {
                            playerInstance: "window." + t + '_flash.instances["' + i + '"]'
                        },
                        r = {
                            allowscriptaccess: "always",
                            wmode: "transparent"
                        };
                    o.innerHTML = '<div id="' + i + '"></div>', swfobject.embedSWF(n + "?ts=" + ((new Date).getTime() + Math.random()), i, "1", "1", "9.0.0", null, s, r)
                } else {
                    var a = this.flash_embed_code.replace(/\$1/g, i);
                    a = a.replace(/\$2/g, n), a = a.replace(/\$3/g, (new Date).getTime() + Math.random()), o.innerHTML = a
                }
                return document.getElementById(i)
            },
            formatTime: function(t) {
                var e, n = parseInt(t / 3600, 10) % 24,
                    i = parseInt(t / 60, 10) % 60,
                    o = parseInt(t % 60, 10),
                    s = (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o);
                return e = n > 0 ? (10 > n ? "0" + n : n) + ":" + s : s
            }
        };
    l.use_flash = l.can_play("mp3");
    var u, c, h, d = {
            playing: !1,
            vol: 1,
            duration: 0,
            position: 0,
            load_percent: 0,
            seekable: null,
            ready: null
        },
        p = e[t + "_flash"] = e[t + "_flash"] || {
            instances: {},
            count: 0
        };
    c = function() {
        if (l.use_flash && !l.has_flash) throw new Error("Flash Plugin Missing")
    }, c.prototype = {
        init: function(e) {
            p.count += 1, this.id = t + p.count, p.instances[this.id] = this, this.embed(e)
        },
        embed: function(t) {
            l.embedFlash(t, this.id)
        },
        eiReady: function() {
            this.audio = document.getElementById(this.id), this.trigger("ready")
        },
        eiLoadStart: function() {
            this.trigger("loadstart")
        },
        eiLoadedMetadata: function() {
            this.trigger("loadedmetadata")
        },
        eiCanPlay: function() {
            this.trigger("canplay")
        },
        eiTimeUpdate: function(t, e, n) {
            this.position = t, this.duration = e, this.seekable = n, this.trigger("timeupdate", t, this.seekable ? e : null)
        },
        eiProgress: function(t) {
            this.load_percent = t, this.trigger("progress", t)
        },
        eiLoadError: function(t) {
            this.trigger("error", t)
        },
        eiPlay: function() {
            this.playing = !0, this.trigger("play")
        },
        eiPause: function() {
            this.playing = !1, this.trigger("pause")
        },
        eiEnded: function() {
            this.playing = !1, this.trigger("ended")
        },
        eiSeeking: function() {
            this.trigger("seeking")
        },
        eiSeeked: function() {
            this.trigger("seeked")
        },
        reset: function() {
            this.seekable = !1, this.duration = 0, this.position = 0, this.load_percent = 0
        },
        load: function(t) {
            this.reset(), this.audio.load(t)
        },
        play: function() {
            this.audio.pplay()
        },
        pause: function() {
            this.audio.ppause()
        },
        volume: function(t) {
            return void 0 === t || isNaN(parseInt(t, 10)) ? this.vol : (this.audio.setVolume(t), this.vol = t, void 0)
        },
        seek: function(t) {
            try {
                this.audio.seekTo(t), this.position = t
            } catch (e) {}
        }
    }, r(c, a), r(c, d), h = function() {}, h.prototype = {
        init: function(t) {
            this.reusedTag = t, this.trigger("ready")
        },
        createAudio: function() {
            this.audio = this.reusedTag || new Audio, this.audio.autoplay = !1, this.audio.preload = "auto", this.audio.autobuffer = !0, this.bindEvents()
        },
        destroyAudio: function() {
            this.audio && (this.unbindEvents(), delete this.audio)
        },
        bindEvents: function() {
            this.audio.addEventListener("loadstart", this.onLoadStart.bind(this)), this.audio.addEventListener("canplay", this.onLoad.bind(this)), this.audio.addEventListener("loadedmetadata", this.onLoadedMetadata.bind(this)), this.audio.addEventListener("playing", this.onPlay.bind(this)), this.audio.addEventListener("pause", this.onPause.bind(this)), this.audio.addEventListener("ended", this.onEnded.bind(this)), this.audio.addEventListener("error", this.onError.bind(this)), this.audio.addEventListener("timeupdate", this.onTimeUpdate.bind(this)), this.audio.addEventListener("seeking", this.onSeeking.bind(this)), this.audio.addEventListener("seeked", this.onSeeked.bind(this))
        },
        unbindEvents: function() {
            this.audio.removeEventListener("loadstart", this.onLoadStart.bind(this)), this.audio.removeEventListener("canplay", this.onLoad.bind(this)), this.audio.removeEventListener("loadedmetadata", this.onLoadedMetadata.bind(this)), this.audio.removeEventListener("playing", this.onPlay.bind(this)), this.audio.removeEventListener("pause", this.onPause.bind(this)), this.audio.removeEventListener("ended", this.onEnded.bind(this)), this.audio.removeEventListener("error", this.onError.bind(this)), this.audio.removeEventListener("timeupdate", this.onTimeUpdate.bind(this)), this.audio.removeEventListener("seeking", this.onSeeking.bind(this)), this.audio.removeEventListener("seeked", this.onSeeked.bind(this))
        },
        onLoadStart: function() {
            this.trigger("loadstart")
        },
        onLoad: function() {
            this.seekable = this.audio.seekable && this.audio.seekable.length > 0, this.seekable && (this.timer = setInterval(this.onProgress.bind(this), 250)), this.trigger("canplay")
        },
        onLoadedMetadata: function() {
            this.trigger("loadedmetadata")
        },
        onPlay: function() {
            this.playing = !0, this.trigger("play")
        },
        onPause: function() {
            this.playing = !1, this.trigger("pause")
        },
        onEnded: function() {
            this.playing = !1, this.trigger("ended")
        },
        onTimeUpdate: function() {
            null !== this.audio.buffered && this.playing && (this.position = this.audio.currentTime, this.duration = 1 / 0 === this.audio.duration ? null : this.audio.duration, this.trigger("timeupdate", this.position, this.duration))
        },
        onProgress: function() {
            null !== this.audio.buffered && (this.load_percent = parseInt(100 * (this.audio.buffered.end(this.audio.buffered.length - 1) / this.audio.duration), 10), this.trigger("progress", this.load_percent), this.load_percent >= 100 && this.clearLoadProgress())
        },
        onError: function(t) {
            this.trigger("error", t)
        },
        onSeeking: function() {
            this.trigger("seeking")
        },
        onSeeked: function() {
            this.trigger("seeked")
        },
        clearLoadProgress: function() {
            void 0 !== this.timer && (clearInterval(this.timer), delete this.timer)
        },
        reset: function() {
            this.clearLoadProgress(), this.seekable = !1, this.duration = 0, this.position = 0, this.load_percent = 0
        },
        load: function(t) {
            this.reset(), this.destroyAudio(), this.createAudio(), this.audio.setAttribute("src", t), this.audio.load()
        },
        play: function() {
            this.audio.play()
        },
        pause: function() {
            this.audio.pause()
        },
        volume: function(t) {
            if (void 0 === t || isNaN(parseInt(t, 10))) return this.vol;
            var e = 0 > t ? 0 : Math.min(1, t);
            this.audio.volume = e, this.vol = e
        },
        seek: function(t) {
            var e = this.playing;
            this.position = t, this.audio.currentTime = t, e ? this.play() : null !== this.audio.buffered && this.trigger("timeupdate", this.position, this.duration)
        }
    }, r(h, a), r(h, d);
    var f = {
        swf_path: "/swf/audiojs.swf",
        throw_errors: !0,
        format_time: !0,
        codecs: ["mp3"]
    };
    return u = function(t) {
        t = t || {};
        var e;
        for (e in f) f.hasOwnProperty(e) && !t.hasOwnProperty(e) && (t[e] = f[e]);
        this.init(t)
    }, u.can_play = function(t) {
        return l.can_play(t)
    }, u.prototype = {
        init: function(t) {
            this.formatTime = l.formatTime, this.ready = !1, this.settings = t, this.audio = this.getPlayer(), this.bindAudioEvents(), this.settings.use_flash ? this.audio.init(t.swf_path) : this.audio.init(t.reusedTag)
        },
        getPlayer: function() {
            var t, e, n;
            for (t = 0, e = this.settings.codecs.length; e > t; t++) {
                var i = this.settings.codecs[t];
                if (u.can_play(i)) {
                    n = new h, this.settings.use_flash = !1, this.settings.player = {
                        engine: "html",
                        codec: i
                    };
                    break
                }
            }
            return void 0 === n && (this.settings.use_flash = !u.can_play("mp3"), n = this.settings.use_flash ? new c : new h, this.settings.player = {
                engine: this.settings.use_flash ? "flash" : "html",
                codec: "mp3"
            }), n
        },
        bindAudioEvents: function() {
            this.audio.on("ready", this.onReady, this), this.audio.on("loadstart", this.onLoadStart, this), this.audio.on("loadedmetadata", this.onLoadedMetadata, this), this.audio.on("play", this.onPlay, this), this.audio.on("pause", this.onPause, this), this.audio.on("ended", this.onEnded, this), this.audio.on("canplay", this.onCanPlay, this), this.audio.on("timeupdate", this.onTimeUpdate, this), this.audio.on("progress", this.onProgress, this), this.audio.on("error", this.onError, this), this.audio.on("seeking", this.onSeeking, this), this.audio.on("seeked", this.onSeeked, this)
        },
        load: function(t) {
            var e = function(t) {
                this.audio.load(t), this.trigger("load")
            }.bind(this, t);
            this.ready ? e() : this.on("ready", e)
        },
        play: function() {
            this.playing || this.audio.play()
        },
        pause: function() {
            this.playing && this.audio.pause()
        },
        playPause: function() {
            this[this.playing ? "pause" : "play"]()
        },
        volume: function(t) {
            return void 0 === t || isNaN(parseInt(t, 10)) ? this.vol : (this.audio.volume(t), this.vol = t, void 0)
        },
        seek: function(t) {
            this.audio.seek(t), this.position = t
        },
        onReady: function() {
            this.ready = !0, "function" == typeof this.settings.ready && this.settings.ready.call(this, this.settings.player), this.trigger("ready")
        },
        onLoadStart: function() {
            this.trigger("loadstart")
        },
        onLoadedMetadata: function() {
            this.trigger("loadedmetadata")
        },
        onPlay: function() {
            this.playing = !0, this.trigger("play")
        },
        onPause: function() {
            this.playing = !1, this.trigger("pause")
        },
        onEnded: function() {
            this.playing = !1, this.trigger("ended"), this.settings.loop && this.play()
        },
        onError: function() {
            var t = new n("Audio Error. Failed to Load Audio");
            if (this.settings.throw_errors) throw t;
            this.trigger("error", t)
        },
        onCanPlay: function() {
            this.trigger("canplay")
        },
        onSeeking: function() {
            this.trigger("seeking")
        },
        onSeeked: function() {
            this.trigger("seeked")
        },
        onTimeUpdate: function(t, e) {
            this.position = this.settings.format_time ? l.formatTime(t) : t, this.duration !== e && (this.duration = this.settings.format_time && null !== e ? l.formatTime(e) : e), this.trigger("timeupdate", this.position, this.duration)
        },
        onProgress: function(t) {
            this.load_percent = t, this.trigger("progress", t)
        }
    }, r(u, a), r(u, d), u
}), document.createElement("video"), document.createElement("audio"), document.createElement("track");
var vjs = function(t, e, n) {
        var i;
        if ("string" == typeof t) {
            if (0 === t.indexOf("#") && (t = t.slice(1)), vjs.players[t]) return vjs.players[t];
            i = vjs.el(t)
        } else i = t; if (!i || !i.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return i.player || new vjs.Player(i, e, n)
    },
    videojs = vjs;
window.videojs = window.vjs = vjs, vjs.CDN_VERSION = "4.1", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    children: {
        mediaLoader: {},
        posterImage: {},
        textTrackDisplay: {},
        loadingSpinner: {},
        bigPlayButton: {},
        controlBar: {}
    }
}, "GENERATED_CDN_VSN" !== vjs.CDN_VERSION && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.players = {}, vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(t) {
    var e, n;
    t = t || {}, e = t.init || t.init || this.prototype.init || this.prototype.init || function() {}, n = function() {
        e.apply(this, arguments)
    }, n.prototype = vjs.obj.create(this.prototype), n.prototype.constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create;
    for (var i in t) t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
    return n
}, vjs.CoreObject.create = function() {
    var t = vjs.obj.create(this.prototype);
    return this.apply(t, arguments), t
}, vjs.on = function(t, e, n) {
    var i = vjs.getData(t);
    i.handlers || (i.handlers = {}), i.handlers[e] || (i.handlers[e] = []), n.guid || (n.guid = vjs.guid++), i.handlers[e].push(n), i.dispatcher || (i.disabled = !1, i.dispatcher = function(e) {
        if (!i.disabled) {
            e = vjs.fixEvent(e);
            var n = i.handlers[e.type];
            if (n)
                for (var o = n.slice(0), s = 0, r = o.length; r > s && !e.isImmediatePropagationStopped(); s++) o[s].call(t, e)
        }
    }), 1 == i.handlers[e].length && (document.addEventListener ? t.addEventListener(e, i.dispatcher, !1) : document.attachEvent && t.attachEvent("on" + e, i.dispatcher))
}, vjs.off = function(t, e, n) {
    if (vjs.hasData(t)) {
        var i = vjs.getData(t);
        if (i.handlers) {
            var o = function(e) {
                i.handlers[e] = [], vjs.cleanUpEvents(t, e)
            };
            if (e) {
                var s = i.handlers[e];
                if (s) {
                    if (!n) return o(e), void 0;
                    if (n.guid)
                        for (var r = 0; r < s.length; r++) s[r].guid === n.guid && s.splice(r--, 1);
                    vjs.cleanUpEvents(t, e)
                }
            } else
                for (var a in i.handlers) o(a)
        }
    }
}, vjs.cleanUpEvents = function(t, e) {
    var n = vjs.getData(t);
    0 === n.handlers[e].length && (delete n.handlers[e], document.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : document.detachEvent && t.detachEvent("on" + e, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(t)
}, vjs.fixEvent = function(t) {
    function e() {
        return !0
    }

    function n() {
        return !1
    }
    if (!t || !t.isPropagationStopped) {
        var i = t || window.event;
        t = {};
        for (var o in i) "layerX" !== o && "layerY" !== o && (t[o] = i[o]);
        if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
            i.preventDefault && i.preventDefault(), t.returnValue = !1, t.isDefaultPrevented = e
        }, t.isDefaultPrevented = n, t.stopPropagation = function() {
            i.stopPropagation && i.stopPropagation(), t.cancelBubble = !0, t.isPropagationStopped = e
        }, t.isPropagationStopped = n, t.stopImmediatePropagation = function() {
            i.stopImmediatePropagation && i.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
        }, t.isImmediatePropagationStopped = n, null != t.clientX) {
            var s = document.documentElement,
                r = document.body;
            t.pageX = t.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)
        }
        t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
    }
    return t
}, vjs.trigger = function(t, e) {
    var n = vjs.hasData(t) ? vjs.getData(t) : {},
        i = t.parentNode || t.ownerDocument;
    if ("string" == typeof e && (e = {
        type: e,
        target: t
    }), e = vjs.fixEvent(e), n.dispatcher && n.dispatcher.call(t, e), i && !e.isPropagationStopped()) vjs.trigger(i, e);
    else if (!i && !e.isDefaultPrevented()) {
        var o = vjs.getData(e.target);
        e.target[e.type] && (o.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), o.disabled = !1)
    }
    return !e.isDefaultPrevented()
}, vjs.one = function(t, e, n) {
    vjs.on(t, e, function() {
        vjs.off(t, e, arguments.callee), n.apply(this, arguments)
    })
};
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function(t, e) {
        var n = document.createElement(t || "div");
        for (var i in e) hasOwnProp.call(e, i) && (-1 !== i.indexOf("aria-") || "role" == i ? n.setAttribute(i, e[i]) : n[i] = e[i]);
        return n
    }, vjs.capitalize = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, vjs.obj = {}, vjs.obj.create = Object.create || function(t) {
        function e() {}
        return e.prototype = t, new e
    }, vjs.obj.each = function(t, e, n) {
        for (var i in t) hasOwnProp.call(t, i) && e.call(n || this, i, t[i])
    }, vjs.obj.merge = function(t, e) {
        if (!e) return t;
        for (var n in e) hasOwnProp.call(e, n) && (t[n] = e[n]);
        return t
    }, vjs.obj.deepMerge = function(t, e) {
        var n, i, o, s;
        s = "[object Object]", t = vjs.obj.copy(t);
        for (n in e) hasOwnProp.call(e, n) && (i = t[n], o = e[n], t[n] = vjs.obj.isPlain(i) && vjs.obj.isPlain(o) ? vjs.obj.deepMerge(i, o) : e[n]);
        return t
    }, vjs.obj.copy = function(t) {
        return vjs.obj.merge({}, t)
    }, vjs.obj.isPlain = function(t) {
        return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    }, vjs.bind = function(t, e, n) {
        e.guid || (e.guid = vjs.guid++);
        var i = function() {
            return e.apply(t, arguments)
        };
        return i.guid = n ? n + "_" + e.guid : e.guid, i
    }, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(t) {
        var e = t[vjs.expando];
        return e || (e = t[vjs.expando] = vjs.guid++, vjs.cache[e] = {}), vjs.cache[e]
    }, vjs.hasData = function(t) {
        var e = t[vjs.expando];
        return !(!e || vjs.isEmpty(vjs.cache[e]))
    }, vjs.removeData = function(t) {
        var e = t[vjs.expando];
        if (e) {
            delete vjs.cache[e];
            try {
                delete t[vjs.expando]
            } catch (n) {
                t.removeAttribute ? t.removeAttribute(vjs.expando) : t[vjs.expando] = null
            }
        }
    }, vjs.isEmpty = function(t) {
        for (var e in t)
            if (null !== t[e]) return !1;
        return !0
    }, vjs.addClass = function(t, e) {
        -1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e : t.className + " " + e)
    }, vjs.removeClass = function(t, e) {
        if (-1 != t.className.indexOf(e)) {
            for (var n = t.className.split(" "), i = n.length - 1; i >= 0; i--) n[i] === e && n.splice(i, 1);
            t.className = n.join(" ")
        }
    }, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
        var t = vjs.USER_AGENT.match(/OS (\d+)_/i);
        return t && t[1] ? t[1] : void 0
    }(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function() {
        var t, e, n = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        return n ? (t = n[1] && parseFloat(n[1]), e = n[2] && parseFloat(n[2]), t && e ? parseFloat(n[1] + "." + n[2]) : t ? t : null) : null
    }(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.getAttributeValues = function(t) {
        var e = {},
            n = ",autoplay,controls,loop,muted,default,";
        if (t && t.attributes && t.attributes.length > 0)
            for (var i, o, s = t.attributes, r = s.length - 1; r >= 0; r--) i = s[r].name, o = s[r].value, ("boolean" == typeof t[i] || -1 !== n.indexOf("," + i + ",")) && (o = null !== o ? !0 : !1), e[i] = o;
        return e
    }, vjs.getComputedDimension = function(t, e) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), n
    }, vjs.insertFirst = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }, vjs.support = {}, vjs.el = function(t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
    }, vjs.formatTime = function(t, e) {
        e = e || t;
        var n = Math.floor(t % 60),
            i = Math.floor(t / 60 % 60),
            o = Math.floor(t / 3600),
            s = Math.floor(e / 60 % 60),
            r = Math.floor(e / 3600);
        return o = o > 0 || r > 0 ? o + ":" : "", i = ((o || s >= 10) && 10 > i ? "0" + i : i) + ":", n = 10 > n ? "0" + n : n, o + i + n
    }, vjs.blockTextSelection = function() {
        document.body.focus(), document.onselectstart = function() {
            return !1
        }
    }, vjs.unblockTextSelection = function() {
        document.onselectstart = function() {
            return !0
        }
    }, vjs.trim = function(t) {
        return t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
    }, vjs.round = function(t, e) {
        return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    }, vjs.createTimeRange = function(t, e) {
        return {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    }, vjs.get = function(t, e, n) {
        var i = 0 === t.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === t.indexOf("http");
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (n) {}
            throw new Error("This browser does not support XMLHttpRequest.")
        });
        var o = new XMLHttpRequest;
        try {
            o.open("GET", t)
        } catch (s) {
            n(s)
        }
        o.onreadystatechange = function() {
            4 === o.readyState && (200 === o.status || i && 0 === o.status ? e(o.responseText) : n && n())
        };
        try {
            o.send()
        } catch (s) {
            n && n(s)
        }
    }, vjs.setLocalStorage = function(t, e) {
        try {
            var n = window.localStorage || !1;
            if (!n) return;
            n[t] = e
        } catch (i) {
            22 == i.code || 1014 == i.code ? vjs.log("LocalStorage Full (VideoJS)", i) : 18 == i.code ? vjs.log("LocalStorage not allowed (VideoJS)", i) : vjs.log("LocalStorage Error (VideoJS)", i)
        }
    }, vjs.getAbsoluteURL = function(t) {
        return t.match(/^https?:\/\//) || (t = vjs.createEl("div", {
            innerHTML: '<a href="' + t + '">x</a>'
        }).firstChild.href), t
    }, vjs.log = function() {
        vjs.log.history = vjs.log.history || [], vjs.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments))
    }, vjs.findPosition = function(t) {
        var e, n, i, o, s, r, a, l, u;
        return t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), e ? (n = document.documentElement, i = document.body, o = n.clientLeft || i.clientLeft || 0, s = window.pageXOffset || i.scrollLeft, r = e.left + s - o, a = n.clientTop || i.clientTop || 0, l = window.pageYOffset || i.scrollTop, u = e.top + l - a, {
            left: r,
            top: u
        }) : {
            left: 0,
            top: 0
        }
    }, vjs.Component = vjs.CoreObject.extend({
        init: function(t, e, n) {
            this.player_ = t, this.options_ = vjs.obj.copy(this.options_), e = this.options(e), this.id_ = e.id || (e.el && e.el.id ? e.el.id : t.id() + "_component_" + vjs.guid++), this.name_ = e.name || null, this.el_ = e.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n)
        }
    }), vjs.Component.prototype.dispose = function() {
        if (this.children_)
            for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
    }, vjs.Component.prototype.player_, vjs.Component.prototype.player = function() {
        return this.player_
    }, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(t) {
        return void 0 === t ? this.options_ : this.options_ = vjs.obj.deepMerge(this.options_, t)
    }, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(t, e) {
        return vjs.createEl(t, e)
    }, vjs.Component.prototype.el = function() {
        return this.el_
    }, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
        return this.contentEl_ || this.el_
    }, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
        return this.id_
    }, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
        return this.name_
    }, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
        return this.children_
    }, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(t) {
        return this.childIndex_[t]
    }, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(t) {
        return this.childNameIndex_[t]
    }, vjs.Component.prototype.addChild = function(t, e) {
        var n, i, o;
        return "string" == typeof t ? (o = t, e = e || {}, i = e.componentClass || vjs.capitalize(o), e.name = o, n = new window.videojs[i](this.player_ || this, e)) : n = t, this.children_.push(n), "function" == typeof n.id && (this.childIndex_[n.id()] = n), o = o || n.name && n.name(), o && (this.childNameIndex_[o] = n), "function" == typeof n.el && n.el() && this.contentEl().appendChild(n.el()), n
    }, vjs.Component.prototype.removeChild = function(t) {
        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
            for (var e = !1, n = this.children_.length - 1; n >= 0; n--)
                if (this.children_[n] === t) {
                    e = !0, this.children_.splice(n, 1);
                    break
                }
            if (e) {
                this.childIndex_[t.id] = null, this.childNameIndex_[t.name] = null;
                var i = t.el();
                i && i.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
            }
        }
    }, vjs.Component.prototype.initChildren = function() {
        var t = this.options_;
        if (t && t.children) {
            var e = this;
            vjs.obj.each(t.children, function(t, n) {
                if (n !== !1) {
                    var i = function() {
                        e[t] = e.addChild(t, n)
                    };
                    n.loadEvent || i()
                }
            })
        }
    }, vjs.Component.prototype.buildCSSClass = function() {
        return ""
    }, vjs.Component.prototype.on = function(t, e) {
        return vjs.on(this.el_, t, vjs.bind(this, e)), this
    }, vjs.Component.prototype.off = function(t, e) {
        return vjs.off(this.el_, t, e), this
    }, vjs.Component.prototype.one = function(t, e) {
        return vjs.one(this.el_, t, vjs.bind(this, e)), this
    }, vjs.Component.prototype.trigger = function(t, e) {
        return vjs.trigger(this.el_, t, e), this
    }, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(t) {
        return t && (this.isReady_ ? t.call(this) : (void 0 === this.readyQueue_ && (this.readyQueue_ = []), this.readyQueue_.push(t))), this
    }, vjs.Component.prototype.triggerReady = function() {
        this.isReady_ = !0;
        var t = this.readyQueue_;
        if (t && t.length > 0) {
            for (var e = 0, n = t.length; n > e; e++) t[e].call(this);
            this.readyQueue_ = [], this.trigger("ready")
        }
    }, vjs.Component.prototype.addClass = function(t) {
        return vjs.addClass(this.el_, t), this
    }, vjs.Component.prototype.removeClass = function(t) {
        return vjs.removeClass(this.el_, t), this
    }, vjs.Component.prototype.show = function() {
        return this.el_.style.display = "block", this
    }, vjs.Component.prototype.hide = function() {
        return this.el_.style.display = "none", this
    }, vjs.Component.prototype.fadeIn = function() {
        return this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in"), this
    }, vjs.Component.prototype.fadeOut = function() {
        return this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out"), this
    }, vjs.Component.prototype.lockShowing = function() {
        return this.addClass("vjs-lock-showing"), this
    }, vjs.Component.prototype.unlockShowing = function() {
        return this.removeClass("vjs-lock-showing"), this
    }, vjs.Component.prototype.disable = function() {
        this.hide(), this.show = function() {}, this.fadeIn = function() {}
    }, vjs.Component.prototype.width = function(t, e) {
        return this.dimension("width", t, e)
    }, vjs.Component.prototype.height = function(t, e) {
        return this.dimension("height", t, e)
    }, vjs.Component.prototype.dimensions = function(t, e) {
        return this.width(t, !0).height(e)
    }, vjs.Component.prototype.dimension = function(t, e, n) {
        if (void 0 !== e) return this.el_.style[t] = -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? e : "auto" === e ? "" : e + "px", n || this.trigger("resize"), this;
        if (!this.el_) return 0;
        var i = this.el_.style[t],
            o = i.indexOf("px");
        return -1 !== o ? parseInt(i.slice(0, o), 10) : parseInt(this.el_["offset" + vjs.capitalize(t)], 10)
    }, vjs.Button = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e);
            var n = !1;
            this.on("touchstart", function() {
                n = !0
            }), this.on("touchmove", function() {
                n = !1
            });
            var i = this;
            this.on("touchend", function(t) {
                n && i.onClick(t), t.preventDefault(), t.stopPropagation()
            }), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
        }
    }), vjs.Button.prototype.createEl = function(t, e) {
        return e = vjs.obj.merge({
            className: this.buildCSSClass(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>",
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, e), vjs.Component.prototype.createEl.call(this, t, e)
    }, vjs.Button.prototype.buildCSSClass = function() {
        return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
    }, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
        vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
    }, vjs.Button.prototype.onKeyPress = function(t) {
        (32 == t.which || 13 == t.which) && (t.preventDefault(), this.onClick())
    }, vjs.Button.prototype.onBlur = function() {
        vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
    }, vjs.Slider = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), t.on(this.playerEvent, vjs.bind(this, this.update)), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), t.ready(vjs.bind(this, this.update)), this.boundEvents = {}
        }
    }), vjs.Slider.prototype.createEl = function(t, e) {
        return e = e || {}, e.className = e.className + " vjs-slider", e = vjs.obj.merge({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, e), vjs.Component.prototype.createEl.call(this, t, e)
    }, vjs.Slider.prototype.onMouseDown = function(t) {
        t.preventDefault(), vjs.blockTextSelection(), this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(t)
    }, vjs.Slider.prototype.onMouseUp = function() {
        vjs.unblockTextSelection(), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update()
    }, vjs.Slider.prototype.update = function() {
        if (this.el_) {
            var t, e = this.getPercent(),
                n = this.handle,
                i = this.bar;
            if (isNaN(e) && (e = 0), t = e, n) {
                var o = this.el_,
                    s = o.offsetWidth,
                    r = n.el().offsetWidth,
                    a = r ? r / s : 0,
                    l = 1 - a,
                    u = e * l;
                t = u + a / 2, n.el().style.left = vjs.round(100 * u, 2) + "%"
            }
            i.el().style.width = vjs.round(100 * t, 2) + "%"
        }
    }, vjs.Slider.prototype.calculateDistance = function(t) {
        var e, n, i, o, s, r, a, l, u;
        if (e = this.el_, n = vjs.findPosition(e), s = r = e.offsetWidth, a = this.handle, this.options_.vertical) {
            if (o = n.top, u = t.changedTouches ? t.changedTouches[0].pageY : t.pageY, a) {
                var c = a.el().offsetHeight;
                o += c / 2, r -= c
            }
            return Math.max(0, Math.min(1, (o - u + r) / r))
        }
        if (i = n.left, l = t.changedTouches ? t.changedTouches[0].pageX : t.pageX, a) {
            var h = a.el().offsetWidth;
            i += h / 2, s -= h
        }
        return Math.max(0, Math.min(1, (l - i) / s))
    }, vjs.Slider.prototype.onFocus = function() {
        vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
    }, vjs.Slider.prototype.onKeyPress = function(t) {
        37 == t.which ? (t.preventDefault(), this.stepBack()) : 39 == t.which && (t.preventDefault(), this.stepForward())
    }, vjs.Slider.prototype.onBlur = function() {
        vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
    }, vjs.Slider.prototype.onClick = function(t) {
        t.stopImmediatePropagation(), t.preventDefault()
    }, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(t, e) {
        return e = e || {}, e.className = e.className + " vjs-slider-handle", e = vjs.obj.merge({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, e), vjs.Component.prototype.createEl.call(this, "div", e)
    }, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(t) {
        this.addChild(t), t.on("click", vjs.bind(this, function() {
            this.unlockShowing()
        }))
    }, vjs.Menu.prototype.createEl = function() {
        var t = this.options().contentElType || "ul";
        this.contentEl_ = vjs.createEl(t, {
            className: "vjs-menu-content"
        });
        var e = vjs.Component.prototype.createEl.call(this, "div", {
            append: this.contentEl_,
            className: "vjs-menu"
        });
        return e.appendChild(this.contentEl_), vjs.on(e, "click", function(t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }), e
    }, vjs.MenuItem = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), this.selected(e.selected)
        }
    }), vjs.MenuItem.prototype.createEl = function(t, e) {
        return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-menu-item",
            innerHTML: this.options_.label
        }, e))
    }, vjs.MenuItem.prototype.onClick = function() {
        this.selected(!0)
    }, vjs.MenuItem.prototype.selected = function(t) {
        t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
    }, vjs.MenuButton = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), this.menu = this.createMenu(), this.addChild(this.menu), this.items && 0 === this.items.length && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
        }
    }), vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
        var t = new vjs.Menu(this.player_);
        if (this.options().title && t.el().appendChild(vjs.createEl("li", {
            className: "vjs-menu-title",
            innerHTML: vjs.capitalize(this.kind_),
            tabindex: -1
        })), this.items = this.createItems(), this.items)
            for (var e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
        return t
    }, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
        return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
        this.one("mouseout", vjs.bind(this, function() {
            this.menu.unlockShowing(), this.el_.blur()
        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }, vjs.MenuButton.prototype.onKeyPress = function(t) {
        t.preventDefault(), 32 == t.which || 13 == t.which ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : 27 == t.which && this.buttonPressed_ && this.unpressButton()
    }, vjs.MenuButton.prototype.pressButton = function() {
        this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
    }, vjs.MenuButton.prototype.unpressButton = function() {
        this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
    }, vjs.Player = vjs.Component.extend({
        init: function(t, e, n) {
            this.tag = t, e = vjs.obj.merge(this.getTagSettings(t), e), this.cache_ = {}, this.poster_ = e.poster, this.controls_ = e.controls, e.customControlsOnMobile !== !0 && (vjs.IS_IOS || vjs.IS_ANDROID) ? (t.controls = e.controls, this.controls_ = !1) : t.controls = !1, vjs.Component.call(this, this, e, n), this.one("play", function(t) {
                var e = {
                        type: "firstplay",
                        target: this.el_
                    },
                    n = vjs.trigger(this.el_, e);
                n || (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
            }), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("error", this.onError), this.on("fullscreenchange", this.onFullscreenChange), vjs.players[this.id_] = this, e.plugins && vjs.obj.each(e.plugins, function(t, e) {
                this[t](e)
            }, this)
        }
    }), vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
        vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.stopTrackingProgress(), this.stopTrackingCurrentTime(), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
    }, vjs.Player.prototype.getTagSettings = function(t) {
        var e = {
            sources: [],
            tracks: []
        };
        if (vjs.obj.merge(e, vjs.getAttributeValues(t)), t.hasChildNodes()) {
            var n, i, o, s, r;
            for (n = t.childNodes, s = 0, r = n.length; r > s; s++) i = n[s], o = i.nodeName.toLowerCase(), "source" === o ? e.sources.push(vjs.getAttributeValues(i)) : "track" === o && e.tracks.push(vjs.getAttributeValues(i))
        }
        return e
    }, vjs.Player.prototype.createEl = function() {
        var t = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
            e = this.tag;
        if (e.removeAttribute("width"), e.removeAttribute("height"), e.hasChildNodes()) {
            var n, i, o, s, r, a;
            for (n = e.childNodes, i = n.length, a = []; i--;) s = n[i], r = s.nodeName.toLowerCase(), ("source" === r || "track" === r) && a.push(s);
            for (o = 0; o < a.length; o++) e.removeChild(a[o])
        }
        return e.id = e.id || "vjs_video_" + vjs.guid++, t.id = e.id, t.className = e.className, e.id += "_html5_api", e.className = "vjs-tech", e.player = t.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), e.parentNode && e.parentNode.insertBefore(t, e), vjs.insertFirst(e, t), t
    }, vjs.Player.prototype.loadTech = function(t, e) {
        this.tech ? this.unloadTech() : "Html5" !== t && this.tag && (this.el_.removeChild(this.tag), this.tag.player = null, this.tag = null), this.techName = t, this.isReady_ = !1;
        var n = function() {
                this.player_.triggerReady(), this.features.progressEvents || this.player_.manualProgressOn(), this.features.timeupdateEvents || this.player_.manualTimeUpdatesOn()
            },
            i = vjs.obj.merge({
                source: e,
                parentEl: this.el_
            }, this.options_[t.toLowerCase()]);
        e && (e.src == this.cache_.src && this.cache_.currentTime > 0 && (i.startTime = this.cache_.currentTime), this.cache_.src = e.src), this.tech = new window.videojs[t](this, i), this.tech.ready(n)
    }, vjs.Player.prototype.unloadTech = function() {
        this.isReady_ = !1, this.tech.dispose(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1
    }, vjs.Player.prototype.manualProgressOn = function() {
        this.manualProgress = !0, this.trackProgress(), this.tech.one("progress", function() {
            this.features.progressEvents = !0, this.player_.manualProgressOff()
        })
    }, vjs.Player.prototype.manualProgressOff = function() {
        this.manualProgress = !1, this.stopTrackingProgress()
    }, vjs.Player.prototype.trackProgress = function() {
        this.progressInterval = setInterval(vjs.bind(this, function() {
            this.cache_.bufferEnd < this.buffered().end(0) ? this.trigger("progress") : 1 == this.bufferedPercent() && (this.stopTrackingProgress(), this.trigger("progress"))
        }), 500)
    }, vjs.Player.prototype.stopTrackingProgress = function() {
        clearInterval(this.progressInterval)
    }, vjs.Player.prototype.manualTimeUpdatesOn = function() {
        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime), this.tech.one("timeupdate", function() {
            this.features.timeupdateEvents = !0, this.player_.manualTimeUpdatesOff()
        })
    }, vjs.Player.prototype.manualTimeUpdatesOff = function() {
        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
    }, vjs.Player.prototype.trackCurrentTime = function() {
        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function() {
            this.trigger("timeupdate")
        }), 250)
    }, vjs.Player.prototype.stopTrackingCurrentTime = function() {
        clearInterval(this.currentTimeInterval)
    }, vjs.Player.prototype.onEnded = function() {
        this.options_.loop && (this.currentTime(0), this.play())
    }, vjs.Player.prototype.onPlay = function() {
        vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing")
    }, vjs.Player.prototype.onFirstPlay = function() {
        this.options_.starttime && this.currentTime(this.options_.starttime)
    }, vjs.Player.prototype.onPause = function() {
        vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused")
    }, vjs.Player.prototype.onProgress = function() {
        1 == this.bufferedPercent() && this.trigger("loadedalldata")
    }, vjs.Player.prototype.onDurationChange = function() {
        this.duration(this.techGet("duration"))
    }, vjs.Player.prototype.onError = function(t) {
        vjs.log("Video Error", t)
    }, vjs.Player.prototype.onFullscreenChange = function() {
        this.isFullScreen ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
    }, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
        return this.cache_
    }, vjs.Player.prototype.techCall = function(t, e) {
        if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
            this[t](e)
        });
        else try {
            this.tech[t](e)
        } catch (n) {
            throw vjs.log(n), n
        }
    }, vjs.Player.prototype.techGet = function(t) {
        if (this.tech.isReady_) try {
            return this.tech[t]()
        } catch (e) {
            throw void 0 === this.tech[t] ? vjs.log("Video.js: " + t + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (vjs.log("Video.js: " + t + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady_ = !1) : vjs.log(e), e
        }
    }, vjs.Player.prototype.play = function() {
        return this.techCall("play"), this
    }, vjs.Player.prototype.pause = function() {
        return this.techCall("pause"), this
    }, vjs.Player.prototype.paused = function() {
        return this.techGet("paused") === !1 ? !1 : !0
    }, vjs.Player.prototype.currentTime = function(t) {
        return void 0 !== t ? (this.cache_.lastSetCurrentTime = t, this.techCall("setCurrentTime", t), this.manualTimeUpdates && this.trigger("timeupdate"), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
    }, vjs.Player.prototype.duration = function(t) {
        return void 0 !== t ? (this.cache_.duration = parseFloat(t), this) : this.cache_.duration
    }, vjs.Player.prototype.remainingTime = function() {
        return this.duration() - this.currentTime()
    }, vjs.Player.prototype.buffered = function() {
        var t = this.techGet("buffered"),
            e = 0,
            n = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
        return t && t.length > 0 && t.end(0) !== n && (n = t.end(0), this.cache_.bufferEnd = n), vjs.createTimeRange(e, n)
    }, vjs.Player.prototype.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    }, vjs.Player.prototype.volume = function(t) {
        var e;
        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall("setVolume", e), vjs.setLocalStorage("volume", e), this) : (e = parseFloat(this.techGet("volume")), isNaN(e) ? 1 : e)
    }, vjs.Player.prototype.muted = function(t) {
        return void 0 !== t ? (this.techCall("setMuted", t), this) : this.techGet("muted") || !1
    }, vjs.Player.prototype.supportsFullScreen = function() {
        return this.techGet("supportsFullScreen") || !1
    }, vjs.Player.prototype.requestFullScreen = function() {
        var t = vjs.support.requestFullScreen;
        return this.isFullScreen = !0, t ? (vjs.on(document, t.eventName, vjs.bind(this, function() {
            this.isFullScreen = document[t.isFullScreen], this.isFullScreen === !1 && vjs.off(document, t.eventName, arguments.callee), this.trigger("fullscreenchange")
        })), this.el_[t.requestFn]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
    }, vjs.Player.prototype.cancelFullScreen = function() {
        var t = vjs.support.requestFullScreen;
        return this.isFullScreen = !1, t ? document[t.cancelFn]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
    }, vjs.Player.prototype.enterFullWindow = function() {
        this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
    }, vjs.Player.prototype.fullWindowOnEscKey = function(t) {
        27 === t.keyCode && (this.isFullScreen === !0 ? this.cancelFullScreen() : this.exitFullWindow())
    }, vjs.Player.prototype.exitFullWindow = function() {
        this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
    }, vjs.Player.prototype.selectSource = function(t) {
        for (var e = 0, n = this.options_.techOrder; e < n.length; e++) {
            var i = vjs.capitalize(n[e]),
                o = window.videojs[i];
            if (o.isSupported())
                for (var s = 0, r = t; s < r.length; s++) {
                    var a = r[s];
                    if (o.canPlaySource(a)) return {
                        source: a,
                        tech: i
                    }
                }
        }
        return !1
    }, vjs.Player.prototype.src = function(t) {
        if (t instanceof Array) {
            var e, n = this.selectSource(t);
            n ? (t = n.source, e = n.tech, e == this.techName ? this.src(t) : this.loadTech(e, t)) : this.el_.appendChild(vjs.createEl("p", {
                innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
            }))
        } else t instanceof Object ? window.videojs[this.techName].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.cache_.src = t, this.isReady_ ? (this.techCall("src", t), "auto" == this.options_.preload && this.load(), this.options_.autoplay && this.play()) : this.ready(function() {
            this.src(t)
        }));
        return this
    }, vjs.Player.prototype.load = function() {
        return this.techCall("load"), this
    }, vjs.Player.prototype.currentSrc = function() {
        return this.techGet("currentSrc") || this.cache_.src || ""
    }, vjs.Player.prototype.preload = function(t) {
        return void 0 !== t ? (this.techCall("setPreload", t), this.options_.preload = t, this) : this.techGet("preload")
    }, vjs.Player.prototype.autoplay = function(t) {
        return void 0 !== t ? (this.techCall("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet("autoplay", t)
    }, vjs.Player.prototype.loop = function(t) {
        return void 0 !== t ? (this.techCall("setLoop", t), this.options_.loop = t, this) : this.techGet("loop")
    }, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(t) {
        return void 0 !== t && (this.poster_ = t), this.poster_
    }, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(t) {
        return void 0 !== t && this.controls_ !== t && (this.controls_ = !!t, this.trigger("controlschange")), this.controls_
    }, vjs.Player.prototype.error = function() {
        return this.techGet("error")
    }, vjs.Player.prototype.ended = function() {
        return this.techGet("ended")
    },
    function() {
        var t, e, n;
        n = document.createElement("div"), e = {}, void 0 !== n.cancelFullscreen ? (e.requestFn = "requestFullscreen", e.cancelFn = "exitFullscreen", e.eventName = "fullscreenchange", e.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (t = "moz", e.isFullScreen = t + "FullScreen") : (t = "webkit", e.isFullScreen = t + "IsFullScreen"), n[t + "RequestFullScreen"] && (e.requestFn = t + "RequestFullScreen", e.cancelFn = t + "CancelFullScreen"), e.eventName = t + "fullscreenchange"), document[e.cancelFn] && (vjs.support.requestFullScreen = e)
    }(), vjs.ControlBar = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.controls() || this.disable(), t.one("play", vjs.bind(this, function() {
                var t, e = vjs.bind(this, this.fadeIn),
                    n = vjs.bind(this, this.fadeOut);
                this.fadeIn(), "ontouchstart" in window || (this.player_.on("mouseover", e), this.player_.on("mouseout", n), this.player_.on("pause", vjs.bind(this, this.lockShowing)), this.player_.on("play", vjs.bind(this, this.unlockShowing))), t = !1, this.player_.on("touchstart", function() {
                    t = !0
                }), this.player_.on("touchmove", function() {
                    t = !1
                }), this.player_.on("touchend", vjs.bind(this, function(e) {
                    var n;
                    t && (n = this.el().className.search("fade-in"), -1 !== n ? this.fadeOut() : this.fadeIn()), t = !1, this.player_.paused() || e.preventDefault()
                }))
            }))
        }
    }), vjs.ControlBar.prototype.options_ = {
        loadEvent: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    }, vjs.ControlBar.prototype.createEl = function() {
        return vjs.createEl("div", {
            className: "vjs-control-bar"
        })
    }, vjs.ControlBar.prototype.fadeIn = function() {
        vjs.Component.prototype.fadeIn.call(this), this.player_.trigger("controlsvisible")
    }, vjs.ControlBar.prototype.fadeOut = function() {
        vjs.Component.prototype.fadeOut.call(this), this.player_.trigger("controlshidden")
    }, vjs.PlayToggle = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), t.on("play", vjs.bind(this, this.onPlay)), t.on("pause", vjs.bind(this, this.onPause))
        }
    }), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
        return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.PlayToggle.prototype.onClick = function() {
        this.player_.paused() ? this.player_.play() : this.player_.pause()
    }, vjs.PlayToggle.prototype.onPlay = function() {
        vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = "Pause"
    }, vjs.PlayToggle.prototype.onPause = function() {
        vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play"
    }, vjs.CurrentTimeDisplay = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
        }
    }), vjs.CurrentTimeDisplay.prototype.createEl = function() {
        var t = vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.content = vjs.createEl("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }), t.appendChild(vjs.createEl("div").appendChild(this.content)), t
    }, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
        var t = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
        this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(t, this.player_.duration())
    }, vjs.DurationDisplay = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
        }
    }), vjs.DurationDisplay.prototype.createEl = function() {
        var t = vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.content = vjs.createEl("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        }), t.appendChild(vjs.createEl("div").appendChild(this.content)), t
    }, vjs.DurationDisplay.prototype.updateContent = function() {
        this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(this.player_.duration()))
    }, vjs.TimeDivider = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e)
        }
    }), vjs.TimeDivider.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }, vjs.RemainingTimeDisplay = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateContent))
        }
    }), vjs.RemainingTimeDisplay.prototype.createEl = function() {
        var t = vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.content = vjs.createEl("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        }), t.appendChild(vjs.createEl("div").appendChild(this.content)), t
    }, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
        this.player_.duration() && this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + vjs.formatTime(this.player_.remainingTime()))
    }, vjs.FullscreenToggle = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e)
        }
    }), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
        return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.FullscreenToggle.prototype.onClick = function() {
        this.player_.isFullScreen ? (this.player_.cancelFullScreen(), this.el_.children[0].children[0].innerHTML = "Fullscreen") : (this.player_.requestFullScreen(), this.el_.children[0].children[0].innerHTML = "Non-Fullscreen")
    }, vjs.ProgressControl = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e)
        }
    }), vjs.ProgressControl.prototype.options_ = {
        children: {
            seekBar: {}
        }
    }, vjs.ProgressControl.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }, vjs.SeekBar = vjs.Slider.extend({
        init: function(t, e) {
            vjs.Slider.call(this, t, e), t.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), t.ready(vjs.bind(this, this.updateARIAAttributes))
        }
    }), vjs.SeekBar.prototype.options_ = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    }, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
        return vjs.Slider.prototype.createEl.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }, vjs.SeekBar.prototype.updateARIAAttributes = function() {
        var t = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
        this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.getPercent(), 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(t, this.player_.duration()))
    }, vjs.SeekBar.prototype.getPercent = function() {
        return this.player_.currentTime() / this.player_.duration()
    }, vjs.SeekBar.prototype.onMouseDown = function(t) {
        vjs.Slider.prototype.onMouseDown.call(this, t), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
    }, vjs.SeekBar.prototype.onMouseMove = function(t) {
        var e = this.calculateDistance(t) * this.player_.duration();
        e == this.player_.duration() && (e -= .1), this.player_.currentTime(e)
    }, vjs.SeekBar.prototype.onMouseUp = function(t) {
        vjs.Slider.prototype.onMouseUp.call(this, t), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play()
    }, vjs.SeekBar.prototype.stepForward = function() {
        this.player_.currentTime(this.player_.currentTime() + 5)
    }, vjs.SeekBar.prototype.stepBack = function() {
        this.player_.currentTime(this.player_.currentTime() - 5)
    }, vjs.LoadProgressBar = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.on("progress", vjs.bind(this, this.update))
        }
    }), vjs.LoadProgressBar.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    }, vjs.LoadProgressBar.prototype.update = function() {
        this.el_.style && (this.el_.style.width = vjs.round(100 * this.player_.bufferedPercent(), 2) + "%")
    }, vjs.PlayProgressBar = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e)
        }
    }), vjs.PlayProgressBar.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    }, vjs.SeekHandle = vjs.SliderHandle.extend(), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
        return vjs.SliderHandle.prototype.createEl.call(this, "div", {
            className: "vjs-seek-handle"
        })
    }, vjs.VolumeControl = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function() {
                t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
            }))
        }
    }), vjs.VolumeControl.prototype.options_ = {
        children: {
            volumeBar: {}
        }
    }, vjs.VolumeControl.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }, vjs.VolumeBar = vjs.Slider.extend({
        init: function(t, e) {
            vjs.Slider.call(this, t, e), t.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), t.ready(vjs.bind(this, this.updateARIAAttributes)), setTimeout(vjs.bind(this, this.update), 0)
        }
    }), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
        this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.player_.volume(), 2)), this.el_.setAttribute("aria-valuetext", vjs.round(100 * this.player_.volume(), 2) + "%")
    }, vjs.VolumeBar.prototype.options_ = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    }, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
        return vjs.Slider.prototype.createEl.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }, vjs.VolumeBar.prototype.onMouseMove = function(t) {
        this.player_.volume(this.calculateDistance(t))
    }, vjs.VolumeBar.prototype.getPercent = function() {
        return this.player_.muted() ? 0 : this.player_.volume()
    }, vjs.VolumeBar.prototype.stepForward = function() {
        this.player_.volume(this.player_.volume() + .1)
    }, vjs.VolumeBar.prototype.stepBack = function() {
        this.player_.volume(this.player_.volume() - .1)
    }, vjs.VolumeLevel = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e)
        }
    }), vjs.VolumeLevel.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
        return vjs.SliderHandle.prototype.createEl.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }, vjs.MuteToggle = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), t.on("volumechange", vjs.bind(this, this.update)), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function() {
                t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
            }))
        }
    }), vjs.MuteToggle.prototype.createEl = function() {
        return vjs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, vjs.MuteToggle.prototype.onClick = function() {
        this.player_.muted(this.player_.muted() ? !1 : !0)
    }, vjs.MuteToggle.prototype.update = function() {
        var t = this.player_.volume(),
            e = 3;
        0 === t || this.player_.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), this.player_.muted() ? "Unmute" != this.el_.children[0].children[0].innerHTML && (this.el_.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.el_.children[0].children[0].innerHTML && (this.el_.children[0].children[0].innerHTML = "Mute");
        for (var n = 0; 4 > n; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
        vjs.addClass(this.el_, "vjs-vol-" + e)
    }, vjs.VolumeMenuButton = vjs.MenuButton.extend({
        init: function(t, e) {
            vjs.MenuButton.call(this, t, e), t.on("volumechange", vjs.bind(this, this.update)), t.tech && t.tech.features && t.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), t.on("loadstart", vjs.bind(this, function() {
                t.tech.features && t.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
            })), this.addClass("vjs-menu-button")
        }
    }), vjs.VolumeMenuButton.prototype.createMenu = function() {
        var t = new vjs.Menu(this.player_, {
                contentElType: "div"
            }),
            e = new vjs.VolumeBar(this.player_, vjs.obj.merge({
                vertical: !0
            }, this.options_.volumeBar));
        return t.addChild(e), t
    }, vjs.VolumeMenuButton.prototype.onClick = function() {
        vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
    }, vjs.VolumeMenuButton.prototype.createEl = function() {
        return vjs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }, vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update, vjs.PosterImage = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), t.poster() && t.controls() || this.hide(), t.on("play", vjs.bind(this, this.hide))
        }
    }), vjs.PosterImage.prototype.createEl = function() {
        var t = vjs.createEl("div", {
                className: "vjs-poster",
                tabIndex: -1
            }),
            e = this.player_.poster();
        return e && ("backgroundSize" in t.style ? t.style.backgroundImage = 'url("' + e + '")' : t.appendChild(vjs.createEl("img", {
            src: e
        }))), t
    }, vjs.PosterImage.prototype.onClick = function() {
        this.player_.play()
    }, vjs.LoadingSpinner = vjs.Component.extend({
        init: function(t, e) {
            vjs.Component.call(this, t, e), t.on("canplay", vjs.bind(this, this.hide)), t.on("canplaythrough", vjs.bind(this, this.hide)), t.on("playing", vjs.bind(this, this.hide)), t.on("seeked", vjs.bind(this, this.hide)), t.on("seeking", vjs.bind(this, this.show)), t.on("seeked", vjs.bind(this, this.hide)), t.on("error", vjs.bind(this, this.show)), t.on("waiting", vjs.bind(this, this.show))
        }
    }), vjs.LoadingSpinner.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }, vjs.BigPlayButton = vjs.Button.extend({
        init: function(t, e) {
            vjs.Button.call(this, t, e), t.controls() || this.hide(), t.on("play", vjs.bind(this, this.hide))
        }
    }), vjs.BigPlayButton.prototype.createEl = function() {
        return vjs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: "<span></span>",
            "aria-label": "play video"
        })
    }, vjs.BigPlayButton.prototype.onClick = function() {
        this.player_.play()
    }, vjs.MediaTechController = vjs.Component.extend({
        init: function(t, e, n) {
            vjs.Component.call(this, t, e, n)
        }
    }), vjs.MediaTechController.prototype.onClick = function() {
        return vjs.IS_ANDROID ? function() {} : function() {
            this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
        }
    }(), vjs.MediaTechController.prototype.features = {
        volumeControl: !0,
        fullscreenResize: !1,
        progressEvents: !1,
        timeupdateEvents: !1
    }, vjs.media = {}, vjs.media.ApiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
    var methodName = vjs.media.ApiMethods[i];
    vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName)
}
vjs.Html5 = vjs.MediaTechController.extend({
    init: function(t, e, n) {
        this.features.volumeControl = vjs.Html5.canControlVolume(), this.features.movingMediaElementInDOM = !vjs.IS_IOS, this.features.fullscreenResize = !0, vjs.MediaTechController.call(this, t, e, n);
        var i = e.source;
        i && this.el_.currentSrc == i.src ? t.trigger("loadstart") : i && (this.el_.src = i.src), t.ready(function() {
            this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
        }), this.on("click", this.onClick), this.setupTriggers(), this.triggerReady()
    }
}), vjs.Html5.prototype.dispose = function() {
    vjs.MediaTechController.prototype.dispose.call(this)
}, vjs.Html5.prototype.createEl = function() {
    var t = this.player_,
        e = t.tag;
    e && this.features.movingMediaElementInDOM !== !1 || (e ? (e.player = null, t.tag = null, t.el().removeChild(e), e = e.cloneNode(!1)) : e = vjs.createEl("video", {
        id: t.id() + "_html5_api",
        className: "vjs-tech"
    }), e.player = t, vjs.insertFirst(e, t.el()));
    for (var n = ["autoplay", "preload", "loop", "muted"], i = n.length - 1; i >= 0; i--) {
        var o = n[i];
        null !== t.options_[o] && (e[o] = t.options_[o])
    }
    return e
}, vjs.Html5.prototype.setupTriggers = function() {
    for (var t = vjs.Html5.Events.length - 1; t >= 0; t--) vjs.on(this.el_, vjs.Html5.Events[t], vjs.bind(this.player_, this.eventHandler))
}, vjs.Html5.prototype.eventHandler = function(t) {
    this.trigger(t), t.stopPropagation()
}, vjs.Html5.prototype.play = function() {
    this.el_.play()
}, vjs.Html5.prototype.pause = function() {
    this.el_.pause()
}, vjs.Html5.prototype.paused = function() {
    return this.el_.paused
}, vjs.Html5.prototype.currentTime = function() {
    return this.el_.currentTime
}, vjs.Html5.prototype.setCurrentTime = function(t) {
    try {
        this.el_.currentTime = t
    } catch (e) {
        vjs.log(e, "Video is not ready. (Video.js)")
    }
}, vjs.Html5.prototype.duration = function() {
    return this.el_.duration || 0
}, vjs.Html5.prototype.buffered = function() {
    return this.el_.buffered
}, vjs.Html5.prototype.volume = function() {
    return this.el_.volume
}, vjs.Html5.prototype.setVolume = function(t) {
    this.el_.volume = t
}, vjs.Html5.prototype.muted = function() {
    return this.el_.muted
}, vjs.Html5.prototype.setMuted = function(t) {
    this.el_.muted = t
}, vjs.Html5.prototype.width = function() {
    return this.el_.offsetWidth
}, vjs.Html5.prototype.height = function() {
    return this.el_.offsetHeight
}, vjs.Html5.prototype.supportsFullScreen = function() {
    return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0
}, vjs.Html5.prototype.enterFullScreen = function() {
    var t = this.el_;
    t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
        t.pause(), t.webkitEnterFullScreen()
    }, 0)) : t.webkitEnterFullScreen()
}, vjs.Html5.prototype.exitFullScreen = function() {
    this.el_.webkitExitFullScreen()
}, vjs.Html5.prototype.src = function(t) {
    this.el_.src = t
}, vjs.Html5.prototype.load = function() {
    this.el_.load()
}, vjs.Html5.prototype.currentSrc = function() {
    return this.el_.currentSrc
}, vjs.Html5.prototype.preload = function() {
    return this.el_.preload
}, vjs.Html5.prototype.setPreload = function(t) {
    this.el_.preload = t
}, vjs.Html5.prototype.autoplay = function() {
    return this.el_.autoplay
}, vjs.Html5.prototype.setAutoplay = function(t) {
    this.el_.autoplay = t
}, vjs.Html5.prototype.loop = function() {
    return this.el_.loop
}, vjs.Html5.prototype.setLoop = function(t) {
    this.el_.loop = t
}, vjs.Html5.prototype.error = function() {
    return this.el_.error
}, vjs.Html5.prototype.seeking = function() {
    return this.el_.seeking
}, vjs.Html5.prototype.ended = function() {
    return this.el_.ended
}, vjs.Html5.prototype.defaultMuted = function() {
    return this.el_.defaultMuted
}, vjs.Html5.isSupported = function() {
    return !!vjs.TEST_VID.canPlayType
}, vjs.Html5.canPlaySource = function(t) {
    try {
        return !!vjs.TEST_VID.canPlayType(t.type)
    } catch (e) {
        return ""
    }
}, vjs.Html5.canControlVolume = function() {
    var t = vjs.TEST_VID.volume;
    return vjs.TEST_VID.volume = t / 2 + .1, t !== vjs.TEST_VID.volume
}, vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(t) {
    return t && -1 != t.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
}), vjs.Flash = vjs.MediaTechController.extend({
    init: function(t, e, n) {
        vjs.MediaTechController.call(this, t, e, n);
        var i = e.source,
            o = e.parentEl,
            s = this.el_ = vjs.createEl("div", {
                id: t.id() + "_temp_flash"
            }),
            r = t.id() + "_flash_api",
            a = t.options_,
            l = vjs.obj.merge({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: a.autoplay,
                preload: a.preload,
                loop: a.loop,
                muted: a.muted
            }, e.flashVars),
            u = vjs.obj.merge({
                wmode: "opaque",
                bgcolor: "#000000"
            }, e.params),
            c = vjs.obj.merge({
                id: r,
                name: r,
                "class": "vjs-tech"
            }, e.attributes);
        if (i && (l.src = encodeURIComponent(vjs.getAbsoluteURL(i.src))), vjs.insertFirst(s, o), e.startTime && this.ready(function() {
            this.load(), this.play(), this.currentTime(e.startTime)
        }), e.iFrameMode !== !0 || vjs.IS_FIREFOX) vjs.Flash.embed(e.swf, s, l, u, c);
        else {
            var h = vjs.createEl("iframe", {
                id: r + "_iframe",
                name: r + "_iframe",
                className: "vjs-tech",
                scrolling: "no",
                marginWidth: 0,
                marginHeight: 0,
                frameBorder: 0
            });
            l.readyFunction = "ready", l.eventProxyFunction = "events", l.errorEventProxyFunction = "errors", vjs.on(h, "load", vjs.bind(this, function() {
                var t, n = h.contentWindow;
                t = h.contentDocument ? h.contentDocument : h.contentWindow.document, t.write(vjs.Flash.getEmbedCode(e.swf, l, u, c)), n.player = this.player_, n.ready = vjs.bind(this.player_, function(e) {
                    var n = t.getElementById(e),
                        i = this,
                        o = i.tech;
                    o.el_ = n, vjs.on(n, "click", o.bind(o.onClick)), vjs.Flash.checkReady(o)
                }), n.events = vjs.bind(this.player_, function(t, e) {
                    var n = this;
                    n && "flash" === n.techName && n.trigger(e)
                }), n.errors = vjs.bind(this.player_, function(t, e) {
                    vjs.log("Flash Error", e)
                })
            })), s.parentNode.replaceChild(h, s)
        }
    }
}), vjs.Flash.prototype.dispose = function() {
    vjs.MediaTechController.prototype.dispose.call(this)
}, vjs.Flash.prototype.play = function() {
    this.el_.vjs_play()
}, vjs.Flash.prototype.pause = function() {
    this.el_.vjs_pause()
}, vjs.Flash.prototype.src = function(t) {
    if (t = vjs.getAbsoluteURL(t), this.el_.vjs_src(t), this.player_.autoplay()) {
        var e = this;
        setTimeout(function() {
            e.play()
        }, 0)
    }
}, vjs.Flash.prototype.load = function() {
    this.el_.vjs_load()
}, vjs.Flash.prototype.poster = function() {
    this.el_.vjs_getProperty("poster")
}, vjs.Flash.prototype.buffered = function() {
    return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"))
}, vjs.Flash.prototype.supportsFullScreen = function() {
    return !1
}, vjs.Flash.prototype.enterFullScreen = function() {
    return !1
};
var api = vjs.Flash.prototype,
    readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
    readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
    createSetter = function(t) {
        var e = t.charAt(0).toUpperCase() + t.slice(1);
        api["set" + e] = function(e) {
            return this.el_.vjs_setProperty(t, e)
        }
    },
    createGetter = function(t) {
        api[t] = function() {
            return this.el_.vjs_getProperty(t)
        }
    };
if (function() {
    var t;
    for (t = 0; t < readWrite.length; t++) createGetter(readWrite[t]), createSetter(readWrite[t]);
    for (t = 0; t < readOnly.length; t++) createGetter(readOnly[t])
}(), vjs.Flash.isSupported = function() {
    return vjs.Flash.version()[0] >= 10
}, vjs.Flash.canPlaySource = function(t) {
    return t.type in vjs.Flash.formats ? "maybe" : void 0
}, vjs.Flash.formats = {
    "video/flv": "FLV",
    "video/x-flv": "FLV",
    "video/mp4": "MP4",
    "video/m4v": "MP4"
}, vjs.Flash.onReady = function(t) {
    var e = vjs.el(t),
        n = e.player || e.parentNode.player,
        i = n.tech;
    e.player = n, i.el_ = e, i.on("click", i.onClick), vjs.Flash.checkReady(i)
}, vjs.Flash.checkReady = function(t) {
    t.el().vjs_getProperty ? t.triggerReady() : setTimeout(function() {
        vjs.Flash.checkReady(t)
    }, 50)
}, vjs.Flash.onEvent = function(t, e) {
    var n = vjs.el(t).player;
    n.trigger(e)
}, vjs.Flash.onError = function(t, e) {
    var n = vjs.el(t).player;
    n.trigger("error"), vjs.log("Flash Error", e, t)
}, vjs.Flash.version = function() {
    var t = "0,0,0";
    try {
        t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
    } catch (e) {
        try {
            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
        } catch (n) {}
    }
    return t.split(",")
}, vjs.Flash.embed = function(t, e, n, i, o) {
    var s = vjs.Flash.getEmbedCode(t, n, i, o),
        r = vjs.createEl("div", {
            innerHTML: s
        }).childNodes[0],
        a = e.parentNode;
    e.parentNode.replaceChild(r, e);
    var l = a.childNodes[0];
    return setTimeout(function() {
        l.style.display = "block"
    }, 1e3), r
}, vjs.Flash.getEmbedCode = function(t, e, n, i) {
    var o = '<object type="application/x-shockwave-flash"',
        s = "",
        r = "",
        a = "";
    return e && vjs.obj.each(e, function(t, e) {
        s += t + "=" + e + "&amp;"
    }), n = vjs.obj.merge({
        movie: t,
        flashvars: s,
        allowScriptAccess: "always",
        allowNetworking: "all"
    }, n), vjs.obj.each(n, function(t, e) {
        r += '<param name="' + t + '" value="' + e + '" />'
    }), i = vjs.obj.merge({
        data: t,
        width: "100%",
        height: "100%"
    }, i), vjs.obj.each(i, function(t, e) {
        a += t + '="' + e + '" '
    }), o + a + ">" + r + "</object>"
}, vjs.MediaLoader = vjs.Component.extend({
    init: function(t, e, n) {
        if (vjs.Component.call(this, t, e, n), t.options_.sources && 0 !== t.options_.sources.length) t.src(t.options_.sources);
        else
            for (var i = 0, o = t.options_.techOrder; i < o.length; i++) {
                var s = vjs.capitalize(o[i]),
                    r = window.videojs[s];
                if (r && r.isSupported()) {
                    t.loadTech(s);
                    break
                }
            }
    }
}), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function() {
    return this.textTracks_ = this.textTracks_ || [], this.textTracks_
}, vjs.Player.prototype.addTextTrack = function(t, e, n, i) {
    var o = this.textTracks_ = this.textTracks_ || [];
    i = i || {}, i.kind = t, i.label = e, i.language = n;
    var s = vjs.capitalize(t || "subtitles"),
        r = new window.videojs[s + "Track"](this, i);
    return o.push(r), r
}, vjs.Player.prototype.addTextTracks = function(t) {
    for (var e, n = 0; n < t.length; n++) e = t[n], this.addTextTrack(e.kind, e.label, e.language, e);
    return this
}, vjs.Player.prototype.showTextTrack = function(t, e) {
    for (var n, i, o, s = this.textTracks_, r = 0, a = s.length; a > r; r++) n = s[r], n.id() === t ? (n.show(), i = n) : e && n.kind() == e && n.mode() > 0 && n.disable();
    return o = i ? i.kind() : e ? e : !1, o && this.trigger(o + "trackchange"), this
}, vjs.TextTrack = vjs.Component.extend({
    init: function(t, e) {
        vjs.Component.call(this, t, e), this.id_ = e.id || "vjs_" + e.kind + "_" + e.language + "_" + vjs.guid++, this.src_ = e.src, this.dflt_ = e["default"] || e.dflt, this.title_ = e.title, this.language_ = e.srclang, this.label_ = e.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0, this.player_.on("fullscreenchange", vjs.bind(this, this.adjustFontSize))
    }
}), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function() {
    return this.kind_
}, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function() {
    return this.src_
}, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function() {
    return this.dflt_
}, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function() {
    return this.title_
}, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function() {
    return this.language_
}, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function() {
    return this.label_
}, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function() {
    return this.cues_
}, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function() {
    return this.activeCues_
}, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function() {
    return this.readyState_
}, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function() {
    return this.mode_
}, vjs.TextTrack.prototype.adjustFontSize = function() {
    this.el_.style.fontSize = this.player_.isFullScreen ? 100 * 1.4 * (screen.width / this.player_.width()) + "%" : ""
}, vjs.TextTrack.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-" + this.kind_ + " vjs-text-track"
    })
}, vjs.TextTrack.prototype.show = function() {
    this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this)
}, vjs.TextTrack.prototype.hide = function() {
    this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this)
}, vjs.TextTrack.prototype.disable = function() {
    2 == this.mode_ && this.hide(), this.deactivate(), this.mode_ = 0
}, vjs.TextTrack.prototype.activate = function() {
    0 === this.readyState_ && this.load(), 0 === this.mode_ && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), ("captions" === this.kind_ || "subtitles" === this.kind_) && this.player_.getChild("textTrackDisplay").addChild(this))
}, vjs.TextTrack.prototype.deactivate = function() {
    this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this)
}, vjs.TextTrack.prototype.load = function() {
    0 === this.readyState_ && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)))
}, vjs.TextTrack.prototype.onError = function(t) {
    this.error = t, this.readyState_ = 3, this.trigger("error")
}, vjs.TextTrack.prototype.parseCues = function(t) {
    for (var e, n, i, o, s = t.split("\n"), r = "", a = 1, l = s.length; l > a; a++)
        if (r = vjs.trim(s[a])) {
            for (-1 == r.indexOf("-->") ? (o = r, r = vjs.trim(s[++a])) : o = this.cues_.length, e = {
                id: o,
                index: this.cues_.length
            }, n = r.split(" --> "), e.startTime = this.parseCueTime(n[0]), e.endTime = this.parseCueTime(n[1]), i = []; s[++a] && (r = vjs.trim(s[a]));) i.push(r);
            e.text = i.join("<br/>"), this.cues_.push(e)
        }
    this.readyState_ = 2, this.trigger("loaded")
}, vjs.TextTrack.prototype.parseCueTime = function(t) {
    var e, n, i, o, s, r = t.split(":"),
        a = 0;
    return 3 == r.length ? (e = r[0], n = r[1], i = r[2]) : (e = 0, n = r[0], i = r[1]), i = i.split(/\s+/), o = i.splice(0, 1)[0], o = o.split(/\.|,/), s = parseFloat(o[1]), o = o[0], a += 3600 * parseFloat(e), a += 60 * parseFloat(n), a += parseFloat(o), s && (a += s / 1e3), a
}, vjs.TextTrack.prototype.update = function() {
    if (this.cues_.length > 0) {
        var t = this.player_.currentTime();
        if (void 0 === this.prevChange || t < this.prevChange || this.nextChange <= t) {
            var e, n, i, o, s = this.cues_,
                r = this.player_.duration(),
                a = 0,
                l = !1,
                u = [];
            for (t >= this.nextChange || void 0 === this.nextChange ? o = void 0 !== this.firstActiveIndex ? this.firstActiveIndex : 0 : (l = !0, o = void 0 !== this.lastActiveIndex ? this.lastActiveIndex : s.length - 1);;) {
                if (i = s[o], i.endTime <= t) a = Math.max(a, i.endTime), i.active && (i.active = !1);
                else if (t < i.startTime) {
                    if (r = Math.min(r, i.startTime), i.active && (i.active = !1), !l) break
                } else l ? (u.splice(0, 0, i), void 0 === n && (n = o), e = o) : (u.push(i), void 0 === e && (e = o), n = o), r = Math.min(r, i.endTime), a = Math.max(a, i.startTime), i.active = !0; if (l) {
                    if (0 === o) break;
                    o--
                } else {
                    if (o === s.length - 1) break;
                    o++
                }
            }
            this.activeCues_ = u, this.nextChange = r, this.prevChange = a, this.firstActiveIndex = e, this.lastActiveIndex = n, this.updateDisplay(), this.trigger("cuechange")
        }
    }
}, vjs.TextTrack.prototype.updateDisplay = function() {
    for (var t = this.activeCues_, e = "", n = 0, i = t.length; i > n; n++) e += '<span class="vjs-tt-cue">' + t[n].text + "</span>";
    this.el_.innerHTML = e
}, vjs.TextTrack.prototype.reset = function() {
    this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
}, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({
    init: function(t, e, n) {
        vjs.Component.call(this, t, e, n), t.options_.tracks && t.options_.tracks.length > 0 && this.player_.addTextTracks(t.options_.tracks)
    }
}), vjs.TextTrackDisplay.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-text-track-display"
    })
}, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
    init: function(t, e) {
        var n = this.track = e.track;
        e.label = n.label(), e.selected = n.dflt(), vjs.MenuItem.call(this, t, e), this.player_.on(n.kind() + "trackchange", vjs.bind(this, this.update))
    }
}), vjs.TextTrackMenuItem.prototype.onClick = function() {
    vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
}, vjs.TextTrackMenuItem.prototype.update = function() {
    this.selected(2 == this.track.mode())
}, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
    init: function(t, e) {
        e.track = {
            kind: function() {
                return e.kind
            },
            player: t,
            label: function() {
                return e.kind + " off"
            },
            dflt: function() {
                return !1
            },
            mode: function() {
                return !1
            }
        }, vjs.TextTrackMenuItem.call(this, t, e), this.selected(!0)
    }
}), vjs.OffTextTrackMenuItem.prototype.onClick = function() {
    vjs.TextTrackMenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
}, vjs.OffTextTrackMenuItem.prototype.update = function() {
    for (var t, e = this.player_.textTracks(), n = 0, i = e.length, o = !0; i > n; n++) t = e[n], t.kind() == this.track.kind() && 2 == t.mode() && (o = !1);
    this.selected(o)
}, vjs.TextTrackButton = vjs.MenuButton.extend({
    init: function(t, e) {
        vjs.MenuButton.call(this, t, e), this.items.length <= 1 && this.hide()
    }
}), vjs.TextTrackButton.prototype.createItems = function() {
    var t, e = [];
    e.push(new vjs.OffTextTrackMenuItem(this.player_, {
        kind: this.kind_
    }));
    for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
        track: t
    }));
    return e
}, vjs.CaptionsButton = vjs.TextTrackButton.extend({
    init: function(t, e, n) {
        vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Captions Menu")
    }
}), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({
    init: function(t, e, n) {
        vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Subtitles Menu")
    }
}), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
    init: function(t, e, n) {
        vjs.TextTrackButton.call(this, t, e, n), this.el_.setAttribute("aria-label", "Chapters Menu")
    }
}), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
    for (var t, e = [], n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
        track: t
    }));
    return e
}, vjs.ChaptersButton.prototype.createMenu = function() {
    for (var t, e, n = this.player_.textTracks(), i = 0, o = n.length, s = this.items = []; o > i; i++)
        if (t = n[i], t.kind() == this.kind_ && t.dflt()) {
            if (t.readyState() < 2) return this.chaptersTrack = t, t.on("loaded", vjs.bind(this, this.createMenu)), void 0;
            e = t;
            break
        }
    var r = this.menu = new vjs.Menu(this.player_);
    if (r.el_.appendChild(vjs.createEl("li", {
        className: "vjs-menu-title",
        innerHTML: vjs.capitalize(this.kind_),
        tabindex: -1
    })), e) {
        var a, l, u = e.cues_;
        for (i = 0, o = u.length; o > i; i++) a = u[i], l = new vjs.ChaptersTrackMenuItem(this.player_, {
            track: e,
            cue: a
        }), s.push(l), r.addChild(l)
    }
    return this.items.length > 0 && this.show(), r
}, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
    init: function(t, e) {
        var n = this.track = e.track,
            i = this.cue = e.cue,
            o = t.currentTime();
        e.label = i.text, e.selected = i.startTime <= o && o < i.endTime, vjs.MenuItem.call(this, t, e), n.on("cuechange", vjs.bind(this, this.update))
    }
}), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
    vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
}, vjs.ChaptersTrackMenuItem.prototype.update = function() {
    var t = this.cue,
        e = this.player_.currentTime();
    this.selected(t.startTime <= e && e < t.endTime)
}, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
    subtitlesButton: {},
    captionsButton: {},
    chaptersButton: {}
}), vjs.JSON, "undefined" != typeof window.JSON && "function" === window.JSON.parse) vjs.JSON = window.JSON;
else {
    vjs.JSON = {};
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var n, i, o = t[e];
            if (o && "object" == typeof o)
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
            return reviver.call(t, e, o)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
    }
}
vjs.autoSetup = function() {
        var t, e, n, i = document.getElementsByTagName("video");
        if (i && i.length > 0)
            for (var o = 0, s = i.length; s > o; o++) {
                if (e = i[o], !e || !e.getAttribute) {
                    vjs.autoSetupTimeout(1);
                    break
                }
                void 0 === e.player && (t = e.getAttribute("data-setup"), null !== t && (t = vjs.JSON.parse(t || "{}"), n = videojs(e, t)))
            } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
    }, vjs.autoSetupTimeout = function(t) {
        setTimeout(vjs.autoSetup, t)
    }, vjs.one(window, "load", function() {
        vjs.windowLoaded = !0
    }), vjs.autoSetupTimeout(1), vjs.plugin = function(t, e) {
        vjs.Player.prototype[t] = e
    }, videojs.options.flash.swf = "//d24kptljz0gkhd.cloudfront.net/assets/video-js-a0d899bf5a6c01bdd94e3fb52116bb99.swf",
    function(t) {
        "use strict";

        function e() {
            var t = document.documentElement;
            return "requestFullscreen" in t || "mozRequestFullScreen" in t && document.mozFullScreenEnabled || "webkitRequestFullScreen" in t
        }

        function n(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen()
        }

        function i() {
            return document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || !1
        }

        function o() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }

        function s(e) {
            t(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function() {
                pageflow.activeBackgroundVideo && setTimeout(function() {
                    pageflow.activeBackgroundVideo.paused() && !pageflow.features.has("mobile platform") && pageflow.activeBackgroundVideo.play()
                }, 300), e(i())
            })
        }
        t.support.fullscreen = e(), t.fn.fullScreen = function(e) {
            if (!t.support.fullscreen || 1 !== this.length) return this;
            if (i()) return o(), this;
            var r = t.extend({
                    background: "#111",
                    callback: t.noop(),
                    fullscreenClass: "fullScreen"
                }, e),
                a = this,
                l = t("<div>", {
                    css: {
                        "overflow-y": "auto",
                        background: r.background,
                        width: "100%",
                        height: "100%"
                    }
                }).insertBefore(a).append(a);
            return a.addClass(r.fullscreenClass), n(l.get(0)), l.click(function(t) {
                t.target == this && o()
            }), a.cancel = function() {
                return o(), a
            }, s(function(e) {
                e || (t(document).off("fullscreenchange mozfullscreenchange webkitfullscreenchange"), a.removeClass(r.fullscreenClass).insertBefore(l), l.remove()), r.callback && r.callback(e)
            }), a
        }, t.fn.cancelFullScreen = function() {
            return o(), this
        }
    }(jQuery),
    function(t, e, n) {
        function i(t) {
            var e = {},
                i = /^jQuery\d+$/;
            return n.each(t.attributes, function(t, n) {
                n.specified && !i.test(n.name) && (e[n.name] = n.value)
            }), e
        }

        function o(t, i) {
            var o = this,
                s = n(o);
            if (o.value == s.attr("placeholder") && s.hasClass("placeholder"))
                if (s.data("placeholder-password")) {
                    if (s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id")), t === !0) return s[0].value = i;
                    s.focus()
                } else o.value = "", s.removeClass("placeholder"), o == e.activeElement && o.select()
        }

        function s() {
            var t, e = this,
                s = n(e),
                r = this.id;
            if ("" == e.value) {
                if ("password" == e.type) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            t = s.clone().attr({
                                type: "text"
                            })
                        } catch (a) {
                            t = n("<input>").attr(n.extend(i(this), {
                                type: "text"
                            }))
                        }
                        t.removeAttr("name").data({
                            "placeholder-password": s,
                            "placeholder-id": r
                        }).bind("focus.placeholder", o), s.data({
                            "placeholder-textinput": t,
                            "placeholder-id": r
                        }).before(t)
                    }
                    s = s.removeAttr("id").hide().prev().attr("id", r).show()
                }
                s.addClass("placeholder"), s[0].value = s.attr("placeholder")
            } else s.removeClass("placeholder")
        }
        var r, a, l = "placeholder" in e.createElement("input"),
            u = "placeholder" in e.createElement("textarea"),
            c = n.fn,
            h = n.valHooks,
            d = n.propHooks;
        l && u ? (a = c.placeholder = function() {
            return this
        }, a.input = a.textarea = !0) : (a = c.placeholder = function() {
            var t = this;
            return t.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": o,
                "blur.placeholder": s
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), t
        }, a.input = l, a.textarea = u, r = {
            get: function(t) {
                var e = n(t),
                    i = e.data("placeholder-password");
                return i ? i[0].value : e.data("placeholder-enabled") && e.hasClass("placeholder") ? "" : t.value
            },
            set: function(t, i) {
                var r = n(t),
                    a = r.data("placeholder-password");
                return a ? a[0].value = i : r.data("placeholder-enabled") ? ("" == i ? (t.value = i, t != e.activeElement && s.call(t)) : r.hasClass("placeholder") ? o.call(t, !0, i) || (t.value = i) : t.value = i, r) : t.value = i
            }
        }, l || (h.input = r, d.value = r), u || (h.textarea = r, d.value = r), n(function() {
            n(e).delegate("form", "submit.placeholder", function() {
                var t = n(".placeholder", this).each(o);
                setTimeout(function() {
                    t.each(s)
                }, 10)
            })
        }), n(t).bind("beforeunload.placeholder", function() {
            n(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    function(t, e) {
        function n(e) {
            var n, i = t(e.ownerDocument);
            return e = t(e), n = e.offset(), {
                x: n.left + e.outerWidth() / 2 - i.scrollLeft(),
                y: n.top + e.outerHeight() / 2 - i.scrollTop()
            }
        }
        var i = /^key/,
            o = /^(?:mouse|contextmenu)|click/;
        t.fn.simulate = function(e, n) {
            return this.each(function() {
                new t.simulate(this, e, n)
            })
        }, t.simulate = function(e, n, i) {
            var o = t.camelCase("simulate-" + n);
            this.target = e, this.options = i, this[o] ? this[o]() : this.simulateEvent(e, n, i)
        }, t.extend(t.simulate, {
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            },
            buttonCode: {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            }
        }), t.extend(t.simulate.prototype, {
            simulateEvent: function(t, e, n) {
                var i = this.createEvent(e, n);
                this.dispatchEvent(t, e, i, n)
            },
            createEvent: function(t, e) {
                return i.test(t) ? this.keyEvent(t, e) : o.test(t) ? this.mouseEvent(t, e) : void 0
            },
            mouseEvent: function(n, i) {
                var o, s, r, a;
                return i = t.extend({
                    bubbles: !0,
                    cancelable: "mousemove" !== n,
                    view: window,
                    detail: 0,
                    screenX: 0,
                    screenY: 0,
                    clientX: 1,
                    clientY: 1,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    button: 0,
                    relatedTarget: e
                }, i), document.createEvent ? (o = document.createEvent("MouseEvents"), o.initMouseEvent(n, i.bubbles, i.cancelable, i.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget || document.body.parentNode), 0 === o.pageX && 0 === o.pageY && Object.defineProperty && (s = o.relatedTarget.ownerDocument || document, r = s.documentElement, a = s.body, Object.defineProperty(o, "pageX", {
                    get: function() {
                        return i.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0)
                    }
                }), Object.defineProperty(o, "pageY", {
                    get: function() {
                        return i.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)
                    }
                }))) : document.createEventObject && (o = document.createEventObject(), t.extend(o, i), o.button = {
                    0: 1,
                    1: 4,
                    2: 2
                }[o.button] || o.button), o
            },
            keyEvent: function(n, i) {
                var o;
                if (i = t.extend({
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !1,
                    keyCode: 0,
                    charCode: e
                }, i), document.createEvent) try {
                    o = document.createEvent("KeyEvents"), o.initKeyEvent(n, i.bubbles, i.cancelable, i.view, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode)
                } catch (s) {
                    o = document.createEvent("Events"), o.initEvent(n, i.bubbles, i.cancelable), t.extend(o, {
                        view: i.view,
                        ctrlKey: i.ctrlKey,
                        altKey: i.altKey,
                        shiftKey: i.shiftKey,
                        metaKey: i.metaKey,
                        keyCode: i.keyCode,
                        charCode: i.charCode
                    })
                } else document.createEventObject && (o = document.createEventObject(), t.extend(o, i));
                return (/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()) || "[object Opera]" === {}.toString.call(window.opera)) && (o.keyCode = i.charCode > 0 ? i.charCode : i.keyCode, o.charCode = e), o
            },
            dispatchEvent: function(t, e, n) {
                t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent && t.fireEvent("on" + e, n)
            },
            simulateFocus: function() {
                function e() {
                    i = !0
                }
                var n, i = !1,
                    o = t(this.target);
                o.bind("focus", e), o[0].focus(), i || (n = t.Event("focusin"), n.preventDefault(), o.trigger(n), o.triggerHandler("focus")), o.unbind("focus", e)
            },
            simulateBlur: function() {
                function e() {
                    i = !0
                }
                var n, i = !1,
                    o = t(this.target);
                o.bind("blur", e), o[0].blur(), setTimeout(function() {
                    o[0].ownerDocument.activeElement === o[0] && o[0].ownerDocument.body.focus(), i || (n = t.Event("focusout"), n.preventDefault(), o.trigger(n), o.triggerHandler("blur")), o.unbind("blur", e)
                }, 1)
            }
        }), t.extend(t.simulate.prototype, {
            simulateDrag: function() {
                var t = 0,
                    e = this.target,
                    i = this.options,
                    o = n(e),
                    s = Math.floor(o.x),
                    r = Math.floor(o.y),
                    a = i.dx || 0,
                    l = i.dy || 0,
                    u = i.moves || 3,
                    c = {
                        clientX: s,
                        clientY: r
                    };
                for (this.simulateEvent(e, "mousedown", c); u > t; t++) s += a / u, r += l / u, c = {
                    clientX: Math.round(s),
                    clientY: Math.round(r)
                }, this.simulateEvent(document, "mousemove", c);
                this.simulateEvent(e, "mouseup", c), this.simulateEvent(e, "click", c)
            }
        })
    }(jQuery), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, i, o, s, r, a = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, n = 0; s > n; n += 1) r[n] = str(n, l) || "null";
                        return o = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + a + "]" : "[" + r.join(",") + "]", gap = a, o
                    }
                    if (rep && "object" == typeof rep)
                        for (s = rep.length, n = 0; s > n; n += 1) "string" == typeof rep[n] && (i = rep[n], o = str(i, l), o && r.push(quote(i) + (gap ? ": " : ":") + o));
                    else
                        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (o = str(i, l), o && r.push(quote(i) + (gap ? ": " : ":") + o));
                    return o = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + a + "}" : "{" + r.join(",") + "}", gap = a, o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; n > i; i += 1) indent += " ";
            else "string" == typeof n && (indent = n); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, i, o = t[e];
                if (o && "object" == typeof o)
                    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = walk(o, n), void 0 !== i ? o[n] = i : delete o[n]);
                return reviver.call(t, e, o)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            o = Object.prototype,
            s = Function.prototype,
            r = i.push,
            a = i.slice,
            l = i.concat,
            u = o.toString,
            c = o.hasOwnProperty,
            h = i.forEach,
            d = i.map,
            p = i.reduce,
            f = i.reduceRight,
            g = i.filter,
            v = i.every,
            m = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            w = Array.isArray,
            _ = Object.keys,
            j = s.bind,
            x = function(t) {
                return t instanceof x ? t : this instanceof x ? (this._wrapped = t, void 0) : new x(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.5.1";
        var T = x.each = x.forEach = function(t, e, i) {
            if (null != t)
                if (h && t.forEach === h) t.forEach(e, i);
                else if (t.length === +t.length) {
                for (var o = 0, s = t.length; s > o; o++)
                    if (e.call(i, t[o], o, t) === n) return
            } else
                for (var r in t)
                    if (x.has(t, r) && e.call(i, t[r], r, t) === n) return
        };
        x.map = x.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : d && t.map === d ? t.map(e, n) : (T(t, function(t, o, s) {
                i.push(e.call(n, t, o, s))
            }), i)
        };
        var C = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = x.bind(e, i)), o ? t.reduce(e, n) : t.reduce(e);
            if (T(t, function(t, s, r) {
                o ? n = e.call(i, n, t, s, r) : (n = t, o = !0)
            }), !o) throw new TypeError(C);
            return n
        }, x.reduceRight = x.foldr = function(t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = x.bind(e, i)), o ? t.reduceRight(e, n) : t.reduceRight(e);
            var s = t.length;
            if (s !== +s) {
                var r = x.keys(t);
                s = r.length
            }
            if (T(t, function(a, l, u) {
                l = r ? r[--s] : --s, o ? n = e.call(i, n, t[l], l, u) : (n = t[l], o = !0)
            }), !o) throw new TypeError(C);
            return n
        }, x.find = x.detect = function(t, e, n) {
            var i;
            return k(t, function(t, o, s) {
                return e.call(n, t, o, s) ? (i = t, !0) : void 0
            }), i
        }, x.filter = x.select = function(t, e, n) {
            var i = [];
            return null == t ? i : g && t.filter === g ? t.filter(e, n) : (T(t, function(t, o, s) {
                e.call(n, t, o, s) && i.push(t)
            }), i)
        }, x.reject = function(t, e, n) {
            return x.filter(t, function(t, i, o) {
                return !e.call(n, t, i, o)
            }, n)
        }, x.every = x.all = function(t, e, i) {
            e || (e = x.identity);
            var o = !0;
            return null == t ? o : v && t.every === v ? t.every(e, i) : (T(t, function(t, s, r) {
                return (o = o && e.call(i, t, s, r)) ? void 0 : n
            }), !!o)
        };
        var k = x.some = x.any = function(t, e, i) {
            e || (e = x.identity);
            var o = !1;
            return null == t ? o : m && t.some === m ? t.some(e, i) : (T(t, function(t, s, r) {
                return o || (o = e.call(i, t, s, r)) ? n : void 0
            }), !!o)
        };
        x.contains = x.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : k(t, function(t) {
                return t === e
            })
        }, x.invoke = function(t, e) {
            var n = a.call(arguments, 2),
                i = x.isFunction(e);
            return x.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, x.pluck = function(t, e) {
            return x.map(t, function(t) {
                return t[e]
            })
        }, x.where = function(t, e, n) {
            return x.isEmpty(e) ? n ? void 0 : [] : x[n ? "find" : "filter"](t, function(t) {
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            })
        }, x.findWhere = function(t, e) {
            return x.where(t, e, !0)
        }, x.max = function(t, e, n) {
            if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && x.isEmpty(t)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return T(t, function(t, o, s) {
                var r = e ? e.call(n, t, o, s) : t;
                r > i.computed && (i = {
                    value: t,
                    computed: r
                })
            }), i.value
        }, x.min = function(t, e, n) {
            if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && x.isEmpty(t)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return T(t, function(t, o, s) {
                var r = e ? e.call(n, t, o, s) : t;
                r < i.computed && (i = {
                    value: t,
                    computed: r
                })
            }), i.value
        }, x.shuffle = function(t) {
            var e, n = 0,
                i = [];
            return T(t, function(t) {
                e = x.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        };
        var S = function(t) {
            return x.isFunction(t) ? t : function(e) {
                return e[t]
            }
        };
        x.sortBy = function(t, e, n) {
            var i = S(e);
            return x.pluck(x.map(t, function(t, e, o) {
                return {
                    value: t,
                    index: e,
                    criteria: i.call(n, t, e, o)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index < e.index ? -1 : 1
            }), "value")
        };
        var E = function(t, e, n, i) {
            var o = {},
                s = S(null == e ? x.identity : e);
            return T(t, function(e, r) {
                var a = s.call(n, e, r, t);
                i(o, a, e)
            }), o
        };
        x.groupBy = function(t, e, n) {
            return E(t, e, n, function(t, e, n) {
                (x.has(t, e) ? t[e] : t[e] = []).push(n)
            })
        }, x.countBy = function(t, e, n) {
            return E(t, e, n, function(t, e) {
                x.has(t, e) || (t[e] = 0), t[e]++
            })
        }, x.sortedIndex = function(t, e, n, i) {
            n = null == n ? x.identity : S(n);
            for (var o = n.call(i, e), s = 0, r = t.length; r > s;) {
                var a = s + r >>> 1;
                n.call(i, t[a]) < o ? s = a + 1 : r = a
            }
            return s
        }, x.toArray = function(t) {
            return t ? x.isArray(t) ? a.call(t) : t.length === +t.length ? x.map(t, x.identity) : x.values(t) : []
        }, x.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : x.keys(t).length
        }, x.first = x.head = x.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e)
        }, x.initial = function(t, e, n) {
            return a.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, x.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, x.rest = x.tail = x.drop = function(t, e, n) {
            return a.call(t, null == e || n ? 1 : e)
        }, x.compact = function(t) {
            return x.filter(t, x.identity)
        };
        var P = function(t, e, n) {
            return e && x.every(t, x.isArray) ? l.apply(n, t) : (T(t, function(t) {
                x.isArray(t) || x.isArguments(t) ? e ? r.apply(n, t) : P(t, e, n) : n.push(t)
            }), n)
        };
        x.flatten = function(t, e) {
            return P(t, e, [])
        }, x.without = function(t) {
            return x.difference(t, a.call(arguments, 1))
        }, x.uniq = x.unique = function(t, e, n, i) {
            x.isFunction(e) && (i = n, n = e, e = !1);
            var o = n ? x.map(t, n, i) : t,
                s = [],
                r = [];
            return T(o, function(n, i) {
                (e ? i && r[r.length - 1] === n : x.contains(r, n)) || (r.push(n), s.push(t[i]))
            }), s
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(t) {
            var e = a.call(arguments, 1);
            return x.filter(x.uniq(t), function(t) {
                return x.every(e, function(e) {
                    return x.indexOf(e, t) >= 0
                })
            })
        }, x.difference = function(t) {
            var e = l.apply(i, a.call(arguments, 1));
            return x.filter(t, function(t) {
                return !x.contains(e, t)
            })
        }, x.zip = function() {
            for (var t = x.max(x.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = x.pluck(arguments, "" + n);
            return e
        }, x.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, o = t.length; o > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, x.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = 0,
                o = t.length;
            if (n) {
                if ("number" != typeof n) return i = x.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, o + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }, x.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var o = i ? n : t.length; o--;)
                if (t[o] === e) return o;
            return -1
        }, x.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, s = new Array(i); i > o;) s[o++] = t, t += n;
            return s
        };
        var N = function() {};
        x.bind = function(t, e) {
            var n, i;
            if (j && t.bind === j) return j.apply(t, a.call(arguments, 1));
            if (!x.isFunction(t)) throw new TypeError;
            return n = a.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
                N.prototype = t.prototype;
                var o = new N;
                N.prototype = null;
                var s = t.apply(o, n.concat(a.call(arguments)));
                return Object(s) === s ? s : o
            }
        }, x.partial = function(t) {
            var e = a.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        }, x.bindAll = function(t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return T(e, function(e) {
                t[e] = x.bind(t[e], t)
            }), t
        }, x.memoize = function(t, e) {
            var n = {};
            return e || (e = x.identity),
                function() {
                    var i = e.apply(this, arguments);
                    return x.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                }
        }, x.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, x.defer = function(t) {
            return x.delay.apply(x, [t, 1].concat(a.call(arguments, 1)))
        }, x.throttle = function(t, e, n) {
            var i, o, s, r = null,
                a = 0;
            n || (n = {});
            var l = function() {
                a = n.leading === !1 ? 0 : new Date, r = null, s = t.apply(i, o)
            };
            return function() {
                var u = new Date;
                a || n.leading !== !1 || (a = u);
                var c = e - (u - a);
                return i = this, o = arguments, 0 >= c ? (clearTimeout(r), r = null, a = u, s = t.apply(i, o)) : r || n.trailing === !1 || (r = setTimeout(l, c)), s
            }
        }, x.debounce = function(t, e, n) {
            var i, o = null;
            return function() {
                var s = this,
                    r = arguments,
                    a = function() {
                        o = null, n || (i = t.apply(s, r))
                    },
                    l = n && !o;
                return clearTimeout(o), o = setTimeout(a, e), l && (i = t.apply(s, r)), i
            }
        }, x.once = function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, x.wrap = function(t, e) {
            return function() {
                var n = [t];
                return r.apply(n, arguments), e.apply(this, n)
            }
        }, x.compose = function() {
            var t = arguments;
            return function() {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, x.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, x.keys = _ || function(t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var n in t) x.has(t, n) && e.push(n);
            return e
        }, x.values = function(t) {
            var e = [];
            for (var n in t) x.has(t, n) && e.push(t[n]);
            return e
        }, x.pairs = function(t) {
            var e = [];
            for (var n in t) x.has(t, n) && e.push([n, t[n]]);
            return e
        }, x.invert = function(t) {
            var e = {};
            for (var n in t) x.has(t, n) && (e[t[n]] = n);
            return e
        }, x.functions = x.methods = function(t) {
            var e = [];
            for (var n in t) x.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, x.extend = function(t) {
            return T(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }, x.pick = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            return T(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }, x.omit = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            for (var o in t) x.contains(n, o) || (e[o] = t[o]);
            return e
        }, x.defaults = function(t) {
            return T(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, x.clone = function(t) {
            return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
        }, x.tap = function(t, e) {
            return e(t), t
        };
        var D = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
            var o = u.call(t);
            if (o != u.call(e)) return !1;
            switch (o) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var s = n.length; s--;)
                if (n[s] == t) return i[s] == e;
            var r = t.constructor,
                a = e.constructor;
            if (r !== a && !(x.isFunction(r) && r instanceof r && x.isFunction(a) && a instanceof a)) return !1;
            n.push(t), i.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == o) {
                if (l = t.length, c = l == e.length)
                    for (; l-- && (c = D(t[l], e[l], n, i)););
            } else {
                for (var h in t)
                    if (x.has(t, h) && (l++, !(c = x.has(e, h) && D(t[h], e[h], n, i)))) break;
                if (c) {
                    for (h in e)
                        if (x.has(e, h) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        x.isEqual = function(t, e) {
            return D(t, e, [], [])
        }, x.isEmpty = function(t) {
            if (null == t) return !0;
            if (x.isArray(t) || x.isString(t)) return 0 === t.length;
            for (var e in t)
                if (x.has(t, e)) return !1;
            return !0
        }, x.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, x.isArray = w || function(t) {
            return "[object Array]" == u.call(t)
        }, x.isObject = function(t) {
            return t === Object(t)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            x["is" + t] = function(e) {
                return u.call(e) == "[object " + t + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(t) {
            return !(!t || !x.has(t, "callee"))
        }), "function" != typeof / . / && (x.isFunction = function(t) {
            return "function" == typeof t
        }), x.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, x.isNaN = function(t) {
            return x.isNumber(t) && t != +t
        }, x.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
        }, x.isNull = function(t) {
            return null === t
        }, x.isUndefined = function(t) {
            return void 0 === t
        }, x.has = function(t, e) {
            return c.call(t, e)
        }, x.noConflict = function() {
            return t._ = e, this
        }, x.identity = function(t) {
            return t
        }, x.times = function(t, e, n) {
            for (var i = Array(Math.max(0, t)), o = 0; t > o; o++) i[o] = e.call(n, o);
            return i
        }, x.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        };
        var A = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        A.unescape = x.invert(A.escape);
        var M = {
            escape: new RegExp("[" + x.keys(A.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(A.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(t) {
            x[t] = function(e) {
                return null == e ? "" : ("" + e).replace(M[t], function(e) {
                    return A[t][e]
                })
            }
        }), x.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return x.isFunction(n) ? n.call(t) : n
        }, x.mixin = function(t) {
            T(x.functions(t), function(e) {
                var n = x[e] = t[e];
                x.prototype[e] = function() {
                    var t = [this._wrapped];
                    return r.apply(t, arguments), O.call(this, n.apply(x, t))
                }
            })
        };
        var I = 0;
        x.uniqueId = function(t) {
            var e = ++I + "";
            return t ? t + e : e
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var F = /(.)^/,
            H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(t, e, n) {
            var i;
            n = x.defaults({}, n, x.templateSettings);
            var o = new RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$", "g"),
                s = 0,
                r = "__p+='";
            t.replace(o, function(e, n, i, o, a) {
                return r += t.slice(s, a).replace(B, function(t) {
                    return "\\" + H[t]
                }), n && (r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), o && (r += "';\n" + o + "\n__p+='"), s = a + e.length, e
            }), r += "';\n", n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", r)
            } catch (a) {
                throw a.source = r, a
            }
            if (e) return i(e, x);
            var l = function(t) {
                return i.call(this, t, x)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", l
        }, x.chain = function(t) {
            return x(t).chain()
        };
        var O = function(t) {
            return this._chain ? x(t).chain() : t
        };
        x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = i[t];
            x.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], O.call(this, n)
            }
        }), T(["concat", "join", "slice"], function(t) {
            var e = i[t];
            x.prototype[t] = function() {
                return O.call(this, e.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this),
    function() {
        var t, e = this,
            n = e.Backbone,
            i = [],
            o = i.push,
            s = i.slice,
            r = i.splice;
        t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "1.0.0";
        var a = e._;
        a || "undefined" == typeof require || (a = require("underscore")), t.$ = e.jQuery || e.Zepto || e.ender || e.$, t.noConflict = function() {
            return e.Backbone = n, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var l = t.Events = {
                on: function(t, e, n) {
                    if (!c(this, "on", t, [e, n]) || !e) return this;
                    this._events || (this._events = {});
                    var i = this._events[t] || (this._events[t] = []);
                    return i.push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(t, e, n) {
                    if (!c(this, "once", t, [e, n]) || !e) return this;
                    var i = this,
                        o = a.once(function() {
                            i.off(t, o), e.apply(this, arguments)
                        });
                    return o._callback = e, this.on(t, o, n)
                },
                off: function(t, e, n) {
                    var i, o, s, r, l, u, h, d;
                    if (!this._events || !c(this, "off", t, [e, n])) return this;
                    if (!t && !e && !n) return this._events = {}, this;
                    for (r = t ? [t] : a.keys(this._events), l = 0, u = r.length; u > l; l++)
                        if (t = r[l], s = this._events[t]) {
                            if (this._events[t] = i = [], e || n)
                                for (h = 0, d = s.length; d > h; h++) o = s[h], (e && e !== o.callback && e !== o.callback._callback || n && n !== o.context) && i.push(o);
                            i.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var e = s.call(arguments, 1);
                    if (!c(this, "trigger", t, e)) return this;
                    var n = this._events[t],
                        i = this._events.all;
                    return n && h(n, e), i && h(i, arguments), this
                },
                stopListening: function(t, e, n) {
                    var i = this._listeners;
                    if (!i) return this;
                    var o = !e && !n;
                    "object" == typeof e && (n = this), t && ((i = {})[t._listenerId] = t);
                    for (var s in i) i[s].off(e, n, this), o && delete this._listeners[s];
                    return this
                }
            },
            u = /\s+/,
            c = function(t, e, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var o in n) t[e].apply(t, [o, n[o]].concat(i));
                    return !1
                }
                if (u.test(n)) {
                    for (var s = n.split(u), r = 0, a = s.length; a > r; r++) t[e].apply(t, [s[r]].concat(i));
                    return !1
                }
                return !0
            },
            h = function(t, e) {
                var n, i = -1,
                    o = t.length,
                    s = e[0],
                    r = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++i < o;)(n = t[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < o;)(n = t[i]).callback.call(n.ctx, s);
                        return;
                    case 2:
                        for (; ++i < o;)(n = t[i]).callback.call(n.ctx, s, r);
                        return;
                    case 3:
                        for (; ++i < o;)(n = t[i]).callback.call(n.ctx, s, r, a);
                        return;
                    default:
                        for (; ++i < o;)(n = t[i]).callback.apply(n.ctx, e)
                }
            },
            d = {
                listenTo: "on",
                listenToOnce: "once"
            };
        a.each(d, function(t, e) {
            l[e] = function(e, n, i) {
                var o = this._listeners || (this._listeners = {}),
                    s = e._listenerId || (e._listenerId = a.uniqueId("l"));
                return o[s] = e, "object" == typeof n && (i = this), e[t](n, i, this), this
            }
        }), l.bind = l.on, l.unbind = l.off, a.extend(t, l);
        var p = t.Model = function(t, e) {
                var n, i = t || {};
                e || (e = {}), this.cid = a.uniqueId("c"), this.attributes = {}, a.extend(this, a.pick(e, f)), e.parse && (i = this.parse(i, e) || {}), (n = a.result(this, "defaults")) && (i = a.defaults({}, i, n)), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
            },
            f = ["url", "urlRoot", "collection"];
        a.extend(p.prototype, l, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
                return a.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return a.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, n) {
                var i, o, s, r, l, u, c, h;
                if (null == t) return this;
                if ("object" == typeof t ? (o = t, n = e) : (o = {})[t] = e, n || (n = {}), !this._validate(o, n)) return !1;
                s = n.unset, l = n.silent, r = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = a.clone(this.attributes), this.changed = {}), h = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (i in o) e = o[i], a.isEqual(h[i], e) || r.push(i), a.isEqual(c[i], e) ? delete this.changed[i] : this.changed[i] = e, s ? delete h[i] : h[i] = e;
                if (!l) {
                    r.length && (this._pending = !0);
                    for (var d = 0, p = r.length; p > d; d++) this.trigger("change:" + r[d], this, h[r[d]], n)
                }
                if (u) return this;
                if (!l)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, a.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var n in this.attributes) e[n] = void 0;
                return this.set(e, a.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
                var e, n = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var o in t) a.isEqual(i[o], e = t[o]) || ((n || (n = {}))[o] = e);
                return n
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return a.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    n = t.success;
                return t.success = function(i) {
                    return e.set(e.parse(i, t), t) ? (n && n(e, i, t), e.trigger("sync", e, i, t), void 0) : !1
                }, B(this, t), this.sync("read", this, t)
            },
            save: function(t, e, n) {
                var i, o, s, r = this.attributes;
                if (null == t || "object" == typeof t ? (i = t, n = e) : (i = {})[t] = e, !(!i || n && n.wait || this.set(i, n))) return !1;
                if (n = a.extend({
                    validate: !0
                }, n), !this._validate(i, n)) return !1;
                i && n.wait && (this.attributes = a.extend({}, r, i)), void 0 === n.parse && (n.parse = !0);
                var l = this,
                    u = n.success;
                return n.success = function(t) {
                    l.attributes = r;
                    var e = l.parse(t, n);
                    return n.wait && (e = a.extend(i || {}, e)), a.isObject(e) && !l.set(e, n) ? !1 : (u && u(l, t, n), l.trigger("sync", l, t, n), void 0)
                }, B(this, n), o = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === o && (n.attrs = i), s = this.sync(o, this, n), i && n.wait && (this.attributes = r), s
            },
            destroy: function(t) {
                t = t ? a.clone(t) : {};
                var e = this,
                    n = t.success,
                    i = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(o) {
                    (t.wait || e.isNew()) && i(), n && n(e, o, t), e.isNew() || e.trigger("sync", e, o, t)
                }, this.isNew()) return t.success(), !1;
                B(this, t);
                var o = this.sync("delete", this, t);
                return t.wait || i(), o
            },
            url: function() {
                var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || H();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(t) {
                return this._validate({}, a.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate) return !0;
                t = a.extend({}, this.attributes, t);
                var n = this.validationError = this.validate(t, e) || null;
                return n ? (this.trigger("invalid", this, n, a.extend(e || {}, {
                    validationError: n
                })), !1) : !0
            }
        });
        var g = ["keys", "values", "pairs", "invert", "pick", "omit"];
        a.each(g, function(t) {
            p.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.attributes), a[t].apply(a, e)
            }
        });
        var v = t.Collection = function(t, e) {
                e || (e = {}), e.url && (this.url = e.url), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, a.extend({
                    silent: !0
                }, e))
            },
            m = {
                add: !0,
                remove: !0,
                merge: !0
            },
            y = {
                add: !0,
                merge: !1,
                remove: !1
            };
        a.extend(v.prototype, l, {
            model: p,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, a.defaults(e || {}, y))
            },
            remove: function(t, e) {
                t = a.isArray(t) ? t.slice() : [t], e || (e = {});
                var n, i, o, s;
                for (n = 0, i = t.length; i > n; n++) s = this.get(t[n]), s && (delete this._byId[s.id], delete this._byId[s.cid], o = this.indexOf(s), this.models.splice(o, 1), this.length--, e.silent || (e.index = o, s.trigger("remove", s, this, e)), this._removeReference(s));
                return this
            },
            set: function(t, e) {
                e = a.defaults(e || {}, m), e.parse && (t = this.parse(t, e)), a.isArray(t) || (t = t ? [t] : []);
                var n, i, s, l, u, c = e.at,
                    h = this.comparator && null == c && e.sort !== !1,
                    d = a.isString(this.comparator) ? this.comparator : null,
                    p = [],
                    f = [],
                    g = {};
                for (n = 0, i = t.length; i > n; n++)(s = this._prepareModel(t[n], e)) && ((l = this.get(s)) ? (e.remove && (g[l.cid] = !0), e.merge && (l.set(s.attributes, e), h && !u && l.hasChanged(d) && (u = !0))) : e.add && (p.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, null != s.id && (this._byId[s.id] = s)));
                if (e.remove) {
                    for (n = 0, i = this.length; i > n; ++n) g[(s = this.models[n]).cid] || f.push(s);
                    f.length && this.remove(f, e)
                }
                if (p.length && (h && (u = !0), this.length += p.length, null != c ? r.apply(this.models, [c, 0].concat(p)) : o.apply(this.models, p)), u && this.sort({
                    silent: !0
                }), e.silent) return this;
                for (n = 0, i = p.length; i > n; n++)(s = p[n]).trigger("add", s, this, e);
                return u && this.trigger("sort", this, e), this
            },
            reset: function(t, e) {
                e || (e = {});
                for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]);
                return e.previousModels = this.models, this._reset(), this.add(t, a.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), this
            },
            push: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, a.extend({
                    at: this.length
                }, e)), t
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return t = this._prepareModel(t, e), this.add(t, a.extend({
                    at: 0
                }, e)), t
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function(t, e) {
                return this.models.slice(t, e)
            },
            get: function(t) {
                return null == t ? void 0 : this._byId[null != t.id ? t.id : t.cid || t]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return a.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var n in t)
                        if (t[n] !== e.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            sortedIndex: function(t, e, n) {
                e || (e = this.comparator);
                var i = a.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return a.sortedIndex(this.models, t, i, n)
            },
            pluck: function(t) {
                return a.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    n = this;
                return t.success = function(i) {
                    var o = t.reset ? "reset" : "set";
                    n[o](i, t), e && e(n, i, t), n.trigger("sync", n, i, t)
                }, B(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? a.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var n = this,
                    i = e.success;
                return e.success = function(o) {
                    e.wait && n.add(t, e), i && i(t, o, e)
                }, t.save(null, e), t
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof p) return t.collection || (t.collection = this), t;
                e || (e = {}), e.collection = this;
                var n = new this.model(t, e);
                return n._validate(t, e) ? n : (this.trigger("invalid", this, t, e), !1)
            },
            _removeReference: function(t) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, n, i) {
                ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        a.each(b, function(t) {
            v.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.models), a[t].apply(a, e)
            }
        });
        var w = ["groupBy", "countBy", "sortBy"];
        a.each(w, function(t) {
            v.prototype[t] = function(e, n) {
                var i = a.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return a[t](this.models, i, n)
            }
        });
        var _ = t.View = function(t) {
                this.cid = a.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            j = /^(\S+)\s*(.*)$/,
            x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        a.extend(_.prototype, l, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (!t && !(t = a.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var n = t[e];
                    if (a.isFunction(n) || (n = this[t[e]]), n) {
                        var i = e.match(j),
                            o = i[1],
                            s = i[2];
                        n = a.bind(n, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, n) : this.$el.on(o, s, n)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _configure: function(t) {
                this.options && (t = a.extend({}, a.result(this, "options"), t)), a.extend(this, a.pick(t, x)), this.options = t
            },
            _ensureElement: function() {
                if (this.el) this.setElement(a.result(this, "el"), !1);
                else {
                    var e = a.extend({}, a.result(this, "attributes"));
                    this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className"));
                    var n = t.$("<" + a.result(this, "tagName") + ">").attr(e);
                    this.setElement(n, !1)
                }
            }
        }), t.sync = function(e, n, i) {
            var o = T[e];
            a.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var s = {
                type: o,
                dataType: "json"
            };
            if (i.url || (s.url = a.result(n, "url") || H()), null != i.data || !n || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || n.toJSON(i))), i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                model: s.data
            } : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                s.type = "POST", i.emulateJSON && (s.data._method = o);
                var r = i.beforeSend;
                i.beforeSend = function(t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", o), r ? r.apply(this, arguments) : void 0
                }
            }
            "GET" === s.type || i.emulateJSON || (s.processData = !1), "PATCH" !== s.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (s.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = i.xhr = t.ajax(a.extend(s, i));
            return n.trigger("request", n, l, i), l
        };
        var T = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var C = t.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            k = /\((.*?)\)/g,
            S = /(\(\?)?:\w+/g,
            E = /\*\w+/g,
            P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        a.extend(C.prototype, l, {
            initialize: function() {},
            route: function(e, n, i) {
                a.isRegExp(e) || (e = this._routeToRegExp(e)), a.isFunction(n) && (i = n, n = ""), i || (i = this[n]);
                var o = this;
                return t.history.route(e, function(s) {
                    var r = o._extractParameters(e, s);
                    i && i.apply(o, r), o.trigger.apply(o, ["route:" + n].concat(r)), o.trigger("route", n, r), t.history.trigger("route", o, n, r)
                }), this
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = a.result(this, "routes");
                    for (var t, e = a.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(P, "\\$&").replace(k, "(?:$1)?").replace(S, function(t, e) {
                    return e ? t : "([^/]+)"
                }).replace(E, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function(t, e) {
                var n = t.exec(e).slice(1);
                return a.map(n, function(t) {
                    return t ? decodeURIComponent(t) : null
                })
            }
        });
        var N = t.History = function() {
                this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            D = /^[#\/]|\s+$/g,
            A = /^\/+|\/+$/g,
            M = /msie [\w.]+/,
            I = /\/$/;
        N.started = !1, a.extend(N.prototype, l, {
            interval: 50,
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = this.location.pathname;
                        var n = this.root.replace(I, "");
                        t.indexOf(n) || (t = t.substr(n.length))
                    } else t = this.getHash();
                return t.replace(D, "")
            },
            start: function(e) {
                if (N.started) throw new Error("Backbone.history has already been started");
                N.started = !0, this.options = a.extend({}, {
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var n = this.getFragment(),
                    i = document.documentMode,
                    o = M.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                this.root = ("/" + this.root + "/").replace(A, "/"), o && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                var s = this.location,
                    r = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !r ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && r && s.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), N.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function() {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
            },
            loadUrl: function(t) {
                var e = this.fragment = this.getFragment(t),
                    n = a.any(this.handlers, function(t) {
                        return t.route.test(e) ? (t.callback(e), !0) : void 0
                    });
                return n
            },
            navigate: function(t, e) {
                if (!N.started) return !1;
                if (e && e !== !0 || (e = {
                    trigger: e
                }), t = this.getFragment(t || ""), this.fragment !== t) {
                    this.fragment = t;
                    var n = this.root + t;
                    if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    e.trigger && this.loadUrl(t)
                }
            },
            _updateHash: function(t, e, n) {
                if (n) {
                    var i = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(i + "#" + e)
                } else t.hash = "#" + e
            }
        }), t.history = new N;
        var F = function(t, e) {
            var n, i = this;
            n = t && a.has(t, "constructor") ? t.constructor : function() {
                return i.apply(this, arguments)
            }, a.extend(n, i, e);
            var o = function() {
                this.constructor = n
            };
            return o.prototype = i.prototype, n.prototype = new o, t && a.extend(n.prototype, t), n.__super__ = i.prototype, n
        };
        p.extend = v.extend = C.extend = _.extend = N.extend = F;
        var H = function() {
                throw new Error('A "url" property or function must be specified')
            },
            B = function(t, e) {
                var n = e.error;
                e.error = function(i) {
                    n && n(t, i, e), t.trigger("error", t, i, e)
                }
            }
    }.call(this), pageflow = {
        log: function(t, e) {
            window.console && (pageflow.debugMode() || e && e.force) && window.console.log(t)
        },
        debugMode: function() {
            return window.location.href.indexOf("debug=true") >= 0
        }
    }, pageflow.pageType = function() {
        var t = {
            enhance: function() {},
            prepare: function() {},
            preload: function() {},
            resize: function() {},
            activating: function() {},
            activated: function() {},
            deactivating: function() {},
            deactivated: function() {},
            update: function() {},
            embeddedEditorViews: function() {},
            prepareNextPageTimeout: 200
        };
        return {
            repository: [],
            register: function(e, n) {
                var i = function() {};
                _.extend(i.prototype, t, Backbone.Events, n), this.repository[e] = i
            },
            get: function(t) {
                if (!this.repository.hasOwnProperty(t)) throw 'Unknown page type "' + t + '"';
                return new this.repository[t]
            }
        }
    }(), pageflow.commonPageCssClasses = {
        updateCommonPageCssClasses: function(t, e) {
            t.toggleClass("invert", e.get("invert")), t.toggleClass("hide_title", e.get("hide_title")), _.each(pageflow.Page.textPositions, function(e) {
                t.removeClass("text_position_" + e)
            }), t.addClass("text_position_" + e.get("text_position"))
        }
    }, pageflow.infoBox = {
        updateInfoBox: function(t, e) {
            var n = t.find(".add_info_box");
            n.find("h3").length || n.prepend($("<h3 />")), n.find("h3").html(e.get("additional_title") || ""), n.find("p").html(e.get("additional_description") || ""), n.toggleClass("empty", !e.get("additional_description") && !e.get("additional_title"))
        }
    }, pageflow.videoHelpers = {
        updateVideoTagForHighBandwidth: function(t) {
            pageflow.features.has("high bandwidth") && !pageflow.features.has("mobile platform") ? (t.attr("poster", t.attr("data-large-poster")), pageflow.features.has("rewrite video sources support") && t.find("source").each(function() {
                var t = $(this);
                t.attr("src", t.attr("data-high-src"))
            })) : t.attr("poster", t.attr("data-poster"))
        },
        updateVideoPoster: function(t, e) {
            t.find(".vjs-poster").css("background-image", "url(" + e + ")")
        }
    }, pageflow.volumeFade = {
        fadeSound: function(t, e, n) {
            var i = 10,
                o = t.volume(),
                s = n / i,
                r = (e - o) / s;
            if (clearInterval(this.fadeInterval), e != o) var a = this.fadeInterval = setInterval(_.bind(function() {
                t.volume(t.volume() + r), (t.volume() >= e && e >= o || t.volume() <= e && o >= e) && clearInterval(a)
            }, this), i)
        }
    }, pageflow.pageType.register("audio", _.extend({
        enhance: function(t) {
            t.find(".contentText").before(t.find(".page_header")), t.find("audio").hide()
        },
        prepare: function() {},
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function(t) {
            $("#firstContent").attr("id", "");
            var e = t.find("*[tabindex], a");
            $(e[0]).attr("id", "firstContent"), this._ensureAudioPlayer(t);
            var n = this;
            this.audioPlayer.readyPromise.then(function() {
                n.audioPlayer.volume(pageflow.settings.get("volume")), n.listenTo(pageflow.settings, "change:volume", function(t, e) {
                    n.fadeSound(n.audioPlayer, e, 40)
                })
            }), $("body").on("keyup", function(t) {
                32 == t.keyCode && (n.audioPlayer.playing ? n.audioPlayer.pause() : n.audioPlayer.play())
            })
        },
        activated: function() {
            var t = this;
            pageflow.features.has("mobile platform") || (this.fadeInTimeout = setTimeout(function() {
                t.audioPlayer.readyPromise.then(function() {
                    t.audioPlayer.volume(0), t.audioPlayer.play(), t.fadeSound(t.audioPlayer, pageflow.settings.get("volume"), 1e3)
                })
            }, 1e3))
        },
        deactivating: function() {
            clearTimeout(this.fadeInTimeout), this.fadeSound(this.audioPlayer, 0, 400), this.stopListening(), $("body").off("keyup")
        },
        deactivated: function() {
            this.audioPlayer.pause()
        },
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateInfoBox(t, e), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            }), this._ensureAudioPlayer(t), this.audioPlayer.src(e.getAudioFileSources("audio_file_id"))
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                }
            }
        },
        _ensureAudioPlayer: function(t) {
            this.audioPlayer = this.audioPlayer || pageflow.AudioPlayer.fromAudioTag(t.find("audio")), t.find(".vjs-controls").playerControls({
                player: this.audioPlayer
            })
        }
    }, pageflow.volumeFade, pageflow.infoBox, pageflow.commonPageCssClasses)), pageflow.pageType.register("audio_loop", _.extend({
        enhance: function(t) {
            t.find(".contentText").before(t.find(".page_header")), t.find("audio").hide()
        },
        prepare: function() {},
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function(t) {
            $("#firstContent").attr("id", "");
            var e = t.find("*[tabindex], a");
            $(e[0]).attr("id", "firstContent"), this._ensureAudioPlayer(t);
            var n = this;
            this.audioPlayer.readyPromise.then(function() {
                n.audioPlayer.volume(pageflow.settings.get("volume")), n.listenTo(pageflow.settings, "change:volume", function(t, e) {
                    n.fadeSound(n.audioPlayer, e, 40)
                })
            })
        },
        activated: function() {
            var t = this;
            this.fadeInTimeout = setTimeout(function() {
                t.audioPlayer.readyPromise.then(function() {
                    t.audioPlayer.volume(0), t.audioPlayer.play(), t.fadeSound(t.audioPlayer, pageflow.settings.get("volume"), 1e3)
                })
            }, 1e3)
        },
        deactivating: function() {
            clearTimeout(this.fadeInTimeout), this.fadeSound(this.audioPlayer, 0, 400), this.stopListening(), $("body").off("keyup")
        },
        deactivated: function() {
            this.audioPlayer.pause()
        },
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateInfoBox(t, e), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            }), this._ensureAudioPlayer(t), this.audioPlayer.src(e.getAudioFileSources("audio_file_id"))
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                }
            }
        },
        _ensureAudioPlayer: function(t) {
            this.audioPlayer = this.audioPlayer || pageflow.AudioPlayer.fromAudioTag(t.find("audio"), !0), t.find(".vjs-controls").playerControls({
                player: this.audioPlayer
            })
        }
    }, pageflow.volumeFade, pageflow.infoBox, pageflow.commonPageCssClasses)), pageflow.pageType.register("background_image", _.extend({
        prepareNextPageTimeout: 0,
        enhance: function() {},
        prepare: function() {},
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function() {},
        activated: function() {},
        deactivating: function() {},
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            })
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                }
            }
        }
    }, pageflow.commonPageCssClasses)), pageflow.pageType.register("background_video", _.extend({
        enhance: function(t) {
            this._initVideoPlayer(t)
        },
        prepare: function() {
            pageflow.features.has("mobile platform") || this.videoPlayer.ensureCreated()
        },
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function() {
            var t = this;
            this.videoPlayer.ensureCreated(), pageflow.features.has("mobile platform") || (this.prebufferingPromise = this.videoPlayer.prebuffer().then(function() {
                t.videoPlayer.volume(0), t.videoPlayer.play()
            }), this.listenTo(pageflow.settings, "change:volume", function(t, e) {
                this.fadeSound(this.videoPlayer, e, 10)
            })), pageflow.activeBackgroundVideo = this.videoPlayer
        },
        activated: function() {
            var t = this;
            pageflow.features.has("mobile platform") || this.prebufferingPromise.then(function() {
                t.fadeSound(t.videoPlayer, pageflow.settings.get("volume"), 1e3)
            })
        },
        deactivating: function() {
            this.fadeSound(this.videoPlayer, 0, 400), this.stopListening(), pageflow.activeBackgroundVideo = void 0
        },
        deactivated: function() {
            this.videoPlayer.pause(), this.videoPlayer.scheduleDispose()
        },
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            });
            var n = this.videoPlayer;
            n.ensureCreated(), this.srcDefined || n.ready(function() {
                n.src(e.getVideoFileSources("video_file_id"))
            }), (!this.srcDefined || e.hasChanged("video_file_id")) && (this.srcDefined = !0, this.videoPlayer.src(e.getVideoFileSources("video_file_id"))), t.find(".background_image").css({
                backgroundImage: 'url("' + e.getVideoPosterUrl() + '")'
            }), this.updateVideoPoster(t, e.getVideoPosterUrl())
        },
        _initVideoPlayer: function(t) {
            function e() {
                var e = t.find("video"),
                    n = jQuery(window).width() / o,
                    r = jQuery(window).height() / s,
                    a = n > r ? n : r;
                i > a * o && (a = i / o), e.width(a * o).height(a * s), e.css({
                    left: "-" + (e.width() - jQuery(window).width()) / 2 + "px",
                    top: "-" + (e.height() - jQuery(window).height()) / 2 + "px"
                })
            }
            var n = t.find("[data-template=video]"),
                i = 300,
                o = n.attr("data-video-width") || 1280,
                s = n.attr("data-video-height") || 720;
            this.videoPlayer = new pageflow.VideoPlayer.Lazy(n, {
                width: "100%",
                height: "100%"
            }), this.videoPlayer.ready(function() {
                jQuery(window).on("resize", function() {
                    e()
                }), e()
            })
        }
    }, pageflow.volumeFade, pageflow.videoHelpers, pageflow.commonPageCssClasses)), pageflow.pageType.register("internal_links", _.extend({
        prepareNextPageTimeout: 0,
        enhance: function(t) {
            t.on("click", "nav .thumbnail", function() {
                return pageflow.slides.goToById($(this).data("page")), !1
            })
        },
        prepare: function() {},
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function() {},
        activated: function() {},
        deactivating: function() {},
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            }), t.find("nav").attr("data-layout", e.get("linked_pages_layout"))
        },
        embeddedEditorViews: function() {
            return {
                "nav li": {
                    view: pageflow.PageLinkEmbeddedView,
                    options: {
                        propertyName: "linked_page_ids"
                    }
                },
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                }
            }
        }
    }, pageflow.commonPageCssClasses)), pageflow.pageType.register("video", _.extend({
        enhance: function(t) {
            t.find(".contentText").before(t.find(".page_header")), this._initVideoPlayer(t)
        },
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        prepare: function() {
            this.videoPlayer.ensureCreated()
        },
        activating: function(t) {
            var e = this.videoPlayer;
            $("#firstContent").attr("id", "");
            var n = t.find('*[tabindex="4"], a');
            $(n[0]).attr("id", "firstContent"), this.videoPlayer.ensureCreated(), pageflow.features.has("mobile platform") && this.videoPlayer.showPosterImage(), this.listenTo(pageflow.settings, "change:volume", function(t, e) {
                this.fadeSound(this.videoPlayer, e, 10)
            }), $("body").on("keyup", function(t) {
                32 == t.keyCode && (e.paused() ? e.play() : e.pause())
            })
        },
        activated: function(t) {
            this.pageElement = t;
            var e = this.videoPlayer,
                n = this;
            pageflow.features.has("mobile platform") ? e.src(e.srcFromOptions()) : e.prebuffer().done(function() {
                e.hidePosterImage(), n.fadeInTimeout = setTimeout(function() {
                    e.volume(0), e.play(), n.fadeSound(e, pageflow.settings.get("volume"), 1e3)
                }, 1e3)
            })
        },
        deactivating: function() {
            clearTimeout(this.fadeInTimeout), this.fadeSound(this.videoPlayer, 0, 400), this.stopListening(), $("body").off("keyup")
        },
        deactivated: function() {
            pageflow.features.has("mobile platform") && this.videoPlayer.showPosterImage(), this.videoPlayer.pause(), this.videoPlayer.scheduleDispose()
        },
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateInfoBox(t, e), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            });
            var n = this.videoPlayer;
            n.ensureCreated(), this.srcDefined || n.ready(function() {
                n.src(e.getVideoFileSources("video_file_id"))
            }), (!this.srcDefined || e.hasChanged("video_file_id")) && (this.srcDefined = !0, this.videoPlayer.src(e.getVideoFileSources("video_file_id"))), this.updateVideoPoster(t, e.getVideoPosterUrl())
        },
        _initVideoPlayer: function(t) {
            var e = new pageflow.VideoPlayer.Lazy(t.find("[data-template=video]"), {
                bufferUnderrunWaiting: !0,
                controls: !0,
                customControlsOnMobile: !0,
                width: "100%",
                height: "100%"
            });
            this.videoPlayer = e, e.ready(function() {
                function n() {
                    o(), pageflow.features.has("phone platform") || (clearTimeout(c), c = setTimeout(i, 2e3))
                }

                function i() {
                    e.paused() || p.addClass("fade-out").removeClass("fade-in")
                }

                function o() {
                    p.addClass("fade-in").removeClass("fade-out")
                }
                e.showPosterImage();
                var s = (t.find(".add_info_box"), t.find(".controls")),
                    r = t.find(".vjs-control-bar"),
                    a = t.find(".vjs-play-control"),
                    l = t.find(".vjs-loading-spinner"),
                    u = t.find(".vjs-poster");
                t.find("video"), r.appendTo(s), r.addClass("vjs-default-skin vjs-player"), a.before(l), a.attr("tabindex", "4"), a.on({
                    "mousedown touchstart": function() {
                        $(this).addClass("pressed")
                    },
                    "mouseup touchend": function() {
                        $(this).removeClass("pressed")
                    }
                }), e.on("bufferunderrun", function() {
                    l.addClass("showing-for-underrun")
                }), e.on("timeupdate", function() {
                    l.removeClass("showing-for-underrun")
                }), pageflow.features.has("phone platform") && ($("<div class='vjs-poster-mobile' style='" + u.attr("style") + "display:block; background-size: cover;'></div>").appendTo(t.find(".videoWrapper")), u.removeClass("vjs-poster").addClass("vjs-poster-mobile"), $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function() {
                    document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || e.pause()
                }));
                var c, h, d = $(".entry .scroll_indicator"),
                    p = t.find(".scroller, .controls, .shadow");
                e.on("pause", function() {
                    p.addClass("lock-showing"), d.removeClass("faded"), clearTimeout(h)
                }), e.on("play", function() {
                    p.removeClass("lock-showing"), h = setTimeout(function() {
                        d.addClass("faded")
                    }, 2e3)
                }), e.on("ended", function() {
                    d.removeClass("faded"), clearTimeout(h), pageflow.features.has("mobile platform") && this.showPosterImage()
                }), t.on("mousemove", n), $("body").on("keydown", n), t.find(".content").on("touchstart", n)
            })
        }
    }, pageflow.volumeFade, pageflow.videoHelpers, pageflow.infoBox, pageflow.commonPageCssClasses)), pageflow.assetUrls = {
        largeBandwidthProbe: "http://cdnl.reportage.wdr.de.codevise.de/bandwidth_probe_large.png",
        smallBandwidthProbe: "http://cdnl.reportage.wdr.de.codevise.de/bandwidth_probe_small.png",
        audioSwf: "//d24kptljz0gkhd.cloudfront.net/assets/audio5js-85b7653984fd270329193d4e9984fbf0.swf",
        emptyMp4: "//d24kptljz0gkhd.cloudfront.net/assets/empty-2da5bd796e5673a6e7698171542d511a.mp4",
        emptyWebm: "//d24kptljz0gkhd.cloudfront.net/assets/empty-eeef334077231dc719fec84e712637bf.webm"
    },
    function() {
        pageflow.preload = {
            image: function(t) {
                return $.Deferred(function(e) {
                    var n = new Image;
                    n.onload = e.resolve, n.onerror = e.resolve, n.src = t
                }).promise()
            },
            backgroundImage: function(t) {
                if ($(t).parent().addClass("load_images"), $(t).length) {
                    var e = window.getComputedStyle($(t)[0]).getPropertyValue("background-image");
                    if (e.match(/^url/)) return this.image(e.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, ""))
                }
                return $.Deferred().resolve().promise()
            }
        }
    }(), pageflow.bandwidth = function() {
        function t(t) {
            var o = (new Date).getTime();
            return n(e(t), i).pipe(function() {
                return (new Date).getTime() - o
            })
        }

        function e(t) {
            return new $.Deferred(function(e) {
                var n = new Image;
                n.onload = e.resolve, n.onerror = e.reject, n.src = t
            }).promise()
        }

        function n(t, e) {
            return new $.Deferred(function(n) {
                var i = setTimeout(function() {
                    n.reject()
                }, e);
                t.always(function() {
                    clearTimeout(i)
                }).then(n.resolve, n.reject)
            }).promise()
        }
        var i = 5e3;
        return pageflow.bandwidth.promise = pageflow.bandwidth.promise || new $.Deferred(function(e) {
            var n = pageflow.assetUrls.smallBandwidthProbe + "?" + (new Date).getTime(),
                i = pageflow.assetUrls.largeBandwidthProbe + "?" + (new Date).getTime(),
                o = 165,
                s = 1081010;
            $.when(t(n), t(i)).done(function(t, n) {
                var i = (n - t) / 1e3,
                    r = 8 * (s - o);
                i = Math.max(i, .01), e.resolve({
                    durationInSeconds: i,
                    speedInBps: (r / i).toFixed(2)
                })
            }).fail(function() {
                e.resolve({
                    durationInSeconds: 1 / 0,
                    speedInBps: 0
                })
            })
        }).promise(), pageflow.bandwidth.promise
    }, pageflow.features = function() {
        var t = {},
            e = {},
            n = new $.Deferred;
        return {
            off: {},
            on: {},
            unset: {},
            add: function(e, n) {
                var i = e.replace(/ /g, "_");
                this.off[i] = function() {
                    window.localStorage["override " + e] = "off", pageflow.log("Feature off: " + e, {
                        force: !0
                    })
                }, this.on[i] = function() {
                    window.localStorage["override " + e] = "on", pageflow.log("Feature on: " + e, {
                        force: !0
                    })
                }, this.unset[i] = function() {
                    window.localStorage.removeItem("override " + e), pageflow.log("Feature unset: " + e, {
                        force: !0
                    })
                }, t[e] = n
            },
            has: function(t) {
                if ("resolved" != this.ready().state()) throw "Feature detection has not finished yet.";
                if (!e.hasOwnProperty(t)) throw 'Unknown feature "' + t + '".';
                return e[t]
            },
            ready: function() {
                return n.promise()
            },
            detect: function() {
                var i = {},
                    o = function(e) {
                        var n = function() {
                            if (pageflow.debugMode() && window.localStorage && "undefined" != typeof window.localStorage["override " + e]) {
                                var n = "on" === window.localStorage["override " + e];
                                return pageflow.log("FEATURE OVERRIDDEN " + e + ": " + n, {
                                    force: !0
                                }), n
                            }
                            return t[e](o)
                        };
                        return i[e] = i[e] || $.when(n(e)), i[e]
                    };
                return o.not = function(t) {
                    return o(t).pipe(function(t) {
                        return !t
                    })
                }, o.all = function() {
                    return $.when.apply(null, arguments).pipe(function() {
                        return _.all(arguments)
                    })
                }, $.when.apply(null, _.map(_.keys(t), function(t) {
                    return o(t).then(function(n) {
                        var i = t.replace(/ /g, "_");
                        $("body").toggleClass("has_" + i, !!n), $("body").toggleClass("has_no_" + i, !n), e[t] = !!n
                    })
                })).then(n.resolve), this.ready()
            }
        }
    }(), pageflow.features.add("high bandwidth", function() {
        return pageflow.bandwidth().pipe(function(t) {
        })
    }), pageflow.features.add("ie", function() {
        return "Microsoft Internet Explorer" == navigator.appName ? !0 : !1
    }), pageflow.features.add("mobile platform", function() {
        var t = [/iPod/i, /iPad/i, /iPhone/i, /Android/i, /Silk/i, /IEMobile/i];
        return _.any(t, function(t) {
            return navigator.userAgent.match(t)
        })
    }), pageflow.features.add("ios", function() {
        var t = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
        return t
    }), navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone && $("html").addClass("ipad ios7"), pageflow.features.add("phone platform", function() {
        var t = [/iPod/i, /iPad/i, /iPhone/i, /Android/i, /IEMobile/i];
        return _.any(t, function(t) {
            return navigator.userAgent.match(t) && $(window).width() < 700
        })
    }), pageflow.features.add("touch support", function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints
    }), pageflow.features.add("rewrite video sources support", function() {
        return !pageflow.ie9
    }), pageflow.features.add("stop buffering support", function(t) {
        return t.not("mobile platform")
    }), pageflow.features.add("buffer underrun waiting support", function(t) {
        return t.not("mobile platform")
    }), pageflow.features.add("prebuffering support", function(t) {
        return t.not("mobile platform")
    }), pageflow.AudioPlayer = function(t, e, n) {
        var i = {
                vorbis: "audio/ogg",
                mp4: "audio/mp4",
                mp3: "audio/mpeg"
            },
            o = new $.Deferred,
            s = new Audio5js({
                reusedTag: e,
                swf_path: pageflow.assetUrls.audioSwf,
                throw_errors: !1,
                format_time: !1,
                codecs: ["vorbis", "mp4", "mp3"],
                ready: o.resolve,
                loop: n
            });
        s.readyPromise = o.promise(), s.src = function(t) {
            o.then(function() {
                var e = _.detect(t || [], function(t) {
                    return i[s.settings.player.codec] === t.type ? t.src : void 0
                });
                s.load(e ? e.src : "")
            })
        };
        var r = s.load;
        s.load = function(t) {
            t || (this.duration = 0), this.currentSrc = t, this.position = 0, this.trigger("timeupdate", this.position, this.duration), r.apply(this, arguments)
        };
        var a = s.seek;
        s.seek = function() {
            this.currentSrc && a.apply(this, arguments)
        };
        var l = s.play;
        return s.play = function() {
            this.currentSrc && l.apply(this, arguments)
        }, s.src(t), s
    }, pageflow.AudioPlayer.fromAudioTag = function(t, e) {
        return new pageflow.AudioPlayer(t.find("source").map(function() {
            return {
                src: $(this).attr("src"),
                type: $(this).attr("type")
            }
        }).get(), t[0], e)
    }, pageflow.VideoPlayer = function(t, e) {
        e = e || {}, t = pageflow.VideoPlayer.filterSourcesForSilkBrowser(t);
        var n = vjs(t, e);
        return pageflow.VideoPlayer.prebuffering(n), pageflow.VideoPlayer.srcFromOptionsMethod(n), e.bufferUnderrunWaiting && pageflow.VideoPlayer.bufferUnderrunWaiting(n), n
    }, pageflow.VideoPlayer.prebuffering = function(t) {
        t.isBufferedAhead = function(e, n) {
            var i = t.buffered(),
                o = i.end(i.length - 1),
                s = t.currentTime() + e;
            t.duration() && (s = Math.min(s, Math.floor(t.duration())));
            var r = o >= s;
            return n || pageflow.log("buffered ahead " + e + ": " + r + " (" + o + "/" + s + ")"), r
        }, t.prebuffer = function(e) {
            e = e || {};
            var n, i = e.secondsToBuffer || 10,
                o = e.secondsToWait || 3,
                s = 200,
                r = 1e3 * o / s,
                a = 0,
                l = $.Deferred();
            return pageflow.features.has("prebuffering support") && (t.isBufferedAhead(i) || t.prebufferDeferred || (pageflow.log("prebuffering video " + t.srcFromOptions()), n = function() {
                setTimeout(function() {
                    a++, t.isBufferedAhead(i) || a > r ? (pageflow.log("finished prebuffering video " + t.srcFromOptions()), l.resolve(), t.prebufferDeferred = null) : n()
                }, s)
            }, n(), t.prebufferDeferred = l)), t.prebufferDeferred ? t.prebufferDeferred.promise() : l.resolve().promise()
        }, t.abortPrebuffering = function() {
            t.prebufferDeferred && (pageflow.log("ABORT prebuffering"), t.prebufferDeferred.reject(), t.prebufferDeferred = null)
        };
        var e = t.pause;
        t.pause = function() {
            return t.abortPrebuffering(), e.apply(this, arguments)
        }
    }, pageflow.VideoPlayer.bufferUnderrunWaiting = function(t) {
        function e() {
            n() && i()
        }

        function n() {
            return !t.isBufferedAhead(.1, !0) && !t.waitingOnUnderrun && !o()
        }

        function i() {
            function e() {
                t.off("play", e), t.waitingOnUnderrun && (t.ignoreUnderrunsUntil = (new Date).getTime() + 5e3, t.waitingOnUnderrun = !1), t.trigger("bufferunderruncontinue")
            }
            pageflow.log("Buffer underrun"), t.trigger("bufferunderrun"), t.waitingOnUnderrun = !0, t.pause(), t.prebuffer({
                secondsToBuffer: 5,
                secondsToWait: 5
            }).then(function() {
                t.waitingOnUnderrun && (t.waitingOnUnderrun = !1, t.trigger("bufferunderruncontinue"), t.play())
            }), t.on("play", e)
        }

        function o() {
            var e = t.ignoreUnderrunsUntil && (new Date).getTime() < t.ignoreUnderrunsUntil;
            return e && pageflow.log("ignoring underrun"), e
        }

        function s() {
            t.off("progress", e)
        }
        pageflow.features.has("buffer underrun waiting support") && (t.on("play", function() {
            t.on("progress", e)
        }), t.on("pause", s), t.on("ended", s))
    }, pageflow.VideoPlayer.srcFromOptionsMethod = function(t) {
        function e(t) {
            return _.detect(o, function(e) {
                return i(t, e)
            })
        }

        function n(e) {
            return _.detect(t.options().sources, function(t) {
                return i(t.src, e)
            })
        }

        function i(t, e) {
            return t.indexOf("." + e + "?") >= 0
        }
        var o = ["webm", "m3u8", "mp4"];
        t.srcFromOptions = function() {
            var i = e(t.currentSrc()),
                o = n(i);
            return i && o ? o.src : t.currentSrc()
        }
    },
    function() {
        var t, e = vjs.PlayToggle.prototype.onClick;
        vjs.PlayToggle.prototype.onClick = function() {
            var n = (new Date).getTime();
            if ("undefined" == typeof t || n - t > 400)
                if (t = n, pageflow.features.has("phone platform")) {
                    var i = this.player_.tech.el();
                    this.player_.play(), i.requestFullscreen ? i.requestFullscreen() : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.webkitRequestFullscreen ? i.webkitRequestFullscreen() : i.webkitEnterFullscreen && i.webkitEnterFullscreen()
                } else e.apply(this, arguments)
        }, vjs.PlayToggle.prototype.createEl = function(t, e) {
            return vjs.Button.prototype.createEl.call(this, t || "a", e)
        }
    }(), vjs.Player.prototype.buffered = function() {
        var t = this.techGet("buffered"),
            e = 0,
            n = 0,
            i = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
        if (t && t.length > 0) {
            for (var o = 0; o < t.length; o++) t.end(o) > e && (e = t.end(o));
            e !== i && (i = e, this.cache_.bufferEnd = e)
        }
        return vjs.createTimeRange(n, i)
    }, vjs.Player.prototype.bufferedPercent = function() {
        return this.duration() && Math.floor(this.buffered().end(0)) <= this.duration() ? this.buffered().end(0) / this.duration() : 0
    }, pageflow.VideoPlayer.filterSourcesForSilkBrowser = function(t) {
        if (/\bSilk\b/.test(navigator.userAgent)) {
            $(t).find("source").not('source[type="video/mp4"]').remove();
            var e = $(t).clone(!0);
            return $(t).replaceWith(e), e[0]
        }
        return t
    }, pageflow.VideoPlayer.Lazy = function(t, e) {
        function n(t) {
            a = t.html()
        }

        function i() {
            var t = a.replace(/preload="[a-z]*"/, 'preload="auto"');
            t = t.replace(/src="([^"]*)"/g, 'src="$1&t=' + (new Date).getTime() + '"');
            var e = $(t);
            return pageflow.features.has("high bandwidth") && !pageflow.features.has("mobile platform") ? (e.attr("poster", e.attr("data-large-poster")), e.find("source").each(function() {
                $(this).attr("src", $(this).attr("data-high-src"))
            })) : e.attr("poster", e.attr("data-poster")), e
        }
        var o, s, r, a, l = $('<span class="video_placeholder" />'),
            u = this,
            c = new $.Callbacks;
        n(t), t.before(l), this.ensureCreated = function() {
            o && (clearTimeout(o), o = null), s || (s = i(), l.replaceWith(s), r = new pageflow.VideoPlayer(s[0], e), r.ready(c.fire))
        }, this.dispose = function() {
            s && !pageflow.features.has("mobile platform") && (this.setEmptySrc(), $(r.el()).replaceWith(l), r.dispose(), r = null, s = null)
        }, this.setEmptySrc = function() {
            r.src([{
                type: "video/webm",
                src: pageflow.assetUrls.emptyWebm
            }, {
                type: "video/mp4",
                src: pageflow.assetUrls.emptyMp4
            }])
        }, this.scheduleDispose = function() {
            o || (o = setTimeout(function() {
                u.dispose()
            }, 5e3))
        }, this.ready = function(t) {
            c.add(t)
        }, this.paused = function() {
            return r && r.paused()
        }, this.volume = function() {
            return r ? r.volume.apply(r, arguments) : 0
        }, this.showPosterImage = function() {
            return r && r.posterImage.show()
        }, this.hidePosterImage = function() {
            return r && r.posterImage.unlockShowing()
        }, this.srcFromOptions = function() {
            return r ? r.srcFromOptions() : null
        }, _.each(["play", "pause", "prebuffer", "src", "on", "load"], function(t) {
            u[t] = function() {
                var e = arguments;
                return r ? new $.Deferred(function(n) {
                    r.ready(function() {
                        $.when(r[t].apply(r, e)).then(n.resolve)
                    })
                }) : (pageflow.log("Video Player not yet initialized. (" + t + ")", {
                    force: !0
                }), void 0)
            }
        })
    }, jQuery(function(t) {
      
    }), pageflow.History = function(t) {
        function e() {
            var t = window.location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        }
        t.on("slideshowchangepage", function() {
            window.location.hash = "#" + t.currentPage().attr("id")
        }), $(window).on("hashchange", function() {
            t.goToByPermaId(e())
        }), t.goToByPermaId(e())
    }, pageflow.manualStart = function(t) {
        var e = t.Deferred(),
            n = t.Deferred();
        return t(function() {
            pageflow.manualStart.enabled ? e.resolve(n.resolve) : n.resolve()
        }), {
            wait: function(t) {
                var e = !1;
                return n.then(function() {
                    e || t()
                }), {
                    cancel: function() {
                        e = !0
                    }
                }
            },
            required: function() {
                return e.promise()
            }
        }
    }(jQuery), pageflow.Settings = Backbone.Model.extend({
        defaults: {
            volume: 1
        },
        initialize: function() {
            
        }
    }), pageflow.settings = new pageflow.Settings,
    function(t) {
        t.widget("pageflow.page", {
            _create: function() {
                this.configuration = this.element.data("configuration") || this.options.configuration, this.index = this.options.index, this.element.addClass(this.configuration.transition || "fade"), this.preloaded = !1, this.reinit()
            },
            reinit: function() {
                this.pageType = pageflow.pageType.get(this.element.data("template")), this.element.data("pageType", this.pageType), this.content = this.element.find(".scroller"), this.content.scroller(), this.content.hideTextOnSwipe(), this._triggerPageTypeHook("enhance")
            },
            reactivate: function() {
                this.element.hasClass("active") && (this.content.scroller("enable"), this.content.scroller("afterAnimationHook"), this._triggerPageTypeHook("activating"), this._triggerDelayedPageTypeHook("activated"))
            },
            refreshScroller: function() {
                this.content.scroller("refresh")
            },
            resize: function() {
                this._triggerPageTypeHook("resize")
            },
            activateAsLandingPage: function() {
                this.element.addClass("active"), this.content.scroller("enable"), this.content.scroller("afterAnimationHook"), this._trigger("activate", null, {
                    page: this
                }), this._triggerPageTypeHook("activating"), this._triggerDelayedPageTypeHook("activated"), this.prepareTimeout = setTimeout(_.bind(this.triggerPrepareNextPage, this), this.prepareNextPageTimeout())
            },
            prepare: function() {
                this._triggerPageTypeHook("prepare")
            },
            prepareNextPageTimeout: function() {
                return this.pageType.prepareNextPageTimeout
            },
            preload: function() {
                var e = this;
                return this.preloaded ? void 0 : (this.preloaded = !0, t.when(this._triggerPageTypeHook("preload")).then(function() {
                    e._trigger("preloaded")
                }))
            },
            activate: function(t) {
                this.element.removeClass("animate-out-forwards animate-out-backwards").addClass("animate-in-" + t.direction), setTimeout(_.bind(function() {
                    this.element.addClass("active")
                }, this), 5), setTimeout(_.bind(function() {
                    this.content.scroller("afterAnimationHook"), this.element.removeClass("animate-in-forwards animate-in-backwards"), this._triggerDelayedPageTypeHook("activated")
                }, this), 1100), this.content.scroller("enable"), this._trigger("activate", null, {
                    page: this
                }), this._triggerPageTypeHook("activating"), this.prepareTimeout = setTimeout(_.bind(this.triggerPrepareNextPage, this), this.prepareNextPageTimeout())
            },
            deactivate: function(t) {
                this.element.removeClass("active animate-in-forwards animate-in-backwards").addClass("animate-out-" + t.direction), setTimeout(_.bind(function() {
                    this.element.removeClass("animate-out-forwards animate-out-backwards"), this._triggerPageTypeHook("deactivated")
                }, this), 1100), this.content.scroller("disable"), this._trigger("deactivate"), this._triggerPageTypeHook("deactivating"), clearTimeout(this.prepareTimeout)
            },
            _triggerDelayedPageTypeHook: function(t) {
                var e = this,
                    n = pageflow.manualStart.wait(function() {
                        e._triggerPageTypeHook(t)
                    });
                this.element.one("deactivate", function() {
                    n.cancel()
                })
            },
            _triggerPageTypeHook: function(t) {
                return this.pageType[t](this.element, this.configuration)
            },
            triggerPrepareNextPage: function() {
                t(this.element).next(".page").length > 0 && t(this.element).next(".page").page("prepare", {})
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.scroller", {
            dragThreshold: 50,
            maxXDelta: 50,
            doubleBumpThreshold: 500,
            _create: function() {
                this.iscroll = new IScroll(this.element[0], {
                    mouseWheel: !0,
                    bounce: !1,
                    keyBindings: !0,
                    probeType: 2,
                    preventDefault: !1
                }), this.iscroll.disable(), this.element.data("domEventHandler", this.iscroll), this._initMousewheelBump("up"), this._initMousewheelBump("down"), this._initKeyboardBump("up"), this._initKeyboardBump("down"), this._initDragGestureBump(), this._initNearBottomEvents(), this._initNearTopEvents(), this._initMoveEvents()
            },
            enable: function() {
                this.iscroll.enable(), this.iscroll.refresh(), this.iscroll.scrollTo(0, 0, 0)
            },
            refresh: function() {
                this.iscroll.refresh()
            },
            afterAnimationHook: function() {
                this._triggerNearBottomEvents()
            },
            disable: function() {
                this.iscroll.disable()
            },
            _initMoveEvents: function() {
                this.iscroll.on("mousewheelup", _.bind(this._triggerMoveEvent, this)), this.iscroll.on("mousewheeldown", _.bind(this._triggerMoveEvent, this)), this.iscroll.on("afterkeyboard", _.bind(this._triggerMoveEvent, this))
            },
            _triggerMoveEvent: function() {
                this._trigger("move")
            },
            _initNearBottomEvents: function() {
                this.iscroll.on("scroll", _.bind(this._triggerNearBottomEvents, this)), this.iscroll.on("scrollEnd", _.bind(this._triggerNearBottomEvents, this)), this.iscroll.on("afterkeyboard", _.bind(this._triggerNearBottomEvents, this))
            },
            _initNearTopEvents: function() {
                this.iscroll.on("scroll", _.bind(this._triggerNearTopEvents, this)), this.iscroll.on("scrollEnd", _.bind(this._triggerNearTopEvents, this)), this.iscroll.on("afterkeyboard", _.bind(this._triggerNearTopEvents, this))
            },
            _triggerNearBottomEvents: function() {
                this._atBoundary("down", {
                    delta: 50
                }) ? this._trigger("nearbottom") : this._trigger("notnearbottom")
            },
            _triggerNearTopEvents: function() {
                this._atBoundary("up", {
                    delta: 50
                }) ? this._trigger("neartop") : this._trigger("notneartop")
            },
            _initMousewheelBump: function(t) {
                var e = !1;
                this.iscroll.on("mousewheel" + t, _.bind(function() {
                    this._atBoundary(t) && (e ? (this._trigger("bump" + t), e = !1, clearTimeout(this.waitForSecondBump)) : (this._trigger("hint" + t), e = !0, this.waitForSecondBump = setTimeout(function() {
                        e = !1
                    }, this.doubleBumpThreshold)))
                }, this))
            },
            _initKeyboardBump: function(t) {
                this.iscroll.on("keyboard" + t, _.bind(function(e) {
                    this._atBoundary(t) && (e.stopImmediatePropagation(), this._trigger("bump" + t))
                }, this)), this.iscroll.on("keyboardhint" + t, _.bind(function() {
                    this._atBoundary(t) && this._trigger("hint" + t)
                }, this))
            },
            _initDragGestureBump: function() {
                function t(t) {
                    return t.originalEvent.pointerType && t.originalEvent.pointerType !== t.originalEvent.MSPOINTER_TYPE_TOUCH
                }
                var e, n, i = !1,
                    o = !1;
                this.element.on("touchstart MSPointerDown", _.bind(function(s) {
                    var r = s.originalEvent.touches ? s.originalEvent.touches[0] : s.originalEvent;
                    e = r.pageX, n = r.pageY, t(s) || (o = this._atBoundary("down"), i = this._atBoundary("up"))
                }, this)), this.element.on("touchmove MSPointerMove", _.bind(function(t) {
                    var s = t.originalEvent.touches ? t.originalEvent.touches[0] : t.originalEvent,
                        r = s.pageX - e,
                        a = s.pageY - n;
                    Math.abs(r) > this.maxXDelta && (o = i = !1), i && a > this.dragThreshold ? (this._trigger("bumpup"), o = i = !1) : o && a < -this.dragThreshold && (this._trigger("bumpdown"), o = i = !1)
                }, this)), this.element.on("touchend MSPointerUp", _.bind(function() {
                    i && this._trigger("hintup"), o && this._trigger("hintdown")
                }, this))
            },
            _atBoundary: function(t, e) {
                e = e || {};
                var n = e.delta || 0;
                return "up" === t ? this.iscroll.y >= -n : this.iscroll.y <= this.iscroll.maxScrollY + n
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.scrollIndicator", {
            _create: function() {
                var e = this.options.parent,
                    n = this;
                e.on("pageactivate", function(e) {
                    n.element.toggleClass("invert", t(e.target).hasClass("invert"))
                }), e.on("scrollerhintdown", function() {
                    n.element.addClass("animate"), setTimeout(function() {
                        n.element.removeClass("animate")
                    }, 500)
                }), e.on("scrollernearbottom", function(i) {
                    var o = t(i.target).parents("section");
                    o.hasClass("active") && n.element.toggleClass("visible", e.nextPageExists())
                }), e.on("scrollernotnearbottom slideshowchangepage", function() {
                    n.element.removeClass("visible")
                })
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.hiddenTextIndicator", {
            _create: function() {
                var e = this.options.parent,
                    n = this;
                e.on("pageactivate", function(e) {
                    n.element.toggleClass("invert", t(e.target).hasClass("invert")), n.element.toggleClass("hidden", t(e.target).hasClass("hide_content_with_text"))
                }), e.on("hidetextactivate", function() {
                    n.element.addClass("visible")
                }), e.on("hidetextdeactivate", function() {
                    n.element.removeClass("visible")
                })
            }
        })
    }(jQuery), pageflow.ProgressivePreload = function() {
        function t(t) {
            function e(t) {
                return $.when(t.page("preload")).pipe(function() {
                    var i = t.next(".page");
                    return !n && i.length ? e(i) : void 0
                })
            }
            var n = !1;
            this.cancel = function() {
                n = !0
            }, this.start = function() {
                return e(t)
            }
        }
        var e = null;
        this.start = function(n) {
            e && e.cancel(), e = new t(n), e.start()
        }
    },
    function(t) {
        t.widget("pageflow.swipeGesture", {
            _create: function() {
                function t(t) {
                    return t.originalEvent.pointerType && t.originalEvent.pointerType !== t.originalEvent.MSPOINTER_TYPE_TOUCH
                }
                var e, n, i, o, s;
                this.options = _.extend({
                    orientation: "x",
                    minDist: 100,
                    maxOrthogonalDist: 50,
                    maxDuration: 500
                }, this.options), this.element.on("touchstart MSPointerDown", _.bind(function(r) {
                    if (!t(r)) {
                        var a = r.originalEvent.touches ? r.originalEvent.touches[0] : r.originalEvent;
                        e = a.pageX, n = a.pageY, o = 0, s = 0, i = (new Date).getTime()
                    }
                }, this)), this.element.on("touchmove MSPointerMove", _.bind(function(i) {
                    if (!t(i)) {
                        var r = i.originalEvent.touches ? i.originalEvent.touches[0] : i.originalEvent;
                        o = r.pageX - e, s = r.pageY - n
                    }
                }, this)), this.element.on("touchend MSPointerUp", _.bind(function(e) {
                    if (!t(e)) {
                        var n = (new Date).getTime() - i,
                            r = "x" === this.options.orientation ? o : s,
                            a = "x" === this.options.orientation ? s : o;
                        Math.abs(r) > this.options.minDist && Math.abs(a) < this.options.maxOrthogonalDist && n < this.options.maxDuration && ("x" === this.options.orientation ? this._trigger(r > 0 ? "right" : "left") : this._trigger(r > 0 ? "down" : "up"))
                    }
                }, this))
            }
        })
    }(jQuery), pageflow.hideText = function() {
        function t() {
            return $("body")
        }

        function e(t) {
            return _.map(t.split(" "), function(t) {
                return "hidetext" + t
            }).join(" ")
        }
        return $(document).ready(function() {
            t().on("keydown", function() {
                27 == event.keyCode && pageflow.hideText.deactivate()
            })
        }), {
            isActive: function() {
                return t().hasClass("hideText")
            },
            toggle: function() {
                this.isActive() ? this.deactivate() : this.activate()
            },
            activate: function() {
                t().addClass("hideText"), t().trigger("hidetextactivate")
            },
            deactivate: function() {
                t().removeClass("hideText"), t().trigger("hidetextdeactivate")
            },
            on: function(n, i) {
                t().on(e(n), i)
            }
        }
    }(),
    function(t) {
        t.widget("pageflow.hideTextOnSwipe", {
            _create: function() {
                this.element.swipeGesture({
                    orientation: "x"
                }), this.element.on("swipegestureleft", function() {
                    pageflow.hideText.activate()
                }), this.element.on("touchstart MSPointerDown mousedown", function() {
                    pageflow.hideText.isActive() && pageflow.hideText.deactivate()
                }), this.element.on("scrollermove", function() {
                    pageflow.hideText.isActive() && pageflow.hideText.deactivate()
                })
            }
        })
    }(jQuery), pageflow.Slideshow = function(t, e) {
        function n(t, e) {
            u || (u = !0, t.call(e), setTimeout(function() {
                u = !1
            }, l))
        }

        function i(t) {
            var e = $(a.get(t));
            return e.length ? e : a.last()
        }

        function o() {
            var t = s();
            t && (h = t, r = h.index(), h.page("activateAsLandingPage"), c.start(h))
        }

        function s() {
            return h.length ? h.parent().length ? void 0 : i(r) : a.first()
        }
        var r, a, l = 1e3,
            u = !1,
            c = new pageflow.ProgressivePreload,
            h = $();
        e = e || {}, this.nextPageExists = function() {
            return !h.is(a.last())
        }, this.back = function() {
            this.goTo(h.prev(".page"))
        }, this.next = function() {
            this.goTo(h.next(".page"))
        }, this.goToById = function(e) {
            this.goTo(t.find("[data-id=" + e + "]"))
        }, this.goToByPermaId = function(e) {
            e && this.goTo(t.find("#" + e))
        }, this.goTo = function(e) {
            e.length && !e.is(h) && n(function() {
                var n = h;
                h = e, r = h.index();
                var i = r > n.index() ? "forwards" : "backwards";
                n.page("deactivate", {
                    direction: i
                }), h.page("activate", {
                    direction: i
                }), c.start(h), t.trigger("slideshowchangepage")
            }, this)
        }, this.goToFirstPage = function() {
            this.goTo(a.first())
        }, this.update = function() {
            a = t.find("section.page"), a.each(function(t) {
                var n = $(this);
                n.page({
                    index: t,
                    configuration: e[n.data("id")]
                })
            }), o()
        }, this.currentPage = function() {
            return h
        }, this.on = function() {
            t.on.apply(t, arguments)
        }, this.triggerResizeHooks = function() {
            h.page("resize")
        }, t.on("scrollerbumpup", _.bind(function() {
            this.back()
        }, this)), t.on("scrollerbumpdown", _.bind(function() {
            this.next()
        }, this)), t.on("click", "a.to_top", _.bind(function() {
            this.goToFirstPage()
        }, this)), $(window).on("resize", this.triggerResizeHooks), $(document).on("touchmove", function(t) {
            t.preventDefault()
        }), t.addClass("slideshow");
        var d = t.find(".scroll_indicator");
        d.scrollIndicator({
            parent: this
        }), d.on("click", _.bind(function() {
            this.next()
        }, this)), t.find(".hidden_text_indicator").hiddenTextIndicator({
            parent: $("body")
        }), this.on("slideshowchangepage", function() {
            pageflow.hideText.deactivate()
        }), this.update()
    }, pageflow.ready = new $.Deferred(function(t) {
        window.onload = function() {
            pageflow.features.detect().then(function() {
                $("body").one("pagepreloaded", function() {
                    t.resolve()
                }), $("[data-role=slideshow]").each(function() {
                    var t = _.reduce(pageflow.pages, function(t, e) {
                        return t[e.id] = e.configuration, t
                    }, {});
                    pageflow.slides = new pageflow.Slideshow($(this), t), pageflow.history = new pageflow.History(pageflow.slides)
                }), $(".header").header({
                    slideshow: pageflow.slides
                }), $(".navigation").navigation(), $(".navigation_mobile").navigationMobile(), $(".overview").overview(), $(".multimedia_alert").multimediaAlert(), $("body").on("click mousedown", "a, [tabindex]", function() {
                    $(this).blur()
                }), $("body").on("keypress", "a, [tabindex]", function(t) {
                    13 == t.which && $(this).click()
                }), $("body").on("keyup", "a, [tabindex]", function(t) {
                    t.stopPropagation()
                }), $(".content_link").attr("href", "#firstContent"), $(".content_link").click(function(t) {
                    return $("#firstContent").focus(), t.preventDefault(), !1
                })
            })
        }
    }).promise(), jQuery(function(t) {
        t.widget("pageflow.header", {
            _create: function() {
                function e(t) {
                    i.element.toggleClass("invert", t.hasClass("invert")), i.element.toggleClass("first_page", 0 === t.index()), i.element.addClass("near_top")
                }
                var n = this.options.slideshow,
                    i = this;
                n.on("pageactivate", function(n) {
                    e(t(n.target))
                }), n.on("scrollerneartop", function() {
                    i.element.addClass("near_top")
                }), n.on("scrollernotneartop", function(e) {
                    var n = t(e.target).parents("section");
                    n.hasClass("active") && i.element.removeClass("near_top")
                }), n.currentPage() && e(n.currentPage()), this.element.find(".header input").placeholder()
            }
        })
    }),
    function(t) {
        t.widget("pageflow.homeButton", {
            _create: function() {
                function e(t) {
                    var e = t.data("id"),
                        i = e === n.data("link");
                    n.toggleClass("deactivated", i), n.attr("tabindex", i ? "-1" : "2")
                }
                var n = this.element;
                n.click(function(t) {
                    pageflow.slides.goToById(n.data("link")), t.preventDefault()
                }), pageflow.slides.on("pageactivate", function(n) {
                    e(t(n.target))
                }), e(pageflow.slides.currentPage())
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.loadingSpinner", {
            _create: function() {
                var t = this.element;
                setTimeout(function() {
                    pageflow.ready.then(function() {
                        t.addClass("fade"), setTimeout(function() {
                            t.hide()
                        }, 1e3)
                    })
                }, 1e3)
            }
        }), t(function() {
            t(".loading_spinner").loadingSpinner()
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.multimediaAlert", {
            _create: function() {
                function e(e) {
                    t(".page .content").toggleClass("initially_hidden", !e), t(".slideshow .scroll_indicator").toggleClass("initially_hidden", !e)
                }
                var n = this;
                pageflow.manualStart.required().then(function(t) {
                    n.element.show(), e(!1), n.element.find(".close").on("click", function() {
                        return n.element.hide(), e(!0), t(), !1
                    })
                })
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.navigation", {
            _create: function() {
                function e() {
                    g = t(this), g.one("mouseup touchend", s)
                }

                function n() {
                    v.off("mouseup touchend", s)
                }

                function i() {
                    t(".overview").removeClass("active"), t(".navigation_index", a.element).removeClass("active")
                }

                function o() {
                    t(r).addClass("hidden").removeClass("visible")
                }

                function s(e) {
                    g && g[0] != e.currentTarget || (o(), i(), t(".page .content, .scroll_indicator").removeClass("hidden"), pageflow.slides.goToById(this.getAttribute("data-link")), e.preventDefault())
                }
                var r = this.element.find(".navigation_site_detail"),
                    a = this,
                    l = function() {};
                this.element.addClass("js").append(r), t("a.navigation_home", this.element).homeButton(), t(".navigation_bar_bottom", this.element).append(t(".navigation_bar_top > li", this.element).slice(3));
                var u = !1,
                    c = 1,
                    h = t(".navigation_bg.navigation_mute", a.element),
                    d = function(e) {
                        var n = (e.pageX - t(".volume-slider", a.element).offset().left) / t(".volume-slider").width();
                        n > 1 && (n = 1), 0 > n && (n = 0), p(n)
                    },
                    p = function(e) {
                        t(".volume-level", a.element).css({
                            width: 100 * e + "%"
                        }), pageflow.settings.set("volume", e), 0 === e ? h.attr("title", h.attr("data-muted-title")).addClass("muted") : h.attr("title", h.attr("data-not-muted-title")).removeClass("muted")
                    },
                    f = function() {
                        pageflow.settings.get("volume") > 0 ? (c = pageflow.settings.get("volume"), p(0)) : p(c)
                    };
                h.on("click", function() {
                    f()
                }), t(".volume-level", this.element).css({
                    width: 100 * pageflow.settings.get("volume") + "%"
                }), t(".navigation_volume_box", this.element).on("mousedown", function(t) {
                    u = !0, d(t)
                }), t(".navigation_volume_box", this.element).on("mousemove", function(t) {
                    u && d(t)
                }), p(pageflow.settings.get("volume")), pageflow.features.has("mobile platform") && (t("li.mute", this.element).hide(), t(".navigation_bar_bottom", this.element).css("height", "224px"), t(".scroller", this.element).css("bottom", "224px"), t(".scroll_indicator.bottom", this.element).css("bottom", "190px")), t(".navigation_main", this.element).click(function() {
                    t(this).toggleClass("active").updateTitle(), t(".header").toggleClass("active")
                }), t('a[href="#header"], a[href="#search"]', "#skipLinks").click(function() {
                    t(".navigation_main", a.element).addClass("active"), t(".header").addClass("active"), t(this.getAttribute("href")).select()
                }), t(".navigation_menu .navigation_menu_box a", this.element).focus(function() {
                    t(this).parent().parent().addClass("focused")
                }).blur(function() {
                    t(this).parent().parent().removeClass("focused")
                });
                var g, v = t(".navigation_thumbnails a", a.element);
                v.each(function(n) {
                    var i = function() {
                        "ontouchstart" in document.documentElement || t(r[n]).css("top", t(this).offset().top).addClass("visible").removeClass("hidden")
                    };
                    t(this).on({
                        mouseenter: i,
                        mouseleave: o,
                        "mousedown touchstart": e,
                        click: s
                    })
                }), t(window).on("resize", function() {
                    t(r).css("top", "0"), m()
                });
                var m = function() {
                    setTimeout(function() {
                        t(".scroll_indicator", a.element).show(), l()
                    }, 500)
                };
                t(".scroller", this.element).each(function() {
                    var e, i, o = t(".scroll_indicator.bottom", a.element),
                        s = t(".scroll_indicator.top", a.element),
                        u = function() {
                            r.addClass("hidden").removeClass("visible")
                        },
                        c = function(t) {
                            return "up" === t ? p.y >= 0 : p.y <= p.maxScrollY
                        };
                    l = function() {
                        c("down") && (clearInterval(i), o.hide().removeClass("pressed")), c("up") && (clearInterval(e), s.hide().removeClass("pressed")), c("up") || c("down") || (s.show(), o.show())
                    };
                    var h = function(e) {
                            var n = this,
                                i = function() {
                                    t(n).hasClass("bottom") ? p.scrollBy(0, -20, 80) : p.scrollBy(0, 20, 80), l()
                                };
                            13 == e.which ? (i(), setTimeout(function() {
                                n.focus()
                            }, 50)) : 0 === e.which && i()
                        },
                        d = {
                            mouseWheel: !0,
                            bounce: !1,
                            probeType: 2
                        };
                    window.navigator.msPointerEnabled && (d.preventDefault = !1);
                    var p = new IScroll(this, d);
                    t("ul.navigation_thumbnails", a.element).pageNavigationList({
                        scroller: p,
                        scrollToActive: !0
                    }), pageflow.ready.then(function() {
                        l()
                    }), s.on({
                        mousedown: function() {
                            e = setInterval(function() {
                                p.scrollBy(0, 1), l()
                            }, 5)
                        },
                        keypress: h,
                        touchstart: h
                    }), s.on("mouseup touchend", function() {
                        clearInterval(e)
                    }), o.on({
                        mousedown: function() {
                            i = setInterval(function() {
                                p.scrollBy(0, -1), l()
                            }, 5)
                        },
                        keypress: h,
                        touchstart: h
                    }), o.on("mouseup touchend", function() {
                        clearInterval(i)
                    }), l(), p.on("scroll", function() {
                        l(), u(), n()
                    })
                });
                var y = t(".navigation_hide_text", this.element);
                if (y.click(function() {
                    pageflow.hideText.toggle()
                }), pageflow.hideText.on("activate deactivate", function() {
                    y.toggleClass("active", pageflow.hideText.isActive()).updateTitle()
                }), t.support.fullscreen) {
                    var b = t(".navigation_fullscreen", this.element),
                        w = function(t) {
                            b.toggleClass("active", !!t).updateTitle()
                        };
                    b.click(function() {
                        b.toggleClass("fs").updateTitle(), t("#outer_wrapper").fullScreen({
                            callback: w
                        })
                    })
                } else t(".navigation_bar_bottom .fullscreen a", this.element).css("visibility", "hidden");
                t(".button, .navigation_mute, .scroll_indicator", this.element).on({
                    "touchstart mousedown": function() {
                        t(this).addClass("pressed")
                    },
                    "touchend mouseup": function() {
                        t(this).removeClass("pressed")
                    }
                }), t(".navigation_share, .navigation_credits", this.element).on({
                    touchstart: function() {
                        function e(i) {
                            n.find(i.target).length || (n.removeClass("open"), t("body").off("touchstart", e))
                        }
                        var n = t(this).parent().parent();
                        n.addClass("open"), t("body").on("touchstart", e)
                    }
                }), t("li", this.element).on("mouseleave", function() {
                    t(this).blur()
                }), t("body").on({
                    mouseup: function() {
                        u = !1
                    },
                    pageactivate: function() {
                        l()
                    }
                })
            }
        })
    }(jQuery),
    function(t) {
        t.widget("pageflow.navigationMobile", {
            _create: function() {
                var e, n = this,
                    i = function() {
                        var e = t("a", this),
                            n = e.attr("data-link");
                        void 0 !== n ? (pageflow.slides.goToById(n), t(".navigation_mobile").removeClass("active")) : (window.open(e.attr("href"), "_blank"), e.preventDefault())
                    };
                t("body").on("touchstart mousedown MSPointerDown", function(e) {
                    n.element.hasClass("active") && !t(e.target).parents().filter(n.element).length && n.element.removeClass("active imprint sharing")
                }), t(".menu.index", n.element).click(function() {
                    t(n.element).hasClass("sharing") || t(n.element).hasClass("imprint") || t(n.element).toggleClass("active"), t(n.element).removeClass("imprint sharing")
                }), t(".menu.sharing", n.element).click(function() {
                    t(n.element).addClass("sharing"), t(n.element).removeClass("imprint")
                }), t(".menu.imprint", n.element).click(function() {
                    t(n.element).addClass("imprint"), t(n.element).removeClass("sharing")
                }), t(".wrapper", this.element).each(function() {
                    e = new IScroll(this, {
                        mouseWheel: !0,
                        bounce: !1,
                        probeType: 3
                    }), t("ul", n.element).pageNavigationList({
                        scroller: e
                    }), e.on("scroll", function() {
                        t("li", n.element).removeClass("touched").off("touchend mouseup MSPointerUp", i)
                    }), t(".menu", n.element).click(function() {
                        e.refresh()
                    }), t("li", n.element).each(function() {
                        t(this).on({
                            "touchstart mousedown MSPointerDown": function() {
                                t(this).addClass("touched"), t(this).one("touchend mouseup MSPointerUp", i)
                            },
                            "touchend mouseup MSPointerUp": function() {
                                t(this).removeClass("touched")
                            }
                        })
                    })
                })
            }
        })
    }(jQuery), jQuery(function(t) {
        t.widget("pageflow.overview", {
            _create: function() {
                var e, n = t(".ov_chapter", this.element),
                    i = t(".ov_page", this.element),
                    o = n.size(),
                    s = o * n.outerWidth(!0),
                    r = t(".close", this.element),
                    a = t(".navigation .navigation_index"),
                    l = t(".navigation .navigation_home"),
                    u = t(".overview"),
                    c = t(".wrapper", this.element),
                    h = function(e) {
                        var n = t(".slideshow .scroll_indicator");
                        u.toggleClass("active", e), a.toggleClass("active", e).updateTitle(), t(".page .content").toggleClass("hidden", e), n.toggleClass("hidden", e)
                    },
                    d = function() {
                        t(this).hasClass("active") || (h(), pageflow.slides.goToById(this.getAttribute("data-link")))
                    };
                if (t(".scroller", this.element).width(s), c.find(".ov_chapter").length && (e = new IScroll(c[0], {
                    snap: ".ov_chapter",
                    bounce: !1,
                    scrollX: !0,
                    scrollY: !1,
                    probeType: 2,
                    mouseWheel: !0,
                    preventDefault: !1
                }), e.on("scroll", function() {
                    i.removeClass("touched").off("touchend mouseup", d)
                }), c.pageNavigationList({
                    scroller: e
                }), this.element.find(".scroll_indicator.left").scrollButton({
                    scroller: e,
                    page: !0,
                    direction: "left"
                }), this.element.find(".scroll_indicator.right").scrollButton({
                    scroller: e,
                    page: !0,
                    direction: "right"
                })), i.each(function() {
                    t(this).on({
                        "touchstart mousedown": function() {
                            t(this).addClass("touched"), t(this).one("touchend mouseup", d)
                        },
                        "touchend mouseup": function() {
                            t(this).removeClass("touched")
                        },
                        click: function(t) {
                            t.preventDefault()
                        }
                    })
                }), s < c.width()) {
                    var p = Math.max(400, s - r.width() - 10);
                    r.css({
                        left: p + "px",
                        right: "auto"
                    })
                }
                r.click(h), a.click(h), l.click(function() {
                    h(!1)
                }), t("body").keyup(function(t) {
                    27 == t.which && u.hasClass("active") && h()
                })
            }
        })
    }),
    function(t) {
        t.widget("pageflow.pageNavigationList", {
            _create: function() {
                function e(e) {
                    return t(e).attr("id") || (t(e).data("permaId") || "").toString()
                }

                function n(t) {
                    var e = _.find(o(t).reverse(), function(t) {
                        return u.filter('[href="#' + t + '"]').length
                    });
                    i(e)
                }

                function i(e) {
                    u.each(function() {
                        var n = t(this),
                            i = "#" + e === n.attr("href");
                        n.toggleClass("active", i), n.attr("tabindex", i ? "-1" : "3"), a.scrollToActive && i && l.scrollToElement(n[0], 800)
                    })
                }

                function o(t) {
                    var e = !1;
                    return _.filter(s(), function(n) {
                        var i = !e;
                        return e = e || t === n, i
                    })
                }

                function s() {
                    return _.isArray(pageflow.pages) ? _.map(pageflow.pages, function(t) {
                        return t.perma_id.toString()
                    }) : pageflow.pages.map(function(t) {
                        return t.get("perma_id").toString()
                    })
                }
                var r = this.element,
                    a = this.options,
                    l = a.scroller,
                    u = r.find("a");
                pageflow.ready.then(function() {
                    n(e(pageflow.slides.currentPage()))
                }), pageflow.slides.on("pageactivate", function(t) {
                    n(e(t.target))
                })
            }
        })
    }(jQuery), jQuery.widget("pageflow.playerControls", {
        _create: function() {
            function t() {
                e.playing ? e.pause() : e.play()
            }
            var e = this.options.player,
                n = this.element.find(".vjs-play-control"),
                i = this.element.find(".vjs-progress-holder"),
                o = this.element.find(".vjs-play-progress"),
                s = this.element.find(".vjs-current-time-display"),
                r = this.element.find(".vjs-duration-display"),
                a = this.element.find(".vjs-slider-handle"),
                l = 5 === r.html().length && "0" === r.html().charAt(0);
            l ? (r.html("0:00"), s.html(s.html().substr(1))) : r.html("00:00"), e.on("timeupdate", function(t, n) {
                var i = n > 0 ? 100 * (e.position / e.duration) : 0;
                isNaN(t) || (l ? ($(s).html(e.formatTime(t).substr(1)), $(r).html(e.formatTime(n).substr(1))) : ($(s).html(e.formatTime(t)), $(r).html(e.formatTime(n)))), $(a).css({
                    left: i + "%"
                }), $(o).css({
                    width: i + "%"
                })
            }), e.on("play", function() {
                $(n).removeClass("vjs-play"), $(n).addClass("vjs-pause")
            }), e.on("pause", function() {
                $(n).removeClass("vjs-pause"), $(n).addClass("vjs-play")
            }), e.on("ended", function() {
                $(n).removeClass("vjs-pause"), $(n).addClass("vjs-play")
            }), n.on({
                "mousedown touchstart": function() {
                    $(this).addClass("pressed")
                },
                "mouseup touchend": function() {
                    $(this).removeClass("pressed")
                },
                click: function() {
                    t()
                },
                keypress: function(e) {
                    if (13 == e.which) {
                        var n = this;
                        t(), setTimeout(function() {
                            $(n).focus()
                        }, 20)
                    }
                }
            }), $(i).on("mousedown touchstart", function(t) {
                function n(t) {
                    var n;
                    n = t.originalEvent.changedTouches || t.originalEvent.touches ? t.originalEvent.changedTouches[0].pageX || t.originalEvent.touches[0].pageX : t.pageX;
                    var o = (n - $(i).offset().left) / $(i).width();
                    o > 1 && (o = 1), 0 > o && (o = 0), e.seek(o * e.duration)
                }

                function o() {
                    $("body").off({
                        "mousemove touchmove": n,
                        "mouseup touchend": o
                    })
                }
                var s = (t.pageX - $(i).offset().left) / $(i).width();
                e.seek(s * e.duration), $("body").on({
                    "mousemove touchmove": n,
                    "mouseup touchend": o
                })
            })
        }
    }),
    function(t) {
        var e = 32;
        t.widget("pageflow.scrollButton", {
            _create: function() {
                function t() {
                    o.toggle(!i())
                }

                function n() {
                    "top" === r || "left" === r ? s.prev() : ("down" === r || "right" === r) && s.next()
                }

                function i() {
                    return "top" === r ? s.y >= 0 : "left" === r ? s.x >= 0 : "down" === r ? s.y <= s.maxScrollY : s.x <= s.maxScrollX
                }
                var o = this.element,
                    s = this.options.scroller,
                    r = this.options.direction;
                s.on("scrollEnd", function() {
                    t()
                }), this.element.on("click", function() {}), this.options.page && o.on({
                    click: function() {
                        return n(), o.blur(), !1
                    },
                    keypress: function(t) {
                        t.which == e && n()
                    },
                    touchstart: function() {
                        n()
                    }
                }), t()
            }
        })
    }(jQuery), pageflow.ivw = function() {
        return {
            bindEventHandlers: function() {
                $("body").on("click", "a.navigation_main", function() {
                    pageflow.ivw.reloadPixel("/toggle_head_navigation")
                }), $("body").on("click", "a.navigation_index", function() {
                    pageflow.ivw.reloadPixel("/open_index")
                }), $("body").on("click", "a.navigation_fullscreen", function() {
                    pageflow.ivw.reloadPixel("/toggle_fullscreen")
                }), $("body").on("click", ".mute a", function() {
                    pageflow.ivw.reloadPixel("/toggle_mute")
                }), $("body").on("click", "a.share.facebook", function() {
                    pageflow.ivw.reloadPixel("/facebook_share")
                }), $("body").on("click", "a.share.twitter", function() {
                    pageflow.ivw.reloadPixel("/share_twitter")
                }), $("body").on("click", "a.share.google", function() {
                    pageflow.ivw.reloadPixel("/share_google")
                }), $("body").on("pageactivate", function(t, e) {
                    pageflow.ivw.reloadPixel("/pages/" + encodeURIComponent(e.page.index + (e.page.configuration.title ? "-" + e.page.configuration.title : "")))
                })
            },
            reloadPixel: function(t, e) {
                e && (this.path = e);
                var n = this.prefix + this.path + t,
                    i = n + "?r=" + encodeURIComponent(document.referrer) + "&d=" + 1e5 * Math.random(),
                    o = $("#ivw_pixel");
                o.length ? o.attr("src", i) : (o = $('<img id="ivw_pixel" src="' + i + '" width="1" height="1" alt="" />'), $("#ivwPix").append(o))
            }
        }
    }(),
    function(t) {
        t.widget("pageflow.before_after", {
            _create: function() {
                function e() {
                    var n = u.get()[0].getBoundingClientRect();
                    m.draggable({
                        axis: "x",
                        containment: [n.left - g, n.top, n.right - g, n.bottom],
                        drag: e,
                        stop: e
                    });
                    var i = parseInt(t(this).css("left"), 10) + g,
                        o = i / n.width;
                    o >= 1 && (o = 1), v.css("width", 100 * o + "%"), l.onSlide.call(this, o), t("#lt-arrow" + a + ", #rt-arrow" + a).stop().css("opacity", 0)
                }

                function n() {
                    f = u.get()[0].getBoundingClientRect(), t(u).hover(function() {
                        t("#lt-arrow" + a).stop().css({
                            "z-index": "20",
                            position: "absolute",
                            top: f.height / 2 - t("#lt-arrow" + a).height() / 2 + "px",
                            left: parseInt(m.css("left"), 10) - 14 + "px"
                        }).animate({
                            opacity: 1,
                            left: parseInt(t("#lt-arrow" + a).css("left"), 10) - 6 + "px"
                        }, 200), t("#rt-arrow" + a).stop().css({
                            position: "absolute",
                            top: f.height / 2 - t("#lt-arrow" + a).height() / 2 + "px",
                            left: parseInt(m.css("left"), 10) + 10 + "px"
                        }).animate({
                            opacity: 1,
                            left: parseInt(t("#rt-arrow" + a).css("left"), 10) + 6 + "px"
                        }, 200)
                    }, function() {
                        t("#lt-arrow" + a).animate({
                            opacity: 0,
                            left: parseInt(t("#lt-arrow" + a).css("left"), 10) - 6 + "px"
                        }, 350), t("#rt-arrow" + a).animate({
                            opacity: 0,
                            left: parseInt(t("#rt-arrow" + a).css("left"), 10) + 6 + "px"
                        }, 350)
                    }), t(u).on("click touchmove touchstart", function(e) {
                        f = u.get()[0].getBoundingClientRect();
                        var n = e.pageX || e.originalEvent.touches[0].pageX,
                            o = l.clickSpeed;
                        "touchmove" == e.type && (o = 10);
                        var s = n - t(this).offset().left,
                            r = 100 * (s / t(this).width()),
                            c = 100 * ((s - g) / t(this).width());
                        n < f.left || n > f.right || (m.stop().animate({
                            left: c + "%"
                        }, o), v.stop().animate({
                            width: r + "%"
                        }, o, function() {
                            var e = parseInt(t("> div:eq(2)", u).css("width"), 10) / i;
                            l.onSlide.call(this, e)
                        }), t("#lt-arrow" + a + ",#rt-arrow" + a).stop().animate({
                            opacity: 0
                        }, 50))
                    }), t(u).one("mousemove", function() {
                        m.stop().animate({
                            opacity: 1
                        }, 500)
                    })
                }
                var i, o, s = {
                        animateIntro: !0,
                        introDelay: 1e3,
                        introDuration: 1e3,
                        introPosition: .65,
                        clickSpeed: 600,
                        linkDisplaySpeed: 200,
                        keypressAmount: 20,
                        onReady: function() {},
                        onInitialized: function() {},
                        onSlide: function() {}
                    },
                    r = s,
                    a = Math.round(1e8 * Math.random()),
                    l = r,
                    u = t(this.element),
                    c = t(".before_image", u),
                    h = t(".after_image", u),
                    d = t(u).parentsUntil(".backgroundArea").last(),
                    p = function() {
                        var n = function() {
                            var e = d.width() / d.height();
                            if (s > e) {
                                t(u).parent().css({
                                    width: "100%",
                                    height: "auto"
                                });
                                var n = (d.height() - t(u).parent().height()) / 2;
                                t(u).css({
                                    top: n + "px",
                                    left: "0"
                                })
                            } else {
                                t(u).parent().css({
                                    width: d.height() * s + "px",
                                    height: "100%"
                                });
                                var i = (d.width() - t(u).parent().width()) / 2;
                                t(u).css({
                                    top: "0",
                                    left: i + "px"
                                })
                            }
                        };
                        i = c.attr("data-width"), o = c.attr("data-height");
                        var s = i / o;
                        t(u).parent().toggleClass("image-is-landscape", s > 1), t(u).parent().toggleClass("image-is-portrait", 1 >= s);
                        var r = 100 * (o / i);
                        t(u).css({
                            overflow: "visible",
                            position: "relative",
                            padding: "0",
                            width: "100%",
                            "padding-top": r + "%"
                        }), n(), f = u.get()[0].getBoundingClientRect(), g = 0, m.draggable(), m.draggable("option", {
                            axis: "x",
                            containment: [f.left - g, f.top, f.right - g, f.bottom],
                            drag: e,
                            stop: e
                        })
                    };
                this.refresh = p, c.attr("id", "beforeimage" + a), h.attr("id", "afterimage" + a);
                var f, g, v = t(".before_wrapper", u);
                t(u).prepend('<div id="dragwrapper' + a + '" class="dragwrapper" title="Linke Maustaste drücken und nach links oder rechts ziehen"><span class="draghandle" id="draghandle' + a + '"></span><div id="drag' + a + '" class="drag"></div></div>');
                var m = t("#dragwrapper" + a, u);
                m.css({
                    opacity: 1,
                    position: "absolute",
                    padding: "0",
                    left: 100 * l.introPosition + "%"
                }).height("100%");
                var y = t(".after_wrapper", u);
                v.css({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: "0px",
                    "z-index": "1",
                    top: "0"
                }), y.css({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    overflow: "hidden",
                    right: "0px",
                    top: "0",
                    "text-align": "right"
                }), t("#drag" + a).height("100%"), t(u).append('<div class="ba_left_indicator ba_indicator" id="lt-arrow' + a + '"></div><div class="ba_right_indicator ba_indicator" id="rt-arrow' + a + '"></div>'), t(".ba_indicator", u).css("opacity", 0), p(), t("img", u).on("dragstart", function(t) {
                    t.preventDefault()
                }), l.onInitialized.call(this), l.animateIntro ? (v.width(f.width), m.css("left", i - g + "px"), setTimeout(function() {
                    m.css({
                        opacity: 1
                    }).animate({
                        left: 100 * l.introPosition + "%"
                    }, l.introDuration, function() {
                        m.animate({
                            opacity: 1
                        }, 1e3)
                    }), v.width(f.width).animate({
                        width: 100 * l.introPosition + "%"
                    }, l.introDuration, function() {
                        n(), l.onReady.call(this)
                    }), l.onSlide.call(this, l.introDelay)
                }, l.introDelay)) : (n(), l.onReady.call(this))
            }
        })
    }(jQuery), pageflow.pageType.register("before_after", _.extend({
        prepareNextPageTimeout: 0,
        enhance: function(t) {
            t.addClass("hide_content_with_text"), t.find(".play_button").on("mousedown touchstart", function() {
                pageflow.hideText.activate()
            }), t.find(".close_button").on("click", function(t) {
                pageflow.hideText.deactivate(), t.stopPropagation()
            })
        },
        prepare: function() {},
        resize: function(t) {
            t.find(".before_after").before_after("refresh"), t.find(".scroller").scroller("refresh")
        },
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function(t) {
            t.find(".before_after").before_after(), t.find(".before_after").before_after("refresh"), t.find(".scroller").scroller("refresh")
        },
        activated: function() {},
        deactivating: function() {},
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateInfoBox(t, e), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            })
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                },
                ".before_after": {
                    view: pageflow.beforeAfter.BeforeAfterEmbeddedView
                }
            }
        }
    }, pageflow.commonPageCssClasses, pageflow.infoBox)), pageflow.chart = pageflow.chart || {}, pageflow.chart.assetUrls = {
        customStylesheet: "http://d24kptljz0gkhd.cloudfront.net/assets/pageflow/chart/custom-0c63049bca2c556949d2c3b1dfd394ca.css"
    }, pageflow.pageType.register("chart", _.extend({
        prepareNextPageTimeout: 0,
        enhance: function(t) {
            var e = t.find(".scroller");
            t.find(".bigscreen_toggler").on("click", function() {
                $("body").toggleClass("bigScreen"), e.scroller("refresh")
            }), $("body").keydown(function(t) {
                27 == t.keyCode && $(this).removeClass("bigScreen")
            })
        },
        resize: function(t) {
            var e = t.find(".iframeWrapper"),
                n = t.find(".page_header"),
                i = t.find(".scroller"),
                o = t.width() > 1430;
            e.toggleClass("widescreened", o), o ? e.insertAfter(i) : e.insertAfter(n)
        },
        customizeLayout: function(t) {
            if (!this.layoutCustomized) {
                var e = t.find("iframe"),
                    n = t.find(".scroller");
                t.find(".iframe_overlay"), e.load(function() {
                    $(this).contents().find(".fs-btn").css("display", "none"), $(this).contents().find("head").append('<link rel="stylesheet" type="text/css" href="' + pageflow.chart.assetUrls.customStylesheet + '">'), $(this).contents().find("body").addClass($("[data-theme]").attr("data-theme")), pageflow.features.has("mobile platform") && setTimeout(function() {
                        e && (e.attr("height", e.contents().height() + "px"), t.find(".iframeWrapper").height(e.contents().height()), n.scroller("refresh"))
                    }, 1e3), n.scroller("refresh"), t.find(".iframeWrapper").addClass("active")
                }), this.layoutCustomized = !0
            }
        },
        _initEventSimulation: function(t, e, n) {
            var i, o = "click mousemove mouseup mouseover mousedown";
            t.on(o, function(n) {
                var o = e.contents()[0];
                t.css("display", "none"), o && n && (i = $(o.elementFromPoint(n.pageX - e.offset().left, n.pageY - e.offset().top)), i.simulate("mousedown", n), i.simulate("mousemove", n), i.simulate("click", n), t.css("cursor", i.css("cursor"))), t.css("display", "block"), n.preventDefault(), n.stopPropagation()
            }), e.load(function() {
                e.contents().find("*").on("mousemove", function() {
                    n.addClass("hovering")
                }), e.contents().on("mouseout", function() {
                    n.removeClass("hovering")
                })
            })
        },
        prepare: function(t) {
            this._loadIframe(t)
        },
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function(t, e) {
            this._loadIframe(t), this.resize(t, e), this.customizeLayout(t, e), this._initEventSimulation(t.find(".iframe_overlay"), t.find("iframe"), t.find(".iframeWrapper"))
        },
        activated: function() {},
        deactivating: function() {
            $("body").removeClass("bigScreen")
        },
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            })
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                },
                iframe: {
                    view: pageflow.chart.IframeEmbeddedView,
                    options: {
                        propertyName: "scraped_site_id"
                    }
                }
            }
        },
        _loadIframe: function(t) {
            t.find("iframe[data-src]").each(function() {
                var t = $(this);
                t.attr("src") || t.attr("src", t.data("src"))
            })
        }
    }, pageflow.commonPageCssClasses)), pageflow.pageType.register("panorama", _.extend({
        enhance: function(t) {
            t.addClass("hide_content_with_text"), t.find(".play_button").on("mousedown touchstart", function() {
                pageflow.hideText.activate()
            }), t.find(".close_button").on("click", function(t) {
                pageflow.hideText.deactivate(), t.stopPropagation()
            })
        },
        prepare: function(t, e) {
            this._ensureIframe(t, e)
        },
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function(t, e) {
            this._ensureIframe(t, e)
        },
        activated: function() {},
        deactivating: function() {},
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find("p").html(e.get("text") || ""), this.updateInfoBox(t, e), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            }), e.hasChanged("panorama_url") && (this._ensureIframeCreated(t), this.iframe.attr("src", e.get("panorama_url")))
        },
        _ensureIframe: function(t, e) {
            !this.iframe && e.panorama_url && (this._ensureIframeCreated(t), this.iframe.attr("src", e.panorama_url), $(this.iframe).load(function() {
                $(this).contents().find("body").keydown(function(t) {
                    27 == t.keyCode && pageflow.hideText.deactivate()
                })
            }))
        },
        _ensureIframeCreated: function(t) {
            this.iframe || (this.iframe = $('<iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;" name="°" scrolling="no" frameborder="0" align="aus" marginheight="0" marginwidth="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'), t.find(".iframeWrapper").prepend(this.iframe))
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "fallback_image_id"
                    }
                }
            }
        }
    }, pageflow.commonPageCssClasses, pageflow.infoBox)), pageflow.externalLinks = pageflow.externalLinks || {}, pageflow.pageType.register("external_links", _.extend({
        prepareNextPageTimeout: 0,
        enhance: function(t) {
            var e = t.find(".ext-links"),
                n = this,
                i = t.find("#horizontal_scroller");
            t.find(".contentWrapper"), this.scroller = new IScroll(e[0], {
                mouseWheel: !0,
                bounce: !1,
                keyBindings: !0,
                scrollX: !0,
                scrollY: !1,
                probeType: 2,
                eventPassthrough: !0
            }), this.scroller.checkDisable = function() {
                n._checkForIScroll(e, i, t.find(".arrow-forward"), t.find(".arrow-back"), t)
            }, e.data("scroller", this.scroller), n.scroller.on("scroll", function() {
                n.scroller.checkDisable()
            }), t.find(".arrow-back").on("click", function(t) {
                var i = Math.round(n.scroller.x / -260 - e.width() / 260 / 2, 10);
                return 1 >= i ? n.scroller.scrollTo(0, 0, 500, IScroll.ease.quadratic) : n.scroller.scrollToElement($(".page.active #horizontal_scroller a")[i], 500, 0, 0, IScroll.ease.quadratic), n.scroller.checkDisable(), t.stopPropagation(), !1
            }), t.find(".arrow-forward").on("click", function(t) {
                var o = Math.round(n.scroller.x / -260 + e.width() / 260 / 2, 10);
                return o == i.find("a").length - 1 ? n.scroller.scrollTo(n.scroller.maxScrollX, 0, 500, IScroll.ease.quadratic) : n.scroller.scrollToElement($(".page.active #horizontal_scroller a")[o]), n.scroller.checkDisable(), t.stopPropagation(), !1
            })
        },
        resize: function() {
            this.scroller.refresh(), this.scroller.checkDisable()
        },
        _checkForIScroll: function(t, e, n, i, o) {
            o.width() <= 700 ? this.scroller.disable() : e.width() <= t.width() ? (this.scroller.disable(), n.css("display", "none"), i.css("display", "none")) : (this.scroller.enable(), this.scroller.x == this.scroller.maxScrollX ? n.css("display", "none") : n.css("display", "block"), 0 === this.scroller.x ? i.css("display", "none") : i.css("display", "block"))
        },
        prepare: function() {},
        preload: function(t) {
            return pageflow.preload.backgroundImage(t.find(".background_image"))
        },
        activating: function() {
            this.scroller.refresh(), this.scroller.checkDisable()
        },
        activated: function() {},
        deactivating: function() {},
        deactivated: function() {},
        update: function(t, e) {
            t.find("h2 .tagline").text(e.get("tagline") || ""), t.find("h2 .title").text(e.get("title") || ""), t.find("h2 .subtitle").text(e.get("subtitle") || ""), t.find(".contentText p").html(e.get("text") || ""), this.updateCommonPageCssClasses(t, e), t.find(".shadow").css({
                opacity: e.get("gradient_opacity") / 100
            }), this.scroller.refresh(), this.scroller.checkDisable()
        },
        embeddedEditorViews: function() {
            return {
                ".background_image": {
                    view: pageflow.BackgroundImageEmbeddedView,
                    options: {
                        propertyName: "background_image_id"
                    }
                },
                ".ext-links": {
                    view: pageflow.externalLinks.ListEmbeddedView,
                    options: {
                        propertyName: "linked_external_site_perma_ids"
                    }
                }
            }
        }
    }, pageflow.commonPageCssClasses));