"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
	[75932], {
		575932: (e, t, n) => {
			n.r(t), n.d(t, {
				t: () => Z
			});

			function o(e) {
				return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}, o(e)
			}

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function r(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? Object(arguments[t]) : {},
						o = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(n).filter((function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), o.forEach((function(t) {
						i(e, t, n[t])
					}))
				}
				return e
			}

			function a(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function s(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}

			function u(e, t, n) {
				return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
					writable: !1
				}), e
			}

			function l(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function c(e, t) {
				if (t && ("object" === o(t) || "function" == typeof t)) return t;
				if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
				return l(e)
			}

			function p(e) {
				return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				}, p(e)
			}

			function g(e, t) {
				return g = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				}, g(e, t)
			}

			function f(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t && g(e, t)
			}
			var h = {
					type: "logger",
					log: function(e) {
						this.output("log", e)
					},
					warn: function(e) {
						this.output("warn", e)
					},
					error: function(e) {
						this.output("error", e)
					},
					output: function(e, t) {
						console && console[e] && console[e].apply(console, t)
					}
				},
				d = new(function() {
					function e(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						a(this, e), this.init(t, n)
					}
					return u(e, [{
						key: "init",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							this.prefix = t.prefix || "i18next:", this.logger = e || h, this.options = t, this.debug = t.debug
						}
					}, {
						key: "setDebug",
						value: function(e) {
							this.debug = e
						}
					}, {
						key: "log",
						value: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return this.forward(t, "log", "", !0)
						}
					}, {
						key: "warn",
						value: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return this.forward(t, "warn", "", !0)
						}
					}, {
						key: "error",
						value: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return this.forward(t, "error", "")
						}
					}, {
						key: "deprecate",
						value: function() {
							for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
							return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
						}
					}, {
						key: "forward",
						value: function(e, t, n, o) {
							return o && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
						}
					}, {
						key: "create",
						value: function(t) {
							return new e(this.logger, r({}, {
								prefix: "".concat(this.prefix, ":").concat(t, ":")
							}, this.options))
						}
					}]), e
				}()),
				v = function() {
					function e() {
						a(this, e), this.observers = {}
					}
					return u(e, [{
						key: "on",
						value: function(e, t) {
							var n = this;
							return e.split(" ").forEach((function(e) {
								n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
							})), this
						}
					}, {
						key: "off",
						value: function(e, t) {
							this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
								return e !== t
							})) : delete this.observers[e])
						}
					}, {
						key: "emit",
						value: function(e) {
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
							if (this.observers[e]) {
								var i = [].concat(this.observers[e]);
								i.forEach((function(e) {
									e.apply(void 0, n)
								}))
							}
							if (this.observers["*"]) {
								var r = [].concat(this.observers["*"]);
								r.forEach((function(t) {
									t.apply(t, [e].concat(n))
								}))
							}
						}
					}]), e
				}();

			function y() {
				var e, t, n = new Promise((function(n, o) {
					e = n, t = o
				}));
				return n.resolve = e, n.reject = t, n
			}

			function m(e) {
				return null == e ? "" : "" + e
			}

			function b(e, t, n) {
				e.forEach((function(e) {
					t[e] && (n[e] = t[e])
				}))
			}

			function k(e, t, n) {
				function o(e) {
					return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
				}

				function i() {
					return !e || "string" == typeof e
				}
				for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
					if (i()) return {};
					var a = o(r.shift());
					!e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
				}
				return i() ? {} : {
					obj: e,
					k: o(r.shift())
				}
			}

			function x(e, t, n) {
				var o = k(e, t, Object);
				o.obj[o.k] = n
			}

			function S(e, t) {
				var n = k(e, t),
					o = n.obj,
					i = n.k;
				if (o) return o[i]
			}

			function w(e, t, n) {
				var o = S(e, n);
				return void 0 !== o ? o : S(t, n)
			}

			function O(e, t, n) {
				for (var o in t) "__proto__" !== o && "constructor" !== o && (o in e ? "string" == typeof e[o] || e[o] instanceof String || "string" == typeof t[o] || t[o] instanceof String ? n && (e[o] = t[o]) : O(e[o], t[o], n) : e[o] = t[o]);
				return e
			}

			function L(e) {
				return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
			}
			var N = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"/": "&#x2F;"
			};

			function C(e) {
				return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
					return N[e]
				})) : e
			}
			var R = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
				j = [" ", ",", "?", "!", ";"];

			function P(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
				if (e) {
					if (e[t]) return e[t];
					for (var o = t.split(n), i = e, r = 0; r < o.length; ++r) {
						if (!i) return;
						if ("string" == typeof i[o[r]] && r + 1 < o.length) return;
						if (void 0 === i[o[r]]) {
							for (var a = 2, s = o.slice(r, r + a).join(n), u = i[s]; void 0 === u && o.length > r + a;) a++, u = i[s = o.slice(r, r + a).join(n)];
							if (void 0 === u) return;
							if ("string" == typeof u) return u;
							if (s && "string" == typeof u[s]) return u[s];
							var l = o.slice(r + a).join(n);
							return l ? P(u, l, n) : void 0
						}
						i = i[o[r]]
					}
					return i
				}
			}
			var E = function(e) {
					function t(e) {
						var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
							ns: ["translation"],
							defaultNS: "translation"
						};
						return a(this, t), n = c(this, p(t).call(this)), R && v.call(l(n)), n.data = e || {}, n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0), n
					}
					return f(t, e), u(t, [{
						key: "addNamespaces",
						value: function(e) {
							this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
						}
					}, {
						key: "removeNamespaces",
						value: function(e) {
							var t = this.options.ns.indexOf(e);
							t > -1 && this.options.ns.splice(t, 1)
						}
					}, {
						key: "getResource",
						value: function(e, t, n) {
							var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
								i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
								r = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure,
								a = [e, t];
							n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (a = e.split("."));
							var s = S(this.data, a);
							return s || !r || "string" != typeof n ? s : P(this.data && this.data[e] && this.data[e][t], n, i)
						}
					}, {
						key: "addResource",
						value: function(e, t, n, o) {
							var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
									silent: !1
								},
								r = this.options.keySeparator;
							void 0 === r && (r = ".");
							var a = [e, t];
							n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = t, t = (a = e.split("."))[1]), this.addNamespaces(t), x(this.data, a, o), i.silent || this.emit("added", e, t, n, o)
						}
					}, {
						key: "addResources",
						value: function(e, t, n) {
							var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
								silent: !1
							};
							for (var i in n) "string" != typeof n[i] && "[object Array]" !== Object.prototype.toString.apply(n[i]) || this.addResource(e, t, i, n[i], {
								silent: !0
							});
							o.silent || this.emit("added", e, t, n)
						}
					}, {
						key: "addResourceBundle",
						value: function(e, t, n, o, i) {
							var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
									silent: !1
								},
								s = [e, t];
							e.indexOf(".") > -1 && (o = n, n = t, t = (s = e.split("."))[1]), this.addNamespaces(t);
							var u = S(this.data, s) || {};
							o ? O(u, n, i) : u = r({}, u, n), x(this.data, s, u), a.silent || this.emit("added", e, t, n)
						}
					}, {
						key: "removeResourceBundle",
						value: function(e, t) {
							this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
						}
					}, {
						key: "hasResourceBundle",
						value: function(e, t) {
							return void 0 !== this.getResource(e, t)
						}
					}, {
						key: "getResourceBundle",
						value: function(e, t) {
							return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? r({}, {}, this.getResource(e, t)) : this.getResource(e, t)
						}
					}, {
						key: "getDataByLanguage",
						value: function(e) {
							return this.data[e]
						}
					}, {
						key: "hasLanguageSomeTranslations",
						value: function(e) {
							var t = this.getDataByLanguage(e);
							return !!(t && Object.keys(t) || []).find((function(e) {
								return t[e] && Object.keys(t[e]).length > 0
							}))
						}
					}, {
						key: "toJSON",
						value: function() {
							return this.data
						}
					}]), t
				}(v),
				F = {
					processors: {},
					addPostProcessor: function(e) {
						this.processors[e.name] = e
					},
					handle: function(e, t, n, o, i) {
						var r = this;
						return e.forEach((function(e) {
							r.processors[e] && (t = r.processors[e].process(t, n, o, i))
						})), t
					}
				},
				I = {},
				V = function(e) {
					function t(e) {
						var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return a(this, t), n = c(this, p(t).call(this)), R && v.call(l(n)),
							b(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, l(n)), n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = d.create("translator"), n
					}
					return f(t, e), u(t, [{
						key: "changeLanguage",
						value: function(e) {
							e && (this.language = e)
						}
					}, {
						key: "exists",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
								interpolation: {}
							};
							if (null == e) return !1;
							var n = this.resolve(e, t);
							return n && void 0 !== n.res
						}
					}, {
						key: "extractFromKey",
						value: function(e, t) {
							var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
							void 0 === n && (n = ":");
							var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
								i = t.ns || this.options.defaultNS,
								r = n && e.indexOf(n) > -1,
								a = ! function(e, t, n) {
									t = t || "", n = n || "";
									var o = j.filter((function(e) {
										return t.indexOf(e) < 0 || n.indexOf(e) < 0
									}));
									return 0 === o.length || !new RegExp("(".concat(o.map((function(e) {
										return "?" === e ? "\\?" : e
									})).join("|"), ")")).test(e)
								}(e, n, o);
							if (r && !a) {
								var s = e.match(this.interpolator.nestingRegexp);
								if (s && s.length > 0) return {
									key: e,
									namespaces: i
								};
								var u = e.split(n);
								(n !== o || n === o && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(o)
							}
							return "string" == typeof i && (i = [i]), {
								key: e,
								namespaces: i
							}
						}
					}, {
						key: "translate",
						value: function(e, n, i) {
							var a = this;
							if ("object" !== o(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e) return "";
							Array.isArray(e) || (e = [String(e)]);
							var s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
								u = this.extractFromKey(e[e.length - 1], n),
								l = u.key,
								c = u.namespaces,
								p = c[c.length - 1],
								g = n.lng || this.language,
								f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
							if (g && "cimode" === g.toLowerCase()) {
								if (f) {
									var h = n.nsSeparator || this.options.nsSeparator;
									return p + h + l
								}
								return l
							}
							var d = this.resolve(e, n),
								v = d && d.res,
								y = d && d.usedKey || l,
								m = d && d.exactUsedKey || l,
								b = Object.prototype.toString.apply(v),
								k = ["[object Number]", "[object Function]", "[object RegExp]"],
								x = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
								S = !this.i18nFormat || this.i18nFormat.handleAsObject,
								w = "string" != typeof v && "boolean" != typeof v && "number" != typeof v;
							if (S && v && w && k.indexOf(b) < 0 && ("string" != typeof x || "[object Array]" !== b)) {
								if (!n.returnObjects && !this.options.returnObjects) return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, v, r({}, n, {
									ns: c
								})) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
								if (s) {
									var O = "[object Array]" === b,
										L = O ? [] : {},
										N = O ? m : y;
									for (var C in v)
										if (Object.prototype.hasOwnProperty.call(v, C)) {
											var R = "".concat(N).concat(s).concat(C);
											L[C] = this.translate(R, r({}, n, {
												joinArrays: !1,
												ns: c
											})), L[C] === R && (L[C] = v[C])
										} v = L
								}
							} else if (S && "string" == typeof x && "[object Array]" === b)(v = v.join(x)) && (v = this.extendTranslation(v, e, n, i));
							else {
								var j = !1,
									P = !1,
									E = void 0 !== n.count && "string" != typeof n.count,
									F = t.hasDefaultValue(n),
									I = E ? this.pluralResolver.getSuffix(g, n.count, n) : "",
									V = n["defaultValue".concat(I)] || n.defaultValue;
								!this.isValidLookup(v) && F && (j = !0, v = V), this.isValidLookup(v) || (P = !0, v = l);
								var T = n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
									A = T && P ? void 0 : v,
									_ = F && V !== v && this.options.updateMissing;
								if (P || j || _) {
									if (this.logger.log(_ ? "updateKey" : "missingKey", g, p, l, _ ? V : v), s) {
										var D = this.resolve(l, r({}, n, {
											keySeparator: !1
										}));
										D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
									}
									var U = [],
										H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
									if ("fallback" === this.options.saveMissingTo && H && H[0])
										for (var K = 0; K < H.length; K++) U.push(H[K]);
									else "all" === this.options.saveMissingTo ? U = this.languageUtils.toResolveHierarchy(n.lng || this.language) : U.push(n.lng || this.language);
									var M = function(e, t, o) {
										a.options.missingKeyHandler ? a.options.missingKeyHandler(e, p, t, _ ? o : A, _, n) : a.backendConnector && a.backendConnector.saveMissing && a.backendConnector.saveMissing(e, p, t, _ ? o : A, _, n), a.emit("missingKey", e, p, t, v)
									};
									this.options.saveMissing && (this.options.saveMissingPlurals && E ? U.forEach((function(e) {
										a.pluralResolver.getSuffixes(e).forEach((function(t) {
											M([e], l + t, n["defaultValue".concat(t)] || V)
										}))
									})) : M(U, l, V))
								}
								v = this.extendTranslation(v, e, n, d, i), P && v === l && this.options.appendNamespaceToMissingKey && (v = "".concat(p, ":").concat(l)), (P || j) && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(v))
							}
							return v
						}
					}, {
						key: "extendTranslation",
						value: function(e, t, n, o, i) {
							var a = this;
							if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, o.usedLng, o.usedNS, o.usedKey, {
								resolved: o
							});
							else if (!n.skipInterpolation) {
								n.interpolation && this.interpolator.init(r({}, n, {
									interpolation: r({}, this.options.interpolation, n.interpolation)
								}));
								var s, u = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
								if (u) {
									var l = e.match(this.interpolator.nestingRegexp);
									s = l && l.length
								}
								var c = n.replace && "string" != typeof n.replace ? n.replace : n;
								if (this.options.interpolation.defaultVariables && (c = r({}, this.options.interpolation.defaultVariables, c)), e = this.interpolator.interpolate(e, c, n.lng || this.language, n), u) {
									var p = e.match(this.interpolator.nestingRegexp);
									s < (p && p.length) && (n.nest = !1)
								}!1 !== n.nest && (e = this.interpolator.nest(e, (function() {
									for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r];
									return i && i[0] === o[0] && !n.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(o[0], " in key: ").concat(t[0])), null) : a.translate.apply(a, o.concat([t]))
								}), n)), n.interpolation && this.interpolator.reset()
							}
							var g = n.postProcess || this.options.postProcess,
								f = "string" == typeof g ? [g] : g;
							return null != e && f && f.length && !1 !== n.applyPostProcessor && (e = F.handle(f, e, t, this.options && this.options.postProcessPassResolved ? r({
								i18nResolved: o
							}, n) : n, this)), e
						}
					}, {
						key: "resolve",
						value: function(e) {
							var t, n, o, i, r, a = this,
								s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							return "string" == typeof e && (e = [e]), e.forEach((function(e) {
								if (!a.isValidLookup(t)) {
									var u = a.extractFromKey(e, s),
										l = u.key;
									n = l;
									var c = u.namespaces;
									a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
									var p = void 0 !== s.count && "string" != typeof s.count,
										g = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
										f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
									c.forEach((function(e) {
										a.isValidLookup(t) || (r = e, !I["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(r) && (I["".concat(f[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((function(n) {
											if (!a.isValidLookup(t)) {
												i = n;
												var r, u, c = l,
													f = [c];
												if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(f, l, n, e, s);
												else p && (r = a.pluralResolver.getSuffix(n, s.count, s)), p && g && f.push(c + r), g && f.push(c += "".concat(a.options.contextSeparator).concat(s.context)), p && f.push(c += r);
												for (; u = f.pop();) a.isValidLookup(t) || (o = u, t = a.getResource(n, e, u, s))
											}
										})))
									}))
								}
							})), {
								res: t,
								usedKey: n,
								exactUsedKey: o,
								usedLng: i,
								usedNS: r
							}
						}
					}, {
						key: "isValidLookup",
						value: function(e) {
							return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
						}
					}, {
						key: "getResource",
						value: function(e, t, n) {
							var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
							return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
						}
					}], [{
						key: "hasDefaultValue",
						value: function(e) {
							var t = "defaultValue";
							for (var n in e)
								if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
							return !1
						}
					}]), t
				}(v);

			function T(e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}
			var A = function() {
					function e(t) {
						a(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = d.create("languageUtils")
					}
					return u(e, [{
						key: "getScriptPartFromCode",
						value: function(e) {
							if (!e || e.indexOf("-") < 0) return null;
							var t = e.split("-");
							return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
						}
					}, {
						key: "getLanguagePartFromCode",
						value: function(e) {
							if (!e || e.indexOf("-") < 0) return e;
							var t = e.split("-");
							return this.formatLanguageCode(t[0])
						}
					}, {
						key: "formatLanguageCode",
						value: function(e) {
							if ("string" == typeof e && e.indexOf("-") > -1) {
								var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
									n = e.split("-");
								return this.options.lowerCaseLng ? n = n.map((function(e) {
									return e.toLowerCase()
								})) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
									2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = T(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = T(n[2].toLowerCase()))), n.join("-")
							}
							return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
						}
					}, {
						key: "isSupportedCode",
						value: function(e) {
							return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
						}
					}, {
						key: "getBestMatchFromCodes",
						value: function(e) {
							var t, n = this;
							return e ? (e.forEach((function(e) {
								if (!t) {
									var o = n.formatLanguageCode(e);
									n.options.supportedLngs && !n.isSupportedCode(o) || (t = o)
								}
							})), !t && this.options.supportedLngs && e.forEach((function(e) {
								if (!t) {
									var o = n.getLanguagePartFromCode(e);
									if (n.isSupportedCode(o)) return t = o;
									t = n.options.supportedLngs.find((function(e) {
										if (0 === e.indexOf(o)) return e
									}))
								}
							})), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
						}
					}, {
						key: "getFallbackCodes",
						value: function(e, t) {
							if (!e) return [];
							if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
							if (!t) return e.default || [];
							var n = e[t];
							return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
						}
					}, {
						key: "toResolveHierarchy",
						value: function(e, t) {
							var n = this,
								o = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
								i = [],
								r = function(e) {
									e && (n.isSupportedCode(e) ? i.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
								};
							return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), o.forEach((function(e) {
								i.indexOf(e) < 0 && r(n.formatLanguageCode(e))
							})), i
						}
					}]), e
				}(),
				_ = [{
					lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
					nr: [1, 2],
					fc: 1
				}, {
					lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
					nr: [1, 2],
					fc: 2
				}, {
					lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
					nr: [1],
					fc: 3
				}, {
					lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
					nr: [1, 2, 5],
					fc: 4
				}, {
					lngs: ["ar"],
					nr: [0, 1, 2, 3, 11, 100],
					fc: 5
				}, {
					lngs: ["cs", "sk"],
					nr: [1, 2, 5],
					fc: 6
				}, {
					lngs: ["csb", "pl"],
					nr: [1, 2, 5],
					fc: 7
				}, {
					lngs: ["cy"],
					nr: [1, 2, 3, 8],
					fc: 8
				}, {
					lngs: ["fr"],
					nr: [1, 2],
					fc: 9
				}, {
					lngs: ["ga"],
					nr: [1, 2, 3, 7, 11],
					fc: 10
				}, {
					lngs: ["gd"],
					nr: [1, 2, 3, 20],
					fc: 11
				}, {
					lngs: ["is"],
					nr: [1, 2],
					fc: 12
				}, {
					lngs: ["jv"],
					nr: [0, 1],
					fc: 13
				}, {
					lngs: ["kw"],
					nr: [1, 2, 3, 4],
					fc: 14
				}, {
					lngs: ["lt"],
					nr: [1, 2, 10],
					fc: 15
				}, {
					lngs: ["lv"],
					nr: [1, 2, 0],
					fc: 16
				}, {
					lngs: ["mk"],
					nr: [1, 2],
					fc: 17
				}, {
					lngs: ["mnk"],
					nr: [0, 1, 2],
					fc: 18
				}, {
					lngs: ["mt"],
					nr: [1, 2, 11, 20],
					fc: 19
				}, {
					lngs: ["or"],
					nr: [2, 1],
					fc: 2
				}, {
					lngs: ["ro"],
					nr: [1, 2, 20],
					fc: 20
				}, {
					lngs: ["sl"],
					nr: [5, 1, 2, 3],
					fc: 21
				}, {
					lngs: ["he", "iw"],
					nr: [1, 2, 20, 21],
					fc: 22
				}],
				D = {
					1: function(e) {
						return Number(e > 1)
					},
					2: function(e) {
						return Number(1 != e)
					},
					3: function(e) {
						return 0
					},
					4: function(e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
					},
					5: function(e) {
						return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
					},
					6: function(e) {
						return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
					},
					7: function(e) {
						return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
					},
					8: function(e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
					},
					9: function(e) {
						return Number(e >= 2)
					},
					10: function(e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
					},
					11: function(e) {
						return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
					},
					12: function(e) {
						return Number(e % 10 != 1 || e % 100 == 11)
					},
					13: function(e) {
						return Number(0 !== e)
					},
					14: function(e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
					},
					15: function(e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
					},
					16: function(e) {
						return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
					},
					17: function(e) {
						return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
					},
					18: function(e) {
						return Number(0 == e ? 0 : 1 == e ? 1 : 2)
					},
					19: function(e) {
						return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
					},
					20: function(e) {
						return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
					},
					21: function(e) {
						return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
					},
					22: function(e) {
						return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
					}
				},
				U = ["v1", "v2", "v3"],
				H = {
					zero: 0,
					one: 1,
					two: 2,
					few: 3,
					many: 4,
					other: 5
				};

			function K() {
				var e = {};
				return _.forEach((function(t) {
					t.lngs.forEach((function(n) {
						e[n] = {
							numbers: t.nr,
							plurals: D[t.fc]
						}
					}))
				})), e
			}
			var M = function() {
					function e(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						a(this, e), this.languageUtils = t, this.options = n, this.logger = d.create("pluralResolver"), this.rules = K()
					}
					return u(e, [{
						key: "addRule",
						value: function(e, t) {
							this.rules[e] = t
						}
					}, {
						key: "getRule",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (this.shouldUseIntlApi()) try {
								return new Intl.PluralRules(e, {
									type: t.ordinal ? "ordinal" : "cardinal"
								})
							} catch (e) {
								return
							}
							return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
						}
					}, {
						key: "needsPlural",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = this.getRule(e, t);
							return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
						}
					}, {
						key: "getPluralFormsOfKey",
						value: function(e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
							return this.getSuffixes(e, n).map((function(e) {
								return "".concat(t).concat(e)
							}))
						}
					}, {
						key: "getSuffixes",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								o = this.getRule(e, n);
							return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort((function(e, t) {
								return H[e] - H[t]
							})).map((function(e) {
								return "".concat(t.options.prepend).concat(e)
							})) : o.numbers.map((function(o) {
								return t.getSuffix(e, o, n)
							})) : []
						}
					}, {
						key: "getSuffix",
						value: function(e, t) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								o = this.getRule(e, n);
							return o ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(o.select(t)) : this.getSuffixRetroCompatible(o, t) : (this.logger.warn("no plural rule found for: ".concat(e)), "")
						}
					}, {
						key: "getSuffixRetroCompatible",
						value: function(e, t) {
							var n = this,
								o = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
								i = e.numbers[o];
							this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
							var r = function() {
								return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
							};
							return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? "_plural_".concat(i.toString()) : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? r() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
						}
					}, {
						key: "shouldUseIntlApi",
						value: function() {
							return !U.includes(this.options.compatibilityJSON)
						}
					}]), e
				}(),
				z = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						a(this, e), this.logger = d.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(e) {
							return e
						}, this.init(t)
					}
					return u(e, [{
						key: "init",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							e.interpolation || (e.interpolation = {
								escapeValue: !0
							});
							var t = e.interpolation;
							this.escape = void 0 !== t.escape ? t.escape : C, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? L(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? L(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? L(t.nestingPrefix) : t.nestingPrefixEscaped || L("$t("), this.nestingSuffix = t.nestingSuffix ? L(t.nestingSuffix) : t.nestingSuffixEscaped || L(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
						}
					}, {
						key: "reset",
						value: function() {
							this.options && this.init(this.options)
						}
					}, {
						key: "resetRegExp",
						value: function() {
							var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
							this.regexp = new RegExp(e, "g");
							var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
							this.regexpUnescape = new RegExp(t, "g");
							var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
							this.nestingRegexp = new RegExp(n, "g")
						}
					}, {
						key: "interpolate",
						value: function(e, t, n, o) {
							var i, a, s, u = this,
								l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

							function c(e) {
								return e.replace(/\$/g, "$$$$")
							}
							var p = function(e) {
								if (e.indexOf(u.formatSeparator) < 0) {
									var i = w(t, l, e);
									return u.alwaysFormat ? u.format(i, void 0, n, r({}, o, t, {
										interpolationkey: e
									})) : i
								}
								var a = e.split(u.formatSeparator),
									s = a.shift().trim(),
									c = a.join(u.formatSeparator).trim();
								return u.format(w(t, l, s), c, n, r({}, o, t, {
									interpolationkey: s
								}))
							};
							this.resetRegExp();
							var g = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
								f = o && o.interpolation && o.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
							return [{
								regex: this.regexpUnescape,
								safeValue: function(e) {
									return c(e)
								}
							}, {
								regex: this.regexp,
								safeValue: function(e) {
									return u.escapeValue ? c(u.escape(e)) : c(e)
								}
							}].forEach((function(t) {
								for (s = 0; i = t.regex.exec(e);) {
									if (void 0 === (a = p(i[1].trim())))
										if ("function" == typeof g) {
											var n = g(e, i, o);
											a = "string" == typeof n ? n : ""
										} else {
											if (f) {
												a = i[0];
												continue
											}
											u.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)), a = ""
										}
									else "string" == typeof a || u.useRawValueToEscape || (a = m(a));
									var r = t.safeValue(a);
									if (e = e.replace(i[0], r), f ? (t.regex.lastIndex += r.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, ++s >= u.maxReplaces) break
								}
							})), e
						}
					}, {
						key: "nest",
						value: function(e, t) {
							var n, o, i = this,
								a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								s = r({}, a);

							function u(e, t) {
								var n = this.nestingOptionsSeparator;
								if (e.indexOf(n) < 0) return e;
								var o = e.split(new RegExp("".concat(n, "[ ]*{"))),
									i = "{".concat(o[1]);
								e = o[0], i = (i = this.interpolate(i, s)).replace(/'/g, '"');
								try {
									s = JSON.parse(i), t && (s = r({}, t, s))
								} catch (t) {
									return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(i)
								}
								return delete s.defaultValue, e
							}
							for (s.applyPostProcessor = !1, delete s.defaultValue; n = this.nestingRegexp.exec(e);) {
								var l = [],
									c = !1;
								if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
									var p = n[1].split(this.formatSeparator).map((function(e) {
										return e.trim()
									}));
									n[1] = p.shift(), l = p, c = !0
								}
								if ((o = t(u.call(this, n[1].trim(), s), s)) && n[0] === e && "string" != typeof o) return o;
								"string" != typeof o && (o = m(o)), o || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), o = ""), c && (o = l.reduce((function(e, t) {
									return i.format(e, t, a.lng, r({}, a, {
										interpolationkey: n[1].trim()
									}))
								}), o.trim())), e = e.replace(n[0], o), this.regexp.lastIndex = 0
							}
							return e
						}
					}]), e
				}();
			var B = function(e) {
				function t(e, n, o) {
					var i, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
					return a(this, t), i = c(this, p(t).call(this)), R && v.call(l(i)), i.backend = e, i.store = n, i.services = o, i.languageUtils = o.languageUtils, i.options = r, i.logger = d.create("backendConnector"), i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(o, r.backend, r), i
				}
				return f(t, e), u(t, [{
					key: "queueLoad",
					value: function(e, t, n, o) {
						var i = this,
							r = [],
							a = [],
							s = [],
							u = [];
						return e.forEach((function(e) {
							var o = !0;
							t.forEach((function(t) {
								var s = "".concat(e, "|").concat(t);
								!n.reload && i.store.hasResourceBundle(e, t) ? i.state[s] = 2 : i.state[s] < 0 || (1 === i.state[s] ? a.indexOf(s) < 0 && a.push(s) : (i.state[s] = 1, o = !1, a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), u.indexOf(t) < 0 && u.push(t)))
							})), o || s.push(e)
						})), (r.length || a.length) && this.queue.push({
							pending: a,
							loaded: {},
							errors: [],
							callback: o
						}), {
							toLoad: r,
							pending: a,
							toLoadLanguages: s,
							toLoadNamespaces: u
						}
					}
				}, {
					key: "loaded",
					value: function(e, t, n) {
						var o = e.split("|"),
							i = o[0],
							r = o[1];
						t && this.emit("failedLoading", i, r, t), n && this.store.addResourceBundle(i, r, n), this.state[e] = t ? -1 : 2;
						var a = {};
						this.queue.forEach((function(n) {
							var o, s, u, l, c, p;
							o = n.loaded, s = r, l = k(o, [i], Object), c = l.obj, p = l.k, c[p] = c[p] || [], u && (c[p] = c[p].concat(s)), u || c[p].push(s),
								function(e, t) {
									for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
								}(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
									a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) {
										a[e].indexOf(t) < 0 && a[e].push(t)
									}))
								})), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
						})), this.emit("loaded", a), this.queue = this.queue.filter((function(e) {
							return !e.done
						}))
					}
				}, {
					key: "read",
					value: function(e, t, n) {
						var o = this,
							i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
							r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
							a = arguments.length > 5 ? arguments[5] : void 0;
						return e.length ? this.backend[n](e, t, (function(s, u) {
							s && u && i < 5 ? setTimeout((function() {
								o.read.call(o, e, t, n, i + 1, 2 * r, a)
							}), r) : a(s, u)
						})) : a(null, {})
					}
				}, {
					key: "prepareLoading",
					value: function(e, t) {
						var n = this,
							o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
							i = arguments.length > 3 ? arguments[3] : void 0;
						if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
						"string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
						var r = this.queueLoad(e, t, o, i);
						if (!r.toLoad.length) return r.pending.length || i(), null;
						r.toLoad.forEach((function(e) {
							n.loadOne(e)
						}))
					}
				}, {
					key: "load",
					value: function(e, t, n) {
						this.prepareLoading(e, t, {}, n)
					}
				}, {
					key: "reload",
					value: function(e, t, n) {
						this.prepareLoading(e, t, {
							reload: !0
						}, n)
					}
				}, {
					key: "loadOne",
					value: function(e) {
						var t = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
							o = e.split("|"),
							i = o[0],
							r = o[1];
						this.read(i, r, "read", void 0, void 0, (function(o, a) {
							o && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(i, " failed"), o), !o && a && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(i), a), t.loaded(e, o, a)
						}))
					}
				}, {
					key: "saveMissing",
					value: function(e, t, n, o, i) {
						var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
						this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, o, null, r({}, a, {
							isUpdate: i
						})), e && e[0] && this.store.addResource(e[0], t, n, o))
					}
				}]), t
			}(v);

			function J() {
				return {
					debug: !1,
					initImmediate: !0,
					ns: ["translation"],
					defaultNS: ["translation"],
					fallbackLng: ["dev"],
					fallbackNS: !1,
					supportedLngs: !1,
					nonExplicitSupportedLngs: !1,
					load: "all",
					preload: !1,
					simplifyPluralSuffix: !0,
					keySeparator: ".",
					nsSeparator: ":",
					pluralSeparator: "_",
					contextSeparator: "_",
					partialBundledLanguages: !1,
					saveMissing: !1,
					updateMissing: !1,
					saveMissingTo: "fallback",
					saveMissingPlurals: !0,
					missingKeyHandler: !1,
					missingInterpolationHandler: !1,
					postProcess: !1,
					postProcessPassResolved: !1,
					returnNull: !0,
					returnEmptyString: !0,
					returnObjects: !1,
					joinArrays: !1,
					returnedObjectHandler: !1,
					parseMissingKeyHandler: !1,
					appendNamespaceToMissingKey: !1,
					appendNamespaceToCIMode: !1,
					overloadTranslationOptionHandler: function(e) {
						var t = {};
						if ("object" === o(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === o(e[2]) || "object" === o(e[3])) {
							var n = e[3] || e[2];
							Object.keys(n).forEach((function(e) {
								t[e] = n[e]
							}))
						}
						return t
					},
					interpolation: {
						escapeValue: !0,
						format: function(e, t, n, o) {
							return e
						},
						prefix: "{{",
						suffix: "}}",
						formatSeparator: ",",
						unescapePrefix: "-",
						nestingPrefix: "$t(",
						nestingSuffix: ")",
						nestingOptionsSeparator: ",",
						maxReplaces: 1e3,
						skipOnVariables: !0
					}
				}
			}

			function q(e) {
				return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
			}

			function $() {}
			var W = function(e) {
				function t() {
					var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						o = arguments.length > 1 ? arguments[1] : void 0;
					if (a(this, t), e = c(this, p(t).call(this)), R && v.call(l(e)), e.options = q(n), e.services = {}, e.logger = d, e.modules = {
							external: []
						}, o && !e.isInitialized && !n.isClone) {
						if (!e.options.initImmediate) return e.init(n, o), c(e, l(e));
						setTimeout((function() {
							e.init(n, o)
						}), 0)
					}
					return e
				}
				return f(t, e), u(t, [{
					key: "init",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 ? arguments[1] : void 0;

						function o(e) {
							return e ? "function" == typeof e ? new e : e : null
						}
						if ("function" == typeof t && (n = t, t = {}), !t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.defaultNS = t.ns[0]), this.options = r({}, J(), this.options, q(t)), this.format = this.options.interpolation.format, n || (n = $), !this.options.isClone) {
							this.modules.logger ? d.init(o(this.modules.logger), this.options) : d.init(null, this.options);
							var i = new A(this.options);
							this.store = new E(this.options.resources, this.options);
							var a = this.services;
							a.logger = d, a.resourceStore = this.store, a.languageUtils = i, a.pluralResolver = new M(i, {
								prepend: this.options.pluralSeparator,
								compatibilityJSON: this.options.compatibilityJSON,
								simplifyPluralSuffix: this.options.simplifyPluralSuffix
							}), a.interpolator = new z(this.options), a.utils = {
								hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
							}, a.backendConnector = new B(o(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function(t) {
								for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
								e.emit.apply(e, [t].concat(o))
							})), this.modules.languageDetector && (a.languageDetector = o(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = o(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new V(this.services, this.options), this.translator.on("*", (function(t) {
								for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
								e.emit.apply(e, [t].concat(o))
							})), this.modules.external.forEach((function(t) {
								t.init && t.init(e)
							}))
						}
						if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
							var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
							s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
						}
						this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
						var u = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
						u.forEach((function(t) {
							e[t] = function() {
								var n;
								return (n = e.store)[t].apply(n, arguments)
							}
						}));
						var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
						l.forEach((function(t) {
							e[t] = function() {
								var n;
								return (n = e.store)[t].apply(n, arguments), e
							}
						}));
						var c = y(),
							p = function() {
								var t = function(t, o) {
									e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), c.resolve(o), n(t, o)
								};
								if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
								e.changeLanguage(e.options.lng, t)
							};
						return this.options.resources || !this.options.initImmediate ? p() : setTimeout(p, 0), c
					}
				}, {
					key: "loadResources",
					value: function(e) {
						var t = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
							o = n,
							i = "string" == typeof e ? e : this.language;
						if ("function" == typeof e && (o = e), !this.options.resources || this.options.partialBundledLanguages) {
							if (i && "cimode" === i.toLowerCase()) return o();
							var r = [],
								a = function(e) {
									e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
										r.indexOf(e) < 0 && r.push(e)
									}))
								};
							if (i) a(i);
							else {
								var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
								s.forEach((function(e) {
									return a(e)
								}))
							}
							this.options.preload && this.options.preload.forEach((function(e) {
								return a(e)
							})), this.services.backendConnector.load(r, this.options.ns, o)
						} else o(null)
					}
				}, {
					key: "reloadResources",
					value: function(e, t, n) {
						var o = y();
						return e || (e = this.languages), t || (t = this.options.ns), n || (n = $), this.services.backendConnector.reload(e, t, (function(e) {
							o.resolve(), n(e)
						})), o
					}
				}, {
					key: "use",
					value: function(e) {
						if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
						if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
						return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && F.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
					}
				}, {
					key: "changeLanguage",
					value: function(e, t) {
						var n = this;
						this.isLanguageChangingTo = e;
						var o = y();
						this.emit("languageChanging", e);
						var i = function(e) {
								if (n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.resolvedLanguage = void 0, !(["cimode", "dev"].indexOf(e) > -1))
									for (var t = 0; t < n.languages.length; t++) {
										var o = n.languages[t];
										if (!(["cimode", "dev"].indexOf(o) > -1) && n.store.hasLanguageSomeTranslations(o)) {
											n.resolvedLanguage = o;
											break
										}
									}
							},
							r = function(r) {
								e || r || !n.services.languageDetector || (r = []);
								var a = "string" == typeof r ? r : n.services.languageUtils.getBestMatchFromCodes(r);
								a && (n.language || i(a), n.translator.language || n.translator.changeLanguage(a), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)), n.loadResources(a, (function(e) {
									! function(e, r) {
										r ? (i(r), n.translator.changeLanguage(r), n.isLanguageChangingTo = void 0, n.emit("languageChanged", r), n.logger.log("languageChanged", r)) : n.isLanguageChangingTo = void 0, o.resolve((function() {
											return n.t.apply(n, arguments)
										})), t && t(e, (function() {
											return n.t.apply(n, arguments)
										}))
									}(e, a)
								}))
							};
						return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(e) : r(this.services.languageDetector.detect()), o
					}
				}, {
					key: "getFixedT",
					value: function(e, t, n) {
						var i = this,
							a = function e(t, a) {
								var s;
								if ("object" !== o(a)) {
									for (var u = arguments.length, l = new Array(u > 2 ? u - 2 : 0), c = 2; c < u; c++) l[c - 2] = arguments[c];
									s = i.options.overloadTranslationOptionHandler([t, a].concat(l))
								} else s = r({}, a);
								s.lng = s.lng || e.lng, s.lngs = s.lngs || e.lngs, s.ns = s.ns || e.ns;
								var p = i.options.keySeparator || ".",
									g = n ? "".concat(n).concat(p).concat(t) : t;
								return i.t(g, s)
							};
						return "string" == typeof e ? a.lng = e : a.lngs = e, a.ns = t, a.keyPrefix = n, a
					}
				}, {
					key: "t",
					value: function() {
						var e;
						return this.translator && (e = this.translator).translate.apply(e, arguments)
					}
				}, {
					key: "exists",
					value: function() {
						var e;
						return this.translator && (e = this.translator).exists.apply(e, arguments)
					}
				}, {
					key: "setDefaultNamespace",
					value: function(e) {
						this.options.defaultNS = e
					}
				}, {
					key: "hasLoadedNamespace",
					value: function(e) {
						var t = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
						if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
						var o = this.resolvedLanguage || this.languages[0],
							i = !!this.options && this.options.fallbackLng,
							r = this.languages[this.languages.length - 1];
						if ("cimode" === o.toLowerCase()) return !0;
						var a = function(e, n) {
							var o = t.services.backendConnector.state["".concat(e, "|").concat(n)];
							return -1 === o || 2 === o
						};
						if (n.precheck) {
							var s = n.precheck(this, a);
							if (void 0 !== s) return s
						}
						return !!this.hasResourceBundle(o, e) || (!this.services.backendConnector.backend || !(!a(o, e) || i && !a(r, e)))
					}
				}, {
					key: "loadNamespaces",
					value: function(e, t) {
						var n = this,
							o = y();
						return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((function(e) {
							n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
						})), this.loadResources((function(e) {
							o.resolve(), t && t(e)
						})), o) : (t && t(), Promise.resolve())
					}
				}, {
					key: "loadLanguages",
					value: function(e, t) {
						var n = y();
						"string" == typeof e && (e = [e]);
						var o = this.options.preload || [],
							i = e.filter((function(e) {
								return o.indexOf(e) < 0
							}));
						return i.length ? (this.options.preload = o.concat(i), this.loadResources((function(e) {
							n.resolve(), t && t(e)
						})), n) : (t && t(), Promise.resolve())
					}
				}, {
					key: "dir",
					value: function(e) {
						if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
						return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
					}
				}, {
					key: "createInstance",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 ? arguments[1] : void 0;
						return new t(e, n)
					}
				}, {
					key: "cloneInstance",
					value: function() {
						var e = this,
							n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $,
							i = r({}, this.options, n, {
								isClone: !0
							}),
							a = new t(i),
							s = ["store", "services", "language"];
						return s.forEach((function(t) {
							a[t] = e[t]
						})), a.services = r({}, this.services), a.services.utils = {
							hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
						}, a.translator = new V(a.services, a.options), a.translator.on("*", (function(e) {
							for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
							a.emit.apply(a, [e].concat(n))
						})), a.init(i, o), a.translator.options = a.options, a.translator.backendConnector.services.utils = {
							hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
						}, a
					}
				}, {
					key: "toJSON",
					value: function() {
						return {
							options: this.options,
							store: this.store,
							language: this.language,
							languages: this.languages,
							resolvedLanguage: this.resolvedLanguage
						}
					}
				}]), t
			}(v);
			const Y = new W;
			var G = n(39654);
			let Q = (e, t) => e;
			const X = window;
			if (!X.__tradingviewI18nextInited) {
				let e = window.language || null,
					t = ee(e);
				e && t || (console.error("No translation data"), e = "en", t = ee("en"));
				const n = (0, G.getIsoLanguageCodeFromLanguage)(e);
				if (e && t) {
					const e = {
						compatibilityJSON: "v3",
						interpolation: {
							escapeValue: !1,
							prefix: "{",
							suffix: "}",
							skipOnVariables: !0,
							maxReplaces: 25
						},
						keySeparator: ":::",
						lng: n,
						nsSeparator: ":::",
						resources: {
							[n]: {
								translation: t
							}
						}
					};
					Y.init(e), Q = Y.t.bind(Y);
					window;
					0
				}
				X.__tradingviewI18nextInited = !0
			}

			function Z(e, t) {
				return Q(e, t)
			}

			function ee(e) {
				return e && X._tv_languages && X._tv_languages[e] || null
			}
		},
		39654: (e, t, n) => {
			n.d(t, {
				getIsoLanguageCodeFromLanguage: () => i
			});
			const o = {
				ar_AE: "ar",
				br: "pt",
				de_DE: "de",
				he_IL: "he",
				id_ID: "id",
				in: "en",
				kr: "ko",
				ms_MY: "ms",
				sv_SE: "sv",
				th_TH: "th",
				uk: "en",
				vi_VN: "vi",
				zh_CN: "zh-Hans",
				zh_TW: "zh-Hant",
				zh: "zh-Hans"
			};

			function i(e) {
				return o[e] || e
			}
		}
	}
]);