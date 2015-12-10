/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);

	document.write('\
	  <section class="todoapp"> \
	    <header class="header"> \
	      <h1>todos</h1> \
	      <input class="new-todo" placeholder="What needs to be done?" autofocus> \
	    </header> \
	    <section class="main"> \
	      <ul class="todo-list"></ul> \
	    </section> \
	    <footer class="footer"> \
	      <span class="todo-count"></span> \
	    </footer> \
	  </section> \
	  <footer class="info">\
	  </footer>'
	);

	var init = __webpack_require__(7);
	var app = init();

	if(false) {
	  module.hot.accept("./app.js", function() {
	    var todos = app.getTodos(); // We save the current todos
	    document.querySelector("ul.todo-list").removeEventListener("click");
	    document.querySelector("input.new-todo").removeEventListener("click");

	    init = require("./app.js"); // We replace the application
	    app = init();

	    app.setTodos(todos); // We set back the current todos
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  outline: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\nlabel[for='toggle-all'] {\n  display: none;\n}\n\n.toggle-all {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none; /* Mobile Safari */\n}\n\n.toggle-all:before {\n  content: '\\E2\\9D\\AF';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked:before {\n  color: #737373;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.todo-list li .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.todo-list li .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.todo-list li label {\n  white-space: pre;\n  word-break: break-word;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n  content: '\\C3\\2014';\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n              0 8px 0 -3px #f6f6f6,\n              0 9px 1px -3px rgba(0, 0, 0, 0.2),\n              0 16px 0 -6px #f6f6f6,\n              0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n  Hack to remove background from Mobile Safari.\n  Can't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n\n  .toggle-all {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-appearance: none;\n    appearance: none;\n  }\n}\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./base.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "hr {\n  margin: 20px 0;\n  border: 0;\n  border-top: 1px dashed #c5c5c5;\n  border-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n  font-weight: normal;\n  text-decoration: none;\n  color: #b83f45;\n}\n\n.learn a:hover {\n  text-decoration: underline;\n  color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n  margin: 10px 0;\n  font-weight: 500;\n  line-height: 1.2;\n  color: #000;\n}\n\n.learn h3 {\n  font-size: 24px;\n}\n\n.learn h4 {\n  font-size: 18px;\n}\n\n.learn h5 {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\n.learn ul {\n  padding: 0;\n  margin: 0 0 30px 25px;\n}\n\n.learn li {\n  line-height: 20px;\n}\n\n.learn p {\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 1.3;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n#issue-count {\n  display: none;\n}\n\n.quote {\n  border: none;\n  margin: 20px 0 60px 0;\n}\n\n.quote p {\n  font-style: italic;\n}\n\n.quote p:before {\n  content: '\\E2\\20AC\\153';\n  font-size: 50px;\n  opacity: .15;\n  position: absolute;\n  top: -20px;\n  left: 3px;\n}\n\n.quote p:after {\n  content: '\\E2\\20AC\\9D';\n  font-size: 50px;\n  opacity: .15;\n  position: absolute;\n  bottom: -42px;\n  right: 3px;\n}\n\n.quote footer {\n  position: absolute;\n  bottom: -40px;\n  right: 0;\n}\n\n.quote footer img {\n  border-radius: 3px;\n}\n\n.quote footer a {\n  margin-left: 5px;\n  vertical-align: middle;\n}\n\n.speech-bubble {\n  position: relative;\n  padding: 10px;\n  background: rgba(0, 0, 0, .04);\n  border-radius: 5px;\n}\n\n.speech-bubble:after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  right: 30px;\n  border: 13px solid transparent;\n  border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n  position: absolute;\n  width: 272px;\n  top: 8px;\n  left: -300px;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, .6);\n  transition-property: left;\n  transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n  .learn-bar {\n    width: auto;\n    padding-left: 300px;\n  }\n\n  .learn-bar > .learn {\n    left: 8px;\n  }\n}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var item = __webpack_require__(8)

	function initTodo(){
	  "strict"

	  var todos = [];
	  var ul = document.querySelector("ul.todo-list");
	  var newInput = document.querySelector("input.new-todo");

	  // Events
	  newInput.addEventListener("keypress", function(e){
	    if(e.charCode === 13 && newInput.value != ""){
	      addTodo(newInput.value)
	      newInput.value = "";
	    }
	  });
	  ul.addEventListener("click", function(e){
	    if(e.target.nodeName === "BUTTON" && e.target.className === "destroy"){
	      removeTodo(e.target.parentElement.parentElement.dataset.id); 
	    }
	  })

	  function addTodo(todoText){
	    todos.push(item.create(todoText));
	    refresh();
	  }

	  function removeTodo(todoId){
	    if(typeof(todoId) === 'number'){
	      todoId = parseInt(todoId, 10);
	    } else if (typeof(todoId) === 'object' && todoId.id != null){
	      todoId = todoId.id;
	    }

	    for (var i = todos.length - 1; i >= 0; i--) {
	      if(todos[i].id === todoId){
	        todos.splice(i, 1);
	      }
	    };

	    refresh();  
	  }

	  function refresh(){
	    str = "";
	    for (var i = todos.length - 1; i >= 0; i--) {
	      str += '\
	        <li data-id="' + todos[i].id + '" class=""> \
	          <div class="view">\
	            <label>' + todos[i].text + '</label>\
	            <button class="destroy"></button>\
	          </div>\
	        </li>';
	    }

	    ul.innerHTML = str;
	  }
	  
	  // Hot reloading helpers
	  function getTodos(){
	    return todos;
	  }

	  function setTodos(newTodos){ // Reinitialise the currentId counter    
	    todos = newTodos;
	    refresh();
	  }

	  return {
	    addTodo: addTodo,
	    removeTodo: removeTodo,
	    refresh: refresh,
	    getTodos: getTodos,
	    setTodos: setTodos
	  }
	}

	module.exports = initTodo;


	// Hot reloading
	if(false) {
	  module.hot.accept("./item.js", function() {
	    var currentId = item.getCurrentId();

	    item = require("./item.js"); // We replace the application

	    item.setCurrentId(currentId);
	  });
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	function itemFactory(){

	  var currentId = 0;

	  function create(text){
	    return {
	      id: currentId++,
	      text: text
	    };
	  }

	  function getCurrentId(){
	    return currentId;
	  }

	  function setCurrentId(id){
	    currentId = id;
	  }

	  return {
	    create: create,
	    getCurrentId: getCurrentId,
	    setCurrentId: setCurrentId
	  }
	}

	module.exports = itemFactory();

/***/ }
/******/ ]);