"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n\n\nconst UserProfile = (props)=>{\n    console.log(props);\n    let size = 50;\n    var con = window.innerHeight;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundColor: \"#C4C5D0\"\n            },\n            className: \"rounded d-flex flex-column align-items-center w-50 m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"img-fluid img-thumbnail m-3\",\n                    src: props.data.image,\n                    alt: \"photo-character\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.data.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: con\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        props.data.origin.name,\n                        \" | \",\n                        props.data.status == \"Alive\" ? \"\\uD83D\\uDFE2\" : \"\\uD83D\\uDD34\",\n                        \" \",\n                        props.data.status,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = UserProfile;\nUserProfile.getInitialProps = async (ctx)=>{\n    const resp = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(ctx.query.id));\n    const data = await resp.json();\n    return {\n        data: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBR2xELE1BQU1DLGNBQWMsQ0FBQ0MsUUFBVTtJQUMzQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLElBQUlHLE9BQU87SUFDWCxJQUFJQyxNQUFNQyxPQUFPQyxXQUFXO0lBRTVCLHFCQUNJLDhEQUFDUiw2REFBU0E7a0JBRU4sNEVBQUNTO1lBQUlDLE9BQU87Z0JBQUNDLGlCQUFpQjtZQUFTO1lBQUdDLFdBQVk7OzhCQUNsRCw4REFBQ0M7b0JBQUlELFdBQVU7b0JBQThCRSxLQUFLWixNQUFNYSxJQUFJLENBQUNDLEtBQUs7b0JBQUVDLEtBQUk7Ozs7Ozs4QkFDeEUsOERBQUNDOzhCQUFJaEIsTUFBTWEsSUFBSSxDQUFDSSxJQUFJOzs7Ozs7OEJBQ3BCLDhEQUFDQzs4QkFBR2Q7Ozs7Ozs4QkFDSiw4REFBQ2M7O3dCQUFHbEIsTUFBTWEsSUFBSSxDQUFDTSxNQUFNLENBQUNGLElBQUk7d0JBQUM7d0JBQUlqQixNQUFNYSxJQUFJLENBQUNPLE1BQU0sSUFBSSxVQUFTLGlCQUFPLGNBQUk7d0JBQUM7d0JBQUVwQixNQUFNYSxJQUFJLENBQUNPLE1BQU07d0JBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RztLQWxCTXJCO0FBb0JOQSxZQUFZc0IsZUFBZSxHQUFHLE9BQU9DLE1BQVE7SUFFekMsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLDZDQUEwRCxPQUFiRixJQUFJRyxLQUFLLENBQUNDLEVBQUU7SUFDbEYsTUFBTWIsT0FBTyxNQUFNVSxLQUFLSSxJQUFJO0lBRTVCLE9BQU87UUFBQ2QsTUFBTUE7SUFBSTtBQUV0QjtBQUVBLCtEQUFlZCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xyXG5cclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuXHJcbiAgICBsZXQgc2l6ZSA9IDUwXHJcbiAgICB2YXIgY29uID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNDNEM1RDBcIn19IGNsYXNzTmFtZT17YHJvdW5kZWQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LTUwIG0tYXV0b2B9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1mbHVpZCBpbWctdGh1bWJuYWlsIG0tMycgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9J3Bob3RvLWNoYXJhY3RlcicvPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy5kYXRhLm5hbWV9PC9oMT4gIFxyXG4gICAgICAgICAgICAgICAgPHA+e2Nvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57cHJvcHMuZGF0YS5vcmlnaW4ubmFtZX0gfCB7cHJvcHMuZGF0YS5zdGF0dXMgPT0gJ0FsaXZlJz8gXCLwn5+iXCIgOiBcIvCflLRcIn0ge3Byb3BzLmRhdGEuc3RhdHVzfSA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICBcclxuICAgIClcclxufVxyXG5cclxuVXNlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7Y3R4LnF1ZXJ5LmlkfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKClcclxuICAgIFxyXG4gICAgcmV0dXJuIHtkYXRhOiBkYXRhfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGUiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiVXNlclByb2ZpbGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwiY29uIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImRhdGEiLCJpbWFnZSIsImFsdCIsImgxIiwibmFtZSIsInAiLCJvcmlnaW4iLCJzdGF0dXMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXNwIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});