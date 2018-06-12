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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: wceu-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    InspectorControls = _wp$editor.InspectorControls,\n    getColorClass = _wp$editor.getColorClass,\n    PanelColor = _wp$editor.PanelColor,\n    ContrastChecker = _wp$editor.ContrastChecker; // Import components from wp.editor\n\nregisterBlockType('cgb/block-wceu-block', {\n\ttitle: __('Alert Block'),\n\ticon: 'megaphone',\n\tcategory: 'common',\n\tkeywords: [__('wceu-block — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\t// The \"contentHeading\" attribute will track the title of our section.\n\t\tcontentHeading: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'h3'\n\t\t},\n\t\t// Register a \"content\" attribute so we can track its state.\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\t// Register an \"alignment\" attribute to track the value set in the alignment controls.\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t},\n\t\t// Register attributes to track the value for background and border colors.\n\t\tborderColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tbackgroundColor: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\n\t\t// A callback function to update the block attributes.\n\t\tvar onChangeContentHeading = function onChangeContentHeading(newContentHeading) {\n\t\t\tprops.setAttributes({ contentHeading: newContentHeading });\n\t\t};\n\n\t\t// A callback function to update the block attributes.\n\t\tvar onChangeContent = function onChangeContent(newContent) {\n\t\t\tprops.setAttributes({ content: newContent });\n\t\t};\n\n\t\t// A callback function to update the alignment value when it is changed.\n\t\tvar onChangeAlignment = function onChangeAlignment(newAlignment) {\n\t\t\tprops.setAttributes({ alignment: newAlignment });\n\t\t};\n\n\t\t// Functon to update the background color when it is changed.\n\t\tvar setBorderColor = function setBorderColor(newColor) {\n\t\t\tprops.setAttributes({ borderColor: newColor });\n\t\t};\n\n\t\t// Functon to update the background color when it is changed.\n\t\tvar setBackgroundColor = function setBackgroundColor(newColor) {\n\t\t\tprops.setAttributes({ backgroundColor: newColor });\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className, style: { borderColor: props.attributes.borderColor, backgroundColor: props.attributes.backgroundColor } },\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(PanelColor, {\n\t\t\t\t\tcolorValue: props.attributes.borderColor,\n\t\t\t\t\tinitialOpen: true,\n\t\t\t\t\ttitle: __('Block Border Color'),\n\t\t\t\t\tonChange: setBorderColor\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(PanelColor, {\n\t\t\t\t\tcolorValue: props.attributes.backgroundColor,\n\t\t\t\t\tinitialOpen: true,\n\t\t\t\t\ttitle: __('Block Background Color'),\n\t\t\t\t\tonChange: setBackgroundColor\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ContrastChecker, {\n\t\t\t\t\ttextColor: '#000000' // Set in CSS\n\t\t\t\t\t, backgroundColor: props.attributes.backgroundColor\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\t\tvalue: props.attributes.alignment,\n\t\t\t\t\tonChange: onChangeAlignment\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wceu-header', style: { textAlign: props.attributes.alignment } },\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tonChange: onChangeContentHeading,\n\t\t\t\t\tvalue: props.attributes.contentHeading,\n\t\t\t\t\tfocus: props.focus,\n\t\t\t\t\tonFocus: props.setFocus,\n\t\t\t\t\tplaceholder: __('Callout Title'),\n\t\t\t\t\ttagName: 'h3'\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\tonChange: onChangeContent,\n\t\t\t\t\tvalue: props.attributes.content,\n\t\t\t\t\tfocus: props.focus,\n\t\t\t\t\tonFocus: props.setFocus,\n\t\t\t\t\tplaceholder: __('Callout Intro')\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'wceu-innerblocks' },\n\t\t\t\twp.element.createElement(InnerBlocks, null)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\n\t\t// In order to avoid adding inline styles to the frontend, there are a few alignment classes added to style.scss. \n\t\t// Let's use our value from the alignment attribute to create a string for those classes (e.g. text-left, text-right, etc.)\n\t\t// Note that this *could* be considered theme territory, but for the purposes of this workshop, it's in the plugin :)\n\t\tvar alignmentClassName = props.attributes.alignment ? 'text-' + props.attributes.alignment : null;\n\t\tvar headerClassName = alignmentClassName + ' wceu-header';\n\n\t\treturn wp.element.createElement(\n\t\t\t'section',\n\t\t\t{ style: { 'border-color': props.attributes.borderColor,\n\t\t\t\t\t'background-color': props.attributes.backgroundColor } },\n\t\t\twp.element.createElement(\n\t\t\t\t'header',\n\t\t\t\t{ className: headerClassName },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\tprops.attributes.contentHeading\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\tprops.attributes.content\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHdjZXUtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkZWRpdG9yLkFsaWdubWVudFRvb2xiYXIsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3MsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIGdldENvbG9yQ2xhc3MgPSBfd3AkZWRpdG9yLmdldENvbG9yQ2xhc3MsXG4gICAgUGFuZWxDb2xvciA9IF93cCRlZGl0b3IuUGFuZWxDb2xvcixcbiAgICBDb250cmFzdENoZWNrZXIgPSBfd3AkZWRpdG9yLkNvbnRyYXN0Q2hlY2tlcjsgLy8gSW1wb3J0IGNvbXBvbmVudHMgZnJvbSB3cC5lZGl0b3JcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay13Y2V1LWJsb2NrJywge1xuXHR0aXRsZTogX18oJ0FsZXJ0IEJsb2NrJyksXG5cdGljb246ICdtZWdhcGhvbmUnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbX18oJ3djZXUtYmxvY2sg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblx0YXR0cmlidXRlczoge1xuXHRcdC8vIFRoZSBcImNvbnRlbnRIZWFkaW5nXCIgYXR0cmlidXRlIHdpbGwgdHJhY2sgdGhlIHRpdGxlIG9mIG91ciBzZWN0aW9uLlxuXHRcdGNvbnRlbnRIZWFkaW5nOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICdoMydcblx0XHR9LFxuXHRcdC8vIFJlZ2lzdGVyIGEgXCJjb250ZW50XCIgYXR0cmlidXRlIHNvIHdlIGNhbiB0cmFjayBpdHMgc3RhdGUuXG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAncCdcblx0XHR9LFxuXHRcdC8vIFJlZ2lzdGVyIGFuIFwiYWxpZ25tZW50XCIgYXR0cmlidXRlIHRvIHRyYWNrIHRoZSB2YWx1ZSBzZXQgaW4gdGhlIGFsaWdubWVudCBjb250cm9scy5cblx0XHRhbGlnbm1lbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQvLyBSZWdpc3RlciBhdHRyaWJ1dGVzIHRvIHRyYWNrIHRoZSB2YWx1ZSBmb3IgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG9ycy5cblx0XHRib3JkZXJDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXG5cdFx0Ly8gQSBjYWxsYmFjayBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGJsb2NrIGF0dHJpYnV0ZXMuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudEhlYWRpbmcgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnRIZWFkaW5nKG5ld0NvbnRlbnRIZWFkaW5nKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudEhlYWRpbmc6IG5ld0NvbnRlbnRIZWFkaW5nIH0pO1xuXHRcdH07XG5cblx0XHQvLyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgYmxvY2sgYXR0cmlidXRlcy5cblx0XHR2YXIgb25DaGFuZ2VDb250ZW50ID0gZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xuXHRcdH07XG5cblx0XHQvLyBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgYWxpZ25tZW50IHZhbHVlIHdoZW4gaXQgaXMgY2hhbmdlZC5cblx0XHR2YXIgb25DaGFuZ2VBbGlnbm1lbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUFsaWdubWVudChuZXdBbGlnbm1lbnQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBhbGlnbm1lbnQ6IG5ld0FsaWdubWVudCB9KTtcblx0XHR9O1xuXG5cdFx0Ly8gRnVuY3RvbiB0byB1cGRhdGUgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiBpdCBpcyBjaGFuZ2VkLlxuXHRcdHZhciBzZXRCb3JkZXJDb2xvciA9IGZ1bmN0aW9uIHNldEJvcmRlckNvbG9yKG5ld0NvbG9yKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyQ29sb3I6IG5ld0NvbG9yIH0pO1xuXHRcdH07XG5cblx0XHQvLyBGdW5jdG9uIHRvIHVwZGF0ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB3aGVuIGl0IGlzIGNoYW5nZWQuXG5cdFx0dmFyIHNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIHNldEJhY2tncm91bmRDb2xvcihuZXdDb2xvcikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRDb2xvcjogbmV3Q29sb3IgfSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsIHN0eWxlOiB7IGJvcmRlckNvbG9yOiBwcm9wcy5hdHRyaWJ1dGVzLmJvcmRlckNvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmF0dHJpYnV0ZXMuYmFja2dyb3VuZENvbG9yIH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbENvbG9yLCB7XG5cdFx0XHRcdFx0Y29sb3JWYWx1ZTogcHJvcHMuYXR0cmlidXRlcy5ib3JkZXJDb2xvcixcblx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHR0aXRsZTogX18oJ0Jsb2NrIEJvcmRlciBDb2xvcicpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBzZXRCb3JkZXJDb2xvclxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3IsIHtcblx0XHRcdFx0XHRjb2xvclZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHR0aXRsZTogX18oJ0Jsb2NrIEJhY2tncm91bmQgQ29sb3InKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogc2V0QmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ29udHJhc3RDaGVja2VyLCB7XG5cdFx0XHRcdFx0dGV4dENvbG9yOiAnIzAwMDAwMCcgLy8gU2V0IGluIENTU1xuXHRcdFx0XHRcdCwgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5hdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEFsaWdubWVudFRvb2xiYXIsIHtcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQWxpZ25tZW50XG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICd3Y2V1LWhlYWRlcicsIHN0eWxlOiB7IHRleHRBbGlnbjogcHJvcHMuYXR0cmlidXRlcy5hbGlnbm1lbnQgfSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50SGVhZGluZyxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50SGVhZGluZyxcblx0XHRcdFx0XHRmb2N1czogcHJvcHMuZm9jdXMsXG5cdFx0XHRcdFx0b25Gb2N1czogcHJvcHMuc2V0Rm9jdXMsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdDYWxsb3V0IFRpdGxlJyksXG5cdFx0XHRcdFx0dGFnTmFtZTogJ2gzJ1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29udGVudCxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdFx0XHRcdGZvY3VzOiBwcm9wcy5mb2N1cyxcblx0XHRcdFx0XHRvbkZvY3VzOiBwcm9wcy5zZXRGb2N1cyxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0NhbGxvdXQgSW50cm8nKVxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnd2NldS1pbm5lcmJsb2NrcycgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXG5cdFx0Ly8gSW4gb3JkZXIgdG8gYXZvaWQgYWRkaW5nIGlubGluZSBzdHlsZXMgdG8gdGhlIGZyb250ZW5kLCB0aGVyZSBhcmUgYSBmZXcgYWxpZ25tZW50IGNsYXNzZXMgYWRkZWQgdG8gc3R5bGUuc2Nzcy4gXG5cdFx0Ly8gTGV0J3MgdXNlIG91ciB2YWx1ZSBmcm9tIHRoZSBhbGlnbm1lbnQgYXR0cmlidXRlIHRvIGNyZWF0ZSBhIHN0cmluZyBmb3IgdGhvc2UgY2xhc3NlcyAoZS5nLiB0ZXh0LWxlZnQsIHRleHQtcmlnaHQsIGV0Yy4pXG5cdFx0Ly8gTm90ZSB0aGF0IHRoaXMgKmNvdWxkKiBiZSBjb25zaWRlcmVkIHRoZW1lIHRlcnJpdG9yeSwgYnV0IGZvciB0aGUgcHVycG9zZXMgb2YgdGhpcyB3b3Jrc2hvcCwgaXQncyBpbiB0aGUgcGx1Z2luIDopXG5cdFx0dmFyIGFsaWdubWVudENsYXNzTmFtZSA9IHByb3BzLmF0dHJpYnV0ZXMuYWxpZ25tZW50ID8gJ3RleHQtJyArIHByb3BzLmF0dHJpYnV0ZXMuYWxpZ25tZW50IDogbnVsbDtcblx0XHR2YXIgaGVhZGVyQ2xhc3NOYW1lID0gYWxpZ25tZW50Q2xhc3NOYW1lICsgJyB3Y2V1LWhlYWRlcic7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3NlY3Rpb24nLFxuXHRcdFx0eyBzdHlsZTogeyAnYm9yZGVyLWNvbG9yJzogcHJvcHMuYXR0cmlidXRlcy5ib3JkZXJDb2xvcixcblx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6IHByb3BzLmF0dHJpYnV0ZXMuYmFja2dyb3VuZENvbG9yIH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2hlYWRlcicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBoZWFkZXJDbGFzc05hbWUgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdoMycsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRIZWFkaW5nXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

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