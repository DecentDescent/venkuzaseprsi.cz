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

/***/ "./components/Head/index.js":
/*!**********************************!*\
  !*** ./components/Head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/components/Head/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  description,
  ogImage
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Venku zase pr\u0161\xED"), __jsx("meta", {
  name: "description",
  content: "M\xE1m r\xE1d, kdy\u017E pr\u0161\xED. M\xE1m r\xE1d, kdy\u017E pr\u0161\xED ve m\u011Bst\u011B. Kdy\u017E pr\u0161\xED, n\u011Bkdy o tom nap\xED\u0161u. N\u011Bkdy ale nap\xED\u0161u, i kdy\u017E nepr\u0161\xED. V\xEDtej na blogu o de\u0161ti, m\u011Bst\u011B, blbejch lidech, tramvaj\xEDch a letadlech.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: "Venku zase pr\u0161\xED",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: "https://www.venkuzaseprsi.cz/static/og.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: "M\xE1m r\xE1d, kdy\u017E pr\u0161\xED. M\xE1m r\xE1d, kdy\u017E pr\u0161\xED ve m\u011Bst\u011B. Kdy\u017E pr\u0161\xED, n\u011Bkdy o tom nap\xED\u0161u. N\u011Bkdy ale nap\xED\u0161u, i kdy\u017E nepr\u0161\xED. V\xEDtej na blogu o de\u0161ti, m\u011Bst\u011B, blbejch lidech, tramvaj\xEDch a letadlech.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("meta", {
  name: "apple-mobile-web-app-status-bar-style",
  content: "default",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:url",
  content: "https://www.venkuzaseprsi.cz",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "https://www.venkuzaseprsi.cz/static/favicon/apple-touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "https://www.venkuzaseprsi.cz/static/favicon/favicon-32x32.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "https://www.venkuzaseprsi.cz/static/favicon/favicon-16x16.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("link", {
  rel: "manifest",
  href: "https://www.venkuzaseprsi.cz/static/favicon/site.webmanifest",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx("link", {
  rel: "mask-icon",
  href: "https://www.venkuzaseprsi.cz/static/favicon/safari-pinned-tab.svg",
  color: "#ffd25a",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#ffffff",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})));

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
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Head */ "./components/Head/index.js");
var _jsxFileName = "/Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const serializers = {
  types: {
    code: props => __jsx("pre", {
      "data-language": props.node.language,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    }, __jsx("code", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, props.node.code))
  }
};

class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[_type%20==%20%27post%27]").then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result.result
      });
    }, error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    const {
      error,
      isLoaded,
      items
    } = this.state;

    if (error) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Error: ", error.message);
    } else if (!isLoaded) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Loading...");
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), items.map(item => __jsx("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, item.title), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, item.song), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        blocks: item.body,
        serializers: serializers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/decent_descent/Documents/Devel/venkuzaseprsi.cz/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map