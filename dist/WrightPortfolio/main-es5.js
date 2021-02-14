function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div appParallax [ratio]=\"0.3\" id=\"landing\">\n  <!-- <canvas #randomcanvas style=\"height: 100%; margin: -8px; width:100%;\"></canvas> -->\n  <div class=\"left\">\n    <h1 class=\"typewrite\" appTypewriter href=\"\" [period]=\"1000\"\n      [rotatedWords]='[ \"Hi I&#39;m a software developer\", \"Hi I&#39;m a designer\", \"Hi I&#39;m Trae Wright.\"]'>Hi, I'm\n      Trae Wright.</h1>\n    <h2>This is where I store my nerd stuff.</h2>\n  </div>\n\n  <div class=\"right\" style=\"margin-top: -30px\">\n    <img id=\"flat_me\" src=\"/assets/images/flatMe.png\" width=\"200\" height=\"200\">\n  </div>\n\n\n  <div appParallax [ratio]=\".6\" class=\"bottom-middle\" [@isLoaded]=\"isLoaded ? 'loaded' : 'notLoaded'\">\n    <svg #downArrowLeft [@leftArrow]=\"arrowDirection\" height=\"25\" width=\"25\">\n      <line x1=\"0\" y1=\"0\" x2=\"25\" y2=\"0\" style=\"stroke:rgb(255,255,255);stroke-width:2\" />\n      Sorry, your browser does not support inline SVG.\n    </svg>\n\n    <svg #downArrowRight [@rightArrow]=\"arrowDirection\" height=\"25\" width=\"25\">\n      <line x1=\"0\" y1=\"0\" x2=\"25\" y2=\"0\" style=\"stroke:rgb(255,255,255);stroke-width:2\" />\n      Sorry, your browser does not support inline SVG.\n    </svg>\n  </div>\n</div>\n\n<div style=\"position: relative; height:100vh;\">\n</div>\n\n<!-- <div appParallax [ratio]=\"1.2\" class=\"panel\" style=\"left: 0%\"></div>\n<div appParallax [ratio]=\"1.1\" class=\"panel\" style=\"left: 25%\"></div>\n<div appParallax [ratio]=\"1.23\" class=\"panel\" style=\"left: 50%\"></div>\n<div appParallax [ratio]=\"1.14\" class=\"panel\" style=\"left: 75%\"></div> -->\n\n<div class=\"content\" role=\"main\">\n  <tab-component>\n    <about-tab #tabItem></about-tab>\n    <projects-tab #tabItem></projects-tab>\n    <contact-tab #tabItem></contact-tab>\n  </tab-component>\n</div>\n\n<!-- Footer -->\n<!-- <footer class=\"page-footer font-small unique-color-dark pt-4\">\n  <div class=\"container\">\n\n\n  </div>\n</footer> -->\n<!-- Footer -->\n\n<!-- Toolbar -->\n<div id=\"toolbar\" class=\"toolbar\" role=\"banner\">\n  <img width=\"40\" src=\"/assets/images/flatMe.png\" />\n  <span style=\"font-family: roboto;\">Wright Portolio</span>\n  <div class=\"spacer\"></div>\n  <a target=\"_blank\" rel=\"noopener\" href=\"https://www.linkedin.com/in/traewright/\" title=\"LinkedIn\">\n    <img src=\"https://icon-library.net/images/linkedin-icon-no-background/linkedin-icon-no-background-8.jpg\" height=\"24\"\n      viewBox=\"0 0 400 400\">\n  </a>\n  <a target=\"_blank\" rel=\"noopener\" href=\"https://www.github.com/WrightTrae\" title=\"GitHub\">\n    <img src=\"https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png\" height=\"24\" viewBox=\"0 0 400 400\">\n  </a>\n</div>\n<!-- Toolbar End -->\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/contact.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/contact.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tab-label>\n    Contact Me\n</tab-label>\n<tab-body>\n    <a class=\"link-text\" href=\"mailto:wrightdevelopment@outlook.com\" target=\"_blank\">Email</a>\n    <a class=\"link-text\" href=\"https://www.linkedin.com/in/traewright/\" target=\"_blank\">LinkedIn</a>\n</tab-body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/projects/projects.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/projects/projects.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tab-label>\n    PROJECTS\n</tab-label>\n<tab-body>\n    <project-tab-component>\n        <project-gng-tab #tabItem></project-gng-tab>\n        <project-flat-tab #tabItem></project-flat-tab>\n        <project-nu-tab #tabItem></project-nu-tab>\n        <project-shared-tab #tabItem></project-shared-tab>\n        <project-marble-tab #tabItem></project-marble-tab>\n    </project-tab-component>\n</tab-body>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#landing {\n  background-color: #007BBF;\n  height: 100vh;\n  width: 100%;\n  max-width: 100%;\n  margin: -8px;\n  padding: 8px;\n  position: fixed;\n}\n\n.left {\n  position: absolute;\n  left: 20%;\n  top: 30%;\n  max-width: 100%;\n  width: 350px;\n  padding: 10px;\n}\n\n.right {\n  position: absolute;\n  right: 20%;\n  top: 30%;\n  max-width: 100%;\n  width: 350;\n  padding: 10px;\n}\n\n.bottom-middle {\n  position: absolute;\n  right: 50%;\n  bottom: 5vh;\n  max-width: 100%;\n  margin-right: -30px;\n  height: 200;\n  width: 200;\n  padding: 10px;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #000;\n  margin: 1em 0;\n  margin-top: 75px;\n  padding: 0;\n}\n\n.project-group {\n  padding: 5px;\n}\n\n.project-group h2 {\n  color: #fff;\n  margin-left: 10px;\n  font-family: roboto-thin;\n}\n\n.project-group a {\n  margin-left: 10px;\n  font-family: roboto-light;\n}\n\n.image-container {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  grid-gap: 5vh;\n  margin: 20px;\n  max-width: 100%;\n}\n\n.image-container img {\n  width: 100%;\n  border: 1px solid #ffffff50;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 10%;\n  width: 85%;\n  margin: 0 auto;\n  margin-top: 60px;\n}\n\n.grid-container div {\n  padding: 25px;\n  padding-top: 10px;\n  padding-bottom: 40px;\n}\n\n.grid-container div h2 {\n  color: #ffffff;\n  text-align: center;\n  overflow: auto;\n  font-family: roboto-regular;\n}\n\n.grid-container div body {\n  color: #fff;\n  font-family: roboto-light;\n  background-color: #26262600;\n}\n\n.link-text {\n  color: #2b8eff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9URENXL0Rlc2t0b3AvVHJhZSBEZXNrdG9wL1Byb2plY3RzL1dyaWdodFBvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsYW5kaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JCRjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAtOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwJTtcbiAgdG9wOiAzMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMCU7XG4gIHRvcDogMzAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAzNTA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib3R0b20tbWlkZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTAlO1xuICBib3R0b206IDV2aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xuICBoZWlnaHQ6IDIwMDtcbiAgd2lkdGg6IDIwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbjogMWVtIDA7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9qZWN0LWdyb3VwIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnByb2plY3QtZ3JvdXAgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tdGhpbjtcbn1cblxuLnByb2plY3QtZ3JvdXAgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogcm9ib3RvLWxpZ2h0O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICBncmlkLWdhcDogNXZoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmNTA7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLWdhcDogMTAlO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIGRpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICMwMDAwMDA1MDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbn1cblxuLmdyaWQtY29udGFpbmVyIGRpdiBoMiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmb250LWZhbWlseTogcm9ib3RvLXJlZ3VsYXI7XG59XG5cbi5ncmlkLWNvbnRhaW5lciBkaXYgYm9keSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogcm9ib3RvLWxpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2MDBcbn1cblxuLmxpbmstdGV4dCB7XG4gIGNvbG9yOiAjMmI4ZWZmO1xufVxuIiwiI2xhbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkJGO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IC04cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDMwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwJTtcbiAgdG9wOiAzMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDM1MDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJvdHRvbS1taWRkbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJvdHRvbTogNXZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTMwcHg7XG4gIGhlaWdodDogMjAwO1xuICB3aWR0aDogMjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5ociB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgbWFyZ2luLXRvcDogNzVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2plY3QtZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWdyb3VwIGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogcm9ib3RvLXRoaW47XG59XG5cbi5wcm9qZWN0LWdyb3VwIGEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1mYW1pbHk6IHJvYm90by1saWdodDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDV2aDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY1MDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGdyaWQtZ2FwOiAxMCU7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIgZGl2IHtcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uZ3JpZC1jb250YWluZXIgZGl2IGgyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tcmVndWxhcjtcbn1cblxuLmdyaWQtY29udGFpbmVyIGRpdiBib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbGlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjYwMDtcbn1cblxuLmxpbmstdGV4dCB7XG4gIGNvbG9yOiAjMmI4ZWZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(elemRef) {
        _classCallCheck(this, AppComponent);

        this.title = 'WrightPortfolio';
        this.elemRef = elemRef;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.elemRef.nativeElement.ownerDocument.body.style.backgroundColor = '#007BBF';

          window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            if (currentScrollPos < 100) {
              this.arrowDirection = "down";
            } else {
              this.arrowDirection = "up";
            }
          }.bind(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          setTimeout(function () {
            _this.isLoaded = true;
            _this.arrowDirection = "down";
          }, 250);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('isLoaded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '25px',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('notLoaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('notLoaded => loaded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@rightArrow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@leftArrow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')])])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rightArrow', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate(5px, 0px) rotate(-45deg) '
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate(-12px, 0px) rotate(45deg) '
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('leftArrow', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate(-5px, 0px) rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translate(12px, 0px) rotate(-45deg) '
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms')])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _directives_parallax_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/parallax.directive */
    "./src/app/directives/parallax.directive.ts");
    /* harmony import */


    var _directives_typewriter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./directives/typewriter.directive */
    "./src/app/directives/typewriter.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _tabs_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tabs/tab.component */
    "./src/app/tabs/tab.component.ts");
    /* harmony import */


    var _tabs_tab_item_tab_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tabs/tab-item/tab-body.component */
    "./src/app/tabs/tab-item/tab-body.component.ts");
    /* harmony import */


    var _tabs_tab_item_tab_label_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tabs/tab-item/tab-label.component */
    "./src/app/tabs/tab-item/tab-label.component.ts");
    /* harmony import */


    var _tabs_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tabs/tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");
    /* harmony import */


    var _tabs_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tabs/about.component */
    "./src/app/tabs/about.component.ts");
    /* harmony import */


    var _tabs_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tabs/projects/projects.component */
    "./src/app/tabs/projects/projects.component.ts");
    /* harmony import */


    var _tabs_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./tabs/contact.component */
    "./src/app/tabs/contact.component.ts");
    /* harmony import */


    var _tabs_projects_project_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tabs/projects/project-tabs.component */
    "./src/app/tabs/projects/project-tabs.component.ts");
    /* harmony import */


    var _tabs_projects_project_gng_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./tabs/projects/project-gng.component */
    "./src/app/tabs/projects/project-gng.component.ts");
    /* harmony import */


    var _tabs_projects_project_flat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./tabs/projects/project-flat.component */
    "./src/app/tabs/projects/project-flat.component.ts");
    /* harmony import */


    var _tabs_projects_project_nu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./tabs/projects/project-nu.component */
    "./src/app/tabs/projects/project-nu.component.ts");
    /* harmony import */


    var _tabs_projects_project_marble_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./tabs/projects/project-marble.component */
    "./src/app/tabs/projects/project-marble.component.ts");
    /* harmony import */


    var _tabs_projects_project_shared_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./tabs/projects/project-shared.component */
    "./src/app/tabs/projects/project-shared.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _directives_parallax_directive__WEBPACK_IMPORTED_MODULE_6__["ParallaxDirective"], _directives_typewriter_directive__WEBPACK_IMPORTED_MODULE_7__["TypewriterDirective"], _tabs_tab_component__WEBPACK_IMPORTED_MODULE_10__["TabComponent"], _tabs_projects_project_tabs_component__WEBPACK_IMPORTED_MODULE_17__["ProjectTabComponent"], _tabs_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_13__["TabItemComponent"], _tabs_tab_item_tab_body_component__WEBPACK_IMPORTED_MODULE_11__["TabBodyComponent"], _tabs_tab_item_tab_label_component__WEBPACK_IMPORTED_MODULE_12__["TabLabelComponent"], _tabs_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _tabs_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"], _tabs_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _tabs_projects_project_gng_component__WEBPACK_IMPORTED_MODULE_18__["ProjectGNGComponent"], _tabs_projects_project_flat_component__WEBPACK_IMPORTED_MODULE_19__["ProjectFlatComponent"], _tabs_projects_project_nu_component__WEBPACK_IMPORTED_MODULE_20__["ProjectNuComponent"], _tabs_projects_project_marble_component__WEBPACK_IMPORTED_MODULE_21__["ProjectMarbleComponent"], _tabs_projects_project_shared_component__WEBPACK_IMPORTED_MODULE_22__["ProjectSharedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/directives/parallax.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/directives/parallax.directive.ts ***!
    \**************************************************/

  /*! exports provided: ParallaxDirective */

  /***/
  function srcAppDirectivesParallaxDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function () {
      return ParallaxDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParallaxDirective = /*#__PURE__*/function () {
      function ParallaxDirective(eleRef) {
        _classCallCheck(this, ParallaxDirective);

        this.eleRef = eleRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
      }

      _createClass(ParallaxDirective, [{
        key: "onWindowScroll",
        value: function onWindowScroll(event) {
          this.eleRef.nativeElement.style.top = this.initialTop - window.scrollY * this.parallaxRatio + 'px';
        }
      }]);

      return ParallaxDirective;
    }();

    ParallaxDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ratio')], ParallaxDirective.prototype, "parallaxRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ParallaxDirective.prototype, "onWindowScroll", null);
    ParallaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appParallax]'
    })], ParallaxDirective);
    /***/
  },

  /***/
  "./src/app/directives/typewriter.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/directives/typewriter.directive.ts ***!
    \****************************************************/

  /*! exports provided: TypewriterDirective */

  /***/
  function srcAppDirectivesTypewriterDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypewriterDirective", function () {
      return TypewriterDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypewriterDirective = /*#__PURE__*/function () {
      function TypewriterDirective(eleRef) {
        _classCallCheck(this, TypewriterDirective);

        this.eleRef = eleRef;
        this.loopNum = 0;
        this.txt = "";
        this.isDeleting = false;
        this.subString = "";
        this.subMatch = false;
        this.elementRef = eleRef;
      }

      _createClass(TypewriterDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // if (this.rotatedWords.length >= 2) {
          // 	this.doStartTheSame(this.rotatedWords[0], this.rotatedWords[1]);
          // }
          this.typeW(); // Inject css for cursor at end of line

          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
          document.body.appendChild(css);
        } // This is ran for every character in the words that were passed in eg- E Ex Exa Exam Examp Exampl Example ...

      }, {
        key: "typeW",
        value: function typeW(inSubString, index) {
          var i = this.loopNum % this.rotatedWords.length;
          var matchingSubString = inSubString;
          var newMatch = false;
          var oldMatch = matchingSubString && matchingSubString != '';
          var fullTxt = this.rotatedWords[i];

          if (!this.isDeleting && oldMatch) {
            fullTxt = fullTxt.substring(matchingSubString.length, fullTxt.length);
          }

          if (this.isDeleting) {
            var subOldWord = fullTxt.substring(0, this.txt.length - 1);
            var nextWord = this.rotatedWords[i + 1] || this.rotatedWords[0];
            var subNextWord = nextWord.substring(0, this.txt.length - 1); // Compare current word against next word to see if we can skip deleting the rest.

            if (subOldWord === subNextWord) {
              matchingSubString = subNextWord;
              newMatch = true;
            }

            this.txt = subOldWord;
          } else {
            this.txt = ((matchingSubString || "") + fullTxt).substring(0, this.txt.length + 1);
          } // Replace the text


          this.elementRef.nativeElement.innerHTML = '<span class="wrap">' + this.txt + '</span>';
          var that = this; // How long before it starts 'typing' again

          var delta = 200 - Math.random() * 100;

          if (this.isDeleting) {
            delta /= 2;
          }

          if (!this.isDeleting && this.txt === (oldMatch ? matchingSubString + fullTxt : fullTxt)) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '' || newMatch) {
            // The word is done being deleted, get ready for next word
            if (!newMatch) {
              matchingSubString = '';
            }

            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function () {
            that.typeW(matchingSubString);
          }, delta);
        }
      }]);

      return TypewriterDirective;
    }();

    TypewriterDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rotatedWords')], TypewriterDirective.prototype, "rotatedWords", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('period')], TypewriterDirective.prototype, "period", void 0);
    TypewriterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appTypewriter]'
    })], TypewriterDirective);
    /***/
  },

  /***/
  "./src/app/tabs/about.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/tabs/about.component.ts ***!
    \*****************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppTabsAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var AboutComponent = /*#__PURE__*/function (_tab_item_tab_item_co) {
      _inherits(AboutComponent, _tab_item_tab_item_co);

      var _super = _createSuper(AboutComponent);

      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        return _super.apply(this, arguments);
      }

      return AboutComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "about-tab",
      template: "<tab-label>\n    About Me\n</tab-label>\n<tab-body>\n    <div class=\"grid-container\">\n        <img src=\"/assets/images/port.jpg\" alt=\"Photos\">\n        <div>\n            <body> I like to say that I specialize in Mobile and Cloud development, but my day to day often changes based on the tasks at hand. Because of this I often fill the roles of a Web or Backend Developer. I can confidently say that I know several programming languages and that's barely scratching the surface, but for me that's the best part about what I do. I have worked on many different apps both IOS and Android. I have also extensively worked on several projects as a web and full stack developer. .</body>\n        </div>\n    </div>\n</tab-body>",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/tabs/contact.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/tabs/contact.component.ts ***!
    \*******************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppTabsContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ContactComponent = /*#__PURE__*/function (_tab_item_tab_item_co2) {
      _inherits(ContactComponent, _tab_item_tab_item_co2);

      var _super2 = _createSuper(ContactComponent);

      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        return _super2.apply(this, arguments);
      }

      return ContactComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "contact-tab",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-flat.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/projects/project-flat.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectFlatComponent */

  /***/
  function srcAppTabsProjectsProjectFlatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectFlatComponent", function () {
      return ProjectFlatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectFlatComponent = /*#__PURE__*/function (_tab_item_tab_item_co3) {
      _inherits(ProjectFlatComponent, _tab_item_tab_item_co3);

      var _super3 = _createSuper(ProjectFlatComponent);

      function ProjectFlatComponent() {
        _classCallCheck(this, ProjectFlatComponent);

        return _super3.apply(this, arguments);
      }

      return ProjectFlatComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectFlatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-flat-tab",
      template: "\n        <tab-label>\n            Flat Design People\n        </tab-label>\n        <tab-body>\n            <div class=\"image-container\">\n                <img src=\"/assets/images/flat-one.png\" alt=\"Flat One\">\n                <img src=\"/assets/images/flat-two.png\" alt=\"Flat Two\">\n                <img src=\"/assets/images/flat-three.png\" alt=\"Flat Three\">\n            </div>\n\n            <div class=\"description-container\">\n                <div>\n                    <h2 class=\"project-header\">\n                        Flat Design People\n                    </h2>\n                    <body class=\"project-text\">\n                        <ul>\n                            <li>Developed 2018</li>\n                            <li>Created in Illustrator</li>\n                        </ul> \n                    </body>\n                </div>\n                <body class=\"project-text\">\n                    I was looking through reddit and I found \n                    <a class=\"link-text\" href=\"https://www.reddit.com/r/Design/comments/c468u1/what_is_this_type_of_illustration_called_whats/\" target=\"_blank\">\n                        this post\n                    </a>\n                    . The design in the reddit post was created by google for an event, \n                    so being the google fan boy that I am it inspired me to try and recreate it. \n                    I created the first flat design person to resemble the design made by google. \n                    Then I created a couple different people with same design concept.\n                </body>\n            </div>\n        </tab-body>\n    ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectFlatComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-gng.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/tabs/projects/project-gng.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectGNGComponent */

  /***/
  function srcAppTabsProjectsProjectGngComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectGNGComponent", function () {
      return ProjectGNGComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectGNGComponent = /*#__PURE__*/function (_tab_item_tab_item_co4) {
      _inherits(ProjectGNGComponent, _tab_item_tab_item_co4);

      var _super4 = _createSuper(ProjectGNGComponent);

      function ProjectGNGComponent() {
        _classCallCheck(this, ProjectGNGComponent);

        return _super4.apply(this, arguments);
      }

      return ProjectGNGComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectGNGComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-gng-tab",
      template: "\n        <tab-label>\n            Go/No Go\n        </tab-label>\n        <tab-body>\n            <div class=\"image-container\">\n                <img src=\"/assets/images/gng-login.gif\" alt=\"Login Animation\">\n                <img src=\"/assets/images/gng-manifest.gif\" alt=\"Manifest\">\n                <img src=\"/assets/images/gng-ar.gif\" alt=\"AR\">\n                <img src=\"/assets/images/gng-photos.gif\" alt=\"Photos\">\n            </div>\n\n            <div class=\"description-container\">\n                <div>\n                    <h2 class=\"project-header\">\n                        Go/No Go\n                    </h2>\n                    <body class=\"project-text\">\n                        <ul>\n                            <li>Developed 2018-2020</li>\n                            <li>\n                                <a class=\"link-text\" href=\"https://play.google.com/store/apps/details?id=com.wright.android.t_minus\" target=\"_blank\">\n                                    Published on the Google Play store\n                                </a>\n                            </li>\n                            <li>Frontend is Native Android and backend is hosted on Firebase</li>\n                            <li>Uses ARCore and has its own image sharing platform</li>\n                        </ul> \n                    </body>\n                </div>\n                <body class=\"project-text\">\n                    The goal of this application is to provided users with the ability to stay up to date on rocket launches\n                    taking place and make the process of viewing the launch a breeze. It will allow users to see\n                    when a rocket launch will take place then see the launch pad in their camera using AR technology. This will\n                    allow the user to know exactly where to look when the rocket is about to launch so they never miss a moment. It\n                    also will suggest restaurants nearby the rocket launch that offer deals for people wanting to view the\n                    launch.\n                </body>\n            </div>\n        </tab-body>\n    ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectGNGComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-marble.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tabs/projects/project-marble.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectMarbleComponent */

  /***/
  function srcAppTabsProjectsProjectMarbleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectMarbleComponent", function () {
      return ProjectMarbleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectMarbleComponent = /*#__PURE__*/function (_tab_item_tab_item_co5) {
      _inherits(ProjectMarbleComponent, _tab_item_tab_item_co5);

      var _super5 = _createSuper(ProjectMarbleComponent);

      function ProjectMarbleComponent() {
        _classCallCheck(this, ProjectMarbleComponent);

        return _super5.apply(this, arguments);
      }

      return ProjectMarbleComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectMarbleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-marble-tab",
      template: "\n        <tab-label>\n            Vex Marble sorter\n        </tab-label>\n        <tab-body>\n            <div class=\"container\">\n            <iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/xBjC0kDTT14\">\n            </iframe>\n            </div>\n\n            <div class=\"description-container\">\n                <div>\n                    <h2 class=\"project-header\">\n                        Vex Marble Sorter\n                    </h2>\n                    <body class=\"project-text\">\n                        <ul>\n                            <li>Developed 2016</li>\n                            <li>Developed using ROBOTC</li>\n                            <li>Used a light sensor with averaging values to determine the color</li>\n                        </ul> \n                    </body>\n                </div>\n                <body class=\"project-text\">\n                    This was created using VEX programming software and VEX robotics equipment without a guide/ kit.\n                    It has a flashlight to shine light into the marble, so the light sensor mounted under the frame can\n                    detect what color it is based on the amount of light that passed throughout the marble. If the\n                    program can not get a solid reading of the marble it will re-scan the marble 3 times and average the\n                    results to find the correct color. Then a gear spins one of four Dixie cups into the correct\n                    position to catch the marble.\n                </body>\n            </div>\n        </tab-body>\n    ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectMarbleComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-nu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tabs/projects/project-nu.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectNuComponent */

  /***/
  function srcAppTabsProjectsProjectNuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectNuComponent", function () {
      return ProjectNuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectNuComponent = /*#__PURE__*/function (_tab_item_tab_item_co6) {
      _inherits(ProjectNuComponent, _tab_item_tab_item_co6);

      var _super6 = _createSuper(ProjectNuComponent);

      function ProjectNuComponent() {
        _classCallCheck(this, ProjectNuComponent);

        return _super6.apply(this, arguments);
      }

      return ProjectNuComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectNuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-nu-tab",
      template: "\n        <tab-label>\n            N\xFB\n        </tab-label>\n        <tab-body>\n            <div class=\"container\">\n                <iframe class=\"responsive-iframe\" src=\"https://www.youtube.com/embed/garVm3b0U-s\"></iframe>\n            </div>\n\n            <div class=\"description-container\">\n                <div>\n                    <h2 class=\"project-header\">\n                        N\xFB\n                    </h2>\n                    <body class=\"project-text\">\n                        <ul>\n                            <li>Developed 2018</li>\n                            <li>Frontend is Native Android and backend is hosted on Firebase</li>\n                            <li>Uses opencv to read and parse receipts</li>\n                        </ul> \n                    </body>\n                </div>\n\n                <body class=\"project-text\">\n                    N\xFB helps people better organize their food by keeping track of what they have and suggesting\n                    recipes based on the food they currently have. On top of that N\xFB will also notify the user before\n                    food items perish date. This app gives you the knowledge to cook a meal every night without having\n                    to hopelessly search through recipes that you found online for the perfect recipe that you have all\n                    the ingredients for. All you have to do is receipt as soon as you get home and then you will\n                    instantly receive recommendations for what to eat.\n                </body>\n            </div>\n        </tab-body>",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectNuComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-shared.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tabs/projects/project-shared.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectSharedComponent */

  /***/
  function srcAppTabsProjectsProjectSharedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectSharedComponent", function () {
      return ProjectSharedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectSharedComponent = /*#__PURE__*/function (_tab_item_tab_item_co7) {
      _inherits(ProjectSharedComponent, _tab_item_tab_item_co7);

      var _super7 = _createSuper(ProjectSharedComponent);

      function ProjectSharedComponent() {
        _classCallCheck(this, ProjectSharedComponent);

        return _super7.apply(this, arguments);
      }

      return ProjectSharedComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-shared-tab",
      template: "\n        <tab-label>\n            Shared Goods\n        </tab-label>\n\n        <tab-body>\n            <div class=\"description-container\">\n                <div>\n                    <h2 class=\"project-header\">\n                        Shared Goods\n                    </h2>\n                    <body class=\"project-text\">\n                        <ul>\n                            <li>Developed 2017</li>\n                            <li>Frontend is Native Android and Native iOS, the backend is hosted on Firebase</li>\n                        </ul> \n                    </body>\n                </div>\n                <body class=\"project-text\">\n                    Shared Goods is a shared grocery list app that allows multiple people on separate devices to\n                    interact with the list. You can invite up to two other people to join your list. When someone other\n                    than you removes an item from the list it will send a notification to your watch letting you know\n                    that they have gotten that item.\n                </body>\n            </div>\n        </tab-body>\n    ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectSharedComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/project-tabs.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/projects/project-tabs.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProjectTabComponent */

  /***/
  function srcAppTabsProjectsProjectTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectTabComponent", function () {
      return ProjectTabComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProjectTabComponent = /*#__PURE__*/function () {
      function ProjectTabComponent() {
        _classCallCheck(this, ProjectTabComponent);

        this.labelStyle = {
          'transition': 'font-size .25s',
          'font-family': 'Roboto',
          'text-align': 'left'
        };
        this.selectedStyle = {
          'color': 'white',
          'font-size': '26px'
        };
        this.unSelectedStyle = {
          'color': '#858585',
          'font-size': '25px'
        };
      }

      _createClass(ProjectTabComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this.tabItems$ = this.tabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])("")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            console.log(_this2.tabs);
            return _this2.tabs.toArray();
          }));
          console.log(this.tabItems$);
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this3 = this;

          //choose the default tab
          // we need to wait for a next VM turn,
          // because Tab item content, will not be initialized yet
          if (!this.activeTab) {
            Promise.resolve().then(function () {
              _this3.activeTab = _this3.tabs.first;
            });
          }
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabItem) {
          if (this.activeTab === tabItem) {
            return;
          }

          if (this.activeTab) {
            this.activeTab.isActive = false;
          }

          this.activeTab = tabItem;
          tabItem.isActive = true;
        }
      }, {
        key: "getStyle",
        value: function getStyle(tabItem) {
          return Object.assign(this.labelStyle, this.activeTab === tabItem ? this.selectedStyle : this.unSelectedStyle);
        }
      }]);

      return ProjectTabComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])('tabItem')], ProjectTabComponent.prototype, "tabs", void 0);
    ProjectTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "project-tab-component",
      template: "\n  <div class=\"container\">\n      <div class=\"tabs-header\">\n        <div\n          (click)=\"selectTab(item)\"\n          [ngStyle]=\"getStyle(item)\"\n          *ngFor=\"let item of tabItems$ | async\"\n        >\n          <ng-container *ngIf=\"item.labelComponent\">\n            <ng-container *ngTemplateOutlet=\"item.labelComponent.labelContent\">\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"!item.labelComponent\">\n            {{ item.label }}\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"tabs-body\">\n        <ng-container *ngIf=\"activeTab && activeTab.bodyComponent\">\n          <ng-container *ngTemplateOutlet=\"activeTab.bodyComponent.bodyContent\">\n          </ng-container>\n        </ng-container>\n      </div>\n      </div>\n    ",
      styles: ["\n        .container {\n            display: grid;\n            grid-template-columns: auto auto;\n            grid-gap: 5%;\n            width: 90%;\n            margin: 0 auto;\n            margin-top: 60px;\n        }\n\n        .tabs-header {\n          display: grid;\n          grid-gap: 1%;\n          grid-template-rows: auto auto auto auto auto 1fr;\n        }\n\n        .tabs-body {\n\n        }\n      "]
    })], ProjectTabComponent);
    /***/
  },

  /***/
  "./src/app/tabs/projects/projects.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tabs/projects/projects.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppTabsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tab-item/tab-item.component */
    "./src/app/tabs/tab-item/tab-item.component.ts");

    var ProjectsComponent = /*#__PURE__*/function (_tab_item_tab_item_co8) {
      _inherits(ProjectsComponent, _tab_item_tab_item_co8);

      var _super8 = _createSuper(ProjectsComponent);

      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        return _super8.apply(this, arguments);
      }

      return ProjectsComponent;
    }(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__["TabItemComponent"]);

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "projects-tab",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../app.component.scss */
      "./src/app/app.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../styles/style.scss */
      "./src/app/tabs/styles/style.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/tabs/styles/style.scss":
  /*!****************************************!*\
    !*** ./src/app/tabs/styles/style.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsStylesStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".project-container {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 5%;\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 60px;\n}\n\n.description-container {\n  display: grid;\n  grid-template-columns: 35% 65%;\n  grid-gap: 10%;\n  width: 85%;\n  margin: 0 auto;\n  margin-top: 60px;\n}\n\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n.project-header {\n  color: #ffffff;\n  text-align: left;\n  overflow: auto;\n  font-family: roboto-regular;\n}\n\n.project-text {\n  color: #fff;\n  font-family: roboto-light;\n  background-color: #26262600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9URENXL0Rlc2t0b3AvVHJhZSBEZXNrdG9wL1Byb2plY3RzL1dyaWdodFBvcnRmb2xpby9zcmMvYXBwL3RhYnMvc3R5bGVzL3N0eWxlLnNjc3MiLCJzcmMvYXBwL3RhYnMvc3R5bGVzL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQXFCLGdEQUFBO0FDRXZCOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9zdHlsZXMvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLWdhcDogNSU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xuICBncmlkLWdhcDogMTAlO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLnJlc3BvbnNpdmUtaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5IEFzcGVjdCBSYXRpbyAoZGl2aWRlIDkgYnkgMTYgPSAwLjU2MjUpICovXG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZm9udC1mYW1pbHk6IHJvYm90by1yZWd1bGFyO1xufVxuXG4ucHJvamVjdC10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbGlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjYwMDtcbn1cbiIsIi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLWdhcDogNSU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xuICBncmlkLWdhcDogMTAlO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLnJlc3BvbnNpdmUtaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICAvKiAxNjo5IEFzcGVjdCBSYXRpbyAoZGl2aWRlIDkgYnkgMTYgPSAwLjU2MjUpICovXG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZm9udC1mYW1pbHk6IHJvYm90by1yZWd1bGFyO1xufVxuXG4ucHJvamVjdC10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG8tbGlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/tab-item/tab-body.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tabs/tab-item/tab-body.component.ts ***!
    \*****************************************************/

  /*! exports provided: TabBodyComponent */

  /***/
  function srcAppTabsTabItemTabBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabBodyComponent", function () {
      return TabBodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabBodyComponent = /*#__PURE__*/function () {
      function TabBodyComponent() {
        _classCallCheck(this, TabBodyComponent);
      }

      _createClass(TabBodyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabBodyComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
      "static": true
    })], TabBodyComponent.prototype, "bodyContent", void 0);
    TabBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "tab-body",
      template: "<ng-template><ng-content></ng-content></ng-template>"
    })], TabBodyComponent);
    /***/
  },

  /***/
  "./src/app/tabs/tab-item/tab-item.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/tabs/tab-item/tab-item.component.ts ***!
    \*****************************************************/

  /*! exports provided: TabItemComponent */

  /***/
  function srcAppTabsTabItemTabItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabItemComponent", function () {
      return TabItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tab_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tab-body.component */
    "./src/app/tabs/tab-item/tab-body.component.ts");
    /* harmony import */


    var _tab_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab-label.component */
    "./src/app/tabs/tab-item/tab-label.component.ts");

    var TabItemComponent = function TabItemComponent() {
      _classCallCheck(this, TabItemComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabItemComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TabItemComponent.prototype, "isActive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tab_body_component__WEBPACK_IMPORTED_MODULE_2__["TabBodyComponent"], {
      "static": true
    })], TabItemComponent.prototype, "bodyComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tab_label_component__WEBPACK_IMPORTED_MODULE_3__["TabLabelComponent"], {
      "static": true
    })], TabItemComponent.prototype, "labelComponent", void 0);
    TabItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "tab-item",
      template: "<ng-content></ng-content>"
    })], TabItemComponent);
    /***/
  },

  /***/
  "./src/app/tabs/tab-item/tab-label.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/tabs/tab-item/tab-label.component.ts ***!
    \******************************************************/

  /*! exports provided: TabLabelComponent */

  /***/
  function srcAppTabsTabItemTabLabelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabLabelComponent", function () {
      return TabLabelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabLabelComponent = /*#__PURE__*/function () {
      function TabLabelComponent() {
        _classCallCheck(this, TabLabelComponent);
      }

      _createClass(TabLabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabLabelComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
      "static": true
    })], TabLabelComponent.prototype, "labelContent", void 0);
    TabLabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "tab-label",
      template: "<ng-template><ng-content></ng-content></ng-template>  "
    })], TabLabelComponent);
    /***/
  },

  /***/
  "./src/app/tabs/tab.component.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs/tab.component.ts ***!
    \***************************************/

  /*! exports provided: TabComponent */

  /***/
  function srcAppTabsTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return TabComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TabComponent = /*#__PURE__*/function () {
      function TabComponent() {
        _classCallCheck(this, TabComponent);

        this.labelStyle = {
          'transition': 'font-size .25s',
          'font-family': 'moon',
          'text-align': 'center'
        };
        this.selectedStyle = {
          'color': '#007BBF',
          'font-size': '45px'
        };
        this.unSelectedStyle = {
          'color': 'white',
          'font-size': '35px'
        };
      }

      _createClass(TabComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.tabItems$ = this.tabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])("")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            console.log(_this4.tabs);
            return _this4.tabs.toArray();
          }));
          console.log(this.tabItems$);
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this5 = this;

          //choose the default tab
          // we need to wait for a next VM turn,
          // because Tab item content, will not be initialized yet
          if (!this.activeTab) {
            Promise.resolve().then(function () {
              _this5.activeTab = _this5.tabs.first;
            });
          }
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabItem) {
          if (this.activeTab === tabItem) {
            return;
          }

          if (this.activeTab) {
            this.activeTab.isActive = false;
          }

          this.activeTab = tabItem;
          tabItem.isActive = true;
        }
      }, {
        key: "getStyle",
        value: function getStyle(tabItem) {
          return Object.assign(this.labelStyle, this.activeTab === tabItem ? this.selectedStyle : this.unSelectedStyle);
        }
      }]);

      return TabComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])('tabItem')], TabComponent.prototype, "tabs", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "tab-component",
      template: "\n  <div class=\"tabs-header\">\n  <div\n    (click)=\"selectTab(item)\"\n    [ngStyle]=\"getStyle(item)\"\n    *ngFor=\"let item of tabItems$ | async\"\n  >\n    <ng-container *ngIf=\"item.labelComponent\">\n      <ng-container *ngTemplateOutlet=\"item.labelComponent.labelContent\">\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"!item.labelComponent\">\n      {{ item.label }}\n    </ng-container>\n  </div>\n</div>\n<div class=\"tabs-body\">\n<ng-container *ngIf=\"activeTab && activeTab.bodyComponent\">\n  <ng-container *ngTemplateOutlet=\"activeTab.bodyComponent.bodyContent\">\n  </ng-container>\n</ng-container>\n</div>\n    ",
      styles: ["\n        .tabs-header {\n          display: grid;\n          grid-template-columns: 1fr 1fr 1fr;\n          grid-gap: 5%;\n          margin: 40px;\n        }\n\n        .tabs-body {\n          margin: 40px;\n        }\n      "]
    })], TabComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/TDCW/Desktop/Trae Desktop/Projects/WrightPortfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map