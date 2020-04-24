! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).NimoTV = {})
}(this, function(e) {
  "use strict";
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  function t(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e
  }
  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  function i(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), n.push.apply(n, r)
    }
    return n
  }
  function s(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? i(Object(n), !0).forEach(function(e) {
        o(t, e, n[e])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      })
    }
    return t
  }
  function u(e) {
    return function(e) {
      if (Array.isArray(e)) return a(e)
    }(e) || function(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return a(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(n);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
  }
  var c = 10001,
    f = 3001,
    l = 3002,
    h = 3003;
  function p() {}
  function d() {
    d.init.call(this)
  }
  function v(e) {
    return void 0 === e._maxListeners ? d.defaultMaxListeners : e._maxListeners
  }
  function n(e, t, n, r) {
    var i, o, s, a;
    if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
    if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]) : (o = e._events = new p, e._eventsCount = 0), s) {
      if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), !s.warned && (i = v(e)) && 0 < i && s.length > i) {
        s.warned = !0;
        var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, "function" == typeof console.warn ? console.warn(a) : console.log(a)
      }
    } else s = o[t] = n, ++e._eventsCount;
    return e
  }
  function y(e, t, n) {
    var r = !1;
    function i() {
      e.removeListener(t, i), r || (r = !0, n.apply(e, arguments))
    }
    return i.listener = n, i
  }
  function m(e) {
    var t = this._events;
    if (t) {
      var n = t[e];
      if ("function" == typeof n) return 1;
      if (n) return n.length
    }
    return 0
  }
  function g(e, t) {
    for (var n = new Array(t); t--;) n[t] = e[t];
    return n
  }
  p.prototype = Object.create(null), (d.EventEmitter = d).usingDomains = !1, d.prototype.domain = void 0, d.prototype._events = void 0, d.prototype._maxListeners = void 0, d.defaultMaxListeners = 10, d.init = function() {
    this.domain = null, d.usingDomains && (void 0).active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new p, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
  }, d.prototype.setMaxListeners = function(e) {
    if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = e, this
  }, d.prototype.getMaxListeners = function() {
    return v(this)
  }, d.prototype.emit = function(e, t, n, r) {
    var i, o, s, a, u, c, f, l = "error" === e;
    if (c = this._events) l = l && null == c.error;
    else if (!l) return !1;
    if (f = this.domain, l) {
      if (i = t, f) return (i = i || new Error('Uncaught, unspecified "error" event')).domainEmitter = this, i.domain = f, i.domainThrown = !1, f.emit("error", i), !1;
      if (i instanceof Error) throw i;
      var h = new Error('Uncaught, unspecified "error" event. (' + i + ")");
      throw h.context = i, h
    }
    if (!(o = c[e])) return !1;
    var p = "function" == typeof o;
    switch (s = arguments.length) {
      case 1:
        ! function(e, t, n) {
          if (t) e.call(n);
          else
            for (var r = e.length, i = g(e, r), o = 0; o < r; ++o) i[o].call(n)
        }(o, p, this);
        break;
      case 2:
        ! function(e, t, n, r) {
          if (t) e.call(n, r);
          else
            for (var i = e.length, o = g(e, i), s = 0; s < i; ++s) o[s].call(n, r)
        }(o, p, this, t);
        break;
      case 3:
        ! function(e, t, n, r, i) {
          if (t) e.call(n, r, i);
          else
            for (var o = e.length, s = g(e, o), a = 0; a < o; ++a) s[a].call(n, r, i)
        }(o, p, this, t, n);
        break;
      case 4:
        ! function(e, t, n, r, i, o) {
          if (t) e.call(n, r, i, o);
          else
            for (var s = e.length, a = g(e, s), u = 0; u < s; ++u) a[u].call(n, r, i, o)
        }(o, p, this, t, n, r);
        break;
      default:
        for (a = new Array(s - 1), u = 1; u < s; u++) a[u - 1] = arguments[u];
        ! function(e, t, n, r) {
          if (t) e.apply(n, r);
          else
            for (var i = e.length, o = g(e, i), s = 0; s < i; ++s) o[s].apply(n, r)
        }(o, p, this, a)
    }
    return !0
  }, d.prototype.addListener = function(e, t) {
    return n(this, e, t, !1)
  }, d.prototype.on = d.prototype.addListener, d.prototype.prependListener = function(e, t) {
    return n(this, e, t, !0)
  }, d.prototype.once = function(e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    return this.on(e, y(this, e, t)), this
  }, d.prototype.prependOnceListener = function(e, t) {
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    return this.prependListener(e, y(this, e, t)), this
  }, d.prototype.removeListener = function(e, t) {
    var n, r, i, o, s;
    if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
    if (!(r = this._events)) return this;
    if (!(n = r[e])) return this;
    if (n === t || n.listener && n.listener === t) 0 == --this._eventsCount ? this._events = new p : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
      for (i = -1, o = n.length; 0 < o--;)
        if (n[o] === t || n[o].listener && n[o].listener === t) {
          s = n[o].listener, i = o;
          break
        }
      if (i < 0) return this;
      if (1 === n.length) {
        if (n[0] = void 0, 0 == --this._eventsCount) return this._events = new p, this;
        delete r[e]
      } else ! function(e, t) {
        for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
        e.pop()
      }(n, i);
      r.removeListener && this.emit("removeListener", e, s || t)
    }
    return this
  }, d.prototype.removeAllListeners = function(e) {
    var t, n;
    if (!(n = this._events)) return this;
    if (!n.removeListener) return 0 === arguments.length ? (this._events = new p, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new p : delete n[e]), this;
    if (0 === arguments.length) {
      for (var r, i = Object.keys(n), o = 0; o < i.length; ++o) "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
      return this.removeAllListeners("removeListener"), this._events = new p, this._eventsCount = 0, this
    }
    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
    else if (t)
      for (; this.removeListener(e, t[t.length - 1]), t[0];);
    return this
  }, d.prototype.listeners = function(e) {
    var t, n = this._events;
    return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function(e) {
      for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
      return t
    }(t) : []
  }, d.listenerCount = function(e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
  }, d.prototype.listenerCount = m, d.prototype.eventNames = function() {
    return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
  };
  var w = function() {
    function i(e, t) {
      var n, r, a = this;
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, i), o(this, "_containerId", void 0), o(this, "_container$", void 0), o(this, "handleWndMessage", function(e) {
        var t = e.data || {},
          n = t.messageId,
          r = t.data;
        if (t._uuid === a.containerId && n === c) {
          var i = r || {},
            o = i.eventType,
            s = i.data;
          a.emit(o, s)
        }
      }), o(this, "play", function() {
        a.sendBizMsg(f)
      }), o(this, "pause", function() {
        a.sendBizMsg(l)
      }), o(this, "getState", function() {
        return new Promise(function(n, e) {
          a.on(i.STATE, function e(t) {
            n(t), a.off(i.STATE, e)
          }), a.sendBizMsg(h)
        })
      }), n = this, r = new d, n.on = function(e, t) {
        t && r.on(e, t)
      }, n.off = function(e, t) {
        t && r.removeListener(e, t)
      }, n.once = function(e, t) {
        t && r.once(e, t)
      }, n.emit = function() {
        r.emit.apply(r, arguments)
      }, n.trigger = n.emit, this.containerId = e, this.container$ = document.getElementById(this.containerId), this.player$ = this._createPlayer(t), this.container$.appendChild(this.player$), this.init()
    }
    return t(i, [{
      key: "containerId",
      set: function(e) {
        this._containerId = e
      },
      get: function() {
        if (this._containerId) return this._containerId;
        throw new ReferenceError("this._containerId is not defined.")
      }
    }, {
      key: "container$",
      set: function(e) {
        this._container$ = e
      },
      get: function() {
        if (this._container$) return this._container$;
        throw new ReferenceError("this._container$ is not defined.")
      }
    }]), t(i, [{
      key: "init",
      value: function() {
        window.addEventListener("message", this.handleWndMessage)
      }
    }, {
      key: "dispose",
      value: function() {
        window.removeEventListener("message", this.handleWndMessage), this.player$ = null, this.container$ = null, this.containerId = null
      }
    }, {
      key: "sendBizMsg",
      value: function(e, t) {
        this._send("biz_msg", {
          messageId: e,
          data: t
        })
      }
    }, {
      key: "_send",
      value: function(e, t) {
        var n = this.player$.contentWindow;
        n && "function" == typeof n.postMessage && n.postMessage(s({}, t, {
          type: e,
          _uuid: this.containerId
        }), "*")
      }
    }, {
      key: "_createPlayer",
      value: function(e) {
        var t = e || {},
          n = t.width,
          r = t.height,
          i = t.resourceId,
          o = t.lang,
          s = document.createElement("iframe");
        return s.setAttribute("src", this._getUrl(i, {
          _lang: o
        })), s.setAttribute("width", n), s.setAttribute("height", r), s
      }
    }, {
      key: "_getUrl",
      value: function(e, t) {
        var n = "https://www.nimo.tv/embed/".concat(e);
        return n = function(e, t) {
          var n = 1 < arguments.length && void 0 !== t ? t : {};
          if (!n || n === {}) return e;
          var r = e.split("?"),
            i = Object.keys(n),
            o = new RegExp("(".concat(i.join("|"), ")=(\\w|.)+")),
            s = void 0 !== r[1] ? r[1].split("&").filter(function(e) {
              return !o.test(e)
            }) : [],
            a = [].concat(u(s), u(i.map(function(e) {
              return "".concat(e, "=").concat(n[e])
            })));
          return "".concat(r[0]).concat(Array.isArray(a) && 0 < a.length ? "?".concat(a.join("&")) : "")
        }(n, s({}, t, {
          _uuid: this.containerId
        }))
      }
    }]), i
  }();
  o(w, "ENDED", "ended"), o(w, "STATE", "getPlayerState"), e.Player = w, Object.defineProperty(e, "__esModule", {
    value: !0
  })
});
//# sourceMappingURL=embed-player-0.1.0.min.js.map