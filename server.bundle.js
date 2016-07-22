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

	var _Routes = __webpack_require__(6);

	var _Routes2 = _interopRequireDefault(_Routes);

	var _api = __webpack_require__(50);

	var _api2 = _interopRequireDefault(_api);

	var _path = __webpack_require__(51);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	var PORT = process.env.PORT || 8080;

	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
	app.use('/api/users', _api2.default);

	app.set('PORT', PORT);
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _Routes2.default, location: req.url }, function (err, redirect, props) {
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

	var _App = __webpack_require__(7);

	var _App2 = _interopRequireDefault(_App);

	var _Appnav = __webpack_require__(8);

	var _Appnav2 = _interopRequireDefault(_Appnav);

	var _Login = __webpack_require__(11);

	var _Login2 = _interopRequireDefault(_Login);

	var _Dashboard = __webpack_require__(21);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Students = __webpack_require__(24);

	var _Students2 = _interopRequireDefault(_Students);

	var _Employees = __webpack_require__(25);

	var _Employees2 = _interopRequireDefault(_Employees);

	var _Parents = __webpack_require__(28);

	var _Parents2 = _interopRequireDefault(_Parents);

	var _StudentsContainer = __webpack_require__(31);

	var _StudentsContainer2 = _interopRequireDefault(_StudentsContainer);

	var _Add = __webpack_require__(37);

	var _Add2 = _interopRequireDefault(_Add);

	var _Settings = __webpack_require__(39);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _BatchContainer = __webpack_require__(42);

	var _BatchContainer2 = _interopRequireDefault(_BatchContainer);

	var _BatchFormContainer = __webpack_require__(47);

	var _BatchFormContainer2 = _interopRequireDefault(_BatchFormContainer);

	var _StudClass = __webpack_require__(49);

	var _StudClass2 = _interopRequireDefault(_StudClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { component: _App2.default },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _Appnav2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _Dashboard2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/dashboard', component: _Dashboard2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/student', component: _Students2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _StudentsContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/student/list', component: _StudentsContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/student/add', component: _Add2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '/employees', component: _Employees2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/parents', component: _Parents2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/settings', component: _Settings2.default },
	            _react2.default.createElement(_reactRouter.IndexRoute, { component: _BatchContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/settings/batch', component: _BatchContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/settings/createbatch', component: _BatchFormContainer2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/settings/classes', component: _StudClass2.default })
	        )
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default })
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavBar = __webpack_require__(9);

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
					this.props.children
				);
			}
		}]);

		return Appnav;
	}(_react2.default.Component);

	exports.default = Appnav;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(10);

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
															)
													),
													_react2.default.createElement(
															'ul',
															{ className: 'nav navbar-nav nav-style navbar-right' },
															_react2.default.createElement(
																	'li',
																	null,
																	_react2.default.createElement(
																			_NavLink2.default,
																			{ to: '/settings' },
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _LoginContainer = __webpack_require__(12);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_Component) {
		_inherits(Login, _Component);

		function Login() {
			_classCallCheck(this, Login);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).apply(this, arguments));
		}

		_createClass(Login, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_LoginContainer2.default, null);
			}
		}]);

		return Login;
	}(_react.Component);

	exports.default = Login;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _actions = __webpack_require__(13);

	var _LoginForm = __webpack_require__(16);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _reactRedux = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
		return {
			username: state.login.username,
			isFetching: state.login.isFetching,
			isAuthenticated: state.login.isAuthenticated,
			message: state.login.message,
			hasError: state.login.hasError
		};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			trylogin: function trylogin(username, password) {
				dispatch((0, _actions.gologin)(username, password));
			},
			failedLogin: function failedLogin(message) {
				dispatch((0, _actions.loginFailed)(message));
			}
		};
	};

	var LoginContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm2.default);

	exports.default = LoginContainer;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.LOGIN_ATTEMPT = undefined;
	exports.loginAttempt = loginAttempt;
	exports.loginSuccess = loginSuccess;
	exports.loginFailed = loginFailed;
	exports.gologin = gologin;

	var _reactRouterRedux = __webpack_require__(14);

	var _isomorphicFetch = __webpack_require__(15);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LOGIN_ATTEMPT = exports.LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
	var LOGIN_FAILED = exports.LOGIN_FAILED = "LOGIN_FAILED";

	function loginAttempt(username) {
		return {
			type: LOGIN_ATTEMPT,
			isFetching: true,
			isAuthenticated: false,
			username: username
		};
	}
	function loginSuccess(username) {
		return {
			type: LOGIN_SUCCESS,
			isFetching: false,
			isAuthenticated: true,
			username: username
		};
	}
	function loginFailed(message) {
		return {
			type: LOGIN_FAILED,
			isFetching: false,
			isAuthenticated: false,
			hasError: true,
			message: message
		};
	}

	function gologin(username, password) {

		var config = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		};

		//console.log(config)
		return function (dispatch) {
			dispatch(loginAttempt(username));
			return setTimeout(function () {
				dispatch(loginSuccess(username));
				//console.log("siccess")
				dispatch((0, _reactRouterRedux.push)('/dashboard'));
			}, 5000);

			// fetch('http://localhost:3000/login', config)
			// .then(response=>response.json()
			// 	.then(data=>({ data, response }))
			//  ).then(({ data, response })=>{
			//  	//console.log(data)
			//  	if (parseInt(data.status)==1){
			//  		//console.log(parseInt(data.status))
			// 		dispatch(push('/dashboard'))
			//  	}else{
			//  		dispatch(loginFailed(data.message))
			//  	}

			//  })
			// .catch(error => {
			// 	dispatch(loginFailed('Database error'))
			// 	console.log('request failed', error)
			// })
		};
	}

	//https://www.youtube.com/watch?v=DVEsNYS1Cgo

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

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

	var _LoginAlert = __webpack_require__(18);

	var _LoginAlert2 = _interopRequireDefault(_LoginAlert);

	var _LoginButton = __webpack_require__(19);

	var _LoginButton2 = _interopRequireDefault(_LoginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
		_inherits(LoginForm, _React$Component);

		function LoginForm() {
			_classCallCheck(this, LoginForm);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).apply(this, arguments));
		}

		_createClass(LoginForm, [{
			key: 'onSubmit',
			value: function onSubmit(e) {
				e.preventDefault();

				if (_lodash2.default.isEmpty(this.refs.username.value)) {
					this.props.failedLogin("Please enter your username!");
					return;
				} else if (_lodash2.default.isEmpty(this.refs.pwd.value)) {
					this.props.failedLogin("Please enter your password");
					return;
				}
				this.props.trylogin(this.refs.username.value, this.refs.pwd.value);
				this.refs.pwd.value = '';
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var isAuthenticated = _props.isAuthenticated;
				var isFetching = _props.isFetching;
				var hasError = _props.hasError;
				var message = _props.message;


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
									_react2.default.createElement('input', { ref: 'username', type: 'text', className: 'form-control', placeholder: 'Email', autoFocus: 'autoFocus' }),
									_react2.default.createElement('input', { ref: 'pwd', type: 'password', className: 'form-control', placeholder: 'Password' }),
									_react2.default.createElement(_LoginButton2.default, { isLogging: isFetching }),
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
								),
								_react2.default.createElement(_LoginAlert2.default, { hasError: hasError, message: message })
							)
						)
					)
				);
			}
		}]);

		return LoginForm;
	}(_react2.default.Component);

	exports.default = LoginForm;

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

	var LoginAlert = function (_React$Component) {
		_inherits(LoginAlert, _React$Component);

		function LoginAlert() {
			_classCallCheck(this, LoginAlert);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginAlert).apply(this, arguments));
		}

		_createClass(LoginAlert, [{
			key: "render",
			value: function render() {
				if (this.props.hasError) {
					return _react2.default.createElement(
						"div",
						{ className: "alert alert-danger", role: "alert" },
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

		return LoginAlert;
	}(_react2.default.Component);

	LoginAlert.propTypes = {
		message: _react.PropTypes.string.isRequired,
		hasError: _react2.default.PropTypes.bool.isRequired
	};
	LoginAlert.defaultProps = { hasError: false };

	exports.default = LoginAlert;

/***/ },
/* 19 */
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

	var LoginButton = function (_React$Component) {
		_inherits(LoginButton, _React$Component);

		function LoginButton() {
			_classCallCheck(this, LoginButton);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginButton).apply(this, arguments));
		}

		_createClass(LoginButton, [{
			key: "render",
			value: function render() {
				if (this.props.isLogging) {
					return _react2.default.createElement(
						"button",
						{ className: "btn-lg btn-block btn-save", type: "submit", disabled: "disabled" },
						_react2.default.createElement("i", { className: "fa fa-spinner fa-spin fa-1x fa-fw" }),
						" Signing..."
					);
				} else {
					return _react2.default.createElement(
						"button",
						{ className: "btn-lg btn-block btn-save", type: "submit" },
						"Sign-In"
					);
				}
			}
		}]);

		return LoginButton;
	}(_react2.default.Component);

	LoginButton.propTypes = {
		isLogging: _react2.default.PropTypes.bool.isRequired
	};
	LoginButton.defaultProps = { isLogging: false };
	exports.default = LoginButton;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _DashboardContainer = __webpack_require__(22);

	var _DashboardContainer2 = _interopRequireDefault(_DashboardContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dashboard = function (_Component) {
		_inherits(Dashboard, _Component);

		function Dashboard() {
			_classCallCheck(this, Dashboard);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).apply(this, arguments));
		}

		_createClass(Dashboard, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_DashboardContainer2.default, null);
			}
		}]);

		return Dashboard;
	}(_react.Component);

	exports.default = Dashboard;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Dashboard = __webpack_require__(23);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _reactRedux = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
		//console.log(state)
		return {
			username: state.login.username,
			isAuthenticated: state.login.isAuthenticated
		};
	};

	var DashboardContainer = (0, _reactRedux.connect)(mapStateToProps)(_Dashboard2.default);

	exports.default = DashboardContainer;

/***/ },
/* 23 */
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

	var Dashboard = function (_React$Component) {
		_inherits(Dashboard, _React$Component);

		function Dashboard() {
			_classCallCheck(this, Dashboard);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).apply(this, arguments));
		}

		_createClass(Dashboard, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'Dashboard'
				);
			}
		}]);

		return Dashboard;
	}(_react2.default.Component);

	exports.default = Dashboard;

/***/ },
/* 24 */
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

	var Students = function (_Component) {
		_inherits(Students, _Component);

		function Students() {
			_classCallCheck(this, Students);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Students).apply(this, arguments));
		}

		_createClass(Students, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					this.props.children
				);
			}
		}]);

		return Students;
	}(_react.Component);

	exports.default = Students;

	//<div className="col-sm-9"><StudentsContainer/></div>

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _EmployeesContainer = __webpack_require__(26);

	var _EmployeesContainer2 = _interopRequireDefault(_EmployeesContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Employees = function (_Component) {
		_inherits(Employees, _Component);

		function Employees() {
			_classCallCheck(this, Employees);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Employees).apply(this, arguments));
		}

		_createClass(Employees, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_EmployeesContainer2.default, null);
			}
		}]);

		return Employees;
	}(_react.Component);

	exports.default = Employees;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _EmployeesList = __webpack_require__(27);

	var _EmployeesList2 = _interopRequireDefault(_EmployeesList);

	var _reactRedux = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EmployeesContainer = (0, _reactRedux.connect)()(_EmployeesList2.default);

	exports.default = EmployeesContainer;

/***/ },
/* 27 */
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

	var EmployeesList = function (_React$Component) {
		_inherits(EmployeesList, _React$Component);

		function EmployeesList() {
			_classCallCheck(this, EmployeesList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(EmployeesList).apply(this, arguments));
		}

		_createClass(EmployeesList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Employees Lists '
				);
			}
		}]);

		return EmployeesList;
	}(_react2.default.Component);

	exports.default = EmployeesList;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ParentsContainer = __webpack_require__(29);

	var _ParentsContainer2 = _interopRequireDefault(_ParentsContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Parents = function (_Component) {
		_inherits(Parents, _Component);

		function Parents() {
			_classCallCheck(this, Parents);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Parents).apply(this, arguments));
		}

		_createClass(Parents, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_ParentsContainer2.default, null);
			}
		}]);

		return Parents;
	}(_react.Component);

	exports.default = Parents;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ParentsList = __webpack_require__(30);

	var _ParentsList2 = _interopRequireDefault(_ParentsList);

	var _reactRedux = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ParentsContainer = (0, _reactRedux.connect)()(_ParentsList2.default);

	exports.default = ParentsContainer;

/***/ },
/* 30 */
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

	var ParentsList = function (_React$Component) {
		_inherits(ParentsList, _React$Component);

		function ParentsList() {
			_classCallCheck(this, ParentsList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentsList).apply(this, arguments));
		}

		_createClass(ParentsList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					' Parents Lists'
				);
			}
		}]);

		return ParentsList;
	}(_react2.default.Component);

	exports.default = ParentsList;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _List = __webpack_require__(32);

	var _List2 = _interopRequireDefault(_List);

	var _reactRedux = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StudentsContainer = (0, _reactRedux.connect)()(_List2.default);

	exports.default = StudentsContainer;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _griddleReact = __webpack_require__(33);

	var _griddleReact2 = _interopRequireDefault(_griddleReact);

	var _columnConfig = __webpack_require__(34);

	var _LeftNav = __webpack_require__(36);

	var _LeftNav2 = _interopRequireDefault(_LeftNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_React$Component) {
		_inherits(List, _React$Component);

		function List() {
			_classCallCheck(this, List);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
		}

		_createClass(List, [{
			key: 'btnEnrollClick',
			value: function btnEnrollClick(e) {
				//console.log(this.props)
				this.context.router.push('/student/add');
			}
		}, {
			key: 'render',
			value: function render() {

				return _react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row-fluid' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react2.default.createElement(
								'h3',
								null,
								'Students'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-2 addTop' },
							_react2.default.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary btn-block', onClick: this.btnEnrollClick.bind(this) },
								'Enroll Student'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row-fluid' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-3' },
							_react2.default.createElement(_LeftNav2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-9' },
							_react2.default.createElement(_griddleReact2.default, { results: _columnConfig.fakedata, tableClassName: 'table', columnMetadata: _columnConfig.colmetadata, columns: _columnConfig.cols })
						)
					)
				);
			}
		}]);

		return List;
	}(_react2.default.Component);

	List.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	exports.default = List;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("griddle-react");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.colmetadata = exports.cols = exports.fakedata = undefined;

	var _rowLink = __webpack_require__(35);

	var _rowLink2 = _interopRequireDefault(_rowLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fakedata = exports.fakedata = [{
		"id": 0,
		"studentid": "00001",
		"fullname": "Kaissieh Louella Abion",
		"gender": "Female",
		"birthdate": "April 5, 2004",
		"address": "Magalasang, Imus, Cavite",
		"email": "kc@yahoo.com",
		"contactno": '0938374903'
	}, {
		"id": 1,
		"studentid": "00002",
		"fullname": "Aprille Zen Abion",
		"gender": "Female",
		"birthdate": "April 4, 2012",
		"address": "Magalasang, Imus, Cavite",
		"email": "zen@yahoo.com",
		"contactno": '0938374903'
	}];

	var cols = exports.cols = ["id", "studentid", "fullname", "gender", "birthdate", "address", "email"];

	var colmetadata = exports.colmetadata = [{
		"columnName": "id",
		"order": 0,
		"locked": false,
		"visible": true,
		"displayName": "",
		"customComponent": _rowLink2.default
	}, {
		"columnName": "studentid",
		"order": 1,
		"locked": false,
		"visible": true,
		"displayName": "Student Id"
	}, {
		"columnName": "fullname",
		"order": 2,
		"locked": false,
		"visible": true,
		"displayName": "Name"
	}, {
		"columnName": "gender",
		"order": 3,
		"locked": false,
		"visible": true,
		"displayName": "Gender"
	}, {
		"columnName": "gender",
		"order": 4,
		"locked": false,
		"visible": true,
		"displayName": "Gender"
	}, {
		"columnName": "birthdate",
		"order": 5,
		"locked": false,
		"visible": true,
		"displayName": "Birthdate"
	}, {
		"columnName": "address",
		"order": 6,
		"locked": false,
		"visible": true,
		"displayName": "Address"
	}, {
		"columnName": "email",
		"order": 6,
		"locked": false,
		"visible": true,
		"displayName": "Email"
	}];

/***/ },
/* 35 */
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

	var RowLink = function (_Component) {
		_inherits(RowLink, _Component);

		function RowLink() {
			_classCallCheck(this, RowLink);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(RowLink).apply(this, arguments));
		}

		_createClass(RowLink, [{
			key: "handleClick",
			value: function handleClick(e) {
				console.log(this.props.rowData);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"button",
						{ type: "button", className: "btn btn-default btn-sm", onClick: this.handleClick.bind(this) },
						_react2.default.createElement("i", { className: "fa fa-pencil" }),
						" Edit"
					)
				);
			}
		}]);

		return RowLink;
	}(_react.Component);

	exports.default = RowLink;

/***/ },
/* 36 */
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

	var LeftNav = function (_Component) {
		_inherits(LeftNav, _Component);

		function LeftNav() {
			_classCallCheck(this, LeftNav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftNav).apply(this, arguments));
		}

		_createClass(LeftNav, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"ul",
					{ className: "list-group" },
					_react2.default.createElement(
						"li",
						{ className: "list-group-item" },
						"Cras justo odio"
					),
					_react2.default.createElement(
						"li",
						{ className: "list-group-item" },
						"Dapibus ac facilisis in"
					),
					_react2.default.createElement(
						"li",
						{ className: "list-group-item" },
						"Morbi leo risus"
					),
					_react2.default.createElement(
						"li",
						{ className: "list-group-item" },
						"Porta ac consectetur ac"
					),
					_react2.default.createElement(
						"li",
						{ className: "list-group-item" },
						"Vestibulum at eros"
					)
				);
			}
		}]);

		return LeftNav;
	}(_react.Component);

	exports.default = LeftNav;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Form = __webpack_require__(38);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Add = function (_Component) {
		_inherits(Add, _Component);

		function Add() {
			_classCallCheck(this, Add);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Add).apply(this, arguments));
		}

		_createClass(Add, [{
			key: 'btnSaveClick',
			value: function btnSaveClick(e) {}
		}, {
			key: 'btnCancelClick',
			value: function btnCancelClick(e) {
				this.context.router.push('/student');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'row-fluid' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-9' },
							_react2.default.createElement(
								'h3',
								null,
								'Add Student'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-3 addTop' },
							_react2.default.createElement(
								'div',
								{ className: 'pull-right' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'btn btn-primary', onClick: this.btnSaveClick.bind(this) },
									'Save Profile'
								),
								' ',
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'btn btn-default', onClick: this.btnCancelClick.bind(this) },
									'Cancel'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row-fluid' },
						_react2.default.createElement(_Form2.default, null)
					)
				);
			}
		}]);

		return Add;
	}(_react.Component);

	Add.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	exports.default = Add;

/***/ },
/* 38 */
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

	var Form = function (_Component) {
		_inherits(Form, _Component);

		function Form() {
			_classCallCheck(this, Form);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
		}

		_createClass(Form, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "col-sm-offset-2 col-sm-8 col-center" },
					"Add"
				);
			}
		}]);

		return Form;
	}(_react.Component);

	exports.default = Form;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _LeftNav = __webpack_require__(40);

	var _LeftNav2 = _interopRequireDefault(_LeftNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Settings = function (_Component) {
		_inherits(Settings, _Component);

		function Settings() {
			_classCallCheck(this, Settings);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).apply(this, arguments));
		}

		_createClass(Settings, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row row-addTop' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-3' },
							_react2.default.createElement(_LeftNav2.default, null)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-9' },
							this.props.children
						)
					)
				);
			}
		}]);

		return Settings;
	}(_react.Component);

	exports.default = Settings;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ListNav = __webpack_require__(41);

	var _ListNav2 = _interopRequireDefault(_ListNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LeftNav = function (_Component) {
		_inherits(LeftNav, _Component);

		function LeftNav() {
			_classCallCheck(this, LeftNav);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LeftNav).apply(this, arguments));
		}

		_createClass(LeftNav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'list-group' },
					_react2.default.createElement(
						'div',
						{ className: 'list-group-item list-group-header' },
						'Settings'
					),
					_react2.default.createElement(
						_ListNav2.default,
						{ to: '/settings/batch', className: 'list-group-item' },
						'Batch'
					),
					_react2.default.createElement(
						_ListNav2.default,
						{ to: '/settings/classes', className: 'list-group-item' },
						'Class'
					),
					_react2.default.createElement(
						_ListNav2.default,
						{ to: '/settings/section', className: 'list-group-item' },
						'Section'
					),
					_react2.default.createElement(
						_ListNav2.default,
						{ to: '/settings/subjects', className: 'list-group-item' },
						'Subjects'
					)
				);
			}
		}]);

		return LeftNav;
	}(_react.Component);

	exports.default = LeftNav;

/***/ },
/* 41 */
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
	  displayName: 'ListNav',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Batch = __webpack_require__(43);

	var _Batch2 = _interopRequireDefault(_Batch);

	var _reactRedux = __webpack_require__(20);

	var _BatchActions = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
		return {
			isFetching: state.batch.isFetching,
			isFailed: state.batch.isFailed,
			message: state.batch.message,
			batches: state.batch.batches

		};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			initialize: function initialize() {
				dispatch((0, _BatchActions.initBatch)());
			}
		};
	};

	var BatchContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Batch2.default);

	exports.default = BatchContainer;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _griddleReact = __webpack_require__(33);

	var _griddleReact2 = _interopRequireDefault(_griddleReact);

	var _colConfig = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Batch = function (_Component) {
		_inherits(Batch, _Component);

		function Batch() {
			_classCallCheck(this, Batch);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Batch).apply(this, arguments));
		}

		_createClass(Batch, [{
			key: 'handleCreateBatch',
			value: function handleCreateBatch(e) {
				//alert("1")
				this.context.router.push('/settings/createbatch');
				//push('/settings/createbatch')
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.props.initialize();
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var isFetching = _props.isFetching;
				var batches = _props.batches;

				var data = _react2.default.createElement('div', null);
				if (isFetching) {
					data = _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement('i', { className: 'fa fa-refresh fa-spin fa-3x fa-fw' }),
						_react2.default.createElement(
							'span',
							{ className: 'sr-only' },
							'Loading...'
						)
					);
				} else {
					data = _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_griddleReact2.default, { results: batches, tableClassName: 'griddle-table', showTableHeading: false, useGriddleStyles: false, columnMetadata: _colConfig.colmetadata, columns: _colConfig.cols })
					);
				}

				return _react2.default.createElement(
					'div',
					{ className: 'panel panel-default' },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						_react2.default.createElement(
							'h3',
							{ className: 'panel-title' },
							'Batches'
						),
						_react2.default.createElement(
							'div',
							{ className: 'pull-right minusTop' },
							_react2.default.createElement(
								'button',
								{ onClick: this.handleCreateBatch.bind(this), type: 'button', className: 'btn btn-success' },
								'Create Batch'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						data
					)
				);
			}
		}]);

		return Batch;
	}(_react.Component);

	Batch.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	exports.default = Batch;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.colmetadata = exports.cols = undefined;

	var _rowLink = __webpack_require__(45);

	var _rowLink2 = _interopRequireDefault(_rowLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cols = exports.cols = ["id"];

	var colmetadata = exports.colmetadata = [{
		"columnName": "id",
		"order": 0,
		"locked": false,
		"visible": true,
		"displayName": "",
		"customComponent": _rowLink2.default
	}];

/***/ },
/* 45 */
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

	var RowLink = function (_Component) {
		_inherits(RowLink, _Component);

		function RowLink() {
			_classCallCheck(this, RowLink);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(RowLink).apply(this, arguments));
		}

		_createClass(RowLink, [{
			key: "handleClick",
			value: function handleClick(e) {
				console.log(this.props.rowData);
			}
		}, {
			key: "render",
			value: function render() {

				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"table",
						{ className: "griddle-row-table" },
						_react2.default.createElement(
							"tbody",
							null,
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"td",
									{ className: "griddle-row-table-td1" },
									_react2.default.createElement("i", { className: "fa fa-cube" })
								),
								_react2.default.createElement(
									"td",
									{ className: "griddle-row-table-td2" },
									_react2.default.createElement(
										"h4",
										null,
										this.props.rowData.batchname
									),
									_react2.default.createElement(
										"p",
										{ className: "text-muted" },
										this.props.rowData.yearfrom,
										"-",
										this.props.rowData.yearto
									)
								),
								_react2.default.createElement(
									"td",
									{ className: "griddle-row-table-td3" },
									_react2.default.createElement(
										"button",
										{ type: "button", className: "btn btn-default btn-sm", onClick: this.handleClick.bind(this) },
										_react2.default.createElement("i", { className: "fa fa-pencil" }),
										" Edit"
									)
								)
							)
						)
					)
				);
			}
		}]);

		return RowLink;
	}(_react.Component);

	exports.default = RowLink;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.loadBatchForm = loadBatchForm;
	exports.saveBatchForm = saveBatchForm;
	exports.saveFailedBatchForm = saveFailedBatchForm;
	exports.saveSuccessBatchForm = saveSuccessBatchForm;
	exports.createBatch = createBatch;
	exports.loadBatch = loadBatch;
	exports.loadSuccess = loadSuccess;
	exports.loadFailed = loadFailed;
	exports.initBatch = initBatch;
	var LOAD_BATCH = exports.LOAD_BATCH = "LOAD_BATCH";
	var LOAD_FAILED = exports.LOAD_FAILED = "LOAD_FAILED";
	var LOAD_SUCCESS = exports.LOAD_SUCCESS = "LOAD_SUCCESS";
	var LOAD_BATCH_FORM = exports.LOAD_BATCH_FORM = "LOAD_BATCH_FORM";
	var SAVE_BATCH_FORM = exports.SAVE_BATCH_FORM = "SAVE_BATCH_FORM";
	var SAVE_FAILED_BATCH_FORM = exports.SAVE_FAILED_BATCH_FORM = "SAVE_FAILED_BATCH_FORM";
	var SAVE_SUCCESS_BATCH_FORM = exports.SAVE_SUCCESS_BATCH_FORM = "SAVE_SUCCESS_BATCH_FORM";

	function loadBatchForm() {
		return {
			type: LOAD_BATCH_FORM,
			isSaving: false
		};
	}

	function saveBatchForm(batch) {
		return {
			type: SAVE_BATCH_FORM,
			isSaving: true,
			hasError: false,
			batch: batch
		};
	}

	function saveFailedBatchForm(message) {
		return {
			type: SAVE_FAILED_BATCH_FORM,
			isSaving: false,
			hasError: true,
			message: message
		};
	}

	function saveSuccessBatchForm(batch) {
		return {
			type: SAVE_SUCCESS_BATCH_FORM,
			isSaving: false,
			hasError: false,
			batch: batch
		};
	}
	function createBatch(batch) {

		var data = { "id": 0,
			"batchname": "Rizal",
			"startdate": "06/10/2016",
			"enddate": "06/10/2016",
			"yearfrom": "2016",
			"yearto": "2017"
		};

		return function (dispatch) {
			dispatch(saveBatchForm(data));
			return setTimeout(function () {
				dispatch(saveSuccessBatchForm(data));
			}, 5000);
		};
	}

	function loadBatch() {
		return {
			type: LOAD_BATCH,
			isFetching: true,
			isFailed: false
		};
	}

	function loadSuccess(batches) {
		return {
			type: LOAD_SUCCESS,
			isFetching: false,
			isFailed: false,
			batches: batches
		};
	}

	function loadFailed(message) {
		return {
			type: LOAD_FAILED,
			isFetching: false,
			isFailed: true,
			message: message
		};
	}

	function initBatch() {

		var data = [{
			"id": 0,
			"batchname": "Rizal",
			"startdate": "06/10/2016",
			"enddate": "06/10/2016",
			"yearfrom": "2016",
			"yearto": "2017"
		}, {
			"id": 1,
			"batchname": "Bonifacio",
			"startdate": "06/10/2015",
			"enddate": "06/10/2015",
			"yearfrom": "2015",
			"yearto": "2016"
		}, {
			"id": 3,
			"batchname": "Mabini",
			"startdate": "06/10/2015",
			"enddate": "06/10/2015",
			"yearfrom": "2015",
			"yearto": "2016"
		}, {
			"id": 4,
			"batchname": "Parasogot",
			"startdate": "06/10/2015",
			"enddate": "06/10/2015",
			"yearfrom": "2015",
			"yearto": "2016"
		}];
		return function (dispatch) {
			dispatch(loadBatch());
			return setTimeout(function () {
				dispatch(loadSuccess(data));
			}, 1000);
		};
	}

	//https://www.youtube.com/watch?v=DVEsNYS1Cgo

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _BatchForm = __webpack_require__(48);

	var _BatchForm2 = _interopRequireDefault(_BatchForm);

	var _reactRedux = __webpack_require__(20);

	var _BatchActions = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
		return {
			isSaving: state.batchForm.isFetching,
			hasError: state.batchForm.hasError,
			message: state.batchForm.message,
			batch: state.batchForm.batch
		};
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
			saveForm: function saveForm(batch) {
				dispatch(createBatch(batch));
			}
		};
	};

	var BatchContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_BatchForm2.default);

	exports.default = BatchContainer;

/***/ },
/* 48 */
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

	var BatchForm = function (_Component) {
		_inherits(BatchForm, _Component);

		function BatchForm() {
			_classCallCheck(this, BatchForm);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(BatchForm).apply(this, arguments));
		}

		_createClass(BatchForm, [{
			key: 'handleCancel',
			value: function handleCancel(e) {
				e.preventDefault();
				this.context.router.push('/settings/batch');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'panel panel-default' },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						_react2.default.createElement(
							'h3',
							{ className: 'panel-title' },
							'Create Batch'
						),
						_react2.default.createElement('div', { className: 'pull-right minusTop' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						_react2.default.createElement(
							'form',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'row form-group' },
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-8' },
									_react2.default.createElement(
										'label',
										null,
										'Batch Name'
									),
									_react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'txtName' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'row form-group' },
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-8' },
									_react2.default.createElement(
										'label',
										null,
										'School Year'
									),
									_react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'txtName' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'row form-group' },
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-3' },
									_react2.default.createElement(
										'button',
										{ type: 'text', className: 'btn btn-success' },
										_react2.default.createElement(
											'strong',
											null,
											'Save Batch'
										)
									),
									'  ',
									_react2.default.createElement(
										'button',
										{ onClick: this.handleCancel.bind(this), type: 'text', className: 'btn btn-default' },
										'Cancel'
									)
								),
								_react2.default.createElement('div', { className: 'col-sm-3' })
							)
						)
					)
				);
			}
		}]);

		return BatchForm;
	}(_react.Component);

	BatchForm.contextTypes = {
		router: _react2.default.PropTypes.object
	};

	exports.default = BatchForm;

/***/ },
/* 49 */
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

	var StudClass = function (_Component) {
		_inherits(StudClass, _Component);

		function StudClass() {
			_classCallCheck(this, StudClass);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(StudClass).apply(this, arguments));
		}

		_createClass(StudClass, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "panel panel-default" },
					_react2.default.createElement(
						"div",
						{ className: "panel-heading" },
						_react2.default.createElement(
							"h3",
							{ className: "panel-title" },
							"Classes"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "panel-body" },
						"Panel content"
					)
				);
			}
		}]);

		return StudClass;
	}(_react.Component);

	exports.default = StudClass;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(51);

	var _path2 = _interopRequireDefault(_path);

	var _fs = __webpack_require__(52);

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
/* 51 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);