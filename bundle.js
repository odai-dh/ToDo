/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Basic Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f9;\n    color: #333;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}\n\n/* Container for the entire app */\n#app-container {\n    background-color: #fff;\n    padding: 20px;\n    width: 80%;\n    max-width: 800px;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n}\n\n/* Header */\nheader {\n    text-align: center;\n    margin-bottom: 20px;\n}\n\nheader h1 {\n    font-size: 2rem;\n    color: #333;\n}\n\n/* Flex layout for project and todo sections */\nmain {\n    display: flex;\n    gap: 20px;\n}\n\n/* Project Section */\n#project-section {\n    flex: 1;\n    background-color: #f9f9f9;\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n#project-section h2 {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n}\n\n.project-item {\n    padding: 10px;\n    margin-bottom: 10px;\n    background-color: #e0f7fa;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.project-item:hover {\n    background-color: #b2ebf2;\n}\n\n/* Todo Section */\n#todo-section {\n    flex: 2;\n    background-color: #f9f9f9;\n    padding: 15px;\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n#todo-section h2 {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n}\n\n.todo-item {\n    padding: 10px;\n    margin-bottom: 10px;\n    background-color: #e8eaf6;\n    border-left: 4px solid #3f51b5;\n    border-radius: 5px;\n    transition: background-color 0.3s;\n}\n\n.todo-item:hover {\n    background-color: #c5cae9;\n}\n\n/* Buttons */\nbutton {\n    padding: 10px 15px;\n    font-size: 1rem;\n    color: #fff;\n    background-color: #3f51b5;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n    margin-top: 10px;\n    display: block;\n    width: 100%;\n    text-align: center;\n}\n\nbutton:hover {\n    background-color: #303f9f;\n}\n\n/* Modal Styling */\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal.hidden {\n    display: none;\n}\n\n.modal-content {\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 8px;\n    width: 300px;\n    max-width: 90%;\n}\n\n.modal-content h2 {\n    margin-bottom: 15px;\n}\n\n.modal-content label {\n    display: block;\n    margin: 10px 0 5px;\n}\n\n.modal-content input,\n.modal-content textarea,\n.modal-content select {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 15px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n}\n/* Edit and Delete Buttons */\n.edit-btn, .delete-btn {\n    margin-left: 5px;\n    padding: 5px;\n    font-size: 0.8rem;\n    cursor: pointer;\n}\n\n.edit-btn {\n    background-color: #ffeb3b;\n    color: #333;\n    border: none;\n    border-radius: 4px;\n}\n\n.delete-btn {\n    background-color: #f44336;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n}\n\n.edit-btn:hover {\n    background-color: #fdd835;\n}\n\n.delete-btn:hover {\n    background-color: #d32f2f;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-odai-dh/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodoToCurrentProject: () => (/* binding */ addTodoToCurrentProject),\n/* harmony export */   currentProjectIndex: () => (/* binding */ currentProjectIndex),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   editProject: () => (/* binding */ editProject),\n/* harmony export */   editTodo: () => (/* binding */ editTodo),\n/* harmony export */   initializeApp: () => (/* binding */ initializeApp),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nlet projects = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)();\nif (projects.length === 0) {\n    projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default Project'));\n}\nlet currentProjectIndex = 0;\n\nfunction addProject(name) {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    projects.push(newProject);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n}\n\nfunction deleteProject(index) {\n    projects.splice(index, 1);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n}\n\nfunction editProject(name, index) {\n    projects[index].name = name;\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n}\n\nfunction addTodoToCurrentProject(title, description, dueDate, priority) {\n    const currentProject = projects[currentProjectIndex];\n    if (currentProject) {\n        const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\n        currentProject.addTodo(newTodo);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProjectIndex);\n    }\n}\n\nfunction deleteTodo(projectIndex, todoIndex) {\n    projects[projectIndex].todos.splice(todoIndex, 1);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n}\n\nfunction editTodo(title, description, dueDate, priority, projectIndex, todoIndex) {\n    const todo = projects[projectIndex].todos[todoIndex];\n    todo.title = title;\n    todo.description = description;\n    todo.dueDate = dueDate;\n    todo.priority = priority;\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(projects);\n}\n\nfunction setCurrentProject(index) {\n    currentProjectIndex = index;\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProjectIndex);\n}\nfunction initializeApp() {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n    if (projects.length > 0) {\n        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProjectIndex);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n// src/dom.js\n\n\n\n// Modal variables\nconst modal = document.getElementById('modal');\nconst modalTitle = document.getElementById('modal-title');\nconst modalInput = document.getElementById('modal-input');\nconst modalDescription = document.getElementById('modal-description');\nconst modalDueDate = document.getElementById('modal-due-date');\nconst modalPriority = document.getElementById('modal-priority');\nconst modalSaveBtn = document.getElementById('modal-save');\nconst modalCancelBtn = document.getElementById('modal-cancel');\n\n// Function to render the list of projects\nfunction renderProjects() {\n    const projectContainer = document.getElementById('project-container');\n    projectContainer.innerHTML = ''; // Clear the container\n\n    _app__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project, index) => {\n        const projectElement = document.createElement('div');\n        projectElement.classList.add('project-item');\n\n        const projectName = document.createElement('span');\n        projectName.textContent = project.name;\n        projectElement.appendChild(projectName);\n\n        // Edit Button\n        const editButton = document.createElement('button');\n        editButton.textContent = 'Edit';\n        editButton.classList.add('edit-btn');\n        editButton.addEventListener('click', () => openModal('Project', index));\n        projectElement.appendChild(editButton);\n\n        // Delete Button\n        const deleteButton = document.createElement('button');\n        deleteButton.textContent = 'Delete';\n        deleteButton.classList.add('delete-btn');\n        deleteButton.addEventListener('click', () => {\n            (0,_app__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index);\n            renderProjects();\n        });\n        projectElement.appendChild(deleteButton);\n\n        projectElement.addEventListener('click', () => {\n            (0,_app__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(index);\n            renderTodos(index);\n        });\n\n        projectContainer.appendChild(projectElement);\n    });\n}\n\n// Function to render todos within a selected project\nfunction renderTodos(projectIndex) {\n    const todoContainer = document.getElementById('todo-container');\n    todoContainer.innerHTML = ''; // Clear the container\n\n    _app__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos.forEach((todo, index) => {\n        const todoElement = document.createElement('div');\n        todoElement.classList.add('todo-item');\n\n        const todoTitle = document.createElement('span');\n        todoTitle.textContent = `${todo.title} - Due: ${todo.dueDate}`;\n        todoElement.appendChild(todoTitle);\n\n        // Edit Button\n        const editButton = document.createElement('button');\n        editButton.textContent = 'Edit';\n        editButton.classList.add('edit-btn');\n        editButton.addEventListener('click', () => openModal('Todo', projectIndex, index));\n        todoElement.appendChild(editButton);\n\n        // Delete Button\n        const deleteButton = document.createElement('button');\n        deleteButton.textContent = 'Delete';\n        deleteButton.classList.add('delete-btn');\n        deleteButton.addEventListener('click', () => {\n            (0,_app__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(projectIndex, index);\n            renderTodos(projectIndex);\n        });\n        todoElement.appendChild(deleteButton);\n\n        todoContainer.appendChild(todoElement);\n    });\n}\n\n// Open the modal for adding or editing items\nfunction openModal(type, projectIndex = null, todoIndex = null) {\n    if (type === 'Project') {\n        modalTitle.textContent = projectIndex !== null ? 'Edit Project' : 'Add Project';\n        modalInput.value = projectIndex !== null ? _app__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name : '';\n    } else if (type === 'Todo') {\n        modalTitle.textContent = todoIndex !== null ? 'Edit Todo' : 'Add Todo';\n        if (todoIndex !== null) {\n            const todo = _app__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[todoIndex];\n            modalInput.value = todo.title;\n            modalDescription.value = todo.description;\n            modalDueDate.value = todo.dueDate;\n            modalPriority.value = todo.priority;\n        } else {\n            modalInput.value = '';\n            modalDescription.value = '';\n            modalDueDate.value = '';\n            modalPriority.value = 'low';\n        }\n    }\n\n    modal.classList.remove('hidden');\n\n    // Event handler for save button\n    modalSaveBtn.onclick = () => {\n        const name = modalInput.value;\n        const description = modalDescription.value;\n        const dueDate = modalDueDate.value;\n        const priority = modalPriority.value;\n\n        if (type === 'Project') {\n            if (projectIndex !== null) {\n                (0,_app__WEBPACK_IMPORTED_MODULE_0__.editProject)(name, projectIndex);\n            } else {\n                (0,_app__WEBPACK_IMPORTED_MODULE_0__.addProject)(name);\n            }\n            renderProjects();\n        } else if (type === 'Todo') {\n            if (todoIndex !== null) {\n                (0,_app__WEBPACK_IMPORTED_MODULE_0__.editTodo)(name, description, dueDate, priority, projectIndex, todoIndex);\n            } else {\n                (0,_app__WEBPACK_IMPORTED_MODULE_0__.addTodoToCurrentProject)(name, description, dueDate, priority);\n            }\n            renderTodos(projectIndex);\n        }\n\n        closeModal();\n    };\n}\n\n// Close the modal\nfunction closeModal() {\n    modal.classList.add('hidden');\n}\n\nmodalCancelBtn.addEventListener('click', closeModal);\n\ndocument.getElementById('add-project-btn').addEventListener('click', () => openModal('Project'));\ndocument.getElementById('add-todo-btn').addEventListener('click', () => openModal('Todo', _app__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex));\n\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// src/index.js\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)();\n\n\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// src/project.js\n\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.todos = []; // An array to store todos for this project\n    }\n\n    // Method to add a new todo to the project\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n\n    // Method to remove a todo by its index\n    removeTodo(index) {\n        if (index > -1 && index < this.todos.length) {\n            this.todos.splice(index, 1);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// src/storage.js\n\n\n\n\n// Function to save projects to localStorage\nfunction saveToLocalStorage(data) {\n    localStorage.setItem('projects', JSON.stringify(data));\n}\n\n// Function to load projects from localStorage and re-instantiate as Project and Todo objects\nfunction loadFromLocalStorage() {\n    const data = localStorage.getItem('projects');\n    if (!data) return []; // Return an empty array if no data is found\n\n    // Convert each loaded project to a Project instance\n    const projectsData = JSON.parse(data);\n    return projectsData.map(projectData => {\n        // Create a new Project instance\n        const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectData.name);\n        \n        // Map each todo in the project to a Todo instance\n        project.todos = projectData.todos.map(todoData => {\n            return new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n                todoData.title,\n                todoData.description,\n                todoData.dueDate,\n                todoData.priority,\n                todoData.notes,\n                todoData.checklist\n            );\n        });\n        \n        return project;\n    });\n}\n\n\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// src/todo.js\n\nclass Todo {\n    constructor(title, description, dueDate, priority, notes = '', checklist = []) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checklist = checklist;\n        this.completed = false; // Tracks if the todo is completed\n    }\n\n    // Method to mark the todo as complete\n    markComplete() {\n        this.completed = true;\n    }\n\n    // Method to toggle completion status\n    toggleComplete() {\n        this.completed = !this.completed;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list-odai-dh/./src/todo.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;