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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/change.js":
/*!**********************!*\
  !*** ./js/change.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst api = document.querySelector('input')\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n//# sourceURL=webpack:///./js/change.js?");

/***/ }),

/***/ "./js/compressImage.js":
/*!*****************************!*\
  !*** ./js/compressImage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compressImage; });\n/* harmony import */ var _js_uploadPic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/uploadPic */ \"./js/uploadPic.js\");\n\nfunction compressImage(base64, quality, mimeType) {\n    return new Promise((resolve, reject) => {\n        let canvas = document.createElement('canvas')\n        const img = new Image();\n        img.src = base64\n        img.crossOrigin = 'anonymous'\n        img.onload = () => {\n            // 画布宽高\n            const canvasWidth = document.documentElement.clientWidth * window.devicePixelRatio;\n            const canvasHeight = document.documentElement.clientHeight * window.devicePixelRatio;\n      \n            // 计算缩放因子\n            // 这里我取水平和垂直方向缩放因子较大的作为缩放因子，这样可以保证图片内容全部可见\n            const scaleX = canvasWidth / img.width;\n            const scaleY = canvasHeight / img.height;\n            const scale = Math.min(scaleX, scaleY);\n\n            // 将原始图片按缩放因子缩放后，绘制到画布上\n            const ctx = canvas.getContext(\"2d\");\n            canvas.width = canvasWidth;\n            canvas.height = canvasHeight;\n            const imageWidth = img.width * scale;\n            const imageHeight = img.height * scale;\n            const dx = (canvasWidth - imageWidth) / 2;\n            const dy = (canvasHeight - imageHeight) / 2;\n            ctx.drawImage(img, dx, dy, imageWidth, imageHeight);\n            let imageData = canvas.toDataURL(mimeType, quality / 100)\n            document.querySelector('img.preview').src = imageData\n            resolve(Object(_js_uploadPic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(imageData, mimeType))\n        }\n        img.onerror = (e) => reject(e);\n    })\n}\n\n//# sourceURL=webpack:///./js/compressImage.js?");

/***/ }),

/***/ "./js/fileToBase64ByQuality.js":
/*!*************************************!*\
  !*** ./js/fileToBase64ByQuality.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fileToBase64ByQuality; });\n/* harmony import */ var _js_compressImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/compressImage */ \"./js/compressImage.js\");\n\nfunction fileToBase64ByQuality(file, quality) {\n    let fileReader = new FileReader()\n    let type = file.type\n\n    return new Promise((resolve, reject) => {\n        if (window.URL || window.webkitURL) {\n            resolve(Object(_js_compressImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL.createObjectURL(file), quality, type))\n        } else {\n            fileReader.onload = () => {\n                resolve(Object(_js_compressImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL.createObjectURL(file), quality, type))\n            }\n            fileReader.onerror = (e) => {\n                reject(e)\n            }\n            fileReader.readAsDataURL(file)\n        }\n    })\n}\n\n//# sourceURL=webpack:///./js/fileToBase64ByQuality.js?");

/***/ }),

/***/ "./js/uploadFile.js":
/*!**************************!*\
  !*** ./js/uploadFile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return uploadFile; });\nfunction uploadFile(file) {\n    var formData = new FormData()\n    formData.append('imageUrl',file)\n    formData.append('projectId', 376)\n    const xhr = new XMLHttpRequest()\n    xhr.open('POST', 'https://top.yidianzixun.com/image/verify')\n    xhr.onreadystatechange = () => {\n        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {\n            const result = JSON.parse(this.responseText)\n            console.log(result)              \n        } else {\n            reject(this.responseText)\n        }\n    }\n    xhr.send(formData)\n}\n\n//# sourceURL=webpack:///./js/uploadFile.js?");

/***/ }),

/***/ "./js/uploadPic.js":
/*!*************************!*\
  !*** ./js/uploadPic.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return uploadPic; });\n/* harmony import */ var _js_uploadFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/uploadFile */ \"./js/uploadFile.js\");\n\nfunction uploadPic(base64, mimeType) {\n    return new Promise((resolve, reject) => {\n        let bytes = window.atob(base64.split(',')[1])\n        let ab = new ArrayBuffer(bytes.length)\n        console.log(ab.byteLength)\n        let ia = new Uint8Array(ab)\n        console.log(ia)\n        for (let i = 0; i < bytes.length; i++) {\n            ia[i] = bytes.charCodeAt(i)\n        }\n        let _blob = new Blob([ab], { type: mimeType })\n        console.log(_blob)\n\n        var formData = new FormData()\n        formData.append('file', _blob)\n        console.log(formData.get('file'))\n        const xhr = new XMLHttpRequest()\n        xhr.open('POST', 'https://top.yidianzixun.com/tool/public/file/upload')\n        xhr.onreadystatechange = function () {\n            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {\n                const result = JSON.parse(this.responseText)\n                console.log(result)\n                resolve(Object(_js_uploadFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result.url[0]))                \n            } else {\n            reject(this.responseText)\n            }\n        }\n        xhr.send(formData)\n    })\n}\n\n//# sourceURL=webpack:///./js/uploadPic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/change */ \"./js/change.js\");\n/* harmony import */ var _js_fileToBase64ByQuality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/fileToBase64ByQuality */ \"./js/fileToBase64ByQuality.js\");\n\n\n_js_change__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addEventListener('change', onFileChange);\n\nfunction onFileChange(e) {\n    const files = Array.prototype.slice.call(e.target.files);\n    const file = files[0]\n    Object(_js_fileToBase64ByQuality__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(file, 80)\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });