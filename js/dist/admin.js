module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/addAdsPane.js":
/*!*********************************!*\
  !*** ./src/admin/addAdsPane.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AdsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AdsPage */ "./src/admin/components/AdsPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  // create the route
  app.routes['flagrow-ads'] = {
    path: '/flagrow/ads',
    component: _components_AdsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  }; // bind the route we created to the three dots settings button

  app.extensionSettings['flagrow-ads'] = function () {
    return m.route(app.route('flagrow-ads'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('flagrow-ads', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('flagrow-ads'),
      icon: 'fas fa-audio-description',
      children: 'Ads',
      description: app.translator.trans('flagrow-ads.admin.tab.description')
    }));
  });
});

/***/ }),

/***/ "./src/admin/components/AdsPage.js":
/*!*****************************************!*\
  !*** ./src/admin/components/AdsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/saveSettings */ "flarum/utils/saveSettings");
/* harmony import */ var flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__);






var UploadPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UploadPage, _Component);

  function UploadPage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UploadPage.prototype;

  _proto.init = function init() {
    var _this = this;

    // get the saved settings from the database
    var settings = app.data.settings;
    this.values = {}; // our package prefix (to be added to every field and checkbox in the setting table)

    this.settingsPrefix = 'flagrow.ads';
    this.positions = ['under-header', 'between-posts', 'under-nav-items'];
    this.settings = ['start-from-post', 'between-n-posts']; // bind the values of the fields and checkboxes to the getter/setter functions

    this.positions.forEach(function (key) {
      return _this.values[key] = m.prop(settings[_this.addPrefix(key)]);
    });
    this.settings.forEach(function (key) {
      return _this.values[key] = m.prop(settings[_this.addPrefix(key)]);
    });
  };
  /**
   * Show the actual ImageUploadPage.
   *
   * @returns {*}
   */


  _proto.view = function view() {
    var _this2 = this;

    return [m('div', {
      className: 'AdsPage'
    }, [m('form', {
      onsubmit: this.onsubmit.bind(this)
    }, m('fieldset', {
      className: 'AdsPage-settings'
    }, [m('legend', {}, app.translator.trans('flagrow-ads.admin.settings.start-from-post')), m('input', {
      value: this.values['start-from-post']() || 1,
      className: 'FormControl',
      oninput: m.withAttr('value', this.values['start-from-post'])
    })]), m('fieldset', {
      className: 'AdsPage-settings'
    }, [m('legend', {}, app.translator.trans('flagrow-ads.admin.settings.between-n-posts')), m('input', {
      value: this.values['between-n-posts']() || 5,
      className: 'FormControl',
      oninput: m.withAttr('value', this.values['between-n-posts'])
    })]), this.positions.map(function (position) {
      return m('fieldset', {
        className: 'AdsPage-' + position
      }, [m('legend', {}, app.translator.trans('flagrow-ads.admin.positions.' + position + '.title')), m('textarea', {
        value: _this2.values[position]() || null,
        className: 'FormControl',
        placeholder: app.translator.trans('flagrow-ads.admin.positions.' + position + '.placeholder'),
        oninput: m.withAttr('value', _this2.values[position])
      })]);
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      children: app.translator.trans('flagrow-ads.admin.buttons.save'),
      loading: this.loading,
      disabled: !this.changed()
    }))])];
  };
  /**
   * Checks if the values of the fields and checkboxes are different from
   * the ones stored in the database
   *
   * @returns boolean
   */


  _proto.changed = function changed() {
    var _this3 = this;

    var positionsChecked = this.positions.some(function (key) {
      return _this3.values[key]() !== app.data.settings[_this3.addPrefix(key)];
    });
    var settingsChecked = this.settings.some(function (key) {
      return _this3.values[key]() !== app.data.settings[_this3.addPrefix(key)];
    });
    return positionsChecked || settingsChecked;
  };
  /**
   * Saves the settings to the database and redraw the page
   *
   * @param e
   */


  _proto.onsubmit = function onsubmit(e) {
    var _this4 = this;

    // prevent the usual form submit behaviour
    e.preventDefault(); // if the page is already saving, do nothing

    if (this.loading) return; // prevents multiple savings

    this.loading = true; // remove previous success popup

    app.alerts.dismiss(this.successAlert);
    var settings = {}; // gets all the values from the form

    this.positions.forEach(function (key) {
      return settings[_this4.addPrefix(key)] = _this4.values[key]();
    });
    this.settings.forEach(function (key) {
      return settings[_this4.addPrefix(key)] = _this4.values[key]();
    }); // actually saves everything in the database

    flarum_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default()(settings).then(function () {
      // on success, show popup
      app.alerts.show(_this4.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a({
        type: 'success',
        children: app.translator.trans('core.admin.basics.saved_message')
      }));
    }).catch(function () {}).then(function () {
      // return to the initial state and redraw the page
      _this4.loading = false;
      m.redraw();
    });
  };

  _proto.addPrefix = function addPrefix(key) {
    return this.settingsPrefix + '.' + key;
  };

  return UploadPage;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addAdsPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAdsPane */ "./src/admin/addAdsPane.js");



flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flagrow-ads', function () {
  // add the admin pane
  Object(_addAdsPane__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/saveSettings":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/saveSettings']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/saveSettings'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map