/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/operationFunctions.js":
/*!*******************************************!*\
  !*** ./src/modules/operationFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   checkedBox: () => (/* binding */ checkedBox),
/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   notChecked: () => (/* binding */ notChecked),
/* harmony export */   populateTasks: () => (/* binding */ populateTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var saveTasksToLocalStorage = function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
var populateTasks = function populateTasks() {
  var ulTag = document.getElementById('list');
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }
  tasks.forEach(function (task, index) {
    // <li>

    var listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = "\n        <input type=\"checkbox\" data-index=".concat(task.index, " class='check' id='check-").concat(index, "' ").concat(task.completed ? 'checked' : '', ">\n        <input type='text' id='editForm-").concat(task.index, "' class='item ").concat(task.completed ? 'strike' : '', "' value = ").concat(task.description, " data-index='").concat(task.index, "'>\n      ");

    // <i>
    var iTag = document.createElement('i');
    iTag.className = 'fas fa-ellipsis-v';

    // <div>
    var divTag = document.createElement('div');
    ulTag.appendChild(divTag);
    divTag.className = 'list-container';
    divTag.appendChild(listItem);
    divTag.appendChild(iTag);
  });
};
var addTask = function addTask(description) {
  var newTask = {
    description: description,
    completed: false,
    index: tasks.length + 1
  };
  tasks.unshift(newTask);
  saveTasksToLocalStorage();
  populateTasks();
};
var removeTask = function removeTask(index) {
  tasks.splice(index, 1);
  tasks.forEach(function (task, idx) {
    task.index = idx;
  });
  saveTasksToLocalStorage();
  populateTasks();
};
var editTask = function editTask(index, newDescription) {
  tasks[index - 1].description = newDescription;
  saveTasksToLocalStorage();
};
var clearCompletedTasks = function clearCompletedTasks() {
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });
  tasks.forEach(function (task, idx) {
    task.index = idx + 1;
  });
  saveTasksToLocalStorage();
  populateTasks();
};
var checkedBox = function checkedBox(taskIndex) {
  var task = tasks.find(function (task) {
    return task.index === +taskIndex;
  });
  task.completed = true;
  saveTasksToLocalStorage();
};
var notChecked = function notChecked(taskIndex) {
  var task = tasks.find(function (task) {
    return task.index === +taskIndex;
  });
  task.completed = false;
  saveTasksToLocalStorage();
  populateTasks();
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Poppins", sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 10rem auto;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(133, 128, 128, 0.4);
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 300;
  border-bottom: 1px solid #ccc;
}

.list-add {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.addtasks {
  font-style: italic;
  font-size: 18px;
  outline: none;
  width: 90%;
  border: none;
}

.clear-button {
  padding: 10px;
  background-color: #ccc;
  color: #000;
}

.clear-button:hover {
  cursor: pointer;
  background-color: rgb(5, 184, 5);
  color: #fff;
}

.todo-list {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.list-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  border-bottom: 1px solid #ccc;
}

.list-item {
  list-style-type: none;
  padding: 12px;
  width: auto;
}

.btn {
  background-color: transparent;
  border: none;
}

input[type="checkbox"] {
  margin-right: 1rem;
}

.trash {
  cursor: pointer;
  color: red;
}

input {
  border: none;
}

.strike {
  text-decoration: line-through;
  color: #a5a2a2;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,8CAA8C;EAC9C,uBAAuB;EACvB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crete+Round:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #f0f0f0;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  margin: 10rem auto;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 2px 4px rgba(133, 128, 128, 0.4);\r\n  background-color: white;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.list-add {\r\n  display: flex;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ccc;\r\n  justify-content: space-between;\r\n}\r\n\r\n.addtasks {\r\n  font-style: italic;\r\n  font-size: 18px;\r\n  outline: none;\r\n  width: 90%;\r\n  border: none;\r\n}\r\n\r\n.clear-button {\r\n  padding: 10px;\r\n  background-color: #ccc;\r\n  color: #000;\r\n}\r\n\r\n.clear-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(5, 184, 5);\r\n  color: #fff;\r\n}\r\n\r\n.todo-list {\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 98%;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.list-item {\r\n  list-style-type: none;\r\n  padding: 12px;\r\n  width: auto;\r\n}\r\n\r\n.btn {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.trash {\r\n  cursor: pointer;\r\n  color: red;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n  color: #a5a2a2;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/operationFunctions.js */ "./src/modules/operationFunctions.js");



// Initialize tasks from local storage
(0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.populateTasks)();

// Add task functionality
document.getElementById('add-btn').addEventListener('click', function () {
  var newTaskDescription = document.getElementById('newList');
  if (newTaskDescription.value.trim() !== '') {
    (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(newTaskDescription.value);
    newTaskDescription.value = '';
  }
});

// Delete task functionality
document.getElementById('list').addEventListener('click', function (event) {
  if (event.target.classList.contains('fa-trash')) {
    var taskList = event.target.parentElement.childNodes[0];
    var taskItem = taskList.querySelector('.item');
    var taskIndex = taskItem.getAttribute('data-index');
    (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskIndex);
  } else if (event.target.classList.contains('fa-ellipsis-v')) {
    event.target.className = 'fas fa-trash trash';
  } else if (event.target.classList.contains('check')) {
    var idx = event.target.getAttribute('data-index');
    event.target.addEventListener('change', function () {
      var checkBoxInput = document.getElementById("editForm-".concat(idx));
      if (event.target.checked) {
        (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.checkedBox)(idx);
        // add strike class
        checkBoxInput.classList.add('strike');
      } else {
        (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.notChecked)(idx);
        // remove stroke class
        checkBoxInput.classList.remove('strike');
      }
    });
  }
});
function handleFocus(event) {
  var inputValue = event.target.value;
  var taskIndex = event.target.getAttribute('data-index');
  var newDescription = inputValue.trim();
  (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(taskIndex, newDescription);
}

// Edit task functionality
var element = document.querySelectorAll('#editForm');
element.forEach(function (el) {
  el.addEventListener('focusout', handleFocus);
});

// Clear completed tasks
document.getElementById('clear').addEventListener('click', function () {
  (0,_modules_operationFunctions_js__WEBPACK_IMPORTED_MODULE_1__.clearCompletedTasks)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundlec125c5b37100b8b4c0ce.js.map