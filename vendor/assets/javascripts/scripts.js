var app, global, canHighlight;
(function(n, t) {
    function gt(n) {
        var t = n.length
          , r = i.type(n);
        return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }
    function te(n) {
        var t = ni[n] = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0
        }
        ),
        t
    }
    function ur(n, r, u, f) {
        if (i.acceptData(n)) {
            var h, o, c = i.expando, l = n.nodeType, s = l ? i.cache : n, e = l ? n[c] : n[c] && c;
            if (e && s[e] && (f || s[e].data) || u !== t || "string" != typeof r)
                return e || (e = l ? n[c] = b.pop() || i.guid++ : c),
                s[e] || (s[e] = l ? {} : {
                    toJSON: i.noop
                }),
                ("object" == typeof r || "function" == typeof r) && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)),
                o = s[e],
                f || (o.data || (o.data = {}),
                o = o.data),
                u !== t && (o[i.camelCase(r)] = u),
                "string" == typeof r ? (h = o[r],
                null  == h && (h = o[i.camelCase(r)])) : h = o,
                h
        }
    }
    function fr(n, t, r) {
        if (i.acceptData(n)) {
            var e, o, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                    t = (t in e) ? [t] : t.split(" ")),
                    o = t.length; o--; )
                        delete e[t[o]];
                    if (r ? !ti(e) : !i.isEmptyObject(e))
                        return
                }
                (r || (delete u[f].data,
                ti(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null )
            }
        }
    }
    function er(n, r, u) {
        if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(rr, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            "string" == typeof u) {
                try {
                    u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null  : +u + "" === u ? +u : ir.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function ti(n) {
        for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function ct() {
        return !0
    }
    function g() {
        return !1
    }
    function cr() {
        try {
            return r.activeElement
        } catch (n) {}
    }
    function ar(n, t) {
        do
            n = n[t];
        while (n && 1 !== n.nodeType);return n
    }
    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            }
            );
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            }
            );
        if ("string" == typeof t) {
            if (oe.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        }
        )
    }
    function vr(n) {
        var i = yr.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function gr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function nu(n) {
        return n.type = (null  !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function tu(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function hi(n, t) {
        for (var u, r = 0; null  != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function iu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; o > f; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function be(n, t) {
        var r, f, u;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(),
            !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events)
                    i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando)
            }
            "script" === r && t.text !== n.text ? (nu(t).text = n.text,
            tu(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML),
            i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
        }
    }
    function u(n, r) {
        var s, e, h = 0, f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f)
            for (f = [],
            s = n.childNodes || n; null  != (e = s[h]); h++)
                !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }
    function ke(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function ou(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = eu.length; i--; )
            if (t = eu[i] + r,
            t in n)
                return t;
        return u
    }
    function ut(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
    function su(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
            r = n[u],
            r.style && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || "none" !== f || (r.style.display = ""),
            "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", au(r.nodeName)))) : e[u] || (o = ut(r),
            (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++)
            r = n[u],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function hu(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function cu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + p[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
        return o
    }
    function lu(n, t, r) {
        var e = !0
          , u = "width" === t ? n.offsetWidth : n.offsetHeight
          , f = v(n)
          , o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (0 >= u || null  == u) {
            if (u = y(n, t, f),
            (0 > u || null  == u) && (u = n.style[t]),
            lt.test(u))
                return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + cu(n, t, r || (o ? "border" : "content"), e, f) + "px"
    }
    function au(n) {
        var u = r
          , t = uu[n];
        return t || (t = vu(n, u),
        "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement),
        u = (rt[0].contentWindow || rt[0].contentDocument).document,
        u.write("<!doctype html><html><body>"),
        u.close(),
        t = vu(n, u),
        rt.detach()),
        uu[n] = t),
        t
    }
    function vu(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body)
          , u = i.css(r[0], "display");
        return r.remove(),
        u
    }
    function li(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || fo.test(n) ? u(n, i) : li(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            }
            );
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                li(n + "[" + f + "]", t[f], r, u)
    }
    function gu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u[0] ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function nf(n, r, u, f) {
        function o(h) {
            var c;
            return e[h] = !0,
            i.each(n[h] || [], function(n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h),
                o(h),
                !1)
            }
            ),
            c
        }
        var e = {}
          , s = n === yi;
        return o(r.dataTypes[0]) || !e["*"] && o("*")
    }
    function pi(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f),
        n
    }
    function ao(n, i, r) {
        for (var s, o, f, e, h = n.contents, u = n.dataTypes; "*" === u[0]; )
            u.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (e in h)
                if (h[e] && h[e].test(o)) {
                    u.unshift(e);
                    break
                }
        if (u[0] in r)
            f = u[0];
        else {
            for (e in r) {
                if (!u[0] || n.converters[e + " " + u[0]]) {
                    f = e;
                    break
                }
                s || (s = e)
            }
            f = f || s
        }
        return f ? (f !== u[0] && u.unshift(f),
        r[f]) : t
    }
    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function rf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function yo() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function ff() {
        return setTimeout(function() {
            it = t
        }
        ),
        it = i.now()
    }
    function ef(n, t, i) {
        for (var u, f = (ft[t] || []).concat(ft["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function of(n, t, r) {
        var h, e, o = 0, l = pt.length, f = i.Deferred().always(function() {
            delete c.elem
        }
        ), c = function() {
            if (e)
                return !1;
            for (var s = it || ff(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t : (f.resolveWith(n, [u]),
            !1)
        }
        , u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: it || ff(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), s = u.props;
        for (bo(s, u.opts.specialEasing); l > o; o++)
            if (h = pt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, ef, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function bo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function ko(n, t, r) {
        var u, a, v, c, e, y, s = this, l = {}, o = n.style, h = n.nodeType && ut(n), f = i._data(n, "fxshow");
        r.queue || (e = i._queueHooks(n, "fx"),
        null  == e.unqueued && (e.unqueued = 0,
        y = e.empty.fire,
        e.empty.fire = function() {
            e.unqueued || y()
        }
        ),
        e.unqueued++,
        s.always(function() {
            s.always(function() {
                e.unqueued--;
                i.queue(n, "fx").length || e.empty.fire()
            }
            )
        }
        ));
        1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [o.overflow, o.overflowX, o.overflowY],
        "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== au(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        r.overflow && (o.overflow = "hidden",
        i.support.shrinkWrapBlocks || s.always(function() {
            o.overflow = r.overflow[0];
            o.overflowX = r.overflow[1];
            o.overflowY = r.overflow[2]
        }
        ));
        for (u in t)
            if (a = t[u],
            po.exec(a)) {
                if (delete t[u],
                v = v || "toggle" === a,
                a === (h ? "hide" : "show"))
                    continue;l[u] = f && f[u] || i.style(n, u)
            }
        if (!i.isEmptyObject(l)) {
            f ? "hidden" in f && (h = f.hidden) : f = i._data(n, "fxshow", {});
            v && (f.hidden = !h);
            h ? i(n).show() : s.done(function() {
                i(n).hide()
            }
            );
            s.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in l)
                    i.style(n, t, l[t])
            }
            );
            for (u in l)
                c = ef(h ? f[u] : 0, u, s),
                u in f || (f[u] = c.start,
                h && (c.end = c.start,
                c.start = "width" === u || "height" === u ? 1 : 0))
        }
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n,t,i,r,u)
    }
    function wt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = p[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function sf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var et, bi, o = typeof t, hf = n.location, r = n.document, ki = r.documentElement, cf = n.jQuery, lf = n.$, ot = {}, b = [], bt = "1.10.2", di = b.concat, kt = b.push, l = b.slice, gi = b.indexOf, af = ot.toString, k = ot.hasOwnProperty, dt = bt.trim, i = function(n, t) {
        return new i.fn.init(n,t,bi)
    }
    , st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, s = /\S+/g, vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, yf = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, nr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pf = /^[\],:{}\s]*$/, wf = /(?:^|:|,)(?:\s*\[)+/g, bf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, kf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, df = /^-ms-/, gf = /-([\da-z])/gi, ne = function(n, t) {
        return t.toUpperCase()
    }
    , h = function(n) {
        (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (tr(),
        i.ready())
    }
    , tr = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1),
        n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h),
        n.detachEvent("onload", h))
    }
    , ni, ir, rr, wi, at, nt, tt, tf, vt;
    i.fn = i.prototype = {
        jquery: bt,
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n)
                return this;
            if ("string" == typeof n) {
                if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null , n, null ] : yf.exec(n),
                !e || !e[1] && u)
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                if (e[1]) {
                    if (u = u instanceof i ? u[0] : u,
                    i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)),
                    nr.test(e[1]) && i.isPlainObject(u))
                        for (e in u)
                            i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                    return this
                }
                if (o = r.getElementById(e[2]),
                o && o.parentNode) {
                    if (o.id !== e[2])
                        return f.find(n);
                    this.length = 1;
                    this[0] = o
                }
                return this.context = r,
                this.selector = n,
                this
            }
            return n.nodeType ? (this.context = this[0] = n,
            this.length = 1,
            this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
            this.context = n.context),
            i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null  == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: kt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var u, o, r, e, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof n && (c = n,
        n = arguments[1] || {},
        f = 2),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        l === f && (n = this,
        --f); l > f; f++)
            if (null  != (s = arguments[f]))
                for (e in s)
                    u = n[e],
                    r = s[e],
                    n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1,
                    h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                    n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (bt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = lf),
            t && n.jQuery === i && (n.jQuery = cf),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body)
                    return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        }
        ,
        isWindow: function(n) {
            return null  != n && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null  == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[af.call(n)] || "object" : typeof n
        },
        isPlainObject: function(n) {
            var r;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !k.call(n, "constructor") && !k.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (i.support.ownLast)
                for (r in n)
                    return k.call(n, r);
            for (r in n)
                ;
            return r === t || k.call(n, r)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        error: function(n) {
            throw Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || "string" != typeof n)
                return null ;
            "boolean" == typeof t && (u = t,
            t = !1);
            t = t || r;
            var f = nr.exec(n)
              , e = !u && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
            e && i(e).remove(),
            i.merge([], f.childNodes))
        },
        parseJSON: function(r) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null  === r ? r : "string" == typeof r && (r = i.trim(r),
            r && pf.test(r.replace(bf, "@").replace(kf, "]").replace(wf, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r),
            t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || "string" != typeof r)
                return null ;
            try {
                n.DOMParser ? (f = new DOMParser,
                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                u.async = "false",
                u.loadXML(r))
            } catch (e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(df, "ms-").replace(gf, ne)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, f = n.length, e = gt(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: dt && !dt.call("﻿ ") ? function(n) {
            return null  == n ? "" : dt.call(n)
        }
         : function(n) {
            return null  == n ? "" : (n + "").replace(vf, "")
        }
        ,
        makeArray: function(n, t) {
            var r = t || [];
            return null  != n && (gt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : kt.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (gi)
                    return gi.call(t, n, i);
                for (r = t.length,
                i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length
              , u = n.length
              , r = 0;
            if ("number" == typeof f)
                for (; f > r; r++)
                    n[u++] = i[r];
            else
                while (i[r] !== t)
                    n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var u, f = [], r = 0, e = n.length;
            for (i = !!i; e > r; r++)
                u = !!t(n[r], r),
                i !== u && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = gt(n), f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i),
                    null  != u && (f[f.length] = u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null  != u && (f[f.length] = u);
            return di.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, u, e;
            return "string" == typeof r && (e = n[r],
            r = n,
            n = e),
            i.isFunction(n) ? (f = l.call(arguments, 2),
            u = function() {
                return n.apply(r || this, f.concat(l.call(arguments)))
            }
            ,
            u.guid = n.guid = n.guid || i.guid++,
            u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0
              , l = n.length
              , c = null  == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u)
                    i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0,
            i.isFunction(f) || (s = !0),
            c && (s ? (r.call(n, f),
            r = null ) : (c = r,
            r = function(n, t, r) {
                return c.call(i(n), r)
            }
            )),
            r))
                for (; l > h; h++)
                    r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t)
                e[u] = n.style[u],
                n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t)
                n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function(t) {
        if (!et)
            if (et = i.Deferred(),
            "complete" === r.readyState)
                setTimeout(i.ready);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", h, !1),
                n.addEventListener("load", h, !1);
            else {
                r.attachEvent("onreadystatechange", h);
                n.attachEvent("onload", h);
                var u = !1;
                try {
                    u = null  == n.frameElement && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        tr();
                        i.ready()
                    }
                }
                ()
            }
        return et.promise(t)
    }
    ;
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    }
    );
    bi = i(r),
    function(n, t) {
        function u(n, t, i, r) {
            var p, u, f, l, w, a, k, c, g, d;
            if ((t ? t.ownerDocument || t : y) !== s && nt(t),
            t = t || s,
            i = i || [],
            !n || "string" != typeof n)
                return i;
            if (1 !== (l = t.nodeType) && 9 !== l)
                return [];
            if (v && !r) {
                if (p = or.exec(n))
                    if (f = p[1]) {
                        if (9 === l) {
                            if (u = t.getElementById(f),
                            !u || !u.parentNode)
                                return i;
                            if (u.id === f)
                                return i.push(u),
                                i
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f)
                            return i.push(u),
                            i
                    } else {
                        if (p[2])
                            return b.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((f = p[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(f)),
                            i
                    }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = k = o,
                    g = t,
                    d = 9 === l && n,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (a = pt(n),
                        (k = t.getAttribute("id")) ? c = k.replace(cr, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        w = a.length; w--; )
                            a[w] = c + wt(a[w]);
                        g = ti.test(n) && t.parentNode || t;
                        d = a.join(",")
                    }
                    if (d)
                        try {
                            return b.apply(i, g.querySelectorAll(d)),
                            i
                        } catch (tt) {} finally {
                            k || t.removeAttribute("id")
                        }
                }
            }
            return pr(n.replace(vt, "$1"), t, i, r)
        }
        function ri() {
            function n(i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()],
                n[i] = u
            }
            var t = [];
            return n
        }
        function c(n) {
            return n[o] = !0,
            n
        }
        function l(n) {
            var t = s.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ui(n, t) {
            for (var u = n.split("|"), i = n.length; i--; )
                r.attrHandle[u[i]] = t
        }
        function bi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || vi) - (~n.sourceIndex || vi);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function rt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                }
                )
            }
            )
        }
        function ki() {}
        function pt(n, t) {
            var e, f, s, o, i, h, c, l = li[n + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (i = n,
            h = [],
            c = r.preFilter; i; ) {
                (!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0].length) || i),
                h.push(s = []));
                e = !1;
                (f = rr.exec(i)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(vt, " ")
                }),
                i = i.slice(e.length));
                for (o in r.filter)
                    (f = yt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    i = i.slice(e.length));
                if (!e)
                    break
            }
            return t ? i.length : i ? u.error(n) : li(n, h).slice(0)
        }
        function wt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function fi(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , f = di++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
             : function(t, i, e) {
                var h, s, c, l = p + " " + f;
                if (e) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, e))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u)
                            if (c = t[o] || (t[o] = {}),
                            (s = c[r]) && s[0] === l) {
                                if ((h = s[1]) === !0 || h === ht)
                                    return h === !0
                            } else if (s = c[r] = [l],
                            s[1] = n(t, i, e) || ht,
                            s[1] === !0)
                                return !0
            }
        }
        function ei(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
             : n[0]
        }
        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null  != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function oi(n, t, i, r, u, f) {
            return r && !r[o] && (r = oi(r)),
            u && !u[o] && (u = oi(u, f)),
            c(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, k = f || yr(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? k : bt(k, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = bt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null , h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? it.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = bt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null , e, h, s) : b.apply(e, h)
            }
            )
        }
        function si(n) {
            for (var s, u, i, e = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = fi(function(n) {
                return n === s
            }
            , c, !0), a = fi(function(n) {
                return it.call(s, n) > -1
            }
            , c, !0), f = [function(n, t, i) {
                return !h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }
            ]; e > t; t++)
                if (u = r.relative[n[t].type])
                    f = [fi(ei(f), u)];
                else {
                    if (u = r.filter[n[t].type].apply(null , n[t].matches),
                    u[o]) {
                        for (i = ++t; e > i; i++)
                            if (r.relative[n[i].type])
                                break;
                        return oi(t > 1 && ei(f), t > 1 && wt(n.slice(0, t - 1).concat({
                            value: " " === n[t - 2].type ? "*" : ""
                        })).replace(vt, "$1"), u, i > t && si(n.slice(t, i)), e > i && si(n = n.slice(i)), e > i && wt(n))
                    }
                    f.push(u)
                }
            return ei(f)
        }
        function vr(n, t) {
            var f = 0
              , i = t.length > 0
              , e = n.length > 0
              , o = function(o, h, c, l, a) {
                var y, g, k, w = [], d = 0, v = "0", nt = o && [], tt = null  != a, it = lt, ut = o || e && r.find.TAG("*", a && h.parentNode || h), rt = p += null  == it ? 1 : Math.random() || .1;
                for (tt && (lt = h !== s && h,
                ht = f); null  != (y = ut[v]); v++) {
                    if (e && y) {
                        for (g = 0; k = n[g++]; )
                            if (k(y, h, c)) {
                                l.push(y);
                                break
                            }
                        tt && (p = rt,
                        ht = ++f)
                    }
                    i && ((y = !k && y) && d--,
                    o && nt.push(y))
                }
                if (d += v,
                i && v !== d) {
                    for (g = 0; k = t[g++]; )
                        k(nt, w, h, c);
                    if (o) {
                        if (d > 0)
                            while (v--)
                                nt[v] || w[v] || (w[v] = nr.call(l));
                        w = bt(w)
                    }
                    b.apply(l, w);
                    tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
                }
                return tt && (p = rt,
                lt = it),
                nt
            }
            ;
            return i ? c(o) : o
        }
        function yr(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++)
                u(n, t[r], i);
            return i
        }
        function pr(n, t, i, u) {
            var s, f, o, c, l, h = pt(n);
            if (!u && 1 === h.length) {
                if (f = h[0] = h[0].slice(0),
                f.length > 2 && "ID" === (o = f[0]).type && e.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(k, d), t) || [])[0],
                    !t)
                        return i;
                    n = n.slice(f.shift().value.length)
                }
                for (s = yt.needsContext.test(n) ? 0 : f.length; s--; ) {
                    if (o = f[s],
                    r.relative[c = o.type])
                        break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(s, 1),
                        n = u.length && wt(f),
                        !n)
                            return b.apply(i, u),
                            i;
                        break
                    }
                }
            }
            return kt(n, h)(u, t, !v, i, ti.test(n)),
            i
        }
        var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot, o = "sizzle" + -new Date, y = n.document, p = 0, di = 0, ci = ri(), li = ri(), ai = ri(), ft = !1, dt = function(n, t) {
            return n === t ? (ft = !0,
            0) : 0
        }
        , st = typeof t, vi = -2147483648, gi = {}.hasOwnProperty, w = [], nr = w.pop, tr = w.push, b = w.push, yi = w.slice, it = w.indexOf || function(n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n)
                    return t;
            return -1
        }
        , gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", f = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", pi = et.replace("w", "w#"), wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" + f + "*\\]", ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wi.replace(3, 8) + ")*)|.*)\\)|)", vt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"), ir = RegExp("^" + f + "*," + f + "*"), rr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"), ti = RegExp(f + "*[+~]"), ur = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"), fr = RegExp(ni), er = RegExp("^" + pi + "$"), yt = {
            ID: RegExp("^#(" + et + ")"),
            CLASS: RegExp("^\\.(" + et + ")"),
            TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + wi),
            PSEUDO: RegExp("^" + ni),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
            bool: RegExp("^(?:" + gt + ")$", "i"),
            needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
        }, ii = /^[^{]+\{\s*\[native \w/, or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sr = /^(?:input|select|textarea|button)$/i, hr = /^h\d$/i, cr = /'|\\/g, k = RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"), d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        }
        ;
        try {
            b.apply(w = yi.call(y.childNodes), y.childNodes);
            w[y.childNodes.length].nodeType
        } catch (wr) {
            b = {
                apply: w.length ? function(n, t) {
                    tr.apply(n, yi.call(t))
                }
                 : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        hi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ;
        e = u.support = {};
        nt = u.setDocument = function(n) {
            var i = n ? n.ownerDocument || n : y
              , u = i.defaultView;
            return i !== s && 9 === i.nodeType && i.documentElement ? (s = i,
            a = i.documentElement,
            v = !hi(i),
            u && u.attachEvent && u !== u.top && u.attachEvent("onbeforeunload", function() {
                nt()
            }
            ),
            e.attributes = l(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }
            ),
            e.getElementsByTagName = l(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }
            ),
            e.getElementsByClassName = l(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }
            ),
            e.getById = l(function(n) {
                return a.appendChild(n).id = o,
                !i.getElementsByName || !i.getElementsByName(o).length
            }
            ),
            e.getById ? (r.find.ID = function(n, t) {
                if (typeof t.getElementById !== st && v) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete r.find.ID,
            r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            r.find.TAG = e.getElementsByTagName ? function(n, i) {
                return typeof i.getElementsByTagName !== st ? i.getElementsByTagName(n) : t
            }
             : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            r.find.CLASS = e.getElementsByClassName && function(n, i) {
                return typeof i.getElementsByClassName !== st && v ? i.getElementsByClassName(n) : t
            }
            ,
            tt = [],
            h = [],
            (e.qsa = ii.test(i.querySelectorAll)) && (l(function(n) {
                n.innerHTML = "<select><option selected=''><\/option><\/select>";
                n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                n.querySelectorAll(":checked").length || h.push(":checked")
            }
            ),
            l(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("t", "");
                n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                h.push(",.*:")
            }
            )),
            (e.matchesSelector = ii.test(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function(n) {
                e.disconnectedMatch = at.call(n, "div");
                at.call(n, "[s!='']:x");
                tt.push("!=", ni)
            }
            ),
            h = h.length && RegExp(h.join("|")),
            tt = tt.length && RegExp(tt.join("|")),
            ot = ii.test(a.contains) || a.compareDocumentPosition ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
             : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            dt = a.compareDocumentPosition ? function(n, t) {
                if (n === t)
                    return ft = !0,
                    0;
                var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t);
                return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(y, n) ? -1 : t === i || ot(y, t) ? 1 : g ? it.call(g, n) - it.call(g, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
            }
             : function(n, t) {
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (n === t)
                    return ft = !0,
                    0;
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, t) : 0;
                if (o === s)
                    return bi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? bi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0
            }
            ,
            i) : s
        }
        ;
        u.matches = function(n, t) {
            return u(n, null , null , t)
        }
        ;
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && nt(n),
            t = t.replace(ur, "='$1']"),
            !(!e.matchesSelector || !v || tt && tt.test(t) || h && h.test(t)))
                try {
                    var i = at.call(n, t);
                    if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (r) {}
            return u(t, s, null , [n]).length > 0
        }
        ;
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && nt(n),
            ot(n, t)
        }
        ;
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()]
              , u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null  : u
        }
        ;
        u.error = function(n) {
            throw Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ft = !e.detectDuplicates,
            g = !e.sortStable && n.slice(0),
            n.sort(dt),
            ft) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return n
        }
        ;
        ct = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += ct(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                for (; r = n[u]; u++)
                    i += ct(r);
            return i
        }
        ;
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: yt,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d),
                    n[3] = (n[4] || n[5] || "").replace(k, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var r, i = !n[5] && n[2];
                    return yt.CHILD.test(n[0]) ? null  : (n[3] && n[4] !== t ? n[2] = n[4] : i && fr.test(i) && (r = pt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r),
                    n[2] = i.slice(0, r)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                     : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ci[n + " "];
                    return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ci(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null  == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , e = "last" !== n.slice(-4)
                      , f = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                     : function(t, i, h) {
                        var a, k, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling", y = t.parentNode, g = f && t.nodeName.toLowerCase(), d = !h && !f;
                        if (y) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [e ? y.firstChild : y.lastChild],
                            e && d) {
                                for (k = y[o] || (y[o] = {}),
                                a = k[n] || [],
                                v = a[0] === p && a[1],
                                l = a[0] === p && a[2],
                                c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [p, v, l];
                                        break
                                    }
                            } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p)
                                l = a[1];
                            else
                                while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || 0 == l % r && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t],
                    r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) {
                        for (var u, f = i(n, t), e = f.length; e--; )
                            u = it.call(n, f[e]),
                            n[u] = !(r[u] = f[e])
                    }
                    ) : function(n) {
                        return i(n, 0, f)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: c(function(n) {
                    var i = []
                      , r = []
                      , t = kt(n.replace(vt, "$1"));
                    return t[o] ? c(function(n, i, r, u) {
                        for (var e, o = t(n, null , u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }
                    ) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null , f, r),
                        !r.pop()
                    }
                }
                ),
                has: c(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }
                ),
                contains: c(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ct(t)).indexOf(n) > -1
                    }
                }
                ),
                lang: c(function(n) {
                    return er.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(k, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }
                ),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === a
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !r.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null  == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                },
                first: rt(function() {
                    return [0]
                }
                ),
                last: rt(function(n, t) {
                    return [t - 1]
                }
                ),
                eq: rt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }
                ),
                even: rt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }
                ),
                odd: rt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }
                ),
                lt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }
                ),
                gt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; t > ++r; )
                        n.push(r);
                    return n
                }
                )
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (ut in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[ut] = lr(ut);
        for (ut in {
            submit: !0,
            reset: !0
        })
            r.pseudos[ut] = ar(ut);
        ki.prototype = r.filters = r.pseudos;
        r.setFilters = new ki;
        kt = u.compile = function(n, t) {
            var r, u = [], f = [], i = ai[n + " "];
            if (!i) {
                for (t || (t = pt(n)),
                r = t.length; r--; )
                    i = si(t[r]),
                    i[o] ? u.push(i) : f.push(i);
                i = ai(n, vr(f, u))
            }
            return i
        }
        ;
        e.sortStable = o.split("").sort(dt).join("") === o;
        e.detectDuplicates = ft;
        nt();
        e.sortDetached = l(function(n) {
            return 1 & n.compareDocumentPosition(s.createElement("div"))
        }
        );
        l(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }
        ) || ui("type|href|height|width", function(n, i, r) {
            return r ? t : n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        }
        );
        e.attributes && l(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }
        ) || ui("value", function(n, i, r) {
            return r || "input" !== n.nodeName.toLowerCase() ? t : n.defaultValue
        }
        );
        l(function(n) {
            return null  == n.getAttribute("disabled")
        }
        ) || ui(gt, function(n, i, r) {
            var u;
            return r ? t : (u = n.getAttributeNode(i)) && u.specified ? u.value : n[i] === !0 ? i.toLowerCase() : null
        }
        );
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains
    }
    (n);
    ni = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ni[n] || te(n) : i.extend({}, n);
        var s, f, c, e, o, l, r = [], u = !n.once && [], a = function(t) {
            for (f = n.memory && t,
            c = !0,
            o = l || 0,
            l = 0,
            e = r.length,
            s = !0; r && e > o; o++)
                if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                    f = !1;
                    break
                }
            s = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        }
        , h = {
            add: function() {
                if (r) {
                    var t = r.length;
                    (function u(t) {
                        i.each(t, function(t, f) {
                            var e = i.type(f);
                            "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                        }
                        )
                    }
                    )(arguments);
                    s ? e = r.length : f && (l = t,
                    a(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1),
                        s && (e >= u && e--,
                        o >= u && o--)
                }
                ),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
            },
            empty: function() {
                return r = [],
                e = 0,
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(n, t) {
                return !r || c && !u || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                s ? u.push(t) : a(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var s = e[0]
                              , o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            }
                            )
                        }
                        );
                        n = null
                    }
                    ).promise()
                },
                promise: function(n) {
                    return null  != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }
                , u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }
            ),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = l.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }
            , o, c, s;
            if (r > 1)
                for (o = Array(r),
                c = Array(r),
                s = Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.support = function(t) {
        var a, e, f, h, c, l, v, y, s, u = r.createElement("div");
        if (u.setAttribute("className", "t"),
        u.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>",
        a = u.getElementsByTagName("*") || [],
        e = u.getElementsByTagName("a")[0],
        !e || !e.style || !a.length)
            return t;
        h = r.createElement("select");
        l = h.appendChild(r.createElement("option"));
        f = u.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        t.getSetAttribute = "t" !== u.className;
        t.leadingWhitespace = 3 === u.firstChild.nodeType;
        t.tbody = !u.getElementsByTagName("tbody").length;
        t.htmlSerialize = !!u.getElementsByTagName("link").length;
        t.style = /top/.test(e.getAttribute("style"));
        t.hrefNormalized = "/a" === e.getAttribute("href");
        t.opacity = /^0.5/.test(e.style.opacity);
        t.cssFloat = !!e.style.cssFloat;
        t.checkOn = !!f.value;
        t.optSelected = l.selected;
        t.enctype = !!r.createElement("form").enctype;
        t.html5Clone = "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML;
        t.inlineBlockNeedsLayout = !1;
        t.shrinkWrapBlocks = !1;
        t.pixelPosition = !1;
        t.deleteExpando = !0;
        t.noCloneEvent = !0;
        t.reliableMarginRight = !0;
        t.boxSizingReliable = !0;
        f.checked = !0;
        t.noCloneChecked = f.cloneNode(!0).checked;
        h.disabled = !0;
        t.optDisabled = !l.disabled;
        try {
            delete u.test
        } catch (p) {
            t.deleteExpando = !1
        }
        f = r.createElement("input");
        f.setAttribute("value", "");
        t.input = "" === f.getAttribute("value");
        f.value = "t";
        f.setAttribute("type", "radio");
        t.radioValue = "t" === f.value;
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = r.createDocumentFragment();
        c.appendChild(f);
        t.appendChecked = f.checked;
        t.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.attachEvent && (u.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }
        ),
        u.cloneNode(!0).click());
        for (s in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            u.setAttribute(v = "on" + s, "t"),
            t[s + "Bubbles"] = v in n || u.attributes[v].expando === !1;
        u.style.backgroundClip = "content-box";
        u.cloneNode(!0).style.backgroundClip = "";
        t.clearCloneStyle = "content-box" === u.style.backgroundClip;
        for (s in i(t))
            break;
        return t.ownLast = "0" !== s,
        i(function() {
            var h, e, f, c = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = r.getElementsByTagName("body")[0];
            s && (h = r.createElement("div"),
            h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            s.appendChild(h).appendChild(u),
            u.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            f = u.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            y = 0 === f[0].offsetHeight,
            f[0].style.display = "",
            f[1].style.display = "none",
            t.reliableHiddenOffsets = y && 0 === f[0].offsetHeight,
            u.innerHTML = "",
            u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            i.swap(s, null  != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === u.offsetWidth
            }
            ),
            n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(u, null ) || {}).top,
            t.boxSizingReliable = "4px" === (n.getComputedStyle(u, null ) || {
                width: "4px"
            }).width,
            e = u.appendChild(r.createElement("div")),
            e.style.cssText = u.style.cssText = c,
            e.style.marginRight = e.style.width = "0",
            u.style.width = "1px",
            t.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null ) || {}).marginRight)),
            typeof u.style.zoom !== o && (u.innerHTML = "",
            u.style.cssText = c + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === u.offsetWidth,
            u.style.display = "block",
            u.innerHTML = "<div><\/div>",
            u.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== u.offsetWidth,
            t.inlineBlockNeedsLayout && (s.style.zoom = 1)),
            s.removeChild(h),
            h = u = f = e = null )
        }
        ),
        a = h = c = l = e = f = null ,
        t
    }
    ({});
    ir = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    rr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ti(n)
        },
        data: function(n, t, i) {
            return ur(n, t, i)
        },
        removeData: function(n, t) {
            return fr(n, t)
        },
        _data: function(n, t, i) {
            return ur(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return fr(n, t, !0)
        },
        acceptData: function(n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType)
                return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var e, f, o = null , s = 0, u = this[0];
            if (n === t) {
                if (this.length && (o = i.data(u),
                1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                    for (e = u.attributes; e.length > s; s++)
                        f = e[s].name,
                        0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)),
                        er(u, f, o[f]));
                    i._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }
            ) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, r)
            }
            ) : u ? er(u, n, i.data(u, n)) : null
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            }
            )
        }
    });
    i.extend({
        queue: function(n, r, u) {
            var f;
            return n ? (r = (r || "fx") + "queue",
            f = i._data(n, r),
            u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)),
            f || []) : t
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            }
            ;
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                }
                )
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n,
            n = "fx",
            u--),
            u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            }
            )
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            }
            )
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            }
            )
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            }
            ;
            for ("string" != typeof n && (r = n,
            n = t),
            n = n || "fx"; s--; )
                u = i._data(f[s], n + "queueHooks"),
                u && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(r)
        }
    });
    var d, or, ii = /[\t\r\n\f]/g, ie = /\r/g, re = /^(?:input|select|textarea|button|object)$/i, ue = /^(?:a|area)$/i, ri = /^(?:checked|selected)$/i, a = i.support.getSetAttribute, ht = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            }
            )
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) {}
            }
            )
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0, h = this.length, c = "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                }
                );
            if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : " ")) {
                        for (o = 0; u = e[o++]; )
                            0 > r.indexOf(" " + u + " ") && (r += u + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, r, u, o, f = 0, h = this.length, c = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                }
                );
            if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : "")) {
                        for (o = 0; u = e[o++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        t.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }
            ) : this.each(function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(s) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ii, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
            this.each(function(u) {
                var f;
                1 === this.nodeType && (f = e ? n.call(this, u, i(this).val()) : n,
                null  == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return null  == n ? "" : n + ""
                }
                )),
                r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            }
            )) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value,
            "string" == typeof u ? u.replace(ie, "") : null  == u ? "" : u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null  != t ? t : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null  : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                        if (t = o[f],
                        !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null  !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            u)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        r = f[o],
                        (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1),
                    e
                }
            }
        },
        attr: function(n, r, u) {
            var f, e, s = n.nodeType;
            if (n && 3 !== s && 8 !== s && 2 !== s)
                return typeof n.getAttribute === o ? i.prop(n, r, u) : (1 === s && i.isXMLDoc(n) || (r = r.toLowerCase(),
                f = i.attrHooks[r] || (i.expr.match.bool.test(r) ? or : d)),
                u === t ? f && "get" in f && null  !== (e = f.get(n, r)) ? e : (e = i.find.attr(n, r),
                null  == e ? t : e) : null  !== u ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""),
                u) : (i.removeAttr(n, r),
                t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? ht && a || !ri.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(a ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null  !== (e = f.get(n, r)) ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : re.test(n.nodeName) || ue.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    or = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : ht && a || !ri.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = ht && a || !ri.test(r) ? function(n, r, f) {
            var e = i.expr.attrHandle[r]
              , o = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null ;
            return i.expr.attrHandle[r] = e,
            o
        }
         : function(n, r, u) {
            return u ? t : n[i.camelCase("default-" + r)] ? r.toLowerCase() : null
        }
    }
    );
    ht && a || (i.attrHooks.value = {
        set: function(n, r, u) {
            return i.nodeName(n, "input") ? (n.defaultValue = r,
            t) : d && d.set(n, r, u)
        }
    });
    a || (d = {
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)),
            u.value = i += "",
            "value" === r || i === n.getAttribute(r) ? i : t
        }
    },
    i.expr.attrHandle.id = i.expr.attrHandle.name = i.expr.attrHandle.coords = function(n, i, r) {
        var u;
        return r ? t : (u = n.getAttributeNode(i)) && "" !== u.value ? u.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && r.specified ? r.value : t
        },
        set: d.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            d.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, r) {
        i.attrHooks[r] = {
            set: function(n, i) {
                return "" === i ? (n.setAttribute(r, "auto"),
                i) : t
            }
        }
    }
    ));
    i.support.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    }
    );
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    }
    );
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, r) {
                return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return null  === n.getAttribute("value") ? "on" : n.value
        }
        )
    }
    );
    var ui = /^(?:input|select|textarea)$/i
      , fe = /^key/
      , ee = /^(?:mouse|contextmenu)|click/
      , sr = /^(?:focusinfocus|focusoutblur)$/
      , hr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, r, u, f, e) {
            var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
            if (y) {
                for (u.handler && (w = u,
                u = w.handler,
                e = w.selector),
                u.guid || (u.guid = i.guid++),
                (p = y.events) || (p = y.events = {}),
                (l = y.handle) || (l = y.handle = function(n) {
                    return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = n),
                r = (r || "").match(s) || [""],
                k = r.length; k--; )
                    b = hr.exec(r[k]) || [],
                    h = g = b[1],
                    d = (b[2] || "").split(".").sort(),
                    h && (c = i.event.special[h] || {},
                    h = (e ? c.delegateType : c.bindType) || h,
                    c = i.event.special[h] || {},
                    a = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, w),
                    (v = p[h]) || (v = p[h] = [],
                    v.delegateCount = 0,
                    c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))),
                    c.add && (c.add.call(n, a),
                    a.handler.guid || (a.handler.guid = u.guid)),
                    e ? v.splice(v.delegateCount++, 0, a) : v.push(a),
                    i.event.global[h] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""],
                p = t.length; p--; )
                    if (h = hr.exec(t[p]) || [],
                    e = k = h[1],
                    w = (h[2] || "").split(".").sort(),
                    e) {
                        for (c = i.event.special[e] || {},
                        e = (u ? c.delegateType : c.bindType) || e,
                        l = a[e] || [],
                        h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = y = l.length; y--; )
                            o = l[y],
                            !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1),
                            o.selector && l.delegateCount--,
                            c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                        delete a[e])
                    } else
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(u, f, e, o) {
            var a, v, s, w, l, c, b, p = [e || r], h = k.call(u, "type") ? u.type : u, y = k.call(u, "namespace") ? u.namespace.split(".") : [];
            if (s = c = e = e || r,
            3 !== e.nodeType && 8 !== e.nodeType && !sr.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."),
            h = y.shift(),
            y.sort()),
            v = 0 > h.indexOf(":") && "on" + h,
            u = u[i.expando] ? u : new i.Event(h,"object" == typeof u && u),
            u.isTrigger = o ? 2 : 3,
            u.namespace = y.join("."),
            u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            u.result = t,
            u.target || (u.target = e),
            f = null  == f ? [u] : i.makeArray(f, [u]),
            l = i.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (w = l.delegateType || h,
                    sr.test(w + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        c = s;
                    c === (e.ownerDocument || r) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (b = 0; (s = p[b++]) && !u.isPropagationStopped(); )
                    u.type = b > 1 ? w : l.bindType || h,
                    a = (i._data(s, "events") || {})[u.type] && i._data(s, "handle"),
                    a && a.apply(s, f),
                    a = v && s[v],
                    a && i.acceptData(s) && a.apply && a.apply(s, f) === !1 && u.preventDefault();
                if (u.type = h,
                !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && v && e[h] && !i.isWindow(e)) {
                    c = e[v];
                    c && (e[v] = null );
                    i.event.triggered = h;
                    try {
                        e[h]()
                    } catch (d) {}
                    i.event.triggered = t;
                    c && (e[v] = c)
                }
                return u.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, e, r, u, s, h = [], c = l.call(arguments), a = (i._data(this, "events") || {})[n.type] || [], f = i.event.special[n.type] || {};
            if (c[0] = n,
            n.delegateTarget = this,
            !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, a),
                o = 0; (u = h[o++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = u.elem,
                    s = 0; (r = u.handlers[s++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r,
                        n.data = r.data,
                        e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c),
                        e !== t && (n.result = e) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, r) {
            var e, o, f, s, c = [], h = r.delegateCount, u = n.target;
            if (h && u.nodeType && (!n.button || "click" !== n.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                        for (f = [],
                        s = 0; h > s; s++)
                            o = r[s],
                            e = o.selector + " ",
                            f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null , [u]).length),
                            f[e] && f.push(o);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return r.length > h && c.push({
                elem: this,
                handlers: r.slice(h)
            }),
            c
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, u = n.type, f = n, t = this.fixHooks[u];
            for (t || (this.fixHooks[u] = t = ee.test(u) ? this.mouseHooks : fe.test(u) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || r),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null  == n.which && (n.which = null  != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var u, o, f, e = i.button, s = i.fromElement;
                return null  == n.pageX && null  != i.clientX && (o = n.target.ownerDocument || r,
                f = o.documentElement,
                u = o.body,
                n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0),
                n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cr() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cr() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null , t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
     : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null ),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, r) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ct : g) : this.type = n,
        r && i.extend(this, r),
        this.timeStamp = n && n.timeStamp || i.now(),
        this[i.expando] = !0,
        t) : new i.Event(n,r)
    }
    ;
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ct;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    }
    );
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }
                ),
                i._data(r, "submitBubbles", !0))
            }
            ),
            t)
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"),
            t)
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            }
            )),
            !1) : (i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }
                ),
                i._data(t, "changeBubbles", !0))
            }
            ),
            t)
        },
        handle: function(n) {
            var i = n.target;
            return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !ui.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
          , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        }
        ;
        i.event.special[t] = {
            setup: function() {
                0 == u++ && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                0 == --u && r.removeEventListener(n, f, !0)
            }
        }
    }
    );
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var s, o;
            if ("object" == typeof n) {
                "string" != typeof r && (u = u || r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (null  == u && null  == f ? (f = r,
            u = r = t) : null  == f && ("string" == typeof r ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = g;
            else if (!f)
                return this;
            return 1 === e && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            }
            )
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if ("object" == typeof n) {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || "function" == typeof r) && (u = r,
            r = t),
            u === !1 && (u = g),
            this.each(function() {
                i.event.remove(this, n, u, r)
            }
            )
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            }
            )
        },
        triggerHandler: function(n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t
        }
    });
    var oe = /^.[^:#\[\.,]*$/
      , se = /^(?:parents|prev(?:Until|All))/
      , lr = i.expr.match.needsContext
      , he = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this))
                            return !0
                }
                ));
            for (t = 0; f > t; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t]))
                        return !0
            }
            )
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        is: function(n) {
            return !!fi(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = lr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function(n) {
            return this.add(null  == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (he[n] || (f = i.unique(f)),
            se.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    }
    );
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"),
            1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }
            ))
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u)); )
                1 === f.nodeType && e.push(f),
                f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var yr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ce = / jQuery\d+="(?:null|\d+)"/g
      , pr = RegExp("<(?:" + yr + ")[\\s/>]", "i")
      , ei = /^\s+/
      , wr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , br = /<([\w:]+)/
      , kr = /<tbody/i
      , le = /<|&#?\w+;/
      , ae = /<(?:script|style|link)/i
      , oi = /^(?:checkbox|radio)$/i
      , ve = /checked\s*(?:[^=]|=\s*.checked.)/i
      , dr = /^$|\/(?:java|ecma)script/i
      , ye = /^true\/(.*)/
      , pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    }
      , we = vr(r)
      , si = we.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }
            , null , n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.appendChild(n)
                }
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            }
            )
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            }
            )
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, f = 0; null  != (r = e[f]); f++)
                t || 1 !== r.nodeType || i.cleanData(u(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && hi(u(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null  != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null  == n ? !1 : n,
            t = null  == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            }
            )
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                  , f = 0
                  , o = this.length;
                if (n === t)
                    return 1 === r.nodeType ? r.innerHTML.replace(ce, "") : t;
                if (!("string" != typeof n || ae.test(n) || !i.support.htmlSerialize && pr.test(n) || !i.support.leadingWhitespace && ei.test(n) || e[(br.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(wr, "<$1><\/$2>");
                    try {
                        for (; o > f; f++)
                            r = this[f] || {},
                            1 === r.nodeType && (i.cleanData(u(r, !1)),
                            r.innerHTML = n);
                        r = 0
                    } catch (s) {}
                }
                r && this.empty().append(n)
            }
            , null , n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this, function(n) {
                return [n.nextSibling, n.parentNode]
            }
            )
              , n = 0;
            return this.domManip(arguments, function(r) {
                var u = t[n++]
                  , f = t[n++];
                f && (u && u.parentNode !== f && (u = this.nextSibling),
                i(this).remove(),
                f.insertBefore(r, u))
            }
            , !0),
            n ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, r) {
            n = di.apply([], n);
            var h, f, c, o, v, s, e = 0, l = this.length, p = this, w = l - 1, a = n[0], y = i.isFunction(a);
            if (y || !(1 >= l || "string" != typeof a || i.support.checkClone) && ve.test(a))
                return this.each(function(i) {
                    var u = p.eq(i);
                    y && (n[0] = a.call(this, i, u.html()));
                    u.domManip(n, t, r)
                }
                );
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, !r && this),
            h = s.firstChild,
            1 === s.childNodes.length && (s = h),
            h)) {
                for (o = i.map(u(s, "script"), nu),
                c = o.length; l > e; e++)
                    f = s,
                    e !== w && (f = i.clone(f, !0, !0),
                    c && i.merge(o, u(f, "script"))),
                    t.call(this[e], f, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument,
                    i.map(o, tu),
                    e = 0; c > e; e++)
                        f = o[e],
                        dr.test(f.type || "") && !i._data(f, "globalEval") && i.contains(v, f) && (f.src ? i._evalUrl(f.src) : i.globalEval((f.text || f.textContent || f.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                kt.apply(f, u.get());
            return this.pushStack(f)
        }
    }
    );
    i.extend({
        clone: function(n, t, r) {
            var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !pr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (si.innerHTML = n.outerHTML,
            si.removeChild(o = si.firstChild)),
            !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = u(o),
                s = u(n),
                e = 0; null  != (h = s[e]); ++e)
                    f[e] && be(h, f[e]);
            if (t)
                if (r)
                    for (s = s || u(n),
                    f = f || u(o),
                    e = 0; null  != (h = s[e]); e++)
                        iu(h, f[e]);
                else
                    iu(n, o);
            return f = u(o, "script"),
            f.length > 0 && hi(f, !c && u(n, "script")),
            f = s = h = null ,
            o
        },
        buildFragment: function(n, t, r, f) {
            for (var h, o, w, s, y, p, l, b = n.length, a = vr(t), c = [], v = 0; b > v; v++)
                if (o = n[v],
                o || 0 === o)
                    if ("object" === i.type(o))
                        i.merge(c, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                        for (s = s || a.appendChild(t.createElement("div")),
                        y = (br.exec(o) || ["", ""])[1].toLowerCase(),
                        l = e[y] || e._default,
                        s.innerHTML = l[1] + o.replace(wr, "<$1><\/$2>") + l[2],
                        h = l[0]; h--; )
                            s = s.lastChild;
                        if (!i.support.leadingWhitespace && ei.test(o) && c.push(t.createTextNode(ei.exec(o)[0])),
                        !i.support.tbody)
                            for (o = "table" !== y || kr.test(o) ? "<table>" !== l[1] || kr.test(o) ? 0 : s : s.firstChild,
                            h = o && o.childNodes.length; h--; )
                                i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                        for (i.merge(c, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = a.lastChild
                    } else
                        c.push(t.createTextNode(o));
            for (s && a.removeChild(s),
            i.support.appendChecked || i.grep(u(c, "input"), ke),
            v = 0; o = c[v++]; )
                if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o),
                s = u(a.appendChild(o), "script"),
                w && hi(s),
                r))
                    for (h = 0; o = s[h++]; )
                        dr.test(o.type || "") && r.push(o);
            return s = null ,
            a
        },
        cleanData: function(n, t) {
            for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null  != (r = n[c]); c++)
                if ((t || i.acceptData(r)) && (u = r[s],
                e = u && h[u])) {
                    if (e.events)
                        for (f in e.events)
                            a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                    h[u] && (delete h[u],
                    l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null ,
                    b.push(u))
                }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    });
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                }
                );
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
                        n = n.firstChild;
                    return n
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }
            ) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            }
            )
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }
            ).end()
        }
    });
    var rt, v, y, ci = /alpha\([^)]*\)/i, de = /opacity\s*=\s*([^)]*)/, ge = /^(top|right|bottom|left)$/, no = /^(none|table(?!-c[ea]).+)/, ru = /^margin/, to = RegExp("^(" + st + ")(.*)$", "i"), lt = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"), io = RegExp("^([+-])=(" + st + ")", "i"), uu = {
        BODY: "block"
    }, ro = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, fu = {
        letterSpacing: 0,
        fontWeight: 400
    }, p = ["Top", "Right", "Bottom", "Left"], eu = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, o, s = {}, f = 0;
                if (i.isArray(r)) {
                    for (o = v(n),
                    e = r.length; e > f; f++)
                        s[r[f]] = i.css(n, r[f], !1, o);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }
            , n, r, arguments.length > 1)
        },
        show: function() {
            return su(this, !0)
        },
        hide: function() {
            return su(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ut(this) ? i(this).show() : i(this).hide()
            }
            )
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = y(n, "opacity");
                        return "" === i ? "1" : i
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
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, s, e, h = i.camelCase(r), c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = ou(c, h)),
                e = i.cssHooks[r] || i.cssHooks[h],
                u === t)
                    return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (s = typeof u,
                "string" === s && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)),
                s = "number"),
                !(null  == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"),
                i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"),
                e && "set" in e && (u = e.set(n, u, f)) === t)))
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, u, f) {
            var h, e, o, s = i.camelCase(r);
            return r = i.cssProps[s] || (i.cssProps[s] = ou(n.style, s)),
            o = i.cssHooks[r] || i.cssHooks[s],
            o && "get" in o && (e = o.get(n, !0, u)),
            e === t && (e = y(n, r, f)),
            "normal" === e && r in fu && (e = fu[r]),
            "" === u || u ? (h = parseFloat(e),
            u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    });
    n.getComputedStyle ? (v = function(t) {
        return n.getComputedStyle(t, null )
    }
    ,
    y = function(n, r, u) {
        var s, h, c, o = u || v(n), e = o ? o.getPropertyValue(r) || o[r] : t, f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)),
        lt.test(e) && ru.test(r) && (s = f.width,
        h = f.minWidth,
        c = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = e,
        e = o.width,
        f.width = s,
        f.minWidth = h,
        f.maxWidth = c)),
        e
    }
    ) : r.documentElement.currentStyle && (v = function(n) {
        return n.currentStyle
    }
    ,
    y = function(n, i, r) {
        var s, e, o, h = r || v(n), u = h ? h[i] : t, f = n.style;
        return null  == u && f && f[i] && (u = f[i]),
        lt.test(u) && !ge.test(i) && (s = f.left,
        e = n.runtimeStyle,
        o = e && e.left,
        o && (e.left = n.currentStyle.left),
        f.left = "fontSize" === i ? "1em" : u,
        u = f.pixelLeft + "px",
        f.left = s,
        o && (e.left = o)),
        "" === u ? "auto" : u
    }
    );
    i.each(["height", "width"], function(n, r) {
        i.cssHooks[r] = {
            get: function(n, u, f) {
                return u ? 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro, function() {
                    return lu(n, r, f)
                }
                ) : lu(n, r, f) : t
            },
            set: function(n, t, u) {
                var f = u && v(n);
                return hu(n, t, u ? cu(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    }
    );
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(ci, "")) && r.removeAttribute && (r.removeAttribute("filter"),
            "" === t || u && !u.filter) || (r.filter = ci.test(f) ? f.replace(ci, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, r) {
                return r ? i.swap(n, {
                    display: "inline-block"
                }, y, [n, "marginRight"]) : t
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u) {
                    return u ? (u = y(n, r),
                    lt.test(u) ? i(n).position()[r] + "px" : u) : t
                }
            }
        }
        )
    }
    );
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    );
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ru.test(n) || (i.cssHooks[n + t].set = hu)
    }
    );
    var uo = /%20/g
      , fo = /\[\]$/
      , yu = /\r?\n/g
      , eo = /^(?:submit|button|image|reset|file)$/i
      , oo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }
            ).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !oi.test(n))
            }
            ).map(function(n, t) {
                var r = i(this).val();
                return null  == r ? null  : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yu, "\r\n")
                    }
                }
                ) : {
                    name: t.name,
                    value: r.replace(yu, "\r\n")
                }
            }
            ).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : null  == t ? "" : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        }
        ;
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            }
            );
        else
            for (u in n)
                li(u, n[u], r, e);
        return f.join("&").replace(uo, "+")
    }
    ;
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null , n, i) : this.trigger(t)
        }
    }
    );
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null , t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null , t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });

    var it, yt, po = /^(?:toggle|show|hide)$/, uf = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"), wo = /queueHooks$/, pt = [ko], ft = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , r = uf.exec(t)
              , e = r && r[3] || (i.cssNumber[n] ? "" : "px")
              , u = (i.cssNumber[n] || "px" !== e && +s) && uf.exec(i.css(f.elem, n))
              , o = 1
              , h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do
                    o = o || ".5",
                    u /= o,
                    i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0,
            f.unit = e,
            f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(of, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                ft[r] = ft[r] || [],
                ft[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? pt.unshift(n) : pt.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : f.propHooks._default.set(this),
            this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null  == n.elem[n.prop] || n.elem.style && null  != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null  != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null  == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u)
        }
    }
    );
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = of(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            }
            ;
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            }
            ;
            return "string" != typeof n && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = null  != n && n + "queueHooks"
                  , e = i.timers
                  , r = i._data(this);
                if (t)
                    r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && wo.test(t) && f(r[t]);
                for (t = e.length; t--; )
                    e[t].elem !== this || null  != n && e[t].queue !== n || (e[t].anim.stop(u),
                    o = !1,
                    e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            }
            )
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            }
            )
        }
    });
    i.each({
        slideDown: wt("show"),
        slideUp: wt("hide"),
        slideToggle: wt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    }
    );
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null  == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers, r = 0;
        for (it = i.now(); n.length > r; r++)
            u = n[r],
            u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        it = t
    }
    ;
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        yt || (yt = setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        clearInterval(yt);
        yt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }
        ).length
    }
    );
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            }
            );
        var r, e, f = {
            top: 0,
            left: 0
        }, u = this[0], s = u && u.ownerDocument;
        if (s)
            return r = s.documentElement,
            i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()),
            e = sf(s),
            {
                top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }) : f
    }
    ;
    i.offset = {
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            "static" === f && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
            h = s.top,
            c = s.left) : (h = parseFloat(l) || 0,
            c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            null  != t.top && (u.top = t.top - o.top + h);
            null  != t.left && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || ki; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || ki
            }
            )
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = sf(n);
                return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e,
                t)
            }
            , n, f, arguments.length, null )
        }
    }
    );
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || "boolean" != typeof f)
                  , s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement,
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                }
                , r, o ? f : t, o, null )
            }
        }
        )
    }
    );
    i.fn.size = function() {
        return this.length
    }
    ;
    i.fn.andSelf = i.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (n.jQuery = n.$ = i,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }
    ))
}
)(window),
function() {
    var y = this, at = y._, o = {}, r = Array.prototype, g = Object.prototype, vt = Function.prototype, nt = r.push, i = r.slice, s = r.concat, f = g.toString, yt = g.hasOwnProperty, tt = r.forEach, it = r.map, rt = r.reduce, ut = r.reduceRight, ft = r.filter, et = r.every, ot = r.some, h = r.indexOf, st = r.lastIndexOf, pt = Array.isArray, ht = Object.keys, p = vt.bind, n = function(t) {
        if (t instanceof n)
            return t;
        if (!(this instanceof n))
            return new n(t);
        this._wrapped = t
    }
    , t, w, b, e, c, k, l, a, u, ct, lt, v;
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = n),
    exports._ = n) : y._ = n;
    n.VERSION = "1.6.0";
    t = n.each = n.forEach = function(t, i, r) {
        var e, u, f;
        if (t == null )
            return t;
        if (tt && t.forEach === tt)
            t.forEach(i, r);
        else if (t.length === +t.length) {
            for (u = 0,
            f = t.length; u < f; u++)
                if (i.call(r, t[u], u, t) === o)
                    return
        } else
            for (e = n.keys(t),
            u = 0,
            f = e.length; u < f; u++)
                if (i.call(r, t[e[u]], e[u], t) === o)
                    return;
        return t
    }
    ;
    n.map = n.collect = function(n, i, r) {
        var u = [];
        return n == null  ? u : it && n.map === it ? n.map(i, r) : (t(n, function(n, t, f) {
            u.push(i.call(r, n, t, f))
        }
        ),
        u)
    }
    ;
    w = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(i, r, u, f) {
        var e = arguments.length > 2;
        if (i == null  && (i = []),
        rt && i.reduce === rt)
            return f && (r = n.bind(r, f)),
            e ? i.reduce(r, u) : i.reduce(r);
        if (t(i, function(n, t, i) {
            e ? u = r.call(f, u, n, t, i) : (u = n,
            e = !0)
        }
        ),
        !e)
            throw new TypeError(w);
        return u
    }
    ;
    n.reduceRight = n.foldr = function(i, r, u, f) {
        var o = arguments.length > 2, e, s;
        if (i == null  && (i = []),
        ut && i.reduceRight === ut)
            return f && (r = n.bind(r, f)),
            o ? i.reduceRight(r, u) : i.reduceRight(r);
        if (e = i.length,
        e !== +e && (s = n.keys(i),
        e = s.length),
        t(i, function(n, t, h) {
            t = s ? s[--e] : --e;
            o ? u = r.call(f, u, i[t], t, h) : (u = i[t],
            o = !0)
        }
        ),
        !o)
            throw new TypeError(w);
        return u
    }
    ;
    n.find = n.detect = function(n, t, i) {
        var r;
        return b(n, function(n, u, f) {
            if (t.call(i, n, u, f))
                return r = n,
                !0
        }
        ),
        r
    }
    ;
    n.filter = n.select = function(n, i, r) {
        var u = [];
        return n == null  ? u : ft && n.filter === ft ? n.filter(i, r) : (t(n, function(n, t, f) {
            i.call(r, n, t, f) && u.push(n)
        }
        ),
        u)
    }
    ;
    n.reject = function(t, i, r) {
        return n.filter(t, function(n, t, u) {
            return !i.call(r, n, t, u)
        }
        , r)
    }
    ;
    n.every = n.all = function(i, r, u) {
        r || (r = n.identity);
        var f = !0;
        return i == null  ? f : et && i.every === et ? i.every(r, u) : (t(i, function(n, t, i) {
            if (!(f = f && r.call(u, n, t, i)))
                return o
        }
        ),
        !!f)
    }
    ;
    b = n.some = n.any = function(i, r, u) {
        r || (r = n.identity);
        var f = !1;
        return i == null  ? f : ot && i.some === ot ? i.some(r, u) : (t(i, function(n, t, i) {
            if (f || (f = r.call(u, n, t, i)))
                return o
        }
        ),
        !!f)
    }
    ;
    n.contains = n.include = function(n, t) {
        return n == null  ? !1 : h && n.indexOf === h ? n.indexOf(t) != -1 : b(n, function(n) {
            return n === t
        }
        )
    }
    ;
    n.invoke = function(t, r) {
        var u = i.call(arguments, 2)
          , f = n.isFunction(r);
        return n.map(t, function(n) {
            return (f ? r : n[r]).apply(n, u)
        }
        )
    }
    ;
    n.pluck = function(t, i) {
        return n.map(t, n.property(i))
    }
    ;
    n.where = function(t, i) {
        return n.filter(t, n.matches(i))
    }
    ;
    n.findWhere = function(t, i) {
        return n.find(t, n.matches(i))
    }
    ;
    n.max = function(i, r, u) {
        if (!r && n.isArray(i) && i[0] === +i[0] && i.length < 65535)
            return Math.max.apply(Math, i);
        var f = -Infinity
          , e = -Infinity;
        return t(i, function(n, t, i) {
            var o = r ? r.call(u, n, t, i) : n;
            o > e && (f = n,
            e = o)
        }
        ),
        f
    }
    ;
    n.min = function(i, r, u) {
        if (!r && n.isArray(i) && i[0] === +i[0] && i.length < 65535)
            return Math.min.apply(Math, i);
        var f = Infinity
          , e = Infinity;
        return t(i, function(n, t, i) {
            var o = r ? r.call(u, n, t, i) : n;
            o < e && (f = n,
            e = o)
        }
        ),
        f
    }
    ;
    n.shuffle = function(i) {
        var u, f = 0, r = [];
        return t(i, function(t) {
            u = n.random(f++);
            r[f - 1] = r[u];
            r[u] = t
        }
        ),
        r
    }
    ;
    n.sample = function(t, i, r) {
        return i == null  || r ? (t.length !== +t.length && (t = n.values(t)),
        t[n.random(t.length - 1)]) : n.shuffle(t).slice(0, Math.max(0, i))
    }
    ;
    e = function(t) {
        return t == null  ? n.identity : n.isFunction(t) ? t : n.property(t)
    }
    ;
    n.sortBy = function(t, i, r) {
        return i = e(i),
        n.pluck(n.map(t, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: i.call(r, n, t, u)
            }
        }
        ).sort(function(n, t) {
            var i = n.criteria
              , r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0)
                    return 1;
                if (i < r || r === void 0)
                    return -1
            }
            return n.index - t.index
        }
        ), "value")
    }
    ;
    c = function(n) {
        return function(i, r, u) {
            var f = {};
            return r = e(r),
            t(i, function(t, e) {
                var o = r.call(u, t, e, i);
                n(f, o, t)
            }
            ),
            f
        }
    }
    ;
    n.groupBy = c(function(t, i, r) {
        n.has(t, i) ? t[i].push(r) : t[i] = [r]
    }
    );
    n.indexBy = c(function(n, t, i) {
        n[t] = i
    }
    );
    n.countBy = c(function(t, i) {
        n.has(t, i) ? t[i]++ : t[i] = 1
    }
    );
    n.sortedIndex = function(n, t, i, r) {
        var f;
        i = e(i);
        for (var s = i.call(r, t), u = 0, o = n.length; u < o; )
            f = u + o >>> 1,
            i.call(r, n[f]) < s ? u = f + 1 : o = f;
        return u
    }
    ;
    n.toArray = function(t) {
        return t ? n.isArray(t) ? i.call(t) : t.length === +t.length ? n.map(t, n.identity) : n.values(t) : []
    }
    ;
    n.size = function(t) {
        return t == null  ? 0 : t.length === +t.length ? t.length : n.keys(t).length
    }
    ;
    n.first = n.head = n.take = function(n, t, r) {
        if (n != null )
            return t == null  || r ? n[0] : t < 0 ? [] : i.call(n, 0, t)
    }
    ;
    n.initial = function(n, t, r) {
        return i.call(n, 0, n.length - (t == null  || r ? 1 : t))
    }
    ;
    n.last = function(n, t, r) {
        if (n != null )
            return t == null  || r ? n[n.length - 1] : i.call(n, Math.max(n.length - t, 0))
    }
    ;
    n.rest = n.tail = n.drop = function(n, t, r) {
        return i.call(n, t == null  || r ? 1 : t)
    }
    ;
    n.compact = function(t) {
        return n.filter(t, n.identity)
    }
    ;
    k = function(i, r, u) {
        return r && n.every(i, n.isArray) ? s.apply(u, i) : (t(i, function(t) {
            n.isArray(t) || n.isArguments(t) ? r ? nt.apply(u, t) : k(t, r, u) : u.push(t)
        }
        ),
        u)
    }
    ;
    n.flatten = function(n, t) {
        return k(n, t, [])
    }
    ;
    n.without = function(t) {
        return n.difference(t, i.call(arguments, 1))
    }
    ;
    n.partition = function(n, i, r) {
        i = e(i);
        var u = []
          , f = [];
        return t(n, function(n) {
            (i.call(r, n) ? u : f).push(n)
        }
        ),
        [u, f]
    }
    ;
    n.uniq = n.unique = function(i, r, u, f) {
        n.isFunction(r) && (f = u,
        u = r,
        r = !1);
        var s = u ? n.map(i, u, f) : i
          , o = []
          , e = [];
        return t(s, function(t, u) {
            (r ? u && e[e.length - 1] === t : n.contains(e, t)) || (e.push(t),
            o.push(i[u]))
        }
        ),
        o
    }
    ;
    n.union = function() {
        return n.uniq(n.flatten(arguments, !0))
    }
    ;
    n.intersection = function(t) {
        var r = i.call(arguments, 1);
        return n.filter(n.uniq(t), function(t) {
            return n.every(r, function(i) {
                return n.contains(i, t)
            }
            )
        }
        )
    }
    ;
    n.difference = function(t) {
        var u = s.apply(r, i.call(arguments, 1));
        return n.filter(t, function(t) {
            return !n.contains(u, t)
        }
        )
    }
    ;
    n.zip = function() {
        for (var i = n.max(n.pluck(arguments, "length").concat(0)), r = new Array(i), t = 0; t < i; t++)
            r[t] = n.pluck(arguments, "" + t);
        return r
    }
    ;
    n.object = function(n, t) {
        var r, i, u;
        if (n == null )
            return {};
        for (r = {},
        i = 0,
        u = n.length; i < u; i++)
            t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r
    }
    ;
    n.indexOf = function(t, i, r) {
        if (t == null )
            return -1;
        var u = 0
          , f = t.length;
        if (r)
            if (typeof r == "number")
                u = r < 0 ? Math.max(0, f + r) : r;
            else
                return u = n.sortedIndex(t, i),
                t[u] === i ? u : -1;
        if (h && t.indexOf === h)
            return t.indexOf(i, r);
        for (; u < f; u++)
            if (t[u] === i)
                return u;
        return -1
    }
    ;
    n.lastIndexOf = function(n, t, i) {
        var u, r;
        if (n == null )
            return -1;
        if (u = i != null ,
        st && n.lastIndexOf === st)
            return u ? n.lastIndexOf(t, i) : n.lastIndexOf(t);
        for (r = u ? i : n.length; r--; )
            if (n[r] === t)
                return r;
        return -1
    }
    ;
    n.range = function(n, t, i) {
        arguments.length <= 1 && (t = n || 0,
        n = 0);
        i = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - n) / i), 0), u = 0, f = new Array(r); u < r; )
            f[u++] = n,
            n += i;
        return f
    }
    ;
    l = function() {}
    ;
    n.bind = function(t, r) {
        var u, f;
        if (p && t.bind === p)
            return p.apply(t, i.call(arguments, 1));
        if (!n.isFunction(t))
            throw new TypeError;
        return u = i.call(arguments, 2),
        f = function() {
            var e, n;
            return (this instanceof f) ? (l.prototype = t.prototype,
            e = new l,
            l.prototype = null ,
            n = t.apply(e, u.concat(i.call(arguments))),
            Object(n) === n) ? n : e : t.apply(r, u.concat(i.call(arguments)))
        }
    }
    ;
    n.partial = function(t) {
        var r = i.call(arguments, 1);
        return function() {
            for (var f = 0, i = r.slice(), u = 0, e = i.length; u < e; u++)
                i[u] === n && (i[u] = arguments[f++]);
            while (f < arguments.length)
                i.push(arguments[f++]);
            return t.apply(this, i)
        }
    }
    ;
    n.bindAll = function(r) {
        var u = i.call(arguments, 1);
        if (u.length === 0)
            throw new Error("bindAll must be passed function names");
        return t(u, function(t) {
            r[t] = n.bind(r[t], r)
        }
        ),
        r
    }
    ;
    n.memoize = function(t, i) {
        var r = {};
        return i || (i = n.identity),
        function() {
            var u = i.apply(this, arguments);
            return n.has(r, u) ? r[u] : r[u] = t.apply(this, arguments)
        }
    }
    ;
    n.delay = function(n, t) {
        var r = i.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null , r)
        }
        , t)
    }
    ;
    n.defer = function(t) {
        return n.delay.apply(n, [t, 1].concat(i.call(arguments, 1)))
    }
    ;
    n.throttle = function(t, i, r) {
        var u, f, s, e = null , o = 0, h;
        return r || (r = {}),
        h = function() {
            o = r.leading === !1 ? 0 : n.now();
            e = null ;
            s = t.apply(u, f);
            u = f = null
        }
        ,
        function() {
            var c = n.now(), l;
            return o || r.leading !== !1 || (o = c),
            l = i - (c - o),
            u = this,
            f = arguments,
            l <= 0 ? (clearTimeout(e),
            e = null ,
            o = c,
            s = t.apply(u, f),
            u = f = null ) : e || r.trailing === !1 || (e = setTimeout(h, l)),
            s
        }
    }
    ;
    n.debounce = function(t, i, r) {
        var u, f, e, s, o, h = function() {
            var c = n.now() - s;
            c < i ? u = setTimeout(h, i - c) : (u = null ,
            r || (o = t.apply(e, f),
            e = f = null ))
        }
        ;
        return function() {
            e = this;
            f = arguments;
            s = n.now();
            var c = r && !u;
            return u || (u = setTimeout(h, i)),
            c && (o = t.apply(e, f),
            e = f = null ),
            o
        }
    }
    ;
    n.once = function(n) {
        var i = !1, t;
        return function() {
            return i ? t : (i = !0,
            t = n.apply(this, arguments),
            n = null ,
            t)
        }
    }
    ;
    n.wrap = function(t, i) {
        return n.partial(i, t)
    }
    ;
    n.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, i = n.length - 1; i >= 0; i--)
                t = [n[i].apply(this, t)];
            return t[0]
        }
    }
    ;
    n.after = function(n, t) {
        return function() {
            if (--n < 1)
                return t.apply(this, arguments)
        }
    }
    ;
    n.keys = function(t) {
        var i, r;
        if (!n.isObject(t))
            return [];
        if (ht)
            return ht(t);
        i = [];
        for (r in t)
            n.has(t, r) && i.push(r);
        return i
    }
    ;
    n.values = function(t) {
        for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i < u; i++)
            f[i] = t[r[i]];
        return f
    }
    ;
    n.pairs = function(t) {
        for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i < u; i++)
            f[i] = [r[i], t[r[i]]];
        return f
    }
    ;
    n.invert = function(t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; i < f; i++)
            u[t[r[i]]] = r[i];
        return u
    }
    ;
    n.functions = n.methods = function(t) {
        var i = [];
        for (var r in t)
            n.isFunction(t[r]) && i.push(r);
        return i.sort()
    }
    ;
    n.extend = function(n) {
        return t(i.call(arguments, 1), function(t) {
            if (t)
                for (var i in t)
                    n[i] = t[i]
        }
        ),
        n
    }
    ;
    n.pick = function(n) {
        var u = {}
          , f = s.apply(r, i.call(arguments, 1));
        return t(f, function(t) {
            t in n && (u[t] = n[t])
        }
        ),
        u
    }
    ;
    n.omit = function(t) {
        var f = {}
          , e = s.apply(r, i.call(arguments, 1));
        for (var u in t)
            n.contains(e, u) || (f[u] = t[u]);
        return f
    }
    ;
    n.defaults = function(n) {
        return t(i.call(arguments, 1), function(t) {
            if (t)
                for (var i in t)
                    n[i] === void 0 && (n[i] = t[i])
        }
        ),
        n
    }
    ;
    n.clone = function(t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
    }
    ;
    n.tap = function(n, t) {
        return t(n),
        n
    }
    ;
    a = function(t, i, r, u) {
        var l, v, h, c, e, o, s;
        if (t === i)
            return t !== 0 || 1 / t == 1 / i;
        if (t == null  || i == null )
            return t === i;
        if (t instanceof n && (t = t._wrapped),
        i instanceof n && (i = i._wrapped),
        l = f.call(t),
        l != f.call(i))
            return !1;
        switch (l) {
        case "[object String]":
            return t == String(i);
        case "[object Number]":
            return t != +t ? i != +i : t == 0 ? 1 / t == 1 / i : t == +i;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +i;
        case "[object RegExp]":
            return t.source == i.source && t.global == i.global && t.multiline == i.multiline && t.ignoreCase == i.ignoreCase
        }
        if (typeof t != "object" || typeof i != "object")
            return !1;
        for (v = r.length; v--; )
            if (r[v] == t)
                return u[v] == i;
        if (h = t.constructor,
        c = i.constructor,
        h !== c && !(n.isFunction(h) && h instanceof h && n.isFunction(c) && c instanceof c) && "constructor" in t && "constructor" in i)
            return !1;
        if (r.push(t),
        u.push(i),
        e = 0,
        o = !0,
        l == "[object Array]") {
            if (e = t.length,
            o = e == i.length,
            o)
                while (e--)
                    if (!(o = a(t[e], i[e], r, u)))
                        break
        } else {
            for (s in t)
                if (n.has(t, s) && (e++,
                !(o = n.has(i, s) && a(t[s], i[s], r, u))))
                    break;
            if (o) {
                for (s in i)
                    if (n.has(i, s) && !e--)
                        break;
                o = !e
            }
        }
        return r.pop(),
        u.pop(),
        o
    }
    ;
    n.isEqual = function(n, t) {
        return a(n, t, [], [])
    }
    ;
    n.isEmpty = function(t) {
        if (t == null )
            return !0;
        if (n.isArray(t) || n.isString(t))
            return t.length === 0;
        for (var i in t)
            if (n.has(t, i))
                return !1;
        return !0
    }
    ;
    n.isElement = function(n) {
        return !!(n && n.nodeType === 1)
    }
    ;
    n.isArray = pt || function(n) {
        return f.call(n) == "[object Array]"
    }
    ;
    n.isObject = function(n) {
        return n === Object(n)
    }
    ;
    t(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        n["is" + t] = function(n) {
            return f.call(n) == "[object " + t + "]"
        }
    }
    );
    n.isArguments(arguments) || (n.isArguments = function(t) {
        return !!(t && n.has(t, "callee"))
    }
    );
    typeof /./ != "function" && (n.isFunction = function(n) {
        return typeof n == "function"
    }
    );
    n.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }
    ;
    n.isNaN = function(t) {
        return n.isNumber(t) && t != +t
    }
    ;
    n.isBoolean = function(n) {
        return n === !0 || n === !1 || f.call(n) == "[object Boolean]"
    }
    ;
    n.isNull = function(n) {
        return n === null
    }
    ;
    n.isUndefined = function(n) {
        return n === void 0
    }
    ;
    n.has = function(n, t) {
        return yt.call(n, t)
    }
    ;
    n.noConflict = function() {
        return y._ = at,
        this
    }
    ;
    n.identity = function(n) {
        return n
    }
    ;
    n.constant = function(n) {
        return function() {
            return n
        }
    }
    ;
    n.property = function(n) {
        return function(t) {
            return t[n]
        }
    }
    ;
    n.matches = function(n) {
        return function(t) {
            if (t === n)
                return !0;
            for (var i in n)
                if (n[i] !== t[i])
                    return !1;
            return !0
        }
    }
    ;
    n.times = function(n, t, i) {
        for (var u = Array(Math.max(0, n)), r = 0; r < n; r++)
            u[r] = t.call(i, r);
        return u
    }
    ;
    n.random = function(n, t) {
        return t == null  && (t = n,
        n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    }
    ;
    n.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    u = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    u.unescape = n.invert(u.escape);
    ct = {
        escape: new RegExp("[" + n.keys(u.escape).join("") + "]","g"),
        unescape: new RegExp("(" + n.keys(u.unescape).join("|") + ")","g")
    };
    n.each(["escape", "unescape"], function(t) {
        n[t] = function(n) {
            return n == null  ? "" : ("" + n).replace(ct[t], function(n) {
                return u[t][n]
            }
            )
        }
    }
    );
    n.result = function(t, i) {
        if (t == null )
            return void 0;
        var r = t[i];
        return n.isFunction(r) ? r.call(t) : r
    }
    ;
    n.mixin = function(i) {
        t(n.functions(i), function(t) {
            var r = n[t] = i[t];
            n.prototype[t] = function() {
                var t = [this._wrapped];
                return nt.apply(t, arguments),
                v.call(this, r.apply(n, t))
            }
        }
        )
    }
    ;
    lt = 0;
    n.uniqueId = function(n) {
        var t = ++lt + "";
        return n ? n + t : t
    }
    ;
    n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var d = /(.)^/
      , wt = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , bt = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    n.template = function(t, i, r) {
        var f, e;
        r = n.defaults({}, r, n.templateSettings);
        var h = new RegExp([(r.escape || d).source, (r.interpolate || d).source, (r.evaluate || d).source].join("|") + "|$","g")
          , o = 0
          , u = "__p+='";
        t.replace(h, function(n, i, r, f, e) {
            return u += t.slice(o, e).replace(bt, function(n) {
                return "\\" + wt[n]
            }
            ),
            i && (u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"),
            r && (u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
            f && (u += "';\n" + f + "\n__p+='"),
            o = e + n.length,
            n
        }
        );
        u += "';\n";
        r.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            f = new Function(r.variable || "obj","_",u)
        } catch (s) {
            s.source = u;
            throw s;
        }
        return i ? f(i, n) : (e = function(t) {
            return f.call(this, t, n)
        }
        ,
        e.source = "function(" + (r.variable || "obj") + "){\n" + u + "}",
        e)
    }
    ;
    n.chain = function(t) {
        return n(t).chain()
    }
    ;
    v = function(t) {
        return this._chain ? n(t).chain() : t
    }
    ;
    n.mixin(n);
    t(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = r[t];
        n.prototype[t] = function() {
            var n = this._wrapped;
            return i.apply(n, arguments),
            (t == "shift" || t == "splice") && n.length === 0 && delete n[0],
            v.call(this, n)
        }
    }
    );
    t(["concat", "join", "slice"], function(t) {
        var i = r[t];
        n.prototype[t] = function() {
            return v.call(this, i.apply(this._wrapped, arguments))
        }
    }
    );
    n.extend(n.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    });
    typeof define == "function" && define.amd && define("underscore", [], function() {
        return n
    }
    )
}
.call(this),
function(n, t) {
    if (typeof define == "function" && define.amd)
        define(["underscore", "jquery", "exports"], function(i, r, u) {
            n.Backbone = t(n, u, i, r)
        }
        );
    else if (typeof exports != "undefined") {
        var i = require("underscore");
        t(n, exports, i)
    } else
        n.Backbone = t(n, {}, n._, n.jQuery || n.Zepto || n.ender || n.$)
}
(this, function(n, t, i, r) {
    var rt = n.Backbone, l = [], wt = l.push, s = l.slice, bt = l.splice, e, p, w, b, d, g, it, a, o;
    t.VERSION = "1.1.2";
    t.$ = r;
    t.noConflict = function() {
        return n.Backbone = rt,
        this
    }
    ;
    t.emulateHTTP = !1;
    t.emulateJSON = !1;
    var u = t.Events = {
        on: function(n, t, i) {
            if (!h(this, "on", n, [t, i]) || !t)
                return this;
            this._events || (this._events = {});
            var r = this._events[n] || (this._events[n] = []);
            return r.push({
                callback: t,
                context: i,
                ctx: i || this
            }),
            this
        },
        once: function(n, t, r) {
            if (!h(this, "once", n, [t, r]) || !t)
                return this;
            var f = this
              , u = i.once(function() {
                f.off(n, u);
                t.apply(this, arguments)
            }
            );
            u._callback = t;
            return this.on(n, u, r)
        },
        off: function(n, t, r) {
            var o, u, s, c, f, l, e, a;
            if (!this._events || !h(this, "off", n, [t, r]))
                return this;
            if (!n && !t && !r)
                return this._events = void 0,
                this;
            for (c = n ? [n] : i.keys(this._events),
            f = 0,
            l = c.length; f < l; f++)
                if (n = c[f],
                s = this._events[n]) {
                    if (this._events[n] = o = [],
                    t || r)
                        for (e = 0,
                        a = s.length; e < a; e++)
                            u = s[e],
                            (t && t !== u.callback && t !== u.callback._callback || r && r !== u.context) && o.push(u);
                    o.length || delete this._events[n]
                }
            return this
        },
        trigger: function(n) {
            var t, i, r;
            return this._events ? (t = s.call(arguments, 1),
            !h(this, "trigger", n, t)) ? this : (i = this._events[n],
            r = this._events.all,
            i && y(i, t),
            r && y(r, arguments),
            this) : this
        },
        stopListening: function(n, t, r) {
            var u = this._listeningTo, e, f;
            if (!u)
                return this;
            e = !t && !r;
            r || typeof t != "object" || (r = this);
            n && ((u = {})[n._listenId] = n);
            for (f in u)
                n = u[f],
                n.off(t, r, this),
                (e || i.isEmpty(n._events)) && delete this._listeningTo[f];
            return this
        }
    }
      , v = /\s+/
      , h = function(n, t, i, r) {
        var f, e, u, o;
        if (!i)
            return !0;
        if (typeof i == "object") {
            for (f in i)
                n[t].apply(n, [f, i[f]].concat(r));
            return !1
        }
        if (v.test(i)) {
            for (e = i.split(v),
            u = 0,
            o = e.length; u < o; u++)
                n[t].apply(n, [e[u]].concat(r));
            return !1
        }
        return !0
    }
      , y = function(n, t) {
        var i, r = -1, u = n.length, f = t[0], e = t[1], o = t[2];
        switch (t.length) {
        case 0:
            while (++r < u)
                (i = n[r]).callback.call(i.ctx);
            return;
        case 1:
            while (++r < u)
                (i = n[r]).callback.call(i.ctx, f);
            return;
        case 2:
            while (++r < u)
                (i = n[r]).callback.call(i.ctx, f, e);
            return;
        case 3:
            while (++r < u)
                (i = n[r]).callback.call(i.ctx, f, e, o);
            return;
        default:
            while (++r < u)
                (i = n[r]).callback.apply(i.ctx, t);
            return
        }
    }
    ;
    i.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(n, t) {
        u[t] = function(t, r, u) {
            var f = this._listeningTo || (this._listeningTo = {})
              , e = t._listenId || (t._listenId = i.uniqueId("l"));
            return f[e] = t,
            u || typeof r != "object" || (u = this),
            t[n](r, u, this),
            this
        }
    }
    );
    u.bind = u.on;
    u.unbind = u.off;
    i.extend(t, u);
    e = t.Model = function(n, t) {
        var r = n || {};
        t || (t = {});
        this.cid = i.uniqueId("c");
        this.attributes = {};
        t.collection && (this.collection = t.collection);
        t.parse && (r = this.parse(r, t) || {});
        r = i.defaults({}, r, i.result(this, "defaults"));
        this.set(r, t);
        this.changed = {};
        this.initialize.apply(this, arguments)
    }
    ;
    i.extend(e.prototype, u, {
        changed: null ,
        validationError: null ,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return i.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(n) {
            return this.attributes[n]
        },
        escape: function(n) {
            return i.escape(this.get(n))
        },
        has: function(n) {
            return this.get(n) != null
        },
        set: function(n, t, r) {
            var u, f, l, e, h, c, a, o, s, v;
            if (n == null )
                return this;
            if (typeof n == "object" ? (f = n,
            r = t) : (f = {})[n] = t,
            r || (r = {}),
            !this._validate(f, r))
                return !1;
            l = r.unset;
            h = r.silent;
            e = [];
            c = this._changing;
            this._changing = !0;
            c || (this._previousAttributes = i.clone(this.attributes),
            this.changed = {});
            o = this.attributes;
            a = this._previousAttributes;
            this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (u in f)
                t = f[u],
                i.isEqual(o[u], t) || e.push(u),
                i.isEqual(a[u], t) ? delete this.changed[u] : this.changed[u] = t,
                l ? delete o[u] : o[u] = t;
            if (!h)
                for (e.length && (this._pending = r),
                s = 0,
                v = e.length; s < v; s++)
                    this.trigger("change:" + e[s], this, o[e[s]], r);
            if (c)
                return this;
            if (!h)
                while (this._pending)
                    r = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, r);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(n, t) {
            return this.set(n, void 0, i.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(n) {
            var t = {};
            for (var r in this.attributes)
                t[r] = void 0;
            return this.set(t, i.extend({}, n, {
                unset: !0
            }))
        },
        hasChanged: function(n) {
            return n == null  ? !i.isEmpty(this.changed) : i.has(this.changed, n)
        },
        changedAttributes: function(n) {
            var u, t, f, r;
            if (!n)
                return this.hasChanged() ? i.clone(this.changed) : !1;
            t = !1;
            f = this._changing ? this._previousAttributes : this.attributes;
            for (r in n)
                i.isEqual(f[r], u = n[r]) || ((t || (t = {}))[r] = u);
            return t
        },
        previous: function(n) {
            return n == null  || !this._previousAttributes ? null  : this._previousAttributes[n]
        },
        previousAttributes: function() {
            return i.clone(this._previousAttributes)
        },
        fetch: function(n) {
            n = n ? i.clone(n) : {};
            n.parse === void 0 && (n.parse = !0);
            var t = this
              , r = n.success;
            return n.success = function(i) {
                if (!t.set(t.parse(i, n), n))
                    return !1;
                r && r(t, i, n);
                t.trigger("sync", t, i, n)
            }
            ,
            o(this, n),
            this.sync("read", this, n)
        },
        save: function(n, t, r) {
            var u, e, c, s = this.attributes, f, h;
            if (n == null  || typeof n == "object" ? (u = n,
            r = t) : (u = {})[n] = t,
            r = i.extend({
                validate: !0
            }, r),
            u && !r.wait) {
                if (!this.set(u, r))
                    return !1
            } else if (!this._validate(u, r))
                return !1;
            return u && r.wait && (this.attributes = i.extend({}, s, u)),
            r.parse === void 0 && (r.parse = !0),
            f = this,
            h = r.success,
            r.success = function(n) {
                f.attributes = s;
                var t = f.parse(n, r);
                if (r.wait && (t = i.extend(u || {}, t)),
                i.isObject(t) && !f.set(t, r))
                    return !1;
                h && h(f, n, r);
                f.trigger("sync", f, n, r)
            }
            ,
            o(this, r),
            e = this.isNew() ? "create" : r.patch ? "patch" : "update",
            e === "patch" && (r.attrs = u),
            c = this.sync(e, this, r),
            u && r.wait && (this.attributes = s),
            c
        },
        destroy: function(n) {
            var f;
            n = n ? i.clone(n) : {};
            var t = this
              , r = n.success
              , u = function() {
                t.trigger("destroy", t, t.collection, n)
            }
            ;
            return (n.success = function(i) {
                (n.wait || t.isNew()) && u();
                r && r(t, i, n);
                t.isNew() || t.trigger("sync", t, i, n)
            }
            ,
            this.isNew()) ? (n.success(),
            !1) : (o(this, n),
            f = this.sync("delete", this, n),
            n.wait || u(),
            f)
        },
        url: function() {
            var n = i.result(this, "urlRoot") || i.result(this.collection, "url") || a();
            return this.isNew() ? n : n.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(n) {
            return n
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(n) {
            return this._validate({}, i.extend(n || {}, {
                validate: !0
            }))
        },
        _validate: function(n, t) {
            if (!t.validate || !this.validate)
                return !0;
            n = i.extend({}, this.attributes, n);
            var r = this.validationError = this.validate(n, t) || null ;
            return r ? (this.trigger("invalid", this, r, i.extend(t, {
                validationError: r
            })),
            !1) : !0
        }
    });
    p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    i.each(p, function(n) {
        e.prototype[n] = function() {
            var t = s.call(arguments);
            return t.unshift(this.attributes),
            i[n].apply(i, t)
        }
    }
    );
    var c = t.Collection = function(n, t) {
        t || (t = {});
        t.model && (this.model = t.model);
        t.comparator !== void 0 && (this.comparator = t.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        n && this.reset(n, i.extend({
            silent: !0
        }, t))
    }
      , ut = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , ft = {
        add: !0,
        remove: !1
    };
    i.extend(c.prototype, u, {
        model: e,
        initialize: function() {},
        toJSON: function(n) {
            return this.map(function(t) {
                return t.toJSON(n)
            }
            )
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(n, t) {
            return this.set(n, i.extend({
                merge: !1
            }, t, ft))
        },
        remove: function(n, t) {
            var e = !i.isArray(n), u, o, f, r;
            for (n = e ? [n] : i.clone(n),
            t || (t = {}),
            u = 0,
            o = n.length; u < o; u++)
                (r = n[u] = this.get(n[u]),
                r) && (delete this._byId[r.id],
                delete this._byId[r.cid],
                f = this.indexOf(r),
                this.models.splice(f, 1),
                this.length--,
                t.silent || (t.index = f,
                r.trigger("remove", r, this, t)),
                this._removeReference(r, t));
            return e ? n[0] : n
        },
        set: function(n, t) {
            var v, k;
            t = i.defaults({}, t, ut);
            t.parse && (n = this.parse(n, t));
            v = !i.isArray(n);
            n = v ? n ? [n] : [] : i.clone(n);
            for (var d, u, f, c, l, y = t.at, nt = this.model, p = this.comparator && y == null  && t.sort !== !1, tt = i.isString(this.comparator) ? this.comparator : null , s = [], w = [], a = {}, g = t.add, it = t.merge, b = t.remove, h = !p && g && b ? [] : !1, r = 0, o = n.length; r < o; r++) {
                if (f = n[r] || {},
                d = f instanceof e ? u = f : f[nt.prototype.idAttribute || "id"],
                c = this.get(d))
                    b && (a[c.cid] = !0),
                    it && (f = f === u ? u.attributes : f,
                    t.parse && (f = c.parse(f, t)),
                    c.set(f, t),
                    p && !l && c.hasChanged(tt) && (l = !0)),
                    n[r] = c;
                else if (g) {
                    if (u = n[r] = this._prepareModel(f, t),
                    !u)
                        continue;s.push(u);
                    this._addReference(u, t)
                }
                u = c || u;
                h && (u.isNew() || !a[u.id]) && h.push(u);
                a[u.id] = !0
            }
            if (b) {
                for (r = 0,
                o = this.length; r < o; ++r)
                    a[(u = this.models[r]).cid] || w.push(u);
                w.length && this.remove(w, t)
            }
            if (s.length || h && h.length)
                if (p && (l = !0),
                this.length += s.length,
                y != null )
                    for (r = 0,
                    o = s.length; r < o; r++)
                        this.models.splice(y + r, 0, s[r]);
                else
                    for (h && (this.models.length = 0),
                    k = h || s,
                    r = 0,
                    o = k.length; r < o; r++)
                        this.models.push(k[r]);
            if (l && this.sort({
                silent: !0
            }),
            !t.silent) {
                for (r = 0,
                o = s.length; r < o; r++)
                    (u = s[r]).trigger("add", u, this, t);
                (l || h && h.length) && this.trigger("sort", this, t)
            }
            return v ? n[0] : n
        },
        reset: function(n, t) {
            t || (t = {});
            for (var r = 0, u = this.models.length; r < u; r++)
                this._removeReference(this.models[r], t);
            return t.previousModels = this.models,
            this._reset(),
            n = this.add(n, i.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            n
        },
        push: function(n, t) {
            return this.add(n, i.extend({
                at: this.length
            }, t))
        },
        pop: function(n) {
            var t = this.at(this.length - 1);
            return this.remove(t, n),
            t
        },
        unshift: function(n, t) {
            return this.add(n, i.extend({
                at: 0
            }, t))
        },
        shift: function(n) {
            var t = this.at(0);
            return this.remove(t, n),
            t
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(n) {
            if (n != null )
                return this._byId[n] || this._byId[n.id] || this._byId[n.cid]
        },
        at: function(n) {
            return this.models[n]
        },
        where: function(n, t) {
            return i.isEmpty(n) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var i in n)
                    if (n[i] !== t.get(i))
                        return !1;
                return !0
            }
            )
        },
        findWhere: function(n) {
            return this.where(n, !0)
        },
        sort: function(n) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return n || (n = {}),
            i.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)),
            n.silent || this.trigger("sort", this, n),
            this
        },
        pluck: function(n) {
            return i.invoke(this.models, "get", n)
        },
        fetch: function(n) {
            n = n ? i.clone(n) : {};
            n.parse === void 0 && (n.parse = !0);
            var r = n.success
              , t = this;
            return n.success = function(i) {
                var u = n.reset ? "reset" : "set";
                t[u](i, n);
                r && r(t, i, n);
                t.trigger("sync", t, i, n)
            }
            ,
            o(this, n),
            this.sync("read", this, n)
        },
        create: function(n, t) {
            if (t = t ? i.clone(t) : {},
            !(n = this._prepareModel(n, t)))
                return !1;
            t.wait || this.add(n, t);
            var u = this
              , r = t.success;
            return t.success = function(n, i) {
                t.wait && u.add(n, t);
                r && r(n, i, t)
            }
            ,
            n.save(null , t),
            n
        },
        parse: function(n) {
            return n
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(n, t) {
            if (n instanceof e)
                return n;
            t = t ? i.clone(t) : {};
            t.collection = this;
            var r = new this.model(n,t);
            return r.validationError ? (this.trigger("invalid", this, r.validationError, t),
            !1) : r
        },
        _addReference: function(n) {
            this._byId[n.cid] = n;
            n.id != null  && (this._byId[n.id] = n);
            n.collection || (n.collection = this);
            n.on("all", this._onModelEvent, this)
        },
        _removeReference: function(n) {
            this === n.collection && delete n.collection;
            n.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(n, t, i, r) {
            (n !== "add" && n !== "remove" || i === this) && (n === "destroy" && this.remove(t, r),
            t && n === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)],
            t.id != null  && (this._byId[t.id] = t)),
            this.trigger.apply(this, arguments))
        }
    });
    w = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    i.each(w, function(n) {
        c.prototype[n] = function() {
            var t = s.call(arguments);
            return t.unshift(this.models),
            i[n].apply(i, t)
        }
    }
    );
    b = ["groupBy", "countBy", "sortBy", "indexBy"];
    i.each(b, function(n) {
        c.prototype[n] = function(t, r) {
            var u = i.isFunction(t) ? t : function(n) {
                return n.get(t)
            }
            ;
            return i[n](this.models, u, r)
        }
    }
    );
    var k = t.View = function(n) {
        this.cid = i.uniqueId("view");
        n || (n = {});
        i.extend(this, i.pick(n, ot));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    }
      , et = /^(\S+)\s*(.*)$/
      , ot = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    i.extend(k.prototype, u, {
        tagName: "div",
        $: function(n) {
            return this.$el.find(n)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(n, i) {
            return this.$el && this.undelegateEvents(),
            this.$el = n instanceof t.$ ? n : t.$(n),
            this.el = this.$el[0],
            i !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(n) {
            var r, t;
            if (!(n || (n = i.result(this, "events"))))
                return this;
            this.undelegateEvents();
            for (r in n)
                if (t = n[r],
                i.isFunction(t) || (t = this[n[r]]),
                t) {
                    var f = r.match(et)
                      , u = f[1]
                      , e = f[2];
                    if (t = i.bind(t, this),
                    u += ".delegateEvents" + this.cid,
                    e === "")
                        this.$el.on(u, t);
                    else
                        this.$el.on(u, e, t)
                }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            var n, r;
            this.el ? this.setElement(i.result(this, "el"), !1) : (n = i.extend({}, i.result(this, "attributes")),
            this.id && (n.id = i.result(this, "id")),
            this.className && (n["class"] = i.result(this, "className")),
            r = t.$("<" + i.result(this, "tagName") + ">").attr(n),
            this.setElement(r, !1))
        }
    });
    t.sync = function(n, r, u) {
        var e = g[n], f, o, s;
        return i.defaults(u || (u = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        }),
        f = {
            type: e,
            dataType: "json"
        },
        u.url || (f.url = i.result(r, "url") || a()),
        u.data == null  && r && (n === "create" || n === "update" || n === "patch") && (f.contentType = "application/json",
        f.data = JSON.stringify(u.attrs || r.toJSON(u))),
        u.emulateJSON && (f.contentType = "application/x-www-form-urlencoded",
        f.data = f.data ? {
            model: f.data
        } : {}),
        u.emulateHTTP && (e === "PUT" || e === "DELETE" || e === "PATCH") && (f.type = "POST",
        u.emulateJSON && (f.data._method = e),
        o = u.beforeSend,
        u.beforeSend = function(n) {
            return n.setRequestHeader("X-HTTP-Method-Override", e),
            o ? o.apply(this, arguments) : void 0
        }
        ),
        f.type === "GET" || u.emulateJSON || (f.processData = !1),
        f.type === "PATCH" && d && (f.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        ),
        s = u.xhr = t.ajax(i.extend(f, u)),
        r.trigger("request", r, s, u),
        s
    }
    ;
    d = typeof window != "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
    g = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    }
    ;
    var nt = t.Router = function(n) {
        n || (n = {});
        n.routes && (this.routes = n.routes);
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    }
      , st = /\((.*?)\)/g
      , ht = /(\(\?)?:\w+/g
      , ct = /\*\w+/g
      , lt = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend(nt.prototype, u, {
        initialize: function() {},
        route: function(n, r, u) {
            i.isRegExp(n) || (n = this._routeToRegExp(n));
            i.isFunction(r) && (u = r,
            r = "");
            u || (u = this[r]);
            var f = this;
            return t.history.route(n, function(i) {
                var e = f._extractParameters(n, i);
                f.execute(u, e);
                f.trigger.apply(f, ["route:" + r].concat(e));
                f.trigger("route", r, e);
                t.history.trigger("route", f, r, e)
            }
            ),
            this
        },
        execute: function(n, t) {
            n && n.apply(this, t)
        },
        navigate: function(n, i) {
            return t.history.navigate(n, i),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = i.result(this, "routes");
                for (var n, t = i.keys(this.routes); (n = t.pop()) != null ; )
                    this.route(n, this.routes[n])
            }
        },
        _routeToRegExp: function(n) {
            return n = n.replace(lt, "\\$&").replace(st, "(?:$1)?").replace(ht, function(n, t) {
                return t ? n : "([^/?]+)"
            }
            ).replace(ct, "([^?]*?)"),
            new RegExp("^" + n + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(n, t) {
            var r = n.exec(t).slice(1);
            return i.map(r, function(n, t) {
                return t === r.length - 1 ? n || null  : n ? decodeURIComponent(n) : null
            }
            )
        }
    });
    var f = t.History = function() {
        this.handlers = [];
        i.bindAll(this, "checkUrl");
        typeof window != "undefined" && (this.location = window.location,
        this.history = window.history)
    }
      , tt = /^[#\/]|\s+$/g
      , at = /^\/+|\/+$/g
      , vt = /msie [\w.]+/
      , yt = /\/$/
      , pt = /#.*$/;
    return f.started = !1,
    i.extend(f.prototype, u, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(n) {
            var t = (n || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(n, t) {
            if (n == null )
                if (this._hasPushState || !this._wantsHashChange || t) {
                    n = decodeURI(this.location.pathname + this.location.search);
                    var i = this.root.replace(yt, "");
                    n.indexOf(i) || (n = n.slice(i.length))
                } else
                    n = this.getHash();
            return n.replace(tt, "")
        },
        start: function(n) {
            var o, s;
            if (f.started)
                throw new Error("Backbone.history has already been started");
            f.started = !0;
            this.options = i.extend({
                root: "/"
            }, this.options, n);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== !1;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var r = this.getFragment()
              , u = document.documentMode
              , e = vt.exec(navigator.userAgent.toLowerCase()) && (!u || u <= 7);
            if (this.root = ("/" + this.root + "/").replace(at, "/"),
            e && this._wantsHashChange && (o = t.$('<iframe src="javascript:0" tabindex="-1">'),
            this.iframe = o.hide().appendTo("body")[0].contentWindow,
            this.navigate(r)),
            this._hasPushState)
                t.$(window).on("popstate", this.checkUrl);
            else if (this._wantsHashChange && "onhashchange" in window && !e)
                t.$(window).on("hashchange", this.checkUrl);
            else
                this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            if (this.fragment = r,
            s = this.location,
            this._wantsHashChange && this._wantsPushState)
                if (this._hasPushState || this.atRoot())
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(tt, ""),
                    this.history.replaceState({}, document.title, this.root + this.fragment));
                else
                    return this.fragment = this.getFragment(null , !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
            if (!this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            this._checkUrlInterval && clearInterval(this._checkUrlInterval);
            f.started = !1
        },
        route: function(n, t) {
            this.handlers.unshift({
                route: n,
                callback: t
            })
        },
        checkUrl: function() {
            var n = this.getFragment();
            if (n === this.fragment && this.iframe && (n = this.getFragment(this.getHash(this.iframe))),
            n === this.fragment)
                return !1;
            this.iframe && this.navigate(n);
            this.loadUrl()
        },
        loadUrl: function(n) {
            return n = this.fragment = this.getFragment(n),
            i.any(this.handlers, function(t) {
                if (t.route.test(n))
                    return t.callback(n),
                    !0
            }
            )
        },
        navigate: function(n, t) {
            if (!f.started)
                return !1;
            t && t !== !0 || (t = {
                trigger: !!t
            });
            var i = this.root + (n = this.getFragment(n || ""));
            if (n = n.replace(pt, ""),
            this.fragment !== n) {
                if (this.fragment = n,
                n === "" && i !== "/" && (i = i.slice(0, -1)),
                this._hasPushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else if (this._wantsHashChange)
                    this._updateHash(this.location, n, t.replace),
                    this.iframe && n !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, n, t.replace));
                else
                    return this.location.assign(i);
                if (t.trigger)
                    return this.loadUrl(n)
            }
        },
        _updateHash: function(n, t, i) {
            if (i) {
                var r = n.href.replace(/(javascript:|#).*$/, "");
                n.replace(r + "#" + t)
            } else
                n.hash = "#" + t
        }
    }),
    t.history = new f,
    it = function(n, t) {
        var u = this, r, f;
        return r = n && i.has(n, "constructor") ? n.constructor : function() {
            return u.apply(this, arguments)
        }
        ,
        i.extend(r, u, t),
        f = function() {
            this.constructor = r
        }
        ,
        f.prototype = u.prototype,
        r.prototype = new f,
        n && i.extend(r.prototype, n),
        r.__super__ = u.prototype,
        r
    }
    ,
    e.extend = c.extend = nt.extend = k.extend = f.extend = it,
    a = function() {
        throw new Error('A "url" property or function must be specified');
    }
    ,
    o = function(n, t) {
        var i = t.error;
        t.error = function(r) {
            i && i(n, r, t);
            n.trigger("error", n, r, t)
        }
    }
    ,
    t
}
),
function(n) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|android|ipad|playbook|silkfennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
}
(navigator.userAgent || navigator.vendor || window.opera),
function(n) {
    function r() {}
    function t(n) {
        function u(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
            }
            )
        }
        function f(r, u) {
            n.fn[r] = function(f) {
                var h, o, c, l, e, s;
                if (typeof f == "string") {
                    for (h = i.call(arguments, 1),
                    o = 0,
                    c = this.length; o < c; o++) {
                        if (l = this[o],
                        e = n.data(l, r),
                        !e) {
                            t("cannot call methods on " + r + " prior to initialization; attempted to call '" + f + "'");
                            continue
                        }
                        if (!n.isFunction(e[f]) || f.charAt(0) === "_") {
                            t("no such method '" + f + "' for " + r + " instance");
                            continue
                        }
                        if (s = e[f].apply(e, h),
                        s !== undefined)
                            return s
                    }
                    return this
                }
                return this.each(function() {
                    var t = n.data(this, r);
                    t ? (t.option(f),
                    t._init()) : (t = new u(this,f),
                    n.data(this, r, t))
                }
                )
            }
        }
        if (n) {
            var t = typeof console == "undefined" ? r : function(n) {
                console.error(n)
            }
            ;
            return n.bridget = function(n, t) {
                u(t);
                f(n, t)
            }
            ,
            n.bridget
        }
    }
    var i = Array.prototype.slice;
    typeof define == "function" && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t(n.jQuery)
}
(window),
function(n) {
    function f(t) {
        var i = n.event;
        return i.target = i.target || i.srcElement || t,
        i
    }
    var t = document.documentElement, u = function() {}
    , i, r;
    t.addEventListener ? u = function(n, t, i) {
        n.addEventListener(t, i, !1)
    }
     : t.attachEvent && (u = function(n, t, i) {
        n[t + i] = i.handleEvent ? function() {
            var t = f(n);
            i.handleEvent.call(i, t)
        }
         : function() {
            var t = f(n);
            i.call(n, t)
        }
        ;
        n.attachEvent("on" + t, n[t + i])
    }
    );
    i = function() {}
    ;
    t.removeEventListener ? i = function(n, t, i) {
        n.removeEventListener(t, i, !1)
    }
     : t.detachEvent && (i = function(n, t, i) {
        n.detachEvent("on" + t, n[t + i]);
        try {
            delete n[t + i]
        } catch (r) {
            n[t + i] = undefined
        }
    }
    );
    r = {
        bind: u,
        unbind: i
    };
    typeof define == "function" && define.amd ? define("eventie/eventie", r) : typeof exports == "object" ? module.exports = r : n.eventie = r
}
(this),
function(n) {
    function t(n) {
        typeof n == "function" && (t.isReady ? n() : r.push(n))
    }
    function u(n) {
        var o = n.type === "readystatechange" && i.readyState !== "complete", u, f, e;
        if (!t.isReady && !o)
            for (t.isReady = !0,
            u = 0,
            f = r.length; u < f; u++)
                e = r[u],
                e()
    }
    function f(r) {
        return r.bind(i, "DOMContentLoaded", u),
        r.bind(i, "readystatechange", u),
        r.bind(n, "load", u),
        t
    }
    var i = n.document
      , r = [];
    t.isReady = !1;
    typeof define == "function" && define.amd ? (t.isReady = typeof requirejs == "function",
    define("doc-ready/doc-ready", ["eventie/eventie"], f)) : n.docReady = f(n.eventie)
}
(this),
function() {
    function t() {}
    function u(n, t) {
        for (var i = n.length; i--; )
            if (n[i].listener === t)
                return i;
        return -1
    }
    function i(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }
    var n = t.prototype
      , r = this
      , f = r.EventEmitter;
    n.getListeners = function(n) {
        var t = this._getEvents(), r, i;
        if (n instanceof RegExp) {
            r = {};
            for (i in t)
                t.hasOwnProperty(i) && n.test(i) && (r[i] = t[i])
        } else
            r = t[n] || (t[n] = []);
        return r
    }
    ;
    n.flattenListeners = function(n) {
        for (var i = [], t = 0; t < n.length; t += 1)
            i.push(n[t].listener);
        return i
    }
    ;
    n.getListenersAsObject = function(n) {
        var t = this.getListeners(n), i;
        return t instanceof Array && (i = {},
        i[n] = t),
        i || t
    }
    ;
    n.addListener = function(n, t) {
        var i = this.getListenersAsObject(n)
          , f = typeof t == "object";
        for (var r in i)
            i.hasOwnProperty(r) && u(i[r], t) === -1 && i[r].push(f ? t : {
                listener: t,
                once: !1
            });
        return this
    }
    ;
    n.on = i("addListener");
    n.addOnceListener = function(n, t) {
        return this.addListener(n, {
            listener: t,
            once: !0
        })
    }
    ;
    n.once = i("addOnceListener");
    n.defineEvent = function(n) {
        return this.getListeners(n),
        this
    }
    ;
    n.defineEvents = function(n) {
        for (var t = 0; t < n.length; t += 1)
            this.defineEvent(n[t]);
        return this
    }
    ;
    n.removeListener = function(n, t) {
        var i = this.getListenersAsObject(n), r;
        for (var f in i)
            i.hasOwnProperty(f) && (r = u(i[f], t),
            r !== -1 && i[f].splice(r, 1));
        return this
    }
    ;
    n.off = i("removeListener");
    n.addListeners = function(n, t) {
        return this.manipulateListeners(!1, n, t)
    }
    ;
    n.removeListeners = function(n, t) {
        return this.manipulateListeners(!0, n, t)
    }
    ;
    n.manipulateListeners = function(n, t, i) {
        var r, u, f = n ? this.removeListener : this.addListener, e = n ? this.removeListeners : this.addListeners;
        if (typeof t != "object" || t instanceof RegExp)
            for (r = i.length; r--; )
                f.call(this, t, i[r]);
        else
            for (r in t)
                t.hasOwnProperty(r) && (u = t[r]) && (typeof u == "function" ? f.call(this, r, u) : e.call(this, r, u));
        return this
    }
    ;
    n.removeEvent = function(n) {
        var r = typeof n, t = this._getEvents(), i;
        if (r === "string")
            delete t[n];
        else if (n instanceof RegExp)
            for (i in t)
                t.hasOwnProperty(i) && n.test(i) && delete t[i];
        else
            delete this._events;
        return this
    }
    ;
    n.removeAllListeners = i("removeEvent");
    n.emitEvent = function(n, t) {
        var r = this.getListenersAsObject(n), i, f, u, e;
        for (u in r)
            if (r.hasOwnProperty(u))
                for (f = r[u].length; f--; )
                    i = r[u][f],
                    i.once === !0 && this.removeListener(n, i.listener),
                    e = i.listener.apply(this, t || []),
                    e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
        return this
    }
    ;
    n.trigger = i("emitEvent");
    n.emit = function(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(n, t)
    }
    ;
    n.setOnceReturnValue = function(n) {
        return this._onceReturnValue = n,
        this
    }
    ;
    n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ;
    n._getEvents = function() {
        return this._events || (this._events = {})
    }
    ;
    t.noConflict = function() {
        return r.EventEmitter = f,
        t
    }
    ;
    typeof define == "function" && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }
    ) : typeof module == "object" && module.exports ? module.exports = t : this.EventEmitter = t
}
.call(this),
function(n) {
    function t(n) {
        var u, t, f;
        if (n) {
            if (typeof r[n] == "string")
                return n;
            for (n = n.charAt(0).toUpperCase() + n.slice(1),
            t = 0,
            f = i.length; t < f; t++)
                if (u = i[t] + n,
                typeof r[u] == "string")
                    return u
        }
    }
    var i = "Webkit Moz ms Ms O".split(" ")
      , r = document.documentElement.style;
    typeof define == "function" && define.amd ? define("get-style-property/get-style-property", [], function() {
        return t
    }
    ) : typeof exports == "object" ? module.exports = t : n.getStyleProperty = t
}
(window),
function(n) {
    function r(n) {
        var t = parseFloat(n)
          , i = n.indexOf("%") === -1 && !isNaN(t);
        return i && t
    }
    function e() {
        for (var r, i = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, n = 0, u = t.length; n < u; n++)
            r = t[n],
            i[r] = 0;
        return i
    }
    function u(n) {
        function s(n) {
            var s, i, p, c, w, a, l, v, y;
            if (typeof n == "string" && (n = document.querySelector(n)),
            n && typeof n == "object" && n.nodeType) {
                if (s = f(n),
                s.display === "none")
                    return e();
                for (i = {},
                i.width = n.offsetWidth,
                i.height = n.offsetHeight,
                p = i.isBorderBox = !!(u && s[u] && s[u] === "border-box"),
                c = 0,
                w = t.length; c < w; c++)
                    a = t[c],
                    l = s[a],
                    l = h(n, l),
                    v = parseFloat(l),
                    i[a] = isNaN(v) ? 0 : v;
                var b = i.paddingLeft + i.paddingRight
                  , k = i.paddingTop + i.paddingBottom
                  , it = i.marginLeft + i.marginRight
                  , rt = i.marginTop + i.marginBottom
                  , d = i.borderLeftWidth + i.borderRightWidth
                  , g = i.borderTopWidth + i.borderBottomWidth
                  , nt = p && o
                  , tt = r(s.width);
                return tt !== !1 && (i.width = tt + (nt ? 0 : b + d)),
                y = r(s.height),
                y !== !1 && (i.height = y + (nt ? 0 : k + g)),
                i.innerWidth = i.width - (b + d),
                i.innerHeight = i.height - (k + g),
                i.outerWidth = i.width + it,
                i.outerHeight = i.height + rt,
                i
            }
        }
        function h(n, t) {
            if (i || t.indexOf("%") === -1)
                return t;
            var r = n.style
              , e = r.left
              , u = n.runtimeStyle
              , f = u && u.left;
            return f && (u.left = n.currentStyle.left),
            r.left = t,
            t = r.pixelLeft,
            r.left = e,
            f && (u.left = f),
            t
        }
        var u = n("boxSizing"), o;
        return function() {
            var n, t, i;
            u && (n = document.createElement("div"),
            n.style.width = "200px",
            n.style.padding = "1px 2px 3px 4px",
            n.style.borderStyle = "solid",
            n.style.borderWidth = "1px 2px 3px 4px",
            n.style[u] = "border-box",
            t = document.body || document.documentElement,
            t.appendChild(n),
            i = f(n),
            o = r(i.width) === 200,
            t.removeChild(n))
        }
        (),
        s
    }
    var i = n.getComputedStyle
      , f = i ? function(n) {
        return i(n, null )
    }
     : function(n) {
        return n.currentStyle
    }
      , t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    typeof define == "function" && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], u) : typeof exports == "object" ? module.exports = u(require("get-style-property")) : n.getSize = u(n.getStyleProperty)
}
(window),
function(n, t) {
    function r(n, t) {
        return n[u](t)
    }
    function f(n) {
        if (!n.parentNode) {
            var t = document.createDocumentFragment();
            t.appendChild(n)
        }
    }
    function s(n, t) {
        var r, i, u;
        for (f(n),
        r = n.parentNode.querySelectorAll(t),
        i = 0,
        u = r.length; i < u; i++)
            if (r[i] === n)
                return !0;
        return !1
    }
    function h(n, t) {
        return f(n),
        r(n, t)
    }
    var u = function() {
        var i, n, u, f, r;
        if (t.matchesSelector)
            return "matchesSelector";
        for (i = ["webkit", "moz", "ms", "o"],
        n = 0,
        u = i.length; n < u; n++)
            if (f = i[n],
            r = f + "MatchesSelector",
            t[r])
                return r
    }
    (), i, e, o;
    u ? (e = document.createElement("div"),
    o = r(e, "div"),
    i = o ? r : h) : i = s;
    typeof define == "function" && define.amd ? define("matches-selector/matches-selector", [], function() {
        return i
    }
    ) : window.matchesSelector = i
}
(this, Element.prototype),
function(n) {
    function u(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function f(n) {
        for (var t in n)
            return !1;
        return t = null ,
        !0
    }
    function e(n) {
        return n.replace(/([A-Z])/g, function(n) {
            return "-" + n.toLowerCase()
        }
        )
    }
    function i(n, t, i) {
        function o(n, t) {
            n && (this.element = n,
            this.layout = t,
            this.position = {
                x: 0,
                y: 0
            },
            this._create())
        }
        var s = i("transition"), h = i("transform"), w = s && h, b = !!i("perspective"), c = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[s], l = ["transform", "transition", "transitionDuration", "transitionProperty"], k = function() {
            for (var n, t, u = {}, r = 0, f = l.length; r < f; r++)
                n = l[r],
                t = i(n),
                t && t !== n && (u[n] = t);
            return u
        }
        (), a, v, y, p;
        return u(o.prototype, n.prototype),
        o.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            };
            this.css({
                position: "absolute"
            })
        }
        ,
        o.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }
        ,
        o.prototype.getSize = function() {
            this.size = t(this.element)
        }
        ,
        o.prototype.css = function(n) {
            var r = this.element.style, t, i;
            for (t in n)
                i = k[t] || t,
                r[i] = n[t]
        }
        ,
        o.prototype.getPosition = function() {
            var u = r(this.element), f = this.layout.options, e = f.isOriginLeft, o = f.isOriginTop, n = parseInt(u[e ? "left" : "right"], 10), t = parseInt(u[o ? "top" : "bottom"], 10), i;
            n = isNaN(n) ? 0 : n;
            t = isNaN(t) ? 0 : t;
            i = this.layout.size;
            n -= e ? i.paddingLeft : i.paddingRight;
            t -= o ? i.paddingTop : i.paddingBottom;
            this.position.x = n;
            this.position.y = t
        }
        ,
        o.prototype.layoutPosition = function() {
            var t = this.layout.size
              , i = this.layout.options
              , n = {};
            i.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px",
            n.right = "") : (n.right = this.position.x + t.paddingRight + "px",
            n.left = "");
            i.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px",
            n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px",
            n.top = "");
            this.css(n);
            this.emitEvent("layout", [this])
        }
        ,
        a = b ? function(n, t) {
            return "translate3d(" + n + "px, " + t + "px, 0)"
        }
         : function(n, t) {
            return "translate(" + n + "px, " + t + "px)"
        }
        ,
        o.prototype._transitionTo = function(n, t) {
            this.getPosition();
            var e = this.position.x
              , o = this.position.y
              , s = parseInt(n, 10)
              , h = parseInt(t, 10)
              , c = s === this.position.x && h === this.position.y;
            if (this.setPosition(n, t),
            c && !this.isTransitioning) {
                this.layoutPosition();
                return
            }
            var i = n - e
              , r = t - o
              , u = {}
              , f = this.layout.options;
            i = f.isOriginLeft ? i : -i;
            r = f.isOriginTop ? r : -r;
            u.transform = a(i, r);
            this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }
        ,
        o.prototype.goTo = function(n, t) {
            this.setPosition(n, t);
            this.layoutPosition()
        }
        ,
        o.prototype.moveTo = w ? o.prototype._transitionTo : o.prototype.goTo,
        o.prototype.setPosition = function(n, t) {
            this.position.x = parseInt(n, 10);
            this.position.y = parseInt(t, 10)
        }
        ,
        o.prototype._nonTransition = function(n) {
            this.css(n.to);
            n.isCleaning && this._removeStyles(n.to);
            for (var t in n.onTransitionEnd)
                n.onTransitionEnd[t].call(this)
        }
        ,
        o.prototype._transition = function(n) {
            var i, t, r;
            if (!parseFloat(this.layout.options.transitionDuration)) {
                this._nonTransition(n);
                return
            }
            i = this._transn;
            for (t in n.onTransitionEnd)
                i.onEnd[t] = n.onTransitionEnd[t];
            for (t in n.to)
                i.ingProperties[t] = !0,
                n.isCleaning && (i.clean[t] = !0);
            n.from && (this.css(n.from),
            r = this.element.offsetHeight,
            r = null );
            this.enableTransition(n.to);
            this.css(n.to);
            this.isTransitioning = !0
        }
        ,
        v = h && e(h) + ",opacity",
        o.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }),
            this.element.addEventListener(c, this, !1))
        }
        ,
        o.prototype.transition = o.prototype[s ? "_transition" : "_nonTransition"],
        o.prototype.onwebkitTransitionEnd = function(n) {
            this.ontransitionend(n)
        }
        ,
        o.prototype.onotransitionend = function(n) {
            this.ontransitionend(n)
        }
        ,
        y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        },
        o.prototype.ontransitionend = function(n) {
            var t, i, r;
            n.target === this.element && (t = this._transn,
            i = y[n.propertyName] || n.propertyName,
            delete t.ingProperties[i],
            f(t.ingProperties) && this.disableTransition(),
            i in t.clean && (this.element.style[n.propertyName] = "",
            delete t.clean[i]),
            i in t.onEnd && (r = t.onEnd[i],
            r.call(this),
            delete t.onEnd[i]),
            this.emitEvent("transitionEnd", [this]))
        }
        ,
        o.prototype.disableTransition = function() {
            this.removeTransitionStyles();
            this.element.removeEventListener(c, this, !1);
            this.isTransitioning = !1
        }
        ,
        o.prototype._removeStyles = function(n) {
            var t = {};
            for (var i in n)
                t[i] = "";
            this.css(t)
        }
        ,
        p = {
            transitionProperty: "",
            transitionDuration: ""
        },
        o.prototype.removeTransitionStyles = function() {
            this.css(p)
        }
        ,
        o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element);
            this.emitEvent("remove", [this])
        }
        ,
        o.prototype.remove = function() {
            if (!s || !parseFloat(this.layout.options.transitionDuration)) {
                this.removeElem();
                return
            }
            var n = this;
            this.on("transitionEnd", function() {
                return n.removeElem(),
                !0
            }
            );
            this.hide()
        }
        ,
        o.prototype.reveal = function() {
            delete this.isHidden;
            this.css({
                display: ""
            });
            var n = this.layout.options;
            this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0
            })
        }
        ,
        o.prototype.hide = function() {
            this.isHidden = !0;
            this.css({
                display: ""
            });
            var n = this.layout.options;
            this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }
        ,
        o.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }
        ,
        o
    }
    var t = n.getComputedStyle
      , r = t ? function(n) {
        return t(n, null )
    }
     : function(n) {
        return n.currentStyle
    }
    ;
    typeof define == "function" && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (n.Outlayer = {},
    n.Outlayer.Item = i(n.EventEmitter, n.getSize, n.getStyleProperty))
}
(window),
function(n) {
    function i(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function l(n) {
        return c.call(n) === "[object Array]"
    }
    function u(n) {
        var t = [], i, r;
        if (l(n))
            t = n;
        else if (n && typeof n.length == "number")
            for (i = 0,
            r = n.length; i < r; i++)
                t.push(n[i]);
        else
            t.push(n);
        return t
    }
    function s(n, t) {
        var i = a(t, n);
        i !== -1 && t.splice(i, 1)
    }
    function v(n) {
        return n.replace(/(.)([A-Z])/g, function(n, t, i) {
            return t + "-" + i
        }
        ).toLowerCase()
    }
    function h(h, c, l, a, y, p) {
        function w(n, t) {
            if (typeof n == "string" && (n = e.querySelector(n)),
            !n || !f(n)) {
                r && r.error("Bad " + this.constructor.namespace + " element: " + n);
                return
            }
            this.element = n;
            this.options = i({}, this.constructor.defaults);
            this.option(t);
            var u = ++k;
            this.element.outlayerGUID = u;
            b[u] = this;
            this._create();
            this.options.isInitLayout && this.layout()
        }
        var k = 0
          , b = {};
        return w.namespace = "outlayer",
        w.Item = p,
        w.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        },
        i(w.prototype, l.prototype),
        w.prototype.option = function(n) {
            i(this.options, n)
        }
        ,
        w.prototype._create = function() {
            this.reloadItems();
            this.stamps = [];
            this.stamp(this.options.stamp);
            i(this.element.style, this.options.containerStyle);
            this.options.isResizeBound && this.bindResize()
        }
        ,
        w.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }
        ,
        w.prototype._itemize = function(n) {
            for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; t < o; t++)
                u = i[t],
                f = new e(u,this),
                r.push(f);
            return r
        }
        ,
        w.prototype._filterFindItemElements = function(n) {
            var r, i, e, h, t, s, o, c;
            for (n = u(n),
            r = this.options.itemSelector,
            i = [],
            e = 0,
            h = n.length; e < h; e++)
                if (t = n[e],
                f(t))
                    if (r)
                        for (y(t, r) && i.push(t),
                        s = t.querySelectorAll(r),
                        o = 0,
                        c = s.length; o < c; o++)
                            i.push(s[o]);
                    else
                        i.push(t);
            return i
        }
        ,
        w.prototype.getItemElements = function() {
            for (var t = [], n = 0, i = this.items.length; n < i; n++)
                t.push(this.items[n].element);
            return t
        }
        ,
        w.prototype.layout = function() {
            this._resetLayout();
            this._manageStamps();
            var n = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, n);
            this._isLayoutInited = !0
        }
        ,
        w.prototype._init = w.prototype.layout,
        w.prototype._resetLayout = function() {
            this.getSize()
        }
        ,
        w.prototype.getSize = function() {
            this.size = a(this.element)
        }
        ,
        w.prototype._getMeasurement = function(n, t) {
            var i = this.options[n], r;
            i ? (typeof i == "string" ? r = this.element.querySelector(i) : f(i) && (r = i),
            this[n] = r ? a(r)[t] : i) : this[n] = 0
        }
        ,
        w.prototype.layoutItems = function(n, t) {
            n = this._getItemsForLayout(n);
            this._layoutItems(n, t);
            this._postLayout()
        }
        ,
        w.prototype._getItemsForLayout = function(n) {
            for (var i, r = [], t = 0, u = n.length; t < u; t++)
                i = n[t],
                i.isIgnored || r.push(i);
            return r
        }
        ,
        w.prototype._layoutItems = function(n, t) {
            function o() {
                e.emitEvent("layoutComplete", [e, n])
            }
            var e = this, f, i, s, r, u;
            if (!n || !n.length) {
                o();
                return
            }
            for (this._itemsOn(n, "layout", o),
            f = [],
            i = 0,
            s = n.length; i < s; i++)
                r = n[i],
                u = this._getItemLayoutPosition(r),
                u.item = r,
                u.isInstant = t || r.isLayoutInstant,
                f.push(u);
            this._processLayoutQueue(f)
        }
        ,
        w.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }
        ,
        w.prototype._processLayoutQueue = function(n) {
            for (var t, i = 0, r = n.length; i < r; i++)
                t = n[i],
                this._positionItem(t.item, t.x, t.y, t.isInstant)
        }
        ,
        w.prototype._positionItem = function(n, t, i, r) {
            r ? n.goTo(t, i) : n.moveTo(t, i)
        }
        ,
        w.prototype._postLayout = function() {
            this.resizeContainer()
        }
        ,
        w.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var n = this._getContainerSize();
                n && (this._setContainerMeasure(n.width, !0),
                this._setContainerMeasure(n.height, !1))
            }
        }
        ,
        w.prototype._getContainerSize = o,
        w.prototype._setContainerMeasure = function(n, t) {
            if (n !== undefined) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
                n = Math.max(n, 0);
                this.element.style[t ? "width" : "height"] = n + "px"
            }
        }
        ,
        w.prototype._itemsOn = function(n, t, i) {
            function s() {
                return u++,
                u === e && i.call(o),
                !0
            }
            for (var f, u = 0, e = n.length, o = this, r = 0, h = n.length; r < h; r++) {
                f = n[r];
                f.on(t, s)
            }
        }
        ,
        w.prototype.ignore = function(n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        }
        ,
        w.prototype.unignore = function(n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        }
        ,
        w.prototype.stamp = function(n) {
            var t, i, r;
            if (n = this._find(n),
            n)
                for (this.stamps = this.stamps.concat(n),
                t = 0,
                i = n.length; t < i; t++)
                    r = n[t],
                    this.ignore(r)
        }
        ,
        w.prototype.unstamp = function(n) {
            var t, r, i;
            if (n = this._find(n),
            n)
                for (t = 0,
                r = n.length; t < r; t++)
                    i = n[t],
                    s(i, this.stamps),
                    this.unignore(i)
        }
        ,
        w.prototype._find = function(n) {
            if (n)
                return typeof n == "string" && (n = this.element.querySelectorAll(n)),
                u(n)
        }
        ,
        w.prototype._manageStamps = function() {
            var n, t, i;
            if (this.stamps && this.stamps.length)
                for (this._getBoundingRect(),
                n = 0,
                t = this.stamps.length; n < t; n++)
                    i = this.stamps[n],
                    this._manageStamp(i)
        }
        ,
        w.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect()
              , n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        }
        ,
        w.prototype._manageStamp = o,
        w.prototype._getElementOffset = function(n) {
            var t = n.getBoundingClientRect()
              , i = this._boundingRect
              , r = a(n);
            return {
                left: t.left - i.left - r.marginLeft,
                top: t.top - i.top - r.marginTop,
                right: i.right - t.right - r.marginRight,
                bottom: i.bottom - t.bottom - r.marginBottom
            }
        }
        ,
        w.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }
        ,
        w.prototype.bindResize = function() {
            this.isResizeBound || (h.bind(n, "resize", this),
            this.isResizeBound = !0)
        }
        ,
        w.prototype.unbindResize = function() {
            this.isResizeBound && h.unbind(n, "resize", this);
            this.isResizeBound = !1
        }
        ,
        w.prototype.onresize = function() {
            function t() {
                n.resize();
                delete n.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var n = this;
            this.resizeTimeout = setTimeout(t, 100)
        }
        ,
        w.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }
        ,
        w.prototype.needsResizeLayout = function() {
            var n = a(this.element)
              , t = this.size && n;
            return t && n.innerWidth !== this.size.innerWidth
        }
        ,
        w.prototype.addItems = function(n) {
            var t = this._itemize(n);
            return t.length && (this.items = this.items.concat(t)),
            t
        }
        ,
        w.prototype.appended = function(n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0),
            this.reveal(t))
        }
        ,
        w.prototype.prepended = function(n) {
            var t = this._itemize(n), i;
            t.length && (i = this.items.slice(0),
            this.items = t.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(t, !0),
            this.reveal(t),
            this.layoutItems(i))
        }
        ,
        w.prototype.reveal = function(n) {
            var i = n && n.length, t, r;
            if (i)
                for (t = 0; t < i; t++)
                    r = n[t],
                    r.reveal()
        }
        ,
        w.prototype.hide = function(n) {
            var i = n && n.length, t, r;
            if (i)
                for (t = 0; t < i; t++)
                    r = n[t],
                    r.hide()
        }
        ,
        w.prototype.getItem = function(n) {
            for (var i, t = 0, r = this.items.length; t < r; t++)
                if (i = this.items[t],
                i.element === n)
                    return i
        }
        ,
        w.prototype.getItems = function(n) {
            var i, t, u, f, r;
            if (n && n.length) {
                for (i = [],
                t = 0,
                u = n.length; t < u; t++)
                    f = n[t],
                    r = this.getItem(f),
                    r && i.push(r);
                return i
            }
        }
        ,
        w.prototype.remove = function(n) {
            var t, i, f, r;
            if (n = u(n),
            t = this.getItems(n),
            t && t.length)
                for (this._itemsOn(t, "remove", function() {
                    this.emitEvent("removeComplete", [this, t])
                }
                ),
                i = 0,
                f = t.length; i < f; i++)
                    r = t[i],
                    r.remove(),
                    s(r, this.items)
        }
        ,
        w.prototype.destroy = function() {
            var i = this.element.style, n, r, u;
            for (i.height = "",
            i.position = "",
            i.width = "",
            n = 0,
            r = this.items.length; n < r; n++)
                u = this.items[n],
                u.destroy();
            this.unbindResize();
            delete this.element.outlayerGUID;
            t && t.removeData(this.element, this.constructor.namespace)
        }
        ,
        w.data = function(n) {
            var t = n && n.outlayerGUID;
            return t && b[t]
        }
        ,
        w.create = function(n, u) {
            function f() {
                w.apply(this, arguments)
            }
            return Object.create ? f.prototype = Object.create(w.prototype) : i(f.prototype, w.prototype),
            f.prototype.constructor = f,
            f.defaults = i({}, w.defaults),
            i(f.defaults, u),
            f.prototype.settings = {},
            f.namespace = n,
            f.data = w.data,
            f.Item = function() {
                p.apply(this, arguments)
            }
            ,
            f.Item.prototype = new p,
            c(function() {
                for (var i, o, l, a, s = v(n), h = e.querySelectorAll(".js-" + s), c = "data-" + s + "-options", u = 0, y = h.length; u < y; u++) {
                    i = h[u];
                    o = i.getAttribute(c);
                    try {
                        l = o && JSON.parse(o)
                    } catch (p) {
                        r && r.error("Error parsing " + c + " on " + i.nodeName.toLowerCase() + (i.id ? "#" + i.id : "") + ": " + p);
                        continue
                    }
                    a = new f(i,l);
                    t && t.data(i, n, a)
                }
            }
            ),
            t && t.bridget && t.bridget(n, f),
            f
        }
        ,
        w.Item = p,
        w
    }
    var e = n.document
      , r = n.console
      , t = n.jQuery
      , o = function() {}
      , c = Object.prototype.toString
      , f = typeof HTMLElement == "object" ? function(n) {
        return n instanceof HTMLElement
    }
     : function(n) {
        return n && typeof n == "object" && n.nodeType === 1 && typeof n.nodeName == "string"
    }
      , a = Array.prototype.indexOf ? function(n, t) {
        return n.indexOf(t)
    }
     : function(n, t) {
        for (var i = 0, r = n.length; i < r; i++)
            if (n[i] === t)
                return i;
        return -1
    }
    ;
    typeof define == "function" && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], h) : n.Outlayer = h(n.eventie, n.docReady, n.EventEmitter, n.getSize, n.matchesSelector, n.Outlayer.Item)
}
(window),
function(n) {
    function t(n) {
        function t() {
            n.Item.apply(this, arguments)
        }
        return t.prototype = new n.Item,
        t.prototype._create = function() {
            this.id = this.layout.itemGUID++;
            n.Item.prototype._create.call(this);
            this.sortData = {}
        }
        ,
        t.prototype.updateSortData = function() {
            var t, i, n, r;
            if (!this.isIgnored) {
                this.sortData.id = this.id;
                this.sortData["original-order"] = this.id;
                this.sortData.random = Math.random();
                t = this.layout.options.getSortData;
                i = this.layout._sorters;
                for (n in t)
                    r = i[n],
                    this.sortData[n] = r(this.element, this)
            }
        }
        ,
        t
    }
    typeof define == "function" && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : (n.Isotope = n.Isotope || {},
    n.Isotope.Item = t(n.Outlayer))
}
(window),
function(n) {
    function t(n, t) {
        function i(n) {
            this.isotope = n;
            n && (this.options = n.options[this.namespace],
            this.element = n.element,
            this.items = n.filteredItems,
            this.size = n.size)
        }
        return function() {
            function e(n) {
                return function() {
                    return t.prototype[n].apply(this.isotope, arguments)
                }
            }
            for (var r, u = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, f = u.length; n < f; n++)
                r = u[n],
                i.prototype[r] = e(r)
        }
        (),
        i.prototype.needsVerticalResizeLayout = function() {
            var t = n(this.isotope.element)
              , i = this.isotope.size && t;
            return i && t.innerHeight !== this.isotope.size.innerHeight
        }
        ,
        i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }
        ,
        i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }
        ,
        i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }
        ,
        i.prototype.getSegmentSize = function(n, t) {
            var i = n + t, u = "outer" + t, r;
            (this._getMeasurement(i, u),
            this[i]) || (r = this.getFirstItemSize(),
            this[i] = r && r[u] || this.isotope.size["inner" + t])
        }
        ,
        i.prototype.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && n(t.element)
        }
        ,
        i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }
        ,
        i.prototype.getSize = function() {
            this.isotope.getSize();
            this.size = this.isotope.size
        }
        ,
        i.modes = {},
        i.create = function(n, t) {
            function r() {
                i.apply(this, arguments)
            }
            return r.prototype = new i,
            t && (r.options = t),
            r.prototype.namespace = n,
            i.modes[n] = r,
            r
        }
        ,
        i
    }
    typeof define == "function" && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : (n.Isotope = n.Isotope || {},
    n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
}
(window),
function(n) {
    function t(n, t) {
        var r = n.create("masonry");
        return r.prototype._resetLayout = function() {
            this.getSize();
            this._getMeasurement("columnWidth", "outerWidth");
            this._getMeasurement("gutter", "outerWidth");
            this.measureColumns();
            var n = this.cols;
            for (this.colYs = []; n--; )
                this.colYs.push(0);
            this.maxY = 0
        }
        ,
        r.prototype.measureColumns = function() {
            if (this.getContainerWidth(),
            !this.columnWidth) {
                var n = this.items[0]
                  , i = n && n.element;
                this.columnWidth = i && t(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter;
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth);
            this.cols = Math.max(this.cols, 1)
        }
        ,
        r.prototype.getContainerWidth = function() {
            var i = this.options.isFitWidth ? this.element.parentNode : this.element
              , n = t(i);
            this.containerWidth = n && n.innerWidth
        }
        ,
        r.prototype._getItemLayoutPosition = function(n) {
            var t;
            n.getSize();
            var e = n.size.outerWidth % this.columnWidth
              , s = e && e < 1 ? "round" : "ceil"
              , r = Math[s](n.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            var u = this._getColGroup(r)
              , f = Math.min.apply(Math, u)
              , o = i(u, f)
              , h = {
                x: this.columnWidth * o,
                y: f
            }
              , c = f + n.size.outerHeight
              , l = this.cols + 1 - u.length;
            for (t = 0; t < l; t++)
                this.colYs[o + t] = c;
            return h
        }
        ,
        r.prototype._getColGroup = function(n) {
            var i, r, t, u;
            if (n < 2)
                return this.colYs;
            for (i = [],
            r = this.cols + 1 - n,
            t = 0; t < r; t++)
                u = this.colYs.slice(t, t + n),
                i[t] = Math.max.apply(Math, u);
            return i
        }
        ,
        r.prototype._manageStamp = function(n) {
            var e = t(n), u = this._getElementOffset(n), o = this.options.isOriginLeft ? u.left : u.right, s = o + e.outerWidth, f = Math.floor(o / this.columnWidth), i, h, r;
            for (f = Math.max(0, f),
            i = Math.floor(s / this.columnWidth),
            i -= s % this.columnWidth ? 0 : 1,
            i = Math.min(this.cols - 1, i),
            h = (this.options.isOriginTop ? u.top : u.bottom) + e.outerHeight,
            r = f; r <= i; r++)
                this.colYs[r] = Math.max(h, this.colYs[r])
        }
        ,
        r.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var n = {
                height: this.maxY
            };
            return this.options.isFitWidth && (n.width = this._getContainerFitWidth()),
            n
        }
        ,
        r.prototype._getContainerFitWidth = function() {
            for (var n = 0, t = this.cols; --t; ) {
                if (this.colYs[t] !== 0)
                    break;
                n++
            }
            return (this.cols - n) * this.columnWidth - this.gutter
        }
        ,
        r.prototype.needsResizeLayout = function() {
            var n = this.containerWidth;
            return this.getContainerWidth(),
            n !== this.containerWidth
        }
        ,
        r
    }
    var i = Array.prototype.indexOf ? function(n, t) {
        return n.indexOf(t)
    }
     : function(n, t) {
        for (var u, i = 0, r = n.length; i < r; i++)
            if (u = n[i],
            u === t)
                return i;
        return -1
    }
    ;
    typeof define == "function" && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : n.Masonry = t(n.Outlayer, n.getSize)
}
(window),
function(n) {
    function i(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function t(n, t) {
        var r = n.create("masonry"), e = r.prototype._getElementOffset, o = r.prototype.layout, s = r.prototype._getMeasurement, u, f;
        return i(r.prototype, t.prototype),
        r.prototype._getElementOffset = e,
        r.prototype.layout = o,
        r.prototype._getMeasurement = s,
        u = r.prototype.measureColumns,
        r.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems;
            u.call(this)
        }
        ,
        f = r.prototype._manageStamp,
        r.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft;
            this.options.isOriginTop = this.isotope.options.isOriginTop;
            f.apply(this, arguments)
        }
        ,
        r
    }
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : t(n.Isotope.LayoutMode, n.Masonry)
}
(window),
function(n) {
    function t(n) {
        var t = n.create("fitRows");
        return t.prototype._resetLayout = function() {
            this.x = 0;
            this.y = 0;
            this.maxY = 0
        }
        ,
        t.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            this.x !== 0 && n.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0,
            this.y = this.maxY);
            var t = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight),
            this.x += n.size.outerWidth,
            t
        }
        ,
        t.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }
        ,
        t
    }
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : t(n.Isotope.LayoutMode)
}
(window),
function(n) {
    function t(n) {
        var t = n.create("vertical", {
            horizontalAlignment: 0
        });
        return t.prototype._resetLayout = function() {
            this.y = 0
        }
        ,
        t.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment
              , i = this.y;
            return this.y += n.size.outerHeight,
            {
                x: t,
                y: i
            }
        }
        ,
        t.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }
        ,
        t
    }
    typeof define == "function" && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : t(n.Isotope.LayoutMode)
}
(window),
function(n) {
    function u(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function h(n) {
        return s.call(n) === "[object Array]"
    }
    function i(n) {
        var t = [], i, r;
        if (h(n))
            t = n;
        else if (n && typeof n.length == "number")
            for (i = 0,
            r = n.length; i < r; i++)
                t.push(n[i]);
        else
            t.push(n);
        return t
    }
    function l(n, t) {
        var i = c(t, n);
        i !== -1 && t.splice(i, 1)
    }
    function r(n, r, e, s, h) {
        function y(n, t) {
            return function(i, r) {
                for (var h, c, u = 0, s = n.length; u < s; u++) {
                    var f = n[u]
                      , e = i.sortData[f]
                      , o = r.sortData[f];
                    if (e > o || e < o)
                        return h = t[f] !== undefined ? t[f] : t,
                        c = h ? 1 : -1,
                        (e > o ? 1 : -1) * c
                }
                return 0
            }
        }
        var c = n.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        }), a, v;
        return c.Item = s,
        c.LayoutMode = h,
        c.prototype._create = function() {
            this.itemGUID = 0;
            this._sorters = {};
            this._getSorters();
            n.prototype._create.call(this);
            this.modes = {};
            this.filteredItems = this.items;
            this.sortHistory = ["original-order"];
            for (var t in h.modes)
                this._initLayoutMode(t)
        }
        ,
        c.prototype.reloadItems = function() {
            this.itemGUID = 0;
            n.prototype.reloadItems.call(this)
        }
        ,
        c.prototype._itemize = function() {
            for (var r, t = n.prototype._itemize.apply(this, arguments), i = 0, u = t.length; i < u; i++)
                r = t[i],
                r.id = this.itemGUID++;
            return this._updateItemsSortData(t),
            t
        }
        ,
        c.prototype._initLayoutMode = function(n) {
            var t = h.modes[n]
              , i = this.options[n] || {};
            this.options[n] = t.options ? u(t.options, i) : i;
            this.modes[n] = new t(this)
        }
        ,
        c.prototype.layout = function() {
            if (!this._isLayoutInited && this.options.isInitLayout) {
                this.arrange();
                return
            }
            this._layout()
        }
        ,
        c.prototype._layout = function() {
            var n = this._getIsInstant();
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(this.filteredItems, n);
            this._isLayoutInited = !0
        }
        ,
        c.prototype.arrange = function(n) {
            this.option(n);
            this._getIsInstant();
            this.filteredItems = this._filter(this.items);
            this._sort();
            this._layout()
        }
        ,
        c.prototype._init = c.prototype.arrange,
        c.prototype._getIsInstant = function() {
            var n = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = n,
            n
        }
        ,
        c.prototype._filter = function(n) {
            function c() {
                f.reveal(o);
                f.hide(s)
            }
            var u = this.options.filter, i, h, t, r, f;
            u = u || "*";
            var e = []
              , o = []
              , s = []
              , l = this._getFilterTest(u);
            for (i = 0,
            h = n.length; i < h; i++)
                (t = n[i],
                t.isIgnored) || (r = l(t),
                r && e.push(t),
                r && t.isHidden ? o.push(t) : r || t.isHidden || s.push(t));
            return f = this,
            this._isInstant ? this._noTransition(c) : c(),
            e
        }
        ,
        c.prototype._getFilterTest = function(n) {
            return t && this.options.isJQueryFiltering ? function(i) {
                return t(i.element).is(n)
            }
             : typeof n == "function" ? function(t) {
                return n(t.element)
            }
             : function(t) {
                return e(t.element, n)
            }
        }
        ,
        c.prototype.updateSortData = function(n) {
            this._getSorters();
            n = i(n);
            var t = this.getItems(n);
            t = t.length ? t : this.items;
            this._updateItemsSortData(t)
        }
        ,
        c.prototype._getSorters = function() {
            var t = this.options.getSortData, n, i;
            for (n in t)
                i = t[n],
                this._sorters[n] = a(i)
        }
        ,
        c.prototype._updateItemsSortData = function(n) {
            for (var r, t = 0, i = n.length; t < i; t++)
                r = n[t],
                r.updateSortData()
        }
        ,
        a = function() {
            function n(n) {
                if (typeof n != "string")
                    return n;
                var i = f(n).split(" ")
                  , r = i[0]
                  , u = r.match(/^\[(.+)\]$/)
                  , s = u && u[1]
                  , e = t(s, r)
                  , o = c.sortDataParsers[i[1]];
                return o ? function(n) {
                    return n && o(e(n))
                }
                 : function(n) {
                    return n && e(n)
                }
            }
            function t(n, t) {
                return n ? function(t) {
                    return t.getAttribute(n)
                }
                 : function(n) {
                    var i = n.querySelector(t);
                    return i && o(i)
                }
            }
            return n
        }
        (),
        c.sortDataParsers = {
            parseInt: function(n) {
                return parseInt(n, 10)
            },
            parseFloat: function(n) {
                return parseFloat(n)
            }
        },
        c.prototype._sort = function() {
            var n = this.options.sortBy, t, i;
            n && (t = [].concat.apply(n, this.sortHistory),
            i = y(t, this.options.sortAscending),
            this.filteredItems.sort(i),
            n !== this.sortHistory[0] && this.sortHistory.unshift(n))
        }
        ,
        c.prototype._mode = function() {
            var n = this.options.layoutMode
              , t = this.modes[n];
            if (!t)
                throw new Error("No layout mode: " + n);
            return t.options = this.options[n],
            t
        }
        ,
        c.prototype._resetLayout = function() {
            n.prototype._resetLayout.call(this);
            this._mode()._resetLayout()
        }
        ,
        c.prototype._getItemLayoutPosition = function(n) {
            return this._mode()._getItemLayoutPosition(n)
        }
        ,
        c.prototype._manageStamp = function(n) {
            this._mode()._manageStamp(n)
        }
        ,
        c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }
        ,
        c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }
        ,
        c.prototype.appended = function(n) {
            var t = this.addItems(n), i;
            t.length && (i = this._filterRevealAdded(t),
            this.filteredItems = this.filteredItems.concat(i))
        }
        ,
        c.prototype.prepended = function(n) {
            var t = this._itemize(n), i, r;
            t.length && (i = this.items.slice(0),
            this.items = t.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            r = this._filterRevealAdded(t),
            this.layoutItems(i),
            this.filteredItems = r.concat(this.filteredItems))
        }
        ,
        c.prototype._filterRevealAdded = function(n) {
            var t = this._noTransition(function() {
                return this._filter(n)
            }
            );
            return this.layoutItems(t, !0),
            this.reveal(t),
            n
        }
        ,
        c.prototype.insert = function(n) {
            var i = this.addItems(n), t, f, r, u;
            if (i.length) {
                for (r = i.length,
                t = 0; t < r; t++)
                    f = i[t],
                    this.element.appendChild(f.element);
                for (u = this._filter(i),
                this._noTransition(function() {
                    this.hide(u)
                }
                ),
                t = 0; t < r; t++)
                    i[t].isLayoutInstant = !0;
                for (this.arrange(),
                t = 0; t < r; t++)
                    delete i[t].isLayoutInstant;
                this.reveal(u)
            }
        }
        ,
        v = c.prototype.remove,
        c.prototype.remove = function(n) {
            var t, r, u, f;
            if (n = i(n),
            t = this.getItems(n),
            v.call(this, n),
            t && t.length)
                for (r = 0,
                u = t.length; r < u; r++)
                    f = t[r],
                    l(f, this.filteredItems)
        }
        ,
        c.prototype._noTransition = function(n) {
            var i = this.options.transitionDuration, t;
            return this.options.transitionDuration = 0,
            t = n.call(this),
            this.options.transitionDuration = i,
            t
        }
        ,
        c
    }
    var t = n.jQuery
      , f = String.prototype.trim ? function(n) {
        return n.trim()
    }
     : function(n) {
        return n.replace(/^\s+|\s+$/g, "")
    }
      , e = document.documentElement
      , o = e.textContent ? function(n) {
        return n.textContent
    }
     : function(n) {
        return n.innerText
    }
      , s = Object.prototype.toString
      , c = Array.prototype.indexOf ? function(n, t) {
        return n.indexOf(t)
    }
     : function(n, t) {
        for (var i = 0, r = n.length; i < r; i++)
            if (n[i] === t)
                return i;
        return -1
    }
    ;
    typeof define == "function" && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : n.Isotope = r(n.Outlayer, n.getSize, n.matchesSelector, n.Isotope.Item, n.Isotope.LayoutMode)
}
(window),
function() {
    function t() {}
    function r(n, t) {
        for (var i = n.length; i--; )
            if (n[i].listener === t)
                return i;
        return -1
    }
    function i(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }
    var n = t.prototype
      , u = this
      , f = u.EventEmitter;
    n.getListeners = function(n) {
        var r, t, i = this._getEvents();
        if ("object" == typeof n) {
            r = {};
            for (t in i)
                i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
        } else
            r = i[n] || (i[n] = []);
        return r
    }
    ;
    n.flattenListeners = function(n) {
        for (var i = [], t = 0; n.length > t; t += 1)
            i.push(n[t].listener);
        return i
    }
    ;
    n.getListenersAsObject = function(n) {
        var t, i = this.getListeners(n);
        return i instanceof Array && (t = {},
        t[n] = i),
        t || i
    }
    ;
    n.addListener = function(n, t) {
        var i, u = this.getListenersAsObject(n), f = "object" == typeof t;
        for (i in u)
            u.hasOwnProperty(i) && -1 === r(u[i], t) && u[i].push(f ? t : {
                listener: t,
                once: !1
            });
        return this
    }
    ;
    n.on = i("addListener");
    n.addOnceListener = function(n, t) {
        return this.addListener(n, {
            listener: t,
            once: !0
        })
    }
    ;
    n.once = i("addOnceListener");
    n.defineEvent = function(n) {
        return this.getListeners(n),
        this
    }
    ;
    n.defineEvents = function(n) {
        for (var t = 0; n.length > t; t += 1)
            this.defineEvent(n[t]);
        return this
    }
    ;
    n.removeListener = function(n, t) {
        var f, i, u = this.getListenersAsObject(n);
        for (i in u)
            u.hasOwnProperty(i) && (f = r(u[i], t),
            -1 !== f && u[i].splice(f, 1));
        return this
    }
    ;
    n.off = i("removeListener");
    n.addListeners = function(n, t) {
        return this.manipulateListeners(!1, n, t)
    }
    ;
    n.removeListeners = function(n, t) {
        return this.manipulateListeners(!0, n, t)
    }
    ;
    n.manipulateListeners = function(n, t, i) {
        var r, u, f = n ? this.removeListener : this.addListener, e = n ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = i.length; r--; )
                f.call(this, t, i[r]);
        else
            for (r in t)
                t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
        return this
    }
    ;
    n.removeEvent = function(n) {
        var t, r = typeof n, i = this._getEvents();
        if ("string" === r)
            delete i[n];
        else if ("object" === r)
            for (t in i)
                i.hasOwnProperty(t) && n.test(t) && delete i[t];
        else
            delete this._events;
        return this
    }
    ;
    n.removeAllListeners = i("removeEvent");
    n.emitEvent = function(n, t) {
        var i, f, r, e, u = this.getListenersAsObject(n);
        for (r in u)
            if (u.hasOwnProperty(r))
                for (f = u[r].length; f--; )
                    i = u[r][f],
                    i.once === !0 && this.removeListener(n, i.listener),
                    e = i.listener.apply(this, t || []),
                    e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
        return this
    }
    ;
    n.trigger = i("emitEvent");
    n.emit = function(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(n, t)
    }
    ;
    n.setOnceReturnValue = function(n) {
        return this._onceReturnValue = n,
        this
    }
    ;
    n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ;
    n._getEvents = function() {
        return this._events || (this._events = {})
    }
    ;
    t.noConflict = function() {
        return u.EventEmitter = f,
        t
    }
    ;
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }
    ) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}
.call(this),
function(n) {
    function f(t) {
        var i = n.event;
        return i.target = i.target || i.srcElement || t,
        i
    }
    var t = document.documentElement, r = function() {}
    , i, u;
    t.addEventListener ? r = function(n, t, i) {
        n.addEventListener(t, i, !1)
    }
     : t.attachEvent && (r = function(n, t, i) {
        n[t + i] = i.handleEvent ? function() {
            var t = f(n);
            i.handleEvent.call(i, t)
        }
         : function() {
            var t = f(n);
            i.call(n, t)
        }
        ;
        n.attachEvent("on" + t, n[t + i])
    }
    );
    i = function() {}
    ;
    t.removeEventListener ? i = function(n, t, i) {
        n.removeEventListener(t, i, !1)
    }
     : t.detachEvent && (i = function(n, t, i) {
        n.detachEvent("on" + t, n[t + i]);
        try {
            delete n[t + i]
        } catch (r) {
            n[t + i] = void 0
        }
    }
    );
    u = {
        bind: r,
        unbind: i
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", u) : n.eventie = u
}
(this),
function(n, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, r) {
        return t(n, i, r)
    }
    ) : "object" == typeof exports ? module.exports = t(n, require("eventEmitter"), require("eventie")) : n.imagesLoaded = t(n, n.EventEmitter, n.eventie)
}
(this, function(n, t, i) {
    function s(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function c(n) {
        return "[object Array]" === v.call(n)
    }
    function l(n) {
        var t = [], i, r;
        if (c(n))
            t = n;
        else if ("number" == typeof n.length)
            for (i = 0,
            r = n.length; r > i; i++)
                t.push(n[i]);
        else
            t.push(n);
        return t
    }
    function r(n, t, i) {
        if (!(this instanceof r))
            return new r(n,t);
        "string" == typeof n && (n = document.querySelectorAll(n));
        this.elements = l(n);
        this.options = s({}, this.options);
        "function" == typeof t ? i = t : s(this.options, t);
        i && this.on("always", i);
        this.getImages();
        f && (this.jqDeferred = new f.Deferred);
        var u = this;
        setTimeout(function() {
            u.check()
        }
        )
    }
    function e(n) {
        this.img = n
    }
    function u(n) {
        this.src = n;
        o[n] = this
    }
    var f = n.jQuery, h = n.console, a = h !== void 0, v = Object.prototype.toString, o;
    return r.prototype = new t,
    r.prototype.options = {},
    r.prototype.getImages = function() {
        var n, r, t, f;
        for (this.images = [],
        n = 0,
        r = this.elements.length; r > n; n++) {
            t = this.elements[n];
            "IMG" === t.nodeName && this.addImage(t);
            for (var u = t.querySelectorAll("img"), i = 0, e = u.length; e > i; i++)
                f = u[i],
                this.addImage(f)
        }
    }
    ,
    r.prototype.addImage = function(n) {
        var t = new e(n);
        this.images.push(t)
    }
    ,
    r.prototype.check = function() {
        function f(n, r) {
            return t.options.debug && a && h.log("confirm", n, r),
            t.progress(n),
            u++,
            u === i && t.complete(),
            !0
        }
        var t = this, u = 0, i = this.images.length, n, r;
        if (this.hasAnyBroken = !1,
        !i)
            return this.complete(),
            void 0;
        for (n = 0; i > n; n++)
            r = this.images[n],
            r.on("confirm", f),
            r.check()
    }
    ,
    r.prototype.progress = function(n) {
        this.hasAnyBroken = this.hasAnyBroken || !n.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, n);
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, n)
        }
        )
    }
    ,
    r.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done", n;
        this.isComplete = !0;
        n = this;
        setTimeout(function() {
            if (n.emit(t, n),
            n.emit("always", n),
            n.jqDeferred) {
                var i = n.hasAnyBroken ? "reject" : "resolve";
                n.jqDeferred[i](n)
            }
        }
        )
    }
    ,
    f && (f.fn.imagesLoaded = function(n, t) {
        var i = new r(this,n,t);
        return i.jqDeferred.promise(f(this))
    }
    ),
    e.prototype = new t,
    e.prototype.check = function() {
        var n = o[this.img.src] || new u(this.img.src), t;
        if (n.isConfirmed)
            return this.confirm(n.isLoaded, "cached was confirmed"),
            void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            void 0;
        t = this;
        n.on("confirm", function(n, i) {
            return t.confirm(n.isLoaded, i),
            !0
        }
        );
        n.check()
    }
    ,
    e.prototype.confirm = function(n, t) {
        this.isLoaded = n;
        this.emit("confirm", this, t)
    }
    ,
    o = {},
    u.prototype = new t,
    u.prototype.check = function() {
        if (!this.isChecked) {
            var n = new Image;
            i.bind(n, "load", this);
            i.bind(n, "error", this);
            n.src = this.src;
            this.isChecked = !0
        }
    }
    ,
    u.prototype.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }
    ,
    u.prototype.onload = function(n) {
        this.confirm(!0, "onload");
        this.unbindProxyEvents(n)
    }
    ,
    u.prototype.onerror = function(n) {
        this.confirm(!1, "onerror");
        this.unbindProxyEvents(n)
    }
    ,
    u.prototype.confirm = function(n, t) {
        this.isConfirmed = !0;
        this.isLoaded = n;
        this.emit("confirm", this, t)
    }
    ,
    u.prototype.unbindProxyEvents = function(n) {
        i.unbind(n.target, "load", this);
        i.unbind(n.target, "error", this)
    }
    ,
    r
}
),
function(n, t) {
    var i = function(n, t, i) {
        var r;
        return function() {
            function e() {
                i || n.apply(u, f);
                r = null
            }
            var u = this
              , f = arguments;
            r ? clearTimeout(r) : i && n.apply(u, f);
            r = setTimeout(e, t || 100)
        }
    }
    ;
    jQuery.fn[t] = function(n) {
        return n ? this.bind("resize", i(n)) : this.trigger(t)
    }
}
(jQuery, "smartresize"),
function(n) {
    function rt(t) {
        return t && t.allowPageScroll === undefined && (t.swipe !== undefined || t.swipeStatus !== undefined) && (t.allowPageScroll = v),
        t.click !== undefined && t.tap === undefined && (t.tap = t.click),
        t || (t = {}),
        t = n.extend({}, n.fn.swipe.defaults, t),
        this.each(function() {
            var r = n(this)
              , i = r.data(h);
            i || (i = new ut(this,t),
            r.data(h, i))
        }
        )
    }
    function ut(rt, ut) {
        function wi(t) {
            if (!cu() && !(n(t.target).closest(ut.excludedElements, ft).length > 0)) {
                var u = t.originalEvent ? t.originalEvent : t, f, e = r ? u.touches[0] : u;
                if (et = tt,
                r ? ot = u.touches.length : t.preventDefault(),
                ht = 0,
                ct = null ,
                pt = null ,
                st = 0,
                wt = 0,
                bt = 0,
                at = 1,
                yt = 0,
                lt = au(),
                vi = yu(),
                yr(),
                !r || ot === ut.fingers || ut.fingers === c || ii() ? (ir(0, e),
                yi = dt(),
                ot == 2 && (ir(1, u.touches[1]),
                wt = bt = rr(lt[0].start, lt[1].start)),
                (ut.swipeStatus || ut.pinchStatus) && (f = vt(u, et))) : f = !1,
                f === !1)
                    return et = i,
                    vt(u, et),
                    f;
                hi(!0)
            }
        }
        function bi(n) {
            var u = n.originalEvent ? n.originalEvent : n, o, h, f, e, l;
            et === t || et === i || pr() || (h = r ? u.touches[0] : u,
            f = wr(h),
            ei = dt(),
            r && (ot = u.touches.length),
            et = s,
            ot == 2 && (wt == 0 ? (ir(1, u.touches[1]),
            wt = bt = rr(lt[0].start, lt[1].start)) : (wr(u.touches[1]),
            bt = rr(lt[0].end, lt[1].end),
            pt = wu(lt[0].end, lt[1].end)),
            at = pu(wt, bt),
            yt = Math.abs(wt - bt)),
            ot === ut.fingers || ut.fingers === c || !r || ii() ? (ct = du(f.start, f.end),
            gr(n, ct),
            ht = bu(f.start, f.end),
            st = kr(),
            vu(ct, ht),
            (ut.swipeStatus || ut.pinchStatus) && (o = vt(u, et)),
            (!ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) && (e = !0,
            ut.triggerOnTouchLeave && (l = gu(this),
            e = nf(f.end, l)),
            !ut.triggerOnTouchEnd && e ? et = gi(s) : ut.triggerOnTouchLeave && !e && (et = gi(t)),
            (et == i || et == t) && vt(u, et))) : (et = i,
            vt(u, et)),
            o === !1 && (et = i,
            vt(u, et)))
        }
        function ki(n) {
            var u = n.originalEvent;
            if (r && u.touches.length > 0)
                return hu(),
                !0;
            pr() && (ot = pi);
            n.preventDefault();
            ei = dt();
            st = kr();
            nr() ? (et = i,
            vt(u, et)) : ut.triggerOnTouchEnd || ut.triggerOnTouchEnd == !1 && et === s ? (et = t,
            vt(u, et)) : !ut.triggerOnTouchEnd && ar() ? (et = t,
            ti(u, et, y)) : et === s && (et = i,
            vt(u, et));
            hi(!1)
        }
        function ni() {
            ot = 0;
            ei = 0;
            yi = 0;
            wt = 0;
            bt = 0;
            at = 1;
            yr();
            hi(!1)
        }
        function di(n) {
            var i = n.originalEvent;
            ut.triggerOnTouchLeave && (et = gi(t),
            vt(i, et))
        }
        function ur() {
            ft.unbind(ui, wi);
            ft.unbind(fi, ni);
            ft.unbind(li, bi);
            ft.unbind(ai, ki);
            gt && ft.unbind(gt, di);
            hi(!1)
        }
        function gi(n) {
            var r = n
              , f = er()
              , u = fr()
              , e = nr();
            return !f || e ? r = i : u && n == s && (!ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) ? r = t : !u && n == t && ut.triggerOnTouchLeave && (r = i),
            r
        }
        function vt(n, u) {
            var f = undefined;
            return tu() || hr() ? f = ti(n, u, k) : (nu() || ii()) && f !== !1 && (f = ti(n, u, d)),
            ou() && f !== !1 ? f = ti(n, u, g) : su() && f !== !1 ? f = ti(n, u, nt) : eu() && f !== !1 && (f = ti(n, u, y)),
            u === i && ni(n),
            u === t && (r ? n.touches.length == 0 && ni(n) : ni(n)),
            f
        }
        function ti(r, s, h) {
            var c = undefined;
            if (h == k) {
                if (ft.trigger("swipeStatus", [s, ct || null , ht || 0, st || 0, ot]),
                ut.swipeStatus && (c = ut.swipeStatus.call(ft, r, s, ct || null , ht || 0, st || 0, ot),
                c === !1))
                    return !1;
                if (s == t && sr()) {
                    if (ft.trigger("swipe", [ct, ht, st, ot]),
                    ut.swipe && (c = ut.swipe.call(ft, r, ct, ht, st, ot),
                    c === !1))
                        return !1;
                    switch (ct) {
                    case u:
                        ft.trigger("swipeLeft", [ct, ht, st, ot]);
                        ut.swipeLeft && (c = ut.swipeLeft.call(ft, r, ct, ht, st, ot));
                        break;
                    case f:
                        ft.trigger("swipeRight", [ct, ht, st, ot]);
                        ut.swipeRight && (c = ut.swipeRight.call(ft, r, ct, ht, st, ot));
                        break;
                    case e:
                        ft.trigger("swipeUp", [ct, ht, st, ot]);
                        ut.swipeUp && (c = ut.swipeUp.call(ft, r, ct, ht, st, ot));
                        break;
                    case o:
                        ft.trigger("swipeDown", [ct, ht, st, ot]);
                        ut.swipeDown && (c = ut.swipeDown.call(ft, r, ct, ht, st, ot))
                    }
                }
            }
            if (h == d) {
                if (ft.trigger("pinchStatus", [s, pt || null , yt || 0, st || 0, ot, at]),
                ut.pinchStatus && (c = ut.pinchStatus.call(ft, r, s, pt || null , yt || 0, st || 0, ot, at),
                c === !1))
                    return !1;
                if (s == t && or())
                    switch (pt) {
                    case l:
                        ft.trigger("pinchIn", [pt || null , yt || 0, st || 0, ot, at]);
                        ut.pinchIn && (c = ut.pinchIn.call(ft, r, pt || null , yt || 0, st || 0, ot, at));
                        break;
                    case a:
                        ft.trigger("pinchOut", [pt || null , yt || 0, st || 0, ot, at]);
                        ut.pinchOut && (c = ut.pinchOut.call(ft, r, pt || null , yt || 0, st || 0, ot, at))
                    }
            }
            return h == y ? (s === i || s === t) && (clearTimeout(si),
            tr() && !ru() ? (kt = dt(),
            si = setTimeout(n.proxy(function() {
                kt = null ;
                ft.trigger("tap", [r.target]);
                ut.tap && (c = ut.tap.call(ft, r, r.target))
            }
            , this), ut.doubleTapThreshold)) : (kt = null ,
            ft.trigger("tap", [r.target]),
            ut.tap && (c = ut.tap.call(ft, r, r.target)))) : h == g ? (s === i || s === t) && (clearTimeout(si),
            kt = null ,
            ft.trigger("doubletap", [r.target]),
            ut.doubleTap && (c = ut.doubleTap.call(ft, r, r.target))) : h == nt && (s === i || s === t) && (clearTimeout(si),
            kt = null ,
            ft.trigger("longtap", [r.target]),
            ut.longTap && (c = ut.longTap.call(ft, r, r.target))),
            c
        }
        function fr() {
            var n = !0;
            return ut.threshold !== null  && (n = ht >= ut.threshold),
            n
        }
        function nr() {
            var n = !1;
            return ut.cancelThreshold !== null  && ct !== null  && (n = br(ct) - ht >= ut.cancelThreshold),
            n
        }
        function dr() {
            return ut.pinchThreshold !== null  ? yt >= ut.pinchThreshold : !0
        }
        function er() {
            return ut.maxTimeThreshold ? st >= ut.maxTimeThreshold ? !1 : !0 : !0
        }
        function gr(n, t) {
            if (ut.allowPageScroll === v || ii())
                n.preventDefault();
            else {
                var i = ut.allowPageScroll === b;
                switch (t) {
                case u:
                    (ut.swipeLeft && i || !i && ut.allowPageScroll != p) && n.preventDefault();
                    break;
                case f:
                    (ut.swipeRight && i || !i && ut.allowPageScroll != p) && n.preventDefault();
                    break;
                case e:
                    (ut.swipeUp && i || !i && ut.allowPageScroll != w) && n.preventDefault();
                    break;
                case o:
                    (ut.swipeDown && i || !i && ut.allowPageScroll != w) && n.preventDefault()
                }
            }
        }
        function or() {
            var n = cr()
              , t = lr()
              , i = dr();
            return n && t && i
        }
        function ii() {
            return !!(ut.pinchStatus || ut.pinchIn || ut.pinchOut)
        }
        function nu() {
            return !!(or() && ii())
        }
        function sr() {
            var n = er()
              , t = fr()
              , i = cr()
              , r = lr()
              , u = nr();
            return !u && r && i && t && n
        }
        function hr() {
            return !!(ut.swipe || ut.swipeStatus || ut.swipeLeft || ut.swipeRight || ut.swipeUp || ut.swipeDown)
        }
        function tu() {
            return !!(sr() && hr())
        }
        function cr() {
            return ot === ut.fingers || ut.fingers === c || !r
        }
        function lr() {
            return lt[0].end.x !== 0
        }
        function ar() {
            return !!ut.tap
        }
        function tr() {
            return !!ut.doubleTap
        }
        function iu() {
            return !!ut.longTap
        }
        function vr() {
            if (kt == null )
                return !1;
            var n = dt();
            return tr() && n - kt <= ut.doubleTapThreshold
        }
        function ru() {
            return vr()
        }
        function uu() {
            return (ot === 1 || !r) && (isNaN(ht) || ht === 0)
        }
        function fu() {
            return st > ut.longTapThreshold && ht < it
        }
        function eu() {
            return !!(uu() && ar())
        }
        function ou() {
            return !!(vr() && tr())
        }
        function su() {
            return !!(fu() && iu())
        }
        function hu() {
            oi = dt();
            pi = event.touches.length + 1
        }
        function yr() {
            oi = 0;
            pi = 0
        }
        function pr() {
            var n = !1, t;
            return oi && (t = dt() - oi,
            t <= ut.fingerReleaseThreshold && (n = !0)),
            n
        }
        function cu() {
            return !!(ft.data(h + "_intouch") === !0)
        }
        function hi(n) {
            n === !0 ? (ft.bind(li, bi),
            ft.bind(ai, ki),
            gt && ft.bind(gt, di)) : (ft.unbind(li, bi, !1),
            ft.unbind(ai, ki, !1),
            gt && ft.unbind(gt, di, !1));
            ft.data(h + "_intouch", n === !0)
        }
        function ir(n, t) {
            var i = t.identifier !== undefined ? t.identifier : 0;
            return lt[n].identifier = i,
            lt[n].start.x = lt[n].end.x = t.pageX || t.clientX,
            lt[n].start.y = lt[n].end.y = t.pageY || t.clientY,
            lt[n]
        }
        function wr(n) {
            var i = n.identifier !== undefined ? n.identifier : 0
              , t = lu(i);
            return t.end.x = n.pageX || n.clientX,
            t.end.y = n.pageY || n.clientY,
            t
        }
        function lu(n) {
            for (var t = 0; t < lt.length; t++)
                if (lt[t].identifier == n)
                    return lt[t]
        }
        function au() {
            for (var n = [], t = 0; t <= 5; t++)
                n.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            return n
        }
        function vu(n, t) {
            t = Math.max(t, br(n));
            vi[n].distance = t
        }
        function br(n) {
            return vi[n].distance
        }
        function yu() {
            var n = {};
            return n[u] = ci(u),
            n[f] = ci(f),
            n[e] = ci(e),
            n[o] = ci(o),
            n
        }
        function ci(n) {
            return {
                direction: n,
                distance: 0
            }
        }
        function kr() {
            return ei - yi
        }
        function rr(n, t) {
            var i = Math.abs(n.x - t.x)
              , r = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(i * i + r * r))
        }
        function pu(n, t) {
            var i = t / n * 1;
            return i.toFixed(2)
        }
        function wu() {
            return at < 1 ? a : l
        }
        function bu(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)))
        }
        function ku(n, t) {
            var r = n.x - t.x
              , u = t.y - n.y
              , f = Math.atan2(u, r)
              , i = Math.round(f * 180 / Math.PI);
            return i < 0 && (i = 360 - Math.abs(i)),
            i
        }
        function du(n, t) {
            var i = ku(n, t);
            return i <= 45 && i >= 0 ? u : i <= 360 && i >= 315 ? u : i >= 135 && i <= 225 ? f : i > 45 && i < 135 ? o : e
        }
        function dt() {
            var n = new Date;
            return n.getTime()
        }
        function gu(t) {
            t = n(t);
            var i = t.offset();
            return {
                left: i.left,
                right: i.left + t.outerWidth(),
                top: i.top,
                bottom: i.top + t.outerHeight()
            }
        }
        function nf(n, t) {
            return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom
        }
        var ri = r || !ut.fallbackToMouseEvents
          , ui = ri ? "touchstart" : "mousedown"
          , li = ri ? "touchmove" : "mousemove"
          , ai = ri ? "touchend" : "mouseup"
          , gt = ri ? null  : "mouseleave"
          , fi = "touchcancel"
          , ht = 0
          , ct = null
          , st = 0
          , wt = 0
          , bt = 0
          , at = 1
          , yt = 0
          , pt = 0
          , vi = null
          , ft = n(rt)
          , et = "start"
          , ot = 0
          , lt = null
          , yi = 0
          , ei = 0
          , oi = 0
          , pi = 0
          , kt = 0
          , si = null ;
        try {
            ft.bind(ui, wi);
            ft.bind(fi, ni)
        } catch (tf) {
            n.error("events not supported " + ui + "," + fi + " on jQuery.swipe")
        }
        this.enable = function() {
            return ft.bind(ui, wi),
            ft.bind(fi, ni),
            ft
        }
        ;
        this.disable = function() {
            return ur(),
            ft
        }
        ;
        this.destroy = function() {
            return ur(),
            ft.data(h, null ),
            ft
        }
        ;
        this.option = function(t, i) {
            if (ut[t] !== undefined) {
                if (i === undefined)
                    return ut[t];
                ut[t] = i
            } else
                n.error("Option " + t + " does not exist on jQuery.swipe.options")
        }
    }
    var u = "left"
      , f = "right"
      , e = "up"
      , o = "down"
      , l = "in"
      , a = "out"
      , v = "none"
      , b = "auto"
      , k = "swipe"
      , d = "pinch"
      , y = "tap"
      , g = "doubletap"
      , nt = "longtap"
      , p = "horizontal"
      , w = "vertical"
      , c = "all"
      , it = 10
      , tt = "start"
      , s = "move"
      , t = "end"
      , i = "cancel"
      , r = "ontouchstart" in window
      , h = "TouchSwipe";
    n.fn.swipe = function(t) {
        var r = n(this)
          , i = r.data(h);
        if (i && typeof t == "string") {
            if (i[t])
                return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + t + " does not exist on jQuery.swipe")
        } else if (!i && (typeof t == "object" || !t))
            return rt.apply(this, arguments);
        return r
    }
    ;
    n.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null ,
        pinchThreshold: 20,
        maxTimeThreshold: null ,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null ,
        swipeLeft: null ,
        swipeRight: null ,
        swipeUp: null ,
        swipeDown: null ,
        swipeStatus: null ,
        pinchIn: null ,
        pinchOut: null ,
        pinchStatus: null ,
        click: null ,
        tap: null ,
        doubleTap: null ,
        longTap: null ,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "button, input, select, textarea, a, .noSwipe"
    };
    n.fn.swipe.phases = {
        PHASE_START: tt,
        PHASE_MOVE: s,
        PHASE_END: t,
        PHASE_CANCEL: i
    };
    n.fn.swipe.directions = {
        LEFT: u,
        RIGHT: f,
        UP: e,
        DOWN: o,
        IN: l,
        OUT: a
    };
    n.fn.swipe.pageScroll = {
        NONE: v,
        HORIZONTAL: p,
        VERTICAL: w,
        AUTO: b
    };
    n.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: c
    }
}
(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function(n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function(n, t, i, r, u) {
        return -r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function(n, t, i, r, u) {
        return -r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(n, t, i, r, u) {
        return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function(n, t, i, r, u) {
        return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function(n, t, i, r, u) {
        return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function(n, t, i, r, u) {
        return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
    },
    easeInOutExpo: function(n, t, i, r, u) {
        return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(n, t, i, r, u) {
        return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function(n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
    },
    easeOutElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
    },
    easeInOutElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i
    },
    easeInBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function(n, t, i, r, u, f) {
        return (f == undefined && (f = 1.70158),
        (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
    },
    easeInBounce: function(n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function(n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(n, t, i, r, u) {
        return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i
    }
}),
function(n) {
    n.fn.carousel = function(t) {
        return this.each(function() {
            function h() {
                clearTimeout(c);
                c = setTimeout(function() {
                    y()
                }
                , u.duration)
            }
            function l() {
                var t;
                s = n(".carouselBody", i).width();
                r.hasClass("home-carousel") ? e.css("height", "100%") : r.imagesLoaded(function() {
                    r.find(".carousel-slide").each(function() {
                        t = t > n(this).outerHeight() ? t : n(this).outerHeight()
                    }
                    );
                    e.height(t)
                }
                );
                var h = n(".carouselBody > ul > li", i).width(e.width()).each(function(t) {
                    Modernizr.csstransforms3d ? n(this).css("transform", "translate3d(" + s * t + "px,0,0)") : n(this).css("left", s * t)
                }
                ).length
                  , u = {
                    width: h * e.width()
                }
                  , o = -f * e.width();
                Modernizr.csstransforms3d ? (u.transitionDuration = "0ms",
                u.transform = "translate3d(" + o + "px,0,0)") : u.marginLeft = o;
                n(".carouselBody > ul", i).css(u)
            }
            function o(t, r) {
                var u = function() {
                    var p = n(".carouselBody > ul li.active", i), k = n(".carouselBody > ul li", i).filter("[data-initial-index='" + t + "']"), o, s, u, w, c, v, b, y;
                    if (n("nav li", i).removeClass("active").eq(t).addClass("active"),
                    o = p.nextAll(),
                    s = p.prevAll(),
                    r === "left" && o.length > 0)
                        for (u = o.length - 1; u >= 0; u--)
                            n(".carouselBody > ul li:first", i).before(o.eq(u)),
                            f++;
                    else if (r === "right" && s.length > 0)
                        for (u = s.length - 1; u >= 0; u--)
                            n(".carouselBody > ul li:last", i).after(s.eq(u)),
                            f--;
                    l();
                    a = p.removeClass("active").index();
                    f = k.addClass("active").index();
                    w = -f * e.width();
                    c = Math.abs(f - a) * 200 + 600;
                    Modernizr.csstransforms3d ? (v = {},
                    v.transitionDuration = c + "ms",
                    v.transform = "translate3d(" + w + "px,0,0)",
                    b = Date.now(),
                    y = n(".carouselBody > ul", i),
                    setTimeout(function() {
                        y.data("transition-id") == b && y.removeData("transition-id").dequeue()
                    }
                    , c + 100),
                    y.data("transition-id", b).one("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd", function() {
                        n(this).removeData("transition-id").dequeue()
                    }
                    ).css(v)) : n(".carouselBody > ul", i).animate({
                        marginLeft: w
                    }, {
                        easing: "easeInOutCubic",
                        duration: c
                    });
                    h()
                }
                ;
                Modernizr.csstransforms3d ? n(".carouselBody > ul", i).queue(u) : u()
            }
            function p() {
                n(".carouselBody > ul > li", i).length > 1 && (n(".carouselBody", i).hasClass("partners-carousel") || r.hasClass("home-carousel") ? n(i).append(n("<nav><ul><\/ul><button class='previous'><span class='icon'><\/span><\/button><button class='next'><span class='icon'><\/span><\/button><\/nav>")) : n(i).append(n("<nav><ul><\/ul><button class='previous'><span class='icon'><\/span>Prev<\/button><button class='next'>Next<span class='icon'><\/span><\/button><\/nav>")),
                n(".carouselBody > ul > li", i).each(function() {
                    var t = n("h2", this).text() + " - " + n("h3", this).text();
                    n("nav > ul", i).append(n("<li><button>" + t + "<\/button><\/li>").attr("title", t))
                }
                ))
            }
            function w() {
                n("body").keydown(function(t) {
                    t.which == 37 ? n("nav button.previous", i).click() : t.which == 39 && n("nav button.next", i).click()
                }
                )
            }
            function v() {
                n(".carouselBody", i).swipe({
                    tap: function(t, i) {
                        t.which !== 3 && n(i).click()
                    },
                    swipeLeft: function() {
                        n("nav button.next", i).click()
                    },
                    swipeRight: function() {
                        n("nav button.previous", i).click()
                    },
                    excludedElements: n.fn.swipe.defaults.excludedElements.replace(/, a/, ""),
                    fingers: 1
                })
            }
            function y(t) {
                t && t.preventDefault();
                var r = n("nav li.active", i);
                r.next().length == 1 ? o(r.index() + 1, "right") : o(0, "right")
            }
            function b(t) {
                t && t.preventDefault();
                var r = n("nav li.active", i);
                r.prev().length == 1 ? o(r.index() - 1, "left") : o(r.nextAll().length, "left")
            }
            var r = n(this), e = r.find(".carouselBody"), u = n.extend({
                navigation: !0,
                duration: 6e3,
                keyboard: !0,
                touchSupport: !0,
                slideshow: !0,
                fluid: !0,
                pauseOnHover: !0,
                width: 500,
                contained: !1
            }, t), i, f = 0, a = 0, c, s;
            s = n(".carouselBody", i).width();
            i = n(this);
            u.navigation && p();
            u.pauseOnHover && u.slideshow && !r.hasClass("home-carousel") && i.hover(function() {
                clearTimeout(c)
            }
            , function() {
                h()
            }
            );
            n(".carouselBody > ul", i).on("webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd", "*", function(n) {
                n.stopPropagation()
            }
            );
            u.keyboard && w();
            u.touchSupport && (window.innerWidth >= 500 ? v() : window.innerWidth <= 500 && r.hasClass("newsfeed-carousel") && v());
            n("nav li button", i).click(function(t) {
                t.preventDefault();
                var r = n(this).closest("ul").find("li.active").index()
                  , i = n(this).closest("li").index() - r;
                i !== 0 && o(n(this).closest("li").index(), i > 0 ? "right" : "left")
            }
            );
            n("nav button.previous", i).on("click", b);
            n("nav button.next", i).on("click", y);
            n(".carouselBody > ul > li", i).css("position", "absolute").css("top", 0).css("left", 0).each(function(t, i) {
                n(i).attr("data-initial-index", t)
            }
            ).eq(0).addClass("active");
            f = 0;
            n("nav li:eq(0)", i).addClass("active");
            u.slideshow && window.innerWidth >= 500 && (window.innerWidth >= 500 ? h() : window.innerWidth <= 500 && r.hasClass("newsfeed-carousel") && h());
            l();
            u.fluid && n(window).smartresize(l)
        }
        )
    }
}
(jQuery),
function(n) {
    EventPlayback = {
        version: "0.0.3"
    };
    n.recordEvents = function(n, t) {
        return t && (n.finished = t),
        new EventRecorder(n).start()
    }
    ;
    n.playbackEvents = function(n, t, i) {
        return i && (t.finished = i),
        new EventPlayer(n,t).start()
    }
    ;
    EventRecorder = function(t) {
        this.frames = [];
        this.options = n.extend({
            dom: n(document),
            delay: 500
        }, t || {})
    }
    ;
    EventRecorder.prototype = {
        encodeJSON: function(n) {
            var t;
            if (!n)
                return "null";
            switch (n.constructor) {
            case String:
                return '"' + n.replace(/"/gm, '\\"') + '"';
            case Number:
                return n.toString();
            case Array:
                t = [];
                for (i in n)
                    t.push(this.encodeJSON(n[i]));
                return "[" + t.join(",") + "]";
            case Object:
                t = [];
                for (k in n)
                    t.push(k + ":" + this.encodeJSON(n[k]));
                return "{" + t.join(", ") + "}";
            default:
                return "null"
            }
        },
        exportJSON: function() {
            if (this.running)
                throw "EventRecorder: cannot export while running";
            return this.frames
        },
        packFrame: function(n) {
            return {
                x: n.pageX / window.innerWidth * 100,
                y: n.pageY / window.innerHeight * 100
            }
        },
        getElementXPath: function(n) {
            for (segs = []; n && n.nodeType == 1; n = n.parentNode) {
                if (n.hasAttribute("id"))
                    return segs.unshift('id("' + n.getAttribute("id") + '")'),
                    segs.join("/");
                if (n.hasAttribute("class"))
                    segs.unshift(n.localName.toLowerCase() + '[@class="' + n.getAttribute("class") + '"]');
                else {
                    for (i = 1,
                    sib = n.previousSibling; sib; sib = sib.previousSibling)
                        sib.localName == n.localName && i++;
                    segs.unshift(n.localName.toLowerCase() + "[" + i + "]")
                }
            }
            return segs.length ? "/" + segs.join("/") : null
        },
        startRecording: function() {
            var t = this, i;
            return n.each(["mousemove"], function(n, r) {
                t.options.dom.bind(r, function(n) {
                    t.running && (n.pageX || (n.pageX = i.x,
                    n.pageY = i.y),
                    i = t.packFrame(n),
                    t.frames.push(i))
                }
                )
            }
            ),
            this
        },
        stop: function() {
            return console.log("stopping"),
            this.running = !1,
            this.options.finished instanceof Function && this.options.finished.call(this),
            this
        },
        start: function() {
            var n = this;
            return setTimeout(function() {
                n.running = !0;
                n.startRecording();
                n.options.duration && setTimeout(function() {
                    n.running && n.stop()
                }
                , n.options.duration)
            }
            , this.options.delay),
            this
        }
    };
    EventPlayer = function(t, i) {
        this.session = t;
        this.options = n.extend({
            dom: n("body"),
            trigger: !1,
            interval: 25
        }, i || {})
    }
    ;
    EventPlayer.prototype = {
        unpackFrame: function(n) {
            return n.xpath = n.target,
            n
        },
        playFrame: function(n) {
            var t = this;
            isNewPath = this.lastPath != n.xpath;
            this.cursor.css({
                left: n.x + "%",
                top: n.y + "%"
            }).attr("data-x", n.x);
            switch (n.type) {
            }
            return this.cursor.hasClass("clicking") && (this.cursor.removeClass("clicking"),
            this.hideDisc()),
            this.lastPath = n.xpath,
            this
        },
        trigger: function(n, t) {
            return this.options.trigger && t && t.trigger(n),
            this
        },
        showDisc: function(n) {
            return this.disc.addClass(n || "blue").fadeIn(80),
            this
        },
        hideDisc: function() {
            return this.disc.fadeOut(80, function() {
                n(this).removeClass("yellow").removeClass("blue").removeClass("red")
            }
            ),
            this
        },
        play: function() {
            var n = this;
            return n.session !== null  && (this.intervalID = setInterval(function() {
                (frame = n.session.frames.shift()) ? n.playFrame(n.unpackFrame(frame)) : n.stop()
            }
            , this.options.interval)),
            this
        },
        removeCursor: function() {
            return n("#event-playback-cursor", this.dom).fadeOut("slow", function() {
                n(this).remove()
            }
            ),
            this
        },
        displayCursor: function() {
            return this.cursor = n('<div id="event-playback-cursor" class="event-playback-cursor"><div class="disc"><\/div><\/div>'),
            this.disc = n(".disc", this.cursor),
            this.options.dom.prepend(this.cursor),
            this.cursor.fadeIn("slow"),
            this
        },
        stop: function() {
            return this.running = !1,
            clearInterval(this.intervalID),
            this.options.finished instanceof Function && this.options.finished.call(this),
            this
        },
        start: function() {
            var n = this;
            return this.running = !0,
            this.play().displayCursor(),
            this.options.duration && setTimeout(function() {
                n.stop()
            }
            , this.options.duration),
            this
        }
    }
}
(jQuery);
window.About = function(n) {
    function t() {
        i();
        r();
        u()
    }
    function i() {
        var t = n(".accordion");
        n(".accordion-name").on("click", function(t) {
            t.preventDefault();
            t.stopPropagation();
            var i = n(this).next(".bio-body"), r = n(this).find(".status-open"), u = n(this).find(".status-close"), f;
            return i.hasClass("open") ? (i.removeClass("open"),
            i.css("height", 0),
            n(this).toggleClass("show"),
            r.toggleClass("show"),
            u.toggleClass("show"),
            !1) : (f = i.find(".accordion-content").outerHeight(),
            i.css("height", f),
            i.addClass("open"),
            n(this).toggleClass("show"),
            r.toggleClass("show"),
            u.toggleClass("show"),
            !1)
        }
        )
    }
    function r() {
        $tabContainer = n(".tab-container");
        $tabButton = n("tab-button");
        $tabButtonContainer = n(".tab-button-container");
        var t;
        $tabButtonContainer.on("click", '.tab-button:not(".active")', function() {
            $tabContainer.height($tabContainer.height() + 40);
            n(".tab-button").removeClass("active");
            n(this).addClass("active");
            var u = n(this).attr("data-index")
              , r = n('.tab-content[data-index="' + u + '"]')
              , i = r.find(".container");
            i.removeClass("active");
            t = i.outerHeight();
            n('.tab-content:not(".active")').imagesLoaded(function() {
                $tabContainer.height(t + 40);
                n(".tab-content.active").removeClass("active");
                r.addClass("active");
                i.addClass("active")
            }
            )
        }
        );
        n(window).resize(function() {
            $tabContainer.height(n(".tab-content.active").height() + 40)
        }
        )
    }
    function u() {
        var t;
        $historySlider = n(".history-slider");
        $historyWrapper = n(".history-wrapper");
        $historySlider = n(".history-slider");
        $previousButton = n(".previous-button");
        $nextButton = n(".next-button");
        t = !0;
        $nextButton.on("click", function() {
            if (t) {
                t = !1;
                var i = n(".slider-section").width()
                  , r = $historySlider.scrollLeft()
                  , u = r + i;
                $previousButton.removeClass("disabled");
                $historySlider.animate({
                    scrollLeft: u
                }, 400, "easeInOutCubic", function() {
                    Math.round($historyWrapper.width() / i - 2) - Math.round($historySlider.scrollLeft() / i) === Math.round($historySlider.width() / i) && $nextButton.addClass("disabled");
                    t = !0
                }
                )
            }
        }
        );
        $previousButton.on("click", function() {
            if (t) {
                t = !1;
                var i = n(".slider-section").width()
                  , r = $historySlider.scrollLeft()
                  , u = r - i;
                $nextButton.removeClass("disabled");
                $historySlider.animate({
                    scrollLeft: u
                }, 400, "easeInOutCubic", function() {
                    t = !0;
                    $historySlider.scrollLeft() / i == 0 && $previousButton.addClass("disabled")
                }
                )
            }
        }
        );
        n(window).resize(function() {
            var i = n(".slider-section").width()
              , t = $historySlider.scrollLeft()
              , r = t - t % i;
            $historySlider.scrollLeft(r)
        }
        )
    }
    return {
        init: t
    }
}
(jQuery);
window.SDK = function(n) {
    function t() {
        n(".developer .license input").on("click", function() {
            n(this).select()
        }
        );
        n(".developer .cta-resource").on("click", function(t) {
            t.preventDefault();
            n("html, body").animate({
                scrollTop: n(".resources").position().top
            }, {
                duration: 1e3,
                easing: "easeInOutQuint"
            })
        }
        )
    }
    return {
        init: t
    }
}
(jQuery);
app = {};
window.Newsfeed = function(n) {
    function t() {
        i();
        r()
    }
    function i() {
        n.ajax({
            url: "../newsfeed/"
        }).done(function() {}
        );
        var t = function() {
            var i, r = n(".newsfeed-filter"), t = n("#newsfeed"), u = n(window).scrollTop();
            i = t.offset().top - 64;
            u >= i && n(window).innerWidth() > 768 ? (r.addClass("active"),
            t.addClass("active")) : (r.removeClass("active"),
            t.removeClass("active"))
        }
        ;
        n(window).innerWidth() > 768 && t();
        n(window).scroll(function() {
            t()
        }
        )
    }
    function r() {
        var i, t, r;
        app.Article = Backbone.Model.extend({});
        app.allCollection = Backbone.Collection.extend({
            model: app.Article,
            url: "../newsfeed/",
            initialize: function() {}
        });
        app.Newsfeed = Backbone.View.extend({
            tagName: "div",
            id: "newsfeedBody",
            className: "section-wrapper",
            initialize: function(t) {
                var i = this;
                if (this.options = t,
                this.model)
                    this.model.on("reset", function() {
                        i.render()
                    }
                    , this);
                n("#newsfeed").html(this.render().el);
                n(this.el).imagesLoaded(function() {
                    var t;
                    t = i.options.category ? "." + i.options.category : "*";
                    n(i.el).isotope({
                        filter: t
                    });
                    setTimeout(function() {
                        n(i.el).isotope({
                            filter: t
                        })
                    }
                    , 0)
                }
                )
            },
            empty: function() {
                n(this.el).empty()
            },
            render: function() {
                n(this.el).empty();
                var t = this;
                return _.each(this.model.models, function(t) {
                    n(this.el).append(new app.NewsfeedViewItem({
                        model: t
                    }).render().el)
                }
                , this),
                this
            }
        });
        app.NewsfeedViewItem = Backbone.View.extend({
            tagName: "article",
            className: "newsfeed-article",
            template: _.template(n("#newsfeed-template").html()),
            initialize: function() {
                this.model.bind("remove", this.remove)
            },
            render: function() {
                return this.model.get("tweet") === !0 && this.$el.addClass("tweet-container"),
                this.$el.addClass(this.model.get("category")),
                n(this.el).html(this.template(this.model.toJSON())),
                this
            }
        });
        i = Backbone.Router.extend({
            routes: {
                "": "fetchAll",
                "(:category)": "fetchAll"
            },
            createCollection: function() {
                return new app.allCollection
            },
            fetchAll: function(t) {
                var i = this, r;
                this.totalList || (this.totalList = this.createCollection());
                this.populated ? (r = t ? "." + t : "*",
                n("#newsfeedBody").isotope({
                    filter: r
                })) : this.listPopulationPromise || (this.listPopulationPromise = this.totalList.fetch(),
                n.when(this.listPopulationPromise).then(function() {
                    i.populated = !0;
                    i.render(i.totalList, t)
                }
                ));
                t ? this.highlightNav(t) : n(".all").addClass("active")
            },
            render: function(n, t) {
                t || (t = !1);
                this.Newsfeed || (this.Newsfeed = new app.Newsfeed({
                    model: n,
                    category: t
                }))
            },
            highlightNav: function(t) {
                filter = "." + t;
                n('.filter-link[data-filter=".' + t + '"]').addClass("active")
            }
        });
        t = new i;
        $filterNav = n(".filter-nav");
        $filterNav.on("click", ".filter-link", function(i) {
            var r, u;
            i.preventDefault();
            n(this).hasClass("active") || (r = n(this).attr("href"),
            r === "../newsfeed/" ? (t.navigate(r, {
                trigger: !1
            }),
            n("#newsfeedBody").isotope({
                filter: "*"
            })) : (u = r.substring(10),
            t.navigate(u, {
                trigger: !0
            })),
            n(".filter-link").removeClass("active"),
            n(this).addClass("active"))
        }
        );
        r = Backbone.history.start({
            pushState: !0,
            hashChange: !1,
            root: "/newsfeed/"
        })
    }
    return {
        init: t
    }
}
(jQuery),
function() {
    function l() {
        return function() {}
    }
    function o(n) {
        return function() {
            return this[n]
        }
    }
    function p(n) {
        return function() {
            return n
        }
    }
    function n(t, i, r) {
        if ("string" == typeof t) {
            if (0 === t.indexOf("#") && (t = t.slice(1)),
            n.va[t])
                return n.va[t];
            t = n.u(t)
        }
        if (!t || !t.nodeName)
            throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return t.player || new n.Player(t,i,r)
    }
    function it(n) {
        n.t("vjs-lock-showing")
    }
    function at(t, i, r, u) {
        return r !== f ? (t.a.style[i] = -1 !== ("" + r).indexOf("%") || -1 !== ("" + r).indexOf("px") ? r : "auto" === r ? "" : r + "px",
        u || t.j("resize"),
        t) : t.a ? (r = t.a.style[i],
        u = r.indexOf("px"),
        -1 !== u ? parseInt(r.slice(0, u), 10) : parseInt(t.a["offset" + n.Z(i)], 10)) : 0
    }
    function vt(t, i) {
        var r, u, f, e;
        return (r = t.a,
        u = n.cd(r),
        e = f = r.offsetWidth,
        r = t.handle,
        t.g.Ed) ? (e = u.top,
        u = i.changedTouches ? i.changedTouches[0].pageY : i.pageY,
        r && (r = r.u().offsetHeight,
        e += r / 2,
        f -= r),
        Math.max(0, Math.min(1, (e - u + f) / f))) : (f = u.left,
        u = i.changedTouches ? i.changedTouches[0].pageX : i.pageX,
        r && (r = r.u().offsetWidth,
        f += r / 2,
        e -= r),
        Math.max(0, Math.min(1, (u - f) / e)))
    }
    function ri(t, i) {
        t.Y(i);
        i.d("click", n.bind(t, function() {
            it(this)
        }
        ))
    }
    function yt(n) {
        n.na = r;
        n.ua.n("vjs-lock-showing");
        n.a.setAttribute("aria-pressed", r);
        n.K && 0 < n.K.length && n.K[0].u().focus()
    }
    function rt(n) {
        n.na = i;
        it(n.ua);
        n.a.setAttribute("aria-pressed", i)
    }
    function ui(t) {
        var i = {
            sources: [],
            tracks: []
        }, r, f, u, e;
        if (n.k.B(i, n.wb(t)),
        t.hasChildNodes())
            for (t = t.childNodes,
            u = 0,
            e = t.length; u < e; u++)
                r = t[u],
                f = r.nodeName.toLowerCase(),
                "source" === f ? i.sources.push(n.wb(r)) : "track" === f && i.tracks.push(n.wb(r));
        return i
    }
    function pt(t, u, f) {
        t.i && (t.aa = i,
        t.i.dispose(),
        t.Db && (t.Db = i,
        clearInterval(t.Sa)),
        t.Eb && wt(t),
        t.i = i);
        "Html5" !== u && t.L && (n.l.gc(t.L),
        t.L = e);
        t.xa = u;
        t.aa = i;
        var o = n.k.B({
            source: f,
            parentEl: t.a
        }, t.g[u.toLowerCase()]);
        f && (f.src == t.v.src && 0 < t.v.currentTime && (o.startTime = t.v.currentTime),
        t.v.src = f.src);
        t.i = new window.videojs[u](t,o);
        t.i.H(function() {
            if (this.c.Wa(),
            !this.m.progressEvents) {
                var t = this.c;
                t.Db = r;
                t.Sa = setInterval(n.bind(t, function() {
                    this.v.mb < this.buffered().end(0) ? this.j("progress") : 1 == this.bufferedPercent() && (clearInterval(this.Sa),
                    this.j("progress"))
                }
                ), 500);
                t.i.T("progress", function() {
                    this.m.progressEvents = r;
                    var n = this.c;
                    n.Db = i;
                    clearInterval(n.Sa)
                }
                )
            }
            this.m.timeupdateEvents || (t = this.c,
            t.Eb = r,
            t.d("play", t.Bc),
            t.d("pause", t.wa),
            t.i.T("timeupdate", function() {
                this.m.timeupdateEvents = r;
                wt(this.c)
            }
            ))
        }
        )
    }
    function wt(n) {
        n.Eb = i;
        n.wa();
        n.o("play", n.Bc);
        n.o("pause", n.wa)
    }
    function h(t, i, r) {
        if (t.i && !t.i.aa)
            t.i.H(function() {
                this[i](r)
            }
            );
        else
            try {
                t.i[i](r)
            } catch (u) {
                throw n.log(u),
                u;
            }
    }
    function s(t, r) {
        if (t.i && t.i.aa)
            try {
                return t.i[r]()
            } catch (u) {
                throw t.i[r] === f ? n.log("Video.js: " + r + " method not defined for " + t.xa + " playback technology.", u) : "TypeError" == u.name ? (n.log("Video.js: " + r + " unavailable on " + t.xa + " playback technology element.", u),
                t.i.aa = i) : n.log(u),
                u;
            }
    }
    function bt(t) {
        t.fd = i;
        n.o(document, "keydown", t.jc);
        document.documentElement.style.overflow = t.Zc;
        n.t(document.body, "vjs-full-window");
        t.j("exitFullWindow")
    }
    function fi() {
        var t = n.media.Xa[k];
        return function() {
            throw Error('The "' + t + "\" method is not available on the playback technology's API");
        }
    }
    function ei() {
        var n = et[a]
          , t = n.charAt(0).toUpperCase() + n.slice(1);
        kt["set" + t] = function(t) {
            return this.a.vjs_setProperty(n, t)
        }
    }
    function gt(n) {
        kt[n] = function() {
            return this.a.vjs_getProperty(n)
        }
    }
    function ni(n, t, r) {
        for (var o = n.ya, f = 0, s = o.length, u, e; f < s; f++)
            u = o[f],
            u.id() === t ? (u.show(),
            e = u) : r && u.G() == r && 0 < u.mode() && u.disable();
        (t = e ? e.G() : r ? r : i) && n.j(t + "trackchange")
    }
    function ti(t) {
        0 === t.ha && t.load();
        0 === t.ga && (t.c.d("timeupdate", n.bind(t, t.update, t.Q)),
        t.c.d("ended", n.bind(t, t.reset, t.Q)),
        ("captions" === t.A || "subtitles" === t.A) && t.c.fa("textTrackDisplay").Y(t))
    }
    function ii(n) {
        var t = n.split(":"), i, r, u;
        return n = 0,
        3 == t.length ? (i = t[0],
        r = t[1],
        t = t[2]) : (i = 0,
        r = t[0],
        t = t[1]),
        t = t.split(/\s+/),
        t = t.splice(0, 1)[0],
        t = t.split(/\.|,/),
        u = parseFloat(t[1]),
        t = t[0],
        n += 3600 * parseFloat(i),
        n += 60 * parseFloat(r),
        n += parseFloat(t),
        u && (n += u / 1e3),
        n
    }
    function u(n, t) {
        var r = n.split("."), i = ot, u;
        for ((r[0] in i) || !i.execScript || i.execScript("var " + r[0]); r.length && (u = r.shift()); )
            !r.length && t !== f ? i[u] = t : i = i[u] ? i[u] : i[u] = {}
    }
    var f = void 0, r = !0, e = null , i = !1, t, w, b, st, ht, d, ct, tt, v, g, lt, y, c, ut, ft, k, a, nt, ot;
    for (document.createElement("video"),
    document.createElement("audio"),
    document.createElement("track"),
    w = n,
    window.Wd = window.Xd = n,
    n.Rb = "4.4",
    n.Ec = "https:" == document.location.protocol ? "https://" : "http://",
    n.options = {
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
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome<\/a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player<\/a>.'
    },
    "GENERATED_CDN_VSN" !== n.Rb && (w.options.flash.swf = n.Ec + "vjs.zencdn.net/" + n.Rb + "/video-js.swf"),
    n.va = {},
    "function" == typeof define && define.amd ? define([], function() {
        return w
    }
    ) : "object" == typeof exports && "object" == typeof module && (module.exports = w),
    n.ka = n.CoreObject = l(),
    n.ka.extend = function(t) {
        var u, i, r;
        t = t || {};
        u = t.init || t.h || this.prototype.init || this.prototype.h || l();
        i = function() {
            u.apply(this, arguments)
        }
        ;
        i.prototype = n.k.create(this.prototype);
        i.prototype.constructor = i;
        i.extend = n.ka.extend;
        i.create = n.ka.create;
        for (r in t)
            t.hasOwnProperty(r) && (i.prototype[r] = t[r]);
        return i
    }
    ,
    n.ka.create = function() {
        var t = n.k.create(this.prototype);
        return this.apply(t, arguments),
        t
    }
    ,
    n.d = function(t, r, u) {
        var f = n.getData(t);
        f.z || (f.z = {});
        f.z[r] || (f.z[r] = []);
        u.s || (u.s = n.s++);
        f.z[r].push(u);
        f.U || (f.disabled = i,
        f.U = function(i) {
            var r;
            if (!f.disabled && (i = n.ic(i),
            r = f.z[i.type],
            r))
                for (var r = r.slice(0), u = 0, e = r.length; u < e && !i.pc(); u++)
                    r[u].call(t, i)
        }
        );
        1 == f.z[r].length && (document.addEventListener ? t.addEventListener(r, f.U, i) : document.attachEvent && t.attachEvent("on" + r, f.U))
    }
    ,
    n.o = function(t, i, r) {
        var u, f;
        if (n.mc(t) && (u = n.getData(t),
        u.z))
            if (i) {
                if (f = u.z[i],
                f) {
                    if (r) {
                        if (r.s)
                            for (u = 0; u < f.length; u++)
                                f[u].s === r.s && f.splice(u--, 1)
                    } else
                        u.z[i] = [];
                    n.ec(t, i)
                }
            } else
                for (f in u.z)
                    i = f,
                    u.z[i] = [],
                    n.ec(t, i)
    }
    ,
    n.ec = function(t, r) {
        var u = n.getData(t);
        0 === u.z[r].length && (delete u.z[r],
        document.removeEventListener ? t.removeEventListener(r, u.U, i) : document.detachEvent && t.detachEvent("on" + r, u.U));
        n.Ab(u.z) && (delete u.z,
        delete u.U,
        delete u.disabled);
        n.Ab(u) && n.tc(t)
    }
    ,
    n.ic = function(n) {
        function o() {
            return r
        }
        function s() {
            return i
        }
        var u, t, f;
        if (!n || !n.Bb) {
            u = n || window.event;
            n = {};
            for (t in u)
                "layerX" !== t && "layerY" !== t && "keyboardEvent.keyLocation" !== t && ("returnValue" == t && u.preventDefault || (n[t] = u[t]));
            n.target || (n.target = n.srcElement || document);
            n.relatedTarget = n.fromElement === n.target ? n.toElement : n.fromElement;
            n.preventDefault = function() {
                u.preventDefault && u.preventDefault();
                n.returnValue = i;
                n.zb = o
            }
            ;
            n.zb = s;
            n.stopPropagation = function() {
                u.stopPropagation && u.stopPropagation();
                n.cancelBubble = r;
                n.Bb = o
            }
            ;
            n.Bb = s;
            n.stopImmediatePropagation = function() {
                u.stopImmediatePropagation && u.stopImmediatePropagation();
                n.pc = o;
                n.stopPropagation()
            }
            ;
            n.pc = s;
            n.clientX != e && (t = document.documentElement,
            f = document.body,
            n.pageX = n.clientX + (t && t.scrollLeft || f && f.scrollLeft || 0) - (t && t.clientLeft || f && f.clientLeft || 0),
            n.pageY = n.clientY + (t && t.scrollTop || f && f.scrollTop || 0) - (t && t.clientTop || f && f.clientTop || 0));
            n.which = n.charCode || n.keyCode;
            n.button != e && (n.button = n.button & 1 ? 0 : n.button & 4 ? 1 : n.button & 2 ? 2 : 0)
        }
        return n
    }
    ,
    n.j = function(t, u) {
        var f = n.mc(t) ? n.getData(t) : {}
          , e = t.parentNode || t.ownerDocument;
        return "string" == typeof u && (u = {
            type: u,
            target: t
        }),
        u = n.ic(u),
        f.U && f.U.call(t, u),
        e && !u.Bb() && u.bubbles !== i ? n.j(e, u) : e || u.zb() || (f = n.getData(u.target),
        !u.target[u.type]) || (f.disabled = r,
        "function" == typeof u.target[u.type] && u.target[u.type](),
        f.disabled = i),
        !u.zb()
    }
    ,
    n.T = function(t, i, r) {
        function u() {
            n.o(t, i, u);
            r.apply(this, arguments)
        }
        u.s = r.s = r.s || n.s++;
        n.d(t, i, u)
    }
    ,
    b = Object.prototype.hasOwnProperty,
    n.e = function(n, t) {
        var r, i;
        r = document.createElement(n || "div");
        for (i in t)
            b.call(t, i) && (-1 !== i.indexOf("aria-") || "role" == i ? r.setAttribute(i, t[i]) : r[i] = t[i]);
        return r
    }
    ,
    n.Z = function(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    ,
    n.k = {},
    n.k.create = Object.create || function(n) {
        function t() {}
        return t.prototype = n,
        new t
    }
    ,
    n.k.ra = function(n, t, i) {
        for (var r in n)
            b.call(n, r) && t.call(i || this, r, n[r])
    }
    ,
    n.k.B = function(n, t) {
        if (!t)
            return n;
        for (var i in t)
            b.call(t, i) && (n[i] = t[i]);
        return n
    }
    ,
    n.k.Wc = function(t, i) {
        var r, u, f;
        t = n.k.copy(t);
        for (r in i)
            b.call(i, r) && (u = t[r],
            f = i[r],
            t[r] = n.k.Ma(u) && n.k.Ma(f) ? n.k.Wc(u, f) : i[r]);
        return t
    }
    ,
    n.k.copy = function(t) {
        return n.k.B({}, t)
    }
    ,
    n.k.Ma = function(n) {
        return !!n && "object" == typeof n && "[object Object]" === n.toString() && n.constructor === Object
    }
    ,
    n.bind = function(t, i, r) {
        function u() {
            return i.apply(t, arguments)
        }
        return i.s || (i.s = n.s++),
        u.s = r ? r + "_" + i.s : i.s,
        u
    }
    ,
    n.pa = {},
    n.s = 1,
    n.expando = "vdata" + (new Date).getTime(),
    n.getData = function(t) {
        var i = t[n.expando];
        return i || (i = t[n.expando] = n.s++,
        n.pa[i] = {}),
        n.pa[i]
    }
    ,
    n.mc = function(t) {
        return t = t[n.expando],
        !(!t || n.Ab(n.pa[t]))
    }
    ,
    n.tc = function(t) {
        var i = t[n.expando];
        if (i) {
            delete n.pa[i];
            try {
                delete t[n.expando]
            } catch (r) {
                t.removeAttribute ? t.removeAttribute(n.expando) : t[n.expando] = e
            }
        }
    }
    ,
    n.Ab = function(n) {
        for (var t in n)
            if (n[t] !== e)
                return i;
        return r
    }
    ,
    n.n = function(n, t) {
        -1 == (" " + n.className + " ").indexOf(" " + t + " ") && (n.className = "" === n.className ? t : n.className + " " + t)
    }
    ,
    n.t = function(n, t) {
        var i, r;
        if (-1 != n.className.indexOf(t)) {
            for (i = n.className.split(" "),
            r = i.length - 1; 0 <= r; r--)
                i[r] === t && i.splice(r, 1);
            n.className = i.join(" ")
        }
    }
    ,
    n.W = n.e("video"),
    n.I = navigator.userAgent,
    n.Kc = /iPhone/i.test(n.I),
    n.Jc = /iPad/i.test(n.I),
    n.Lc = /iPod/i.test(n.I),
    n.Ic = n.Kc || n.Jc || n.Lc,
    st = n,
    d = n.I.match(/OS (\d+)_/i),
    ht = d && d[1] ? d[1] : f,
    st.Id = ht,
    n.Hc = /Android/i.test(n.I),
    ct = n,
    v = n.I.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    v ? (g = v[1] && parseFloat(v[1]),
    lt = v[2] && parseFloat(v[2]),
    tt = g && lt ? parseFloat(v[1] + "." + v[2]) : g ? g : e) : tt = e,
    ct.Fc = tt,
    n.Mc = n.Hc && /webkit/i.test(n.I) && 2.3 > n.Fc,
    n.Ub = /Firefox/i.test(n.I),
    n.Jd = /Chrome/i.test(n.I),
    n.$b = !!("ontouchstart" in window || window.Gc && document instanceof window.Gc),
    n.wb = function(n) {
        var s, u, f, o, t;
        if (s = {},
        n && n.attributes && 0 < n.attributes.length)
            for (u = n.attributes,
            t = u.length - 1; 0 <= t; t--)
                f = u[t].name,
                o = u[t].value,
                ("boolean" == typeof n[f] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + f + ",")) && (o = o !== e ? r : i),
                s[f] = o;
        return s
    }
    ,
    n.Nd = function(n, t) {
        var i = "";
        return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "").getPropertyValue(t) : n.currentStyle && (i = n["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"),
        i
    }
    ,
    n.yb = function(n, t) {
        t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)
    }
    ,
    n.Ob = {},
    n.u = function(n) {
        return 0 === n.indexOf("#") && (n = n.slice(1)),
        document.getElementById(n)
    }
    ,
    n.ta = function(n, t) {
        t = t || n;
        var r = Math.floor(n % 60)
          , u = Math.floor(n / 60 % 60)
          , i = Math.floor(n / 3600)
          , f = Math.floor(t / 60 % 60)
          , e = Math.floor(t / 3600);
        return (isNaN(n) || Infinity === n) && (i = u = r = "-"),
        i = 0 < i || 0 < e ? i + ":" : "",
        i + (((i || 10 <= f) && 10 > u ? "0" + u : u) + ":") + (10 > r ? "0" + r : r)
    }
    ,
    n.Sc = function() {
        document.body.focus();
        document.onselectstart = p(i)
    }
    ,
    n.Dd = function() {
        document.onselectstart = p(r)
    }
    ,
    n.trim = function(n) {
        return (n + "").replace(/^\s+|\s+$/g, "")
    }
    ,
    n.round = function(n, t) {
        return t || (t = 0),
        Math.round(n * Math.pow(10, t)) / Math.pow(10, t)
    }
    ,
    n.sb = function(n, t) {
        return {
            length: 1,
            start: function() {
                return n
            },
            end: function() {
                return t
            }
        }
    }
    ,
    n.get = function(n, t, i) {
        var u, r;
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (n) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (i) {}
            throw Error("This browser does not support XMLHttpRequest.");
        }
        );
        r = new XMLHttpRequest;
        try {
            r.open("GET", n)
        } catch (f) {
            i(f)
        }
        u = 0 === n.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === n.indexOf("http");
        r.onreadystatechange = function() {
            4 === r.readyState && (200 === r.status || u && 0 === r.status ? t(r.responseText) : i && i())
        }
        ;
        try {
            r.send()
        } catch (e) {
            i && i(e)
        }
    }
    ,
    n.vd = function(t) {
        try {
            var u = window.localStorage || i;
            u && (u.volume = t)
        } catch (r) {
            22 == r.code || 1014 == r.code ? n.log("LocalStorage Full (VideoJS)", r) : 18 == r.code ? n.log("LocalStorage not allowed (VideoJS)", r) : n.log("LocalStorage Error (VideoJS)", r)
        }
    }
    ,
    n.kc = function(t) {
        return t.match(/^https?:\/\//) || (t = n.e("div", {
            innerHTML: '<a href="' + t + '">x<\/a>'
        }).firstChild.href),
        t
    }
    ,
    n.log = function() {
        n.log.history = n.log.history || [];
        n.log.history.push(arguments);
        window.console && window.console.log(Array.prototype.slice.call(arguments))
    }
    ,
    n.cd = function(n) {
        var i, t;
        return (n.getBoundingClientRect && n.parentNode && (i = n.getBoundingClientRect()),
        !i) ? {
            left: 0,
            top: 0
        } : (n = document.documentElement,
        t = document.body,
        {
            left: i.left + (window.pageXOffset || t.scrollLeft) - (n.clientLeft || t.clientLeft || 0),
            top: i.top + (window.pageYOffset || t.scrollTop) - (n.clientTop || t.clientTop || 0)
        })
    }
    ,
    n.ja = {},
    n.ja.Fb = function(t, i) {
        var r, u, f;
        t = n.k.copy(t);
        for (r in i)
            i.hasOwnProperty(r) && (u = t[r],
            f = i[r],
            t[r] = n.k.Ma(u) && n.k.Ma(f) ? n.ja.Fb(u, f) : i[r]);
        return t
    }
    ,
    n.b = n.ka.extend({
        h: function(t, r, u) {
            if (this.c = t,
            this.g = n.k.copy(this.g),
            r = this.options(r),
            this.Q = r.id || (r.el && r.el.id ? r.el.id : t.id() + "_component_" + n.s++),
            this.kd = r.name || e,
            this.a = r.el || this.e(),
            this.J = [],
            this.Ia = {},
            this.Ja = {},
            this.nc(),
            this.H(u),
            r.uc !== i) {
                var f, o;
                f = n.bind(this.C(), this.C().reportUserActivity);
                this.d("touchstart", function() {
                    f();
                    clearInterval(o);
                    o = setInterval(f, 250)
                }
                );
                t = function() {
                    f();
                    clearInterval(o)
                }
                ;
                this.d("touchmove", f);
                this.d("touchend", t);
                this.d("touchcancel", t)
            }
        }
    }),
    t = n.b.prototype,
    t.dispose = function() {
        if (this.j({
            type: "dispose",
            bubbles: i
        }),
        this.J)
            for (var t = this.J.length - 1; 0 <= t; t--)
                this.J[t].dispose && this.J[t].dispose();
        this.Ja = this.Ia = this.J = e;
        this.o();
        this.a.parentNode && this.a.parentNode.removeChild(this.a);
        n.tc(this.a);
        this.a = e
    }
    ,
    t.c = r,
    t.C = o("c"),
    t.options = function(t) {
        return t === f ? this.g : this.g = n.ja.Fb(this.g, t)
    }
    ,
    t.e = function(t, i) {
        return n.e(t, i)
    }
    ,
    t.u = o("a"),
    t.Ka = function() {
        return this.F || this.a
    }
    ,
    t.id = o("Q"),
    t.name = o("kd"),
    t.children = o("J"),
    t.ed = function(n) {
        return this.Ia[n]
    }
    ,
    t.fa = function(n) {
        return this.Ja[n]
    }
    ,
    t.Y = function(t, i) {
        var r, u;
        return "string" == typeof t ? (u = t,
        i = i || {},
        r = i.componentClass || n.Z(u),
        i.name = u,
        r = new window.videojs[r](this.c || this,i)) : r = t,
        this.J.push(r),
        "function" == typeof r.id && (this.Ia[r.id()] = r),
        (u = u || r.name && r.name()) && (this.Ja[u] = r),
        "function" == typeof r.el && r.el() && this.Ka().appendChild(r.el()),
        r
    }
    ,
    t.removeChild = function(n) {
        if ("string" == typeof n && (n = this.fa(n)),
        n && this.J) {
            for (var t = i, u = this.J.length - 1; 0 <= u; u--)
                if (this.J[u] === n) {
                    t = r;
                    this.J.splice(u, 1);
                    break
                }
            t && (this.Ia[n.id] = e,
            this.Ja[n.name] = e,
            (t = n.u()) && t.parentNode === this.Ka() && this.Ka().removeChild(n.u()))
        }
    }
    ,
    t.nc = function() {
        var t = this.g, r;
        t && t.children && (r = this,
        n.k.ra(t.children, function(n, t) {
            t === i || t.loadEvent || (r[n] = r.Y(n, t))
        }
        ))
    }
    ,
    t.P = p(""),
    t.d = function(t, i) {
        return n.d(this.a, t, n.bind(this, i)),
        this
    }
    ,
    t.o = function(t, i) {
        return n.o(this.a, t, i),
        this
    }
    ,
    t.T = function(t, i) {
        return n.T(this.a, t, n.bind(this, i)),
        this
    }
    ,
    t.j = function(t, i) {
        return n.j(this.a, t, i),
        this
    }
    ,
    t.H = function(n) {
        return n && (this.aa ? n.call(this) : (this.Ta === f && (this.Ta = []),
        this.Ta.push(n))),
        this
    }
    ,
    t.Wa = function() {
        var n, t, i;
        if (this.aa = r,
        n = this.Ta,
        n && 0 < n.length) {
            for (t = 0,
            i = n.length; t < i; t++)
                n[t].call(this);
            this.Ta = [];
            this.j("ready")
        }
    }
    ,
    t.n = function(t) {
        return n.n(this.a, t),
        this
    }
    ,
    t.t = function(t) {
        return n.t(this.a, t),
        this
    }
    ,
    t.show = function() {
        return this.a.style.display = "block",
        this
    }
    ,
    t.D = function() {
        return this.a.style.display = "none",
        this
    }
    ,
    t.disable = function() {
        this.D();
        this.show = l()
    }
    ,
    t.width = function(n, t) {
        return at(this, "width", n, t)
    }
    ,
    t.height = function(n, t) {
        return at(this, "height", n, t)
    }
    ,
    t.Yc = function(n, t) {
        return this.width(n, r).height(t)
    }
    ,
    n.q = n.b.extend({
        h: function(t, u) {
            var f, e;
            n.b.call(this, t, u);
            f = i;
            this.d("touchstart", function(n) {
                n.preventDefault();
                f = r
            }
            );
            this.d("touchmove", function() {
                f = i
            }
            );
            e = this;
            this.d("touchend", function(n) {
                f && e.p(n);
                n.preventDefault()
            }
            );
            this.d("click", this.p);
            this.d("focus", this.Pa);
            this.d("blur", this.Oa)
        }
    }),
    t = n.q.prototype,
    t.e = function(t, i) {
        return i = n.k.B({
            className: this.P(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "<\/span><\/div>",
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, i),
        n.b.prototype.e.call(this, t, i)
    }
    ,
    t.P = function() {
        return "vjs-control " + n.b.prototype.P.call(this)
    }
    ,
    t.p = l(),
    t.Pa = function() {
        n.d(document, "keyup", n.bind(this, this.ba))
    }
    ,
    t.ba = function(n) {
        (32 == n.which || 13 == n.which) && (n.preventDefault(),
        this.p())
    }
    ,
    t.Oa = function() {
        n.o(document, "keyup", n.bind(this, this.ba))
    }
    ,
    n.N = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            this.Rc = this.fa(this.g.barName);
            this.handle = this.fa(this.g.handleName);
            t.d(this.rc, n.bind(this, this.update));
            this.d("mousedown", this.Qa);
            this.d("touchstart", this.Qa);
            this.d("focus", this.Pa);
            this.d("blur", this.Oa);
            this.d("click", this.p);
            this.c.d("controlsvisible", n.bind(this, this.update));
            t.H(n.bind(this, this.update));
            this.O = {}
        }
    }),
    t = n.N.prototype,
    t.e = function(t, i) {
        return i = i || {},
        i.className += " vjs-slider",
        i = n.k.B({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, i),
        n.b.prototype.e.call(this, t, i)
    }
    ,
    t.Qa = function(t) {
        t.preventDefault();
        n.Sc();
        this.O.move = n.bind(this, this.Hb);
        this.O.end = n.bind(this, this.Ib);
        n.d(document, "mousemove", this.O.move);
        n.d(document, "mouseup", this.O.end);
        n.d(document, "touchmove", this.O.move);
        n.d(document, "touchend", this.O.end);
        this.Hb(t)
    }
    ,
    t.Ib = function() {
        n.Dd();
        n.o(document, "mousemove", this.O.move, i);
        n.o(document, "mouseup", this.O.end, i);
        n.o(document, "touchmove", this.O.move, i);
        n.o(document, "touchend", this.O.end, i);
        this.update()
    }
    ,
    t.update = function() {
        var u;
        if (this.a) {
            var t, i = this.xb(), r = this.handle, f = this.Rc;
            isNaN(i) && (i = 0);
            t = i;
            r && (t = this.a.offsetWidth,
            u = r.u().offsetWidth,
            t = u ? u / t : 0,
            i *= 1 - t,
            t = i + t / 2,
            r.u().style.left = n.round(100 * i, 2) + "%");
            f.u().style.width = n.round(100 * t, 2) + "%"
        }
    }
    ,
    t.Pa = function() {
        n.d(document, "keyup", n.bind(this, this.ba))
    }
    ,
    t.ba = function(n) {
        37 == n.which ? (n.preventDefault(),
        this.xc()) : 39 == n.which && (n.preventDefault(),
        this.yc())
    }
    ,
    t.Oa = function() {
        n.o(document, "keyup", n.bind(this, this.ba))
    }
    ,
    t.p = function(n) {
        n.stopImmediatePropagation();
        n.preventDefault()
    }
    ,
    n.V = n.b.extend(),
    n.V.prototype.defaultValue = 0,
    n.V.prototype.e = function(t, i) {
        return i = i || {},
        i.className += " vjs-slider-handle",
        i = n.k.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "<\/span>"
        }, i),
        n.b.prototype.e.call(this, "div", i)
    }
    ,
    n.la = n.b.extend(),
    n.la.prototype.e = function() {
        var t = this.options().Uc || "ul";
        return this.F = n.e(t, {
            className: "vjs-menu-content"
        }),
        t = n.b.prototype.e.call(this, "div", {
            append: this.F,
            className: "vjs-menu"
        }),
        t.appendChild(this.F),
        n.d(t, "click", function(n) {
            n.preventDefault();
            n.stopImmediatePropagation()
        }
        ),
        t
    }
    ,
    n.M = n.q.extend({
        h: function(t, i) {
            n.q.call(this, t, i);
            this.selected(i.selected)
        }
    }),
    n.M.prototype.e = function(t, i) {
        return n.q.prototype.e.call(this, "li", n.k.B({
            className: "vjs-menu-item",
            innerHTML: this.g.label
        }, i))
    }
    ,
    n.M.prototype.p = function() {
        this.selected(r)
    }
    ,
    n.M.prototype.selected = function(n) {
        n ? (this.n("vjs-selected"),
        this.a.setAttribute("aria-selected", r)) : (this.t("vjs-selected"),
        this.a.setAttribute("aria-selected", i))
    }
    ,
    n.R = n.q.extend({
        h: function(t, i) {
            n.q.call(this, t, i);
            this.ua = this.La();
            this.Y(this.ua);
            this.K && 0 === this.K.length && this.D();
            this.d("keyup", this.ba);
            this.a.setAttribute("aria-haspopup", r);
            this.a.setAttribute("role", "button")
        }
    }),
    t = n.R.prototype,
    t.na = i,
    t.La = function() {
        var i = new n.la(this.c), t;
        if (this.options().title && i.u().appendChild(n.e("li", {
            className: "vjs-menu-title",
            innerHTML: n.Z(this.A),
            Bd: -1
        })),
        this.K = this.createItems())
            for (t = 0; t < this.K.length; t++)
                ri(i, this.K[t]);
        return i
    }
    ,
    t.qa = l(),
    t.P = function() {
        return this.className + " vjs-menu-button " + n.q.prototype.P.call(this)
    }
    ,
    t.Pa = l(),
    t.Oa = l(),
    t.p = function() {
        this.T("mouseout", n.bind(this, function() {
            it(this.ua);
            this.a.blur()
        }
        ));
        this.na ? rt(this) : yt(this)
    }
    ,
    t.ba = function(n) {
        n.preventDefault();
        32 == n.which || 13 == n.which ? this.na ? rt(this) : yt(this) : 27 == n.which && this.na && rt(this)
    }
    ,
    n.Player = n.b.extend({
        h: function(t, u, f) {
            this.L = t;
            t.id = t.id || "vjs_video_" + n.s++;
            u = n.k.B(ui(t), u);
            this.v = {};
            this.sc = u.poster;
            this.rb = u.controls;
            t.controls = i;
            u.uc = i;
            n.b.call(this, this, u, f);
            this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
            this.T("play", function(t) {
                n.j(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation())
            }
            );
            this.d("ended", this.ld);
            this.d("play", this.Kb);
            this.d("firstplay", this.md);
            this.d("pause", this.Jb);
            this.d("progress", this.od);
            this.d("durationchange", this.qc);
            this.d("error", this.Gb);
            this.d("fullscreenchange", this.nd);
            n.va[this.Q] = this;
            u.plugins && n.k.ra(u.plugins, function(n, t) {
                this[n](t)
            }
            , this);
            var e, o, h, s;
            e = n.bind(this, this.reportUserActivity);
            this.d("mousedown", function() {
                e();
                clearInterval(o);
                o = setInterval(e, 250)
            }
            );
            this.d("mousemove", e);
            this.d("mouseup", function() {
                e();
                clearInterval(o)
            }
            );
            this.d("keydown", e);
            this.d("keyup", e);
            h = setInterval(n.bind(this, function() {
                this.ia && (this.ia = i,
                this.userActive(r),
                clearTimeout(s),
                s = setTimeout(n.bind(this, function() {
                    this.ia || this.userActive(i)
                }
                ), 2e3))
            }
            ), 250);
            this.d("dispose", function() {
                clearInterval(h);
                clearTimeout(s)
            }
            )
        }
    }),
    t = n.Player.prototype,
    t.g = n.options,
    t.dispose = function() {
        this.j("dispose");
        this.o("dispose");
        n.va[this.Q] = e;
        this.L && this.L.player && (this.L.player = e);
        this.a && this.a.player && (this.a.player = e);
        clearInterval(this.Sa);
        this.wa();
        this.i && this.i.dispose();
        n.b.prototype.dispose.call(this)
    }
    ,
    t.e = function() {
        var u = this.a = n.b.prototype.e.call(this, "div"), t = this.L, i, e, o, s, f;
        if (t.removeAttribute("width"),
        t.removeAttribute("height"),
        t.hasChildNodes()) {
            for (i = t.childNodes,
            e = i.length,
            f = []; e--; )
                o = i[e],
                s = o.nodeName.toLowerCase(),
                "track" === s && f.push(o);
            for (i = 0; i < f.length; i++)
                t.removeChild(f[i])
        }
        return u.id = t.id,
        u.className = t.className,
        t.id += "_html5_api",
        t.className = "vjs-tech",
        t.player = u.player = this,
        this.n("vjs-paused"),
        this.width(this.g.width, r),
        this.height(this.g.height, r),
        t.parentNode && t.parentNode.insertBefore(u, t),
        n.yb(t, u),
        u
    }
    ,
    t.Bc = function() {
        this.fc && this.wa();
        this.fc = setInterval(n.bind(this, function() {
            this.j("timeupdate")
        }
        ), 250)
    }
    ,
    t.wa = function() {
        clearInterval(this.fc)
    }
    ,
    t.Kb = function() {
        n.t(this.a, "vjs-paused");
        n.n(this.a, "vjs-playing")
    }
    ,
    t.md = function() {
        this.g.starttime && this.currentTime(this.g.starttime);
        this.n("vjs-has-started")
    }
    ,
    t.Jb = function() {
        n.t(this.a, "vjs-playing");
        n.n(this.a, "vjs-paused")
    }
    ,
    t.od = function() {
        1 == this.bufferedPercent() && this.j("loadedalldata")
    }
    ,
    t.ld = function() {
        this.g.loop && (this.currentTime(0),
        this.play())
    }
    ,
    t.qc = function() {
        var n = s(this, "duration");
        n && this.duration(n)
    }
    ,
    t.nd = function() {
        this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
    }
    ,
    t.Gb = function(t) {
        n.log("Video Error", t)
    }
    ,
    t.play = function() {
        return h(this, "play"),
        this
    }
    ,
    t.pause = function() {
        return h(this, "pause"),
        this
    }
    ,
    t.paused = function() {
        return s(this, "paused") === i ? i : r
    }
    ,
    t.currentTime = function(n) {
        return n !== f ? (h(this, "setCurrentTime", n),
        this.Eb && this.j("timeupdate"),
        this) : this.v.currentTime = s(this, "currentTime") || 0
    }
    ,
    t.duration = function(n) {
        return n !== f ? (this.v.duration = parseFloat(n),
        this) : (this.v.duration === f && this.qc(),
        this.v.duration || 0)
    }
    ,
    t.buffered = function() {
        var t = s(this, "buffered")
          , r = t.length - 1
          , i = this.v.mb = this.v.mb || 0;
        return t && 0 <= r && t.end(r) !== i && (i = t.end(r),
        this.v.mb = i),
        n.sb(0, i)
    }
    ,
    t.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    }
    ,
    t.volume = function(t) {
        return t !== f ? (t = Math.max(0, Math.min(1, parseFloat(t))),
        this.v.volume = t,
        h(this, "setVolume", t),
        n.vd(t),
        this) : (t = parseFloat(s(this, "volume")),
        isNaN(t) ? 1 : t)
    }
    ,
    t.muted = function(n) {
        return n !== f ? (h(this, "setMuted", n),
        this) : s(this, "muted") || i
    }
    ,
    t.Va = function() {
        return s(this, "supportsFullScreen") || i
    }
    ,
    t.oc = i,
    t.isFullScreen = function(n) {
        return n !== f ? (this.oc = n,
        this) : this.oc
    }
    ,
    t.requestFullScreen = function() {
        var t = n.Ob.requestFullScreen;
        return this.isFullScreen(r),
        t ? (n.d(document, t.ub, n.bind(this, function() {
            this.isFullScreen(document[t.isFullScreen]);
            this.isFullScreen() === i && n.o(document, t.ub, arguments.callee);
            this.j("fullscreenchange")
        }
        )),
        this.a[t.vc]()) : this.i.Va() ? h(this, "enterFullScreen") : (this.fd = r,
        this.Zc = document.documentElement.style.overflow,
        n.d(document, "keydown", n.bind(this, this.jc)),
        document.documentElement.style.overflow = "hidden",
        n.n(document.body, "vjs-full-window"),
        this.j("enterFullWindow"),
        this.j("fullscreenchange")),
        this
    }
    ,
    t.cancelFullScreen = function() {
        var t = n.Ob.requestFullScreen;
        return this.isFullScreen(i),
        t ? document[t.ob]() : this.i.Va() ? h(this, "exitFullScreen") : (bt(this),
        this.j("fullscreenchange")),
        this
    }
    ,
    t.jc = function(n) {
        27 === n.keyCode && (this.isFullScreen() === r ? this.cancelFullScreen() : bt(this))
    }
    ,
    t.src = function(t) {
        var r, u, e, o, s, f, c, l;
        if (t instanceof Array) {
            n: {
                for (r = t,
                u = 0,
                e = this.g.techOrder; u < e.length; u++)
                    if (o = n.Z(e[u]),
                    s = window.videojs[o],
                    s.isSupported())
                        for (f = 0,
                        c = r; f < c.length; f++)
                            if (l = c[f],
                            s.canPlaySource(l)) {
                                r = {
                                    source: l,
                                    i: o
                                };
                                break n
                            }
                r = i
            }
            r ? (t = r.source,
            r = r.i,
            r == this.xa ? this.src(t) : pt(this, r, t)) : this.a.appendChild(n.e("p", {
                innerHTML: this.options().notSupportedMessage
            }))
        } else
            t instanceof Object ? window.videojs[this.xa].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.v.src = t,
            this.aa ? (h(this, "src", t),
            "auto" == this.g.preload && this.load(),
            this.g.autoplay && this.play()) : this.H(function() {
                this.src(t)
            }
            ));
        return this
    }
    ,
    t.load = function() {
        return h(this, "load"),
        this
    }
    ,
    t.currentSrc = function() {
        return s(this, "currentSrc") || this.v.src || ""
    }
    ,
    t.Ra = function(n) {
        return n !== f ? (h(this, "setPreload", n),
        this.g.preload = n,
        this) : s(this, "preload")
    }
    ,
    t.autoplay = function(n) {
        return n !== f ? (h(this, "setAutoplay", n),
        this.g.autoplay = n,
        this) : s(this, "autoplay")
    }
    ,
    t.loop = function(n) {
        return n !== f ? (h(this, "setLoop", n),
        this.g.loop = n,
        this) : s(this, "loop")
    }
    ,
    t.poster = function(n) {
        if (n === f)
            return this.sc;
        this.sc = n;
        h(this, "setPoster", n);
        this.j("posterchange")
    }
    ,
    t.controls = function(n) {
        return n !== f ? (n = !!n,
        this.rb !== n && ((this.rb = n) ? (this.t("vjs-controls-disabled"),
        this.n("vjs-controls-enabled"),
        this.j("controlsenabled")) : (this.t("vjs-controls-enabled"),
        this.n("vjs-controls-disabled"),
        this.j("controlsdisabled"))),
        this) : this.rb
    }
    ,
    n.Player.prototype.Qb,
    t = n.Player.prototype,
    t.usingNativeControls = function(n) {
        return n !== f ? (n = !!n,
        this.Qb !== n && ((this.Qb = n) ? (this.n("vjs-using-native-controls"),
        this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"),
        this.j("usingcustomcontrols"))),
        this) : this.Qb
    }
    ,
    t.error = function() {
        return s(this, "error")
    }
    ,
    t.ended = function() {
        return s(this, "ended")
    }
    ,
    t.seeking = function() {
        return s(this, "seeking")
    }
    ,
    t.ia = r,
    t.reportUserActivity = function() {
        this.ia = r
    }
    ,
    t.Pb = r,
    t.userActive = function(n) {
        return n !== f ? (n = !!n,
        n !== this.Pb && ((this.Pb = n) ? (this.ia = r,
        this.t("vjs-user-inactive"),
        this.n("vjs-user-active"),
        this.j("useractive")) : (this.ia = i,
        this.i.T("mousemove", function(n) {
            n.stopPropagation();
            n.preventDefault()
        }
        ),
        this.t("vjs-user-active"),
        this.n("vjs-user-inactive"),
        this.j("userinactive"))),
        this) : this.Pb
    }
    ,
    ut = document.createElement("div"),
    c = {},
    ut.Kd !== f ? (c.vc = "requestFullscreen",
    c.ob = "exitFullscreen",
    c.ub = "fullscreenchange",
    c.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (y = "moz",
    c.isFullScreen = y + "FullScreen") : (y = "webkit",
    c.isFullScreen = y + "IsFullScreen"),
    ut[y + "RequestFullScreen"] && (c.vc = y + "RequestFullScreen",
    c.ob = y + "CancelFullScreen"),
    c.ub = y + "fullscreenchange"),
    document[c.ob] && (n.Ob.requestFullScreen = c),
    n.Ca = n.b.extend(),
    n.Ca.prototype.g = {
        Pd: "play",
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
    },
    n.Ca.prototype.e = function() {
        return n.e("div", {
            className: "vjs-control-bar"
        })
    }
    ,
    n.Xb = n.q.extend({
        h: function(t, i) {
            n.q.call(this, t, i);
            t.d("play", n.bind(this, this.Kb));
            t.d("pause", n.bind(this, this.Jb))
        }
    }),
    t = n.Xb.prototype,
    t.oa = "Play",
    t.P = function() {
        return "vjs-play-control " + n.q.prototype.P.call(this)
    }
    ,
    t.p = function() {
        this.c.paused() ? this.c.play() : this.c.pause()
    }
    ,
    t.Kb = function() {
        n.t(this.a, "vjs-paused");
        n.n(this.a, "vjs-playing");
        this.a.children[0].children[0].innerHTML = "Pause"
    }
    ,
    t.Jb = function() {
        n.t(this.a, "vjs-playing");
        n.n(this.a, "vjs-paused");
        this.a.children[0].children[0].innerHTML = "Play"
    }
    ,
    n.$a = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            t.d("timeupdate", n.bind(this, this.da))
        }
    }),
    n.$a.prototype.e = function() {
        var t = n.b.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.F = n.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time <\/span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.F),
        t
    }
    ,
    n.$a.prototype.da = function() {
        var t = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.F.innerHTML = '<span class="vjs-control-text">Current Time <\/span>' + n.ta(t, this.c.duration())
    }
    ,
    n.ab = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            t.d("timeupdate", n.bind(this, this.da))
        }
    }),
    n.ab.prototype.e = function() {
        var t = n.b.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.F = n.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time <\/span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.F),
        t
    }
    ,
    n.ab.prototype.da = function() {
        var t = this.c.duration();
        t && (this.F.innerHTML = '<span class="vjs-control-text">Duration Time <\/span>' + n.ta(t))
    }
    ,
    n.bc = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i)
        }
    }),
    n.bc.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/<\/span><\/div>"
        })
    }
    ,
    n.gb = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            t.d("timeupdate", n.bind(this, this.da))
        }
    }),
    n.gb.prototype.e = function() {
        var t = n.b.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.F = n.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time <\/span>-0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.F),
        t
    }
    ,
    n.gb.prototype.da = function() {
        this.c.duration() && (this.F.innerHTML = '<span class="vjs-control-text">Remaining Time <\/span>-' + n.ta(this.c.duration() - this.c.currentTime()))
    }
    ,
    n.Da = n.q.extend({
        h: function(t, i) {
            n.q.call(this, t, i)
        }
    }),
    n.Da.prototype.oa = "Fullscreen",
    n.Da.prototype.P = function() {
        return "vjs-fullscreen-control " + n.q.prototype.P.call(this)
    }
    ,
    n.Da.prototype.p = function() {
        this.c.isFullScreen() ? (this.c.cancelFullScreen(),
        this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.c.requestFullScreen(),
        this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    }
    ,
    n.fb = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i)
        }
    }),
    n.fb.prototype.g = {
        children: {
            seekBar: {}
        }
    },
    n.fb.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }
    ,
    n.Yb = n.N.extend({
        h: function(t, i) {
            n.N.call(this, t, i);
            t.d("timeupdate", n.bind(this, this.za));
            t.H(n.bind(this, this.za))
        }
    }),
    t = n.Yb.prototype,
    t.g = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    },
    t.rc = "timeupdate",
    t.e = function() {
        return n.N.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }
    ,
    t.za = function() {
        var t = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.a.setAttribute("aria-valuenow", n.round(100 * this.xb(), 2));
        this.a.setAttribute("aria-valuetext", n.ta(t, this.c.duration()))
    }
    ,
    t.xb = function() {
        return this.c.currentTime() / this.c.duration()
    }
    ,
    t.Qa = function(t) {
        n.N.prototype.Qa.call(this, t);
        this.c.Ua = r;
        this.Fd = !this.c.paused();
        this.c.pause()
    }
    ,
    t.Hb = function(n) {
        n = vt(this, n) * this.c.duration();
        n == this.c.duration() && (n -= .1);
        this.c.currentTime(n)
    }
    ,
    t.Ib = function(t) {
        n.N.prototype.Ib.call(this, t);
        this.c.Ua = i;
        this.Fd && this.c.play()
    }
    ,
    t.yc = function() {
        this.c.currentTime(this.c.currentTime() + 5)
    }
    ,
    t.xc = function() {
        this.c.currentTime(this.c.currentTime() - 5)
    }
    ,
    n.cb = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            t.d("progress", n.bind(this, this.update))
        }
    }),
    n.cb.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%<\/span>'
        })
    }
    ,
    n.cb.prototype.update = function() {
        this.a.style && (this.a.style.width = n.round(100 * this.c.bufferedPercent(), 2) + "%")
    }
    ,
    n.Wb = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i)
        }
    }),
    n.Wb.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%<\/span>'
        })
    }
    ,
    n.Fa = n.V.extend({
        h: function(t, i) {
            n.V.call(this, t, i);
            t.d("timeupdate", n.bind(this, this.da))
        }
    }),
    n.Fa.prototype.defaultValue = "00:00",
    n.Fa.prototype.e = function() {
        return n.V.prototype.e.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    }
    ,
    n.Fa.prototype.da = function() {
        var t = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.a.innerHTML = '<span class="vjs-control-text">' + n.ta(t, this.c.duration()) + "<\/span>"
    }
    ,
    n.ib = n.b.extend({
        h: function(t, r) {
            n.b.call(this, t, r);
            t.i && t.i.m && t.i.m.volumeControl === i && this.n("vjs-hidden");
            t.d("loadstart", n.bind(this, function() {
                t.i.m && t.i.m.volumeControl === i ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }
            ))
        }
    }),
    n.ib.prototype.g = {
        children: {
            volumeBar: {}
        }
    },
    n.ib.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }
    ,
    n.hb = n.N.extend({
        h: function(t, i) {
            n.N.call(this, t, i);
            t.d("volumechange", n.bind(this, this.za));
            t.H(n.bind(this, this.za));
            setTimeout(n.bind(this, this.update), 0)
        }
    }),
    t = n.hb.prototype,
    t.za = function() {
        this.a.setAttribute("aria-valuenow", n.round(100 * this.c.volume(), 2));
        this.a.setAttribute("aria-valuetext", n.round(100 * this.c.volume(), 2) + "%")
    }
    ,
    t.g = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    },
    t.rc = "volumechange",
    t.e = function() {
        return n.N.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }
    ,
    t.Hb = function(n) {
        this.c.muted() && this.c.muted(i);
        this.c.volume(vt(this, n))
    }
    ,
    t.xb = function() {
        return this.c.muted() ? 0 : this.c.volume()
    }
    ,
    t.yc = function() {
        this.c.volume(this.c.volume() + .1)
    }
    ,
    t.xc = function() {
        this.c.volume(this.c.volume() - .1)
    }
    ,
    n.cc = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i)
        }
    }),
    n.cc.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"><\/span>'
        })
    }
    ,
    n.jb = n.V.extend(),
    n.jb.prototype.defaultValue = "00:00",
    n.jb.prototype.e = function() {
        return n.V.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }
    ,
    n.ea = n.q.extend({
        h: function(t, r) {
            n.q.call(this, t, r);
            t.d("volumechange", n.bind(this, this.update));
            t.i && t.i.m && t.i.m.volumeControl === i && this.n("vjs-hidden");
            t.d("loadstart", n.bind(this, function() {
                t.i.m && t.i.m.volumeControl === i ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }
            ))
        }
    }),
    n.ea.prototype.e = function() {
        return n.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute<\/span><\/div>'
        })
    }
    ,
    n.ea.prototype.p = function() {
        this.c.muted(this.c.muted() ? i : r)
    }
    ,
    n.ea.prototype.update = function() {
        var t = this.c.volume()
          , i = 3;
        for (0 === t || this.c.muted() ? i = 0 : .33 > t ? i = 1 : .67 > t && (i = 2),
        this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute"),
        t = 0; 4 > t; t++)
            n.t(this.a, "vjs-vol-" + t);
        n.n(this.a, "vjs-vol-" + i)
    }
    ,
    n.ma = n.R.extend({
        h: function(t, r) {
            n.R.call(this, t, r);
            t.d("volumechange", n.bind(this, this.update));
            t.i && t.i.m && t.i.m.Cc === i && this.n("vjs-hidden");
            t.d("loadstart", n.bind(this, function() {
                t.i.m && t.i.m.Cc === i ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }
            ));
            this.n("vjs-menu-button")
        }
    }),
    n.ma.prototype.La = function() {
        var t = new n.la(this.c,{
            Uc: "div"
        })
          , i = new n.hb(this.c,n.k.B({
            Ed: r
        }, this.g.Yd));
        return t.Y(i),
        t
    }
    ,
    n.ma.prototype.p = function() {
        n.ea.prototype.p.call(this);
        n.R.prototype.p.call(this)
    }
    ,
    n.ma.prototype.e = function() {
        return n.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute<\/span><\/div>'
        })
    }
    ,
    n.ma.prototype.update = n.ea.prototype.update,
    n.Ea = n.q.extend({
        h: function(t, i) {
            n.q.call(this, t, i);
            t.poster() && this.src(t.poster());
            t.poster() && t.controls() || this.D();
            t.d("posterchange", n.bind(this, function() {
                this.src(t.poster())
            }
            ));
            t.d("play", n.bind(this, this.D))
        }
    }),
    ft = ("backgroundSize" in n.W.style),
    n.Ea.prototype.e = function() {
        var t = n.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return ft || t.appendChild(n.e("img")),
        t
    }
    ,
    n.Ea.prototype.src = function(n) {
        var t = this.u();
        n !== f && (ft ? t.style.backgroundImage = 'url("' + n + '")' : t.firstChild.src = n)
    }
    ,
    n.Ea.prototype.p = function() {
        this.C().controls() && this.c.play()
    }
    ,
    n.Vb = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            t.d("canplay", n.bind(this, this.D));
            t.d("canplaythrough", n.bind(this, this.D));
            t.d("playing", n.bind(this, this.D));
            t.d("seeked", n.bind(this, this.D));
            t.d("seeking", n.bind(this, this.show));
            t.d("seeked", n.bind(this, this.D));
            t.d("error", n.bind(this, this.show));
            t.d("waiting", n.bind(this, this.show))
        }
    }),
    n.Vb.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }
    ,
    n.Ya = n.q.extend(),
    n.Ya.prototype.e = function() {
        return n.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"><\/span>',
            "aria-label": "play video"
        })
    }
    ,
    n.Ya.prototype.p = function() {
        this.c.play()
    }
    ,
    n.r = n.b.extend({
        h: function(t, u, f) {
            u = u || {};
            u.uc = i;
            n.b.call(this, t, u, f);
            var o, e;
            e = this;
            o = this.C();
            t = function() {
                var f, t, s, u, n;
                o.controls() && !o.usingNativeControls() && (e.d("mousedown", e.p),
                e.d("touchstart", function(n) {
                    n.preventDefault();
                    f = this.c.userActive()
                }
                ),
                e.d("touchmove", function() {
                    f && this.C().reportUserActivity()
                }
                ),
                t = 0,
                e.d("touchstart", function() {
                    t = (new Date).getTime();
                    u = r
                }
                ),
                n = function() {
                    u = i
                }
                ,
                e.d("touchmove", n),
                e.d("touchleave", n),
                e.d("touchcancel", n),
                e.d("touchend", function() {
                    u === r && (s = (new Date).getTime() - t,
                    250 > s && this.j("tap"))
                }
                ),
                e.d("tap", e.pd))
            }
            ;
            u = n.bind(e, e.sd);
            this.H(t);
            o.d("controlsenabled", t);
            o.d("controlsdisabled", u)
        }
    }),
    t = n.r.prototype,
    t.sd = function() {
        this.o("tap");
        this.o("touchstart");
        this.o("touchmove");
        this.o("touchleave");
        this.o("touchcancel");
        this.o("touchend");
        this.o("click");
        this.o("mousedown")
    }
    ,
    t.p = function(n) {
        0 === n.button && this.C().controls() && (this.C().paused() ? this.C().play() : this.C().pause())
    }
    ,
    t.pd = function() {
        this.C().userActive(!this.C().userActive())
    }
    ,
    t.Mb = l(),
    t.m = {
        volumeControl: r,
        fullscreenResize: i,
        progressEvents: i,
        timeupdateEvents: i
    },
    n.media = {},
    n.media.Xa = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" "),
    k = n.media.Xa.length - 1; 0 <= k; k--)
        n.r.prototype[n.media.Xa[k]] = fi();
    n.l = n.r.extend({
        h: function(t, u, f) {
            for (this.m.volumeControl = n.l.Tc(),
            this.m.movingMediaElementInDOM = !n.Ic,
            this.m.fullscreenResize = r,
            n.r.call(this, t, u, f),
            f = n.l.bb.length - 1; 0 <= f; f--)
                n.d(this.a, n.l.bb[f], n.bind(this.c, this.ad));
            if ((u = u.source) && this.a.currentSrc === u.src && 0 < this.a.networkState ? t.j("loadstart") : u && (this.a.src = u.src),
            n.$b && t.options().nativeControlsForTouch !== i) {
                var o, e, s, h;
                o = this;
                e = this.C();
                u = e.controls();
                o.a.controls = !!u;
                s = function() {
                    o.a.controls = r
                }
                ;
                h = function() {
                    o.a.controls = i
                }
                ;
                e.d("controlsenabled", s);
                e.d("controlsdisabled", h);
                u = function() {
                    e.o("controlsenabled", s);
                    e.o("controlsdisabled", h)
                }
                ;
                o.d("dispose", u);
                e.d("usingcustomcontrols", u);
                e.usingNativeControls(r)
            }
            t.H(function() {
                this.L && this.g.autoplay && this.paused() && (delete this.L.poster,
                this.play())
            }
            );
            this.Wa()
        }
    });
    t = n.l.prototype;
    t.dispose = function() {
        n.r.prototype.dispose.call(this)
    }
    ;
    t.e = function() {
        var r = this.c, t = r.L, u, f, o;
        for (t && this.m.movingMediaElementInDOM !== i || (t ? (u = t.cloneNode(i),
        n.l.gc(t),
        t = u,
        r.L = e) : t = n.e("video", {
            id: r.id() + "_html5_api",
            className: "vjs-tech"
        }),
        t.player = r,
        n.yb(t, r.u())),
        u = ["autoplay", "preload", "loop", "muted"],
        f = u.length - 1; 0 <= f; f--)
            o = u[f],
            r.g[o] !== e && (t[o] = r.g[o]);
        return t
    }
    ;
    t.ad = function(n) {
        this.j(n);
        n.stopPropagation()
    }
    ;
    t.play = function() {
        this.a.play()
    }
    ;
    t.pause = function() {
        this.a.pause()
    }
    ;
    t.paused = function() {
        return this.a.paused
    }
    ;
    t.currentTime = function() {
        return this.a.currentTime
    }
    ;
    t.ud = function(t) {
        try {
            this.a.currentTime = t
        } catch (i) {
            n.log(i, "Video is not ready. (Video.js)")
        }
    }
    ;
    t.duration = function() {
        return this.a.duration || 0
    }
    ;
    t.buffered = function() {
        return this.a.buffered
    }
    ;
    t.volume = function() {
        return this.a.volume
    }
    ;
    t.zd = function(n) {
        this.a.volume = n
    }
    ;
    t.muted = function() {
        return this.a.muted
    }
    ;
    t.xd = function(n) {
        this.a.muted = n
    }
    ;
    t.width = function() {
        return this.a.offsetWidth
    }
    ;
    t.height = function() {
        return this.a.offsetHeight
    }
    ;
    t.Va = function() {
        return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(n.I) || !/Chrome|Mac OS X 10.5/.test(n.I)) ? r : i
    }
    ;
    t.hc = function() {
        var n = this.a;
        n.paused && n.networkState <= n.Hd ? (this.a.play(),
        setTimeout(function() {
            n.pause();
            n.webkitEnterFullScreen()
        }
        , 0)) : n.webkitEnterFullScreen()
    }
    ;
    t.bd = function() {
        this.a.webkitExitFullScreen()
    }
    ;
    t.src = function(n) {
        this.a.src = n
    }
    ;
    t.load = function() {
        this.a.load()
    }
    ;
    t.currentSrc = function() {
        return this.a.currentSrc
    }
    ;
    t.poster = function() {
        return this.a.poster
    }
    ;
    t.Mb = function(n) {
        this.a.poster = n
    }
    ;
    t.Ra = function() {
        return this.a.Ra
    }
    ;
    t.yd = function(n) {
        this.a.Ra = n
    }
    ;
    t.autoplay = function() {
        return this.a.autoplay
    }
    ;
    t.td = function(n) {
        this.a.autoplay = n
    }
    ;
    t.controls = function() {
        return this.a.controls
    }
    ;
    t.loop = function() {
        return this.a.loop
    }
    ;
    t.wd = function(n) {
        this.a.loop = n
    }
    ;
    t.error = function() {
        return this.a.error
    }
    ;
    t.seeking = function() {
        return this.a.seeking
    }
    ;
    t.ended = function() {
        return this.a.ended
    }
    ;
    n.l.isSupported = function() {
        try {
            n.W.volume = .5
        } catch (t) {
            return i
        }
        return !!n.W.canPlayType
    }
    ;
    n.l.nb = function(t) {
        try {
            return !!n.W.canPlayType(t.type)
        } catch (i) {
            return ""
        }
    }
    ;
    n.l.Tc = function() {
        var t = n.W.volume;
        return n.W.volume = t / 2 + .1,
        t !== n.W.volume
    }
    ;
    n.l.bb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
    n.l.gc = function(n) {
        if (n) {
            for (n.player = e,
            n.parentNode && n.parentNode.removeChild(n); n.hasChildNodes(); )
                n.removeChild(n.firstChild);
            if (n.removeAttribute("src"),
            "function" == typeof n.load)
                try {
                    n.load()
                } catch (t) {}
        }
    }
    ;
    n.Mc && (document.createElement("video").constructor.prototype.canPlayType = function(n) {
        return n && -1 != n.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    }
    );
    n.f = n.r.extend({
        h: function(t, u, f) {
            var s, h, c, o;
            n.r.call(this, t, u, f);
            s = u.source;
            f = u.parentEl;
            h = this.a = n.e("div", {
                id: t.id() + "_temp_flash"
            });
            c = t.id() + "_flash_api";
            t = t.g;
            var e = n.k.B({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: t.autoplay,
                preload: t.Ra,
                loop: t.loop,
                muted: t.muted
            }, u.flashVars), l = n.k.B({
                wmode: "opaque",
                bgcolor: "#000000"
            }, u.params), a = n.k.B({
                id: c,
                name: c,
                "class": "vjs-tech"
            }, u.attributes), v;
            s && (s.type && n.f.hd(s.type) ? (t = n.f.zc(s.src),
            e.rtmpConnection = encodeURIComponent(t.qb),
            e.rtmpStream = encodeURIComponent(t.Nb)) : e.src = encodeURIComponent(n.kc(s.src)));
            this.setCurrentTime = function(n) {
                v = n;
                this.a.vjs_setProperty("currentTime", n)
            }
            ;
            this.currentTime = function() {
                return this.seeking() ? v : this.a.vjs_getProperty("currentTime")
            }
            ;
            n.yb(h, f);
            u.startTime && this.H(function() {
                this.load();
                this.play();
                this.currentTime(u.startTime)
            }
            );
            n.Ub && this.H(function() {
                n.d(this.u(), "mousemove", n.bind(this, function() {
                    this.C().j({
                        type: "mousemove",
                        bubbles: i
                    })
                }
                ))
            }
            );
            u.iFrameMode !== r || n.Ub ? n.f.$c(u.swf, h, e, l, a) : (o = n.e("iframe", {
                id: c + "_iframe",
                name: c + "_iframe",
                className: "vjs-tech",
                scrolling: "no",
                marginWidth: 0,
                marginHeight: 0,
                frameBorder: 0
            }),
            e.readyFunction = "ready",
            e.eventProxyFunction = "events",
            e.errorEventProxyFunction = "errors",
            n.d(o, "load", n.bind(this, function() {
                var i, t = o.contentWindow;
                i = o.contentDocument ? o.contentDocument : o.contentWindow.document;
                i.write(n.f.lc(u.swf, e, l, a));
                t.player = this.c;
                t.ready = n.bind(this.c, function(t) {
                    var r = this.i;
                    r.a = i.getElementById(t);
                    n.f.pb(r)
                }
                );
                t.events = n.bind(this.c, function(n, t) {
                    this && "flash" === this.xa && this.j(t)
                }
                );
                t.errors = n.bind(this.c, function(t, i) {
                    n.log("Flash Error", i)
                }
                )
            }
            )),
            h.parentNode.replaceChild(o, h))
        }
    });
    t = n.f.prototype;
    t.dispose = function() {
        n.r.prototype.dispose.call(this)
    }
    ;
    t.play = function() {
        this.a.vjs_play()
    }
    ;
    t.pause = function() {
        this.a.vjs_pause()
    }
    ;
    t.src = function(t) {
        if (n.f.gd(t) ? (t = n.f.zc(t),
        this.Td(t.qb),
        this.Ud(t.Nb)) : (t = n.kc(t),
        this.a.vjs_src(t)),
        this.c.autoplay()) {
            var i = this;
            setTimeout(function() {
                i.play()
            }
            , 0)
        }
    }
    ;
    t.currentSrc = function() {
        var t = this.a.vjs_getProperty("currentSrc"), i, r;
        return t == e && (i = this.Rd(),
        r = this.Sd(),
        i && r && (t = n.f.Ad(i, r))),
        t
    }
    ;
    t.load = function() {
        this.a.vjs_load()
    }
    ;
    t.poster = function() {
        this.a.vjs_getProperty("poster")
    }
    ;
    t.Mb = l();
    t.buffered = function() {
        return n.sb(0, this.a.vjs_getProperty("buffered"))
    }
    ;
    t.Va = p(i);
    t.hc = p(i);
    var kt = n.f.prototype
      , et = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" ")
      , dt = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
    for (a = 0; a < et.length; a++)
        gt(et[a]),
        ei();
    for (a = 0; a < dt.length; a++)
        gt(dt[a]);
    n.f.isSupported = function() {
        return 10 <= n.f.version()[0]
    }
    ;
    n.f.nb = function(t) {
        return t.type ? (t = t.type.replace(/;.*/, "").toLowerCase(),
        t in n.f.dd || t in n.f.Ac ? "maybe" : void 0) : ""
    }
    ;
    n.f.dd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    };
    n.f.Ac = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    };
    n.f.onReady = function(t) {
        t = n.u(t);
        var i = t.player || t.parentNode.player
          , r = i.i;
        t.player = i;
        r.a = t;
        n.f.pb(r)
    }
    ;
    n.f.pb = function(t) {
        t.u().vjs_getProperty ? t.Wa() : setTimeout(function() {
            n.f.pb(t)
        }
        , 50)
    }
    ;
    n.f.onEvent = function(t, i) {
        n.u(t).player.j(i)
    }
    ;
    n.f.onError = function(t, i) {
        n.u(t).player.j("error");
        n.log("Flash Error", i, t)
    }
    ;
    n.f.version = function() {
        var n = "0,0,0";
        try {
            n = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (t) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (n = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (i) {}
        }
        return n.split(",")
    }
    ;
    n.f.$c = function(t, i, r, u, f) {
        t = n.f.lc(t, r, u, f);
        t = n.e("div", {
            innerHTML: t
        }).childNodes[0];
        r = i.parentNode;
        i.parentNode.replaceChild(t, i);
        var e = r.childNodes[0];
        setTimeout(function() {
            e.style.display = "block"
        }
        , 1e3)
    }
    ;
    n.f.lc = function(t, i, r, u) {
        var f = ""
          , e = ""
          , o = "";
        return i && n.k.ra(i, function(n, t) {
            f += n + "=" + t + "&amp;"
        }
        ),
        r = n.k.B({
            movie: t,
            flashvars: f,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, r),
        n.k.ra(r, function(n, t) {
            e += '<param name="' + n + '" value="' + t + '" />'
        }
        ),
        u = n.k.B({
            data: t,
            width: "100%",
            height: "100%"
        }, u),
        n.k.ra(u, function(n, t) {
            o += n + '="' + t + '" '
        }
        ),
        '<object type="application/x-shockwave-flash"' + o + ">" + e + "<\/object>"
    }
    ;
    n.f.Ad = function(n, t) {
        return n + "&" + t
    }
    ;
    n.f.zc = function(n) {
        var i = {
            qb: "",
            Nb: ""
        }, t, r;
        return n ? (t = n.indexOf("&"),
        -1 !== t ? r = t + 1 : (t = r = n.lastIndexOf("/") + 1,
        0 === t && (t = r = n.length)),
        i.qb = n.substring(0, t),
        i.Nb = n.substring(r, n.length),
        i) : i
    }
    ;
    n.f.hd = function(t) {
        return t in n.f.Ac
    }
    ;
    n.f.Oc = /^rtmp[set]?:\/\//i;
    n.f.gd = function(t) {
        return n.f.Oc.test(t)
    }
    ;
    n.Nc = n.b.extend({
        h: function(t, i, r) {
            if (n.b.call(this, t, i, r),
            t.g.sources && 0 !== t.g.sources.length)
                t.src(t.g.sources);
            else
                for (i = 0,
                r = t.g.techOrder; i < r.length; i++) {
                    var u = n.Z(r[i])
                      , f = window.videojs[u];
                    if (f && f.isSupported()) {
                        pt(t, u);
                        break
                    }
                }
        }
    });
    n.Player.prototype.textTracks = function() {
        return this.ya = this.ya || []
    }
    ;
    n.w = n.b.extend({
        h: function(t, i) {
            n.b.call(this, t, i);
            this.Q = i.id || "vjs_" + i.kind + "_" + i.language + "_" + n.s++;
            this.wc = i.src;
            this.Xc = i["default"] || i.dflt;
            this.Cd = i.title;
            this.Od = i.srclang;
            this.jd = i.label;
            this.$ = [];
            this.kb = [];
            this.ga = this.ha = 0;
            this.c.d("fullscreenchange", n.bind(this, this.Qc))
        }
    });
    t = n.w.prototype;
    t.G = o("A");
    t.src = o("wc");
    t.tb = o("Xc");
    t.title = o("Cd");
    t.label = o("jd");
    t.Vc = o("$");
    t.Pc = o("kb");
    t.readyState = o("ha");
    t.mode = o("ga");
    t.Qc = function() {
        this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%" : ""
    }
    ;
    t.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    }
    ;
    t.show = function() {
        ti(this);
        this.ga = 2;
        n.b.prototype.show.call(this)
    }
    ;
    t.D = function() {
        ti(this);
        this.ga = 1;
        n.b.prototype.D.call(this)
    }
    ;
    t.disable = function() {
        2 == this.ga && this.D();
        this.c.o("timeupdate", n.bind(this, this.update, this.Q));
        this.c.o("ended", n.bind(this, this.reset, this.Q));
        this.reset();
        this.c.fa("textTrackDisplay").removeChild(this);
        this.ga = 0
    }
    ;
    t.load = function() {
        0 === this.ha && (this.ha = 1,
        n.get(this.wc, n.bind(this, this.qd), n.bind(this, this.Gb)))
    }
    ;
    t.Gb = function(n) {
        this.error = n;
        this.ha = 3;
        this.j("error")
    }
    ;
    t.qd = function(t) {
        var i, u;
        t = t.split("\n");
        for (var r = "", f = 1, e = t.length; f < e; f++)
            if (r = n.trim(t[f])) {
                for (-1 == r.indexOf("-->") ? (i = r,
                r = n.trim(t[++f])) : i = this.$.length,
                i = {
                    id: i,
                    index: this.$.length
                },
                u = r.split(" --> "),
                i.startTime = ii(u[0]),
                i.sa = ii(u[1]),
                u = []; t[++f] && (r = n.trim(t[f])); )
                    u.push(r);
                i.text = u.join("<br/>");
                this.$.push(i)
            }
        this.ha = 2;
        this.j("loaded")
    }
    ;
    t.update = function() {
        var u;
        if (0 < this.$.length && (u = this.c.currentTime(),
        this.Lb === f || u < this.Lb || this.Na <= u)) {
            var s = this.$, e = this.c.duration(), o = 0, h = i, a = [], c, l, n, t;
            for (u >= this.Na || this.Na === f ? t = this.vb !== f ? this.vb : 0 : (h = r,
            t = this.Cb !== f ? this.Cb : s.length - 1); ; ) {
                if (n = s[t],
                n.sa <= u)
                    o = Math.max(o, n.sa),
                    n.Ha && (n.Ha = i);
                else if (u < n.startTime) {
                    if (e = Math.min(e, n.startTime),
                    n.Ha && (n.Ha = i),
                    !h)
                        break
                } else
                    h ? (a.splice(0, 0, n),
                    l === f && (l = t),
                    c = t) : (a.push(n),
                    c === f && (c = t),
                    l = t),
                    e = Math.min(e, n.sa),
                    o = Math.max(o, n.startTime),
                    n.Ha = r;
                if (h)
                    if (0 === t)
                        break;
                    else
                        t--;
                else if (t === s.length - 1)
                    break;
                else
                    t++
            }
            for (this.kb = a,
            this.Na = e,
            this.Lb = o,
            this.vb = c,
            this.Cb = l,
            u = this.kb,
            s = "",
            e = 0,
            o = u.length; e < o; e++)
                s += '<span class="vjs-tt-cue">' + u[e].text + "<\/span>";
            this.a.innerHTML = s;
            this.j("cuechange")
        }
    }
    ;
    t.reset = function() {
        this.Na = 0;
        this.Lb = this.c.duration();
        this.Cb = this.vb = 0
    }
    ;
    n.Sb = n.w.extend();
    n.Sb.prototype.A = "captions";
    n.Zb = n.w.extend();
    n.Zb.prototype.A = "subtitles";
    n.Tb = n.w.extend();
    n.Tb.prototype.A = "chapters";
    n.ac = n.b.extend({
        h: function(t, i, r) {
            var u;
            if (n.b.call(this, t, i, r),
            t.g.tracks && 0 < t.g.tracks.length)
                for (i = this.c,
                t = t.g.tracks,
                r = 0; r < t.length; r++) {
                    u = t[r];
                    var e = i
                      , o = u.kind
                      , s = u.label
                      , h = u.language
                      , f = u;
                    u = e.ya = e.ya || [];
                    f = f || {};
                    f.kind = o;
                    f.label = s;
                    f.language = h;
                    o = n.Z(o || "subtitles");
                    e = new window.videojs[o + "Track"](e,f);
                    u.push(e)
                }
        }
    });
    n.ac.prototype.e = function() {
        return n.b.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }
    ;
    n.X = n.M.extend({
        h: function(t, i) {
            var r = this.ca = i.track;
            i.label = r.label();
            i.selected = r.tb();
            n.M.call(this, t, i);
            this.c.d(r.G() + "trackchange", n.bind(this, this.update))
        }
    });
    n.X.prototype.p = function() {
        n.M.prototype.p.call(this);
        ni(this.c, this.ca.Q, this.ca.G())
    }
    ;
    n.X.prototype.update = function() {
        this.selected(2 == this.ca.mode())
    }
    ;
    n.eb = n.X.extend({
        h: function(t, u) {
            u.track = {
                G: function() {
                    return u.kind
                },
                C: t,
                label: function() {
                    return u.kind + " off"
                },
                tb: p(i),
                mode: p(i)
            };
            n.X.call(this, t, u);
            this.selected(r)
        }
    });
    n.eb.prototype.p = function() {
        n.X.prototype.p.call(this);
        ni(this.c, this.ca.Q, this.ca.G())
    }
    ;
    n.eb.prototype.update = function() {
        for (var u = this.c.textTracks(), n = 0, e = u.length, t, f = r; n < e; n++)
            t = u[n],
            t.G() == this.ca.G() && 2 == t.mode() && (f = i);
        this.selected(f)
    }
    ;
    n.S = n.R.extend({
        h: function(t, i) {
            n.R.call(this, t, i);
            1 >= this.K.length && this.D()
        }
    });
    n.S.prototype.qa = function() {
        var i = [], r, t;
        for (i.push(new n.eb(this.c,{
            kind: this.A
        })),
        t = 0; t < this.c.textTracks().length; t++)
            r = this.c.textTracks()[t],
            r.G() === this.A && i.push(new n.X(this.c,{
                track: r
            }));
        return i
    }
    ;
    n.Aa = n.S.extend({
        h: function(t, i, r) {
            n.S.call(this, t, i, r);
            this.a.setAttribute("aria-label", "Captions Menu")
        }
    });
    n.Aa.prototype.A = "captions";
    n.Aa.prototype.oa = "Captions";
    n.Aa.prototype.className = "vjs-captions-button";
    n.Ga = n.S.extend({
        h: function(t, i, r) {
            n.S.call(this, t, i, r);
            this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    });
    n.Ga.prototype.A = "subtitles";
    n.Ga.prototype.oa = "Subtitles";
    n.Ga.prototype.className = "vjs-subtitles-button";
    n.Ba = n.S.extend({
        h: function(t, i, r) {
            n.S.call(this, t, i, r);
            this.a.setAttribute("aria-label", "Chapters Menu")
        }
    });
    t = n.Ba.prototype;
    t.A = "chapters";
    t.oa = "Chapters";
    t.className = "vjs-chapters-button";
    t.qa = function() {
        for (var r = [], t, i = 0; i < this.c.textTracks().length; i++)
            t = this.c.textTracks()[i],
            t.G() === this.A && r.push(new n.X(this.c,{
                track: t
            }));
        return r
    }
    ;
    t.La = function() {
        for (var u, r = this.c.textTracks(), i = 0, e = r.length, t, f, o = this.K = []; i < e; i++)
            if (t = r[i],
            t.G() == this.A && t.tb()) {
                if (2 > t.readyState()) {
                    this.Ld = t;
                    t.d("loaded", n.bind(this, this.La));
                    return
                }
                f = t;
                break
            }
        if (r = this.ua = new n.la(this.c),
        r.a.appendChild(n.e("li", {
            className: "vjs-menu-title",
            innerHTML: n.Z(this.A),
            Bd: -1
        })),
        f)
            for (t = f.$,
            i = 0,
            e = t.length; i < e; i++)
                u = t[i],
                u = new n.Za(this.c,{
                    track: f,
                    cue: u
                }),
                o.push(u),
                r.Y(u);
        return 0 < this.K.length && this.show(),
        r
    }
    ;
    n.Za = n.M.extend({
        h: function(t, i) {
            var f = this.ca = i.track
              , r = this.cue = i.cue
              , u = t.currentTime();
            i.label = r.text;
            i.selected = r.startTime <= u && u < r.sa;
            n.M.call(this, t, i);
            f.d("cuechange", n.bind(this, this.update))
        }
    });
    n.Za.prototype.p = function() {
        n.M.prototype.p.call(this);
        this.c.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
    }
    ;
    n.Za.prototype.update = function() {
        var n = this.cue
          , t = this.c.currentTime();
        this.selected(n.startTime <= t && t < n.sa)
    }
    ;
    n.k.B(n.Ca.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    });
    "undefined" != typeof JSON && "function" === window.JSON.parse ? n.JSON = window.JSON : (n.JSON = {},
    nt = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    n.JSON.parse = function(a, c) {
        function d(n, t) {
            var r, u, i = n[t];
            if (i && "object" == typeof i)
                for (r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (u = d(i, r),
                    u !== f ? i[r] = u : delete i[r]);
            return c.call(n, t, i)
        }
        var e;
        if (a = String(a),
        nt.lastIndex = 0,
        nt.test(a) && (a = a.replace(nt, function(n) {
            return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        }
        )),
        /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return e = eval("(" + a + ")"),
            "function" == typeof c ? d({
                "": e
            }, "") : e;
        throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
    }
    );
    n.dc = function() {
        var t, i, r = document.getElementsByTagName("video"), u, o;
        if (r && 0 < r.length)
            for (u = 0,
            o = r.length; u < o; u++)
                if ((i = r[u]) && i.getAttribute)
                    i.player === f && (t = i.getAttribute("data-setup"),
                    t !== e && (t = n.JSON.parse(t || "{}"),
                    w(i, t)));
                else {
                    n.lb();
                    break
                }
        else
            n.Dc || n.lb()
    }
    ;
    n.lb = function() {
        setTimeout(n.dc, 1)
    }
    ;
    "complete" === document.readyState ? n.Dc = r : n.T(window, "load", function() {
        n.Dc = r
    }
    );
    n.lb();
    n.rd = function(t, i) {
        n.Player.prototype[t] = i
    }
    ;
    ot = this;
    ot.Gd = r;
    u("videojs", n);
    u("_V_", n);
    u("videojs.options", n.options);
    u("videojs.players", n.va);
    u("videojs.TOUCH_ENABLED", n.$b);
    u("videojs.cache", n.pa);
    u("videojs.Component", n.b);
    n.b.prototype.player = n.b.prototype.C;
    n.b.prototype.options = n.b.prototype.options;
    n.b.prototype.init = n.b.prototype.h;
    n.b.prototype.dispose = n.b.prototype.dispose;
    n.b.prototype.createEl = n.b.prototype.e;
    n.b.prototype.contentEl = n.b.prototype.Ka;
    n.b.prototype.el = n.b.prototype.u;
    n.b.prototype.addChild = n.b.prototype.Y;
    n.b.prototype.getChild = n.b.prototype.fa;
    n.b.prototype.getChildById = n.b.prototype.ed;
    n.b.prototype.children = n.b.prototype.children;
    n.b.prototype.initChildren = n.b.prototype.nc;
    n.b.prototype.removeChild = n.b.prototype.removeChild;
    n.b.prototype.on = n.b.prototype.d;
    n.b.prototype.off = n.b.prototype.o;
    n.b.prototype.one = n.b.prototype.T;
    n.b.prototype.trigger = n.b.prototype.j;
    n.b.prototype.triggerReady = n.b.prototype.Wa;
    n.b.prototype.show = n.b.prototype.show;
    n.b.prototype.hide = n.b.prototype.D;
    n.b.prototype.width = n.b.prototype.width;
    n.b.prototype.height = n.b.prototype.height;
    n.b.prototype.dimensions = n.b.prototype.Yc;
    n.b.prototype.ready = n.b.prototype.H;
    n.b.prototype.addClass = n.b.prototype.n;
    n.b.prototype.removeClass = n.b.prototype.t;
    n.b.prototype.buildCSSClass = n.b.prototype.P;
    n.Player.prototype.ended = n.Player.prototype.ended;
    u("videojs.MediaLoader", n.Nc);
    u("videojs.TextTrackDisplay", n.ac);
    u("videojs.ControlBar", n.Ca);
    u("videojs.Button", n.q);
    u("videojs.PlayToggle", n.Xb);
    u("videojs.FullscreenToggle", n.Da);
    u("videojs.BigPlayButton", n.Ya);
    u("videojs.LoadingSpinner", n.Vb);
    u("videojs.CurrentTimeDisplay", n.$a);
    u("videojs.DurationDisplay", n.ab);
    u("videojs.TimeDivider", n.bc);
    u("videojs.RemainingTimeDisplay", n.gb);
    u("videojs.Slider", n.N);
    u("videojs.ProgressControl", n.fb);
    u("videojs.SeekBar", n.Yb);
    u("videojs.LoadProgressBar", n.cb);
    u("videojs.PlayProgressBar", n.Wb);
    u("videojs.SeekHandle", n.Fa);
    u("videojs.VolumeControl", n.ib);
    u("videojs.VolumeBar", n.hb);
    u("videojs.VolumeLevel", n.cc);
    u("videojs.VolumeMenuButton", n.ma);
    u("videojs.VolumeHandle", n.jb);
    u("videojs.MuteToggle", n.ea);
    u("videojs.PosterImage", n.Ea);
    u("videojs.Menu", n.la);
    u("videojs.MenuItem", n.M);
    u("videojs.MenuButton", n.R);
    n.R.prototype.createItems = n.R.prototype.qa;
    n.S.prototype.createItems = n.S.prototype.qa;
    n.Ba.prototype.createItems = n.Ba.prototype.qa;
    u("videojs.SubtitlesButton", n.Ga);
    u("videojs.CaptionsButton", n.Aa);
    u("videojs.ChaptersButton", n.Ba);
    u("videojs.MediaTechController", n.r);
    n.r.prototype.features = n.r.prototype.m;
    n.r.prototype.m.volumeControl = n.r.prototype.m.Cc;
    n.r.prototype.m.fullscreenResize = n.r.prototype.m.Md;
    n.r.prototype.m.progressEvents = n.r.prototype.m.Qd;
    n.r.prototype.m.timeupdateEvents = n.r.prototype.m.Vd;
    n.r.prototype.setPoster = n.r.prototype.Mb;
    u("videojs.Html5", n.l);
    n.l.Events = n.l.bb;
    n.l.isSupported = n.l.isSupported;
    n.l.canPlaySource = n.l.nb;
    n.l.prototype.setCurrentTime = n.l.prototype.ud;
    n.l.prototype.setVolume = n.l.prototype.zd;
    n.l.prototype.setMuted = n.l.prototype.xd;
    n.l.prototype.setPreload = n.l.prototype.yd;
    n.l.prototype.setAutoplay = n.l.prototype.td;
    n.l.prototype.setLoop = n.l.prototype.wd;
    n.l.prototype.enterFullScreen = n.l.prototype.hc;
    n.l.prototype.exitFullScreen = n.l.prototype.bd;
    u("videojs.Flash", n.f);
    n.f.isSupported = n.f.isSupported;
    n.f.canPlaySource = n.f.nb;
    n.f.onReady = n.f.onReady;
    u("videojs.TextTrack", n.w);
    n.w.prototype.label = n.w.prototype.label;
    n.w.prototype.kind = n.w.prototype.G;
    n.w.prototype.mode = n.w.prototype.mode;
    n.w.prototype.cues = n.w.prototype.Vc;
    n.w.prototype.activeCues = n.w.prototype.Pc;
    u("videojs.CaptionsTrack", n.Sb);
    u("videojs.SubtitlesTrack", n.Zb);
    u("videojs.ChaptersTrack", n.Tb);
    u("videojs.autoSetup", n.dc);
    u("videojs.plugin", n.rd);
    u("videojs.createTimeRange", n.sb);
    u("videojs.util", n.ja);
    n.ja.mergeOptions = n.ja.Fb
}
();
!function() {
    function no(n) {
        return null  != n && !isNaN(n)
    }
    function tk(n) {
        return n.length
    }
    function ik(n) {
        for (var t = 1; n * t % 1; )
            t *= 10;
        return t
    }
    function ul(n, t) {
        try {
            for (var i in t)
                Object.defineProperty(n.prototype, i, {
                    value: t[i],
                    enumerable: !1
                })
        } catch (r) {
            n.prototype = t
        }
    }
    function rt() {}
    function fl(n) {
        return dt + n in this
    }
    function rk(n) {
        return n = dt + n,
        n in this && delete this[n]
    }
    function el() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }
        ),
        n
    }
    function ol() {
        var n = 0;
        for (var t in this)
            t.charCodeAt(0) === iu && ++n;
        return n
    }
    function sl() {
        for (var n in this)
            if (n.charCodeAt(0) === iu)
                return !1;
        return !0
    }
    function to() {}
    function uk(n, t, i) {
        return function() {
            var r = i.apply(t, arguments);
            return r === t ? n : r
        }
    }
    function io(n, t) {
        var i, u, r;
        if (t in n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substring(1),
        i = 0,
        u = ph.length; u > i; ++i)
            if (r = ph[i] + t,
            r in n)
                return r
    }
    function c() {}
    function ro() {}
    function hl(n) {
        function r() {
            for (var i, r = t, u = -1, f = r.length; ++u < f; )
                (i = r[u].on) && i.apply(this, arguments);
            return n
        }
        var t = []
          , i = new rt;
        return r.on = function(r, u) {
            var e, f = i.get(r);
            return arguments.length < 2 ? f && f.on : (f && (f.on = null ,
            t = t.slice(0, e = t.indexOf(f)).concat(t.slice(e + 1)),
            i.remove(r)),
            u && t.push(i.set(r, {
                on: u
            })),
            n)
        }
        ,
        r
    }
    function vt() {
        n.event.preventDefault()
    }
    function cl() {
        for (var i, t = n.event; i = t.sourceEvent; )
            t = i;
        return t
    }
    function uo(t) {
        for (var i = new ro, r = 0, u = arguments.length; ++r < u; )
            i[arguments[r]] = hl(i);
        return i.of = function(r, u) {
            return function(f) {
                try {
                    var e = f.sourceEvent = n.event;
                    f.target = t;
                    n.event = f;
                    i[f.type].apply(r, u)
                } finally {
                    n.event = e
                }
            }
        }
        ,
        i
    }
    function yt(n) {
        return kf(n, e),
        n
    }
    function fo(n) {
        return "function" == typeof n ? n : function() {
            return wh(n, this)
        }
    }
    function ll(n) {
        return "function" == typeof n ? n : function() {
            return bh(n, this)
        }
    }
    function al(t, i) {
        function r() {
            this.removeAttribute(t)
        }
        function u() {
            this.removeAttributeNS(t.space, t.local)
        }
        function f() {
            this.setAttribute(t, i)
        }
        function e() {
            this.setAttributeNS(t.space, t.local, i)
        }
        function o() {
            var n = i.apply(this, arguments);
            null  == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }
        function s() {
            var n = i.apply(this, arguments);
            null  == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
        return t = n.ns.qualify(t),
        null  == i ? t.local ? u : r : "function" == typeof i ? t.local ? s : o : t.local ? e : f
    }
    function vl(n) {
        return n.trim().replace(/\s+/g, " ")
    }
    function yl(t) {
        return new RegExp("(?:^|\\s+)" + n.requote(t) + "(?:\\s+|$)","g")
    }
    function pl(n) {
        return n.trim().split(/^|\s+/)
    }
    function wl(n, t) {
        function r() {
            for (var r = -1; ++r < i; )
                n[r](this, t)
        }
        function u() {
            for (var r = -1, u = t.apply(this, arguments); ++r < i; )
                n[r](this, u)
        }
        n = pl(n).map(fk);
        var i = n.length;
        return "function" == typeof t ? u : r
    }
    function fk(n) {
        var t = yl(n);
        return function(i, r) {
            if (u = i.classList)
                return r ? u.add(n) : u.remove(n);
            var u = i.getAttribute("class") || "";
            r ? (t.lastIndex = 0,
            t.test(u) || i.setAttribute("class", vl(u + " " + n))) : i.setAttribute("class", vl(u.replace(t, " ")))
        }
    }
    function bl(n, t, i) {
        function r() {
            this.style.removeProperty(n)
        }
        function u() {
            this.style.setProperty(n, t, i)
        }
        function f() {
            var r = t.apply(this, arguments);
            null  == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, i)
        }
        return null  == t ? r : "function" == typeof t ? f : u
    }
    function kl(n, t) {
        function i() {
            delete this[n]
        }
        function r() {
            this[n] = t
        }
        function u() {
            var i = t.apply(this, arguments);
            null  == i ? delete this[n] : this[n] = i
        }
        return null  == t ? i : "function" == typeof t ? u : r
    }
    function dl(t) {
        return "function" == typeof t ? t : (t = n.ns.qualify(t)).local ? function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
         : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, t)
        }
    }
    function eo(n) {
        return {
            __data__: n
        }
    }
    function gl(n) {
        return function() {
            return pw(this, n)
        }
    }
    function ek(t) {
        return arguments.length || (t = n.ascending),
        function(n, i) {
            return n && i ? t(n.__data__, i.__data__) : !n - !i
        }
    }
    function pt(n, t) {
        for (var i = 0, u = n.length; u > i; i++)
            for (var f, e = n[i], r = 0, o = e.length; o > r; r++)
                (f = e[r]) && t(f, r, i);
        return n
    }
    function na(n) {
        return kf(n, ut),
        n
    }
    function ok(n) {
        var t, i;
        return function(r, u, f) {
            var e, o = n[f].update, s = o.length;
            for (f != i && (i = f,
            t = 0),
            u >= t && (t = u + 1); !(e = o[t]) && ++t < s; )
                ;
            return e
        }
    }
    function lu() {
        var n = this.__transition__;
        n && ++n.active
    }
    function ta(t, i, r) {
        function o() {
            var n = this[u];
            n && (this.removeEventListener(t, n, n.$),
            delete this[u])
        }
        function h() {
            var n = s(i, bt(arguments));
            o.call(this);
            this.addEventListener(t, this[u] = n, n.$ = r);
            n._ = i
        }
        function l() {
            var u, f = new RegExp("^__on([^.]+)" + n.requote(t) + "$"), i, r;
            for (i in this)
                (u = i.match(f)) && (r = this[i],
                this.removeEventListener(u[1], r, r.$),
                delete this[i])
        }
        var u = "__on" + t, f = t.indexOf("."), s = ia, e;
        return f > 0 && (t = t.substring(0, f)),
        e = gf.get(t),
        e && (t = e,
        s = sk),
        f ? i ? h : o : i ? c : l
    }
    function ia(t, i) {
        return function(r) {
            var u = n.event;
            n.event = r;
            i[0] = this.__data__;
            try {
                t.apply(this, i)
            } finally {
                n.event = u
            }
        }
    }
    function sk(n, t) {
        var i = ia(n, t);
        return function(n) {
            var t = this
              , r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || i.call(t, n)
        }
    }
    function au() {
        var t = ".dragsuppress-" + ++ww, u = "click" + t, r = n.select(v).on("touchmove" + t, vt).on("dragstart" + t, vt).on("selectstart" + t, vt), i, f;
        return or && (i = kt.style,
        f = i[or],
        i[or] = "none"),
        function(n) {
            function e() {
                r.on(u, null )
            }
            r.on(t, null );
            or && (i[or] = f);
            n && (r.on(u, function() {
                vt();
                e()
            }
            , !0),
            setTimeout(e, 0))
        }
    }
    function ra(t, i) {
        var u, r, f, e;
        return (i.changedTouches && (i = i.changedTouches[0]),
        u = t.ownerSVGElement || t,
        u.createSVGPoint) ? (r = u.createSVGPoint(),
        0 > ne && (v.scrollX || v.scrollY) && (u = n.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
        }, "important"),
        f = u[0][0].getScreenCTM(),
        ne = !(f.f || f.e),
        u.remove()),
        ne ? (r.x = i.pageX,
        r.y = i.pageY) : (r.x = i.clientX,
        r.y = i.clientY),
        r = r.matrixTransform(t.getScreenCTM().inverse()),
        [r.x, r.y]) : (e = t.getBoundingClientRect(),
        [i.clientX - e.left - t.clientLeft, i.clientY - e.top - t.clientTop])
    }
    function ua(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }
    function oo(n, t, i) {
        return (t[0] - n[0]) * (i[1] - n[1]) - (t[1] - n[1]) * (i[0] - n[0])
    }
    function fa(n) {
        return n > 1 ? 0 : -1 > n ? f : Math.acos(n)
    }
    function wi(n) {
        return n > 1 ? w : -1 > n ? -w : Math.asin(n)
    }
    function hk(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }
    function ea(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }
    function ck(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }
    function oa(n) {
        return (n = Math.sin(n / 2)) * n
    }
    function bi() {}
    function ki(n, t, i) {
        return new so(n,t,i)
    }
    function so(n, t, i) {
        this.h = n;
        this.s = t;
        this.l = i
    }
    function ho(n, t, i) {
        function e(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360),
            60 > n ? r + (u - r) * n / 60 : 180 > n ? u : 240 > n ? r + (u - r) * (240 - n) / 60 : r
        }
        function f(n) {
            return Math.round(255 * e(n))
        }
        var r, u;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n,
        t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t,
        i = 0 > i ? 0 : i > 1 ? 1 : i,
        u = .5 >= i ? i * (1 + t) : i + t - i * t,
        r = 2 * i - u,
        ot(f(n + 120), f(n), f(n - 120))
    }
    function di(n, t, i) {
        return new vu(n,t,i)
    }
    function vu(n, t, i) {
        this.h = n;
        this.c = t;
        this.l = i
    }
    function co(n, t, i) {
        return isNaN(n) && (n = 0),
        isNaN(t) && (t = 0),
        gi(i, Math.cos(n *= r) * t, Math.sin(n) * t)
    }
    function gi(n, t, i) {
        return new yu(n,t,i)
    }
    function yu(n, t, i) {
        this.l = n;
        this.a = t;
        this.b = i
    }
    function sa(n, t, i) {
        var r = (n + 16) / 116
          , u = r + t / 500
          , f = r - i / 200;
        return u = lo(u) * dw,
        r = lo(r) * gw,
        f = lo(f) * nb,
        ot(vo(3.2404542 * u - 1.5371385 * r - .4985314 * f), vo(-.969266 * u + 1.8760108 * r + .041556 * f), vo(.0556434 * u - .2040259 * r + 1.0572252 * f))
    }
    function ha(n, t, i) {
        return n > 0 ? di(Math.atan2(i, t) * s, Math.sqrt(t * t + i * i), n) : di(NaN, NaN, n)
    }
    function lo(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }
    function ao(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }
    function vo(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }
    function ca(n) {
        return ot(n >> 16, 255 & n >> 8, 255 & n)
    }
    function pu(n) {
        return ca(n) + ""
    }
    function ot(n, t, i) {
        return new yo(n,t,i)
    }
    function yo(n, t, i) {
        this.r = n;
        this.g = t;
        this.b = i
    }
    function nr(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }
    function la(n, t, i) {
        var s, r, o, u = 0, f = 0, e = 0;
        if (s = /([a-z]+)\((.*)\)/i.exec(n))
            switch (r = s[2].split(","),
            s[1]) {
            case "hsl":
                return i(parseFloat(r[0]), parseFloat(r[1]) / 100, parseFloat(r[2]) / 100);
            case "rgb":
                return t(wo(r[0]), wo(r[1]), wo(r[2]))
            }
        return (o = uu.get(n)) ? t(o.r, o.g, o.b) : (null  != n && "#" === n.charAt(0) && (4 === n.length ? (u = n.charAt(1),
        u += u,
        f = n.charAt(2),
        f += f,
        e = n.charAt(3),
        e += e) : 7 === n.length && (u = n.substring(1, 3),
        f = n.substring(3, 5),
        e = n.substring(5, 7)),
        u = parseInt(u, 16),
        f = parseInt(f, 16),
        e = parseInt(e, 16)),
        t(u, f, e))
    }
    function aa(n, t, i) {
        var f, s, e = Math.min(n /= 255, t /= 255, i /= 255), r = Math.max(n, t, i), u = r - e, o = (r + e) / 2;
        return u ? (s = .5 > o ? u / (r + e) : u / (2 - r - e),
        f = n == r ? (t - i) / u + (i > t ? 6 : 0) : t == r ? (i - n) / u + 2 : (n - t) / u + 4,
        f *= 60) : (f = NaN,
        s = o > 0 && 1 > o ? 0 : f),
        ki(f, s, o)
    }
    function va(n, t, i) {
        n = po(n);
        t = po(t);
        i = po(i);
        var u = ao((.4124564 * n + .3575761 * t + .1804375 * i) / dw)
          , r = ao((.2126729 * n + .7151522 * t + .072175 * i) / gw)
          , f = ao((.0193339 * n + .119192 * t + .9503041 * i) / nb);
        return gi(116 * r - 16, 500 * (u - r), 200 * (r - f))
    }
    function po(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }
    function wo(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }
    function o(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }
    function a(n) {
        return n
    }
    function bo(n) {
        return function(t, i, r) {
            return 2 === arguments.length && "function" == typeof i && (r = i,
            i = null ),
            wu(t, i, n, r)
        }
    }
    function wu(t, i, r, u) {
        function c() {
            var t, n = e.status;
            if (!n && e.responseText || n >= 200 && 300 > n || 304 === n) {
                try {
                    t = r.call(f, e)
                } catch (i) {
                    return s.error.call(f, i),
                    void 0
                }
                s.load.call(f, t)
            } else
                s.error.call(f, e)
        }
        var f = {}
          , s = n.dispatch("beforesend", "progress", "load", "error")
          , o = {}
          , e = new XMLHttpRequest
          , h = null ;
        return !v.XDomainRequest || "withCredentials" in e || !/^(http(s)?:)?\/\//.test(t) || (e = new XDomainRequest),
        "onload" in e ? e.onload = e.onerror = c : e.onreadystatechange = function() {
            e.readyState > 3 && c()
        }
        ,
        e.onprogress = function(t) {
            var i = n.event;
            n.event = t;
            try {
                s.progress.call(f, e)
            } finally {
                n.event = i
            }
        }
        ,
        f.header = function(n, t) {
            return n = (n + "").toLowerCase(),
            arguments.length < 2 ? o[n] : (null  == t ? delete o[n] : o[n] = t + "",
            f)
        }
        ,
        f.mimeType = function(n) {
            return arguments.length ? (i = null  == n ? null  : n + "",
            f) : i
        }
        ,
        f.responseType = function(n) {
            return arguments.length ? (h = n,
            f) : h
        }
        ,
        f.response = function(n) {
            return r = n,
            f
        }
        ,
        ["get", "post"].forEach(function(n) {
            f[n] = function() {
                return f.send.apply(f, [n].concat(bt(arguments)))
            }
        }
        ),
        f.send = function(n, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r,
            r = null ),
            e.open(n, t, !0),
            null  == i || "accept" in o || (o.accept = i + ",*/*"),
            e.setRequestHeader)
                for (var c in o)
                    e.setRequestHeader(c, o[c]);
            return null  != i && e.overrideMimeType && e.overrideMimeType(i),
            null  != h && (e.responseType = h),
            null  != u && f.on("error", u).on("load", function(n) {
                u(null , n)
            }
            ),
            s.beforesend.call(f, e),
            e.send(null  == r ? null  : r),
            f
        }
        ,
        f.abort = function() {
            return e.abort(),
            f
        }
        ,
        n.rebind(f, s, "on"),
        null  == u ? f : f.get(lk(u))
    }
    function lk(n) {
        return 1 === n.length ? function(t, i) {
            n(null  == t ? i : null )
        }
         : n
    }
    function ko() {
        var t = ya()
          , n = pa() - t;
        n > 24 ? (isFinite(n) && (clearTimeout(he),
        he = setTimeout(ko, n)),
        se = 0) : (se = 1,
        ic(ko))
    }
    function ya() {
        var n = Date.now();
        for (lt = ee; lt; )
            n >= lt.t && (lt.f = lt.c(n - lt.t)),
            lt = lt.n;
        return n
    }
    function pa() {
        for (var t, n = ee, i = 1 / 0; n; )
            n.f ? n = t ? t.n = n.n : ee = n.n : (n.t < i && (i = n.t),
            n = (t = n).n);
        return oe = t,
        i
    }
    function go(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }
    function ak(n, t) {
        var i = Math.pow(10, 3 * u(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / i
            }
             : function(n) {
                return n * i
            }
            ,
            symbol: n
        }
    }
    function vk(t) {
        var f = t.decimal
          , e = t.thousands
          , i = t.grouping
          , r = t.currency
          , u = i ? function(n) {
            for (var r = n.length, u = [], f = 0, t = i[0]; r > 0 && t > 0; )
                u.push(n.substring(r -= t, r + t)),
                t = i[f = (f + 1) % i.length];
            return u.reverse().join(e)
        }
         : a;
        return function(t) {
            var o = ib.exec(t), w = o[1] || " ", s = o[2] || ">", d = o[3] || "", b = o[4] || "", l = o[5], a = +o[6], v = o[7], e = o[8], i = o[9], h = 1, y = "", c = "", k = !1, p;
            switch (e && (e = +e.substring(1)),
            (l || "0" === w && "=" === s) && (l = w = "0",
            s = "=",
            v && (a -= Math.floor((a - 1) / 4))),
            i) {
            case "n":
                v = !0;
                i = "g";
                break;
            case "%":
                h = 100;
                c = "%";
                i = "f";
                break;
            case "p":
                h = 100;
                c = "%";
                i = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X":
                "#" === b && (y = "0" + i.toLowerCase());
            case "c":
            case "d":
                k = !0;
                e = 0;
                break;
            case "s":
                h = -1;
                i = "r"
            }
            return "$" === b && (y = r[0],
            c = r[1]),
            "r" != i || e || (i = "g"),
            null  != e && ("g" == i ? e = Math.max(1, Math.min(21, e)) : ("e" == i || "f" == i) && (e = Math.max(0, Math.min(20, e)))),
            i = art.get(i) || yk,
            p = l && v,
            function(t) {
                var it = c, r, tt, g, o;
                if (k && t % 1)
                    return "";
                r = 0 > t || 0 === t && 0 > 1 / t ? (t = -t,
                "-") : d;
                0 > h ? (tt = n.formatPrefix(t, e),
                t = tt.scale(t),
                it = tt.symbol + c) : t *= h;
                t = i(t, e);
                var nt = t.lastIndexOf(".")
                  , b = 0 > nt ? t : t.substring(0, nt)
                  , rt = 0 > nt ? "" : f + t.substring(nt + 1);
                return !l && v && (b = u(b)),
                g = y.length + b.length + rt.length + (p ? 0 : r.length),
                o = a > g ? new Array(g = a - g + 1).join(w) : "",
                p && (b = u(o + b)),
                r += y,
                t = b + rt,
                ("<" === s ? r + t + o : ">" === s ? o + r + t : "^" === s ? o.substring(0, g >>= 1) + r + t + o.substring(g) : r + (p ? t : o + t)) + it
            }
        }
    }
    function yk(n) {
        return n + ""
    }
    function st() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function ei(n, t, i) {
        function e(t) {
            var i = n(t)
              , r = f(i, 1);
            return r - t > t - i ? i : r
        }
        function u(i) {
            return t(i = n(new y(i - 1)), 1),
            i
        }
        function f(n, i) {
            return t(n = new y(+n), i),
            n
        }
        function o(n, r, f) {
            var e = u(n)
              , o = [];
            if (f > 1)
                for (; r > e; )
                    i(e) % f || o.push(new Date(+e)),
                    t(e, 1);
            else
                for (; r > e; )
                    o.push(new Date(+e)),
                    t(e, 1);
            return o
        }
        function s(n, t, i) {
            try {
                y = st;
                var r = new st;
                return r._ = n,
                o(r, t, i)
            } finally {
                y = Date
            }
        }
        n.floor = n;
        n.round = e;
        n.ceil = u;
        n.offset = f;
        n.range = o;
        var r = n.utc = bu(n);
        return r.floor = r,
        r.round = bu(e),
        r.ceil = bu(u),
        r.offset = bu(f),
        r.range = s,
        n
    }
    function bu(n) {
        return function(t, i) {
            try {
                y = st;
                var r = new st;
                return r._ = t,
                n(r, i)._
            } finally {
                y = Date
            }
        }
    }
    function pk(t) {
        function r(n) {
            function t(t) {
                for (var f, o, h, e = [], r = -1, s = 0; ++r < i; )
                    37 === n.charCodeAt(r) && (e.push(n.substring(s, r)),
                    null  != (o = rb[f = n.charAt(++r)]) && (f = n.charAt(++r)),
                    (h = u[f]) && (f = h(t, null  == o ? "e" === f ? " " : "0" : o)),
                    e.push(f),
                    s = r + 1);
                return e.push(n.substring(s, r)),
                e.join("")
            }
            var i = n.length;
            return t.parse = function(t) {
                var i = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, e = f(i, n, t, 0), u, r;
                return e != t.length ? null  : ("p" in i && (i.H = i.H % 12 + 12 * i.p),
                u = null  != i.Z && y !== st,
                r = new (u ? st : y),
                "j" in i ? r.setFullYear(i.y, 0, i.j) : "w" in i && ("W" in i || "U" in i) ? (r.setFullYear(i.y, 0, 1),
                r.setFullYear(i.y, 0, "W" in i ? (i.w + 6) % 7 + 7 * i.W - (r.getDay() + 5) % 7 : i.w + 7 * i.U - (r.getDay() + 6) % 7)) : r.setFullYear(i.y, i.m, i.d),
                r.setHours(i.H + Math.floor(i.Z / 100), i.M + i.Z % 100, i.S, i.L),
                u ? r._ : r)
            }
            ,
            t.toString = function() {
                return n
            }
            ,
            t
        }
        function f(n, t, i, r) {
            for (var f, e, o, u = 0, s = t.length, h = i.length; s > u; ) {
                if (r >= h)
                    return -1;
                if (f = t.charCodeAt(u++),
                37 === f) {
                    if (o = t.charAt(u++),
                    e = k[o in rb ? t.charAt(u++) : o],
                    !e || (r = e(n, i, r)) < 0)
                        return -1
                } else if (f != i.charCodeAt(r++))
                    return -1
            }
            return r
        }
        function d(n, t, i) {
            v.lastIndex = 0;
            var r = v.exec(t.substring(i));
            return r ? (n.w = lt.get(r[0].toLowerCase()),
            i + r[0].length) : -1
        }
        function g(n, t, i) {
            a.lastIndex = 0;
            var r = a.exec(t.substring(i));
            return r ? (n.w = ct.get(r[0].toLowerCase()),
            i + r[0].length) : -1
        }
        function nt(n, t, i) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(i));
            return r ? (n.m = vt.get(r[0].toLowerCase()),
            i + r[0].length) : -1
        }
        function tt(n, t, i) {
            w.lastIndex = 0;
            var r = w.exec(t.substring(i));
            return r ? (n.m = at.get(r[0].toLowerCase()),
            i + r[0].length) : -1
        }
        function it(n, t, i) {
            return f(n, u.c.toString(), t, i)
        }
        function rt(n, t, i) {
            return f(n, u.x.toString(), t, i)
        }
        function ut(n, t, i) {
            return f(n, u.X.toString(), t, i)
        }
        function ft(n, t, i) {
            var r = l.get(t.substring(i, i += 2).toLowerCase());
            return null  == r ? -1 : (n.p = r,
            i)
        }
        var et = t.dateTime, ot = t.date, ht = t.time, c = t.periods, e = t.days, o = t.shortDays, s = t.months, h = t.shortMonths, u, k;
        r.utc = function(n) {
            function t(n) {
                try {
                    y = st;
                    var t = new y;
                    return t._ = n,
                    i(t)
                } finally {
                    y = Date
                }
            }
            var i = r(n);
            return t.parse = function(n) {
                try {
                    y = st;
                    var t = i.parse(n);
                    return t && t._
                } finally {
                    y = Date
                }
            }
            ,
            t.toString = i.toString,
            t
        }
        ;
        r.multi = r.utc.multi = hd;
        var l = n.map()
          , a = ku(e)
          , ct = du(e)
          , v = ku(o)
          , lt = du(o)
          , w = ku(s)
          , at = du(s)
          , b = ku(h)
          , vt = du(h);
        return c.forEach(function(n, t) {
            l.set(n.toLowerCase(), t)
        }
        ),
        u = {
            a: function(n) {
                return o[n.getDay()]
            },
            A: function(n) {
                return e[n.getDay()]
            },
            b: function(n) {
                return h[n.getMonth()]
            },
            B: function(n) {
                return s[n.getMonth()]
            },
            c: r(et),
            d: function(n, t) {
                return p(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return p(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return p(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return p(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return p(1 + i.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return p(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return p(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return p(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return c[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return p(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return p(i.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return p(i.mondayOfYear(n), t, 2)
            },
            x: r(ot),
            X: r(ht),
            y: function(n, t) {
                return p(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return p(n.getFullYear() % 1e4, t, 4)
            },
            Z: od,
            "%": function() {
                return "%"
            }
        },
        k = {
            a: d,
            A: g,
            b: nt,
            B: tt,
            c: it,
            d: wa,
            e: wa,
            H: ba,
            I: ba,
            j: rd,
            L: ed,
            m: id,
            M: ud,
            p: ft,
            S: fd,
            U: bk,
            w: wk,
            W: kk,
            x: rt,
            X: ut,
            y: gk,
            Y: dk,
            Z: nd,
            "%": sd
        },
        r
    }
    function p(n, t, i) {
        var u = 0 > n ? "-" : ""
          , r = (u ? -n : n) + ""
          , f = r.length;
        return u + (i > f ? new Array(i - f + 1).join(t) + r : r)
    }
    function ku(t) {
        return new RegExp("^(?:" + t.map(n.requote).join("|") + ")","i")
    }
    function du(n) {
        for (var i = new rt, t = -1, r = n.length; ++t < r; )
            i.set(n[t].toLowerCase(), t);
        return i
    }
    function wk(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 1));
        return r ? (n.w = +r[0],
        i + r[0].length) : -1
    }
    function bk(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i));
        return r ? (n.U = +r[0],
        i + r[0].length) : -1
    }
    function kk(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i));
        return r ? (n.W = +r[0],
        i + r[0].length) : -1
    }
    function dk(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 4));
        return r ? (n.y = +r[0],
        i + r[0].length) : -1
    }
    function gk(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.y = td(+r[0]),
        i + r[0].length) : -1
    }
    function nd(n, t, i) {
        return /^[+-]\d{4}$/.test(t = t.substring(i, i + 5)) ? (n.Z = +t,
        i + 5) : -1
    }
    function td(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }
    function id(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.m = r[0] - 1,
        i + r[0].length) : -1
    }
    function wa(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.d = +r[0],
        i + r[0].length) : -1
    }
    function rd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 3));
        return r ? (n.j = +r[0],
        i + r[0].length) : -1
    }
    function ba(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.H = +r[0],
        i + r[0].length) : -1
    }
    function ud(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.M = +r[0],
        i + r[0].length) : -1
    }
    function fd(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 2));
        return r ? (n.S = +r[0],
        i + r[0].length) : -1
    }
    function ed(n, t, i) {
        h.lastIndex = 0;
        var r = h.exec(t.substring(i, i + 3));
        return r ? (n.L = +r[0],
        i + r[0].length) : -1
    }
    function od(n) {
        var t = n.getTimezoneOffset()
          , i = t > 0 ? "-" : "+"
          , r = ~~(u(t) / 60)
          , f = u(t) % 60;
        return i + p(r, "0", 2) + p(f, "0", 2)
    }
    function sd(n, t, i) {
        ub.lastIndex = 0;
        var r = ub.exec(t.substring(i, i + 1));
        return r ? i + r[0].length : -1
    }
    function hd(n) {
        for (var i = n.length, t = -1; ++t < i; )
            n[t][0] = this(n[t][0]);
        return function(t) {
            for (var r = 0, i = n[r]; !i[1](t); )
                i = n[++r];
            return i[0](t)
        }
    }
    function ns() {}
    function ka(n, t, i) {
        var r = i.s = n + t
          , u = r - n
          , f = r - u;
        i.t = n - f + (t - u)
    }
    function gu(n, t) {
        n && fc.hasOwnProperty(n.type) && fc[n.type](n, t)
    }
    function ts(n, t, i) {
        var r, u = -1, f = n.length - i;
        for (t.lineStart(); ++u < f; )
            r = n[u],
            t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }
    function da(n, t) {
        var i = -1
          , r = n.length;
        for (t.polygonStart(); ++i < r; )
            ts(n[i], t, 1);
        t.polygonEnd()
    }
    function cd() {
        function u(u, e) {
            u *= r;
            e = e * r / 2 + f / 4;
            var o = u - n
              , s = o >= 0 ? 1 : -1
              , h = s * o
              , c = Math.cos(e)
              , l = Math.sin(e)
              , a = i * l
              , v = t * c + a * Math.cos(h)
              , y = a * s * Math.sin(h);
            gt.add(Math.atan2(y, v));
            n = u;
            t = c;
            i = l
        }
        var e, o, n, t, i;
        b.point = function(s, h) {
            b.point = u;
            n = (e = s) * r;
            t = Math.cos(h = (o = h) * r / 2 + f / 4);
            i = Math.sin(h)
        }
        ;
        b.lineEnd = function() {
            u(e, o)
        }
    }
    function oi(n) {
        var t = n[0]
          , i = n[1]
          , r = Math.cos(i);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(i)]
    }
    function nf(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }
    function tr(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }
    function is(n, t) {
        n[0] += t[0];
        n[1] += t[1];
        n[2] += t[2]
    }
    function tf(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }
    function rf(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t;
        n[1] /= t;
        n[2] /= t
    }
    function uf(n) {
        return [Math.atan2(n[1], n[0]), wi(n[2])]
    }
    function ff(n, i) {
        return u(n[0] - i[0]) < t && u(n[1] - i[1]) < t
    }
    function rs(n, t) {
        n *= r;
        var i = Math.cos(t *= r);
        ar(i * Math.cos(n), i * Math.sin(n), Math.sin(t))
    }
    function ar(n, t, i) {
        ++eu;
        li += (n - li) / eu;
        ai += (t - ai) / eu;
        at += (i - at) / eu
    }
    function ga() {
        function u(u, f) {
            u *= r;
            var c = Math.cos(f *= r)
              , o = c * Math.cos(u)
              , s = c * Math.sin(u)
              , h = Math.sin(f)
              , e = Math.atan2(Math.sqrt((e = t * h - i * s) * e + (e = i * o - n * h) * e + (e = n * s - t * o) * e), n * o + t * s + i * h);
            le += e;
            ni += e * (n + (n = o));
            ti += e * (t + (t = s));
            et += e * (i + (i = h));
            ar(n, t, i)
        }
        var n, t, i;
        tt.point = function(f, e) {
            f *= r;
            var o = Math.cos(e *= r);
            n = o * Math.cos(f);
            t = o * Math.sin(f);
            i = Math.sin(e);
            tt.point = u;
            ar(n, t, i)
        }
    }
    function nv() {
        tt.point = rs
    }
    function ld() {
        function u(u, f) {
            u *= r;
            var p = Math.cos(f *= r)
              , e = p * Math.cos(u)
              , o = p * Math.sin(u)
              , s = Math.sin(f)
              , c = t * s - i * o
              , l = i * e - n * s
              , a = n * o - t * e
              , v = Math.sqrt(c * c + l * l + a * a)
              , w = n * e + t * o + i * s
              , y = v && -fa(w) / v
              , h = Math.atan2(v, w);
            sr += y * c;
            hr += y * l;
            ii += y * a;
            le += h;
            ni += h * (n + (n = e));
            ti += h * (t + (t = o));
            et += h * (i + (i = s));
            ar(n, t, i)
        }
        var f, e, n, t, i;
        tt.point = function(o, s) {
            f = o;
            e = s;
            tt.point = u;
            o *= r;
            var h = Math.cos(s *= r);
            n = h * Math.cos(o);
            t = h * Math.sin(o);
            i = Math.sin(s);
            ar(n, t, i)
        }
        ;
        tt.lineEnd = function() {
            u(f, e);
            tt.lineEnd = nv;
            tt.point = rs
        }
    }
    function ir() {
        return !0
    }
    function tv(n, t, i, r, u) {
        var h = [], s = [], o, l, v, f, c, a, e;
        if (n.forEach(function(n) {
            var o, i, f, e, t, r;
            if (!((o = n.length - 1) <= 0)) {
                if (i = n[0],
                f = n[o],
                ff(i, f)) {
                    for (u.lineStart(),
                    e = 0; o > e; ++e)
                        u.point((i = n[e])[0], i[1]);
                    return u.lineEnd(),
                    void 0
                }
                t = new ef(i,n,null ,!0);
                r = new ef(i,null ,t,!1);
                t.o = r;
                h.push(t);
                s.push(r);
                t = new ef(f,n,null ,!1);
                r = new ef(f,null ,t,!0);
                t.o = r;
                h.push(t);
                s.push(r)
            }
        }
        ),
        s.sort(t),
        iv(h),
        iv(s),
        h.length) {
            for (var e = 0, y = i, a = s.length; a > e; ++e)
                s[e].e = y = !y;
            for (v = h[0]; ; ) {
                for (f = v,
                c = !0; f.v; )
                    if ((f = f.n) === v)
                        return;
                o = f.z;
                u.lineStart();
                do {
                    if (f.v = f.o.v = !0,
                    f.e) {
                        if (c)
                            for (e = 0,
                            a = o.length; a > e; ++e)
                                u.point((l = o[e])[0], l[1]);
                        else
                            r(f.x, f.n.x, 1, u);
                        f = f.n
                    } else {
                        if (c)
                            for (o = f.p.z,
                            e = o.length - 1; e >= 0; --e)
                                u.point((l = o[e])[0], l[1]);
                        else
                            r(f.x, f.p.x, -1, u);
                        f = f.p
                    }
                    f = f.o;
                    o = f.z;
                    c = !c
                } while (!f.v);u.lineEnd()
            }
        }
    }
    function iv(n) {
        if (r = n.length) {
            for (var r, t, u = 0, i = n[0]; ++u < r; )
                i.n = t = n[u],
                t.p = i,
                i = t;
            i.n = t = n[0];
            t.p = i
        }
    }
    function ef(n, t, i, r) {
        this.x = n;
        this.z = t;
        this.o = i;
        this.e = r;
        this.v = !1;
        this.n = this.p = null
    }
    function rv(t, i, r, u) {
        return function(f, e) {
            function a(n, i) {
                var r = f(n, i);
                t(n = r[0], i = r[1]) && e.point(n, i)
            }
            function k(n, t) {
                var i = f(n, t);
                v.point(i[0], i[1])
            }
            function y() {
                o.point = k;
                v.lineStart()
            }
            function p() {
                o.point = a;
                v.lineEnd()
            }
            function w(n, t) {
                h.push([n, t]);
                var i = f(n, t);
                l.point(i[0], i[1])
            }
            function d() {
                l.lineStart();
                h = []
            }
            function g() {
                var f, t, r;
                w(h[0][0], h[0][1]);
                l.lineEnd();
                var i, u = l.clean(), n = b.buffer(), t = n.length;
                if (h.pop(),
                c.push(h),
                h = null ,
                t) {
                    if (1 & u) {
                        for (i = n[0],
                        t = i.length - 1,
                        r = -1,
                        e.lineStart(); ++r < t; )
                            e.point((f = i[r])[0], f[1]);
                        return e.lineEnd(),
                        void 0
                    }
                    t > 1 && 2 & u && n.push(n.pop().concat(n.shift()));
                    s.push(n.filter(ad))
                }
            }
            var s, c, h, v = i(e), nt = f.invert(u[0], u[1]), o = {
                point: a,
                lineStart: y,
                lineEnd: p,
                polygonStart: function() {
                    o.point = w;
                    o.lineStart = d;
                    o.lineEnd = g;
                    s = [];
                    c = [];
                    e.polygonStart()
                },
                polygonEnd: function() {
                    o.point = a;
                    o.lineStart = y;
                    o.lineEnd = p;
                    s = n.merge(s);
                    var t = yd(nt, c);
                    s.length ? tv(s, vd, t, r, e) : t && (e.lineStart(),
                    r(null , null , 1, e),
                    e.lineEnd());
                    e.polygonEnd();
                    s = c = null
                },
                sphere: function() {
                    e.polygonStart();
                    e.lineStart();
                    r(null , null , 1, e);
                    e.lineEnd();
                    e.polygonEnd()
                }
            }, b = uv(), l = i(b);
            return o
        }
    }
    function ad(n) {
        return n.length > 1
    }
    function uv() {
        var t, n = [];
        return {
            lineStart: function() {
                n.push(t = [])
            },
            point: function(n, i) {
                t.push([n, i])
            },
            lineEnd: c,
            buffer: function() {
                var i = n;
                return n = [],
                t = null ,
                i
            },
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            }
        }
    }
    function vd(n, i) {
        return ((n = n.x)[0] < 0 ? n[1] - w - t : w - n[1]) - ((i = i.x)[0] < 0 ? i[1] - w - t : w - i[1])
    }
    function yd(n, i) {
        var e = n[0], nt = n[1], ct = [Math.sin(e), -Math.cos(e), 0], a = 0, tt = 0, o, it, s, v, u, k, g;
        for (gt.reset(),
        o = 0,
        it = i.length; it > o; ++o)
            if (s = i[o],
            v = s.length,
            v)
                for (var h = s[0], y = h[0], rt = h[1] / 2 + f / 4, ut = Math.sin(rt), ft = Math.cos(rt), c = 1; ; ) {
                    c === v && (c = 0);
                    n = s[c];
                    var p = n[0]
                      , et = n[1] / 2 + f / 4
                      , ot = Math.sin(et)
                      , st = Math.cos(et)
                      , r = p - y
                      , w = r >= 0 ? 1 : -1
                      , b = w * r
                      , l = b > f
                      , ht = ut * ot;
                    if ((gt.add(Math.atan2(ht * w * Math.sin(b), ft * st + ht * Math.cos(b))),
                    a += l ? r + w * d : r,
                    l ^ y >= e ^ p >= e) && (u = tr(oi(h), oi(n)),
                    rf(u),
                    k = tr(ct, u),
                    rf(k),
                    g = (l ^ r >= 0 ? -1 : 1) * wi(k[2]),
                    (nt > g || nt === g && (u[0] || u[1])) && (tt += l ^ r >= 0 ? 1 : -1)),
                    !c++)
                        break;
                    y = p;
                    ut = ot;
                    ft = st;
                    h = n
                }
        return (-t > a || t > a && 0 > gt) ^ 1 & tt
    }
    function pd(n) {
        var o, r = NaN, i = NaN, e = NaN;
        return {
            lineStart: function() {
                n.lineStart();
                o = 1
            },
            point: function(s, h) {
                var c = s > 0 ? f : -f
                  , l = u(s - r);
                u(l - f) < t ? (n.point(r, i = (i + h) / 2 > 0 ? w : -w),
                n.point(e, i),
                n.lineEnd(),
                n.lineStart(),
                n.point(c, i),
                n.point(s, i),
                o = 0) : e !== c && l >= f && (u(r - e) < t && (r -= e * t),
                u(s - c) < t && (s -= c * t),
                i = wd(r, i, s, h),
                n.point(e, i),
                n.lineEnd(),
                n.lineStart(),
                n.point(c, i),
                o = 0);
                n.point(r = s, i = h);
                e = c
            },
            lineEnd: function() {
                n.lineEnd();
                r = i = NaN
            },
            clean: function() {
                return 2 - o
            }
        }
    }
    function wd(n, i, r, f) {
        var e, o, s = Math.sin(n - r);
        return u(s) > t ? Math.atan((Math.sin(i) * (o = Math.cos(f)) * Math.sin(r) - Math.sin(f) * (e = Math.cos(i)) * Math.sin(n)) / (e * o * s)) : (i + f) / 2
    }
    function bd(n, i, r, e) {
        var o, s;
        null  == n ? (o = r * w,
        e.point(-f, o),
        e.point(0, o),
        e.point(f, o),
        e.point(f, 0),
        e.point(f, -o),
        e.point(0, -o),
        e.point(-f, -o),
        e.point(-f, 0),
        e.point(-f, o)) : u(n[0] - i[0]) > t ? (s = n[0] < i[0] ? f : -f,
        o = r * s / 2,
        e.point(-s, o),
        e.point(0, o),
        e.point(s, o)) : e.point(i[0], i[1])
    }
    function kd(n) {
        function s(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }
        function c(n) {
            var i, a, r, c, u;
            return {
                lineStart: function() {
                    c = r = !1;
                    u = 1
                },
                point: function(v, y) {
                    var w, p = [v, y], b = s(v, y), d = e ? b ? 0 : h(v, y) : b ? h(v + (0 > v ? f : -f), y) : 0, k;
                    (!i && (c = r = b) && n.lineStart(),
                    b !== r && (w = o(i, p),
                    (ff(i, w) || ff(p, w)) && (p[0] += t,
                    p[1] += t,
                    b = s(p[0], p[1]))),
                    b !== r) ? (u = 0,
                    b ? (n.lineStart(),
                    w = o(p, i),
                    n.point(w[0], w[1])) : (w = o(i, p),
                    n.point(w[0], w[1]),
                    n.lineEnd()),
                    i = w) : l && i && e ^ b && (d & a || !(k = o(p, i, !0)) || (u = 0,
                    e ? (n.lineStart(),
                    n.point(k[0][0], k[0][1]),
                    n.point(k[1][0], k[1][1]),
                    n.lineEnd()) : (n.point(k[1][0], k[1][1]),
                    n.lineEnd(),
                    n.lineStart(),
                    n.point(k[0][0], k[0][1]))));
                    !b || i && ff(i, p) || n.point(p[0], p[1]);
                    i = p;
                    r = b;
                    a = d
                },
                lineEnd: function() {
                    r && n.lineEnd();
                    i = null
                },
                clean: function() {
                    return u | (c && r) << 1
                }
            }
        }
        function o(n, r, e) {
            var et = oi(n), ot = oi(r), rt = [1, 0, 0], a = tr(et, ot), ut = nf(a, a), b = a[0], k = ut - b * b, g, o, it;
            if (!k)
                return !e && n;
            var st = i * ut / k
              , ht = -i * b / k
              , ct = tr(rt, a)
              , s = tf(rt, st)
              , lt = tf(a, ht);
            is(s, lt);
            var v = ct
              , p = nf(s, v)
              , d = nf(v, v)
              , ft = p * p - d * (nf(s, s) - 1);
            if (!(0 > ft)) {
                if (g = Math.sqrt(ft),
                o = tf(v, (-p - g) / d),
                is(o, s),
                o = uf(o),
                !e)
                    return o;
                var w, h = n[0], y = r[0], c = n[1], l = r[1];
                h > y && (w = h,
                h = y,
                y = w);
                var nt = y - h
                  , tt = u(nt - f) < t
                  , at = tt || t > nt;
                if (!tt && c > l && (w = c,
                c = l,
                l = w),
                at ? tt ? c + l > 0 ^ o[1] < (u(o[0] - h) < t ? c : l) : c <= o[1] && o[1] <= l : nt > f ^ (h <= o[0] && o[0] <= y))
                    return it = tf(v, (-p + g) / d),
                    is(it, s),
                    [o, uf(it)]
            }
        }
        function h(t, i) {
            var u = e ? n : f - n
              , r = 0;
            return -u > t ? r |= 1 : t > u && (r |= 2),
            -u > i ? r |= 4 : i > u && (r |= 8),
            r
        }
        var i = Math.cos(n)
          , e = i > 0
          , l = u(i) > t
          , a = os(n, 6 * r);
        return rv(s, c, a, e ? [0, -n] : [-f, n - f])
    }
    function fv(n, t, i, r) {
        return function(u) {
            var f, a = u.a, v = u.b, c = a.x, l = a.y, y = v.x, p = v.y, e = 0, o = 1, s = y - c, h = p - l;
            if (f = n - c,
            s || !(f > 0)) {
                if (f /= s,
                0 > s) {
                    if (e > f)
                        return;
                    o > f && (o = f)
                } else if (s > 0) {
                    if (f > o)
                        return;
                    f > e && (e = f)
                }
                if (f = i - c,
                s || !(0 > f)) {
                    if (f /= s,
                    0 > s) {
                        if (f > o)
                            return;
                        f > e && (e = f)
                    } else if (s > 0) {
                        if (e > f)
                            return;
                        o > f && (o = f)
                    }
                    if (f = t - l,
                    h || !(f > 0)) {
                        if (f /= h,
                        0 > h) {
                            if (e > f)
                                return;
                            o > f && (o = f)
                        } else if (h > 0) {
                            if (f > o)
                                return;
                            f > e && (e = f)
                        }
                        if (f = r - l,
                        h || !(0 > f)) {
                            if (f /= h,
                            0 > h) {
                                if (f > o)
                                    return;
                                f > e && (e = f)
                            } else if (h > 0) {
                                if (e > f)
                                    return;
                                o > f && (o = f)
                            }
                            return e > 0 && (u.a = {
                                x: c + e * s,
                                y: l + e * h
                            }),
                            1 > o && (u.b = {
                                x: c + o * s,
                                y: l + o * h
                            }),
                            u
                        }
                    }
                }
            }
        }
    }
    function ev(i, r, f, e) {
        function o(n, e) {
            return u(n[0] - i) < t ? e > 0 ? 0 : 3 : u(n[0] - f) < t ? e > 0 ? 2 : 1 : u(n[1] - r) < t ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }
        function h(n, t) {
            return s(n.x, t.x)
        }
        function s(n, t) {
            var i = o(n, 1)
              , r = o(t, 1);
            return i !== r ? i - r : 0 === i ? t[1] - n[1] : 1 === i ? n[0] - t[0] : 2 === i ? n[1] - t[1] : t[0] - n[0]
        }
        return function(t) {
            function ft(n) {
                for (var r = 0, s = c.length, u = n[1], f = 0; s > f; ++f)
                    for (var t, e = 1, o = c[f], h = o.length, i = o[0]; h > e; ++e)
                        t = o[e],
                        i[1] <= u ? t[1] > u && oo(i, t, n) > 0 && ++r : t[1] <= u && oo(i, t, n) < 0 && --r,
                        i = t;
                return 0 !== r
            }
            function d(n, t, u, h) {
                var c = 0
                  , l = 0;
                if (null  == n || (c = o(n, u)) !== (l = o(t, u)) || s(n, t) < 0 ^ u > 0) {
                    do
                        h.point(0 === c || 3 === c ? i : f, c > 1 ? e : r);
                    while ((c = (c + u + 4) % 4) !== l)
                } else
                    h.point(t[0], t[1])
            }
            function g(n, t) {
                return n >= i && f >= n && t >= r && e >= t
            }
            function nt(n, i) {
                g(n, i) && t.point(n, i)
            }
            function et() {
                k.point = tt;
                c && c.push(v = []);
                w = !0;
                l = !1;
                y = p = NaN
            }
            function ot() {
                u && (tt(it, rt),
                ut && l && b.rejoin(),
                u.push(b.buffer()));
                k.point = nt;
                l && t.lineEnd()
            }
            function tt(n, i) {
                var r, u;
                n = Math.max(-ae, Math.min(ae, n));
                i = Math.max(-ae, Math.min(ae, i));
                r = g(n, i);
                (c && v.push([n, i]),
                w) ? (it = n,
                rt = i,
                ut = r,
                w = !1,
                r && (t.lineStart(),
                t.point(n, i))) : r && l ? t.point(n, i) : (u = {
                    a: {
                        x: y,
                        y: p
                    },
                    b: {
                        x: n,
                        y: i
                    }
                },
                ht(u) ? (l || (t.lineStart(),
                t.point(u.a.x, u.a.y)),
                t.point(u.b.x, u.b.y),
                r || t.lineEnd(),
                a = !1) : r && (t.lineStart(),
                t.point(n, i),
                a = !1));
                y = n;
                p = i;
                l = r
            }
            var u, c, v, it, rt, ut, y, p, l, w, a, st = t, b = uv(), ht = fv(i, r, f, e), k = {
                point: nt,
                lineStart: et,
                lineEnd: ot,
                polygonStart: function() {
                    t = b;
                    u = [];
                    c = [];
                    a = !0
                },
                polygonEnd: function() {
                    t = st;
                    u = n.merge(u);
                    var r = ft([i, e])
                      , f = a && r
                      , o = u.length;
                    (f || o) && (t.polygonStart(),
                    f && (t.lineStart(),
                    d(null , null , 1, t),
                    t.lineEnd()),
                    o && tv(u, h, r, d, t),
                    t.polygonEnd());
                    u = c = v = null
                }
            };
            return k
        }
    }
    function ov(n, t) {
        function i(i, r) {
            return i = n(i, r),
            t(i[0], i[1])
        }
        return n.invert && t.invert && (i.invert = function(i, r) {
            return i = t.invert(i, r),
            i && n.invert(i[0], i[1])
        }
        ),
        i
    }
    function us(n) {
        var t = 0
          , i = f / 3
          , r = fs(n)
          , u = r(t, i);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * f / 180, i = n[1] * f / 180) : [180 * (t / f), 180 * (i / f)]
        }
        ,
        u
    }
    function sv(n, t) {
        function f(n, t) {
            var r = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
            return [r * Math.sin(n *= i), e - r * Math.cos(n)]
        }
        var r = Math.sin(n)
          , i = (r + Math.sin(t)) / 2
          , u = 1 + r * (2 * i - r)
          , e = Math.sqrt(u) / i;
        return f.invert = function(n, t) {
            var r = e - t;
            return [Math.atan2(n, r) / i, wi((u - (n * n + r * r) * i * i) / (2 * i))]
        }
        ,
        f
    }
    function dd() {
        function i(i, r) {
            oc += t * i - n * r;
            n = i;
            t = r
        }
        var r, u, n, t;
        ri.point = function(f, e) {
            ri.point = i;
            r = n = f;
            u = t = e
        }
        ;
        ri.lineEnd = function() {
            i(r, u)
        }
    }
    function gd(n, t) {
        ve > n && (ve = n);
        n > pe && (pe = n);
        ye > t && (ye = t);
        t > we && (we = t)
    }
    function ng() {
        function i(n, i) {
            t.push("M", n, ",", i, u)
        }
        function f(i, r) {
            t.push("M", i, ",", r);
            n.point = e
        }
        function e(n, i) {
            t.push("L", n, ",", i)
        }
        function r() {
            n.point = i
        }
        function o() {
            t.push("Z")
        }
        var u = hv(4.5)
          , t = []
          , n = {
            point: i,
            lineStart: function() {
                n.point = f
            },
            lineEnd: r,
            polygonStart: function() {
                n.lineEnd = o
            },
            polygonEnd: function() {
                n.lineEnd = r;
                n.point = i
            },
            pointRadius: function(t) {
                return u = hv(t),
                n
            },
            result: function() {
                if (t.length) {
                    var n = t.join("");
                    return t = [],
                    n
                }
            }
        };
        return n
    }
    function hv(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }
    function si(n, t) {
        li += n;
        ai += t;
        ++at
    }
    function cv() {
        function i(i, r) {
            var f = i - n
              , e = r - t
              , u = Math.sqrt(f * f + e * e);
            ni += u * (n + i) / 2;
            ti += u * (t + r) / 2;
            et += u;
            si(n = i, t = r)
        }
        var n, t;
        it.point = function(r, u) {
            it.point = i;
            si(n = r, t = u)
        }
    }
    function lv() {
        it.point = si
    }
    function tg() {
        function i(i, r) {
            var f = i - n
              , e = r - t
              , u = Math.sqrt(f * f + e * e);
            ni += u * (n + i) / 2;
            ti += u * (t + r) / 2;
            et += u;
            u = t * i - n * r;
            sr += u * (n + i);
            hr += u * (t + r);
            ii += 3 * u;
            si(n = i, t = r)
        }
        var r, u, n, t;
        it.point = function(f, e) {
            it.point = i;
            si(r = n = f, u = t = e)
        }
        ;
        it.lineEnd = function() {
            i(r, u)
        }
    }
    function ig(n) {
        function i(t, i) {
            n.moveTo(t, i);
            n.arc(t, i, u, 0, d)
        }
        function f(i, r) {
            n.moveTo(i, r);
            t.point = e
        }
        function e(t, i) {
            n.lineTo(t, i)
        }
        function r() {
            t.point = i
        }
        function o() {
            n.closePath()
        }
        var u = 4.5
          , t = {
            point: i,
            lineStart: function() {
                t.point = f
            },
            lineEnd: r,
            polygonStart: function() {
                t.lineEnd = o
            },
            polygonEnd: function() {
                t.lineEnd = r;
                t.point = i
            },
            pointRadius: function(n) {
                return u = n,
                t
            },
            result: c
        };
        return t
    }
    function av(n) {
        function o(n) {
            return (e ? h : s)(n)
        }
        function s(t) {
            return yv(t, function(i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            }
            )
        }
        function h(t) {
            function y(i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            }
            function c() {
                u = NaN;
                r.point = l;
                t.lineStart()
            }
            function l(r, c) {
                var l = oi([r, c])
                  , a = n(r, c);
                i(u, f, v, o, s, h, u = a[0], f = a[1], v = r, o = l[0], s = l[1], h = l[2], e, t);
                t.point(u, f)
            }
            function a() {
                r.point = y;
                t.lineEnd()
            }
            function nt() {
                c();
                r.point = tt;
                r.lineEnd = it
            }
            function tt(n, t) {
                l(p = n, rt = t);
                w = u;
                b = f;
                k = o;
                d = s;
                g = h;
                r.point = l
            }
            function it() {
                i(u, f, v, o, s, h, w, b, p, k, d, g, e, t);
                r.lineEnd = a;
                a()
            }
            var p, rt, w, b, k, d, g, v, u, f, o, s, h, r = {
                point: y,
                lineStart: c,
                lineEnd: a,
                polygonStart: function() {
                    t.polygonStart();
                    r.lineStart = nt
                },
                polygonEnd: function() {
                    t.polygonEnd();
                    r.lineStart = c
                }
            };
            return r
        }
        function i(r, e, o, s, h, l, a, v, y, p, w, b, k, d) {
            var it = a - r
              , rt = v - e
              , et = it * it + rt * rt;
            if (et > 4 * f && k--) {
                var nt = s + p
                  , tt = h + w
                  , g = l + b
                  , ot = Math.sqrt(nt * nt + tt * tt + g * g)
                  , vt = Math.asin(g /= ot)
                  , st = u(u(g) - 1) < t || u(o - y) < t ? (o + y) / 2 : Math.atan2(tt, nt)
                  , ht = n(st, vt)
                  , ut = ht[0]
                  , ft = ht[1]
                  , ct = ut - r
                  , lt = ft - e
                  , at = rt * ct - it * lt;
                (at * at / et > f || u((it * ct + rt * lt) / et - .5) > .3 || c > s * p + h * w + l * b) && (i(r, e, o, s, h, l, ut, ft, st, nt /= ot, tt /= ot, g, k, d),
                d.point(ut, ft),
                i(ut, ft, st, nt, tt, g, a, v, y, p, w, b, k, d))
            }
        }
        var f = .5
          , c = Math.cos(30 * r)
          , e = 16;
        return o.precision = function(n) {
            return arguments.length ? (e = (f = n * n) > 0 && 16,
            o) : Math.sqrt(f)
        }
        ,
        o
    }
    function rg(n) {
        var t = av(function(t, i) {
            return n([t * s, i * s])
        }
        );
        return function(n) {
            return pv(t(n))
        }
    }
    function vv(n) {
        this.stream = n
    }
    function yv(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }
    function wt(n) {
        return fs(function() {
            return n
        }
        )()
    }
    function fs(t) {
        function i(n) {
            return n = v(n[0] * r, n[1] * r),
            [n[0] * u + h, c - n[1] * u]
        }
        function et(n) {
            return n = v.invert((n[0] - h) / u, (c - n[1]) / u),
            n && [n[0] * s, n[1] * s]
        }
        function e() {
            v = ov(tt = es(k, d, g), o);
            var n = o(w, b);
            return h = y - n[0] * u,
            c = p + n[1] * u,
            l()
        }
        function l() {
            return f && (f.valid = !1,
            f = null ),
            i
        }
        var o, tt, v, h, c, f, it = av(function(n, t) {
            return n = o(n, t),
            [n[0] * u + h, c - n[1] * u]
        }
        ), u = 150, y = 480, p = 250, w = 0, b = 0, k = 0, d = 0, g = 0, rt = fb, ut = a, nt = null , ft = null ;
        return i.stream = function(n) {
            return f && (f.valid = !1),
            f = pv(rt(tt, it(ut(n)))),
            f.valid = !0,
            f
        }
        ,
        i.clipAngle = function(n) {
            return arguments.length ? (rt = null  == n ? (nt = n,
            fb) : kd((nt = +n) * r),
            l()) : nt
        }
        ,
        i.clipExtent = function(n) {
            return arguments.length ? (ft = n,
            ut = n ? ev(n[0][0], n[0][1], n[1][0], n[1][1]) : a,
            l()) : ft
        }
        ,
        i.scale = function(n) {
            return arguments.length ? (u = +n,
            e()) : u
        }
        ,
        i.translate = function(n) {
            return arguments.length ? (y = +n[0],
            p = +n[1],
            e()) : [y, p]
        }
        ,
        i.center = function(n) {
            return arguments.length ? (w = n[0] % 360 * r,
            b = n[1] % 360 * r,
            e()) : [w * s, b * s]
        }
        ,
        i.rotate = function(n) {
            return arguments.length ? (k = n[0] % 360 * r,
            d = n[1] % 360 * r,
            g = n.length > 2 ? n[2] % 360 * r : 0,
            e()) : [k * s, d * s, g * s]
        }
        ,
        n.rebind(i, it, "precision"),
        function() {
            return o = t.apply(this, arguments),
            i.invert = o.invert && et,
            e()
        }
    }
    function pv(n) {
        return yv(n, function(t, i) {
            n.point(t * r, i * r)
        }
        )
    }
    function vr(n, t) {
        return [n, t]
    }
    function wv(n, t) {
        return [n > f ? n - d : -f > n ? n + d : n, t]
    }
    function es(n, t, i) {
        return n ? t || i ? ov(kv(n), dv(t, i)) : kv(n) : t || i ? dv(t, i) : wv
    }
    function bv(n) {
        return function(t, i) {
            return t += n,
            [t > f ? t - d : -f > t ? t + d : t, i]
        }
    }
    function kv(n) {
        var t = bv(n);
        return t.invert = bv(-n),
        t
    }
    function dv(n, t) {
        function e(n, t) {
            var e = Math.cos(t)
              , o = Math.cos(n) * e
              , s = Math.sin(n) * e
              , h = Math.sin(t)
              , c = h * i + o * r;
            return [Math.atan2(s * u - c * f, o * i - h * r), wi(c * u + s * f)]
        }
        var i = Math.cos(n)
          , r = Math.sin(n)
          , u = Math.cos(t)
          , f = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t)
              , o = Math.cos(n) * e
              , s = Math.sin(n) * e
              , h = Math.sin(t)
              , c = h * u - s * f;
            return [Math.atan2(s * u + h * f, o * i + c * r), wi(c * i - o * r)]
        }
        ,
        e
    }
    function os(n, t) {
        var i = Math.cos(n)
          , r = Math.sin(n);
        return function(u, f, e, o) {
            var h = e * t, c, s;
            for (null  != u ? (u = gv(i, u),
            f = gv(i, f),
            (e > 0 ? f > u : u > f) && (u += e * d)) : (u = n + e * d,
            f = n - .5 * h),
            s = u; e > 0 ? s > f : f > s; s -= h)
                o.point((c = uf([i, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }
    function gv(n, i) {
        var r = oi(i), u;
        return r[0] -= n,
        rf(r),
        u = fa(-r[1]),
        ((-r[2] < 0 ? -u : u) + 2 * Math.PI - t) % (2 * Math.PI)
    }
    function ny(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function(n) {
            return f.map(function(t) {
                return [n, t]
            }
            )
        }
    }
    function ty(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function(n) {
            return f.map(function(t) {
                return [t, n]
            }
            )
        }
    }
    function ss(n) {
        return n.source
    }
    function hs(n) {
        return n.target
    }
    function ug(n, t, i, r) {
        var f = Math.cos(t)
          , c = Math.sin(t)
          , e = Math.cos(r)
          , l = Math.sin(r)
          , a = f * Math.cos(n)
          , v = f * Math.sin(n)
          , y = e * Math.cos(i)
          , p = e * Math.sin(i)
          , u = 2 * Math.asin(Math.sqrt(oa(r - t) + f * e * oa(i - n)))
          , o = 1 / Math.sin(u)
          , h = u ? function(n) {
            var t = Math.sin(n *= u) * o
              , i = Math.sin(u - n) * o
              , r = i * a + t * y
              , f = i * v + t * p
              , e = i * c + t * l;
            return [Math.atan2(f, r) * s, Math.atan2(e, Math.sqrt(r * r + f * f)) * s]
        }
         : function() {
            return [n * s, t * s]
        }
        ;
        return h.distance = u,
        h
    }
    function fg() {
        function f(f, e) {
            var h = Math.sin(e *= r)
              , s = Math.cos(e)
              , o = u((f *= r) - i)
              , c = Math.cos(o);
            sc += Math.atan2(Math.sqrt((o = s * Math.sin(o)) * o + (o = t * h - n * s * c) * o), n * h + t * s * c);
            i = f;
            n = h;
            t = s
        }
        var i, n, t;
        vi.point = function(u, e) {
            i = u * r;
            n = Math.sin(e *= r);
            t = Math.cos(e);
            vi.point = f
        }
        ;
        vi.lineEnd = function() {
            vi.point = vi.lineEnd = c
        }
    }
    function yr(n, t) {
        function i(t, i) {
            var f = Math.cos(t)
              , r = Math.cos(i)
              , u = n(f * r);
            return [u * r * Math.sin(t), u * Math.sin(i)]
        }
        return i.invert = function(n, i) {
            var r = Math.sqrt(n * n + i * i)
              , u = t(r)
              , f = Math.sin(u)
              , e = Math.cos(u);
            return [Math.atan2(n * f, r * e), Math.asin(r && i * f / r)]
        }
        ,
        i
    }
    function iy(n, i) {
        function s(n, i) {
            var f = u(u(i) - w) < t ? 0 : o / Math.pow(e(i), r);
            return [f * Math.sin(r * n), o - f * Math.cos(r * n)]
        }
        var h = Math.cos(n)
          , e = function(n) {
            return Math.tan(f / 4 + n / 2)
        }
          , r = n === i ? Math.sin(n) : Math.log(h / Math.cos(i)) / Math.log(e(i) / e(n))
          , o = h * Math.pow(e(n), r) / r;
        return r ? (s.invert = function(n, t) {
            var i = o - t
              , u = ua(r) * Math.sqrt(n * n + i * i);
            return [Math.atan2(n, i) / r, 2 * Math.atan(Math.pow(o / u, 1 / r)) - w]
        }
        ,
        s) : of
    }
    function ry(n, i) {
        function e(n, t) {
            var i = f - t;
            return [i * Math.sin(r * n), f - i * Math.cos(r * n)]
        }
        var o = Math.cos(n)
          , r = n === i ? Math.sin(n) : (o - Math.cos(i)) / (i - n)
          , f = o / r + n;
        return u(r) < t ? vr : (e.invert = function(n, t) {
            var i = f - t;
            return [Math.atan2(n, i) / r, f - ua(r) * Math.sqrt(n * n + i * i)]
        }
        ,
        e)
    }
    function of(n, t) {
        return [n, Math.log(Math.tan(f / 4 + t / 2))]
    }
    function uy(n) {
        var i, t = wt(n), r = t.scale, u = t.translate, e = t.clipExtent;
        return t.scale = function() {
            var n = r.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null ) : t : n
        }
        ,
        t.translate = function() {
            var n = u.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null ) : t : n
        }
        ,
        t.clipExtent = function(n) {
            var h = e.apply(t, arguments), o, s;
            return h === t ? (i = null  == n) && (o = f * r(),
            s = u(),
            e([[s[0] - o, s[1] - o], [s[0] + o, s[1] + o]])) : i && (h = null ),
            h
        }
        ,
        t.clipExtent(null )
    }
    function cs(n, t) {
        return [Math.log(Math.tan(f / 4 + t / 2)), -n]
    }
    function rr(n) {
        return n[0]
    }
    function pr(n) {
        return n[1]
    }
    function fy(n) {
        for (var u = n.length, i = [0, 1], t = 2, r = 2; u > r; r++) {
            for (; t > 1 && oo(n[i[t - 2]], n[i[t - 1]], n[r]) <= 0; )
                --t;
            i[t++] = r
        }
        return i.slice(0, t)
    }
    function eg(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }
    function ls(n, t, i) {
        return (i[0] - t[0]) * (n[1] - t[1]) < (i[1] - t[1]) * (n[0] - t[0])
    }
    function ey(n, t, i, r) {
        var u = n[0]
          , e = i[0]
          , o = t[0] - u
          , s = r[0] - e
          , f = n[1]
          , h = i[1]
          , c = t[1] - f
          , l = r[1] - h
          , a = (s * (f - h) - l * (u - e)) / (l * o - s * c);
        return [u + a * o, f + a * c]
    }
    function oy(n) {
        var t = n[0]
          , i = n[n.length - 1];
        return !(t[0] - i[0] || t[1] - i[1])
    }
    function og() {
        cf(this);
        this.edge = this.site = this.circle = null
    }
    function sy(n) {
        var t = pc.pop() || new og;
        return t.site = n,
        t
    }
    function as(n) {
        fr(n);
        lr.remove(n);
        pc.push(n);
        cf(n)
    }
    function sg(n) {
        var a = n.circle, o = a.x, s = a.cy, v = {
            x: o,
            y: s
        }, h = n.P, c = n.N, f = [n], r, i, e, l;
        for (as(n),
        r = h; r.circle && u(o - r.circle.x) < t && u(s - r.circle.cy) < t; )
            h = r.P,
            f.unshift(r),
            as(r),
            r = h;
        for (f.unshift(r),
        fr(r),
        i = c; i.circle && u(o - i.circle.x) < t && u(s - i.circle.cy) < t; )
            c = i.N,
            f.push(i),
            as(i),
            i = c;
        for (f.push(i),
        fr(i),
        l = f.length,
        e = 1; l > e; ++e)
            i = f[e],
            r = f[e - 1],
            sf(i.edge, r.site, i.site, v);
        r = f[0];
        i = f[l - 1];
        i.edge = wr(r.site, i.site, null , v);
        ur(r);
        ur(i)
    }
    function hg(n) {
        for (var f, i, r, a, v, b = n.x, k = n.y, u = lr._; u; )
            if (a = hy(u, k) - b,
            a > t)
                u = u.L;
            else {
                if (v = b - cg(u, k),
                !(v > t)) {
                    a > -t ? (i = u.P,
                    r = u) : v > -t ? (i = u,
                    r = u.N) : i = r = u;
                    break
                }
                if (!u.R) {
                    i = u;
                    break
                }
                u = u.R
            }
        if (f = sy(n),
        lr.insert(i, f),
        i || r) {
            if (i === r)
                return fr(i),
                r = sy(i.site),
                lr.insert(f, r),
                f.edge = r.edge = wr(i.site, f.site),
                ur(i),
                ur(r),
                void 0;
            if (!r)
                return f.edge = wr(i.site, f.site),
                void 0;
            fr(i);
            fr(r);
            var e = i.site
              , y = e.x
              , p = e.y
              , o = n.x - y
              , s = n.y - p
              , h = r.site
              , c = h.x - y
              , l = h.y - p
              , d = 2 * (o * l - s * c)
              , g = o * o + s * s
              , nt = c * c + l * l
              , w = {
                x: (l * g - s * nt) / d + y,
                y: (o * nt - c * g) / d + p
            };
            sf(r.edge, e, h, w);
            f.edge = wr(e, n, null , w);
            r.edge = wr(n, h, null , w);
            ur(i);
            ur(r)
        }
    }
    function hy(n, t) {
        var i = n.site, u = i.x, l = i.y, f = l - t, e;
        if (!f)
            return u;
        if (e = n.P,
        !e)
            return -1 / 0;
        i = e.site;
        var o = i.x
          , a = i.y
          , r = a - t;
        if (!r)
            return o;
        var s = o - u
          , h = 1 / f - 1 / r
          , c = s / r;
        return h ? (-c + Math.sqrt(c * c - 2 * h * (s * s / (-2 * r) - a + r / 2 + l - f / 2))) / h + u : (u + o) / 2
    }
    function cg(n, t) {
        var r = n.N, i;
        return r ? hy(r, t) : (i = n.site,
        i.y === t ? i.x : 1 / 0)
    }
    function cy(n) {
        this.site = n;
        this.edges = []
    }
    function lg(n) {
        for (var i, r, f, e, o, s, h, y, w, p, c = n[0][0], l = n[1][0], a = n[0][1], v = n[1][1], b = yi, k = b.length; k--; )
            if (o = b[k],
            o && o.prepare())
                for (h = o.edges,
                y = h.length,
                s = 0; y > s; )
                    p = h[s].end(),
                    f = p.x,
                    e = p.y,
                    w = h[++s % y].start(),
                    i = w.x,
                    r = w.y,
                    (u(f - i) > t || u(e - r) > t) && (h.splice(s, 0, new hf(pg(o.site, p, u(f - c) < t && v - e > t ? {
                        x: c,
                        y: u(i - c) < t ? r : v
                    } : u(e - v) < t && l - f > t ? {
                        x: u(r - v) < t ? i : l,
                        y: v
                    } : u(f - l) < t && e - a > t ? {
                        x: l,
                        y: u(i - l) < t ? r : a
                    } : u(e - a) < t && f - c > t ? {
                        x: u(r - a) < t ? i : c,
                        y: a
                    } : null ),o.site,null )),
                    ++y)
    }
    function ly(n, t) {
        return t.angle - n.angle
    }
    function ag() {
        cf(this);
        this.x = this.y = this.arc = this.site = this.cy = null
    }
    function ur(n) {
        var w = n.P, b = n.N, u, t;
        if (w && b) {
            var s = w.site
              , h = n.site
              , c = b.site;
            if (s !== c) {
                var l = h.x
                  , a = h.y
                  , f = s.x - l
                  , e = s.y - a
                  , o = c.x - l
                  , r = c.y - a
                  , v = 2 * (f * r - e * o);
                if (!(v >= -dh)) {
                    var k = f * f + e * e
                      , d = o * o + r * r
                      , y = (r * k - e * d) / v
                      , p = (f * d - o * k) / v
                      , r = p + a
                      , i = wc.pop() || new ag;
                    for (i.arc = n,
                    i.site = h,
                    i.x = y + l,
                    i.y = r + Math.sqrt(y * y + p * p),
                    i.cy = r,
                    n.circle = i,
                    u = null ,
                    t = su._; t; )
                        if (i.y < t.y || i.y === t.y && i.x <= t.x) {
                            if (!t.L) {
                                u = t.P;
                                break
                            }
                            t = t.L
                        } else {
                            if (!t.R) {
                                u = t;
                                break
                            }
                            t = t.R
                        }
                    su.insert(u, i);
                    u || (yc = i)
                }
            }
        }
    }
    function fr(n) {
        var t = n.circle;
        t && (t.P || (yc = t.N),
        su.remove(t),
        wc.push(t),
        cf(t),
        n.circle = null )
    }
    function vg(n) {
        for (var i, r = cr, e = fv(n[0][0], n[0][1], n[1][0], n[1][1]), f = r.length; f--; )
            i = r[f],
            (!yg(i, n) || !e(i) || u(i.a.x - i.b.x) < t && u(i.a.y - i.b.y) < t) && (i.a = i.b = null ,
            r.splice(f, 1))
    }
    function yg(n, t) {
        var f = n.b;
        if (f)
            return !0;
        var r, u, i = n.a, h = t[0][0], c = t[1][0], e = t[0][1], o = t[1][1], p = n.l, w = n.r, l = p.x, a = p.y, v = w.x, y = w.y, s = (l + v) / 2, b = (a + y) / 2;
        if (y === a) {
            if (h > s || s >= c)
                return;
            if (l > v) {
                if (i) {
                    if (i.y >= o)
                        return
                } else
                    i = {
                        x: s,
                        y: e
                    };
                f = {
                    x: s,
                    y: o
                }
            } else {
                if (i) {
                    if (i.y < e)
                        return
                } else
                    i = {
                        x: s,
                        y: o
                    };
                f = {
                    x: s,
                    y: e
                }
            }
        } else if (r = (l - v) / (y - a),
        u = b - r * s,
        -1 > r || r > 1)
            if (l > v) {
                if (i) {
                    if (i.y >= o)
                        return
                } else
                    i = {
                        x: (e - u) / r,
                        y: e
                    };
                f = {
                    x: (o - u) / r,
                    y: o
                }
            } else {
                if (i) {
                    if (i.y < e)
                        return
                } else
                    i = {
                        x: (o - u) / r,
                        y: o
                    };
                f = {
                    x: (e - u) / r,
                    y: e
                }
            }
        else if (y > a) {
            if (i) {
                if (i.x >= c)
                    return
            } else
                i = {
                    x: h,
                    y: r * h + u
                };
            f = {
                x: c,
                y: r * c + u
            }
        } else {
            if (i) {
                if (i.x < h)
                    return
            } else
                i = {
                    x: c,
                    y: r * c + u
                };
            f = {
                x: h,
                y: r * h + u
            }
        }
        return n.a = i,
        n.b = f,
        !0
    }
    function ay(n, t) {
        this.l = n;
        this.r = t;
        this.a = this.b = null
    }
    function wr(n, t, i, r) {
        var u = new ay(n,t);
        return cr.push(u),
        i && sf(u, n, t, i),
        r && sf(u, t, n, r),
        yi[n.i].edges.push(new hf(u,n,t)),
        yi[t.i].edges.push(new hf(u,t,n)),
        u
    }
    function pg(n, t, i) {
        var r = new ay(n,null );
        return r.a = t,
        r.b = i,
        cr.push(r),
        r
    }
    function sf(n, t, i, r) {
        n.a || n.b ? n.l === i ? n.b = r : n.a = r : (n.a = r,
        n.l = t,
        n.r = i)
    }
    function hf(n, t, i) {
        var r = n.a
          , u = n.b;
        this.edge = n;
        this.site = t;
        this.angle = i ? Math.atan2(i.y - t.y, i.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }
    function vs() {
        this._ = null
    }
    function cf(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }
    function br(n, t) {
        var i = t
          , r = t.R
          , u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.R = r.L;
        i.R && (i.R.U = i);
        r.L = i
    }
    function kr(n, t) {
        var i = t
          , r = t.L
          , u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.L = r.R;
        i.L && (i.L.U = i);
        r.R = i
    }
    function vy(n) {
        for (; n.L; )
            n = n.L;
        return n
    }
    function ys(n, t) {
        var u, f, r, i = n.sort(wg).pop(), e;
        for (cr = [],
        yi = new Array(n.length),
        lr = new vs,
        su = new vs; ; )
            if (r = yc,
            i && (!r || i.y < r.y || i.y === r.y && i.x < r.x))
                (i.x !== u || i.y !== f) && (yi[i.i] = new cy(i),
                hg(i),
                u = i.x,
                f = i.y),
                i = n.pop();
            else {
                if (!r)
                    break;
                sg(r.arc)
            }
        return t && (vg(t),
        lg(t)),
        e = {
            cells: yi,
            edges: cr
        },
        lr = su = cr = yi = null ,
        e
    }
    function wg(n, t) {
        return t.y - n.y || t.x - n.x
    }
    function bg(n, t, i) {
        return (n.x - i.x) * (t.y - n.y) - (n.x - t.x) * (i.y - n.y)
    }
    function kg(n) {
        return n.x
    }
    function dg(n) {
        return n.y
    }
    function yy() {
        return {
            leaf: !0,
            nodes: [],
            point: null ,
            x: null ,
            y: null
        }
    }
    function dr(n, t, i, r, u, f) {
        if (!n(t, i, r, u, f)) {
            var o = .5 * (i + u)
              , s = .5 * (r + f)
              , e = t.nodes;
            e[0] && dr(n, e[0], i, r, o, s);
            e[1] && dr(n, e[1], o, r, u, s);
            e[2] && dr(n, e[2], i, s, o, f);
            e[3] && dr(n, e[3], o, s, u, f)
        }
    }
    function ps(t, i) {
        t = n.rgb(t);
        i = n.rgb(i);
        var r = t.r
          , u = t.g
          , f = t.b
          , e = i.r - r
          , o = i.g - u
          , s = i.b - f;
        return function(n) {
            return "#" + nr(Math.round(r + e * n)) + nr(Math.round(u + o * n)) + nr(Math.round(f + s * n))
        }
    }
    function py(n, t) {
        var i, u = {}, r = {};
        for (i in n)
            i in t ? u[i] = hi(n[i], t[i]) : r[i] = n[i];
        for (i in t)
            i in n || (r[i] = t[i]);
        return function(n) {
            for (i in u)
                r[i] = u[i](n);
            return r
        }
    }
    function ht(n, t) {
        return t -= n = +n,
        function(i) {
            return n + t * i
        }
    }
    function wy(n, t) {
        var s, u, f, o, i, h = 0, c = 0, r = [], e = [];
        for (n += "",
        t += "",
        cu.lastIndex = 0,
        u = 0; s = cu.exec(t); ++u)
            s.index && r.push(t.substring(h, c = s.index)),
            e.push({
                i: r.length,
                x: s[0]
            }),
            r.push(null ),
            h = cu.lastIndex;
        for (h < t.length && r.push(t.substring(h)),
        u = 0,
        o = e.length; (s = cu.exec(n)) && o > u; ++u)
            if (i = e[u],
            i.x == s[0]) {
                if (i.i)
                    if (null  == r[i.i + 1])
                        for (r[i.i - 1] += i.x,
                        r.splice(i.i, 1),
                        f = u + 1; o > f; ++f)
                            e[f].i--;
                    else
                        for (r[i.i - 1] += i.x + r[i.i + 1],
                        r.splice(i.i, 2),
                        f = u + 1; o > f; ++f)
                            e[f].i -= 2;
                else if (null  == r[i.i + 1])
                    r[i.i] = i.x;
                else
                    for (r[i.i] = i.x + r[i.i + 1],
                    r.splice(i.i + 1, 1),
                    f = u + 1; o > f; ++f)
                        e[f].i--;
                e.splice(u, 1);
                o--;
                u--
            } else
                i.x = ht(parseFloat(s[0]), parseFloat(i.x));
        for (; o > u; )
            i = e.pop(),
            null  == r[i.i + 1] ? r[i.i] = i.x : (r[i.i] = i.x + r[i.i + 1],
            r.splice(i.i + 1, 1)),
            o--;
        return 1 === r.length ? null  == r[0] ? (i = e[0].x,
        function(n) {
            return i(n) + ""
        }
        ) : function() {
            return t
        }
         : function(n) {
            for (u = 0; o > u; ++u)
                r[(i = e[u]).i] = i.x(n);
            return r.join("")
        }
    }
    function hi(t, i) {
        for (var r, u = n.interpolators.length; --u >= 0 && !(r = n.interpolators[u](t, i)); )
            ;
        return r
    }
    function lf(n, t) {
        for (var u = [], r = [], e = n.length, o = t.length, f = Math.min(n.length, t.length), i = 0; f > i; ++i)
            u.push(hi(n[i], t[i]));
        for (; e > i; ++i)
            r[i] = n[i];
        for (; o > i; ++i)
            r[i] = t[i];
        return function(n) {
            for (i = 0; f > i; ++i)
                r[i] = u[i](n);
            return r
        }
    }
    function gg(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }
    function by(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }
    function ky(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }
    function nn(n) {
        return n * n
    }
    function tn(n) {
        return n * n * n
    }
    function rn(n) {
        if (0 >= n)
            return 0;
        if (n >= 1)
            return 1;
        var t = n * n
          , i = t * n;
        return 4 * (.5 > n ? i : 3 * (n - t) + i - .75)
    }
    function un(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }
    function fn(n) {
        return 1 - Math.cos(n * w)
    }
    function en(n) {
        return Math.pow(2, 10 * (n - 1))
    }
    function on(n) {
        return 1 - Math.sqrt(1 - n * n)
    }
    function sn(n, t) {
        var i;
        return arguments.length < 2 && (t = .45),
        arguments.length ? i = t / d * Math.asin(1 / n) : (n = 1,
        i = t / 4),
        function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - i) * d / t)
        }
    }
    function hn(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }
    function cn(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }
    function ln(t, i) {
        t = n.hcl(t);
        i = n.hcl(i);
        var u = t.h
          , f = t.c
          , o = t.l
          , r = i.h - u
          , e = i.c - f
          , s = i.l - o;
        return isNaN(e) && (e = 0,
        f = isNaN(f) ? i.c : f),
        isNaN(r) ? (r = 0,
        u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : -180 > r && (r += 360),
        function(n) {
            return co(u + r * n, f + e * n, o + s * n) + ""
        }
    }
    function an(t, i) {
        t = n.hsl(t);
        i = n.hsl(i);
        var u = t.h
          , f = t.s
          , o = t.l
          , r = i.h - u
          , e = i.s - f
          , s = i.l - o;
        return isNaN(e) && (e = 0,
        f = isNaN(f) ? i.s : f),
        isNaN(r) ? (r = 0,
        u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : -180 > r && (r += 360),
        function(n) {
            return ho(u + r * n, f + e * n, o + s * n) + ""
        }
    }
    function vn(t, i) {
        t = n.lab(t);
        i = n.lab(i);
        var r = t.l
          , u = t.a
          , f = t.b
          , e = i.l - r
          , o = i.a - u
          , s = i.b - f;
        return function(n) {
            return sa(r + e * n, u + o * n, f + s * n) + ""
        }
    }
    function dy(n, t) {
        return t -= n,
        function(i) {
            return Math.round(n + t * i)
        }
    }
    function gy(n) {
        var t = [n.a, n.b]
          , i = [n.c, n.d]
          , r = tp(t)
          , u = np(t, i)
          , f = tp(yn(i, t, -u)) || 0;
        t[0] * i[1] < i[0] * t[1] && (t[0] *= -1,
        t[1] *= -1,
        r *= -1,
        u *= -1);
        this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-i[0], i[1])) * s;
        this.translate = [n.e, n.f];
        this.scale = [r, f];
        this.skew = f ? Math.atan2(u, f) * s : 0
    }
    function np(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }
    function tp(n) {
        var t = Math.sqrt(np(n, n));
        return t && (n[0] /= t,
        n[1] /= t),
        t
    }
    function yn(n, t, i) {
        return n[0] += i * t[0],
        n[1] += i * t[1],
        n
    }
    function ip(t, i) {
        var s, r = [], o = [], c = n.transform(t), l = n.transform(i), a = c.translate, u = l.translate, h = c.rotate, f = l.rotate, p = c.skew, v = l.skew, y = c.scale, e = l.scale;
        return a[0] != u[0] || a[1] != u[1] ? (r.push("translate(", null , ",", null , ")"),
        o.push({
            i: 1,
            x: ht(a[0], u[0])
        }, {
            i: 3,
            x: ht(a[1], u[1])
        })) : u[0] || u[1] ? r.push("translate(" + u + ")") : r.push(""),
        h != f ? (h - f > 180 ? f += 360 : f - h > 180 && (h += 360),
        o.push({
            i: r.push(r.pop() + "rotate(", null , ")") - 2,
            x: ht(h, f)
        })) : f && r.push(r.pop() + "rotate(" + f + ")"),
        p != v ? o.push({
            i: r.push(r.pop() + "skewX(", null , ")") - 2,
            x: ht(p, v)
        }) : v && r.push(r.pop() + "skewX(" + v + ")"),
        y[0] != e[0] || y[1] != e[1] ? (s = r.push(r.pop() + "scale(", null , ",", null , ")"),
        o.push({
            i: s - 4,
            x: ht(y[0], e[0])
        }, {
            i: s - 2,
            x: ht(y[1], e[1])
        })) : (1 != e[0] || 1 != e[1]) && r.push(r.pop() + "scale(" + e + ")"),
        s = o.length,
        function(n) {
            for (var t, i = -1; ++i < s; )
                r[(t = o[i]).i] = t.x(n);
            return r.join("")
        }
    }
    function pn(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(i) {
            return (i - n) * t
        }
    }
    function wn(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(i) {
            return Math.max(0, Math.min(1, (i - n) * t))
        }
    }
    function bn(n) {
        for (var f, t = n.source, i = n.target, u = kn(t, i), r = [t]; t !== u; )
            t = t.parent,
            r.push(t);
        for (f = r.length; i !== u; )
            r.splice(f, 0, i),
            i = i.parent;
        return r
    }
    function rp(n) {
        for (var i = [], t = n.parent; null  != t; )
            i.push(n),
            n = t,
            t = t.parent;
        return i.push(n),
        i
    }
    function kn(n, t) {
        if (n === t)
            return n;
        for (var r = rp(n), u = rp(t), i = r.pop(), f = u.pop(), e = null ; i === f; )
            e = i,
            i = r.pop(),
            f = u.pop();
        return e
    }
    function dn(n) {
        n.fixed |= 2
    }
    function gn(n) {
        n.fixed &= -7
    }
    function ntt(n) {
        n.fixed |= 4;
        n.px = n.x;
        n.py = n.y
    }
    function ttt(n) {
        n.fixed &= -5
    }
    function up(n, t, i) {
        var f = 0, e = 0, u;
        if (n.charge = 0,
        !n.leaf)
            for (var r, o = n.nodes, h = o.length, s = -1; ++s < h; )
                r = o[s],
                null  != r && (up(r, t, i),
                n.charge += r.charge,
                f += r.charge * r.cx,
                e += r.charge * r.cy);
        n.point && (n.leaf || (n.point.x += Math.random() - .5,
        n.point.y += Math.random() - .5),
        u = t * i[n.point.index],
        n.charge += n.pointCharge = u,
        f += u * n.point.x,
        e += u * n.point.y);
        n.cx = f / n.charge;
        n.cy = e / n.charge
    }
    function gr(t, i) {
        return n.rebind(t, i, "sort", "children", "value"),
        t.nodes = t,
        t.links = ftt,
        t
    }
    function itt(n) {
        return n.children
    }
    function rtt(n) {
        return n.value
    }
    function utt(n, t) {
        return t.value - n.value
    }
    function ftt(t) {
        return n.merge(t.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            }
            )
        }
        ))
    }
    function ett(n) {
        return n.x
    }
    function ott(n) {
        return n.y
    }
    function stt(n, t, i) {
        n.y0 = t;
        n.y = i
    }
    function ws(t) {
        return n.range(t.length)
    }
    function bs(n) {
        for (var t = -1, r = n[0].length, i = []; ++t < r; )
            i[t] = 0;
        return i
    }
    function htt(n) {
        for (var i, t = 1, r = 0, u = n[0][1], f = n.length; f > t; ++t)
            (i = n[t][1]) > u && (r = t,
            u = i);
        return r
    }
    function ctt(n) {
        return n.reduce(ltt, 0)
    }
    function ltt(n, t) {
        return n + t[1]
    }
    function att(n, t) {
        return fp(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }
    function fp(n, t) {
        for (var i = -1, r = +n[0], f = (n[1] - r) / t, u = []; ++i <= t; )
            u[i] = f * i + r;
        return u
    }
    function vtt(t) {
        return [n.min(t), n.max(t)]
    }
    function ep(n, t) {
        return n.parent == t.parent ? 1 : 2
    }
    function ks(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }
    function ds(n) {
        var i, t = n.children;
        return t && (i = t.length) ? t[i - 1] : n._tree.thread
    }
    function af(n, t) {
        var i = n.children, u, f, r;
        if (i && (f = i.length))
            for (r = -1; ++r < f; )
                t(u = af(i[r], t), n) > 0 && (n = u);
        return n
    }
    function ytt(n, t) {
        return n.x - t.x
    }
    function ptt(n, t) {
        return t.x - n.x
    }
    function wtt(n, t) {
        return n.depth - t.depth
    }
    function ct(n, t) {
        function i(n, r) {
            var u = n.children, f, s, e, o;
            if (u && (s = u.length))
                for (e = null ,
                o = -1; ++o < s; )
                    f = u[o],
                    i(f, e),
                    e = f;
            t(n, r)
        }
        i(n, null )
    }
    function btt(n) {
        for (var t, i = 0, f = 0, r = n.children, u = r.length; --u >= 0; )
            t = r[u]._tree,
            t.prelim += i,
            t.mod += i,
            i += t.shift + (f += t.change)
    }
    function ktt(n, t, i) {
        n = n._tree;
        t = t._tree;
        var r = i / (t.number - n.number);
        n.change += r;
        t.change -= r;
        t.shift += i;
        t.prelim += i;
        t.mod += i
    }
    function dtt(n, t, i) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : i
    }
    function gtt(n, t) {
        return n.value - t.value
    }
    function gs(n, t) {
        var i = n._pack_next;
        n._pack_next = t;
        t._pack_prev = n;
        t._pack_next = i;
        i._pack_prev = t
    }
    function op(n, t) {
        n._pack_next = t;
        t._pack_prev = n
    }
    function sp(n, t) {
        var i = t.x - n.x
          , r = t.y - n.y
          , u = n.r + t.r;
        return .999 * u * u > i * i + r * r
    }
    function hp(n) {
        function h(n) {
            c = Math.min(n.x - n.r, c);
            l = Math.max(n.x + n.r, l);
            a = Math.min(n.y - n.r, a);
            v = Math.max(n.y + n.r, v)
        }
        if ((u = n.children) && (s = u.length)) {
            var u, i, r, t, f, e, o, s, c = 1 / 0, l = -1 / 0, a = 1 / 0, v = -1 / 0;
            if (u.forEach(nit),
            i = u[0],
            i.x = -i.r,
            i.y = 0,
            h(i),
            s > 1 && (r = u[1],
            r.x = r.r,
            r.y = 0,
            h(r),
            s > 2))
                for (t = u[2],
                lp(i, r, t),
                h(t),
                gs(i, t),
                i._pack_prev = t,
                gs(t, r),
                r = i._pack_next,
                f = 3; s > f; f++) {
                    lp(i, r, t = u[f]);
                    var y = 0
                      , p = 1
                      , w = 1;
                    for (e = r._pack_next; e !== r; e = e._pack_next,
                    p++)
                        if (sp(e, t)) {
                            y = 1;
                            break
                        }
                    if (1 == y)
                        for (o = i._pack_prev; o !== e._pack_prev && !sp(o, t); o = o._pack_prev,
                        w++)
                            ;
                    y ? (w > p || p == w && r.r < i.r ? op(i, r = e) : op(i = o, r),
                    f--) : (gs(i, t),
                    r = t,
                    h(t))
                }
            var k = (c + l) / 2
              , d = (a + v) / 2
              , b = 0;
            for (f = 0; s > f; f++)
                t = u[f],
                t.x -= k,
                t.y -= d,
                b = Math.max(b, t.r + Math.sqrt(t.x * t.x + t.y * t.y));
            n.r = b;
            u.forEach(tit)
        }
    }
    function nit(n) {
        n._pack_next = n._pack_prev = n
    }
    function tit(n) {
        delete n._pack_next;
        delete n._pack_prev
    }
    function cp(n, t, i, r) {
        var u = n.children, f, e;
        if (n.x = t += r * n.x,
        n.y = i += r * n.y,
        n.r *= r,
        u)
            for (f = -1,
            e = u.length; ++f < e; )
                cp(u[f], t, i, r)
    }
    function lp(n, t, i) {
        var r = n.r + i.r, f = t.x - n.x, e = t.y - n.y, u, o, s, h;
        r && (f || e) ? (u = t.r + i.r,
        o = f * f + e * e,
        u *= u,
        r *= r,
        s = .5 + (r - u) / (2 * o),
        h = Math.sqrt(Math.max(0, 2 * u * (r + o) - (r -= o) * r - u * u)) / (2 * o),
        i.x = n.x + s * f + h * e,
        i.y = n.y + s * e - h * f) : (i.x = n.x + r,
        i.y = n.y)
    }
    function iit(t) {
        return 1 + n.max(t, function(n) {
            return n.y
        }
        )
    }
    function rit(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }
        , 0) / n.length
    }
    function ap(n) {
        var t = n.children;
        return t && t.length ? ap(t[0]) : n
    }
    function vp(n) {
        var i, t = n.children;
        return t && (i = t.length) ? vp(t[i - 1]) : n
    }
    function nh(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }
    function yp(n, t) {
        var u = n.x + t[3]
          , f = n.y + t[0]
          , i = n.dx - t[1] - t[3]
          , r = n.dy - t[0] - t[2];
        return 0 > i && (u += i / 2,
        i = 0),
        0 > r && (f += r / 2,
        r = 0),
        {
            x: u,
            y: f,
            dx: i,
            dy: r
        }
    }
    function er(n) {
        var t = n[0]
          , i = n[n.length - 1];
        return i > t ? [t, i] : [i, t]
    }
    function vf(n) {
        return n.rangeExtent ? n.rangeExtent() : er(n.range())
    }
    function uit(n, t, i, r) {
        var u = i(n[0], n[1])
          , f = r(t[0], t[1]);
        return function(n) {
            return f(u(n))
        }
    }
    function th(n, t) {
        var i, r = 0, u = n.length - 1, f = n[r], e = n[u];
        return f > e && (i = r,
        r = u,
        u = i,
        i = f,
        f = e,
        e = i),
        n[r] = t.floor(f),
        n[u] = t.ceil(e),
        n
    }
    function fit(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : cb
    }
    function eit(t, i, r, u) {
        var o = []
          , s = []
          , f = 0
          , e = Math.min(t.length, i.length) - 1;
        for (t[e] < t[0] && (t = t.slice().reverse(),
        i = i.slice().reverse()); ++f <= e; )
            o.push(r(t[f - 1], t[f])),
            s.push(u(i[f - 1], i[f]));
        return function(i) {
            var r = n.bisect(t, i, 1, e) - 1;
            return s[r](o[r](i))
        }
    }
    function pp(n, t, i, r) {
        function f() {
            var f = Math.min(n.length, t.length) > 2 ? eit : uit
              , s = r ? wn : pn;
            return e = f(n, t, s, i),
            o = f(t, n, s, hi),
            u
        }
        function u(n) {
            return e(n)
        }
        var e, o;
        return u.invert = function(n) {
            return o(n)
        }
        ,
        u.domain = function(t) {
            return arguments.length ? (n = t.map(Number),
            f()) : n
        }
        ,
        u.range = function(n) {
            return arguments.length ? (t = n,
            f()) : t
        }
        ,
        u.rangeRound = function(n) {
            return u.range(n).interpolate(dy)
        }
        ,
        u.clamp = function(n) {
            return arguments.length ? (r = n,
            f()) : r
        }
        ,
        u.interpolate = function(n) {
            return arguments.length ? (i = n,
            f()) : i
        }
        ,
        u.ticks = function(t) {
            return rh(n, t)
        }
        ,
        u.tickFormat = function(t, i) {
            return uh(n, t, i)
        }
        ,
        u.nice = function(t) {
            return wp(n, t),
            f()
        }
        ,
        u.copy = function() {
            return pp(n, t, i, r)
        }
        ,
        f()
    }
    function ih(t, i) {
        return n.rebind(t, i, "range", "rangeRound", "interpolate", "clamp")
    }
    function wp(n, t) {
        return th(n, fit(nu(n, t)[2]))
    }
    function nu(n, t) {
        null  == t && (t = 10);
        var r = er(n)
          , f = r[1] - r[0]
          , i = Math.pow(10, Math.floor(Math.log(f / t) / Math.LN10))
          , u = t / f * i;
        return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2),
        r[0] = Math.ceil(r[0] / i) * i,
        r[1] = Math.floor(r[1] / i) * i + .5 * i,
        r[2] = i,
        r
    }
    function rh(t, i) {
        return n.range.apply(n, nu(t, i))
    }
    function uh(t, i, r) {
        var u = nu(t, i);
        return n.format(r ? r.replace(ib, function(n, t, i, r, f, e, o, s, h, c) {
            return [t, i, r, f, e, o, s, h || "." + oit(c, u), c].join("")
        }
        ) : ",." + fh(u[2]) + "f")
    }
    function fh(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }
    function oit(n, t) {
        var i = fh(t[2]);
        return n in lb ? Math.abs(i - fh(Math.max(Math.abs(t[0]), Math.abs(t[1])))) + +("e" !== n) : i - 2 * ("%" === n)
    }
    function bp(t, i, r, u) {
        function e(n) {
            return (r ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(i)
        }
        function o(n) {
            return r ? Math.pow(i, n) : -Math.pow(i, -n)
        }
        function f(n) {
            return t(e(n))
        }
        return f.invert = function(n) {
            return o(t.invert(n))
        }
        ,
        f.domain = function(n) {
            return arguments.length ? (r = n[0] >= 0,
            t.domain((u = n.map(Number)).map(e)),
            f) : u
        }
        ,
        f.base = function(n) {
            return arguments.length ? (i = +n,
            t.domain(u.map(e)),
            f) : i
        }
        ,
        f.nice = function() {
            var n = th(u.map(e), r ? Math : ab);
            return t.domain(n),
            u = n.map(o),
            f
        }
        ,
        f.ticks = function() {
            var h = er(u), t = [], c = h[0], l = h[1], n = Math.floor(e(c)), s = Math.ceil(e(l)), a = i % 1 ? 2 : i, f;
            if (isFinite(s - n)) {
                if (r) {
                    for (; s > n; n++)
                        for (f = 1; a > f; f++)
                            t.push(o(n) * f);
                    t.push(o(n))
                } else
                    for (t.push(o(n)); n++ < s; )
                        for (f = a - 1; f > 0; f--)
                            t.push(o(n) * f);
                for (n = 0; t[n] < c; n++)
                    ;
                for (s = t.length; t[s - 1] > l; s--)
                    ;
                t = t.slice(n, s)
            }
            return t
        }
        ,
        f.tickFormat = function(t, i) {
            if (!arguments.length)
                return kc;
            arguments.length < 2 ? i = kc : "function" != typeof i && (i = n.format(i));
            var u, s = Math.max(.1, t / f.ticks().length), h = r ? (u = 1e-12,
            Math.ceil) : (u = -1e-12,
            Math.floor);
            return function(n) {
                return n / o(h(e(n) + u)) <= s ? i(n) : ""
            }
        }
        ,
        f.copy = function() {
            return bp(t.copy(), i, r, u)
        }
        ,
        ih(f, t)
    }
    function kp(n, t, i) {
        function r(t) {
            return n(u(t))
        }
        var u = yf(t)
          , f = yf(1 / t);
        return r.invert = function(t) {
            return f(n.invert(t))
        }
        ,
        r.domain = function(t) {
            return arguments.length ? (n.domain((i = t.map(Number)).map(u)),
            r) : i
        }
        ,
        r.ticks = function(n) {
            return rh(i, n)
        }
        ,
        r.tickFormat = function(n, t) {
            return uh(i, n, t)
        }
        ,
        r.nice = function(n) {
            return r.domain(wp(i, n))
        }
        ,
        r.exponent = function(e) {
            return arguments.length ? (u = yf(t = e),
            f = yf(1 / t),
            n.domain(i.map(u)),
            r) : t
        }
        ,
        r.copy = function() {
            return kp(n.copy(), t, i)
        }
        ,
        ih(r, n)
    }
    function yf(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }
    function dp(t, i) {
        function r(n) {
            return u[((f.get(n) || "range" === i.t && f.set(n, t.push(n))) - 1) % u.length]
        }
        function o(i, r) {
            return n.range(t.length).map(function(n) {
                return i + r * n
            }
            )
        }
        var f, u, e;
        return r.domain = function(n) {
            if (!arguments.length)
                return t;
            t = [];
            f = new rt;
            for (var u, e = -1, o = n.length; ++e < o; )
                f.has(u = n[e]) || f.set(u, t.push(u));
            return r[i.t].apply(r, i.a)
        }
        ,
        r.range = function(n) {
            return arguments.length ? (u = n,
            e = 0,
            i = {
                t: "range",
                a: arguments
            },
            r) : u
        }
        ,
        r.rangePoints = function(n, f) {
            arguments.length < 2 && (f = 0);
            var s = n[0]
              , h = n[1]
              , c = (h - s) / (Math.max(1, t.length - 1) + f);
            return u = o(t.length < 2 ? (s + h) / 2 : s + c * f / 2, c),
            e = 0,
            i = {
                t: "rangePoints",
                a: arguments
            },
            r
        }
        ,
        r.rangeBands = function(n, f, s) {
            arguments.length < 2 && (f = 0);
            arguments.length < 3 && (s = f);
            var h = n[1] < n[0]
              , l = n[+h]
              , a = n[1 - h]
              , c = (a - l) / (t.length - f + 2 * s);
            return u = o(l + c * s, c),
            h && u.reverse(),
            e = c * (1 - f),
            i = {
                t: "rangeBands",
                a: arguments
            },
            r
        }
        ,
        r.rangeRoundBands = function(n, f, s) {
            arguments.length < 2 && (f = 0);
            arguments.length < 3 && (s = f);
            var h = n[1] < n[0]
              , c = n[+h]
              , a = n[1 - h]
              , l = Math.floor((a - c) / (t.length - f + 2 * s))
              , v = a - c - (t.length - f) * l;
            return u = o(c + Math.round(v / 2), l),
            h && u.reverse(),
            e = Math.round(l * (1 - f)),
            i = {
                t: "rangeRoundBands",
                a: arguments
            },
            r
        }
        ,
        r.rangeBand = function() {
            return e
        }
        ,
        r.rangeExtent = function() {
            return er(i.a[0])
        }
        ,
        r.copy = function() {
            return dp(t, i)
        }
        ,
        r.domain(t)
    }
    function gp(t, i) {
        function f() {
            var f = 0
              , e = i.length;
            for (r = []; ++f < e; )
                r[f - 1] = n.quantile(t, f / e);
            return u
        }
        function u(t) {
            if (!isNaN(t = +t))
                return i[n.bisect(r, t)]
        }
        var r;
        return u.domain = function(i) {
            return arguments.length ? (t = i.filter(function(n) {
                return !isNaN(n)
            }
            ).sort(n.ascending),
            f()) : t
        }
        ,
        u.range = function(n) {
            return arguments.length ? (i = n,
            f()) : i
        }
        ,
        u.quantiles = function() {
            return r
        }
        ,
        u.invertExtent = function(n) {
            return n = i.indexOf(n),
            0 > n ? [NaN, NaN] : [n > 0 ? r[n - 1] : t[0], n < r.length ? r[n] : t[t.length - 1]]
        }
        ,
        u.copy = function() {
            return gp(t, i)
        }
        ,
        f()
    }
    function nw(n, t, i) {
        function r(t) {
            return i[Math.max(0, Math.min(e, Math.floor(u * (t - n))))]
        }
        function f() {
            return u = i.length / (t - n),
            e = i.length - 1,
            r
        }
        var u, e;
        return r.domain = function(i) {
            return arguments.length ? (n = +i[0],
            t = +i[i.length - 1],
            f()) : [n, t]
        }
        ,
        r.range = function(n) {
            return arguments.length ? (i = n,
            f()) : i
        }
        ,
        r.invertExtent = function(t) {
            return t = i.indexOf(t),
            t = 0 > t ? NaN : t / u + n,
            [t, t + 1 / u]
        }
        ,
        r.copy = function() {
            return nw(n, t, i)
        }
        ,
        f()
    }
    function tw(t, i) {
        function r(r) {
            if (r >= r)
                return i[n.bisect(t, r)]
        }
        return r.domain = function(n) {
            return arguments.length ? (t = n,
            r) : t
        }
        ,
        r.range = function(n) {
            return arguments.length ? (i = n,
            r) : i
        }
        ,
        r.invertExtent = function(n) {
            return n = i.indexOf(n),
            [t[n - 1], t[n]]
        }
        ,
        r.copy = function() {
            return tw(t, i)
        }
        ,
        r
    }
    function iw(n) {
        function t(n) {
            return +n
        }
        return t.invert = t,
        t.domain = t.range = function(i) {
            return arguments.length ? (n = i.map(t),
            t) : n
        }
        ,
        t.ticks = function(t) {
            return rh(n, t)
        }
        ,
        t.tickFormat = function(t, i) {
            return uh(n, t, i)
        }
        ,
        t.copy = function() {
            return iw(n)
        }
        ,
        t
    }
    function sit(n) {
        return n.innerRadius
    }
    function hit(n) {
        return n.outerRadius
    }
    function rw(n) {
        return n.startAngle
    }
    function uw(n) {
        return n.endAngle
    }
    function fw(n) {
        function t(t) {
            function a() {
                l.push("M", i(n(s), e))
            }
            for (var c, l = [], s = [], h = -1, v = t.length, y = o(r), p = o(u); ++h < v; )
                f.call(this, c = t[h], h) ? s.push([+y.call(this, c, h), +p.call(this, c, h)]) : s.length && (a(),
                s = []);
            return s.length && a(),
            l.length ? l.join("") : null
        }
        var r = rr
          , u = pr
          , f = ir
          , i = k
          , s = i.key
          , e = .7;
        return t.x = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.y = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t.defined = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t.interpolate = function(n) {
            return arguments.length ? (s = "function" == typeof n ? i = n : (i = be.get(n) || k).key,
            t) : s
        }
        ,
        t.tension = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t
    }
    function k(n) {
        return n.join("L")
    }
    function cit(n) {
        return k(n) + "Z"
    }
    function lit(n) {
        for (var r = 0, u = n.length, t = n[0], i = [t[0], ",", t[1]]; ++r < u; )
            i.push("H", (t[0] + (t = n[r])[0]) / 2, "V", t[1]);
        return u > 1 && i.push("H", t[0]),
        i.join("")
    }
    function eh(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u; )
            r.push("V", (t = n[i])[1], "H", t[0]);
        return r.join("")
    }
    function oh(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u; )
            r.push("H", (t = n[i])[0], "V", t[1]);
        return r.join("")
    }
    function ait(n, t) {
        return n.length < 4 ? k(n) : n[1] + pf(n.slice(1, n.length - 1), sh(n, t))
    }
    function vit(n, t) {
        return n.length < 3 ? k(n) : n[0] + pf((n.push(n[0]),
        n), sh([n[n.length - 2]].concat(n, [n[1]]), t))
    }
    function yit(n, t) {
        return n.length < 3 ? k(n) : n[0] + pf(n, sh(n, t))
    }
    function pf(n, t) {
        var o, h;
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
            return k(n);
        var c = n.length != t.length
          , f = ""
          , s = n[0]
          , i = n[1]
          , e = t[0]
          , r = e
          , u = 1;
        if (c && (f += "Q" + (i[0] - 2 * e[0] / 3) + "," + (i[1] - 2 * e[1] / 3) + "," + i[0] + "," + i[1],
        s = n[1],
        u = 2),
        t.length > 1)
            for (r = t[1],
            i = n[u],
            u++,
            f += "C" + (s[0] + e[0]) + "," + (s[1] + e[1]) + "," + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1],
            o = 2; o < t.length; o++,
            u++)
                i = n[u],
                r = t[o],
                f += "S" + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1];
        return c && (h = n[u],
        f += "Q" + (i[0] + 2 * r[0] / 3) + "," + (i[1] + 2 * r[1] / 3) + "," + h[0] + "," + h[1]),
        f
    }
    function sh(n, t) {
        for (var r, u = [], f = (1 - t) / 2, e = n[0], i = n[1], o = 1, s = n.length; ++o < s; )
            r = e,
            e = i,
            i = n[o],
            u.push([f * (i[0] - r[0]), f * (i[1] - r[1])]);
        return u
    }
    function ew(n) {
        if (n.length < 3)
            return k(n);
        var o = 1
          , s = n.length
          , t = n[0]
          , i = t[0]
          , r = t[1]
          , u = [i, i, i, (t = n[1])[0]]
          , f = [r, r, r, t[1]]
          , e = [i, ",", r, "L", g(fi, u), ",", g(fi, f)];
        for (n.push(n[s - 1]); ++o <= s; )
            t = n[o],
            u.shift(),
            u.push(t[0]),
            f.shift(),
            f.push(t[1]),
            hh(e, u, f);
        return n.pop(),
        e.push("L", t),
        e.join("")
    }
    function pit(n) {
        if (n.length < 4)
            return k(n);
        for (var t, f = [], i = -1, e = n.length, r = [0], u = [0]; ++i < 3; )
            t = n[i],
            r.push(t[0]),
            u.push(t[1]);
        for (f.push(g(fi, r) + "," + g(fi, u)),
        --i; ++i < e; )
            t = n[i],
            r.shift(),
            r.push(t[0]),
            u.shift(),
            u.push(t[1]),
            hh(f, r, u);
        return f.join("")
    }
    function wit(n) {
        for (var f, t, i = -1, e = n.length, o = e + 4, r = [], u = []; ++i < 4; )
            t = n[i % e],
            r.push(t[0]),
            u.push(t[1]);
        for (f = [g(fi, r), ",", g(fi, u)],
        --i; ++i < o; )
            t = n[i % e],
            r.shift(),
            r.push(t[0]),
            u.shift(),
            u.push(t[1]),
            hh(f, r, u);
        return f.join("")
    }
    function bit(n, t) {
        var i = n.length - 1;
        if (i)
            for (var r, u, e = n[0][0], o = n[0][1], s = n[i][0] - e, h = n[i][1] - o, f = -1; ++f <= i; )
                r = n[f],
                u = f / i,
                r[0] = t * r[0] + (1 - t) * (e + u * s),
                r[1] = t * r[1] + (1 - t) * (o + u * h);
        return ew(n)
    }
    function g(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }
    function hh(n, t, i) {
        n.push("C", g(yb, t), ",", g(yb, i), ",", g(pb, t), ",", g(pb, i), ",", g(fi, t), ",", g(fi, i))
    }
    function ch(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }
    function kit(n) {
        for (var t = 0, e = n.length - 1, i = [], f = n[0], r = n[1], u = i[0] = ch(f, r); ++t < e; )
            i[t] = (u + (u = ch(f = r, r = n[t + 1]))) / 2;
        return i[t] = u,
        i
    }
    function dit(n) {
        for (var e, o, s, r, c = [], f = kit(n), i = -1, h = n.length - 1; ++i < h; )
            e = ch(n[i], n[i + 1]),
            u(e) < t ? f[i] = f[i + 1] = 0 : (o = f[i] / e,
            s = f[i + 1] / e,
            r = o * o + s * s,
            r > 9 && (r = 3 * e / Math.sqrt(r),
            f[i] = r * o,
            f[i + 1] = r * s));
        for (i = -1; ++i <= h; )
            r = (n[Math.min(h, i + 1)][0] - n[Math.max(0, i - 1)][0]) / (6 * (1 + f[i] * f[i])),
            c.push([r || 0, f[i] * r || 0]);
        return c
    }
    function git(n) {
        return n.length < 3 ? k(n) : n[0] + pf(n, dit(n))
    }
    function ow(n) {
        for (var t, i, r, u = -1, f = n.length; ++u < f; )
            t = n[u],
            i = t[0],
            r = t[1] + ui,
            t[0] = i * Math.cos(r),
            t[1] = i * Math.sin(r);
        return n
    }
    function sw(n) {
        function t(t) {
            function b() {
                p.push("M", i(n(w), s), a, l(n(y.reverse()), s), "Z")
            }
            for (var v, k, d, p = [], y = [], w = [], c = -1, g = t.length, nt = o(f), tt = o(e), it = f === r ? function() {
                return k
            }
             : o(r), rt = e === u ? function() {
                return d
            }
             : o(u); ++c < g; )
                h.call(this, v = t[c], c) ? (y.push([k = +nt.call(this, v, c), d = +tt.call(this, v, c)]),
                w.push([+it.call(this, v, c), +rt.call(this, v, c)])) : y.length && (b(),
                y = [],
                w = []);
            return y.length && b(),
            p.length ? p.join("") : null
        }
        var f = rr
          , r = rr
          , e = 0
          , u = pr
          , h = ir
          , i = k
          , c = i.key
          , l = i
          , a = "L"
          , s = .7;
        return t.x = function(n) {
            return arguments.length ? (f = r = n,
            t) : r
        }
        ,
        t.x0 = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t.x1 = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.y = function(n) {
            return arguments.length ? (e = u = n,
            t) : u
        }
        ,
        t.y0 = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.y1 = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t.defined = function(n) {
            return arguments.length ? (h = n,
            t) : h
        }
        ,
        t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? i = n : (i = be.get(n) || k).key,
            l = i.reverse || i,
            a = i.closed ? "M" : "L",
            t) : c
        }
        ,
        t.tension = function(n) {
            return arguments.length ? (s = n,
            t) : s
        }
        ,
        t
    }
    function nrt(n) {
        return n.radius
    }
    function hw(n) {
        return [n.x, n.y]
    }
    function trt(n) {
        return function() {
            var t = n.apply(this, arguments)
              , i = t[0]
              , r = t[1] + ui;
            return [i * Math.cos(r), i * Math.sin(r)]
        }
    }
    function irt() {
        return 64
    }
    function rrt() {
        return "circle"
    }
    function cw(n) {
        var t = Math.sqrt(n / f);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }
    function tu(n, t) {
        return kf(n, l),
        n.id = t,
        n
    }
    function lh(n, t, i, r) {
        var u = n.id;
        return pt(n, "function" == typeof i ? function(n, f, e) {
            n.__transition__[u].tween.set(t, r(i.call(n, n.__data__, f, e)))
        }
         : (i = r(i),
        function(n) {
            n.__transition__[u].tween.set(t, i)
        }
        ))
    }
    function urt(n) {
        return null  == n && (n = ""),
        function() {
            this.textContent = n
        }
    }
    function wf(t, i, r, u) {
        var e = t.__transition__ || (t.__transition__ = {
            active: 0,
            count: 0
        }), f = e[r], o;
        f || (o = u.time,
        f = e[r] = {
            tween: new rt,
            time: o,
            ease: u.ease,
            delay: u.delay,
            duration: u.duration
        },
        ++e.count,
        n.timer(function(u) {
            function v(u) {
                return e.active > r ? s() : (e.active = r,
                f.event && f.event.start.call(t, h, i),
                f.tween.forEach(function(n, r) {
                    (r = r.call(t, h, i)) && a.push(r)
                }
                ),
                n.timer(function() {
                    return l.c = y(u || 1) ? ir : y,
                    1
                }
                , 0, o),
                void 0)
            }
            function y(n) {
                if (e.active !== r)
                    return s();
                for (var u = n / w, c = p(u), o = a.length; o > 0; )
                    a[--o].call(t, c);
                if (u >= 1)
                    return ( f.event && f.event.end.call(t, h, i),
                    s())
            }
            function s() {
                return --e.count ? delete e[r] : delete t.__transition__,
                1
            }
            var h = t.__data__
              , p = f.ease
              , c = f.delay
              , w = f.duration
              , l = lt
              , a = [];
            return l.t = c + o,
            u >= c ? v(u - c) : (l.c = v,
            void 0)
        }
        , 0, o))
    }
    function lw(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)"
        }
        )
    }
    function aw(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")"
        }
        )
    }
    function ah(n) {
        return n.toISOString()
    }
    function vh(t, i, r) {
        function u(n) {
            return t(n)
        }
        function f(t, r) {
            var e = t[1] - t[0]
              , f = e / r
              , u = n.bisect(ge, f);
            return u == ge.length ? [i.year, nu(t.map(function(n) {
                return n / 31536e6
            }
            ), r)[2]] : u ? i[f / ge[u - 1] < ge[u] / f ? u - 1 : u] : [uut, nu(t, r)[2]]
        }
        return u.invert = function(n) {
            return ci(t.invert(n))
        }
        ,
        u.domain = function(n) {
            return arguments.length ? (t.domain(n),
            u) : t.domain().map(ci)
        }
        ,
        u.nice = function(n, t) {
            function r(i) {
                return !isNaN(i) && !n.range(i, ci(+i + 1), t).length
            }
            var e = u.domain()
              , o = er(e)
              , i = null  == n ? f(o, 10) : "number" == typeof n && f(o, n);
            return i && (n = i[0],
            t = i[1]),
            u.domain(th(e, t > 1 ? {
                floor: function(t) {
                    for (; r(t = n.floor(t)); )
                        t = ci(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; r(t = n.ceil(t)); )
                        t = ci(+t + 1);
                    return t
                }
            } : n))
        }
        ,
        u.ticks = function(n, t) {
            var i = er(u.domain())
              , r = null  == n ? f(i, 10) : "number" == typeof n ? f(i, n) : !n.range && [{
                range: n
            }, t];
            return r && (n = r[0],
            t = r[1]),
            n.range(i[0], ci(+i[1] + 1), 1 > t ? 1 : t)
        }
        ,
        u.tickFormat = function() {
            return r
        }
        ,
        u.copy = function() {
            return vh(t.copy(), i, r)
        }
        ,
        ih(u, t)
    }
    function ci(n) {
        return new Date(n)
    }
    function frt(n) {
        return JSON.parse(n.responseText)
    }
    function ert(n) {
        var t = nt.createRange();
        return t.selectNode(nt.body),
        t.createContextualFragment(n.responseText)
    }
    var n = {
        version: "3.4.3"
    }, yh, u, dt, iu, ph, e, df, ut, kh, gf, or, ww, ne, ie, nc, kw, re, ue, ru, uu, ee, oe, se, he, lt, ic, tb, ft, rc, fu, uc, fc, ce, gt, b, sc, vi, hc, cc, lc, ac, vc, ou, cr, yi, lr, yc, su, pc, wc, hu, cu, ob, bc, sb, hb, cb, lb, kc, ab, ui, vb, be, dc, gc, kb, rl, nk;
    Date.now || (Date.now = function() {
        return +new Date
    }
    );
    var vw = [].slice
      , bt = function(n) {
        return vw.call(n)
    }
      , nt = document
      , kt = nt.documentElement
      , v = window;
    try {
        bt(kt.childNodes)[0].nodeType
    } catch (fut) {
        bt = function(n) {
            for (var t = n.length, i = new Array(t); t--; )
                i[t] = n[t];
            return i
        }
    }
    try {
        nt.createElement("div").style.setProperty("opacity", 0, "")
    } catch (eut) {
        var bf = v.Element.prototype
          , ort = bf.setAttribute
          , srt = bf.setAttributeNS
          , yw = v.CSSStyleDeclaration.prototype
          , hrt = yw.setProperty;
        bf.setAttribute = function(n, t) {
            ort.call(this, n, t + "")
        }
        ;
        bf.setAttributeNS = function(n, t, i) {
            srt.call(this, n, t, i + "")
        }
        ;
        yw.setProperty = function(n, t, i) {
            hrt.call(this, n, t + "", i)
        }
    }
    n.ascending = function(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }
    ;
    n.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    ;
    n.min = function(n, t) {
        var i, u, r = -1, f = n.length;
        if (1 === arguments.length) {
            for (; ++r < f && !(null  != (i = n[r]) && i >= i); )
                i = void 0;
            for (; ++r < f; )
                null  != (u = n[r]) && i > u && (i = u)
        } else {
            for (; ++r < f && !(null  != (i = t.call(n, n[r], r)) && i >= i); )
                i = void 0;
            for (; ++r < f; )
                null  != (u = t.call(n, n[r], r)) && i > u && (i = u)
        }
        return i
    }
    ;
    n.max = function(n, t) {
        var i, u, r = -1, f = n.length;
        if (1 === arguments.length) {
            for (; ++r < f && !(null  != (i = n[r]) && i >= i); )
                i = void 0;
            for (; ++r < f; )
                null  != (u = n[r]) && u > i && (i = u)
        } else {
            for (; ++r < f && !(null  != (i = t.call(n, n[r], r)) && i >= i); )
                i = void 0;
            for (; ++r < f; )
                null  != (u = t.call(n, n[r], r)) && u > i && (i = u)
        }
        return i
    }
    ;
    n.extent = function(n, t) {
        var i, r, f, u = -1, e = n.length;
        if (1 === arguments.length) {
            for (; ++u < e && !(null  != (i = f = n[u]) && i >= i); )
                i = f = void 0;
            for (; ++u < e; )
                null  != (r = n[u]) && (i > r && (i = r),
                r > f && (f = r))
        } else {
            for (; ++u < e && !(null  != (i = f = t.call(n, n[u], u)) && i >= i); )
                i = void 0;
            for (; ++u < e; )
                null  != (r = t.call(n, n[u], u)) && (i > r && (i = r),
                r > f && (f = r))
        }
        return [i, f]
    }
    ;
    n.sum = function(n, t) {
        var r, u = 0, f = n.length, i = -1;
        if (1 === arguments.length)
            for (; ++i < f; )
                isNaN(r = +n[i]) || (u += r);
        else
            for (; ++i < f; )
                isNaN(r = +t.call(n, n[i], i)) || (u += r);
        return u
    }
    ;
    n.mean = function(n, t) {
        var u, e = n.length, i = 0, r = -1, f = 0;
        if (1 === arguments.length)
            for (; ++r < e; )
                no(u = n[r]) && (i += (u - i) / ++f);
        else
            for (; ++r < e; )
                no(u = t.call(n, n[r], r)) && (i += (u - i) / ++f);
        if (f)
            return i
    }
    ;
    n.quantile = function(n, t) {
        var u = (n.length - 1) * t + 1
          , i = Math.floor(u)
          , r = +n[i - 1]
          , f = u - i;
        return f ? r + f * (n[i] - r) : r
    }
    ;
    n.median = function(t, i) {
        return arguments.length > 1 && (t = t.map(i)),
        t = t.filter(no),
        t.length ? n.quantile(t.sort(n.ascending), .5) : void 0
    }
    ;
    n.bisector = function(n) {
        return {
            left: function(t, i, r, u) {
                for (arguments.length < 3 && (r = 0),
                arguments.length < 4 && (u = t.length); u > r; ) {
                    var f = r + u >>> 1;
                    n.call(t, t[f], f) < i ? r = f + 1 : u = f
                }
                return r
            },
            right: function(t, i, r, u) {
                for (arguments.length < 3 && (r = 0),
                arguments.length < 4 && (u = t.length); u > r; ) {
                    var f = r + u >>> 1;
                    i < n.call(t, t[f], f) ? u = f : r = f + 1
                }
                return r
            }
        }
    }
    ;
    yh = n.bisector(function(n) {
        return n
    }
    );
    n.bisectLeft = yh.left;
    n.bisect = n.bisectRight = yh.right;
    n.shuffle = function(n) {
        for (var r, i, t = n.length; t; )
            i = 0 | Math.random() * t--,
            r = n[t],
            n[t] = n[i],
            n[i] = r;
        return n
    }
    ;
    n.permute = function(n, t) {
        for (var i = t.length, r = new Array(i); i--; )
            r[i] = n[t[i]];
        return r
    }
    ;
    n.pairs = function(n) {
        for (var f, t = 0, i = n.length - 1, r = n[0], u = new Array(0 > i ? 0 : i); i > t; )
            u[t] = [f = r, r = n[++t]];
        return u
    }
    ;
    n.zip = function() {
        var r, t, e;
        if (!(r = arguments.length))
            return [];
        for (var i = -1, u = n.min(arguments, tk), f = new Array(u); ++i < u; )
            for (t = -1,
            e = f[i] = new Array(r); ++t < r; )
                e[t] = arguments[t][i];
        return f
    }
    ;
    n.transpose = function(t) {
        return n.zip.apply(n, t)
    }
    ;
    n.keys = function(n) {
        var t = [];
        for (var i in n)
            t.push(i);
        return t
    }
    ;
    n.values = function(n) {
        var t = [];
        for (var i in n)
            t.push(n[i]);
        return t
    }
    ;
    n.entries = function(n) {
        var t = [];
        for (var i in n)
            t.push({
                key: i,
                value: n[i]
            });
        return t
    }
    ;
    n.merge = function(n) {
        for (var t, i, r, u = n.length, e = -1, f = 0; ++e < u; )
            f += n[e].length;
        for (i = new Array(f); --u >= 0; )
            for (r = n[u],
            t = r.length; --t >= 0; )
                i[--f] = r[t];
        return i
    }
    ;
    u = Math.abs;
    n.range = function(n, t, i) {
        if (arguments.length < 3 && (i = 1,
        arguments.length < 2 && (t = n,
        n = 0)),
        1 / 0 == (t - n) / i)
            throw new Error("infinite range");
        var f, e = [], r = ik(u(i)), o = -1;
        if (n *= r,
        t *= r,
        i *= r,
        0 > i)
            for (; (f = n + i * ++o) > t; )
                e.push(f / r);
        else
            for (; (f = n + i * ++o) < t; )
                e.push(f / r);
        return e
    }
    ;
    n.map = function(n) {
        var t = new rt, i;
        if (n instanceof rt)
            n.forEach(function(n, i) {
                t.set(n, i)
            }
            );
        else
            for (i in n)
                t.set(i, n[i]);
        return t
    }
    ;
    ul(rt, {
        has: fl,
        get: function(n) {
            return this[dt + n]
        },
        set: function(n, t) {
            return this[dt + n] = t
        },
        remove: rk,
        keys: el,
        values: function() {
            var n = [];
            return this.forEach(function(t, i) {
                n.push(i)
            }
            ),
            n
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, i) {
                n.push({
                    key: t,
                    value: i
                })
            }
            ),
            n
        },
        size: ol,
        empty: sl,
        forEach: function(n) {
            for (var t in this)
                t.charCodeAt(0) === iu && n.call(this, t.substring(1), this[t])
        }
    });
    dt = "\x00";
    iu = dt.charCodeAt(0);
    n.nest = function() {
        function r(n, e, o) {
            if (o >= i.length)
                return f ? f.call(t, e) : u ? e.sort(u) : e;
            for (var l, s, h, a, v = -1, y = e.length, p = i[o++], c = new rt; ++v < y; )
                (a = c.get(l = p(s = e[v]))) ? a.push(s) : c.set(l, [s]);
            return n ? (s = n(),
            h = function(t, i) {
                s.set(t, r(n, i, o))
            }
            ) : (s = {},
            h = function(t, i) {
                s[t] = r(n, i, o)
            }
            ),
            c.forEach(h),
            s
        }
        function e(n, t) {
            if (t >= i.length)
                return n;
            var r = []
              , u = o[t++];
            return n.forEach(function(n, i) {
                r.push({
                    key: n,
                    values: e(i, t)
                })
            }
            ),
            u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }
            ) : r
        }
        var u, f, t = {}, i = [], o = [];
        return t.map = function(n, t) {
            return r(t, n, 0)
        }
        ,
        t.entries = function(t) {
            return e(r(n.map, t, 0), 0)
        }
        ,
        t.key = function(n) {
            return i.push(n),
            t
        }
        ,
        t.sortKeys = function(n) {
            return o[i.length - 1] = n,
            t
        }
        ,
        t.sortValues = function(n) {
            return u = n,
            t
        }
        ,
        t.rollup = function(n) {
            return f = n,
            t
        }
        ,
        t
    }
    ;
    n.set = function(n) {
        var i = new to, t, r;
        if (n)
            for (t = 0,
            r = n.length; r > t; ++t)
                i.add(n[t]);
        return i
    }
    ;
    ul(to, {
        has: fl,
        add: function(n) {
            return this[dt + n] = !0,
            n
        },
        remove: function(n) {
            return n = dt + n,
            n in this && delete this[n]
        },
        values: el,
        size: ol,
        empty: sl,
        forEach: function(n) {
            for (var t in this)
                t.charCodeAt(0) === iu && n.call(this, t.substring(1))
        }
    });
    n.behavior = {};
    n.rebind = function(n, t) {
        for (var i, r = 1, u = arguments.length; ++r < u; )
            n[i = arguments[r]] = uk(n, t, t[i]);
        return n
    }
    ;
    ph = ["webkit", "ms", "moz", "Moz", "o", "O"];
    n.dispatch = function() {
        for (var n = new ro, t = -1, i = arguments.length; ++t < i; )
            n[arguments[t]] = hl(n);
        return n
    }
    ;
    ro.prototype.on = function(n, t) {
        var r = n.indexOf(".")
          , i = "";
        if (r >= 0 && (i = n.substring(r + 1),
        n = n.substring(0, r)),
        n)
            return arguments.length < 2 ? this[n].on(i) : this[n].on(i, t);
        if (2 === arguments.length) {
            if (null  == t)
                for (n in this)
                    this.hasOwnProperty(n) && this[n].on(i, null );
            return this
        }
    }
    ;
    n.event = null ;
    n.requote = function(n) {
        return n.replace(crt, "\\$&")
    }
    ;
    var crt = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
      , kf = {}.__proto__ ? function(n, t) {
        n.__proto__ = t
    }
     : function(n, t) {
        for (var i in t)
            n[i] = t[i]
    }
      , wh = function(n, t) {
        return t.querySelector(n)
    }
      , bh = function(n, t) {
        return t.querySelectorAll(n)
    }
      , lrt = kt[io(kt, "matchesSelector")]
      , pw = function(n, t) {
        return lrt.call(n, t)
    }
    ;
    "function" == typeof Sizzle && (wh = function(n, t) {
        return Sizzle(n, t)[0] || null
    }
    ,
    bh = function(n, t) {
        return Sizzle.uniqueSort(Sizzle(n, t))
    }
    ,
    pw = Sizzle.matchesSelector);
    n.selection = function() {
        return kh
    }
    ;
    e = n.selection.prototype = [];
    e.select = function(n) {
        var i, f, e, t, o = [], r, s, u, h;
        for (n = fo(n),
        r = -1,
        s = this.length; ++r < s; )
            for (o.push(i = []),
            i.parentNode = (e = this[r]).parentNode,
            u = -1,
            h = e.length; ++u < h; )
                (t = e[u]) ? (i.push(f = n.call(t, t.__data__, u, r)),
                f && "__data__" in t && (f.__data__ = t.__data__)) : i.push(null );
        return yt(o)
    }
    ;
    e.selectAll = function(n) {
        var u, t, f = [], i, e;
        for (n = ll(n),
        i = -1,
        e = this.length; ++i < e; )
            for (var o = this[i], r = -1, s = o.length; ++r < s; )
                (t = o[r]) && (f.push(u = bt(n.call(t, t.__data__, r, i))),
                u.parentNode = t);
        return yt(f)
    }
    ;
    df = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    n.ns = {
        prefix: df,
        qualify: function(n) {
            var t = n.indexOf(":")
              , i = n;
            return t >= 0 && (i = n.substring(0, t),
            n = n.substring(t + 1)),
            df.hasOwnProperty(i) ? {
                space: df[i],
                local: n
            } : n
        }
    };
    e.attr = function(t, i) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var r = this.node();
                return t = n.ns.qualify(t),
                t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
            }
            for (i in t)
                this.each(al(i, t[i]));
            return this
        }
        return this.each(al(t, i))
    }
    ;
    e.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var r = this.node()
                  , u = (n = pl(n)).length
                  , i = -1;
                if (t = r.classList) {
                    for (; ++i < u; )
                        if (!t.contains(n[i]))
                            return !1
                } else
                    for (t = r.getAttribute("class"); ++i < u; )
                        if (!yl(n[i]).test(t))
                            return !1;
                return !0
            }
            for (t in n)
                this.each(wl(t, n[t]));
            return this
        }
        return this.each(wl(n, t))
    }
    ;
    e.style = function(n, t, i) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (i in n)
                    this.each(bl(i, n[i], t));
                return this
            }
            if (2 > r)
                return v.getComputedStyle(this.node(), null ).getPropertyValue(n);
            i = ""
        }
        return this.each(bl(n, t, i))
    }
    ;
    e.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n)
                return this.node()[n];
            for (t in n)
                this.each(kl(t, n[t]));
            return this
        }
        return this.each(kl(n, t))
    }
    ;
    e.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null  == t ? "" : t
        }
         : null  == n ? function() {
            this.textContent = ""
        }
         : function() {
            this.textContent = n
        }
        ) : this.node().textContent
    }
    ;
    e.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null  == t ? "" : t
        }
         : null  == n ? function() {
            this.innerHTML = ""
        }
         : function() {
            this.innerHTML = n
        }
        ) : this.node().innerHTML
    }
    ;
    e.append = function(n) {
        return n = dl(n),
        this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        }
        )
    }
    ;
    e.insert = function(n, t) {
        return n = dl(n),
        t = fo(t),
        this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null )
        }
        )
    }
    ;
    e.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        }
        )
    }
    ;
    e.data = function(n, t) {
        function e(n, i) {
            var r, u, o, l = n.length, a = i.length, k = Math.min(l, a), v = new Array(a), c = new Array(a), y = new Array(l);
            if (t) {
                var e, p = new rt, w = new rt, b = [];
                for (r = -1; ++r < l; )
                    e = t.call(u = n[r], u.__data__, r),
                    p.has(e) ? y[r] = u : p.set(e, u),
                    b.push(e);
                for (r = -1; ++r < a; )
                    e = t.call(i, o = i[r], r),
                    (u = p.get(e)) ? (v[r] = u,
                    u.__data__ = o) : w.has(e) || (c[r] = eo(o)),
                    w.set(e, o),
                    p.remove(e);
                for (r = -1; ++r < l; )
                    p.has(b[r]) && (y[r] = n[r])
            } else {
                for (r = -1; ++r < k; )
                    u = n[r],
                    o = i[r],
                    u ? (u.__data__ = o,
                    v[r] = u) : c[r] = eo(o);
                for (; a > r; ++r)
                    c[r] = eo(i[r]);
                for (; l > r; ++r)
                    y[r] = n[r]
            }
            c.update = v;
            c.parentNode = v.parentNode = y.parentNode = n.parentNode;
            s.push(c);
            f.push(v);
            h.push(y)
        }
        var r, o, i = -1, u = this.length;
        if (!arguments.length) {
            for (n = new Array(u = (r = this[0]).length); ++i < u; )
                (o = r[i]) && (n[i] = o.__data__);
            return n
        }
        var s = na([])
          , f = yt([])
          , h = yt([]);
        if ("function" == typeof n)
            for (; ++i < u; )
                e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < u; )
                e(r = this[i], n);
        return f.enter = function() {
            return s
        }
        ,
        f.exit = function() {
            return h
        }
        ,
        f
    }
    ;
    e.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }
    ;
    e.filter = function(n) {
        var u, f, r, e = [], t, o, i, s;
        for ("function" != typeof n && (n = gl(n)),
        t = 0,
        o = this.length; o > t; t++)
            for (e.push(u = []),
            u.parentNode = (f = this[t]).parentNode,
            i = 0,
            s = f.length; s > i; i++)
                (r = f[i]) && n.call(r, r.__data__, i, t) && u.push(r);
        return yt(e)
    }
    ;
    e.order = function() {
        for (var i = -1, f = this.length; ++i < f; )
            for (var t, r = this[i], u = r.length - 1, n = r[u]; --u >= 0; )
                (t = r[u]) && (n && n !== t.nextSibling && n.parentNode.insertBefore(t, n),
                n = t);
        return this
    }
    ;
    e.sort = function(n) {
        n = ek.apply(this, arguments);
        for (var t = -1, i = this.length; ++t < i; )
            this[t].sort(n);
        return this.order()
    }
    ;
    e.each = function(n) {
        return pt(this, function(t, i, r) {
            n.call(t, t.__data__, i, r)
        }
        )
    }
    ;
    e.call = function(n) {
        var t = bt(arguments);
        return n.apply(t[0] = this, t),
        this
    }
    ;
    e.empty = function() {
        return !this.node()
    }
    ;
    e.node = function() {
        for (var i, n = 0, r = this.length; r > n; n++)
            for (var u = this[n], t = 0, f = u.length; f > t; t++)
                if (i = u[t],
                i)
                    return i;
        return null
    }
    ;
    e.size = function() {
        var n = 0;
        return this.each(function() {
            ++n
        }
        ),
        n
    }
    ;
    ut = [];
    n.selection.enter = na;
    n.selection.enter.prototype = ut;
    ut.append = e.append;
    ut.empty = e.empty;
    ut.node = e.node;
    ut.call = e.call;
    ut.size = e.size;
    ut.select = function(n) {
        for (var i, h, r, e, o, t, u, s = [], f = -1, c = this.length; ++f < c; )
            for (o = (t = this[f]).update,
            s.push(r = []),
            r.parentNode = t.parentNode,
            i = -1,
            h = t.length; ++i < h; )
                (u = t[i]) ? (r.push(o[i] = e = n.call(t.parentNode, u.__data__, i, f)),
                e.__data__ = u.__data__) : r.push(null );
        return yt(s)
    }
    ;
    ut.insert = function(n, t) {
        return arguments.length < 2 && (t = ok(this)),
        e.insert.call(this, n, t)
    }
    ;
    e.transition = function() {
        for (var i, n, r = pi || ++bb, u = [], o = ke || {
            time: Date.now(),
            ease: rn,
            delay: 0,
            duration: 250
        }, f = -1, s = this.length; ++f < s; ) {
            u.push(i = []);
            for (var e = this[f], t = -1, h = e.length; ++t < h; )
                (n = e[t]) && wf(n, t, r, o),
                i.push(n)
        }
        return tu(u, r)
    }
    ;
    e.interrupt = function() {
        return this.each(lu)
    }
    ;
    n.select = function(n) {
        var t = ["string" == typeof n ? wh(n, nt) : n];
        return t.parentNode = kt,
        yt([t])
    }
    ;
    n.selectAll = function(n) {
        var t = bt("string" == typeof n ? bh(n, nt) : n);
        return t.parentNode = kt,
        yt([t])
    }
    ;
    kh = n.select(kt);
    e.on = function(n, t, i) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (i in n)
                    this.each(ta(i, n[i], t));
                return this
            }
            if (2 > r)
                return (r = this.node()["__on" + n]) && r._;
            i = !1
        }
        return this.each(ta(n, t, i))
    }
    ;
    gf = n.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    gf.forEach(function(n) {
        "on" + n in nt && gf.remove(n)
    }
    );
    or = "onselectstart" in nt ? null  : io(kt.style, "userSelect");
    ww = 0;
    n.mouse = function(n) {
        return ra(n, cl())
    }
    ;
    ne = /WebKit/.test(v.navigator.userAgent) ? -1 : 0;
    n.touches = function(n, t) {
        return arguments.length < 2 && (t = cl().touches),
        t ? bt(t).map(function(t) {
            var i = ra(n, t);
            return i.identifier = t.identifier,
            i
        }
        ) : []
    }
    ;
    n.behavior.drag = function() {
        function t() {
            this.on("mousedown.drag", o).on("touchstart.drag", s)
        }
        function f() {
            return n.event.changedTouches[0].identifier
        }
        function e(t, i) {
            return n.touches(t).filter(function(n) {
                return n.identifier === i
            }
            )[0]
        }
        function r(t, r, f, e) {
            return function() {
                function w() {
                    var n = r(y, h)
                      , t = n[0] - s[0]
                      , i = n[1] - s[1];
                    p |= t | i;
                    s = n;
                    a({
                        type: "drag",
                        x: n[0] + o[0],
                        y: n[1] + o[1],
                        dx: t,
                        dy: i
                    })
                }
                function b() {
                    d.on(f + "." + c, null ).on(e + "." + c, null );
                    g(p && n.event.target === k);
                    a({
                        type: "dragend"
                    })
                }
                var o, l = this, y = l.parentNode, a = u.of(l, arguments), k = n.event.target, h = t(), c = null  == h ? "drag" : "drag-" + h, s = r(y, h), p = 0, d = n.select(v).on(f + "." + c, w).on(e + "." + c, b), g = au();
                i ? (o = i.apply(l, arguments),
                o = [o.x - s[0], o.y - s[1]]) : o = [0, 0];
                a({
                    type: "dragstart"
                })
            }
        }
        var u = uo(t, "drag", "dragstart", "dragend")
          , i = null
          , o = r(c, n.mouse, "mousemove", "mouseup")
          , s = r(f, e, "touchmove", "touchend");
        return t.origin = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        n.rebind(t, u, "on")
    }
    ;
    var f = Math.PI
      , d = 2 * f
      , w = f / 2
      , t = 1e-6
      , dh = t * t
      , r = f / 180
      , s = 180 / f
      , te = Math.SQRT2
      , gh = 2
      , bw = 4;
    n.interpolateZoom = function(n, t) {
        function v(n) {
            var t = n * p, r, h;
            return y ? (r = ea(u),
            h = i / (gh * c) * (r * ck(te * t + u) - hk(u)),
            [o + h * f, s + h * e, i * r / ea(te * t + u)]) : [o + n * f, s + n * e, i * Math.exp(te * t)]
        }
        var o = n[0]
          , s = n[1]
          , i = n[2]
          , w = t[0]
          , b = t[1]
          , r = t[2]
          , f = w - o
          , e = b - s
          , h = f * f + e * e
          , c = Math.sqrt(h)
          , l = (r * r - i * i + bw * h) / (2 * i * gh * c)
          , a = (r * r - i * i - bw * h) / (2 * r * gh * c)
          , u = Math.log(Math.sqrt(l * l + 1) - l)
          , k = Math.log(Math.sqrt(a * a + 1) - a)
          , y = k - u
          , p = (y || Math.log(r / i)) / te;
        return v.duration = 1e3 * p,
        v
    }
    ;
    n.behavior.zoom = function() {
        function i(n) {
            n.on(tt, ut).on(kw + ".zoom", ht).on(it, et).on("dblclick.zoom", ct).on(rt, ft)
        }
        function s(n) {
            return [(n[0] - t.x) / t.k, (n[1] - t.y) / t.k]
        }
        function st(n) {
            return [n[0] * t.k + t.x, n[1] * t.k + t.y]
        }
        function h(n) {
            t.k = Math.max(w[0], Math.min(w[1], n))
        }
        function o(n, i) {
            i = st(i);
            t.x += n[0] - i[0];
            t.y += n[1] - i[1]
        }
        function b() {
            a && a.domain(g.range().map(function(n) {
                return (n - t.x) / t.k
            }
            ).map(g.invert));
            y && y.domain(nt.range().map(function(n) {
                return (n - t.y) / t.k
            }
            ).map(nt.invert))
        }
        function u(n) {
            n({
                type: "zoomstart"
            })
        }
        function r(n) {
            b();
            n({
                type: "zoom",
                scale: t.k,
                translate: [t.x, t.y]
            })
        }
        function f(n) {
            n({
                type: "zoomend"
            })
        }
        function ut() {
            function c() {
                h = 1;
                o(n.mouse(t), p);
                r(i)
            }
            function l() {
                y.on(it, v === t ? et : null ).on(ot, null );
                w(h && n.event.target === a);
                f(i)
            }
            var t = this
              , i = e.of(t, arguments)
              , a = n.event.target
              , h = 0
              , y = n.select(v).on(it, c).on(ot, l)
              , p = s(n.mouse(t))
              , w = au();
            lu.call(t);
            u(i)
        }
        function ft() {
            function y() {
                var r = n.touches(c);
                return w = t.k,
                r.forEach(function(n) {
                    n.identifier in i && (i[n.identifier] = s(n))
                }
                ),
                r
            }
            function p() {
                for (var u, s, f, v, c = n.event.changedTouches, e = 0, k = c.length; k > e; ++e)
                    i[c[e].identifier] = null ;
                if (u = y(),
                s = Date.now(),
                1 === u.length)
                    500 > s - d && (f = u[0],
                    v = i[f.identifier],
                    h(2 * t.k),
                    o(f, v),
                    vt(),
                    r(l)),
                    d = s;
                else if (u.length > 1) {
                    var f = u[0]
                      , p = u[1]
                      , w = f[0] - p[0]
                      , b = f[1] - p[1];
                    a = w * w + b * b
                }
            }
            function nt() {
                for (var s, p, t, f, u, e, y = n.touches(c), v = 0, b = y.length; b > v; ++v,
                e = null )
                    if (u = y[v],
                    e = i[u.identifier]) {
                        if (f)
                            break;
                        t = u;
                        f = e
                    }
                e && (s = (s = u[0] - t[0]) * s + (s = u[1] - t[1]) * s,
                p = a && Math.sqrt(s / a),
                t = [(t[0] + u[0]) / 2, (t[1] + u[1]) / 2],
                f = [(f[0] + e[0]) / 2, (f[1] + e[1]) / 2],
                h(p * w));
                d = null ;
                o(t, f);
                r(l)
            }
            function it() {
                var e;
                if (n.event.touches.length) {
                    for (var r = n.event.changedTouches, t = 0, u = r.length; u > t; ++t)
                        delete i[r[t].identifier];
                    for (e in i)
                        return void y()
                }
                et.on(k, null ).on(g, null );
                ot.on(tt, ut).on(rt, ft);
                st();
                f(l)
            }
            var w, c = this, l = e.of(c, arguments), i = {}, a = 0, b = n.event.changedTouches[0].identifier, k = "touchmove.zoom-" + b, g = "touchend.zoom-" + b, et = n.select(v).on(k, nt).on(g, it), ot = n.select(c).on(tt, null ).on(rt, p), st = au();
            lu.call(c);
            p();
            u(l)
        }
        function ht() {
            var i = e.of(this, arguments), a;
            l ? clearTimeout(l) : (lu.call(this),
            u(i));
            l = setTimeout(function() {
                l = null ;
                f(i)
            }
            , 50);
            vt();
            a = k || n.mouse(this);
            c || (c = s(a));
            h(Math.pow(2, .002 * ie()) * t.k);
            o(a, c);
            r(i)
        }
        function et() {
            c = null
        }
        function ct() {
            var i = e.of(this, arguments)
              , c = n.mouse(this)
              , a = s(c)
              , l = Math.log(t.k) / Math.LN2;
            u(i);
            h(Math.pow(2, n.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1));
            o(c, a);
            r(i);
            f(i)
        }
        var c, k, l, d, g, a, nt, y, t = {
            x: 0,
            y: 0,
            k: 1
        }, p = [960, 500], w = nc, tt = "mousedown.zoom", it = "mousemove.zoom", ot = "mouseup.zoom", rt = "touchstart.zoom", e = uo(i, "zoomstart", "zoom", "zoomend");
        return i.event = function(i) {
            i.each(function() {
                var i = e.of(this, arguments)
                  , o = t;
                pi ? n.select(this).transition().each("start.zoom", function() {
                    t = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    };
                    u(i)
                }
                ).tween("zoom:zoom", function() {
                    var u = p[0]
                      , s = p[1]
                      , f = u / 2
                      , e = s / 2
                      , h = n.interpolateZoom([(f - t.x) / t.k, (e - t.y) / t.k, u / t.k], [(f - o.x) / o.k, (e - o.y) / o.k, u / o.k]);
                    return function(n) {
                        var o = h(n)
                          , s = u / o[2];
                        this.__chart__ = t = {
                            x: f - o[0] * s,
                            y: e - o[1] * s,
                            k: s
                        };
                        r(i)
                    }
                }
                ).each("end.zoom", function() {
                    f(i)
                }
                ) : (this.__chart__ = t,
                u(i),
                r(i),
                f(i))
            }
            )
        }
        ,
        i.translate = function(n) {
            return arguments.length ? (t = {
                x: +n[0],
                y: +n[1],
                k: t.k
            },
            b(),
            i) : [t.x, t.y]
        }
        ,
        i.scale = function(n) {
            return arguments.length ? (t = {
                x: t.x,
                y: t.y,
                k: +n
            },
            b(),
            i) : t.k
        }
        ,
        i.scaleExtent = function(n) {
            return arguments.length ? (w = null  == n ? nc : [+n[0], +n[1]],
            i) : w
        }
        ,
        i.center = function(n) {
            return arguments.length ? (k = n && [+n[0], +n[1]],
            i) : k
        }
        ,
        i.size = function(n) {
            return arguments.length ? (p = n && [+n[0], +n[1]],
            i) : p
        }
        ,
        i.x = function(n) {
            return arguments.length ? (a = n,
            g = n.copy(),
            t = {
                x: 0,
                y: 0,
                k: 1
            },
            i) : a
        }
        ,
        i.y = function(n) {
            return arguments.length ? (y = n,
            nt = n.copy(),
            t = {
                x: 0,
                y: 0,
                k: 1
            },
            i) : y
        }
        ,
        n.rebind(i, e, "on")
    }
    ;
    nc = [0, 1 / 0];
    kw = "onwheel" in nt ? (ie = function() {
        return -n.event.deltaY * (n.event.deltaMode ? 120 : 1)
    }
    ,
    "wheel") : "onmousewheel" in nt ? (ie = function() {
        return n.event.wheelDelta
    }
    ,
    "mousewheel") : (ie = function() {
        return -n.event.detail
    }
    ,
    "MozMousePixelScroll");
    bi.prototype.toString = function() {
        return this.rgb() + ""
    }
    ;
    n.hsl = function(n, t, i) {
        return 1 === arguments.length ? n instanceof so ? ki(n.h, n.s, n.l) : la("" + n, aa, ki) : ki(+n, +t, +i)
    }
    ;
    re = so.prototype = new bi;
    re.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        ki(this.h, this.s, this.l / n)
    }
    ;
    re.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        ki(this.h, this.s, n * this.l)
    }
    ;
    re.rgb = function() {
        return ho(this.h, this.s, this.l)
    }
    ;
    n.hcl = function(t, i, r) {
        return 1 === arguments.length ? t instanceof vu ? di(t.h, t.c, t.l) : t instanceof yu ? ha(t.l, t.a, t.b) : ha((t = va((t = n.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : di(+t, +i, +r)
    }
    ;
    ue = vu.prototype = new bi;
    ue.brighter = function(n) {
        return di(this.h, this.c, Math.min(100, this.l + fe * (arguments.length ? n : 1)))
    }
    ;
    ue.darker = function(n) {
        return di(this.h, this.c, Math.max(0, this.l - fe * (arguments.length ? n : 1)))
    }
    ;
    ue.rgb = function() {
        return co(this.h, this.c, this.l).rgb()
    }
    ;
    n.lab = function(t, i, r) {
        return 1 === arguments.length ? t instanceof yu ? gi(t.l, t.a, t.b) : t instanceof vu ? co(t.l, t.c, t.h) : va((t = n.rgb(t)).r, t.g, t.b) : gi(+t, +i, +r)
    }
    ;
    var fe = 18
      , dw = .95047
      , gw = 1
      , nb = 1.08883
      , tc = yu.prototype = new bi;
    tc.brighter = function(n) {
        return gi(Math.min(100, this.l + fe * (arguments.length ? n : 1)), this.a, this.b)
    }
    ;
    tc.darker = function(n) {
        return gi(Math.max(0, this.l - fe * (arguments.length ? n : 1)), this.a, this.b)
    }
    ;
    tc.rgb = function() {
        return sa(this.l, this.a, this.b)
    }
    ;
    n.rgb = function(n, t, i) {
        return 1 === arguments.length ? n instanceof yo ? ot(n.r, n.g, n.b) : la("" + n, ot, ho) : ot(~~n, ~~t, ~~i)
    }
    ;
    ru = yo.prototype = new bi;
    ru.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var i = this.r
          , r = this.g
          , u = this.b
          , t = 30;
        return i || r || u ? (i && t > i && (i = t),
        r && t > r && (r = t),
        u && t > u && (u = t),
        ot(Math.min(255, ~~(i / n)), Math.min(255, ~~(r / n)), Math.min(255, ~~(u / n)))) : ot(t, t, t)
    }
    ;
    ru.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        ot(~~(n * this.r), ~~(n * this.g), ~~(n * this.b))
    }
    ;
    ru.hsl = function() {
        return aa(this.r, this.g, this.b)
    }
    ;
    ru.toString = function() {
        return "#" + nr(this.r) + nr(this.g) + nr(this.b)
    }
    ;
    uu = n.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    uu.forEach(function(n, t) {
        uu.set(n, ca(t))
    }
    );
    n.functor = o;
    n.xhr = bo(a);
    n.dsv = function(n, t) {
        function i(n, i, r) {
            arguments.length < 3 && (r = i,
            i = null );
            var e = wu(n, t, null  == i ? u : f(i), r);
            return e.row = function(n) {
                return arguments.length ? e.response(null  == (i = n) ? u : f(n)) : i
            }
            ,
            e
        }
        function u(n) {
            return i.parse(n.responseText)
        }
        function f(n) {
            return function(t) {
                return i.parse(t.responseText, n)
            }
        }
        function e(t) {
            return t.map(r).join(n)
        }
        function r(n) {
            return o.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var o = new RegExp('["' + n + "\n]")
          , s = n.charCodeAt(0);
        return i.parse = function(n, t) {
            var r;
            return i.parseRows(n, function(n, i) {
                if (r)
                    return r(n, i - 1);
                var u = new Function("d","return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }
                ).join(",") + "}");
                r = t ? function(n, i) {
                    return t(u(n), i)
                }
                 : u
            }
            )
        }
        ,
        i.parseRows = function(n, t) {
            function h() {
                var f, t, u, h;
                if (i >= o)
                    return e;
                if (r)
                    return r = !1,
                    c;
                if (f = i,
                34 === n.charCodeAt(f)) {
                    for (t = f; t++ < o; )
                        if (34 === n.charCodeAt(t)) {
                            if (34 !== n.charCodeAt(t + 1))
                                break;
                            ++t
                        }
                    return i = t + 2,
                    u = n.charCodeAt(t + 1),
                    13 === u ? (r = !0,
                    10 === n.charCodeAt(t + 2) && ++i) : 10 === u && (r = !0),
                    n.substring(f + 1, t).replace(/""/g, '"')
                }
                for (; o > i; ) {
                    if (u = n.charCodeAt(i++),
                    h = 1,
                    10 === u)
                        r = !0;
                    else if (13 === u)
                        r = !0,
                        10 === n.charCodeAt(i) && (++i,
                        ++h);
                    else if (u !== s)
                        continue;return n.substring(f, i - h)
                }
                return n.substring(f)
            }
            for (var f, u, r, c = {}, e = {}, l = [], o = n.length, i = 0, a = 0; (u = h()) !== e; ) {
                for (f = []; u !== c && u !== e; )
                    f.push(u),
                    u = h();
                (!t || (f = t(f, a++))) && l.push(f)
            }
            return l
        }
        ,
        i.format = function(t) {
            if (Array.isArray(t[0]))
                return i.formatRows(t);
            var f = new to
              , u = [];
            return t.forEach(function(n) {
                for (var t in n)
                    f.has(t) || u.push(f.add(t))
            }
            ),
            [u.map(r).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return r(t[n])
                }
                ).join(n)
            }
            )).join("\n")
        }
        ,
        i.formatRows = function(n) {
            return n.map(e).join("\n")
        }
        ,
        i
    }
    ;
    n.csv = n.dsv(",", "text/csv");
    n.tsv = n.dsv("\t", "text/tab-separated-values");
    ic = v[io(v, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17)
    }
    ;
    n.timer = function(n, t, i) {
        var u = arguments.length, f, r;
        2 > u && (t = 0);
        3 > u && (i = Date.now());
        f = i + t;
        r = {
            c: n,
            t: f,
            f: !1,
            n: null
        };
        oe ? oe.n = r : ee = r;
        oe = r;
        se || (he = clearTimeout(he),
        se = 1,
        ic(ko))
    }
    ;
    n.timer.flush = function() {
        ya();
        pa()
    }
    ;
    n.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    }
    ;
    tb = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(ak);
    n.formatPrefix = function(t, i) {
        var r = 0;
        return t && (0 > t && (t *= -1),
        i && (t = n.round(t, go(t, i))),
        r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10),
        r = Math.max(-24, Math.min(24, 3 * Math.floor((0 >= r ? r + 1 : r - 1) / 3)))),
        tb[8 + r / 3]
    }
    ;
    var ib = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
      , art = n.map({
        b: function(n) {
            return n.toString(2)
        },
        c: function(n) {
            return String.fromCharCode(n)
        },
        o: function(n) {
            return n.toString(8)
        },
        x: function(n) {
            return n.toString(16)
        },
        X: function(n) {
            return n.toString(16).toUpperCase()
        },
        g: function(n, t) {
            return n.toPrecision(t)
        },
        e: function(n, t) {
            return n.toExponential(t)
        },
        f: function(n, t) {
            return n.toFixed(t)
        },
        r: function(t, i) {
            return (t = n.round(t, go(t, i))).toFixed(Math.max(0, Math.min(20, go(t * (1 + 1e-15), i))))
        }
    })
      , i = n.time = {}
      , y = Date;
    st.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            ft.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            ft.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            ft.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            ft.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            ft.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            ft.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            ft.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            ft.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            ft.setTime.apply(this._, arguments)
        }
    };
    ft = Date.prototype;
    i.year = ei(function(n) {
        return n = i.day(n),
        n.setMonth(0, 1),
        n
    }
    , function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }
    , function(n) {
        return n.getFullYear()
    }
    );
    i.years = i.year.range;
    i.years.utc = i.year.utc.range;
    i.day = ei(function(n) {
        var t = new y(2e3,0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
        t
    }
    , function(n, t) {
        n.setDate(n.getDate() + t)
    }
    , function(n) {
        return n.getDate() - 1
    }
    );
    i.days = i.day.range;
    i.days.utc = i.day.utc.range;
    i.dayOfYear = function(n) {
        var t = i.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }
    ;
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var r = i[n] = ei(function(n) {
            return (n = i.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7),
            n
        }
        , function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }
        , function(n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7) - (r !== t)
        }
        );
        i[n + "s"] = r.range;
        i[n + "s"].utc = r.utc.range;
        i[n + "OfYear"] = function(n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7)
        }
    }
    );
    i.week = i.sunday;
    i.weeks = i.sunday.range;
    i.weeks.utc = i.sunday.utc.range;
    i.weekOfYear = i.sundayOfYear;
    var rb = {
        "-": "",
        _: " ",
        0: "0"
    }
      , h = /^\s*\d+/
      , ub = /^%/;
    n.locale = function(n) {
        return {
            numberFormat: vk(n),
            timeFormat: pk(n)
        }
    }
    ;
    rc = n.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    n.format = rc.numberFormat;
    n.geo = {};
    ns.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            ka(n, this.t, fu);
            ka(fu.s, this.s, this);
            this.s ? this.t += fu.t : this.s = fu.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    fu = new ns;
    n.geo.stream = function(n, t) {
        n && uc.hasOwnProperty(n.type) ? uc[n.type](n, t) : gu(n, t)
    }
    ;
    uc = {
        Feature: function(n, t) {
            gu(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var i = n.features, r = -1, u = i.length; ++r < u; )
                gu(i[r].geometry, t)
        }
    };
    fc = {
        Sphere: function(n, t) {
            t.sphere()
        },
        Point: function(n, t) {
            n = n.coordinates;
            t.point(n[0], n[1], n[2])
        },
        MultiPoint: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u; )
                n = i[r],
                t.point(n[0], n[1], n[2])
        },
        LineString: function(n, t) {
            ts(n.coordinates, t, 0)
        },
        MultiLineString: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u; )
                ts(i[r], t, 0)
        },
        Polygon: function(n, t) {
            da(n.coordinates, t)
        },
        MultiPolygon: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u; )
                da(i[r], t)
        },
        GeometryCollection: function(n, t) {
            for (var i = n.geometries, r = -1, u = i.length; ++r < u; )
                gu(i[r], t)
        }
    };
    n.geo.area = function(t) {
        return ce = 0,
        n.geo.stream(t, b),
        ce
    }
    ;
    gt = new ns;
    b = {
        sphere: function() {
            ce += 4 * f
        },
        point: c,
        lineStart: c,
        lineEnd: c,
        polygonStart: function() {
            gt.reset();
            b.lineStart = cd
        },
        polygonEnd: function() {
            var n = 2 * gt;
            ce += 0 > n ? 4 * f + n : n;
            b.lineStart = b.lineEnd = b.point = c
        }
    };
    n.geo.bounds = function() {
        function w(n, t) {
            v.push(l = [i = n, f = n]);
            o > t && (o = t);
            t > h && (h = t)
        }
        function k(n, t) {
            var d = oi([n * r, t * r]), v;
            if (y) {
                var b = tr(y, d)
                  , nt = [b[1], -b[0], 0]
                  , c = tr(nt, b);
                rf(c);
                c = uf(c);
                var g = n - a
                  , p = g > 0 ? 1 : -1
                  , l = c[0] * s * p
                  , k = u(g) > 180;
                k ^ (l > p * a && p * n > l) ? (v = c[1] * s,
                v > h && (h = v)) : (l = (l + 360) % 360 - 180,
                k ^ (l > p * a && p * n > l)) ? (v = -c[1] * s,
                o > v && (o = v)) : (o > t && (o = t),
                t > h && (h = t));
                k ? a > n ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n) : f >= i ? (i > n && (i = n),
                n > f && (f = n)) : n > a ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n)
            } else
                w(n, t);
            y = d;
            a = n
        }
        function d() {
            c.point = k
        }
        function g() {
            l[0] = i;
            l[1] = f;
            c.point = w;
            y = null
        }
        function nt(n, t) {
            if (y) {
                var i = n - a;
                p += u(i) > 180 ? i + (i > 0 ? 360 : -360) : i
            } else
                it = n,
                rt = t;
            b.point(n, t);
            k(n, t)
        }
        function ut() {
            b.lineStart()
        }
        function ft() {
            nt(it, rt);
            b.lineEnd();
            u(p) > t && (i = -(f = 180));
            l[0] = i;
            l[1] = f;
            y = null
        }
        function e(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }
        function et(n, t) {
            return n[0] - t[0]
        }
        function tt(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var i, o, f, h, a, it, rt, y, p, v, l, c = {
            point: w,
            lineStart: d,
            lineEnd: g,
            polygonStart: function() {
                c.point = nt;
                c.lineStart = ut;
                c.lineEnd = ft;
                p = 0;
                b.polygonStart()
            },
            polygonEnd: function() {
                b.polygonEnd();
                c.point = w;
                c.lineStart = d;
                c.lineEnd = g;
                0 > gt ? (i = -(f = 180),
                o = -(h = 90)) : p > t ? h = 90 : -t > p && (o = -90);
                l[0] = i;
                l[1] = f
            }
        };
        return function(t) {
            var a;
            if (h = f = -(i = o = 1 / 0),
            v = [],
            n.geo.stream(t, c),
            a = v.length,
            a) {
                v.sort(et);
                for (var u, s = 1, r = v[0], y = [r]; a > s; ++s)
                    u = v[s],
                    tt(u[0], r) || tt(u[1], r) ? (e(r[0], u[1]) > e(r[0], r[1]) && (r[1] = u[1]),
                    e(u[0], r[1]) > e(r[0], r[1]) && (r[0] = u[0])) : y.push(r = u);
                for (var p, u, w = -1 / 0, a = y.length - 1, s = 0, r = y[a]; a >= s; r = u,
                ++s)
                    u = y[s],
                    (p = e(r[1], u[0])) > w && (w = p,
                    i = u[0],
                    f = r[1])
            }
            return v = l = null ,
            1 / 0 === i || 1 / 0 === o ? [[NaN, NaN], [NaN, NaN]] : [[i, o], [f, h]]
        }
    }
    ();
    n.geo.centroid = function(i) {
        eu = le = li = ai = at = ni = ti = et = sr = hr = ii = 0;
        n.geo.stream(i, tt);
        var r = sr
          , u = hr
          , f = ii
          , e = r * r + u * u + f * f;
        return dh > e && (r = ni,
        u = ti,
        f = et,
        t > le && (r = li,
        u = ai,
        f = at),
        e = r * r + u * u + f * f,
        dh > e) ? [NaN, NaN] : [Math.atan2(u, r) * s, wi(f / Math.sqrt(e)) * s]
    }
    ;
    var eu, le, li, ai, at, ni, ti, et, sr, hr, ii, tt = {
        sphere: c,
        point: rs,
        lineStart: ga,
        lineEnd: nv,
        polygonStart: function() {
            tt.lineStart = ld
        },
        polygonEnd: function() {
            tt.lineStart = ga
        }
    }, fb = rv(ir, pd, bd, [-f, -f / 2]), ae = 1e9;
    n.geo.clipExtent = function() {
        var t, i, r, u, n, f, e = {
            stream: function(t) {
                return n && (n.valid = !1),
                n = f(t),
                n.valid = !0,
                n
            },
            extent: function(o) {
                return arguments.length ? (f = ev(t = +o[0][0], i = +o[0][1], r = +o[1][0], u = +o[1][1]),
                n && (n.valid = !1,
                n = null ),
                e) : [[t, i], [r, u]]
            }
        };
        return e.extent([[0, 0], [960, 500]])
    }
    ;
    (n.geo.conicEqualArea = function() {
        return us(sv)
    }
    ).raw = sv;
    n.geo.albers = function() {
        return n.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }
    ;
    n.geo.albersUsa = function() {
        function r(n) {
            var t = n[0]
              , i = n[1];
            return u = null ,
            s(t, i),
            u || (h(t, i),
            u) || c(t, i),
            u
        }
        var u, s, h, c, i = n.geo.albers(), f = n.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), e = n.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), o = {
            point: function(n, t) {
                u = [n, t]
            }
        };
        return r.invert = function(n) {
            var u = i.scale()
              , o = i.translate()
              , t = (n[0] - o[0]) / u
              , r = (n[1] - o[1]) / u;
            return (r >= .12 && .234 > r && t >= -.425 && -.214 > t ? f : r >= .166 && .234 > r && t >= -.214 && -.115 > t ? e : i).invert(n)
        }
        ,
        r.stream = function(n) {
            var t = i.stream(n)
              , r = f.stream(n)
              , u = e.stream(n);
            return {
                point: function(n, i) {
                    t.point(n, i);
                    r.point(n, i);
                    u.point(n, i)
                },
                sphere: function() {
                    t.sphere();
                    r.sphere();
                    u.sphere()
                },
                lineStart: function() {
                    t.lineStart();
                    r.lineStart();
                    u.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd();
                    r.lineEnd();
                    u.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart();
                    r.polygonStart();
                    u.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd();
                    r.polygonEnd();
                    u.polygonEnd()
                }
            }
        }
        ,
        r.precision = function(n) {
            return arguments.length ? (i.precision(n),
            f.precision(n),
            e.precision(n),
            r) : i.precision()
        }
        ,
        r.scale = function(n) {
            return arguments.length ? (i.scale(n),
            f.scale(.35 * n),
            e.scale(n),
            r.translate(i.translate())) : i.scale()
        }
        ,
        r.translate = function(n) {
            if (!arguments.length)
                return i.translate();
            var u = i.scale()
              , l = +n[0]
              , a = +n[1];
            return s = i.translate(n).clipExtent([[l - .455 * u, a - .238 * u], [l + .455 * u, a + .238 * u]]).stream(o).point,
            h = f.translate([l - .307 * u, a + .201 * u]).clipExtent([[l - .425 * u + t, a + .12 * u + t], [l - .214 * u - t, a + .234 * u - t]]).stream(o).point,
            c = e.translate([l - .205 * u, a + .212 * u]).clipExtent([[l - .214 * u + t, a + .166 * u + t], [l - .115 * u - t, a + .234 * u - t]]).stream(o).point,
            r
        }
        ,
        r.scale(1070)
    }
    ;
    var ec, oc, ve, ye, pe, we, ri = {
        point: c,
        lineStart: c,
        lineEnd: c,
        polygonStart: function() {
            oc = 0;
            ri.lineStart = dd
        },
        polygonEnd: function() {
            ri.lineStart = ri.lineEnd = ri.point = c;
            ec += u(oc / 2)
        }
    }, vrt = {
        point: gd,
        lineStart: c,
        lineEnd: c,
        polygonStart: c,
        polygonEnd: c
    }, it = {
        point: si,
        lineStart: cv,
        lineEnd: lv,
        polygonStart: function() {
            it.lineStart = tg
        },
        polygonEnd: function() {
            it.point = si;
            it.lineStart = cv;
            it.lineEnd = lv
        }
    };
    n.geo.path = function() {
        function t(t) {
            return t && ("function" == typeof r && i.pointRadius(+r.apply(this, arguments)),
            f && f.valid || (f = u(i)),
            n.geo.stream(t, f)),
            i.result()
        }
        function e() {
            return f = null ,
            t
        }
        var o, s, u, i, f, r = 4.5;
        return t.area = function(t) {
            return ec = 0,
            n.geo.stream(t, u(ri)),
            ec
        }
        ,
        t.centroid = function(t) {
            return li = ai = at = ni = ti = et = sr = hr = ii = 0,
            n.geo.stream(t, u(it)),
            ii ? [sr / ii, hr / ii] : et ? [ni / et, ti / et] : at ? [li / at, ai / at] : [NaN, NaN]
        }
        ,
        t.bounds = function(t) {
            return pe = we = -(ve = ye = 1 / 0),
            n.geo.stream(t, u(vrt)),
            [[ve, ye], [pe, we]]
        }
        ,
        t.projection = function(n) {
            return arguments.length ? (u = (o = n) ? n.stream || rg(n) : a,
            e()) : o
        }
        ,
        t.context = function(n) {
            return arguments.length ? (i = null  == (s = n) ? new ng : new ig(n),
            "function" != typeof r && i.pointRadius(r),
            e()) : s
        }
        ,
        t.pointRadius = function(n) {
            return arguments.length ? (r = "function" == typeof n ? n : (i.pointRadius(+n),
            +n),
            t) : r
        }
        ,
        t.projection(n.geo.albersUsa()).context(null )
    }
    ;
    n.geo.transform = function(n) {
        return {
            stream: function(t) {
                var i = new vv(t);
                for (var r in n)
                    i[r] = n[r];
                return i
            }
        }
    }
    ;
    vv.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    n.geo.projection = wt;
    n.geo.projectionMutator = fs;
    (n.geo.equirectangular = function() {
        return wt(vr)
    }
    ).raw = vr.invert = vr;
    n.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * r, t[1] * r),
            t[0] *= s,
            t[1] *= s,
            t
        }
        return n = es(n[0] % 360 * r, n[1] * r, n.length > 2 ? n[2] * r : 0),
        t.invert = function(t) {
            return t = n.invert(t[0] * r, t[1] * r),
            t[0] *= s,
            t[1] *= s,
            t
        }
        ,
        t
    }
    ;
    wv.invert = vr;
    n.geo.circle = function() {
        function n() {
            var n = "function" == typeof t ? t.apply(this, arguments) : t
              , f = es(-n[0] * r, -n[1] * r, 0).invert
              , i = [];
            return u(null , null , 1, {
                point: function(n, t) {
                    i.push(n = f(n, t));
                    n[0] *= s;
                    n[1] *= s
                }
            }),
            {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var i, u, t = [0, 0], f = 6;
        return n.origin = function(i) {
            return arguments.length ? (t = i,
            n) : t
        }
        ,
        n.angle = function(t) {
            return arguments.length ? (u = os((i = +t) * r, f * r),
            n) : i
        }
        ,
        n.precision = function(t) {
            return arguments.length ? (u = os(i * r, (f = +t) * r),
            n) : f
        }
        ,
        n.angle(90)
    }
    ;
    n.geo.distance = function(n, t) {
        var i, f = (t[0] - n[0]) * r, e = n[1] * r, o = t[1] * r, a = Math.sin(f), s = Math.cos(f), h = Math.sin(e), c = Math.cos(e), l = Math.sin(o), u = Math.cos(o);
        return Math.atan2(Math.sqrt((i = u * a) * i + (i = c * l - h * u * s) * i), h * l + c * u * s)
    }
    ;
    n.geo.graticule = function() {
        function i() {
            return {
                type: "MultiLineString",
                coordinates: d()
            }
        }
        function d() {
            return n.range(Math.ceil(f / v) * v, r, v).map(b).concat(n.range(Math.ceil(o / y) * y, e, y).map(k)).concat(n.range(Math.ceil(h / a) * a, s, a).filter(function(n) {
                return u(n % v) > t
            }
            ).map(g)).concat(n.range(Math.ceil(l / w) * w, c, w).filter(function(n) {
                return u(n % y) > t
            }
            ).map(nt))
        }
        var s, h, r, f, c, l, e, o, g, nt, b, k, a = 10, w = a, v = 90, y = 360, p = 2.5;
        return i.lines = function() {
            return d().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            }
            )
        }
        ,
        i.outline = function() {
            return {
                type: "Polygon",
                coordinates: [b(f).concat(k(e).slice(1), b(r).reverse().slice(1), k(o).reverse().slice(1))]
            }
        }
        ,
        i.extent = function(n) {
            return arguments.length ? i.majorExtent(n).minorExtent(n) : i.minorExtent()
        }
        ,
        i.majorExtent = function(n) {
            return arguments.length ? (f = +n[0][0],
            r = +n[1][0],
            o = +n[0][1],
            e = +n[1][1],
            f > r && (n = f,
            f = r,
            r = n),
            o > e && (n = o,
            o = e,
            e = n),
            i.precision(p)) : [[f, o], [r, e]]
        }
        ,
        i.minorExtent = function(n) {
            return arguments.length ? (h = +n[0][0],
            s = +n[1][0],
            l = +n[0][1],
            c = +n[1][1],
            h > s && (n = h,
            h = s,
            s = n),
            l > c && (n = l,
            l = c,
            c = n),
            i.precision(p)) : [[h, l], [s, c]]
        }
        ,
        i.step = function(n) {
            return arguments.length ? i.majorStep(n).minorStep(n) : i.minorStep()
        }
        ,
        i.majorStep = function(n) {
            return arguments.length ? (v = +n[0],
            y = +n[1],
            i) : [v, y]
        }
        ,
        i.minorStep = function(n) {
            return arguments.length ? (a = +n[0],
            w = +n[1],
            i) : [a, w]
        }
        ,
        i.precision = function(n) {
            return arguments.length ? (p = +n,
            g = ny(l, c, 90),
            nt = ty(h, s, p),
            b = ny(o, e, 90),
            k = ty(f, r, p),
            i) : p
        }
        ,
        i.majorExtent([[-180, -90 + t], [180, 90 - t]]).minorExtent([[-180, -80 - t], [180, 80 + t]])
    }
    ;
    n.geo.greatArc = function() {
        function t() {
            return {
                type: "LineString",
                coordinates: [u || i.apply(this, arguments), f || r.apply(this, arguments)]
            }
        }
        var u, f, i = ss, r = hs;
        return t.distance = function() {
            return n.geo.distance(u || i.apply(this, arguments), f || r.apply(this, arguments))
        }
        ,
        t.source = function(n) {
            return arguments.length ? (i = n,
            u = "function" == typeof n ? null  : n,
            t) : i
        }
        ,
        t.target = function(n) {
            return arguments.length ? (r = n,
            f = "function" == typeof n ? null  : n,
            t) : r
        }
        ,
        t.precision = function() {
            return arguments.length ? t : 0
        }
        ,
        t
    }
    ;
    n.geo.interpolate = function(n, t) {
        return ug(n[0] * r, n[1] * r, t[0] * r, t[1] * r)
    }
    ;
    n.geo.length = function(t) {
        return sc = 0,
        n.geo.stream(t, vi),
        sc
    }
    ;
    vi = {
        sphere: c,
        point: c,
        lineStart: fg,
        lineEnd: c,
        polygonStart: c,
        polygonEnd: c
    };
    hc = yr(function(n) {
        return Math.sqrt(2 / (1 + n))
    }
    , function(n) {
        return 2 * Math.asin(n / 2)
    }
    );
    (n.geo.azimuthalEqualArea = function() {
        return wt(hc)
    }
    ).raw = hc;
    cc = yr(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }
    , a);
    (n.geo.azimuthalEquidistant = function() {
        return wt(cc)
    }
    ).raw = cc;
    (n.geo.conicConformal = function() {
        return us(iy)
    }
    ).raw = iy;
    (n.geo.conicEquidistant = function() {
        return us(ry)
    }
    ).raw = ry;
    lc = yr(function(n) {
        return 1 / n
    }
    , Math.atan);
    (n.geo.gnomonic = function() {
        return wt(lc)
    }
    ).raw = lc;
    of.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - w]
    }
    ;
    (n.geo.mercator = function() {
        return uy(of)
    }
    ).raw = of;
    ac = yr(function() {
        return 1
    }
    , Math.asin);
    (n.geo.orthographic = function() {
        return wt(ac)
    }
    ).raw = ac;
    vc = yr(function(n) {
        return 1 / (1 + n)
    }
    , function(n) {
        return 2 * Math.atan(n)
    }
    );
    (n.geo.stereographic = function() {
        return wt(vc)
    }
    ).raw = vc;
    cs.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - w]
    }
    ;
    (n.geo.transverseMercator = function() {
        var n = uy(cs)
          , t = n.center
          , i = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(),
            [-n[1], n[0]])
        }
        ,
        n.rotate = function(n) {
            return n ? i([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = i(),
            [n[0], n[1], n[2] - 90])
        }
        ,
        n.rotate([0, 0])
    }
    ).raw = cs;
    n.geom = {};
    n.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3)
                return [];
            for (var l = o(i), a = o(r), h = n.length, u = [], c = [], t = 0; h > t; t++)
                u.push([+l.call(this, n[t], t), +a.call(this, n[t], t), t]);
            for (u.sort(eg),
            t = 0; h > t; t++)
                c.push([u[t][0], -u[t][1]]);
            var f = fy(u)
              , e = fy(c)
              , v = e[0] === f[0]
              , y = e[e.length - 1] === f[f.length - 1]
              , s = [];
            for (t = f.length - 1; t >= 0; --t)
                s.push(n[u[f[t]][2]]);
            for (t = +v; t < e.length - y; ++t)
                s.push(n[u[e[t]][2]]);
            return s
        }
        var i = rr
          , r = pr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        t.y = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t)
    }
    ;
    n.geom.polygon = function(n) {
        return kf(n, ou),
        n
    }
    ;
    ou = n.geom.polygon.prototype = [];
    ou.area = function() {
        for (var t, i = -1, r = this.length, n = this[r - 1], u = 0; ++i < r; )
            t = n,
            n = this[i],
            u += t[1] * n[0] - t[0] * n[1];
        return .5 * u
    }
    ;
    ou.centroid = function(n) {
        var i, r, u = -1, f = this.length, e = 0, o = 0, t = this[f - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++u < f; )
            i = t,
            t = this[u],
            r = i[0] * t[1] - t[0] * i[1],
            e += (i[0] + t[0]) * r,
            o += (i[1] + t[1]) * r;
        return [e * n, o * n]
    }
    ;
    ou.clip = function(n) {
        for (var f, e, o, t, i, r, s = oy(n), h = -1, c = this.length - oy(this), u = this[c - 1]; ++h < c; ) {
            for (f = n.slice(),
            n.length = 0,
            t = this[h],
            i = f[(o = f.length - s) - 1],
            e = -1; ++e < o; )
                r = f[e],
                ls(r, u, t) ? (ls(i, u, t) || n.push(ey(i, r, u, t)),
                n.push(r)) : ls(i, u, t) && n.push(ey(i, r, u, t)),
                i = r;
            s && n.push(n[0]);
            u = t
        }
        return n
    }
    ;
    pc = [];
    wc = [];
    cy.prototype.prepare = function() {
        for (var t, n = this.edges, i = n.length; i--; )
            t = n[i].edge,
            t.b && t.a || n.splice(i, 1);
        return n.sort(ly),
        n.length
    }
    ;
    hf.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    };
    vs.prototype = {
        insert: function(n, t) {
            var i, r, u;
            if (n) {
                if (t.P = n,
                t.N = n.N,
                n.N && (n.N.P = t),
                n.N = t,
                n.R) {
                    for (n = n.R; n.L; )
                        n = n.L;
                    n.L = t
                } else
                    n.R = t;
                i = n
            } else
                this._ ? (n = vy(this._),
                t.P = null ,
                t.N = n,
                n.P = n.L = t,
                i = n) : (t.P = t.N = null ,
                this._ = t,
                i = null );
            for (t.L = t.R = null ,
            t.U = i,
            t.C = !0,
            n = t; i && i.C; )
                r = i.U,
                i === r.L ? (u = r.R,
                u && u.C ? (i.C = u.C = !1,
                r.C = !0,
                n = r) : (n === i.R && (br(this, i),
                n = i,
                i = n.U),
                i.C = !1,
                r.C = !0,
                kr(this, r))) : (u = r.L,
                u && u.C ? (i.C = u.C = !1,
                r.C = !0,
                n = r) : (n === i.L && (kr(this, i),
                n = i,
                i = n.U),
                i.C = !1,
                r.C = !0,
                br(this, r))),
                i = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P);
            n.P && (n.P.N = n.N);
            n.N = n.P = null ;
            var t, r, e, i = n.U, f = n.L, u = n.R;
            if (r = f ? u ? vy(u) : f : u,
            i ? i.L === n ? i.L = r : i.R = r : this._ = r,
            f && u ? (e = r.C,
            r.C = n.C,
            r.L = f,
            f.U = r,
            r !== u ? (i = r.U,
            r.U = n.U,
            n = r.R,
            i.L = n,
            r.R = u,
            u.U = r) : (r.U = i,
            i = r,
            n = r.R)) : (e = n.C,
            n = r),
            n && (n.U = i),
            !e) {
                if (n && n.C)
                    return n.C = !1,
                    void 0;
                do {
                    if (n === this._)
                        break;
                    if (n === i.L) {
                        if (t = i.R,
                        t.C && (t.C = !1,
                        i.C = !0,
                        br(this, i),
                        t = i.R),
                        t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1,
                            t.C = !0,
                            kr(this, t),
                            t = i.R);
                            t.C = i.C;
                            i.C = t.R.C = !1;
                            br(this, i);
                            n = this._;
                            break
                        }
                    } else if (t = i.L,
                    t.C && (t.C = !1,
                    i.C = !0,
                    kr(this, i),
                    t = i.L),
                    t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1,
                        t.C = !0,
                        br(this, t),
                        t = i.L);
                        t.C = i.C;
                        i.C = t.L.C = !1;
                        kr(this, i);
                        n = this._;
                        break
                    }
                    t.C = !0;
                    n = i;
                    i = i.U
                } while (!n.C);n && (n.C = !1)
            }
        }
    };
    n.geom.voronoi = function(n) {
        function i(n) {
            var o = new Array(n.length)
              , t = r[0][0]
              , i = r[0][1]
              , f = r[1][0]
              , e = r[1][1];
            return ys(u(n), r).cells.forEach(function(r, u) {
                var h = r.edges
                  , s = r.site
                  , c = o[u] = h.length ? h.map(function(n) {
                    var t = n.start();
                    return [t.x, t.y]
                }
                ) : s.x >= t && s.x <= f && s.y >= i && s.y <= e ? [[t, e], [f, e], [f, i], [t, i]] : [];
                c.point = n[u]
            }
            ),
            o
        }
        function u(n) {
            return n.map(function(n, i) {
                return {
                    x: Math.round(s(n, i) / t) * t,
                    y: Math.round(h(n, i) / t) * t,
                    i: i
                }
            }
            )
        }
        var f = rr
          , e = pr
          , s = f
          , h = e
          , r = hu;
        return n ? i(n) : (i.links = function(n) {
            return ys(u(n)).edges.filter(function(n) {
                return n.l && n.r
            }
            ).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            }
            )
        }
        ,
        i.triangles = function(n) {
            var t = [];
            return ys(u(n)).cells.forEach(function(i, r) {
                for (var l, e, o = i.site, s = i.edges.sort(ly), h = -1, c = s.length, u = s[c - 1].edge, f = u.l === o ? u.r : u.l; ++h < c; )
                    l = u,
                    e = f,
                    u = s[h].edge,
                    f = u.l === o ? u.r : u.l,
                    r < e.i && r < f.i && bg(o, e, f) < 0 && t.push([n[r], n[e.i], n[f.i]])
            }
            ),
            t
        }
        ,
        i.x = function(n) {
            return arguments.length ? (s = o(f = n),
            i) : f
        }
        ,
        i.y = function(n) {
            return arguments.length ? (h = o(e = n),
            i) : e
        }
        ,
        i.clipExtent = function(n) {
            return arguments.length ? (r = null  == n ? hu : n,
            i) : r === hu ? null  : r
        }
        ,
        i.size = function(n) {
            return arguments.length ? i.clipExtent(n && [[0, 0], n]) : r === hu ? null  : r && r[1]
        }
        ,
        i)
    }
    ;
    hu = [[-1e6, -1e6], [1e6, 1e6]];
    n.geom.delaunay = function(t) {
        return n.geom.voronoi().triangles(t)
    }
    ;
    n.geom.quadtree = function(n, t, i, r, f) {
        function e(n) {
            function it(n, t, i, r, f, e, o, s) {
                var h, c, l;
                isNaN(i) || isNaN(r) || (n.leaf ? (h = n.x,
                c = n.y,
                null  != h ? u(h - i) + u(c - r) < .01 ? nt(n, t, i, r, f, e, o, s) : (l = n.point,
                n.x = n.y = n.point = null ,
                nt(n, l, h, c, f, e, o, s),
                nt(n, t, i, r, f, e, o, s)) : (n.x = i,
                n.y = r,
                n.point = t)) : nt(n, t, i, r, f, e, o, s))
            }
            function nt(n, t, i, r, u, f, e, o) {
                var s = .5 * (u + e)
                  , h = .5 * (f + o)
                  , c = i >= s
                  , l = r >= h
                  , a = (l << 1) + c;
                n.leaf = !1;
                n = n.nodes[a] || (n.nodes[a] = yy());
                c ? u = s : e = s;
                l ? f = h : o = h;
                it(n, t, i, r, u, f, e, o)
            }
            var l, d, g, e, tt, a, v, y, p, ft = o(s), et = o(h), b, k, rt, ut, w;
            if (null  != t)
                a = t,
                v = i,
                y = r,
                p = f;
            else if (y = p = -(a = v = 1 / 0),
            d = [],
            g = [],
            tt = n.length,
            c)
                for (e = 0; tt > e; ++e)
                    l = n[e],
                    l.x < a && (a = l.x),
                    l.y < v && (v = l.y),
                    l.x > y && (y = l.x),
                    l.y > p && (p = l.y),
                    d.push(l.x),
                    g.push(l.y);
            else
                for (e = 0; tt > e; ++e)
                    b = +ft(l = n[e], e),
                    k = +et(l, e),
                    a > b && (a = b),
                    v > k && (v = k),
                    b > y && (y = b),
                    k > p && (p = k),
                    d.push(b),
                    g.push(k);
            if (rt = y - a,
            ut = p - v,
            rt > ut ? p = v + rt : y = a + ut,
            w = yy(),
            w.add = function(n) {
                it(w, n, +ft(n, ++e), +et(n, e), a, v, y, p)
            }
            ,
            w.visit = function(n) {
                dr(n, w, a, v, y, p)
            }
            ,
            e = -1,
            null  == t) {
                for (; ++e < tt; )
                    it(w, n[e], d[e], g[e], a, v, y, p);
                --e
            } else
                n.forEach(w.add);
            return d = g = n = l = null ,
            w
        }
        var c, s = rr, h = pr;
        return (c = arguments.length) ? (s = kg,
        h = dg,
        3 === c && (f = i,
        r = t,
        i = t = 0),
        e(n)) : (e.x = function(n) {
            return arguments.length ? (s = n,
            e) : s
        }
        ,
        e.y = function(n) {
            return arguments.length ? (h = n,
            e) : h
        }
        ,
        e.extent = function(n) {
            return arguments.length ? (null  == n ? t = i = r = f = null  : (t = +n[0][0],
            i = +n[0][1],
            r = +n[1][0],
            f = +n[1][1]),
            e) : null  == t ? null  : [[t, i], [r, f]]
        }
        ,
        e.size = function(n) {
            return arguments.length ? (null  == n ? t = i = r = f = null  : (t = i = 0,
            r = +n[0],
            f = +n[1]),
            e) : null  == t ? null  : [r - t, f - i]
        }
        ,
        e)
    }
    ;
    n.interpolateRgb = ps;
    n.interpolateObject = py;
    n.interpolateNumber = ht;
    n.interpolateString = wy;
    cu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    n.interpolate = hi;
    n.interpolators = [function(n, t) {
        var i = typeof t;
        return ("string" === i ? uu.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? ps : wy : t instanceof bi ? ps : "object" === i ? Array.isArray(t) ? lf : py : ht)(n, t)
    }
    ];
    n.interpolateArray = lf;
    var eb = function() {
        return a
    }
      , yrt = n.map({
        linear: eb,
        poly: un,
        quad: function() {
            return nn
        },
        cubic: function() {
            return tn
        },
        sin: function() {
            return fn
        },
        exp: function() {
            return en
        },
        circle: function() {
            return on
        },
        elastic: sn,
        back: hn,
        bounce: function() {
            return cn
        }
    })
      , prt = n.map({
        "in": a,
        out: by,
        "in-out": ky,
        "out-in": function(n) {
            return ky(by(n))
        }
    });
    n.ease = function(n) {
        var t = n.indexOf("-")
          , i = t >= 0 ? n.substring(0, t) : n
          , r = t >= 0 ? n.substring(t + 1) : "in";
        return i = yrt.get(i) || eb,
        r = prt.get(r) || a,
        gg(r(i.apply(null , vw.call(arguments, 1))))
    }
    ;
    n.interpolateHcl = ln;
    n.interpolateHsl = an;
    n.interpolateLab = vn;
    n.interpolateRound = dy;
    n.transform = function(t) {
        var i = nt.createElementNS(n.ns.prefix.svg, "g");
        return (n.transform = function(n) {
            if (null  != n) {
                i.setAttribute("transform", n);
                var t = i.transform.baseVal.consolidate()
            }
            return new gy(t ? t.matrix : ob)
        }
        )(t)
    }
    ;
    gy.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    }
    ;
    ob = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    n.interpolateTransform = ip;
    n.layout = {};
    n.layout.bundle = function() {
        return function(n) {
            for (var t = [], i = -1, r = n.length; ++i < r; )
                t.push(bn(n[i]));
            return t
        }
    }
    ;
    n.layout.chord = function() {
        function c() {
            var v, t, b, c, a, k = {}, g = [], it = n.range(r), nt = [], p, w;
            for (i = [],
            u = [],
            v = 0,
            c = -1; ++c < r; ) {
                for (t = 0,
                a = -1; ++a < r; )
                    t += f[c][a];
                g.push(t);
                nt.push(n.range(r));
                v += t
            }
            for (e && it.sort(function(n, t) {
                return e(g[n], g[t])
            }
            ),
            o && nt.forEach(function(n, t) {
                n.sort(function(n, i) {
                    return o(f[t][n], f[t][i])
                }
                )
            }
            ),
            v = (d - h * r) / v,
            t = 0,
            c = -1; ++c < r; ) {
                for (b = t,
                a = -1; ++a < r; ) {
                    var y = it[c]
                      , tt = nt[y][a]
                      , rt = f[y][tt]
                      , ut = t
                      , ft = t += rt * v;
                    k[y + "-" + tt] = {
                        index: y,
                        subindex: tt,
                        startAngle: ut,
                        endAngle: ft,
                        value: rt
                    }
                }
                u[y] = {
                    index: y,
                    startAngle: b,
                    endAngle: t,
                    value: (t - b) / v
                };
                t += h
            }
            for (c = -1; ++c < r; )
                for (a = c - 1; ++a < r; )
                    p = k[c + "-" + a],
                    w = k[a + "-" + c],
                    (p.value || w.value) && i.push(p.value < w.value ? {
                        source: w,
                        target: p
                    } : {
                        source: p,
                        target: w
                    });
            s && l()
        }
        function l() {
            i.sort(function(n, t) {
                return s((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            }
            )
        }
        var i, u, f, r, e, o, s, t = {}, h = 0;
        return t.matrix = function(n) {
            return arguments.length ? (r = (f = n) && f.length,
            i = u = null ,
            t) : f
        }
        ,
        t.padding = function(n) {
            return arguments.length ? (h = n,
            i = u = null ,
            t) : h
        }
        ,
        t.sortGroups = function(n) {
            return arguments.length ? (e = n,
            i = u = null ,
            t) : e
        }
        ,
        t.sortSubgroups = function(n) {
            return arguments.length ? (o = n,
            i = null ,
            t) : o
        }
        ,
        t.sortChords = function(n) {
            return arguments.length ? (s = n,
            i && l(),
            t) : s
        }
        ,
        t.chords = function() {
            return i || c(),
            i
        }
        ,
        t.groups = function() {
            return u || c(),
            u
        }
        ,
        t
    }
    ;
    n.layout.force = function() {
        function d(n) {
            return function(t, i, r, u) {
                var e;
                if (t.point !== n) {
                    var o = t.cx - n.x
                      , s = t.cy - n.y
                      , h = u - i
                      , f = o * o + s * s;
                    if (f > h * h / k)
                        return w > f && (e = t.charge / f,
                        n.px -= o * e,
                        n.py -= s * e),
                        !0;
                    t.point && f && w > f && (e = t.pointCharge / f,
                    n.px -= o * e,
                    n.py -= s * e)
                }
                return !t.charge
            }
        }
        function g(i) {
            i.px = n.event.x;
            i.py = n.event.y;
            t.resume()
        }
        var h, r, c, l, v, t = {}, y = n.dispatch("start", "tick", "end"), f = [1, 1], p = .9, o = wrt, s = brt, e = -30, w = krt, b = .1, k = .64, i = [], u = [];
        return t.tick = function() {
            if ((r *= .99) < .005)
                return y.end({
                    type: "end",
                    alpha: r = 0
                }),
                !0;
            for (var tt, t, w, g, k, s, h, a, nt = i.length, it = u.length, o = 0; it > o; ++o)
                t = u[o],
                w = t.source,
                g = t.target,
                h = g.x - w.x,
                a = g.y - w.y,
                (k = h * h + a * a) && (k = r * l[o] * ((k = Math.sqrt(k)) - c[o]) / k,
                h *= k,
                a *= k,
                g.x -= h * (s = w.weight / (g.weight + w.weight)),
                g.y -= a * s,
                w.x += h * (s = 1 - s),
                w.y += a * s);
            if ((s = r * b) && (h = f[0] / 2,
            a = f[1] / 2,
            o = -1,
            s))
                for (; ++o < nt; )
                    t = i[o],
                    t.x += (h - t.x) * s,
                    t.y += (a - t.y) * s;
            if (e)
                for (up(tt = n.geom.quadtree(i), r, v),
                o = -1; ++o < nt; )
                    (t = i[o]).fixed || tt.visit(d(t));
            for (o = -1; ++o < nt; )
                t = i[o],
                t.fixed ? (t.x = t.px,
                t.y = t.py) : (t.x -= (t.px - (t.px = t.x)) * p,
                t.y -= (t.py - (t.py = t.y)) * p);
            y.tick({
                type: "tick",
                alpha: r
            })
        }
        ,
        t.nodes = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        t.links = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t.size = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t.linkDistance = function(n) {
            return arguments.length ? (o = "function" == typeof n ? n : +n,
            t) : o
        }
        ,
        t.distance = t.linkDistance,
        t.linkStrength = function(n) {
            return arguments.length ? (s = "function" == typeof n ? n : +n,
            t) : s
        }
        ,
        t.friction = function(n) {
            return arguments.length ? (p = +n,
            t) : p
        }
        ,
        t.charge = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n : +n,
            t) : e
        }
        ,
        t.chargeDistance = function(n) {
            return arguments.length ? (w = n * n,
            t) : Math.sqrt(w)
        }
        ,
        t.gravity = function(n) {
            return arguments.length ? (b = +n,
            t) : b
        }
        ,
        t.theta = function(n) {
            return arguments.length ? (k = n * n,
            t) : Math.sqrt(k)
        }
        ,
        t.alpha = function(i) {
            return arguments.length ? (i = +i,
            r ? r = i > 0 ? i : 0 : i > 0 && (y.start({
                type: "start",
                alpha: r = i
            }),
            n.timer(t.tick)),
            t) : r
        }
        ,
        t.start = function() {
            function p(t, i) {
                var f;
                if (!h) {
                    for (h = new Array(a),
                    r = 0; a > r; ++r)
                        h[r] = [];
                    for (r = 0; s > r; ++r)
                        f = u[r],
                        h[f.source.index].push(f.target),
                        h[f.target.index].push(f.source)
                }
                for (var e, o = h[n], r = -1, s = o.length; ++r < s; )
                    if (!isNaN(e = o[r][t]))
                        return e;
                return Math.random() * i
            }
            for (var h, r, a = i.length, y = u.length, w = f[0], b = f[1], n = 0; a > n; ++n)
                (r = i[n]).index = n,
                r.weight = 0;
            for (n = 0; y > n; ++n)
                r = u[n],
                "number" == typeof r.source && (r.source = i[r.source]),
                "number" == typeof r.target && (r.target = i[r.target]),
                ++r.source.weight,
                ++r.target.weight;
            for (n = 0; a > n; ++n)
                r = i[n],
                isNaN(r.x) && (r.x = p("x", w)),
                isNaN(r.y) && (r.y = p("y", b)),
                isNaN(r.px) && (r.px = r.x),
                isNaN(r.py) && (r.py = r.y);
            if (c = [],
            "function" == typeof o)
                for (n = 0; y > n; ++n)
                    c[n] = +o.call(this, u[n], n);
            else
                for (n = 0; y > n; ++n)
                    c[n] = o;
            if (l = [],
            "function" == typeof s)
                for (n = 0; y > n; ++n)
                    l[n] = +s.call(this, u[n], n);
            else
                for (n = 0; y > n; ++n)
                    l[n] = s;
            if (v = [],
            "function" == typeof e)
                for (n = 0; a > n; ++n)
                    v[n] = +e.call(this, i[n], n);
            else
                for (n = 0; a > n; ++n)
                    v[n] = e;
            return t.resume()
        }
        ,
        t.resume = function() {
            return t.alpha(.1)
        }
        ,
        t.stop = function() {
            return t.alpha(0)
        }
        ,
        t.drag = function() {
            return h || (h = n.behavior.drag().origin(a).on("dragstart.force", dn).on("drag.force", g).on("dragend.force", gn)),
            arguments.length ? (this.on("mouseover.force", ntt).on("mouseout.force", ttt).call(h),
            void 0) : h
        }
        ,
        n.rebind(t, y, "on")
    }
    ;
    var wrt = 20
      , brt = 1
      , krt = 1 / 0;
    n.layout.hierarchy = function() {
        function u(f, e, o) {
            var s = r.call(n, f, e);
            if (f.depth = e,
            o.push(f),
            s && (h = s.length)) {
                for (var h, c, l = -1, a = f.children = new Array(h), v = 0, y = e + 1; ++l < h; )
                    c = a[l] = u(s[l], y, o),
                    c.parent = f,
                    v += c.value;
                i && a.sort(i);
                t && (f.value = v)
            } else
                delete f.children,
                t && (f.value = +t.call(n, f, e) || 0);
            return f
        }
        function f(i, r) {
            var e = i.children, u = 0, s, o, h;
            if (e && (s = e.length))
                for (o = -1,
                h = r + 1; ++o < s; )
                    u += f(e[o], h);
            else
                t && (u = +t.call(n, i, r) || 0);
            return t && (i.value = u),
            u
        }
        function n(n) {
            var t = [];
            return u(n, 0, t),
            t
        }
        var i = utt
          , r = itt
          , t = rtt;
        return n.sort = function(t) {
            return arguments.length ? (i = t,
            n) : i
        }
        ,
        n.children = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n.value = function(i) {
            return arguments.length ? (t = i,
            n) : t
        }
        ,
        n.revalue = function(n) {
            return f(n, 0),
            n
        }
        ,
        n
    }
    ;
    n.layout.partition = function() {
        function r(n, t, i, u) {
            var f = n.children, o, s, h, e;
            if (n.x = t,
            n.y = n.depth * u,
            n.dx = i,
            n.dy = u,
            f && (o = f.length))
                for (e = -1,
                i = n.value ? i / n.value : 0; ++e < o; )
                    r(s = f[e], t, h = s.value * i, u),
                    t += h
        }
        function u(n) {
            var t = n.children, i = 0, f, r;
            if (t && (f = t.length))
                for (r = -1; ++r < f; )
                    i = Math.max(i, u(t[r]));
            return 1 + i
        }
        function i(n, i) {
            var e = f.call(this, n, i);
            return r(e[0], 0, t[0], t[1] / u(e[0])),
            e
        }
        var f = n.layout.hierarchy()
          , t = [1, 1];
        return i.size = function(n) {
            return arguments.length ? (t = n,
            i) : t
        }
        ,
        gr(i, f)
    }
    ;
    n.layout.pie = function() {
        function t(e) {
            var o = e.map(function(n, i) {
                return +f.call(t, n, i)
            }
            ), s = +("function" == typeof r ? r.apply(this, arguments) : r), l = (("function" == typeof u ? u.apply(this, arguments) : u) - s) / n.sum(o), c = n.range(e.length), h;
            return null  != i && c.sort(i === bc ? function(n, t) {
                return o[t] - o[n]
            }
             : function(n, t) {
                return i(e[n], e[t])
            }
            ),
            h = [],
            c.forEach(function(n) {
                var t;
                h[n] = {
                    data: e[n],
                    value: t = o[n],
                    startAngle: s,
                    endAngle: s += t * l
                }
            }
            ),
            h
        }
        var f = Number
          , i = bc
          , r = 0
          , u = d;
        return t.value = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t.sort = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        t.startAngle = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.endAngle = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t
    }
    ;
    bc = {};
    n.layout.stack = function() {
        function t(s, h) {
            var l = s.map(function(n, i) {
                return r.call(t, n, i)
            }
            )
              , a = l.map(function(n) {
                return n.map(function(n, i) {
                    return [e.call(t, n, i), o.call(t, n, i)]
                }
                )
            }
            )
              , y = u.call(t, a, h);
            l = n.permute(l, y);
            a = n.permute(a, y);
            for (var v, p, w = f.call(t, a, h), b = l.length, k = l[0].length, c = 0; k > c; ++c)
                for (i.call(t, l[0][c], p = w[c], a[0][c][1]),
                v = 1; b > v; ++v)
                    i.call(t, l[v][c], p += a[v - 1][c][1], a[v][c][1]);
            return s
        }
        var r = a
          , u = ws
          , f = bs
          , i = stt
          , e = ett
          , o = ott;
        return t.values = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.order = function(n) {
            return arguments.length ? (u = "function" == typeof n ? n : sb.get(n) || ws,
            t) : u
        }
        ,
        t.offset = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : hb.get(n) || bs,
            t) : f
        }
        ,
        t.x = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.y = function(n) {
            return arguments.length ? (o = n,
            t) : o
        }
        ,
        t.out = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        t
    }
    ;
    sb = n.map({
        "inside-out": function(t) {
            for (var i, u = t.length, f = t.map(htt), e = t.map(ctt), l = n.range(u).sort(function(n, t) {
                return f[n] - f[t]
            }
            ), o = 0, s = 0, h = [], c = [], r = 0; u > r; ++r)
                i = l[r],
                s > o ? (o += e[i],
                h.push(i)) : (s += e[i],
                c.push(i));
            return c.reverse().concat(h)
        },
        reverse: function(t) {
            return n.range(t.length).reverse()
        },
        "default": ws
    });
    hb = n.map({
        silhouette: function(n) {
            for (var r, i, s = n.length, f = n[0].length, e = [], u = 0, o = [], t = 0; f > t; ++t) {
                for (r = 0,
                i = 0; s > r; r++)
                    i += n[r][t][1];
                i > u && (u = i);
                e.push(i)
            }
            for (t = 0; f > t; ++t)
                o[t] = (u - e[t]) / 2;
            return o
        },
        wiggle: function(n) {
            var i, t, r, u, h, c, f, e, o, a = n.length, l = n[0], v = l.length, s = [];
            for (s[0] = e = o = 0,
            t = 1; v > t; ++t) {
                for (i = 0,
                u = 0; a > i; ++i)
                    u += n[i][t][1];
                for (i = 0,
                h = 0,
                f = l[t][0] - l[t - 1][0]; a > i; ++i) {
                    for (r = 0,
                    c = (n[i][t][1] - n[i][t - 1][1]) / (2 * f); i > r; ++r)
                        c += (n[r][t][1] - n[r][t - 1][1]) / f;
                    h += c * n[i][t][1]
                }
                s[t] = e -= u ? h / u * f : 0;
                o > e && (o = e)
            }
            for (t = 0; v > t; ++t)
                s[t] -= o;
            return s
        },
        expand: function(n) {
            for (var t, r, u = n.length, f = n[0].length, o = 1 / u, e = [], i = 0; f > i; ++i) {
                for (t = 0,
                r = 0; u > t; t++)
                    r += n[t][i][1];
                if (r)
                    for (t = 0; u > t; t++)
                        n[t][i][1] /= r;
                else
                    for (t = 0; u > t; t++)
                        n[t][i][1] = o
            }
            for (i = 0; f > i; ++i)
                e[i] = 0;
            return e
        },
        zero: bs
    });
    n.layout.histogram = function() {
        function t(t, e) {
            for (var o, s, l = [], h = t.map(r, this), a = u.call(this, h, e), c = f.call(this, a, h, e), e = -1, y = h.length, v = c.length - 1, p = i ? 1 : 1 / y; ++e < v; )
                o = l[e] = [],
                o.dx = c[e + 1] - (o.x = c[e]),
                o.y = 0;
            if (v > 0)
                for (e = -1; ++e < y; )
                    s = h[e],
                    s >= a[0] && s <= a[1] && (o = l[n.bisect(c, s, 1, v) - 1],
                    o.y += p,
                    o.push(t[e]));
            return l
        }
        var i = !0
          , r = Number
          , u = vtt
          , f = att;
        return t.value = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.range = function(n) {
            return arguments.length ? (u = o(n),
            t) : u
        }
        ,
        t.bins = function(n) {
            return arguments.length ? (f = "number" == typeof n ? function(t) {
                return fp(t, n)
            }
             : o(n),
            t) : f
        }
        ,
        t.frequency = function(n) {
            return arguments.length ? (i = !!n,
            t) : i
        }
        ,
        t
    }
    ;
    n.layout.tree = function() {
        function i(n, i) {
            function h(n, t) {
                var f = n.children, i = n._tree, o;
                if (f && (s = f.length)) {
                    for (var s, e, u, c = f[0], l = c, a = -1; ++a < s; )
                        u = f[a],
                        h(u, e),
                        l = v(u, e, l),
                        e = u;
                    btt(n);
                    o = .5 * (c._tree.prelim + u._tree.prelim);
                    t ? (i.prelim = t._tree.prelim + r(n, t),
                    i.mod = i.prelim - o) : i.prelim = o
                } else
                    t && (i.prelim = t._tree.prelim + r(n, t))
            }
            function c(n, t) {
                var i, u, r;
                if (n.x = n._tree.prelim + t,
                i = n.children,
                i && (u = i.length))
                    for (r = -1,
                    t += n._tree.mod; ++r < u; )
                        c(i[r], t)
            }
            function v(n, t, i) {
                if (t) {
                    for (var s, f = n, e = n, u = t, o = n.parent.children[0], h = f._tree.mod, c = e._tree.mod, l = u._tree.mod, a = o._tree.mod; u = ds(u),
                    f = ks(f),
                    u && f; )
                        o = ks(o),
                        e = ds(e),
                        e._tree.ancestor = n,
                        s = u._tree.prelim + l - f._tree.prelim - h + r(u, f),
                        s > 0 && (ktt(dtt(u, n, i), n, s),
                        h += s,
                        c += s),
                        l += u._tree.mod,
                        h += f._tree.mod,
                        a += o._tree.mod,
                        c += e._tree.mod;
                    u && !ds(e) && (e._tree.thread = u,
                    e._tree.mod += l - c);
                    f && !ks(o) && (o._tree.thread = f,
                    o._tree.mod += h - a,
                    i = n)
                }
                return i
            }
            var l = f.call(this, n, i)
              , e = l[0];
            ct(e, function(n, t) {
                n._tree = {
                    ancestor: n,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }
            );
            h(e);
            c(e, -e._tree.prelim);
            var o = af(e, ptt)
              , s = af(e, ytt)
              , y = af(e, wtt)
              , a = o.x - r(o, s) / 2
              , p = s.x + r(s, o) / 2
              , w = y.depth || 1;
            return ct(e, u ? function(n) {
                n.x *= t[0];
                n.y = n.depth * t[1];
                delete n._tree
            }
             : function(n) {
                n.x = (n.x - a) / (p - a) * t[0];
                n.y = n.depth / w * t[1];
                delete n._tree
            }
            ),
            l
        }
        var f = n.layout.hierarchy().sort(null ).value(null )
          , r = ep
          , t = [1, 1]
          , u = !1;
        return i.separation = function(n) {
            return arguments.length ? (r = n,
            i) : r
        }
        ,
        i.size = function(n) {
            return arguments.length ? (u = null  == (t = n),
            i) : u ? null  : t
        }
        ,
        i.nodeSize = function(n) {
            return arguments.length ? (u = null  != (t = n),
            i) : u ? t : null
        }
        ,
        gr(i, f)
    }
    ;
    n.layout.pack = function() {
        function i(n, i) {
            var c = f.call(this, n, i), e = c[0], o = u[0], s = u[1], l = null  == t ? Math.sqrt : "function" == typeof t ? t : function() {
                return t
            }
            , h;
            return (e.x = e.y = 0,
            ct(e, function(n) {
                n.r = +l(n.value)
            }
            ),
            ct(e, hp),
            r) && (h = r * (t ? 1 : Math.max(2 * e.r / o, 2 * e.r / s)) / 2,
            ct(e, function(n) {
                n.r += h
            }
            ),
            ct(e, hp),
            ct(e, function(n) {
                n.r -= h
            }
            )),
            cp(e, o / 2, s / 2, t ? 1 : 1 / Math.max(2 * e.r / o, 2 * e.r / s)),
            c
        }
        var t, f = n.layout.hierarchy().sort(gtt), r = 0, u = [1, 1];
        return i.size = function(n) {
            return arguments.length ? (u = n,
            i) : u
        }
        ,
        i.radius = function(n) {
            return arguments.length ? (t = null  == n || "function" == typeof n ? n : +n,
            i) : t
        }
        ,
        i.padding = function(n) {
            return arguments.length ? (r = +n,
            i) : r
        }
        ,
        gr(i, f)
    }
    ;
    n.layout.cluster = function() {
        function i(n, i) {
            var o, c = f.call(this, n, i), e = c[0], a = 0;
            ct(e, function(n) {
                var t = n.children;
                t && t.length ? (n.x = rit(t),
                n.y = iit(t)) : (n.x = o ? a += r(n, o) : 0,
                n.y = 0,
                o = n)
            }
            );
            var s = ap(e)
              , h = vp(e)
              , l = s.x - r(s, h) / 2
              , v = h.x + r(h, s) / 2;
            return ct(e, u ? function(n) {
                n.x = (n.x - e.x) * t[0];
                n.y = (e.y - n.y) * t[1]
            }
             : function(n) {
                n.x = (n.x - l) / (v - l) * t[0];
                n.y = (1 - (e.y ? n.y / e.y : 1)) * t[1]
            }
            ),
            c
        }
        var f = n.layout.hierarchy().sort(null ).value(null )
          , r = ep
          , t = [1, 1]
          , u = !1;
        return i.separation = function(n) {
            return arguments.length ? (r = n,
            i) : r
        }
        ,
        i.size = function(n) {
            return arguments.length ? (u = null  == (t = n),
            i) : u ? null  : t
        }
        ,
        i.nodeSize = function(n) {
            return arguments.length ? (u = null  != (t = n),
            i) : u ? t : null
        }
        ,
        gr(i, f)
    }
    ;
    n.layout.treemap = function() {
        function o(n, t) {
            for (var r, i, u = -1, f = n.length; ++u < f; )
                i = (r = n[u]).value * (0 > t ? 0 : t),
                r.area = isNaN(i) || 0 >= i ? 0 : i
        }
        function a(n) {
            var u = n.children;
            if (u && u.length) {
                var l, v, y, r = c(n), t = [], f = u.slice(), h = 1 / 0, e = "slice" === i ? r.dx : "dice" === i ? r.dy : "slice-dice" === i ? 1 & n.depth ? r.dy : r.dx : Math.min(r.dx, r.dy);
                for (o(f, r.dx * r.dy / n.value),
                t.area = 0; (y = f.length) > 0; )
                    t.push(l = f[y - 1]),
                    t.area += l.area,
                    "squarify" !== i || (v = p(t, e)) <= h ? (f.pop(),
                    h = v) : (t.area -= t.pop().area,
                    s(t, e, r, !1),
                    e = Math.min(r.dx, r.dy),
                    t.length = t.area = 0,
                    h = 1 / 0);
                t.length && (s(t, e, r, !0),
                t.length = t.area = 0);
                u.forEach(a)
            }
        }
        function v(n) {
            var u = n.children;
            if (u && u.length) {
                var i, r = c(n), f = u.slice(), t = [];
                for (o(f, r.dx * r.dy / n.value),
                t.area = 0; i = f.pop(); )
                    t.push(i),
                    t.area += i.area,
                    null  != i.z && (s(t, i.z ? r.dx : r.dy, r, !f.length),
                    t.length = t.area = 0);
                u.forEach(v)
            }
        }
        function p(n, t) {
            for (var i, r = n.area, u = 0, f = 1 / 0, o = -1, s = n.length; ++o < s; )
                (i = n[o].area) && (f > i && (f = i),
                i > u && (u = i));
            return r *= r,
            t *= t,
            r ? Math.max(t * u * e / r, r / (t * f * e)) : 1 / 0
        }
        function s(n, t, i, r) {
            var f, h = -1, c = n.length, o = i.x, s = i.y, e = t ? u(n.area / t) : 0;
            if (t == i.dx) {
                for ((r || e > i.dy) && (e = i.dy); ++h < c; )
                    f = n[h],
                    f.x = o,
                    f.y = s,
                    f.dy = e,
                    o += f.dx = Math.min(i.x + i.dx - o, e ? u(f.area / e) : 0);
                f.z = !0;
                f.dx += i.x + i.dx - o;
                i.y += e;
                i.dy -= e
            } else {
                for ((r || e > i.dx) && (e = i.dx); ++h < c; )
                    f = n[h],
                    f.x = o,
                    f.y = s,
                    f.dx = e,
                    s += f.dy = Math.min(i.y + i.dy - s, e ? u(f.area / e) : 0);
                f.z = !1;
                f.dy += i.y + i.dy - s;
                i.x += e;
                i.dx -= e
            }
        }
        function t(n) {
            var i = r || h(n)
              , t = i[0];
            return t.x = 0,
            t.y = 0,
            t.dx = f[0],
            t.dy = f[1],
            r && h.revalue(t),
            o([t], t.dx * t.dy / t.value),
            (r ? v : a)(t),
            l && (r = i),
            i
        }
        var r, h = n.layout.hierarchy(), u = Math.round, f = [1, 1], y = null , c = nh, l = !1, i = "squarify", e = .5 * (1 + Math.sqrt(5));
        return t.size = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t.padding = function(n) {
            function u(i) {
                var r = n.call(t, i, i.depth);
                return null  == r ? nh(i) : yp(i, "number" == typeof r ? [r, r, r, r] : r)
            }
            function i(t) {
                return yp(t, n)
            }
            if (!arguments.length)
                return y;
            var r;
            return c = null  == (y = n) ? nh : "function" == (r = typeof n) ? u : "number" === r ? (n = [n, n, n, n],
            i) : i,
            t
        }
        ,
        t.round = function(n) {
            return arguments.length ? (u = n ? Math.round : Number,
            t) : u != Number
        }
        ,
        t.sticky = function(n) {
            return arguments.length ? (l = n,
            r = null ,
            t) : l
        }
        ,
        t.ratio = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.mode = function(n) {
            return arguments.length ? (i = n + "",
            t) : i
        }
        ,
        gr(t, h)
    }
    ;
    n.random = {
        normal: function(n, t) {
            var i = arguments.length;
            return 2 > i && (t = 1),
            1 > i && (n = 0),
            function() {
                var r, u, i;
                do
                    r = 2 * Math.random() - 1,
                    u = 2 * Math.random() - 1,
                    i = r * r + u * u;
                while (!i || i > 1);return n + t * r * Math.sqrt(-2 * Math.log(i) / i)
            }
        },
        logNormal: function() {
            var t = n.random.normal.apply(n, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        bates: function(t) {
            var i = n.random.irwinHall(t);
            return function() {
                return i() / t
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, i = 0; n > i; i++)
                    t += Math.random();
                return t
            }
        }
    };
    n.scale = {};
    cb = {
        floor: a,
        ceil: a
    };
    n.scale.linear = function() {
        return pp([0, 1], [0, 1], hi, !1)
    }
    ;
    lb = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    n.scale.log = function() {
        return bp(n.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    }
    ;
    kc = n.format(".0e");
    ab = {
        floor: function(n) {
            return -Math.ceil(-n)
        },
        ceil: function(n) {
            return -Math.floor(-n)
        }
    };
    n.scale.pow = function() {
        return kp(n.scale.linear(), 1, [0, 1])
    }
    ;
    n.scale.sqrt = function() {
        return n.scale.pow().exponent(.5)
    }
    ;
    n.scale.ordinal = function() {
        return dp([], {
            t: "range",
            a: [[]]
        })
    }
    ;
    n.scale.category10 = function() {
        return n.scale.ordinal().range(drt)
    }
    ;
    n.scale.category20 = function() {
        return n.scale.ordinal().range(grt)
    }
    ;
    n.scale.category20b = function() {
        return n.scale.ordinal().range(nut)
    }
    ;
    n.scale.category20c = function() {
        return n.scale.ordinal().range(tut)
    }
    ;
    var drt = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(pu)
      , grt = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(pu)
      , nut = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(pu)
      , tut = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(pu);
    n.scale.quantile = function() {
        return gp([], [])
    }
    ;
    n.scale.quantize = function() {
        return nw(0, 1, [0, 1])
    }
    ;
    n.scale.threshold = function() {
        return tw([.5], [0, 1])
    }
    ;
    n.scale.identity = function() {
        return iw([0, 1])
    }
    ;
    n.svg = {};
    n.svg.arc = function() {
        function n() {
            var e = t.apply(this, arguments)
              , n = i.apply(this, arguments)
              , o = r.apply(this, arguments) + ui
              , s = u.apply(this, arguments) + ui
              , h = (o > s && (h = o,
            o = s,
            s = h),
            s - o)
              , c = f > h ? "0" : "1"
              , l = Math.cos(o)
              , a = Math.sin(o)
              , v = Math.cos(s)
              , y = Math.sin(s);
            return h >= vb ? e ? "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z" : e ? "M" + n * l + "," + n * a + "A" + n + "," + n + " 0 " + c + ",1 " + n * v + "," + n * y + "L" + e * v + "," + e * y + "A" + e + "," + e + " 0 " + c + ",0 " + e * l + "," + e * a + "Z" : "M" + n * l + "," + n * a + "A" + n + "," + n + " 0 " + c + ",1 " + n * v + "," + n * y + "L0,0Z"
        }
        var t = sit
          , i = hit
          , r = rw
          , u = uw;
        return n.innerRadius = function(i) {
            return arguments.length ? (t = o(i),
            n) : t
        }
        ,
        n.outerRadius = function(t) {
            return arguments.length ? (i = o(t),
            n) : i
        }
        ,
        n.startAngle = function(t) {
            return arguments.length ? (r = o(t),
            n) : r
        }
        ,
        n.endAngle = function(t) {
            return arguments.length ? (u = o(t),
            n) : u
        }
        ,
        n.centroid = function() {
            var n = (t.apply(this, arguments) + i.apply(this, arguments)) / 2
              , f = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ui;
            return [Math.cos(f) * n, Math.sin(f) * n]
        }
        ,
        n
    }
    ;
    ui = -w;
    vb = d - t;
    n.svg.line = function() {
        return fw(a)
    }
    ;
    be = n.map({
        linear: k,
        "linear-closed": cit,
        step: lit,
        "step-before": eh,
        "step-after": oh,
        basis: ew,
        "basis-open": pit,
        "basis-closed": wit,
        bundle: bit,
        cardinal: yit,
        "cardinal-open": ait,
        "cardinal-closed": vit,
        monotone: git
    });
    be.forEach(function(n, t) {
        t.key = n;
        t.closed = /-closed$/.test(n)
    }
    );
    var yb = [0, 2 / 3, 1 / 3, 0]
      , pb = [0, 1 / 3, 2 / 3, 0]
      , fi = [0, 1 / 6, 2 / 3, 1 / 6];
    n.svg.line.radial = function() {
        var n = fw(ow);
        return n.radius = n.x,
        delete n.x,
        n.angle = n.y,
        delete n.y,
        n
    }
    ;
    eh.reverse = oh;
    oh.reverse = eh;
    n.svg.area = function() {
        return sw(a)
    }
    ;
    n.svg.area.radial = function() {
        var n = sw(ow);
        return n.radius = n.x,
        delete n.x,
        n.innerRadius = n.x0,
        delete n.x0,
        n.outerRadius = n.x1,
        delete n.x1,
        n.angle = n.y,
        delete n.y,
        n.startAngle = n.y0,
        delete n.y0,
        n.endAngle = n.y1,
        delete n.y1,
        n
    }
    ;
    n.svg.chord = function() {
        function n(n, u) {
            var f = h(this, i, n, u)
              , e = h(this, r, n, u);
            return "M" + f.p0 + c(f.r, f.p1, f.a1 - f.a0) + (l(f, e) ? t(f.r, f.p1, f.r, f.p0) : t(f.r, f.p1, e.r, e.p0) + c(e.r, e.p1, e.a1 - e.a0) + t(e.r, e.p1, f.r, f.p0)) + "Z"
        }
        function h(n, t, i, r) {
            var o = t.call(n, i, r)
              , f = u.call(n, o, r)
              , h = e.call(n, o, r) + ui
              , c = s.call(n, o, r) + ui;
            return {
                r: f,
                a0: h,
                a1: c,
                p0: [f * Math.cos(h), f * Math.sin(h)],
                p1: [f * Math.cos(c), f * Math.sin(c)]
            }
        }
        function l(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }
        function c(n, t, i) {
            return "A" + n + "," + n + " 0 " + +(i > f) + ",1 " + t
        }
        function t(n, t, i, r) {
            return "Q 0,0 " + r
        }
        var i = ss
          , r = hs
          , u = nrt
          , e = rw
          , s = uw;
        return n.radius = function(t) {
            return arguments.length ? (u = o(t),
            n) : u
        }
        ,
        n.source = function(t) {
            return arguments.length ? (i = o(t),
            n) : i
        }
        ,
        n.target = function(t) {
            return arguments.length ? (r = o(t),
            n) : r
        }
        ,
        n.startAngle = function(t) {
            return arguments.length ? (e = o(t),
            n) : e
        }
        ,
        n.endAngle = function(t) {
            return arguments.length ? (s = o(t),
            n) : s
        }
        ,
        n
    }
    ;
    n.svg.diagonal = function() {
        function n(n, u) {
            var e = t.call(this, n, u)
              , o = i.call(this, n, u)
              , s = (e.y + o.y) / 2
              , f = [e, {
                x: e.x,
                y: s
            }, {
                x: o.x,
                y: s
            }, o];
            return f = f.map(r),
            "M" + f[0] + "C" + f[1] + " " + f[2] + " " + f[3]
        }
        var t = ss
          , i = hs
          , r = hw;
        return n.source = function(i) {
            return arguments.length ? (t = o(i),
            n) : t
        }
        ,
        n.target = function(t) {
            return arguments.length ? (i = o(t),
            n) : i
        }
        ,
        n.projection = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n
    }
    ;
    n.svg.diagonal.radial = function() {
        var t = n.svg.diagonal()
          , i = hw
          , r = t.projection;
        return t.projection = function(n) {
            return arguments.length ? r(trt(i = n)) : i
        }
        ,
        t
    }
    ;
    n.svg.symbol = function() {
        function n(n, r) {
            return (dc.get(t.call(this, n, r)) || cw)(i.call(this, n, r))
        }
        var t = rrt
          , i = irt;
        return n.type = function(i) {
            return arguments.length ? (t = o(i),
            n) : t
        }
        ,
        n.size = function(t) {
            return arguments.length ? (i = o(t),
            n) : i
        }
        ,
        n
    }
    ;
    dc = n.map({
        circle: cw,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * wb))
              , i = t * wb;
            return "M0," + -t + "L" + i + ",0 0," + t + " " + -i + ",0Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / de)
              , i = t * de / 2;
            return "M0," + i + "L" + t + "," + -i + " " + -t + "," + -i + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / de)
              , i = t * de / 2;
            return "M0," + -i + "L" + t + "," + i + " " + -t + "," + i + "Z"
        }
    });
    n.svg.symbolTypes = dc.keys();
    var pi, ke, de = Math.sqrt(3), wb = Math.tan(30 * r), l = [], bb = 0;
    l.call = e.call;
    l.empty = e.empty;
    l.node = e.node;
    l.size = e.size;
    n.transition = function(n) {
        return arguments.length ? pi ? n.transition() : n : kh.transition()
    }
    ;
    n.transition.prototype = l;
    l.select = function(n) {
        var f, i, t, e = this.id, o = [], r, s;
        for (n = fo(n),
        r = -1,
        s = this.length; ++r < s; ) {
            o.push(f = []);
            for (var h = this[r], u = -1, c = h.length; ++u < c; )
                (t = h[u]) && (i = n.call(t, t.__data__, u, r)) ? ("__data__" in t && (i.__data__ = t.__data__),
                wf(i, u, e, t.__transition__[e]),
                f.push(i)) : f.push(null )
        }
        return tu(o, e)
    }
    ;
    l.selectAll = function(n) {
        var s, u, t, f, h, e = this.id, c = [], i, l, r, v;
        for (n = ll(n),
        i = -1,
        l = this.length; ++i < l; )
            for (var a = this[i], o = -1, y = a.length; ++o < y; )
                if (t = a[o])
                    for (h = t.__transition__[e],
                    u = n.call(t, t.__data__, o, i),
                    c.push(s = []),
                    r = -1,
                    v = u.length; ++r < v; )
                        (f = u[r]) && wf(f, r, e, h),
                        s.push(f);
        return tu(c, e)
    }
    ;
    l.filter = function(n) {
        var u, f, i, e = [], t, o;
        for ("function" != typeof n && (n = gl(n)),
        t = 0,
        o = this.length; o > t; t++) {
            e.push(u = []);
            for (var f = this[t], r = 0, s = f.length; s > r; r++)
                (i = f[r]) && n.call(i, i.__data__, r, t) && u.push(i)
        }
        return tu(e, this.id)
    }
    ;
    l.tween = function(n, t) {
        var i = this.id;
        return arguments.length < 2 ? this.node().__transition__[i].tween.get(n) : pt(this, null  == t ? function(t) {
            t.__transition__[i].tween.remove(n)
        }
         : function(r) {
            r.__transition__[i].tween.set(n, t)
        }
        )
    }
    ;
    l.attr = function(t, i) {
        function f() {
            this.removeAttribute(r)
        }
        function e() {
            this.removeAttributeNS(r.space, r.local)
        }
        function o(n) {
            return null  == n ? f : (n += "",
            function() {
                var t, i = this.getAttribute(r);
                return i !== n && (t = u(i, n),
                function(n) {
                    this.setAttribute(r, t(n))
                }
                )
            }
            )
        }
        function s(n) {
            return null  == n ? e : (n += "",
            function() {
                var t, i = this.getAttributeNS(r.space, r.local);
                return i !== n && (t = u(i, n),
                function(n) {
                    this.setAttributeNS(r.space, r.local, t(n))
                }
                )
            }
            )
        }
        if (arguments.length < 2) {
            for (i in t)
                this.attr(i, t[i]);
            return this
        }
        var u = "transform" == t ? ip : hi
          , r = n.ns.qualify(t);
        return lh(this, "attr." + t, i, r.local ? s : o)
    }
    ;
    l.attrTween = function(t, i) {
        function u(n, t) {
            var u = i.call(this, n, t, this.getAttribute(r));
            return u && function(n) {
                this.setAttribute(r, u(n))
            }
        }
        function f(n, t) {
            var u = i.call(this, n, t, this.getAttributeNS(r.space, r.local));
            return u && function(n) {
                this.setAttributeNS(r.space, r.local, u(n))
            }
        }
        var r = n.ns.qualify(t);
        return this.tween("attr." + t, r.local ? f : u)
    }
    ;
    l.style = function(n, t, i) {
        function u() {
            this.style.removeProperty(n)
        }
        function f(t) {
            return null  == t ? u : (t += "",
            function() {
                var r, u = v.getComputedStyle(this, null ).getPropertyValue(n);
                return u !== t && (r = hi(u, t),
                function(t) {
                    this.style.setProperty(n, r(t), i)
                }
                )
            }
            )
        }
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (i in n)
                    this.style(i, n[i], t);
                return this
            }
            i = ""
        }
        return lh(this, "style." + n, t, f)
    }
    ;
    l.styleTween = function(n, t, i) {
        function r(r, u) {
            var f = t.call(this, r, u, v.getComputedStyle(this, null ).getPropertyValue(n));
            return f && function(t) {
                this.style.setProperty(n, f(t), i)
            }
        }
        return arguments.length < 3 && (i = ""),
        this.tween("style." + n, r)
    }
    ;
    l.text = function(n) {
        return lh(this, "text", n, urt)
    }
    ;
    l.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        }
        )
    }
    ;
    l.ease = function(t) {
        var i = this.id;
        return arguments.length < 1 ? this.node().__transition__[i].ease : ("function" != typeof t && (t = n.ease.apply(n, arguments)),
        pt(this, function(n) {
            n.__transition__[i].ease = t
        }
        ))
    }
    ;
    l.delay = function(n) {
        var t = this.id;
        return pt(this, "function" == typeof n ? function(i, r, u) {
            i.__transition__[t].delay = +n.call(i, i.__data__, r, u)
        }
         : (n = +n,
        function(i) {
            i.__transition__[t].delay = n
        }
        ))
    }
    ;
    l.duration = function(n) {
        var t = this.id;
        return pt(this, "function" == typeof n ? function(i, r, u) {
            i.__transition__[t].duration = Math.max(1, n.call(i, i.__data__, r, u))
        }
         : (n = Math.max(1, n),
        function(i) {
            i.__transition__[t].duration = n
        }
        ))
    }
    ;
    l.each = function(t, i) {
        var r = this.id, u, f;
        return arguments.length < 2 ? (u = ke,
        f = pi,
        pi = r,
        pt(this, function(n, i, u) {
            ke = n.__transition__[r];
            t.call(n, n.__data__, i, u)
        }
        ),
        ke = u,
        pi = f) : pt(this, function(u) {
            var f = u.__transition__[r];
            (f.event || (f.event = n.dispatch("start", "end"))).on(t, i)
        }
        ),
        this
    }
    ;
    l.transition = function() {
        for (var u, f, n, t, s = this.id, e = ++bb, o = [], r = 0, h = this.length; h > r; r++) {
            o.push(u = []);
            for (var f = this[r], i = 0, c = f.length; c > i; i++)
                (n = f[i]) && (t = Object.create(n.__transition__[s]),
                t.delay += t.duration,
                wf(n, i, e, t)),
                u.push(n)
        }
        return tu(o, e)
    }
    ;
    n.svg.axis = function() {
        function i(i) {
            i.each(function() {
                var v, ut = n.select(this), p = this.__chart__ || o, i = this.__chart__ = o.copy(), ot = null  == h ? i.ticks ? i.ticks.apply(i, s) : i.domain() : h, st = null  == e ? i.tickFormat ? i.tickFormat.apply(i, s) : a : e, w = ut.selectAll(".tick").data(ot, i), y = w.enter().insert("g", ".domain").attr("class", "tick").style("opacity", t), ht = n.transition(w.exit()).style("opacity", t).remove(), it = n.transition(w).style("opacity", 1), l = vf(i), ft = ut.selectAll(".domain").data([0]), b = (ft.enter().append("path").attr("class", "domain"),
                n.transition(ft)), rt, et;
                y.append("line");
                y.append("text");
                var k = y.select("line")
                  , d = it.select("line")
                  , g = w.select("text").text(st)
                  , nt = y.select("text")
                  , tt = it.select("text");
                switch (c) {
                case "bottom":
                    v = lw;
                    k.attr("y2", r);
                    nt.attr("y", Math.max(r, 0) + f);
                    d.attr("x2", 0).attr("y2", r);
                    tt.attr("x", 0).attr("y", Math.max(r, 0) + f);
                    g.attr("dy", ".71em").style("text-anchor", "middle");
                    b.attr("d", "M" + l[0] + "," + u + "V0H" + l[1] + "V" + u);
                    break;
                case "top":
                    v = lw;
                    k.attr("y2", -r);
                    nt.attr("y", -(Math.max(r, 0) + f));
                    d.attr("x2", 0).attr("y2", -r);
                    tt.attr("x", 0).attr("y", -(Math.max(r, 0) + f));
                    g.attr("dy", "0em").style("text-anchor", "middle");
                    b.attr("d", "M" + l[0] + "," + -u + "V0H" + l[1] + "V" + -u);
                    break;
                case "left":
                    v = aw;
                    k.attr("x2", -r);
                    nt.attr("x", -(Math.max(r, 0) + f));
                    d.attr("x2", -r).attr("y2", 0);
                    tt.attr("x", -(Math.max(r, 0) + f)).attr("y", 0);
                    g.attr("dy", ".32em").style("text-anchor", "end");
                    b.attr("d", "M" + -u + "," + l[0] + "H0V" + l[1] + "H" + -u);
                    break;
                case "right":
                    v = aw;
                    k.attr("x2", r);
                    nt.attr("x", Math.max(r, 0) + f);
                    d.attr("x2", r).attr("y2", 0);
                    tt.attr("x", Math.max(r, 0) + f).attr("y", 0);
                    g.attr("dy", ".32em").style("text-anchor", "start");
                    b.attr("d", "M" + u + "," + l[0] + "H0V" + l[1] + "H" + u)
                }
                i.rangeBand ? (rt = i,
                et = rt.rangeBand() / 2,
                p = i = function(n) {
                    return rt(n) + et
                }
                ) : p.rangeBand ? p = i : ht.call(v, i);
                y.call(v, p);
                it.call(v, i)
            }
            )
        }
        var e, o = n.scale.linear(), c = gc, r = 6, u = 6, f = 3, s = [10], h = null ;
        return i.scale = function(n) {
            return arguments.length ? (o = n,
            i) : o
        }
        ,
        i.orient = function(n) {
            return arguments.length ? (c = n in kb ? n + "" : gc,
            i) : c
        }
        ,
        i.ticks = function() {
            return arguments.length ? (s = arguments,
            i) : s
        }
        ,
        i.tickValues = function(n) {
            return arguments.length ? (h = n,
            i) : h
        }
        ,
        i.tickFormat = function(n) {
            return arguments.length ? (e = n,
            i) : e
        }
        ,
        i.tickSize = function(n) {
            var t = arguments.length;
            return t ? (r = +n,
            u = +arguments[t - 1],
            i) : r
        }
        ,
        i.innerTickSize = function(n) {
            return arguments.length ? (r = +n,
            i) : r
        }
        ,
        i.outerTickSize = function(n) {
            return arguments.length ? (u = +n,
            i) : u
        }
        ,
        i.tickPadding = function(n) {
            return arguments.length ? (f = +n,
            i) : f
        }
        ,
        i.tickSubdivide = function() {
            return arguments.length && i
        }
        ,
        i
    }
    ;
    gc = "bottom";
    kb = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    n.svg.brush = function() {
        function f(t) {
            t.each(function() {
                var i = n.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", b).on("touchstart.brush", b), h = i.selectAll(".background").data([0]), e, t, o, s;
                h.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                e = i.selectAll(".resize").data(l, a);
                e.exit().remove();
                e.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }
                ).style("cursor", function(n) {
                    return iut[n]
                }
                ).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }
                ).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }
                ).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                e.style("display", f.empty() ? "none" : null );
                o = n.transition(i);
                s = n.transition(h);
                r && (t = vf(r),
                s.attr("x", t[0]).attr("width", t[1] - t[0]),
                p(o));
                u && (t = vf(u),
                s.attr("y", t[0]).attr("height", t[1] - t[0]),
                w(o));
                y(o)
            }
            )
        }
        function y(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + t[+/e$/.test(n)] + "," + i[+/^s/.test(n)] + ")"
            }
            )
        }
        function p(n) {
            n.select(".extent").attr("x", t[0]);
            n.selectAll(".extent,.n>rect,.s>rect").attr("width", t[1] - t[0])
        }
        function w(n) {
            n.select(".extent").attr("y", i[0]);
            n.selectAll(".extent,.e>rect,.w>rect").attr("height", i[1] - i[0])
        }
        function b() {
            function ht() {
                32 == n.event.keyCode && (b || (a = null ,
                l[0] -= t[1],
                l[1] -= i[1],
                b = 2),
                vt())
            }
            function ct() {
                32 == n.event.keyCode && 2 == b && (l[0] += t[1],
                l[1] += i[1],
                b = 0,
                vt())
            }
            function g() {
                var f = n.mouse(tt)
                  , e = !1;
                nt && (f[0] += nt[0],
                f[1] += nt[1]);
                b || (n.event.altKey ? (a || (a = [(t[0] + t[1]) / 2, (i[0] + i[1]) / 2]),
                l[0] = t[+(f[0] < a[0])],
                l[1] = i[+(f[1] < a[1])]) : a = null );
                lt && ot(f, r, 0) && (p(k),
                e = !0);
                at && ot(f, u, 1) && (w(k),
                e = !0);
                e && (y(k),
                rt({
                    type: "brush",
                    mode: b ? "move" : "resize"
                }))
            }
            function ot(n, r, u) {
                var f, y, k = vf(r), p = k[0], w = k[1], c = l[u], v = u ? i : t, d = v[1] - v[0];
                return b && (p -= c,
                w -= d + c),
                f = (u ? h : s) ? Math.max(p, Math.min(w, n[u])) : n[u],
                b ? y = (f += c) + d : (a && (c = Math.max(p, Math.min(w, 2 * a[u] - f))),
                f > c ? (y = f,
                f = c) : y = c),
                v[0] != f || v[1] != y ? (u ? o = null  : e = null ,
                v[0] = f,
                v[1] = y,
                !0) : void 0
            }
            function st() {
                g();
                k.style("pointer-events", "all").selectAll(".resize").style("display", f.empty() ? "none" : null );
                n.select("body").style("cursor", null );
                ut.on("mousemove.brush", null ).on("mouseup.brush", null ).on("touchmove.brush", null ).on("touchend.brush", null ).on("keydown.brush", null ).on("keyup.brush", null );
                yt();
                rt({
                    type: "brushend"
                })
            }
            var a, nt, tt = this, it = n.select(n.event.target), rt = c.of(tt, arguments), k = n.select(tt), d = it.datum(), lt = !/^(n|s)$/.test(d) && r, at = !/^(e|w)$/.test(d) && u, b = it.classed("extent"), yt = au(), l = n.mouse(tt), ut = n.select(v).on("keydown.brush", ht).on("keyup.brush", ct), ft, et;
            (n.event.changedTouches ? ut.on("touchmove.brush", g).on("touchend.brush", st) : ut.on("mousemove.brush", g).on("mouseup.brush", st),
            k.interrupt().selectAll("*").interrupt(),
            b) ? (l[0] = t[0] - l[0],
            l[1] = i[0] - l[1]) : d ? (ft = +/w$/.test(d),
            et = +/^n/.test(d),
            nt = [t[1 - ft] - l[0], i[1 - et] - l[1]],
            l[0] = t[ft],
            l[1] = i[et]) : n.event.altKey && (a = l.slice());
            k.style("pointer-events", "none").selectAll(".resize").style("display", null );
            n.select("body").style("cursor", it.style("cursor"));
            rt({
                type: "brushstart"
            });
            g()
        }
        var e, o, c = uo(f, "brushstart", "brush", "brushend"), r = null , u = null , t = [0, 0], i = [0, 0], s = !0, h = !0, l = nl[0];
        return f.event = function(r) {
            r.each(function() {
                var u = c.of(this, arguments)
                  , r = {
                    x: t,
                    y: i,
                    i: e,
                    j: o
                }
                  , f = this.__chart__ || r;
                this.__chart__ = r;
                pi ? n.select(this).transition().each("start.brush", function() {
                    e = f.i;
                    o = f.j;
                    t = f.x;
                    i = f.y;
                    u({
                        type: "brushstart"
                    })
                }
                ).tween("brush:brush", function() {
                    var n = lf(t, r.x)
                      , f = lf(i, r.y);
                    return e = o = null ,
                    function(e) {
                        t = r.x = n(e);
                        i = r.y = f(e);
                        u({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }
                ).each("end.brush", function() {
                    e = r.i;
                    o = r.j;
                    u({
                        type: "brush",
                        mode: "resize"
                    });
                    u({
                        type: "brushend"
                    })
                }
                ) : (u({
                    type: "brushstart"
                }),
                u({
                    type: "brush",
                    mode: "resize"
                }),
                u({
                    type: "brushend"
                }))
            }
            )
        }
        ,
        f.x = function(n) {
            return arguments.length ? (r = n,
            l = nl[!r << 1 | !u],
            f) : r
        }
        ,
        f.y = function(n) {
            return arguments.length ? (u = n,
            l = nl[!r << 1 | !u],
            f) : u
        }
        ,
        f.clamp = function(n) {
            return arguments.length ? (r && u ? (s = !!n[0],
            h = !!n[1]) : r ? s = !!n : u && (h = !!n),
            f) : r && u ? [s, h] : r ? s : u ? h : null
        }
        ,
        f.extent = function(n) {
            var s, h, c, l, a;
            return arguments.length ? (r && (s = n[0],
            h = n[1],
            u && (s = s[0],
            h = h[0]),
            e = [s, h],
            r.invert && (s = r(s),
            h = r(h)),
            s > h && (a = s,
            s = h,
            h = a),
            (s != t[0] || h != t[1]) && (t = [s, h])),
            u && (c = n[0],
            l = n[1],
            r && (c = c[1],
            l = l[1]),
            o = [c, l],
            u.invert && (c = u(c),
            l = u(l)),
            c > l && (a = c,
            c = l,
            l = a),
            (c != i[0] || l != i[1]) && (i = [c, l])),
            f) : (r && (e ? (s = e[0],
            h = e[1]) : (s = t[0],
            h = t[1],
            r.invert && (s = r.invert(s),
            h = r.invert(h)),
            s > h && (a = s,
            s = h,
            h = a))),
            u && (o ? (c = o[0],
            l = o[1]) : (c = i[0],
            l = i[1],
            u.invert && (c = u.invert(c),
            l = u.invert(l)),
            c > l && (a = c,
            c = l,
            l = a))),
            r && u ? [[s, c], [h, l]] : r ? [s, h] : u && [c, l])
        }
        ,
        f.clear = function() {
            return f.empty() || (t = [0, 0],
            i = [0, 0],
            e = o = null ),
            f
        }
        ,
        f.empty = function() {
            return !!r && t[0] == t[1] || !!u && i[0] == i[1]
        }
        ,
        n.rebind(f, c, "on")
    }
    ;
    var iut = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }
      , nl = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []]
      , tl = i.format = rc.timeFormat
      , db = tl.utc
      , gb = db("%Y-%m-%dT%H:%M:%S.%LZ");
    tl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ah : gb;
    ah.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null  : t
    }
    ;
    ah.toString = gb.toString;
    i.second = ei(function(n) {
        return new y(1e3 * Math.floor(n / 1e3))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }
    , function(n) {
        return n.getSeconds()
    }
    );
    i.seconds = i.second.range;
    i.seconds.utc = i.second.utc.range;
    i.minute = ei(function(n) {
        return new y(6e4 * Math.floor(n / 6e4))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }
    , function(n) {
        return n.getMinutes()
    }
    );
    i.minutes = i.minute.range;
    i.minutes.utc = i.minute.utc.range;
    i.hour = ei(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new y(36e5 * (Math.floor(n / 36e5 - t) + t))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }
    , function(n) {
        return n.getHours()
    }
    );
    i.hours = i.hour.range;
    i.hours.utc = i.hour.utc.range;
    i.month = ei(function(n) {
        return n = i.day(n),
        n.setDate(1),
        n
    }
    , function(n, t) {
        n.setMonth(n.getMonth() + t)
    }
    , function(n) {
        return n.getMonth()
    }
    );
    i.months = i.month.range;
    i.months.utc = i.month.utc.range;
    var ge = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
      , il = [[i.second, 1], [i.second, 5], [i.second, 15], [i.second, 30], [i.minute, 1], [i.minute, 5], [i.minute, 15], [i.minute, 30], [i.hour, 1], [i.hour, 3], [i.hour, 6], [i.hour, 12], [i.day, 1], [i.day, 2], [i.week, 1], [i.month, 1], [i.month, 3], [i.year, 1]]
      , rut = tl.multi([[".%L", function(n) {
        return n.getMilliseconds()
    }
    ], [":%S", function(n) {
        return n.getSeconds()
    }
    ], ["%I:%M", function(n) {
        return n.getMinutes()
    }
    ], ["%I %p", function(n) {
        return n.getHours()
    }
    ], ["%a %d", function(n) {
        return n.getDay() && 1 != n.getDate()
    }
    ], ["%b %d", function(n) {
        return 1 != n.getDate()
    }
    ], ["%B", function(n) {
        return n.getMonth()
    }
    ], ["%Y", ir]])
      , uut = {
        range: function(t, i, r) {
            return n.range(+t, +i, r).map(ci)
        },
        floor: a,
        ceil: a
    };
    il.year = i.year;
    i.scale = function() {
        return vh(n.scale.linear(), il, rut)
    }
    ;
    rl = il.map(function(n) {
        return [n[0].utc, n[1]]
    }
    );
    nk = db.multi([[".%L", function(n) {
        return n.getUTCMilliseconds()
    }
    ], [":%S", function(n) {
        return n.getUTCSeconds()
    }
    ], ["%I:%M", function(n) {
        return n.getUTCMinutes()
    }
    ], ["%I %p", function(n) {
        return n.getUTCHours()
    }
    ], ["%a %d", function(n) {
        return n.getUTCDay() && 1 != n.getUTCDate()
    }
    ], ["%b %d", function(n) {
        return 1 != n.getUTCDate()
    }
    ], ["%B", function(n) {
        return n.getUTCMonth()
    }
    ], ["%Y", ir]]);
    rl.year = i.year.utc;
    i.scale.utc = function() {
        return vh(n.scale.linear(), rl, nk)
    }
    ;
    n.text = bo(function(n) {
        return n.responseText
    }
    );
    n.json = function(n, t) {
        return wu(n, "application/json", frt, t)
    }
    ;
    n.html = function(n, t) {
        return wu(n, "text/html", ert, t)
    }
    ;
    n.xml = bo(function(n) {
        return n.responseXML
    }
    );
    "function" == typeof define && define.amd ? define(n) : "object" == typeof module && module.exports ? module.exports = n : this.d3 = n
}
();
window.Experience = function(n) {
    function lt() {
        c = 0;
        yt();
        d = ["Cinema"];
        choiceStageArray = [];
        at();
        pt();
        gi();
        ft(f);
        ki();
        vt()
    }
    function at() {
        e = n("#experience");
        f = n("#video");
        t = n("#choice-container");
        b = n(".start");
        $startContainer = n("#start-container");
        $controlsContainer = n(".controls-container");
        $header = n(".header");
        $menuButton = n("#menu-button");
        tt = n("#firstProgressContainer");
        it = n("#secondProgressContainer");
        a = n("#loading-bar-container")
    }
    function vt() {
        $menuButton.on("click", function() {
            $header.toggleClass("hidden");
            e.toggleClass("nav-open")
        }
        )
    }
    function yt() {
        Modernizr.video && (Modernizr.video.h264 ? h = ".mp4" : Modernizr.video.webm ? h = ".webm" : Modernizr.video.ogg && (h = ".ogv"))
    }
    function pt() {
        b.on("click", function() {
            n(this).hasClass("clicked") ? (s.loading(),
            e.trigger("start")) : (n(this).addClass("clicked"),
            n(this).find(".start-text").text("Play"),
            $startContainer.addClass("tutorial"))
        }
        );
        e.on("start", function() {
            wt()
        }
        )
    }
    function wt() {
        y = u.Intro;
        dt(u.Intro)
    }
    function bt() {
        if (Modernizr.csstransitions) {
            $startContainer.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                n(this).remove()
            }
            );
            $startContainer.addClass("fadeOut")
        } else
            $startContainer.fadeOut(500, function() {
                n(this).remove()
            }
            );
        k = !0
    }
    function kt(n) {
        i.on("waiting", function() {}
        );
        i.on("loadeddata", function() {
            i.one("ended", function() {
                i.off("ended");
                ni()
            }
            );
            i.one("canplaythrough", function() {
                i.off("canplaythrough");
                k === !1 && bt();
                $controlsContainer.addClass("show");
                p.loaded && ai();
                s.loaded();
                nt = ct[c];
                a.removeClass("hidden");
                er(i.duration());
                i.play()
            }
            )
        }
        );
        typeof n == "function" && n()
    }
    function dt(n) {
        function t() {
            tr();
            i.src(n + h)
        }
        videojs("video").ready(function() {
            i = this;
            kt(t)
        }
        )
    }
    function gt(n) {
        s.loading();
        f.css("opacity", "1");
        i.src(n + h);
        c++
    }
    function ni() {
        var n = ri();
        n ? ti(n) : pi()
    }
    function ti(r) {
        s.loading();
        t.load(r.html, function() {
            a.addClass("hidden");
            s.loaded();
            n(this).imagesLoaded(function() {
                if (n("#right-column-image").width(n("#right-section").width()),
                n("#left-column-image").width(n("#left-section").width()),
                $controlsContainer.removeClass("show"),
                Modernizr.csstransitions) {
                    t.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        n(this).imagesLoaded(function() {
                            i.src("")
                        }
                        );
                        p.loaded = !0;
                        n(this).addClass("active")
                    }
                    );
                    t.addClass("slideIn")
                } else
                    t.addClass("slideIn"),
                    i.src(""),
                    p.loaded = !0,
                    t.addClass("active");
                t.addClass("slideIn");
                setTimeout(function() {
                    n(".timer").addClass("flip");
                    e.addClass("timer-active");
                    ii();
                    ui(r)
                }
                , rt.introTime)
            }
            )
        }
        )
    }
    function ii() {
        var t = n("#left-title")
          , i = n("#right-title")
          , r = n("#left-section")
          , u = n("#right-section");
        t.hover(function() {
            r.addClass("hover")
        }
        , function() {
            r.removeClass("hover")
        }
        );
        i.hover(function() {
            u.addClass("hover")
        }
        , function() {
            u.removeClass("hover")
        }
        );
        t.on("click", function() {}
        );
        i.on("click", function() {}
        )
    }
    function ri() {
        switch (y) {
        case u.Intro:
            return r.firstChoice;
        case u.Cinema:
            return r.secondChoice;
        case u.Nightclub:
            return r.secondChoiceAlternate
        }
    }
    function ui(t) {
        function r(i) {
            n.each(i, function(t, i) {
                n.playbackEvents(i, {
                    interval: 25,
                    dom: n("#choice-container")
                })
            }
            );
            fi(t)
        }
        var i;
        g ? (i = o,
        r(i)) : (g = !0,
        i = t.mouseMoveJson,
        n.getJSON(i, function(n) {
            r(n.data)
        }
        ))
    }
    function fi(t) {
        var i, r = n.recordEvents({
            duration: rt.choiceTime
        }, function() {
            clearInterval(i);
            oi();
            nr();
            f.css("opacity", "1");
            n(".timer").removeClass("flip");
            e.removeClass("timer-active");
            var r = this.frames[this.frames.length - 1]
              , u = vi(r);
            si(this.exportJSON(), t, r, u);
            hi(r, t, u)
        }
        ), u = n("#left-title"), o = n("#right-title"), s = n("#left-section"), h = n("#right-section");
        u.on("click", function() {
            r.stop()
        }
        );
        o.on("click", function() {
            r.stop()
        }
        );
        setTimeout(function() {
            n(".no-timer").removeClass("no-timer");
            rr();
            i = setInterval(function() {
                ei()
            }
            , 1e3)
        }
        , 3e3)
    }
    function ei() {
        var t = parseInt(n(".number").text(), 10), i;
        t > 0 && (i = t - 1,
        n(".number").text(i))
    }
    function oi() {
        n(".wrapper").removeClass("active")
    }
    function si(t, i, r, u) {
        var f, e;
        r ? r.x > 50 ? (f = "B",
        u = "B") : (f = "A",
        u = "A") : f = "None";
        e = {
            choiceCode: i.choiceCode,
            frames: t,
            userSelection: f,
            groupSelection: u
        };
        n.ajax({
            type: "POST",
            url: ht.url,
            data: JSON.stringify(e),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function(n) {
            o = n.data
        }
        )
    }
    function hi(n, t, i) {
        var u, f = n ? n.x > 50 ? "B" : "A" : i;
        switch (t) {
        case r.firstChoice:
            u = r.firstChoice[f];
            break;
        case r.secondChoice:
            u = r.secondChoice[f];
            break;
        case r.secondChoiceAlternate:
            u = r.secondChoiceAlternate[f]
        }
        ci(t);
        li(f, u)
    }
    function ci(n) {
        n !== r.firstChoice && choiceStageArray.push(n.choiceCode)
    }
    function li(n, i) {
        if (Modernizr.csstransitions)
            t.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(n) {
                t.off("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd");
                n.stopPropagation();
                ut(i)
            }
            );
        n === "A" ? t.addClass("slideRight") : n === "B" && t.addClass("slideAcross");
        Modernizr.csstransitions || ut(i)
    }
    function ut(n) {
        y = n;
        gt(n)
    }
    function ai() {
        if (Modernizr.csstransitions) {
            t.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function(n) {
                n.stopPropagation();
                n.target === t[0] && (t.off("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),
                t.removeClass("active slideIn slideAcross slideRight fadeOut"),
                t.empty())
            }
            );
            t.addClass("fadeOut")
        } else
            t.addClass("fadeOut"),
            t.removeClass("active slideIn slideAcross slideRight fadeOut"),
            t.empty()
    }
    function vi(t) {
        var r, i, u;
        return t ? r = t.x ? n(".event-playback-cursor").length + 1 : n(".event-playback-cursor").length : (t === undefined && (t = {}),
        t.x = !1),
        i = 0,
        u = r * 100,
        n(".event-playback-cursor").each(function() {
            i = i + parseInt(n(this).attr("data-x"), 10)
        }
        ),
        t.x && (i = i + parseInt(t.x, 10)),
        i / u * 100 < 50 ? "A" : "B"
    }
    function pi() {
        t.addClass("endOut hideStats");
        t.load(r.end.html, function() {
            n(this).imagesLoaded(function() {
                setTimeout(function() {
                    t.addClass("endIn");
                    $controlsContainer.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                        n(this).remove()
                    }
                    );
                    a.addClass("hidden");
                    $controlsContainer.removeClass("show")
                }
                , 0);
                n(".stats-trigger").on("click", function(n) {
                    n.preventDefault();
                    wi()
                }
                )
            }
            )
        }
        )
    }
    function wi() {
        n(".experience-header").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
            n(this).hide();
            ir()
        }
        );
        t.addClass("statsShowing")
    }
    function ft(t) {
        var u = n(window).height()
          , i = n(window).width()
          , r = u / 5 * 8
          , f = i / 8 * 5;
        r < i ? t.css("width", i + "px") : t.css("width", r + "px")
    }
    function ki() {
        n(window).resize(function() {
            et();
            w === !1 && (w = !0,
            setTimeout(di, bi))
        }
        )
    }
    function et() {
        ft(f)
    }
    function di() {
        et();
        w = !1
    }
    function gi() {
        $nav = n(".header");
        n(window).load(function() {
            n(".header").addClass("hidden");
            e.removeClass("nav-open");
            n("body").addClass("loaded")
        }
        )
    }
    function nr() {
        n(".left-section").off("hover")
    }
    function tr() {
        var t = n(".pause")
          , r = n(".replay")
          , u = n(".mute");
        t.on("click", function() {
            i.paused() ? (n(this).removeClass("play"),
            i.play()) : (n(this).addClass("play"),
            i.pause())
        }
        );
        r.on("click", function() {
            i.currentTime(0);
            i.play();
            s.loaded()
        }
        );
        u.on("click", function() {
            i.muted() ? i.muted(!1) : i.muted(!0);
            n(this).toggleClass("active")
        }
        )
    }
    function ot(n) {
        return n == "first" ? [o.firstChoice.a, o.firstChoice.b] : [o.secondChoice.a, o.secondChoice.b]
    }
    function ir() {
        function l(n) {
            var t = d3.interpolate({
                startAngle: 0 * Math.PI,
                endAngle: 0 * Math.PI
            }, n);
            return function(n) {
                return o(t(n))
            }
        }
        function k(r) {
            function y(n) {
                return n.startAngle + (n.endAngle - n.startAngle) / 2
            }
            var v = i.select(".slices").selectAll("path.slice").data(f(r), u), h, c, a;
            v.enter().insert("path").style("fill", function(n, t) {
                return s[t]
            }
            ).attr("class", "slice");
            v.transition().duration(900).attrTween("d", l);
            v.exit().remove();
            h = i.select(".labels").selectAll("text").data(f(r), u);
            c = h.enter().append("svg:text").attr("dy", ".35em").attr("class", "text-label");
            c.append("svg:tspan").attr("class", "you").attr("x", 0).each(function(t) {
                t.data.isMySelection === !0 ? n(this).attr("dy", "-63") : n(this).attr("dy", "0")
            }
            ).text(function(n) {
                if (n.data.isMySelection === !0)
                    return "You &"
            }
            );
            c.append("svg:tspan").attr("class", "percentage").attr("x", 0).attr("dy", "0.8em").each(function(t) {
                t.data.isMySelection === !0 || n(this).attr("dy", "0.35em")
            }
            ).text(function() {
                return 0
            }
            );
            c.append("svg:tspan").attr("class", "description").attr("x", 0).attr("dy", "1.5em").each(function(t, i) {
                i > 0 ? n(this).attr("x", "-1") : n(this).attr("x", "5")
            }
            ).text(function(n, t) {
                return p[t]
            }
            );
            h.transition().duration(900).attrTween("transform", function(n) {
                this._current = this._current || n;
                var i = d3.interpolate(this._current, n);
                return this._current = i(0),
                function(n) {
                    var r = i(n)
                      , u = e.centroid(r);
                    return u[0] = t * (y(r) < Math.PI ? 1 : -1),
                    "translate(" + u + ")"
                }
            }
            ).styleTween("text-anchor", function(n) {
                this._current = this._current || n;
                var t = d3.interpolate(this._current, n);
                return this._current = t(0),
                function(n) {
                    var i = t(n);
                    return y(i) < Math.PI ? "start" : "end"
                }
            }
            ).select("tspan.percentage").tween("text", function(n) {
                var r = d3.interpolate(0, n.data.selectionPercentage)
                  , t = (n.data.selectionPercentage + "").split(".")
                  , i = t.length > 1 ? Math.pow(10, t[1].length) : 1;
                return function(n) {
                    this.textContent = " " + Math.round(r(n) * i) / i + "%"
                }
            }
            );
            h.exit().remove();
            a = i.select(".lines").selectAll("polyline").data(f(r), u);
            a.enter().append("polyline");
            a.transition().duration(900).attrTween("points", function(n) {
                this._current = this._current || n;
                var i = d3.interpolate(this._current, n);
                return this._current = i(0),
                function(n) {
                    var r = i(n)
                      , u = e.centroid(r);
                    return u[0] = t * .95 * (y(r) < Math.PI ? 1 : -1),
                    [o.centroid(r), e.centroid(r), u]
                }
            }
            );
            a.exit().remove()
        }
        function d(i) {
            function b(n) {
                return n.startAngle + (n.endAngle - n.startAngle) / 2
            }
            var w = r.select(".slices").selectAll("path.slice").data(f(i), u), h, c, p;
            w.enter().insert("path").style("fill", function(n, t) {
                return s[t]
            }
            ).attr("class", "slice");
            w.transition().duration(900).attrTween("d", l);
            w.exit().remove();
            h = r.select(".labels").selectAll("text").data(f(i), u);
            c = h.enter().append("svg:text").attr("dy", ".35em").attr("class", "text-label");
            c.append("svg:tspan").attr("class", "you").attr("x", 0).each(function(t) {
                t.data.isMySelection === !0 ? n(this).attr("dy", "-63") : n(this).attr("dy", "0")
            }
            ).text(function(n) {
                if (n.data.isMySelection === !0)
                    return "You &"
            }
            );
            c.append("svg:tspan").attr("class", "percentage").attr("x", 0).attr("dy", "0.8em").each(function(t) {
                t.data.isMySelection === !0 || n(this).attr("dy", "0.35em")
            }
            ).text(function() {
                return 0
            }
            );
            c.append("svg:tspan").attr("class", "description").attr("x", 0).attr("dy", "1.5em").each(function(t, i) {
                i > 0 ? n(this).attr("x", "-1") : n(this).attr("x", "5")
            }
            ).text(function(n, t) {
                return a === "C2A" ? v[t] : y[t]
            }
            );
            h.transition().duration(900).attrTween("transform", function(n) {
                this._current = this._current || n;
                var i = d3.interpolate(this._current, n);
                return this._current = i(0),
                function(n) {
                    var r = i(n)
                      , u = e.centroid(r);
                    return u[0] = t * (b(r) < Math.PI ? 1 : -1),
                    "translate(" + u + ")"
                }
            }
            ).styleTween("text-anchor", function(n) {
                this._current = this._current || n;
                var t = d3.interpolate(this._current, n);
                return this._current = t(0),
                function(n) {
                    var i = t(n);
                    return b(i) < Math.PI ? "start" : "end"
                }
            }
            ).select("tspan.percentage").tween("text", function(n) {
                var r = d3.interpolate(0, n.data.selectionPercentage)
                  , t = (n.data.selectionPercentage + "").split(".")
                  , i = t.length > 1 ? Math.pow(10, t[1].length) : 1;
                return function(n) {
                    this.textContent = " " + Math.round(r(n) * i) / i + "%"
                }
            }
            );
            h.exit().remove();
            p = r.select(".lines").selectAll("polyline").data(f(i), u);
            p.enter().append("polyline");
            p.transition().duration(900).attrTween("points", function(n) {
                this._current = this._current || n;
                var i = d3.interpolate(this._current, n);
                return this._current = i(0),
                function(n) {
                    var r = i(n)
                      , u = e.centroid(r);
                    return u[0] = t * .95 * (b(r) < Math.PI ? 1 : -1),
                    [o.centroid(r), e.centroid(r), u]
                }
            }
            );
            p.exit().remove()
        }
        var a = choiceStageArray[0], v = ["followed the light", "followed the noise"], y = ["Maria", "Nancy"], p = ["Went to the Cinema", "Went to the Nightclub"], w = ot("first"), b = ot("second"), i = d3.select(".graph-container.left").append("svg").attr("viewBox", "0 0 800 475").attr("perserveAspectRatio", "xMinYMid").append("g"), r = d3.select(".graph-container.right").append("svg").attr("viewBox", "0 0 800 475").attr("perserveAspectRatio", "xMinYMid").append("g"), u, s;
        i.append("g").attr("class", "slices");
        i.append("g").attr("class", "labels");
        i.append("g").attr("class", "lines");
        r.append("g").attr("class", "slices");
        r.append("g").attr("class", "labels");
        r.append("g").attr("class", "lines");
        var h = 800
          , c = 475
          , t = Math.min(800, 375) / 2
          , f = d3.layout.pie().sort(null ).value(function(n) {
            return n.selectionPercentage
        }
        )
          , o = d3.svg.arc().outerRadius(t * .84).innerRadius(t * .55)
          , e = d3.svg.arc().innerRadius(t * .9).outerRadius(t * .9);
        i.attr("transform", "translate(" + h / 2 + "," + c / 2 + ")");
        r.attr("transform", "translate(" + h / 2 + "," + c / 2 + ")");
        u = function(n, t) {
            return t
        }
        ;
        s = ["#414141", "#f0c538"];
        k(w);
        d(b)
    }
    function rr() {
        var o = n("#counter")
          , t = t = o[0].getContext("2d")
          , r = null
          , s = Math.PI * 2
          , u = Math.PI / 2;
        t.beginPath();
        t.strokeStyle = "#f0c538";
        t.lineCap = "square";
        t.closePath();
        t.fill();
        t.lineWidth = 10;
        r = t.getImageData(0, 0, 114, 114);
        var f = function(n) {
            t.putImageData(r, 0, 0);
            t.beginPath();
            t.arc(57, 57, 50, -u, s * n - u, !1);
            t.stroke()
        }
          , i = 0
          , e = +new Date
          , h = setInterval(function() {
            var n = +new Date
              , r = n - e
              , t = i += .016 * r / 16;
            f(t);
            e = n;
            i > 1 && (i = 0,
            t = 0,
            f(0))
        }
        , 16)
    }
    function ur() {
        var r = n("#loader"), i;
        r.addClass("visible");
        var t = t = r[0].getContext("2d")
          , u = null
          , e = Math.PI * 2
          , f = Math.PI / 2;
        t.beginPath();
        t.strokeStyle = "#f0c538";
        t.lineCap = "square";
        t.closePath();
        t.fill();
        t.lineWidth = 5;
        u = t.getImageData(0, 0, 45, 45);
        i = function(n) {
            t.putImageData(u, 0, 0);
            t.beginPath();
            t.arc(22, 22, 15, -f, e * n - f, !1);
            t.stroke()
        }
        ;
        l = 0;
        lastFrame = +new Date;
        st = setInterval(function() {
            var n = +new Date
              , t = n - lastFrame;
            v = l += .016 * t / 16;
            i(v);
            lastFrame = n;
            l > 1 && (l = 0,
            v = 0,
            i(0))
        }
        , 16)
    }
    function fr() {
        n("#loader").removeClass("visible");
        l = 0;
        v = 0;
        clearInterval(st)
    }
    function er(n) {
        i.on("timeupdate", function() {
            var t = i.currentTime() / n * 100;
            or(t)
        }
        )
    }
    function or(n) {
        n > 98 && (c === 0 && tt.addClass("active"),
        c === 1 && it.addClass("active"));
        nt.css("width", n + "%")
    }
    var e, f, t, y, b, k = !1, d, h, g, o, i, c, nt, tt, it, a, rt = {
        introTime: 6e3,
        choiceTime: 8500
    }, u = {
        Intro: "../Content/Videos/Intro",
        Cinema: "../Content/Videos/Cinema",
        Nightclub: "../Content/Videos/Nightclub",
        Maria: "../Content/Videos/Maria",
        Nancy: "../Content/Videos/Nancy",
        Light: "../Content/Videos/Light",
        Noise: "../Content/Videos/Noise"
    }, ht = {
        url: "../experience/selectchoice"
    }, p = {
        loaded: !1
    }, ct = {
        0: n("#firstProgress"),
        1: n("#secondProgress"),
        2: n("#thirdProgress")
    }, r = {
        firstChoice: {
            html: "../Content/choices/firstChoice.html",
            A: u.Cinema,
            B: u.Nightclub,
            leftSide: "Cinema",
            rightSide: "Nightclub",
            choiceCode: "CH1",
            mouseMoveJson: "../experience/getchoicedata?choicecode=ch1",
            dataPostUrl: "../Content/Server/post/mouseSaveFirst.php",
            statsPostUrl: ""
        },
        secondChoice: {
            html: "../Content/choices/secondChoice.html",
            A: u.Light,
            B: u.Noise,
            leftSide: "Light",
            rightSide: "Noise",
            choiceCode: "C2A",
            mouseMoveJson: "../Content/Server/json/mousemoveSecond.json",
            dataPostUrl: "../Content/Server/post/mouseSaveSecond.php",
            statsPostUrl: ""
        },
        secondChoiceAlternate: {
            html: "../Content/choices/secondChoiceAlternate.html",
            A: u.Maria,
            B: u.Nancy,
            leftSide: "Maria",
            rightSide: "Nancy",
            choiceCode: "C2B",
            mouseMoveJson: "../Content/Server/json/mousemoveSecondAlternate.json",
            dataPostUrl: "../Content/Server/post/mouseSaveSecondAlternate.php",
            statsPostUrl: ""
        },
        end: {
            html: "../Content/choices/theEnd.html"
        }
    }, s = {
        loading: function() {
            e.addClass("loading");
            ur()
        },
        loaded: function() {
            e.removeClass("loading");
            fr()
        }
    }, bi = 500, w = !1, st, l, v;
    return {
        init: lt
    }
}
(jQuery);
window.Contact = function(n) {
    function t() {
        i()
    }
    function i() {
        function u(n) {
            n.val().length == 0 && (n.addClass("required"),
            r = !1,
            t += n.data("val-required") + "\n")
        }
        var i = n("#contact-form")
          , f = i.find("form")
          , t = ""
          , r = !0
          , e = n("#first_name")
          , o = n("#last_name")
          , s = n("#email");
        i.find(".submit").on("click", function(h) {
            var c = n(h.currentTarget);
            if (c.text("Sending..."),
            c.attr("disabled", "true"),
            r = !0,
            t = "Oops, something went wrong. Please check the following errors...\n\n",
            u(e),
            u(o),
            u(s),
            r)
                n.ajax({
                    type: "POST",
                    url: "/contact/capture",
                    data: f.serialize(),
                    dataType: "json"
                }).done(function(n) {
                    n.isValid ? f.submit() : (t = "Oops, something went wrong. Please try again later.",
                    alert(t))
                }
                );
            else
                return i.find("input.required").first().focus(),
                c.text("Submit"),
                c.removeAttr("disabled"),
                alert(t),
                !1
        }
        )
    }
    return {
        init: t
    }
}
(jQuery),
function(n) {
    global = {
        init: function() {
            global.$experience = n("#experience");
            global.calculateHeight();
            global.bindResize();
            global.bindMainCta();
            global.bindCarousel();
            global.bindMobileNav();
            global.bindFindCta();
            global.bindToTop();
            global.bindWave();
            global.bindOverlays();
            global.hideExperience();
            global.createDiagram();
            n("#sub-nav").length && (global.stickyNav(),
            global.bindActiveScroll());
            n(".header-content img").on("load", function() {
                global.calculateHeight()
            }
            )
        },
        calculateHeight: function() {
            var t = n(".header").height()
              , i = n("body").height()
              , r = 100 - 100 * (t / i);
            n(".header-content").css("height", r + "%")
        },
        bindResize: function() {
            n(window).on("resize", global.calculateHeight)
        },
        bindMainCta: function() {
            n("a.main-cta").on("click", function() {
                var t = n(".main").offset().top;
                n("html, body").animate({
                    scrollTop: t
                }, {
                    duration: 1e3,
                    easing: "easeInOutQuint"
                })
            }
            )
        },
        bindFindCta: function() {
            n("#find-how").on("click", function() {
                var t = n(".introducing-id").offset().top;
                n("html, body").animate({
                    scrollTop: t
                }, {
                    duration: 1e3,
                    easing: "easeInOutQuint"
                })
            }
            )
        },
        bindToTop: function() {
            if (n("#back-to-top").length) {
                var t = n("#back-to-top");
                t.on("click", function() {
                    n("html, body").animate({
                        scrollTop: 0
                    }, {
                        duration: 1e3,
                        easing: "easeInOutQuint"
                    })
                }
                )
            }
        },
        hideExperience: function() {
            var t = window.location.pathname;
            n.browser.mobile === !0 && (n(".experience-id").hide(),
            ("/experience" == t || "/Experience" == t) && (window.location = "../"))
        },
        bindCarousel: function() {
            n(".carousel").carousel({
                contained: !0,
                duration: 1e4
            })
        },
        bindMobileNav: function() {
            $trigger = n(".icon-mobilemenu");
            $nav = n(".nav");
            $trigger.on("click", function() {
                $nav.toggleClass("open")
            }
            )
        },
        bindWave: function() {
            var t, i = n("#wave-static"), r = n("#wave-waving"), u = n("#wave-button");
            u.on("click", function() {
                t ? (t = !1,
                n(this).removeClass("active")) : (t = !0,
                n(this).addClass("active"));
                i.toggleClass("hidden");
                r.toggleClass("hidden")
            }
            )
        },
        bindOverlays: function() {
            $creativeOverlay = n("#creative-overlay");
            $marketingOverlay = n("#marketing-overlay");
            $screenOverlay = n("#screen-overlay");
            $areYouOverlay = n("#are-you-overlay");
            allArray = [$creativeOverlay, $marketingOverlay, $screenOverlay, $areYouOverlay];
            n(".are-you-triggers .blue-button").on("click", function() {
                var t, i;
                $creativeOverlay.removeClass("active");
                $marketingOverlay.removeClass("active");
                $screenOverlay.removeClass("active");
                t = n(this).attr("data-target");
                switch ($areYouOverlay.addClass("active"),
                t) {
                case "creativeOverlay":
                    $creativeOverlay.addClass("active");
                    break;
                case "marketingOverlay":
                    $marketingOverlay.addClass("active");
                    break;
                case "screenOverlay":
                    $screenOverlay.addClass("active")
                }
                769 > n(window).innerWidth() && (i = n("#are-you").offset().top,
                n("html, body").animate({
                    scrollTop: i
                }, {
                    duration: 1e3,
                    easing: "easeInOutQuint"
                }))
            }
            );
            n("#close-overlay").on("click", function() {
                $areYouOverlay.removeClass("active")
            }
            )
        },
        stickyNav: function() {
            var t = function() {
                var t;
                n("#sub-nav");
                var i = n("#back-to-top")
                  , r = n("#sub-nav-wrapper")
                  , u = n(window).scrollTop();
                t = n("#stickyNavPoint").offset().top - 66;
                u >= t ? (r.addClass("active"),
                i.addClass("active")) : (r.removeClass("active"),
                i.removeClass("active"))
            }
            ;
            t();
            n(window).scroll(function() {
                t()
            }
            )
        },
        createDiagram: function() {
            function i() {
                h.attr("class", "");
                e.attr("class", "");
                o.attr("class", "");
                s.attr("class", "");
                c.removeClass("active");
                l.removeClass("active");
                a.removeClass("active");
                v.removeClass("active");
                t.camera = !1;
                t.projector = !1;
                t.speaker = !1;
                t.computer = !1
            }
            function r(n) {
                switch (t.overlay || f.addClass("open"),
                n) {
                case "projector":
                    l.addClass("active");
                    break;
                case "camera":
                    c.addClass("active");
                    break;
                case "speaker":
                    v.addClass("active");
                    break;
                case "server":
                    a.addClass("active")
                }
            }
            function u() {
                f.removeClass("open")
            }
            var t = {
                camera: !1,
                projector: !1,
                speaker: !1,
                computer: !1,
                overlay: !1
            }
              , e = n("#camera")
              , o = n("#projector")
              , s = n("#speaker")
              , h = n("#computer")
              , f = n("#diagram-overlay")
              , c = n("#camera-overlay")
              , l = n("#projector-overlay")
              , a = n("#server-overlay")
              , v = n("#audio-overlay")
              , y = n("#close-diagram-overlay");
            y.on("click", function() {
                f.removeClass("open");
                i()
            }
            );
            o.on("click", function() {
                t.projector ? (t.projector = !1,
                n(this).attr("class", ""),
                u()) : (i(),
                t.projector = !0,
                n(this).attr("class", "active"),
                r("projector"))
            }
            );
            s.on("click", function() {
                t.speaker ? (t.speaker = !1,
                n(this).attr("class", ""),
                u()) : (i(),
                t.speaker = !0,
                n(this).attr("class", "active"),
                r("speaker"))
            }
            );
            h.on("click", function() {
                t.computer ? (t.computer = !1,
                n(this).attr("class", ""),
                u()) : (i(),
                t.computer = !0,
                n(this).attr("class", "active"),
                r("server"))
            }
            );
            e.on("click", function() {
                t.camera ? (t.camera = !1,
                n(this).attr("class", ""),
                u()) : (i(),
                t.camera = !0,
                n(this).attr("class", "active"),
                r("camera"))
            }
            )
        },
        bindActiveScroll: function() {
            var i, r = n("#sub-nav"), f = r.outerHeight() + 25, t = r.find("a"), e = !0, u = t.map(function() {
                var t = n(n(this).attr("href"));
                if (t.length)
                    return t
            }
            ), o;
            t.click(function(i) {
                var r = n(this).attr("href")
                  , u = "#" === r ? 0 : n(r).offset().top - f + 1;
                t.removeClass("active");
                n(this).addClass("active");
                e = !1;
                n("html, body").stop().animate({
                    scrollTop: u
                }, 1200, "easeInOutQuint", function() {
                    e = !0
                }
                );
                i.preventDefault()
            }
            );
            n(window).scroll(function() {
                var h, o, s;
                $pageNav = r.get()[0];
                h = n(this).scrollTop() + f;
                o = u.map(function() {
                    return n(window).scrollTop() + n(window).height() === n(document).height() ? u[u.length - 1] : h > n(this).offset().top ? this : void 0
                }
                );
                o = o[o.length - 1];
                s = o && o.length ? o[0].id : "";
                i !== s && (i = s,
                e ? (t.removeClass("active").filter("[href=#" + s + "]").addClass("active"),
                n("#" + s).addClass("active")) : n("#" + s).addClass("active"))
            }
            );
            o = function() {
                var s, e, o;
                $pageNav = r.get()[0];
                s = n(this).scrollTop() + f;
                e = u.map(function() {
                    if (s > n(this).offset().top)
                        return this
                }
                );
                e = e[e.length - 1];
                o = e && e.length ? e[0].id : "";
                i !== o && (i = o,
                t.removeClass("active").filter("[href=#" + o + "]").addClass("active"),
                n("#" + o).addClass("active"))
            }
            ;
            o()
        }
    };
    n(function() {
        global.init()
    }
    )
}
(jQuery)
