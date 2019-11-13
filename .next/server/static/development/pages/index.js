module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SpotifyPlayer/SpotifyPlayer.scss":
/*!*****************************************************!*\
  !*** ./components/SpotifyPlayer/SpotifyPlayer.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"spotify-player-container": "_3tbXe_yRHrsuRNsdU0EZi0",
	"spotify-player": "GWddnSBv71NjxhF-iFW9M",
	"fadeIn": "_1acqqHFR4lfpJxKgI5EeIJ"
};

/***/ }),

/***/ "./components/SpotifyPlayer/index.js":
/*!*******************************************!*\
  !*** ./components/SpotifyPlayer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpotifyPlayer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotifyPlayer.scss */ "./components/SpotifyPlayer/SpotifyPlayer.scss");
/* harmony import */ var _SpotifyPlayer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SpotifyPlayer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spotify-player */ "react-spotify-player");
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spotify_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/components/SpotifyPlayer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  opened,
  URI
}) => __jsx("div", {
  className: _SpotifyPlayer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["spotify-player-container"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, opened ? __jsx("div", {
  className: _SpotifyPlayer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["spotify-player"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
  uri: URI,
  view: "list",
  theme: "white",
  size: {
    width: "100%",
    height: 80
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})) : null));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SpotifyPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SpotifyPlayer */ "./components/SpotifyPlayer/index.js");
var _jsxFileName = "/Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  const {
    0: isOpened,
    1: toggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 294.465 294.465",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("path", {
    d: "m174.432 32.465c-6.8-10-12.8-19.2-18.4-27.6-.8-1.2-2-2.4-3.2-3.2-4.8-3.2-11.2-1.6-14.4 3.2-5.2 8.4-11.2 17.2-18.4 27.6-31.6 46.4-78.8 116.4-78.8 156.4 0 29.2 12 55.6 31.2 74.8 19.2 18.8 45.6 30.8 74.8 30.8s55.6-12 74.8-31.2 31.2-45.6 31.2-74.8c0-40-47.2-109.6-78.8-156zm33.2 216.4c-15.6 15.6-36.8 24.8-60.4 24.8s-44.8-9.6-60.4-24.8c-15.6-15.6-24.8-36.8-24.8-60.4 0-33.6 45.2-100.4 75.2-144.8 3.6-5.2 6.8-10.4 10-14.8 3.2 4.4 6.4 9.6 10 14.8 30 44.8 75.2 111.2 75.2 144.8 0 23.6-9.6 44.8-24.8 60.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("path", {
    d: "m209.232 181.265c-5.6-.4-10.4 4-10.8 9.6-.4 8.8-3.2 17.2-7.6 24.4s-10.8 13.6-18.4 17.6c-4.8 2.8-6.8 9.2-4 14 3.2 5.6 9.6 7.2 14.4 4.4 10.8-6 19.6-14.8 25.6-24.8 6.4-10 10-22 10.4-34.4.4-5.6-4-10.4-9.6-10.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("path", {
    d: "m383.071 148.928c-3.905-3.904-10.237-3.904-14.143 0l-20 20c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.906 10.238 3.905 14.143 0l20-20c3.905-3.905 3.905-10.237 0-14.143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("path", {
    d: "m143.071 148.928c-3.905-3.904-10.237-3.904-14.143 0l-20 20c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.906 10.238 3.905 14.143 0l20-20c3.905-3.905 3.905-10.237 0-14.143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("path", {
    d: "m333.071 108.928c-3.905-3.904-10.237-3.904-14.143 0l-20 20c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.906 10.238 3.905 14.143 0l20-20c3.905-3.905 3.905-10.237 0-14.143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("path", {
    d: "m213.071 108.928c-3.905-3.904-10.237-3.904-14.143 0l-20 20c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.906 10.238 3.905 14.143 0l20-20c3.905-3.905 3.905-10.237 0-14.143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("path", {
    d: "m263.071 148.928c-3.905-3.904-10.237-3.904-14.143 0l-20 20c-3.905 3.905-3.905 10.237 0 14.143 3.907 3.906 10.238 3.905 14.143 0l20-20c3.905-3.905 3.905-10.237 0-14.143z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("path", {
    d: "m512 356c0-16.542-13.458-30-30-30h-10v-32.23c.412-.358.832-.701 1.237-1.07 6.491-5.917 20.049-9.7 28.889-9.812 5.522-.069 9.943-4.603 9.873-10.125-.069-5.479-4.532-9.874-9.997-9.874-.042 0-.086 0-.128.001-8.581.108-19.982 2.386-29.874 7.063v-26.213c12.176-4.983 20.271-17.519 18.533-31.435-11.796-94.809-92.847-166.305-188.533-166.305h-92c-95.686 0-176.737 71.496-188.533 166.301-1.733 13.875 6.307 26.437 18.533 31.44v25.771c-9.929-4.498-21.357-6.748-30.131-6.622-5.522.072-9.94 4.608-9.868 10.131.072 5.478 4.535 9.868 9.997 9.868.044 0 .089 0 .134-.001 8.942-.137 22.822 3.599 29.592 9.774.09.083.186.161.277.243v33.095h-10.001c-16.574 0-30 13.424-30 30 0 14.865 10.87 27.233 25.078 29.589-2.337 6.169-2.505 12.909-.338 19.313 12.394 36.544 46.657 61.098 85.26 61.098h292c38.603 0 72.866-24.554 85.263-61.104 2.165-6.398 1.997-13.135-.339-19.303 13.94-2.292 25.076-14.423 25.076-29.593zm-470.687-141.226c10.554-84.815 83.073-148.774 168.687-148.774h92c85.614 0 158.133 63.959 168.687 148.779.722 5.779-3.787 10.811-9.356 11.184-.066.004-.132.01-.198.016-.171.015-.342.021-.513.021h-409.24c-5.89 0-10.82-5.186-10.067-11.226zm371.925 63.146c-21.975-20.039-51.502-20.039-73.477 0-14.349 13.084-32.175 13.084-46.523 0-21.975-20.039-51.502-20.039-73.477 0-14.349 13.084-32.175 13.084-46.523 0-21.975-20.038-51.502-20.04-73.479.002-12.161 11.098-26.73 12.859-39.759 5.053v-36.975h392v37.555c-12.759 7.099-26.953 5.134-38.762-5.635zm38.762 27.323v20.757h-392v-21.057c5.407 1.871 10.956 2.807 16.5 2.806 12.905 0 25.776-5.048 36.739-15.051 14.348-13.084 32.175-13.084 46.523 0 21.975 20.041 51.503 20.04 73.477 0 14.349-13.084 32.176-13.084 46.523 0 21.975 20.041 51.503 20.04 73.477 0 14.348-13.085 32.175-13.083 46.523 0 15.297 13.952 34.503 18.24 52.238 12.545zm16.32 93.236c-9.64 28.423-36.292 47.521-66.32 47.521h-292c-30.028 0-56.68-19.098-66.317-47.515-2.075-6.13 3.218-12.485 9.777-12.485h405.08c6.583 0 11.842 6.385 9.78 12.479zm13.68-32.479h-452c-5.514 0-10-4.486-10-10 0-5.521 4.479-10 10-10h452c5.514 0 10 4.486 10 10 0 5.521-4.479 10-10 10z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "T\u0159icet"), __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["info-stripe"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["info-stripe__block"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 233.591 233.591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("path", {
    d: "m172.247 38.723c-1.193 0-2.388.036-3.582.108-9.796-23.143-33.3-38.831-59.221-38.831-35.335 0-64.082 28.178-64.082 62.813 0 .122 0 .243.001.365-23.701 1.782-42.433 21.276-42.433 44.982 0 24.875 20.625 45.113 45.976 45.113h123.34c32.209 0 58.414-25.694 58.414-57.275.001-31.582-26.204-57.275-58.413-57.275zm0 99.55h-123.34c-17.08 0-30.976-13.509-30.976-30.113 0-16.605 13.896-30.115 30.976-30.115 1.054 0 2.226.08 3.687.25 2.315.274 4.624-.55 6.249-2.222 1.625-1.671 2.379-4.003 2.043-6.31-.347-2.379-.523-4.718-.523-6.951-.001-26.363 22.017-47.812 49.081-47.812 21.54 0 40.878 14.036 47.027 34.132 1.102 3.599 4.7 5.828 8.412 5.202 2.42-.406 4.897-.611 7.363-.611 23.938 0 43.414 18.965 43.414 42.275.001 23.311-19.475 42.275-43.413 42.275z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("path", {
    d: "m39.601 196.751 21.486-21.486c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.678-2.929-10.606 0l-21.486 21.486c-2.929 2.929-2.929 7.678 0 10.607 1.464 1.464 3.384 2.197 5.303 2.197 1.919-.002 3.838-.734 5.303-2.198z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("path", {
    d: "m85.439 196.751 21.484-21.486c2.929-2.929 2.928-7.678-.001-10.607-2.93-2.929-7.678-2.928-10.607.001l-21.484 21.486c-2.929 2.929-2.928 7.678 0 10.607 1.465 1.464 3.384 2.196 5.303 2.196 1.921-.001 3.841-.733 5.305-2.197z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("path", {
    d: "m131.275 196.751 21.484-21.486c2.929-2.929 2.928-7.678 0-10.607-2.93-2.929-7.678-2.928-10.607.001l-21.484 21.486c-2.929 2.929-2.928 7.678 0 10.607 1.465 1.464 3.384 2.196 5.303 2.196 1.92-.001 3.84-.733 5.304-2.197z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("path", {
    d: "m187.99 164.658-21.486 21.486c-2.929 2.929-2.929 7.678 0 10.607 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l21.486-21.486c2.929-2.929 2.929-7.678 0-10.606-2.928-2.93-7.677-2.93-10.606-.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("path", {
    d: "m53.628 199.301-21.484 21.486c-2.929 2.929-2.928 7.678 0 10.607 1.465 1.464 3.384 2.196 5.303 2.196 1.92 0 3.839-.732 5.304-2.197l21.484-21.486c2.929-2.929 2.928-7.678-.001-10.607-2.928-2.928-7.677-2.928-10.606.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("path", {
    d: "m99.599 199.301-21.484 21.486c-2.929 2.929-2.928 7.678.001 10.607 1.465 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.304-2.197l21.484-21.486c2.929-2.929 2.928-7.678 0-10.607-2.931-2.928-7.679-2.928-10.608.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("path", {
    d: "m145.57 199.301-21.484 21.486c-2.929 2.929-2.928 7.678 0 10.607 1.465 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.304-2.197l21.484-21.486c2.929-2.929 2.928-7.678-.001-10.607-2.929-2.928-7.677-2.928-10.606.001z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Pr\u0161\xED")), __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["info-stripe__block"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "-69 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("path", {
    d: "m201.625 256.265625c0-8.304687-6.730469-15.035156-15.035156-15.035156-8.304688 0-15.035156 6.730469-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125 8.304687 0 15.035156-6.730469 15.035156-15.03125zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("path", {
    d: "m201.625 303.296875c0-8.304687-6.730469-15.035156-15.035156-15.035156-8.304688 0-15.035156 6.730469-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125 8.304687 0 15.035156-6.730469 15.035156-15.03125zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("path", {
    d: "m358.179688 437.523438h-16.449219c-3.222657-95.945313-37.335938-128.6875-60.28125-150.710938-13.355469-12.816406-19.257813-18.976562-19.257813-30.738281 0-11.949219 0-19.164063 22.3125-39.921875 23.039063-21.429688 54.15625-50.394532 57.226563-141.667969h15.273437c8.28125 0 15-6.714844 15-15v-44.484375c0-8.285156-6.71875-15-15-15h-340.828125c-8.285156 0-15 6.714844-15 15v44.484375c0 8.285156 6.714844 15 15 15h15.273438c3.066406 91.273437 34.1875 120.238281 57.226562 141.667969 13.914063 12.945312 22.3125 20.757812 22.3125 39.921875 0 9.523437-5.519531 15.253906-18.003906 27.3125-23.441406 22.644531-58.304687 56.324219-61.542969 154.140625h-16.441406c-8.285156 0-15 6.714844-15 15v44.472656c0 8.285156 6.714844 15 15 15h343.175781c8.285157 0 15-6.714844 15-15v-44.476562c.003907-8.28125-6.714843-15-14.996093-15zm-327.003907-407.523438h310.828125v14.484375h-310.828125zm82.652344 274.964844c13.351563-12.898438 27.160156-26.234375 27.160156-48.890625 0-32.230469-16.207031-47.304688-31.878906-61.886719-11.132813-10.351562-22.640625-21.058594-31.691406-40.117188-9.53125-20.066406-14.785157-46.203124-15.964844-79.585937h250.269531c-1.179687 33.382813-6.433594 59.519531-15.964844 79.585937-9.050781 19.058594-20.558593 29.761719-31.6875 40.117188-15.675781 14.582031-31.878906 29.65625-31.878906 61.886719 0 25.042969 14.480469 38.941406 28.480469 52.382812 21.605469 20.734375 48.203125 46.257813 51.054687 129.066407h-.328124l-114.800782-102.835938c-5.695312-5.101562-14.320312-5.101562-20.015625 0l-114.804687 102.835938h-.320313c2.984375-84.859376 31.351563-112.257813 52.371094-132.558594zm152.609375 132.558594h-159.695312l79.847656-71.523438zm76.742188 44.476562h-313.179688v-14.476562h313.175781v14.476562zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("path", {
    d: "m186.589844 231.132812c13.835937 0 26.535156-7.605468 33.140625-19.851562 8.042969-14.902344 19.433593-25.5 28.585937-34.011719 10.410156-9.683593 19.398438-18.042969 26.550782-33.101562 3.820312-8.039063 6.890624-17.640625 9.132812-28.53125.910156-4.417969-.21875-9.007813-3.066406-12.5-2.847656-3.496094-7.117188-5.523438-11.625-5.523438h-165.4375c-4.511719 0-8.777344 2.027344-11.628906 5.523438-2.847657 3.496093-3.972657 8.085937-3.0625 12.5 2.242187 10.894531 5.3125 20.492187 9.128906 28.53125 7.152344 15.058593 16.144531 23.417969 26.550781 33.101562 9.152344 8.511719 20.542969 19.105469 28.585937 34.011719 6.605469 12.246094 19.308594 19.851562 33.144532 19.851562zm-61.179688-99.835937c-.558594-1.167969-1.09375-2.398437-1.613281-3.683594h125.582031c-.515625 1.285157-1.054687 2.511719-1.609375 3.683594-4.6875 9.871094-10.40625 15.191406-19.886719 24.007813-10.195312 9.484374-24.160156 22.476562-34.554687 41.730468-1.359375 2.527344-3.945313 4.097656-6.738281 4.097656-2.796875 0-5.378906-1.570312-6.742188-4.097656-10.390625-19.257812-24.355468-32.25-34.554687-41.734375-9.476563-8.8125-15.195313-14.132812-19.882813-24.003906zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "4 minuty")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["info-stripe__block"]]: true,
      [_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["info-stripe__block--clickable"]]: true,
      [_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["opened"]]: isOpened
    }),
    title: "Mood Song",
    onClick: () => toggle(!isOpened),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("path", {
    d: "m437.008 75.323c-48.351-48.25-112.634-74.823-181.008-74.823s-132.657 26.573-181.008 74.823c-48.359 48.259-74.992 112.425-74.992 180.677s26.633 132.418 74.992 180.677c48.351 48.25 112.634 74.823 181.008 74.823s132.657-26.573 181.008-74.823c48.359-48.259 74.992-112.425 74.992-180.677s-26.633-132.418-74.992-180.677zm-21.191 340.118c-42.687 42.599-99.444 66.059-159.817 66.059s-117.13-23.46-159.817-66.059c-42.679-42.59-66.183-99.214-66.183-159.441s23.504-116.851 66.183-159.441c42.687-42.599 99.444-66.059 159.817-66.059s117.13 23.46 159.817 66.059c42.679 42.59 66.183 99.214 66.183 159.441s-23.504 116.851-66.183 159.441z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("path", {
    d: "m256 241c-3.95 0-7.82 1.6-10.61 4.39-2.79 2.8-4.39 6.66-4.39 10.61s1.6 7.81 4.39 10.61c2.8 2.79 6.66 4.39 10.61 4.39s7.81-1.6 10.609-4.39c2.79-2.8 4.391-6.66 4.391-10.61s-1.601-7.81-4.391-10.61c-2.799-2.79-6.659-4.39-10.609-4.39z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("path", {
    d: "m256 151.561c-57.69 0-104.625 46.851-104.625 104.439s46.935 104.439 104.625 104.439 104.625-46.851 104.625-104.439-46.935-104.439-104.625-104.439zm0 178.878c-41.148 0-74.625-33.393-74.625-74.439s33.477-74.439 74.625-74.439 74.625 33.393 74.625 74.439-33.477 74.439-74.625 74.439z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("path", {
    d: "m158.043 389.617c-34.179-25.019-57.312-61.503-65.137-102.732-1.545-8.139-9.399-13.483-17.534-11.94-8.139 1.544-13.484 9.395-11.941 17.534 9.248 48.726 36.556 91.821 76.893 121.346 2.671 1.955 5.772 2.897 8.848 2.897 4.619 0 9.178-2.128 12.115-6.141 4.894-6.685 3.442-16.071-3.244-20.964z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("path", {
    d: "m448.568 219.521c-9.248-48.726-36.556-91.821-76.893-121.346-6.684-4.892-16.07-3.441-20.963 3.244-4.894 6.685-3.441 16.071 3.244 20.964 34.179 25.019 57.312 61.503 65.137 102.732 1.366 7.194 7.657 12.206 14.721 12.206.928 0 1.869-.087 2.813-.266 8.14-1.544 13.485-9.395 11.941-17.534z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Mood Song"))), __jsx(_components_SpotifyPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    URI: "spotify:track:6qU5SIE1u2fHrDXrWv9Drv",
    opened: isOpened,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Venku zase pr\u0161\xED. Prvn\xED r\xE1ny tejdne jsem vyl\xE9\u010Dil dv\u011Bma Prazdrojema a jdu se p\u0159ipravovat na \xFAter\xFD. \u017Delivsk\xE9ho. Odpo\u010Det do p\u0159\xED\u0161t\xED soupravy zamrznul na p\u011Bti minut\xE1ch a deseti vte\u0159in\xE1ch. Jsem tu s\xE1m. Proch\xE1zim se po n\xE1stupi\u0161ti sem a tam. Kouk\xE1m na \u010D\xEDslice na \u017Elut\xFD trak\u010Dn\xED kolejnici a sna\u017Eim se v nich naj\xEDt n\u011Bjakej smysl. Asi n\u011Bjakej maj, ale na jejich dek\xF3dov\xE1n\xED nem\xE1m moment\xE1ln\u011B dostatek energie. Pravd\u011Bpodobn\u011B to budou \u010D\xEDsla support\u016F, co dr\u017Eej kolejnici p\u0159imontovanou k zemi. Odpo\u010Det sko\u010Dil z p\u011Bti na dv\u011B minuty. Nikde ani \u017Eiv\xE1\u010Dka. V tuhle dobu dost netypickej pohled."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Je mi osm. Jako ka\u017Edej rok, i letos jsme s rodi\u010Dema vyjeli do Janskejch L\xE1zn\xED. T\xE1ta chce po\u0159\xE1d chodit na t\xFAry. Nen\xE1vidim to. Jsem tlustej a malej. Je odpoledne a venku neni zrovna hezk\xFD po\u010Das\xED, ale vyrazili jsme s t\xE1tou na v\xFD\u0161lap. Jsme tu jen my dva. M\xE1ma se s\xE9grou z\u016Fstaly na hotelu. P\u0159ed n\xE1ma se t\xE1hne pozvolnej kopec. Vle\u010Du se. Chci d\xE1t t\xE1tovi najevo, jak moc m\u011B tyhle proch\xE1zky nebav\u011Bj. Sna\u017E\xED se m\u011B motivovat a p\u0159id\xE1v\xE1 do kroku. Marn\u011B.")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "D\xE1lkov\xFD sv\u011Btla p\u0159ij\xED\u017Ed\u011Bj\xEDc\xED soupravy u\u017E h\xE1zej pras\xE1tka na nablejskanou kolej a vlak p\u0159ed sebou \u017Eene vzduch do stanice. Po\u0159\xE1d jsem tu s\xE1m. Kam se, do prdele, v\u0161ichni pod\u011Bli? Ve vag\xF3nu je asi p\u011Bt lid\xED. Hrozn\u011B hezk\xE1 sle\u010Dna \u010Dte z Nabokova a uj\xEDd\xE1 p\u0159itom z pytl\xEDku hroznov\xFD v\xEDno. Chlap\xEDk s bundou dopravn\xEDho podniku si pr\xE1v\u011B rozev\u0159el pl\xE1nek pra\u017Esk\xFDho metra. Sna\u017Eim se v hlav\u011B vymyslet v\u0161echny mo\u017En\xFD sc\xE9n\xE1\u0159e, pro\u010D to asi ud\u011Blal."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Vle\u010Du se d\xE1l a t\xE1ta miz\xED za horizontem. Kdy\u017E p\u0159ich\xE1zim na kopec, t\xE1ta nikde neni. V\u016Fbec nikde. Jsem tu s\xE1m. Zmoc\u0148uje se m\u011B strach a tot\xE1ln\xED beznad\u011Bj. P\u0159ede mnou dlouha cesta, kter\xE1 vede po h\u0159ebeni a\u017E k Pardubickejm boud\xE1m, napravo m\xFDtina, sr\xE1z a v\xFDhled do \xFAdol\xED.")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Dal\u0161\xED ozn\xE1men\xED o uzav\u0159en\xED stanice Muzeum. U\u017E to od\u0159ik\xE1v\xE1m spole\u010Dn\u011B s chlap\xEDkem z repr\xE1ku jako n\u011Bjakou mantru. Zm\u011Bnili hl\xE1\u0161en\xED v angli\u010Dtin\u011B. M\xE1 upln\u011B jinou formu ne\u017E to, kter\xFD pou\u017E\xEDvali v prosinci, kdy\u017E byla uzav\u0159en\xE1 druh\xE1 lo\u010F stanice. Nerozumim tomu, pro\u010D to ud\u011Blali. Mo\u017En\xE1 tam n\u011Bkdo na\u0161el n\u011Bjak\xFD chyby v p\u0159ekladu, ale p\u0159i\u0161lo mi to p\u0159edtim naprosto srozumiteln\xFD. Starom\u011Bstsk\xE1. Sle\u010Dna si strk\xE1 tlustou kn\xED\u017Eku do kabelky a d\u011Bl\xE1 uzl\xED\u010Dek na pytl\xEDku s v\xEDnem. Ale vypad\xE1 to, \u017Ee je\u0161t\u011B nevystupuje. Asi se u\u017E s p\u0159edstihem p\u0159ipravuje na v\xFDstup na Malostransk\xFD. A nebo se j\xED mo\u017En\xE1 prost\u011B u\u017E necht\u011Blo \u010D\xEDst. A j\xEDst v\xEDno bez knihy ji mo\u017En\xE1 taky nebav\xED. Mo\u017En\xE1."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Bre\u010Dim a vol\xE1m na t\xE1tu. \u017D\xE1dn\xE1 odpov\u011B\u010F. Vol\xE1m znovu. Myslim, \u017Ee i nad\xE1v\xE1m. Najednou se napravo nad m\xFDtinou objev\xED obl\xE1\u010Dek kou\u0159e. Jdu na okraj cesty. T\xE1ta sed\xED na sr\xE1zu v tr\xE1v\u011B a kou\u0159\xED. Strach je pry\u010D. T\xE1ta je tu. Sna\u017Eim se d\u011Blat jako\u017Ee nic. Jsem na n\u011Bj hrozn\u011B na\u0161tvanej. Chyt\xE1m ho za ruku. Do konce dne s nim ale nepromluvim.")), __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["nav-stripe"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["nav-stripe__block"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("svg", {
    viewBox: "0 0 330 330",
    style: {
      transform: "rotate(180deg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("path", {
    d: "m325.606 154.392-130-129.999c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l104.395 104.396-263.79.014c-8.283 0-14.998 6.716-14.998 15s6.717 15 15.001 14.999l263.784-.014-104.391 104.392c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394s7.678-1.465 10.606-4.394l130-130.001c2.813-2.813 4.394-6.628 4.394-10.606s-1.58-7.794-4.394-10.607z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Star\u0161\xED z\xE1znam")), __jsx("div", {
    className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a["nav-stripe__block"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Nov\u011Bj\u0161\xED z\xE1znam"), __jsx("svg", {
    viewBox: "0 0 330 330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("path", {
    d: "m325.606 154.392-130-129.999c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l104.395 104.396-263.79.014c-8.283 0-14.998 6.716-14.998 15s6.717 15 15.001 14.999l263.784-.014-104.391 104.392c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394s7.678-1.465 10.606-4.394l130-130.001c2.813-2.813 4.394-6.628 4.394-10.606s-1.58-7.794-4.394-10.607z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))))), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "O blogu"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "M\xE1m r\xE1d, kdy\u017E pr\u0161\xED. M\xE1m r\xE1d, kdy\u017E pr\u0161\xED ve m\u011Bst\u011B. Kdy\u017E pr\u0161\xED, n\u011Bkdy o tom nap\xED\u0161u. N\u011Bkdy ale nap\xED\u0161u, i kdy\u017E nepr\u0161\xED. V\xEDtej na blogu o de\u0161ti, m\u011Bst\u011B, blbejch lidech, tramvaj\xEDch a letadlech."), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\xA9 2018 - 2019 venkuzaseprsi.cz")));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"info-stripe": "_3_kmjDNOV6wbT3VGjjXRyQ",
	"info-stripe__block": "_1kmnoDtt48NTDDLN-0RwYj",
	"info-stripe__block--clickable": "_8PQ6cmmKcp4WSrKO4hKut",
	"opened": "_11mQbKIywbRrGsog3UM-IM",
	"nav-stripe": "AwwwL6AmX6gm_uBZBM3t6",
	"nav-stripe__block": "_1CQLUd7IhpUyPc1Oa1xO9w"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spotify-player":
/*!***************************************!*\
  !*** external "react-spotify-player" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spotify-player");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map