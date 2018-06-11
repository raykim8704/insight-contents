var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	/**
  * document : http://cdn.iueditor.org/js/readme.html
  */

	/*************************************
  *                                    *
  *   Don't change require ordering    *
  *                                    *
  **************************************/
	__webpack_require__(2);
	__webpack_require__(3);

	IUEditor.jQuery = IUEditor.$ = __webpack_require__(4);
	if (typeof window.jQuery == 'undefined') {
		window.jQuery = window.$ = IUEditor.jQuery;
	}

	/*
  velocity 媛 window.jQuery瑜� 李몄“�섎�濡� 湲곗〈�� window.jQuery, window.$瑜� �ㅻⅨ variable�� �좎떆 ��ν빐�볤퀬 
  window.jQuery, window.$瑜� IUEditor�먯꽌 �ъ슜�섎뒗 jQuery瑜� assign.
  velocity媛 濡쒕뱶�섎㈃ 湲곗〈�� window.jQuery, window.$瑜� �ㅼ떆 assign/
 */
	var jQuery_global = window.jQuery;
	var $_global = window.$;

	window.jQuery = window.$ = IUEditor.jQuery;
	__webpack_require__(5);
	__webpack_require__(6);

	window.jQuery = jQuery_global;
	window.$ = $_global;

	///////////////////
	__webpack_require__(7);
	__webpack_require__(8);

	__webpack_require__(9);
	__webpack_require__(10);

	__webpack_require__(11); // depends on plugin
	__webpack_require__(30); // depends on plugin

	/**
 IUEditor signature
 */
	

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	/**
  * manage iueditor information
  */
	window.IUEditor = {
		print: function print() {
			console.log('IUEditor(v' + "2.1.11" + '), Released:' + "2017-06-13");
		}
	};

	window.IU_WIDGET = {
		CAROUSEL: 'iu.carousel',
		COLLAPSIBLE: 'iu.collapsible',
		FLIPSWITCH: 'iu.flipswitch',
		GOOGLEMAP: 'iu.googlemap',
		PANEL: 'iu.panel',
		POPUP: 'iu.popup',
		RANGE_SLIDER: 'iu.rangeslider',
		SLIDER: 'iu.slider',
		TABVIEW: 'iu.tabview',
		TEXT: 'iu.text',
		TRANSITION: 'iu.transition',
		SWITCH: 'iu.switch',
		MOVIE: 'iu.movie',
		WEBMOVIE: 'iu.webmovie',
		SCROLL_EVENT: 'iu.scrollevent',
		//wordpress widget
		WP_MENU: 'wp.menu'
	};

	// indexOfWindowWidth
	window.indexOfWindowWidth = function (slots) {
		var index = void 0;
		for (var i = slots.length - 1; i >= 0; i--) {
			if (window.innerWidth > slots[i]) {
				index = i;
				break;
			}
		}
		return index;
	};

	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	window.getInternetExplorerVersion = function () {

		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
		}
		return rv;
	};

	window.mobileAndTabletcheck = function () {
		var check = false;
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	};

	// iu dom ready
	window.IUDOMReady = function ($object) {
		$object.find('.iu-carousel').carousel();
		$object.find('.iu-collapsible').collapsible();
		$object.find('.iu-pg-flip-switch').flipswitch();
		$object.find('.iu-pg-range-slide').rangeslider();
		$object.find('.iu-pg-slide').slide();
		$object.find('.iu-tabview').tabview(0);
		$object.find('.iu-simple-tabview').tabview(1);
		$object.find('.iu-text[data-iu-text]').iutext();
		$object.find('.iu-cell[data-iu-text]').iutext();
		$object.find('.iu-table-row-cell[data-iu-text]').iutext();
		$object.find('.iu-section[data-iu-full-section]').iufullsection();
		$object.find('.iu-transition').transition();
		$object.find('.iu-pg-switch').pgswitch();
		$object.find('.iux-pg-file-upload-innerbutton').activateFileUpload();
		$object.find('.iux-has-hover').activateHover();
		$object.find('.iux-link-scroll').activateScrollLink();

		IUEditor.initGoogleMapInElement($object);
		IUEditor.initVimeoInElement($object);
		IUEditor.initYoutubeInElement($object);
		IUEditor.initPanelInElement($object);
		IUEditor.initPopupInElement($object);
		IUEditor.initIUEventMachine($object);

		if (window.mobileAndTabletcheck() == false) {
			$object.find('.iux-event-scroll').scrollevent();
		}
	};

	/***/
},
/* 3 */
/***/function (module, exports) {

	// console, IE9 : javascript only works after opening developer tools (because console is undefined)
	if (typeof window.console == "undefined") {
		window.console = {
			log: function log() {}
		};
	}

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik M철ller. fixes from Paul Irish and Tino Zijdel
	// MIT license
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                                  * jQuery JavaScript Library v1.12.4
                                                                  * http://jquery.com/
                                                                  *
                                                                  * Includes Sizzle.js
                                                                  * http://sizzlejs.com/
                                                                  *
                                                                  * Copyright jQuery Foundation and other contributors
                                                                  * Released under the MIT license
                                                                  * http://jquery.org/license
                                                                  *
                                                                  * Date: 2016-05-20T17:17Z
                                                                  */

	(function (global, factory) {

		if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

		// Support: Firefox 18+
		// Can't be in strict mode, several libs including ASP.NET trace
		// the stack via arguments.caller.callee and Firefox dies if
		// you try to trace through "use strict" call chains. (#13335)
		//"use strict";
		var deletedIds = [];

		var document = window.document;

		var _slice = deletedIds.slice;

		var concat = deletedIds.concat;

		var push = deletedIds.push;

		var indexOf = deletedIds.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var support = {};

		var version = "1.12.4",


		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},


		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,


		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {

			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// Start with an empty selector
			selector: "",

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function toArray() {
				return _slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
				return num != null ?

				// Return just the one element from the set
				num < 0 ? this[num + this.length] : this[num] :

				// Return all the elements in a clean array
				_slice.call(this);
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor();
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: deletedIds.sort,
			splice: deletedIds.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var src,
			    copyIsArray,
			    copy,
			    name,
			    options,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({

			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray || function (obj) {
				return jQuery.type(obj) === "array";
			},

			isWindow: function isWindow(obj) {
				/* jshint eqeqeq: false */
				return obj != null && obj == obj.window;
			},

			isNumeric: function isNumeric(obj) {

				// parseFloat NaNs numeric-cast false positives (null|true|false|"")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				// adding 1 corrects loss of precision from parseFloat (#15100)
				var realStringObj = obj && obj.toString();
				return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
			},

			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			isPlainObject: function isPlainObject(obj) {
				var key;

				// Must be an Object.
				// Because of IE, we also have to check the presence of the constructor property.
				// Make sure that DOM nodes and window objects don't pass through, as well
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				try {

					// Not own constructor property must be Object
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {

					// IE8,9 Will throw exceptions on certain host objects #9897
					return false;
				}

				// Support: IE<9
				// Handle iteration over inherited properties before own properties.
				if (!support.ownFirst) {
					for (key in obj) {
						return hasOwn.call(obj, key);
					}
				}

				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.
				for (key in obj) {}

				return key === undefined || hasOwn.call(obj, key);
			},

			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}
				return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
			},

			// Workarounds based on findings by Jim Driscoll
			// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
			globalEval: function globalEval(data) {
				if (data && jQuery.trim(data)) {

					// We use execScript on Internet Explorer
					// We use an anonymous function so that context is window
					// rather than jQuery in Firefox
					(window.execScript || function (data) {
						window["eval"].call(window, data); // jscs:ignore requireDotNotation
					})(data);
				}
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function each(obj, callback) {
				var length,
				    i = 0;

				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}

				return obj;
			},

			// Support: Android<4.1, IE<9
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				var len;

				if (arr) {
					if (indexOf) {
						return indexOf.call(arr, elem, i);
					}

					len = arr.length;
					i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

					for (; i < len; i++) {

						// Skip accessing in sparse arrays
						if (i in arr && arr[i] === elem) {
							return i;
						}
					}
				}

				return -1;
			},

			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				while (j < len) {
					first[i++] = second[j++];
				}

				// Support: IE<9
				// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
				if (len !== len) {
					while (second[j] !== undefined) {
						first[i++] = second[j++];
					}
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function proxy(fn, context) {
				var args, proxy, tmp;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: function now() {
				return +new Date();
			},

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		// JSHint would error on this code due to the Symbol not being defined in ES5.
		// Defining this global in .jshintrc would create a danger of using the global
		// unguarded in another place, it seems safer to just disable JSHint for these
		// three lines.
		/* jshint ignore: start */
		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
		}
		/* jshint ignore: end */

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArrayLike(obj) {

			// Support: iOS 8.2 (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
   */
		function (window) {

			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,


			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,


			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},


			// General-purpose constants
			MAX_NEGATIVE = 1 << 31,


			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,

			// Use a stripped-down indexOf as it's faster than native
			// http://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


			// Regular expressions

			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",


			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",


			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,


			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,


			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},


			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			};

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    nidselect,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,


				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if (m = match[1]) {

								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

										results.push(elem);
										return results;
									}
								}

								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;

								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}

						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;

								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {

								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rescape, "\\$&");
								} else {
									context.setAttribute("id", nid = expando);
								}

								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
								while (i--) {
									groups[i] = nidselect + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");

								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}

							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
    * Create key-value caches of limited size
    * @returns {function(string, object)} Returns the Object data after storing it on itself with
    *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
    *	deleting the oldest entry
    */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
    * Mark a function for special use by Sizzle
    * @param {Function} fn The function to mark
    */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
    * Support testing using an element
    * @param {Function} fn Passed the created div and expects a boolean result
    */
			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
					// release memory in IE
					div = null;
				}
			}

			/**
    * Adds the same handler for all of the specified attrs
    * @param {String} attrs Pipe-separated list of attributes
    * @param {Function} handler The method that will be applied
    */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
    * Checks document order of two siblings
    * @param {Element} a
    * @param {Element} b
    * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
    */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
    * Returns a function to use in pseudos for input types
    * @param {String} type
    */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for buttons
    * @param {String} type
    */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for positionals
    * @param {Function} fn
    */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
    * Checks a node for validity as a Sizzle context
    * @param {Element|Object=} context
    * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
    */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
    * Detects XML nodes
    * @param {Element|Object} elem An element or a document
    * @returns {Boolean} True iff elem is a non-HTML XML node
    */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
    * Sets document-related variables once based on the current document
    * @param {Element|Object} [doc] An element or document object to use to set the document
    * @returns {Object} Returns the current document
    */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if ((parent = document.defaultView) && parent.top !== parent) {
					// Support: IE 11
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}

				/* Attributes
    ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				/* getElement(s)By*
    ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(document.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID find and filter
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);
							return m ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					// Support: IE6/7
					// getElementById is not reliable as a find shortcut
					delete Expr.find["ID"];

					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);

						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
    ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See http://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibing-combinator selector` fails
						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (div) {
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
    ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
    ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],

				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
    * Document sorting and removing duplicates
    * @param {ArrayLike} results
    */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
    * Utility function for retrieving the text value of an array of DOM nodes
    * @param {Array|Element} elem
    */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
      	1 type (only|nth|...)
      	2 what (child|of-type)
      	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
      	4 xn-component of xn+y argument ([+-]?\d*n|)
      	5 sign of xn-component
      	6 x of xn-component
      	7 sign of y-component
      	8 y of y-component
      */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {

									// Seek `elem` from a previously-cached index

									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}

									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});

													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

													uniqueCache[type] = [dirruns, diff];
												}

												if (node === elem) {
													break;
												}
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},

					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},

					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

								if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[dir] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,


					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,


				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context === document || context || outermost;
					}

					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;

					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
    * A low-level selection function that works with Sizzle's compiled
    *  selector functions
    * @param {String|Function} selector A selector or a pre-compiled
    *  selector function built with Sizzle.compile
    * @param {Element} context
    * @param {Array} [results]
    * @param {Array} [seed] A set of elements to match against
    */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (div1) {
				// Should return 1, but returns 4 (following)
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;

		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};

		var _siblings = function _siblings(n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		};

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;

		var risSimple = /^.[^:#\[\.,]*$/;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					/* jshint -W018 */
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				qualifier = jQuery.filter(qualifier, elements);
			}

			return jQuery.grep(elements, function (elem) {
				return jQuery.inArray(elem, qualifier) > -1 !== not;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret = [],
				    self = this,
				    len = self.length;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		// Initialize a jQuery object


		// A central reference to the root jQuery(document)
		var rootjQuery,


		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return typeof root.ready !== "undefined" ? root.ready(selector) :

				// Execute immediately if ready is not present
				selector(jQuery);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,


		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			has: function has(target) {
				var i,
				    targets = jQuery(target, this),
				    len = targets.length;

				return this.filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},

			// Determine the position of an element within
			// the matched set of elements
			index: function index(elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// index in selector
				if (typeof elem === "string") {
					return jQuery.inArray(this[0], jQuery(elem));
				}

				// Locate the position of the desired element
				return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			do {
				cur = cur[dir];
			} while (cur && cur.nodeType !== 1);

			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var ret = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					ret = jQuery.filter(selector, ret);
				}

				if (this.length > 1) {

					// Remove duplicates
					if (!guaranteedUnique[name]) {
						ret = jQuery.uniqueSort(ret);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						ret = ret.reverse();
					}
				}

				return this.pushStack(ret);
			};
		});
		var rnotwhite = /\S+/g;

		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

			var // Flag to know if list is currently firing
			firing,


			// Last fire value for non-forgettable lists
			memory,


			// Flag to know if list was already fired
			_fired,


			// Flag to prevent firing
			_locked,


			// Actual callback list
			list = [],


			// Queue of execution data for repeatable lists
			queue = [],


			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,


			// Fire callbacks
			fire = function fire() {

				// Enforce single-firing
				_locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (_locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},


			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = true;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [

				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				// Keep pipe for back-compat
				_promise.pipe = _promise.then;

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					// promise[ done | fail | progress ] = list.add
					_promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {

							// state = [ resolved | rejected ]
							_state = stateString;

							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				_promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function when(subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,


				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


				// Update function for both resolve and progress values
				updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				// add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
						} else {
							--remaining;
						}
					}
				}

				// if we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});

		// The deferred used on DOM ready
		var readyList;

		jQuery.fn.ready = function (fn) {

			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		};

		jQuery.extend({

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function ready(wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);

				// Trigger any bound ready events
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});

		/**
   * Clean-up method for dom ready events
   */
		function detach() {
			if (document.addEventListener) {
				document.removeEventListener("DOMContentLoaded", completed);
				window.removeEventListener("load", completed);
			} else {
				document.detachEvent("onreadystatechange", completed);
				window.detachEvent("onload", completed);
			}
		}

		/**
   * The ready event handler and self cleanup method
   */
		function completed() {

			// readyState === "complete" is good enough for us to call the dom ready in oldIE
			if (document.addEventListener || window.event.type === "load" || document.readyState === "complete") {

				detach();
				jQuery.ready();
			}
		}

		jQuery.ready.promise = function (obj) {
			if (!readyList) {

				readyList = jQuery.Deferred();

				// Catch cases where $(document).ready() is called
				// after the browser event has already occurred.
				// Support: IE6-10
				// Older IE sometimes signals "interactive" too soon
				if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

					// Handle it asynchronously to allow scripts the opportunity to delay ready
					window.setTimeout(jQuery.ready);

					// Standards-based browsers support DOMContentLoaded
				} else if (document.addEventListener) {

					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", completed);

					// A fallback to window.onload, that will always work
					window.addEventListener("load", completed);

					// If IE event model is used
				} else {

					// Ensure firing before onload, maybe late but safe also for iframes
					document.attachEvent("onreadystatechange", completed);

					// A fallback to window.onload, that will always work
					window.attachEvent("onload", completed);

					// If IE and not a frame
					// continually check to see if the document is ready
					var top = false;

					try {
						top = window.frameElement == null && document.documentElement;
					} catch (e) {}

					if (top && top.doScroll) {
						(function doScrollCheck() {
							if (!jQuery.isReady) {

								try {

									// Use the trick by Diego Perini
									// http://javascript.nwbox.com/IEContentLoaded/
									top.doScroll("left");
								} catch (e) {
									return window.setTimeout(doScrollCheck, 50);
								}

								// detach all dom ready events
								detach();

								// and execute any waiting functions
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise(obj);
		};

		// Kick off the DOM ready check even if the user does not
		jQuery.ready.promise();

		// Support: IE<9
		// Iteration over object's inherited properties before its own
		var i;
		for (i in jQuery(support)) {
			break;
		}
		support.ownFirst = i === "0";

		// Note: most support tests are defined in their respective modules.
		// false until the test is run
		support.inlineBlockNeedsLayout = false;

		// Execute ASAP in case we need to set body.style.zoom
		jQuery(function () {

			// Minified: var a,b,c,d
			var val, div, body, container;

			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {

				// Return for frameset docs that don't have a body
				return;
			}

			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);

			if (typeof div.style.zoom !== "undefined") {

				// Support: IE<8
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

				support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
				if (val) {

					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					// Support: IE<8
					body.style.zoom = 1;
				}
			}

			body.removeChild(container);
		});

		(function () {
			var div = document.createElement("div");

			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}

			// Null elements to avoid leaks in IE.
			div = null;
		})();
		var acceptData = function acceptData(elem) {
			var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			    nodeType = +elem.nodeType || 1;

			// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
			return nodeType !== 1 && nodeType !== 9 ? false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute("classid") === noData;
		};

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;

		function dataAttr(elem, key, data) {

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {

				var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					jQuery.data(elem, key, data);
				} else {
					data = undefined;
				}
			}

			return data;
		}

		// checks a cache object for emptiness
		function isEmptyDataObject(obj) {
			var name;
			for (name in obj) {

				// if the public data object is empty, the private is still empty
				if (name === "data" && jQuery.isEmptyObject(obj[name])) {
					continue;
				}
				if (name !== "toJSON") {
					return false;
				}
			}

			return true;
		}

		function internalData(elem, name, data, pvt /* Internal Use Only */) {
			if (!acceptData(elem)) {
				return;
			}

			var ret,
			    thisCache,
			    internalKey = jQuery.expando,


			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,


			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,


			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
				return;
			}

			if (!id) {

				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if (isNode) {
					id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}

			if (!cache[id]) {

				// Avoid exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				cache[id] = isNode ? {} : { toJSON: jQuery.noop };
			}

			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}

			thisCache = cache[id];

			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}

				thisCache = thisCache.data;
			}

			if (data !== undefined) {
				thisCache[jQuery.camelCase(name)] = data;
			}

			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if (typeof name === "string") {

				// First Try to find as-is property data
				ret = thisCache[name];

				// Test for null|undefined property data
				if (ret == null) {

					// Try to find the camelCased property
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}

			return ret;
		}

		function internalRemoveData(elem, name, pvt) {
			if (!acceptData(elem)) {
				return;
			}

			var thisCache,
			    i,
			    isNode = elem.nodeType,


			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;

			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if (!cache[id]) {
				return;
			}

			if (name) {

				thisCache = pvt ? cache[id] : cache[id].data;

				if (thisCache) {

					// Support array or space separated string names for data keys
					if (!jQuery.isArray(name)) {

						// try the string as a key before any manipulation
						if (name in thisCache) {
							name = [name];
						} else {

							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					} else {

						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = name.concat(jQuery.map(name, jQuery.camelCase));
					}

					i = name.length;
					while (i--) {
						delete thisCache[name[i]];
					}

					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
						return;
					}
				}
			}

			// See jQuery.data for more information
			if (!pvt) {
				delete cache[id].data;

				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}

			// Destroy the cache
			if (isNode) {
				jQuery.cleanData([elem], true);

				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
				/* jshint eqeqeq: false */
			} else if (support.deleteExpando || cache != cache.window) {
				/* jshint eqeqeq: true */
				delete cache[id];

				// When all else fails, undefined
			} else {
				cache[id] = undefined;
			}
		}

		jQuery.extend({
			cache: {},

			// The following elements (space-suffixed to avoid Object.prototype collisions)
			// throw uncatchable exceptions if you attempt to set expando properties
			noData: {
				"applet ": true,
				"embed ": true,

				// ...but Flash objects (which have this classid) *can* handle expandos
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},

			hasData: function hasData(elem) {
				elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
				return !!elem && !isEmptyDataObject(elem);
			},

			data: function data(elem, name, _data) {
				return internalData(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				return internalRemoveData(elem, name);
			},

			// For internal use only.
			_data: function _data(elem, name, data) {
				return internalData(elem, name, data, true);
			},

			_removeData: function _removeData(elem, name) {
				return internalRemoveData(elem, name, true);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Special expections of .data basically thwart jQuery.access,
				// so implement the relevant behavior ourselves

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = jQuery.data(elem);

						if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
							i = attrs.length;
							while (i--) {

								// Support: IE11+
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							jQuery._data(elem, "parsedAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === "object") {
					return this.each(function () {
						jQuery.data(this, key);
					});
				}

				return arguments.length > 1 ?

				// Sets one value
				this.each(function () {
					jQuery.data(this, key, value);
				}) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
			},

			removeData: function removeData(key) {
				return this.each(function () {
					jQuery.removeData(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = jQuery._data(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = jQuery._data(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// not intended for public consumption - generates a queueHooks object,
			// or returns the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return jQuery._data(elem, key) || jQuery._data(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						jQuery._removeData(elem, type + "queue");
						jQuery._removeData(elem, key);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = jQuery._data(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});

		(function () {
			var shrinkWrapBlocksVal;

			support.shrinkWrapBlocks = function () {
				if (shrinkWrapBlocksVal != null) {
					return shrinkWrapBlocksVal;
				}

				// Will be changed later if needed.
				shrinkWrapBlocksVal = false;

				// Minified: var b,c,d
				var div, body, container;

				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {

					// Test fired too early or in an unsupported environment, exit.
					return;
				}

				// Setup
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);

				// Support: IE6
				// Check if elements with layout shrink-wrap their children
				if (typeof div.style.zoom !== "undefined") {

					// Reset CSS: box-sizing; display; margin; border
					div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
					div.appendChild(document.createElement("div")).style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}

				body.removeChild(container);

				return shrinkWrapBlocksVal;
			};
		})();
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHidden = function isHidden(elem, el) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};

		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale = 1,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

			if (initialInUnit && initialInUnit[3] !== unit) {

				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];

				// Make sure we update the tween properties later on
				valueParts = valueParts || [];

				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;

				do {

					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					initialInUnit = initialInUnit / scale;
					jQuery.style(elem, prop, initialInUnit + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// Break the loop if scale is unchanged or perfect, or if we've just had enough.
				} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
			}

			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;

				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    length = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {

					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ? elems :

			// Gets
			bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		};
		var rcheckableType = /^(?:checkbox|radio)$/i;

		var rtagName = /<([\w:-]+)/;

		var rscriptType = /^$|\/(?:java|ecma)script/i;

		var rleadingWhitespace = /^\s+/;

		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" + "details|dialog|figcaption|figure|footer|header|hgroup|main|" + "mark|meter|nav|output|picture|progress|section|summary|template|time|video";

		function createSafeFragment(document) {
			var list = nodeNames.split("|"),
			    safeFrag = document.createDocumentFragment();

			if (safeFrag.createElement) {
				while (list.length) {
					safeFrag.createElement(list.pop());
				}
			}
			return safeFrag;
		}

		(function () {
			var div = document.createElement("div"),
			    fragment = document.createDocumentFragment(),
			    input = document.createElement("input");

			// Setup
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

			// IE strips leading whitespace when .innerHTML is used
			support.leadingWhitespace = div.firstChild.nodeType === 3;

			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			support.tbody = !div.getElementsByTagName("tbody").length;

			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			support.htmlSerialize = !!div.getElementsByTagName("link").length;

			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

			// Check if a disconnected checkbox will retain its checked
			// value of true after appended to the DOM (IE6/7)
			input.type = "checkbox";
			input.checked = true;
			fragment.appendChild(input);
			support.appendChecked = input.checked;

			// Make sure textarea (and checkbox) defaultValue is properly cloned
			// Support: IE6-IE11+
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

			// #11217 - WebKit loses check when the name is after the checked attribute
			fragment.appendChild(div);

			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input = document.createElement("input");
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
			// old WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE<9
			// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
			support.noCloneEvent = !!div.addEventListener;

			// Support: IE<9
			// Since attributes and properties are the same in IE,
			// cleanData must set properties to undefined rather than use removeAttribute
			div[jQuery.expando] = 1;
			support.attributes = !div.getAttribute(jQuery.expando);
		})();

		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],

			// Support: IE8
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		};

		// Support: IE8-IE9
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function getAll(context, tag) {
			var elems,
			    elem,
			    i = 0,
			    found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : undefined;

			if (!found) {
				for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
					if (!tag || jQuery.nodeName(elem, tag)) {
						found.push(elem);
					} else {
						jQuery.merge(found, getAll(elem, tag));
					}
				}
			}

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var elem,
			    i = 0;
			for (; (elem = elems[i]) != null; i++) {
				jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
			}
		}

		var rhtml = /<|&#?\w+;/,
		    rtbody = /<tbody/i;

		function fixDefaultChecked(elem) {
			if (rcheckableType.test(elem.type)) {
				elem.defaultChecked = elem.checked;
			}
		}

		function buildFragment(elems, context, scripts, selection, ignored) {
			var j,
			    elem,
			    contains,
			    tmp,
			    tag,
			    tbody,
			    wrap,
			    l = elems.length,


			// Ensure a safe fragment
			safe = createSafeFragment(context),
			    nodes = [],
			    i = 0;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;

						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
							nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if (!support.tbody) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;

							j = elem && elem.childNodes.length;
							while (j--) {
								if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {

									elem.removeChild(tbody);
								}
							}
						}

						jQuery.merge(nodes, tmp.childNodes);

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while (tmp.firstChild) {
							tmp.removeChild(tmp.firstChild);
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if (tmp) {
				safe.removeChild(tmp);
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if (!support.appendChecked) {
				jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
			}

			i = 0;
			while (elem = nodes[i++]) {

				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}

					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(safe.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			tmp = null;

			return safe;
		}

		(function () {
			var i,
			    eventName,
			    div = document.createElement("div");

			// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
			for (i in { submit: true, change: true, focusin: true }) {
				eventName = "on" + i;

				if (!(support[i] = eventName in window)) {

					// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
					div.setAttribute(eventName, "t");
					support[i] = div.attributes[eventName].expando === false;
				}
			}

			// Null elements to avoid leaks in IE.
			div = null;
		})();

		var rformElems = /^(?:input|select|textarea)$/i,
		    rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		// Support: IE9
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === "object") {

				// ( types-Object, selector, data )
				if (typeof selector !== "string") {

					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}

			if (data == null && fn == null) {

				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {

					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {

					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {

					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};

				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}

		/*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {
				var tmp,
				    events,
				    t,
				    handleObjIn,
				    special,
				    eventHandle,
				    handleObj,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery._data(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {

						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
					};

					// Add elem as a property of the handle fn to prevent a memory leak
					// with IE non-native events
					eventHandle.elem = elem;
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener/attachEvent if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

							// Bind the global event handler to the element
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							} else if (elem.attachEvent) {
								elem.attachEvent("on" + type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}

				// Nullify elem to prevent memory leaks in IE
				elem = null;
			},

			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {
				var j,
				    handleObj,
				    tmp,
				    origCount,
				    t,
				    events,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery.hasData(elem) && jQuery._data(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;

					// removeData also checks for emptiness and clears the expando if empty
					// so use it instead of delete
					jQuery._removeData(elem, "events");
				}
			},

			trigger: function trigger(event, data, elem, onlyHandlers) {
				var handle,
				    ontype,
				    cur,
				    bubbleType,
				    special,
				    tmp,
				    i,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") > -1) {

					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");

					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

						// Call a native DOM method on the target with the same name name as the event.
						// Can't use an .isFunction() check here because IE6/7 fails that test.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && elem[type] && !jQuery.isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							try {
								elem[type]();
							} catch (e) {

								// IE<9 dies on focus/blur to hidden element (#1486,#12518)
								// only reproducible on winXP IE8 native, not IE9 in IE8 mode
							}
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function dispatch(event) {

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				// Support (at least): Chrome, IE9
				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				//
				// Support: Firefox<=42+
				// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
				if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {

					/* jshint eqeqeq: false */
					for (; cur != this; cur = cur.parentNode || this) {
						/* jshint eqeqeq: true */

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}

				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];

				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				// Support: IE<9
				// Fix target property (#1925)
				if (!event.target) {
					event.target = originalEvent.srcElement || document;
				}

				// Support: Safari 6-8+
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				// Support: IE<9
				// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
				event.metaKey = !!event.metaKey;

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			// Includes some event props shared by KeyEvent and MouseEvent
			props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {

					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: ("button buttons clientX clientY fromElement offsetX offsetY " + "pageX pageY screenX screenY toElement").split(" "),
				filter: function filter(event, original) {
					var body,
					    eventDoc,
					    doc,
					    button = original.button,
					    fromElement = original.fromElement;

					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					// Add relatedTarget, if necessary
					if (!event.relatedTarget && fromElement) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			special: {
				load: {

					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {

					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							try {
								this.focus();
								return false;
							} catch (e) {

								// Support: IE<9
								// If we error on focus to hidden element (#1486, #12518),
								// let .trigger() run the handlers
							}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {

					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false;
						}
					},

					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {

						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			// Piggyback on a donor event to simulate a different one
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				});

				jQuery.event.trigger(e, null, elem);

				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		} : function (elem, type, handle) {
			var name = "on" + type;

			if (elem.detachEvent) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if (typeof elem[name] === "undefined") {
					elem[name] = null;
				}

				elem.detachEvent(name, handle);
			}
		};

		jQuery.Event = function (src, props) {

			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ? returnTrue : returnFalse;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;
				if (!e) {
					return;
				}

				// If preventDefault exists, run it on the original event
				if (e.preventDefault) {
					e.preventDefault();

					// Support: IE
					// Otherwise set the returnValue property of the original event to false
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (!e || this.isSimulated) {
					return;
				}

				// If stopPropagation exists, run it on the original event
				if (e.stopPropagation) {
					e.stopPropagation();
				}

				// Support: IE
				// Set the cancelBubble property of the original event to true
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://code.google.com/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		// IE submit delegation
		if (!support.submit) {

			jQuery.event.special.submit = {
				setup: function setup() {

					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}

					// Lazy-add a submit handler when a descendant form may potentially be submitted
					jQuery.event.add(this, "click._submit keypress._submit", function (e) {

						// Node name check avoids a VML-related crash in IE (#9807)
						var elem = e.target,
						    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop(elem, "form") : undefined;

						if (form && !jQuery._data(form, "submit")) {
							jQuery.event.add(form, "submit._submit", function (event) {
								event._submitBubble = true;
							});
							jQuery._data(form, "submit", true);
						}
					});

					// return undefined since we don't need an event listener
				},

				postDispatch: function postDispatch(event) {

					// If form was submitted by the user, bubble the event up the tree
					if (event._submitBubble) {
						delete event._submitBubble;
						if (this.parentNode && !event.isTrigger) {
							jQuery.event.simulate("submit", this.parentNode, event);
						}
					}
				},

				teardown: function teardown() {

					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}

					// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
					jQuery.event.remove(this, "._submit");
				}
			};
		}

		// IE change delegation and checkbox/radio fix
		if (!support.change) {

			jQuery.event.special.change = {

				setup: function setup() {

					if (rformElems.test(this.nodeName)) {

						// IE doesn't fire change on a check/radio until blur; trigger it on click
						// after a propertychange. Eat the blur-change in special.change.handle.
						// This still fires onchange a second time for check/radio after blur.
						if (this.type === "checkbox" || this.type === "radio") {
							jQuery.event.add(this, "propertychange._change", function (event) {
								if (event.originalEvent.propertyName === "checked") {
									this._justChanged = true;
								}
							});
							jQuery.event.add(this, "click._change", function (event) {
								if (this._justChanged && !event.isTrigger) {
									this._justChanged = false;
								}

								// Allow triggered, simulated change events (#11500)
								jQuery.event.simulate("change", this, event);
							});
						}
						return false;
					}

					// Delegated event; lazy-add a change handler on descendant inputs
					jQuery.event.add(this, "beforeactivate._change", function (e) {
						var elem = e.target;

						if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
							jQuery.event.add(elem, "change._change", function (event) {
								if (this.parentNode && !event.isSimulated && !event.isTrigger) {
									jQuery.event.simulate("change", this.parentNode, event);
								}
							});
							jQuery._data(elem, "change", true);
						}
					});
				},

				handle: function handle(event) {
					var elem = event.target;

					// Swallow native change events from checkbox/radio, we already triggered them above
					if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {

						return event.handleObj.handler.apply(this, arguments);
					}
				},

				teardown: function teardown() {
					jQuery.event.remove(this, "._change");

					return !rformElems.test(this.nodeName);
				}
			};
		}

		// Support: Firefox
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome, Safari
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						jQuery._data(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							jQuery._removeData(doc, fix);
						} else {
							jQuery._data(doc, fix, attaches);
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {

					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === 'undefined' ? 'undefined' : _typeof(types)) === "object") {

					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {

					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,


		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,


		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    safeFragment = createSafeFragment(document),
		    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

		// Support: IE<8
		// Manipulating tables requires a tbody
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}

		function cloneCopyEvent(src, dest) {
			if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
				return;
			}

			var type,
			    i,
			    l,
			    oldData = jQuery._data(src),
			    curData = jQuery._data(dest, oldData),
			    events = oldData.events;

			if (events) {
				delete curData.handle;
				curData.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}

			// make the cloned public data object a copy from the original
			if (curData.data) {
				curData.data = jQuery.extend({}, curData.data);
			}
		}

		function fixCloneNodeIssues(src, dest) {
			var nodeName, e, data;

			// We do not need to do anything for non-Elements
			if (dest.nodeType !== 1) {
				return;
			}

			nodeName = dest.nodeName.toLowerCase();

			// IE6-8 copies events bound via attachEvent when using cloneNode.
			if (!support.noCloneEvent && dest[jQuery.expando]) {
				data = jQuery._data(dest);

				for (e in data.events) {
					jQuery.removeEvent(dest, e, data.handle);
				}

				// Event data gets referenced instead of copied if the expando gets copied too
				dest.removeAttribute(jQuery.expando);
			}

			// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
			if (nodeName === "script" && dest.text !== src.text) {
				disableScript(dest).text = src.text;
				restoreScript(dest);

				// IE6-10 improperly clones children of object elements using classid.
				// IE10 throws NoModificationAllowedError if parent is null, #12132.
			} else if (nodeName === "object") {
				if (dest.parentNode) {
					dest.outerHTML = src.outerHTML;
				}

				// This path appears unavoidable for IE9. When cloning an object
				// element in IE9, the outerHTML strategy above is not sufficient.
				// If the src has innerHTML and the destination does not,
				// copy the src.innerHTML into the dest.innerHTML. #10324
				if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
					dest.innerHTML = src.innerHTML;
				}
			} else if (nodeName === "input" && rcheckableType.test(src.type)) {

				// IE6-8 fails to persist the checked state of a cloned checkbox
				// or radio button. Worse, IE6-7 fail to give the cloned element
				// a checked appearance if the defaultChecked value isn't also set

				dest.defaultChecked = dest.checked = src.checked;

				// IE6-7 get confused and end up setting the value of a cloned
				// checkbox/radio button to an empty string instead of "on"
				if (dest.value !== src.value) {
					dest.value = src.value;
				}

				// IE6-8 fails to return the selected option to the default selected
				// state when cloning options
			} else if (nodeName === "option") {
				dest.defaultSelected = dest.selected = src.defaultSelected;

				// IE6-8 fails to set the defaultValue to the correct value when
				// cloning other types of input fields
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		function domManip(collection, args, callback, ignored) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var first,
			    node,
			    hasScripts,
			    scripts,
			    doc,
			    fragment,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}

			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {

								// Support: Android<4.1, PhantomJS<2
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(collection[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {

									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return collection;
		}

		function _remove(elem, selector, keepData) {
			var node,
			    elems = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;

			for (; (node = elems[i]) != null; i++) {

				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}

				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}

			return elem;
		}

		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},

			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var destElements,
				    node,
				    clone,
				    i,
				    srcElements,
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {

					clone = elem.cloneNode(true);

					// IE<=8 does not properly clone detached, unknown element nodes
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
				}

				if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					// Fix all IE cloning issues
					for (i = 0; (node = srcElements[i]) != null; ++i) {

						// Ensure that the destination node is not null; Fixes #9587
						if (destElements[i]) {
							fixCloneNodeIssues(node, destElements[i]);
						}
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0; (node = srcElements[i]) != null; i++) {
							cloneCopyEvent(node, destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				destElements = srcElements = node = null;

				// Return the cloned set
				return clone;
			},

			cleanData: function cleanData(elems, /* internal */forceAcceptData) {
				var elem,
				    type,
				    id,
				    data,
				    i = 0,
				    internalKey = jQuery.expando,
				    cache = jQuery.cache,
				    attributes = support.attributes,
				    special = jQuery.event.special;

				for (; (elem = elems[i]) != null; i++) {
					if (forceAcceptData || acceptData(elem)) {

						id = elem[internalKey];
						data = id && cache[id];

						if (data) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}

							// Remove cache only if it was not already removed by jQuery.event.remove
							if (cache[id]) {

								delete cache[id];

								// Support: IE<9
								// IE does not allow us to delete expando properties from nodes
								// IE creates expando attributes along with the property
								// IE does not have a removeAttribute function on Document nodes
								if (!attributes && typeof elem.removeAttribute !== "undefined") {
									elem.removeAttribute(internalKey);

									// Webkit & Blink performance suffers when deleting properties
									// from DOM nodes, so set to undefined instead
									// https://code.google.com/p/chromium/issues/detail?id=378607
								} else {
									elem[internalKey] = undefined;
								}

								deletedIds.push(id);
							}
						}
					}
				}
			}
		});

		jQuery.fn.extend({

			// Keep domManip exposed until 3.0 (gh-2225)
			domManip: domManip,

			detach: function detach(selector) {
				return _remove(this, selector, true);
			},

			remove: function remove(selector) {
				return _remove(this, selector);
			},

			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
				}, null, value, arguments.length);
			},

			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {

					// Remove element nodes and prevent memory leaks
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));
					}

					// Remove any remaining nodes
					while (elem.firstChild) {
						elem.removeChild(elem.firstChild);
					}

					// If this is a select, ensure that it displays empty (#12336)
					// Support: IE<9
					if (elem.options && jQuery.nodeName(elem, "select")) {
						elem.options.length = 0;
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined) {
						return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = jQuery.htmlPrefilter(value);

						try {
							for (; i < l; i++) {

								// Remove element nodes and prevent memory leaks
								elem = this[i] || {};
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var ignored = [];

				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;

					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}

					// Force callback invocation
				}, ignored);
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    i = 0,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});

		var iframe,
		    elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

		/**
   * Retrieve the actual display of a element
   * @param {String} name nodeName of the element
   * @param {Object} doc Document object
   */

		// Called only from within defaultDisplay
		function actualDisplay(name, doc) {
			var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = jQuery.css(elem[0], "display");

			// We don't have any data stored on the element,
			// so use "detach" method as fast way to get rid of the element
			elem.detach();

			return display;
		}

		/**
   * Try to determine the default display value of an element
   * @param {String} nodeName
   */
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {

					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

					// Support: IE
					doc.write();
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				// Store the correct default display
				elemdisplay[nodeName] = display;
			}

			return display;
		}
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		var documentElement = document.documentElement;

		(function () {
			var pixelPositionVal,
			    pixelMarginRightVal,
			    boxSizingReliableVal,
			    reliableHiddenOffsetsVal,
			    reliableMarginRightVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}

			div.style.cssText = "float:left;opacity:.5";

			// Support: IE<9
			// Make sure that element opacity exists (as opposed to filter)
			support.opacity = div.style.opacity === "0.5";

			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			support.cssFloat = !!div.style.cssFloat;

			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container = document.createElement("div");
			container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
			div.innerHTML = "";
			container.appendChild(div);

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";

			jQuery.extend(support, {
				reliableHiddenOffsets: function reliableHiddenOffsets() {
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return reliableHiddenOffsetsVal;
				},

				boxSizingReliable: function boxSizingReliable() {

					// We're checking for pixelPositionVal here instead of boxSizingReliableVal
					// since that compresses better and they're computed together anyway.
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return boxSizingReliableVal;
				},

				pixelMarginRight: function pixelMarginRight() {

					// Support: Android 4.0-4.3
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return pixelMarginRightVal;
				},

				pixelPosition: function pixelPosition() {
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return pixelPositionVal;
				},

				reliableMarginRight: function reliableMarginRight() {

					// Support: Android 2.3
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return reliableMarginRightVal;
				},

				reliableMarginLeft: function reliableMarginLeft() {

					// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return reliableMarginLeftVal;
				}
			});

			function computeStyleTests() {
				var contents,
				    divStyle,
				    documentElement = document.documentElement;

				// Setup
				documentElement.appendChild(container);

				div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";

				// Support: IE<9
				// Assume reasonable values in the absence of getComputedStyle
				pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
				pixelMarginRightVal = reliableMarginRightVal = true;

				// Check for getComputedStyle so that this code is not run in IE<9.
				if (window.getComputedStyle) {
					divStyle = window.getComputedStyle(div);
					pixelPositionVal = (divStyle || {}).top !== "1%";
					reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
					boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";

					// Support: Android 4.0 - 4.3 only
					// Some styles come back with percentage values, even though they shouldn't
					div.style.marginRight = "50%";
					pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";

					// Support: Android 2.3 only
					// Div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					contents = div.appendChild(document.createElement("div"));

					// Reset CSS: box-sizing; display; margin; border; padding
					contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					contents.style.marginRight = contents.style.width = "0";
					div.style.width = "1px";

					reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight);

					div.removeChild(contents);
				}

				// Support: IE6-8
				// First check that getClientRects works as expected
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.style.display = "none";
				reliableHiddenOffsetsVal = div.getClientRects().length === 0;
				if (reliableHiddenOffsetsVal) {
					div.style.display = "";
					div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
					div.childNodes[0].style.borderCollapse = "separate";
					contents = div.getElementsByTagName("td");
					contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
					reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
					if (reliableHiddenOffsetsVal) {
						contents[0].style.display = "";
						contents[1].style.display = "none";
						reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
					}
				}

				// Teardown
				documentElement.removeChild(container);
			}
		})();

		var getStyles,
		    curCSS,
		    rposition = /^(top|right|bottom|left)$/;

		if (window.getComputedStyle) {
			getStyles = function getStyles(elem) {

				// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
				// IE throws on elements created in popups
				// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
				var view = elem.ownerDocument.defaultView;

				if (!view || !view.opener) {
					view = window;
				}

				return view.getComputedStyle(elem);
			};

			curCSS = function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,
				    style = elem.style;

				computed = computed || getStyles(elem);

				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

				// Support: Opera 12.1x only
				// Fall back to style even without computed
				// computed is undefined for elems on document fragments
				if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				if (computed) {

					// A tribute to the "awesome hack by Dean Edwards"
					// Chrome < 17 and Safari 5.0 uses "computed value"
					// instead of "used value" for margin-right
					// Safari 5.1.7 (at least) returns percentage for a larger set of values,
					// but width seems to be reliably pixels
					// this is against the CSSOM draft spec:
					// http://dev.w3.org/csswg/cssom/#resolved-values
					if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;

						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;

						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}

				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "";
			};
		} else if (documentElement.currentStyle) {
			getStyles = function getStyles(elem) {
				return elem.currentStyle;
			};

			curCSS = function curCSS(elem, name, computed) {
				var left,
				    rs,
				    rsLeft,
				    ret,
				    style = elem.style;

				computed = computed || getStyles(elem);
				ret = computed ? computed[name] : undefined;

				// Avoid setting ret to empty string here
				// so we don't default to auto
				if (ret == null && style && style[name]) {
					ret = style[name];
				}

				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels
				// but not position css attributes, as those are
				// proportional to the parent element instead
				// and we can't measure the parent instead because it
				// might trigger a "stacking dolls" problem
				if (rnumnonpx.test(ret) && !rposition.test(name)) {

					// Remember the original values
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;

					// Put in the new values to get a computed value out
					if (rsLeft) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";

					// Revert the changed values
					style.left = left;
					if (rsLeft) {
						rs.left = rsLeft;
					}
				}

				// Support: IE
				// IE returns zIndex value as an integer.
				return ret === undefined ? ret : ret + "" || "auto";
			};
		}

		function addGetHookIf(conditionFn, hookFn) {

			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					if (conditionFn()) {

						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		var ralpha = /alpha\([^)]*\)/i,
		    ropacity = /opacity\s*=\s*([^)]*)/i,


		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;

		// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {

			// shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}

			// check for vendor prefixed names
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				values[index] = jQuery._data(elem, "olddisplay");
				display = elem.style.display;
				if (show) {

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);

					if (display && display !== "none" || !hidden) {
						jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {

				// both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {

					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// at this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {

					// at this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// at this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {

			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {

				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		jQuery.extend({

			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {

							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {

				// normalize float css property
				"float": support.cssFloat ? "cssFloat" : "styleFloat"
			},

			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {

				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);

						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set. See: #7116
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}

					// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
					// but it would mean to define eight
					// (for every problematic property) identical functions
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						// Support: IE
						// Swallow errors from 'invalid' CSS values (#5509)
						try {
							style[name] = value;
						} catch (e) {}
					}
				} else {

					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var num,
				    val,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				//convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {

						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});

		if (!support.opacity) {
			jQuery.cssHooks.opacity = {
				get: function get(elem, computed) {

					// IE uses filters for opacity
					return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
				},

				set: function set(elem, value) {
					var style = elem.style,
					    currentStyle = elem.currentStyle,
					    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					    filter = currentStyle && currentStyle.filter || style.filter || "";

					// IE has trouble with opacity if it does not have layout
					// Force it by setting the zoom level
					style.zoom = 1;

					// if setting opacity to 1, and no other filters exist -
					// attempt to remove filter attribute #6652
					// if value === "", then remove inline opacity #12685
					if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

						// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
						// if "filter:" is present at all, clearType is disabled, we want to avoid this
						// style.removeAttribute is IE Only, but so apparently is this code path...
						style.removeAttribute("filter");

						// if there is no filter style applied in a css rule
						// or unset inline opacity, we are done
						if (value === "" || currentStyle && !currentStyle.filter) {
							return;
						}
					}

					// otherwise, set new filter values
					style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
				}
			};
		}

		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});

		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || (

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				}) : 0)) + "px";
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},


					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;

					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}

					// passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css(tween.elem, tween.prop, "");

					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {

					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE <=9
		// Panic based approach to setting things on disconnected nodes

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};

		jQuery.fx = Tween.prototype.init;

		// Back Compat <1.8 extension point
		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;

		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    attrs = { height: type },
			    i = 0;

			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {

					// we're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			/* jshint validthis: true */
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = jQuery._data(elem, "fxshow");

			// handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {

					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE does not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				display = jQuery.css(elem, "display");

				// Test default display if display is currently "none"
				checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

					// inline-level elements accept inline-block;
					// block-level elements need to be inline with layout
					if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
						style.display = "inline-block";
					} else {
						style.zoom = 1;
					}
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				if (!support.shrinkWrapBlocks()) {
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}
			}

			// show/hide pass
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {

						// If there is dataShow left over from a stopped hide or show
						// and we are going to proceed with show, we should pretend to be hidden
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

					// Any non-fx value stops us from restoring the original display value
				} else {
					display = undefined;
				}
			}

			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = jQuery._data(elem, "fxshow", {});
				}

				// store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;
					jQuery._removeData(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}

				// If this is a noop like .hide().hide(), restore an overwritten display value
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {

				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,


					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (jQuery.isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
					}
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},

			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnotwhite);
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},

			prefilters: [defaultPrefilter],

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === 'undefined' ? 'undefined' : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			// normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {

				// show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = jQuery._data(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = jQuery._data(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// enable finishing flag on private data
					data.finish = true;

					// empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    timers = jQuery.timers,
			    i = 0;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			window.clearInterval(timerId);
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			// Default speed
			_default: 400
		};

		// Based off of the plugin by Clint Helfers, with permission.
		// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};

		(function () {
			var a,
			    input = document.createElement("input"),
			    div = document.createElement("div"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			// Setup
			div = document.createElement("div");
			div.setAttribute("className", "t");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];

			// Support: Windows Web Apps (WWA)
			// `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "checkbox");
			div.appendChild(input);

			a = div.getElementsByTagName("a")[0];

			// First batch of tests.
			a.style.cssText = "top:1px";

			// Test setAttribute on camelCase class.
			// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			support.getSetAttribute = div.className !== "t";

			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			support.style = /top/.test(a.getAttribute("style"));

			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			support.hrefNormalized = a.getAttribute("href") === "/a";

			// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
			support.checkOn = !!input.value;

			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			support.optSelected = opt.selected;

			// Tests for enctype support on a form (#6743)
			support.enctype = !!document.createElement("form").enctype;

			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;

			// Support: IE8 only
			// Check if we can trust getAttribute("value")
			input = document.createElement("input");
			input.setAttribute("value", "");
			support.input = input.getAttribute("value") === "";

			// Check if an input maintains its value after becoming a radio
			input.value = "t";
			input.setAttribute("type", "radio");
			support.radioValue = input.value === "t";
		})();

		var rreturn = /\r/g,
		    rspaces = /[\x20\t\r\n\f]+/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ?

						// handle most common string cases
						ret.replace(rreturn, "") :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// oldIE doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (

							// Don't return options that are disabled or in a disabled optgroup
							support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];

							if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {

								// Support: IE6
								// When new option element is added to select box we need to
								// force reflow of newly added node in order to workaround delay
								// of initialization properties
								try {
									option.selected = optionSet = true;
								} catch (_) {

									// Will be executed only in IE6
									option.scrollHeight;
								}
							} else {
								option.selected = false;
							}
						}

						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}

						return options;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle,
		    ruseDefault = /^(?:checked|selected)$/i,
		    getSetAttribute = support.getSetAttribute,
		    getSetInput = support.input;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}

					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					elem.setAttribute(name, value + "");
					return value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},

			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {

							// Setting the type on a radio button after the value resets the value in IE8-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						// Boolean attributes get special treatment (#10870)
						if (jQuery.expr.match.bool.test(name)) {

							// Set corresponding property to false
							if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
								elem[propName] = false;

								// Support: IE<9
								// Also clear defaultChecked/defaultSelected (if appropriate)
							} else {
								elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
							}

							// See #9699 for explanation of this approach (setting first, then removal)
						} else {
							jQuery.attr(elem, name, "");
						}

						elem.removeAttribute(getSetAttribute ? name : propName);
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {

					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {

					// IE<8 needs the *property* name
					elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
				} else {

					// Support: IE<9
					// Use defaultChecked and defaultSelected for oldIE
					elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
				}
				return name;
			}
		};

		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
				attrHandle[name] = function (elem, name, isXML) {
					var ret, handle;
					if (!isXML) {

						// Avoid an infinite loop by temporarily removing this function from the getter
						handle = attrHandle[name];
						attrHandle[name] = ret;
						ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
						attrHandle[name] = handle;
					}
					return ret;
				};
			} else {
				attrHandle[name] = function (elem, name, isXML) {
					if (!isXML) {
						return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
					}
				};
			}
		});

		// fix oldIE attroperties
		if (!getSetInput || !getSetAttribute) {
			jQuery.attrHooks.value = {
				set: function set(elem, value, name) {
					if (jQuery.nodeName(elem, "input")) {

						// Does not return so that setAttribute is also used
						elem.defaultValue = value;
					} else {

						// Use nodeHook if defined (#1954); otherwise setAttribute is fine
						return nodeHook && nodeHook.set(elem, value, name);
					}
				}
			};
		}

		// IE6/7 do not support getting/setting some attributes with get/setAttribute
		if (!getSetAttribute) {

			// Use this for any attribute in IE6/7
			// This fixes almost every IE6/7 issue
			nodeHook = {
				set: function set(elem, value, name) {

					// Set the existing or create a new attribute node
					var ret = elem.getAttributeNode(name);
					if (!ret) {
						elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
					}

					ret.value = value += "";

					// Break association with cloned elements by also using setAttribute (#9646)
					if (name === "value" || value === elem.getAttribute(name)) {
						return value;
					}
				}
			};

			// Some attributes are constructed with empty-string values when not defined
			attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
				var ret;
				if (!isXML) {
					return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
				}
			};

			// Fixing value retrieval on a button requires this module
			jQuery.valHooks.button = {
				get: function get(elem, name) {
					var ret = elem.getAttributeNode(name);
					if (ret && ret.specified) {
						return ret.value;
					}
				},
				set: nodeHook.set
			};

			// Set contenteditable to false on removals(#10429)
			// Setting to empty string throws an error as an invalid value
			jQuery.attrHooks.contenteditable = {
				set: function set(elem, value, name) {
					nodeHook.set(elem, value === "" ? false : value, name);
				}
			};

			// Set width and height to auto instead of 0 on empty string( Bug #8150 )
			// This is for removals
			jQuery.each(["width", "height"], function (i, name) {
				jQuery.attrHooks[name] = {
					set: function set(elem, value) {
						if (value === "") {
							elem.setAttribute(name, "auto");
							return value;
						}
					}
				};
			});
		}

		if (!support.style) {
			jQuery.attrHooks.style = {
				get: function get(elem) {

					// Return undefined in the case of empty string
					// Note: IE uppercases css property names, but if we were to .toLowerCase()
					// .cssText, that would destroy case sensitivity in URL's, like in "background"
					return elem.style.cssText || undefined;
				},
				set: function set(elem, value) {
					return elem.style.cssText = value + "";
				}
			};
		}

		var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		    rclickable = /^(?:a|area)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				name = jQuery.propFix[name] || name;
				return this.each(function () {

					// try/catch handles cases where IE balks (such as removing a property on window)
					try {
						this[name] = undefined;
						delete this[name];
					} catch (e) {}
				});
			}
		});

		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					return elem[name] = value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				return elem[name];
			},

			propHooks: {
				tabIndex: {
					get: function get(elem) {

						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");

						return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
					}
				}
			},

			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});

		// Some attributes require a special call on IE
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!support.hrefNormalized) {

			// href/src property should get the full normalized URL (#10299/#12915)
			jQuery.each(["href", "src"], function (i, name) {
				jQuery.propHooks[name] = {
					get: function get(elem) {
						return elem.getAttribute(name, 4);
					}
				};
			});
		}

		// Support: Safari, IE9+
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;

					if (parent) {
						parent.selectedIndex;

						// Make sure that it also works with optgroups, see #5701
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				},
				set: function set(elem) {
					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;

						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		// IE6/7 call enctype encoding
		if (!support.enctype) {
			jQuery.propFix.enctype = "encoding";
		}

		var rclass = /[\t\r\n\f]/g;

		function getClass(elem) {
			return jQuery.attr(elem, "class") || "";
		}

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnotwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (curValue !== finalValue) {
								jQuery.attr(elem, "class", finalValue);
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}

				if (!arguments.length) {
					return this.attr("class", "");
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnotwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);

						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {

								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = jQuery.trim(cur);
							if (curValue !== finalValue) {
								jQuery.attr(elem, "class", finalValue);
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}

				return this.each(function () {
					var className, i, self, classNames;

					if (type === "string") {

						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = value.match(rnotwhite) || [];

						while (className = classNames[i++]) {

							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {

							// store className if set
							jQuery._data(this, "__className__", className);
						}

						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						jQuery.attr(this, "class", className || value === false ? "" : jQuery._data(this, "__className__") || "");
					}
				});
			},

			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;

				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
						return true;
					}
				}

				return false;
			}
		});

		// Return jQuery for attributes-only inclusion


		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		var location = window.location;

		var nonce = jQuery.now();

		var rquery = /\?/;

		var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

		jQuery.parseJSON = function (data) {

			// Attempt to parse using the native JSON parser first
			if (window.JSON && window.JSON.parse) {

				// Support: Android 2.3
				// Workaround failure to string-cast null input
				return window.JSON.parse(data + "");
			}

			var requireNonComma,
			    depth = null,
			    str = jQuery.trim(data + "");

			// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
			// after removing valid tokens
			return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

				// Force termination if we see a misplaced comma
				if (requireNonComma && comma) {
					depth = 0;
				}

				// Perform no more replacements after returning to outermost depth
				if (depth === 0) {
					return token;
				}

				// Commas must not follow "[", "{", or ","
				requireNonComma = open || comma;

				// Determine new depth
				// array/object open ("[" or "{"): depth += true - false (increment)
				// array/object close ("]" or "}"): depth += false - true (decrement)
				// other cases ("," or primitive): depth += true - true (numeric cast)
				depth += !close - !open;

				// Remove this token
				return "";
			})) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
		};

		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					// Standard
					tmp = new window.DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					// IE
					xml = new window.ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,


		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,


		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


		/* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
		prefilters = {},


		/* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
		transports = {},


		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),


		// Document location
		ajaxLocation = location.href,


		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

				if (jQuery.isFunction(func)) {

					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {

						// Prepend if requested
						if (dataType.charAt(0) === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var deep,
			    key,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
		function ajaxHandleResponses(s, jqXHR, responses) {
			var firstDataType,
			    ct,
			    finalDataType,
			    type,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {

				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},


			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {

					// There's only work to do if current dataType is non-auto
					if (current === "*") {

						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {

						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {

									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {

										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {

							// Unless errors are allowed to bubble, catch and return them
							if (conv && s["throws"]) {
								// jscs:ignore requireDotNotation
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function ajax(url, options) {

				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var

				// Cross-domain detection vars
				parts,


				// Loop variable
				i,


				// URL without anti-cache param
				cacheURL,


				// Response headers as string
				responseHeadersString,


				// timeout handle
				timeoutTimer,


				// To know if global events are to be dispatched
				fireGlobals,
				    transport,


				// Response headers
				responseHeaders,


				// Create the final options object
				s = jQuery.ajaxSetup({}, options),


				// Callbacks context
				callbackContext = s.context || s,


				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),


				// Status-dependent callbacks
				_statusCode = s.statusCode || {},


				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},


				// The jqXHR state
				state = 0,


				// Default abort message
				strAbort = "canceled",


				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {

									// Lazy-add the new callback in a way that preserves old ones
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;

				// More options handling for requests with no content
				if (!s.hasContent) {

					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + nonce++) :

						// Otherwise add one to the end
						cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

					// Abort if not done already and return
					return jqXHR.abort();
				}

				// aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					// If request was aborted inside ajaxSend, stop there
					if (state === 2) {
						return jqXHR;
					}

					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {

						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);

							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Called once
					if (state === 2) {
						return;
					}

					// State is "done" now
					state = 2;

					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {

						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {

				// shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});

		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,

				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,
				"throws": true
			});
		};

		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {

					// The elements to wrap the target around
					var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstChild && elem.firstChild.nodeType === 1) {
							elem = elem.firstChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});

		function getDisplay(elem) {
			return elem.style && elem.style.display || jQuery.css(elem, "display");
		}

		function filterHidden(elem) {

			// Disconnected elements are considered hidden
			if (!jQuery.contains(elem.ownerDocument || document, elem)) {
				return true;
			}
			while (elem && elem.nodeType === 1) {
				if (getDisplay(elem) === "none" || elem.type === "hidden") {
					return true;
				}
				elem = elem.parentNode;
			}
			return false;
		}

		jQuery.expr.filters.hidden = function (elem) {

			// Support: Opera <= 12.12
			// Opera reports offsetWidths and offsetHeights less than zero on some elements
			return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem);
		};

		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};

		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {

				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {

						// Treat each array item as a scalar.
						add(prefix, v);
					} else {

						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {

				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {

				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {

				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {

					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		// Create the request object
		// (This is still attached to ajaxSettings for backward compatibility)
		jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function () {

			// XHR cannot access local files, always use ActiveX for that case
			if (this.isLocal) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if (document.documentMode > 8) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return (/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR()
			);
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		// Support: IE<10
		// Open requests must be manually aborted on unload (#5280)
		// See https://support.microsoft.com/kb/2856746 for more info
		if (window.attachEvent) {
			window.attachEvent("onunload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key](undefined, true);
				}
			});
		}

		// Determine support properties
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		xhrSupported = support.ajax = !!xhrSupported;

		// Create transport if the browser can provide an xhr
		if (xhrSupported) {

			jQuery.ajaxTransport(function (options) {

				// Cross domain only allowed if supported through XMLHttpRequest
				if (!options.crossDomain || support.cors) {

					var _callback;

					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr(),
							    id = ++xhrId;

							// Open the socket
							xhr.open(options.type, options.url, options.async, options.username, options.password);

							// Apply custom fields if provided
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}

							// Override mime type if needed
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}

							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}

							// Set headers
							for (i in headers) {

								// Support: IE<9
								// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
								// request header to a null-value.
								//
								// To keep consistent with other XHR implementations, cast the value
								// to string and ignore `undefined`.
								if (headers[i] !== undefined) {
									xhr.setRequestHeader(i, headers[i] + "");
								}
							}

							// Do send the request
							// This may raise an exception which is actually
							// handled in jQuery.ajax (so no try/catch here)
							xhr.send(options.hasContent && options.data || null);

							// Listener
							_callback = function callback(_, isAbort) {
								var status, statusText, responses;

								// Was never called and is aborted or complete
								if (_callback && (isAbort || xhr.readyState === 4)) {

									// Clean up
									delete xhrCallbacks[id];
									_callback = undefined;
									xhr.onreadystatechange = jQuery.noop;

									// Abort manually if needed
									if (isAbort) {
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;

										// Support: IE<10
										// Accessing binary-data responseText throws an exception
										// (#11426)
										if (typeof xhr.responseText === "string") {
											responses.text = xhr.responseText;
										}

										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch (e) {

											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}

										// Filter status for non standard behaviors

										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if (!status && options.isLocal && !options.crossDomain) {
											status = responses.text ? 200 : 404;

											// IE - #1450: sometimes returns 1223 when it should be 204
										} else if (status === 1223) {
											status = 204;
										}
									}
								}

								// Call complete if needed
								if (responses) {
									complete(status, statusText, responses, xhr.getAllResponseHeaders());
								}
							};

							// Do send the request
							// `xhr.send` may raise an exception, but it will be
							// handled in jQuery.ajax (so no try/catch here)
							if (!options.async) {

								// If we're in sync mode we fire the callback
								_callback();
							} else if (xhr.readyState === 4) {

								// (IE6 & IE7) if it's in cache and has been
								// retrieved directly we need to fire the callback
								window.setTimeout(_callback);
							} else {

								// Register the callback, but delay it in case `xhr.send` throws
								// Add to the list of active xhr callbacks
								xhr.onreadystatechange = xhrCallbacks[id] = _callback;
							}
						},

						abort: function abort() {
							if (_callback) {
								_callback(undefined, true);
							}
						}
					};
				}
			});
		}

		// Functions to create xhrs
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		}

		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}

		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and global
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
				s.global = false;
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain requests
			if (s.crossDomain) {

				var script,
				    head = document.head || jQuery("head")[0] || document.documentElement;

				return {

					send: function send(_, callback) {

						script = document.createElement("script");

						script.async = true;

						if (s.scriptCharset) {
							script.charset = s.scriptCharset;
						}

						script.src = s.url;

						// Attach handlers for all browsers
						script.onload = script.onreadystatechange = function (_, isAbort) {

							if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

								// Handle memory leak in IE
								script.onload = script.onreadystatechange = null;

								// Remove the script
								if (script.parentNode) {
									script.parentNode.removeChild(script);
								}

								// Dereference the script
								script = null;

								// Callback if not abort
								if (!isAbort) {
									callback(200, "success");
								}
							}
						};

						// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						head.insertBefore(script, head.firstChild);
					},

					abort: function abort() {
						if (script) {
							script.onload(undefined, true);
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {

					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);

						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}

					// Save back as free
					if (s[callbackName]) {

						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		// Keep a copy of the old load method
		var _load = jQuery.fn.load;

		/**
   * Load a url into a page
   */
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off > -1) {
				selector = jQuery.trim(url.slice(off, url.length));
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		/**
   * Gets a window from an element
   */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
		}

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

				// need to be able to calculate position if either top or left
				// is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {

					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    box = { top: 0, left: 0 },
				    elem = this[0],
				    doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				docElem = doc.documentElement;

				// Make sure it's not a disconnected DOM node
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}

				// If we don't have gBCR, just use 0,0 rather than error
				// BlackBerry 5, iOS 3 (original iPhone)
				if (typeof elem.getBoundingClientRect !== "undefined") {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
					left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
				};
			},

			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    parentOffset = { top: 0, left: 0 },
				    elem = this[0];

				// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
				// because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {

					// we assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {

					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				// Subtract parent offsets and element margins
				// note: when an element has margin: auto the offsetLeft and marginLeft
				// are the same in Safari causing offset.left to incorrectly be 0
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;

					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = /Y/.test(prop);

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});

		// Support: Safari<7-8+, Chrome<37-44+
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {

							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only,
							// but there is currently no good, small way to fix it.
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});

		jQuery.fn.extend({

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {

				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		// The number of elements contained in the matched element set
		jQuery.fn.size = function () {
			return this.length;
		};

		jQuery.fn.andSelf = jQuery.fn.addBack;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,


		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in
		// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /* WEBPACK VAR INJECTION */(function (jQuery) {
		/*! VelocityJS.org (1.4.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

		/*************************
   Velocity jQuery Shim
   *************************/

		/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

		/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
		/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
		/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

		(function (window) {
			"use strict";
			/***************
    Setup
    ***************/

			/* If jQuery is already loaded, there's no point in loading this shim. */

			if (window.jQuery) {
				return;
			}

			/* jQuery base. */
			var $ = function $(selector, context) {
				return new $.fn.init(selector, context);
			};

			/********************
    Private Methods
    ********************/

			/* jQuery */
			$.isWindow = function (obj) {
				/* jshint eqeqeq: false */
				return obj && obj === obj.window;
			};

			/* jQuery */
			$.type = function (obj) {
				if (!obj) {
					return obj + "";
				}

				return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
			};

			/* jQuery */
			$.isArray = Array.isArray || function (obj) {
				return $.type(obj) === "array";
			};

			/* jQuery */
			function isArraylike(obj) {
				var length = obj.length,
				    type = $.type(obj);

				if (type === "function" || $.isWindow(obj)) {
					return false;
				}

				if (obj.nodeType === 1 && length) {
					return true;
				}

				return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
			}

			/***************
    $ Methods
    ***************/

			/* jQuery: Support removed for IE<9. */
			$.isPlainObject = function (obj) {
				var key;

				if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
					return false;
				}

				try {
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					return false;
				}

				for (key in obj) {}

				return key === undefined || hasOwn.call(obj, key);
			};

			/* jQuery */
			$.each = function (obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);

				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							if (!obj.hasOwnProperty(i)) {
								continue;
							}
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					}
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							if (!obj.hasOwnProperty(i)) {
								continue;
							}
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					}
				}

				return obj;
			};

			/* Custom */
			$.data = function (node, key, value) {
				/* $.getData() */
				if (value === undefined) {
					var getId = node[$.expando],
					    store = getId && cache[getId];

					if (key === undefined) {
						return store;
					} else if (store) {
						if (key in store) {
							return store[key];
						}
					}
					/* $.setData() */
				} else if (key !== undefined) {
					var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

					cache[setId] = cache[setId] || {};
					cache[setId][key] = value;

					return value;
				}
			};

			/* Custom */
			$.removeData = function (node, keys) {
				var id = node[$.expando],
				    store = id && cache[id];

				if (store) {
					// Cleanup the entire store if no keys are provided.
					if (!keys) {
						delete cache[id];
					} else {
						$.each(keys, function (_, key) {
							delete store[key];
						});
					}
				}
			};

			/* jQuery */
			$.extend = function () {
				var src,
				    copyIsArray,
				    copy,
				    name,
				    options,
				    clone,
				    target = arguments[0] || {},
				    i = 1,
				    length = arguments.length,
				    deep = false;

				if (typeof target === "boolean") {
					deep = target;

					target = arguments[i] || {};
					i++;
				}

				if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && $.type(target) !== "function") {
					target = {};
				}

				if (i === length) {
					target = this;
					i--;
				}

				for (; i < length; i++) {
					if (options = arguments[i]) {
						for (name in options) {
							if (!options.hasOwnProperty(name)) {
								continue;
							}
							src = target[name];
							copy = options[name];

							if (target === copy) {
								continue;
							}

							if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false;
									clone = src && $.isArray(src) ? src : [];
								} else {
									clone = src && $.isPlainObject(src) ? src : {};
								}

								target[name] = $.extend(deep, clone, copy);
							} else if (copy !== undefined) {
								target[name] = copy;
							}
						}
					}
				}

				return target;
			};

			/* jQuery 1.4.3 */
			$.queue = function (elem, type, data) {
				function $makeArray(arr, results) {
					var ret = results || [];

					if (arr) {
						if (isArraylike(Object(arr))) {
							/* $.merge */
							(function (first, second) {
								var len = +second.length,
								    j = 0,
								    i = first.length;

								while (j < len) {
									first[i++] = second[j++];
								}

								if (len !== len) {
									while (second[j] !== undefined) {
										first[i++] = second[j++];
									}
								}

								first.length = i;

								return first;
							})(ret, typeof arr === "string" ? [arr] : arr);
						} else {
							[].push.call(ret, arr);
						}
					}

					return ret;
				}

				if (!elem) {
					return;
				}

				type = (type || "fx") + "queue";

				var q = $.data(elem, type);

				if (!data) {
					return q || [];
				}

				if (!q || $.isArray(data)) {
					q = $.data(elem, type, $makeArray(data));
				} else {
					q.push(data);
				}

				return q;
			};

			/* jQuery 1.4.3 */
			$.dequeue = function (elems, type) {
				/* Custom: Embed element iteration. */
				$.each(elems.nodeType ? [elems] : elems, function (i, elem) {
					type = type || "fx";

					var queue = $.queue(elem, type),
					    fn = queue.shift();

					if (fn === "inprogress") {
						fn = queue.shift();
					}

					if (fn) {
						if (type === "fx") {
							queue.unshift("inprogress");
						}

						fn.call(elem, function () {
							$.dequeue(elem, type);
						});
					}
				});
			};

			/******************
    $.fn Methods
    ******************/

			/* jQuery */
			$.fn = $.prototype = {
				init: function init(selector) {
					/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
					if (selector.nodeType) {
						this[0] = selector;

						return this;
					} else {
						throw new Error("Not a DOM node.");
					}
				},
				offset: function offset() {
					/* jQuery altered code: Dropped disconnected DOM node checking. */
					var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

					return {
						top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
						left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
					};
				},
				position: function position() {
					/* jQuery */
					function offsetParentFn(elem) {
						var offsetParent = elem.offsetParent;

						while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
							offsetParent = offsetParent.offsetParent;
						}

						return offsetParent || document;
					}

					/* Zepto */
					var elem = this[0],
					    offsetParent = offsetParentFn(elem),
					    offset = this.offset(),
					    parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset();

					offset.top -= parseFloat(elem.style.marginTop) || 0;
					offset.left -= parseFloat(elem.style.marginLeft) || 0;

					if (offsetParent.style) {
						parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
						parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
					}

					return {
						top: offset.top - parentOffset.top,
						left: offset.left - parentOffset.left
					};
				}
			};

			/**********************
    Private Variables
    **********************/

			/* For $.data() */
			var cache = {};
			$.expando = "velocity" + new Date().getTime();
			$.uuid = 0;

			/* For $.queue() */
			var class2type = {},
			    hasOwn = class2type.hasOwnProperty,
			    toString = class2type.toString;

			var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
			for (var i = 0; i < types.length; i++) {
				class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
			}

			/* Makes $(node) possible, without having to call init. */
			$.fn.init.prototype = $.fn;

			/* Globalize Velocity onto the window, and assign its Utilities property. */
			window.Velocity = { Utilities: $ };
		})(window);

		/******************
   Velocity.js
   ******************/

		(function (factory) {
			"use strict";
			/* CommonJS module. */

			if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
				module.exports = factory();
				/* AMD module. */
			} else if (true) {
				!(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				/* Browser globals. */
			} else {
				factory();
			}
		})(function () {
			"use strict";

			return function (global, window, document, undefined) {

				/***************
     Summary
     ***************/

				/*
     - CSS: CSS stack that works independently from the rest of Velocity.
     - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
     - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
     - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
     Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
     - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
     - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
     - completeCall(): Handles the cleanup process for each Velocity call.
     */

				/*********************
     Helper Functions
     *********************/

				/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
				var IE = function () {
					if (document.documentMode) {
						return document.documentMode;
					} else {
						for (var i = 7; i > 4; i--) {
							var div = document.createElement("div");

							div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

							if (div.getElementsByTagName("span").length) {
								div = null;

								return i;
							}
						}
					}

					return undefined;
				}();

				/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
				var rAFShim = function () {
					var timeLast = 0;

					return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
						var timeCurrent = new Date().getTime(),
						    timeDelta;

						/* Dynamically set delay on a per-tick basis to match 60fps. */
						/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
						timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
						timeLast = timeCurrent + timeDelta;

						return setTimeout(function () {
							callback(timeCurrent + timeDelta);
						}, timeDelta);
					};
				}();

				var performance = function () {
					var perf = window.performance || {};

					if (!perf.hasOwnProperty("now")) {
						var nowOffset = perf.timing && perf.timing.domComplete ? perf.timing.domComplete : new Date().getTime();

						perf.now = function () {
							return new Date().getTime() - nowOffset;
						};
					}
					return perf;
				}();

				/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
				function compactSparseArray(array) {
					var index = -1,
					    length = array ? array.length : 0,
					    result = [];

					while (++index < length) {
						var value = array[index];

						if (value) {
							result.push(value);
						}
					}

					return result;
				}

				function sanitizeElements(elements) {
					/* Unwrap jQuery/Zepto objects. */
					if (Type.isWrapped(elements)) {
						elements = [].slice.call(elements);
						/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
					} else if (Type.isNode(elements)) {
						elements = [elements];
					}

					return elements;
				}

				var Type = {
					isNumber: function isNumber(variable) {
						return typeof variable === "number";
					},
					isString: function isString(variable) {
						return typeof variable === "string";
					},
					isArray: Array.isArray || function (variable) {
						return Object.prototype.toString.call(variable) === "[object Array]";
					},
					isFunction: function isFunction(variable) {
						return Object.prototype.toString.call(variable) === "[object Function]";
					},
					isNode: function isNode(variable) {
						return variable && variable.nodeType;
					},
					/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
					isNodeList: function isNodeList(variable) {
						return (typeof variable === 'undefined' ? 'undefined' : _typeof(variable)) === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) && variable.length !== undefined && (variable.length === 0 || _typeof(variable[0]) === "object" && variable[0].nodeType > 0);
					},
					/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element. */
					isWrapped: function isWrapped(variable) {
						return variable && (Type.isArray(variable) || Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable));
					},
					isSVG: function isSVG(variable) {
						return window.SVGElement && variable instanceof window.SVGElement;
					},
					isEmptyObject: function isEmptyObject(variable) {
						for (var name in variable) {
							if (variable.hasOwnProperty(name)) {
								return false;
							}
						}

						return true;
					}
				};

				/*****************
     Dependencies
     *****************/

				var $,
				    isJQuery = false;

				if (global.fn && global.fn.jquery) {
					$ = global;
					isJQuery = true;
				} else {
					$ = window.Velocity.Utilities;
				}

				if (IE <= 8 && !isJQuery) {
					throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
				} else if (IE <= 7) {
					/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
					jQuery.fn.velocity = jQuery.fn.animate;

					/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
					return;
				}

				/*****************
     Constants
     *****************/

				var DURATION_DEFAULT = 400,
				    EASING_DEFAULT = "swing";

				/*************
     State
     *************/

				var Velocity = {
					/* Container for page-wide Velocity state data. */
					State: {
						/* Detect mobile devices to determine if mobileHA should be turned on. */
						isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
						/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
						isAndroid: /Android/i.test(navigator.userAgent),
						isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
						isChrome: window.chrome,
						isFirefox: /Firefox/i.test(navigator.userAgent),
						/* Create a cached element for re-use when checking for CSS property prefixes. */
						prefixElement: document.createElement("div"),
						/* Cache every prefix match to avoid repeating lookups. */
						prefixMatches: {},
						/* Cache the anchor used for animating window scrolling. */
						scrollAnchor: null,
						/* Cache the browser-specific property names associated with the scroll anchor. */
						scrollPropertyLeft: null,
						scrollPropertyTop: null,
						/* Keep track of whether our RAF tick is running. */
						isTicking: false,
						/* Container for every in-progress call to Velocity. */
						calls: [],
						delayedElements: {
							count: 0
						}
					},
					/* Velocity's custom CSS stack. Made global for unit testing. */
					CSS: {/* Defined below. */},
					/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
					Utilities: $,
					/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
					Redirects: {/* Manually registered by the user. */},
					Easings: {/* Defined below. */},
					/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
					Promise: window.Promise,
					/* Velocity option defaults, which can be overriden by the user. */
					defaults: {
						queue: "",
						duration: DURATION_DEFAULT,
						easing: EASING_DEFAULT,
						begin: undefined,
						complete: undefined,
						progress: undefined,
						display: undefined,
						visibility: undefined,
						loop: false,
						delay: false,
						mobileHA: true,
						/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
						_cacheValues: true,
						/* Advanced: Set to false if the promise should always resolve on empty element lists. */
						promiseRejectEmpty: true
					},
					/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
					init: function init(element) {
						$.data(element, "velocity", {
							/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
							isSVG: Type.isSVG(element),
							/* Keep track of whether the element is currently being animated by Velocity.
        This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
							isAnimating: false,
							/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
							computedStyle: null,
							/* Tween data is cached for each animation on the element so that data can be passed across calls --
        in particular, end values are used as subsequent start values in consecutive Velocity calls. */
							tweensContainer: null,
							/* The full root property values of each CSS hook being animated on this element are cached so that:
        1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
        2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
							rootPropertyValueCache: {},
							/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
							transformCache: {}
						});
					},
					/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
					hook: null, /* Defined below. */
					/* Velocity-wide animation time remapping for testing purposes. */
					mock: false,
					version: { major: 1, minor: 4, patch: 0 },
					/* Set to 1 or 2 (most verbose) to output debug info to console. */
					debug: false,
					/* Use rAF high resolution timestamp when available */
					timestamp: true,
					/* Pause all animations */
					pauseAll: function pauseAll(queueName) {
						var currentTime = new Date().getTime();

						$.each(Velocity.State.calls, function (i, activeCall) {

							if (activeCall) {

								/* If we have a queueName and this call is not on that queue, skip */
								if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
									return true;
								}

								/* Set call to paused */
								activeCall[5] = {
									resume: false
								};
							}
						});

						/* Pause timers on any currently delayed calls */
						$.each(Velocity.State.delayedElements, function (k, element) {
							if (!element) {
								return;
							}
							pauseDelayOnElement(element, currentTime);
						});
					},
					/* Resume all animations */
					resumeAll: function resumeAll(queueName) {
						var currentTime = new Date().getTime();

						$.each(Velocity.State.calls, function (i, activeCall) {

							if (activeCall) {

								/* If we have a queueName and this call is not on that queue, skip */
								if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
									return true;
								}

								/* Set call to resumed if it was paused */
								if (activeCall[5]) {
									activeCall[5].resume = true;
								}
							}
						});
						/* Resume timers on any currently delayed calls */
						$.each(Velocity.State.delayedElements, function (k, element) {
							if (!element) {
								return;
							}
							resumeDelayOnElement(element, currentTime);
						});
					}
				};

				/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
				if (window.pageYOffset !== undefined) {
					Velocity.State.scrollAnchor = window;
					Velocity.State.scrollPropertyLeft = "pageXOffset";
					Velocity.State.scrollPropertyTop = "pageYOffset";
				} else {
					Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
					Velocity.State.scrollPropertyLeft = "scrollLeft";
					Velocity.State.scrollPropertyTop = "scrollTop";
				}

				/* Shorthand alias for jQuery's $.data() utility. */
				function Data(element) {
					/* Hardcode a reference to the plugin name. */
					var response = $.data(element, "velocity");

					/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
					return response === null ? undefined : response;
				}

				/**************
     Delay Timer
     **************/

				function pauseDelayOnElement(element, currentTime) {
					/* Check for any delay timers, and pause the set timeouts (while preserving time data)
      to be resumed when the "resume" command is issued */
					var data = Data(element);
					if (data && data.delayTimer && !data.delayPaused) {
						data.delayRemaining = data.delay - currentTime + data.delayBegin;
						data.delayPaused = true;
						clearTimeout(data.delayTimer.setTimeout);
					}
				}

				function resumeDelayOnElement(element, currentTime) {
					/* Check for any paused timers and resume */
					var data = Data(element);
					if (data && data.delayTimer && data.delayPaused) {
						/* If the element was mid-delay, re initiate the timeout with the remaining delay */
						data.delayPaused = false;
						data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
					}
				}

				/**************
     Easing
     **************/

				/* Step easing generator. */
				function generateStep(steps) {
					return function (p) {
						return Math.round(p * steps) * (1 / steps);
					};
				}

				/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
				function generateBezier(mX1, mY1, mX2, mY2) {
					var NEWTON_ITERATIONS = 4,
					    NEWTON_MIN_SLOPE = 0.001,
					    SUBDIVISION_PRECISION = 0.0000001,
					    SUBDIVISION_MAX_ITERATIONS = 10,
					    kSplineTableSize = 11,
					    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
					    float32ArraySupported = "Float32Array" in window;

					/* Must contain four arguments. */
					if (arguments.length !== 4) {
						return false;
					}

					/* Arguments must be numbers. */
					for (var i = 0; i < 4; ++i) {
						if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
							return false;
						}
					}

					/* X values must be in the [0, 1] range. */
					mX1 = Math.min(mX1, 1);
					mX2 = Math.min(mX2, 1);
					mX1 = Math.max(mX1, 0);
					mX2 = Math.max(mX2, 0);

					var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

					function A(aA1, aA2) {
						return 1.0 - 3.0 * aA2 + 3.0 * aA1;
					}
					function B(aA1, aA2) {
						return 3.0 * aA2 - 6.0 * aA1;
					}
					function C(aA1) {
						return 3.0 * aA1;
					}

					function calcBezier(aT, aA1, aA2) {
						return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
					}

					function getSlope(aT, aA1, aA2) {
						return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
					}

					function newtonRaphsonIterate(aX, aGuessT) {
						for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
							var currentSlope = getSlope(aGuessT, mX1, mX2);

							if (currentSlope === 0.0) {
								return aGuessT;
							}

							var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
							aGuessT -= currentX / currentSlope;
						}

						return aGuessT;
					}

					function calcSampleValues() {
						for (var i = 0; i < kSplineTableSize; ++i) {
							mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
						}
					}

					function binarySubdivide(aX, aA, aB) {
						var currentX,
						    currentT,
						    i = 0;

						do {
							currentT = aA + (aB - aA) / 2.0;
							currentX = calcBezier(currentT, mX1, mX2) - aX;
							if (currentX > 0.0) {
								aB = currentT;
							} else {
								aA = currentT;
							}
						} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

						return currentT;
					}

					function getTForX(aX) {
						var intervalStart = 0.0,
						    currentSample = 1,
						    lastSample = kSplineTableSize - 1;

						for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
							intervalStart += kSampleStepSize;
						}

						--currentSample;

						var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
						    guessForT = intervalStart + dist * kSampleStepSize,
						    initialSlope = getSlope(guessForT, mX1, mX2);

						if (initialSlope >= NEWTON_MIN_SLOPE) {
							return newtonRaphsonIterate(aX, guessForT);
						} else if (initialSlope === 0.0) {
							return guessForT;
						} else {
							return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
						}
					}

					var _precomputed = false;

					function precompute() {
						_precomputed = true;
						if (mX1 !== mY1 || mX2 !== mY2) {
							calcSampleValues();
						}
					}

					var f = function f(aX) {
						if (!_precomputed) {
							precompute();
						}
						if (mX1 === mY1 && mX2 === mY2) {
							return aX;
						}
						if (aX === 0) {
							return 0;
						}
						if (aX === 1) {
							return 1;
						}

						return calcBezier(getTForX(aX), mY1, mY2);
					};

					f.getControlPoints = function () {
						return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
					};

					var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
					f.toString = function () {
						return str;
					};

					return f;
				}

				/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
				/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
     then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
				var generateSpringRK4 = function () {
					function springAccelerationForState(state) {
						return -state.tension * state.x - state.friction * state.v;
					}

					function springEvaluateStateWithDerivative(initialState, dt, derivative) {
						var state = {
							x: initialState.x + derivative.dx * dt,
							v: initialState.v + derivative.dv * dt,
							tension: initialState.tension,
							friction: initialState.friction
						};

						return { dx: state.v, dv: springAccelerationForState(state) };
					}

					function springIntegrateState(state, dt) {
						var a = {
							dx: state.v,
							dv: springAccelerationForState(state)
						},
						    b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
						    c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
						    d = springEvaluateStateWithDerivative(state, dt, c),
						    dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
						    dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

						state.x = state.x + dxdt * dt;
						state.v = state.v + dvdt * dt;

						return state;
					}

					return function springRK4Factory(tension, friction, duration) {

						var initState = {
							x: -1,
							v: 0,
							tension: null,
							friction: null
						},
						    path = [0],
						    time_lapsed = 0,
						    tolerance = 1 / 10000,
						    DT = 16 / 1000,
						    have_duration,
						    dt,
						    last_state;

						tension = parseFloat(tension) || 500;
						friction = parseFloat(friction) || 20;
						duration = duration || null;

						initState.tension = tension;
						initState.friction = friction;

						have_duration = duration !== null;

						/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
						if (have_duration) {
							/* Run the simulation without a duration. */
							time_lapsed = springRK4Factory(tension, friction);
							/* Compute the adjusted time delta. */
							dt = time_lapsed / duration * DT;
						} else {
							dt = DT;
						}

						while (true) {
							/* Next/step function .*/
							last_state = springIntegrateState(last_state || initState, dt);
							/* Store the position. */
							path.push(1 + last_state.x);
							time_lapsed += 16;
							/* If the change threshold is reached, break. */
							if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
								break;
							}
						}

						/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
       computed path and returns a snapshot of the position according to a given percentComplete. */
						return !have_duration ? time_lapsed : function (percentComplete) {
							return path[percentComplete * (path.length - 1) | 0];
						};
					};
				}();

				/* jQuery easings. */
				Velocity.Easings = {
					linear: function linear(p) {
						return p;
					},
					swing: function swing(p) {
						return 0.5 - Math.cos(p * Math.PI) / 2;
					},
					/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
					spring: function spring(p) {
						return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);
					}
				};

				/* CSS3 and Robert Penner easings. */
				$.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function (i, easingArray) {
					Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
				});

				/* Determine the appropriate easing type given an easing input. */
				function getEasing(value, duration) {
					var easing = value;

					/* The easing option can either be a string that references a pre-registered easing,
      or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
					if (Type.isString(value)) {
						/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
						if (!Velocity.Easings[value]) {
							easing = false;
						}
					} else if (Type.isArray(value) && value.length === 1) {
						easing = generateStep.apply(null, value);
					} else if (Type.isArray(value) && value.length === 2) {
						/* springRK4 must be passed the animation's duration. */
						/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
       function generated with default tension and friction values. */
						easing = generateSpringRK4.apply(null, value.concat([duration]));
					} else if (Type.isArray(value) && value.length === 4) {
						/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
						easing = generateBezier.apply(null, value);
					} else {
						easing = false;
					}

					/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
      if the Velocity-wide default has been incorrectly modified. */
					if (easing === false) {
						if (Velocity.Easings[Velocity.defaults.easing]) {
							easing = Velocity.defaults.easing;
						} else {
							easing = EASING_DEFAULT;
						}
					}

					return easing;
				}

				/*****************
     CSS Stack
     *****************/

				/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
     It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
				/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
				var CSS = Velocity.CSS = {
					/*************
      RegEx
      *************/

					RegEx: {
						isHex: /^#([A-f\d]{3}){1,2}$/i,
						/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
						valueUnwrap: /^[A-z]+\((.*)\)$/i,
						wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
						/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
						valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
					},
					/************
      Lists
      ************/

					Lists: {
						colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
						transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
						transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
						units: ["%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
						],
						colorNames: {
							"aliceblue": "240,248,255",
							"antiquewhite": "250,235,215",
							"aquamarine": "127,255,212",
							"aqua": "0,255,255",
							"azure": "240,255,255",
							"beige": "245,245,220",
							"bisque": "255,228,196",
							"black": "0,0,0",
							"blanchedalmond": "255,235,205",
							"blueviolet": "138,43,226",
							"blue": "0,0,255",
							"brown": "165,42,42",
							"burlywood": "222,184,135",
							"cadetblue": "95,158,160",
							"chartreuse": "127,255,0",
							"chocolate": "210,105,30",
							"coral": "255,127,80",
							"cornflowerblue": "100,149,237",
							"cornsilk": "255,248,220",
							"crimson": "220,20,60",
							"cyan": "0,255,255",
							"darkblue": "0,0,139",
							"darkcyan": "0,139,139",
							"darkgoldenrod": "184,134,11",
							"darkgray": "169,169,169",
							"darkgrey": "169,169,169",
							"darkgreen": "0,100,0",
							"darkkhaki": "189,183,107",
							"darkmagenta": "139,0,139",
							"darkolivegreen": "85,107,47",
							"darkorange": "255,140,0",
							"darkorchid": "153,50,204",
							"darkred": "139,0,0",
							"darksalmon": "233,150,122",
							"darkseagreen": "143,188,143",
							"darkslateblue": "72,61,139",
							"darkslategray": "47,79,79",
							"darkturquoise": "0,206,209",
							"darkviolet": "148,0,211",
							"deeppink": "255,20,147",
							"deepskyblue": "0,191,255",
							"dimgray": "105,105,105",
							"dimgrey": "105,105,105",
							"dodgerblue": "30,144,255",
							"firebrick": "178,34,34",
							"floralwhite": "255,250,240",
							"forestgreen": "34,139,34",
							"fuchsia": "255,0,255",
							"gainsboro": "220,220,220",
							"ghostwhite": "248,248,255",
							"gold": "255,215,0",
							"goldenrod": "218,165,32",
							"gray": "128,128,128",
							"grey": "128,128,128",
							"greenyellow": "173,255,47",
							"green": "0,128,0",
							"honeydew": "240,255,240",
							"hotpink": "255,105,180",
							"indianred": "205,92,92",
							"indigo": "75,0,130",
							"ivory": "255,255,240",
							"khaki": "240,230,140",
							"lavenderblush": "255,240,245",
							"lavender": "230,230,250",
							"lawngreen": "124,252,0",
							"lemonchiffon": "255,250,205",
							"lightblue": "173,216,230",
							"lightcoral": "240,128,128",
							"lightcyan": "224,255,255",
							"lightgoldenrodyellow": "250,250,210",
							"lightgray": "211,211,211",
							"lightgrey": "211,211,211",
							"lightgreen": "144,238,144",
							"lightpink": "255,182,193",
							"lightsalmon": "255,160,122",
							"lightseagreen": "32,178,170",
							"lightskyblue": "135,206,250",
							"lightslategray": "119,136,153",
							"lightsteelblue": "176,196,222",
							"lightyellow": "255,255,224",
							"limegreen": "50,205,50",
							"lime": "0,255,0",
							"linen": "250,240,230",
							"magenta": "255,0,255",
							"maroon": "128,0,0",
							"mediumaquamarine": "102,205,170",
							"mediumblue": "0,0,205",
							"mediumorchid": "186,85,211",
							"mediumpurple": "147,112,219",
							"mediumseagreen": "60,179,113",
							"mediumslateblue": "123,104,238",
							"mediumspringgreen": "0,250,154",
							"mediumturquoise": "72,209,204",
							"mediumvioletred": "199,21,133",
							"midnightblue": "25,25,112",
							"mintcream": "245,255,250",
							"mistyrose": "255,228,225",
							"moccasin": "255,228,181",
							"navajowhite": "255,222,173",
							"navy": "0,0,128",
							"oldlace": "253,245,230",
							"olivedrab": "107,142,35",
							"olive": "128,128,0",
							"orangered": "255,69,0",
							"orange": "255,165,0",
							"orchid": "218,112,214",
							"palegoldenrod": "238,232,170",
							"palegreen": "152,251,152",
							"paleturquoise": "175,238,238",
							"palevioletred": "219,112,147",
							"papayawhip": "255,239,213",
							"peachpuff": "255,218,185",
							"peru": "205,133,63",
							"pink": "255,192,203",
							"plum": "221,160,221",
							"powderblue": "176,224,230",
							"purple": "128,0,128",
							"red": "255,0,0",
							"rosybrown": "188,143,143",
							"royalblue": "65,105,225",
							"saddlebrown": "139,69,19",
							"salmon": "250,128,114",
							"sandybrown": "244,164,96",
							"seagreen": "46,139,87",
							"seashell": "255,245,238",
							"sienna": "160,82,45",
							"silver": "192,192,192",
							"skyblue": "135,206,235",
							"slateblue": "106,90,205",
							"slategray": "112,128,144",
							"snow": "255,250,250",
							"springgreen": "0,255,127",
							"steelblue": "70,130,180",
							"tan": "210,180,140",
							"teal": "0,128,128",
							"thistle": "216,191,216",
							"tomato": "255,99,71",
							"turquoise": "64,224,208",
							"violet": "238,130,238",
							"wheat": "245,222,179",
							"whitesmoke": "245,245,245",
							"white": "255,255,255",
							"yellowgreen": "154,205,50",
							"yellow": "255,255,0"
						}
					},
					/************
      Hooks
      ************/

					/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
      (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
					/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
      tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
					Hooks: {
						/********************
       Registration
       ********************/

						/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
						/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
						templates: {
							"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
							"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
							"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
							"backgroundPosition": ["X Y", "0% 0%"],
							"transformOrigin": ["X Y Z", "50% 50% 0px"],
							"perspectiveOrigin": ["X Y", "50% 50%"]
						},
						/* A "registered" hook is one that has been converted from its template form into a live,
       tweenable property. It contains data to associate it with its root property. */
						registered: {
							/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
        which consists of the subproperty's name, the associated root property's name,
        and the subproperty's position in the root's value. */
						},
						/* Convert the templates into individual hooks then append them to the registered object above. */
						register: function register() {
							/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
        currently set to "transparent" default to their respective template below when color-animated,
        and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
        which is almost always set closer to black than white. */
							for (var i = 0; i < CSS.Lists.colors.length; i++) {
								var rgbComponents = CSS.Lists.colors[i] === "color" ? "0 0 0 1" : "255 255 255 1";
								CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
							}

							var rootProperty, hookTemplate, hookNames;

							/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
        Thus, we re-arrange the templates accordingly. */
							if (IE) {
								for (rootProperty in CSS.Hooks.templates) {
									if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
										continue;
									}
									hookTemplate = CSS.Hooks.templates[rootProperty];
									hookNames = hookTemplate[0].split(" ");

									var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

									if (hookNames[0] === "Color") {
										/* Reposition both the hook's name and its default value to the end of their respective strings. */
										hookNames.push(hookNames.shift());
										defaultValues.push(defaultValues.shift());

										/* Replace the existing template for the hook's root property. */
										CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
									}
								}
							}

							/* Hook registration. */
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");

								for (var j in hookNames) {
									if (!hookNames.hasOwnProperty(j)) {
										continue;
									}
									var fullHookName = rootProperty + hookNames[j],
									    hookPosition = j;

									/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
          and the hook's position in its template's default value string. */
									CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
								}
							}
						},
						/*****************************
       Injection and Extraction
       *****************************/

						/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
						/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
						getRoot: function getRoot(property) {
							var hookData = CSS.Hooks.registered[property];

							if (hookData) {
								return hookData[0];
							} else {
								/* If there was no hook match, return the property name untouched. */
								return property;
							}
						},
						getUnit: function getUnit(str, start) {
							var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

							if (unit && CSS.Lists.units.indexOf(unit) >= 0) {
								return unit;
							}
							return "";
						},
						fixColors: function fixColors(str) {
							return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function ($0, $1, $2) {
								if (CSS.Lists.colorNames.hasOwnProperty($2)) {
									return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
								}
								return $1 + $2;
							});
						},
						/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
       the targeted hook can be injected or extracted at its standard position. */
						cleanRootPropertyValue: function cleanRootPropertyValue(rootProperty, rootPropertyValue) {
							/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
							if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
								rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
							}

							/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
        default to the root's default value as defined in CSS.Hooks.templates. */
							/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
        zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
							if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
								rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
							}

							return rootPropertyValue;
						},
						/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
						extractValue: function extractValue(fullHookName, rootPropertyValue) {
							var hookData = CSS.Hooks.registered[fullHookName];

							if (hookData) {
								var hookRoot = hookData[0],
								    hookPosition = hookData[1];

								rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

								/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
								return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
							} else {
								/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
								return rootPropertyValue;
							}
						},
						/* Inject the hook's value into its root property's value. This is used to piece back together the root property
       once Velocity has updated one of its individually hooked values through tweening. */
						injectValue: function injectValue(fullHookName, hookValue, rootPropertyValue) {
							var hookData = CSS.Hooks.registered[fullHookName];

							if (hookData) {
								var hookRoot = hookData[0],
								    hookPosition = hookData[1],
								    rootPropertyValueParts,
								    rootPropertyValueUpdated;

								rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

								/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
         then reconstruct the rootPropertyValue string. */
								rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
								rootPropertyValueParts[hookPosition] = hookValue;
								rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

								return rootPropertyValueUpdated;
							} else {
								/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
								return rootPropertyValue;
							}
						}
					},
					/*******************
      Normalizations
      *******************/

					/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
      and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
					Normalizations: {
						/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
       the targeted element (which may need to be queried), and the targeted property value. */
						registered: {
							clip: function clip(type, element, propertyValue) {
								switch (type) {
									case "name":
										return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
									case "extract":
										var extracted;

										/* If Velocity also extracted this value, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											/* Remove the "rect()" wrapper. */
											extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

											/* Strip off commas. */
											extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
										}

										return extracted;
									/* Clip needs to be re-wrapped during injection. */
									case "inject":
										return "rect(" + propertyValue + ")";
								}
							},
							blur: function blur(type, element, propertyValue) {
								switch (type) {
									case "name":
										return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
									case "extract":
										var extracted = parseFloat(propertyValue);

										/* If extracted is NaN, meaning the value isn't already extracted. */
										if (!(extracted || extracted === 0)) {
											var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

											/* If the filter string had a blur component, return just the blur value and unit type. */
											if (blurComponent) {
												extracted = blurComponent[1];
												/* If the component doesn't exist, default blur to 0. */
											} else {
												extracted = 0;
											}
										}

										return extracted;
									/* Blur needs to be re-wrapped during injection. */
									case "inject":
										/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
										if (!parseFloat(propertyValue)) {
											return "none";
										} else {
											return "blur(" + propertyValue + ")";
										}
								}
							},
							/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
							opacity: function opacity(type, element, propertyValue) {
								if (IE <= 8) {
									switch (type) {
										case "name":
											return "filter";
										case "extract":
											/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
            Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
											var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

											if (extracted) {
												/* Convert to decimal value. */
												propertyValue = extracted[1] / 100;
											} else {
												/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
												propertyValue = 1;
											}

											return propertyValue;
										case "inject":
											/* Opacified elements are required to have their zoom property set to a non-zero value. */
											element.style.zoom = 1;

											/* Setting the filter property on elements with certain font property combinations can result in a
            highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
            value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
											if (parseFloat(propertyValue) >= 1) {
												return "";
											} else {
												/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
												return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
											}
									}
									/* With all other browsers, normalization is not required; return the same values that were passed in. */
								} else {
									switch (type) {
										case "name":
											return "opacity";
										case "extract":
											return propertyValue;
										case "inject":
											return propertyValue;
									}
								}
							}
						},
						/*****************************
       Batched Registrations
       *****************************/

						/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
						register: function register() {

							/*****************
        Transforms
        *****************/

							/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
        so that they can be referenced in a properties map by their individual names. */
							/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
        setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
        Transform setting is batched in this way to improve performance: the transform style only needs to be updated
        once when multiple transform subproperties are being animated simultaneously. */
							/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
        transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
        from being normalized for these browsers so that tweening skips these properties altogether
        (since it will ignore them as being unsupported by the browser.) */
							if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
								/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
         share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
								CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
							}

							for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
								/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
         paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
								(function () {
									var transformName = CSS.Lists.transformsBase[i];

									CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
										switch (type) {
											/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
											case "name":
												return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
											case "extract":
												/* If this transform has yet to be assigned a value, return its null value. */
												if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
													/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
													return (/^scale/i.test(transformName) ? 1 : 0
													);
													/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
              Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
												}
												return Data(element).transformCache[transformName].replace(/[()]/g, "");
											case "inject":
												var invalid = false;

												/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
             Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
												/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
												switch (transformName.substr(0, transformName.length - 1)) {
													/* Whitelist unit types for each transform. */
													case "translate":
														invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
														break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
													case "scal":
													case "scale":
														/* Chrome on Android has a bug in which scaled elements blur if their initial scale
               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
														if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
															propertyValue = 1;
														}

														invalid = !/(\d)$/i.test(propertyValue);
														break;
													case "skew":
														invalid = !/(deg|\d)$/i.test(propertyValue);
														break;
													case "rotate":
														invalid = !/(deg|\d)$/i.test(propertyValue);
														break;
												}

												if (!invalid) {
													/* As per the CSS spec, wrap the value in parentheses. */
													Data(element).transformCache[transformName] = "(" + propertyValue + ")";
												}

												/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
												return Data(element).transformCache[transformName];
										}
									};
								})();
							}

							/*************
        Colors
        *************/

							/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
        Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
							for (var j = 0; j < CSS.Lists.colors.length; j++) {
								/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
         (Otherwise, all functions would take the final for loop's colorName.) */
								(function () {
									var colorName = CSS.Lists.colors[j];

									/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
									CSS.Normalizations.registered[colorName] = function (type, element, propertyValue) {
										switch (type) {
											case "name":
												return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
											case "extract":
												var extracted;

												/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
												if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
													extracted = propertyValue;
												} else {
													var converted,
													    colorNames = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};

													/* Convert color names to rgb. */
													if (/^[A-z]+$/i.test(propertyValue)) {
														if (colorNames[propertyValue] !== undefined) {
															converted = colorNames[propertyValue];
														} else {
															/* If an unmatched color name is provided, default to black. */
															converted = colorNames.black;
														}
														/* Convert hex values to rgb. */
													} else if (CSS.RegEx.isHex.test(propertyValue)) {
														converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
														/* If the provided color doesn't match any of the accepted color formats, default to black. */
													} else if (!/^rgba?\(/i.test(propertyValue)) {
														converted = colorNames.black;
													}

													/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
              repeated spaces (in case the value included spaces to begin with). */
													extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
												}

												/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
												if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
													extracted += " 1";
												}

												return extracted;
											case "inject":
												/* If we have a pattern then it might already have the right values */
												if (/^rgb/.test(propertyValue)) {
													return propertyValue;
												}

												/* If this is IE<=8 and an alpha component exists, strip it off. */
												if (IE <= 8) {
													if (propertyValue.split(" ").length === 4) {
														propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
													}
													/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
												} else if (propertyValue.split(" ").length === 3) {
													propertyValue += " 1";
												}

												/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
             on all values but the fourth (R, G, and B only accept whole numbers). */
												return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
										}
									};
								})();
							}

							/**************
        Dimensions
        **************/
							function augmentDimension(name, element, wantInner) {
								var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

								if (isBorderBox === (wantInner || false)) {
									/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
									var i,
									    value,
									    augment = 0,
									    sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
									    fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

									for (i = 0; i < fields.length; i++) {
										value = parseFloat(CSS.getPropertyValue(element, fields[i]));
										if (!isNaN(value)) {
											augment += value;
										}
									}
									return wantInner ? -augment : augment;
								}
								return 0;
							}
							function getDimension(name, wantInner) {
								return function (type, element, propertyValue) {
									switch (type) {
										case "name":
											return name;
										case "extract":
											return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
										case "inject":
											return parseFloat(propertyValue) - augmentDimension(name, element, wantInner) + "px";
									}
								};
							}
							CSS.Normalizations.registered.innerWidth = getDimension("width", true);
							CSS.Normalizations.registered.innerHeight = getDimension("height", true);
							CSS.Normalizations.registered.outerWidth = getDimension("width");
							CSS.Normalizations.registered.outerHeight = getDimension("height");
						}
					},
					/************************
      CSS Property Names
      ************************/

					Names: {
						/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
       Camelcasing is used to normalize property names between and across calls. */
						camelCase: function camelCase(property) {
							return property.replace(/-(\w)/g, function (match, subMatch) {
								return subMatch.toUpperCase();
							});
						},
						/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
						SVGAttribute: function SVGAttribute(property) {
							var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

							/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
							if (IE || Velocity.State.isAndroid && !Velocity.State.isChrome) {
								SVGAttributes += "|transform";
							}

							return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
						},
						/* Determine whether a property should be set with a vendor prefix. */
						/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
       If the property is not at all supported by the browser, return a false flag. */
						prefixCheck: function prefixCheck(property) {
							/* If this property has already been checked, return the cached value. */
							if (Velocity.State.prefixMatches[property]) {
								return [Velocity.State.prefixMatches[property], true];
							} else {
								var vendors = ["", "Webkit", "Moz", "ms", "O"];

								for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
									var propertyPrefixed;

									if (i === 0) {
										propertyPrefixed = property;
									} else {
										/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
										propertyPrefixed = vendors[i] + property.replace(/^\w/, function (match) {
											return match.toUpperCase();
										});
									}

									/* Check if the browser supports this property as prefixed. */
									if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
										/* Cache the match. */
										Velocity.State.prefixMatches[property] = propertyPrefixed;

										return [propertyPrefixed, true];
									}
								}

								/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
								return [property, false];
							}
						}
					},
					/************************
      CSS Property Values
      ************************/

					Values: {
						/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
						hexToRgb: function hexToRgb(hex) {
							var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							    rgbParts;

							hex = hex.replace(shortformRegex, function (m, r, g, b) {
								return r + r + g + g + b + b;
							});

							rgbParts = longformRegex.exec(hex);

							return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
						},
						isCSSNullValue: function isCSSNullValue(value) {
							/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
        Thus, we check for both falsiness and these special strings. */
							/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
        templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
							/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
							return !value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);
						},
						/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
						getUnitType: function getUnitType(property) {
							if (/^(rotate|skew)/i.test(property)) {
								return "deg";
							} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
								/* The above properties are unitless. */
								return "";
							} else {
								/* Default to px for all other properties. */
								return "px";
							}
						},
						/* HTML elements default to an associated display type when they're not set to display:none. */
						/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
						getDisplayType: function getDisplayType(element) {
							var tagName = element && element.tagName.toString().toLowerCase();

							if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
								return "inline";
							} else if (/^(li)$/i.test(tagName)) {
								return "list-item";
							} else if (/^(tr)$/i.test(tagName)) {
								return "table-row";
							} else if (/^(table)$/i.test(tagName)) {
								return "table";
							} else if (/^(tbody)$/i.test(tagName)) {
								return "table-row-group";
								/* Default to "block" when no match is found. */
							} else {
								return "block";
							}
						},
						/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
						addClass: function addClass(element, className) {
							if (element) {
								if (element.classList) {
									element.classList.add(className);
								} else if (Type.isString(element.className)) {
									// Element.className is around 15% faster then set/getAttribute
									element.className += (element.className.length ? " " : "") + className;
								} else {
									// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
									var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

									element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
								}
							}
						},
						removeClass: function removeClass(element, className) {
							if (element) {
								if (element.classList) {
									element.classList.remove(className);
								} else if (Type.isString(element.className)) {
									// Element.className is around 15% faster then set/getAttribute
									// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
									element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
								} else {
									// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
									var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

									element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
								}
							}
						}
					},
					/****************************
      Style Getting & Setting
      ****************************/

					/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
					getPropertyValue: function getPropertyValue(element, property, rootPropertyValue, forceStyleLookup) {
						/* Get an element's computed property value. */
						/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
       style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
       *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						function computePropertyValue(element, property) {
							/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
        element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
        offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
        We subtract border and padding to get the sum of interior + scrollbar. */
							var computedValue = 0;

							/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
        of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
        codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
        Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
							if (IE <= 8) {
								computedValue = $.css(element, property); /* GET */
								/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
         associated element so that it does not need to be refetched upon every GET. */
							} else {
								/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
         toggle display to the element type's default value. */
								var toggleDisplay = false;

								if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
									toggleDisplay = true;
									CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
								}

								var revertDisplay = function revertDisplay() {
									if (toggleDisplay) {
										CSS.setPropertyValue(element, "display", "none");
									}
								};

								if (!forceStyleLookup) {
									if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
										var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
										revertDisplay();

										return contentBoxHeight;
									} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
										var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
										revertDisplay();

										return contentBoxWidth;
									}
								}

								var computedStyle;

								/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
         of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
								if (Data(element) === undefined) {
									computedStyle = window.getComputedStyle(element, null); /* GET */
									/* If the computedStyle object has yet to be cached, do so now. */
								} else if (!Data(element).computedStyle) {
									computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
									/* If computedStyle is cached, use it. */
								} else {
									computedStyle = Data(element).computedStyle;
								}

								/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
         Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
         So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
								if (property === "borderColor") {
									property = "borderTopColor";
								}

								/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
         instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
								if (IE === 9 && property === "filter") {
									computedValue = computedStyle.getPropertyValue(property); /* GET */
								} else {
									computedValue = computedStyle[property];
								}

								/* Fall back to the property's style value (if defined) when computedValue returns nothing,
         which can happen when the element hasn't been painted. */
								if (computedValue === "" || computedValue === null) {
									computedValue = element.style[property];
								}

								revertDisplay();
							}

							/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
        defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
        effect as being set to 0, so no conversion is necessary.) */
							/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
        property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
        to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
							if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
								var position = computePropertyValue(element, "position"); /* GET */

								/* For absolute positioning, jQuery's $.position() only returns values for top and left;
         right and bottom will have their "auto" value reverted to 0. */
								/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
         Not a big deal since we're currently in a GET batch anyway. */
								if (position === "fixed" || position === "absolute" && /top|left/i.test(property)) {
									/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
									computedValue = $(element).position()[property] + "px"; /* GET */
								}
							}

							return computedValue;
						}

						var propertyValue;

						/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
       extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
						if (CSS.Hooks.registered[property]) {
							var hook = property,
							    hookRoot = CSS.Hooks.getRoot(hook);

							/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
        query the DOM for the root property's value. */
							if (rootPropertyValue === undefined) {
								/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
								rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
							}

							/* If this root has a normalization registered, peform the associated normalization extraction. */
							if (CSS.Normalizations.registered[hookRoot]) {
								rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
							}

							/* Extract the hook's value. */
							propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

							/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
        normalize the property's name and value, and handle the special case of transforms. */
							/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
        numerical and therefore do not require normalization extraction. */
						} else if (CSS.Normalizations.registered[property]) {
							var normalizedPropertyName, normalizedPropertyValue;

							normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

							/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
        At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
        This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
        thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
							if (normalizedPropertyName !== "transform") {
								normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

								/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
								if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
									normalizedPropertyValue = CSS.Hooks.templates[property][1];
								}
							}

							propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
						}

						/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
						if (!/^[\d-]/.test(propertyValue)) {
							/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
        their HTML attribute values instead of their CSS style values. */
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Since the height/width attribute values must be set manually, they don't reflect computed values.
         Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
								if (/^(height|width)$/i.test(property)) {
									/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
									try {
										propertyValue = element.getBBox()[property];
									} catch (error) {
										propertyValue = 0;
									}
									/* Otherwise, access the attribute value directly. */
								} else {
									propertyValue = element.getAttribute(property);
								}
							} else {
								propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
							}
						}

						/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
       convert CSS null-values to an integer of value 0. */
						if (CSS.Values.isCSSNullValue(propertyValue)) {
							propertyValue = 0;
						}

						if (Velocity.debug >= 2) {
							console.log("Get " + property + ": " + propertyValue);
						}

						return propertyValue;
					},
					/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
					setPropertyValue: function setPropertyValue(element, property, propertyValue, rootPropertyValue, scrollData) {
						var propertyName = property;

						/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
						if (property === "scroll") {
							/* If a container option is present, scroll the container instead of the browser window. */
							if (scrollData.container) {
								scrollData.container["scroll" + scrollData.direction] = propertyValue;
								/* Otherwise, Velocity defaults to scrolling the browser window. */
							} else {
								if (scrollData.direction === "Left") {
									window.scrollTo(propertyValue, scrollData.alternateValue);
								} else {
									window.scrollTo(scrollData.alternateValue, propertyValue);
								}
							}
						} else {
							/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
        Thus, for now, we merely cache transforms being SET. */
							if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
								/* Perform a normalization injection. */
								/* Note: The normalization logic handles the transformCache updating. */
								CSS.Normalizations.registered[property]("inject", element, propertyValue);

								propertyName = "transform";
								propertyValue = Data(element).transformCache[property];
							} else {
								/* Inject hooks. */
								if (CSS.Hooks.registered[property]) {
									var hookName = property,
									    hookRoot = CSS.Hooks.getRoot(property);

									/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
									rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

									propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
									property = hookRoot;
								}

								/* Normalize names and values. */
								if (CSS.Normalizations.registered[property]) {
									propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
									property = CSS.Normalizations.registered[property]("name", element);
								}

								/* Assign the appropriate vendor prefix before performing an official style update. */
								propertyName = CSS.Names.prefixCheck(property)[0];

								/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
         Try/catch is avoided for other browsers since it incurs a performance overhead. */
								if (IE <= 8) {
									try {
										element.style[propertyName] = propertyValue;
									} catch (error) {
										if (Velocity.debug) {
											console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
										}
									}
									/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
									/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
								} else {
									var data = Data(element);

									if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
										/* Note: For SVG attributes, vendor-prefixed property names are never used. */
										/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
										element.setAttribute(property, propertyValue);
									} else {
										element.style[propertyName] = propertyValue;
									}
								}

								if (Velocity.debug >= 2) {
									console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
								}
							}
						}

						/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
						return [propertyName, propertyValue];
					},
					/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
					/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
					flushTransformCache: function flushTransformCache(element) {
						var transformString = "",
						    data = Data(element);

						/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
       (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
						if ((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && data && data.isSVG) {
							/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
        Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
							var getTransformFloat = function getTransformFloat(transformProperty) {
								return parseFloat(CSS.getPropertyValue(element, transformProperty));
							};

							/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
        we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
							var SVGTransforms = {
								translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
								skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
								/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
         (this behavior mimics the result of animating all these properties at once on HTML elements). */
								scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
								/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
         defining the rotation's origin point. We ignore the origin values (default them to 0). */
								rotate: [getTransformFloat("rotateZ"), 0, 0]
							};

							/* Iterate through the transform properties in the user-defined property map order.
        (This mimics the behavior of non-SVG transform animation.) */
							$.each(Data(element).transformCache, function (transformName) {
								/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
         properties so that they match up with SVG's accepted transform properties. */
								if (/^translate/i.test(transformName)) {
									transformName = "translate";
								} else if (/^scale/i.test(transformName)) {
									transformName = "scale";
								} else if (/^rotate/i.test(transformName)) {
									transformName = "rotate";
								}

								/* Check that we haven't yet deleted the property from the SVGTransforms container. */
								if (SVGTransforms[transformName]) {
									/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
									transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

									/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
          re-insert the same master property if we encounter another one of its axis-specific properties. */
									delete SVGTransforms[transformName];
								}
							});
						} else {
							var transformValue, perspective;

							/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
							$.each(Data(element).transformCache, function (transformName) {
								transformValue = Data(element).transformCache[transformName];

								/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
								if (transformName === "transformPerspective") {
									perspective = transformValue;
									return true;
								}

								/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
								if (IE === 9 && transformName === "rotateZ") {
									transformName = "rotate";
								}

								transformString += transformName + transformValue + " ";
							});

							/* If present, set the perspective subproperty first. */
							if (perspective) {
								transformString = "perspective" + perspective + " " + transformString;
							}
						}

						CSS.setPropertyValue(element, "transform", transformString);
					}
				};

				/* Register hooks and normalizations. */
				CSS.Hooks.register();
				CSS.Normalizations.register();

				/* Allow hook setting in the same fashion as jQuery's $.css(). */
				Velocity.hook = function (elements, arg2, arg3) {
					var value;

					elements = sanitizeElements(elements);

					$.each(elements, function (i, element) {
						/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
						if (Data(element) === undefined) {
							Velocity.init(element);
						}

						/* Get property value. If an element set was passed in, only return the value for the first element. */
						if (arg3 === undefined) {
							if (value === undefined) {
								value = CSS.getPropertyValue(element, arg2);
							}
							/* Set property value. */
						} else {
							/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
							var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

							/* Transform properties don't automatically set. They have to be flushed to the DOM. */
							if (adjustedSet[0] === "transform") {
								Velocity.CSS.flushTransformCache(element);
							}

							value = adjustedSet;
						}
					});

					return value;
				};

				/*****************
     Animation
     *****************/

				var animate = function animate() {
					var opts;

					/******************
      Call Chain
      ******************/

					/* Logic for determining what to return to the call stack when exiting out of Velocity. */
					function getChain() {
						/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
       default to null instead of returning the targeted elements so that utility function's return value is standardized. */
						if (isUtility) {
							return promiseData.promise || null;
							/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
						} else {
							return elementsWrapped;
						}
					}

					/*************************
      Arguments Assignment
      *************************/

					/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
      objects are defined on a container object that's passed in as Velocity's sole argument. */
					/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
					var syntacticSugar = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)),

					/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
					isUtility,

					/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
      passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
					elementsWrapped,
					    argumentIndex;

					var elements, propertiesMap, options;

					/* Detect jQuery/Zepto elements being animated via the $.fn method. */
					if (Type.isWrapped(this)) {
						isUtility = false;

						argumentIndex = 0;
						elements = this;
						elementsWrapped = this;
						/* Otherwise, raw elements are being animated via the utility function. */
					} else {
						isUtility = true;

						argumentIndex = 1;
						elements = syntacticSugar ? arguments[0].elements || arguments[0].e : arguments[0];
					}

					/***************
      Promises
      ***************/

					var promiseData = {
						promise: null,
						resolver: null,
						rejecter: null
					};

					/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
      promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
      method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
      call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
					/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
      triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
      grouped together for the purposes of resolving and rejecting a promise. */
					if (isUtility && Velocity.Promise) {
						promiseData.promise = new Velocity.Promise(function (resolve, reject) {
							promiseData.resolver = resolve;
							promiseData.rejecter = reject;
						});
					}

					if (syntacticSugar) {
						propertiesMap = arguments[0].properties || arguments[0].p;
						options = arguments[0].options || arguments[0].o;
					} else {
						propertiesMap = arguments[argumentIndex];
						options = arguments[argumentIndex + 1];
					}

					elements = sanitizeElements(elements);

					if (!elements) {
						if (promiseData.promise) {
							if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
								promiseData.rejecter();
							} else {
								promiseData.resolver();
							}
						}
						return;
					}

					/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
      single raw DOM element is passed in (which doesn't contain a length property). */
					var elementsLength = elements.length,
					    elementsIndex = 0;

					/***************************
      Argument Overloading
      ***************************/

					/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
      Overloading is detected by checking for the absence of an object being passed into options. */
					/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
					if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
						/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
						var startingArgumentPosition = argumentIndex + 1;

						options = {};

						/* Iterate through all options arguments */
						for (var i = startingArgumentPosition; i < arguments.length; i++) {
							/* Treat a number as a duration. Parse it out. */
							/* Note: The following RegEx will return true if passed an array with a number as its first item.
        Thus, arrays are skipped from this check. */
							if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
								options.duration = arguments[i];
								/* Treat strings and arrays as easings. */
							} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
								options.easing = arguments[i];
								/* Treat a function as a complete callback. */
							} else if (Type.isFunction(arguments[i])) {
								options.complete = arguments[i];
							}
						}
					}

					/*********************
      Action Detection
      *********************/

					/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
      or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
      first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
      instead of a properties map. */
					var action;

					switch (propertiesMap) {
						case "scroll":
							action = "scroll";
							break;

						case "reverse":
							action = "reverse";
							break;

						case "pause":

							/*******************
        Action: Pause
        *******************/

							var currentTime = new Date().getTime();

							/* Handle delay timers */
							$.each(elements, function (i, element) {
								pauseDelayOnElement(element, currentTime);
							});

							/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
        single element will cause any calls that containt tweens for that element to be paused/resumed
        as well. */

							/* Iterate through all calls and pause any that contain any of our elements */
							$.each(Velocity.State.calls, function (i, activeCall) {

								var found = false;
								/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
								if (activeCall) {
									/* Iterate through the active call's targeted elements. */
									$.each(activeCall[1], function (k, activeElement) {
										var queueName = options === undefined ? "" : options;

										if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
											return true;
										}

										/* Iterate through the calls targeted by the stop command. */
										$.each(elements, function (l, element) {
											/* Check that this call was applied to the target element. */
											if (element === activeElement) {

												/* Set call to paused */
												activeCall[5] = {
													resume: false
												};

												/* Once we match an element, we can bounce out to the next call entirely */
												found = true;
												return false;
											}
										});

										/* Proceed to check next call if we have already matched */
										if (found) {
											return false;
										}
									});
								}
							});

							/* Since pause creates no new tweens, exit out of Velocity. */
							return getChain();

						case "resume":

							/*******************
        Action: Resume
        *******************/

							/* Handle delay timers */
							$.each(elements, function (i, element) {
								resumeDelayOnElement(element, currentTime);
							});

							/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
        single element will cause any calls that containt tweens for that element to be paused/resumed
        as well. */

							/* Iterate through all calls and pause any that contain any of our elements */
							$.each(Velocity.State.calls, function (i, activeCall) {
								var found = false;
								/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
								if (activeCall) {
									/* Iterate through the active call's targeted elements. */
									$.each(activeCall[1], function (k, activeElement) {
										var queueName = options === undefined ? "" : options;

										if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
											return true;
										}

										/* Skip any calls that have never been paused */
										if (!activeCall[5]) {
											return true;
										}

										/* Iterate through the calls targeted by the stop command. */
										$.each(elements, function (l, element) {
											/* Check that this call was applied to the target element. */
											if (element === activeElement) {

												/* Flag a pause object to be resumed, which will occur during the next tick. In
             addition, the pause object will at that time be deleted */
												activeCall[5].resume = true;

												/* Once we match an element, we can bounce out to the next call entirely */
												found = true;
												return false;
											}
										});

										/* Proceed to check next call if we have already matched */
										if (found) {
											return false;
										}
									});
								}
							});

							/* Since resume creates no new tweens, exit out of Velocity. */
							return getChain();

						case "finish":
						case "finishAll":
						case "stop":
							/*******************
        Action: Stop
        *******************/

							/* Clear the currently-active delay on each targeted element. */
							$.each(elements, function (i, element) {
								if (Data(element) && Data(element).delayTimer) {
									/* Stop the timer from triggering its cached next() function. */
									clearTimeout(Data(element).delayTimer.setTimeout);

									/* Manually call the next() function so that the subsequent queue items can progress. */
									if (Data(element).delayTimer.next) {
										Data(element).delayTimer.next();
									}

									delete Data(element).delayTimer;
								}

								/* If we want to finish everything in the queue, we have to iterate through it
         and call each function. This will make them active calls below, which will
         cause them to be applied via the duration setting. */
								if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
									/* Iterate through the items in the element's queue. */
									$.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
										/* The queue array can contain an "inprogress" string, which we skip. */
										if (Type.isFunction(item)) {
											item();
										}
									});

									/* Clearing the $.queue() array is achieved by resetting it to []. */
									$.queue(element, Type.isString(options) ? options : "", []);
								}
							});

							var callsToStop = [];

							/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
        been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
        is stopped, the next item in its animation queue is immediately triggered. */
							/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
        or a custom queue string can be passed in. */
							/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
        regardless of the element's current queue state. */

							/* Iterate through every active call. */
							$.each(Velocity.State.calls, function (i, activeCall) {
								/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
								if (activeCall) {
									/* Iterate through the active call's targeted elements. */
									$.each(activeCall[1], function (k, activeElement) {
										/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
           clear calls associated with the relevant queue. */
										/* Call stopping logic works as follows:
           - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
           - options === undefined --> stop current queue:"" call and all queue:false calls.
           - options === false --> stop only queue:false calls.
           - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
										var queueName = options === undefined ? "" : options;

										if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
											return true;
										}

										/* Iterate through the calls targeted by the stop command. */
										$.each(elements, function (l, element) {
											/* Check that this call was applied to the target element. */
											if (element === activeElement) {
												/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
             due to the queue-clearing above. */
												if (options === true || Type.isString(options)) {
													/* Iterate through the items in the element's queue. */
													$.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
														/* The queue array can contain an "inprogress" string, which we skip. */
														if (Type.isFunction(item)) {
															/* Pass the item's callback a flag indicating that we want to abort from the queue call.
                (Specifically, the queue will resolve the call's associated promise then abort.)  */
															item(null, true);
														}
													});

													/* Clearing the $.queue() array is achieved by resetting it to []. */
													$.queue(element, Type.isString(options) ? options : "", []);
												}

												if (propertiesMap === "stop") {
													/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
              changed to reflect the final value that the elements were actually tweened to. */
													/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
              object. Also, queue:false animations can't be reversed. */
													var data = Data(element);
													if (data && data.tweensContainer && queueName !== false) {
														$.each(data.tweensContainer, function (m, activeTween) {
															activeTween.endValue = activeTween.currentValue;
														});
													}

													callsToStop.push(i);
												} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
													/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
              they finish upon the next rAf tick then proceed with normal call completion logic. */
													activeCall[2].duration = 1;
												}
											}
										});
									});
								}
							});

							/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
        that the complete callback and display:none setting should be skipped since we're completing prematurely. */
							if (propertiesMap === "stop") {
								$.each(callsToStop, function (i, j) {
									completeCall(j, true);
								});

								if (promiseData.promise) {
									/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
									promiseData.resolver(elements);
								}
							}

							/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
							return getChain();

						default:
							/* Treat a non-empty plain object as a literal properties map. */
							if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
								action = "start";

								/****************
         Redirects
         ****************/

								/* Check if a string matches a registered redirect (see Redirects above). */
							} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
								opts = $.extend({}, options);

								var durationOriginal = opts.duration,
								    delayOriginal = opts.delay || 0;

								/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
								if (opts.backwards === true) {
									elements = $.extend(true, [], elements).reverse();
								}

								/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
								$.each(elements, function (elementIndex, element) {
									/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
									if (parseFloat(opts.stagger)) {
										opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;
									} else if (Type.isFunction(opts.stagger)) {
										opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
									}

									/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
          the duration of each element's animation, using floors to prevent producing very short durations. */
									if (opts.drag) {
										/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
										opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

										/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
           B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
           The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
										opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
									}

									/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
          reduce the opts checking logic required inside the redirect. */
									Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
								});

								/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
         (The performance overhead up to this point is virtually non-existant.) */
								/* Note: The jQuery call chain is kept intact by returning the complete element set. */
								return getChain();
							} else {
								var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

								if (promiseData.promise) {
									promiseData.rejecter(new Error(abortError));
								} else {
									console.log(abortError);
								}

								return getChain();
							}
					}

					/**************************
      Call-Wide Variables
      **************************/

					/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
      being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
      avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
      conversion metrics across Velocity animations that are not immediately consecutively chained. */
					var callUnitConversionData = {
						lastParent: null,
						lastPosition: null,
						lastFontSize: null,
						lastPercentToPxWidth: null,
						lastPercentToPxHeight: null,
						lastEmToPx: null,
						remToPx: null,
						vwToPx: null,
						vhToPx: null
					};

					/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
      Velocity.State.calls array that is processed during animation ticking. */
					var call = [];

					/************************
      Element Processing
      ************************/

					/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
      1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
      2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
      3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
      `elementArrayIndex` allows passing index of the element in the original array to value functions.
      If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
      */
					function processElement(element, elementArrayIndex) {

						/*************************
       Part I: Pre-Queueing
       *************************/

						/***************************
       Element-Wide Variables
       ***************************/

						var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
						opts = $.extend({}, Velocity.defaults, options),

						/* A container for the processed data associated with each property in the propertyMap.
       (Each property in the map produces its own "tween".) */
						tweensContainer = {},
						    elementUnitConversionData;

						/******************
       Element Init
       ******************/

						if (Data(element) === undefined) {
							Velocity.init(element);
						}

						/******************
       Option: Delay
       ******************/

						/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
						/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
       (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
						if (parseFloat(opts.delay) && opts.queue !== false) {
							$.queue(element, opts.queue, function (next) {
								/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
								Velocity.velocityQueueEntryFlag = true;

								/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
         The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
         delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

								/* Temporarily store delayed elements to facilite access for global pause/resume */
								var callIndex = Velocity.State.delayedElements.count++;
								Velocity.State.delayedElements[callIndex] = element;

								var delayComplete = function (index) {
									return function () {
										/* Clear the temporary element */
										Velocity.State.delayedElements[index] = false;

										/* Finally, issue the call */
										next();
									};
								}(callIndex);

								Data(element).delayBegin = new Date().getTime();
								Data(element).delay = parseFloat(opts.delay);
								Data(element).delayTimer = {
									setTimeout: setTimeout(next, parseFloat(opts.delay)),
									next: delayComplete
								};
							});
						}

						/*********************
       Option: Duration
       *********************/

						/* Support for jQuery's named durations. */
						switch (opts.duration.toString().toLowerCase()) {
							case "fast":
								opts.duration = 200;
								break;

							case "normal":
								opts.duration = DURATION_DEFAULT;
								break;

							case "slow":
								opts.duration = 600;
								break;

							default:
								/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
								opts.duration = parseFloat(opts.duration) || 1;
						}

						/************************
       Global Option: Mock
       ************************/

						if (Velocity.mock !== false) {
							/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
        Alternatively, a multiplier can be passed in to time remap all delays and durations. */
							if (Velocity.mock === true) {
								opts.duration = opts.delay = 1;
							} else {
								opts.duration *= parseFloat(Velocity.mock) || 1;
								opts.delay *= parseFloat(Velocity.mock) || 1;
							}
						}

						/*******************
       Option: Easing
       *******************/

						opts.easing = getEasing(opts.easing, opts.duration);

						/**********************
       Option: Callbacks
       **********************/

						/* Callbacks must functions. Otherwise, default to null. */
						if (opts.begin && !Type.isFunction(opts.begin)) {
							opts.begin = null;
						}

						if (opts.progress && !Type.isFunction(opts.progress)) {
							opts.progress = null;
						}

						if (opts.complete && !Type.isFunction(opts.complete)) {
							opts.complete = null;
						}

						/*********************************
       Option: Display & Visibility
       *********************************/

						/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
						/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
						if (opts.display !== undefined && opts.display !== null) {
							opts.display = opts.display.toString().toLowerCase();

							/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
							if (opts.display === "auto") {
								opts.display = Velocity.CSS.Values.getDisplayType(element);
							}
						}

						if (opts.visibility !== undefined && opts.visibility !== null) {
							opts.visibility = opts.visibility.toString().toLowerCase();
						}

						/**********************
       Option: mobileHA
       **********************/

						/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
       on animating elements. HA is removed from the element at the completion of its animation. */
						/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
						/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
						opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread;

						/***********************
       Part II: Queueing
       ***********************/

						/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
       In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
						/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
       the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
						function buildQueue(next) {
							var data, lastTweensContainer;

							/*******************
        Option: Begin
        *******************/

							/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
							if (opts.begin && elementsIndex === 0) {
								/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
								try {
									opts.begin.call(elements, elements);
								} catch (error) {
									setTimeout(function () {
										throw error;
									}, 1);
								}
							}

							/*****************************************
        Tween Data Construction (for Scroll)
        *****************************************/

							/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
							if (action === "scroll") {
								/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
								var scrollDirection = /^x$/i.test(opts.axis) ? "Left" : "Top",
								    scrollOffset = parseFloat(opts.offset) || 0,
								    scrollPositionCurrent,
								    scrollPositionCurrentAlternate,
								    scrollPositionEnd;

								/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
         as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
								if (opts.container) {
									/* Ensure that either a jQuery object or a raw DOM element was passed in. */
									if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
										/* Extract the raw DOM element from the jQuery wrapper. */
										opts.container = opts.container[0] || opts.container;
										/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
           (due to the user's natural interaction with the page). */
										scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

										/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
           -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
           the scroll container's current scroll position. */
										scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
										/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
									} else {
										opts.container = null;
									}
								} else {
									/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
          the appropriate cached property names (which differ based on browser type). */
									scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
									/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
									scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

									/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
          and therefore end values do not need to be compounded onto current values. */
									scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
								}

								/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
								tweensContainer = {
									scroll: {
										rootPropertyValue: false,
										startValue: scrollPositionCurrent,
										currentValue: scrollPositionCurrent,
										endValue: scrollPositionEnd,
										unitType: "",
										easing: opts.easing,
										scrollData: {
											container: opts.container,
											direction: scrollDirection,
											alternateValue: scrollPositionCurrentAlternate
										}
									},
									element: element
								};

								if (Velocity.debug) {
									console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
								}

								/******************************************
         Tween Data Construction (for Reverse)
         ******************************************/

								/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
         that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
         the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
								/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
								/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
         there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
         as reverting to the element's values as they were prior to the previous *Velocity* call. */
							} else if (action === "reverse") {
								data = Data(element);

								/* Abort if there is no prior animation data to reverse to. */
								if (!data) {
									return;
								}

								if (!data.tweensContainer) {
									/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
									$.dequeue(element, opts.queue);

									return;
								} else {
									/*********************
          Options Parsing
          *********************/

									/* If the element was hidden via the display option in the previous call,
          revert display to "auto" prior to reversal so that the element is visible again. */
									if (data.opts.display === "none") {
										data.opts.display = "auto";
									}

									if (data.opts.visibility === "hidden") {
										data.opts.visibility = "visible";
									}

									/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
          Further, remove the previous call's callback options; typically, users do not want these to be refired. */
									data.opts.loop = false;
									data.opts.begin = null;
									data.opts.complete = null;

									/* Since we're extending an opts object that has already been extended with the defaults options object,
          we remove non-explicitly-defined properties that are auto-assigned values. */
									if (!options.easing) {
										delete opts.easing;
									}

									if (!options.duration) {
										delete opts.duration;
									}

									/* The opts object used for reversal is an extension of the options object optionally passed into this
          reverse call plus the options used in the previous Velocity call. */
									opts = $.extend({}, data.opts, opts);

									/*************************************
          Tweens Container Reconstruction
          *************************************/

									/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
									lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

									/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
									for (var lastTween in lastTweensContainer) {
										/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
										if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
											var lastStartValue = lastTweensContainer[lastTween].startValue;

											lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
											lastTweensContainer[lastTween].endValue = lastStartValue;

											/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
            Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
            The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
											if (!Type.isEmptyObject(options)) {
												lastTweensContainer[lastTween].easing = opts.easing;
											}

											if (Velocity.debug) {
												console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
											}
										}
									}

									tweensContainer = lastTweensContainer;
								}

								/*****************************************
         Tween Data Construction (for Start)
         *****************************************/
							} else if (action === "start") {

								/*************************
         Value Transferring
         *************************/

								/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
         while the element was in the process of being animated by Velocity, then this current call is safe to use
         the end values from the prior call as its start values. Velocity attempts to perform this value transfer
         process whenever possible in order to avoid requerying the DOM. */
								/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
         then the DOM is queried for the element's current values as a last resort. */
								/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

								data = Data(element);

								/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
         to transfer over end values to use as start values. If it's set to true and there is a previous
         Velocity call to pull values from, do so. */
								if (data && data.tweensContainer && data.isAnimating === true) {
									lastTweensContainer = data.tweensContainer;
								}

								/***************************
         Tween Data Calculation
         ***************************/

								/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
								/* Property map values can either take the form of 1) a single value representing the end value,
         or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
         The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
         the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
								var parsePropertyValue = function parsePropertyValue(valueData, skipResolvingEasing) {
									var endValue, easing, startValue;

									/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
									if (Type.isFunction(valueData)) {
										valueData = valueData.call(element, elementArrayIndex, elementsLength);
									}

									/* Handle the array format, which can be structured as one of three potential overloads:
          A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
									if (Type.isArray(valueData)) {
										/* endValue is always the first item in the array. Don't bother validating endValue's value now
           since the ensuing property cycling logic does that. */
										endValue = valueData[0];

										/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
           start value since easings can only be non-hex strings or arrays. */
										if (!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
											startValue = valueData[1];
											/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
										} else if (Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]] || Type.isArray(valueData[1])) {
											easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

											/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
											startValue = valueData[2];
										} else {
											startValue = valueData[1] || valueData[2];
										}
										/* Handle the single-value format. */
									} else {
										endValue = valueData;
									}

									/* Default to the call's easing if a per-property easing type was not defined. */
									if (!skipResolvingEasing) {
										easing = easing || opts.easing;
									}

									/* If functions were passed in as values, pass the function the current element as its context,
          plus the element's index and the element set's size as arguments. Then, assign the returned value. */
									if (Type.isFunction(endValue)) {
										endValue = endValue.call(element, elementArrayIndex, elementsLength);
									}

									if (Type.isFunction(startValue)) {
										startValue = startValue.call(element, elementArrayIndex, elementsLength);
									}

									/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
									return [endValue || 0, easing, startValue];
								};

								var fixPropertyValue = function fixPropertyValue(property, valueData) {
									/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
									var rootProperty = CSS.Hooks.getRoot(property),
									    rootPropertyValue = false,

									/* Parse out endValue, easing, and startValue from the property's data. */
									endValue = valueData[0],
									    easing = valueData[1],
									    startValue = valueData[2],
									    pattern;

									/**************************
          Start Value Sourcing
          **************************/

									/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
          inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
          Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
									/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
          there is no way to check for their explicit browser support, and so we skip skip this check for them. */
									if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
										if (Velocity.debug) {
											console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
										}
										return;
									}

									/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
          animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
          a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
									if ((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
										startValue = 0;
									}

									/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
          for all of the current call's properties that were *also* animated in the previous call. */
									/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
									if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
										if (startValue === undefined) {
											startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
										}

										/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
           instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
           attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
										rootPropertyValue = data.rootPropertyValueCache[rootProperty];
										/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
									} else {
										/* Handle hooked properties. */
										if (CSS.Hooks.registered[property]) {
											if (startValue === undefined) {
												rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
												/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
             getPropertyValue() will extract the hook from rootPropertyValue. */
												startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
												/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
             just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
             root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
             to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
											} else {
												/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
												rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
											}
											/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
										} else if (startValue === undefined) {
											startValue = CSS.getPropertyValue(element, property); /* GET */
										}
									}

									/**************************
          Value Data Extraction
          **************************/

									var separatedValue,
									    endValueUnitType,
									    startValueUnitType,
									    operator = false;

									/* Separates a property value into its numeric value and its unit type. */
									var separateValue = function separateValue(property, value) {
										var unitType, numericValue;

										numericValue = (value || "0").toString().toLowerCase()
										/* Match the unit type at the end of the value. */
										.replace(/[%A-z]+$/, function (match) {
											/* Grab the unit type. */
											unitType = match;

											/* Strip the unit type off of value. */
											return "";
										});

										/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
										if (!unitType) {
											unitType = CSS.Values.getUnitType(property);
										}

										return [numericValue, unitType];
									};

									if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
										pattern = "";
										var iStart = 0,
										    // index in startValue
										iEnd = 0,
										    // index in endValue
										aStart = [],
										    // array of startValue numbers
										aEnd = [],
										    // array of endValue numbers
										inCalc = 0,
										    // Keep track of being inside a "calc()" so we don't duplicate it
										inRGB = 0,
										    // Keep track of being inside an RGB as we can't use fractional values
										inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

										startValue = CSS.Hooks.fixColors(startValue);
										endValue = CSS.Hooks.fixColors(endValue);
										while (iStart < startValue.length && iEnd < endValue.length) {
											var cStart = startValue[iStart],
											    cEnd = endValue[iEnd];

											if (/[\d\.]/.test(cStart) && /[\d\.]/.test(cEnd)) {
												var tStart = cStart,
												    // temporary character buffer
												tEnd = cEnd,
												    // temporary character buffer
												dotStart = ".",
												    // Make sure we can only ever match a single dot in a decimal
												dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

												while (++iStart < startValue.length) {
													cStart = startValue[iStart];
													if (cStart === dotStart) {
														dotStart = ".."; // Can never match two characters
													} else if (!/\d/.test(cStart)) {
														break;
													}
													tStart += cStart;
												}
												while (++iEnd < endValue.length) {
													cEnd = endValue[iEnd];
													if (cEnd === dotEnd) {
														dotEnd = ".."; // Can never match two characters
													} else if (!/\d/.test(cEnd)) {
														break;
													}
													tEnd += cEnd;
												}
												var uStart = CSS.Hooks.getUnit(startValue, iStart),
												    // temporary unit type
												uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

												iStart += uStart.length;
												iEnd += uEnd.length;
												if (uStart === uEnd) {
													// Same units
													if (tStart === tEnd) {
														// Same numbers, so just copy over
														pattern += tStart + uStart;
													} else {
														// Different numbers, so store them
														pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
														aStart.push(parseFloat(tStart));
														aEnd.push(parseFloat(tEnd));
													}
												} else {
													// Different units, so put into a "calc(from + to)" and animate each side to/from zero
													var nStart = parseFloat(tStart),
													    nEnd = parseFloat(tEnd);

													pattern += (inCalc < 5 ? "calc" : "") + "(" + (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart + " + " + (nEnd ? "{" + (aStart.length + 1) + (inRGB ? "!" : "") + "}" : "0") + uEnd + ")";
													if (nStart) {
														aStart.push(parseFloat(tStart));
														aStart.push(parseFloat(0));
													}
													if (nEnd) {
														aEnd.push(parseFloat(0));
														aEnd.push(parseFloat(tEnd));
													}
												}
											} else if (cStart === cEnd) {
												pattern += cStart;
												iStart++;
												iEnd++;
												// Keep track of being inside a calc()
												if (inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "(") {
													inCalc++;
												} else if (inCalc && inCalc < 5 || inCalc >= 4 && cStart === ")" && --inCalc < 5) {
													inCalc = 0;
												}
												// Keep track of being inside an rgb() / rgba()
												if (inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "(") {
													if (inRGB === 3 && cStart === "a") {
														inRGBA = 1;
													}
													inRGB++;
												} else if (inRGBA && cStart === ",") {
													if (++inRGBA > 3) {
														inRGB = inRGBA = 0;
													}
												} else if (inRGBA && inRGB < (inRGBA ? 5 : 4) || inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
													inRGB = inRGBA = 0;
												}
											} else {
												inCalc = 0;
												// TODO: changing units, fixing colours
												break;
											}
										}
										if (iStart !== startValue.length || iEnd !== endValue.length) {
											if (Velocity.debug) {
												console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
											}
											pattern = undefined;
										}
										if (pattern) {
											if (aStart.length) {
												if (Velocity.debug) {
													console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
												}
												startValue = aStart;
												endValue = aEnd;
												endValueUnitType = startValueUnitType = "";
											} else {
												pattern = undefined;
											}
										}
									}

									if (!pattern) {
										/* Separate startValue. */
										separatedValue = separateValue(property, startValue);
										startValue = separatedValue[0];
										startValueUnitType = separatedValue[1];

										/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
										separatedValue = separateValue(property, endValue);
										endValue = separatedValue[0].replace(/^([+-\/*])=/, function (match, subMatch) {
											operator = subMatch;

											/* Strip the operator off of the value. */
											return "";
										});
										endValueUnitType = separatedValue[1];

										/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
										startValue = parseFloat(startValue) || 0;
										endValue = parseFloat(endValue) || 0;

										/***************************************
           Property-Specific Value Conversion
           ***************************************/

										/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
										if (endValueUnitType === "%") {
											/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
            which is identical to the em unit's behavior, so we piggyback off of that. */
											if (/^(fontSize|lineHeight)$/.test(property)) {
												/* Convert % into an em decimal value. */
												endValue = endValue / 100;
												endValueUnitType = "em";
												/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
											} else if (/^scale/.test(property)) {
												endValue = endValue / 100;
												endValueUnitType = "";
												/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
											} else if (/(Red|Green|Blue)$/i.test(property)) {
												endValue = endValue / 100 * 255;
												endValueUnitType = "";
											}
										}
									}

									/***************************
          Unit Ratio Calculation
          ***************************/

									/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
          %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
          for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
          from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
          1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
          2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
									/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
          setting values with the target unit type then comparing the returned pixel value. */
									/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
          of batching the SETs and GETs together upfront outweights the potential overhead
          of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
									/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
									var calculateUnitRatios = function calculateUnitRatios() {

										/************************
           Same Ratio Checks
           ************************/

										/* The properties below are used to determine whether the element differs sufficiently from this call's
           previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
           of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
           this is done to minimize DOM querying. */
										var sameRatioIndicators = {
											myParent: element.parentNode || document.body, /* GET */
											position: CSS.getPropertyValue(element, "position"), /* GET */
											fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
										},

										/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
										samePercentRatio = sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent,

										/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
										sameEmRatio = sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize;

										/* Store these ratio indicators call-wide for the next element to compare against. */
										callUnitConversionData.lastParent = sameRatioIndicators.myParent;
										callUnitConversionData.lastPosition = sameRatioIndicators.position;
										callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

										/***************************
           Element-Specific Units
           ***************************/

										/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
           of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
										var measurement = 100,
										    unitRatios = {};

										if (!sameEmRatio || !samePercentRatio) {
											var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

											Velocity.init(dummy);
											sameRatioIndicators.myParent.appendChild(dummy);

											/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
            Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
											/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
											$.each(["overflow", "overflowX", "overflowY"], function (i, property) {
												Velocity.CSS.setPropertyValue(dummy, property, "hidden");
											});
											Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
											Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
											Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

											/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
											$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (i, property) {
												Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
											});
											/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
											Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

											/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
											unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
											unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
											unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

											sameRatioIndicators.myParent.removeChild(dummy);
										} else {
											unitRatios.emToPx = callUnitConversionData.lastEmToPx;
											unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
											unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
										}

										/***************************
           Element-Agnostic Units
           ***************************/

										/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
           once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
           that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
           so we calculate it now. */
										if (callUnitConversionData.remToPx === null) {
											/* Default to browsers' default fontSize of 16px in the case of 0. */
											callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
										}

										/* Similarly, viewport units are %-relative to the window's inner dimensions. */
										if (callUnitConversionData.vwToPx === null) {
											callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
											callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
										}

										unitRatios.remToPx = callUnitConversionData.remToPx;
										unitRatios.vwToPx = callUnitConversionData.vwToPx;
										unitRatios.vhToPx = callUnitConversionData.vhToPx;

										if (Velocity.debug >= 1) {
											console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
										}
										return unitRatios;
									};

									/********************
          Unit Conversion
          ********************/

									/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
									if (/[\/*]/.test(operator)) {
										endValueUnitType = startValueUnitType;
										/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
										/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
									} else if (startValueUnitType !== endValueUnitType && startValue !== 0) {
										/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
										/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
           match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
           which remains past the point of the animation's completion. */
										if (endValue === 0) {
											endValueUnitType = startValueUnitType;
										} else {
											/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
            If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
											elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

											/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
											/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
											var axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x" ? "x" : "y";

											/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
            1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
											switch (startValueUnitType) {
												case "%":
													/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
              Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
              to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
													startValue *= axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight;
													break;

												case "px":
													/* px acts as our midpoint in the unit conversion process; do nothing. */
													break;

												default:
													startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
											}

											/* Invert the px ratios to convert into to the target unit. */
											switch (endValueUnitType) {
												case "%":
													startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
													break;

												case "px":
													/* startValue is already in px, do nothing; we're done. */
													break;

												default:
													startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
											}
										}
									}

									/*********************
          Relative Values
          *********************/

									/* Operator logic must be performed last since it requires unit-normalized start and end values. */
									/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
          to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
          50 points is added on top of the current % value. */
									switch (operator) {
										case "+":
											endValue = startValue + endValue;
											break;

										case "-":
											endValue = startValue - endValue;
											break;

										case "*":
											endValue = startValue * endValue;
											break;

										case "/":
											endValue = startValue / endValue;
											break;
									}

									/**************************
          tweensContainer Push
          **************************/

									/* Construct the per-property tween object, and push it to the element's tweensContainer. */
									tweensContainer[property] = {
										rootPropertyValue: rootPropertyValue,
										startValue: startValue,
										currentValue: startValue,
										endValue: endValue,
										unitType: endValueUnitType,
										easing: easing
									};
									if (pattern) {
										tweensContainer[property].pattern = pattern;
									}

									if (Velocity.debug) {
										console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
									}
								};

								/* Create a tween out of each property, and append its associated data to tweensContainer. */
								for (var property in propertiesMap) {

									if (!propertiesMap.hasOwnProperty(property)) {
										continue;
									}
									/* The original property name's format must be used for the parsePropertyValue() lookup,
          but we then use its camelCase styling to normalize it for manipulation. */
									var propertyName = CSS.Names.camelCase(property),
									    valueData = parsePropertyValue(propertiesMap[property]);

									/* Find shorthand color properties that have been passed a hex string. */
									/* Would be quicker to use CSS.Lists.colors.includes() if possible */
									if (CSS.Lists.colors.indexOf(propertyName) >= 0) {
										/* Parse the value data for each shorthand. */
										var endValue = valueData[0],
										    easing = valueData[1],
										    startValue = valueData[2];

										if (CSS.RegEx.isHex.test(endValue)) {
											/* Convert the hex strings into their RGB component arrays. */
											var colorComponents = ["Red", "Green", "Blue"],
											    endValueRGB = CSS.Values.hexToRgb(endValue),
											    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

											/* Inject the RGB component tweens into propertiesMap. */
											for (var i = 0; i < colorComponents.length; i++) {
												var dataArray = [endValueRGB[i]];

												if (easing) {
													dataArray.push(easing);
												}

												if (startValueRGB !== undefined) {
													dataArray.push(startValueRGB[i]);
												}

												fixPropertyValue(propertyName + colorComponents[i], dataArray);
											}
											/* If we have replaced a shortcut color value then don't update the standard property name */
											continue;
										}
									}
									fixPropertyValue(propertyName, valueData);
								}

								/* Along with its property data, store a reference to the element itself onto tweensContainer. */
								tweensContainer.element = element;
							}

							/*****************
        Call Push
        *****************/

							/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
        being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
							if (tweensContainer.element) {
								/* Apply the "velocity-animating" indicator class. */
								CSS.Values.addClass(element, "velocity-animating");

								/* The call array houses the tweensContainers for each element being animated in the current call. */
								call.push(tweensContainer);

								data = Data(element);

								if (data) {
									/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
									if (opts.queue === "") {

										data.tweensContainer = tweensContainer;
										data.opts = opts;
									}

									/* Switch on the element's animating flag. */
									data.isAnimating = true;
								}

								/* Once the final element in this call's element set has been processed, push the call array onto
         Velocity.State.calls for the animation tick to immediately begin processing. */
								if (elementsIndex === elementsLength - 1) {
									/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
          Anything on this call container is subjected to tick() processing. */
									Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

									/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
									if (Velocity.State.isTicking === false) {
										Velocity.State.isTicking = true;

										/* Start the tick loop. */
										tick();
									}
								} else {
									elementsIndex++;
								}
							}
						}

						/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
						if (opts.queue === false) {
							/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
        we manually inject the delay property here with an explicit setTimeout. */
							if (opts.delay) {

								/* Temporarily store delayed elements to facilitate access for global pause/resume */
								var callIndex = Velocity.State.delayedElements.count++;
								Velocity.State.delayedElements[callIndex] = element;

								var delayComplete = function (index) {
									return function () {
										/* Clear the temporary element */
										Velocity.State.delayedElements[index] = false;

										/* Finally, issue the call */
										buildQueue();
									};
								}(callIndex);

								Data(element).delayBegin = new Date().getTime();
								Data(element).delay = parseFloat(opts.delay);
								Data(element).delayTimer = {
									setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
									next: delayComplete
								};
							} else {
								buildQueue();
							}
							/* Otherwise, the call undergoes element queueing as normal. */
							/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
						} else {
							$.queue(element, opts.queue, function (next, clearQueue) {
								/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
         so it's fine if this is repeatedly triggered for each element in the associated call.) */
								if (clearQueue === true) {
									if (promiseData.promise) {
										promiseData.resolver(elements);
									}

									/* Do not continue with animation queueing. */
									return true;
								}

								/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
         See completeCall() for further details. */
								Velocity.velocityQueueEntryFlag = true;

								buildQueue(next);
							});
						}

						/*********************
       Auto-Dequeuing
       *********************/

						/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
       must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
       for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
       queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
       first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
						/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
       each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
						/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
       Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
						if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
							$.dequeue(element);
						}
					}

					/**************************
      Element Set Iteration
      **************************/

					/* If the "nodeType" property exists on the elements variable, we're animating a single element.
      Place it in an array so that $.each() can iterate over it. */
					$.each(elements, function (i, element) {
						/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
						if (Type.isNode(element)) {
							processElement(element, i);
						}
					});

					/******************
      Option: Loop
      ******************/

					/* The loop option accepts an integer indicating how many times the element should loop between the values in the
      current call's properties map and the element's property values prior to this call. */
					/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
      to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
      which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
					opts = $.extend({}, Velocity.defaults, options);
					opts.loop = parseInt(opts.loop, 10);
					var reverseCallsCount = opts.loop * 2 - 1;

					if (opts.loop) {
						/* Double the loop count to convert it into its appropriate number of "reverse" calls.
       Subtract 1 from the resulting value since the current call is included in the total alternation count. */
						for (var x = 0; x < reverseCallsCount; x++) {
							/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
        isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
        call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
							var reverseOptions = {
								delay: opts.delay,
								progress: opts.progress
							};

							/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
        so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
							if (x === reverseCallsCount - 1) {
								reverseOptions.display = opts.display;
								reverseOptions.visibility = opts.visibility;
								reverseOptions.complete = opts.complete;
							}

							animate(elements, "reverse", reverseOptions);
						}
					}

					/***************
      Chaining
      ***************/

					/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
					return getChain();
				};

				/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
				Velocity = $.extend(animate, Velocity);
				/* For legacy support, also expose the literal animate method. */
				Velocity.animate = animate;

				/**************
     Timing
     **************/

				/* Ticker function. */
				var ticker = window.requestAnimationFrame || rAFShim;

				/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
     To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
     devices to avoid wasting battery power on inactive tabs. */
				/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
				if (!Velocity.State.isMobile && document.hidden !== undefined) {
					var updateTicker = function updateTicker() {
						/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
						if (document.hidden) {
							ticker = function ticker(callback) {
								/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
								return setTimeout(function () {
									callback(true);
								}, 16);
							};

							/* The rAF loop has been paused by the browser, so we manually restart the tick. */
							tick();
						} else {
							ticker = window.requestAnimationFrame || rAFShim;
						}
					};

					/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
					updateTicker();

					/* And then run check again every time visibility changes */
					document.addEventListener("visibilitychange", updateTicker);
				}

				/************
     Tick
     ************/

				/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
				function tick(timestamp) {
					/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
      We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
      the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
      calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
      the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
      by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
					if (timestamp) {
						/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
       under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
       We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
						var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

						/********************
       Call Iteration
       ********************/

						var callsLength = Velocity.State.calls.length;

						/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
       when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
       has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
						if (callsLength > 10000) {
							Velocity.State.calls = compactSparseArray(Velocity.State.calls);
							callsLength = Velocity.State.calls.length;
						}

						/* Iterate through each active call. */
						for (var i = 0; i < callsLength; i++) {
							/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
							if (!Velocity.State.calls[i]) {
								continue;
							}

							/************************
        Call-Wide Variables
        ************************/

							var callContainer = Velocity.State.calls[i],
							    call = callContainer[0],
							    opts = callContainer[2],
							    timeStart = callContainer[3],
							    firstTick = !!timeStart,
							    tweenDummyValue = null,
							    pauseObject = callContainer[5],
							    millisecondsEllapsed = callContainer[6];

							/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
        We assign timeStart now so that its value is as close to the real animation start time as possible.
        (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
        between that time and now would cause the first few frames of the tween to be skipped since
        percentComplete is calculated relative to timeStart.) */
							/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
        first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
        same style value as the element's current value. */
							if (!timeStart) {
								timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
							}

							/* If a pause object is present, skip processing unless it has been set to resume */
							if (pauseObject) {
								if (pauseObject.resume === true) {
									/* Update the time start to accomodate the paused completion amount */
									timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

									/* Remove pause object after processing */
									callContainer[5] = null;
								} else {
									continue;
								}
							}

							millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

							/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
        (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
        Accordingly, we ensure that percentComplete does not exceed 1. */
							var percentComplete = Math.min(millisecondsEllapsed / opts.duration, 1);

							/**********************
        Element Iteration
        **********************/

							/* For every call, iterate through each of the elements in its set. */
							for (var j = 0, callLength = call.length; j < callLength; j++) {
								var tweensContainer = call[j],
								    element = tweensContainer.element;

								/* Check to see if this element has been deleted midway through the animation by checking for the
         continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
								if (!Data(element)) {
									continue;
								}

								var transformPropertyExists = false;

								/**********************************
         Display & Visibility Toggling
         **********************************/

								/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
         (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
								if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
									if (opts.display === "flex") {
										var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

										$.each(flexValues, function (i, flexValue) {
											CSS.setPropertyValue(element, "display", flexValue);
										});
									}

									CSS.setPropertyValue(element, "display", opts.display);
								}

								/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
								if (opts.visibility !== undefined && opts.visibility !== "hidden") {
									CSS.setPropertyValue(element, "visibility", opts.visibility);
								}

								/************************
         Property Iteration
         ************************/

								/* For every element, iterate through each property. */
								for (var property in tweensContainer) {
									/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
									if (tweensContainer.hasOwnProperty(property) && property !== "element") {
										var tween = tweensContainer[property],
										    currentValue,

										/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
           on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
										easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

										/******************************
           Current Value Calculation
           ******************************/

										if (Type.isString(tween.pattern)) {
											var patternReplace = percentComplete === 1 ? function ($0, index, round) {
												var result = tween.endValue[index];

												return round ? Math.round(result) : result;
											} : function ($0, index, round) {
												var startValue = tween.startValue[index],
												    tweenDelta = tween.endValue[index] - startValue,
												    result = startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);

												return round ? Math.round(result) : result;
											};

											currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
										} else if (percentComplete === 1) {
											/* If this is the last tick pass (if we've reached 100% completion for this tween),
            ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
											currentValue = tween.endValue;
										} else {
											/* Otherwise, calculate currentValue based on the current delta from startValue. */
											var tweenDelta = tween.endValue - tween.startValue;

											currentValue = tween.startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
											/* If no value change is occurring, don't proceed with DOM updating. */
										}
										if (!firstTick && currentValue === tween.currentValue) {
											continue;
										}

										tween.currentValue = currentValue;

										/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
           it can be passed into the progress callback. */
										if (property === "tween") {
											tweenDummyValue = currentValue;
										} else {
											/******************
            Hooks: Part I
            ******************/
											var hookRoot;

											/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
            for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
            rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
            updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
            subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
											if (CSS.Hooks.registered[property]) {
												hookRoot = CSS.Hooks.getRoot(property);

												var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

												if (rootPropertyValueCache) {
													tween.rootPropertyValue = rootPropertyValueCache;
												}
											}

											/*****************
            DOM Update
            *****************/

											/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
											/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
											var adjustedSetData = CSS.setPropertyValue(element, /* SET */
											property, tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);

											/*******************
            Hooks: Part II
            *******************/

											/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
											if (CSS.Hooks.registered[property]) {
												/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
												if (CSS.Normalizations.registered[hookRoot]) {
													Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
												} else {
													Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
												}
											}

											/***************
            Transforms
            ***************/

											/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
											if (adjustedSetData[0] === "transform") {
												transformPropertyExists = true;
											}
										}
									}
								}

								/****************
         mobileHA
         ****************/

								/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
         It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
								if (opts.mobileHA) {
									/* Don't set the null transform hack if we've already done so. */
									if (Data(element).transformCache.translate3d === undefined) {
										/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
										Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

										transformPropertyExists = true;
									}
								}

								if (transformPropertyExists) {
									CSS.flushTransformCache(element);
								}
							}

							/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
        Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
							if (opts.display !== undefined && opts.display !== "none") {
								Velocity.State.calls[i][2].display = false;
							}
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								Velocity.State.calls[i][2].visibility = false;
							}

							/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
							if (opts.progress) {
								opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, timeStart + opts.duration - timeCurrent), timeStart, tweenDummyValue);
							}

							/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
							if (percentComplete === 1) {
								completeCall(i);
							}
						}
					}

					/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
					if (Velocity.State.isTicking) {
						ticker(tick);
					}
				}

				/**********************
     Call Completion
     **********************/

				/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
				function completeCall(callIndex, isStopped) {
					/* Ensure the call exists. */
					if (!Velocity.State.calls[callIndex]) {
						return false;
					}

					/* Pull the metadata from the call. */
					var call = Velocity.State.calls[callIndex][0],
					    elements = Velocity.State.calls[callIndex][1],
					    opts = Velocity.State.calls[callIndex][2],
					    resolver = Velocity.State.calls[callIndex][4];

					var remainingCallsExist = false;

					/*************************
      Element Finalization
      *************************/

					for (var i = 0, callLength = call.length; i < callLength; i++) {
						var element = call[i].element;

						/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
						/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
						/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
						if (!isStopped && !opts.loop) {
							if (opts.display === "none") {
								CSS.setPropertyValue(element, "display", opts.display);
							}

							if (opts.visibility === "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}
						}

						/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
       a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
       an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
       we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
       is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
						var data = Data(element);

						if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
							/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
							if (data) {
								data.isAnimating = false;
								/* Clear the element's rootPropertyValueCache, which will become stale. */
								data.rootPropertyValueCache = {};

								var transformHAPropertyExists = false;
								/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
								$.each(CSS.Lists.transforms3D, function (i, transformName) {
									var defaultValue = /^scale/.test(transformName) ? 1 : 0,
									    currentValue = data.transformCache[transformName];

									if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
										transformHAPropertyExists = true;

										delete data.transformCache[transformName];
									}
								});

								/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
								if (opts.mobileHA) {
									transformHAPropertyExists = true;
									delete data.transformCache.translate3d;
								}

								/* Flush the subproperty removals to the DOM. */
								if (transformHAPropertyExists) {
									CSS.flushTransformCache(element);
								}

								/* Remove the "velocity-animating" indicator class. */
								CSS.Values.removeClass(element, "velocity-animating");
							}
						}

						/*********************
       Option: Complete
       *********************/

						/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
						/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
						if (!isStopped && opts.complete && !opts.loop && i === callLength - 1) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.complete.call(elements, elements);
							} catch (error) {
								setTimeout(function () {
									throw error;
								}, 1);
							}
						}

						/**********************
       Promise Resolving
       **********************/

						/* Note: Infinite loops don't return promises. */
						if (resolver && opts.loop !== true) {
							resolver(elements);
						}

						/****************************
       Option: Loop (Infinite)
       ****************************/

						if (data && opts.loop === true && !isStopped) {
							/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
        continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
							$.each(data.tweensContainer, function (propertyName, tweenContainer) {
								if (/^rotate/.test(propertyName) && (parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0) {
									var oldStartValue = tweenContainer.startValue;

									tweenContainer.startValue = tweenContainer.endValue;
									tweenContainer.endValue = oldStartValue;
								}

								if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
									tweenContainer.endValue = 0;
									tweenContainer.startValue = 100;
								}
							});

							Velocity(element, "reverse", { loop: true, delay: opts.delay });
						}

						/***************
       Dequeueing
       ***************/

						/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
       which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
       $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
						if (opts.queue !== false) {
							$.dequeue(element, opts.queue);
						}
					}

					/************************
      Calls Array Cleanup
      ************************/

					/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
      (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
					Velocity.State.calls[callIndex] = false;

					/* Iterate through the calls array to determine if this was the final in-progress animation.
      If so, set a flag to end ticking and clear the calls array. */
					for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
						if (Velocity.State.calls[j] !== false) {
							remainingCallsExist = true;

							break;
						}
					}

					if (remainingCallsExist === false) {
						/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
						Velocity.State.isTicking = false;

						/* Clear the calls array so that its length is reset. */
						delete Velocity.State.calls;
						Velocity.State.calls = [];
					}
				}

				/******************
     Frameworks
     ******************/

				/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
     If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
     also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
     accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
     (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
				global.Velocity = Velocity;

				if (global !== window) {
					/* Assign the element function to Velocity's core animate() method. */
					global.fn.velocity = animate;
					/* Assign the object function's defaults to Velocity's global defaults object. */
					global.fn.velocity.defaults = Velocity.defaults;
				}

				/***********************
     Packaged Redirects
     ***********************/

				/* slideUp, slideDown */
				$.each(["Down", "Up"], function (i, direction) {
					Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
						var opts = $.extend({}, options),
						    begin = opts.begin,
						    complete = opts.complete,
						    inlineValues = {},
						    computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" };

						if (opts.display === undefined) {
							/* Show the element before slideDown begins and hide the element after slideUp completes. */
							/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
							opts.display = direction === "Down" ? Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block" : "none";
						}

						opts.begin = function () {
							/* If the user passed in a begin callback, fire it now. */
							if (elementsIndex === 0 && begin) {
								begin.call(elements, elements);
							}

							/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
							for (var property in computedValues) {
								if (!computedValues.hasOwnProperty(property)) {
									continue;
								}
								inlineValues[property] = element.style[property];

								/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
         use forcefeeding to start from computed values and animate down to 0. */
								var propertyValue = CSS.getPropertyValue(element, property);
								computedValues[property] = direction === "Down" ? [propertyValue, 0] : [0, propertyValue];
							}

							/* Force vertical overflow content to clip so that sliding works as expected. */
							inlineValues.overflow = element.style.overflow;
							element.style.overflow = "hidden";
						};

						opts.complete = function () {
							/* Reset element to its pre-slide inline values once its slide animation is complete. */
							for (var property in inlineValues) {
								if (inlineValues.hasOwnProperty(property)) {
									element.style[property] = inlineValues[property];
								}
							}

							/* If the user passed in a complete callback, fire it now. */
							if (elementsIndex === elementsSize - 1) {
								if (complete) {
									complete.call(elements, elements);
								}
								if (promiseData) {
									promiseData.resolver(elements);
								}
							}
						};

						Velocity(element, computedValues, opts);
					};
				});

				/* fadeIn, fadeOut */
				$.each(["In", "Out"], function (i, direction) {
					Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
						var opts = $.extend({}, options),
						    complete = opts.complete,
						    propertiesMap = { opacity: direction === "In" ? 1 : 0 };

						/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
       callbacks by firing them only when the final element has been reached. */
						if (elementsIndex !== 0) {
							opts.begin = null;
						}
						if (elementsIndex !== elementsSize - 1) {
							opts.complete = null;
						} else {
							opts.complete = function () {
								if (complete) {
									complete.call(elements, elements);
								}
								if (promiseData) {
									promiseData.resolver(elements);
								}
							};
						}

						/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
						/* Note: We allow users to pass in "null" to skip display setting altogether. */
						if (opts.display === undefined) {
							opts.display = direction === "In" ? "auto" : "none";
						}

						Velocity(this, propertiesMap, opts);
					};
				});

				return Velocity;
			}(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
		});

		/******************
   Known Issues
   ******************/

		/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
   Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
   will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	/**********************
    Velocity UI Pack
 **********************/

	/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

	;(function (factory) {
		/* CommonJS module. */
		if (true) {
			module.exports = factory();
			/* AMD module. */
		} else if (typeof define === "function" && define.amd) {
			define(["velocity"], factory);
			/* Browser globals. */
		} else {
			factory();
		}
	})(function () {
		return function (global, window, document, undefined) {

			/*************
       Checks
   *************/

			if (!global.Velocity || !global.Velocity.Utilities) {
				window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
				return;
			} else {
				var Velocity = global.Velocity,
				    $ = Velocity.Utilities;
			}

			var velocityVersion = Velocity.version,
			    requiredVersion = { major: 1, minor: 1, patch: 0 };

			function greaterSemver(primary, secondary) {
				var versionInts = [];

				if (!primary || !secondary) {
					return false;
				}

				$.each([primary, secondary], function (i, versionObject) {
					var versionIntsComponents = [];

					$.each(versionObject, function (component, value) {
						while (value.toString().length < 5) {
							value = "0" + value;
						}
						versionIntsComponents.push(value);
					});

					versionInts.push(versionIntsComponents.join(""));
				});

				return parseFloat(versionInts[0]) > parseFloat(versionInts[1]);
			}

			if (greaterSemver(requiredVersion, velocityVersion)) {
				var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
				alert(abortError);
				throw new Error(abortError);
			}

			/************************
      Effect Registration
   ************************/

			/* Note: RegisterUI is a legacy name. */
			Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
				/* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
				function animateParentHeight(elements, direction, totalDuration, stagger) {
					var totalHeightDelta = 0,
					    parentNode;

					/* Sum the total height (including padding and margin) of all targeted elements. */
					$.each(elements.nodeType ? [elements] : elements, function (i, element) {
						if (stagger) {
							/* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
							totalDuration += i * stagger;
						}

						parentNode = element.parentNode;

						$.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (i, property) {
							totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
						});
					});

					/* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
					Velocity.animate(parentNode, { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta }, { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) });
				}

				/* Register a custom redirect for each effect. */
				Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
					var finalElement = elementsIndex === elementsSize - 1;

					if (typeof properties.defaultDuration === "function") {
						properties.defaultDuration = properties.defaultDuration.call(elements, elements);
					} else {
						properties.defaultDuration = parseFloat(properties.defaultDuration);
					}

					/* Iterate through each effect's call array. */
					for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
						var call = properties.calls[callIndex],
						    propertyMap = call[0],
						    redirectDuration = redirectOptions.duration || properties.defaultDuration || 1000,
						    durationPercentage = call[1],
						    callOptions = call[2] || {},
						    opts = {};

						/* Assign the whitelisted per-call options. */
						opts.duration = redirectDuration * (durationPercentage || 1);
						opts.queue = redirectOptions.queue || "";
						opts.easing = callOptions.easing || "ease";
						opts.delay = parseFloat(callOptions.delay) || 0;
						opts._cacheValues = callOptions._cacheValues || true;

						/* Special processing for the first effect call. */
						if (callIndex === 0) {
							/* If a delay was passed into the redirect, combine it with the first call's delay. */
							opts.delay += parseFloat(redirectOptions.delay) || 0;

							if (elementsIndex === 0) {
								opts.begin = function () {
									/* Only trigger a begin callback on the first effect call with the first element in the set. */
									redirectOptions.begin && redirectOptions.begin.call(elements, elements);

									var direction = effectName.match(/(In|Out)$/);

									/* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
            and the first RAF tick. */
									if (direction && direction[0] === "In" && propertyMap.opacity !== undefined) {
										$.each(elements.nodeType ? [elements] : elements, function (i, element) {
											Velocity.CSS.setPropertyValue(element, "opacity", 0);
										});
									}

									/* Only trigger animateParentHeight() if we're using an In/Out transition. */
									if (redirectOptions.animateParentHeight && direction) {
										animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
									}
								};
							}

							/* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
							if (redirectOptions.display !== null) {
								if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
									opts.display = redirectOptions.display;
								} else if (/In$/.test(effectName)) {
									/* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
									var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
									opts.display = defaultDisplay === "inline" ? "inline-block" : defaultDisplay;
								}
							}

							if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
								opts.visibility = redirectOptions.visibility;
							}
						}

						/* Special processing for the last effect call. */
						if (callIndex === properties.calls.length - 1) {
							(function () {
								/* Append promise resolving onto the user's redirect callback. */
								var injectFinalCallbacks = function injectFinalCallbacks() {
									if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
										$.each(elements.nodeType ? [elements] : elements, function (i, element) {
											Velocity.CSS.setPropertyValue(element, "display", "none");
										});
									}

									redirectOptions.complete && redirectOptions.complete.call(elements, elements);

									if (promiseData) {
										promiseData.resolver(elements || element);
									}
								};

								opts.complete = function () {
									if (properties.reset) {
										for (var resetProperty in properties.reset) {
											var resetValue = properties.reset[resetProperty];

											/* Format each non-array value in the reset property map to [ value, value ] so that changes apply
              immediately and DOM querying is avoided (via forcefeeding). */
											/* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
											if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
												properties.reset[resetProperty] = [properties.reset[resetProperty], properties.reset[resetProperty]];
											}
										}

										/* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
										var resetOptions = { duration: 0, queue: false };

										/* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
										if (finalElement) {
											resetOptions.complete = injectFinalCallbacks;
										}

										Velocity.animate(element, properties.reset, resetOptions);
										/* Only trigger the user's complete callback on the last effect call with the last element in the set. */
									} else if (finalElement) {
										injectFinalCallbacks();
									}
								};

								if (redirectOptions.visibility === "hidden") {
									opts.visibility = redirectOptions.visibility;
								}
							})();
						}

						Velocity.animate(element, propertyMap, opts);
					}
				};

				/* Return the Velocity object so that RegisterUI calls can be chained. */
				return Velocity;
			};

			/*********************
      Packaged Effects
   *********************/

			/* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
			/* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
			Velocity.RegisterEffect.packagedEffects = {
				/* Animate.css */
				"callout.bounce": {
					defaultDuration: 550,
					calls: [[{ translateY: -30 }, 0.25], [{ translateY: 0 }, 0.125], [{ translateY: -15 }, 0.125], [{ translateY: 0 }, 0.25]]
				},
				/* Animate.css */
				"callout.shake": {
					defaultDuration: 800,
					calls: [[{ translateX: -11 }, 0.125], [{ translateX: 11 }, 0.125], [{ translateX: -11 }, 0.125], [{ translateX: 11 }, 0.125], [{ translateX: -11 }, 0.125], [{ translateX: 11 }, 0.125], [{ translateX: -11 }, 0.125], [{ translateX: 0 }, 0.125]]
				},
				/* Animate.css */
				"callout.flash": {
					defaultDuration: 1100,
					calls: [[{ opacity: [0, "easeInOutQuad", 1] }, 0.25], [{ opacity: [1, "easeInOutQuad"] }, 0.25], [{ opacity: [0, "easeInOutQuad"] }, 0.25], [{ opacity: [1, "easeInOutQuad"] }, 0.25]]
				},
				/* Animate.css */
				"callout.pulse": {
					defaultDuration: 825,
					calls: [[{ scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" }], [{ scaleX: 1, scaleY: 1 }, 0.50]]
				},
				/* Animate.css */
				"callout.swing": {
					defaultDuration: 950,
					calls: [[{ rotateZ: 15 }, 0.20], [{ rotateZ: -10 }, 0.20], [{ rotateZ: 5 }, 0.20], [{ rotateZ: -5 }, 0.20], [{ rotateZ: 0 }, 0.20]]
				},
				/* Animate.css */
				"callout.tada": {
					defaultDuration: 1000,
					calls: [[{ scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10], [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10], [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20]]
				},
				"transition.fadeIn": {
					defaultDuration: 500,
					calls: [[{ opacity: [1, 0] }]]
				},
				"transition.fadeOut": {
					defaultDuration: 500,
					calls: [[{ opacity: [0, 1] }]]
				},
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipXIn": {
					defaultDuration: 700,
					calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55] }]],
					reset: { transformPerspective: 0 }
				},
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipXOut": {
					defaultDuration: 700,
					calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55 }]],
					reset: { transformPerspective: 0, rotateY: 0 }
				},
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipYIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45] }]],
					reset: { transformPerspective: 0 }
				},
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipYOut": {
					defaultDuration: 800,
					calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25 }]],
					reset: { transformPerspective: 0, rotateX: 0 }
				},
				/* Animate.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipBounceXIn": {
					defaultDuration: 900,
					calls: [[{ opacity: [0.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90] }, 0.50], [{ opacity: 0.80, rotateY: 10 }, 0.25], [{ opacity: 1, rotateY: 0 }, 0.25]],
					reset: { transformPerspective: 0 }
				},
				/* Animate.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipBounceXOut": {
					defaultDuration: 800,
					calls: [[{ opacity: [0.9, 1], transformPerspective: [400, 400], rotateY: -10 }, 0.50], [{ opacity: 0, rotateY: 90 }, 0.50]],
					reset: { transformPerspective: 0, rotateY: 0 }
				},
				/* Animate.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipBounceYIn": {
					defaultDuration: 850,
					calls: [[{ opacity: [0.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90] }, 0.50], [{ opacity: 0.80, rotateX: 10 }, 0.25], [{ opacity: 1, rotateX: 0 }, 0.25]],
					reset: { transformPerspective: 0 }
				},
				/* Animate.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.flipBounceYOut": {
					defaultDuration: 800,
					calls: [[{ opacity: [0.9, 1], transformPerspective: [400, 400], rotateX: -15 }, 0.50], [{ opacity: 0, rotateX: 90 }, 0.50]],
					reset: { transformPerspective: 0, rotateX: 0 }
				},
				/* Magic.css */
				"transition.swoopIn": {
					defaultDuration: 850,
					calls: [[{ opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0 }]],
					reset: { transformOriginX: "50%", transformOriginY: "50%" }
				},
				/* Magic.css */
				"transition.swoopOut": {
					defaultDuration: 850,
					calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 }]],
					reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
				"transition.whirlIn": {
					defaultDuration: 850,
					calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160] }, 1, { easing: "easeInOutSine" }]]
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
				"transition.whirlOut": {
					defaultDuration: 750,
					calls: [[{ opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" }]],
					reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
				},
				"transition.shrinkIn": {
					defaultDuration: 750,
					calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0 }]]
				},
				"transition.shrinkOut": {
					defaultDuration: 600,
					calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0 }]],
					reset: { scaleX: 1, scaleY: 1 }
				},
				"transition.expandIn": {
					defaultDuration: 700,
					calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0.625], scaleY: [1, 0.625], translateZ: 0 }]]
				},
				"transition.expandOut": {
					defaultDuration: 700,
					calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0.5, scaleY: 0.5, translateZ: 0 }]],
					reset: { scaleX: 1, scaleY: 1 }
				},
				/* Animate.css */
				"transition.bounceIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], scaleX: [1.05, 0.3], scaleY: [1.05, 0.3] }, 0.40], [{ scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20], [{ scaleX: 1, scaleY: 1 }, 0.50]]
				},
				/* Animate.css */
				"transition.bounceOut": {
					defaultDuration: 800,
					calls: [[{ scaleX: 0.95, scaleY: 0.95 }, 0.35], [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35], [{ opacity: [0, 1], scaleX: 0.3, scaleY: 0.3 }, 0.30]],
					reset: { scaleX: 1, scaleY: 1 }
				},
				/* Animate.css */
				"transition.bounceUpIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], translateY: [-30, 1000] }, 0.60, { easing: "easeOutCirc" }], [{ translateY: 10 }, 0.20], [{ translateY: 0 }, 0.20]]
				},
				/* Animate.css */
				"transition.bounceUpOut": {
					defaultDuration: 1000,
					calls: [[{ translateY: 20 }, 0.20], [{ opacity: [0, "easeInCirc", 1], translateY: -1000 }, 0.80]],
					reset: { translateY: 0 }
				},
				/* Animate.css */
				"transition.bounceDownIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], translateY: [30, -1000] }, 0.60, { easing: "easeOutCirc" }], [{ translateY: -10 }, 0.20], [{ translateY: 0 }, 0.20]]
				},
				/* Animate.css */
				"transition.bounceDownOut": {
					defaultDuration: 1000,
					calls: [[{ translateY: -20 }, 0.20], [{ opacity: [0, "easeInCirc", 1], translateY: 1000 }, 0.80]],
					reset: { translateY: 0 }
				},
				/* Animate.css */
				"transition.bounceLeftIn": {
					defaultDuration: 750,
					calls: [[{ opacity: [1, 0], translateX: [30, -1250] }, 0.60, { easing: "easeOutCirc" }], [{ translateX: -10 }, 0.20], [{ translateX: 0 }, 0.20]]
				},
				/* Animate.css */
				"transition.bounceLeftOut": {
					defaultDuration: 750,
					calls: [[{ translateX: 30 }, 0.20], [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, 0.80]],
					reset: { translateX: 0 }
				},
				/* Animate.css */
				"transition.bounceRightIn": {
					defaultDuration: 750,
					calls: [[{ opacity: [1, 0], translateX: [-30, 1250] }, 0.60, { easing: "easeOutCirc" }], [{ translateX: 10 }, 0.20], [{ translateX: 0 }, 0.20]]
				},
				/* Animate.css */
				"transition.bounceRightOut": {
					defaultDuration: 750,
					calls: [[{ translateX: -30 }, 0.20], [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, 0.80]],
					reset: { translateX: 0 }
				},
				"transition.slideUpIn": {
					defaultDuration: 900,
					calls: [[{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }]]
				},
				"transition.slideUpOut": {
					defaultDuration: 900,
					calls: [[{ opacity: [0, 1], translateY: -20, translateZ: 0 }]],
					reset: { translateY: 0 }
				},
				"transition.slideDownIn": {
					defaultDuration: 900,
					calls: [[{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }]]
				},
				"transition.slideDownOut": {
					defaultDuration: 900,
					calls: [[{ opacity: [0, 1], translateY: 20, translateZ: 0 }]],
					reset: { translateY: 0 }
				},
				"transition.slideLeftIn": {
					defaultDuration: 1000,
					calls: [[{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }]]
				},
				"transition.slideLeftOut": {
					defaultDuration: 1050,
					calls: [[{ opacity: [0, 1], translateX: -20, translateZ: 0 }]],
					reset: { translateX: 0 }
				},
				"transition.slideRightIn": {
					defaultDuration: 1000,
					calls: [[{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }]]
				},
				"transition.slideRightOut": {
					defaultDuration: 1050,
					calls: [[{ opacity: [0, 1], translateX: 20, translateZ: 0 }]],
					reset: { translateX: 0 }
				},
				"transition.slideUpBigIn": {
					defaultDuration: 850,
					calls: [[{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }]]
				},
				"transition.slideUpBigOut": {
					defaultDuration: 800,
					calls: [[{ opacity: [0, 1], translateY: -75, translateZ: 0 }]],
					reset: { translateY: 0 }
				},
				"transition.slideDownBigIn": {
					defaultDuration: 850,
					calls: [[{ opacity: [1, 0], translateY: [0, -75], translateZ: 0 }]]
				},
				"transition.slideDownBigOut": {
					defaultDuration: 800,
					calls: [[{ opacity: [0, 1], translateY: 75, translateZ: 0 }]],
					reset: { translateY: 0 }
				},
				"transition.slideLeftBigIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], translateX: [0, -75], translateZ: 0 }]]
				},
				"transition.slideLeftBigOut": {
					defaultDuration: 750,
					calls: [[{ opacity: [0, 1], translateX: -75, translateZ: 0 }]],
					reset: { translateX: 0 }
				},
				"transition.slideRightBigIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], translateX: [0, 75], translateZ: 0 }]]
				},
				"transition.slideRightBigOut": {
					defaultDuration: 750,
					calls: [[{ opacity: [0, 1], translateX: 75, translateZ: 0 }]],
					reset: { translateX: 0 }
				},
				/* Magic.css */
				"transition.perspectiveUpIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180] }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveUpOut": {
					defaultDuration: 850,
					calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180 }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveDownIn": {
					defaultDuration: 800,
					calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180] }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveDownOut": {
					defaultDuration: 850,
					calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180 }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveLeftIn": {
					defaultDuration: 950,
					calls: [[{ opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180] }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveLeftOut": {
					defaultDuration: 950,
					calls: [[{ opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180 }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveRightIn": {
					defaultDuration: 950,
					calls: [[{ opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180] }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
				},
				/* Magic.css */
				/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
				"transition.perspectiveRightOut": {
					defaultDuration: 950,
					calls: [[{ opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180 }]],
					reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
				}
			};

			/* Register the packaged effects. */
			for (var effectName in Velocity.RegisterEffect.packagedEffects) {
				Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
			}

			/*********************
      Sequence Running
   **********************/

			/* Note: Sequence calls must use Velocity's single-object arguments syntax. */
			Velocity.RunSequence = function (originalSequence) {
				var sequence = $.extend(true, [], originalSequence);

				if (sequence.length > 1) {
					$.each(sequence.reverse(), function (i, currentCall) {
						var nextCall = sequence[i + 1];

						if (nextCall) {
							/* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
          in the previous call's begin callback. Otherwise, chained calls are normally triggered
          in the previous call's complete callback. */
							var currentCallOptions = currentCall.o || currentCall.options,
							    nextCallOptions = nextCall.o || nextCall.options;

							var timing = currentCallOptions && currentCallOptions.sequenceQueue === false ? "begin" : "complete",
							    callbackOriginal = nextCallOptions && nextCallOptions[timing],
							    options = {};

							options[timing] = function () {
								var nextCallElements = nextCall.e || nextCall.elements;
								var elements = nextCallElements.nodeType ? [nextCallElements] : nextCallElements;

								callbackOriginal && callbackOriginal.call(elements, elements);
								Velocity(currentCall);
							};

							if (nextCall.o) {
								nextCall.o = $.extend({}, nextCallOptions, options);
							} else {
								nextCall.options = $.extend({}, nextCallOptions, options);
							}
						}
					});

					sequence.reverse();
				}

				Velocity(sequence[0]);
			};
		}(window.jQuery || window.Zepto || window, window, document);
	});

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // jquery.event.move
	//
	// 1.3.6
	//
	// Stephen Band
	//
	// Triggers 'movestart', 'move' and 'moveend' events after
	// mousemoves following a mousedown cross a distance threshold,
	// similar to the native 'dragstart', 'drag' and 'dragend' events.
	// Move events are throttled to animation frames. Move event objects
	// have the properties:
	//
	// pageX:
	// pageY:   Page coordinates of pointer.
	// startX:
	// startY:  Page coordinates of pointer at movestart.
	// distX:
	// distY:  Distance the pointer has moved since movestart.
	// deltaX:
	// deltaY:  Distance the finger has moved since last event.
	// velocityX:
	// velocityY:  Average velocity over last few events.


	(function (module) {
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = module, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser globals
			module(jQuery);
		}
	})(function (jQuery, undefined) {

		var // Number of pixels a pressed pointer travels before movestart
		// event is fired.
		threshold = 6,
		    add = jQuery.event.add,
		    remove = jQuery.event.remove,


		// Just sugar, so we can have arguments in the same order as
		// add and remove.
		trigger = function trigger(node, type, data) {
			jQuery.event.trigger(type, data, node);
		},


		// Shim for requestAnimationFrame, falling back to timer. See:
		// see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestFrame = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fn, element) {
				return window.setTimeout(function () {
					fn();
				}, 25);
			};
		}(),
		    ignoreTags = {
			textarea: true,
			input: true,
			select: true,
			button: true
		},
		    mouseevents = {
			move: 'mousemove',
			cancel: 'mouseup dragstart',
			end: 'mouseup'
		},
		    touchevents = {
			move: 'touchmove',
			cancel: 'touchend',
			end: 'touchend'
		};

		// Constructors

		function Timer(fn) {
			var callback = fn,
			    active = false,
			    running = false;

			function trigger(time) {
				if (active) {
					callback();
					requestFrame(trigger);
					running = true;
					active = false;
				} else {
					running = false;
				}
			}

			this.kick = function (fn) {
				active = true;
				if (!running) {
					trigger();
				}
			};

			this.end = function (fn) {
				var cb = callback;

				if (!fn) {
					return;
				}

				// If the timer is not running, simply call the end callback.
				if (!running) {
					fn();
				}
				// If the timer is running, and has been kicked lately, then
				// queue up the current callback and the end callback, otherwise
				// just the end callback.
				else {
						callback = active ? function () {
							cb();fn();
						} : fn;

						active = true;
					}
			};
		}

		// Functions

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		function preventDefault(e) {
			e.preventDefault();
		}

		function preventIgnoreTags(e) {
			// Don't prevent interaction with form elements.
			if (ignoreTags[e.target.tagName.toLowerCase()]) {
				return;
			}

			e.preventDefault();
		}

		function isLeftButton(e) {
			// Ignore mousedowns on any button other than the left (or primary)
			// mouse button, or when a modifier key is pressed.
			return e.which === 1 && !e.ctrlKey && !e.altKey;
		}

		function identifiedTouch(touchList, id) {
			var i, l;

			if (touchList.identifiedTouch) {
				return touchList.identifiedTouch(id);
			}

			// touchList.identifiedTouch() does not exist in
			// webkit yet�� we must do the search ourselves...

			i = -1;
			l = touchList.length;

			while (++i < l) {
				if (touchList[i].identifier === id) {
					return touchList[i];
				}
			}
		}

		function changedTouch(e, event) {
			var touch = identifiedTouch(e.changedTouches, event.identifier);

			// This isn't the touch you're looking for.
			if (!touch) {
				return;
			}

			// Chrome Android (at least) includes touches that have not
			// changed in e.changedTouches. That's a bit annoying. Check
			// that this touch has changed.
			if (touch.pageX === event.pageX && touch.pageY === event.pageY) {
				return;
			}

			return touch;
		}

		// Handlers that decide when the first movestart is triggered

		function mousedown(e) {
			var data;

			if (!isLeftButton(e)) {
				return;
			}

			data = {
				target: e.target,
				startX: e.pageX,
				startY: e.pageY,
				timeStamp: e.timeStamp
			};

			add(document, mouseevents.move, mousemove, data);
			add(document, mouseevents.cancel, mouseend, data);
		}

		function mousemove(e) {
			var data = e.data;

			checkThreshold(e, data, e, removeMouse);
		}

		function mouseend(e) {
			removeMouse();
		}

		function removeMouse() {
			remove(document, mouseevents.move, mousemove);
			remove(document, mouseevents.cancel, mouseend);
		}

		function touchstart(e) {
			var touch, template;

			// Don't get in the way of interaction with form elements.
			if (ignoreTags[e.target.tagName.toLowerCase()]) {
				return;
			}

			touch = e.changedTouches[0];

			// iOS live updates the touch objects whereas Android gives us copies.
			// That means we can't trust the touchstart object to stay the same,
			// so we must copy the data. This object acts as a template for
			// movestart, move and moveend event objects.
			template = {
				target: touch.target,
				startX: touch.pageX,
				startY: touch.pageY,
				timeStamp: e.timeStamp,
				identifier: touch.identifier
			};

			// Use the touch identifier as a namespace, so that we can later
			// remove handlers pertaining only to this touch.
			add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
			add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
		}

		function touchmove(e) {
			var data = e.data,
			    touch = changedTouch(e, data);

			if (!touch) {
				return;
			}

			checkThreshold(e, data, touch, removeTouch);
		}

		function touchend(e) {
			var template = e.data,
			    touch = identifiedTouch(e.changedTouches, template.identifier);

			if (!touch) {
				return;
			}

			removeTouch(template.identifier);
		}

		function removeTouch(identifier) {
			remove(document, '.' + identifier, touchmove);
			remove(document, '.' + identifier, touchend);
		}

		// Logic for deciding when to trigger a movestart.

		function checkThreshold(e, template, touch, fn) {
			var distX = touch.pageX - template.startX,
			    distY = touch.pageY - template.startY;

			// Do nothing if the threshold has not been crossed.
			if (distX * distX + distY * distY < threshold * threshold) {
				return;
			}

			triggerStart(e, template, touch, distX, distY, fn);
		}

		function handled() {
			// this._handled should return false once, and after return true.
			this._handled = returnTrue;
			return false;
		}

		function flagAsHandled(e) {
			e._handled();
		}

		function triggerStart(e, template, touch, distX, distY, fn) {
			var node = template.target,
			    touches,
			    time;

			touches = e.targetTouches;
			time = e.timeStamp - template.timeStamp;

			// Create a movestart object with some special properties that
			// are passed only to the movestart handlers.
			template.type = 'movestart';
			template.distX = distX;
			template.distY = distY;
			template.deltaX = distX;
			template.deltaY = distY;
			template.pageX = touch.pageX;
			template.pageY = touch.pageY;
			template.velocityX = distX / time;
			template.velocityY = distY / time;
			template.targetTouches = touches;
			template.finger = touches ? touches.length : 1;

			// The _handled method is fired to tell the default movestart
			// handler that one of the move events is bound.
			template._handled = handled;

			// Pass the touchmove event so it can be prevented if or when
			// movestart is handled.
			template._preventTouchmoveDefault = function () {
				e.preventDefault();
			};

			// Trigger the movestart event.
			trigger(template.target, template);

			// Unbind handlers that tracked the touch or mouse up till now.
			fn(template.identifier);
		}

		// Handlers that control what happens following a movestart

		function activeMousemove(e) {
			var timer = e.data.timer;

			e.data.touch = e;
			e.data.timeStamp = e.timeStamp;
			timer.kick();
		}

		function activeMouseend(e) {
			var event = e.data.event,
			    timer = e.data.timer;

			removeActiveMouse();

			endEvent(event, timer, function () {
				// Unbind the click suppressor, waiting until after mouseup
				// has been handled.
				setTimeout(function () {
					remove(event.target, 'click', returnFalse);
				}, 0);
			});
		}

		function removeActiveMouse(event) {
			remove(document, mouseevents.move, activeMousemove);
			remove(document, mouseevents.end, activeMouseend);
		}

		function activeTouchmove(e) {
			var event = e.data.event,
			    timer = e.data.timer,
			    touch = changedTouch(e, event);

			if (!touch) {
				return;
			}

			// Stop the interface from gesturing
			e.preventDefault();

			event.targetTouches = e.targetTouches;
			e.data.touch = touch;
			e.data.timeStamp = e.timeStamp;
			timer.kick();
		}

		function activeTouchend(e) {
			var event = e.data.event,
			    timer = e.data.timer,
			    touch = identifiedTouch(e.changedTouches, event.identifier);

			// This isn't the touch you're looking for.
			if (!touch) {
				return;
			}

			removeActiveTouch(event);
			endEvent(event, timer);
		}

		function removeActiveTouch(event) {
			remove(document, '.' + event.identifier, activeTouchmove);
			remove(document, '.' + event.identifier, activeTouchend);
		}

		// Logic for triggering move and moveend events

		function updateEvent(event, touch, timeStamp, timer) {
			var time = timeStamp - event.timeStamp;

			event.type = 'move';
			event.distX = touch.pageX - event.startX;
			event.distY = touch.pageY - event.startY;
			event.deltaX = touch.pageX - event.pageX;
			event.deltaY = touch.pageY - event.pageY;

			// Average the velocity of the last few events using a decay
			// curve to even out spurious jumps in values.
			event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
			event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
			event.pageX = touch.pageX;
			event.pageY = touch.pageY;
		}

		function endEvent(event, timer, fn) {
			timer.end(function () {
				event.type = 'moveend';

				trigger(event.target, event);

				return fn && fn();
			});
		}

		// jQuery special event definition

		function setup(data, namespaces, eventHandle) {
			// Stop the node from being dragged
			//add(this, 'dragstart.move drag.move', preventDefault);

			// Prevent text selection and touch interface scrolling
			//add(this, 'mousedown.move', preventIgnoreTags);

			// Tell movestart default handler that we've handled this
			add(this, 'movestart.move', flagAsHandled);

			// Don't bind to the DOM. For speed.
			return true;
		}

		function teardown(namespaces) {
			remove(this, 'dragstart drag', preventDefault);
			remove(this, 'mousedown touchstart', preventIgnoreTags);
			remove(this, 'movestart', flagAsHandled);

			// Don't bind to the DOM. For speed.
			return true;
		}

		function addMethod(handleObj) {
			// We're not interested in preventing defaults for handlers that
			// come from internal move or moveend bindings
			if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
				return;
			}

			// Stop the node from being dragged
			add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);

			// Prevent text selection and touch interface scrolling
			add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
		}

		function removeMethod(handleObj) {
			if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
				return;
			}

			remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
			remove(this, 'mousedown.' + handleObj.guid);
		}

		jQuery.event.special.movestart = {
			setup: setup,
			teardown: teardown,
			add: addMethod,
			remove: removeMethod,

			_default: function _default(e) {
				var event, data;

				// If no move events were bound to any ancestors of this
				// target, high tail it out of here.
				if (!e._handled()) {
					return;
				}

				function update(time) {
					updateEvent(event, data.touch, data.timeStamp);
					trigger(e.target, event);
				}

				event = {
					target: e.target,
					startX: e.startX,
					startY: e.startY,
					pageX: e.pageX,
					pageY: e.pageY,
					distX: e.distX,
					distY: e.distY,
					deltaX: e.deltaX,
					deltaY: e.deltaY,
					velocityX: e.velocityX,
					velocityY: e.velocityY,
					timeStamp: e.timeStamp,
					identifier: e.identifier,
					targetTouches: e.targetTouches,
					finger: e.finger
				};

				data = {
					event: event,
					timer: new Timer(update),
					touch: undefined,
					timeStamp: undefined
				};

				if (e.identifier === undefined) {
					// We're dealing with a mouse
					// Stop clicks from propagating during a move
					add(e.target, 'click', returnFalse);
					add(document, mouseevents.move, activeMousemove, data);
					add(document, mouseevents.end, activeMouseend, data);
				} else {
					// We're dealing with a touch. Stop touchmove doing
					// anything defaulty.
					e._preventTouchmoveDefault();
					add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
					add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
				}
			}
		};

		jQuery.event.special.move = {
			setup: function setup() {
				// Bind a noop to movestart. Why? It's the movestart
				// setup that decides whether other move events are fired.
				add(this, 'movestart.move', jQuery.noop);
			},

			teardown: function teardown() {
				remove(this, 'movestart.move', jQuery.noop);
			}
		};

		jQuery.event.special.moveend = {
			setup: function setup() {
				// Bind a noop to movestart. Why? It's the movestart
				// setup that decides whether other move events are fired.
				add(this, 'movestart.moveend', jQuery.noop);
			},

			teardown: function teardown() {
				remove(this, 'movestart.moveend', jQuery.noop);
			}
		};

		add(document, 'mousedown.move', mousedown);
		add(document, 'touchstart.move', touchstart);

		// Make jQuery copy touch event properties over to the jQuery event
		// object, if they are not already listed. But only do the ones we
		// really need. IE7/8 do not have Array#indexOf(), but nor do they
		// have touch events, so let's assume we can ignore them.
		if (typeof Array.prototype.indexOf === 'function') {
			(function (jQuery, undefined) {
				var props = ["changedTouches", "targetTouches"],
				    l = props.length;

				while (l--) {
					if (jQuery.event.props.indexOf(props[l]) === -1) {
						jQuery.event.props.push(props[l]);
					}
				}
			})(jQuery);
		};
	});

	/***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // jQuery.event.swipe
	// 0.5
	// Stephen Band

	// Dependencies
	// jQuery.event.move 1.2

	// One of swipeleft, swiperight, swipeup or swipedown is triggered on
	// moveend, when the move has covered a threshold ratio of the dimension
	// of the target node, or has gone really fast. Threshold and velocity
	// sensitivity changed with:
	//
	// jQuery.event.special.swipe.settings.threshold
	// jQuery.event.special.swipe.settings.sensitivity

	(function (thisModule) {
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = thisModule, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== "undefined" && module !== null && module.exports) {
			module.exports = thisModule;
		} else {
			// Browser globals
			thisModule(jQuery);
		}
	})(function (jQuery, undefined) {
		var add = jQuery.event.add,
		    remove = jQuery.event.remove,


		// Just sugar, so we can have arguments in the same order as
		// add and remove.
		trigger = function trigger(node, type, data) {
			jQuery.event.trigger(type, data, node);
		},
		    settings = {
			// Ratio of distance over target finger must travel to be
			// considered a swipe.
			threshold: 0.4,
			// Faster fingers can travel shorter distances to be considered
			// swipes. 'sensitivity' controls how much. Bigger is shorter.
			sensitivity: 6
		};

		function moveend(e) {
			var w, h, event;

			w = e.currentTarget.offsetWidth;
			h = e.currentTarget.offsetHeight;

			// Copy over some useful properties from the move event
			event = {
				distX: e.distX,
				distY: e.distY,
				velocityX: e.velocityX,
				velocityY: e.velocityY,
				finger: e.finger
			};

			// Find out which of the four directions was swiped
			if (e.distX > e.distY) {
				if (e.distX > -e.distY) {
					if (e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
						event.type = 'swiperight';
						trigger(e.currentTarget, event);
					}
				} else {
					if (-e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
						event.type = 'swipeup';
						trigger(e.currentTarget, event);
					}
				}
			} else {
				if (e.distX > -e.distY) {
					if (e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
						event.type = 'swipedown';
						trigger(e.currentTarget, event);
					}
				} else {
					if (-e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
						event.type = 'swipeleft';
						trigger(e.currentTarget, event);
					}
				}
			}
		}

		function getData(node) {
			var data = jQuery.data(node, 'event_swipe');

			if (!data) {
				data = { count: 0 };
				jQuery.data(node, 'event_swipe', data);
			}

			return data;
		}

		jQuery.event.special.swipe = jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
			setup: function setup(data, namespaces, eventHandle) {
				var data = getData(this);

				// If another swipe event is already setup, don't setup again.
				if (data.count++ > 0) {
					return;
				}

				add(this, 'moveend', moveend);

				return true;
			},

			teardown: function teardown() {
				var data = getData(this);

				// If another swipe event is still setup, don't teardown.
				if (--data.count > 0) {
					return;
				}

				remove(this, 'moveend', moveend);

				return true;
			},

			settings: settings
		};
	});

	/***/
},
/* 9 */
/***/function (module, exports) {

	/*!
  * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
  * Scroll smooth to any element in your DOM.
  *
  * Copyright (c) 2012 Yannick Albert (http://yckart.com)
  * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
  * 2013/02/17
  **/
	(function ($) {
		$.scrollTo = $.fn.scrollTo = function (x, y, options) {
			if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

			options = $.extend({}, {
				gap: {
					x: 0,
					y: 0
				},
				animation: {
					easing: 'swing',
					duration: 600,
					complete: $.noop,
					step: $.noop
				}
			}, options);

			return this.each(function () {
				var elem = $(this);
				elem.stop().animate({
					scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
					scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
				}, options.animation);
			});
		};
	})(window.IUEditor.jQuery);

	/***/
},
/* 10 */
/***/function (module, exports) {

	(function (jQuery, $) {
		$.fn.hasClassStartsWith = function (klass) {
			var _return = [];
			for (var i = 0; i < this.length; i++) {
				if ((' ' + $(this[i]).attr('class')).indexOf(klass) != -1) _return.push(this[i]);
			}
			return _return;
		};

		$.fn.isVelocityAnimating = function () {
			return this.each(function () {
				var $el = $(this);
				//if doing animation, ignore it
				if ($el.hasClass('velocity-animating')) {
					return true;
				} else {
					return false;
				}
			});
		};

		$.fn.velocityToggle = function (toggle, animation, duration, option, callback) {
			return this.each(function () {
				var $iu = $(this);
				if (option == undefined) {
					option = {};
				};

				//check parameters
				if (animation == undefined) {
					animation = $iu.attr('data-iu-show-animation');
				}
				if (duration == undefined) {
					duration = parseFloat($iu.attr('data-iu-show-duration')) * 1000; //change seconds to milli seconds
				};

				//setting option
				if (animation == undefined) {
					option = {};
				};

				option['complete'] = callback;

				//show iu
				if (toggle) {
					if (duration > 0) {
						$iu.css('display', 'block');
						option['duration'] = duration;
						$iu.velocity(animation, option);
					} else {
						$iu.css('display', 'block');
						//todo check option
						if (callback) {
							callback();
						};
					}
				}
				//close iu
				else {
						if (duration > 0) {
							var closeAnimationName = animation;
							if (closeAnimationName.indexOf("Down") > 0) {
								closeAnimationName = closeAnimationName.replace("Down", "Up");
							}
							if (closeAnimationName.indexOf("In") > 0) {
								closeAnimationName = closeAnimationName.replace("In", "Out");
							}
							//????check option
							option['display'] = 'none';
							option['duration'] = duration;
							$iu.velocity(closeAnimationName, option);
						} else {
							$iu.css('display', 'none');
							//todo check option
							if (callback) {
								callback();
							};
						}
					}
			});
		};

		$.fn.isElementInViewport = function () {
			var el = this;
			//special bonus for those using jQuery
			if (typeof jQuery === "function" && el instanceof jQuery) {
				el = el[0];
			}

			var rect = el.getBoundingClientRect();

			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			;
		};
	})(window.IUEditor.jQuery, window.IUEditor.$);

	/***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

	// iuwidget
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/**
  * Check List
  * jQuery, velocity, velocity-ui 
  * jQuery plugin 
  */

		/*
   * IUEditor : IUCarousel 
   * Needs plugin : jQuery, velocity, velocity-ui, plugin/jquery.event.move, plugin/jquery.iu
   */

		'use strict';

		//custom class

		var IU_CAROUSEL_WRAPPER_CLASS = '.iux-carousel-wrapper';
		var IU_CAROUSEL_PAGER_CLASS = '.iux-carousel-pager';
		var IU_CAROUSEL_PREV_CLASS = '.iux-carousel-prev';
		var IU_CAROUSEL_NEXT_CLASS = '.iux-carousel-next';
		var IU_ACTIVE_CLASS_NAME = 'iux-active';
		var IU_CAROUSEL_COPY_CLASS_NAME = 'carousel-copy';

		//data
		var IU_CAROUSEL_DATA_TIME = 'iu-carousel-time';

		var Carousel = function () {
			function Carousel(element) {
				_classCallCheck(this, Carousel);

				this.$element = IUEditor.$(element);
				this.isLoaded = null;
				this.$wrapper = IUEditor.$(element).find(IU_CAROUSEL_WRAPPER_CLASS);
				this.$pager = IUEditor.$(element).find(IU_CAROUSEL_PAGER_CLASS);

				//index
				this.itemIndex = null; //carousel item index
				this.pagerIndex = null; //pager index 

				//autoplay
				this.timer = null;
				this.itemCount = null;
				this.timerDuration = IUEditor.$(element).data(IU_CAROUSEL_DATA_TIME);
				this.isAutoplay = element.hasAttribute('data-' + IU_CAROUSEL_DATA_TIME);

				//css name
				var ieVersion = window.getInternetExplorerVersion();
				this.isLeft = ieVersion <= 9 && ieVersion >= 0 ? true : false;
				this.xTag = this.isLeft ? 'margin-left' : 'translateX';

				//auto height - set as default
				this.height = 0;

				// callback
				this.callbackMove = null;
			}

			Carousel.prototype.init = function init() {
				var self = this;
				if (self.isLoaded) {
					return;
				}

				//check balance between items and pagers
				var itemCount = self.$wrapper.children().length;
				var pagerCount = self.$pager.children().length;

				//count of pagers is not equal to the number of items
				if (itemCount != pagerCount) {
					if (pagerCount > itemCount) {
						//remove redundant pagers
						self.$pager.children().slice(itemCount, pagerCount).remove();
					} else {
						//add pagers
						for (var i = 0; i < itemCount - pagerCount; i++) {
							self.$pager.append(IUEditor.$('<li></li>'));
						}
					}
				}

				if (itemCount < 2) {
					//if the number of items < 2, not working in carousel
					//just put on, and hide control of carousel
					self.$element.children().not(self.$wrapper).css('display', 'none');
					return;
				}

				//set item count
				self.itemCount = itemCount;

				//set carousel loaded
				self.isLoaded = true;

				//copy first & last item
				var firstObj = IUEditor.$(self.$wrapper.children()[0]).clone(true);
				firstObj.addClass(IU_CAROUSEL_COPY_CLASS_NAME);

				var lastObj = IUEditor.$(self.$wrapper.children()[itemCount - 1]).clone(true);
				lastObj.addClass(IU_CAROUSEL_COPY_CLASS_NAME);

				//insert copy objects
				IUEditor.$(firstObj).insertAfter(IUEditor.$(self.$wrapper.children()[itemCount - 1]));
				IUEditor.$(lastObj).insertBefore(IUEditor.$(self.$wrapper.children()[0]));

				//set position & size
				//1.  wrapper size & position
				var width = 100 * (self.itemCount + 2);
				window.requestAnimationFrame(function () {
					self.$wrapper.css('width', width + '%');
				});

				var left = self.xPosForIndex(1);
				$.Velocity.hook(self.$wrapper, self.xTag, left);

				//2. item size
				var childrenWidth = 100 / (itemCount + 2);
				self.$wrapper.children().each(function () {
					var child = this;
					window.requestAnimationFrame(function () {
						IUEditor.$(child).css('width', childrenWidth + '%');
					});
				});

				//set index
				self.itemIndex = 1;
				self.pagerIndex = 0;

				//set event delegation
				//click binding
				self.$element.find(IU_CAROUSEL_PREV_CLASS).click(function () {
					self.pause();
					self.movePrev();
					self.start();
				});

				self.$element.find(IU_CAROUSEL_NEXT_CLASS).click(function () {
					self.pause();
					self.moveNext();
					self.start();
				});

				//activate pager
				self.activate();

				/* caoursel item binding */
				self.$element.on({
					movestart: function movestart(e) {
						// If the movestart is heading off in an upwards or downwards
						// direction, prevent it so that the browser scrolls normally.
						if (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) {
							e.preventDefault();
						}
						self.pause();
					},
					move: function move(e) {
						// Move slides with the finger
						self.moveXCarouselItem(e.distX);
					},
					moveend: function moveend(e) {
						self.endMoveCarouselItem(e.distX);
						self.start();
					}
				});
				self.$element.find(IU_CAROUSEL_PAGER_CLASS + '>li').on({
					click: function click(e) {
						self.pause();
						var index = self.$pager.children().index(this);
						self.move(index + 1);
						self.start();
						e.preventDefault();
					}
				});

				//start timer
				self.start();

				// adjust height
				self.adjustHeight(self.itemIndex);
			};

			Carousel.prototype.reload = function reload() {
				this.destroy();
				this.init();
			};

			Carousel.prototype.resize = function resize() {
				var self = this;
				if (self.isLoaded) {
					(function () {
						var xPos = self.xPosForIndex(self.itemIndex);
						var velocityDict = self.isLeft ? {
							'margin-left': xPos
						} : {
							'translateX': xPos
						};
						self.$wrapper.velocity(velocityDict, {
							duration: 0
						});

						var currentItem = IUEditor.$(self.$wrapper.children()[self.itemIndex]);
						var height = currentItem.height();
						window.requestAnimationFrame(function () {
							self.$element.css('height', height + 'px');
						});
					})();
				}
			};

			Carousel.prototype.pause = function pause() {
				var self = this;
				if (self.isLoaded && self.isAutoplay) {
					window.clearInterval(self.timer);
					self.timer = null;
				}
			};

			Carousel.prototype.start = function start() {
				var self = this;
				if (self.isLoaded && self.isAutoplay && self.timerDuration) {
					//set timer
					self.timer = window.setInterval(function () {
						self.moveNext();
					}, self.timerDuration);
				}
			};

			Carousel.prototype.destroy = function destroy() {
				var self = this;
				if (self.isLoaded) {
					var copyItems = self.$wrapper.find('.' + IU_CAROUSEL_COPY_CLASS_NAME);
					copyItems.remove();
				}
			};

			Carousel.prototype.moveNext = function moveNext() {
				var index = this.itemIndex + 1;
				this.move(index);
			};

			Carousel.prototype.moveCurrent = function moveCurrent() {
				var index = this.itemIndex;
				this.move(index);
			};

			Carousel.prototype.movePrev = function movePrev() {
				var index = this.itemIndex - 1;
				this.move(index);
			};
			/**
   @param toIndex : carousel�� �吏곸씪 index 
   @param translateX  : �대떦 value媛 �덉쑝硫� �대떦 �꾩튂濡� ��릿��. (to Index� 媛숈씠 �덉뼱�쇳븿)
   */


			Carousel.prototype.move = function move(toIndex, diffX) {
				var self = this;
				//check doing animation
				if (self.$wrapper.hasClass('velocity-animating')) {
					return;
				}

				//save current index
				self.itemIndex = toIndex;
				if (toIndex == 0) {
					//last
					self.pagerIndex = self.itemCount - 1;
				} else if (toIndex > self.itemCount) {
					self.pagerIndex = 0;
				} else {
					self.pagerIndex = toIndex - 1;
				}

				//pager activate
				self.activate();

				//move left
				var moveX = diffX != undefined ? diffX : self.xPosForIndex(toIndex);
				var velocityDict = self.isLeft ? {
					'margin-left': moveX
				} : {
					'translateX': moveX
				};

				self.$wrapper.velocity(velocityDict, {
					duration: 400,
					complete: function complete() {

						//move last, first item to original item
						if (toIndex == 0) {
							self.itemIndex = self.itemCount;
						} else if (toIndex > self.itemCount) {
							self.itemIndex = 1;
						}

						var x = self.xPosForIndex(self.itemIndex);
						$.Velocity.hook(self.$wrapper, self.xTag, x);

						self.adjustHeight(toIndex);

						var callback = self.callbackMove;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					}
				});
			};

			Carousel.prototype.adjustHeight = function adjustHeight(index) {
				var self = this;

				//set height of carousel equal to current item
				var height = IUEditor.$(self.$wrapper.children()[index]).height();
				if (self.height != height) {
					$.Velocity.hook(self.$element, 'height', height + 'px');
					self.height = height;
				}
			};

			Carousel.prototype.xPosForIndex = function xPosForIndex(index) {
				var self = this;
				var x = void 0;
				if (self.isLeft) {
					// left�먯꽌�� �ㅻⅨ parent 湲곗���.
					x = 100 * index * -1;
				} else {
					x = 100 / (self.itemCount + 2) * index * -1;
				}
				return x + '%';
			};

			Carousel.prototype.activate = function activate() {
				var self = this;
				var pagerIndex = self.pagerIndex;

				//select li class active
				self.$pager.children().each(function (i) {
					if (i == pagerIndex) {
						IUEditor.$(this).addClass(IU_ACTIVE_CLASS_NAME);
					} else {
						IUEditor.$(this).removeClass(IU_ACTIVE_CLASS_NAME);
					}
				});
			};

			Carousel.prototype.moveXCarouselItem = function moveXCarouselItem(distX) {
				var self = this;
				var currentX = self.$wrapper.width() / (self.itemCount + 2) * self.itemIndex * -1;
				var moveX = currentX + distX;
				$.Velocity.hook(self.$wrapper, self.xTag, moveX + 'px');
			};

			Carousel.prototype.endMoveCarouselItem = function endMoveCarouselItem(distX) {
				var self = this;
				var itemWidth = self.$wrapper.width() / (self.itemCount + 2);

				//carousel �� qurter瑜� 湲곗��쇰줈 ��.
				var index = void 0;
				if (Math.abs(distX) > itemWidth / 4) {
					if (distX < 0) {
						index = self.itemIndex + 1;
					} else {
						index = self.itemIndex - 1;
					}
				} else {
					index = self.itemIndex;
				}
				var currentX = self.$wrapper.width() / (self.itemCount + 2) * index * -1;

				// %�쇰줈 �섎㈃ �吏곸씪�� px�먯꽌 �붾㈃�� �낃린�� �꾩긽�� 諛쒖깮�섍린 �뚮Ц�� pixel媛믪쓣 �섍꺼以��.
				self.move(index, currentX + 'px');
			};

			return Carousel;
		}();

		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var carousel = $this.data(IU_WIDGET.CAROUSEL);
				if (!carousel) {
					carousel = new Carousel(this);
					$this.data(IU_WIDGET.CAROUSEL, carousel);
					carousel.init();
				}
			});
		};

		IUEditor.$.fn.carousel = plugin;

		// CAROUSEL READY 
		IUEditor.$(document).ready(function () {
			IUEditor.$('.iu-carousel').carousel();
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUCollapsible 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		var IU_COLLAPSIBLE_HEADER_CLASS = '.iu-collapsible-header';
		var IU_COLLAPSIBLE_CONTENT_CLASS = '.iu-collapsible-content';
		var IU_COLLAPSIBLE_HEADER_ITEM_CLASS = '.iu-collapsible-header-item';

		//data name
		var IU_COLLAPSIBLE_DATA_ANIMATION = 'iu-show-animation';
		var IU_COLLAPSIBLE_DATA_DURATION = 'iu-show-duration';
		var IU_COLLAPSIBLE_DATA_METHOD = 'iu-event-method';

		var Collapsible = function () {
			function Collapsible(element) {
				_classCallCheck(this, Collapsible);

				this.$element = IUEditor.$(element);
				this.$header = IUEditor.$(element).children().filter(IU_COLLAPSIBLE_HEADER_CLASS);
				this.$content = IUEditor.$(element).children().filter(IU_COLLAPSIBLE_CONTENT_CLASS);
				var headerItems = this.$header.children().filter(IU_COLLAPSIBLE_HEADER_ITEM_CLASS);
				this.$defaultHeader = IUEditor.$(headerItems[0]);

				//check header
				if (headerItems.length > 1) {
					this.$activeHeader = IUEditor.$(headerItems[1]);
					this.hasTwoHeader = true;
				} else {
					this.hasTwoHeader = false;
				}

				//attribute
				this.animation = IUEditor.$(element).data(IU_COLLAPSIBLE_DATA_ANIMATION);
				this.duration = parseFloat($(element).data(IU_COLLAPSIBLE_DATA_DURATION)) * 1000;
				this.state = false; //collapsible open state state (collapsed - false)
				this.isShowing = false;
				this.isClosing = false;
				this.eventType = this.$element.data(IU_COLLAPSIBLE_DATA_METHOD);

				// user callback
				this.callbackShow = null;
				this.callbackClose = null;
			}

			Collapsible.prototype.init = function init() {
				var self = this;

				//binding
				//mousehover binding
				if (self.eventType == 'mouseon') {
					var isMobile = window.mobileAndTabletcheck();
					if (isMobile) {
						self.$element.on({
							touchstart: function touchstart() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle(true);
							},
							touchcancel: function touchcancel() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							},
							touchend: function touchend() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							}
						});
					} else {
						self.$element.on({
							mouseenter: function mouseenter() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle(true);
							},
							mouseleave: function mouseleave() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							}
						});
					}
				}
				//click binding
				else {
						self.$header.on({
							click: function click() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle();
							}
						});
					}
			};

			Collapsible.prototype.toggle = function toggle(state) {
				var self = this;

				if (typeof state == 'undefined' || state == null) {
					state = !self.state;
				}

				if (self.hasTwoHeader) {
					if (state) {
						self.$defaultHeader.css('display', 'none');
						self.$activeHeader.css('display', 'block');
					} else {
						self.$defaultHeader.css('display', 'block');
						self.$activeHeader.css('display', 'none');
					}
				}
				var callbackFn = void 0;

				// show content
				if (state) {
					self.isShowing = true;
					callbackFn = function callbackFn() {
						self.isShowing = false;
						// user callback 
						var callback = self.callbackShow;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					};
				}
				// close content 
				else {
						self.isClosing = true;
						callbackFn = function callbackFn() {
							self.isClosing = false;
							// user callback
							var callback = self.callbackClose;
							if (callback != null && typeof callback === "function") {
								callback();
							}
						};
					}
				self.$content.velocityToggle(state, self.animation, self.duration, {}, callbackFn);
				self.state = state;
			};

			return Collapsible;
		}();

		// COLLAPSIBLE PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var collapsible = $this.data(IU_WIDGET.COLLAPSIBLE);
				if (!collapsible) {
					collapsible = new Collapsible(this);
					$this.data(IU_WIDGET.COLLAPSIBLE, collapsible);
					collapsible.init();
				}
			});
		};

		IUEditor.$.fn.collapsible = plugin;

		// COLLAPSIBLE READY
		$(document).ready(function () {
			IUEditor.$('.iu-collapsible').collapsible();
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : PGFileUpload 
  * Needs plugin : jQuery, velocity
  */

		'use strict';

		var PG_FILE_UPLOAD_INNERBUTTON_CLASS_NAME = 'iux-pg-file-upload-innerbutton';

		var activateFileUpload = function activateFileUpload() {

			return this.each(function () {
				var $element = IUEditor.$(this);
				var checkFileUpload = $element.hasClass(PG_FILE_UPLOAD_INNERBUTTON_CLASS_NAME);
				var isSet = $element.data('iu.pgFileUpload');

				if (checkFileUpload && !isSet) {
					//set activated flag
					$element.data('iu.pgFileUpload', true);
					$element.change(function () {
						var filename = '<p>' + $element.val().replace(/^.*[\\\/]/, '') + '</p>';
						IUEditor.$($element.parent().parent().children()[1]).html(filename);
					});
				}
			});
		};

		IUEditor.$.fn.activateFileUpload = activateFileUpload;
		$(document).ready(function () {
			IUEditor.$('.' + PG_FILE_UPLOAD_INNERBUTTON_CLASS_NAME).activateFileUpload();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUFlipSwitch 
  * Needs plugin : jQuery, velocity
  */

		'use strict';

		var Flipswitch = function () {
			function Flipswitch(element) {
				_classCallCheck(this, Flipswitch);

				this.$element = IUEditor.$(element);

				//TODO : 議곗젅
				this.$input = IUEditor.$($(element).children()[0]);
				this.$wrapper = IUEditor.$($(element).children()[1]);
				this.$button = IUEditor.$($(element).children()[2]);

				this.checked = this.$input[0].checked;
				this.duration = 300;

				var ieVersion = window.getInternetExplorerVersion();
				this.xTag = ieVersion > 0 && ieVersion < 9 ? 'margin-left' : 'translateX';
			}

			Flipswitch.prototype.init = function init() {
				//set initial state
				this.toggle(this.checked, 0);

				//set intialstate
				this.$element.css('visibility', '');

				var self = this;
				this.$element.on({
					click: function click() {
						self.toggle();
					}
				});
			};

			Flipswitch.prototype.toggle = function toggle(state, duration) {
				var self = this;

				//velocity check
				if (self.$element.children().hasClass('velocity-animating')) {
					//wait until former animation
					return;
				}
				if (duration == undefined) {
					duration = self.duration;
				}

				if (state == undefined) {
					state = !self.checked;
				}

				var $wrapper = self.$wrapper;
				var width = self.$element.width();
				var buttonWidth = self.$button.outerWidth();

				if (state) {
					//set intial translate (natural move)
					var buttonLeft = self.$button.position().left;
					var wrapperInitialX = -1 * width + buttonLeft + buttonWidth;
					IUEditor.$.Velocity.hook($wrapper, self.xTag, wrapperInitialX + 'px');

					//set animation
					var animationCSS = self.xTag == 'translateX' ? { 'translateX': '0px' } : { 'margin-left': '0px' };
					$wrapper.velocity(animationCSS, {
						duration: duration,
						complete: function complete() {
							self.$input[0].checked = true;
							self.checked = true;
						}
					});
					var buttonX = width - buttonLeft * 2 - buttonWidth;
					var buttonCSS = self.xTag == 'translateX' ? { 'translateX': buttonX + 'px' } : { 'margin-left': buttonX + 'px' };
					self.$button.velocity(buttonCSS, {
						duration: duration
					});
				} else {
					//set intial translate (natural move)
					var _wrapperInitialX = -1 * buttonWidth;
					IUEditor.$.Velocity.hook($wrapper, self.xTag, _wrapperInitialX + 'px');

					//set animation
					var moveX = width * -1;
					var animationCSS = self.xTag == 'translateX' ? { 'translateX': moveX + 'px' } : { 'margin-left': moveX + 'px' };
					$wrapper.velocity(animationCSS, {
						duration: duration,
						complete: function complete() {
							self.$input[0].checked = false;
							self.checked = false;
						}
					});
					var buttonCSS = self.xTag == 'translateX' ? { 'translateX': '0px' } : { 'margin-left': '0px' };
					self.$button.velocity(buttonCSS, {
						duration: duration
					});
				}
			};

			return Flipswitch;
		}();

		// FLIP SWITCH PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var flipswitch = $this.data(IU_WIDGET.FLIPSWITCH);
				if (!flipswitch) {
					flipswitch = new Flipswitch(this);
					$this.data(IU_WIDGET.FLIPSWITCH, flipswitch);
					flipswitch.init();
				}
			});
		};

		IUEditor.$.fn.flipswitch = plugin;

		//FLIP SWITCH READY
		$(document).ready(function () {
			IUEditor.$('.iu-pg-flip-switch').flipswitch();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($, jQuery) {
		'use strict';

		var IU_MAP_DATA_LATITUDE = 'iu-map-latitude';
		var IU_MAP_DATA_LONGITUDE = 'iu-map-longitude';
		var IU_MAP_DATA_ZOOM_LEVEL = 'iu-map-zoom-level';
		var IU_MAP_DATA_ZOOM = 'iu-map-zoom';
		var IU_MAP_DATA_STREET_CONTROL = 'iu-map-street';
		var IU_MAP_DATA_THEME = 'iu-map-theme';
		var IU_MAP_DATA_ICON = 'iu-map-icon';
		var IU_MAP_DATA_MARKER_PATH = 'iu-map-marker-path';
		var IU_MAP_DATA_MAP_TITLE = 'iu-map-title';

		//gogole map prototype

		var GoogleMap = function () {
			function GoogleMap(element) {
				_classCallCheck(this, GoogleMap);

				this.$element = IUEditor.$(element);
				this.latitude = parseFloat($(element).data(IU_MAP_DATA_LATITUDE));
				this.longitude = parseFloat($(element).data(IU_MAP_DATA_LONGITUDE));
				this.zoomLevel = IUEditor.$(element).data(IU_MAP_DATA_ZOOM_LEVEL);
				this.zoomControl = IUEditor.$(element).data(IU_MAP_DATA_ZOOM);
				this.streetControl = IUEditor.$(element).data(IU_MAP_DATA_STREET_CONTROL);
				this.map = null;
			}

			GoogleMap.prototype.init = function init() {
				var self = this;

				//style
				var styleIndex = parseInt(self.$element.data(IU_MAP_DATA_THEME));
				var style = void 0;
				if (styleIndex > 0) {
					style = self.getStyle(styleIndex - 1);
				}

				//option
				var option = {
					center: new google.maps.LatLng(self.latitude, self.longitude),
					zoom: self.zoomLevel,
					zoomControl: self.zoomControl,
					mapTypeControl: false,
					streetViewControl: self.streetControl,
					styles: style
				};

				//create map
				var map = new google.maps.Map(self.$element[0], option);

				//add marker icon
				if (self.$element.data(IU_MAP_DATA_ICON)) {
					(function () {
						var iconImagePath = self.$element.data(IU_MAP_DATA_MARKER_PATH);
						var marker = void 0;
						if (iconImagePath != undefined) {
							marker = new google.maps.Marker({
								map: map,
								position: map.getCenter(),
								icon: iconImagePath
							});
						} else {
							marker = new google.maps.Marker({
								map: map,
								position: map.getCenter()
							});
						}

						//click infomation
						var title = self.$element.data(IU_MAP_DATA_MAP_TITLE);
						if (title != undefined) {
							(function () {
								var infoWindow = new google.maps.InfoWindow();
								infoWindow.setContent('<p>' + title + '</p>');
								google.maps.event.addListener(marker, 'click', function () {
									infoWindow.open(map, marker);
								});
							})();
						}
					})();
				}

				//add event listner : (resize)
				google.maps.event.addListener(window, "resize", function () {
					var center = new google.maps.LatLng(self.latitude, self.longitude);
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
				});

				self.map = map;
			};

			GoogleMap.prototype.resize = function resize() {
				var center = new google.maps.LatLng(this.latitude, this.longitude);
				google.mapsgoogle.maps.event.trigger(this.map, "resize");
				map.setCenter(center);
			};

			GoogleMap.prototype.getStyle = function getStyle(index) {
				var themeList = __webpack_require__(17);
				return themeList[index];
			};

			return GoogleMap;
		}();

		//GOOGLE MAP PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				// if googlemap js was loaded, window.google is not undefined
				if (typeof window.google == 'undefined') {
					return;
				}

				var $this = IUEditor.$(this);
				var googlemap = $this.data(IU_WIDGET.GOOGLEMAP);
				if (!googlemap) {
					googlemap = new GoogleMap(this);
					$this.data(IU_WIDGET.GOOGLEMAP, googlemap);
					googlemap.init();
				}
			});
		};

		IUEditor.$.fn.googlemap = plugin;

		/*
   API瑜� �숈쟻�쇰줈 濡쒕뱶�섎뒗 �꾩젽� API媛 濡쒕뱶 �섍린 �꾩뿉 init�� �몄텧�섎뒗 寃쎌슦媛 �덈떎. (React泥섎읆 init�� �곕줈 �몄텧�� ��)
   洹몃윺 寃쎌슦�먮뒗 array�� object瑜� ��ν빐�볤퀬, API媛 濡쒕뱶 �� �꾩뿉 callback�먯꽌 init�� �ㅼ떆 �몄텧�쒕떎.
   */
		// deferred google map
		var deferredGoogleMaps = [];
		var isInsertedGoogleMapJS = false;

		function initDeferredGoogleMaps() {
			if (deferredGoogleMaps) {
				for (var i = 0; i < deferredGoogleMaps.length; i++) {
					deferredGoogleMaps[i].googlemap();
				}
				deferredGoogleMaps = undefined;
			}
		}

		var IU_MAP_APIKEY = 'iu-map-apikey';

		// googlemap script defult url. script瑜� �쎌엯�� ��, api key媛 �덉쑝硫� default url�� key瑜� 遺숈뿬�� script瑜� �쎌엯�쒕떎.
		var GOOGLEMAP_DEFAULT_URL = '//maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=true&callback=onLoadGoogleMapAPI';
		IUEditor.initGoogleMapInElement = function (element) {
			// check jquery object
			var $element = void 0;
			if (element instanceof jQuery) {
				$element = element;
			} else {
				$element = IUEditor.$(element);
			}

			var $iu_googlemap = $element.find('.iu-googlemap');
			if ($iu_googlemap.length <= 0) {
				return;
			}

			// callback function
			var initGoogleMap = function initGoogleMap() {
				$iu_googlemap.googlemap();
			};

			// insert <script> for googlemap js 
			if (typeof window.google == 'undefined' && isInsertedGoogleMapJS == false) {
				isInsertedGoogleMapJS = true;

				// googlemap object�먯꽌 api key瑜� 媛�몄삩��. 紐⑤뱺 googlemap object�� �묎컳� api key瑜� 媛吏湲� �뚮Ц�� 泥ル쾲吏� object�먯꽌 媛�몄삩��.
				var googleMapAPIKey = $($iu_googlemap[0]).data(IU_MAP_APIKEY);

				// script�� �쎌엯�� google map url
				var googleScriptUrl = void 0;
				if (googleMapAPIKey) {
					// api key媛 �덉쑝硫� default url�� key瑜� 遺숈씤��.
					googleScriptUrl = GOOGLEMAP_DEFAULT_URL + "&key=" + googleMapAPIKey;
				} else {
					// api key媛 �놁쑝硫� default url�� 洹몃�濡� �ъ슜�쒕떎.
					googleScriptUrl = GOOGLEMAP_DEFAULT_URL;
				}
				var s = document.createElement('script');
				s.setAttribute('src', googleScriptUrl);
				document.getElementsByTagName('head')[0].appendChild(s);

				window.onLoadGoogleMapAPI = function () {
					initGoogleMap();
					initDeferredGoogleMaps();
				};
			} else if (typeof window.google == 'undefined' && isInsertedGoogleMapJS) {
				/* 
        API媛 �꾩쭅 濡쒕뱶�섏� �딆븯�쇰㈃ initialize瑜� 蹂대쪟�섍퀬 array�� ��ν븳 ��, 
        API媛 濡쒕뱶 �� �� callback�먯꽌 蹂대쪟�� object瑜� �ㅼ떆 init�쒕떎.
    */
				deferredGoogleMaps.push($iu_googlemap);
			} else {
				initGoogleMap();
			}
		};

		$(document).ready(function () {
			IUEditor.initGoogleMapInElement($('body'));
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4), __webpack_require__(4));

	/***/
},
/* 17 */
/***/function (module, exports) {

	module.exports = [[{
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#acbcc9"
		}]
	}, {
		"featureType": "landscape",
		"stylers": [{
			"color": "#f2e5d4"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [{
			"color": "#c5c6c6"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#e4d7c6"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#fbfaf7"
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [{
			"color": "#c5dac6"
		}]
	}, {
		"featureType": "administrative",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 33
		}]
	}, {
		"featureType": "road"
	}, {
		"featureType": "poi.park",
		"elementType": "labels",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 20
		}]
	}, {}, {
		"featureType": "road",
		"stylers": [{
			"lightness": 20
		}]
	}], [{
		"featureType": "landscape",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 65
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 51
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"saturation": -100
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 30
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "road.local",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 40
		}, {
			"visibility": "on"
		}]
	}, {
		"featureType": "transit",
		"stylers": [{
			"saturation": -100
		}, {
			"visibility": "simplified"
		}]
	}, {
		"featureType": "administrative.province",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "water",
		"elementType": "labels",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": -25
		}, {
			"saturation": -100
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"hue": "#ffff00"
		}, {
			"lightness": -25
		}, {
			"saturation": -97
		}]
	}], [{
		"featureType": "water",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#b5cbe4"
		}]
	}, {
		"featureType": "landscape",
		"stylers": [{
			"color": "#efefef"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [{
			"color": "#83a5b0"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#bdcdd3"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#ffffff"
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [{
			"color": "#e3eed3"
		}]
	}, {
		"featureType": "administrative",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 33
		}]
	}, {
		"featureType": "road"
	}, {
		"featureType": "poi.park",
		"elementType": "labels",
		"stylers": [{
			"visibility": "on"
		}, {
			"lightness": 20
		}]
	}, {}, {
		"featureType": "road",
		"stylers": [{
			"lightness": 20
		}]
	}], [{
		"featureType": "landscape",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#bbd5c5"
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#808080"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#fcf9a2"
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#bbd5c5"
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#808080"
		}]
	}], [{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"color": "#e9e9e9"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#f5f5f5"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#ffffff"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#ffffff"
		}, {
			"lightness": 29
		}, {
			"weight": 0.2
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#ffffff"
		}, {
			"lightness": 18
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#ffffff"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#f5f5f5"
		}, {
			"lightness": 21
		}]
	}, {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [{
			"color": "#dedede"
		}, {
			"lightness": 21
		}]
	}, {
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#ffffff"
		}, {
			"lightness": 16
		}]
	}, {
		"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": 36
		}, {
			"color": "#333333"
		}, {
			"lightness": 40
		}]
	}, {
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [{
			"color": "#f2f2f2"
		}, {
			"lightness": 19
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#fefefe"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#fefefe"
		}, {
			"lightness": 17
		}, {
			"weight": 1.2
		}]
	}], [{
		"featureType": "all",
		"elementType": "labels.text.fill",
		"stylers": [{
			"saturation": 36
		}, {
			"color": "#000000"
		}, {
			"lightness": 40
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "on"
		}, {
			"color": "#000000"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "all",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}, {
			"weight": 1.2
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 20
		}]
	}, {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 21
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 29
		}, {
			"weight": 0.2
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 18
		}]
	}, {
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 16
		}]
	}, {
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 19
		}]
	}, {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
			"color": "#000000"
		}, {
			"lightness": 17
		}]
	}], [{
		"featureType": "all",
		"stylers": [{
			"saturation": 0
		}, {
			"hue": "#e7ecf0"
		}]
	}, {
		"featureType": "road",
		"stylers": [{
			"saturation": -70
		}]
	}, {
		"featureType": "transit",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"visibility": "simplified"
		}, {
			"saturation": -60
		}]
	}], [{
		"elementType": "geometry",
		"stylers": [{
			"hue": "#ff4400"
		}, {
			"saturation": -68
		}, {
			"lightness": -4
		}, {
			"gamma": 0.72
		}]
	}, {
		"featureType": "road",
		"elementType": "labels.icon"
	}, {
		"featureType": "landscape.man_made",
		"elementType": "geometry",
		"stylers": [{
			"hue": "#0077ff"
		}, {
			"gamma": 3.1
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"hue": "#00ccff"
		}, {
			"gamma": 0.44
		}, {
			"saturation": -33
		}]
	}, {
		"featureType": "poi.park",
		"stylers": [{
			"hue": "#44ff00"
		}, {
			"saturation": -23
		}]
	}, {
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [{
			"hue": "#007fff"
		}, {
			"gamma": 0.77
		}, {
			"saturation": 65
		}, {
			"lightness": 99
		}]
	}, {
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"gamma": 0.11
		}, {
			"weight": 5.6
		}, {
			"saturation": 99
		}, {
			"hue": "#0091ff"
		}, {
			"lightness": -86
		}]
	}, {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [{
			"lightness": -48
		}, {
			"hue": "#ff5e00"
		}, {
			"gamma": 1.2
		}, {
			"saturation": -23
		}]
	}, {
		"featureType": "transit",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"saturation": -64
		}, {
			"hue": "#ff9100"
		}, {
			"lightness": 16
		}, {
			"gamma": 0.47
		}, {
			"weight": 2.7
		}]
	}], [{
		"featureType": "landscape",
		"stylers": [{
			"hue": "#FFBB00"
		}, {
			"saturation": 43.400000000000006
		}, {
			"lightness": 37.599999999999994
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.highway",
		"stylers": [{
			"hue": "#FFC200"
		}, {
			"saturation": -61.8
		}, {
			"lightness": 45.599999999999994
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.arterial",
		"stylers": [{
			"hue": "#FF0300"
		}, {
			"saturation": -100
		}, {
			"lightness": 51.19999999999999
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "road.local",
		"stylers": [{
			"hue": "#FF0300"
		}, {
			"saturation": -100
		}, {
			"lightness": 52
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "water",
		"stylers": [{
			"hue": "#0078FF"
		}, {
			"saturation": -13.200000000000003
		}, {
			"lightness": 2.4000000000000057
		}, {
			"gamma": 1
		}]
	}, {
		"featureType": "poi",
		"stylers": [{
			"hue": "#00FF6A"
		}, {
			"saturation": -1.0989010989011234
		}, {
			"lightness": 11.200000000000017
		}, {
			"gamma": 1
		}]
	}]];

	/***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/**
  * IUEditor : IUMovie
  */
		'use strict';

		var Movie = function () {
			function Movie(element) {
				_classCallCheck(this, Movie);

				this.$element = IUEditor.$(element);
			}

			Movie.prototype.play = function play() {
				this.$element[0].play();
			};

			Movie.prototype.pause = function pause() {
				this.$element[0].pause();
			};

			Movie.prototype.autoplay = function autoplay() {
				var self = this;
				if (self.$element.isElementInViewport()) {
					self.play();
				} else {
					self.pause();
				}
			};

			return Movie;
		}();

		// CATCH SCROLL EVENT


		var hasMovie = false;

		// MOVIE PLUGIN
		var plugin = function plugin() {
			return this.each(function () {
				// focus autoplay留� handle
				var $this = IUEditor.$(this);
				var movie = $this.data(IU_WIDGET.MOVIE);
				if (!movie) {
					movie = new Movie(this);
					$this.data(IU_WIDGET.MOVIE, movie);
					hasMovie = true;
				}

				//ready check 
				movie.autoplay();
			});
		};

		IUEditor.$.fn.movie = plugin;

		// Movie READY
		$(document).ready(function () {
			IUEditor.$('.iu-movie[data-iu-movie-focus-autoplay]').movie();
		});

		$(window).scroll(function () {
			if (hasMovie) {
				var $elements = IUEditor.$('.iu-movie[data-iu-movie-focus-autoplay]');

				if ($elements.length > 0) {
					$elements.each(function () {
						var $movie = IUEditor.$(this).data(IU_WIDGET.MOVIE);
						if ($movie) {
							$movie.autoplay();
						}
					});
				}
			}
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($, jQuery) {
		/*
  * IUEditor : IUPanel 
  * Needs plugin : jQuery, velocity, plugin/jquery.iu
  */

		'use strict';

		//SET CONSTANT STRING
		//id

		var IU_PANEL_DIM_ID = '#iux-panel-dimcolor';

		//class
		var IU_PAGE_CLASS = '.iu-page';
		var IU_CLOSE_BUTTON_CLASS = '.iux-panel-close-button';
		var IU_FIXED_SIZE_CLASS_NAME = 'iux-fixed-one-size';

		//data
		var IU_PANEL_DATA_DIRECTION = 'iu-panel-direction';
		var IU_PANEL_DATA_ANIMATION = 'iu-show-animation';
		var IU_PANEL_DATA_DURATION = 'iu-show-duration';

		var IU_PANEL_DATA_EXTERN_NAME = 'data-iu-panel-extern-closed';

		//document's singleton element
		var $dimElement = void 0;
		var $pageElement = void 0;
		var oldScrollTop = void 0;

		var disableScroll = function disableScroll() {
			oldScrollTop = IUEditor.$(document).scrollTop();
			window.requestAnimationFrame(function () {
				$pageElement.css('margin-top', -oldScrollTop + 'px');
				$pageElement.addClass(IU_FIXED_SIZE_CLASS_NAME);
			});
		};

		var enableScroll = function enableScroll() {

			$pageElement.css({
				'margin-top': '',
				'transform': ''
			});

			$pageElement.removeClass(IU_FIXED_SIZE_CLASS_NAME);
			IUEditor.$(document).scrollTop(oldScrollTop);
		};

		//PANEL PROTOTYPE

		var Panel = function () {
			function Panel(element) {
				_classCallCheck(this, Panel);

				this.$element = IUEditor.$(element);
				this.direction = parseInt($(element).data(IU_PANEL_DATA_DIRECTION)); //0 : left, 1: right //TODO : 
				this.animation = IUEditor.$(element).data(IU_PANEL_DATA_ANIMATION);
				this.duration = parseFloat($(element).data(IU_PANEL_DATA_DURATION)) * 1000;
				this.isAnimating = false;
				this.dimClass = element.id + '-dimcolor';
				this.state = false; //true - shown, false - closed
				this.isExternalClosed = element.hasAttribute(IU_PANEL_DATA_EXTERN_NAME);
				// callback
				this.callbackClose = null;
				this.callbackShow = null;
			}

			Panel.prototype.init = function init() {
				var self = this;
				var $closeButton = this.$element.children().filter(IU_CLOSE_BUTTON_CLASS);
				$closeButton.on({
					click: function click() {
						self.close();
					}
				});
			};

			Panel.prototype.close = function close() {
				var self = this;

				//ignore animate state
				if (self.isAnimating) {
					return;
				}
				//ignore off state
				if (!self.state) {
					return;
				}
				self.isAnimating = true;

				var animation = self.animation;
				var css = {
					'translateX': '0px'
				};

				var closeCallbackFn = function closeCallbackFn() {
					self.isAnimating = false;
					self.state = false;
					window.requestAnimationFrame(function () {

						//update page
						enableScroll();

						//update dim element
						IUEditor.$.Velocity.hook($dimElement[0], 'display', 'none');
						$dimElement.removeClass(self.dimClass);

						// user callback
						var callback = self.callbackClose;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					});
				};

				var option = {
					duration: self.duration,
					complete: closeCallbackFn
				};

				if (animation == 'overlay') {
					//panel
					self.$element.velocity(css, option);
				} else if (animation == 'reveal') {
					//page
					$pageElement.css('z-index', '');
					$pageElement.velocity(css, option);
				} else if (animation == 'push') {
					//panel
					self.$element.velocity(css, option);

					//page
					$pageElement.velocity(css, option);
				}

				//update dim element
				$dimElement.velocity({
					opacity: 0
				}, {
					duration: this.duration
				});
			};

			Panel.prototype.show = function show() {
				var self = this;

				//ignore animate state
				if (self.isAnimating) {
					return;
				}
				//ignore on state
				if (self.state) {
					return;
				}

				self.isAnimating = true;
				disableScroll();

				var width = self.$element.outerWidth();
				var left = self.direction == 0 ? width : -1 * width;
				var animation = self.animation;

				var option = {};
				var css = {};

				css['translateX'] = left + 'px';

				option['complete'] = function () {
					self.isAnimating = false;
					self.state = true;

					// user callback
					var callback = self.callbackShow;
					if (callback != null && typeof callback === "function") {
						callback();
					}
				};

				if (animation == 'overlay') {
					//panel
					self.$element.velocity(css, option);
				} else if (animation == 'reveal') {
					//page
					//change option complete
					option['complete'] = function () {
						self.isAnimating = false;
						self.state = true;
						var panelZIndex = parseInt(self.$element.css('z-index'));
						$pageElement.css('z-index', panelZIndex - 1);
					};
					$pageElement.velocity(css, option);
				} else if (animation == 'push') {
					//TODO: page css for panel 
					$pageElement.css({
						'-webkit-backface-visibility': 'hidden',
						'-moz-backface-visibility': 'hidden',
						'backface-visibility': 'hidden'
					});

					//panel
					self.$element.velocity(css, option);
					//page
					$pageElement.velocity(css, option);
				}

				//check dim color action
				$dimElement.css({
					display: 'block',
					opacity: 0
				});
				$dimElement.addClass(self.dimClass);
				$dimElement.velocity({
					opacity: 1
				}, {
					duration: self.duration
				});
			};

			Panel.prototype.toggle = function toggle() {
				if (this.state) {
					this.close();
				} else {
					this.show();
				}
			};

			return Panel;
		}();

		// PANEL PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var panel = $this.data(IU_WIDGET.PANEL);
				if (!panel) {
					panel = new Panel(this);
					$this.data(IU_WIDGET.PANEL, panel);
					panel.init();
				}
			});
		};

		IUEditor.$.fn.panel = plugin;

		// PANEL READY

		window.IUEditor.initPanelInElement = function (element) {
			// check jquery object
			var $element = void 0;
			if (element instanceof jQuery) {
				$element = element;
			} else {
				$element = IUEditor.$(element);
			}

			$dimElement = $element.find(IU_PANEL_DIM_ID);
			$pageElement = $element.find(IU_PAGE_CLASS);

			//initialize panel
			$element.find('.iu-panel').panel();

			//set panel button delegation
			$element.find('.iux-panel-button').on({
				click: function click() {
					var panelId = IUEditor.$(this).data('iu-panel-id');
					var $panelEl = IUEditor.$('#' + panelId);
					var panel = $panelEl.data(IU_WIDGET.PANEL);
					if (panel) {
						panel.toggle();
					}
				}
			});

			//initialize dim color delegation
			$dimElement.on({
				click: function click() {
					var $elements = IUEditor.$('.iu-panel');
					$elements.each(function () {
						var panel = IUEditor.$(this).data(IU_WIDGET.PANEL);
						if (panel.state && panel.isExternalClosed) {
							panel.close();
						}
					});
				}
			});
		};

		// PANEL READY
		$(document).ready(function () {
			window.IUEditor.initPanelInElement($("body"));
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4), __webpack_require__(4));

	/***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($, jQuery) {
		/*
  * IUEditor : IUPopup 
  * Needs plugin : jQuery, velocity, plugin/jquery.iu
  */

		'use strict';

		//SET CONSTANT STRING
		//id

		var IU_POPUP_DIM_ID = '#iux-popup-dimcolor';

		//class
		var IU_PAGE_CLASS = '.iu-page';
		var IU_POPUP_CLASS = '.iu-popup';
		var IU_CLOSE_BUTTON_CLASS = '.iux-popup-close-button';
		var IU_FIXED_SIZE_CLASS_NAME = 'iux-fixed-one-size';

		//data
		var IU_POPUP_DATA_ANIMATION = 'iu-show-animation';
		var IU_POPUP_DATA_DURATION = 'iu-show-duration';

		var IU_POPUP_DATA_EXTERN_NAME = 'data-iu-popup-extern-closed';

		//singleton element in document
		var $dimElement = void 0;
		var $pageElement = void 0;

		var oldScrollTop = void 0;

		var disableScroll = function disableScroll() {
			oldScrollTop = IUEditor.$(document).scrollTop();
			window.requestAnimationFrame(function () {
				$pageElement.css('margin-top', -oldScrollTop + 'px');
				$pageElement.addClass(IU_FIXED_SIZE_CLASS_NAME);
			});
		};

		var enableScroll = function enableScroll() {
			$pageElement.css({
				'margin-top': '',
				'transform': ''
			});
			$pageElement.removeClass(IU_FIXED_SIZE_CLASS_NAME);
			window.scrollTo(0, oldScrollTop);
		};

		//POPUP PROTOTYPE

		var Popup = function () {
			function Popup(element) {
				_classCallCheck(this, Popup);

				this.$element = IUEditor.$(element);
				this.direction = IUEditor.$(element).data(IU_POPUP_DATA_ANIMATION) == 'top-down' ? 0 : 1; //0 : topdown , 1 : bottomup
				this.duration = parseFloat($(element).data(IU_POPUP_DATA_DURATION)) * 1000;
				this.isAnimating = false;
				this.dimClass = element.id + '-dimcolor';
				this.state = false; //true - shown, false - closed
				this.isExternalClosed = element.hasAttribute(IU_POPUP_DATA_EXTERN_NAME);

				// callback
				this.callbackShow = null;
				this.callbackClose = null;
			}

			Popup.prototype.init = function init() {
				//set initial position
				IUEditor.$.Velocity.hook(this.$element[0], 'translateX', '-50%');
				IUEditor.$.Velocity.hook(this.$element[0], 'translateY', this.hiddenY() + 'px');

				var self = this;

				//delegate close button
				var $closeButton = this.$element.children().filter(IU_CLOSE_BUTTON_CLASS);
				$closeButton.on({
					click: function click() {
						self.close();
					}
				});
			};

			Popup.prototype.hiddenY = function hiddenY() {
				//In ios, window.outerHeight == 0
				var wHeight = window.outerHeight == 0 ? window.innerHeight : window.outerHeight;

				// mobile issue : (address toolbar - 50px�� �ъ쑀遺꾩쓣 ��)
				var top = this.direction == 0 ? (wHeight / 2 + this.$element[0].offsetHeight + 50) * -1 : wHeight / 2 + 50;
				return top;
			};

			Popup.prototype.reset = function reset() {
				var self = this;
				var translateY = void 0;
				if (self.state) {
					translateY = '-50%';
				} else {
					translateY = self.hiddenY() + 'px';
				}

				IUEditor.$.Velocity.hook(self.$element[0], 'translateY', translateY);
			};

			Popup.prototype.checkHide = function checkHide() {
				// top-down�� 寃쎌슦 �� �④꺼吏� �곹깭媛 �덉쑝誘濡� �쒕쾲�� update�섎룄濡� �쒕떎. 
				var self = this;
				if (!self.state) {
					IUEditor.$.Velocity.hook(self.$element[0], 'translateY', self.hiddenY() + 'px');
				}
			};

			Popup.prototype.close = function close() {
				//ignore animate state
				if (this.isAnimating) {
					return;
				}
				//ignore off state
				if (!this.state) {
					return;
				}

				this.isAnimating = true;

				var self = this;
				var top = this.hiddenY();
				var css = {
					'translateY': top + 'px'
				};

				var closeCompleteFn = function closeCompleteFn() {
					self.state = false;
					self.isAnimating = false;
					window.requestAnimationFrame(function () {

						self.$element.css('visibility', 'hidden');

						//update page
						enableScroll();

						//dimelement
						IUEditor.$.Velocity.hook($dimElement[0], 'display', 'none');
						$dimElement.removeClass(self.dimClass);

						// user callback
						var callback = self.callbackClose;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					});
				};

				var option = {
					duration: this.duration,
					complete: closeCompleteFn
				};

				IUEditor.$.Velocity.hook(self.$element[0], 'translateY', -1 * this.$element[0].offsetHeight / 2 + 'px');
				this.$element.velocity(css, option);

				//update dim element
				$dimElement.velocity({
					opacity: 0
				}, {
					duration: this.duration
				});
			};

			Popup.prototype.show = function show() {
				var self = this;
				self.$element.css('visibility', 'visible');

				//ignore animate state
				if (self.isAnimating) {
					return;
				}
				//ignore on state
				if (self.state) {
					return;
				}

				self.isAnimating = true;
				disableScroll();

				var css = {};
				css['translateY'] = -1 * self.$element[0].offsetHeight / 2 + 'px';
				var option = {
					duration: self.duration,
					complete: function complete() {
						self.isAnimating = false;
						self.state = true;
						IUEditor.$.Velocity.hook(self.$element[0], 'translateY', '-50%');

						// user callback
						var callback = self.callbackShow;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					}
				};

				//popup
				self.$element.velocity(css, option);

				//check dim color action
				$dimElement.css({
					display: 'block',
					opacity: 0
				});
				$dimElement.addClass(self.dimClass);
				$dimElement.velocity({
					opacity: 1
				}, {
					duration: self.duration
				});
			};

			Popup.prototype.toggle = function toggle() {
				if (this.state) {
					this.close();
				} else {
					this.show();
				}
			};

			return Popup;
		}();

		// POPUP PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var popup = $this.data(IU_WIDGET.POPUP);
				if (!popup) {
					popup = new Popup(this);
					$this.data(IU_WIDGET.POPUP, popup);
					popup.init();
				}
			});
		};

		IUEditor.$.fn.popup = plugin;

		// window resize
		$(window).resize(function () {
			IUEditor.$(IU_POPUP_CLASS).each(function () {
				var popup = IUEditor.$(this).data(IU_WIDGET.POPUP);
				if (popup) {
					popup.reset();
				}
			});
		});

		// window load
		$(window).load(function () {
			IUEditor.$(IU_POPUP_CLASS).each(function () {
				var popup = IUEditor.$(this).data(IU_WIDGET.POPUP);
				if (popup) {
					popup.checkHide();
				}
			});
		});

		// POPUP READY
		window.IUEditor.initPopupInElement = function (element) {
			// check jquery object
			var $element = void 0;
			if (element instanceof jQuery) {
				$element = element;
			} else {
				$element = IUEditor.$(element);
			}

			$dimElement = $element.find(IU_POPUP_DIM_ID);
			$pageElement = $element.find(IU_PAGE_CLASS);

			$element.find(IU_POPUP_CLASS).popup();
			$element.find('.iux-popup-button').on({
				click: function click() {
					var popupId = IUEditor.$(this).data('iu-popup-id');
					var $popupEl = IUEditor.$('#' + popupId);
					var popup = $popupEl.data(IU_WIDGET.POPUP);
					if (popup) {
						popup.toggle();
					}
				}
			});

			$dimElement.on({
				click: function click() {
					var $popupEls = $element.find(IU_POPUP_CLASS);
					$popupEls.each(function () {
						var popup = IUEditor.$(this).data(IU_WIDGET.POPUP);
						if (popup.state && popup.isExternalClosed) {
							popup.close();
						}
					});
				}
			});
		};

		$(document).ready(function () {
			window.IUEditor.initPopupInElement($("body"));
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4), __webpack_require__(4));

	/***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IURangeSlider 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		var activeSlider = null;

		var Rangeslider = function () {
			function Rangeslider(element) {
				_classCallCheck(this, Rangeslider);

				//slide elements
				this.$element = IUEditor.$(element);

				//TODO : children�� �덈뱾�닿�硫� find��좎뿉 children/filter濡� 蹂寃�
				this.$slidebar = IUEditor.$(element).find('.iu-pg-range-slide-bar');
				this.$innerbar = this.$slidebar.find('.iux-pg-range-slidebar-innerbar');
				this.$startPoint = this.$innerbar.find('.iu-pg-range-slide-point-start');
				this.$endPoint = this.$innerbar.find('.iu-pg-range-slide-point-end');
				this.$startTextfield = IUEditor.$(element).find('.iu-pg-range-slide-text-field-start');
				this.$endTextField = IUEditor.$(element).find('.iu-pg-range-slide-text-field-end');

				//data
				this.max = parseInt($(element).data('iu-slide-max-value'));
				this.min = parseInt($(element).data('iu-slide-min-value'));
				this.startValue = parseInt($(element).data('iu-range-slide-default-start-value'));
				this.endValue = parseInt($(element).data('iu-range-slide-default-end-value'));
				this.size = this.max - this.min;

				//data for event
				this.eventInfo = {
					isTouching: false,
					touchStartX: null,
					isDragging: false,
					dragStartX: null,
					isStartPoint: false,
					isEndPoint: false
				};
			}

			Rangeslider.prototype.init = function init() {
				//set event delegate
				var self = this;

				//TODO : isMobile?�� 泥댄겕�댁빞 �섎굹? 洹몃깷 �ㅼ벐硫댁븞�섎뒗嫄닿�?
				var bindingOption = {
					touchstart: function touchstart(event) {
						self.touchStart(event);
						event.preventDefault();
					},
					touchmove: function touchmove(event) {
						self.touchMove(event);
						event.preventDefault();
					},
					touchend: function touchend(event) {
						self.touchEnd(event);
						event.preventDefault();
					},
					touchcancle: function touchcancle(event) {
						self.touchEnd(event);
						event.preventDefault();
					},
					mousedown: function mousedown(event) {
						self.mousedown(event);
						event.preventDefault();
					},
					mousemove: function mousemove(event) {
						self.mousemove(event);
						event.preventDefault();
					},
					mouseup: function mouseup(event) {
						self.mouseup(event);
						event.preventDefault();
					}
				};

				this.$slidebar.on(bindingOption);

				this.$startTextfield.on({
					keyup: function keyup(event) {
						self.keyEvent(event);
					}
				});
				this.$endTextField.on({
					keyup: function keyup(event) {
						self.keyEvent(event);
					}
				});
			};

			Rangeslider.prototype.keyEvent = function keyEvent(event) {
				var textfield = event.currentTarget;
				var inputValue = IUEditor.$(textfield).val();

				//start textfield
				if (textfield == this.$startTextfield[0]) {
					this.changeStartValue(inputValue);
					var renderOption = {
						renderWidth: true,
						renderLeft: true
					};
					this.renderInnerBar(renderOption);
				}
				//end textfield
				else {
						this.changeEndValue(inputValue);
						var renderOption = {
							renderWidth: true,
							renderLeft: false
						};
						this.renderInnerBar(renderOption);
					}
			};

			Rangeslider.prototype.mousedown = function mousedown(event) {

				var self = this;
				if (self.eventInfo.isDragging) {
					return;
				}

				var currentPageX = event.pageX;
				self.setPointPosition(event.target, currentPageX);

				// Is Point?
				if (self.eventInfo.isStartPoint || self.eventInfo.isEndPoint) {

					activeSlider = self;

					//set data
					self.eventInfo.isDragging = true;
					self.eventInfo.dragStartX = event.pageX;

					self.updateValueInPoints(currentPageX);
					self.render();
				}
			};

			Rangeslider.prototype.mousemove = function mousemove(event) {
				var self = this;

				if (!self.eventInfo.isDragging) {
					return;
				}

				var diff = event.pageX - self.eventInfo.dragStartX;

				//diff媛 2px蹂대떎 �대븣 ? min�� 2px濡� �≪쓬 (�뷀겕寃� �댁빞 �섎굹?)
				if (Math.abs(diff) > 2) {
					if (self.eventInfo.isStartPoint) {
						var inputValue = self.valueForPixel(diff) + self.startValue;
						self.changeStartValue(inputValue);
					} else if (self.eventInfo.isEndPoint) {
						var _inputValue = self.valueForPixel(diff) + self.endValue;
						self.changeEndValue(_inputValue);
					}

					self.render();
				}

				self.eventInfo.dragStartX = event.pageX;
			};

			Rangeslider.prototype.mouseup = function mouseup(event) {
				var self = this;

				if (self.eventInfo.isDragging) {
					self.eventInfo.isDragging = false;
					self.eventInfo.dragStartX = null;
					self.eventInfo.isStartPoint = false;
					self.eventInfo.isEndPoint = false;

					activeSlider = null;
				}
			};

			Rangeslider.prototype.touchStart = function touchStart(event) {
				var self = this;
				if (self.eventInfo.isTouching) {
					return;
				}

				var currentPageX = event.changedTouches[0].pageX;
				self.setPointPosition(event.target, currentPageX);

				// Is Point?
				if (self.eventInfo.isStartPoint || self.eventInfo.isEndPoint) {
					activeSlider = self;

					//set touch start info
					self.eventInfo.isTouching = true;
					self.eventInfo.touchStartX = currentPageX;

					self.updateValueInPoints(currentPageX);
					self.render();
				}
			};

			Rangeslider.prototype.touchMove = function touchMove(event) {
				var self = this;

				if (!self.eventInfo.isTouching) {
					return;
				}

				var currentX = event.changedTouches[0].pageX;
				var diff = currentX - self.eventInfo.touchStartX;
				//diff媛 2px蹂대떎 �대븣 ? min�� 2px濡� �≪쓬 (�뷀겕寃� �댁빞 �섎굹?)
				if (Math.abs(diff) > 2) {

					if (self.eventInfo.isStartPoint) {
						var inputValue = self.valueForPixel(diff) + self.startValue;
						self.changeStartValue(inputValue);
					} else if (self.eventInfo.isEndPoint) {
						var _inputValue2 = self.valueForPixel(diff) + self.endValue;
						self.changeEndValue(_inputValue2);
					}

					self.render();
				}

				self.eventInfo.touchStartX = currentX;
			};

			Rangeslider.prototype.touchEnd = function touchEnd(event) {
				var self = this;

				if (self.eventInfo.isTouching) {

					//reset touch event info
					self.eventInfo.isTouching = false;
					self.eventInfo.touchStartX = null;
					self.eventInfo.isStartPoint = false;
					self.eventInfo.isEndPoint = false;

					activeSlider = null;
				}
			};

			Rangeslider.prototype.updateValueInPoints = function updateValueInPoints(pageX) {
				var self = this;

				//update value
				var left = self.$slidebar.offset().left;

				var diff = pageX - left;
				var inputValue = self.valueForPixel(diff) + self.min;

				if (self.eventInfo.isStartPoint) {
					self.changeStartValue(inputValue);
				} else {
					self.changeEndValue(inputValue);
				}
			};

			/**
   @brief save event information (is a start or end point?)
   */


			Rangeslider.prototype.setPointPosition = function setPointPosition(target, pageX) {
				var self = this;

				if (self.$startPoint[0].contains(target)) {
					self.eventInfo.isStartPoint = true;
				} else if (self.$endPoint[0].contains(target)) {
					self.eventInfo.isEndPoint = true;
				}
				// slider bar 
				else if (self.$slidebar[0].contains(target)) {

						var left = self.$slidebar.offset().left;
						var diff = pageX - left;
						var inputValue = self.valueForPixel(diff) + self.min;

						//move start point 
						if (inputValue < self.startValue) {
							self.eventInfo.isStartPoint = true;
						}
						// move end point
						else if (inputValue > self.endValue) {
								self.eventInfo.isEndPoint = true;
							}
							// start 履쎌씠 �� 媛源뚯슦硫� 洹몄そ�쇰줈 蹂寃쏀븳��. 
							else if (Math.abs(inputValue - self.startValue) < Math.abs(inputValue - self.endValue)) {

									self.eventInfo.isStartPoint = true;
								}
								// end 履쎌씠 �� 媛源뚯� 
								else {
										self.eventInfo.isEndPoint = true;
									}
					}
			};

			Rangeslider.prototype.valueForPixel = function valueForPixel(pixel) {
				return Math.round(this.size * pixel / this.$slidebar.width());
			};

			Rangeslider.prototype.changeStartValue = function changeStartValue(value) {
				var self = this;

				if (value == self.startValue) {
					return;
				}

				var input = void 0;

				//check min, max
				if (value > self.max) {
					input = self.max;
				} else if (value < self.min) {
					input = self.min;
				} else {
					input = value;
				}

				//check endvalue
				if (input > self.endValue) {
					input = self.endValue;
				}

				self.startValue = input;
			};

			Rangeslider.prototype.changeEndValue = function changeEndValue(value) {
				var self = this;

				if (value == self.endValue) {
					return;
				}

				var input = void 0;

				//check min, max
				if (value > self.max) {
					input = self.max;
				} else if (value < self.min) {
					input = self.min;
				} else {
					input = value;
				}

				//check endvalue
				if (input < self.startValue) {
					input = self.startValue;
				}

				self.endValue = input;
			};

			Rangeslider.prototype.renderInnerBar = function renderInnerBar(renderOption) {
				if (typeof renderOption == 'undefined' || renderOption == null) {
					renderOption = {
						renderWidth: true,
						renderLeft: true
					};
				}
				var cssDict = {};
				if (renderOption.renderWidth) {
					var width = (this.endValue - this.startValue) / (this.max - this.min) * 100;
					cssDict['width'] = width + '%';
				}

				if (renderOption.renderLeft) {
					var left = (this.startValue - this.min) / (this.max - this.min) * 100;
					cssDict['left'] = left + '%';
				}

				this.$innerbar.css(cssDict);
			};

			Rangeslider.prototype.renderStartTextField = function renderStartTextField() {
				if (typeof this.startValue == 'undefined' || this.startValue == null) {
					return;
				}
				this.$startTextfield.val(this.startValue);
			};

			Rangeslider.prototype.renderEndTextField = function renderEndTextField() {
				if (typeof this.endValue == 'undefined' || this.endValue == null) {
					return;
				}
				this.$endTextField.val(this.endValue);
			};

			Rangeslider.prototype.render = function render() {
				var renderOption = {
					renderWidth: true,
					renderLeft: true
				};
				this.renderInnerBar(renderOption);
				this.renderStartTextField();
				this.renderEndTextField();
			};

			return Rangeslider;
		}();

		// DOCUMENT EVENT (END - MOUSEUP, TOUCHEND)


		$(document).on({
			mousemove: function mousemove(event) {
				if (activeSlider) {
					activeSlider.mousemove(event);
				}
			},
			mouseup: function mouseup(event) {
				if (activeSlider) {
					activeSlider.mouseup(event);
				}
			},
			touchmove: function touchmove(event) {
				if (activeSlider) {
					activeSlider.touchMove(event);
				}
			},
			touchend: function touchend(event) {
				if (activeSlider) {
					activeSlider.touchEnd(event);
				}
			},
			touchcancle: function touchcancle(event) {
				if (activeSlider) {
					activeSlider.touchEnd(event);
				}
			}
		});

		// RANGE SLIDE PLUGIN
		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var rangeslider = $this.data(IU_WIDGET.RANGE_SLIDER);
				if (!rangeslider) {
					rangeslider = new Rangeslider(this);
					$this.data(IU_WIDGET.RANGE_SLIDER, rangeslider);
					rangeslider.init();
				}
			});
		};

		IUEditor.$.fn.rangeslider = plugin;

		// SLIDE READY
		$(document).ready(function () {
			IUEditor.$('.iu-pg-range-slide').rangeslider();
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUSection with fullsize 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		// WINDOW EVENT

		var oldHeight = void 0;
		$(window).resize(function (event) {
			var height = window.innerHeight;
			if (oldHeight == undefined) {
				oldHeight = height;
			}

			if (oldHeight != height) {
				IUEditor.$('.iu-section[data-iu-full-section]').iufullsection();
				oldHeight = height;
			}
		});

		// SECTION PLUGIN
		IUEditor.$.fn.iufullsection = function () {
			var height = window.innerHeight;

			return this.each(function () {
				var self = this;
				window.requestAnimationFrame(function () {
					self.style.height = height + 'px';
				});
			});
		};

		// SECTION READY
		$(document).ready(function () {
			IUEditor.$('.iu-section[data-iu-full-section]').iufullsection();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUSlider 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		var activeSlider = null;

		var Slide = function () {
			function Slide(element) {
				_classCallCheck(this, Slide);

				//slide elements
				this.$element = IUEditor.$(element);
				this.$point = IUEditor.$(element).find('.iu-pg-slide-point');
				this.$textfield = IUEditor.$(element).find('.iu-pg-slide-text-field');
				this.$slidebar = IUEditor.$(element).find('.iu-pg-slide-bar');
				this.$innerbar = IUEditor.$(element).find('.iux-pg-slidebar-innerbar');

				//call back fn
				this.renderCallbackFn;

				//data
				this.max = parseInt($(element).data('iu-slide-max-value'));
				this.min = parseInt($(element).data('iu-slide-min-value'));
				this.size = this.max - this.min;
				this.value = parseInt($(element).data('iu-slide-default-value'));

				//data for event
				this.eventInfo = {
					isTouching: false,
					touchStartX: null,
					isDragging: false,
					dragStartX: null
				};
			}

			Slide.prototype.init = function init() {
				//set event delegate
				var self = this;

				//TODO : isMobile?�� 泥댄겕�댁빞 �섎굹? 洹몃깷 �ㅼ벐硫댁븞�섎뒗嫄닿�?
				var bindingOption = {
					touchstart: function touchstart(event) {
						self.touchStart(event);
						event.preventDefault();
					},
					touchmove: function touchmove(event) {
						self.touchMove(event);
						event.preventDefault();
					},
					touchend: function touchend(event) {
						self.touchEnd(event);
						event.preventDefault();
					},
					touchcancle: function touchcancle(event) {
						self.touchEnd(event);
						event.preventDefault();
					},
					mousedown: function mousedown(event) {
						self.mousedown(event);
						event.preventDefault();
					},
					mousemove: function mousemove(event) {
						self.mousemove(event);
						event.preventDefault();
					},
					mouseup: function mouseup(event) {
						self.mouseup(event);
						event.preventDefault();
					}
				};

				this.$slidebar.on(bindingOption);

				this.$textfield.on({
					keyup: function keyup(event) {
						self.keyEvent(event);
					}
				});
			};

			Slide.prototype.keyEvent = function keyEvent(event) {
				var inputValue = this.$textfield.val();
				this.setValue(inputValue);
				this.renderPoint();
			};

			Slide.prototype.mousedown = function mousedown(event) {
				if (this.eventInfo.isDragging) {
					return;
				}

				//set data
				this.eventInfo.isDragging = true;
				this.eventInfo.dragStartX = event.pageX;

				activeSlider = this;

				this.setValueAndRenderAtCurrentPosition(event.pageX);
			};

			Slide.prototype.mousemove = function mousemove(event) {
				if (!this.eventInfo.isDragging) {
					return;
				}

				var diff = event.pageX - this.eventInfo.dragStartX;

				//diff媛 2px蹂대떎 �대븣 ? min�� 2px濡� �≪쓬 (�뷀겕寃� �댁빞 �섎굹?)
				if (Math.abs(diff) > 2) {
					var inputValue = this.valueForPixel(diff) + this.value;
					this.setValueAndRender(inputValue);
				}

				this.eventInfo.dragStartX = event.pageX;
			};

			Slide.prototype.mouseup = function mouseup(event) {
				if (this.eventInfo.isDragging) {
					this.resetDraggingEventInfo();
				}
			};

			Slide.prototype.resetDraggingEventInfo = function resetDraggingEventInfo() {
				// reset
				this.eventInfo.isDragging = false;
				this.eventInfo.dragStartX = null;
				activeSlider = null;
			};

			Slide.prototype.touchStart = function touchStart(event) {
				if (this.eventInfo.isTouching) {
					return;
				}
				var currentX = event.changedTouches[0].pageX;

				//set touch start info
				this.eventInfo.isTouching = true;
				this.eventInfo.touchStartX = currentX;

				activeSlider = this;

				// set value 
				this.setValueAndRenderAtCurrentPosition(currentX);
			};

			Slide.prototype.touchMove = function touchMove(event) {
				if (!this.eventInfo.isTouching) {
					return;
				}

				var currentX = event.changedTouches[0].pageX;
				var diff = currentX - this.eventInfo.touchStartX;

				//diff媛 2px蹂대떎 �대븣 ? min�� 2px濡� �≪쓬 (�뷀겕寃� �댁빞 �섎굹?)
				if (Math.abs(diff) > 2) {
					var inputValue = this.valueForPixel(diff) + this.value;
					this.setValueAndRender(inputValue);
				}

				this.eventInfo.touchStartX = currentX;
			};

			Slide.prototype.touchEnd = function touchEnd(event) {
				if (this.eventInfo.isTouching) {
					this.resetTouchEventInfo();
				}
			};

			Slide.prototype.resetTouchEventInfo = function resetTouchEventInfo() {
				//reset touch event info
				this.eventInfo.isTouching = false;
				this.eventInfo.touchStartX = null;
				activeSlider = null;
			};

			Slide.prototype.valueForPixel = function valueForPixel(pixel) {
				return Math.round(this.size * pixel / this.$slidebar.width());
			};

			Slide.prototype.setValueAndRenderAtCurrentPosition = function setValueAndRenderAtCurrentPosition(pageX) {
				var diff = pageX - this.$innerbar.offset().left;
				var inputValue = this.valueForPixel(diff) + this.min;
				this.setValueAndRender(inputValue);
			};

			Slide.prototype.setValueAndRender = function setValueAndRender(value) {
				this.setValue(value);
				this.render();
			};

			Slide.prototype.setValue = function setValue(value) {
				if (value == this.value) {
					return;
				}

				var input = void 0;

				//check min, max
				if (value > this.max) {
					input = this.max;
				} else if (value < this.min) {
					input = this.min;
				} else {
					input = value;
				}

				this.value = input;
			};

			Slide.prototype.renderPoint = function renderPoint() {
				//set innerbar width
				var size = (this.value - this.min) / (this.max - this.min) * 100;
				this.$innerbar.css('width', size + '%');
			};

			Slide.prototype.renderTextField = function renderTextField() {
				//set text field
				if (typeof this.value == 'undefined' || this.value == null) {
					return;
				}
				this.$textfield.val(this.value);
			};

			Slide.prototype.render = function render() {
				this.renderPoint();
				this.renderTextField();

				if (this.renderCallbackFn) {
					this.renderCallbackFn.call(this);
				}
			};

			Slide.prototype.setRenderCallBackFn = function setRenderCallBackFn(callback) {
				if (IUEditor.$.isFunction(callback)) {
					this.renderCallbackFn = callback;
				}
			};

			return Slide;
		}();

		// DOCUMENT EVENT (END - MOUSEUP, TOUCHEND)


		$(document).on({
			mousemove: function mousemove(event) {
				if (activeSlider) {
					activeSlider.mousemove(event);
				}
			},
			mouseup: function mouseup(event) {
				if (activeSlider) {
					activeSlider.mouseup(event);
				}
			},
			touchmove: function touchmove(event) {
				if (activeSlider) {
					activeSlider.touchMove(event);
				}
			},
			touchend: function touchend(event) {
				if (activeSlider) {
					activeSlider.touchEnd(event);
				}
			},
			touchcancle: function touchcancle(event) {
				if (activeSlider) {
					activeSlider.touchEnd(event);
				}
			}
		});

		// SLIDE PLUGIN
		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var slide = $this.data(IU_WIDGET.SLIDER);
				if (!slide) {
					slide = new Slide(this);
					$this.data(IU_WIDGET.SLIDER, slide);
					slide.init();
				}
			});
		};

		IUEditor.$.fn.slide = plugin;

		// SLIDE READY
		$(document).ready(function () {
			IUEditor.$('.iu-pg-slide').slide();
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUTabView 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		var IU_TAB_HEADER_ITEM_CLASS = '.iu-tab-header-item';
		var IU_TAB_HEADER_ACTIVE_ITEM_CLASS = '.iu-tab-header-active-item';
		var IU_TAB_HEADER_DEFAULT_ITEM_CLASS = '.iu-tab-header-default-item';
		var IU_TAB_CONTENT_ITEM_CLASS = '.iu-tab-content-item';

		//simple tab
		var IU_SIMPLE_TAB_BUTTON_CLASS = '.iu-simple-tab-button';

		//general
		var IU_ACTIVE_CLASS_NAME = 'iux-active';

		var TabView = function () {
			function TabView(element, type) {
				_classCallCheck(this, TabView);

				this.$element = IUEditor.$(element);

				//init �⑥닔�먯꽌 setting
				this.selectedIndex = -1;
				this.$header = IUEditor.$(element.children[0]);
				this.$content = IUEditor.$(element.children[1]);

				// content items
				this.$items = this.$content.children().filter(IU_TAB_CONTENT_ITEM_CLASS);

				/**
    type 0 : iu tabview
    type 1 : iu simple tabview 
    */
				this.type = type;
				this.animation = IUEditor.$(element).data('iu-show-animation');
				var duration = IUEditor.$(element).data('iu-show-duration');
				this.duration = duration ? parseFloat(duration) * 1000 : 0;

				// callback
				this.callbackSelect = null;
			}

			TabView.prototype.init = function init() {
				var self = this;
				var initialIndex = 0;

				//check contain current link path 
				var linkId = window.location.hash.substring(1);
				var linkHash = document.getElementById(linkId);
				if (IUEditor.$.contains(self.$element[0], linkHash)) {
					//check header items
					var index = -1;
					self.$header.children().each(function (i) {
						if (IUEditor.$.contains(this, linkHash)) {
							index = i;
							return false;
						}
					});

					//check content item
					if (index < 0) {
						self.$items.each(function (i) {
							if (IUEditor.$.contains(this, linkHash)) {
								index = i;
								return false;
							}
						});
					}
					initialIndex = index;
				}

				//initialize
				self.select(initialIndex, 0, false);

				//event delegate
				if (self.type == 0) {
					self.$header.children().filter(IU_TAB_HEADER_ITEM_CLASS).each(function (i) {
						IUEditor.$(this).on({
							click: function click() {
								self.select(i);
							}
						});
					});
				} else if (self.type == 1) {
					self.$header.children().filter(IU_SIMPLE_TAB_BUTTON_CLASS).each(function (i) {
						IUEditor.$(this).on({
							click: function click() {
								self.select(i);
							}
						});
					});
				}
			};

			TabView.prototype.select = function select(index, duration, autoWindowScroll) {
				//check index
				if (this.selectedIndex == index) {
					return;
				}

				var self = this;

				// set header
				// 1. tabview
				if (self.type == 0) {
					var headerItems = self.$header.children().filter(IU_TAB_HEADER_ITEM_CLASS);

					if (this.selectedIndex >= 0) {
						var oldSelectedItem = IUEditor.$(headerItems[self.selectedIndex]);
						oldSelectedItem.children().filter(IU_TAB_HEADER_ACTIVE_ITEM_CLASS).css('display', 'none');
						oldSelectedItem.children().filter(IU_TAB_HEADER_DEFAULT_ITEM_CLASS).css('display', 'block');
					} else {
						//all children default setting
						headerItems.children().filter(IU_TAB_HEADER_ACTIVE_ITEM_CLASS).css('display', 'none');
						headerItems.children().filter(IU_TAB_HEADER_DEFAULT_ITEM_CLASS).css('display', 'block');
					}

					var selectedItem = IUEditor.$(headerItems[index]);
					selectedItem.children().filter(IU_TAB_HEADER_ACTIVE_ITEM_CLASS).css('display', 'block');
					selectedItem.children().filter(IU_TAB_HEADER_DEFAULT_ITEM_CLASS).css('display', 'none');
				}
				// 2. simpletabview
				else {
						var buttons = self.$header.children().filter(IU_SIMPLE_TAB_BUTTON_CLASS);
						if (self.selectedIndex >= 0) {
							IUEditor.$(buttons[self.selectedIndex]).removeClass(IU_ACTIVE_CLASS_NAME);
						} else {
							buttons.removeClass(IU_ACTIVE_CLASS_NAME);
						}
						IUEditor.$(buttons[index]).addClass(IU_ACTIVE_CLASS_NAME);
					}

				//set content
				var callbackFn = void 0; // calls when end tabview animation
				var $oldContent = void 0; // current selection

				if (this.selectedIndex < 0) {
					// has no selection
					$oldContent = self.$content.children();
					$oldContent.css('display', 'none');
				} else {
					$oldContent = $(self.$content.children()[self.selectedIndex]);
					$oldContent.css('visibility', 'hidden');

					callbackFn = function callbackFn() {
						// body position�� 蹂寃쎈릺�� scroll �ъ��섏씠 蹂寃쎈릺湲곕븣臾몄뿉 諛⑹��섍린 �꾪빐��
						$oldContent.css('display', 'none');
						$oldContent.css('visibility', 'inherit');

						// add user callback
						var callback = self.callbackSelect;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					};
				}

				$oldContent.finish();
				$oldContent.removeClass(IU_ACTIVE_CLASS_NAME);

				var $selectedContent = IUEditor.$(self.$content.children()[index]);
				$selectedContent.addClass('iu-active');

				var option = void 0;
				if (index > self.selectedIndex) {
					option = {
						direction: 'right'
					};
				} else {
					option = {
						direction: 'left'
					};
				}

				//check tab is in window
				var autoScroll = true;
				if (typeof autoWindowScroll === 'boolean') {
					autoScroll = autoWindowScroll;
				}
				if (autoScroll) {
					var wScrollTop = IUEditor.$(window).scrollTop();
					var wHeight = IUEditor.$(window).height();
					var top = self.$element.offset().top;
					var isInWindow = top >= wScrollTop && top <= wScrollTop + wHeight ? true : false;

					if (isInWindow == false) {
						//move to header -scroll
						IUEditor.$('body').animate({
							scrollTop: top
						}, 0);
					}
				}

				//show selected item 
				var currentDuration = duration != null ? duration : self.duration;
				$selectedContent.velocityToggle(true, self.animation, currentDuration, option, callbackFn);

				//set index
				self.selectedIndex = index;
			};

			return TabView;
		}();

		// TABVIEW PLUGIN


		var plugin = function plugin(type) {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var tabview = $this.data(IU_WIDGET.TABVIEW);
				if (!tabview) {
					tabview = new TabView(this, type);
					$this.data(IU_WIDGET.TABVIEW, tabview);
					tabview.init();
				}
			});
		};

		IUEditor.$.fn.tabview = plugin;

		// TABVIEW READY
		$(document).ready(function () {
			IUEditor.$('.iu-tabview').tabview(0);
			IUEditor.$('.iu-simple-tabview').tabview(1);
		});
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUText 
  * Needs plugin : jQuery, plugin/jquery.iu
  */

		'use strict';

		var windowSlotIndex = void 0,
		    windowSlots = [];

		// text�� name�� �뷀빐�� iutext濡� 蹂寃쏀븿.

		var IUText = function () {
			function IUText(element) {
				_classCallCheck(this, IUText);

				this.$element = IUEditor.$(element);
				this.slots = IUEditor.$(element).data('iu-text-slot');
				this.textArray = IUEditor.$(element).data('iu-text');
				this.currentIndex = IUEditor.$(element).data('iu-text-index');
				this.hasLink = false;
			}

			IUText.prototype.init = function init() {
				var isUpdated = this.updateSlot();
				if (this.$element.children('a').length > 0) {
					this.hasLink = true;
				}
				if (isUpdated) {
					this.updateText();
				}

				//resize�� 怨꾩궛�� 理쒖냼濡� 以꾩씠湲� �꾪빐 data瑜� �좎�
				IUEditor.$.each(this.slots, function (index, slot) {
					//check slot 
					if (IUEditor.$.inArray(slot[0], windowSlots) < 0) {
						windowSlots.push(slot[0]);
					}
					if (IUEditor.$.inArray(slot[1], windowSlots) < 0) {
						windowSlots.push(slot[1]);
					}
				});
			};

			IUText.prototype.updateSlot = function updateSlot() {
				var self = this;
				var slotarray = self.slots[self.currentIndex];
				var slot = {
					start: slotarray[0],
					end: slotarray[1]
				};

				var width = window.innerWidth;

				if (slot.start <= width && width < slot.end) {
					return false;
				} else if (width >= slot.end) {
					if (self.currentIndex < self.slots.length - 1) {
						self.currentIndex = self.currentIndex + 1;
						self.updateSlot();
						return true;
					}
				} else if (width < slot.start) {
					if (self.currentIndex > 0) {
						self.currentIndex = self.currentIndex - 1;
						self.updateSlot();
						return true;
					}
				}

				return false;
			};

			IUText.prototype.updateText = function updateText(index) {
				var self = this;
				if (typeof index == 'number') {
					self.currentIndex = index;
				}

				var text = self.textArray[self.currentIndex];

				//remove original text
				self.$element.find('p').remove();

				if (self.hasLink) {
					//add new text
					self.$element.children('a').append(text);
				} else {
					//add new text
					self.$element.append(text);
				}
			};

			return IUText;
		}();

		// WINDOW EVENT


		var IUTextController = function () {
			function IUTextController() {
				_classCallCheck(this, IUTextController);

				this.iutexts = [];
			}

			IUTextController.prototype.addText = function addText(iutext) {
				this.iutexts.push(iutext);
			};

			IUTextController.prototype.updateText = function updateText() {
				for (var i = this.iutexts.length - 1; i >= 0; i--) {
					var iutext = this.iutexts[i];
					var isUpdated = iutext.updateSlot();
					if (isUpdated) {
						iutext.updateText();
					}
				}
			};

			return IUTextController;
		}();

		var textController = new IUTextController();

		$(window).resize(function (event) {
			var updateIndex = window.indexOfWindowWidth(windowSlots);
			if (windowSlotIndex != updateIndex) {
				textController.updateText();
				windowSlotIndex = updateIndex;
			}
		});

		// TEXT PLUGIN
		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var text = $this.data(IU_WIDGET.TEXT);
				if (!text) {
					text = new IUText(this);
					$this.data(IU_WIDGET.TEXT, text);
					textController.addText(text);
					text.init();
				}
			});
		};

		IUEditor.$.fn.iutext = plugin;

		// TEXT READY
		$(document).ready(function () {
			IUEditor.$('.iu-text[data-iu-text]').iutext();
			IUEditor.$('.iu-cell[data-iu-text]').iutext();
			IUEditor.$('.iu-table-row-cell[data-iu-text]').iutext();

			function sortNumber(a, b) {
				return a - b;
			}

			windowSlots.sort(sortNumber);
			windowSlotIndex = window.indexOfWindowWidth(windowSlots);
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : IUTransition 
  * Needs plugin : jQuery, plugin/jquery.iu
  */
		'use strict';

		var Transition = function () {
			function Transition(element) {
				_classCallCheck(this, Transition);

				this.$element = IUEditor.$(element);
				this.animation = IUEditor.$(element).data('iu-show-animation');
				this.duration = parseFloat($(element).data('iu-show-duration')) * 1000;
				this.state = false; //transition on-off state (on - true, off - false)
				this.isShowing = false;
				this.isClosing = false;
				this.items = this.$element.find('.iu-transition-item');
				this.$offItem = IUEditor.$(this.items[0]);
				this.$onItem = IUEditor.$(this.items[1]);

				// callback
				this.callbackShow = null;
				this.callbackClose = null;
			}

			Transition.prototype.init = function init() {
				var self = this;
				var eventType = this.$element.data('iu-event-method');

				//binding
				//mousehover binding
				if (eventType == 'mouseon') {
					var isMobile = window.mobileAndTabletcheck();
					if (isMobile) {
						self.$element.on({
							touchstart: function touchstart() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle(true);
							},
							touchcancel: function touchcancel() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							},
							touchend: function touchend() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							}
						});
					} else {
						self.$element.on({
							mouseenter: function mouseenter() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle(true);
							},
							mouseleave: function mouseleave() {
								if (self.isClosing) {
									return;
								}
								self.toggle(false);
							}
						});
					}
				}
				//click binding
				else {
						this.$element.on({
							click: function click() {
								if (self.isShowing || self.isClosing) {
									return;
								}
								self.toggle();
							}
						});
					}
			};

			Transition.prototype.toggle = function toggle(state) {
				if (state != undefined && this.state == state) {
					//�꾩옱 �곹깭�� 媛숈� 寃쎌슦�먮뒗 toggle�� �붿껌�섏� �딅뒗��.
					return;
				}

				var self = this;

				if (typeof state == 'undefined' || state == null) {
					state = !self.state;
				}
				// show second item
				if (state) {
					self.state = true;
					self.isShowing = true;
					self.$onItem.velocityToggle(true, self.animation, self.duration, {}, function () {
						if (!self.isClosing) {
							self.$offItem.css('visibility', 'hidden');
						}
						self.isShowing = false;

						// user callback
						var callback = self.callbackShow;
						if (callback != null && typeof callback === "function") {
							callback();
						}
					});
				}
				// hide second item
				else {
						self.state = false;
						self.isClosing = true;
						self.$offItem.css('visibility', 'visible');
						self.$onItem.velocityToggle(false, self.animation, self.duration, {}, function () {
							self.isClosing = false;

							// user callback
							var callback = self.callbackClose;
							if (callback != null && typeof callback === "function") {
								callback();
							}
						});
					}
			};

			return Transition;
		}();

		// TRANSITION PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var transition = $this.data(IU_WIDGET.TRANSITION);
				if (!transition) {
					transition = new Transition(this);
					$this.data(IU_WIDGET.TRANSITION, transition);
					transition.init();
				}
			});
		};

		IUEditor.$.fn.transition = plugin;

		$(document).ready(function () {
			IUEditor.$('.iu-transition').transition();
		});

		module.exports = Transition;
		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($, jQuery) {
		/*
  * IUEditor : IUWebMovie 
  * Needs plugin : jQuery, plugin/jquery.iu, 
  * Youtube : https://www.youtube.com/iframe_api
  * Vimeo : https://player.vimeo.com/api/player.js
  */

		'use strict';

		//check youtube iframe is 

		var YOUTUBE_TYPE = 0;
		var VIMEO_TYPE = 1;

		// webmovie class

		var Webmovie = function () {
			function Webmovie(element) {
				_classCallCheck(this, Webmovie);

				this.$element = IUEditor.$(element);
				this.type = parseInt($(element).data('iu-web-movie-type')); //0 - youtube, 1 - vimeo
				this.isAutoplay = element.hasAttribute('data-iu-web-movie-focus-autoplay');
				this.player = null;

				// vimeo�� iframe id瑜� �ъ슜�섏��딆쓬
				if (this.type == YOUTUBE_TYPE) {
					this.playerId = IUEditor.$(element).children('iframe')[0].id; //iframe id
				}

				this.isPlaying = false;
				this.loaded = false;
			}

			Webmovie.prototype.ready = function ready() {
				var self = this;
				if (self.loaded) {
					return;
				}

				if (self.type == YOUTUBE_TYPE) {
					var videoId = self.$element.data('iu-web-movie-id');
					self.player = new YT.Player(self.playerId, {
						videoId: videoId,
						events: {
							'onReady': function onReady() {
								self.loaded = true;
								self.autoplay();
							}
						}
					});
				} else if (self.type == VIMEO_TYPE) {
					// vimeo
					if (typeof window.Vimeo == 'undefined') {
						return;
					}

					self.player = new Vimeo.Player(this.$element[0].id);
					//check autoplay
					self.player.ready().then(function () {
						self.loaded = true;
						if (self.isAutoplay) {
							// data-vimeo-width=100%�� 100px濡� �몄떇��, 洹몃옒�� �ш린�� iframe�� width, height瑜� 100%濡� �ｌ뼱以�
							var vimeo_iframe = self.$element.children('iframe')[0];
							IUEditor.$(vimeo_iframe).attr('width', '100%');
							IUEditor.$(vimeo_iframe).attr('height', '100%');
							self.autoplay();
						}
					});
				}
			};

			Webmovie.prototype.play = function play() {
				var self = this;
				if (!self.loaded) {
					return;
				}
				if (self.type == YOUTUBE_TYPE) {
					// youtube
					//youtube loading is too slow, double check
					if (typeof self.player.playVideo !== 'undefined') {
						self.player.playVideo();
						self.isPlaying = true;
					}
				} else if (self.type == VIMEO_TYPE) {
					// vimeo
					if (self.player == null) {
						return;
					}
					self.player.play();
					self.isPlaying = true;
				}
			};

			Webmovie.prototype.pause = function pause() {
				var self = this;
				if (!self.loaded) {
					return;
				}
				if (self.isPlaying == false) {
					return;
				}
				if (self.type == YOUTUBE_TYPE) {
					// youtube
					//youtube loading is too slow, double check
					if (typeof self.player.pauseVideo !== 'undefined') {
						self.player.pauseVideo();
						self.isPlaying = false;
					}
				} else if (self.type == VIMEO_TYPE) {
					// vimeo
					if (self.player == null) {
						return;
					}
					self.player.pause();
					self.isPlaying = false;
				}
			};

			Webmovie.prototype.autoplay = function autoplay(event) {
				if (event) {
					//call from youtube initialization
					var $iu = IUEditor.$(event.target.getIframe().parentElement);
					var webmovie = $iu.data(IU_WIDGET.WEBMOVIE);
					webmovie.autoplay();
					return;
				}

				var self = this;
				if (self.isAutoplay) {
					var display = self.$element.css('display');
					if (display != 'none') {
						if (self.$element.isElementInViewport()) {
							self.play();
						} else {
							self.pause();
						}
					}
				}
			};

			return Webmovie;
		}();

		// CATCH SCROLL EVENT
		//TODO : window scroll�� �쒕쾲�� �ㅼ뼱媛� �� �덈뒗吏 泥댄겕�좉쾬. webmovie媛 �덉쓣�뚮쭔 binding�쒗궗�� �덇쾶 


		var hasWebmovie = false;

		$(window).scroll(function () {
			if (hasWebmovie) {
				var $elements = IUEditor.$('.iu-webmovie[data-iu-web-movie-focus-autoplay]');

				if ($elements.length > 0) {
					$elements.each(function () {
						var $webmovie = IUEditor.$(this).data(IU_WIDGET.WEBMOVIE);
						if ($webmovie) {
							//youtube �� 寃쎌슦�먮뒗 ��쾶 濡쒕뵫��.
							$webmovie.autoplay();
						}
					});
				}
			}
		});

		// WEBMOVIE PLUGIN
		var plugin = function plugin() {
			return this.each(function () {
				// focus autoplay留� handle
				var $this = IUEditor.$(this);
				var movieType = parseInt($this.data('iu-web-movie-type'));
				if (movieType == YOUTUBE_TYPE) {
					if (typeof window.YT == 'undefined') {
						return;
					}
				} else {
					if (typeof window.Vimeo == 'undefined') {
						return;
					}
				}

				var webmovie = $this.data(IU_WIDGET.WEBMOVIE);
				if (!webmovie) {
					webmovie = new Webmovie(this);
					$this.data(IU_WIDGET.WEBMOVIE, webmovie);
					hasWebmovie = true;
					webmovie.ready();
				}
			});
		};

		IUEditor.$.fn.webmovie = plugin;

		/*
    API瑜� �숈쟻�쇰줈 濡쒕뱶�섎뒗 �꾩젽� API媛 濡쒕뱶 �섍린 �꾩뿉 init�� �몄텧�섎뒗 寃쎌슦媛 �덈떎. (React泥섎읆 init�� �곕줈 �몄텧�� ��)
    洹몃윺 寃쎌슦�먮뒗 array�� object瑜� ��ν빐�볤퀬, API媛 濡쒕뱶 �� �꾩뿉 callback�먯꽌 init�� �ㅼ떆 �몄텧�쒕떎.
    */
		// deferred vimeo
		var deferredVimeos = [];
		var isInsertedVimeoJS = false;

		function initDeferredVimeos() {
			if (deferredVimeos) {
				for (var i = 0; i < deferredVimeos.length; i++) {
					deferredVimeos[i].webmovie();
				}
				deferredVimeos = undefined;
			}
		}

		IUEditor.initVimeoInElement = function (element) {
			// check jquery object
			var $element = void 0;
			if (element instanceof jQuery) {
				$element = element;
			} else {
				$element = IUEditor.$(element);
			}

			var $vimeo = $element.find('.iu-webmovie[data-iu-web-movie-focus-autoplay][data-iu-web-movie-type="1"]');
			if ($vimeo.length <= 0) {
				return;
			}
			// vimeo init callback
			var initVimeo = function initVimeo() {
				$vimeo.webmovie();
			};

			// insert <script> for Vimeo
			// if Vimeo js was loaded, window.Vimeo is not undefined
			if (typeof window.Vimeo == 'undefined' && isInsertedVimeoJS == false) {
				isInsertedVimeoJS = true;

				var ieVersion = window.getInternetExplorerVersion();
				var isSupportedVimeo = ieVersion > 8 || ieVersion < 0;
				if (isSupportedVimeo) {
					var s = document.createElement('script');
					s.setAttribute('src', "https://player.vimeo.com/api/player.js");
					document.getElementsByTagName('head')[0].appendChild(s);

					s.onload = function () {
						initVimeo();
						initDeferredVimeos();
					};
				}
			} else if (typeof window.Vimeo == 'undefined' && isInsertedVimeoJS) {
				/* 
        API媛 �꾩쭅 濡쒕뱶�섏� �딆븯�쇰㈃ initialize瑜� 蹂대쪟�섍퀬 array�� ��ν븳 ��, 
        API媛 濡쒕뱶 �� �� callback�먯꽌 蹂대쪟�� object瑜� �ㅼ떆 init�쒕떎.
    */
				deferredVimeos.push($vimeo);
			} else {
				initVimeo();
			}
		};

		/*
    API瑜� �숈쟻�쇰줈 濡쒕뱶�섎뒗 �꾩젽� API媛 濡쒕뱶 �섍린 �꾩뿉 init�� �몄텧�섎뒗 寃쎌슦媛 �덈떎. (React泥섎읆 init�� �곕줈 �몄텧�� ��)
    洹몃윺 寃쎌슦�먮뒗 array�� object瑜� ��ν빐�볤퀬, API媛 濡쒕뱶 �� �꾩뿉 callback�먯꽌 init�� �ㅼ떆 �몄텧�쒕떎.
    */
		// deferred youtube
		var deferredYoutubes = [];
		var isInsertedYoutubeJS = false;

		function initDeferredYoutubes() {
			if (deferredYoutubes) {
				for (var i = 0; i < deferredYoutubes.length; i++) {
					deferredYoutubes[i].webmovie();
				}
				deferredYoutubes = undefined;
			}
		}

		IUEditor.initYoutubeInElement = function (element) {
			// check jquery object
			var $element = void 0;
			if (element instanceof jQuery) {
				$element = element;
			} else {
				$element = IUEditor.$(element);
			}

			var $youtube = $element.find('.iu-webmovie[data-iu-web-movie-focus-autoplay][data-iu-web-movie-type="0"]');
			if ($youtube.length <= 0) {
				return;
			}

			// youtube ready callback 
			var initYoutube = function initYoutube() {
				$youtube.webmovie();
			};

			// insert <script> for Youtube
			// if Youtube js was loaded, window.YT is not undefined
			if (typeof window.YT == 'undefined' && isInsertedYoutubeJS == false) {
				isInsertedYoutubeJS = true;

				var s = document.createElement('script');
				s.setAttribute('src', "https://www.youtube.com/iframe_api");
				document.getElementsByTagName('head')[0].appendChild(s);

				// Window Youtube callback
				window.onYouTubeIframeAPIReady = function () {
					initYoutube();
					initDeferredYoutubes();
				};
			} else if (typeof window.YT == 'undefined' && isInsertedYoutubeJS) {
				/* 
        API媛 �꾩쭅 濡쒕뱶�섏� �딆븯�쇰㈃ initialize瑜� 蹂대쪟�섍퀬 array�� ��ν븳 ��, 
        API媛 濡쒕뱶 �� �� callback�먯꽌 蹂대쪟�� object瑜� �ㅼ떆 init�쒕떎.
    */
				deferredYoutubes.push($youtube);
			} else {
				initYoutube();
			}
		};

		// WEBMOVIE READY
		$(document).ready(function () {
			var $body = IUEditor.$('body');
			//vimeo
			IUEditor.initVimeoInElement($body);
			IUEditor.initYoutubeInElement($body);
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4), __webpack_require__(4));

	/***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/**
  * PG Switch (IUTransition�� �곸냽)
  */

		'use strict';

		var Transition = __webpack_require__(26);

		var Switch = function (_Transition) {
			_inherits(Switch, _Transition);

			function Switch(element) {
				_classCallCheck(this, Switch);

				var _this = _possibleConstructorReturn(this, _Transition.call(this, element));

				_this.state = undefined;
				_this.$inputEl = IUEditor.$(element).children('input');
				return _this;
			}

			Switch.prototype.init = function init() {
				var self = this;
				var state = self.$inputEl[0].checked;
				self.toggle(state);
				self.$element.css('visibility', 'visible');

				self.$element.on({
					click: function click() {
						self.toggle();
						if (self.state) {
							self.$inputEl[0].checked = true;
						} else {
							self.$inputEl[0].checked = false;
						}
					}
				});
			};

			return Switch;
		}(Transition);

		// Switch PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var pgswitch = $this.data(IU_WIDGET.SWITCH);
				if (!pgswitch) {
					pgswitch = new Switch(this);
					$this.data(IU_WIDGET.SWITCH, pgswitch);
					pgswitch.init();
				}
			});
		};

		IUEditor.$.fn.pgswitch = plugin;

		$(document).ready(function () {
			IUEditor.$('.iu-pg-switch').pgswitch();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/**
  * IUEditor : WP-MENU
  * Needs plugin : 
  */
		'use strict';

		var WP_MENU_CLASS = '.iux-wp-menu';
		var WP_SIDE_MENU_CLASS_NAME = 'iu-wp-side-menu';
		/*
   * const WP_TOP_MENU_CLASS_NAME = 'iu-wp-top-menu'
   * top menu�� side menu媛 �꾨땺 寃쎌슦�� �숈옉�섎뒗 寃껋쑝濡� �쒕떎.
   * */

		var WPMenu = function () {
			function WPMenu(element) {
				_classCallCheck(this, WPMenu);

				this.$element = IUEditor.$(element);

				/*
     * ul - li - a 
     *         - ul(submenu) - li -a
     */
				// get menu items from whole menu
				// class from wordpress (children)
				this.$items = IUEditor.$(element).children('.menu-item-has-children');

				// get animation info - default setting / wp attribute not working
				this.animation = 'transition.slideDownIn';
				this.duration = 300;
			}

			WPMenu.prototype.init = function init() {
				var self = this;
				var isClick = this.$element.hasClass(WP_SIDE_MENU_CLASS_NAME);
				// sidemenu - click , topmenu - hover

				//event binding
				// click
				if (isClick) {
					this.$items.on({
						click: function click(event) {
							var $targetParentEl = IUEditor.$(event.target.parentElement);
							// check toggle element (hide/show children)
							if ($targetParentEl.hasClass('menu-item-has-children')) {
								self.toggle(this);
								event.preventDefault();
							}
						}
					});
				}
				// mouse hover
				else {
						var isMobile = window.mobileAndTabletcheck();
						if (isMobile) {
							self.$items.on({
								touchstart: function touchstart() {
									self.show(this);
								},
								touchcancel: function touchcancel() {
									self.close(this);
								},
								touchend: function touchend() {
									self.close(this);
								}
							});
						} else {
							self.$items.on({
								mouseenter: function mouseenter() {
									self.show(this);
								},
								mouseleave: function mouseleave() {
									self.close(this);
								}
							});
						}
					}
			};

			WPMenu.prototype.show = function show(item) {
				var $submenu = IUEditor.$(item).children().filter('ul');
				var state = $submenu.data('state');
				if (state != undefined && state) {
					return;
				}
				$submenu.data('state', true);

				// set animation
				$submenu.velocityToggle(true, this.animation, this.duration);
			};

			WPMenu.prototype.close = function close(item) {
				var $submenu = IUEditor.$(item).children().filter('ul');
				var state = $submenu.data('state');
				if (state != undefined && state == false) {
					return;
				}
				$submenu.data('state', false);

				// set animation
				$submenu.velocityToggle(false, this.animation, this.duration);
			};

			WPMenu.prototype.toggle = function toggle(item) {

				var $submenu = IUEditor.$(item).children().filter('ul');
				var state = $submenu.data('state');
				if (state == undefined) {
					state = false;
				}
				// set a state
				var nextState = !state;
				if (nextState) {
					this.show(item);
				} else {
					this.close(item);
				}
			};

			return WPMenu;
		}();

		// WP-MENU PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var wpmenu = $this.data(IU_WIDGET.WP_MENU);
				if (!wpmenu) {
					wpmenu = new WPMenu(this);
					$this.data(IU_WIDGET.WP_MENU, wpmenu);
					wpmenu.init();
				}
			});
		};

		IUEditor.$.fn.wpmenu = plugin;

		// WP-MENU READY
		$(document).ready(function () {
			IUEditor.$(WP_MENU_CLASS).wpmenu();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

	// iuevent
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);

	/***/
},
/* 31 */
/***/function (module, exports) {

	/*
  * IUEditor : Event Variable
  * Needs plugin : jQuery
  */

	/**
    Don't use 'use strict'. because of eval()
  **/

	//iu class
	var IU_EVENT_HOVER_TRIGGER_CLASS = '.iux-hover-trigger';
	var IU_EVENT_CLICK_TRIGGER_CLASS = '.iux-click-trigger';
	var IU_EVENT_RECEIVER_CLASS = '.iux-event-receiver';

	//data
	var IU_EVENT_DATA_METHOD = 'iu-event-method';
	var IU_EVENT_DATA_ANIMATION = 'iu-show-animation';
	var IU_EVENT_DATA_DURATION = 'iu-show-duration';
	var IU_EVENT_DATA_VARIABLE = 'iu-event-var';

	//event machine w/ event variables

	var IUEventMachine = function () {
		function IUEventMachine() {
			_classCallCheck(this, IUEventMachine);
		}

		IUEventMachine.prototype.init = function init($element) {

			//set init value of event object
			for (var variable in iuEventVariables) {
				var declare = variable + '=' + iuEventVariables[variable].initial;
				eval(declare);
			}

			//initialize state
			$element.find(IU_EVENT_RECEIVER_CLASS).each(function () {
				var evalValue = void 0;
				try {
					var condition = IUEditor.$(this).data(IU_EVENT_DATA_METHOD);
					var method = new Function('return (' + condition + ')');
					evalValue = method(condition);
				} catch (e) {
					return;
				}
				if (evalValue == false) {
					IUEditor.$(this).hide();
				} else {
					IUEditor.$(this).show();
				}
			});

			var self = this;

			//set event delegation
			$element.find(IU_EVENT_HOVER_TRIGGER_CLASS).each(function () {
				var isSet = IUEditor.$(this).data('iu-event-is-set');
				if (!isSet) {
					IUEditor.$(this).data('iu-event-is-set', true);
					IUEditor.$(this).on({
						mouseenter: function mouseenter(e) {
							self.increase(this);
						},
						mouseleave: function mouseleave(e) {
							self.decrease(this);
						}
					});
				}
			});

			$element.find(IU_EVENT_CLICK_TRIGGER_CLASS).each(function () {
				var isSet = IUEditor.$(this).data('iu-event-is-set');
				if (!isSet) {
					IUEditor.$(this).data('iu-event-is-set', true);
					IUEditor.$(this).on({
						click: function click(e) {
							self.increase(this);
						}
					});
				}
			});
		};

		IUEventMachine.prototype.run = function run(variable) {

			IUEditor.$(IU_EVENT_RECEIVER_CLASS).each(function () {
				var condition = IUEditor.$(this).data(IU_EVENT_DATA_METHOD);
				try {
					if (condition.search(variable) >= 0) {
						var method = new Function('return (' + condition + ')');
						var evalValue = method(condition);
						var animation = IUEditor.$(this).data(IU_EVENT_DATA_ANIMATION);
						var duration = parseFloat(IUEditor.$(this).data(IU_EVENT_DATA_DURATION)) * 1000;
						if (isNaN(duration)) {
							duration = 0;
						}
						IUEditor.$(this).velocityToggle(evalValue, animation, duration, {});
					}
				} catch (e) {
					return false;
				}
			});
		};

		IUEventMachine.prototype.increase = function increase(iu) {

			var variable = IUEditor.$(iu).data(IU_EVENT_DATA_VARIABLE);
			var eventObject = iuEventVariables[variable];
			var maximumValue = eventObject.maximum;
			var currentValue = new Function('return (' + variable + ')')();

			if (currentValue == maximumValue) {
				eval(variable + '=' + eventObject.initial);
			} else {
				eval(variable + '++');
			}
			this.run(variable);
		};

		IUEventMachine.prototype.decrease = function decrease(iu) {
			var variable = IUEditor.$(iu).data(IU_EVENT_DATA_VARIABLE);
			var eventObject = iuEventVariables[variable];
			var currentValue = new Function('return (' + variable + ')')();

			if (currentValue == 0) {
				eval(variable + '=' + eventObject.maximum);
			} else {
				eval(variable + '--');
			}
			this.run(variable);
		};

		return IUEventMachine;
	}();

	IUEditor.initIUEventMachine = function ($element) {
		if (typeof iuEventVariables != 'undefined') {
			var eventmachine = window.iuEventMachine;

			//event variable�� �덉쓣�뚮쭔 event machine�� 留뚮뱺��.
			if (typeof eventmachine == 'undefined') {
				eventmachine = new IUEventMachine();

				//export to window
				window.iuEventMachine = eventmachine;
			}
			eventmachine.init($element);
		}
	};

	IUEditor.$(document).ready(function () {
		IUEditor.initIUEventMachine(IUEditor.$('body'));
	});

	/***/
},
/* 32 */
/***/function (module, exports) {

	/*
  * IUEditor : Hover 
  * Needs plugin : jQuery, plugin/jquery.iu
  */
	'use strict';

	var IUX_HOVER_CLASS_NAME = 'iux-hover';
	var IUX_HAS_HOVER_CLASS_NAME = 'iux-has-hover';
	var IU_INITIALIZED_HOVER = 'iu.initializedHover';

	var activateHover = function activateHover() {
		return this.each(function () {
			var $element = IUEditor.$(this);
			var hasHover = $element.hasClass(IUX_HAS_HOVER_CLASS_NAME);
			var initializedHover = $element.data(IU_INITIALIZED_HOVER);

			if (hasHover && !initializedHover) {
				//set activated flag
				$element.data(IU_INITIALIZED_HOVER, true);

				var isMobile = window.mobileAndTabletcheck();
				if (isMobile) {
					$element.on({
						touchstart: function touchstart() {
							$element.addClass(IUX_HOVER_CLASS_NAME);
						},
						touchcancel: function touchcancel() {
							$element.removeClass(IUX_HOVER_CLASS_NAME);
						},
						touchend: function touchend() {
							$element.removeClass(IUX_HOVER_CLASS_NAME);
						}
					});
				} else {
					$element.on({
						mouseenter: function mouseenter() {
							$element.addClass(IUX_HOVER_CLASS_NAME);
						},
						mouseleave: function mouseleave() {
							$element.removeClass(IUX_HOVER_CLASS_NAME);
						}
					});
				}
			}
		});
	};
	IUEditor.$.fn.activateHover = activateHover;

	IUEditor.$(document).ready(function () {
		IUEditor.$('.' + IUX_HAS_HOVER_CLASS_NAME).activateHover();
	});

	/***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : Scroll Link 
  * Needs plugin : jQuery, plugin/jquery.iu
  */
		'use strict';

		var IUX_LINK_SCROLL_CLASS_NAME = 'iux-link-scroll';

		var activateScrollLink = function activateScrollLink() {
			return this.each(function () {
				var $element = IUEditor.$(this);

				//check event class
				var checkScroll = $element.hasClass(IUX_LINK_SCROLL_CLASS_NAME);
				var isSet = $element.data('iu.scrollLink');

				if (!checkScroll || isSet) {
					return;
				}

				//set activated flag
				$element.data('iu.scrollLink', true);
				$element.click(function (event) {
					var firstchild = $element.children().get(0);
					var parent = $element.parent()[0];

					var linkEl = void 0;

					//check child link
					if (typeof firstchild != 'undefined' && typeof firstchild.href != 'undefined') {
						linkEl = firstchild;
					}
					//check parent link - e.g.)image type <img>
					else if (typeof parent.href != 'undefined') {
							linkEl = parent;
						}

					//check linkEl
					if (typeof linkEl == 'undefined') {
						return;
					}

					var linkTarget = IUEditor.$(linkEl).attr('target');
					if (typeof linkTarget == 'undefined' || linkTarget == '_self') {
						//find div
						var divId = linkEl.href.split('#')[1];

						// check div id 
						if (typeof divId == 'undefined') {
							return;
						}

						var $targetEl = IUEditor.$('#' + divId);
						//check if target exist
						if ($targetEl.length != 1) {
							return;
						}

						var offset = $targetEl.offset();
						event.preventDefault();
						var option = {
							easing: 'swing',
							duration: 600,
							complete: $.noop,
							step: $.noop
						};
						IUEditor.$('html,body').stop().animate({
							scrollLeft: offset.left,
							scrollTop: offset.top
						}, option);
					}
				});
			});
		};

		IUEditor.$.fn.activateScrollLink = activateScrollLink;
		IUEditor.$(document).ready(function () {
			IUEditor.$('.' + IUX_LINK_SCROLL_CLASS_NAME).activateScrollLink();
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function ($) {
		/*
  * IUEditor : Scroll Event
  * Needs plugin : jQuery, velocity, plugin/jquery.iu
  */
		'use strict';

		var IUScrollController = function () {
			function IUScrollController() {
				_classCallCheck(this, IUScrollController);

				this.iuevents = [];
			}

			IUScrollController.prototype.add = function add(iuscrollevent) {
				this.iuevents.push(iuscrollevent);
			};

			IUScrollController.prototype.render = function render() {
				for (var i = this.iuevents.length - 1; i >= 0; i--) {
					this.iuevents[i].updateCurrentAnimator();
					this.iuevents[i].render();
				}
			};

			return IUScrollController;
		}();

		var scrollController = new IUScrollController();

		/*
   * control window width 
   */
		var windowSlotIndex = void 0,
		    windowSlots = [];

		// WINDOW EVENT
		IUEditor.$(window).resize(function (event) {
			var updateIndex = window.indexOfWindowWidth(windowSlots);
			if (windowSlotIndex != updateIndex) {
				//TODO : update media query scroll event css properties
				windowSlotIndex = updateIndex;
				scrollController.render();
			}
		});

		IUEditor.$(window).scroll(function () {
			scrollController.render();
		});

		/* scroll */
		//Used to replace occurences of {?} with a number.
		//Get from : https://github.com/Prinzhorn/skrollr
		var rxInterpolateString = /\{\?\}/g;

		var IUScrollEvent = function () {
			function IUScrollEvent(element) {
				_classCallCheck(this, IUScrollEvent);

				var self = this;
				self.$element = IUEditor.$(element);
				self.animator = IUEditor.$(element).data('iu-scroll-animator');
				/*
    isAnimator indicates to change css properties or display 
    @ true : change css properties
    @ false  : change display (block or none)
    */
				self.isAnimator = self.animator != undefined ? true : false;
				if (self.isAnimator) {
					//update slots
					self.slots = IUEditor.$(element).data('iu-scroll-slot');

					//resize�� 怨꾩궛�� 理쒖냼濡� 以꾩씠湲� �꾪빐 data瑜� �좎�
					$.each(self.slots, function (index, slot) {
						//check slot 
						if (IUEditor.$.inArray(slot, windowSlots) < 0) {
							windowSlots.push(slot);
						}
					});

					self.currentIndex = window.indexOfWindowWidth(windowSlots);
				} else {
					self.animation = self.$element.data('iu-show-animation');
					self.duration = parseFloat(self.$element.data('iu-show-duration')) * 1000;
					if (isNaN(self.duration)) {
						self.duration = 0;
					}
					self.state;
				}
				self.frame = {}; //scroll frame range 
			}

			IUScrollEvent.prototype.init = function init() {
				var self = this;
				//set frame
				if (self.isAnimator) {
					var elTop = self.$element.offset().top;
					var elStart = elTop;
					var elHeight = self.$element.height();
					var elEnd = elStart + elHeight;

					var lastCenter = IUEditor.$(document).height() - IUEditor.$(window).height() / 2;

					//element�� �꾩튂媛 document�� 諛묒뿉 �덉뼱�� center源뚯� �щ씪�ㅼ� �딆쓣��.
					if (lastCenter < elEnd) {
						elEnd = lastCenter;

						//top�� �꾩튂議곗감 center源뚯� �щ씪�ㅼ� �딆쓣��
						if (elStart > elEnd) {
							elStart = elEnd - elHeight;
						}
					}

					self.frame = {
						top: elTop,
						start: elStart,
						end: elEnd
					};

					//set current animator
					self.currentAnimator = self.animator[self.currentIndex];
				} else {
					var start = parseFloat(self.$element.data('iu-scroll-from'));
					var end = parseFloat(self.$element.data('iu-scroll-to'));
					if (isNaN(start)) {
						start = 0;
					}
					if (isNaN(end)) {
						end = 100000;
					}
					self.frame = {
						start: start,
						end: end
					};
				}

				self.render(0);
			};

			IUScrollEvent.prototype.getIndex = function getIndex(width) {
				var index = void 0;
				var self = this;
				var windowWidth = width ? width : window.innerWidth;

				for (var i = self.slots.length - 1; i >= 0; i--) {
					if (windowWidth > self.slots[i]) {
						index = i;
						break;
					}
				}
				return index;
			};

			IUScrollEvent.prototype.updateCurrentAnimator = function updateCurrentAnimator(index) {
				var self = this;
				if (self.isAnimator) {
					self.currentIndex = index ? index : self.getIndex();
					self.currentAnimator = self.animator[self.currentIndex];
				}
			};

			IUScrollEvent.prototype.render = function render(duration) {
				// check if css will be change
				var isChange = true;

				if (isChange) {
					var self = this;

					if (self.isAnimator) {
						var cssDict = {};
						for (var cssName in self.currentAnimator) {
							var dict = self.currentAnimator[cssName];
							var interpolated = self.calcInterpolation(dict.pre, dict.post);
							cssDict[cssName] = self.cssString(interpolated, dict.format);
						}

						self.$element.css(cssDict);
					} else {
						var isVisible = self.isInWindow();
						if (self.state != isVisible) {
							self.state = isVisible;
							var currentDuration = isNaN(duration) ? self.duration : duration;
							self.$element.velocityToggle(isVisible, self.animation, currentDuration, {});
						}
					}
				}
			};

			IUScrollEvent.prototype.isInWindow = function isInWindow() {
				var wTop = IUEditor.$(window).scrollTop();

				if (wTop >= this.frame.start && wTop <= this.frame.end) {
					return true;
				}
				return false;
			};

			IUScrollEvent.prototype.progress = function progress() {
				var scrollTop = IUEditor.$(window).scrollTop();
				var wHeight = IUEditor.$(window).height();
				var center = scrollTop + wHeight / 2;
				var elCenter = (this.frame.start + this.frame.end) / 2;

				var progress = void 0;
				if (this.frame.top >= scrollTop + wHeight) {
					//�붾㈃�� 蹂댁씠吏 �딆쓣 �� - bottom
					progress = 0;
				} else if (elCenter < center) {
					//�곸쐞濡� �щ씪媛붿쓣 ��.
					progress = 1;
				} else {
					//scroll animation�� 吏꾪뻾�섍퀬 �덉쓣 �� 
					progress = 1 - (elCenter - center) / (wHeight / 2);
					//double check 
					if (progress < 0) {
						progress = 0;
					}
				}

				return progress;
			};

			IUScrollEvent.prototype.calcInterpolation = function calcInterpolation(pre, post) {
				var progress = this.progress();
				var interpolated = [];
				for (var i = 0; i < pre.length; i++) {
					var result = pre[i] + (post[i] - pre[i]) * progress;
					interpolated.push(result);
				}
				return interpolated;
			};

			IUScrollEvent.prototype.cssString = function cssString(interpolated, format) {
				rxInterpolateString.lastIndex = 0;
				var index = 0;
				return format.replace(rxInterpolateString, function () {
					return interpolated[index++];
				});
			};

			return IUScrollEvent;
		}();

		// SCROLL EVENT PLUGIN


		var plugin = function plugin() {
			return this.each(function () {
				var $this = IUEditor.$(this);
				var scrollevent = $this.data(IU_WIDGET.SCROLL_EVENT);
				if (!scrollevent) {
					scrollevent = new IUScrollEvent(this);
					$this.data(IU_WIDGET.SCROLL_EVENT, scrollevent);
					scrollController.add(scrollevent);
					scrollevent.init();
				}
			});
		};

		IUEditor.$.fn.scrollevent = plugin;

		// SCROLL EVENT READY
		IUEditor.$(document).ready(function () {
			//check mobile
			if (window.mobileAndTabletcheck() == false) {
				var sortNumber = function sortNumber(a, b) {
					return a - b;
				};

				windowSlots.sort(sortNumber);
				windowSlotIndex = window.indexOfWindowWidth(windowSlots);
				IUEditor.$('.iux-event-scroll').scrollevent();
			}
		});

		/* WEBPACK VAR INJECTION */
	}).call(exports, __webpack_require__(4));

	/***/
}
/******/]);