/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE
};

var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, days);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;

    // Check for cases of one full calendar month
    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }
  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);
  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }
  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }
  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }
  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft);

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  "long": 'MMMM do, y',
  medium: 'MMM d, y',
  "short": 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  "long": 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  "short": 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  "long": "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  "short": ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  "short": /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/JS/CONTROLLER/Controller.js":
/*!*****************************************!*\
  !*** ./src/JS/CONTROLLER/Controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoCreationController: () => (/* binding */ TodoCreationController),
/* harmony export */   getTodoFormData: () => (/* binding */ getTodoFormData),
/* harmony export */   todoCreationFromForm: () => (/* binding */ todoCreationFromForm)
/* harmony export */ });
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
/* harmony import */ var _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../STORAGE/LocalStorage */ "./src/JS/STORAGE/LocalStorage.js");
/* harmony import */ var _FACTORIES_TodoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FACTORIES/TodoFactory */ "./src/JS/FACTORIES/TodoFactory.js");




//TODO CREATION
function validateTodo(todoForm) {
  var valid = false;
  if (todoForm.elements.todoTitle.value === "" || todoForm.elements.todoTitle.value.toLowerCase() === "the field must not be empty") {
    //todo title
    todoForm.elements.todoTitle.focus();
    todoForm.elements.todoTitle.value = "This field is required";
  } else if (todoForm.elements.todoDescription.value === "" || todoForm.elements.todoDescription.value.toLowerCase() === "this field is required") {
    //todo description
    todoForm.elements.todoDescription.focus();
    todoForm.elements.todoDescription.value = "This field is required";
  } else if (todoForm.elements.dueDate.value === "") {
    //todo date
    todoForm.elements.dueDate.focus();
  } else {
    valid = true;
  }
  return valid;
}
var TodoCreationController = function TodoCreationController() {
  var todoForm = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newTodo form");
  //validar todo y si es valido crealo
  if (validateTodo(todoForm)) {
    var _getTodoFormData = getTodoFormData(todoForm),
      title = _getTodoFormData.title,
      dueDate = _getTodoFormData.dueDate,
      priority = _getTodoFormData.priority,
      description = _getTodoFormData.description;
    var todoObj = (0,_FACTORIES_TodoFactory__WEBPACK_IMPORTED_MODULE_2__.TodoFactory)(title);
    todoObj.description = description;
    todoObj.dueDate = dueDate;
    todoObj.priority = priority;
    _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.TodoLocalStorage.addTodo(todoObj);
    //close dialog
    todoForm.parentElement.parentElement.classList.add("hidden");
    //render the content
    renderAsideFieldContent();
  }
};
function todoCreationFromForm(form) {
  var _getTodoFormData2 = getTodoFormData(form),
    title = _getTodoFormData2.title,
    dueDate = _getTodoFormData2.dueDate,
    priority = _getTodoFormData2.priority,
    description = _getTodoFormData2.description;
  var todoObj = (0,_FACTORIES_TodoFactory__WEBPACK_IMPORTED_MODULE_2__.TodoFactory)(title);
  todoObj.dueDate = dueDate;
  todoObj.priority = priority;
  todoObj.description = description;
  return todoObj;
}
function getTodoFormData(todoForm) {
  return Object.assign({}, {
    title: todoForm.elements.todoTitle.value
  }, {
    dueDate: todoForm.elements.dueDate.value
  }, {
    priority: todoForm.elements.priority.value
  }, {
    description: todoForm.elements.todoDescription.value
  });
}

/***/ }),

/***/ "./src/JS/Events.js":
/*!**************************!*\
  !*** ./src/JS/Events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asideElementsClick: () => (/* binding */ asideElementsClick),
/* harmony export */   handleDialogEvents: () => (/* binding */ handleDialogEvents),
/* harmony export */   projectContainerEventsHandler: () => (/* binding */ projectContainerEventsHandler),
/* harmony export */   renderTodoDialog: () => (/* binding */ renderTodoDialog)
/* harmony export */ });
/* harmony import */ var _CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONTROLLER/Controller */ "./src/JS/CONTROLLER/Controller.js");
/* harmony import */ var _FACTORIES_TodoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FACTORIES/TodoFactory */ "./src/JS/FACTORIES/TodoFactory.js");
/* harmony import */ var _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./STORAGE/LocalStorage */ "./src/JS/STORAGE/LocalStorage.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/JS/UI.js");
/* harmony import */ var _UI_COMPONENTS_TodoDialogComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_COMPONENTS/TodoDialogComponent */ "./src/JS/UI_COMPONENTS/TodoDialogComponent.js");
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






var addTodoBtn = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$)("button.dialogDisplayer.newTodo");
function asideElementsClick(event) {
  //this -> aside ul
  //event will be either on the ul or the li
  var asideElements = _toConsumableArray(this.getElementsByTagName("li"));
  var activeAsideElements = asideElements.filter(function (el) {
    return el.classList.contains("active");
  });
  if (activeAsideElements.length > 0) {
    activeAsideElements.forEach(function (el) {
      return el.classList.remove("active");
    });
  }
  if (event.target.localName === "li") {
    event.target.classList.add("active");
    //render the main content on the element that is active
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderActiveLiContent)(event.target);
  }
}

//CLOSE ANY DIALOG
//DIALOG : HEADER > CLOSE X, ^ MAIN,  FOOTER > CLOSE BUTTON
//EVENT DELEGATION
//RENDER ADD TODO DIALOG

function handleDialogEvents(event) {
  if (event.target.matches("button.closeDialog") || event.target.matches("span.closeDialog")) {
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideDialog)((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getDOMTodoFromElement)(event.target));
  } else if (event.target.matches("button.addTodo")) {
    //add todo
    var form = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getDOMTodoFromElement)(event.target).getElementsByTagName("form")[0];

    //validate form
    if (validateTodoForm(form)) {
      //create todo obj
      var todoObj = (0,_CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_0__.todoCreationFromForm)(form);
      _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.addTodo(todoObj);
      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderActiveLiContent)(_toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$$)("aside ul li")).filter(function (el) {
        return el.classList.contains("active");
      })[0]);
      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideDialog)((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$)("dialog.newTodo"));
    }
  } else if (event.target.matches("button.editTodo")) {
    var dialog = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getTodoDivFromBtn)(event.target);
    var _form = dialog.querySelector("form");
    var _getTodoFormData = (0,_CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_0__.getTodoFormData)(_form),
      title = _getTodoFormData.title,
      dueDate = _getTodoFormData.dueDate,
      priority = _getTodoFormData.priority,
      description = _getTodoFormData.description;
    var toEditTodo = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.getTodo(dialog.getAttribute("data-id"));
    //set values
    toEditTodo.title = title;
    toEditTodo.description = description;
    toEditTodo.dueDate = dueDate;
    toEditTodo.priority = priority;
    _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.saveTodo(toEditTodo);
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.hideDialog)(dialog);
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderActiveLiContent)(_toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$$)("aside ul li")).filter(function (el) {
      return el.classList.contains("active");
    })[0]);
  } else if (event.target.matches("button.deleteBtn.deleteTodo")) {
    var todoDiv = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getTodoDivFromBtn)(event.target);
    var id = todoDiv.getAttribute("data-id");
    console.log(id);
    /*
    todoDiv.remove();
    TodoLocalStorage.removeTodo(id);
    renderActiveLiContent(
      [...$$("aside ul li")].filter((el) => el.classList.contains("active"))[0]
    );
    */
  }
}

function renderTodoDialog() {
  addTodoBtn.addEventListener("click", function () {
    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayDialog)((0,_UI_COMPONENTS_TodoDialogComponent__WEBPACK_IMPORTED_MODULE_4__.TodoDialogComponent)({
      header: "New Todo",
      titleValue: "",
      id: "",
      dateValue: "",
      descriptionValue: "",
      lastButtonText: "Add Todo"
    }));
  });
}
function validateTodoForm(form) {
  for (var i = 0; i < _toConsumableArray(form.elements).length; i++) {
    var element = form.elements[i];
    if (element.value === "") {
      element.focus();
      break;
    }
  }
  return _toConsumableArray(form.elements).every(function (el) {
    return el.value !== "";
  });
}

//HANDLE DIV PROJECTCONTAINER EVENTS
function projectContainerEventsHandler() {
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$)("div.projectContainer").addEventListener("click", function (event) {
    if (event.target.matches("div.showMore")) {
      //get id from todo
      var id = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getTodoDivFromBtn)(event.target).getAttribute("data-id");
      //get todo
      var todo = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.getTodo(id);
      //show dialog
      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.displayDialog)((0,_UI_COMPONENTS_TodoDialogComponent__WEBPACK_IMPORTED_MODULE_4__.TodoDialogComponent)({
        header: "Edit Todo",
        titleValue: todo.title,
        id: todo.id,
        dateValue: todo.dueDate,
        priorityValue: todo.priority,
        descriptionValue: todo.description,
        lastButtonText: "Edit Todo"
      }));
    } else if (event.target.matches("button.deleteBtn.deleteTodo")) {
      var todoDiv = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getTodoDivFromBtn)(event.target);
      var _id = todoDiv.getAttribute("data-id");
      todoDiv.remove();
      _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.removeTodo(_id);
      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.renderActiveLiContent)(_toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.$$)("aside ul li")).filter(function (el) {
        return el.classList.contains("active");
      })[0]);
    } else if (event.target.matches("input#todoChecked")) {
      var _todoDiv = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_5__.getTodoDivFromBtn)(event.target);
      var _id2 = _todoDiv.getAttribute("data-id");
      var _todo = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.getTodo(_id2);
      _todo.checked = !_todo.checked;
      _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_2__.TodoLocalStorage.saveTodo(_todo);
    }
  });
}

/***/ }),

/***/ "./src/JS/FACTORIES/TodoFactory.js":
/*!*****************************************!*\
  !*** ./src/JS/FACTORIES/TodoFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoFactory: () => (/* binding */ TodoFactory)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

//FUNCTIONS ARE COMMENTED SINCE THEY CANNOT BE STORED IN LOCAL STORAGE

var projectExtension = function projectExtension() {
  return {
    projectId: null,
    proyectTitle: null
    /*
    getProyectId: function () {
      return this.projectId;
    },*/
  };
};

var dueDateExtension = function dueDateExtension(date) {
  return {
    dueDate: date
  };
};
var checkedExtension = function checkedExtension() {
  return {
    checked: false
    /*
    toggleChecked: function () {
      this._checked = !this._checked;
    },
    isChecked: function () {
      return this._checked;
    },*/
  };
};

var prioritiesExtension = function prioritiesExtension() {
  return {
    priority: "low"
    /*
    setPriority: function (p) {
      this._priority = p;
    },
    getPriority: function () {
      return this._priority;
    },*/
  };
};

var descriptionExtension = function descriptionExtension() {
  return {
    description: null
    /*
    getDescription: function () {
      return this._description;
    },
    setDescription: function (desc) {
      this._description = desc;
    },
    */
  };
};

var extensionsArray = [dueDateExtension, prioritiesExtension, descriptionExtension, checkedExtension];
var todoExtensions = function todoExtensions(extensions) {
  var baseObj = {};
  extensions.forEach(function (extension) {
    Object.assign(baseObj, extension());
  });
  return baseObj;
};
var TodoFactory = function TodoFactory(title) {
  var basicData = {
    title: title,
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
    /*
    getId: function () {
      return this.id;
    },
    */
  };

  var basic = todoExtensions(extensionsArray);
  var composite = Object.assign({}, basic);
  return Object.assign(Object.create(composite), basicData);
};

/***/ }),

/***/ "./src/JS/STORAGE/LocalStorage.js":
/*!****************************************!*\
  !*** ./src/JS/STORAGE/LocalStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoLocalStorage: () => (/* binding */ TodoLocalStorage)
/* harmony export */ });
//TODO
var todos;
var getTodos = function getTodos() {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  return todos;
};
var saveTodos = function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
};
var addTodo = function addTodo(todo) {
  getTodos();
  todos.unshift(todo);
  saveTodos();
};
var removeTodo = function removeTodo(todoId) {
  getTodos();
  todos = todos.filter(function (t) {
    return t.id !== todoId;
  });
  saveTodos();
};

//Modify todo -> Get and Save at the same index
var getTodo = function getTodo(todoId) {
  getTodos();
  var todo = todos.filter(function (t) {
    return t.id === todoId;
  })[0];
  saveTodos();
  return todo;
};
var saveTodo = function saveTodo(todo) {
  getTodos();
  var index = todos.findIndex(function (t) {
    return t.id === todo.id;
  });
  todos[index] = todo;
  saveTodos();
};
var TodoLocalStorage = {
  getTodos: getTodos,
  saveTodos: saveTodos,
  getTodo: getTodo,
  addTodo: addTodo,
  removeTodo: removeTodo,
  saveTodo: saveTodo
};


/***/ }),

/***/ "./src/JS/UI.js":
/*!**********************!*\
  !*** ./src/JS/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDialog: () => (/* binding */ displayDialog),
/* harmony export */   hideDialog: () => (/* binding */ hideDialog),
/* harmony export */   renderActiveLiContent: () => (/* binding */ renderActiveLiContent),
/* harmony export */   renderAside: () => (/* binding */ renderAside)
/* harmony export */ });
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/JS/Events.js");
/* harmony import */ var _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./STORAGE/LocalStorage */ "./src/JS/STORAGE/LocalStorage.js");
/* harmony import */ var _UI_COMPONENTS_AsideComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI_COMPONENTS/AsideComponent */ "./src/JS/UI_COMPONENTS/AsideComponent.js");
/* harmony import */ var _UI_COMPONENTS_AsideComponentsArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI_COMPONENTS/AsideComponentsArray */ "./src/JS/UI_COMPONENTS/AsideComponentsArray.js");
/* harmony import */ var _UI_COMPONENTS_TodoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI_COMPONENTS/TodoComponent */ "./src/JS/UI_COMPONENTS/TodoComponent.js");
/* harmony import */ var _UI_COMPONENTS_TodoDialogComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI_COMPONENTS/TodoDialogComponent */ "./src/JS/UI_COMPONENTS/TodoDialogComponent.js");
/* harmony import */ var _UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UTILITIES/DateFns */ "./src/JS/UTILITIES/DateFns.js");
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








var divProjectCotainer = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__.$)("div.projectContainer");
var asideFieldComponents = (0,_UI_COMPONENTS_AsideComponentsArray__WEBPACK_IMPORTED_MODULE_3__.getTodoListFields)(); //retreive fields with name, svg an other components (optional)
//const addTodoDialog = $("dialog.newTodo");

//RENDER ASIDE
function renderAside() {
  var aside = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__.$)("body > main > aside");
  var ul = document.createElement("ul");
  var _iterator = _createForOfIteratorHelper(asideFieldComponents),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      var li = document.createElement("li");
      var _AsideComponent = (0,_UI_COMPONENTS_AsideComponent__WEBPACK_IMPORTED_MODULE_2__.AsideComponent)(field),
        component = _AsideComponent.span,
        active = _AsideComponent.active; // create fields with name, svg an other components (optional)
      li.append(component);
      if (active) {
        li.classList.add("active");
        renderActiveLiContent(li);
      }
      ul.append(li);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  ul.addEventListener("click", _Events__WEBPACK_IMPORTED_MODULE_0__.asideElementsClick);
  aside.append(ul);
}

//RENDER MAIN CONTENT SECTION TAKING INTO ACCOUNT THE ACTIVE LI ELEMENT
var contentRenderer = {
  all: renderAllTodosField,
  important: renderImportantTodos,
  "next 7 days": renderNextWeekTodos,
  "next month": renderNextMonthTodos
};
function renderActiveLiContent(activeElement) {
  divProjectCotainer.replaceChildren();
  //set the data from the active element
  var titleEl = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__.$)("body > main > section > h1");
  var asideFieldText = activeElement.firstChild.childNodes[1].textContent;
  titleEl.textContent = asideFieldText;
  //render the dom components taking into account the active element
  contentRenderer[titleEl.textContent.toLowerCase()]();
}
function renderDOMTodo(todoObj) {
  var DOMTodo = (0,_UI_COMPONENTS_TodoComponent__WEBPACK_IMPORTED_MODULE_4__.TodoComponent)(todoObj);
  divProjectCotainer.append(DOMTodo);
}
function renderAllTodosField() {
  var todos = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.TodoLocalStorage.getTodos();
  if (todos.length > 0) {
    todos.forEach(function (t) {
      return renderDOMTodo(t);
    });
  }
}

//IMPORTANT FIELD
function renderImportantTodos() {
  var todos = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.TodoLocalStorage.getTodos().filter(function (t) {
    return t.priority.toLowerCase() === "high";
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}

//NEXT WEEK (7 days or 1 week from todays date)
function renderNextWeekTodos() {
  var today = new Date();
  var limit = (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_6__.addWeeksFromDate)(today, 1);
  var todos = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.TodoLocalStorage.getTodos().filter(function (t) {
    return (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_6__.isDateBeforeOther)(Date.parse(t.dueDate), limit);
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}
function renderNextMonthTodos() {
  var today = new Date();
  var limit = (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_6__.addWeeksFromDate)(today, 4);
  var todos = _STORAGE_LocalStorage__WEBPACK_IMPORTED_MODULE_1__.TodoLocalStorage.getTodos().filter(function (t) {
    return (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_6__.isDateBeforeOther)(Date.parse(t.dueDate), limit);
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}

//ADD TODO DIALOG
function displayDialog(dialog) {
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__.$)("body").append(dialog);
  dialog.classList.remove("hidden");
  dialog.addEventListener("click", _Events__WEBPACK_IMPORTED_MODULE_0__.handleDialogEvents);
}
function hideDialog(dialog) {
  dialog.classList.add("hidden");
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_7__.$)("body").removeChild(dialog);
}

/***/ }),

/***/ "./src/JS/UI_COMPONENTS/AsideComponent.js":
/*!************************************************!*\
  !*** ./src/JS/UI_COMPONENTS/AsideComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsideComponent: () => (/* binding */ AsideComponent)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AsideComponent(component) {
  var span = document.createElement("span");
  var active = false;
  span.innerHTML = component.image;
  span.innerHTML += component.name;
  if (component !== null && component !== void 0 && component.otherComponents) {
    var _iterator = _createForOfIteratorHelper(component.otherComponents),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _component = _step.value;
        span.append(_component);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (component !== null && component !== void 0 && component.active) {
    active = true;
  }
  return {
    span: span,
    active: active
  };
}

/***/ }),

/***/ "./src/JS/UI_COMPONENTS/AsideComponentsArray.js":
/*!******************************************************!*\
  !*** ./src/JS/UI_COMPONENTS/AsideComponentsArray.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoList: () => (/* binding */ TodoList),
/* harmony export */   getTodoListFields: () => (/* binding */ getTodoListFields)
/* harmony export */ });
var ALL_SVG = "<svg\nfill=\"#000000\"\nviewBox=\"0 0 32 32\"\nversion=\"1.1\"\nxmlns=\"http://www.w3.org/2000/svg\"\n>\n<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n<g\n  id=\"SVGRepo_tracerCarrier\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n></g>\n<g id=\"SVGRepo_iconCarrier\">\n  <title>border-all</title>\n  <path\n    d=\"M29 1.75h-26c-0.69 0-1.25 0.56-1.25 1.25v0 26c0 0.69 0.56 1.25 1.25 1.25h26c0.69-0.001 1.249-0.56 1.25-1.25v-26c-0-0.69-0.56-1.25-1.25-1.25h-0zM27.75 14.75h-10.5v-10.5h10.5zM14.75 4.25v10.5h-10.5v-10.5zM4.25 17.25h10.5v10.5h-10.5zM17.25 27.75v-10.5h10.5v10.5z\"\n  ></path>\n</g>\n</svg>";
var allField = {
  image: ALL_SVG,
  name: "All",
  active: true
};
var IMPORTANT_SVG = "<svg\nviewBox=\"0 -0.5 21 21\"\nversion=\"1.1\"\nxmlns=\"http://www.w3.org/2000/svg\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nfill=\"#000000\"\n>\n<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n<g\n  id=\"SVGRepo_tracerCarrier\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n></g>\n<g id=\"SVGRepo_iconCarrier\">\n  <title>important_message [#1448]</title>\n  <desc>Created with Sketch.</desc>\n  <defs></defs>\n  <g\n    id=\"Page-1\"\n    stroke=\"none\"\n    stroke-width=\"1\"\n    fill=\"none\"\n    fill-rule=\"evenodd\"\n  >\n    <g\n      id=\"Dribbble-Light-Preview\"\n      transform=\"translate(-139.000000, -520.000000)\"\n      fill=\"#000000\"\n    >\n      <g\n        id=\"icons\"\n        transform=\"translate(56.000000, 160.000000)\"\n      >\n        <path\n          d=\"M94.55,365.007 L94.55,372.007 C94.55,372.559 94.0796,373.007 93.5,373.007 C92.9204,373.007 92.45,372.559 92.45,372.007 L92.45,365.007 C92.45,364.455 92.9204,364.007 93.5,364.007 C94.0796,364.007 94.55,364.455 94.55,365.007 L94.55,365.007 Z M94.55,375.007 C94.55,375.559 94.0796,376.007 93.5,376.007 C92.9204,376.007 92.45,375.559 92.45,375.007 C92.45,374.455 92.9204,374.007 93.5,374.007 C94.0796,374.007 94.55,374.455 94.55,375.007 L94.55,375.007 Z M101.9,377 C101.9,377.552 101.4296,378 100.85,378 L86.15,378 C85.5704,378 85.1,377.552 85.1,377 L85.1,363 C85.1,362.448 85.5704,362 86.15,362 L100.85,362 C101.4296,362 101.9,362.448 101.9,363 L101.9,377 Z M101.9,360 L85.1,360 C83.93975,360 83,360.899 83,362.003 L83,362.007 L83,378.007 C83,379.112 83.93975,380 85.1,380 L101.9,380 C103.06025,380 104,379.108 104,378.003 L104,362.007 C104,360.902 102.95,360 101.9,360 L101.9,360 Z\"\n          id=\"important_message-[#1448]\"\n        ></path>\n      </g>\n    </g>\n  </g>\n</g>\n</svg>";
var importantField = {
  image: IMPORTANT_SVG,
  name: "Important"
};
var NEXT_7_DAYS_SVG = "<svg\nfill=\"#000000\"\nheight=\"200px\"\nwidth=\"200px\"\nversion=\"1.1\"\nid=\"Capa_1\"\nxmlns=\"http://www.w3.org/2000/svg\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nviewBox=\"0 0 187.333 187.333\"\nxml:space=\"preserve\"\n>\n<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n<g\n  id=\"SVGRepo_tracerCarrier\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n></g>\n<g id=\"SVGRepo_iconCarrier\">\n  <path\n    d=\"M172.049,0h-11.828c-2.761,0-5,2.239-5,5v15.919h-14.407V5c0-2.761-2.239-5-5-5h-11.828c-2.761,0-5,2.239-5,5v15.919H104.58 V5c0-2.761-2.239-5-5-5H87.753c-2.761,0-5,2.239-5,5v15.919H68.346V5c0-2.761-2.239-5-5-5H51.518c-2.761,0-5,2.239-5,5v15.919 H32.112V5c0-2.761-2.239-5-5-5H15.284c-2.761,0-5,2.239-5,5v20.919v9.016v147.399c0,2.761,2.239,5,5,5h156.765c2.761,0,5-2.239,5-5 V34.934v-9.016V5C177.049,2.239,174.81,0,172.049,0z M100.718,99.053c0,17.165-13.965,31.131-31.131,31.131H56.714 c-4.553,0-8.258,3.705-8.258,8.258v8.258h47.262c2.761,0,5,2.239,5,5s-2.239,5-5,5H43.456c-2.761,0-5-2.239-5-5v-13.258 c0-10.067,8.19-18.258,18.258-18.258h12.873c11.651,0,21.131-9.479,21.131-21.131V87.797c0-11.651-9.479-21.131-21.131-21.131 c-11.651,0-21.131,9.48-21.131,21.131v0.395c0,2.761-2.239,5-5,5s-5-2.239-5-5v-0.395c0-17.166,13.965-31.131,31.131-31.131 c17.165,0,31.131,13.965,31.131,31.131V99.053z M148.877,151.7c0,2.761-2.239,5-5,5c-2.761,0-5-2.239-5-5V73.738l-10.985,10.985 c-1.953,1.952-5.118,1.952-7.071,0c-1.953-1.953-1.953-5.119,0-7.071l19.52-19.52c1.43-1.43,3.58-1.857,5.449-1.084 c1.868,0.774,3.086,2.597,3.086,4.62V151.7z\"\n  ></path>\n</g>\n</svg>";
var next7DaysField = {
  image: NEXT_7_DAYS_SVG,
  name: "Next 7 Days"
};
var NEXT_MONTH_SVG = "<svg\nheight=\"200px\"\nwidth=\"200px\"\nversion=\"1.1\"\nid=\"_x32_\"\nxmlns=\"http://www.w3.org/2000/svg\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nviewBox=\"0 0 512 512\"\nxml:space=\"preserve\"\nfill=\"#000000\"\n>\n<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n<g\n  id=\"SVGRepo_tracerCarrier\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n></g>\n<g id=\"SVGRepo_iconCarrier\">\n  <style type=\"text/css\">\n    .st0 {\n      fill: #000000;\n    }\n  </style>\n  <g>\n    <path\n      class=\"st0\"\n      d=\"M118.612,89.298c9.482,0,17.176-7.686,17.176-17.168v-54.96C135.788,7.687,128.094,0,118.612,0 c-9.482,0-17.177,7.687-17.177,17.169v54.96C101.435,81.611,109.13,89.298,118.612,89.298z\"\n    ></path>\n    <path\n      class=\"st0\"\n      d=\"M255.992,89.298c9.482,0,17.177-7.686,17.177-17.168v-54.96C273.169,7.687,265.474,0,255.992,0 c-9.483,0-17.176,7.687-17.176,17.169v54.96C238.816,81.611,246.51,89.298,255.992,89.298z\"\n    ></path>\n    <path\n      class=\"st0\"\n      d=\"M393.372,89.298c9.483,0,17.176-7.686,17.176-17.168v-54.96C410.549,7.687,402.855,0,393.372,0 c-9.483,0-17.176,7.687-17.176,17.169v54.96C376.196,81.611,383.89,89.298,393.372,89.298z\"\n    ></path>\n    <path\n      class=\"st0\"\n      d=\"M186.593,405.072c32.102,0,56.031-21.572,56.031-54.189c0-23.421-13.152-38.94-23.667-43.411v-0.524 c13.152-8.68,19.982-22.102,19.982-37.097c0-28.942-19.196-49.456-52.608-49.456c-28.942,0-48.678,16.575-52.624,38.146 c-0.262,1.573,0.524,2.892,2.112,3.154l22.357,5.264c1.588,0.263,2.637-0.262,3.161-1.842 c3.161-11.048,10.793-18.418,23.945-18.418c14.988,0,23.93,9.999,23.93,24.207c0,15.782-10.253,26.043-26.042,26.043h-7.108 c-1.572,0-2.622,1.048-2.622,2.629v20.784c0,1.58,1.049,2.629,2.622,2.629h7.632c17.623,0,29.203,11.055,29.203,29.203 c0,15.264-9.729,26.574-26.304,26.574c-14.74,0-23.421-8.419-27.106-18.942c-0.524-1.58-1.836-2.104-3.146-1.842l-22.897,5.266 c-1.572,0.524-2.359,1.834-2.097,3.415C136.868,391.133,158.701,405.072,186.593,405.072z\"\n    ></path>\n    <path\n      class=\"st0\"\n      d=\"M296.836,277.744l27.352-19.204h0.524v141.011c0,1.58,1.064,2.63,2.637,2.63h24.207 c1.573,0,2.622-1.049,2.622-2.63V225.914c0-1.573-1.048-2.629-2.622-2.629h-22.372c-2.097,0-3.408,0.524-4.734,1.58l-28.663,20.784 c-1.326,1.048-1.85,2.105-1.85,3.678v26.836C293.938,278.269,295.248,278.793,296.836,277.744z\"\n    ></path>\n    <path\n      class=\"st0\"\n      d=\"M427.001,44.899h-2.714v27.23c0,17.038-13.861,30.906-30.914,30.906c-17.038,0-30.914-13.869-30.914-30.906 v-27.23h-75.551v27.23c0,17.038-13.877,30.906-30.914,30.906s-30.914-13.869-30.914-30.906v-27.23h-75.552v27.23 c0,17.038-13.876,30.906-30.914,30.906S87.698,89.167,87.698,72.129v-27.23h-2.698c-37.082,0-67.133,30.059-67.133,67.133v332.835 c0,37.074,30.051,67.133,67.133,67.133h342.002c37.066,0,67.133-30.058,67.133-67.133V112.032 C494.134,74.958,464.067,44.899,427.001,44.899z M450.854,439.772c0,15.973-12.99,28.964-28.956,28.964H90.103 c-15.973,0-28.971-12.99-28.971-28.964V143.116h389.722V439.772z\"\n    ></path>\n  </g>\n</g>\n</svg>";
var nextMonthField = {
  image: NEXT_MONTH_SVG,
  name: "Next Month"
};
var todoListFields = [allField, importantField, next7DaysField, nextMonthField];
function getTodoListFields() {
  return todoListFields;
}
var TodoList = {
  getTodoListFields: getTodoListFields
};

/***/ }),

/***/ "./src/JS/UI_COMPONENTS/TodoComponent.js":
/*!***********************************************!*\
  !*** ./src/JS/UI_COMPONENTS/TodoComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILITIES/DateFns */ "./src/JS/UTILITIES/DateFns.js");

var TodoComponent = function TodoComponent(todoObj) {
  var title = todoObj.title,
    dueDate = todoObj.dueDate,
    id = todoObj.id,
    checked = todoObj.checked;
  var todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.setAttribute("data-id", id);
  if (checked) {
    todoDiv.setAttribute("checked", "checked");
  }
  todoDiv.innerHTML = "\n  <div>\n    <input type=\"checkbox\" name=\"todoChecked\" id=\"todoChecked\" ".concat(checked ? "checked" : "", "/>\n    <span class=\"todoTitle\">").concat(title, ", ").concat((0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_0__.timeDistanceFromNow)(dueDate), "</span>\n    </div>\n  <div>\n    <div class=\"showMore\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <button class=\"deleteBtn deleteTodo\"></button>\n  </div>\n  ");
  return todoDiv;
};

/***/ }),

/***/ "./src/JS/UI_COMPONENTS/TodoDialogComponent.js":
/*!*****************************************************!*\
  !*** ./src/JS/UI_COMPONENTS/TodoDialogComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoDialogComponent: () => (/* binding */ TodoDialogComponent)
/* harmony export */ });
function TodoDialogComponent(_ref) {
  var header = _ref.header,
    _ref$titleValue = _ref.titleValue,
    titleValue = _ref$titleValue === void 0 ? "" : _ref$titleValue,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? "" : _ref$id,
    _ref$dateValue = _ref.dateValue,
    dateValue = _ref$dateValue === void 0 ? "" : _ref$dateValue,
    _ref$priorityValue = _ref.priorityValue,
    priorityValue = _ref$priorityValue === void 0 ? "low" : _ref$priorityValue,
    _ref$descriptionValue = _ref.descriptionValue,
    descriptionValue = _ref$descriptionValue === void 0 ? "" : _ref$descriptionValue,
    _ref$lastButtonText = _ref.lastButtonText,
    lastButtonText = _ref$lastButtonText === void 0 ? "" : _ref$lastButtonText;
  var dialog = document.createElement("dialog");
  dialog.setAttribute("class", "newTodo");
  dialog.setAttribute("data-id", id);
  dialog.classList.add("hidden");
  dialog.innerHTML = "\n    <header>\n      <h6>".concat(header, "</h6>\n      <span class=\"closeDialog newTodo\"></span>\n    </header>\n    <main>\n      <form action=\"#\">\n        <section>\n          <label for=\"todoTitle\">Title : </label>\n          <input type=\"text\" name=\"todoTitle\" id=\"todoTitle\" value=\"").concat(titleValue, "\"/>\n        </section>\n        <section>\n          <label for=\"dueDate\">Due Date : </label>\n          <input type=\"datetime-local\" name=\"dueDate\" id=\"dueDate\" value=\"").concat(dateValue, "\"/>\n          <label for=\"priority\">Priority : </label>\n          <select name=\"priority\" id=\"priority\">\n            <option value=\"high\" ").concat(priorityValue === "high" ? "selected" : "", ">High &#128561;</option>\n            <option value=\"medium\" ").concat(priorityValue === "medium" ? "selected" : "", ">Medium &#128550;</option>\n            <option value=\"low\" ").concat(priorityValue === "low" ? "selected" : "", ">Low &#128554;</option>\n          </select>\n        </section>\n        <section>\n          <label for=\"todoDescription\">Description : </label>\n          <br / >\n          <textarea\n            name=\"todoDescription\"\n            id=\"todoDescription\"\n            cols=\"30\"\n            rows=\"10\"\n            >").concat(descriptionValue, "</textarea>\n        </section>\n      </form>\n    </main>\n    <footer>\n      <button class=\"closeDialog\">Close</button>\n      <button class=\"").concat(lastButtonText === "Add Todo" ? "addTodo" : lastButtonText === "Edit Todo" ? "editTodo" : "", "\">").concat(lastButtonText, "</button>\n    </footer>");
  return dialog;
}

/***/ }),

/***/ "./src/JS/UTILITIES/DateFns.js":
/*!*************************************!*\
  !*** ./src/JS/UTILITIES/DateFns.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWeeksFromDate: () => (/* binding */ addWeeksFromDate),
/* harmony export */   getDaysMonth: () => (/* binding */ getDaysMonth),
/* harmony export */   isDateBeforeOther: () => (/* binding */ isDateBeforeOther),
/* harmony export */   timeDistanceFromNow: () => (/* binding */ timeDistanceFromNow)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDaysInMonth/index.js");



var timeDistanceFromNow = function timeDistanceFromNow(date) {
  if (typeof date === "string") {
    date = Date.parse(date);
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, {
    includeSeconds: true,
    addSuffix: true
  });
};
var addWeeksFromDate = function addWeeksFromDate(date, numberOfWeeks) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, numberOfWeeks);
};
var getDaysMonth = function getDaysMonth(date) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date);
};
var isDateBeforeOther = function isDateBeforeOther(date, dateLimit) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date, dateLimit);
};

/***/ }),

/***/ "./src/JS/UTILITIES/Selectors.js":
/*!***************************************!*\
  !*** ./src/JS/UTILITIES/Selectors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   $$: () => (/* binding */ $$),
/* harmony export */   getDOMTodoFromElement: () => (/* binding */ getDOMTodoFromElement),
/* harmony export */   getDialogFromChild: () => (/* binding */ getDialogFromChild),
/* harmony export */   getTodoDivFromBtn: () => (/* binding */ getTodoDivFromBtn)
/* harmony export */ });
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};
//div.showMore || button.deleteBtn
var getDOMTodoFromElement = function getDOMTodoFromElement(element) {
  return element.parentElement.parentElement;
};
//button.expandContent || button.deleteContent
//dialog will have hader main footer > buttons
var getDialogFromChild = function getDialogFromChild(child) {
  return child.parentElement.parentElement;
};
var getTodoDivFromBtn = function getTodoDivFromBtn(btn) {
  return btn.parentElement.parentElement;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  --navBackground: #f59e0b;
  --backgroundColor: #fffbeb;
}

body {
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 90%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--backgroundColor);
  overflow: hidden;
  position: relative;
}

/*NAVBAR*/
body > nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em;
  background-color: var(--navBackground);
}

body > nav span {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
}

body > nav button {
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.5em 0.75em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body > nav button:hover,
body > nav button:hover div {
  cursor: pointer;

  transform: scale(1.5);
}

body > nav button > div {
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: black;
}
/*Navbar button styling*/

button.menu div {
  clip-path: polygon(
    0% 5%,
    100% 5%,
    100% 25%,
    0% 25%,
    0% 40%,
    100% 40%,
    100% 60%,
    0% 60%,
    0% 75%,
    100% 75%,
    100% 95%,
    0% 95%
  );
}

button.newTodo div {
  clip-path: polygon(
    35% 0%,
    65% 0%,
    65% 35%,
    100% 35%,
    100% 60%,
    65% 60%,
    65% 100%,
    35% 100%,
    35% 60%,
    0% 60%,
    0% 35%,
    35% 35%
  );
}

button.today div {
  clip-path: polygon(
    50% 0%,
    70% 15%,
    70% 2%,
    90% 2%,
    90% 30%,
    100% 40%,
    100% 100%,
    65% 100%,
    65% 65%,
    35% 65%,
    35% 100%,
    0% 100%,
    0% 40%
  );
}

/*Main Content*/
main {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}

aside.hidden {
  opacity: 0;
  transform: translateX(-100%);
  display: none;
}

aside {
  margin-top: 0px;
  position: relative;
  width: 30vw;
  height: 100%;
  background-color: #ffedd5;
  transition: opacity ease 500ms, transform ease 500ms;
}

aside > ul {
  padding: 0.5em 1em;
  margin-top: 0em;
}

aside ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 1rem;
}

aside ul li {
  padding: 0.25em 1em;
  border-radius: 5px;
}

aside ul li:hover,
aside ul li.active {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.75);
}

aside ul li span {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  position: relative;
  pointer-events: none;
}

aside svg {
  width: 2em;
  height: 2em;
  stroke: black;
}

aside button.newProject {
  width: 1em;
  height: 1em;
  background-color: black;
  border: none;
  clip-path: polygon(
    35% 0%,
    65% 0%,
    65% 35%,
    100% 35%,
    100% 60%,
    65% 60%,
    65% 100%,
    35% 100%,
    35% 60%,
    0% 60%,
    0% 35%,
    35% 35%
  );
  position: absolute;
  right: 1em;
}

aside button.newProject:hover {
  transform: scale(1.5);
  cursor: pointer;
  background-color: var(--navBackground);
}

/*Main container */

body > main.asideOpen {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1;
}

body > main {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

body > main > section {
  padding: 1em 4em;
}

body > main > section > div.todoContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
}

body > main.asideOpen > section {
  padding: 1em;
}

main > section {
  width: 100%;
  height: 100%;
}
main h1 {
  text-align: center;
  letter-spacing: 0.1em;
}

/*Modals*/

dialog {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: transform ease 500ms, opacity ease 500ms;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: 20% 65% 15%;
  border: none;
  border-radius: 10px;
  padding: 1em 2em;
}

dialog.hidden {
  transform: translateY(100%);
  opacity: 0;
}

dialog header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

dialog header h6 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

dialog span.closeDialog:hover {
  cursor: pointer;
  transform: scale(1.5) rotate(45deg);
  background-color: var(--navBackground);
}

dialog span.closeDialog {
  position: relative;
  width: 1em;
  height: 1em;
  background-color: black;
  transform: rotate(45deg);
  clip-path: polygon(
    35% 0%,
    65% 0%,
    65% 35%,
    100% 35%,
    100% 60%,
    65% 60%,
    65% 100%,
    35% 100%,
    35% 60%,
    0% 60%,
    0% 35%,
    35% 35%
  );
}

dialog footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5em;
}

dialog footer button {
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
}

dialog footer button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

dialog footer button:first-child {
  border: 1px solid black;
  color: black;
}

dialog footer button:first-child:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

dialog footer button:last-child {
  background-color: var(--navBackground);
  color: snow;
}

dialog.newProject {
  width: 80vh;
  height: 30vh;
}

dialog.newProject main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1em;
  align-items: center;
}

dialog.newProject main input[type="text"] {
  padding: 0.5em 1em;
}

dialog.newProject label {
  font-weight: 600;
  letter-spacing: 0.1em;
  display: block;
}

dialog.newTodo,
dialog.editTodo {
  width: 50vw;
  height: 70vh;
}

dialog.newTodo > main form,
dialog.editTodo > main form {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat(3, 1fr);
  gap: 2em;
}

dialog.newTodo form section:nth-child(1),
dialog.newTodo form section:nth-child(2),
dialog.editTodo form section:nth-child(1),
dialog.editTodo form section:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1;
}

dialog.newTodo form section:nth-child(2),
dialog.editTodo form section:nth-child(2) {
  column-gap: 2em;
}

dialog.newTodo form section label,
dialog.editTodo form section label {
  display: flex;
  align-items: center;
}

dialog.newTodo form section:nth-child(1) label,
dialog.editTodo form section:nth-child(1) label {
  grid-column-start: 1;
  grid-column-end: 2;
}

dialog.newTodo form section:nth-child(1) input,
dialog.editTodo form section:nth-child(1) input {
  grid-column-start: 2;
  grid-column-end: 7;
  padding: 0.5em 1em;
  letter-spacing: 0.1em;
}

dialog.newTodo form section:nth-child(2) label:first-of-type,
dialog.editTodo form section:nth-child(2) label:first-of-type {
  grid-column-start: 1;
  grid-column-end: 2;
}

dialog.newTodo form section:nth-child(2) input,
dialog.editTodo form section:nth-child(2) input {
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 0.5em 1em;
  letter-spacing: 0.1em;
}

dialog.newTodo form section:nth-child(2) label:last-of-type,
dialog.editTodo form section:nth-child(2) label:last-of-type {
  grid-column-start: 4;
  grid-column-end: 5;
}

dialog.newTodo form section:nth-child(2) select,
dialog.editTodo form section:nth-child(2) select {
  grid-column-start: 5;
  grid-column-end: 7;
  padding: 0.5em 1em;
  letter-spacing: 0.1em;
}

dialog.newTodo form section:nth-child(3),
dialog.editTodo form section:nth-child(3) {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1;
}

dialog.newTodo form section:nth-child(3) textarea,
dialog.editTodo form section:nth-child(3) textarea {
  resize: none;
  padding: 0.5em 1em;
  letter-spacing: 0.1em;
}

/*Projects*/
div.projectContainer {
  display: grid;
  grid-template-columns: 1;
  grid-auto-flow: row;
  row-gap: 1em;
  padding: 1em 2em;
}

dialog input {
  font-size: 1rem;
  letter-spacing: 0.1em;
}

dialog input.invalid {
  outline-style: solid;
  outline-width: 2px;
  outline-color: red;
  color: red;
  font-style: italic;
  font-size: 1rem;
  letter-spacing: 0.1em;
}

dialog.eliminationWarning h6 {
  color: red;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  font-weight: 700;
}

/*Checkbox animation by henry öhman from codepen*/
.project {
  padding: 1em 3em;
  background-color: #ffedd5;
  border-radius: 20px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.project section.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.project .text {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.project span:last-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

div.todo .deleteBtn,
.project .deleteBtn {
  height: 1.5em;
  width: 1.5em;
  background-color: black;
  border: none;
  transform: rotate(45deg);
  clip-path: polygon(
    35% 0%,
    65% 0%,
    65% 35%,
    100% 35%,
    100% 60%,
    65% 60%,
    65% 100%,
    35% 100%,
    35% 60%,
    0% 60%,
    0% 35%,
    35% 35%
  );
}

div.todo .deleteBtn:hover,
.project .deleteBtn:hover,
.project .expandContent:hover {
  transform: scale(1.5) rotate(45deg);
  cursor: pointer;
  background-color: var(--navBackground);
}

.project .expandContent {
  height: 1.5em;
  width: 1.5em;
  background-color: black;
  border: none;
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.project .expandContent:hover,
.project .expandContent.clicked {
  cursor: pointer;
  transform: scale(1.5) rotate(90deg);
  background-color: var(--navBackground);
}

/*Project Todo section*/
.project section.main {
  padding: 1em 2em;
  display: grid;
  grid-template-columns: 1;
  grid-auto-flow: row;
  row-gap: 0.5em;
  background-color: var(--backgroundColor);
  border-radius: 10px;
  display: none;
}

.project.expanded section.main {
  display: block;
}

div.todo,
.project section.main div.todo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 3em;
}

div.todo > div,
.project section.main div.todo > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

div.todo > div:last-child,
.project section.main div.todo > div:last-child {
  gap: 2em;
}

div.todo > div:last-child div.showMore,
.project section.main div.todo > div:last-child div.showMore {
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.25em;
}

div.todo > div:last-child div.showMore:hover,
.project section.main div.todo > div:last-child div.showMore:hover {
  cursor: pointer;
  transform: scale(1.5);
}

div.todo > div:last-child div.showMore:hover div,
.project section.main div.todo > div:last-child div.showMore:hover div {
  background-color: var(--navBackground);
}

div.todo > div:last-child div.showMore div,
.project section.main div.todo > div:last-child div.showMore div {
  border-radius: 50%;
  background-color: black;
  width: 0.5em;
  height: 0.5em;
  pointer-events: none;
}

div.todo input[type="checkbox"],
.project section.main input[type="checkbox"] {
  width: 2em;
  height: 2em;
  accent-color: var(--navBackground);
}

div.todo input[type="checkbox"]:checked,
.project section.main input[type="checkbox"]:checked {
  -webkit-animation: wiggle 0.4s ease;
  animation: wiggle 0.4s ease;
}

div.todo input[type="checkbox"]:checked + span.todoTitle,
.project section.main input[type="checkbox"]:checked + span.todoTitle {
  -webkit-animation: wiggle 0.4s ease;
  animation: wiggle 0.4s ease;
  text-decoration: line-through;
}

div.todo input[type="checkbox"]:hover,
.project section.main input[type="checkbox"]:hover {
  cursor: pointer;
}

div.todo span.todoTitle,
.project section.main span.todoTitle {
  font-size: 1rem;
  letter-spacing: 0.1em;
  font-weight: 700;
}

@-webkit-keyframes wiggle {
  from {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  30% {
    -webkit-transform: scale(1.25, 0.75);
    transform: scale(1.25, 0.75);
  }
  40% {
    -webkit-transform: scale(0.75, 1.25);
    transform: scale(0.75, 1.25);
  }
  50% {
    -webkit-transform: scale(1.15, 0.85);
    transform: scale(1.15, 0.85);
  }
  65% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
  75% {
    -webkit-transform: scale(1.05, 0.95);
    transform: scale(1.05, 0.95);
  }
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@keyframes wiggle {
  from {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  30% {
    -webkit-transform: scale(1.25, 0.75);
    transform: scale(1.25, 0.75);
  }
  40% {
    -webkit-transform: scale(0.75, 1.25);
    transform: scale(0.75, 1.25);
  }
  50% {
    -webkit-transform: scale(1.15, 0.85);
    transform: scale(1.15, 0.85);
  }
  65% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
  75% {
    -webkit-transform: scale(1.05, 0.95);
    transform: scale(1.05, 0.95);
  }
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  --navBackground: #f59e0b;\r\n  --backgroundColor: #fffbeb;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% 90%;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  background-color: var(--backgroundColor);\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n/*NAVBAR*/\r\nbody > nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em 3em;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\nbody > nav span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 2em;\r\n}\r\n\r\nbody > nav button {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5em 0.75em;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nbody > nav button:hover,\r\nbody > nav button:hover div {\r\n  cursor: pointer;\r\n\r\n  transform: scale(1.5);\r\n}\r\n\r\nbody > nav button > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: black;\r\n}\r\n/*Navbar button styling*/\r\n\r\nbutton.menu div {\r\n  clip-path: polygon(\r\n    0% 5%,\r\n    100% 5%,\r\n    100% 25%,\r\n    0% 25%,\r\n    0% 40%,\r\n    100% 40%,\r\n    100% 60%,\r\n    0% 60%,\r\n    0% 75%,\r\n    100% 75%,\r\n    100% 95%,\r\n    0% 95%\r\n  );\r\n}\r\n\r\nbutton.newTodo div {\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\nbutton.today div {\r\n  clip-path: polygon(\r\n    50% 0%,\r\n    70% 15%,\r\n    70% 2%,\r\n    90% 2%,\r\n    90% 30%,\r\n    100% 40%,\r\n    100% 100%,\r\n    65% 100%,\r\n    65% 65%,\r\n    35% 65%,\r\n    35% 100%,\r\n    0% 100%,\r\n    0% 40%\r\n  );\r\n}\r\n\r\n/*Main Content*/\r\nmain {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n}\r\n\r\naside.hidden {\r\n  opacity: 0;\r\n  transform: translateX(-100%);\r\n  display: none;\r\n}\r\n\r\naside {\r\n  margin-top: 0px;\r\n  position: relative;\r\n  width: 30vw;\r\n  height: 100%;\r\n  background-color: #ffedd5;\r\n  transition: opacity ease 500ms, transform ease 500ms;\r\n}\r\n\r\naside > ul {\r\n  padding: 0.5em 1em;\r\n  margin-top: 0em;\r\n}\r\n\r\naside ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  font-size: 1rem;\r\n}\r\n\r\naside ul li {\r\n  padding: 0.25em 1em;\r\n  border-radius: 5px;\r\n}\r\n\r\naside ul li:hover,\r\naside ul li.active {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\naside ul li span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 1em;\r\n  position: relative;\r\n  pointer-events: none;\r\n}\r\n\r\naside svg {\r\n  width: 2em;\r\n  height: 2em;\r\n  stroke: black;\r\n}\r\n\r\naside button.newProject {\r\n  width: 1em;\r\n  height: 1em;\r\n  background-color: black;\r\n  border: none;\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n  position: absolute;\r\n  right: 1em;\r\n}\r\n\r\naside button.newProject:hover {\r\n  transform: scale(1.5);\r\n  cursor: pointer;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n/*Main container */\r\n\r\nbody > main.asideOpen {\r\n  display: grid;\r\n  grid-template-columns: 30% 70%;\r\n  grid-template-rows: 1;\r\n}\r\n\r\nbody > main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\nbody > main > section {\r\n  padding: 1em 4em;\r\n}\r\n\r\nbody > main > section > div.todoContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  justify-content: center;\r\n}\r\n\r\nbody > main.asideOpen > section {\r\n  padding: 1em;\r\n}\r\n\r\nmain > section {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\nmain h1 {\r\n  text-align: center;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n/*Modals*/\r\n\r\ndialog {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  z-index: 2;\r\n  transition: transform ease 500ms, opacity ease 500ms;\r\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);\r\n  display: grid;\r\n  grid-template-rows: 20% 65% 15%;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 1em 2em;\r\n}\r\n\r\ndialog.hidden {\r\n  transform: translateY(100%);\r\n  opacity: 0;\r\n}\r\n\r\ndialog header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ndialog header h6 {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog span.closeDialog:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.5) rotate(45deg);\r\n  background-color: var(--navBackground);\r\n}\r\n\r\ndialog span.closeDialog {\r\n  position: relative;\r\n  width: 1em;\r\n  height: 1em;\r\n  background-color: black;\r\n  transform: rotate(45deg);\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\ndialog footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  gap: 1.5em;\r\n}\r\n\r\ndialog footer button {\r\n  padding: 0.5em 1em;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\ndialog footer button:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ndialog footer button:first-child {\r\n  border: 1px solid black;\r\n  color: black;\r\n}\r\n\r\ndialog footer button:first-child:hover {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\ndialog footer button:last-child {\r\n  background-color: var(--navBackground);\r\n  color: snow;\r\n}\r\n\r\ndialog.newProject {\r\n  width: 80vh;\r\n  height: 30vh;\r\n}\r\n\r\ndialog.newProject main {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  column-gap: 1em;\r\n  align-items: center;\r\n}\r\n\r\ndialog.newProject main input[type=\"text\"] {\r\n  padding: 0.5em 1em;\r\n}\r\n\r\ndialog.newProject label {\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n  display: block;\r\n}\r\n\r\ndialog.newTodo,\r\ndialog.editTodo {\r\n  width: 50vw;\r\n  height: 70vh;\r\n}\r\n\r\ndialog.newTodo > main form,\r\ndialog.editTodo > main form {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  gap: 2em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1),\r\ndialog.newTodo form section:nth-child(2),\r\ndialog.editTodo form section:nth-child(1),\r\ndialog.editTodo form section:nth-child(2) {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: 1;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2),\r\ndialog.editTodo form section:nth-child(2) {\r\n  column-gap: 2em;\r\n}\r\n\r\ndialog.newTodo form section label,\r\ndialog.editTodo form section label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1) label,\r\ndialog.editTodo form section:nth-child(1) label {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1) input,\r\ndialog.editTodo form section:nth-child(1) input {\r\n  grid-column-start: 2;\r\n  grid-column-end: 7;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) label:first-of-type,\r\ndialog.editTodo form section:nth-child(2) label:first-of-type {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) input,\r\ndialog.editTodo form section:nth-child(2) input {\r\n  grid-column-start: 2;\r\n  grid-column-end: 4;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) label:last-of-type,\r\ndialog.editTodo form section:nth-child(2) label:last-of-type {\r\n  grid-column-start: 4;\r\n  grid-column-end: 5;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) select,\r\ndialog.editTodo form section:nth-child(2) select {\r\n  grid-column-start: 5;\r\n  grid-column-end: 7;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(3),\r\ndialog.editTodo form section:nth-child(3) {\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-columns: 1;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(3) textarea,\r\ndialog.editTodo form section:nth-child(3) textarea {\r\n  resize: none;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n/*Projects*/\r\ndiv.projectContainer {\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-auto-flow: row;\r\n  row-gap: 1em;\r\n  padding: 1em 2em;\r\n}\r\n\r\ndialog input {\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog input.invalid {\r\n  outline-style: solid;\r\n  outline-width: 2px;\r\n  outline-color: red;\r\n  color: red;\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.eliminationWarning h6 {\r\n  color: red;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n}\r\n\r\n/*Checkbox animation by henry öhman from codepen*/\r\n.project {\r\n  padding: 1em 3em;\r\n  background-color: #ffedd5;\r\n  border-radius: 20px;\r\n  width: 80%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5em;\r\n}\r\n\r\n.project section.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project .text {\r\n  display: inline-block;\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n.project span:last-child {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\ndiv.todo .deleteBtn,\r\n.project .deleteBtn {\r\n  height: 1.5em;\r\n  width: 1.5em;\r\n  background-color: black;\r\n  border: none;\r\n  transform: rotate(45deg);\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\ndiv.todo .deleteBtn:hover,\r\n.project .deleteBtn:hover,\r\n.project .expandContent:hover {\r\n  transform: scale(1.5) rotate(45deg);\r\n  cursor: pointer;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n.project .expandContent {\r\n  height: 1.5em;\r\n  width: 1.5em;\r\n  background-color: black;\r\n  border: none;\r\n  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n}\r\n\r\n.project .expandContent:hover,\r\n.project .expandContent.clicked {\r\n  cursor: pointer;\r\n  transform: scale(1.5) rotate(90deg);\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n/*Project Todo section*/\r\n.project section.main {\r\n  padding: 1em 2em;\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-auto-flow: row;\r\n  row-gap: 0.5em;\r\n  background-color: var(--backgroundColor);\r\n  border-radius: 10px;\r\n  display: none;\r\n}\r\n\r\n.project.expanded section.main {\r\n  display: block;\r\n}\r\n\r\ndiv.todo,\r\n.project section.main div.todo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5em 3em;\r\n}\r\n\r\ndiv.todo > div,\r\n.project section.main div.todo > div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\ndiv.todo > div:last-child,\r\n.project section.main div.todo > div:last-child {\r\n  gap: 2em;\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore,\r\n.project section.main div.todo > div:last-child div.showMore {\r\n  display: grid;\r\n  grid-template-rows: 1;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 0.25em;\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore:hover,\r\n.project section.main div.todo > div:last-child div.showMore:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.5);\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore:hover div,\r\n.project section.main div.todo > div:last-child div.showMore:hover div {\r\n  background-color: var(--navBackground);\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore div,\r\n.project section.main div.todo > div:last-child div.showMore div {\r\n  border-radius: 50%;\r\n  background-color: black;\r\n  width: 0.5em;\r\n  height: 0.5em;\r\n  pointer-events: none;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"],\r\n.project section.main input[type=\"checkbox\"] {\r\n  width: 2em;\r\n  height: 2em;\r\n  accent-color: var(--navBackground);\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:checked,\r\n.project section.main input[type=\"checkbox\"]:checked {\r\n  -webkit-animation: wiggle 0.4s ease;\r\n  animation: wiggle 0.4s ease;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:checked + span.todoTitle,\r\n.project section.main input[type=\"checkbox\"]:checked + span.todoTitle {\r\n  -webkit-animation: wiggle 0.4s ease;\r\n  animation: wiggle 0.4s ease;\r\n  text-decoration: line-through;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:hover,\r\n.project section.main input[type=\"checkbox\"]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ndiv.todo span.todoTitle,\r\n.project section.main span.todoTitle {\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n}\r\n\r\n@-webkit-keyframes wiggle {\r\n  from {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(1.25, 0.75);\r\n    transform: scale(1.25, 0.75);\r\n  }\r\n  40% {\r\n    -webkit-transform: scale(0.75, 1.25);\r\n    transform: scale(0.75, 1.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.15, 0.85);\r\n    transform: scale(1.15, 0.85);\r\n  }\r\n  65% {\r\n    -webkit-transform: scale(0.95, 1.05);\r\n    transform: scale(0.95, 1.05);\r\n  }\r\n  75% {\r\n    -webkit-transform: scale(1.05, 0.95);\r\n    transform: scale(1.05, 0.95);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n@keyframes wiggle {\r\n  from {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(1.25, 0.75);\r\n    transform: scale(1.25, 0.75);\r\n  }\r\n  40% {\r\n    -webkit-transform: scale(0.75, 1.25);\r\n    transform: scale(0.75, 1.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.15, 0.85);\r\n    transform: scale(1.15, 0.85);\r\n  }\r\n  65% {\r\n    -webkit-transform: scale(0.95, 1.05);\r\n    transform: scale(0.95, 1.05);\r\n  }\r\n  75% {\r\n    -webkit-transform: scale(1.05, 0.95);\r\n    transform: scale(1.05, 0.95);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/* harmony import */ var _JS_Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/Events */ "./src/JS/Events.js");
/* harmony import */ var _JS_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/UI */ "./src/JS/UI.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



window.addEventListener("DOMContentLoaded", function () {
  //if any element needs to be dinamically rendered
  (0,_JS_UI__WEBPACK_IMPORTED_MODULE_1__.renderAside)();
  (0,_JS_Events__WEBPACK_IMPORTED_MODULE_0__.renderTodoDialog)();
  (0,_JS_Events__WEBPACK_IMPORTED_MODULE_0__.projectContainerEventsHandler)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLGFBQWEsTUFBTSxpQkFBaUIsS0FBSyxNQUFNLEtBQUssaUJBQWlCLEtBQUssTUFBTSxLQUFLLGtCQUFrQixLQUFLLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsa0JBQWtCLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsS0FBSyxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1B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QUFDLENBQUM7RUFDbEJTLHlFQUE2QixDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRXZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VUb05vdy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheXNJbk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvQ09OVFJPTExFUi9Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9GQUNUT1JJRVMvVG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvU1RPUkFHRS9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVUlfQ09NUE9ORU5UUy9Bc2lkZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9VSV9DT01QT05FTlRTL0FzaWRlQ29tcG9uZW50c0FycmF5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL1VJX0NPTVBPTkVOVFMvVG9kb0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9VSV9DT01QT05FTlRTL1RvZG9EaWFsb2dDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVVRJTElUSUVTL0RhdGVGbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVVRJTElUSUVTL1NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxufTtcblxudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkV2Vla3NcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB3ZWVrcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNCB3ZWVrcyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkV2Vla3MobmV3IERhdGUoMjAxNCwgOCwgMSksIDQpXG4gKiAvLz0+IE1vbiBTZXAgMjkgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRXZWVrcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgdmFyIGRheXMgPSBhbW91bnQgKiA3O1xuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIGRheXMpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDtcblxuICAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gICAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBkaXN0YW5jZUluV29yZHMgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgc3BlY2lmaWVzIGlmIG5vdyBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIHBhc3NlZCBkYXRlXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gYWJvdXQgMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgQXVndXN0IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogY29uc3QgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBkaXN0YW5jZUluV29yZHMoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlO1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzO1xuXG4gIC8vIDAgdXAgdG8gMiBtaW5zXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIDAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuXG4gIC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7XG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheXNJbk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBkYXlzIGFyZSBpbiBGZWJydWFyeSAyMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5c0luTW9udGgobmV3IERhdGUoMjAwMCwgMSkpXG4gKiAvLz0+IDI5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheXNJbk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aEluZGV4ID0gZGF0ZS5nZXRNb250aCgpO1xuICB2YXIgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZSgwKTtcbiAgbGFzdERheU9mTW9udGguc2V0RnVsbFllYXIoeWVhciwgbW9udGhJbmRleCArIDEsIDApO1xuICBsYXN0RGF5T2ZNb250aC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGxhc3REYXlPZk1vbnRoLmdldERhdGUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQmVmb3JlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGJlZm9yZSB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB7ICQsICQkIH0gZnJvbSBcIi4uL1VUSUxJVElFUy9TZWxlY3RvcnNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBUb2RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL1NUT1JBR0UvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IFRvZG9GYWN0b3J5IH0gZnJvbSBcIi4uL0ZBQ1RPUklFUy9Ub2RvRmFjdG9yeVwiO1xyXG5cclxuLy9UT0RPIENSRUFUSU9OXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVG9kbyh0b2RvRm9ybSkge1xyXG4gIGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gIGlmIChcclxuICAgIHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9UaXRsZS52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb1RpdGxlLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XHJcbiAgICAgIFwidGhlIGZpZWxkIG11c3Qgbm90IGJlIGVtcHR5XCJcclxuICApIHtcclxuICAgIC8vdG9kbyB0aXRsZVxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb1RpdGxlLmZvY3VzKCk7XHJcbiAgICB0b2RvRm9ybS5lbGVtZW50cy50b2RvVGl0bGUudmFsdWUgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiIHx8XHJcbiAgICB0b2RvRm9ybS5lbGVtZW50cy50b2RvRGVzY3JpcHRpb24udmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cclxuICAgICAgXCJ0aGlzIGZpZWxkIGlzIHJlcXVpcmVkXCJcclxuICApIHtcclxuICAgIC8vdG9kbyBkZXNjcmlwdGlvblxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb0Rlc2NyaXB0aW9uLmZvY3VzKCk7XHJcbiAgICB0b2RvRm9ybS5lbGVtZW50cy50b2RvRGVzY3JpcHRpb24udmFsdWUgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcclxuICB9IGVsc2UgaWYgKHRvZG9Gb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgIC8vdG9kbyBkYXRlXHJcbiAgICB0b2RvRm9ybS5lbGVtZW50cy5kdWVEYXRlLmZvY3VzKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbGlkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9DcmVhdGlvbkNvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0Zvcm0gPSAkKGBkaWFsb2cubmV3VG9kbyBmb3JtYCk7XHJcbiAgLy92YWxpZGFyIHRvZG8geSBzaSBlcyB2YWxpZG8gY3JlYWxvXHJcbiAgaWYgKHZhbGlkYXRlVG9kbyh0b2RvRm9ybSkpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiB9ID0gZ2V0VG9kb0Zvcm1EYXRhKHRvZG9Gb3JtKTtcclxuICAgIGNvbnN0IHRvZG9PYmogPSBUb2RvRmFjdG9yeSh0aXRsZSk7XHJcbiAgICB0b2RvT2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0b2RvT2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdG9kb09iai5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgVG9kb0xvY2FsU3RvcmFnZS5hZGRUb2RvKHRvZG9PYmopO1xyXG4gICAgLy9jbG9zZSBkaWFsb2dcclxuICAgIHRvZG9Gb3JtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgLy9yZW5kZXIgdGhlIGNvbnRlbnRcclxuICAgIHJlbmRlckFzaWRlRmllbGRDb250ZW50KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DcmVhdGlvbkZyb21Gb3JtKGZvcm0pIHtcclxuICBjb25zdCB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfSA9IGdldFRvZG9Gb3JtRGF0YShmb3JtKTtcclxuICBjb25zdCB0b2RvT2JqID0gVG9kb0ZhY3RvcnkodGl0bGUpO1xyXG4gIHRvZG9PYmouZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgdG9kb09iai5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIHRvZG9PYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICByZXR1cm4gdG9kb09iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9Gb3JtRGF0YSh0b2RvRm9ybSkge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAge30sXHJcbiAgICB7IHRpdGxlOiB0b2RvRm9ybS5lbGVtZW50cy50b2RvVGl0bGUudmFsdWUgfSxcclxuICAgIHsgZHVlRGF0ZTogdG9kb0Zvcm0uZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSB9LFxyXG4gICAgeyBwcmlvcml0eTogdG9kb0Zvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUgfSxcclxuICAgIHsgZGVzY3JpcHRpb246IHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9EZXNjcmlwdGlvbi52YWx1ZSB9XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRUb2RvRm9ybURhdGEsIHRvZG9DcmVhdGlvbkZyb21Gb3JtIH0gZnJvbSBcIi4vQ09OVFJPTExFUi9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFRvZG9GYWN0b3J5IH0gZnJvbSBcIi4vRkFDVE9SSUVTL1RvZG9GYWN0b3J5XCI7XHJcbmltcG9ydCB7IFRvZG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9TVE9SQUdFL0xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge1xyXG4gIGRpc3BsYXlEaWFsb2csXHJcbiAgaGlkZURpYWxvZyxcclxuICByZW5kZXJBY3RpdmVMaUNvbnRlbnQsXHJcbiAgcmVuZGVyQXNpZGUsXHJcbn0gZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0IHsgVG9kb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL1VJX0NPTVBPTkVOVFMvVG9kb0RpYWxvZ0NvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG4gICQsXHJcbiAgJCQsXHJcbiAgZ2V0RE9NVG9kb0Zyb21FbGVtZW50LFxyXG4gIGdldFRvZG9EaXZGcm9tQnRuLFxyXG59IGZyb20gXCIuL1VUSUxJVElFUy9TZWxlY3RvcnNcIjtcclxuXHJcbmNvbnN0IGFkZFRvZG9CdG4gPSAkKFwiYnV0dG9uLmRpYWxvZ0Rpc3BsYXllci5uZXdUb2RvXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzaWRlRWxlbWVudHNDbGljayhldmVudCkge1xyXG4gIC8vdGhpcyAtPiBhc2lkZSB1bFxyXG4gIC8vZXZlbnQgd2lsbCBiZSBlaXRoZXIgb24gdGhlIHVsIG9yIHRoZSBsaVxyXG4gIGNvbnN0IGFzaWRlRWxlbWVudHMgPSBbLi4udGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpXTtcclxuICBjb25zdCBhY3RpdmVBc2lkZUVsZW1lbnRzID0gYXNpZGVFbGVtZW50cy5maWx0ZXIoKGVsKSA9PlxyXG4gICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXHJcbiAgKTtcclxuICBpZiAoYWN0aXZlQXNpZGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhY3RpdmVBc2lkZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC50YXJnZXQubG9jYWxOYW1lID09PSBcImxpXCIpIHtcclxuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgLy9yZW5kZXIgdGhlIG1haW4gY29udGVudCBvbiB0aGUgZWxlbWVudCB0aGF0IGlzIGFjdGl2ZVxyXG4gICAgcmVuZGVyQWN0aXZlTGlDb250ZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL0NMT1NFIEFOWSBESUFMT0dcclxuLy9ESUFMT0cgOiBIRUFERVIgPiBDTE9TRSBYLCBeIE1BSU4sICBGT09URVIgPiBDTE9TRSBCVVRUT05cclxuLy9FVkVOVCBERUxFR0FUSU9OXHJcbi8vUkVOREVSIEFERCBUT0RPIERJQUxPR1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURpYWxvZ0V2ZW50cyhldmVudCkge1xyXG4gIGlmIChcclxuICAgIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uLmNsb3NlRGlhbG9nXCIpIHx8XHJcbiAgICBldmVudC50YXJnZXQubWF0Y2hlcyhcInNwYW4uY2xvc2VEaWFsb2dcIilcclxuICApIHtcclxuICAgIGhpZGVEaWFsb2coZ2V0RE9NVG9kb0Zyb21FbGVtZW50KGV2ZW50LnRhcmdldCkpO1xyXG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b24uYWRkVG9kb1wiKSkge1xyXG4gICAgLy9hZGQgdG9kb1xyXG4gICAgY29uc3QgZm9ybSA9IGdldERPTVRvZG9Gcm9tRWxlbWVudChldmVudC50YXJnZXQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxyXG4gICAgICBcImZvcm1cIlxyXG4gICAgKVswXTtcclxuXHJcbiAgICAvL3ZhbGlkYXRlIGZvcm1cclxuICAgIGlmICh2YWxpZGF0ZVRvZG9Gb3JtKGZvcm0pKSB7XHJcbiAgICAgIC8vY3JlYXRlIHRvZG8gb2JqXHJcbiAgICAgIGNvbnN0IHRvZG9PYmogPSB0b2RvQ3JlYXRpb25Gcm9tRm9ybShmb3JtKTtcclxuICAgICAgVG9kb0xvY2FsU3RvcmFnZS5hZGRUb2RvKHRvZG9PYmopO1xyXG4gICAgICByZW5kZXJBY3RpdmVMaUNvbnRlbnQoXHJcbiAgICAgICAgWy4uLiQkKFwiYXNpZGUgdWwgbGlcIildLmZpbHRlcigoZWwpID0+XHJcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICApWzBdXHJcbiAgICAgICk7XHJcbiAgICAgIGhpZGVEaWFsb2coJChcImRpYWxvZy5uZXdUb2RvXCIpKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uLmVkaXRUb2RvXCIpKSB7XHJcbiAgICBjb25zdCBkaWFsb2cgPSBnZXRUb2RvRGl2RnJvbUJ0bihldmVudC50YXJnZXQpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiB9ID0gZ2V0VG9kb0Zvcm1EYXRhKGZvcm0pO1xyXG4gICAgY29uc3QgdG9FZGl0VG9kbyA9IFRvZG9Mb2NhbFN0b3JhZ2UuZ2V0VG9kbyhkaWFsb2cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAvL3NldCB2YWx1ZXNcclxuICAgIHRvRWRpdFRvZG8udGl0bGUgPSB0aXRsZTtcclxuICAgIHRvRWRpdFRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRvRWRpdFRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0b0VkaXRUb2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBUb2RvTG9jYWxTdG9yYWdlLnNhdmVUb2RvKHRvRWRpdFRvZG8pO1xyXG4gICAgaGlkZURpYWxvZyhkaWFsb2cpO1xyXG4gICAgcmVuZGVyQWN0aXZlTGlDb250ZW50KFxyXG4gICAgICBbLi4uJCQoXCJhc2lkZSB1bCBsaVwiKV0uZmlsdGVyKChlbCkgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVswXVxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uLmRlbGV0ZUJ0bi5kZWxldGVUb2RvXCIpKSB7XHJcbiAgICBjb25zdCB0b2RvRGl2ID0gZ2V0VG9kb0RpdkZyb21CdG4oZXZlbnQudGFyZ2V0KTtcclxuICAgIGNvbnN0IGlkID0gdG9kb0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgLypcclxuICAgIHRvZG9EaXYucmVtb3ZlKCk7XHJcbiAgICBUb2RvTG9jYWxTdG9yYWdlLnJlbW92ZVRvZG8oaWQpO1xyXG4gICAgcmVuZGVyQWN0aXZlTGlDb250ZW50KFxyXG4gICAgICBbLi4uJCQoXCJhc2lkZSB1bCBsaVwiKV0uZmlsdGVyKChlbCkgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVswXVxyXG4gICAgKTtcclxuICAgICovXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kb0RpYWxvZygpIHtcclxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNwbGF5RGlhbG9nKFxyXG4gICAgICBUb2RvRGlhbG9nQ29tcG9uZW50KHtcclxuICAgICAgICBoZWFkZXI6IFwiTmV3IFRvZG9cIixcclxuICAgICAgICB0aXRsZVZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGlkOiBcIlwiLFxyXG4gICAgICAgIGRhdGVWYWx1ZTogXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiBcIlwiLFxyXG4gICAgICAgIGxhc3RCdXR0b25UZXh0OiBcIkFkZCBUb2RvXCIsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRvZG9Gb3JtKGZvcm0pIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFsuLi5mb3JtLmVsZW1lbnRzXS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGZvcm0uZWxlbWVudHNbaV07XHJcbiAgICBpZiAoZWxlbWVudC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gWy4uLmZvcm0uZWxlbWVudHNdLmV2ZXJ5KChlbCkgPT4gZWwudmFsdWUgIT09IFwiXCIpO1xyXG59XHJcblxyXG4vL0hBTkRMRSBESVYgUFJPSkVDVENPTlRBSU5FUiBFVkVOVFNcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDb250YWluZXJFdmVudHNIYW5kbGVyKCkge1xyXG4gICQoXCJkaXYucHJvamVjdENvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJkaXYuc2hvd01vcmVcIikpIHtcclxuICAgICAgLy9nZXQgaWQgZnJvbSB0b2RvXHJcbiAgICAgIGNvbnN0IGlkID0gZ2V0VG9kb0RpdkZyb21CdG4oZXZlbnQudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgICAvL2dldCB0b2RvXHJcbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG8oaWQpO1xyXG4gICAgICAvL3Nob3cgZGlhbG9nXHJcbiAgICAgIGRpc3BsYXlEaWFsb2coXHJcbiAgICAgICAgVG9kb0RpYWxvZ0NvbXBvbmVudCh7XHJcbiAgICAgICAgICBoZWFkZXI6IFwiRWRpdCBUb2RvXCIsXHJcbiAgICAgICAgICB0aXRsZVZhbHVlOiB0b2RvLnRpdGxlLFxyXG4gICAgICAgICAgaWQ6IHRvZG8uaWQsXHJcbiAgICAgICAgICBkYXRlVmFsdWU6IHRvZG8uZHVlRGF0ZSxcclxuICAgICAgICAgIHByaW9yaXR5VmFsdWU6IHRvZG8ucHJpb3JpdHksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0b2RvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgbGFzdEJ1dHRvblRleHQ6IFwiRWRpdCBUb2RvXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCJidXR0b24uZGVsZXRlQnRuLmRlbGV0ZVRvZG9cIikpIHtcclxuICAgICAgY29uc3QgdG9kb0RpdiA9IGdldFRvZG9EaXZGcm9tQnRuKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IGlkID0gdG9kb0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgICB0b2RvRGl2LnJlbW92ZSgpO1xyXG4gICAgICBUb2RvTG9jYWxTdG9yYWdlLnJlbW92ZVRvZG8oaWQpO1xyXG4gICAgICByZW5kZXJBY3RpdmVMaUNvbnRlbnQoXHJcbiAgICAgICAgWy4uLiQkKFwiYXNpZGUgdWwgbGlcIildLmZpbHRlcigoZWwpID0+XHJcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcclxuICAgICAgICApWzBdXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiaW5wdXQjdG9kb0NoZWNrZWRcIikpIHtcclxuICAgICAgY29uc3QgdG9kb0RpdiA9IGdldFRvZG9EaXZGcm9tQnRuKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IGlkID0gdG9kb0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgICBjb25zdCB0b2RvID0gVG9kb0xvY2FsU3RvcmFnZS5nZXRUb2RvKGlkKTtcclxuICAgICAgdG9kby5jaGVja2VkID0gIXRvZG8uY2hlY2tlZDtcclxuICAgICAgVG9kb0xvY2FsU3RvcmFnZS5zYXZlVG9kbyh0b2RvKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG4vL0ZVTkNUSU9OUyBBUkUgQ09NTUVOVEVEIFNJTkNFIFRIRVkgQ0FOTk9UIEJFIFNUT1JFRCBJTiBMT0NBTCBTVE9SQUdFXHJcblxyXG5jb25zdCBwcm9qZWN0RXh0ZW5zaW9uID0gKCkgPT4gKHtcclxuICBwcm9qZWN0SWQ6IG51bGwsXHJcbiAgcHJveWVjdFRpdGxlOiBudWxsLFxyXG4gIC8qXHJcbiAgZ2V0UHJveWVjdElkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0SWQ7XHJcbiAgfSwqL1xyXG59KTtcclxuXHJcbmNvbnN0IGR1ZURhdGVFeHRlbnNpb24gPSAoZGF0ZSkgPT4gKHtcclxuICBkdWVEYXRlOiBkYXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrZWRFeHRlbnNpb24gPSAoKSA9PiAoe1xyXG4gIGNoZWNrZWQ6IGZhbHNlLFxyXG4gIC8qXHJcbiAgdG9nZ2xlQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5fY2hlY2tlZCA9ICF0aGlzLl9jaGVja2VkO1xyXG4gIH0sXHJcbiAgaXNDaGVja2VkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcclxuICB9LCovXHJcbn0pO1xyXG5cclxuY29uc3QgcHJpb3JpdGllc0V4dGVuc2lvbiA9ICgpID0+ICh7XHJcbiAgcHJpb3JpdHk6IFwibG93XCIsXHJcbiAgLypcclxuICBzZXRQcmlvcml0eTogZnVuY3Rpb24gKHApIHtcclxuICAgIHRoaXMuX3ByaW9yaXR5ID0gcDtcclxuICB9LFxyXG4gIGdldFByaW9yaXR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XHJcbiAgfSwqL1xyXG59KTtcclxuXHJcbmNvbnN0IGRlc2NyaXB0aW9uRXh0ZW5zaW9uID0gKCkgPT4gKHtcclxuICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAvKlxyXG4gIGdldERlc2NyaXB0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgfSxcclxuICBzZXREZXNjcmlwdGlvbjogZnVuY3Rpb24gKGRlc2MpIHtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzYztcclxuICB9LFxyXG4gICovXHJcbn0pO1xyXG5cclxuY29uc3QgZXh0ZW5zaW9uc0FycmF5ID0gW1xyXG4gIGR1ZURhdGVFeHRlbnNpb24sXHJcbiAgcHJpb3JpdGllc0V4dGVuc2lvbixcclxuICBkZXNjcmlwdGlvbkV4dGVuc2lvbixcclxuICBjaGVja2VkRXh0ZW5zaW9uLFxyXG5dO1xyXG5cclxuY29uc3QgdG9kb0V4dGVuc2lvbnMgPSAoZXh0ZW5zaW9ucykgPT4ge1xyXG4gIGNvbnN0IGJhc2VPYmogPSB7fTtcclxuICBleHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgT2JqZWN0LmFzc2lnbihiYXNlT2JqLCBleHRlbnNpb24oKSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGJhc2VPYmo7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0ZhY3RvcnkgPSAodGl0bGUpID0+IHtcclxuICBjb25zdCBiYXNpY0RhdGEgPSB7XHJcbiAgICB0aXRsZSxcclxuICAgIGlkOiB1dWlkdjQoKSxcclxuICAgIC8qXHJcbiAgICBnZXRJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH0sXHJcbiAgICAqL1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJhc2ljID0gdG9kb0V4dGVuc2lvbnMoZXh0ZW5zaW9uc0FycmF5KTtcclxuICBjb25zdCBjb21wb3NpdGUgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNpYyk7XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShjb21wb3NpdGUpLCBiYXNpY0RhdGEpO1xyXG59O1xyXG4iLCIvL1RPRE9cclxubGV0IHRvZG9zO1xyXG5jb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcclxuICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkgfHwgW107XHJcbiAgcmV0dXJuIHRvZG9zO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVRvZG9zID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gIGdldFRvZG9zKCk7XHJcbiAgdG9kb3MudW5zaGlmdCh0b2RvKTtcclxuICBzYXZlVG9kb3MoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0lkKSA9PiB7XHJcbiAgZ2V0VG9kb3MoKTtcclxuICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gdG9kb0lkKTtcclxuICBzYXZlVG9kb3MoKTtcclxufTtcclxuXHJcbi8vTW9kaWZ5IHRvZG8gLT4gR2V0IGFuZCBTYXZlIGF0IHRoZSBzYW1lIGluZGV4XHJcbmNvbnN0IGdldFRvZG8gPSAodG9kb0lkKSA9PiB7XHJcbiAgZ2V0VG9kb3MoKTtcclxuICBjb25zdCB0b2RvID0gdG9kb3MuZmlsdGVyKCh0KSA9PiB0LmlkID09PSB0b2RvSWQpWzBdO1xyXG4gIHNhdmVUb2RvcygpO1xyXG4gIHJldHVybiB0b2RvO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVRvZG8gPSAodG9kbykgPT4ge1xyXG4gIGdldFRvZG9zKCk7XHJcbiAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IHRvZG8uaWQpO1xyXG4gIHRvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgc2F2ZVRvZG9zKCk7XHJcbn07XHJcblxyXG5jb25zdCBUb2RvTG9jYWxTdG9yYWdlID0ge1xyXG4gIGdldFRvZG9zLFxyXG4gIHNhdmVUb2RvcyxcclxuICBnZXRUb2RvLFxyXG4gIGFkZFRvZG8sXHJcbiAgcmVtb3ZlVG9kbyxcclxuICBzYXZlVG9kbyxcclxufTtcclxuXHJcbmV4cG9ydCB7IFRvZG9Mb2NhbFN0b3JhZ2UgfTtcclxuIiwiaW1wb3J0IHsgYXNpZGVFbGVtZW50c0NsaWNrLCBoYW5kbGVEaWFsb2dFdmVudHMgfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHsgVG9kb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL1NUT1JBR0UvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IEFzaWRlQ29tcG9uZW50IH0gZnJvbSBcIi4vVUlfQ09NUE9ORU5UUy9Bc2lkZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnZXRUb2RvTGlzdEZpZWxkcyB9IGZyb20gXCIuL1VJX0NPTVBPTkVOVFMvQXNpZGVDb21wb25lbnRzQXJyYXlcIjtcclxuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gXCIuL1VJX0NPTVBPTkVOVFMvVG9kb0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb2RvRGlhbG9nQ29tcG9uZW50IH0gZnJvbSBcIi4vVUlfQ09NUE9ORU5UUy9Ub2RvRGlhbG9nQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGFkZFdlZWtzRnJvbURhdGUsIGlzRGF0ZUJlZm9yZU90aGVyIH0gZnJvbSBcIi4vVVRJTElUSUVTL0RhdGVGbnNcIjtcclxuaW1wb3J0IHsgJCwgJCQgfSBmcm9tIFwiLi9VVElMSVRJRVMvU2VsZWN0b3JzXCI7XHJcblxyXG5jb25zdCBkaXZQcm9qZWN0Q290YWluZXIgPSAkKFwiZGl2LnByb2plY3RDb250YWluZXJcIik7XHJcbmNvbnN0IGFzaWRlRmllbGRDb21wb25lbnRzID0gZ2V0VG9kb0xpc3RGaWVsZHMoKTsgLy9yZXRyZWl2ZSBmaWVsZHMgd2l0aCBuYW1lLCBzdmcgYW4gb3RoZXIgY29tcG9uZW50cyAob3B0aW9uYWwpXHJcbi8vY29uc3QgYWRkVG9kb0RpYWxvZyA9ICQoXCJkaWFsb2cubmV3VG9kb1wiKTtcclxuXHJcbi8vUkVOREVSIEFTSURFXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBc2lkZSgpIHtcclxuICBjb25zdCBhc2lkZSA9ICQoXCJib2R5ID4gbWFpbiA+IGFzaWRlXCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGZvciAoY29uc3QgZmllbGQgb2YgYXNpZGVGaWVsZENvbXBvbmVudHMpIHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgeyBzcGFuOiBjb21wb25lbnQsIGFjdGl2ZSB9ID0gQXNpZGVDb21wb25lbnQoZmllbGQpOyAvLyBjcmVhdGUgZmllbGRzIHdpdGggbmFtZSwgc3ZnIGFuIG90aGVyIGNvbXBvbmVudHMgKG9wdGlvbmFsKVxyXG4gICAgbGkuYXBwZW5kKGNvbXBvbmVudCk7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIHJlbmRlckFjdGl2ZUxpQ29udGVudChsaSk7XHJcbiAgICB9XHJcbiAgICB1bC5hcHBlbmQobGkpO1xyXG4gIH1cclxuXHJcbiAgdWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzaWRlRWxlbWVudHNDbGljayk7XHJcbiAgYXNpZGUuYXBwZW5kKHVsKTtcclxufVxyXG5cclxuLy9SRU5ERVIgTUFJTiBDT05URU5UIFNFQ1RJT04gVEFLSU5HIElOVE8gQUNDT1VOVCBUSEUgQUNUSVZFIExJIEVMRU1FTlRcclxuY29uc3QgY29udGVudFJlbmRlcmVyID0ge1xyXG4gIGFsbDogcmVuZGVyQWxsVG9kb3NGaWVsZCxcclxuICBpbXBvcnRhbnQ6IHJlbmRlckltcG9ydGFudFRvZG9zLFxyXG4gIFwibmV4dCA3IGRheXNcIjogcmVuZGVyTmV4dFdlZWtUb2RvcyxcclxuICBcIm5leHQgbW9udGhcIjogcmVuZGVyTmV4dE1vbnRoVG9kb3MsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZlTGlDb250ZW50KGFjdGl2ZUVsZW1lbnQpIHtcclxuICBkaXZQcm9qZWN0Q290YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgLy9zZXQgdGhlIGRhdGEgZnJvbSB0aGUgYWN0aXZlIGVsZW1lbnRcclxuICBjb25zdCB0aXRsZUVsID0gJChcImJvZHkgPiBtYWluID4gc2VjdGlvbiA+IGgxXCIpO1xyXG4gIGNvbnN0IGFzaWRlRmllbGRUZXh0ID0gYWN0aXZlRWxlbWVudC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XHJcbiAgdGl0bGVFbC50ZXh0Q29udGVudCA9IGFzaWRlRmllbGRUZXh0O1xyXG4gIC8vcmVuZGVyIHRoZSBkb20gY29tcG9uZW50cyB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBhY3RpdmUgZWxlbWVudFxyXG4gIGNvbnRlbnRSZW5kZXJlclt0aXRsZUVsLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCldKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckRPTVRvZG8odG9kb09iaikge1xyXG4gIGNvbnN0IERPTVRvZG8gPSBUb2RvQ29tcG9uZW50KHRvZG9PYmopO1xyXG4gIGRpdlByb2plY3RDb3RhaW5lci5hcHBlbmQoRE9NVG9kbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zRmllbGQoKSB7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCk7XHJcbiAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG4gIH1cclxufVxyXG5cclxuLy9JTVBPUlRBTlQgRklFTERcclxuZnVuY3Rpb24gcmVuZGVySW1wb3J0YW50VG9kb3MoKSB7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCkuZmlsdGVyKFxyXG4gICAgKHQpID0+IHQucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJoaWdoXCJcclxuICApO1xyXG4gIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG59XHJcblxyXG4vL05FWFQgV0VFSyAoNyBkYXlzIG9yIDEgd2VlayBmcm9tIHRvZGF5cyBkYXRlKVxyXG5mdW5jdGlvbiByZW5kZXJOZXh0V2Vla1RvZG9zKCkge1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBsaW1pdCA9IGFkZFdlZWtzRnJvbURhdGUodG9kYXksIDEpO1xyXG4gIGNvbnN0IHRvZG9zID0gVG9kb0xvY2FsU3RvcmFnZS5nZXRUb2RvcygpLmZpbHRlcigodCkgPT5cclxuICAgIGlzRGF0ZUJlZm9yZU90aGVyKERhdGUucGFyc2UodC5kdWVEYXRlKSwgbGltaXQpXHJcbiAgKTtcclxuICB0b2Rvcy5mb3JFYWNoKCh0KSA9PiByZW5kZXJET01Ub2RvKHQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmV4dE1vbnRoVG9kb3MoKSB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGxpbWl0ID0gYWRkV2Vla3NGcm9tRGF0ZSh0b2RheSwgNCk7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCkuZmlsdGVyKCh0KSA9PlxyXG4gICAgaXNEYXRlQmVmb3JlT3RoZXIoRGF0ZS5wYXJzZSh0LmR1ZURhdGUpLCBsaW1pdClcclxuICApO1xyXG4gIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG59XHJcblxyXG4vL0FERCBUT0RPIERJQUxPR1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURpYWxvZyhkaWFsb2cpIHtcclxuICAkKFwiYm9keVwiKS5hcHBlbmQoZGlhbG9nKTtcclxuICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURpYWxvZ0V2ZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlRGlhbG9nKGRpYWxvZykge1xyXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICQoXCJib2R5XCIpLnJlbW92ZUNoaWxkKGRpYWxvZyk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIEFzaWRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBsZXQgYWN0aXZlID0gZmFsc2U7XHJcbiAgc3Bhbi5pbm5lckhUTUwgPSBjb21wb25lbnQuaW1hZ2U7XHJcbiAgc3Bhbi5pbm5lckhUTUwgKz0gY29tcG9uZW50Lm5hbWU7XHJcbiAgaWYgKGNvbXBvbmVudD8ub3RoZXJDb21wb25lbnRzKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnQub3RoZXJDb21wb25lbnRzKSB7XHJcbiAgICAgIHNwYW4uYXBwZW5kKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChjb21wb25lbnQ/LmFjdGl2ZSkge1xyXG4gICAgYWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHsgc3BhbiwgYWN0aXZlIH07XHJcbn1cclxuIiwiY29uc3QgQUxMX1NWRyA9IGA8c3ZnXHJcbmZpbGw9XCIjMDAwMDAwXCJcclxudmlld0JveD1cIjAgMCAzMiAzMlwiXHJcbnZlcnNpb249XCIxLjFcIlxyXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuPlxyXG48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuPGdcclxuICBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiXHJcbiAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4+PC9nPlxyXG48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj5cclxuICA8dGl0bGU+Ym9yZGVyLWFsbDwvdGl0bGU+XHJcbiAgPHBhdGhcclxuICAgIGQ9XCJNMjkgMS43NWgtMjZjLTAuNjkgMC0xLjI1IDAuNTYtMS4yNSAxLjI1djAgMjZjMCAwLjY5IDAuNTYgMS4yNSAxLjI1IDEuMjVoMjZjMC42OS0wLjAwMSAxLjI0OS0wLjU2IDEuMjUtMS4yNXYtMjZjLTAtMC42OS0wLjU2LTEuMjUtMS4yNS0xLjI1aC0wek0yNy43NSAxNC43NWgtMTAuNXYtMTAuNWgxMC41ek0xNC43NSA0LjI1djEwLjVoLTEwLjV2LTEwLjV6TTQuMjUgMTcuMjVoMTAuNXYxMC41aC0xMC41ek0xNy4yNSAyNy43NXYtMTAuNWgxMC41djEwLjV6XCJcclxuICA+PC9wYXRoPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBhbGxGaWVsZCA9IHtcclxuICBpbWFnZTogQUxMX1NWRyxcclxuICBuYW1lOiBcIkFsbFwiLFxyXG4gIGFjdGl2ZTogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IElNUE9SVEFOVF9TVkcgPSBgPHN2Z1xyXG52aWV3Qm94PVwiMCAtMC41IDIxIDIxXCJcclxudmVyc2lvbj1cIjEuMVwiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG5maWxsPVwiIzAwMDAwMFwiXHJcbj5cclxuPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbjxnXHJcbiAgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIlxyXG4gIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuPjwvZz5cclxuPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XHJcbiAgPHRpdGxlPmltcG9ydGFudF9tZXNzYWdlIFsjMTQ0OF08L3RpdGxlPlxyXG4gIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxyXG4gIDxkZWZzPjwvZGVmcz5cclxuICA8Z1xyXG4gICAgaWQ9XCJQYWdlLTFcIlxyXG4gICAgc3Ryb2tlPVwibm9uZVwiXHJcbiAgICBzdHJva2Utd2lkdGg9XCIxXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gID5cclxuICAgIDxnXHJcbiAgICAgIGlkPVwiRHJpYmJibGUtTGlnaHQtUHJldmlld1wiXHJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM5LjAwMDAwMCwgLTUyMC4wMDAwMDApXCJcclxuICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgPlxyXG4gICAgICA8Z1xyXG4gICAgICAgIGlkPVwiaWNvbnNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTk0LjU1LDM2NS4wMDcgTDk0LjU1LDM3Mi4wMDcgQzk0LjU1LDM3Mi41NTkgOTQuMDc5NiwzNzMuMDA3IDkzLjUsMzczLjAwNyBDOTIuOTIwNCwzNzMuMDA3IDkyLjQ1LDM3Mi41NTkgOTIuNDUsMzcyLjAwNyBMOTIuNDUsMzY1LjAwNyBDOTIuNDUsMzY0LjQ1NSA5Mi45MjA0LDM2NC4wMDcgOTMuNSwzNjQuMDA3IEM5NC4wNzk2LDM2NC4wMDcgOTQuNTUsMzY0LjQ1NSA5NC41NSwzNjUuMDA3IEw5NC41NSwzNjUuMDA3IFogTTk0LjU1LDM3NS4wMDcgQzk0LjU1LDM3NS41NTkgOTQuMDc5NiwzNzYuMDA3IDkzLjUsMzc2LjAwNyBDOTIuOTIwNCwzNzYuMDA3IDkyLjQ1LDM3NS41NTkgOTIuNDUsMzc1LjAwNyBDOTIuNDUsMzc0LjQ1NSA5Mi45MjA0LDM3NC4wMDcgOTMuNSwzNzQuMDA3IEM5NC4wNzk2LDM3NC4wMDcgOTQuNTUsMzc0LjQ1NSA5NC41NSwzNzUuMDA3IEw5NC41NSwzNzUuMDA3IFogTTEwMS45LDM3NyBDMTAxLjksMzc3LjU1MiAxMDEuNDI5NiwzNzggMTAwLjg1LDM3OCBMODYuMTUsMzc4IEM4NS41NzA0LDM3OCA4NS4xLDM3Ny41NTIgODUuMSwzNzcgTDg1LjEsMzYzIEM4NS4xLDM2Mi40NDggODUuNTcwNCwzNjIgODYuMTUsMzYyIEwxMDAuODUsMzYyIEMxMDEuNDI5NiwzNjIgMTAxLjksMzYyLjQ0OCAxMDEuOSwzNjMgTDEwMS45LDM3NyBaIE0xMDEuOSwzNjAgTDg1LjEsMzYwIEM4My45Mzk3NSwzNjAgODMsMzYwLjg5OSA4MywzNjIuMDAzIEw4MywzNjIuMDA3IEw4MywzNzguMDA3IEM4MywzNzkuMTEyIDgzLjkzOTc1LDM4MCA4NS4xLDM4MCBMMTAxLjksMzgwIEMxMDMuMDYwMjUsMzgwIDEwNCwzNzkuMTA4IDEwNCwzNzguMDAzIEwxMDQsMzYyLjAwNyBDMTA0LDM2MC45MDIgMTAyLjk1LDM2MCAxMDEuOSwzNjAgTDEwMS45LDM2MCBaXCJcclxuICAgICAgICAgIGlkPVwiaW1wb3J0YW50X21lc3NhZ2UtWyMxNDQ4XVwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9nPlxyXG4gICAgPC9nPlxyXG4gIDwvZz5cclxuPC9nPlxyXG48L3N2Zz5gO1xyXG5cclxuY29uc3QgaW1wb3J0YW50RmllbGQgPSB7XHJcbiAgaW1hZ2U6IElNUE9SVEFOVF9TVkcsXHJcbiAgbmFtZTogXCJJbXBvcnRhbnRcIixcclxufTtcclxuXHJcbmNvbnN0IE5FWFRfN19EQVlTX1NWRyA9IGA8c3ZnXHJcbmZpbGw9XCIjMDAwMDAwXCJcclxuaGVpZ2h0PVwiMjAwcHhcIlxyXG53aWR0aD1cIjIwMHB4XCJcclxudmVyc2lvbj1cIjEuMVwiXHJcbmlkPVwiQ2FwYV8xXCJcclxueG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnZpZXdCb3g9XCIwIDAgMTg3LjMzMyAxODcuMzMzXCJcclxueG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG4+XHJcbjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG48Z1xyXG4gIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCJcclxuICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbj48L2c+XHJcbjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxyXG4gIDxwYXRoXHJcbiAgICBkPVwiTTE3Mi4wNDksMGgtMTEuODI4Yy0yLjc2MSwwLTUsMi4yMzktNSw1djE1LjkxOWgtMTQuNDA3VjVjMC0yLjc2MS0yLjIzOS01LTUtNWgtMTEuODI4Yy0yLjc2MSwwLTUsMi4yMzktNSw1djE1LjkxOUgxMDQuNTggVjVjMC0yLjc2MS0yLjIzOS01LTUtNUg4Ny43NTNjLTIuNzYxLDAtNSwyLjIzOS01LDV2MTUuOTE5SDY4LjM0NlY1YzAtMi43NjEtMi4yMzktNS01LTVINTEuNTE4Yy0yLjc2MSwwLTUsMi4yMzktNSw1djE1LjkxOSBIMzIuMTEyVjVjMC0yLjc2MS0yLjIzOS01LTUtNUgxNS4yODRjLTIuNzYxLDAtNSwyLjIzOS01LDV2MjAuOTE5djkuMDE2djE0Ny4zOTljMCwyLjc2MSwyLjIzOSw1LDUsNWgxNTYuNzY1YzIuNzYxLDAsNS0yLjIzOSw1LTUgVjM0LjkzNHYtOS4wMTZWNUMxNzcuMDQ5LDIuMjM5LDE3NC44MSwwLDE3Mi4wNDksMHogTTEwMC43MTgsOTkuMDUzYzAsMTcuMTY1LTEzLjk2NSwzMS4xMzEtMzEuMTMxLDMxLjEzMUg1Ni43MTQgYy00LjU1MywwLTguMjU4LDMuNzA1LTguMjU4LDguMjU4djguMjU4aDQ3LjI2MmMyLjc2MSwwLDUsMi4yMzksNSw1cy0yLjIzOSw1LTUsNUg0My40NTZjLTIuNzYxLDAtNS0yLjIzOS01LTV2LTEzLjI1OCBjMC0xMC4wNjcsOC4xOS0xOC4yNTgsMTguMjU4LTE4LjI1OGgxMi44NzNjMTEuNjUxLDAsMjEuMTMxLTkuNDc5LDIxLjEzMS0yMS4xMzFWODcuNzk3YzAtMTEuNjUxLTkuNDc5LTIxLjEzMS0yMS4xMzEtMjEuMTMxIGMtMTEuNjUxLDAtMjEuMTMxLDkuNDgtMjEuMTMxLDIxLjEzMXYwLjM5NWMwLDIuNzYxLTIuMjM5LDUtNSw1cy01LTIuMjM5LTUtNXYtMC4zOTVjMC0xNy4xNjYsMTMuOTY1LTMxLjEzMSwzMS4xMzEtMzEuMTMxIGMxNy4xNjUsMCwzMS4xMzEsMTMuOTY1LDMxLjEzMSwzMS4xMzFWOTkuMDUzeiBNMTQ4Ljg3NywxNTEuN2MwLDIuNzYxLTIuMjM5LDUtNSw1Yy0yLjc2MSwwLTUtMi4yMzktNS01VjczLjczOGwtMTAuOTg1LDEwLjk4NSBjLTEuOTUzLDEuOTUyLTUuMTE4LDEuOTUyLTcuMDcxLDBjLTEuOTUzLTEuOTUzLTEuOTUzLTUuMTE5LDAtNy4wNzFsMTkuNTItMTkuNTJjMS40My0xLjQzLDMuNTgtMS44NTcsNS40NDktMS4wODQgYzEuODY4LDAuNzc0LDMuMDg2LDIuNTk3LDMuMDg2LDQuNjJWMTUxLjd6XCJcclxuICA+PC9wYXRoPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBuZXh0N0RheXNGaWVsZCA9IHtcclxuICBpbWFnZTogTkVYVF83X0RBWVNfU1ZHLFxyXG4gIG5hbWU6IFwiTmV4dCA3IERheXNcIixcclxufTtcclxuXHJcbmNvbnN0IE5FWFRfTU9OVEhfU1ZHID0gYDxzdmdcclxuaGVpZ2h0PVwiMjAwcHhcIlxyXG53aWR0aD1cIjIwMHB4XCJcclxudmVyc2lvbj1cIjEuMVwiXHJcbmlkPVwiX3gzMl9cIlxyXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxudmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxueG1sOnNwYWNlPVwicHJlc2VydmVcIlxyXG5maWxsPVwiIzAwMDAwMFwiXHJcbj5cclxuPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbjxnXHJcbiAgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIlxyXG4gIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuPjwvZz5cclxuPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XHJcbiAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgLnN0MCB7XHJcbiAgICAgIGZpbGw6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuICA8Zz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGNsYXNzPVwic3QwXCJcclxuICAgICAgZD1cIk0xMTguNjEyLDg5LjI5OGM5LjQ4MiwwLDE3LjE3Ni03LjY4NiwxNy4xNzYtMTcuMTY4di01NC45NkMxMzUuNzg4LDcuNjg3LDEyOC4wOTQsMCwxMTguNjEyLDAgYy05LjQ4MiwwLTE3LjE3Nyw3LjY4Ny0xNy4xNzcsMTcuMTY5djU0Ljk2QzEwMS40MzUsODEuNjExLDEwOS4xMyw4OS4yOTgsMTE4LjYxMiw4OS4yOTh6XCJcclxuICAgID48L3BhdGg+XHJcbiAgICA8cGF0aFxyXG4gICAgICBjbGFzcz1cInN0MFwiXHJcbiAgICAgIGQ9XCJNMjU1Ljk5Miw4OS4yOThjOS40ODIsMCwxNy4xNzctNy42ODYsMTcuMTc3LTE3LjE2OHYtNTQuOTZDMjczLjE2OSw3LjY4NywyNjUuNDc0LDAsMjU1Ljk5MiwwIGMtOS40ODMsMC0xNy4xNzYsNy42ODctMTcuMTc2LDE3LjE2OXY1NC45NkMyMzguODE2LDgxLjYxMSwyNDYuNTEsODkuMjk4LDI1NS45OTIsODkuMjk4elwiXHJcbiAgICA+PC9wYXRoPlxyXG4gICAgPHBhdGhcclxuICAgICAgY2xhc3M9XCJzdDBcIlxyXG4gICAgICBkPVwiTTM5My4zNzIsODkuMjk4YzkuNDgzLDAsMTcuMTc2LTcuNjg2LDE3LjE3Ni0xNy4xNjh2LTU0Ljk2QzQxMC41NDksNy42ODcsNDAyLjg1NSwwLDM5My4zNzIsMCBjLTkuNDgzLDAtMTcuMTc2LDcuNjg3LTE3LjE3NiwxNy4xNjl2NTQuOTZDMzc2LjE5Niw4MS42MTEsMzgzLjg5LDg5LjI5OCwzOTMuMzcyLDg5LjI5OHpcIlxyXG4gICAgPjwvcGF0aD5cclxuICAgIDxwYXRoXHJcbiAgICAgIGNsYXNzPVwic3QwXCJcclxuICAgICAgZD1cIk0xODYuNTkzLDQwNS4wNzJjMzIuMTAyLDAsNTYuMDMxLTIxLjU3Miw1Ni4wMzEtNTQuMTg5YzAtMjMuNDIxLTEzLjE1Mi0zOC45NC0yMy42NjctNDMuNDExdi0wLjUyNCBjMTMuMTUyLTguNjgsMTkuOTgyLTIyLjEwMiwxOS45ODItMzcuMDk3YzAtMjguOTQyLTE5LjE5Ni00OS40NTYtNTIuNjA4LTQ5LjQ1NmMtMjguOTQyLDAtNDguNjc4LDE2LjU3NS01Mi42MjQsMzguMTQ2IGMtMC4yNjIsMS41NzMsMC41MjQsMi44OTIsMi4xMTIsMy4xNTRsMjIuMzU3LDUuMjY0YzEuNTg4LDAuMjYzLDIuNjM3LTAuMjYyLDMuMTYxLTEuODQyIGMzLjE2MS0xMS4wNDgsMTAuNzkzLTE4LjQxOCwyMy45NDUtMTguNDE4YzE0Ljk4OCwwLDIzLjkzLDkuOTk5LDIzLjkzLDI0LjIwN2MwLDE1Ljc4Mi0xMC4yNTMsMjYuMDQzLTI2LjA0MiwyNi4wNDNoLTcuMTA4IGMtMS41NzIsMC0yLjYyMiwxLjA0OC0yLjYyMiwyLjYyOXYyMC43ODRjMCwxLjU4LDEuMDQ5LDIuNjI5LDIuNjIyLDIuNjI5aDcuNjMyYzE3LjYyMywwLDI5LjIwMywxMS4wNTUsMjkuMjAzLDI5LjIwMyBjMCwxNS4yNjQtOS43MjksMjYuNTc0LTI2LjMwNCwyNi41NzRjLTE0Ljc0LDAtMjMuNDIxLTguNDE5LTI3LjEwNi0xOC45NDJjLTAuNTI0LTEuNTgtMS44MzYtMi4xMDQtMy4xNDYtMS44NDJsLTIyLjg5Nyw1LjI2NiBjLTEuNTcyLDAuNTI0LTIuMzU5LDEuODM0LTIuMDk3LDMuNDE1QzEzNi44NjgsMzkxLjEzMywxNTguNzAxLDQwNS4wNzIsMTg2LjU5Myw0MDUuMDcyelwiXHJcbiAgICA+PC9wYXRoPlxyXG4gICAgPHBhdGhcclxuICAgICAgY2xhc3M9XCJzdDBcIlxyXG4gICAgICBkPVwiTTI5Ni44MzYsMjc3Ljc0NGwyNy4zNTItMTkuMjA0aDAuNTI0djE0MS4wMTFjMCwxLjU4LDEuMDY0LDIuNjMsMi42MzcsMi42M2gyNC4yMDcgYzEuNTczLDAsMi42MjItMS4wNDksMi42MjItMi42M1YyMjUuOTE0YzAtMS41NzMtMS4wNDgtMi42MjktMi42MjItMi42MjloLTIyLjM3MmMtMi4wOTcsMC0zLjQwOCwwLjUyNC00LjczNCwxLjU4bC0yOC42NjMsMjAuNzg0IGMtMS4zMjYsMS4wNDgtMS44NSwyLjEwNS0xLjg1LDMuNjc4djI2LjgzNkMyOTMuOTM4LDI3OC4yNjksMjk1LjI0OCwyNzguNzkzLDI5Ni44MzYsMjc3Ljc0NHpcIlxyXG4gICAgPjwvcGF0aD5cclxuICAgIDxwYXRoXHJcbiAgICAgIGNsYXNzPVwic3QwXCJcclxuICAgICAgZD1cIk00MjcuMDAxLDQ0Ljg5OWgtMi43MTR2MjcuMjNjMCwxNy4wMzgtMTMuODYxLDMwLjkwNi0zMC45MTQsMzAuOTA2Yy0xNy4wMzgsMC0zMC45MTQtMTMuODY5LTMwLjkxNC0zMC45MDYgdi0yNy4yM2gtNzUuNTUxdjI3LjIzYzAsMTcuMDM4LTEzLjg3NywzMC45MDYtMzAuOTE0LDMwLjkwNnMtMzAuOTE0LTEzLjg2OS0zMC45MTQtMzAuOTA2di0yNy4yM2gtNzUuNTUydjI3LjIzIGMwLDE3LjAzOC0xMy44NzYsMzAuOTA2LTMwLjkxNCwzMC45MDZTODcuNjk4LDg5LjE2Nyw4Ny42OTgsNzIuMTI5di0yNy4yM2gtMi42OThjLTM3LjA4MiwwLTY3LjEzMywzMC4wNTktNjcuMTMzLDY3LjEzM3YzMzIuODM1IGMwLDM3LjA3NCwzMC4wNTEsNjcuMTMzLDY3LjEzMyw2Ny4xMzNoMzQyLjAwMmMzNy4wNjYsMCw2Ny4xMzMtMzAuMDU4LDY3LjEzMy02Ny4xMzNWMTEyLjAzMiBDNDk0LjEzNCw3NC45NTgsNDY0LjA2Nyw0NC44OTksNDI3LjAwMSw0NC44OTl6IE00NTAuODU0LDQzOS43NzJjMCwxNS45NzMtMTIuOTksMjguOTY0LTI4Ljk1NiwyOC45NjRIOTAuMTAzIGMtMTUuOTczLDAtMjguOTcxLTEyLjk5LTI4Ljk3MS0yOC45NjRWMTQzLjExNmgzODkuNzIyVjQzOS43NzJ6XCJcclxuICAgID48L3BhdGg+XHJcbiAgPC9nPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBuZXh0TW9udGhGaWVsZCA9IHtcclxuICBpbWFnZTogTkVYVF9NT05USF9TVkcsXHJcbiAgbmFtZTogXCJOZXh0IE1vbnRoXCIsXHJcbn07XHJcblxyXG5jb25zdCB0b2RvTGlzdEZpZWxkcyA9IFtcclxuICBhbGxGaWVsZCxcclxuICBpbXBvcnRhbnRGaWVsZCxcclxuICBuZXh0N0RheXNGaWVsZCxcclxuICBuZXh0TW9udGhGaWVsZCxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdEZpZWxkcygpIHtcclxuICByZXR1cm4gdG9kb0xpc3RGaWVsZHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvTGlzdCA9IHtcclxuICBnZXRUb2RvTGlzdEZpZWxkcyxcclxufTtcclxuIiwiaW1wb3J0IHsgdGltZURpc3RhbmNlRnJvbU5vdyB9IGZyb20gXCIuLi9VVElMSVRJRVMvRGF0ZUZuc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9Db21wb25lbnQgPSAodG9kb09iaikgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIGlkLCBjaGVja2VkIH0gPSB0b2RvT2JqO1xyXG4gIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvXCIpO1xyXG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpZCk7XHJcbiAgaWYgKGNoZWNrZWQpIHtcclxuICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIik7XHJcbiAgfVxyXG4gIHRvZG9EaXYuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXY+XHJcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInRvZG9DaGVja2VkXCIgaWQ9XCJ0b2RvQ2hlY2tlZFwiICR7XHJcbiAgICAgIGNoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgIH0vPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0b2RvVGl0bGVcIj4ke3RpdGxlfSwgJHt0aW1lRGlzdGFuY2VGcm9tTm93KGR1ZURhdGUpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2hvd01vcmVcIj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZUJ0biBkZWxldGVUb2RvXCI+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICByZXR1cm4gdG9kb0RpdjtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRvZG9EaWFsb2dDb21wb25lbnQoe1xyXG4gIGhlYWRlcixcclxuICB0aXRsZVZhbHVlID0gXCJcIixcclxuICBpZCA9IFwiXCIsXHJcbiAgZGF0ZVZhbHVlID0gXCJcIixcclxuICBwcmlvcml0eVZhbHVlID0gXCJsb3dcIixcclxuICBkZXNjcmlwdGlvblZhbHVlID0gXCJcIixcclxuICBsYXN0QnV0dG9uVGV4dCA9IFwiXCIsXHJcbn0pIHtcclxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld1RvZG9cIik7XHJcbiAgZGlhbG9nLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaWQpO1xyXG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIGRpYWxvZy5pbm5lckhUTUwgPSBgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aDY+JHtoZWFkZXJ9PC9oNj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZURpYWxvZyBuZXdUb2RvXCI+PC9zcGFuPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG9UaXRsZVwiPlRpdGxlIDogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0b2RvVGl0bGVcIiBpZD1cInRvZG9UaXRsZVwiIHZhbHVlPVwiJHt0aXRsZVZhbHVlfVwiLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlIDogPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBuYW1lPVwiZHVlRGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIHZhbHVlPVwiJHtkYXRlVmFsdWV9XCIvPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHkgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgJHtcclxuICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID09PSBcImhpZ2hcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgfT5IaWdoICYjMTI4NTYxOzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgJHtcclxuICAgICAgICAgICAgICBwcmlvcml0eVZhbHVlID09PSBcIm1lZGl1bVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICB9Pk1lZGl1bSAmIzEyODU1MDs8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiICR7XHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlWYWx1ZSA9PT0gXCJsb3dcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgfT5Mb3cgJiMxMjg1NTQ7PC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kb0Rlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8gPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0b2RvRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBpZD1cInRvZG9EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICAgID4ke2Rlc2NyaXB0aW9uVmFsdWV9PC90ZXh0YXJlYT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZURpYWxvZ1wiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCIke1xyXG4gICAgICAgIGxhc3RCdXR0b25UZXh0ID09PSBcIkFkZCBUb2RvXCJcclxuICAgICAgICAgID8gXCJhZGRUb2RvXCJcclxuICAgICAgICAgIDogbGFzdEJ1dHRvblRleHQgPT09IFwiRWRpdCBUb2RvXCJcclxuICAgICAgICAgID8gXCJlZGl0VG9kb1wiXHJcbiAgICAgICAgICA6IFwiXCJcclxuICAgICAgfVwiPiR7bGFzdEJ1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICA8L2Zvb3Rlcj5gO1xyXG5cclxuICByZXR1cm4gZGlhbG9nO1xyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3csIGlzQmVmb3JlIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGFkZFdlZWtzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGdldERheXNJbk1vbnRoIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmV4cG9ydCBjb25zdCB0aW1lRGlzdGFuY2VGcm9tTm93ID0gKGRhdGUpID0+IHtcclxuICBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIGRhdGUgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZvcm1hdERpc3RhbmNlVG9Ob3coZGF0ZSwge1xyXG4gICAgaW5jbHVkZVNlY29uZHM6IHRydWUsXHJcbiAgICBhZGRTdWZmaXg6IHRydWUsXHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZGRXZWVrc0Zyb21EYXRlID0gKGRhdGUsIG51bWJlck9mV2Vla3MpID0+XHJcbiAgYWRkV2Vla3MoZGF0ZSwgbnVtYmVyT2ZXZWVrcyk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF5c01vbnRoID0gKGRhdGUpID0+IGdldERheXNJbk1vbnRoKGRhdGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGF0ZUJlZm9yZU90aGVyID0gKGRhdGUsIGRhdGVMaW1pdCkgPT4gaXNCZWZvcmUoZGF0ZSwgZGF0ZUxpbWl0KTtcclxuIiwiZXhwb3J0IGNvbnN0ICQgPSAoc2VsZWN0b3IpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5leHBvcnQgY29uc3QgJCQgPSAoc2VsZWN0b3IpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4vL2Rpdi5zaG93TW9yZSB8fCBidXR0b24uZGVsZXRlQnRuXHJcbmV4cG9ydCBjb25zdCBnZXRET01Ub2RvRnJvbUVsZW1lbnQgPSAoZWxlbWVudCkgPT5cclxuICBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuLy9idXR0b24uZXhwYW5kQ29udGVudCB8fCBidXR0b24uZGVsZXRlQ29udGVudFxyXG4vL2RpYWxvZyB3aWxsIGhhdmUgaGFkZXIgbWFpbiBmb290ZXIgPiBidXR0b25zXHJcbmV4cG9ydCBjb25zdCBnZXREaWFsb2dGcm9tQ2hpbGQgPSAoY2hpbGQpID0+IGNoaWxkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuZXhwb3J0IGNvbnN0IGdldFRvZG9EaXZGcm9tQnRuID0gKGJ0bikgPT4gYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAtLW5hdkJhY2tncm91bmQ6ICNmNTllMGI7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNmZmZiZWI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xyXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXHJcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLypOQVZCQVIqL1xyXG5ib2R5ID4gbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtIDNlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuYm9keSA+IG5hdiBzcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyZW07XHJcbn1cclxuXHJcbmJvZHkgPiBuYXYgYnV0dG9uIHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5ID4gbmF2IGJ1dHRvbjpob3ZlcixcclxuYm9keSA+IG5hdiBidXR0b246aG92ZXIgZGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuYm9keSA+IG5hdiBidXR0b24gPiBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi8qTmF2YmFyIGJ1dHRvbiBzdHlsaW5nKi9cclxuXHJcbmJ1dHRvbi5tZW51IGRpdiB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMCUgNSUsXHJcbiAgICAxMDAlIDUlLFxyXG4gICAgMTAwJSAyNSUsXHJcbiAgICAwJSAyNSUsXHJcbiAgICAwJSA0MCUsXHJcbiAgICAxMDAlIDQwJSxcclxuICAgIDEwMCUgNjAlLFxyXG4gICAgMCUgNjAlLFxyXG4gICAgMCUgNzUlLFxyXG4gICAgMTAwJSA3NSUsXHJcbiAgICAxMDAlIDk1JSxcclxuICAgIDAlIDk1JVxyXG4gICk7XHJcbn1cclxuXHJcbmJ1dHRvbi5uZXdUb2RvIGRpdiB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMzUlIDAlLFxyXG4gICAgNjUlIDAlLFxyXG4gICAgNjUlIDM1JSxcclxuICAgIDEwMCUgMzUlLFxyXG4gICAgMTAwJSA2MCUsXHJcbiAgICA2NSUgNjAlLFxyXG4gICAgNjUlIDEwMCUsXHJcbiAgICAzNSUgMTAwJSxcclxuICAgIDM1JSA2MCUsXHJcbiAgICAwJSA2MCUsXHJcbiAgICAwJSAzNSUsXHJcbiAgICAzNSUgMzUlXHJcbiAgKTtcclxufVxyXG5cclxuYnV0dG9uLnRvZGF5IGRpdiB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgNTAlIDAlLFxyXG4gICAgNzAlIDE1JSxcclxuICAgIDcwJSAyJSxcclxuICAgIDkwJSAyJSxcclxuICAgIDkwJSAzMCUsXHJcbiAgICAxMDAlIDQwJSxcclxuICAgIDEwMCUgMTAwJSxcclxuICAgIDY1JSAxMDAlLFxyXG4gICAgNjUlIDY1JSxcclxuICAgIDM1JSA2NSUsXHJcbiAgICAzNSUgMTAwJSxcclxuICAgIDAlIDEwMCUsXHJcbiAgICAwJSA0MCVcclxuICApO1xyXG59XHJcblxyXG4vKk1haW4gQ29udGVudCovXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMWVtO1xyXG59XHJcblxyXG5hc2lkZS5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5hc2lkZSB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkNTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgNTAwbXMsIHRyYW5zZm9ybSBlYXNlIDUwMG1zO1xyXG59XHJcblxyXG5hc2lkZSA+IHVsIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgbWFyZ2luLXRvcDogMGVtO1xyXG59XHJcblxyXG5hc2lkZSB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5hc2lkZSB1bCBsaSB7XHJcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmFzaWRlIHVsIGxpOmhvdmVyLFxyXG5hc2lkZSB1bCBsaS5hY3RpdmUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG59XHJcblxyXG5hc2lkZSB1bCBsaSBzcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmFzaWRlIHN2ZyB7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBzdHJva2U6IGJsYWNrO1xyXG59XHJcblxyXG5hc2lkZSBidXR0b24ubmV3UHJvamVjdCB7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMzUlIDAlLFxyXG4gICAgNjUlIDAlLFxyXG4gICAgNjUlIDM1JSxcclxuICAgIDEwMCUgMzUlLFxyXG4gICAgMTAwJSA2MCUsXHJcbiAgICA2NSUgNjAlLFxyXG4gICAgNjUlIDEwMCUsXHJcbiAgICAzNSUgMTAwJSxcclxuICAgIDM1JSA2MCUsXHJcbiAgICAwJSA2MCUsXHJcbiAgICAwJSAzNSUsXHJcbiAgICAzNSUgMzUlXHJcbiAgKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuYXNpZGUgYnV0dG9uLm5ld1Byb2plY3Q6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8qTWFpbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkgPiBtYWluLmFzaWRlT3BlbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xyXG59XHJcblxyXG5ib2R5ID4gbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG59XHJcblxyXG5ib2R5ID4gbWFpbiA+IHNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDFlbSA0ZW07XHJcbn1cclxuXHJcbmJvZHkgPiBtYWluID4gc2VjdGlvbiA+IGRpdi50b2RvQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMWVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5ID4gbWFpbi5hc2lkZU9wZW4gPiBzZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbm1haW4gPiBzZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWFpbiBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLypNb2RhbHMqL1xyXG5cclxuZGlhbG9nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgNTAwbXMsIG9wYWNpdHkgZWFzZSA1MDBtcztcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNjUlIDE1JTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG59XHJcblxyXG5kaWFsb2cuaGlkZGVuIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuZGlhbG9nIGhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaWFsb2cgaGVhZGVyIGg2IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgcm90YXRlKDQ1ZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAzNSUgMCUsXHJcbiAgICA2NSUgMCUsXHJcbiAgICA2NSUgMzUlLFxyXG4gICAgMTAwJSAzNSUsXHJcbiAgICAxMDAlIDYwJSxcclxuICAgIDY1JSA2MCUsXHJcbiAgICA2NSUgMTAwJSxcclxuICAgIDM1JSAxMDAlLFxyXG4gICAgMzUlIDYwJSxcclxuICAgIDAlIDYwJSxcclxuICAgIDAlIDM1JSxcclxuICAgIDM1JSAzNSVcclxuICApO1xyXG59XHJcblxyXG5kaWFsb2cgZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxLjVlbTtcclxufVxyXG5cclxuZGlhbG9nIGZvb3RlciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZGlhbG9nIGZvb3RlciBidXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG5kaWFsb2cgZm9vdGVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogc25vdztcclxufVxyXG5cclxuZGlhbG9nLm5ld1Byb2plY3Qge1xyXG4gIHdpZHRoOiA4MHZoO1xyXG4gIGhlaWdodDogMzB2aDtcclxufVxyXG5cclxuZGlhbG9nLm5ld1Byb2plY3QgbWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgY29sdW1uLWdhcDogMWVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4gaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxufVxyXG5cclxuZGlhbG9nLm5ld1Byb2plY3QgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyxcclxuZGlhbG9nLmVkaXRUb2RvIHtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvID4gbWFpbiBmb3JtLFxyXG5kaWFsb2cuZWRpdFRvZG8gPiBtYWluIGZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMmVtO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpLFxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMiksXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIHtcclxuICBjb2x1bW4tZ2FwOiAyZW07XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbiBsYWJlbCxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbiBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGxhYmVsLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSBsYWJlbCB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGlucHV0LFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSBpbnB1dCB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3O1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6Zmlyc3Qtb2YtdHlwZSxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGlucHV0LFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6bGFzdC1vZi10eXBlLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBsYWJlbDpsYXN0LW9mLXR5cGUge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBzZWxlY3QsXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIHNlbGVjdCB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3O1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMyksXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDMpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDMpIHRleHRhcmVhLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgzKSB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi8qUHJvamVjdHMqL1xyXG5kaXYucHJvamVjdENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICByb3ctZ2FwOiAxZW07XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxufVxyXG5cclxuZGlhbG9nIGlucHV0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5kaWFsb2cgaW5wdXQuaW52YWxpZCB7XHJcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XHJcbiAgb3V0bGluZS13aWR0aDogMnB4O1xyXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5kaWFsb2cuZWxpbWluYXRpb25XYXJuaW5nIGg2IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4vKkNoZWNrYm94IGFuaW1hdGlvbiBieSBoZW5yeSDDtmhtYW4gZnJvbSBjb2RlcGVuKi9cclxuLnByb2plY3Qge1xyXG4gIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkNTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuNWVtO1xyXG59XHJcblxyXG4ucHJvamVjdCBzZWN0aW9uLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucHJvamVjdCAudGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnByb2plY3Qgc3BhbjpsYXN0LWNoaWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxZW07XHJcbn1cclxuXHJcbmRpdi50b2RvIC5kZWxldGVCdG4sXHJcbi5wcm9qZWN0IC5kZWxldGVCdG4ge1xyXG4gIGhlaWdodDogMS41ZW07XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMzUlIDAlLFxyXG4gICAgNjUlIDAlLFxyXG4gICAgNjUlIDM1JSxcclxuICAgIDEwMCUgMzUlLFxyXG4gICAgMTAwJSA2MCUsXHJcbiAgICA2NSUgNjAlLFxyXG4gICAgNjUlIDEwMCUsXHJcbiAgICAzNSUgMTAwJSxcclxuICAgIDM1JSA2MCUsXHJcbiAgICAwJSA2MCUsXHJcbiAgICAwJSAzNSUsXHJcbiAgICAzNSUgMzUlXHJcbiAgKTtcclxufVxyXG5cclxuZGl2LnRvZG8gLmRlbGV0ZUJ0bjpob3ZlcixcclxuLnByb2plY3QgLmRlbGV0ZUJ0bjpob3ZlcixcclxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KSByb3RhdGUoNDVkZWcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQge1xyXG4gIGhlaWdodDogMS41ZW07XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDAlIDEwMCUpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgNzUlIDAlLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcblxyXG4ucHJvamVjdCAuZXhwYW5kQ29udGVudDpob3ZlcixcclxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQuY2xpY2tlZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KSByb3RhdGUoOTBkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xyXG59XHJcblxyXG4vKlByb2plY3QgVG9kbyBzZWN0aW9uKi9cclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIHtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgcm93LWdhcDogMC41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LmV4cGFuZGVkIHNlY3Rpb24ubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmRpdi50b2RvLFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVlbSAzZW07XHJcbn1cclxuXHJcbmRpdi50b2RvID4gZGl2LFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFlbTtcclxufVxyXG5cclxuZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIGdhcDogMmVtO1xyXG59XHJcblxyXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGNvbHVtbi1nYXA6IDAuMjVlbTtcclxufVxyXG5cclxuZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIgZGl2LFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIgZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmUgZGl2LFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmUgZGl2IHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDAuNWVtO1xyXG4gIGhlaWdodDogMC41ZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmRpdi50b2RvIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBhY2NlbnQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xyXG59XHJcblxyXG5kaXYudG9kbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcclxuICBhbmltYXRpb246IHdpZ2dsZSAwLjRzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi50b2RvIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgc3Bhbi50b2RvVGl0bGUsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIHNwYW4udG9kb1RpdGxlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcclxuICBhbmltYXRpb246IHdpZ2dsZSAwLjRzIGVhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbmRpdi50b2RvIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlcixcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5kaXYudG9kbyBzcGFuLnRvZG9UaXRsZSxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIHNwYW4udG9kb1RpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1LCAwLjc1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMC43NSk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSwgMS4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1LCAwLjg1KTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHdpZ2dsZSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1LCAwLjc1KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAxLjI1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSwgMS4yNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSwgMC44NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQjt3RUFDc0U7RUFDdEUsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlOztFQUVmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBLHdCQUF3Qjs7QUFFeEI7RUFDRTs7Ozs7Ozs7Ozs7OztH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QW9DO0lBQ3BDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLS1uYXZCYWNrZ3JvdW5kOiAjZjU5ZTBiO1xcclxcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNmZmZiZWI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA5MCU7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLypOQVZCQVIqL1xcclxcbmJvZHkgPiBuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMWVtIDNlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbmF2IHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBuYXYgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IG5hdiBidXR0b246aG92ZXIsXFxyXFxuYm9keSA+IG5hdiBidXR0b246aG92ZXIgZGl2IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IG5hdiBidXR0b24gPiBkaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi8qTmF2YmFyIGJ1dHRvbiBzdHlsaW5nKi9cXHJcXG5cXHJcXG5idXR0b24ubWVudSBkaXYge1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAwJSA1JSxcXHJcXG4gICAgMTAwJSA1JSxcXHJcXG4gICAgMTAwJSAyNSUsXFxyXFxuICAgIDAlIDI1JSxcXHJcXG4gICAgMCUgNDAlLFxcclxcbiAgICAxMDAlIDQwJSxcXHJcXG4gICAgMTAwJSA2MCUsXFxyXFxuICAgIDAlIDYwJSxcXHJcXG4gICAgMCUgNzUlLFxcclxcbiAgICAxMDAlIDc1JSxcXHJcXG4gICAgMTAwJSA5NSUsXFxyXFxuICAgIDAlIDk1JVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLm5ld1RvZG8gZGl2IHtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMzUlIDAlLFxcclxcbiAgICA2NSUgMCUsXFxyXFxuICAgIDY1JSAzNSUsXFxyXFxuICAgIDEwMCUgMzUlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgNjUlIDYwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAzNSUgNjAlLFxcclxcbiAgICAwJSA2MCUsXFxyXFxuICAgIDAlIDM1JSxcXHJcXG4gICAgMzUlIDM1JVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnRvZGF5IGRpdiB7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDUwJSAwJSxcXHJcXG4gICAgNzAlIDE1JSxcXHJcXG4gICAgNzAlIDIlLFxcclxcbiAgICA5MCUgMiUsXFxyXFxuICAgIDkwJSAzMCUsXFxyXFxuICAgIDEwMCUgNDAlLFxcclxcbiAgICAxMDAlIDEwMCUsXFxyXFxuICAgIDY1JSAxMDAlLFxcclxcbiAgICA2NSUgNjUlLFxcclxcbiAgICAzNSUgNjUlLFxcclxcbiAgICAzNSUgMTAwJSxcXHJcXG4gICAgMCUgMTAwJSxcXHJcXG4gICAgMCUgNDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gQ29udGVudCovXFxyXFxubWFpbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZS5oaWRkZW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkZDU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgNTAwbXMsIHRyYW5zZm9ybSBlYXNlIDUwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSA+IHVsIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDBlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHVsIGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHVsIGxpOmhvdmVyLFxcclxcbmFzaWRlIHVsIGxpLmFjdGl2ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB1bCBsaSBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHN2ZyB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBzdHJva2U6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSBidXR0b24ubmV3UHJvamVjdCB7XFxyXFxuICB3aWR0aDogMWVtO1xcclxcbiAgaGVpZ2h0OiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMzUlIDAlLFxcclxcbiAgICA2NSUgMCUsXFxyXFxuICAgIDY1JSAzNSUsXFxyXFxuICAgIDEwMCUgMzUlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgNjUlIDYwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAzNSUgNjAlLFxcclxcbiAgICAwJSA2MCUsXFxyXFxuICAgIDAlIDM1JSxcXHJcXG4gICAgMzUlIDM1JVxcclxcbiAgKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGJ1dHRvbi5uZXdQcm9qZWN0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gY29udGFpbmVyICovXFxyXFxuXFxyXFxuYm9keSA+IG1haW4uYXNpZGVPcGVuIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluID4gc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxZW0gNGVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbWFpbiA+IHNlY3Rpb24gPiBkaXYudG9kb0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLmFzaWRlT3BlbiA+IHNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluID4gc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxubWFpbiBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbi8qTW9kYWxzKi9cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgNTAwbXMsIG9wYWNpdHkgZWFzZSA1MDBtcztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNjUlIDE1JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxZW0gMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cuaGlkZGVuIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cgaGVhZGVyIGg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2c6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDFlbTtcXHJcXG4gIGhlaWdodDogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDM1JSAwJSxcXHJcXG4gICAgNjUlIDAlLFxcclxcbiAgICA2NSUgMzUlLFxcclxcbiAgICAxMDAlIDM1JSxcXHJcXG4gICAgMTAwJSA2MCUsXFxyXFxuICAgIDY1JSA2MCUsXFxyXFxuICAgIDY1JSAxMDAlLFxcclxcbiAgICAzNSUgMTAwJSxcXHJcXG4gICAgMzUlIDYwJSxcXHJcXG4gICAgMCUgNjAlLFxcclxcbiAgICAwJSAzNSUsXFxyXFxuICAgIDM1JSAzNSVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIGZvb3RlciBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIGZvb3RlciBidXR0b246Zmlyc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogc25vdztcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1Byb2plY3Qge1xcclxcbiAgd2lkdGg6IDgwdmg7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1Byb2plY3QgbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyxcXHJcXG5kaWFsb2cuZWRpdFRvZG8ge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvID4gbWFpbiBmb3JtLFxcclxcbmRpYWxvZy5lZGl0VG9kbyA+IG1haW4gZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMSksXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XFxyXFxuICBjb2x1bW4tZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbiBsYWJlbCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGxhYmVsLFxcclxcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGxhYmVsIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGlucHV0LFxcclxcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGlucHV0IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGxhYmVsOmZpcnN0LW9mLXR5cGUsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBsYWJlbDpsYXN0LW9mLXR5cGUsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIHNlbGVjdCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBzZWxlY3Qge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XFxyXFxuICBncmlkLWNvbHVtbi1lbmQ6IDc7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMyksXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykgdGV4dGFyZWEsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykgdGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlByb2plY3RzKi9cXHJcXG5kaXYucHJvamVjdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHJvdy1nYXA6IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBpbnB1dC5pbnZhbGlkIHtcXHJcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgb3V0bGluZS13aWR0aDogMnB4O1xcclxcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLmVsaW1pbmF0aW9uV2FybmluZyBoNiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoZWNrYm94IGFuaW1hdGlvbiBieSBoZW5yeSDDtmhtYW4gZnJvbSBjb2RlcGVuKi9cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gM2VtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBzZWN0aW9uLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC50ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gLmRlbGV0ZUJ0bixcXHJcXG4ucHJvamVjdCAuZGVsZXRlQnRuIHtcXHJcXG4gIGhlaWdodDogMS41ZW07XFxyXFxuICB3aWR0aDogMS41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMzUlIDAlLFxcclxcbiAgICA2NSUgMCUsXFxyXFxuICAgIDY1JSAzNSUsXFxyXFxuICAgIDEwMCUgMzUlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgNjUlIDYwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAzNSUgNjAlLFxcclxcbiAgICAwJSA2MCUsXFxyXFxuICAgIDAlIDM1JSxcXHJcXG4gICAgMzUlIDM1JVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gLmRlbGV0ZUJ0bjpob3ZlcixcXHJcXG4ucHJvamVjdCAuZGVsZXRlQnRuOmhvdmVyLFxcclxcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50IHtcXHJcXG4gIGhlaWdodDogMS41ZW07XFxyXFxuICB3aWR0aDogMS41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQ6aG92ZXIsXFxyXFxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQuY2xpY2tlZCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlByb2plY3QgVG9kbyBzZWN0aW9uKi9cXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4ge1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgcm93LWdhcDogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LmV4cGFuZGVkIHNlY3Rpb24ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8sXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gPiBkaXYsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkLFxcclxcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSxcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAwLjI1ZW07XFxyXFxufVxcclxcblxcclxcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyLFxcclxcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyIGRpdixcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIgZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSBkaXYsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlIGRpdiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHdpZHRoOiAwLjVlbTtcXHJcXG4gIGhlaWdodDogMC41ZW07XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBhY2NlbnQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcXHJcXG4gIGFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgc3Bhbi50b2RvVGl0bGUsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIHNwYW4udG9kb1RpdGxlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xcclxcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmRpdi50b2RvIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyBzcGFuLnRvZG9UaXRsZSxcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gc3Bhbi50b2RvVGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHdpZ2dsZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbiAgMzAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xcclxcbiAgfVxcclxcbiAgNjUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgd2lnZ2xlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICB9XFxyXFxuICAzMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMC43NSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMC43NSk7XFxyXFxuICB9XFxyXFxuICA0MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSwgMS4yNSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSwgMS4yNSk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSwgMC44NSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSwgMC44NSk7XFxyXFxuICB9XFxyXFxuICA2NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XFxyXFxuICB9XFxyXFxuICA3NSUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RDb250YWluZXJFdmVudHNIYW5kbGVyLCByZW5kZXJUb2RvRGlhbG9nIH0gZnJvbSBcIi4vSlMvRXZlbnRzXCI7XHJcbmltcG9ydCB7IHJlbmRlckFzaWRlIH0gZnJvbSBcIi4vSlMvVUlcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy9pZiBhbnkgZWxlbWVudCBuZWVkcyB0byBiZSBkaW5hbWljYWxseSByZW5kZXJlZFxyXG4gIHJlbmRlckFzaWRlKCk7XHJcbiAgcmVuZGVyVG9kb0RpYWxvZygpO1xyXG4gIHByb2plY3RDb250YWluZXJFdmVudHNIYW5kbGVyKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiYXNzaWduIiwidGFyZ2V0Iiwib2JqZWN0IiwiVHlwZUVycm9yIiwicHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjbG9uZU9iamVjdCIsImRlZmF1bHRMb2NhbGUiLCJkZWZhdWx0T3B0aW9ucyIsImdldERlZmF1bHRPcHRpb25zIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJuZXdPcHRpb25zIiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsImRhdGUiLCJ1dGNEYXRlIiwiRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInNldFVUQ0Z1bGxZZWFyIiwiZ2V0VGltZSIsInJlcXVpcmVkQXJncyIsInJlcXVpcmVkIiwiYXJncyIsInJvdW5kaW5nTWFwIiwiY2VpbCIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwidHJ1bmMiLCJ2YWx1ZSIsImRlZmF1bHRSb3VuZGluZ01ldGhvZCIsImdldFJvdW5kaW5nTWV0aG9kIiwibWV0aG9kIiwidG9JbnRlZ2VyIiwiZGlydHlOdW1iZXIiLCJOYU4iLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsInRvRGF0ZSIsImFkZERheXMiLCJkaXJ0eURhdGUiLCJkaXJ0eUFtb3VudCIsImFyZ3VtZW50cyIsImFtb3VudCIsInNldERhdGUiLCJhZGRXZWVrcyIsImRheXMiLCJjb21wYXJlQXNjIiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiZGF0ZUxlZnQiLCJkYXRlUmlnaHQiLCJkaWZmIiwiZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMiLCJ5ZWFyRGlmZiIsIm1vbnRoRGlmZiIsImRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyIsImlzTGFzdERheU9mTW9udGgiLCJkaWZmZXJlbmNlSW5Nb250aHMiLCJzaWduIiwiZGlmZmVyZW5jZSIsImFicyIsInJlc3VsdCIsInNldE1vbnRoIiwiaXNMYXN0TW9udGhOb3RGdWxsIiwiZGlmZmVyZW5jZUluU2Vjb25kcyIsIm9wdGlvbnMiLCJyb3VuZGluZ01ldGhvZCIsImVuZE9mRGF5Iiwic2V0SG91cnMiLCJlbmRPZk1vbnRoIiwibW9udGgiLCJzZXRGdWxsWWVhciIsImRpc3RhbmNlSW5Xb3JkcyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJub3ciLCJNSU5VVEVTX0lOX0RBWSIsIk1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTIiwiTUlOVVRFU19JTl9NT05USCIsIk1JTlVURVNfSU5fVFdPX01PTlRIUyIsImZvcm1hdERpc3RhbmNlIiwiZGlydHlCYXNlRGF0ZSIsIl9yZWYiLCJfb3B0aW9ucyRsb2NhbGUiLCJsb2NhbGUiLCJSYW5nZUVycm9yIiwiY29tcGFyaXNvbiIsImxvY2FsaXplT3B0aW9ucyIsImFkZFN1ZmZpeCIsIkJvb2xlYW4iLCJzZWNvbmRzIiwib2Zmc2V0SW5TZWNvbmRzIiwibWludXRlcyIsIm1vbnRocyIsImluY2x1ZGVTZWNvbmRzIiwiaG91cnMiLCJuZWFyZXN0TW9udGgiLCJtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIiwieWVhcnMiLCJnZXREYXlzSW5Nb250aCIsInllYXIiLCJtb250aEluZGV4IiwibGFzdERheU9mTW9udGgiLCJpc0JlZm9yZSIsImRpcnR5RGF0ZVRvQ29tcGFyZSIsImRhdGVUb0NvbXBhcmUiLCJidWlsZEZvcm1hdExvbmdGbiIsIndpZHRoIiwiU3RyaW5nIiwiZGVmYXVsdFdpZHRoIiwiZm9ybWF0IiwiZm9ybWF0cyIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJjb250ZXh0IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJpbmRleCIsImFyZ3VtZW50Q2FsbGJhY2siLCJidWlsZE1hdGNoRm4iLCJzdHJpbmciLCJtYXRjaFBhdHRlcm4iLCJtYXRjaFBhdHRlcm5zIiwiZGVmYXVsdE1hdGNoV2lkdGgiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsImZpbmRJbmRleCIsInBhdHRlcm4iLCJ0ZXN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0Iiwic2xpY2UiLCJwcmVkaWNhdGUiLCJhcnJheSIsImJ1aWxkTWF0Y2hQYXR0ZXJuRm4iLCJwYXJzZVJlc3VsdCIsInBhcnNlUGF0dGVybiIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJ0b2tlbiIsImNvdW50IiwidG9rZW5WYWx1ZSIsInJlcGxhY2UiLCJkYXRlRm9ybWF0cyIsImZ1bGwiLCJtZWRpdW0iLCJ0aW1lRm9ybWF0cyIsImRhdGVUaW1lRm9ybWF0cyIsImZvcm1hdExvbmciLCJ0aW1lIiwiZGF0ZVRpbWUiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9kYXkiLCJ0b21vcnJvdyIsIm5leHRXZWVrIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsIl9vcHRpb25zIiwiZXJhVmFsdWVzIiwibmFycm93IiwiYWJicmV2aWF0ZWQiLCJ3aWRlIiwicXVhcnRlclZhbHVlcyIsIm1vbnRoVmFsdWVzIiwiZGF5VmFsdWVzIiwiZGF5UGVyaW9kVmFsdWVzIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzIiwib3JkaW5hbE51bWJlciIsInJlbTEwMCIsImxvY2FsaXplIiwiZXJhIiwicXVhcnRlciIsImRheSIsImRheVBlcmlvZCIsIm1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4iLCJwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIiwibWF0Y2hFcmFQYXR0ZXJucyIsInBhcnNlRXJhUGF0dGVybnMiLCJhbnkiLCJtYXRjaFF1YXJ0ZXJQYXR0ZXJucyIsInBhcnNlUXVhcnRlclBhdHRlcm5zIiwibWF0Y2hNb250aFBhdHRlcm5zIiwicGFyc2VNb250aFBhdHRlcm5zIiwibWF0Y2hEYXlQYXR0ZXJucyIsInBhcnNlRGF5UGF0dGVybnMiLCJtYXRjaERheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlSW50IiwiY29kZSIsIndlZWtTdGFydHNPbiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsIl90eXBlb2YiLCJhcmd1bWVudCIsImFyZ1N0ciIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJzdGFjayIsInJhbmRvbVVVSUQiLCJjcnlwdG8iLCJiaW5kIiwiZ2V0UmFuZG9tVmFsdWVzIiwicm5kczgiLCJVaW50OEFycmF5Iiwicm5nIiwidmFsaWRhdGUiLCJieXRlVG9IZXgiLCJ1bnNhZmVTdHJpbmdpZnkiLCJhcnIiLCJvZmZzZXQiLCJ0b0xvd2VyQ2FzZSIsInV1aWQiLCJuYXRpdmUiLCJ2NCIsImJ1ZiIsInJuZHMiLCJyYW5kb20iLCJSRUdFWCIsIiQiLCIkJCIsIkxvY2FsU3RvcmFnZSIsIlRvZG9Mb2NhbFN0b3JhZ2UiLCJUb2RvRmFjdG9yeSIsInZhbGlkYXRlVG9kbyIsInRvZG9Gb3JtIiwidmFsaWQiLCJlbGVtZW50cyIsInRvZG9UaXRsZSIsImZvY3VzIiwidG9kb0Rlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsIlRvZG9DcmVhdGlvbkNvbnRyb2xsZXIiLCJfZ2V0VG9kb0Zvcm1EYXRhIiwiZ2V0VG9kb0Zvcm1EYXRhIiwidGl0bGUiLCJwcmlvcml0eSIsImRlc2NyaXB0aW9uIiwidG9kb09iaiIsImFkZFRvZG8iLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVuZGVyQXNpZGVGaWVsZENvbnRlbnQiLCJ0b2RvQ3JlYXRpb25Gcm9tRm9ybSIsImZvcm0iLCJfZ2V0VG9kb0Zvcm1EYXRhMiIsImRpc3BsYXlEaWFsb2ciLCJoaWRlRGlhbG9nIiwicmVuZGVyQWN0aXZlTGlDb250ZW50IiwicmVuZGVyQXNpZGUiLCJUb2RvRGlhbG9nQ29tcG9uZW50IiwiZ2V0RE9NVG9kb0Zyb21FbGVtZW50IiwiZ2V0VG9kb0RpdkZyb21CdG4iLCJhZGRUb2RvQnRuIiwiYXNpZGVFbGVtZW50c0NsaWNrIiwiZXZlbnQiLCJhc2lkZUVsZW1lbnRzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhY3RpdmVBc2lkZUVsZW1lbnRzIiwiZmlsdGVyIiwiZWwiLCJjb250YWlucyIsImZvckVhY2giLCJyZW1vdmUiLCJsb2NhbE5hbWUiLCJoYW5kbGVEaWFsb2dFdmVudHMiLCJtYXRjaGVzIiwidmFsaWRhdGVUb2RvRm9ybSIsImRpYWxvZyIsInF1ZXJ5U2VsZWN0b3IiLCJ0b0VkaXRUb2RvIiwiZ2V0VG9kbyIsImdldEF0dHJpYnV0ZSIsInNhdmVUb2RvIiwidG9kb0RpdiIsImxvZyIsInJlbmRlclRvZG9EaWFsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwidGl0bGVWYWx1ZSIsImRhdGVWYWx1ZSIsImRlc2NyaXB0aW9uVmFsdWUiLCJsYXN0QnV0dG9uVGV4dCIsImVsZW1lbnQiLCJldmVyeSIsInByb2plY3RDb250YWluZXJFdmVudHNIYW5kbGVyIiwidG9kbyIsInByaW9yaXR5VmFsdWUiLCJyZW1vdmVUb2RvIiwiY2hlY2tlZCIsInV1aWR2NCIsInByb2plY3RFeHRlbnNpb24iLCJwcm9qZWN0SWQiLCJwcm95ZWN0VGl0bGUiLCJkdWVEYXRlRXh0ZW5zaW9uIiwiY2hlY2tlZEV4dGVuc2lvbiIsInByaW9yaXRpZXNFeHRlbnNpb24iLCJkZXNjcmlwdGlvbkV4dGVuc2lvbiIsImV4dGVuc2lvbnNBcnJheSIsInRvZG9FeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImJhc2VPYmoiLCJleHRlbnNpb24iLCJiYXNpY0RhdGEiLCJiYXNpYyIsImNvbXBvc2l0ZSIsImNyZWF0ZSIsInRvZG9zIiwiZ2V0VG9kb3MiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlVG9kb3MiLCJzZXRJdGVtIiwidW5zaGlmdCIsInRvZG9JZCIsInQiLCJBc2lkZUNvbXBvbmVudCIsImdldFRvZG9MaXN0RmllbGRzIiwiVG9kb0NvbXBvbmVudCIsImFkZFdlZWtzRnJvbURhdGUiLCJpc0RhdGVCZWZvcmVPdGhlciIsImRpdlByb2plY3RDb3RhaW5lciIsImFzaWRlRmllbGRDb21wb25lbnRzIiwiYXNpZGUiLCJ1bCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJmaWVsZCIsImxpIiwiX0FzaWRlQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic3BhbiIsImFjdGl2ZSIsImFwcGVuZCIsImVyciIsImUiLCJmIiwiY29udGVudFJlbmRlcmVyIiwiYWxsIiwicmVuZGVyQWxsVG9kb3NGaWVsZCIsImltcG9ydGFudCIsInJlbmRlckltcG9ydGFudFRvZG9zIiwicmVuZGVyTmV4dFdlZWtUb2RvcyIsInJlbmRlck5leHRNb250aFRvZG9zIiwiYWN0aXZlRWxlbWVudCIsInJlcGxhY2VDaGlsZHJlbiIsInRpdGxlRWwiLCJhc2lkZUZpZWxkVGV4dCIsImZpcnN0Q2hpbGQiLCJjaGlsZE5vZGVzIiwidGV4dENvbnRlbnQiLCJyZW5kZXJET01Ub2RvIiwiRE9NVG9kbyIsImxpbWl0IiwicmVtb3ZlQ2hpbGQiLCJpbm5lckhUTUwiLCJpbWFnZSIsIm5hbWUiLCJvdGhlckNvbXBvbmVudHMiLCJBTExfU1ZHIiwiYWxsRmllbGQiLCJJTVBPUlRBTlRfU1ZHIiwiaW1wb3J0YW50RmllbGQiLCJORVhUXzdfREFZU19TVkciLCJuZXh0N0RheXNGaWVsZCIsIk5FWFRfTU9OVEhfU1ZHIiwibmV4dE1vbnRoRmllbGQiLCJ0b2RvTGlzdEZpZWxkcyIsIlRvZG9MaXN0IiwidGltZURpc3RhbmNlRnJvbU5vdyIsInNldEF0dHJpYnV0ZSIsIl9yZWYkdGl0bGVWYWx1ZSIsIl9yZWYkaWQiLCJfcmVmJGRhdGVWYWx1ZSIsIl9yZWYkcHJpb3JpdHlWYWx1ZSIsIl9yZWYkZGVzY3JpcHRpb25WYWx1ZSIsIl9yZWYkbGFzdEJ1dHRvblRleHQiLCJudW1iZXJPZldlZWtzIiwiZ2V0RGF5c01vbnRoIiwiZGF0ZUxpbWl0Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RGlhbG9nRnJvbUNoaWxkIiwiY2hpbGQiLCJidG4iLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==