webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"./app/routes.js\""); }());
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by apache on 15-10-22.
	 */
	var React = __webpack_require__(3);
	var Router = __webpack_require__(4);
	var routes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./routes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Router.run(routes, Router.HistoryLocation, function (Handler) {
	  React.render(React.createElement(Handler, null), document.getElementById('app'));
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = react-router;

/***/ }
]);