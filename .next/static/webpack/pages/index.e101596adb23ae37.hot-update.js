"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CardUsers = (param)=>{\n    let { user  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: user.data.results.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"users/\".concat(u.id),\n                style: {\n                    backgroundColor: \"#C4C5D0\",\n                    color: \"black\"\n                },\n                className: \"list-group-item list-group-item-action d-flex justify-content-between align-items-center m-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: u.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n                                lineNumber: 12,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Location: \",\n                                    u.location.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n                                lineNumber: 13,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n                        lineNumber: 11,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"img-fluid rounded\",\n                        src: u.image,\n                        alt: \"img-character\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n                        lineNumber: 15,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, u.id, true, {\n                fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n                lineNumber: 10,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\components\\\\Users.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CardUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardUsers);\nvar _c;\n$RefreshReg$(_c, \"CardUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUc1QixNQUFNQyxZQUFZLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFFdkIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBRVBGLEtBQUtHLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLENBQUFBLGtCQUNsQiw4REFBQ1Isa0RBQUlBO2dCQUFDUyxNQUFNLFNBQWMsT0FBTEQsRUFBRUUsRUFBRTtnQkFBZUMsT0FBTztvQkFBQ0MsaUJBQWlCO29CQUFXQyxPQUFNO2dCQUFPO2dCQUFHVCxXQUFVOztrQ0FDbEcsOERBQUNEOzswQ0FDRyw4REFBQ1c7MENBQUlOLEVBQUVPLElBQUk7Ozs7OzswQ0FDWCw4REFBQ0M7O29DQUFFO29DQUFXUixFQUFFUyxRQUFRLENBQUNGLElBQUk7Ozs7Ozs7Ozs7Ozs7a0NBRWpDLDhEQUFDRzt3QkFBSWQsV0FBVTt3QkFBb0JlLEtBQUtYLEVBQUVZLEtBQUs7d0JBQUVDLEtBQUk7Ozs7Ozs7ZUFMdkJiLEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7QUFpQjFEO0tBdkJNVDtBQXlCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJzLmpzPzgxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5cclxuY29uc3QgQ2FyZFVzZXJzID0gKHsgdXNlciB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLmRhdGEucmVzdWx0cy5tYXAodSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHVzZXJzLyR7dS5pZH1gfSBrZXk9e3UuaWR9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNDNEM1RDBcIiwgY29sb3I6XCJibGFja1wifX0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb2NhdGlvbjoge3UubG9jYXRpb24ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCIgc3JjPXt1LmltYWdlfSBhbHQ9XCJpbWctY2hhcmFjdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkVXNlcnMiXSwibmFtZXMiOlsiTGluayIsIkNhcmRVc2VycyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwicmVzdWx0cyIsIm1hcCIsInUiLCJocmVmIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaDUiLCJuYW1lIiwicCIsImxvY2F0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Users.js\n"));

/***/ })

});