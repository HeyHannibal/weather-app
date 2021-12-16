/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background/background3.jpg */ \"./src/background/background3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,body {\\n    width: 100%;\\n    height: 100%;\\n    margin: 0px;\\n    padding: 0px;\\n    overflow-x: hidden;\\n}\\nbody{\\n    position: fixed;\\n    background: hsla(240, 21%, 6%, 1);\\n    background: linear-gradient(45deg, hsla(240, 21%, 6%, 1) 0%, hsla(336, 14%, 21%, 1) 0%, hsla(0, 15%, 15%, 1) 81%, rgb(19, 13, 12) 100%);\\n   \\n    color: rgb(223, 223, 223);\\n    margin: 0;\\n   \\n    font-family:'Montserrat', sans-serif;\\n    height: 100%;\\n    backdrop-filter: blur(10px);\\n}\\np, h1, h2, h3, h4, h5, h6 {\\n    margin: 0;\\n}\\n#container {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;  \\n    justify-content: space-between;\\n    animation: fadeInAnimation ease 3s;\\n    animation-iteration-count: 1;\\n    animation-fill-mode: forwards;\\n}\\n@keyframes fadeInAnimation {\\n    0% {\\n        opacity: 0;\\n    }\\n    100% {\\n        opacity: 1;\\n     }\\n}\\n\\n* {\\n    box-sizing: border-box;\\n}\\n/* weekHour */\\n#weekHour{\\n    height: auto;\\n    width: 100%;\\n    align-self: flex-end;\\n}\\n\\n#week{\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n}\\n.eigthHours {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n    \\n}\\n.onehour{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n.weekday {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    bottom: 0px;\\n    align-self: flex-end;\\n}\\n\\n.weekday > .temp, .hourTemp {\\n    font-size: 2.5rem;\\n    font-weight: 500;\\n}\\n.weekday > .temp_min {\\n    font-size: 1.5rem;\\n    font-weight: 200;\\n}\\n.weekday h4 {\\n    font-weight: 400;\\n}\\n/* weekHour */\\n\\n/* day */\\n#day{ \\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n}\\n\\n#extra{\\n    display: grid;\\n    grid-template-rows: repeat(4, 1fr);\\n    grid-column-gap: 0px;\\n    grid-row-gap: 0px;\\n}\\n.extrWicon{\\n   max-width: 1.5rem;\\n}\\n.extraProp{\\n    align-items: center;\\n    display: grid;\\n    grid-template-columns: 1fr 2fr;\\n    grid-template-rows: 1fr;\\n}\\n.extraTextDiv p{\\n    font-size: 1.5rem;\\n    width: 50%;\\n}\\n.extraTextDiv{\\n    box-sizing: content-box;\\n    min-width: 6rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n}\\n.extraProp h3{\\n    font-size: 1rem;\\n    font-weight: 300;\\n} \\nheader{\\n    position: fixed;\\n}\\n#mainTemp{\\n    display: flex;\\n    align-items: center;\\n    gap:5px;\\n    font-size: 1.5rem;\\n}\\na{\\n    cursor: pointer;\\n    font-size:2.3rem;\\n    text-decoration: none;\\n    margin-bottom: -0.8rem;\\n    color:#d1d1d1;\\n    text-decoration: solid underline 2px; \\n} \\n#dayMain h2{\\n    margin-top: 1rem;\\n}\\n/* day */\\n\\n/* hours */\\n#hours{\\n    display: flex;\\n}\\n.eigthHours{\\n    display: flex;\\n    width: 100%;\\n}\\n\\n*.hidden {\\n    display: none;\\n}\\n/* hours */\\n\\n/* switch */\\n#switchCont{\\n    padding-bottom: 1rem;\\n    align-self:baseline\\n}\\n#switchCont{\\n    display: flex;\\n    align-items: center;\\n}\\n.switch{\\n    margin: 0px 2px 2px 2px;\\n    margin-top: 1rem;\\n    background: rgba(211, 146, 121, 0.212);\\n    font-family: 'Montserrat', sans-serif;\\n    font-weight: 500;\\n    font-size: 1.2rem;\\n    border:none;\\n    border-radius: 3px 3px 3px 3px;\\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.452);\\n    width: 7rem;\\n    height: 2rem;\\n    color: rgb(247, 247, 247);\\n    margin-bottom: 10px;\\n    \\n}\\n.openH{\\n    margin: 0px;\\n    padding: 0px;\\n    color: rgb(247, 247, 247);\\n    text-decoration: none;\\n    font-family: 'Montserrat', sans-serif;\\n    font-weight: 500;\\n    font-size:2.5rem;\\n    text-shadow: 1px 1px 10px black;\\n    border:none;\\n}\\n/* switch */\\n\\n/* searchDiv */\\n#searchDiv{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: auto;\\n    margin-bottom: auto;\\n    align-self: center;\\n}\\ninput{\\n    margin: 0;\\n    border: none;\\n    height: 1.5rem;\\n    width: 12rem;\\n    background-color: rgba(243, 243, 243, 0.925);\\n    border-radius: 2px 0px 0px 5px;\\n    box-shadow: 2px 3px 4px  rgba(0, 0, 0, 0.651);\\n}\\n#submit{\\n    color: white;\\n    margin: 0;\\n    border: none;\\n    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.651);\\n    background:rgb(192, 96, 61);\\n    width: 5rem;\\n    height: 1.5rem;\\n    font-family: 'Montserrat', sans-serif;\\n    font-weight: 500;\\n    font-size: 1.1rem;\\n    border-radius: 2px 10px 2px 2px;\\n}\\n/* searchDiv */\\n\\n@media only screen and (max-width: 800px) {\\n    .weekday > * {\\n        max-width: 8vh;\\n    }\\n    .weekday > * {\\n        margin: 0;\\n    }\\n    .weekday > .temp, .onehour p {\\n        font-size: 2rem;\\n        font-weight: 500;\\n        \\n    }\\n    .weekday > .temp_min {\\n        font-size: 1.5rem;\\n        font-weight: 200;\\n    }\\n    .weekday h4 {\\n        font-weight: 400;\\n    }\\n}\\n@media only screen and (max-width: 600px) {\\n   \\n    #week, .eigthHours{\\n       flex-direction: column;\\n       align-content: flex-end;\\n    }  \\n    #week > *{\\n        width: 100%;\\n        display: grid;\\n        grid-template-columns: 3fr repeat(3, 1fr);\\n        grid-template-rows: 1fr;\\n        justify-items: center;\\n        border-bottom: 1px solid;\\n    }\\n    #week  h4, .onehour h4{\\n        justify-self: left;\\n    }\\n    .onehour{ \\n        display: grid;\\n        grid-template-columns: 3fr repeat(2, 1fr);\\n        grid-template-rows: 1fr;\\n        justify-items: center;\\n        border-bottom: 1px solid;\\n    }\\n    .whWicon{\\n        width: 50px;\\n    }\\n    #searchDiv{\\n        display: flex;\\n        padding: 2rem;\\n        flex-wrap: nowrap;\\n    }\\n    .weekday > .temp, .onehour p {\\n        font-size: 1.5rem;\\n        font-weight: 500;\\n        \\n    }\\n}\\n@media only screen and (max-width: 400px) {\\n    .weekday > .temp, .onehour p {\\n        font-size: 1.5rem;\\n        font-weight: 500;\\n    }\\n    .weekday > .temp_min {\\n        font-size: 1.5rem;\\n        font-weight: 200;\\n    }\\n    body{\\n        font-size: 10px;\\n    }\\n}\\n\\n#background{\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover ;\\n    background-repeat: no-repeat;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/icons/chanceOfRain.svg":
/*!************************************!*\
  !*** ./src/icons/chanceOfRain.svg ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='cloud-rain' class='svg-inline--fa fa-cloud-rain' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='white' d='M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://weather-app/./src/icons/chanceOfRain.svg?");

/***/ }),

/***/ "./src/icons/feelsLike.svg":
/*!*********************************!*\
  !*** ./src/icons/feelsLike.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='temperature-half' class='svg-inline--fa fa-temperature-half' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='white' d='M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://weather-app/./src/icons/feelsLike.svg?");

/***/ }),

/***/ "./src/icons/humidity.svg":
/*!********************************!*\
  !*** ./src/icons/humidity.svg ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='droplet' class='svg-inline--fa fa-droplet' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='white' d='M221.3 22.13c-8-28.87-49.5-30.12-58.5 0C116 179.9 16 222.8 16 333.9c0 98.5 78.75 178.1 176 178.1s176-79.63 176-178.1C368 222.1 268.3 180.6 221.3 22.13zM192 448c-61.75 0-112-50.25-112-111.1c0-8.875 7.125-16 16-16s16 7.125 16 16c0 44.12 35.88 79.1 80 79.1c8.875 0 16 7.125 16 15.1C208 440.9 200.9 448 192 448z'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://weather-app/./src/icons/humidity.svg?");

/***/ }),

/***/ "./src/icons/windSpeed.svg":
/*!*********************************!*\
  !*** ./src/icons/windSpeed.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='wind' class='svg-inline--fa fa-wind' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='white' d='M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z'%3e%3c/path%3e%3c/svg%3e\"\n\n//# sourceURL=webpack://weather-app/./src/icons/windSpeed.svg?");

/***/ }),

/***/ "./src/APIfunctions.js":
/*!*****************************!*\
  !*** ./src/APIfunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userPref\": () => (/* binding */ userPref),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather),\n/* harmony export */   \"getCoord\": () => (/* binding */ getCoord),\n/* harmony export */   \"getSuggestions\": () => (/* binding */ getSuggestions)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\n\nvar userPref = {\n  current: \"metric\",\n  symbol: \"°C\",\n};\n\nasync function getWeather(coordinatesPlusName) {\n  const data = await coordinatesPlusName;\n  const coord = data[1];\n  const name = data[0];\n  const Weather = await (0,_index__WEBPACK_IMPORTED_MODULE_2__.getData)(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&units=${userPref.current}&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`\n  );\n  Weather.current.name = name;\n  return weekDayData(Weather);\n}\nfunction weekDayData(data) {\n  const allData = data;\n  const { current } = allData;\n  const dayData = {\n    location: {\n      name: current.name,\n      date: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDate)(allData.current.dt, allData.timezone_offset),\n    },\n    main: {\n      weatherdesc: current.weather[0].description,\n      weathericon: current.weather[0].icon,\n      temp: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.ifDecimal)(current.temp),\n    },\n    extra: {\n      feelsLike: { num: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.ifDecimal)(current.feels_like), icon: \"feel\" },\n      humidity: { num: current.humidity, icon: \"humid\" },\n      windSpeed: { num: current.wind_speed, icon: \"wind\" },\n      chanceOfRain: { num: allData.daily[0].pop, icon: \"rain\" },\n    },\n  };\n  const week = allData.daily;\n  const weekData = [];\n  const oneDay = Object.keys(week);\n  oneDay.forEach((item) => {\n    const day = {\n      date: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDate)(week[item].dt, allData.timezone_offset),\n      weekDay: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dayOfWeek)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDate)(week[item].dt, allData.timezone_offset)),\n      temp_min: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.ifDecimal)(week[item].temp.min),\n      temp_max: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.ifDecimal)(week[item].temp.max),\n      weather: week[item].weather,\n    };\n    weekData.push(day);\n  });\n  const hour = allData.hourly;\n  const hourData = [];\n  hour.forEach((item, index) => {\n    if (index < 24) {\n      const thishour = {\n        time: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.amPm)((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDate)(item.dt, allData.timezone_offset)),\n        temp: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.ifDecimal)(item.temp),\n        weathericon: item.weather[0].icon,\n      };\n      hourData.push(thishour);\n    }\n  });\n  return {\n    hour: hourData,\n    userPref,\n    today: dayData,\n    week: weekData,\n  };\n}\n\nasync function getCoord(arr) {\n  let link;\n  if (arr.length === 1) {\n    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;\n  } else if (arr.length === 2) {\n    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},,${arr[1]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;\n  } else if (arr.length === 3) {\n    link = `https://api.openweathermap.org/geo/1.0/direct?q=${arr[0]},${arr[1]},${arr[2]}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`;\n  }\n  let info = await (0,_index__WEBPACK_IMPORTED_MODULE_2__.getData)(link);\n  const coord = [`${info[0].lat}`, `${info[0].lon}`];\n  const { name } = info[0];\n  return [name, coord];\n\n}\n\nasync function getSuggestions(input) {\n  const city = await input;\n  const jData = await (0,_index__WEBPACK_IMPORTED_MODULE_2__.getData)(\n    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=38c3d4c7aaa6f4ff0f56da20f2aee0e9`\n  );\n  const cityList = [];\n  const newcity = Object.keys(jData);\n  newcity.forEach((item) => {\n    const oneCity = {\n      city: `${jData[item].name}, ${jData[item].country}`,\n      coord: [jData[item].lat, jData[item].lon],\n    };\n    if (jData[item].country === \"US\") {\n      oneCity.city = `${jData[item].name}, ${jData[item].country}, ${jData[item].state}`;\n    }\n    cityList.push(oneCity);\n  });\n  return cityList;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/APIfunctions.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadDom\": () => (/* binding */ loadDom)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _icons_feelsLike_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/feelsLike.svg */ \"./src/icons/feelsLike.svg\");\n/* harmony import */ var _icons_feelsLike_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_feelsLike_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_windSpeed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/windSpeed.svg */ \"./src/icons/windSpeed.svg\");\n/* harmony import */ var _icons_windSpeed_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_windSpeed_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _icons_humidity_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/humidity.svg */ \"./src/icons/humidity.svg\");\n/* harmony import */ var _icons_humidity_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_humidity_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icons_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/chanceOfRain.svg */ \"./src/icons/chanceOfRain.svg\");\n/* harmony import */ var _icons_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst extraIcons = {\n  feelsLike: (_icons_feelsLike_svg__WEBPACK_IMPORTED_MODULE_1___default()),\n  windSpeed: (_icons_windSpeed_svg__WEBPACK_IMPORTED_MODULE_2___default()),\n  humidity: (_icons_humidity_svg__WEBPACK_IMPORTED_MODULE_3___default()),\n  chanceOfRain: (_icons_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_4___default()),\n};\nconst body = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('body');\nfunction loadDom(object) {\n  const { today } = object;\n  const { location } = today;\n  const { main } = today;\n  const { extra } = today;\n\n  const searchBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#searchDiv');\n  body.append(searchBar);\n  const container = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#container');\n  while (container.firstChild) container.firstChild.remove();\n  const day = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('day', '', container);\n  const dayMain = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('dayMain', '', day);\n  const makeLocation = (function () {\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('h1', `${location.name}`, dayMain);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.formatT)(location.date)[0]}`, dayMain);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.formatT)(location.date)[1]}`, dayMain);\n  }());\n\n  const makeMain = (function () {\n    const temp = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('mainTemp', '', dayMain);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('h2', `${main.temp}`, temp, 'tempNow', 'temp');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('a', temp, 'convert', '', `${object.userPref.symbol}`);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.imgFactory)(`http://openweathermap.org/img/wn/${today.main.weathericon}@2x.png`, dayMain, '', 'wicon');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${main.weatherdesc}`, dayMain);\n  }());\n\n  const makeExtra = (function () {\n    const extraDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('extra', '', day);\n    const keys = Object.keys(extra);\n    keys.forEach((item) => {\n      const propDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('', 'extraProp', extraDiv);\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.imgFactory)(`${extraIcons[`${item}`]}`, propDiv, '', 'extrWicon');\n      const textDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('', 'extraTextDiv', propDiv);\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('h3', `${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.keyToName)(item)}`, textDiv);\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${extra[item].num}`, textDiv, '', `${item === 'feelsLike' ? 'temp' : ''}`);\n    });\n  }());\n  container.append(searchBar);\n  const switchCont = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('switchCont', '', container);\n  const showWeek = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('button', switchCont, 'showW', 'switch', 'Daily');\n  const showHourly = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('button', switchCont, 'showH', 'switch', 'Hourly');\n  const weekHourDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('weekHour', '', container);\n\n  const week = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('week', '', weekHourDiv);\n  const weekly = object.week;\n  weekly.forEach((item) => {\n    const oneday = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('', 'weekday', week);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('h4', `${item.weekDay}`, oneday, '', 'week day');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${item.temp_max}`, oneday, '', 'temp whTemp temp_max');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${item.temp_min}`, oneday, '', 'temp whTemp temp_min');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.imgFactory)(`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, oneday, '', 'whWicon');\n  });\n  const hours = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('hours', '', weekHourDiv);\n  const hourly = object.hour;\n  hours.style.display = 'none';\n  for (let i = 0; i < 24;) {\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)(`hours${i}`, `H${i} eigthHours`, hours);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.elementFactory)('a', switchCont, `${i}`, ' openH hidden', `${i === 0 ? '●' : '○'}`).setAttribute('href', '#');\n    i += 8;\n  }\n\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#hours8').classList.add('hidden');\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#hours16').classList.add('hidden');\n  hourly.forEach((item, index) => {\n    let eigthHours;\n    if (index < 8) eigthHours = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#hours0');\n    if (index >= 8 && index < 16) eigthHours = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#hours8');\n    if (index >= 16) eigthHours = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qsel)('#hours16');\n    const onehour = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.divFactory)('', 'onehour', eigthHours);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('h4', `${item.time}`, onehour, '', 'timeHour');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textFactory)('p', `${item.temp}`, onehour, '', 'whTemp temp');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.imgFactory)(`http://openweathermap.org/img/wn/${item.weathericon}@2x.png`, onehour, '', 'wicon whWicon');\n  });\n\n  return container;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementFactory\": () => (/* binding */ elementFactory),\n/* harmony export */   \"textFactory\": () => (/* binding */ textFactory),\n/* harmony export */   \"divFactory\": () => (/* binding */ divFactory),\n/* harmony export */   \"imgFactory\": () => (/* binding */ imgFactory),\n/* harmony export */   \"qsel\": () => (/* binding */ qsel),\n/* harmony export */   \"keyToName\": () => (/* binding */ keyToName),\n/* harmony export */   \"amPm\": () => (/* binding */ amPm),\n/* harmony export */   \"getDate\": () => (/* binding */ getDate),\n/* harmony export */   \"dayOfWeek\": () => (/* binding */ dayOfWeek),\n/* harmony export */   \"replaceSpace\": () => (/* binding */ replaceSpace),\n/* harmony export */   \"formatT\": () => (/* binding */ formatT),\n/* harmony export */   \"ifDecimal\": () => (/* binding */ ifDecimal),\n/* harmony export */   \"tempConv\": () => (/* binding */ tempConv)\n/* harmony export */ });\nfunction make(type) {\n  const element = document.createElement(type);\n  function setId(id) {\n    if (id !== '' && id !== undefined) element.setAttribute('id', id);\n  }\n  function setClass(cssClass) {\n    if (cssClass !== '' && cssClass !== undefined) element.setAttribute('class', cssClass);\n  }\n  function addText(textContent) {\n    if (textContent !== undefined) element.textContent = textContent;\n  }\n  function appendElement(appendTo) {\n    if (appendTo !== undefined) appendTo.append(element);\n  }\n  function setSrc(src) {\n    if (src !== undefined) element.src = src;\n  }\n  const returnElement = () => element;\n  return {\n    addText, setId, setClass, setSrc, appendElement, returnElement,\n  };\n}\n\nfunction elementFactory(type, appendTo, id, cssClass, textContent, src) {\n  const element = make(type);\n  element.appendElement(appendTo);\n  element.addText(textContent);\n  element.setId(id);\n  element.setClass(cssClass);\n  element.setSrc(src);\n  return element.returnElement();\n}\n\nfunction textFactory(type, textContent, appendTo, id, cssClass) {\n  const text = make(type);\n  text.addText(textContent);\n  text.appendElement(appendTo);\n  text.setId(id);\n  text.setClass(cssClass);\n  return text.returnElement();\n}\n\nfunction divFactory(id, cssClass, appendTo) {\n  const newDiv = make('div');\n  newDiv.setId(id);\n  newDiv.setClass(cssClass);\n  newDiv.appendElement(appendTo);\n  return newDiv.returnElement();\n}\n\nfunction imgFactory(src, appendTo, id, cssClass) {\n  const newImg = make('img');\n  newImg.setSrc(src);\n  newImg.appendElement(appendTo);\n  newImg.setId(id);\n  newImg.setClass(cssClass);\n  return newImg.returnElement();\n}\n\nfunction qsel(element) {\n  return document.querySelector(element);\n}\n\nfunction keyToName(str) {\n  return str.split('').map((letter, index) => {\n    if (index === 0) return letter.toUpperCase();\n    if (letter === letter.toUpperCase()) {\n      return `  ${letter}`;\n    } return letter;\n  }).join('');\n}\n\nfunction amPm(time) {\n  let hour = time.split(' ')[4].split(':')[0];\n  if (hour === '00') hour = '24';\n  const trimHour = hour.split('').filter((item) => item > 0).join('');\n  if (Number(trimHour) <= 12) return `${trimHour} AM`;\n  if (Number(trimHour) > 12) return `${trimHour - 12} PM`;\n}\n\nfunction getDate(day, timezone) {\n  return new Date((day + timezone) * 1000).toUTCString();\n}\n\nfunction dayOfWeek(date) {\n  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  return daysArr[((new Date(date)).getDay())];\n}\n\nfunction replaceSpace(str) {\n  return str.split('').map((item) => ((item === ' ') ? item = '+' : item)).join('');\n}\nfunction formatT(date) {\n  const day = `${dayOfWeek(date)}, ${(date).split(' ').splice(1, 3).join(' ')}`;\n  const min = `${((date.split(' ').splice(4, 1)).toString()).split(':')[1]}`;\n  const time = `${amPm(date).split('').splice(0, 2).join('')}:${min}${amPm(date).split('').splice(2).join('')}`;\n  return [day, time];\n}\nfunction ifDecimal(num) {\n  if (num % 1 !== 0) {\n    if (Number(num.toFixed(1)) === num.toFixed(0)) return Math.round(num);\n    return num.toFixed(1);\n  }\n  return Math.round(num);\n}\n\nfunction tempConv(temp, which) {\n  const fahrenheit = ifDecimal((Number(temp) * 1.8) + 32);\n  const celcius = ifDecimal((Number(temp) - 32) * 0.5556);\n  if (which === 'metric') {\n    return celcius;\n  }\n  else return fahrenheit;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _APIfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIfunctions */ \"./src/APIfunctions.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\n\n\nconst storeUserData = (function () {\n  const save = (data) => {\n    localStorage.setItem(`lastSearched`, JSON.stringify(data));\n  };\n  const loadLast = () => {\n    if (localStorage.getItem(\"hasRunBefore\") === null) {\n      let defaultCity = [\"Sydney\", [\"-33.768528\", \"150.9568559523945\"]];\n      localStorage.setItem(\"lastSearched\", JSON.stringify(defaultCity));\n      load((0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getWeather)(defaultCity));\n      localStorage.setItem(\"hasRunBefore\", \"true\");\n    } else {\n      let lastSearchedCoord = JSON.parse(localStorage.getItem(\"lastSearched\"));\n      load((0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getWeather)(lastSearchedCoord));\n    }\n  };\n  return {\n    save,\n    loadLast,\n  };\n})();\n\nasync function getData(input) {\n  const response = await fetch(`${input}`, { mode: \"cors\" });\n  const jData = await response.json();\n  return jData;\n}\n\nconst input = document.querySelector(\"#searchIn\");\nconst options = document.querySelector(\"datalist\");\nlet suggestionList;\nlet typingTimer;\ninput.addEventListener(\"keyup\", () => {\n  /// wait for user to stop typing, and fetch suggested cities\n  clearTimeout(typingTimer);\n  if (input.value) {\n    typingTimer = setTimeout(() => updateSuggestions(input.value), 2500);\n  }\n});\n\nasync function updateSuggestions(input) {\n  options.querySelectorAll(\"*\").forEach((item) => item.remove());\n  const suggestions = await (0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getSuggestions)(input); // fetch suggested cities\n  const city = Object.keys(suggestions);\n  city.forEach((item) => {\n    const option = document.createElement(\"option\"); // add them to DOM.\n    option.textContent = `${suggestions[item].city}`;\n    option.setAttribute(\"data-index\", `${item}`);\n    options.append(option);\n  });\n  suggestionList = suggestions; // update suggestionList object with new values\n}\n\nasync function checkSuggestionList() {\n  // if user choose item from option list, return already fetched coords\n  if (suggestionList !== undefined) {\n    const check = suggestionList.find((item) => item.city === input.value);\n    if (check !== undefined) return Object.values(check);\n  }\n}\n\nconst submit = document.querySelector(\"#submit\");\nsubmit.addEventListener(\"click\", async () => {\n  const suggestions = await checkSuggestionList();\n  if (suggestions !== undefined) {\n    storeUserData.save(suggestions)\n    load((0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getWeather)(suggestions)); // first fetch weatherData from suggested coords, then load DOM\n  } else {\n    const cityCntryStateArr = input.value.split(\",\").map((item) => item.trim()); //\n    cityCntryStateArr[0] = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.replaceSpace)(cityCntryStateArr[0]); // first fetch coordinates with user input array\n    let coordsAndName = await ((0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getCoord)(cityCntryStateArr))\n    storeUserData.save(coordsAndName)\n\n    load((0,_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.getWeather)(coordsAndName)); // then fetch the Weather, and load DOM\n  }\n});\n\nconst body = document.querySelector(\"body\"); /// load DOM\nasync function load(data) {\n  const elements = await data;\n  body.append((0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadDom)(elements));\n}\n\ndocument.addEventListener(\"click\", (e) => {\n  /// convert temperature units\n  const convertBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(\"#convert\");\n  if (e.target.id === \"convert\") {\n    const allTemp = document.querySelectorAll(\".temp\");\n    const unit = _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.current;\n    allTemp.forEach((item) => {\n      if (unit === \"metric\") {\n        item.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.tempConv)(item.textContent, \"imperial\");\n      } else {\n        item.textContent = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.tempConv)(item.textContent, \"metric\");\n      }\n    });\n    _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.symbol = _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.symbol === \"°C\" ? \"°F\" : \"°C\";\n    _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.current =\n      _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.current === \"metric\"\n        ? (_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.current = \"imperial\")\n        : (_APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.current = \"metric\");\n    convertBtn.textContent = _APIfunctions__WEBPACK_IMPORTED_MODULE_2__.userPref.symbol;\n  }\n});\n\nfunction switchHide(hide, show, display) {\n  show.style.display = `${display}`;\n  hide.style.display = \"none\";\n}\nbody.addEventListener(\"click\", (e) => {\n  /// switch between daily and weekly weather tabs\n  const buttons = document.querySelectorAll(\".openH\");\n  if (e.target.classList.contains(\"openH\")) {\n    document\n      .querySelectorAll(\".openH\")\n      .forEach((item) => (item.textContent = \"○\"));\n    e.target.textContent = \"●\";\n    const hourContainers = document.querySelectorAll(\".eigthHours\");\n    hourContainers.forEach((item) => item.classList.add(\"hidden\"));\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(`#hours${e.target.id}`).classList.remove(\"hidden\");\n  }\n\n  if (e.target.classList.contains(\"switch\")) {\n    if (e.target.id === \"showH\") {\n      switchHide((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(\"#week\"), (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(\"#hours\"), \"flex\");\n      buttons.forEach((item) => item.classList.remove(\"hidden\"));\n    }\n    if (e.target.id === \"showW\") {\n      switchHide((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(\"#hours\"), (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qsel)(\"#week\"), \"flex\");\n      buttons.forEach((item) => item.classList.add(\"hidden\"));\n    }\n  }\n});\n\n storeUserData.loadLast();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/background/background3.jpg":
/*!****************************************!*\
  !*** ./src/background/background3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"308f4dd9c409885a4b52.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/background/background3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;