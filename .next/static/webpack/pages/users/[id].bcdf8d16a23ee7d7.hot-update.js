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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst UserProfile = (props)=>{\n    _s();\n    let [sizeWindow, setSizeWindow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSizeWindow(window.innerHeight.to);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundColor: \"#C4C5D0\"\n            },\n            className: \"rounded d-flex flex-column align-items-center w-\".concat(sizeWindow < 705 ? 25 : 50, \" m-auto\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"img-fluid img-thumbnail m-3\",\n                    src: props.data.image,\n                    alt: \"photo-character\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.data.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: sizeWindow\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        props.data.origin.name,\n                        \" | \",\n                        props.data.status == \"Alive\" ? \"\\uD83D\\uDFE2\" : \"\\uD83D\\uDD34\",\n                        \" \",\n                        props.data.status,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\braya\\\\OneDrive\\\\Escritorio\\\\nextjs\\\\nextfazt\\\\nextfast\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserProfile, \"C7LDqi3TXuRGn0LtLk1AHIs7/TE=\");\n_c = UserProfile;\nUserProfile.getInitialProps = async (ctx)=>{\n    const resp = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(ctx.query.id));\n    const data = await resp.json();\n    return {\n        data: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ087QUFJbEQsTUFBTUcsY0FBYyxDQUFDQyxRQUFVOztJQUUzQixJQUFJLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDWk0sY0FBY0MsT0FBT0MsV0FBVyxDQUFDQyxFQUFFO0lBQ3ZDLEdBQUUsRUFBRTtJQUVKLHFCQUNJLDhEQUFDUCw2REFBU0E7a0JBRU4sNEVBQUNRO1lBQUlDLE9BQU87Z0JBQUNDLGlCQUFpQjtZQUFTO1lBQUdDLFdBQVcsbURBQThFLE9BQTFCUixhQUFhLE1BQUssS0FBSyxFQUFFLEVBQUM7OzhCQUMvSCw4REFBQ1M7b0JBQUlELFdBQVU7b0JBQThCRSxLQUFLWCxNQUFNWSxJQUFJLENBQUNDLEtBQUs7b0JBQUVDLEtBQUk7Ozs7Ozs4QkFDeEUsOERBQUNDOzhCQUFJZixNQUFNWSxJQUFJLENBQUNJLElBQUk7Ozs7Ozs4QkFDdEIsOERBQUNDOzhCQUFHaEI7Ozs7Ozs4QkFDRiw4REFBQ2dCOzt3QkFBR2pCLE1BQU1ZLElBQUksQ0FBQ00sTUFBTSxDQUFDRixJQUFJO3dCQUFDO3dCQUFJaEIsTUFBTVksSUFBSSxDQUFDTyxNQUFNLElBQUksVUFBUyxpQkFBTyxjQUFJO3dCQUFDO3dCQUFFbkIsTUFBTVksSUFBSSxDQUFDTyxNQUFNO3dCQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0c7R0FwQk1wQjtLQUFBQTtBQXNCTkEsWUFBWXFCLGVBQWUsR0FBRyxPQUFPQyxNQUFRO0lBRXpDLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSw2Q0FBMEQsT0FBYkYsSUFBSUcsS0FBSyxDQUFDQyxFQUFFO0lBQ2xGLE1BQU1iLE9BQU8sTUFBTVUsS0FBS0ksSUFBSTtJQUU1QixPQUFPO1FBQUNkLE1BQU1BO0lBQUk7QUFFdEI7QUFFQSwrREFBZWIsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xyXG5cclxuXHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gICAgbGV0IFtzaXplV2luZG93LCBzZXRTaXplV2luZG93XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTaXplV2luZG93KHdpbmRvdy5pbm5lckhlaWdodC50bylcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI0M0QzVEMFwifX0gY2xhc3NOYW1lPXtgcm91bmRlZCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHctJHsgc2l6ZVdpbmRvdyA8IDcwNT8gMjUgOiA1MH0gbS1hdXRvYH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1nLWZsdWlkIGltZy10aHVtYm5haWwgbS0zJyBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD0ncGhvdG8tY2hhcmFjdGVyJy8+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3Byb3BzLmRhdGEubmFtZX08L2gxPiAgXHJcbiAgICAgICAgICAgICAgPHA+e3NpemVXaW5kb3d9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9IHwge3Byb3BzLmRhdGEuc3RhdHVzID09ICdBbGl2ZSc/IFwi8J+folwiIDogXCLwn5S0XCJ9IHtwcm9wcy5kYXRhLnN0YXR1c30gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgXHJcbiAgICApXHJcbn1cclxuXHJcblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpXHJcbiAgICBcclxuICAgIHJldHVybiB7ZGF0YTogZGF0YX1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiVXNlclByb2ZpbGUiLCJwcm9wcyIsInNpemVXaW5kb3ciLCJzZXRTaXplV2luZG93Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0byIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZGF0YSIsImltYWdlIiwiYWx0IiwiaDEiLCJuYW1lIiwicCIsIm9yaWdpbiIsInN0YXR1cyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlc3AiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});