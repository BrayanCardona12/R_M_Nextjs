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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst UserProfile = (props)=>{\n    _s();\n    let [sizeWindow, setSizeWindow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSizeWindow(parseInt(window.innerHeight));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundColor: \"#C4C5D0\"\n            },\n            className: \"rounded d-flex flex-column align-items-center w-\".concat(sizeWindow < 705 ? \"25\" : 50, \" m-auto\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"img-fluid img-thumbnail m-3\",\n                    src: props.data.image,\n                    alt: \"photo-character\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.data.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: sizeWindow\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        props.data.origin.name,\n                        \" | \",\n                        props.data.status == \"Alive\" ? \"\\uD83D\\uDFE2\" : \"\\uD83D\\uDD34\",\n                        \" \",\n                        props.data.status,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserProfile, \"C7LDqi3TXuRGn0LtLk1AHIs7/TE=\");\n_c = UserProfile;\nUserProfile.getInitialProps = async (ctx)=>{\n    const resp = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(ctx.query.id));\n    const data = await resp.json();\n    return {\n        data: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ087QUFJbEQsTUFBTUcsY0FBYyxDQUFDQyxRQUFVOztJQUUzQixJQUFJLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDWk0sY0FBY0MsU0FBU0MsT0FBT0MsV0FBVztJQUM3QyxHQUFFLEVBQUU7SUFFSixxQkFDSSw4REFBQ1AsNkRBQVNBO2tCQUVOLDRFQUFDUTtZQUFJQyxPQUFPO2dCQUFDQyxpQkFBaUI7WUFBUztZQUFHQyxXQUFXLG1EQUFnRixPQUE1QlIsYUFBYSxNQUFLLE9BQU8sRUFBRSxFQUFDOzs4QkFDakksOERBQUNTO29CQUFJRCxXQUFVO29CQUE4QkUsS0FBS1gsTUFBTVksSUFBSSxDQUFDQyxLQUFLO29CQUFFQyxLQUFJOzs7Ozs7OEJBQ3hFLDhEQUFDQzs4QkFBSWYsTUFBTVksSUFBSSxDQUFDSSxJQUFJOzs7Ozs7OEJBQ3RCLDhEQUFDQzs4QkFBR2hCOzs7Ozs7OEJBQ0YsOERBQUNnQjs7d0JBQUdqQixNQUFNWSxJQUFJLENBQUNNLE1BQU0sQ0FBQ0YsSUFBSTt3QkFBQzt3QkFBSWhCLE1BQU1ZLElBQUksQ0FBQ08sTUFBTSxJQUFJLFVBQVMsaUJBQU8sY0FBSTt3QkFBQzt3QkFBRW5CLE1BQU1ZLElBQUksQ0FBQ08sTUFBTTt3QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdHO0dBcEJNcEI7S0FBQUE7QUFzQk5BLFlBQVlxQixlQUFlLEdBQUcsT0FBT0MsTUFBUTtJQUV6QyxNQUFNQyxPQUFPLE1BQU1DLE1BQU0sNkNBQTBELE9BQWJGLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtJQUNsRixNQUFNYixPQUFPLE1BQU1VLEtBQUtJLElBQUk7SUFFNUIsT0FBTztRQUFDZCxNQUFNQTtJQUFJO0FBRXRCO0FBRUEsK0RBQWViLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvW2lkXS5qcz8xNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcidcclxuXHJcblxyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAocHJvcHMpID0+IHtcclxuICBcclxuICAgIGxldCBbc2l6ZVdpbmRvdywgc2V0U2l6ZVdpbmRvd10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2l6ZVdpbmRvdyhwYXJzZUludCh3aW5kb3cuaW5uZXJIZWlnaHQgICkpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNDNEM1RDBcIn19IGNsYXNzTmFtZT17YHJvdW5kZWQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LSR7IHNpemVXaW5kb3cgPCA3MDU/ICcyNScgOiA1MH0gbS1hdXRvYH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1nLWZsdWlkIGltZy10aHVtYm5haWwgbS0zJyBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD0ncGhvdG8tY2hhcmFjdGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLmRhdGEubmFtZX08L2gxPiAgXHJcbiAgICAgICAgICAgICAgPHA+e3NpemVXaW5kb3d9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9IHwge3Byb3BzLmRhdGEuc3RhdHVzID09ICdBbGl2ZSc/IFwi8J+folwiIDogXCLwn5S0XCJ9IHtwcm9wcy5kYXRhLnN0YXR1c30gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgXHJcbiAgICApXHJcbn1cclxuXHJcblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7ZGF0YTogZGF0YX1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiVXNlclByb2ZpbGUiLCJwcm9wcyIsInNpemVXaW5kb3ciLCJzZXRTaXplV2luZG93IiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZGF0YSIsImltYWdlIiwiYWx0IiwiaDEiLCJuYW1lIiwicCIsIm9yaWdpbiIsInN0YXR1cyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlc3AiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});