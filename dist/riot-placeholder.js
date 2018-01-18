(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("foobarIpsum", [], factory);
	else if(typeof exports === 'object')
		exports["foobarIpsum"] = factory();
	else
		root["foobarIpsum"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dictionary = __webpack_require__(1);

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {

  /**
   * Represents the core text generator.
   * @param {object} opts - Options for generator to consume.
   * @returns {string}
   */
  function _class(opts) {
    _classCallCheck(this, _class);

    opts = Object.assign({}, opts);
    opts.size = opts.size || {};
    opts.size.sentence = opts.size.sentence || 15;
    opts.size.paragraph = opts.size.paragraph || 3;
    opts.dictionary = opts.dictionary || _dictionary2.default.words;
    this.opts = opts;
  }

  /**
   * Generate a random word given the provided dictionary.
   * @returns {string}
   */


  _createClass(_class, [{
    key: 'word',
    value: function word() {
      return this.opts.dictionary[Math.floor(Math.random() * this.opts.dictionary.length)];
    }

    /**
     * Generate a random sentence given the provided dictionary and sentence bounds.
     * @returns {string}
     */

  }, {
    key: 'sentence',
    value: function sentence() {
      var _this = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var sentence = [].concat(_toConsumableArray(Array(size || this.opts.size.sentence))).map(function () {
        return ' ' + _this.word();
      }).join('').slice(1);
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }

    /**
     * Generate a random paragraph given the provided dictionary and paragraph bounds.
     * @param {int} size - Optional paragraph size specification in number of sentences.
     * @param {string} eoc - End of character for each paragraph.
     * @returns {string}
     */

  }, {
    key: 'paragraph',
    value: function paragraph() {
      var _this2 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var eoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      size = size || this.opts.size.paragraph;
      return [].concat(_toConsumableArray(Array(size))).map(function () {
        return _this2.sentence() + '. ';
      }).map(function (sentence, index) {
        if (!((index + 1) % 4)) return '' + eoc + sentence;else return sentence;
      }).join('').trim();
    }
  }]);

  return _class;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"words":["ad","adipisicing","Aenean","aliqua","aliquip","amet","anim","aute","bar","barfoo","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eget","eiusmod","eleifend","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","foo","foobar","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","leo","Lorem","magna","minim","mollit","nam","nec","nisi","non","nostrud","nulla","occaecat","officia","pariatur","parturient","proident","qui","quis","reprehenderit","sint","sit","sunt","tellus","tempor","tempus","ullamco","ut","velit","veniam","Vivamus","voluptate"]}

/***/ })
/******/ ]);
});
},{}],2:[function(require,module,exports){
(function (global){
var riot = (typeof window !== "undefined" ? window['riot'] : typeof global !== "undefined" ? global['riot'] : null);
module.exports = riot.tag2('ph', '', '@keyframes loading{ 0%{ background-position: -468px 0; } 100%{ background-position: 468px 0; } } ph,[data-is="ph"]{ cursor: default; } ph span.ph-mask,[data-is="ph"] span.ph-mask{ animation-duration: 2s; animation-fill-mode: forwards; animation-iteration-count: infinite; animation-name: loading; animation-timing-function: linear; background: #f6f7f8; background: linear-gradient(to right, #eeeeee 8%, #cccccc 18%, #eeeeee 33%); background-size: 1000px 104px; height: 338px; position: relative; overflow: hidden; } ph.ph-img,[data-is="ph"].ph-img{ display: block; }', '', function(opts) {
    const generator = new (require('foobar-ipsum'))()
    const type = this.root.localName

    switch (type) {
      case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'p': case 'span':
        let unit = this.opts.unit
        if (!unit) {
          switch(type) {
            case 'h1': case 'h2': case 'h3': case 'h4': case 'h5':
              unit = 'word'
              break
            case 'span':
              unit = 'sentence'
              break
            case 'p':
              unit = 'paragraph'
              break
          }
        }
        const size = this.opts.size || 'md'
        const sizes = {
          sentence: {
            sm: 5,
            md: 15,
            lg: 25
          },
          paragraph: {
            sm: 3,
            md: 5,
            lg: 7
          }
        }
        const masked = 'loading' in this.opts
        switch (unit) {
          case 'word':
            const word = generator.word()
            this.root.innerHTML = masked ? `<span class="ph-mask">${word}</span>` : word
            break
          case 'sentence':
            const sentence = generator.sentence(sizes[unit][size])
            this.root.innerHTML = masked ? `<span class="ph-mask">${sentence}</span>` : sentence
            break
          case 'paragraph':
            const paragraph = generator.paragraph(sizes[unit][size], '<br />')
            this.root.innerHTML = masked ? paragraph.split('.').filter(c => c)
            .map(sentence => {
                return sentence.startsWith(' ') ?
                ` <span class="ph-mask">${sentence.trim()}.</span>` :
                ` <span class="ph-mask">${sentence}.</span>`
            }).join(' ') : paragraph
            break
          default:
            break
        }
        break
      case 'img':
        this.root.className += 'ph-img'
        this.root.src = `https://via.placeholder.com/${this.root.height}x${this.root.width}`
        break
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"foobar-ipsum":1}],3:[function(require,module,exports){
var placeholder = require('./riot-placeholder.tag')
riot.mount(placeholder)

},{"./riot-placeholder.tag":2}]},{},[3]);
