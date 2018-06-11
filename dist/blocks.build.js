/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: wceu-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InnerBlocks = _wp$editor.InnerBlocks; // Import components from wp.editor\n\nregisterBlockType('cgb/block-wceu-block', {\n\ttitle: __('WCEU Block'),\n\ticon: 'carrot',\n\tcategory: 'common',\n\tkeywords: [__('wceu-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\t// Register a \"content\" attribute so we can track its state.\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\t// Register an \"alignment\" attribute to track the value set in the alignment controls.\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t}\n\n\t},\n\n\tedit: function edit(props) {\n\n\t\t// A callback function to update the block attributes.\n\t\tvar onChangeContent = function onChangeContent(newContent) {\n\t\t\tprops.setAttributes({ content: newContent });\n\t\t};\n\n\t\t// A callback function to update the alignment value when it is changed.\n\t\tvar onChangeAlignment = function onChangeAlignment(newAlignment) {\n\t\t\tprops.setAttributes({ alignment: newAlignment });\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\t\tvalue: props.attributes.alignment,\n\t\t\t\t\tonChange: onChangeAlignment\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tstyle: { textAlign: props.attributes.alignment },\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: props.attributes.content\n\t\t\t}),\n\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\n\t\t// In order to avoid adding inline styles to the frontend, there are a few alignment classes added to style.scss. \n\t\t// Let's use our value from the alignment attribute to create a string for those classes (e.g. text-left, text-right, etc.)\n\t\t// Note that this *could* be considered theme territory, but for the purposes of this workshop, it's in the plugin :)\n\t\tvar alignmentClassName = props.attributes.alignment ? 'text-' + props.attributes.alignment : null;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: alignmentClassName },\n\t\t\t\tprops.attributes.content\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHdjZXUtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkZWRpdG9yLkFsaWdubWVudFRvb2xiYXIsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3M7IC8vIEltcG9ydCBjb21wb25lbnRzIGZyb20gd3AuZWRpdG9yXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2std2NldS1ibG9jaycsIHtcblx0dGl0bGU6IF9fKCdXQ0VVIEJsb2NrJyksXG5cdGljb246ICdjYXJyb3QnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbX18oJ3djZXUtYmxvY2sg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdC8vIFJlZ2lzdGVyIGEgXCJjb250ZW50XCIgYXR0cmlidXRlIHNvIHdlIGNhbiB0cmFjayBpdHMgc3RhdGUuXG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAncCdcblx0XHR9LFxuXHRcdC8vIFJlZ2lzdGVyIGFuIFwiYWxpZ25tZW50XCIgYXR0cmlidXRlIHRvIHRyYWNrIHRoZSB2YWx1ZSBzZXQgaW4gdGhlIGFsaWdubWVudCBjb250cm9scy5cblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fVxuXG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXG5cdFx0Ly8gQSBjYWxsYmFjayBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGJsb2NrIGF0dHJpYnV0ZXMuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV3Q29udGVudCB9KTtcblx0XHR9O1xuXG5cdFx0Ly8gQSBjYWxsYmFjayBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFsaWdubWVudCB2YWx1ZSB3aGVuIGl0IGlzIGNoYW5nZWQuXG5cdFx0dmFyIG9uQ2hhbmdlQWxpZ25tZW50ID0gZnVuY3Rpb24gb25DaGFuZ2VBbGlnbm1lbnQobmV3QWxpZ25tZW50KSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50OiBuZXdBbGlnbm1lbnQgfSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEFsaWdubWVudFRvb2xiYXIsIHtcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQWxpZ25tZW50XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdHN0eWxlOiB7IHRleHRBbGlnbjogcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQgfSxcblx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudCxcblx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIG51bGwpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cblx0XHQvLyBJbiBvcmRlciB0byBhdm9pZCBhZGRpbmcgaW5saW5lIHN0eWxlcyB0byB0aGUgZnJvbnRlbmQsIHRoZXJlIGFyZSBhIGZldyBhbGlnbm1lbnQgY2xhc3NlcyBhZGRlZCB0byBzdHlsZS5zY3NzLiBcblx0XHQvLyBMZXQncyB1c2Ugb3VyIHZhbHVlIGZyb20gdGhlIGFsaWdubWVudCBhdHRyaWJ1dGUgdG8gY3JlYXRlIGEgc3RyaW5nIGZvciB0aG9zZSBjbGFzc2VzIChlLmcuIHRleHQtbGVmdCwgdGV4dC1yaWdodCwgZXRjLilcblx0XHQvLyBOb3RlIHRoYXQgdGhpcyAqY291bGQqIGJlIGNvbnNpZGVyZWQgdGhlbWUgdGVycml0b3J5LCBidXQgZm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIHdvcmtzaG9wLCBpdCdzIGluIHRoZSBwbHVnaW4gOilcblx0XHR2YXIgYWxpZ25tZW50Q2xhc3NOYW1lID0gcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQgPyAndGV4dC0nICsgcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQgOiBudWxsO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogYWxpZ25tZW50Q2xhc3NOYW1lIH0sXG5cdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);