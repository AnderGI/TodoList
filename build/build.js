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

/***/ "./src/JS/COMPONENTS/DialogDisplayerButton.js":
/*!****************************************************!*\
  !*** ./src/JS/COMPONENTS/DialogDisplayerButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogDisplayerButton: () => (/* binding */ DialogDisplayerButton)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function DialogDisplayerButton(additionalClases) {
  var btn = document.createElement("button");
  btn.setAttribute("class", "dialogDisplayer");
  var _iterator = _createForOfIteratorHelper(additionalClases),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var addiitionalClass = _step.value;
      btn.classList.add(addiitionalClass);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return btn;
}

/***/ }),

/***/ "./src/JS/COMPONENTS/ProjectComponent.js":
/*!***********************************************!*\
  !*** ./src/JS/COMPONENTS/ProjectComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
var ProjectComponent = function ProjectComponent(_ref) {
  var title = _ref.title,
    id = _ref.id;
  var projectDiv = document.createElement("div");
  projectDiv.setAttribute("class", "project");
  projectDiv.setAttribute("data-id", id);
  projectDiv.innerHTML = "\n  <section class=\"header\">\n    <span>\n      <span class=\"text\">".concat(title, "</span>\n    </span>\n    <span>\n      <button class=\"expandContent\"></button>\n      <button class=\"deleteBtn deleteProject\"></button>\n    </span>\n  </section>\n  <section class=\"main\">\n    \n  </section>\n\n    ");
  return projectDiv;
};

/***/ }),

/***/ "./src/JS/COMPONENTS/TodoComponent.js":
/*!********************************************!*\
  !*** ./src/JS/COMPONENTS/TodoComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILITIES/DateFns */ "./src/JS/UTILITIES/DateFns.js");

var TodoComponent = function TodoComponent(todoObj) {
  var title = todoObj.title,
    dueDate = todoObj.dueDate,
    id = todoObj.id;
  var todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");
  todoDiv.setAttribute("data-id", id);
  todoDiv.innerHTML = "\n  <div>\n    <input type=\"checkbox\" name=\"todoChecked\" id=\"todoChecked\" />\n    <span class=\"todoTitle\">".concat(title, ", ").concat((0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_0__.timeDistanceFromNow)(dueDate), "</span>\n    </div>\n  <div>\n    <div class=\"showMore\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <button class=\"deleteBtn deleteTodo\"></button>\n  </div>\n  ");
  return todoDiv;
};

/***/ }),

/***/ "./src/JS/COMPONENTS/TodoListFieldComponent.js":
/*!*****************************************************!*\
  !*** ./src/JS/COMPONENTS/TodoListFieldComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoListField: () => (/* binding */ TodoListField)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TodoListField(component) {
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

/***/ "./src/JS/CONTROLLER/Controller.js":
/*!*****************************************!*\
  !*** ./src/JS/CONTROLLER/Controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoCreationController: () => (/* binding */ TodoCreationController),
/* harmony export */   handleProjectCreation: () => (/* binding */ handleProjectCreation)
/* harmony export */ });
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
/* harmony import */ var _COMPONENTS_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../COMPONENTS/ProjectComponent */ "./src/JS/COMPONENTS/ProjectComponent.js");
/* harmony import */ var _MODEL_ProjectFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MODEL/ProjectFactory */ "./src/JS/MODEL/ProjectFactory.js");
/* harmony import */ var _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MODEL/LocalStorageSingleton */ "./src/JS/MODEL/LocalStorageSingleton.js");
/* harmony import */ var _MODEL_TodoFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MODEL/TodoFactory */ "./src/JS/MODEL/TodoFactory.js");
/* harmony import */ var _VIEW_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../VIEW/UI */ "./src/JS/VIEW/UI.js");






function handleProjectCreation() {
  //validar
  if (validateProjectCreation()) {
    (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newProject").classList.add("hidden");
    var project = (0,_MODEL_ProjectFactory__WEBPACK_IMPORTED_MODULE_2__.ProyectFactory)((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newProject #name").value);
    (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("div.projectContainer").append((0,_COMPONENTS_ProjectComponent__WEBPACK_IMPORTED_MODULE_1__.ProjectComponent)(project));
    _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.addProject(project);
  }
  //crear, renderizar, guardar en local storage
}

function validateProjectCreation() {
  var input = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newProject #name");
  var valid = false;
  if (input.value === "") {
    input.focus();
    input.value = "the field must not be empty";
    input.classList.add("invalid");
    input.addEventListener("input", function () {
      this.classList.remove("invalid");
    });
  } else {
    valid = true;
  }
  return valid;
}

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
var getTodoFormData = function getTodoFormData(todoForm) {
  return Object.assign({}, {
    title: todoForm.elements.todoTitle.value
  }, {
    dueDate: todoForm.elements.dueDate.value
  }, {
    priority: todoForm.elements.priority.value
  }, {
    description: todoForm.elements.todoDescription.value
  });
};
var TodoCreationController = function TodoCreationController() {
  var todoForm = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newTodo form");
  //validar todo y si es valido crealo
  if (validateTodo(todoForm)) {
    var _getTodoFormData = getTodoFormData(todoForm),
      title = _getTodoFormData.title,
      dueDate = _getTodoFormData.dueDate,
      priority = _getTodoFormData.priority,
      description = _getTodoFormData.description;
    var todoObj = (0,_MODEL_TodoFactory__WEBPACK_IMPORTED_MODULE_4__.TodoFactory)(title);
    todoObj.description = description;
    todoObj.dueDate = dueDate;
    todoObj.priority = priority;
    _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.TodoLocalStorage.addTodo(todoObj);
    //close dialog
    todoForm.parentElement.parentElement.classList.add("hidden");
    //render the content
    (0,_VIEW_UI__WEBPACK_IMPORTED_MODULE_5__.renderAsideFieldContent)();
  }
};

/***/ }),

/***/ "./src/JS/MODEL/LocalStorageSingleton.js":
/*!***********************************************!*\
  !*** ./src/JS/MODEL/LocalStorageSingleton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorage: () => (/* binding */ LocalStorage),
/* harmony export */   TodoLocalStorage: () => (/* binding */ TodoLocalStorage)
/* harmony export */ });
//get the id
var projects;
var getProjects = function getProjects() {
  projects = JSON.parse(localStorage.getItem("projects")) || [];
  return projects;
};
var saveProjects = function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
};
var addProject = function addProject(project) {
  getProjects();
  projects.unshift(project);
  saveProjects(); //temporal it will be saved once the window is closed in an event
};

var removeProject = function removeProject(projectId) {
  projects = getProjects();
  projectId = idValidation(projectId);
  projects = projects.filter(function (p) {
    return p.id !== projectId;
  });
  saveProjects();
};

//Todo Addition
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
  todoId = idValidation(todoId);
  getTodos();
  todos = todos.filter(function (t) {
    return t.id !== todoId;
  });
  saveTodos();
};

//Modify todo -> Get and Save at the same index
var getTodo = function getTodo(todoId) {
  todoId = idValidation(todoId);
  getTodos();
  var todo = todos.filter(function (t) {
    return t.id === todoId;
  })[0];
  var index = todos.findIndex(function (t) {
    return t.id === todoId;
  });
  saveTodos();
  return {
    todo: todo,
    index: index
  };
};
var saveTodo = function saveTodo(_ref) {
  var todo = _ref.todo,
    index = _ref.index;
  getTodos();
  todos[index] = todo;
  saveTodos();
};
function idValidation(id) {
  if (typeof id !== "number") {
    id = parseInt(id);
  }
  return id;
}
var LocalStorage = {
  getProjects: getProjects,
  saveProjects: saveProjects,
  addProject: addProject,
  removeProject: removeProject
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

/***/ "./src/JS/MODEL/ProjectFactory.js":
/*!****************************************!*\
  !*** ./src/JS/MODEL/ProjectFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProyectFactory: () => (/* binding */ ProyectFactory)
/* harmony export */ });
var checkedExtension = function checkedExtension() {
  return {
    _checked: false
  };
};
var extensionsArray = [checkedExtension];
var proyectExtension = function proyectExtension(extensions) {
  //add the extensions to an empty object
  //which will be the prototype that holds the extensions
  var extensionsProto = {};
  extensions.forEach(function (extension) {
    Object.assign(extensionsProto, extension());
  });
  return extensionsProto;
};
var ProyectFactory = function ProyectFactory(title) {
  var proyectBasicData = {
    id: Date.now(),
    title: title
  };

  //create object that hold all the methods
  var basic = proyectExtension(extensionsArray);
  //assign to an empty object all the extensions
  var composite = Object.assign({}, basic);
  //create a proyect object from the composite object (is its prototype)
  return Object.assign(Object.create(composite), proyectBasicData);
};

/***/ }),

/***/ "./src/JS/MODEL/TodoFactory.js":
/*!*************************************!*\
  !*** ./src/JS/MODEL/TodoFactory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoFactory: () => (/* binding */ TodoFactory)
/* harmony export */ });
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

var extensionsArray = [dueDateExtension, prioritiesExtension, descriptionExtension];
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
    id: Date.now()
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

/***/ "./src/JS/MODEL/TodoListSingleton.js":
/*!*******************************************!*\
  !*** ./src/JS/MODEL/TodoListSingleton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoList: () => (/* binding */ TodoList),
/* harmony export */   getTodoListFields: () => (/* binding */ getTodoListFields)
/* harmony export */ });
/* harmony import */ var _COMPONENTS_DialogDisplayerButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../COMPONENTS/DialogDisplayerButton */ "./src/JS/COMPONENTS/DialogDisplayerButton.js");

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
var PROJECTS_SVG = "<svg\nviewBox=\"0 0 512 512\"\nversion=\"1.1\"\nxmlns=\"http://www.w3.org/2000/svg\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nfill=\"#000000\"\n>\n<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n<g\n  id=\"SVGRepo_tracerCarrier\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n></g>\n<g id=\"SVGRepo_iconCarrier\">\n  <title>tasks-all</title>\n  <g\n    id=\"Page-1\"\n    stroke=\"none\"\n    stroke-width=\"1\"\n    fill=\"none\"\n    fill-rule=\"evenodd\"\n  >\n    <g\n      id=\"Combined-Shape\"\n      fill=\"#000000\"\n      transform=\"translate(70.530593, 46.125620)\"\n    >\n      <path\n        d=\"M185.469407,39.207713 L356.136074,39.207713 L356.136074,81.8743797 L185.469407,81.8743797 L185.469407,39.207713 Z M185.469407,188.541046 L356.136074,188.541046 L356.136074,231.207713 L185.469407,231.207713 L185.469407,188.541046 Z M185.469407,337.87438 L356.136074,337.87438 L356.136074,380.541046 L185.469407,380.541046 L185.469407,337.87438 Z M119.285384,-7.10542736e-15 L144.649352,19.5107443 L68.6167605,118.353113 L2.84217094e-14,58.3134476 L21.0721475,34.2309934 L64.0400737,71.8050464 L119.285384,-7.10542736e-15 Z M119.285384,149.333333 L144.649352,168.844078 L68.6167605,267.686446 L2.84217094e-14,207.646781 L21.0721475,183.564327 L64.0400737,221.13838 L119.285384,149.333333 Z M119.285384,298.666667 L144.649352,318.177411 L68.6167605,417.01978 L2.84217094e-14,356.980114 L21.0721475,332.89766 L64.0400737,370.471713 L119.285384,298.666667 Z\"\n      ></path>\n    </g>\n  </g>\n</g>\n</svg>";
var projectsField = {
  image: PROJECTS_SVG,
  name: "Projects",
  otherComponents: [(0,_COMPONENTS_DialogDisplayerButton__WEBPACK_IMPORTED_MODULE_0__.DialogDisplayerButton)(["newProject"])]
};
var todoListFields = [allField, importantField, next7DaysField, nextMonthField, projectsField];
function getTodoListFields() {
  return todoListFields;
}
var TodoList = {
  getTodoListFields: getTodoListFields
};

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
/* harmony export */   getDOMProjectFromElement: () => (/* binding */ getDOMProjectFromElement),
/* harmony export */   getDOMTodoFromElement: () => (/* binding */ getDOMTodoFromElement)
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
var getDOMProjectFromElement = function getDOMProjectFromElement(element) {
  return element.parentElement.parentElement.parentElement;
};

/***/ }),

/***/ "./src/JS/VIEW/RegisterEvents.js":
/*!***************************************!*\
  !*** ./src/JS/VIEW/RegisterEvents.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerEvents: () => (/* binding */ registerEvents)
/* harmony export */ });
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
/* harmony import */ var _CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONTROLLER/Controller */ "./src/JS/CONTROLLER/Controller.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/JS/VIEW/UI.js");
/* harmony import */ var _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MODEL/LocalStorageSingleton */ "./src/JS/MODEL/LocalStorageSingleton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var showHideAside = function showHideAside() {
  var menuBtn = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("button.menu");
  var aside = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("body > main > aside");
  menuBtn.addEventListener("click", function () {
    aside.classList.toggle("hidden");
    //the main container will have a different styling if aside is displayed
    aside.classList.contains("hidden") ? (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("body > main").classList.remove("asideOpen") || "" : (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("body > main").classList.add("asideOpen");
  });
};
var displayDailog = function displayDailog() {
  //the dialog displayer button has that class and another one to differentiate dialogs
  //the second class will be the one the dialog has
  var dialogDisplayerBtns = _toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("button.dialogDisplayer"));
  dialogDisplayerBtns.forEach(function (el) {
    el.addEventListener("click", showDialog);
  });
  function showDialog() {
    var dialogEl = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.".concat(_toConsumableArray(this.classList)[1]));
    var isDialogHidden = dialogEl.classList.contains("hidden");
    if (isDialogHidden) {
      dialogEl.classList.remove("hidden");
    }
  }
};
var closeDialog = function closeDialog() {
  //two ways -> span.closeDialog || button.closeDialog (in every dialog)
  var dialogClosingElements = _toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("dialog .closeDialog"));
  function hideDialog() {
    var dialogEl = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.".concat(_toConsumableArray(this.classList)[1]));
    var isDialogHidden = dialogEl.classList.contains("hidden");
    if (!isDialogHidden) {
      dialogEl.classList.add("hidden");
    }
  }
  dialogClosingElements.forEach(function (el) {
    el.addEventListener("click", hideDialog);
  });
};
var asideElementsClick = function asideElementsClick() {
  //whenever one of the elements of the aside is being clicked
  //add class to element and display title
  var asideElements = _toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("aside > ul > li"));
  asideElements.forEach(function (el) {
    return el.addEventListener("click", toogleActiveClass);
  });
  function toogleActiveClass() {
    var activeElements = asideElements.filter(function (el) {
      return el.classList.contains("active");
    });
    if (activeElements.length > 0) {
      activeElements.forEach(function (el) {
        return el.classList.remove("active");
      });
    }
    this.classList.add("active");
    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.renderAsideFieldContent)();
  }
};
var proyectBtnClicked = function proyectBtnClicked() {
  var addProjectBtn = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newProject footer button:last-child");
  addProjectBtn.addEventListener("click", function () {
    (0,_CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_1__.handleProjectCreation)();
  });
};
function remove(element) {
  var target = element.parentElement.parentElement;
  var warningDialog = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.eliminationWarning");
  var warningDialogRemoveButton = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.eliminationWarning button.remove");
  //set dialog visible
  warningDialog.classList.remove("hidden");
  if (target.localName === "div" && target.classList.contains("todo")) {
    warningDialogRemoveButton.addEventListener("click", function () {
      warningDialog.classList.add("hidden");
      //remove from dom
      target.remove();
      //local storage
      _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.TodoLocalStorage.removeTodo(target.getAttribute("data-id"));
    });
  } else {
    var project = target.parentElement;
    warningDialogRemoveButton.addEventListener("click", function () {
      warningDialog.classList.add("hidden");
      //remove from dom
      project.remove();
      //remove from local storafe
      _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.removeProject(project.getAttribute("data-id"));
    });
  }
}
var addTodoBtnClicked = function addTodoBtnClicked() {
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.newTodo footer button:last-child").addEventListener("click", _CONTROLLER_Controller__WEBPACK_IMPORTED_MODULE_1__.TodoCreationController);
};
var expandTodoContainer = function expandTodoContainer(target) {
  var todoDOMDiv = target.parentElement.parentElement.parentElement;
  todoDOMDiv.classList.toggle("expanded");
  target.classList.toggle("clicked");
};
function handleProjectDOMClicks(event) {
  var target = event.target;
  if (target.localName === "button" && target.classList.contains("expandContent")) {
    //expand project todo container
    expandTodoContainer(target);
  } else if (target.localName === "button" && target.classList.contains("deleteBtn")) {
    //remove project
    remove(target);
  } /*else if (
    target.localName === "div" &&
    target.classList.contains("showMore")
    ) {
    const id = getDOMTodoFromElement(target).getAttribute("data-id");
    //displayTodoInfoDialog(TodoLocalStorage.getTodo(id));
    editTodo(id);
    }*/
}

function displayTodoInfoDialog(todo) {
  var editTodoDialog = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.editTodo");
  editTodoDialog.classList.remove("hidden");
  var editTodoDialogForm = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.editTodo form");
  var title = todo.title,
    description = todo.description,
    priority = todo.priority,
    dueDate = todo.dueDate;
  editTodoDialogForm.elements.todoTitle.value = title;
  editTodoDialogForm.elements.dueDate.value = dueDate;
  editTodoDialogForm.elements.priority.value = priority;
  editTodoDialogForm.elements.todoDescription.value = description;
}
function setNewTodoInfo(todo) {
  var editTodoDialogForm = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("dialog.editTodo form");
  todo.title = editTodoDialogForm.elements.todoTitle.value;
  todo.dueDate = editTodoDialogForm.elements.dueDate.value;
  todo.priority = editTodoDialogForm.elements.priority.value;
  todo.description = editTodoDialogForm.elements.todoDescription.value;
  return todo;
}
var registerEvents = function registerEvents() {
  //ASIDE
  showHideAside();

  //close any dialog
  closeDialog();

  //display nay dialog
  displayDailog();
  asideElementsClick();
  proyectBtnClicked();

  //handle clicks on the project container rather than on every element (expand buttons, remove buttons)
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("div.projectContainer").addEventListener("click", handleProjectDOMClicks);

  //todos
  addTodoBtnClicked();

  //show more div
  (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("div.showMore").addEventListener("click", function () {
    var id = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.getDOMTodoFromElement)(this).getAttribute("data-id");
    var _TodoLocalStorage$get = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.TodoLocalStorage.getTodo(id),
      todo = _TodoLocalStorage$get.todo,
      index = _TodoLocalStorage$get.index;
    displayTodoInfoDialog(todo);
    //edit todo btn
    (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_0__.$)("button.editTodoBtn").addEventListener("click", function () {
      var editedTodo = setNewTodoInfo(todo);

      //TodoLocalStorage.saveTodo({ editedTodo, index });
      console.log(editedTodo);
      console.log(_MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_3__.TodoLocalStorage.getTodos());
      (0,_UI__WEBPACK_IMPORTED_MODULE_2__.renderAsideFieldContent)();
    });
  });
};

/***/ }),

/***/ "./src/JS/VIEW/UI.js":
/*!***************************!*\
  !*** ./src/JS/VIEW/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAside: () => (/* binding */ renderAside),
/* harmony export */   renderAsideFieldContent: () => (/* binding */ renderAsideFieldContent)
/* harmony export */ });
/* harmony import */ var _COMPONENTS_TodoListFieldComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../COMPONENTS/TodoListFieldComponent */ "./src/JS/COMPONENTS/TodoListFieldComponent.js");
/* harmony import */ var _MODEL_TodoListSingleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MODEL/TodoListSingleton */ "./src/JS/MODEL/TodoListSingleton.js");
/* harmony import */ var _UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UTILITIES/Selectors */ "./src/JS/UTILITIES/Selectors.js");
/* harmony import */ var _RegisterEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterEvents */ "./src/JS/VIEW/RegisterEvents.js");
/* harmony import */ var _COMPONENTS_ProjectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../COMPONENTS/ProjectComponent */ "./src/JS/COMPONENTS/ProjectComponent.js");
/* harmony import */ var _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MODEL/LocalStorageSingleton */ "./src/JS/MODEL/LocalStorageSingleton.js");
/* harmony import */ var _COMPONENTS_TodoComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../COMPONENTS/TodoComponent */ "./src/JS/COMPONENTS/TodoComponent.js");
/* harmony import */ var _UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UTILITIES/DateFns */ "./src/JS/UTILITIES/DateFns.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








var divProjectCotainer = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_2__.$)("div.projectContainer");
function renderAside() {
  var aside = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_2__.$)("body > main > aside");
  var ul = document.createElement("ul");
  var fields = (0,_MODEL_TodoListSingleton__WEBPACK_IMPORTED_MODULE_1__.getTodoListFields)(); //retreive fields with name, svg an other components (optional)
  var _iterator = _createForOfIteratorHelper(fields),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;
      var li = document.createElement("li");
      var _TodoListField = (0,_COMPONENTS_TodoListFieldComponent__WEBPACK_IMPORTED_MODULE_0__.TodoListField)(field),
        component = _TodoListField.span,
        active = _TodoListField.active; // create fields with name, svg an other components (optional)
      li.append(component);
      if (active) li.classList.add("active");
      ul.append(li);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  aside.append(ul);
}
var contentRenderer = {
  all: renderAllTodosField,
  important: renderImportantTodos,
  "next 7 days": renderNextWeekTodos,
  "next month": renderNextMonthTodos,
  projects: renderProjectsField
};
function renderAsideFieldContent() {
  divProjectCotainer.replaceChildren();
  //set content
  renderActiveAsideFieldContent();
}
function renderActiveAsideFieldContent() {
  //get the list
  var asideElements = _toConsumableArray((0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_2__.$$)("aside > ul > li"));
  //get the active element from it
  var activeElement = asideElements.filter(function (el) {
    return el.classList.contains("active");
  })[0];
  //set the data from the active element
  var titleEl = (0,_UTILITIES_Selectors__WEBPACK_IMPORTED_MODULE_2__.$)("body > main > section > h1");
  var asideFieldText = activeElement.firstChild.childNodes[1].textContent;
  titleEl.textContent = asideFieldText;
  //render the dom components taking into account the active element
  contentRenderer[titleEl.textContent.toLowerCase()]();
}

//PROJECT DOM RENDERING
var renderDOMProjects = function renderDOMProjects(projectObj) {
  //create html component
  var DOMProject = (0,_COMPONENTS_ProjectComponent__WEBPACK_IMPORTED_MODULE_4__.ProjectComponent)(projectObj);
  divProjectCotainer.append(DOMProject);
};
function renderProjectsField() {
  var projects = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getProjects();
  if (projects.length > 0) {
    projects.forEach(function (p) {
      return renderDOMProjects(p);
    });
  }
}

//ALL FIELD
function renderDOMTodo(todoObj) {
  var DOMTodo = (0,_COMPONENTS_TodoComponent__WEBPACK_IMPORTED_MODULE_6__.TodoComponent)(todoObj);
  divProjectCotainer.append(DOMTodo);
}
function renderAllTodosField() {
  var todos = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__.TodoLocalStorage.getTodos();
  if (todos.length > 0) {
    todos.forEach(function (t) {
      return renderDOMTodo(t);
    });
  }
}

//IMPORTANT FIELD
function renderImportantTodos() {
  var todos = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__.TodoLocalStorage.getTodos().filter(function (t) {
    return t.priority.toLowerCase() === "high";
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}

//NEXT WEEK (7 days or 1 week from todays date)
function renderNextWeekTodos(number) {
  var today = new Date();
  var limit = (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_7__.addWeeksFromDate)(today, 1);
  var todos = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__.TodoLocalStorage.getTodos().filter(function (t) {
    return (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_7__.isDateBeforeOther)(Date.parse(t.dueDate), limit);
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}
function renderNextMonthTodos() {
  var today = new Date();
  var limit = (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_7__.addWeeksFromDate)(today, 4);
  var todos = _MODEL_LocalStorageSingleton__WEBPACK_IMPORTED_MODULE_5__.TodoLocalStorage.getTodos().filter(function (t) {
    return (0,_UTILITIES_DateFns__WEBPACK_IMPORTED_MODULE_7__.isDateBeforeOther)(Date.parse(t.dueDate), limit);
  });
  todos.forEach(function (t) {
    return renderDOMTodo(t);
  });
}

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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  --navBackground: #f59e0b;\r\n  --backgroundColor: #fffbeb;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 10% 90%;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  background-color: var(--backgroundColor);\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n/*NAVBAR*/\r\nbody > nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em 3em;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\nbody > nav span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 2em;\r\n}\r\n\r\nbody > nav button {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5em 0.75em;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nbody > nav button:hover,\r\nbody > nav button:hover div {\r\n  cursor: pointer;\r\n\r\n  transform: scale(1.5);\r\n}\r\n\r\nbody > nav button > div {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: black;\r\n}\r\n/*Navbar button styling*/\r\n\r\nbutton.menu div {\r\n  clip-path: polygon(\r\n    0% 5%,\r\n    100% 5%,\r\n    100% 25%,\r\n    0% 25%,\r\n    0% 40%,\r\n    100% 40%,\r\n    100% 60%,\r\n    0% 60%,\r\n    0% 75%,\r\n    100% 75%,\r\n    100% 95%,\r\n    0% 95%\r\n  );\r\n}\r\n\r\nbutton.newTodo div {\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\nbutton.today div {\r\n  clip-path: polygon(\r\n    50% 0%,\r\n    70% 15%,\r\n    70% 2%,\r\n    90% 2%,\r\n    90% 30%,\r\n    100% 40%,\r\n    100% 100%,\r\n    65% 100%,\r\n    65% 65%,\r\n    35% 65%,\r\n    35% 100%,\r\n    0% 100%,\r\n    0% 40%\r\n  );\r\n}\r\n\r\n/*Main Content*/\r\nmain {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n}\r\n\r\naside.hidden {\r\n  opacity: 0;\r\n  transform: translateX(-100%);\r\n  display: none;\r\n}\r\n\r\naside {\r\n  margin-top: 0px;\r\n  position: relative;\r\n  width: 30vw;\r\n  height: 100%;\r\n  background-color: #ffedd5;\r\n  transition: opacity ease 500ms, transform ease 500ms;\r\n}\r\n\r\naside > ul {\r\n  padding: 0.5em 1em;\r\n  margin-top: 0em;\r\n}\r\n\r\naside ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  font-size: 1rem;\r\n}\r\n\r\naside ul li {\r\n  padding: 0.25em 1em;\r\n  border-radius: 5px;\r\n}\r\n\r\naside ul li:hover,\r\naside ul li.active {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\naside ul li span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 1em;\r\n  position: relative;\r\n}\r\n\r\naside svg {\r\n  width: 2em;\r\n  height: 2em;\r\n  stroke: black;\r\n}\r\n\r\naside button.newProject {\r\n  width: 1em;\r\n  height: 1em;\r\n  background-color: black;\r\n  border: none;\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n  position: absolute;\r\n  right: 1em;\r\n}\r\n\r\naside button.newProject:hover {\r\n  transform: scale(1.5);\r\n  cursor: pointer;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n/*Main container */\r\n\r\nbody > main.asideOpen {\r\n  display: grid;\r\n  grid-template-columns: 30% 70%;\r\n  grid-template-rows: 1;\r\n}\r\n\r\nbody > main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\nbody > main > section {\r\n  padding: 1em 4em;\r\n}\r\n\r\nbody > main > section > div.todoContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  justify-content: center;\r\n}\r\n\r\nbody > main.asideOpen > section {\r\n  padding: 1em;\r\n}\r\n\r\nmain > section {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\nmain h1 {\r\n  text-align: center;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n/*Modals*/\r\n\r\ndialog {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  z-index: 2;\r\n  transition: transform ease 500ms, opacity ease 500ms;\r\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);\r\n  display: grid;\r\n  grid-template-rows: 20% 65% 15%;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 1em 2em;\r\n}\r\n\r\ndialog.hidden {\r\n  transform: translateY(100%);\r\n  opacity: 0;\r\n}\r\n\r\ndialog header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ndialog header h6 {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog span.closeDialog:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.5) rotate(45deg);\r\n  background-color: var(--navBackground);\r\n}\r\n\r\ndialog span.closeDialog {\r\n  position: relative;\r\n  width: 1em;\r\n  height: 1em;\r\n  background-color: black;\r\n  transform: rotate(45deg);\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\ndialog footer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  gap: 1.5em;\r\n}\r\n\r\ndialog footer button {\r\n  padding: 0.5em 1em;\r\n  border-radius: 5px;\r\n  font-size: 1rem;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\ndialog footer button:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ndialog footer button:first-child {\r\n  border: 1px solid black;\r\n  color: black;\r\n}\r\n\r\ndialog footer button:first-child:hover {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\ndialog footer button:last-child {\r\n  background-color: var(--navBackground);\r\n  color: snow;\r\n}\r\n\r\ndialog.newProject {\r\n  width: 80vh;\r\n  height: 30vh;\r\n}\r\n\r\ndialog.newProject main {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  column-gap: 1em;\r\n  align-items: center;\r\n}\r\n\r\ndialog.newProject main input[type=\"text\"] {\r\n  padding: 0.5em 1em;\r\n}\r\n\r\ndialog.newProject label {\r\n  font-weight: 600;\r\n  letter-spacing: 0.1em;\r\n  display: block;\r\n}\r\n\r\ndialog.newTodo,\r\ndialog.editTodo {\r\n  width: 50vw;\r\n  height: 70vh;\r\n}\r\n\r\ndialog.newTodo > main form,\r\ndialog.editTodo > main form {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  gap: 2em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1),\r\ndialog.newTodo form section:nth-child(2),\r\ndialog.editTodo form section:nth-child(1),\r\ndialog.editTodo form section:nth-child(2) {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: 1;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2),\r\ndialog.editTodo form section:nth-child(2) {\r\n  column-gap: 2em;\r\n}\r\n\r\ndialog.newTodo form section label,\r\ndialog.editTodo form section label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1) label,\r\ndialog.editTodo form section:nth-child(1) label {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(1) input,\r\ndialog.editTodo form section:nth-child(1) input {\r\n  grid-column-start: 2;\r\n  grid-column-end: 7;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) label:first-of-type,\r\ndialog.editTodo form section:nth-child(2) label:first-of-type {\r\n  grid-column-start: 1;\r\n  grid-column-end: 2;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) input,\r\ndialog.editTodo form section:nth-child(2) input {\r\n  grid-column-start: 2;\r\n  grid-column-end: 4;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) label:last-of-type,\r\ndialog.editTodo form section:nth-child(2) label:last-of-type {\r\n  grid-column-start: 4;\r\n  grid-column-end: 5;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(2) select,\r\ndialog.editTodo form section:nth-child(2) select {\r\n  grid-column-start: 5;\r\n  grid-column-end: 7;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(3),\r\ndialog.editTodo form section:nth-child(3) {\r\n  display: grid;\r\n  grid-template-rows: repeat(2, 1fr);\r\n  grid-template-columns: 1;\r\n}\r\n\r\ndialog.newTodo form section:nth-child(3) textarea,\r\ndialog.editTodo form section:nth-child(3) textarea {\r\n  resize: none;\r\n  padding: 0.5em 1em;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n/*Projects*/\r\ndiv.projectContainer {\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-auto-flow: row;\r\n  row-gap: 1em;\r\n  padding: 1em 2em;\r\n}\r\n\r\ndialog input {\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog input.invalid {\r\n  outline-style: solid;\r\n  outline-width: 2px;\r\n  outline-color: red;\r\n  color: red;\r\n  font-style: italic;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\ndialog.eliminationWarning h6 {\r\n  color: red;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n}\r\n\r\n/*Checkbox animation by henry öhman from codepen*/\r\n.project {\r\n  padding: 1em 3em;\r\n  background-color: #ffedd5;\r\n  border-radius: 20px;\r\n  width: 80%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5em;\r\n}\r\n\r\n.project section.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project .text {\r\n  display: inline-block;\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\n.project span:last-child {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\ndiv.todo .deleteBtn,\r\n.project .deleteBtn {\r\n  height: 1.5em;\r\n  width: 1.5em;\r\n  background-color: black;\r\n  border: none;\r\n  transform: rotate(45deg);\r\n  clip-path: polygon(\r\n    35% 0%,\r\n    65% 0%,\r\n    65% 35%,\r\n    100% 35%,\r\n    100% 60%,\r\n    65% 60%,\r\n    65% 100%,\r\n    35% 100%,\r\n    35% 60%,\r\n    0% 60%,\r\n    0% 35%,\r\n    35% 35%\r\n  );\r\n}\r\n\r\ndiv.todo .deleteBtn:hover,\r\n.project .deleteBtn:hover,\r\n.project .expandContent:hover {\r\n  transform: scale(1.5) rotate(45deg);\r\n  cursor: pointer;\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n.project .expandContent {\r\n  height: 1.5em;\r\n  width: 1.5em;\r\n  background-color: black;\r\n  border: none;\r\n  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n}\r\n\r\n.project .expandContent:hover,\r\n.project .expandContent.clicked {\r\n  cursor: pointer;\r\n  transform: scale(1.5) rotate(90deg);\r\n  background-color: var(--navBackground);\r\n}\r\n\r\n/*Project Todo section*/\r\n.project section.main {\r\n  padding: 1em 2em;\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-auto-flow: row;\r\n  row-gap: 0.5em;\r\n  background-color: var(--backgroundColor);\r\n  border-radius: 10px;\r\n  display: none;\r\n}\r\n\r\n.project.expanded section.main {\r\n  display: block;\r\n}\r\n\r\ndiv.todo,\r\n.project section.main div.todo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5em 3em;\r\n}\r\n\r\ndiv.todo > div,\r\n.project section.main div.todo > div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n\r\ndiv.todo > div:last-child,\r\n.project section.main div.todo > div:last-child {\r\n  gap: 2em;\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore,\r\n.project section.main div.todo > div:last-child div.showMore {\r\n  display: grid;\r\n  grid-template-rows: 1;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 0.25em;\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore:hover,\r\n.project section.main div.todo > div:last-child div.showMore:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.5);\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore:hover div,\r\n.project section.main div.todo > div:last-child div.showMore:hover div {\r\n  background-color: var(--navBackground);\r\n}\r\n\r\ndiv.todo > div:last-child div.showMore div,\r\n.project section.main div.todo > div:last-child div.showMore div {\r\n  border-radius: 50%;\r\n  background-color: black;\r\n  width: 0.5em;\r\n  height: 0.5em;\r\n  pointer-events: none;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"],\r\n.project section.main input[type=\"checkbox\"] {\r\n  width: 2em;\r\n  height: 2em;\r\n  accent-color: var(--navBackground);\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:checked,\r\n.project section.main input[type=\"checkbox\"]:checked {\r\n  -webkit-animation: wiggle 0.4s ease;\r\n  animation: wiggle 0.4s ease;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:checked + span.todoTitle,\r\n.project section.main input[type=\"checkbox\"]:checked + span.todoTitle {\r\n  -webkit-animation: wiggle 0.4s ease;\r\n  animation: wiggle 0.4s ease;\r\n}\r\n\r\ndiv.todo input[type=\"checkbox\"]:hover,\r\n.project section.main input[type=\"checkbox\"]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\ndiv.todo span.todoTitle,\r\n.project section.main span.todoTitle {\r\n  font-size: 1rem;\r\n  letter-spacing: 0.1em;\r\n  font-weight: 700;\r\n}\r\n\r\n@-webkit-keyframes wiggle {\r\n  from {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(1.25, 0.75);\r\n    transform: scale(1.25, 0.75);\r\n  }\r\n  40% {\r\n    -webkit-transform: scale(0.75, 1.25);\r\n    transform: scale(0.75, 1.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.15, 0.85);\r\n    transform: scale(1.15, 0.85);\r\n  }\r\n  65% {\r\n    -webkit-transform: scale(0.95, 1.05);\r\n    transform: scale(0.95, 1.05);\r\n  }\r\n  75% {\r\n    -webkit-transform: scale(1.05, 0.95);\r\n    transform: scale(1.05, 0.95);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n@keyframes wiggle {\r\n  from {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n  30% {\r\n    -webkit-transform: scale(1.25, 0.75);\r\n    transform: scale(1.25, 0.75);\r\n  }\r\n  40% {\r\n    -webkit-transform: scale(0.75, 1.25);\r\n    transform: scale(0.75, 1.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.15, 0.85);\r\n    transform: scale(1.15, 0.85);\r\n  }\r\n  65% {\r\n    -webkit-transform: scale(0.95, 1.05);\r\n    transform: scale(0.95, 1.05);\r\n  }\r\n  75% {\r\n    -webkit-transform: scale(1.05, 0.95);\r\n    transform: scale(1.05, 0.95);\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _JS_VIEW_RegisterEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/VIEW/RegisterEvents */ "./src/JS/VIEW/RegisterEvents.js");
/* harmony import */ var _JS_VIEW_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/VIEW/UI */ "./src/JS/VIEW/UI.js");



window.addEventListener("DOMContentLoaded", function () {
  //if any element needs to be dinamically rendered
  (0,_JS_VIEW_UI__WEBPACK_IMPORTED_MODULE_2__.renderAside)(); //UI
  (0,_JS_VIEW_UI__WEBPACK_IMPORTED_MODULE_2__.renderAsideFieldContent)();
  (0,_JS_VIEW_RegisterEvents__WEBPACK_IMPORTED_MODULE_1__.registerEvents)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxhQUFhLE1BQU0saUJBQWlCLEtBQUssTUFBTSxLQUFLLGlCQUFpQixLQUFLLE1BQU0sS0FBSyxrQkFBa0IsS0FBSyxNQUFNLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLGlCQUFpQixLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixLQUFLLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FB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RjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNvQztBQUNVO0FBQ3BFSSxNQUFNLENBQUN6SixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3REO0VBQ0F5SCx3REFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2ZqSSxvRUFBdUIsQ0FBQyxDQUFDO0VBQ3pCNEgsdUVBQWMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXlzSW5Nb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL0NPTVBPTkVOVFMvRGlhbG9nRGlzcGxheWVyQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL0NPTVBPTkVOVFMvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9DT01QT05FTlRTL1RvZG9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvQ09NUE9ORU5UUy9Ub2RvTGlzdEZpZWxkQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL0NPTlRST0xMRVIvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9NT0RFTC9Mb2NhbFN0b3JhZ2VTaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvTU9ERUwvUHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvTU9ERUwvVG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvTU9ERUwvVG9kb0xpc3RTaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVVRJTElUSUVTL0RhdGVGbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvSlMvVVRJTElUSUVTL1NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9KUy9WSUVXL1JlZ2lzdGVyRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0pTL1ZJRVcvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KTtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcbn07XG5cbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFdlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgd2Vla3MgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDQgd2Vla3MgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFdlZWtzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA0KVxuICogLy89PiBNb24gU2VwIDI5IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkV2Vla3MoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHZhciBkYXlzID0gYW1vdW50ICogNztcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCBkYXlzKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7XG5cbiAgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAgIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjtcblxuICAgIC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH1cblxuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IHNwZWNpZmllcyBpZiBub3cgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBwYXNzZWQgZGF0ZVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIGNvbnN0IGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlVG9Ob3coZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBhc3NpZ24oY2xvbmVPYmplY3Qob3B0aW9ucyksIHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9KTtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRocztcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcblxuICAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpO1xuXG4gICAgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlzSW5Nb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZGF5cyBhcmUgaW4gRmVicnVhcnkgMjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheXNJbk1vbnRoKG5ldyBEYXRlKDIwMDAsIDEpKVxuICogLy89PiAyOVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5Nb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgdmFyIGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoMCk7XG4gIGxhc3REYXlPZk1vbnRoLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoSW5kZXggKyAxLCAwKTtcbiAgbGFzdERheU9mTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBsYXN0RGF5T2ZNb250aC5nZXREYXRlKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gRGlhbG9nRGlzcGxheWVyQnV0dG9uKGFkZGl0aW9uYWxDbGFzZXMpIHtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ0Rpc3BsYXllclwiKTtcclxuICBmb3IgKGNvbnN0IGFkZGlpdGlvbmFsQ2xhc3Mgb2YgYWRkaXRpb25hbENsYXNlcykge1xyXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoYWRkaWl0aW9uYWxDbGFzcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYnRuO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQcm9qZWN0Q29tcG9uZW50ID0gKHsgdGl0bGUsIGlkIH0pID0+IHtcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdFwiKTtcclxuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaWQpO1xyXG5cclxuICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IGBcclxuICA8c2VjdGlvbiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgPHNwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPiR7dGl0bGV9PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJleHBhbmRDb250ZW50XCI+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVCdG4gZGVsZXRlUHJvamVjdFwiPjwvYnV0dG9uPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc2VjdGlvbj5cclxuICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cclxuICAgIFxyXG4gIDwvc2VjdGlvbj5cclxuXHJcbiAgICBgO1xyXG4gIHJldHVybiBwcm9qZWN0RGl2O1xyXG59O1xyXG4iLCJpbXBvcnQgeyB0aW1lRGlzdGFuY2VGcm9tTm93IH0gZnJvbSBcIi4uL1VUSUxJVElFUy9EYXRlRm5zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0NvbXBvbmVudCA9ICh0b2RvT2JqKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgZHVlRGF0ZSwgaWQgfSA9IHRvZG9PYmo7XHJcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9cIik7XHJcbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGlkKTtcclxuICB0b2RvRGl2LmlubmVySFRNTCA9IGBcclxuICA8ZGl2PlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0b2RvQ2hlY2tlZFwiIGlkPVwidG9kb0NoZWNrZWRcIiAvPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0b2RvVGl0bGVcIj4ke3RpdGxlfSwgJHt0aW1lRGlzdGFuY2VGcm9tTm93KGR1ZURhdGUpfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2hvd01vcmVcIj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZUJ0biBkZWxldGVUb2RvXCI+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICByZXR1cm4gdG9kb0RpdjtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRvZG9MaXN0RmllbGQoY29tcG9uZW50KSB7XHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGxldCBhY3RpdmUgPSBmYWxzZTtcclxuICBzcGFuLmlubmVySFRNTCA9IGNvbXBvbmVudC5pbWFnZTtcclxuICBzcGFuLmlubmVySFRNTCArPSBjb21wb25lbnQubmFtZTtcclxuICBpZiAoY29tcG9uZW50Py5vdGhlckNvbXBvbmVudHMpIHtcclxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudC5vdGhlckNvbXBvbmVudHMpIHtcclxuICAgICAgc3Bhbi5hcHBlbmQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGNvbXBvbmVudD8uYWN0aXZlKSB7XHJcbiAgICBhY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4geyBzcGFuLCBhY3RpdmUgfTtcclxufVxyXG4iLCJpbXBvcnQgeyAkLCAkJCB9IGZyb20gXCIuLi9VVElMSVRJRVMvU2VsZWN0b3JzXCI7XHJcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vQ09NUE9ORU5UUy9Qcm9qZWN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb3llY3RGYWN0b3J5IH0gZnJvbSBcIi4uL01PREVML1Byb2plY3RGYWN0b3J5XCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgVG9kb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9NT0RFTC9Mb2NhbFN0b3JhZ2VTaW5nbGV0b25cIjtcclxuaW1wb3J0IHsgVG9kb0ZhY3RvcnkgfSBmcm9tIFwiLi4vTU9ERUwvVG9kb0ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQXNpZGVGaWVsZENvbnRlbnQgfSBmcm9tIFwiLi4vVklFVy9VSVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDcmVhdGlvbigpIHtcclxuICAvL3ZhbGlkYXJcclxuICBpZiAodmFsaWRhdGVQcm9qZWN0Q3JlYXRpb24oKSkge1xyXG4gICAgJChcImRpYWxvZy5uZXdQcm9qZWN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJveWVjdEZhY3RvcnkoJChcImRpYWxvZy5uZXdQcm9qZWN0ICNuYW1lXCIpLnZhbHVlKTtcclxuICAgICQoXCJkaXYucHJvamVjdENvbnRhaW5lclwiKS5hcHBlbmQoUHJvamVjdENvbXBvbmVudChwcm9qZWN0KSk7XHJcbiAgICBMb2NhbFN0b3JhZ2UuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICB9XHJcbiAgLy9jcmVhciwgcmVuZGVyaXphciwgZ3VhcmRhciBlbiBsb2NhbCBzdG9yYWdlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvamVjdENyZWF0aW9uKCkge1xyXG4gIGNvbnN0IGlucHV0ID0gJChcImRpYWxvZy5uZXdQcm9qZWN0ICNuYW1lXCIpO1xyXG4gIGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIGlucHV0LnZhbHVlID0gXCJ0aGUgZmllbGQgbXVzdCBub3QgYmUgZW1wdHlcIjtcclxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFwiKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWxpZCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuLy9UT0RPIENSRUFUSU9OXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVRvZG8odG9kb0Zvcm0pIHtcclxuICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuICBpZiAoXHJcbiAgICB0b2RvRm9ybS5lbGVtZW50cy50b2RvVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcclxuICAgIHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9UaXRsZS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxyXG4gICAgICBcInRoZSBmaWVsZCBtdXN0IG5vdCBiZSBlbXB0eVwiXHJcbiAgKSB7XHJcbiAgICAvL3RvZG8gdGl0bGVcclxuICAgIHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9UaXRsZS5mb2N1cygpO1xyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb1RpdGxlLnZhbHVlID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb0Rlc2NyaXB0aW9uLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XHJcbiAgICAgIFwidGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiXHJcbiAgKSB7XHJcbiAgICAvL3RvZG8gZGVzY3JpcHRpb25cclxuICAgIHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9EZXNjcmlwdGlvbi5mb2N1cygpO1xyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMudG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XHJcbiAgfSBlbHNlIGlmICh0b2RvRm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAvL3RvZG8gZGF0ZVxyXG4gICAgdG9kb0Zvcm0uZWxlbWVudHMuZHVlRGF0ZS5mb2N1cygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWxpZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFRvZG9Gb3JtRGF0YSA9ICh0b2RvRm9ybSkgPT4ge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAge30sXHJcbiAgICB7IHRpdGxlOiB0b2RvRm9ybS5lbGVtZW50cy50b2RvVGl0bGUudmFsdWUgfSxcclxuICAgIHsgZHVlRGF0ZTogdG9kb0Zvcm0uZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSB9LFxyXG4gICAgeyBwcmlvcml0eTogdG9kb0Zvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWUgfSxcclxuICAgIHsgZGVzY3JpcHRpb246IHRvZG9Gb3JtLmVsZW1lbnRzLnRvZG9EZXNjcmlwdGlvbi52YWx1ZSB9XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvQ3JlYXRpb25Db250cm9sbGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZG9Gb3JtID0gJChgZGlhbG9nLm5ld1RvZG8gZm9ybWApO1xyXG4gIC8vdmFsaWRhciB0b2RvIHkgc2kgZXMgdmFsaWRvIGNyZWFsb1xyXG4gIGlmICh2YWxpZGF0ZVRvZG8odG9kb0Zvcm0pKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfSA9IGdldFRvZG9Gb3JtRGF0YSh0b2RvRm9ybSk7XHJcbiAgICBjb25zdCB0b2RvT2JqID0gVG9kb0ZhY3RvcnkodGl0bGUpO1xyXG4gICAgdG9kb09iai5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb09iai5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRvZG9PYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIFRvZG9Mb2NhbFN0b3JhZ2UuYWRkVG9kbyh0b2RvT2JqKTtcclxuICAgIC8vY2xvc2UgZGlhbG9nXHJcbiAgICB0b2RvRm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIC8vcmVuZGVyIHRoZSBjb250ZW50XHJcbiAgICByZW5kZXJBc2lkZUZpZWxkQ29udGVudCgpO1xyXG4gIH1cclxufTtcclxuIiwiLy9nZXQgdGhlIGlkXHJcbmxldCBwcm9qZWN0cztcclxuXHJcbmNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuICByZXR1cm4gcHJvamVjdHM7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgZ2V0UHJvamVjdHMoKTtcclxuICBwcm9qZWN0cy51bnNoaWZ0KHByb2plY3QpO1xyXG4gIHNhdmVQcm9qZWN0cygpOyAvL3RlbXBvcmFsIGl0IHdpbGwgYmUgc2F2ZWQgb25jZSB0aGUgd2luZG93IGlzIGNsb3NlZCBpbiBhbiBldmVudFxyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0SWQpID0+IHtcclxuICBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XHJcbiAgcHJvamVjdElkID0gaWRWYWxpZGF0aW9uKHByb2plY3RJZCk7XHJcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IHByb2plY3RJZCk7XHJcbiAgc2F2ZVByb2plY3RzKCk7XHJcbn07XHJcblxyXG4vL1RvZG8gQWRkaXRpb25cclxubGV0IHRvZG9zO1xyXG5jb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcclxuICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkgfHwgW107XHJcbiAgcmV0dXJuIHRvZG9zO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVRvZG9zID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gIGdldFRvZG9zKCk7XHJcbiAgdG9kb3MudW5zaGlmdCh0b2RvKTtcclxuICBzYXZlVG9kb3MoKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb0lkKSA9PiB7XHJcbiAgdG9kb0lkID0gaWRWYWxpZGF0aW9uKHRvZG9JZCk7XHJcbiAgZ2V0VG9kb3MoKTtcclxuICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodCkgPT4gdC5pZCAhPT0gdG9kb0lkKTtcclxuICBzYXZlVG9kb3MoKTtcclxufTtcclxuXHJcbi8vTW9kaWZ5IHRvZG8gLT4gR2V0IGFuZCBTYXZlIGF0IHRoZSBzYW1lIGluZGV4XHJcbmNvbnN0IGdldFRvZG8gPSAodG9kb0lkKSA9PiB7XHJcbiAgdG9kb0lkID0gaWRWYWxpZGF0aW9uKHRvZG9JZCk7XHJcbiAgZ2V0VG9kb3MoKTtcclxuICBjb25zdCB0b2RvID0gdG9kb3MuZmlsdGVyKCh0KSA9PiB0LmlkID09PSB0b2RvSWQpWzBdO1xyXG4gIGNvbnN0IGluZGV4ID0gdG9kb3MuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSB0b2RvSWQpO1xyXG4gIHNhdmVUb2RvcygpO1xyXG4gIHJldHVybiB7IHRvZG8sIGluZGV4IH07XHJcbn07XHJcblxyXG5jb25zdCBzYXZlVG9kbyA9ICh7IHRvZG8sIGluZGV4IH0pID0+IHtcclxuICBnZXRUb2RvcygpO1xyXG4gIHRvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgc2F2ZVRvZG9zKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpZFZhbGlkYXRpb24oaWQpIHtcclxuICBpZiAodHlwZW9mIGlkICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICBpZCA9IHBhcnNlSW50KGlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZDtcclxufVxyXG5cclxuY29uc3QgTG9jYWxTdG9yYWdlID0ge1xyXG4gIGdldFByb2plY3RzLFxyXG4gIHNhdmVQcm9qZWN0cyxcclxuICBhZGRQcm9qZWN0LFxyXG4gIHJlbW92ZVByb2plY3QsXHJcbn07XHJcblxyXG5jb25zdCBUb2RvTG9jYWxTdG9yYWdlID0ge1xyXG4gIGdldFRvZG9zLFxyXG4gIHNhdmVUb2RvcyxcclxuICBnZXRUb2RvLFxyXG4gIGFkZFRvZG8sXHJcbiAgcmVtb3ZlVG9kbyxcclxuICBzYXZlVG9kbyxcclxufTtcclxuXHJcbmV4cG9ydCB7IExvY2FsU3RvcmFnZSwgVG9kb0xvY2FsU3RvcmFnZSB9O1xyXG4iLCJjb25zdCBjaGVja2VkRXh0ZW5zaW9uID0gKCkgPT4gKHtcclxuICBfY2hlY2tlZDogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgZXh0ZW5zaW9uc0FycmF5ID0gW2NoZWNrZWRFeHRlbnNpb25dO1xyXG5cclxuY29uc3QgcHJveWVjdEV4dGVuc2lvbiA9IChleHRlbnNpb25zKSA9PiB7XHJcbiAgLy9hZGQgdGhlIGV4dGVuc2lvbnMgdG8gYW4gZW1wdHkgb2JqZWN0XHJcbiAgLy93aGljaCB3aWxsIGJlIHRoZSBwcm90b3R5cGUgdGhhdCBob2xkcyB0aGUgZXh0ZW5zaW9uc1xyXG4gIGNvbnN0IGV4dGVuc2lvbnNQcm90byA9IHt9O1xyXG4gIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICBPYmplY3QuYXNzaWduKGV4dGVuc2lvbnNQcm90bywgZXh0ZW5zaW9uKCkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZXh0ZW5zaW9uc1Byb3RvO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3llY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XHJcbiAgY29uc3QgcHJveWVjdEJhc2ljRGF0YSA9IHtcclxuICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgdGl0bGU6IHRpdGxlLFxyXG4gIH07XHJcblxyXG4gIC8vY3JlYXRlIG9iamVjdCB0aGF0IGhvbGQgYWxsIHRoZSBtZXRob2RzXHJcbiAgY29uc3QgYmFzaWMgPSBwcm95ZWN0RXh0ZW5zaW9uKGV4dGVuc2lvbnNBcnJheSk7XHJcbiAgLy9hc3NpZ24gdG8gYW4gZW1wdHkgb2JqZWN0IGFsbCB0aGUgZXh0ZW5zaW9uc1xyXG4gIGNvbnN0IGNvbXBvc2l0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2ljKTtcclxuICAvL2NyZWF0ZSBhIHByb3llY3Qgb2JqZWN0IGZyb20gdGhlIGNvbXBvc2l0ZSBvYmplY3QgKGlzIGl0cyBwcm90b3R5cGUpXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShjb21wb3NpdGUpLCBwcm95ZWN0QmFzaWNEYXRhKTtcclxufTtcclxuIiwiLy9GVU5DVElPTlMgQVJFIENPTU1FTlRFRCBTSU5DRSBUSEVZIENBTk5PVCBCRSBTVE9SRUQgSU4gTE9DQUwgU1RPUkFHRVxyXG5cclxuY29uc3QgcHJvamVjdEV4dGVuc2lvbiA9ICgpID0+ICh7XHJcbiAgcHJvamVjdElkOiBudWxsLFxyXG4gIHByb3llY3RUaXRsZTogbnVsbCxcclxuICAvKlxyXG4gIGdldFByb3llY3RJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdElkO1xyXG4gIH0sKi9cclxufSk7XHJcblxyXG5jb25zdCBkdWVEYXRlRXh0ZW5zaW9uID0gKGRhdGUpID0+ICh7XHJcbiAgZHVlRGF0ZTogZGF0ZSxcclxufSk7XHJcblxyXG5jb25zdCBjaGVja2VkRXh0ZW5zaW9uID0gKCkgPT4gKHtcclxuICBjaGVja2VkOiBmYWxzZSxcclxuICAvKlxyXG4gIHRvZ2dsZUNoZWNrZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuX2NoZWNrZWQgPSAhdGhpcy5fY2hlY2tlZDtcclxuICB9LFxyXG4gIGlzQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgfSwqL1xyXG59KTtcclxuXHJcbmNvbnN0IHByaW9yaXRpZXNFeHRlbnNpb24gPSAoKSA9PiAoe1xyXG4gIHByaW9yaXR5OiBcImxvd1wiLFxyXG4gIC8qXHJcbiAgc2V0UHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XHJcbiAgICB0aGlzLl9wcmlvcml0eSA9IHA7XHJcbiAgfSxcclxuICBnZXRQcmlvcml0eTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xyXG4gIH0sKi9cclxufSk7XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbkV4dGVuc2lvbiA9ICgpID0+ICh7XHJcbiAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgLypcclxuICBnZXREZXNjcmlwdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH0sXHJcbiAgc2V0RGVzY3JpcHRpb246IGZ1bmN0aW9uIChkZXNjKSB7XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2M7XHJcbiAgfSxcclxuICAqL1xyXG59KTtcclxuXHJcbmNvbnN0IGV4dGVuc2lvbnNBcnJheSA9IFtcclxuICBkdWVEYXRlRXh0ZW5zaW9uLFxyXG4gIHByaW9yaXRpZXNFeHRlbnNpb24sXHJcbiAgZGVzY3JpcHRpb25FeHRlbnNpb24sXHJcbl07XHJcblxyXG5jb25zdCB0b2RvRXh0ZW5zaW9ucyA9IChleHRlbnNpb25zKSA9PiB7XHJcbiAgY29uc3QgYmFzZU9iaiA9IHt9O1xyXG4gIGV4dGVuc2lvbnMuZm9yRWFjaCgoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICBPYmplY3QuYXNzaWduKGJhc2VPYmosIGV4dGVuc2lvbigpKTtcclxuICB9KTtcclxuICByZXR1cm4gYmFzZU9iajtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvRmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xyXG4gIGNvbnN0IGJhc2ljRGF0YSA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAvKlxyXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9LFxyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBjb25zdCBiYXNpYyA9IHRvZG9FeHRlbnNpb25zKGV4dGVuc2lvbnNBcnJheSk7XHJcbiAgY29uc3QgY29tcG9zaXRlID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzaWMpO1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoY29tcG9zaXRlKSwgYmFzaWNEYXRhKTtcclxufTtcclxuIiwiaW1wb3J0IHsgRGlhbG9nRGlzcGxheWVyQnV0dG9uIH0gZnJvbSBcIi4uL0NPTVBPTkVOVFMvRGlhbG9nRGlzcGxheWVyQnV0dG9uXCI7XHJcblxyXG5jb25zdCBBTExfU1ZHID0gYDxzdmdcclxuZmlsbD1cIiMwMDAwMDBcIlxyXG52aWV3Qm94PVwiMCAwIDMyIDMyXCJcclxudmVyc2lvbj1cIjEuMVwiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4+XHJcbjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG48Z1xyXG4gIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCJcclxuICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbj48L2c+XHJcbjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxyXG4gIDx0aXRsZT5ib3JkZXItYWxsPC90aXRsZT5cclxuICA8cGF0aFxyXG4gICAgZD1cIk0yOSAxLjc1aC0yNmMtMC42OSAwLTEuMjUgMC41Ni0xLjI1IDEuMjV2MCAyNmMwIDAuNjkgMC41NiAxLjI1IDEuMjUgMS4yNWgyNmMwLjY5LTAuMDAxIDEuMjQ5LTAuNTYgMS4yNS0xLjI1di0yNmMtMC0wLjY5LTAuNTYtMS4yNS0xLjI1LTEuMjVoLTB6TTI3Ljc1IDE0Ljc1aC0xMC41di0xMC41aDEwLjV6TTE0Ljc1IDQuMjV2MTAuNWgtMTAuNXYtMTAuNXpNNC4yNSAxNy4yNWgxMC41djEwLjVoLTEwLjV6TTE3LjI1IDI3Ljc1di0xMC41aDEwLjV2MTAuNXpcIlxyXG4gID48L3BhdGg+XHJcbjwvZz5cclxuPC9zdmc+YDtcclxuXHJcbmNvbnN0IGFsbEZpZWxkID0ge1xyXG4gIGltYWdlOiBBTExfU1ZHLFxyXG4gIG5hbWU6IFwiQWxsXCIsXHJcbiAgYWN0aXZlOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgSU1QT1JUQU5UX1NWRyA9IGA8c3ZnXHJcbnZpZXdCb3g9XCIwIC0wLjUgMjEgMjFcIlxyXG52ZXJzaW9uPVwiMS4xXCJcclxueG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbmZpbGw9XCIjMDAwMDAwXCJcclxuPlxyXG48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuPGdcclxuICBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiXHJcbiAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4+PC9nPlxyXG48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj5cclxuICA8dGl0bGU+aW1wb3J0YW50X21lc3NhZ2UgWyMxNDQ4XTwvdGl0bGU+XHJcbiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+XHJcbiAgPGRlZnM+PC9kZWZzPlxyXG4gIDxnXHJcbiAgICBpZD1cIlBhZ2UtMVwiXHJcbiAgICBzdHJva2U9XCJub25lXCJcclxuICAgIHN0cm9rZS13aWR0aD1cIjFcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgPlxyXG4gICAgPGdcclxuICAgICAgaWQ9XCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XCJcclxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzkuMDAwMDAwLCAtNTIwLjAwMDAwMClcIlxyXG4gICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICA+XHJcbiAgICAgIDxnXHJcbiAgICAgICAgaWQ9XCJpY29uc1wiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNOTQuNTUsMzY1LjAwNyBMOTQuNTUsMzcyLjAwNyBDOTQuNTUsMzcyLjU1OSA5NC4wNzk2LDM3My4wMDcgOTMuNSwzNzMuMDA3IEM5Mi45MjA0LDM3My4wMDcgOTIuNDUsMzcyLjU1OSA5Mi40NSwzNzIuMDA3IEw5Mi40NSwzNjUuMDA3IEM5Mi40NSwzNjQuNDU1IDkyLjkyMDQsMzY0LjAwNyA5My41LDM2NC4wMDcgQzk0LjA3OTYsMzY0LjAwNyA5NC41NSwzNjQuNDU1IDk0LjU1LDM2NS4wMDcgTDk0LjU1LDM2NS4wMDcgWiBNOTQuNTUsMzc1LjAwNyBDOTQuNTUsMzc1LjU1OSA5NC4wNzk2LDM3Ni4wMDcgOTMuNSwzNzYuMDA3IEM5Mi45MjA0LDM3Ni4wMDcgOTIuNDUsMzc1LjU1OSA5Mi40NSwzNzUuMDA3IEM5Mi40NSwzNzQuNDU1IDkyLjkyMDQsMzc0LjAwNyA5My41LDM3NC4wMDcgQzk0LjA3OTYsMzc0LjAwNyA5NC41NSwzNzQuNDU1IDk0LjU1LDM3NS4wMDcgTDk0LjU1LDM3NS4wMDcgWiBNMTAxLjksMzc3IEMxMDEuOSwzNzcuNTUyIDEwMS40Mjk2LDM3OCAxMDAuODUsMzc4IEw4Ni4xNSwzNzggQzg1LjU3MDQsMzc4IDg1LjEsMzc3LjU1MiA4NS4xLDM3NyBMODUuMSwzNjMgQzg1LjEsMzYyLjQ0OCA4NS41NzA0LDM2MiA4Ni4xNSwzNjIgTDEwMC44NSwzNjIgQzEwMS40Mjk2LDM2MiAxMDEuOSwzNjIuNDQ4IDEwMS45LDM2MyBMMTAxLjksMzc3IFogTTEwMS45LDM2MCBMODUuMSwzNjAgQzgzLjkzOTc1LDM2MCA4MywzNjAuODk5IDgzLDM2Mi4wMDMgTDgzLDM2Mi4wMDcgTDgzLDM3OC4wMDcgQzgzLDM3OS4xMTIgODMuOTM5NzUsMzgwIDg1LjEsMzgwIEwxMDEuOSwzODAgQzEwMy4wNjAyNSwzODAgMTA0LDM3OS4xMDggMTA0LDM3OC4wMDMgTDEwNCwzNjIuMDA3IEMxMDQsMzYwLjkwMiAxMDIuOTUsMzYwIDEwMS45LDM2MCBMMTAxLjksMzYwIFpcIlxyXG4gICAgICAgICAgaWQ9XCJpbXBvcnRhbnRfbWVzc2FnZS1bIzE0NDhdXCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L2c+XHJcbiAgPC9nPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBpbXBvcnRhbnRGaWVsZCA9IHtcclxuICBpbWFnZTogSU1QT1JUQU5UX1NWRyxcclxuICBuYW1lOiBcIkltcG9ydGFudFwiLFxyXG59O1xyXG5cclxuY29uc3QgTkVYVF83X0RBWVNfU1ZHID0gYDxzdmdcclxuZmlsbD1cIiMwMDAwMDBcIlxyXG5oZWlnaHQ9XCIyMDBweFwiXHJcbndpZHRoPVwiMjAwcHhcIlxyXG52ZXJzaW9uPVwiMS4xXCJcclxuaWQ9XCJDYXBhXzFcIlxyXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxudmlld0JveD1cIjAgMCAxODcuMzMzIDE4Ny4zMzNcIlxyXG54bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbj5cclxuPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XHJcbjxnXHJcbiAgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIlxyXG4gIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuPjwvZz5cclxuPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XHJcbiAgPHBhdGhcclxuICAgIGQ9XCJNMTcyLjA0OSwwaC0xMS44MjhjLTIuNzYxLDAtNSwyLjIzOS01LDV2MTUuOTE5aC0xNC40MDdWNWMwLTIuNzYxLTIuMjM5LTUtNS01aC0xMS44MjhjLTIuNzYxLDAtNSwyLjIzOS01LDV2MTUuOTE5SDEwNC41OCBWNWMwLTIuNzYxLTIuMjM5LTUtNS01SDg3Ljc1M2MtMi43NjEsMC01LDIuMjM5LTUsNXYxNS45MTlINjguMzQ2VjVjMC0yLjc2MS0yLjIzOS01LTUtNUg1MS41MThjLTIuNzYxLDAtNSwyLjIzOS01LDV2MTUuOTE5IEgzMi4xMTJWNWMwLTIuNzYxLTIuMjM5LTUtNS01SDE1LjI4NGMtMi43NjEsMC01LDIuMjM5LTUsNXYyMC45MTl2OS4wMTZ2MTQ3LjM5OWMwLDIuNzYxLDIuMjM5LDUsNSw1aDE1Ni43NjVjMi43NjEsMCw1LTIuMjM5LDUtNSBWMzQuOTM0di05LjAxNlY1QzE3Ny4wNDksMi4yMzksMTc0LjgxLDAsMTcyLjA0OSwweiBNMTAwLjcxOCw5OS4wNTNjMCwxNy4xNjUtMTMuOTY1LDMxLjEzMS0zMS4xMzEsMzEuMTMxSDU2LjcxNCBjLTQuNTUzLDAtOC4yNTgsMy43MDUtOC4yNTgsOC4yNTh2OC4yNThoNDcuMjYyYzIuNzYxLDAsNSwyLjIzOSw1LDVzLTIuMjM5LDUtNSw1SDQzLjQ1NmMtMi43NjEsMC01LTIuMjM5LTUtNXYtMTMuMjU4IGMwLTEwLjA2Nyw4LjE5LTE4LjI1OCwxOC4yNTgtMTguMjU4aDEyLjg3M2MxMS42NTEsMCwyMS4xMzEtOS40NzksMjEuMTMxLTIxLjEzMVY4Ny43OTdjMC0xMS42NTEtOS40NzktMjEuMTMxLTIxLjEzMS0yMS4xMzEgYy0xMS42NTEsMC0yMS4xMzEsOS40OC0yMS4xMzEsMjEuMTMxdjAuMzk1YzAsMi43NjEtMi4yMzksNS01LDVzLTUtMi4yMzktNS01di0wLjM5NWMwLTE3LjE2NiwxMy45NjUtMzEuMTMxLDMxLjEzMS0zMS4xMzEgYzE3LjE2NSwwLDMxLjEzMSwxMy45NjUsMzEuMTMxLDMxLjEzMVY5OS4wNTN6IE0xNDguODc3LDE1MS43YzAsMi43NjEtMi4yMzksNS01LDVjLTIuNzYxLDAtNS0yLjIzOS01LTVWNzMuNzM4bC0xMC45ODUsMTAuOTg1IGMtMS45NTMsMS45NTItNS4xMTgsMS45NTItNy4wNzEsMGMtMS45NTMtMS45NTMtMS45NTMtNS4xMTksMC03LjA3MWwxOS41Mi0xOS41MmMxLjQzLTEuNDMsMy41OC0xLjg1Nyw1LjQ0OS0xLjA4NCBjMS44NjgsMC43NzQsMy4wODYsMi41OTcsMy4wODYsNC42MlYxNTEuN3pcIlxyXG4gID48L3BhdGg+XHJcbjwvZz5cclxuPC9zdmc+YDtcclxuXHJcbmNvbnN0IG5leHQ3RGF5c0ZpZWxkID0ge1xyXG4gIGltYWdlOiBORVhUXzdfREFZU19TVkcsXHJcbiAgbmFtZTogXCJOZXh0IDcgRGF5c1wiLFxyXG59O1xyXG5cclxuY29uc3QgTkVYVF9NT05USF9TVkcgPSBgPHN2Z1xyXG5oZWlnaHQ9XCIyMDBweFwiXHJcbndpZHRoPVwiMjAwcHhcIlxyXG52ZXJzaW9uPVwiMS4xXCJcclxuaWQ9XCJfeDMyX1wiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG52aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG54bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbmZpbGw9XCIjMDAwMDAwXCJcclxuPlxyXG48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cclxuPGdcclxuICBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiXHJcbiAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4+PC9nPlxyXG48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj5cclxuICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbiAgICAuc3QwIHtcclxuICAgICAgZmlsbDogIzAwMDAwMDtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG4gIDxnPlxyXG4gICAgPHBhdGhcclxuICAgICAgY2xhc3M9XCJzdDBcIlxyXG4gICAgICBkPVwiTTExOC42MTIsODkuMjk4YzkuNDgyLDAsMTcuMTc2LTcuNjg2LDE3LjE3Ni0xNy4xNjh2LTU0Ljk2QzEzNS43ODgsNy42ODcsMTI4LjA5NCwwLDExOC42MTIsMCBjLTkuNDgyLDAtMTcuMTc3LDcuNjg3LTE3LjE3NywxNy4xNjl2NTQuOTZDMTAxLjQzNSw4MS42MTEsMTA5LjEzLDg5LjI5OCwxMTguNjEyLDg5LjI5OHpcIlxyXG4gICAgPjwvcGF0aD5cclxuICAgIDxwYXRoXHJcbiAgICAgIGNsYXNzPVwic3QwXCJcclxuICAgICAgZD1cIk0yNTUuOTkyLDg5LjI5OGM5LjQ4MiwwLDE3LjE3Ny03LjY4NiwxNy4xNzctMTcuMTY4di01NC45NkMyNzMuMTY5LDcuNjg3LDI2NS40NzQsMCwyNTUuOTkyLDAgYy05LjQ4MywwLTE3LjE3Niw3LjY4Ny0xNy4xNzYsMTcuMTY5djU0Ljk2QzIzOC44MTYsODEuNjExLDI0Ni41MSw4OS4yOTgsMjU1Ljk5Miw4OS4yOTh6XCJcclxuICAgID48L3BhdGg+XHJcbiAgICA8cGF0aFxyXG4gICAgICBjbGFzcz1cInN0MFwiXHJcbiAgICAgIGQ9XCJNMzkzLjM3Miw4OS4yOThjOS40ODMsMCwxNy4xNzYtNy42ODYsMTcuMTc2LTE3LjE2OHYtNTQuOTZDNDEwLjU0OSw3LjY4Nyw0MDIuODU1LDAsMzkzLjM3MiwwIGMtOS40ODMsMC0xNy4xNzYsNy42ODctMTcuMTc2LDE3LjE2OXY1NC45NkMzNzYuMTk2LDgxLjYxMSwzODMuODksODkuMjk4LDM5My4zNzIsODkuMjk4elwiXHJcbiAgICA+PC9wYXRoPlxyXG4gICAgPHBhdGhcclxuICAgICAgY2xhc3M9XCJzdDBcIlxyXG4gICAgICBkPVwiTTE4Ni41OTMsNDA1LjA3MmMzMi4xMDIsMCw1Ni4wMzEtMjEuNTcyLDU2LjAzMS01NC4xODljMC0yMy40MjEtMTMuMTUyLTM4Ljk0LTIzLjY2Ny00My40MTF2LTAuNTI0IGMxMy4xNTItOC42OCwxOS45ODItMjIuMTAyLDE5Ljk4Mi0zNy4wOTdjMC0yOC45NDItMTkuMTk2LTQ5LjQ1Ni01Mi42MDgtNDkuNDU2Yy0yOC45NDIsMC00OC42NzgsMTYuNTc1LTUyLjYyNCwzOC4xNDYgYy0wLjI2MiwxLjU3MywwLjUyNCwyLjg5MiwyLjExMiwzLjE1NGwyMi4zNTcsNS4yNjRjMS41ODgsMC4yNjMsMi42MzctMC4yNjIsMy4xNjEtMS44NDIgYzMuMTYxLTExLjA0OCwxMC43OTMtMTguNDE4LDIzLjk0NS0xOC40MThjMTQuOTg4LDAsMjMuOTMsOS45OTksMjMuOTMsMjQuMjA3YzAsMTUuNzgyLTEwLjI1MywyNi4wNDMtMjYuMDQyLDI2LjA0M2gtNy4xMDggYy0xLjU3MiwwLTIuNjIyLDEuMDQ4LTIuNjIyLDIuNjI5djIwLjc4NGMwLDEuNTgsMS4wNDksMi42MjksMi42MjIsMi42MjloNy42MzJjMTcuNjIzLDAsMjkuMjAzLDExLjA1NSwyOS4yMDMsMjkuMjAzIGMwLDE1LjI2NC05LjcyOSwyNi41NzQtMjYuMzA0LDI2LjU3NGMtMTQuNzQsMC0yMy40MjEtOC40MTktMjcuMTA2LTE4Ljk0MmMtMC41MjQtMS41OC0xLjgzNi0yLjEwNC0zLjE0Ni0xLjg0MmwtMjIuODk3LDUuMjY2IGMtMS41NzIsMC41MjQtMi4zNTksMS44MzQtMi4wOTcsMy40MTVDMTM2Ljg2OCwzOTEuMTMzLDE1OC43MDEsNDA1LjA3MiwxODYuNTkzLDQwNS4wNzJ6XCJcclxuICAgID48L3BhdGg+XHJcbiAgICA8cGF0aFxyXG4gICAgICBjbGFzcz1cInN0MFwiXHJcbiAgICAgIGQ9XCJNMjk2LjgzNiwyNzcuNzQ0bDI3LjM1Mi0xOS4yMDRoMC41MjR2MTQxLjAxMWMwLDEuNTgsMS4wNjQsMi42MywyLjYzNywyLjYzaDI0LjIwNyBjMS41NzMsMCwyLjYyMi0xLjA0OSwyLjYyMi0yLjYzVjIyNS45MTRjMC0xLjU3My0xLjA0OC0yLjYyOS0yLjYyMi0yLjYyOWgtMjIuMzcyYy0yLjA5NywwLTMuNDA4LDAuNTI0LTQuNzM0LDEuNThsLTI4LjY2MywyMC43ODQgYy0xLjMyNiwxLjA0OC0xLjg1LDIuMTA1LTEuODUsMy42Nzh2MjYuODM2QzI5My45MzgsMjc4LjI2OSwyOTUuMjQ4LDI3OC43OTMsMjk2LjgzNiwyNzcuNzQ0elwiXHJcbiAgICA+PC9wYXRoPlxyXG4gICAgPHBhdGhcclxuICAgICAgY2xhc3M9XCJzdDBcIlxyXG4gICAgICBkPVwiTTQyNy4wMDEsNDQuODk5aC0yLjcxNHYyNy4yM2MwLDE3LjAzOC0xMy44NjEsMzAuOTA2LTMwLjkxNCwzMC45MDZjLTE3LjAzOCwwLTMwLjkxNC0xMy44NjktMzAuOTE0LTMwLjkwNiB2LTI3LjIzaC03NS41NTF2MjcuMjNjMCwxNy4wMzgtMTMuODc3LDMwLjkwNi0zMC45MTQsMzAuOTA2cy0zMC45MTQtMTMuODY5LTMwLjkxNC0zMC45MDZ2LTI3LjIzaC03NS41NTJ2MjcuMjMgYzAsMTcuMDM4LTEzLjg3NiwzMC45MDYtMzAuOTE0LDMwLjkwNlM4Ny42OTgsODkuMTY3LDg3LjY5OCw3Mi4xMjl2LTI3LjIzaC0yLjY5OGMtMzcuMDgyLDAtNjcuMTMzLDMwLjA1OS02Ny4xMzMsNjcuMTMzdjMzMi44MzUgYzAsMzcuMDc0LDMwLjA1MSw2Ny4xMzMsNjcuMTMzLDY3LjEzM2gzNDIuMDAyYzM3LjA2NiwwLDY3LjEzMy0zMC4wNTgsNjcuMTMzLTY3LjEzM1YxMTIuMDMyIEM0OTQuMTM0LDc0Ljk1OCw0NjQuMDY3LDQ0Ljg5OSw0MjcuMDAxLDQ0Ljg5OXogTTQ1MC44NTQsNDM5Ljc3MmMwLDE1Ljk3My0xMi45OSwyOC45NjQtMjguOTU2LDI4Ljk2NEg5MC4xMDMgYy0xNS45NzMsMC0yOC45NzEtMTIuOTktMjguOTcxLTI4Ljk2NFYxNDMuMTE2aDM4OS43MjJWNDM5Ljc3MnpcIlxyXG4gICAgPjwvcGF0aD5cclxuICA8L2c+XHJcbjwvZz5cclxuPC9zdmc+YDtcclxuXHJcbmNvbnN0IG5leHRNb250aEZpZWxkID0ge1xyXG4gIGltYWdlOiBORVhUX01PTlRIX1NWRyxcclxuICBuYW1lOiBcIk5leHQgTW9udGhcIixcclxufTtcclxuXHJcbmNvbnN0IFBST0pFQ1RTX1NWRyA9IGA8c3ZnXHJcbnZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbnZlcnNpb249XCIxLjFcIlxyXG54bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuZmlsbD1cIiMwMDAwMDBcIlxyXG4+XHJcbjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxyXG48Z1xyXG4gIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCJcclxuICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbj48L2c+XHJcbjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxyXG4gIDx0aXRsZT50YXNrcy1hbGw8L3RpdGxlPlxyXG4gIDxnXHJcbiAgICBpZD1cIlBhZ2UtMVwiXHJcbiAgICBzdHJva2U9XCJub25lXCJcclxuICAgIHN0cm9rZS13aWR0aD1cIjFcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgPlxyXG4gICAgPGdcclxuICAgICAgaWQ9XCJDb21iaW5lZC1TaGFwZVwiXHJcbiAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcwLjUzMDU5MywgNDYuMTI1NjIwKVwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xODUuNDY5NDA3LDM5LjIwNzcxMyBMMzU2LjEzNjA3NCwzOS4yMDc3MTMgTDM1Ni4xMzYwNzQsODEuODc0Mzc5NyBMMTg1LjQ2OTQwNyw4MS44NzQzNzk3IEwxODUuNDY5NDA3LDM5LjIwNzcxMyBaIE0xODUuNDY5NDA3LDE4OC41NDEwNDYgTDM1Ni4xMzYwNzQsMTg4LjU0MTA0NiBMMzU2LjEzNjA3NCwyMzEuMjA3NzEzIEwxODUuNDY5NDA3LDIzMS4yMDc3MTMgTDE4NS40Njk0MDcsMTg4LjU0MTA0NiBaIE0xODUuNDY5NDA3LDMzNy44NzQzOCBMMzU2LjEzNjA3NCwzMzcuODc0MzggTDM1Ni4xMzYwNzQsMzgwLjU0MTA0NiBMMTg1LjQ2OTQwNywzODAuNTQxMDQ2IEwxODUuNDY5NDA3LDMzNy44NzQzOCBaIE0xMTkuMjg1Mzg0LC03LjEwNTQyNzM2ZS0xNSBMMTQ0LjY0OTM1MiwxOS41MTA3NDQzIEw2OC42MTY3NjA1LDExOC4zNTMxMTMgTDIuODQyMTcwOTRlLTE0LDU4LjMxMzQ0NzYgTDIxLjA3MjE0NzUsMzQuMjMwOTkzNCBMNjQuMDQwMDczNyw3MS44MDUwNDY0IEwxMTkuMjg1Mzg0LC03LjEwNTQyNzM2ZS0xNSBaIE0xMTkuMjg1Mzg0LDE0OS4zMzMzMzMgTDE0NC42NDkzNTIsMTY4Ljg0NDA3OCBMNjguNjE2NzYwNSwyNjcuNjg2NDQ2IEwyLjg0MjE3MDk0ZS0xNCwyMDcuNjQ2NzgxIEwyMS4wNzIxNDc1LDE4My41NjQzMjcgTDY0LjA0MDA3MzcsMjIxLjEzODM4IEwxMTkuMjg1Mzg0LDE0OS4zMzMzMzMgWiBNMTE5LjI4NTM4NCwyOTguNjY2NjY3IEwxNDQuNjQ5MzUyLDMxOC4xNzc0MTEgTDY4LjYxNjc2MDUsNDE3LjAxOTc4IEwyLjg0MjE3MDk0ZS0xNCwzNTYuOTgwMTE0IEwyMS4wNzIxNDc1LDMzMi44OTc2NiBMNjQuMDQwMDczNywzNzAuNDcxNzEzIEwxMTkuMjg1Mzg0LDI5OC42NjY2NjcgWlwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L2c+XHJcbiAgPC9nPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBwcm9qZWN0c0ZpZWxkID0ge1xyXG4gIGltYWdlOiBQUk9KRUNUU19TVkcsXHJcbiAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gIG90aGVyQ29tcG9uZW50czogW0RpYWxvZ0Rpc3BsYXllckJ1dHRvbihbXCJuZXdQcm9qZWN0XCJdKV0sXHJcbn07XHJcblxyXG5jb25zdCB0b2RvTGlzdEZpZWxkcyA9IFtcclxuICBhbGxGaWVsZCxcclxuICBpbXBvcnRhbnRGaWVsZCxcclxuICBuZXh0N0RheXNGaWVsZCxcclxuICBuZXh0TW9udGhGaWVsZCxcclxuICBwcm9qZWN0c0ZpZWxkLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9MaXN0RmllbGRzKCkge1xyXG4gIHJldHVybiB0b2RvTGlzdEZpZWxkcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9MaXN0ID0ge1xyXG4gIGdldFRvZG9MaXN0RmllbGRzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93LCBpc0JlZm9yZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBhZGRXZWVrcyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBnZXREYXlzSW5Nb250aCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5leHBvcnQgY29uc3QgdGltZURpc3RhbmNlRnJvbU5vdyA9IChkYXRlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBkYXRlID0gRGF0ZS5wYXJzZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KGRhdGUsIHtcclxuICAgIGluY2x1ZGVTZWNvbmRzOiB0cnVlLFxyXG4gICAgYWRkU3VmZml4OiB0cnVlLFxyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWRkV2Vla3NGcm9tRGF0ZSA9IChkYXRlLCBudW1iZXJPZldlZWtzKSA9PlxyXG4gIGFkZFdlZWtzKGRhdGUsIG51bWJlck9mV2Vla3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERheXNNb250aCA9IChkYXRlKSA9PiBnZXREYXlzSW5Nb250aChkYXRlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0RhdGVCZWZvcmVPdGhlciA9IChkYXRlLCBkYXRlTGltaXQpID0+IGlzQmVmb3JlKGRhdGUsIGRhdGVMaW1pdCk7XHJcbiIsImV4cG9ydCBjb25zdCAkID0gKHNlbGVjdG9yKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuZXhwb3J0IGNvbnN0ICQkID0gKHNlbGVjdG9yKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuLy9kaXYuc2hvd01vcmUgfHwgYnV0dG9uLmRlbGV0ZUJ0blxyXG5leHBvcnQgY29uc3QgZ2V0RE9NVG9kb0Zyb21FbGVtZW50ID0gKGVsZW1lbnQpID0+XHJcbiAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbi8vYnV0dG9uLmV4cGFuZENvbnRlbnQgfHwgYnV0dG9uLmRlbGV0ZUNvbnRlbnRcclxuZXhwb3J0IGNvbnN0IGdldERPTVByb2plY3RGcm9tRWxlbWVudCA9IChlbGVtZW50KSA9PlxyXG4gIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiIsImltcG9ydCB7ICQsICQkLCBnZXRET01Ub2RvRnJvbUVsZW1lbnQgfSBmcm9tIFwiLi4vVVRJTElUSUVTL1NlbGVjdG9yc1wiO1xyXG5pbXBvcnQge1xyXG4gIFRvZG9DcmVhdGlvbkNvbnRyb2xsZXIsXHJcbiAgaGFuZGxlUHJvamVjdENyZWF0aW9uLFxyXG59IGZyb20gXCIuLi9DT05UUk9MTEVSL0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyQXNpZGVGaWVsZENvbnRlbnQgfSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIFRvZG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vTU9ERUwvTG9jYWxTdG9yYWdlU2luZ2xldG9uXCI7XHJcblxyXG5jb25zdCBzaG93SGlkZUFzaWRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVCdG4gPSAkKFwiYnV0dG9uLm1lbnVcIik7XHJcbiAgY29uc3QgYXNpZGUgPSAkKFwiYm9keSA+IG1haW4gPiBhc2lkZVwiKTtcclxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgLy90aGUgbWFpbiBjb250YWluZXIgd2lsbCBoYXZlIGEgZGlmZmVyZW50IHN0eWxpbmcgaWYgYXNpZGUgaXMgZGlzcGxheWVkXHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcclxuICAgICAgPyAkKFwiYm9keSA+IG1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImFzaWRlT3BlblwiKSB8fCBcIlwiXHJcbiAgICAgIDogJChcImJvZHkgPiBtYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZU9wZW5cIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5RGFpbG9nID0gKCkgPT4ge1xyXG4gIC8vdGhlIGRpYWxvZyBkaXNwbGF5ZXIgYnV0dG9uIGhhcyB0aGF0IGNsYXNzIGFuZCBhbm90aGVyIG9uZSB0byBkaWZmZXJlbnRpYXRlIGRpYWxvZ3NcclxuICAvL3RoZSBzZWNvbmQgY2xhc3Mgd2lsbCBiZSB0aGUgb25lIHRoZSBkaWFsb2cgaGFzXHJcbiAgY29uc3QgZGlhbG9nRGlzcGxheWVyQnRucyA9IFsuLi4kJChcImJ1dHRvbi5kaWFsb2dEaXNwbGF5ZXJcIildO1xyXG5cclxuICBkaWFsb2dEaXNwbGF5ZXJCdG5zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0RpYWxvZyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dEaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2dFbCA9ICQoYGRpYWxvZy4ke1suLi50aGlzLmNsYXNzTGlzdF1bMV19YCk7XHJcbiAgICBjb25zdCBpc0RpYWxvZ0hpZGRlbiA9IGRpYWxvZ0VsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKTtcclxuICAgIGlmIChpc0RpYWxvZ0hpZGRlbikge1xyXG4gICAgICBkaWFsb2dFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsb3NlRGlhbG9nID0gKCkgPT4ge1xyXG4gIC8vdHdvIHdheXMgLT4gc3Bhbi5jbG9zZURpYWxvZyB8fCBidXR0b24uY2xvc2VEaWFsb2cgKGluIGV2ZXJ5IGRpYWxvZylcclxuICBjb25zdCBkaWFsb2dDbG9zaW5nRWxlbWVudHMgPSBbLi4uJCQoXCJkaWFsb2cgLmNsb3NlRGlhbG9nXCIpXTtcclxuXHJcbiAgZnVuY3Rpb24gaGlkZURpYWxvZygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ0VsID0gJChgZGlhbG9nLiR7Wy4uLnRoaXMuY2xhc3NMaXN0XVsxXX1gKTtcclxuICAgIGNvbnN0IGlzRGlhbG9nSGlkZGVuID0gZGlhbG9nRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpO1xyXG4gICAgaWYgKCFpc0RpYWxvZ0hpZGRlbikge1xyXG4gICAgICBkaWFsb2dFbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlhbG9nQ2xvc2luZ0VsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZURpYWxvZyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhc2lkZUVsZW1lbnRzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgLy93aGVuZXZlciBvbmUgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBhc2lkZSBpcyBiZWluZyBjbGlja2VkXHJcbiAgLy9hZGQgY2xhc3MgdG8gZWxlbWVudCBhbmQgZGlzcGxheSB0aXRsZVxyXG4gIGNvbnN0IGFzaWRlRWxlbWVudHMgPSBbLi4uJCQoXCJhc2lkZSA+IHVsID4gbGlcIildO1xyXG5cclxuICBhc2lkZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PlxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvb2dsZUFjdGl2ZUNsYXNzKVxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvb2dsZUFjdGl2ZUNsYXNzKCkge1xyXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBhc2lkZUVsZW1lbnRzLmZpbHRlcigoZWwpID0+XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gICAgKTtcclxuICAgIGlmIChhY3RpdmVFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFjdGl2ZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHJlbmRlckFzaWRlRmllbGRDb250ZW50KCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcHJveWVjdEJ0bkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9ICQoXCJkaWFsb2cubmV3UHJvamVjdCBmb290ZXIgYnV0dG9uOmxhc3QtY2hpbGRcIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaGFuZGxlUHJvamVjdENyZWF0aW9uKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIGNvbnN0IHdhcm5pbmdEaWFsb2cgPSAkKFwiZGlhbG9nLmVsaW1pbmF0aW9uV2FybmluZ1wiKTtcclxuICBjb25zdCB3YXJuaW5nRGlhbG9nUmVtb3ZlQnV0dG9uID0gJChcclxuICAgIFwiZGlhbG9nLmVsaW1pbmF0aW9uV2FybmluZyBidXR0b24ucmVtb3ZlXCJcclxuICApO1xyXG4gIC8vc2V0IGRpYWxvZyB2aXNpYmxlXHJcbiAgd2FybmluZ0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSBcImRpdlwiICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RvXCIpKSB7XHJcbiAgICB3YXJuaW5nRGlhbG9nUmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdhcm5pbmdEaWFsb2cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgLy9yZW1vdmUgZnJvbSBkb21cclxuICAgICAgdGFyZ2V0LnJlbW92ZSgpO1xyXG4gICAgICAvL2xvY2FsIHN0b3JhZ2VcclxuICAgICAgVG9kb0xvY2FsU3RvcmFnZS5yZW1vdmVUb2RvKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB3YXJuaW5nRGlhbG9nUmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHdhcm5pbmdEaWFsb2cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgLy9yZW1vdmUgZnJvbSBkb21cclxuICAgICAgcHJvamVjdC5yZW1vdmUoKTtcclxuICAgICAgLy9yZW1vdmUgZnJvbSBsb2NhbCBzdG9yYWZlXHJcbiAgICAgIExvY2FsU3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG9CdG5DbGlja2VkID0gKCkgPT4ge1xyXG4gICQoXCJkaWFsb2cubmV3VG9kbyBmb290ZXIgYnV0dG9uOmxhc3QtY2hpbGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiY2xpY2tcIixcclxuICAgIFRvZG9DcmVhdGlvbkNvbnRyb2xsZXJcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZXhwYW5kVG9kb0NvbnRhaW5lciA9ICh0YXJnZXQpID0+IHtcclxuICBjb25zdCB0b2RvRE9NRGl2ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIHRvZG9ET01EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xyXG4gIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2tlZFwiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RET01DbGlja3MoZXZlbnQpIHtcclxuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgaWYgKFxyXG4gICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gXCJidXR0b25cIiAmJlxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZENvbnRlbnRcIilcclxuICApIHtcclxuICAgIC8vZXhwYW5kIHByb2plY3QgdG9kbyBjb250YWluZXJcclxuICAgIGV4cGFuZFRvZG9Db250YWluZXIodGFyZ2V0KTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gXCJidXR0b25cIiAmJlxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZUJ0blwiKVxyXG4gICkge1xyXG4gICAgLy9yZW1vdmUgcHJvamVjdFxyXG4gICAgcmVtb3ZlKHRhcmdldCk7XHJcbiAgfSAvKmVsc2UgaWYgKFxyXG4gICAgdGFyZ2V0LmxvY2FsTmFtZSA9PT0gXCJkaXZcIiAmJlxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNob3dNb3JlXCIpXHJcbiAgKSB7XHJcbiAgICBjb25zdCBpZCA9IGdldERPTVRvZG9Gcm9tRWxlbWVudCh0YXJnZXQpLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcbiAgICAvL2Rpc3BsYXlUb2RvSW5mb0RpYWxvZyhUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG8oaWQpKTtcclxuICAgIGVkaXRUb2RvKGlkKTtcclxuICB9Ki9cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZG9JbmZvRGlhbG9nKHRvZG8pIHtcclxuICBjb25zdCBlZGl0VG9kb0RpYWxvZyA9ICQoXCJkaWFsb2cuZWRpdFRvZG9cIik7XHJcbiAgZWRpdFRvZG9EaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBjb25zdCBlZGl0VG9kb0RpYWxvZ0Zvcm0gPSAkKFwiZGlhbG9nLmVkaXRUb2RvIGZvcm1cIik7XHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlIH0gPSB0b2RvO1xyXG4gIGVkaXRUb2RvRGlhbG9nRm9ybS5lbGVtZW50cy50b2RvVGl0bGUudmFsdWUgPSB0aXRsZTtcclxuICBlZGl0VG9kb0RpYWxvZ0Zvcm0uZWxlbWVudHMuZHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XHJcbiAgZWRpdFRvZG9EaWFsb2dGb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgZWRpdFRvZG9EaWFsb2dGb3JtLmVsZW1lbnRzLnRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZXdUb2RvSW5mbyh0b2RvKSB7XHJcbiAgY29uc3QgZWRpdFRvZG9EaWFsb2dGb3JtID0gJChcImRpYWxvZy5lZGl0VG9kbyBmb3JtXCIpO1xyXG4gIHRvZG8udGl0bGUgPSBlZGl0VG9kb0RpYWxvZ0Zvcm0uZWxlbWVudHMudG9kb1RpdGxlLnZhbHVlO1xyXG4gIHRvZG8uZHVlRGF0ZSA9IGVkaXRUb2RvRGlhbG9nRm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlO1xyXG4gIHRvZG8ucHJpb3JpdHkgPSBlZGl0VG9kb0RpYWxvZ0Zvcm0uZWxlbWVudHMucHJpb3JpdHkudmFsdWU7XHJcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGVkaXRUb2RvRGlhbG9nRm9ybS5lbGVtZW50cy50b2RvRGVzY3JpcHRpb24udmFsdWU7XHJcblxyXG4gIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJFdmVudHMgPSAoKSA9PiB7XHJcbiAgLy9BU0lERVxyXG4gIHNob3dIaWRlQXNpZGUoKTtcclxuXHJcbiAgLy9jbG9zZSBhbnkgZGlhbG9nXHJcbiAgY2xvc2VEaWFsb2coKTtcclxuXHJcbiAgLy9kaXNwbGF5IG5heSBkaWFsb2dcclxuICBkaXNwbGF5RGFpbG9nKCk7XHJcblxyXG4gIGFzaWRlRWxlbWVudHNDbGljaygpO1xyXG5cclxuICBwcm95ZWN0QnRuQ2xpY2tlZCgpO1xyXG5cclxuICAvL2hhbmRsZSBjbGlja3Mgb24gdGhlIHByb2plY3QgY29udGFpbmVyIHJhdGhlciB0aGFuIG9uIGV2ZXJ5IGVsZW1lbnQgKGV4cGFuZCBidXR0b25zLCByZW1vdmUgYnV0dG9ucylcclxuICAkKFwiZGl2LnByb2plY3RDb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RET01DbGlja3MpO1xyXG5cclxuICAvL3RvZG9zXHJcbiAgYWRkVG9kb0J0bkNsaWNrZWQoKTtcclxuXHJcbiAgLy9zaG93IG1vcmUgZGl2XHJcbiAgJChcImRpdi5zaG93TW9yZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWQgPSBnZXRET01Ub2RvRnJvbUVsZW1lbnQodGhpcykuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgIGNvbnN0IHsgdG9kbywgaW5kZXggfSA9IFRvZG9Mb2NhbFN0b3JhZ2UuZ2V0VG9kbyhpZCk7XHJcbiAgICBkaXNwbGF5VG9kb0luZm9EaWFsb2codG9kbyk7XHJcbiAgICAvL2VkaXQgdG9kbyBidG5cclxuICAgICQoXCJidXR0b24uZWRpdFRvZG9CdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZWRpdGVkVG9kbyA9IHNldE5ld1RvZG9JbmZvKHRvZG8pO1xyXG5cclxuICAgICAgLy9Ub2RvTG9jYWxTdG9yYWdlLnNhdmVUb2RvKHsgZWRpdGVkVG9kbywgaW5kZXggfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVkaXRlZFRvZG8pO1xyXG4gICAgICBjb25zb2xlLmxvZyhUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCkpO1xyXG4gICAgICByZW5kZXJBc2lkZUZpZWxkQ29udGVudCgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IFRvZG9MaXN0RmllbGQgfSBmcm9tIFwiLi4vQ09NUE9ORU5UUy9Ub2RvTGlzdEZpZWxkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGdldFRvZG9MaXN0RmllbGRzIH0gZnJvbSBcIi4uL01PREVML1RvZG9MaXN0U2luZ2xldG9uXCI7XHJcbmltcG9ydCB7ICQsICQkIH0gZnJvbSBcIi4uL1VUSUxJVElFUy9TZWxlY3RvcnNcIjtcclxuaW1wb3J0IHsgZXhwYW5kVG9kb0NvbnRhaW5lciB9IGZyb20gXCIuL1JlZ2lzdGVyRXZlbnRzXCI7XHJcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vQ09NUE9ORU5UUy9Qcm9qZWN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgVG9kb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi9NT0RFTC9Mb2NhbFN0b3JhZ2VTaW5nbGV0b25cIjtcclxuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gXCIuLi9DT01QT05FTlRTL1RvZG9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgYWRkV2Vla3NGcm9tRGF0ZSwgaXNEYXRlQmVmb3JlT3RoZXIgfSBmcm9tIFwiLi4vVVRJTElUSUVTL0RhdGVGbnNcIjtcclxuXHJcbmNvbnN0IGRpdlByb2plY3RDb3RhaW5lciA9ICQoXCJkaXYucHJvamVjdENvbnRhaW5lclwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBc2lkZSgpIHtcclxuICBjb25zdCBhc2lkZSA9ICQoXCJib2R5ID4gbWFpbiA+IGFzaWRlXCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IGZpZWxkcyA9IGdldFRvZG9MaXN0RmllbGRzKCk7IC8vcmV0cmVpdmUgZmllbGRzIHdpdGggbmFtZSwgc3ZnIGFuIG90aGVyIGNvbXBvbmVudHMgKG9wdGlvbmFsKVxyXG4gIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IHsgc3BhbjogY29tcG9uZW50LCBhY3RpdmUgfSA9IFRvZG9MaXN0RmllbGQoZmllbGQpOyAvLyBjcmVhdGUgZmllbGRzIHdpdGggbmFtZSwgc3ZnIGFuIG90aGVyIGNvbXBvbmVudHMgKG9wdGlvbmFsKVxyXG4gICAgbGkuYXBwZW5kKGNvbXBvbmVudCk7XHJcbiAgICBpZiAoYWN0aXZlKSBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgdWwuYXBwZW5kKGxpKTtcclxuICB9XHJcbiAgYXNpZGUuYXBwZW5kKHVsKTtcclxufVxyXG5cclxuY29uc3QgY29udGVudFJlbmRlcmVyID0ge1xyXG4gIGFsbDogcmVuZGVyQWxsVG9kb3NGaWVsZCxcclxuICBpbXBvcnRhbnQ6IHJlbmRlckltcG9ydGFudFRvZG9zLFxyXG4gIFwibmV4dCA3IGRheXNcIjogcmVuZGVyTmV4dFdlZWtUb2RvcyxcclxuICBcIm5leHQgbW9udGhcIjogcmVuZGVyTmV4dE1vbnRoVG9kb3MsXHJcbiAgcHJvamVjdHM6IHJlbmRlclByb2plY3RzRmllbGQsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQXNpZGVGaWVsZENvbnRlbnQoKSB7XHJcbiAgZGl2UHJvamVjdENvdGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gIC8vc2V0IGNvbnRlbnRcclxuICByZW5kZXJBY3RpdmVBc2lkZUZpZWxkQ29udGVudCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBY3RpdmVBc2lkZUZpZWxkQ29udGVudCgpIHtcclxuICAvL2dldCB0aGUgbGlzdFxyXG4gIGNvbnN0IGFzaWRlRWxlbWVudHMgPSBbLi4uJCQoXCJhc2lkZSA+IHVsID4gbGlcIildO1xyXG4gIC8vZ2V0IHRoZSBhY3RpdmUgZWxlbWVudCBmcm9tIGl0XHJcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGFzaWRlRWxlbWVudHMuZmlsdGVyKChlbCkgPT5cclxuICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxyXG4gIClbMF07XHJcbiAgLy9zZXQgdGhlIGRhdGEgZnJvbSB0aGUgYWN0aXZlIGVsZW1lbnRcclxuICBjb25zdCB0aXRsZUVsID0gJChcImJvZHkgPiBtYWluID4gc2VjdGlvbiA+IGgxXCIpO1xyXG4gIGNvbnN0IGFzaWRlRmllbGRUZXh0ID0gYWN0aXZlRWxlbWVudC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XHJcbiAgdGl0bGVFbC50ZXh0Q29udGVudCA9IGFzaWRlRmllbGRUZXh0O1xyXG4gIC8vcmVuZGVyIHRoZSBkb20gY29tcG9uZW50cyB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBhY3RpdmUgZWxlbWVudFxyXG4gIGNvbnRlbnRSZW5kZXJlclt0aXRsZUVsLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCldKCk7XHJcbn1cclxuXHJcbi8vUFJPSkVDVCBET00gUkVOREVSSU5HXHJcbmNvbnN0IHJlbmRlckRPTVByb2plY3RzID0gKHByb2plY3RPYmopID0+IHtcclxuICAvL2NyZWF0ZSBodG1sIGNvbXBvbmVudFxyXG4gIGNvbnN0IERPTVByb2plY3QgPSBQcm9qZWN0Q29tcG9uZW50KHByb2plY3RPYmopO1xyXG4gIGRpdlByb2plY3RDb3RhaW5lci5hcHBlbmQoRE9NUHJvamVjdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0ZpZWxkKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gTG9jYWxTdG9yYWdlLmdldFByb2plY3RzKCk7XHJcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHJlbmRlckRPTVByb2plY3RzKHApKTtcclxuICB9XHJcbn1cclxuXHJcbi8vQUxMIEZJRUxEXHJcbmZ1bmN0aW9uIHJlbmRlckRPTVRvZG8odG9kb09iaikge1xyXG4gIGNvbnN0IERPTVRvZG8gPSBUb2RvQ29tcG9uZW50KHRvZG9PYmopO1xyXG4gIGRpdlByb2plY3RDb3RhaW5lci5hcHBlbmQoRE9NVG9kbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zRmllbGQoKSB7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCk7XHJcbiAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG4gIH1cclxufVxyXG5cclxuLy9JTVBPUlRBTlQgRklFTERcclxuZnVuY3Rpb24gcmVuZGVySW1wb3J0YW50VG9kb3MoKSB7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCkuZmlsdGVyKFxyXG4gICAgKHQpID0+IHQucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJoaWdoXCJcclxuICApO1xyXG4gIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG59XHJcblxyXG4vL05FWFQgV0VFSyAoNyBkYXlzIG9yIDEgd2VlayBmcm9tIHRvZGF5cyBkYXRlKVxyXG5mdW5jdGlvbiByZW5kZXJOZXh0V2Vla1RvZG9zKG51bWJlcikge1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBsaW1pdCA9IGFkZFdlZWtzRnJvbURhdGUodG9kYXksIDEpO1xyXG4gIGNvbnN0IHRvZG9zID0gVG9kb0xvY2FsU3RvcmFnZS5nZXRUb2RvcygpLmZpbHRlcigodCkgPT5cclxuICAgIGlzRGF0ZUJlZm9yZU90aGVyKERhdGUucGFyc2UodC5kdWVEYXRlKSwgbGltaXQpXHJcbiAgKTtcclxuICB0b2Rvcy5mb3JFYWNoKCh0KSA9PiByZW5kZXJET01Ub2RvKHQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmV4dE1vbnRoVG9kb3MoKSB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGxpbWl0ID0gYWRkV2Vla3NGcm9tRGF0ZSh0b2RheSwgNCk7XHJcbiAgY29uc3QgdG9kb3MgPSBUb2RvTG9jYWxTdG9yYWdlLmdldFRvZG9zKCkuZmlsdGVyKCh0KSA9PlxyXG4gICAgaXNEYXRlQmVmb3JlT3RoZXIoRGF0ZS5wYXJzZSh0LmR1ZURhdGUpLCBsaW1pdClcclxuICApO1xyXG4gIHRvZG9zLmZvckVhY2goKHQpID0+IHJlbmRlckRPTVRvZG8odCkpO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLS1uYXZCYWNrZ3JvdW5kOiAjZjU5ZTBiO1xyXG4gIC0tYmFja2dyb3VuZENvbG9yOiAjZmZmYmViO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcclxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qTkFWQkFSKi9cclxuYm9keSA+IG5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbSAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbmJvZHkgPiBuYXYgc3BhbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMmVtO1xyXG59XHJcblxyXG5ib2R5ID4gbmF2IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keSA+IG5hdiBidXR0b246aG92ZXIsXHJcbmJvZHkgPiBuYXYgYnV0dG9uOmhvdmVyIGRpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbmJvZHkgPiBuYXYgYnV0dG9uID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4vKk5hdmJhciBidXR0b24gc3R5bGluZyovXHJcblxyXG5idXR0b24ubWVudSBkaXYge1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDAlIDUlLFxyXG4gICAgMTAwJSA1JSxcclxuICAgIDEwMCUgMjUlLFxyXG4gICAgMCUgMjUlLFxyXG4gICAgMCUgNDAlLFxyXG4gICAgMTAwJSA0MCUsXHJcbiAgICAxMDAlIDYwJSxcclxuICAgIDAlIDYwJSxcclxuICAgIDAlIDc1JSxcclxuICAgIDEwMCUgNzUlLFxyXG4gICAgMTAwJSA5NSUsXHJcbiAgICAwJSA5NSVcclxuICApO1xyXG59XHJcblxyXG5idXR0b24ubmV3VG9kbyBkaXYge1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDM1JSAwJSxcclxuICAgIDY1JSAwJSxcclxuICAgIDY1JSAzNSUsXHJcbiAgICAxMDAlIDM1JSxcclxuICAgIDEwMCUgNjAlLFxyXG4gICAgNjUlIDYwJSxcclxuICAgIDY1JSAxMDAlLFxyXG4gICAgMzUlIDEwMCUsXHJcbiAgICAzNSUgNjAlLFxyXG4gICAgMCUgNjAlLFxyXG4gICAgMCUgMzUlLFxyXG4gICAgMzUlIDM1JVxyXG4gICk7XHJcbn1cclxuXHJcbmJ1dHRvbi50b2RheSBkaXYge1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDUwJSAwJSxcclxuICAgIDcwJSAxNSUsXHJcbiAgICA3MCUgMiUsXHJcbiAgICA5MCUgMiUsXHJcbiAgICA5MCUgMzAlLFxyXG4gICAgMTAwJSA0MCUsXHJcbiAgICAxMDAlIDEwMCUsXHJcbiAgICA2NSUgMTAwJSxcclxuICAgIDY1JSA2NSUsXHJcbiAgICAzNSUgNjUlLFxyXG4gICAgMzUlIDEwMCUsXHJcbiAgICAwJSAxMDAlLFxyXG4gICAgMCUgNDAlXHJcbiAgKTtcclxufVxyXG5cclxuLypNYWluIENvbnRlbnQqL1xyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFlbTtcclxufVxyXG5cclxuYXNpZGUuaGlkZGVuIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYXNpZGUge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkZDU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDUwMG1zLCB0cmFuc2Zvcm0gZWFzZSA1MDBtcztcclxufVxyXG5cclxuYXNpZGUgPiB1bCB7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gIG1hcmdpbi10b3A6IDBlbTtcclxufVxyXG5cclxuYXNpZGUgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuYXNpZGUgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5hc2lkZSB1bCBsaTpob3ZlcixcclxuYXNpZGUgdWwgbGkuYWN0aXZlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxuYXNpZGUgdWwgbGkgc3BhbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5hc2lkZSBzdmcge1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgc3Ryb2tlOiBibGFjaztcclxufVxyXG5cclxuYXNpZGUgYnV0dG9uLm5ld1Byb2plY3Qge1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDM1JSAwJSxcclxuICAgIDY1JSAwJSxcclxuICAgIDY1JSAzNSUsXHJcbiAgICAxMDAlIDM1JSxcclxuICAgIDEwMCUgNjAlLFxyXG4gICAgNjUlIDYwJSxcclxuICAgIDY1JSAxMDAlLFxyXG4gICAgMzUlIDEwMCUsXHJcbiAgICAzNSUgNjAlLFxyXG4gICAgMCUgNjAlLFxyXG4gICAgMCUgMzUlLFxyXG4gICAgMzUlIDM1JVxyXG4gICk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmFzaWRlIGJ1dHRvbi5uZXdQcm9qZWN0OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xyXG59XHJcblxyXG4vKk1haW4gY29udGFpbmVyICovXHJcblxyXG5ib2R5ID4gbWFpbi5hc2lkZU9wZW4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcclxufVxyXG5cclxuYm9keSA+IG1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFlbTtcclxufVxyXG5cclxuYm9keSA+IG1haW4gPiBzZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxZW0gNGVtO1xyXG59XHJcblxyXG5ib2R5ID4gbWFpbiA+IHNlY3Rpb24gPiBkaXYudG9kb0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDFlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keSA+IG1haW4uYXNpZGVPcGVuID4gc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG5tYWluID4gc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbm1haW4gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi8qTW9kYWxzKi9cclxuXHJcbmRpYWxvZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlIDUwMG1zLCBvcGFjaXR5IGVhc2UgNTAwbXM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDY1JSAxNSU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxufVxyXG5cclxuZGlhbG9nLmhpZGRlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmRpYWxvZyBoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGlhbG9nIGhlYWRlciBoNiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbmRpYWxvZyBzcGFuLmNsb3NlRGlhbG9nOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbmRpYWxvZyBzcGFuLmNsb3NlRGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxyXG4gICAgMzUlIDAlLFxyXG4gICAgNjUlIDAlLFxyXG4gICAgNjUlIDM1JSxcclxuICAgIDEwMCUgMzUlLFxyXG4gICAgMTAwJSA2MCUsXHJcbiAgICA2NSUgNjAlLFxyXG4gICAgNjUlIDEwMCUsXHJcbiAgICAzNSUgMTAwJSxcclxuICAgIDM1JSA2MCUsXHJcbiAgICAwJSA2MCUsXHJcbiAgICAwJSAzNSUsXHJcbiAgICAzNSUgMzUlXHJcbiAgKTtcclxufVxyXG5cclxuZGlhbG9nIGZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMS41ZW07XHJcbn1cclxuXHJcbmRpYWxvZyBmb290ZXIgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5kaWFsb2cgZm9vdGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5kaWFsb2cgZm9vdGVyIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuZGlhbG9nIGZvb3RlciBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHNub3c7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdQcm9qZWN0IHtcclxuICB3aWR0aDogODB2aDtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIGNvbHVtbi1nYXA6IDFlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaWFsb2cubmV3UHJvamVjdCBtYWluIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdQcm9qZWN0IGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8sXHJcbmRpYWxvZy5lZGl0VG9kbyB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyA+IG1haW4gZm9ybSxcclxuZGlhbG9nLmVkaXRUb2RvID4gbWFpbiBmb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDJlbTtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSxcclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMSksXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sdW1uLWdhcDogMmVtO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb24gbGFiZWwsXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb24gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSBsYWJlbCxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMSkgbGFiZWwge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSBpbnB1dCxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMSkgaW5wdXQge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogNztcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGxhYmVsOmZpcnN0LW9mLXR5cGUsXHJcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgaW5wdXQge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGxhYmVsOmxhc3Qtb2YtdHlwZSxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6bGFzdC1vZi10eXBlIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogNDtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XHJcbn1cclxuXHJcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgc2VsZWN0LFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBzZWxlY3Qge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogNztcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDMpLFxyXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgzKSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxufVxyXG5cclxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgzKSB0ZXh0YXJlYSxcclxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykgdGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG4vKlByb2plY3RzKi9cclxuZGl2LnByb2plY3RDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgcm93LWdhcDogMWVtO1xyXG4gIHBhZGRpbmc6IDFlbSAyZW07XHJcbn1cclxuXHJcbmRpYWxvZyBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuZGlhbG9nIGlucHV0LmludmFsaWQge1xyXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xyXG4gIG91dGxpbmUtd2lkdGg6IDJweDtcclxuICBvdXRsaW5lLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuZGlhbG9nLmVsaW1pbmF0aW9uV2FybmluZyBoNiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLypDaGVja2JveCBhbmltYXRpb24gYnkgaGVucnkgw7ZobWFuIGZyb20gY29kZXBlbiovXHJcbi5wcm9qZWN0IHtcclxuICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVkZDU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxLjVlbTtcclxufVxyXG5cclxuLnByb2plY3Qgc2VjdGlvbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3QgLnRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMWVtO1xyXG59XHJcblxyXG5kaXYudG9kbyAuZGVsZXRlQnRuLFxyXG4ucHJvamVjdCAuZGVsZXRlQnRuIHtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbihcclxuICAgIDM1JSAwJSxcclxuICAgIDY1JSAwJSxcclxuICAgIDY1JSAzNSUsXHJcbiAgICAxMDAlIDM1JSxcclxuICAgIDEwMCUgNjAlLFxyXG4gICAgNjUlIDYwJSxcclxuICAgIDY1JSAxMDAlLFxyXG4gICAgMzUlIDEwMCUsXHJcbiAgICAzNSUgNjAlLFxyXG4gICAgMCUgNjAlLFxyXG4gICAgMCUgMzUlLFxyXG4gICAgMzUlIDM1JVxyXG4gICk7XHJcbn1cclxuXHJcbmRpdi50b2RvIC5kZWxldGVCdG46aG92ZXIsXHJcbi5wcm9qZWN0IC5kZWxldGVCdG46aG92ZXIsXHJcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgcm90YXRlKDQ1ZGVnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50IHtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIHdpZHRoOiAxLjVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcclxufVxyXG5cclxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQ6aG92ZXIsXHJcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50LmNsaWNrZWQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgcm90YXRlKDkwZGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLypQcm9qZWN0IFRvZG8gc2VjdGlvbiovXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiB7XHJcbiAgcGFkZGluZzogMWVtIDJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIHJvdy1nYXA6IDAuNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucHJvamVjdC5leHBhbmRlZCBzZWN0aW9uLm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5kaXYudG9kbyxcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41ZW0gM2VtO1xyXG59XHJcblxyXG5kaXYudG9kbyA+IGRpdixcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxZW07XHJcbn1cclxuXHJcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICBnYXA6IDJlbTtcclxufVxyXG5cclxuZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmUsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBjb2x1bW4tZ2FwOiAwLjI1ZW07XHJcbn1cclxuXHJcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyLFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyIGRpdixcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyIGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlIGRpdixcclxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlIGRpdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAwLjVlbTtcclxuICBoZWlnaHQ6IDAuNWVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5kaXYudG9kbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuZGl2LnRvZG8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHdpZ2dsZSAwLjRzIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xyXG59XHJcblxyXG5kaXYudG9kbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIHNwYW4udG9kb1RpdGxlLFxyXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBzcGFuLnRvZG9UaXRsZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHdpZ2dsZSAwLjRzIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xyXG59XHJcblxyXG5kaXYudG9kbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZGl2LnRvZG8gc3Bhbi50b2RvVGl0bGUsXHJcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBzcGFuLnRvZG9UaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2lnZ2xlIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMC43NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAxLjI1KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1LCAwLjg1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSwgMC44NSk7XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB3aWdnbGUge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1LCAwLjc1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMC43NSk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSwgMS4yNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1LCAwLjg1KTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMS4wNSk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0I7d0VBQ3NFO0VBQ3RFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTs7RUFF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Q0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICAtLW5hdkJhY2tncm91bmQ6ICNmNTllMGI7XFxyXFxuICAtLWJhY2tncm91bmRDb2xvcjogI2ZmZmJlYjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDkwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKk5BVkJBUiovXFxyXFxuYm9keSA+IG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW0gM2VtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBuYXYgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IG5hdiBidXR0b24ge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbmF2IGJ1dHRvbjpob3ZlcixcXHJcXG5ib2R5ID4gbmF2IGJ1dHRvbjpob3ZlciBkaXYge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbmF2IGJ1dHRvbiA+IGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLypOYXZiYXIgYnV0dG9uIHN0eWxpbmcqL1xcclxcblxcclxcbmJ1dHRvbi5tZW51IGRpdiB7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAlIDUlLFxcclxcbiAgICAxMDAlIDUlLFxcclxcbiAgICAxMDAlIDI1JSxcXHJcXG4gICAgMCUgMjUlLFxcclxcbiAgICAwJSA0MCUsXFxyXFxuICAgIDEwMCUgNDAlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgMCUgNjAlLFxcclxcbiAgICAwJSA3NSUsXFxyXFxuICAgIDEwMCUgNzUlLFxcclxcbiAgICAxMDAlIDk1JSxcXHJcXG4gICAgMCUgOTUlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ubmV3VG9kbyBkaXYge1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAzNSUgMCUsXFxyXFxuICAgIDY1JSAwJSxcXHJcXG4gICAgNjUlIDM1JSxcXHJcXG4gICAgMTAwJSAzNSUsXFxyXFxuICAgIDEwMCUgNjAlLFxcclxcbiAgICA2NSUgNjAlLFxcclxcbiAgICA2NSUgMTAwJSxcXHJcXG4gICAgMzUlIDEwMCUsXFxyXFxuICAgIDM1JSA2MCUsXFxyXFxuICAgIDAlIDYwJSxcXHJcXG4gICAgMCUgMzUlLFxcclxcbiAgICAzNSUgMzUlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24udG9kYXkgZGl2IHtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgNTAlIDAlLFxcclxcbiAgICA3MCUgMTUlLFxcclxcbiAgICA3MCUgMiUsXFxyXFxuICAgIDkwJSAyJSxcXHJcXG4gICAgOTAlIDMwJSxcXHJcXG4gICAgMTAwJSA0MCUsXFxyXFxuICAgIDEwMCUgMTAwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDY1JSA2NSUsXFxyXFxuICAgIDM1JSA2NSUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAwJSAxMDAlLFxcclxcbiAgICAwJSA0MCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbi8qTWFpbiBDb250ZW50Ki9cXHJcXG5tYWluIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbmFzaWRlLmhpZGRlbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkNTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSA1MDBtcywgdHJhbnNmb3JtIGVhc2UgNTAwbXM7XFxyXFxufVxcclxcblxcclxcbmFzaWRlID4gdWwge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgbWFyZ2luLXRvcDogMGVtO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgdWwgbGkge1xcclxcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUgdWwgbGk6aG92ZXIsXFxyXFxuYXNpZGUgdWwgbGkuYWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHVsIGxpIHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHN2ZyB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBzdHJva2U6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSBidXR0b24ubmV3UHJvamVjdCB7XFxyXFxuICB3aWR0aDogMWVtO1xcclxcbiAgaGVpZ2h0OiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMzUlIDAlLFxcclxcbiAgICA2NSUgMCUsXFxyXFxuICAgIDY1JSAzNSUsXFxyXFxuICAgIDEwMCUgMzUlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgNjUlIDYwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAzNSUgNjAlLFxcclxcbiAgICAwJSA2MCUsXFxyXFxuICAgIDAlIDM1JSxcXHJcXG4gICAgMzUlIDM1JVxcclxcbiAgKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGJ1dHRvbi5uZXdQcm9qZWN0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gY29udGFpbmVyICovXFxyXFxuXFxyXFxuYm9keSA+IG1haW4uYXNpZGVPcGVuIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluID4gc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAxZW0gNGVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbWFpbiA+IHNlY3Rpb24gPiBkaXYudG9kb0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLmFzaWRlT3BlbiA+IHNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluID4gc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxubWFpbiBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbi8qTW9kYWxzKi9cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgNTAwbXMsIG9wYWNpdHkgZWFzZSA1MDBtcztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNjUlIDE1JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxZW0gMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cuaGlkZGVuIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBoZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cgaGVhZGVyIGg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2c6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZCYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHNwYW4uY2xvc2VEaWFsb2cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDFlbTtcXHJcXG4gIGhlaWdodDogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDM1JSAwJSxcXHJcXG4gICAgNjUlIDAlLFxcclxcbiAgICA2NSUgMzUlLFxcclxcbiAgICAxMDAlIDM1JSxcXHJcXG4gICAgMTAwJSA2MCUsXFxyXFxuICAgIDY1JSA2MCUsXFxyXFxuICAgIDY1JSAxMDAlLFxcclxcbiAgICAzNSUgMTAwJSxcXHJcXG4gICAgMzUlIDYwJSxcXHJcXG4gICAgMCUgNjAlLFxcclxcbiAgICAwJSAzNSUsXFxyXFxuICAgIDM1JSAzNSVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIGZvb3RlciBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIGZvb3RlciBidXR0b246Zmlyc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBmb290ZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogc25vdztcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1Byb2plY3Qge1xcclxcbiAgd2lkdGg6IDgwdmg7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdQcm9qZWN0IG1haW4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1Byb2plY3QgbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyxcXHJcXG5kaWFsb2cuZWRpdFRvZG8ge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvID4gbWFpbiBmb3JtLFxcclxcbmRpYWxvZy5lZGl0VG9kbyA+IG1haW4gZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMSksXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgxKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XFxyXFxuICBjb2x1bW4tZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbiBsYWJlbCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGxhYmVsLFxcclxcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGxhYmVsIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGlucHV0LFxcclxcbmRpYWxvZy5lZGl0VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDEpIGlucHV0IHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiA3O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIGxhYmVsOmZpcnN0LW9mLXR5cGUsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBpbnB1dCB7XFxyXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLm5ld1RvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBsYWJlbDpsYXN0LW9mLXR5cGUsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMikgbGFiZWw6bGFzdC1vZi10eXBlIHtcXHJcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcclxcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cubmV3VG9kbyBmb3JtIHNlY3Rpb246bnRoLWNoaWxkKDIpIHNlbGVjdCxcXHJcXG5kaWFsb2cuZWRpdFRvZG8gZm9ybSBzZWN0aW9uOm50aC1jaGlsZCgyKSBzZWxlY3Qge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XFxyXFxuICBncmlkLWNvbHVtbi1lbmQ6IDc7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMyksXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxufVxcclxcblxcclxcbmRpYWxvZy5uZXdUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykgdGV4dGFyZWEsXFxyXFxuZGlhbG9nLmVkaXRUb2RvIGZvcm0gc2VjdGlvbjpudGgtY2hpbGQoMykgdGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlByb2plY3RzKi9cXHJcXG5kaXYucHJvamVjdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHJvdy1nYXA6IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyBpbnB1dC5pbnZhbGlkIHtcXHJcXG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xcclxcbiAgb3V0bGluZS13aWR0aDogMnB4O1xcclxcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nLmVsaW1pbmF0aW9uV2FybmluZyBoNiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkNoZWNrYm94IGFuaW1hdGlvbiBieSBoZW5yeSDDtmhtYW4gZnJvbSBjb2RlcGVuKi9cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gM2VtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWRkNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBzZWN0aW9uLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC50ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gLmRlbGV0ZUJ0bixcXHJcXG4ucHJvamVjdCAuZGVsZXRlQnRuIHtcXHJcXG4gIGhlaWdodDogMS41ZW07XFxyXFxuICB3aWR0aDogMS41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMzUlIDAlLFxcclxcbiAgICA2NSUgMCUsXFxyXFxuICAgIDY1JSAzNSUsXFxyXFxuICAgIDEwMCUgMzUlLFxcclxcbiAgICAxMDAlIDYwJSxcXHJcXG4gICAgNjUlIDYwJSxcXHJcXG4gICAgNjUlIDEwMCUsXFxyXFxuICAgIDM1JSAxMDAlLFxcclxcbiAgICAzNSUgNjAlLFxcclxcbiAgICAwJSA2MCUsXFxyXFxuICAgIDAlIDM1JSxcXHJcXG4gICAgMzUlIDM1JVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gLmRlbGV0ZUJ0bjpob3ZlcixcXHJcXG4ucHJvamVjdCAuZGVsZXRlQnRuOmhvdmVyLFxcclxcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2QmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5leHBhbmRDb250ZW50IHtcXHJcXG4gIGhlaWdodDogMS41ZW07XFxyXFxuICB3aWR0aDogMS41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQ6aG92ZXIsXFxyXFxuLnByb2plY3QgLmV4cGFuZENvbnRlbnQuY2xpY2tlZCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSkgcm90YXRlKDkwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlByb2plY3QgVG9kbyBzZWN0aW9uKi9cXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4ge1xcclxcbiAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgcm93LWdhcDogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LmV4cGFuZGVkIHNlY3Rpb24ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8sXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gPiBkaXYsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkLFxcclxcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSxcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAwLjI1ZW07XFxyXFxufVxcclxcblxcclxcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyLFxcclxcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBkaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbmRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlOmhvdmVyIGRpdixcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gZGl2LnRvZG8gPiBkaXY6bGFzdC1jaGlsZCBkaXYuc2hvd01vcmU6aG92ZXIgZGl2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyA+IGRpdjpsYXN0LWNoaWxkIGRpdi5zaG93TW9yZSBkaXYsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGRpdi50b2RvID4gZGl2Omxhc3QtY2hpbGQgZGl2LnNob3dNb3JlIGRpdiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHdpZHRoOiAwLjVlbTtcXHJcXG4gIGhlaWdodDogMC41ZW07XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4ucHJvamVjdCBzZWN0aW9uLm1haW4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBhY2NlbnQtY29sb3I6IHZhcigtLW5hdkJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcXHJcXG4gIGFuaW1hdGlvbjogd2lnZ2xlIDAuNHMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgc3Bhbi50b2RvVGl0bGUsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIHNwYW4udG9kb1RpdGxlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xcclxcbiAgYW5pbWF0aW9uOiB3aWdnbGUgMC40cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudG9kbyBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVyLFxcclxcbi5wcm9qZWN0IHNlY3Rpb24ubWFpbiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRvZG8gc3Bhbi50b2RvVGl0bGUsXFxyXFxuLnByb2plY3Qgc2VjdGlvbi5tYWluIHNwYW4udG9kb1RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyB3aWdnbGUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gIH1cXHJcXG4gIDMwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1LCAwLjc1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1LCAwLjc1KTtcXHJcXG4gIH1cXHJcXG4gIDQwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAxLjI1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAxLjI1KTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1LCAwLjg1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1LCAwLjg1KTtcXHJcXG4gIH1cXHJcXG4gIDY1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTtcXHJcXG4gIH1cXHJcXG4gIDc1JSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAwLjk1KTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHdpZ2dsZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbiAgMzAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDAuNzUpO1xcclxcbiAgfVxcclxcbiAgNDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDEuMjUpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpO1xcclxcbiAgfVxcclxcbiAgNjUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsIDEuMDUpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFdmVudHMgfSBmcm9tIFwiLi9KUy9WSUVXL1JlZ2lzdGVyRXZlbnRzXCI7XHJcbmltcG9ydCB7IHJlbmRlckFzaWRlLCByZW5kZXJBc2lkZUZpZWxkQ29udGVudCB9IGZyb20gXCIuL0pTL1ZJRVcvVUlcIjtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvL2lmIGFueSBlbGVtZW50IG5lZWRzIHRvIGJlIGRpbmFtaWNhbGx5IHJlbmRlcmVkXHJcbiAgcmVuZGVyQXNpZGUoKTsgLy9VSVxyXG4gIHJlbmRlckFzaWRlRmllbGRDb250ZW50KCk7XHJcbiAgcmVnaXN0ZXJFdmVudHMoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJhc3NpZ24iLCJ0YXJnZXQiLCJvYmplY3QiLCJUeXBlRXJyb3IiLCJwcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNsb25lT2JqZWN0IiwiZGVmYXVsdExvY2FsZSIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzZXREZWZhdWx0T3B0aW9ucyIsIm5ld09wdGlvbnMiLCJnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIiwiZGF0ZSIsInV0Y0RhdGUiLCJEYXRlIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic2V0VVRDRnVsbFllYXIiLCJnZXRUaW1lIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwicm91bmRpbmdNYXAiLCJjZWlsIiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJ0cnVuYyIsInZhbHVlIiwiZGVmYXVsdFJvdW5kaW5nTWV0aG9kIiwiZ2V0Um91bmRpbmdNZXRob2QiLCJtZXRob2QiLCJ0b0ludGVnZXIiLCJkaXJ0eU51bWJlciIsIk5hTiIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwidG9EYXRlIiwiYWRkRGF5cyIsImRpcnR5RGF0ZSIsImRpcnR5QW1vdW50IiwiYXJndW1lbnRzIiwiYW1vdW50Iiwic2V0RGF0ZSIsImFkZFdlZWtzIiwiZGF5cyIsImNvbXBhcmVBc2MiLCJkaXJ0eURhdGVMZWZ0IiwiZGlydHlEYXRlUmlnaHQiLCJkYXRlTGVmdCIsImRhdGVSaWdodCIsImRpZmYiLCJkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyIsInllYXJEaWZmIiwibW9udGhEaWZmIiwiZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIiwiaXNMYXN0RGF5T2ZNb250aCIsImRpZmZlcmVuY2VJbk1vbnRocyIsInNpZ24iLCJkaWZmZXJlbmNlIiwiYWJzIiwicmVzdWx0Iiwic2V0TW9udGgiLCJpc0xhc3RNb250aE5vdEZ1bGwiLCJkaWZmZXJlbmNlSW5TZWNvbmRzIiwib3B0aW9ucyIsInJvdW5kaW5nTWV0aG9kIiwiZW5kT2ZEYXkiLCJzZXRIb3VycyIsImVuZE9mTW9udGgiLCJtb250aCIsInNldEZ1bGxZZWFyIiwiZGlzdGFuY2VJbldvcmRzIiwiZm9ybWF0RGlzdGFuY2VUb05vdyIsIm5vdyIsIk1JTlVURVNfSU5fREFZIiwiTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMiLCJNSU5VVEVTX0lOX01PTlRIIiwiTUlOVVRFU19JTl9UV09fTU9OVEhTIiwiZm9ybWF0RGlzdGFuY2UiLCJkaXJ0eUJhc2VEYXRlIiwiX3JlZiIsIl9vcHRpb25zJGxvY2FsZSIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJjb21wYXJpc29uIiwibG9jYWxpemVPcHRpb25zIiwiYWRkU3VmZml4IiwiQm9vbGVhbiIsInNlY29uZHMiLCJvZmZzZXRJblNlY29uZHMiLCJtaW51dGVzIiwibW9udGhzIiwiaW5jbHVkZVNlY29uZHMiLCJob3VycyIsIm5lYXJlc3RNb250aCIsIm1vbnRoc1NpbmNlU3RhcnRPZlllYXIiLCJ5ZWFycyIsImdldERheXNJbk1vbnRoIiwieWVhciIsIm1vbnRoSW5kZXgiLCJsYXN0RGF5T2ZNb250aCIsImlzQmVmb3JlIiwiZGlydHlEYXRlVG9Db21wYXJlIiwiZGF0ZVRvQ29tcGFyZSIsImJ1aWxkRm9ybWF0TG9uZ0ZuIiwid2lkdGgiLCJTdHJpbmciLCJkZWZhdWx0V2lkdGgiLCJmb3JtYXQiLCJmb3JtYXRzIiwiYnVpbGRMb2NhbGl6ZUZuIiwiZGlydHlJbmRleCIsImNvbnRleHQiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImluZGV4IiwiYXJndW1lbnRDYWxsYmFjayIsImJ1aWxkTWF0Y2hGbiIsInN0cmluZyIsIm1hdGNoUGF0dGVybiIsIm1hdGNoUGF0dGVybnMiLCJkZWZhdWx0TWF0Y2hXaWR0aCIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJtYXRjaGVkU3RyaW5nIiwicGFyc2VQYXR0ZXJucyIsImRlZmF1bHRQYXJzZVdpZHRoIiwia2V5IiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZEluZGV4IiwicGF0dGVybiIsInRlc3QiLCJmaW5kS2V5IiwidmFsdWVDYWxsYmFjayIsInJlc3QiLCJzbGljZSIsInByZWRpY2F0ZSIsImFycmF5IiwiYnVpbGRNYXRjaFBhdHRlcm5GbiIsInBhcnNlUmVzdWx0IiwicGFyc2VQYXR0ZXJuIiwiZm9ybWF0RGlzdGFuY2VMb2NhbGUiLCJsZXNzVGhhblhTZWNvbmRzIiwib25lIiwib3RoZXIiLCJ4U2Vjb25kcyIsImhhbGZBTWludXRlIiwibGVzc1RoYW5YTWludXRlcyIsInhNaW51dGVzIiwiYWJvdXRYSG91cnMiLCJ4SG91cnMiLCJ4RGF5cyIsImFib3V0WFdlZWtzIiwieFdlZWtzIiwiYWJvdXRYTW9udGhzIiwieE1vbnRocyIsImFib3V0WFllYXJzIiwieFllYXJzIiwib3ZlclhZZWFycyIsImFsbW9zdFhZZWFycyIsInRva2VuIiwiY291bnQiLCJ0b2tlblZhbHVlIiwicmVwbGFjZSIsImRhdGVGb3JtYXRzIiwiZnVsbCIsIm1lZGl1bSIsInRpbWVGb3JtYXRzIiwiZGF0ZVRpbWVGb3JtYXRzIiwiZm9ybWF0TG9uZyIsInRpbWUiLCJkYXRlVGltZSIsImZvcm1hdFJlbGF0aXZlTG9jYWxlIiwibGFzdFdlZWsiLCJ5ZXN0ZXJkYXkiLCJ0b2RheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiX29wdGlvbnMiLCJlcmFWYWx1ZXMiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJxdWFydGVyVmFsdWVzIiwibW9udGhWYWx1ZXMiLCJkYXlWYWx1ZXMiLCJkYXlQZXJpb2RWYWx1ZXMiLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMiLCJvcmRpbmFsTnVtYmVyIiwicmVtMTAwIiwibG9jYWxpemUiLCJlcmEiLCJxdWFydGVyIiwiZGF5IiwiZGF5UGVyaW9kIiwibWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiIsInBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4iLCJtYXRjaEVyYVBhdHRlcm5zIiwicGFyc2VFcmFQYXR0ZXJucyIsImFueSIsIm1hdGNoUXVhcnRlclBhdHRlcm5zIiwicGFyc2VRdWFydGVyUGF0dGVybnMiLCJtYXRjaE1vbnRoUGF0dGVybnMiLCJwYXJzZU1vbnRoUGF0dGVybnMiLCJtYXRjaERheVBhdHRlcm5zIiwicGFyc2VEYXlQYXR0ZXJucyIsIm1hdGNoRGF5UGVyaW9kUGF0dGVybnMiLCJwYXJzZURheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VJbnQiLCJjb2RlIiwid2Vla1N0YXJ0c09uIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwiX3R5cGVvZiIsImFyZ3VtZW50IiwiYXJnU3RyIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInN0YWNrIiwiRGlhbG9nRGlzcGxheWVyQnV0dG9uIiwiYWRkaXRpb25hbENsYXNlcyIsImJ0biIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJhZGRpaXRpb25hbENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXJyIiwiZSIsImYiLCJQcm9qZWN0Q29tcG9uZW50IiwidGl0bGUiLCJwcm9qZWN0RGl2IiwiaW5uZXJIVE1MIiwidGltZURpc3RhbmNlRnJvbU5vdyIsIlRvZG9Db21wb25lbnQiLCJ0b2RvT2JqIiwiZHVlRGF0ZSIsInRvZG9EaXYiLCJUb2RvTGlzdEZpZWxkIiwiY29tcG9uZW50Iiwic3BhbiIsImFjdGl2ZSIsImltYWdlIiwibmFtZSIsIm90aGVyQ29tcG9uZW50cyIsImFwcGVuZCIsIiQiLCIkJCIsIlByb3llY3RGYWN0b3J5IiwiTG9jYWxTdG9yYWdlIiwiVG9kb0xvY2FsU3RvcmFnZSIsIlRvZG9GYWN0b3J5IiwicmVuZGVyQXNpZGVGaWVsZENvbnRlbnQiLCJoYW5kbGVQcm9qZWN0Q3JlYXRpb24iLCJ2YWxpZGF0ZVByb2plY3RDcmVhdGlvbiIsInByb2plY3QiLCJhZGRQcm9qZWN0IiwiaW5wdXQiLCJ2YWxpZCIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInZhbGlkYXRlVG9kbyIsInRvZG9Gb3JtIiwiZWxlbWVudHMiLCJ0b2RvVGl0bGUiLCJ0b0xvd2VyQ2FzZSIsInRvZG9EZXNjcmlwdGlvbiIsImdldFRvZG9Gb3JtRGF0YSIsInByaW9yaXR5IiwiZGVzY3JpcHRpb24iLCJUb2RvQ3JlYXRpb25Db250cm9sbGVyIiwiX2dldFRvZG9Gb3JtRGF0YSIsImFkZFRvZG8iLCJwYXJlbnRFbGVtZW50IiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVQcm9qZWN0cyIsInNldEl0ZW0iLCJ1bnNoaWZ0IiwicmVtb3ZlUHJvamVjdCIsInByb2plY3RJZCIsImlkVmFsaWRhdGlvbiIsImZpbHRlciIsInAiLCJ0b2RvcyIsImdldFRvZG9zIiwic2F2ZVRvZG9zIiwidG9kbyIsInJlbW92ZVRvZG8iLCJ0b2RvSWQiLCJ0IiwiZ2V0VG9kbyIsInNhdmVUb2RvIiwiY2hlY2tlZEV4dGVuc2lvbiIsIl9jaGVja2VkIiwiZXh0ZW5zaW9uc0FycmF5IiwicHJveWVjdEV4dGVuc2lvbiIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25zUHJvdG8iLCJmb3JFYWNoIiwiZXh0ZW5zaW9uIiwicHJveWVjdEJhc2ljRGF0YSIsImJhc2ljIiwiY29tcG9zaXRlIiwiY3JlYXRlIiwicHJvamVjdEV4dGVuc2lvbiIsInByb3llY3RUaXRsZSIsImR1ZURhdGVFeHRlbnNpb24iLCJjaGVja2VkIiwicHJpb3JpdGllc0V4dGVuc2lvbiIsImRlc2NyaXB0aW9uRXh0ZW5zaW9uIiwidG9kb0V4dGVuc2lvbnMiLCJiYXNlT2JqIiwiYmFzaWNEYXRhIiwiQUxMX1NWRyIsImFsbEZpZWxkIiwiSU1QT1JUQU5UX1NWRyIsImltcG9ydGFudEZpZWxkIiwiTkVYVF83X0RBWVNfU1ZHIiwibmV4dDdEYXlzRmllbGQiLCJORVhUX01PTlRIX1NWRyIsIm5leHRNb250aEZpZWxkIiwiUFJPSkVDVFNfU1ZHIiwicHJvamVjdHNGaWVsZCIsInRvZG9MaXN0RmllbGRzIiwiZ2V0VG9kb0xpc3RGaWVsZHMiLCJUb2RvTGlzdCIsImFkZFdlZWtzRnJvbURhdGUiLCJudW1iZXJPZldlZWtzIiwiZ2V0RGF5c01vbnRoIiwiaXNEYXRlQmVmb3JlT3RoZXIiLCJkYXRlTGltaXQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RE9NVG9kb0Zyb21FbGVtZW50IiwiZWxlbWVudCIsImdldERPTVByb2plY3RGcm9tRWxlbWVudCIsInNob3dIaWRlQXNpZGUiLCJtZW51QnRuIiwiYXNpZGUiLCJ0b2dnbGUiLCJjb250YWlucyIsImRpc3BsYXlEYWlsb2ciLCJkaWFsb2dEaXNwbGF5ZXJCdG5zIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZWwiLCJzaG93RGlhbG9nIiwiZGlhbG9nRWwiLCJpc0RpYWxvZ0hpZGRlbiIsImNsb3NlRGlhbG9nIiwiZGlhbG9nQ2xvc2luZ0VsZW1lbnRzIiwiaGlkZURpYWxvZyIsImFzaWRlRWxlbWVudHNDbGljayIsImFzaWRlRWxlbWVudHMiLCJ0b29nbGVBY3RpdmVDbGFzcyIsImFjdGl2ZUVsZW1lbnRzIiwicHJveWVjdEJ0bkNsaWNrZWQiLCJhZGRQcm9qZWN0QnRuIiwid2FybmluZ0RpYWxvZyIsIndhcm5pbmdEaWFsb2dSZW1vdmVCdXR0b24iLCJsb2NhbE5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJhZGRUb2RvQnRuQ2xpY2tlZCIsImV4cGFuZFRvZG9Db250YWluZXIiLCJ0b2RvRE9NRGl2IiwiaGFuZGxlUHJvamVjdERPTUNsaWNrcyIsImV2ZW50IiwiZGlzcGxheVRvZG9JbmZvRGlhbG9nIiwiZWRpdFRvZG9EaWFsb2ciLCJlZGl0VG9kb0RpYWxvZ0Zvcm0iLCJzZXROZXdUb2RvSW5mbyIsInJlZ2lzdGVyRXZlbnRzIiwiX1RvZG9Mb2NhbFN0b3JhZ2UkZ2V0IiwiZWRpdGVkVG9kbyIsImxvZyIsImRpdlByb2plY3RDb3RhaW5lciIsInJlbmRlckFzaWRlIiwidWwiLCJmaWVsZHMiLCJmaWVsZCIsImxpIiwiX1RvZG9MaXN0RmllbGQiLCJjb250ZW50UmVuZGVyZXIiLCJhbGwiLCJyZW5kZXJBbGxUb2Rvc0ZpZWxkIiwiaW1wb3J0YW50IiwicmVuZGVySW1wb3J0YW50VG9kb3MiLCJyZW5kZXJOZXh0V2Vla1RvZG9zIiwicmVuZGVyTmV4dE1vbnRoVG9kb3MiLCJyZW5kZXJQcm9qZWN0c0ZpZWxkIiwicmVwbGFjZUNoaWxkcmVuIiwicmVuZGVyQWN0aXZlQXNpZGVGaWVsZENvbnRlbnQiLCJhY3RpdmVFbGVtZW50IiwidGl0bGVFbCIsImFzaWRlRmllbGRUZXh0IiwiZmlyc3RDaGlsZCIsImNoaWxkTm9kZXMiLCJ0ZXh0Q29udGVudCIsInJlbmRlckRPTVByb2plY3RzIiwicHJvamVjdE9iaiIsIkRPTVByb2plY3QiLCJyZW5kZXJET01Ub2RvIiwiRE9NVG9kbyIsImxpbWl0Iiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=