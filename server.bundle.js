/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _http = __webpack_require__(1);

	var _http2 = _interopRequireDefault(_http);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _reactRouter = __webpack_require__(5);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	var _api = __webpack_require__(22);

	var _api2 = _interopRequireDefault(_api);

	var _path = __webpack_require__(23);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	var PORT = process.env.PORT || 8080;

	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
	app.use('/api/users', _api2.default);

	app.set('PORT', PORT);
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <head>\n      <meta charset=utf-8/>\n      <title>Akadembox</title>\n      <link rel="stylesheet" href="css/app.css" />\n      <link rel="stylesheet" href="css/bootstrap.min.css" />\n      <link rel="stylesheet" href="css/custom.css" />\n    </head>\n    <body>\n      <div id=app>' + appHtml + '</div>\n      <script src="/bundle.js"></script>\n      <script src="jquery-1.10.2.js"></script>\n      <script src="bootstrap.min.js"></script>\n    </body>\n    </html>\n   ';
	}

	var server = _http2.default.createServer(app);
	server.listen(PORT, function () {
	  console.log('Server started....');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _appnav = __webpack_require__(7);

	var _appnav2 = _interopRequireDefault(_appnav);

	var _dashboard = __webpack_require__(10);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _students = __webpack_require__(12);

	var _students2 = _interopRequireDefault(_students);

	var _employees = __webpack_require__(13);

	var _employees2 = _interopRequireDefault(_employees);

	var _parents = __webpack_require__(14);

	var _parents2 = _interopRequireDefault(_parents);

	var _app = __webpack_require__(15);

	var _app2 = _interopRequireDefault(_app);

	var _login = __webpack_require__(16);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { component: _app2.default },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _appnav2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _dashboard2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/dashboard', component: _dashboard2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/student', component: _students2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/employees', component: _employees2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/parents', component: _parents2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default })
	);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavBar = __webpack_require__(8);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Appnav = function (_React$Component) {
		_inherits(Appnav, _React$Component);

		function Appnav() {
			_classCallCheck(this, Appnav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Appnav).apply(this, arguments));
		}

		_createClass(Appnav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_NavBar2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'content-wrapper' },
						this.props.children
					)
				);
			}
		}]);

		return Appnav;
	}(_react2.default.Component);

	exports.default = Appnav;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
			displayName: 'NavBar',
			render: function render() {
					return _react2.default.createElement(
							'div',
							{ className: 'header-style' },
							_react2.default.createElement(
									'nav',
									{ className: 'navbar navbar-default' },
									_react2.default.createElement(
											'div',
											{ className: 'container-fluid' },
											_react2.default.createElement(
													'div',
													{ className: 'navbar-header' },
													_react2.default.createElement(
															'button',
															{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
															_react2.default.createElement(
																	'span',
																	{ className: 'sr-only' },
																	'Toggle navigation'
															),
															_react2.default.createElement('span', { className: 'icon-bar' }),
															_react2.default.createElement('span', { className: 'icon-bar' }),
															_react2.default.createElement('span', { className: 'icon-bar' })
													),
													_react2.default.createElement(
															'a',
															{ className: 'navbar-brand', href: '#' },
															'Maranatha Academy'
													)
											),
											_react2.default.createElement(
													'div',
													{ className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
													_react2.default.createElement(
															'ul',
															{ className: 'nav navbar-nav nav-style' },
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			_NavLink2.default,
																			{ to: '/dashboard' },
																			'Dashboard'
																	)
															),
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			_NavLink2.default,
																			{ to: '/student' },
																			'Students'
																	)
															),
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			_NavLink2.default,
																			{ to: '/employees' },
																			'Employees'
																	)
															),
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			_NavLink2.default,
																			{ to: '/parents' },
																			'Parents'
																	)
															),
															_react2.default.createElement(
																	'li',
																	{ className: 'dropdown' },
																	_react2.default.createElement(
																			'a',
																			{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
																			'Administration ',
																			_react2.default.createElement('span', { className: 'caret' })
																	),
																	_react2.default.createElement(
																			'ul',
																			{ className: 'dropdown-menu' },
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Batch'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Class'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Section'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Subject'
																					)
																			)
																	)
															)
													),
													_react2.default.createElement(
															'ul',
															{ className: 'nav navbar-nav nav-style navbar-right' },
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			'a',
																			{ href: '#' },
																			'Settings'
																	)
															),
															_react2.default.createElement(
																	'li',
																	{ className: 'dropdown' },
																	_react2.default.createElement(
																			'a',
																			{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
																			'Dropdown ',
																			_react2.default.createElement('span', { className: 'caret' })
																	),
																	_react2.default.createElement(
																			'ul',
																			{ className: 'dropdown-menu' },
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Action'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Another action'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Something else here'
																					)
																			),
																			_react2.default.createElement(
																					'li',
																					null,
																					_react2.default.createElement(
																							'a',
																							{ href: '#' },
																							'Separated link'
																					)
																			)
																	)
															)
													)
											)
									)
							)
					);
			}
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active-nav' }));
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(11);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard() {
			_classCallCheck(this, Dashboard);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this));

			_this.state = { data: [] };
			return _this;
		}

		_createClass(Dashboard, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				// ajax.get("/api/users")
				// 	.end((error, response)=>{
				// 		if (!error && response){
				// 			this.setState({ data: response.body })
				// 			console.log(response.body);
				// 		}else{
				// 			console.log("Error on api")
				// 		}
				// 	})

			}
		}, {
			key: 'render',
			value: function render() {
				var users = this.state.data.map(function (item) {
					return _react2.default.createElement(
						'div',
						{ key: item.id },
						' ',
						item.fullname,
						' '
					);
				});

				return _react2.default.createElement(
					'div',
					null,
					users
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Student = function (_React$Component) {
		_inherits(Student, _React$Component);

		function Student() {
			_classCallCheck(this, Student);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Student).apply(this, arguments));
		}

		_createClass(Student, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Student '
				);
			}
		}]);

		return Student;
	}(_react2.default.Component);

	exports.default = Student;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Employees = function (_React$Component) {
		_inherits(Employees, _React$Component);

		function Employees() {
			_classCallCheck(this, Employees);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Employees).apply(this, arguments));
		}

		_createClass(Employees, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Employees '
				);
			}
		}]);

		return Employees;
	}(_react2.default.Component);

	exports.default = Employees;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Parents = function (_React$Component) {
		_inherits(Parents, _React$Component);

		function Parents() {
			_classCallCheck(this, Parents);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Parents).apply(this, arguments));
		}

		_createClass(Parents, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Parents '
				);
			}
		}]);

		return Parents;
	}(_react2.default.Component);

	exports.default = Parents;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					this.props.children
				);
			}
		}]);

		return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(17);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _cAlerts = __webpack_require__(18);

	var _cAlerts2 = _interopRequireDefault(_cAlerts);

	var _actions = __webpack_require__(19);

	var _reactRedux = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppLogin = function (_React$Component) {
		_inherits(AppLogin, _React$Component);

		function AppLogin(props) {
			_classCallCheck(this, AppLogin);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppLogin).call(this, props));

			_this.state = {
				username: '',
				pwd: ''
			};
			return _this;
		}

		_createClass(AppLogin, [{
			key: 'onSubmit',
			value: function onSubmit(e) {
				e.preventDefault();
				var creds = { username: this.state.username, password: this.state.pwd };
				this.props.dispatch((0, _actions.gologin)(creds));
				//    console.log(creds)
				//    var err="Invalid username/password!"

				// if (_.isEmpty(this.state.username)){
				// 	this.setState({ hasError: true, errorMsg: err });	
				// 	return
				// }else if (_.isEmpty(this.state.pwd)){
				// 	this.setState({ hasError: true, errorMsg: err });	
				// 	return
				// }	

				//    	this.setState({hasError:false})     	
				//    	this.context.router.replace("/dashboard")
			}
		}, {
			key: 'onChange',
			value: function onChange(e) {
				if (_lodash2.default.isEqual(e.target.name, "username")) {
					this.setState({ username: e.target.value });
				} else if (_lodash2.default.isEqual(e.target.name, "pwd")) {
					this.setState({ pwd: e.target.value });
				}
			}
		}, {
			key: 'closeAlert',
			value: function closeAlert() {}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-6 col-md-4 col-md-offset-4' },
							_react2.default.createElement(
								'h1',
								{ className: 'text-center login-title' },
								'Academbox'
							),
							_react2.default.createElement(
								'div',
								{ className: 'account-wall' },
								_react2.default.createElement('img', { className: 'profile-img', src: 'images/logo.gif' }),
								_react2.default.createElement(
									'form',
									{ className: 'form-signin', onSubmit: this.onSubmit.bind(this) },
									_react2.default.createElement('input', { name: 'username', type: 'text', className: 'form-control', placeholder: 'Email', onChange: this.onChange.bind(this), value: this.state.username, autoFocus: 'autoFocus' }),
									_react2.default.createElement('input', { name: 'pwd', type: 'password', className: 'form-control', placeholder: 'Password', onChange: this.onChange.bind(this), value: this.state.pwd }),
									_react2.default.createElement(
										'button',
										{ className: 'btn-lg btn-block btn-save', type: 'submit' },
										'Sign in'
									),
									_react2.default.createElement(
										'label',
										{ className: 'checkbox pull-left' },
										_react2.default.createElement('input', { type: 'checkbox', value: 'remember-me' }),
										'Remember me'
									),
									_react2.default.createElement(
										'a',
										{ href: '#', className: 'pull-right need-help' },
										'Need help? '
									),
									_react2.default.createElement('span', { className: 'clearfix' })
								)
							)
						)
					)
				);
			}
		}]);

		return AppLogin;
	}(_react2.default.Component);

	AppLogin.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};
	AppLogin.PropTypes = {
		errorMsg: _react2.default.PropTypes.string
	};
	AppLogin.defaultProps = {
		errorMsg: ''
	};

	var mapStateToProps = function mapStateToProps(state) {
		return {
			errorMsg: state.errorMsg
		};
	};

	AppLogin = (0, _reactRedux.connect)(mapStateToProps)(AppLogin);
	exports.default = AppLogin;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MsgAlert = function (_React$Component) {
		_inherits(MsgAlert, _React$Component);

		function MsgAlert() {
			_classCallCheck(this, MsgAlert);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(MsgAlert).apply(this, arguments));
		}

		_createClass(MsgAlert, [{
			key: "onClose",
			value: function onClose() {
				this.props.hideAlert();
			}
		}, {
			key: "render",
			value: function render() {
				if (this.props.hasError) {
					return _react2.default.createElement(
						"div",
						{ className: "alert alert-danger", role: "alert" },
						_react2.default.createElement(
							"button",
							{ type: "button", className: "close", "aria-label": "Close", onClick: this.onClose.bind(this) },
							_react2.default.createElement(
								"span",
								{ "aria-hidden": "true" },
								"×"
							)
						),
						_react2.default.createElement(
							"strong",
							null,
							"Error!"
						),
						" ",
						this.props.message
					);
				} else {
					return null;
				}
			}
		}]);

		return MsgAlert;
	}(_react2.default.Component);

	MsgAlert.propTypes = {
		mType: _react.PropTypes.string.isRequired,
		message: _react.PropTypes.string.isRequired,
		hasError: _react2.default.PropTypes.bool.isRequired,
		hideAlert: _react2.default.PropTypes.func.isRequired
	};
	MsgAlert.defaultProps = { hasError: false };
	exports.default = MsgAlert;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.LOGIN_ATTEMPT = undefined;
	exports.loginAttempt = loginAttempt;
	exports.loginSuccess = loginSuccess;
	exports.loginFailed = loginFailed;
	exports.gologin = gologin;

	var _isomorphicFetch = __webpack_require__(20);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LOGIN_ATTEMPT = exports.LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
	var LOGIN_FAILED = exports.LOGIN_FAILED = "LOGIN_FAILED";

	function loginAttempt(creds) {
		return {
			type: LOGIN_ATTEMPT,
			isFetching: true,
			isAuthenticated: false,
			creds: creds
		};
	}
	function loginSuccess(user) {
		return {
			type: LOGIN_SUCCESS,
			isFetching: false,
			isAuthenticated: true,
			user: user
		};
	}
	function loginFailed(message) {
		return {
			type: LOGIN_FAILED,
			isFetching: false,
			isAuthenticated: false,
			message: message
		};
	}
	function gologin(creds) {

		var config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: creds.username,
				password: creds.password
			})
		};

		var t = JSON.stringify({
			username: creds.username,
			password: creds.password
		});
		console.log(t);

		return function (dispatch) {
			dispatch(loginAttempt(creds));
			return (0, _isomorphicFetch2.default)('http://localhost:3000/login', config).then(function (response) {
				return response.json().then(function (data) {
					return { data: data, response: response };
				});
			}).then(function (_ref) {
				var data = _ref.data;
				var response = _ref.response;

				console.log(data);
			}).catch(function (error) {
				console.log('request failed', error);
			});
		};
	}

	//https://www.youtube.com/watch?v=DVEsNYS1Cgo

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(23);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(24);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = _express2.default.Router();

	var db = _path2.default.join(__dirname, "db.json");

	router.get('/', function (req, res) {
	  _fs2.default.readFile(db, function (err, data) {
	    if (err) {
	      console.error(err);
	      process.exit(1);
	    }
	    res.json(JSON.parse(data));
	  });
	});

	module.exports = router;
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);