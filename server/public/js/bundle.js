webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactRouter2.default.run(_routes2.default, _reactRouter2.default.HistoryLocation, function (Handler) {
	  _react2.default.render(_react2.default.createElement(Handler, null), document.getElementById('app'));
	}); /**
	     * Created by apache on 15-10-22.
	     */

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(26);

	var _Home2 = _interopRequireDefault(_Home);

	var _Login = __webpack_require__(37);

	var _Login2 = _interopRequireDefault(_Login);

	var _User = __webpack_require__(40);

	var _User2 = _interopRequireDefault(_User);

	var _Set = __webpack_require__(46);

	var _Set2 = _interopRequireDefault(_Set);

	var _Notice = __webpack_require__(52);

	var _Notice2 = _interopRequireDefault(_Notice);

	var _StarList = __webpack_require__(55);

	var _StarList2 = _interopRequireDefault(_StarList);

	var _NotFound = __webpack_require__(58);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _PostArticle = __webpack_require__(59);

	var _PostArticle2 = _interopRequireDefault(_PostArticle);

	var _MyContribute = __webpack_require__(68);

	var _MyContribute2 = _interopRequireDefault(_MyContribute);

	var _ProfileCenter = __webpack_require__(71);

	var _ProfileCenter2 = _interopRequireDefault(_ProfileCenter);

	var _Follow = __webpack_require__(74);

	var _Follow2 = _interopRequireDefault(_Follow);

	var _Contribute = __webpack_require__(80);

	var _Contribute2 = _interopRequireDefault(_Contribute);

	var _Article = __webpack_require__(83);

	var _Article2 = _interopRequireDefault(_Article);

	var _List = __webpack_require__(96);

	var _List2 = _interopRequireDefault(_List);

	var _Member = __webpack_require__(100);

	var _Member2 = _interopRequireDefault(_Member);

	var _ConArticle = __webpack_require__(106);

	var _ConArticle2 = _interopRequireDefault(_ConArticle);

	var _MemberCenter = __webpack_require__(110);

	var _MemberCenter2 = _interopRequireDefault(_MemberCenter);

	var _MemberFollow = __webpack_require__(111);

	var _MemberFollow2 = _interopRequireDefault(_MemberFollow);

	var _TagList = __webpack_require__(114);

	var _TagList2 = _interopRequireDefault(_TagList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import Animate from './components/Animate';

	// 投稿
	//import PostAnimate from './components/PostAnimate';
	//import PostMusic from './components/PostMusic';
	/**
	 * Created by apache on 15-10-23.
	 */
	exports.default = _react2.default.createElement(
	    _reactRouter.Route,
	    { handler: _App2.default },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', handler: _Home2.default },
	        _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/articles' })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/login', handler: _Login2.default }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/article' },
	        _react2.default.createElement(_reactRouter.Route, { path: ':id', handler: _Article2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/member', handler: _Member2.default },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: ':domain', hanlder: _Contribute2.default },
	            _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _ConArticle2.default }),
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: 'contributes' },
	                _react2.default.createElement(_reactRouter.Route, { path: ':column', handler: _ConArticle2.default })
	            )
	        )
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/member' },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: ':domain', handler: _MemberCenter2.default },
	            _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _StarList2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: 'star', handler: _StarList2.default }),
	            _react2.default.createElement(
	                _reactRouter.Route,
	                { path: ':follow', handler: _MemberFollow2.default },
	                _react2.default.createElement(_reactRouter.Route, { path: ':skip', handler: _MemberFollow2.default })
	            )
	        )
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/profile', handler: _User2.default },
	        _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _ProfileCenter2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'setting', handler: _Set2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'center', handler: _ProfileCenter2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: 'contribute', handler: _Contribute2.default },
	            _react2.default.createElement(_reactRouter.Route, { path: '/profile/contribute/:column', handler: _MyContribute2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: 'notice', handler: _Notice2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'star', handler: _StarList2.default }),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/post' },
	            _react2.default.createElement(_reactRouter.Route, { path: 'article', handler: _PostArticle2.default })
	        ),
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: ':follow', handler: _Follow2.default },
	            _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _Follow2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: ':page', handler: _Follow2.default })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: '*', handler: _ProfileCenter2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/tags', handler: _TagList2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: ':tag', handler: _TagList2.default })
	    ),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/:column', handler: _List2.default },
	        _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _List2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':skip', handler: _List2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', handler: _NotFound2.default })
	);
	//import Music from './components/Music';

	//import Followers from './components/Followers';
	//import Following from './components/Following';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Nav = __webpack_require__(6);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Footer = __webpack_require__(25);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'mon-app' },
	                _react2.default.createElement(_Nav2.default, null),
	                _react2.default.createElement(_reactRouter.RouteHandler, null),
	                _react2.default.createElement(_Footer2.default, null)
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavActions = __webpack_require__(7);

	var _NavActions2 = _interopRequireDefault(_NavActions);

	var _NavStore = __webpack_require__(21);

	var _NavStore2 = _interopRequireDefault(_NavStore);

	var _NoticePoint = __webpack_require__(22);

	var _NoticePoint2 = _interopRequireDefault(_NoticePoint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Nav = function (_React$Component) {
	    _inherits(Nav, _React$Component);

	    function Nav(props) {
	        _classCallCheck(this, Nav);

	        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

	        _this.state = _NavStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Nav, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _NavStore2.default.listen(this.onChange);
	            _NavActions2.default.checkLogin();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _NavStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'signOut',
	        value: function signOut() {
	            _NavActions2.default.signOut();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var SUBNAV = void 0;
	            if (this.state.loginState) {
	                SUBNAV = _react2.default.createElement(
	                    'ul',
	                    { className: 'nav navbar-nav navbar-right mon-subnav' },
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'dropdown' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#', className: 'mon-user-nav dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
	                            _react2.default.createElement('img', { src: this.state.avatar, width: '30', alt: 'loading' }),
	                            ' ',
	                            _react2.default.createElement('span', { className: 'caret' }),
	                            _react2.default.createElement(_NoticePoint2.default, null)
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'dropdown-menu' },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile' },
	                                    '\u6211\u7684\u8D26\u53F7'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/setting' },
	                                    '\u8BBE\u7F6E'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/notice' },
	                                    '\u901A\u77E5'
	                                )
	                            ),
	                            _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: 'javascript:;', onClick: this.signOut.bind(this) },
	                                    '\u9000\u51FA'
	                                )
	                            )
	                        )
	                    )
	                );
	            } else {
	                SUBNAV = _react2.default.createElement(
	                    'ul',
	                    { className: 'nav navbar-nav navbar-right' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;' },
	                            _react2.default.createElement('span', { className: 'fa fa-github', style: { marginRight: '5px' } })
	                        )
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'nav',
	                { className: 'navbar navbar-default mon-nav', id: 'mon-fixed-nav' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'navbar-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#my-nav' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                'Toggle'
	                            ),
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' }),
	                            _react2.default.createElement('span', { className: 'icon-bar' })
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/', className: 'navbar-brand brand-img' },
	                            _react2.default.createElement('img', { src: '/img/icon.png', alt: 'Brand' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'collapse navbar-collapse', id: 'my-nav' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'nav navbar-nav' },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/' },
	                                    '\u9996\u9875'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/articles' },
	                                    '\u6587\u7AE0'
	                                )
	                            )
	                        ),
	                        SUBNAV
	                    )
	                )
	            );
	        }
	    }]);

	    return Nav;
	}(_react2.default.Component);

	exports.default = Nav;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-25.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavActions = function () {
	    function NavActions() {
	        _classCallCheck(this, NavActions);

	        this.generateActions('changeState', 'checkLoginSuccess', 'checkLoginFail', 'signOutSuccess', 'signOutFail', 'getProfileLocal', 'searchSuccess', 'changeSearch');
	    }

	    _createClass(NavActions, [{
	        key: 'checkLogin',
	        value: function checkLogin() {
	            var _this = this;

	            var sessionStorage = window.sessionStorage,
	                userProfile = sessionStorage.getItem('profile');
	            var localStorage = window.localStorage,
	                localProfile = JSON.parse(localStorage.getItem('user'));

	            if (userProfile !== null && localProfile !== null && userProfile !== '' && localProfile !== '' && userProfile._id === localProfile.data._id) {
	                this.actions.getProfileLocal(userProfile);
	            } else {
	                $.ajax({
	                    url: '/api/session',
	                    cache: false,
	                    type: 'post',
	                    dataType: 'json'
	                }).done(function (data) {
	                    _this.actions.checkLoginSuccess(data);
	                }).fail(function (data) {
	                    _this.actions.checkLoginFail();
	                });
	            }
	        }
	    }, {
	        key: 'signOut',
	        value: function signOut() {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/signout',
	                type: 'post',
	                cache: false,
	                dataType: 'json'
	            }).done(function (data) {
	                _this2.actions.signOutSuccess(data);
	            }).fail(function (data) {
	                _this2.actions.signOutFail();
	            });
	        }
	    }]);

	    return NavActions;
	}();

	exports.default = _alt2.default.createActions(NavActions);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alt = __webpack_require__(9);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _alt2.default(); /**
	                                        * Created by apache on 15-10-24.
	                                        */

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-25.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _NavActions = __webpack_require__(7);

	var _NavActions2 = _interopRequireDefault(_NavActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavStore = function () {
	    function NavStore() {
	        _classCallCheck(this, NavStore);

	        this.bindActions(_NavActions2.default);
	        this.loginState = false;
	        this.userName = '';
	        this.avatar = '';
	        this.search = '';
	    }

	    _createClass(NavStore, [{
	        key: 'onChangeState',
	        value: function onChangeState(data) {
	            this.loginState = true;
	            this.userName = data.username;
	            this.avatar = data.avatar_url;
	        }
	    }, {
	        key: 'onCheckLoginSuccess',
	        value: function onCheckLoginSuccess(data) {
	            if (data.code === 200) {
	                this.onChangeState(data.raw);
	            }
	        }
	    }, {
	        key: 'onCheckLoginFail',
	        value: function onCheckLoginFail() {
	            toastr.error("服务器错误");
	        }
	    }, {
	        key: 'onSignOutSuccess',
	        value: function onSignOutSuccess(data) {
	            if (data.code === 200) {
	                var localStorage = window.localStorage,
	                    sessionStorage = window.sessionStorage;

	                // 设置数据归零
	                localStorage.setItem('user', null);
	                sessionStorage.setItem('profile', null);

	                window.location = '/';
	            } else if (data.code === 400) {
	                toastr.error('退出不成功');
	            } else if (data.code === 406) {
	                toastr.warning('你还没登陆');
	            }
	        }
	    }, {
	        key: 'onSignOutFail',
	        value: function onSignOutFail() {
	            toastr.error("服务器错误");
	        }
	    }, {
	        key: 'onGetProfileLocal',
	        value: function onGetProfileLocal(data) {
	            this.loginState = true;
	            this.userName = data.username;
	            this.avatar = data._json === undefined ? data.avatar_url : data._json.avatar_url;
	            this.domain = data._json === undefined ? data.domain : data._json.username;
	        }
	    }]);

	    return NavStore;
	}();

	exports.default = _alt2.default.createStore(NavStore);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _NoticePointActions = __webpack_require__(23);

	var _NoticePointActions2 = _interopRequireDefault(_NoticePointActions);

	var _NoticePointStore = __webpack_require__(24);

	var _NoticePointStore2 = _interopRequireDefault(_NoticePointStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var NoticePoint = function (_React$Component) {
	    _inherits(NoticePoint, _React$Component);

	    function NoticePoint(props) {
	        _classCallCheck(this, NoticePoint);

	        var _this = _possibleConstructorReturn(this, (NoticePoint.__proto__ || Object.getPrototypeOf(NoticePoint)).call(this, props));

	        _this.state = _NoticePointStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(NoticePoint, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _NoticePointStore2.default.listen(this.onChange);
	            _NoticePointActions2.default.getNotices();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _NoticePointStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var disabled = this.state.count === 0 ? 'mon-disabled' : '';
	            return _react2.default.createElement(
	                'span',
	                { ref: 'notice', className: "mon-notice-point badge " + disabled },
	                this.state.count
	            );
	        }
	    }]);

	    return NoticePoint;
	}(_react2.default.Component);

	exports.default = NoticePoint;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticePointActions = function () {
	    function NoticePointActions() {
	        _classCallCheck(this, NoticePointActions);

	        this.generateActions('getNoticesSuccess', 'getNoticesFail');
	    }

	    _createClass(NoticePointActions, [{
	        key: 'getNotices',
	        value: function getNotices() {
	            var _this = this;

	            $.ajax({
	                url: '/api/notices',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getNoticesSuccess(data);
	            }).fail(function () {
	                _this.actions.getNoticesFail();
	            });
	        }
	    }]);

	    return NoticePointActions;
	}();

	exports.default = _alt2.default.createActions(NoticePointActions);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _NoticePointActions = __webpack_require__(23);

	var _NoticePointActions2 = _interopRequireDefault(_NoticePointActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticePointStore = function () {
	    function NoticePointStore() {
	        _classCallCheck(this, NoticePointStore);

	        this.bindActions(_NoticePointActions2.default);
	        this.count = 0;
	    }

	    _createClass(NoticePointStore, [{
	        key: 'onGetNoticesSuccess',
	        value: function onGetNoticesSuccess(data) {
	            if (data.code === 200) {
	                this.count = data.raw.length;
	            } else if (data.code === 500) {
	                toastr.warning('获取通知失败');
	            }
	        }
	    }, {
	        key: 'onGetNoticesFail',
	        value: function onGetNoticesFail() {
	            toastr.warning('获取通知失败');
	        }
	    }]);

	    return NoticePointStore;
	}();

	exports.default = _alt2.default.createStore(NoticePointStore);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Footer = function (_React$Component) {
	    _inherits(Footer, _React$Component);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: 'show',
	        value: function show(type) {
	            switch (type) {
	                case 'weixin':
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'footer',
	                { className: 'mon-footer' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'text-center' },
	                    'copyright@toreant.top'
	                )
	            );
	        }
	    }]);

	    return Footer;
	}(_react2.default.Component);

	exports.default = Footer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _HomeActions = __webpack_require__(27);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	var _HomeStore = __webpack_require__(28);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _Carousel = __webpack_require__(29);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Weather = __webpack_require__(34);

	var _Weather2 = _interopRequireDefault(_Weather);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	        _this.state = _HomeStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Home, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _HomeStore2.default.listen(this.onChange);

	            window.location = '/articles';

	            // HomeActions.getArticles();
	            // HomeActions.getMusics();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(nextProps, preProps) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _HomeStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Articles = void 0,
	                Musics = void 0;
	            if (this.state.a_loading) {
	                Articles = _react2.default.createElement(_Loading2.default, null);
	            } else {
	                Articles = this.state.articles.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: 'article' + data.data._id, className: 'mon-item' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-fragmentation' },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/article/' + data.data._id },
	                                    _react2.default.createElement('img', { src: data.data.abbreviations || '/img/abbreviations.png', alt: 'loading' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/member/' + data.user.domain, className: 'btn btn-block clearfix' },
	                                    _react2.default.createElement('img', { src: data.user.avatar_url, alt: 'loading' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        data.user.username
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-aside' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/article/' + data.data._id },
	                                data.data.title
	                            )
	                        )
	                    );
	                });
	            }
	            if (this.state.m_loading) {
	                Musics = _react2.default.createElement(_Loading2.default, null);
	            } else {
	                Musics = this.state.musics.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: 'music' + data.data._id, className: 'mon-item' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-fragmentation' },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/music/' + data.data._id },
	                                    _react2.default.createElement('img', { src: data.data.abbreviations || '/img/abbreviations.png', alt: 'loading' })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/member/' + data.user.domain, className: 'btn btn-block clearfix' },
	                                    _react2.default.createElement('img', { src: data.user.avatar_url, alt: 'loading' }),
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'pull-right' },
	                                        data.user.username
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-aside' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/article/' + data.data._id },
	                                data.data.title
	                            )
	                        )
	                    );
	                });
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'container mon-main' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'raw clearfix mon-section mon-carousel' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-8' },
	                        _react2.default.createElement(_Carousel2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-4' },
	                        _react2.default.createElement(_Weather2.default, null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'raw clearfix mon-section' },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'mon-label' },
	                        '\u6587\u7AE0'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-box' },
	                        Articles
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'raw clearfix mon-section' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'mon-label' },
	                        '\u97F3\u4E50'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-box' },
	                        Musics
	                    )
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeActions = function () {
	    function HomeActions() {
	        _classCallCheck(this, HomeActions);

	        this.generateActions('getArticlesSuccess', 'getMusicsSuccess');
	    }

	    _createClass(HomeActions, [{
	        key: 'getArticles',
	        value: function getArticles() {
	            var _this = this;

	            var params = {
	                option: {
	                    skip: 0,
	                    limit: 10,
	                    sort: { create_time: -1 }
	                }
	            };
	            $.ajax({
	                url: '/api/articles',
	                type: 'post',
	                contentType: 'application/json;charset=utf-8',
	                dataType: 'json',
	                cache: false,
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.getArticlesSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取数据失败');
	            });
	        }
	    }, {
	        key: 'getMusics',
	        value: function getMusics() {
	            var _this2 = this;

	            var params = {
	                option: {
	                    skip: 0,
	                    limit: 10,
	                    sort: {
	                        create_time: -1
	                    }
	                }
	            };
	            $.ajax({
	                url: '/api/musics',
	                type: 'post',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                data: JSON.stringify(params),
	                dataType: 'json'
	            }).done(function (data) {
	                _this2.actions.getMusicsSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取数据失败');
	            });
	        }
	    }]);

	    return HomeActions;
	}();

	exports.default = _alt2.default.createActions(HomeActions);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _HomeActions = __webpack_require__(27);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeStore = function () {
	    function HomeStore() {
	        _classCallCheck(this, HomeStore);

	        this.bindActions(_HomeActions2.default);
	        this.articles = [];
	        this.musics = [];
	        this.a_loading = true;
	        this.m_loading = true;
	    }

	    //HomeActions 中的方法

	    _createClass(HomeStore, [{
	        key: 'onGetArticlesSuccess',
	        value: function onGetArticlesSuccess(data) {
	            if (data.code === 200) {
	                this.articles = data.raw._raw;
	                this.a_loading = false;
	            } else if (data.code === 500) {
	                toastr.warning('获取数据失败');
	            }
	        }
	    }, {
	        key: 'onGetMusicsSuccess',
	        value: function onGetMusicsSuccess(data) {
	            if (data.code === 200) {
	                this.musics = data.raw._raw;
	                this.m_loading = false;
	            } else if (data.code === 500) {
	                toastr.warning('获取数据失败');
	            }
	        }
	    }]);

	    return HomeStore;
	}();

	exports.default = _alt2.default.createStore(HomeStore);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CarouselActions = __webpack_require__(30);

	var _CarouselActions2 = _interopRequireDefault(_CarouselActions);

	var _CarouselStore = __webpack_require__(31);

	var _CarouselStore2 = _interopRequireDefault(_CarouselStore);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Carousel = function (_React$Component) {
	    _inherits(Carousel, _React$Component);

	    function Carousel(props) {
	        _classCallCheck(this, Carousel);

	        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

	        _this.state = _CarouselStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Carousel, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _CarouselStore2.default.listen(this.onChange);
	            _CarouselActions2.default.getRecommend();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _CarouselStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	            $("#carousel").sangarSlider({
	                timer: false, // true or false to have the timer
	                width: 850, // slideshow width
	                height: 500, // slideshow height,
	                directionalNav: 'show',
	                pagination: 'bullet', // bullet, content-horizontal, content-vertical, none
	                paginationContent: ["Lorem Ipsum Dolor", "Dolor Sit Amet", "Consectetur", "Do Eiusmod", "Magna Aliqua"],
	                paginationContentWidth: 200
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Target = null;
	            if (this.state.loading) {
	                Target = _react2.default.createElement(_Loading2.default, null);
	            } else {
	                Target = this.state.list.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: data.data._id, className: 'sangar-content' },
	                        _react2.default.createElement('img', { src: data.data.abbreviations || '/img/abbreviations.png', alt: 'loading' }),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/' + data.option + '/' + data.data._id },
	                            _react2.default.createElement('data', { className: 'data title' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-sanger-content' },
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                data.data.title
	                            )
	                        )
	                    );
	                });
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'sangar-slideshow-container', id: 'carousel' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'sangar-content-wrapper' },
	                    Target
	                )
	            );
	        }
	    }]);

	    return Carousel;
	}(_react2.default.Component);

	exports.default = Carousel;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CarouselActions = function () {
	    function CarouselActions() {
	        _classCallCheck(this, CarouselActions);

	        this.generateActions('getRecommendSuccess');
	    }

	    _createClass(CarouselActions, [{
	        key: 'getRecommend',
	        value: function getRecommend() {
	            var _this = this;

	            $.ajax({
	                url: '/api/recommend',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getRecommendSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取数据失败');
	            });
	        }
	    }]);

	    return CarouselActions;
	}();

	exports.default = _alt2.default.createActions(CarouselActions);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _CarouselActions = __webpack_require__(30);

	var _CarouselActions2 = _interopRequireDefault(_CarouselActions);

	var _underscore = __webpack_require__(32);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CarouselStore = function () {
	    function CarouselStore() {
	        _classCallCheck(this, CarouselStore);

	        this.bindActions(_CarouselActions2.default);
	        this.list = [];
	        this.loading = true;
	    }

	    _createClass(CarouselStore, [{
	        key: 'onGetRecommendSuccess',
	        value: function onGetRecommendSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {
	                this.list = data.raw;
	            } else if (data.code === 500) {
	                toastr.error('获取数据失败');
	            }
	        }
	    }]);

	    return CarouselStore;
	}();

	exports.default = _alt2.default.createStore(CarouselStore);

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-29.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'loader-inner line-scale-pulse-out mon-loader-o mon-loader-bg' },
	                _react2.default.createElement('div', null),
	                _react2.default.createElement('div', null),
	                _react2.default.createElement('div', null),
	                _react2.default.createElement('div', null),
	                _react2.default.createElement('div', null)
	            );
	        }
	    }]);

	    return Loading;
	}(_react2.default.Component);

	exports.default = Loading;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _WeatherActions = __webpack_require__(35);

	var _WeatherActions2 = _interopRequireDefault(_WeatherActions);

	var _WeatherStore = __webpack_require__(36);

	var _WeatherStore2 = _interopRequireDefault(_WeatherStore);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Weather = function (_React$Component) {
	    _inherits(Weather, _React$Component);

	    function Weather(props) {
	        _classCallCheck(this, Weather);

	        var _this = _possibleConstructorReturn(this, (Weather.__proto__ || Object.getPrototypeOf(Weather)).call(this, props));

	        _this.state = _WeatherStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Weather, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _WeatherStore2.default.listen(this.onChange);
	            _WeatherActions2.default.getWeather();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _WeatherStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            _WeatherActions2.default.getWeather();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Target = null;
	            if (this.state.loading) {
	                Target = _react2.default.createElement(_Loading2.default, null);
	            } else if (!this.state.error && this.state.weather !== null) {
	                Target = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-weather' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-weather-title' },
	                        _react2.default.createElement('span', { className: 'fa fa-calendar' }),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-center mon-weather-time' },
	                            this.state.weather.date
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-weather-content' },
	                        _react2.default.createElement('img', { src: '/img/weather/' + this.state.weather.cond.code_d + '.png', alt: 'loading' }),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'javascript:;', className: 'mon-location' },
	                                _react2.default.createElement('span', { className: 'fa fa-map-pin' })
	                            ),
	                            this.state.city
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                this.state.weather.tmp.min,
	                                '\u2103'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '\uFF5E'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                this.state.weather.tmp.max,
	                                '\u2103'
	                            )
	                        )
	                    )
	                );
	            } else if (this.state.error) {
	                Target = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-error' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', onClick: this.refresh },
	                        _react2.default.createElement('span', { className: 'fa fa-refresh' }),
	                        '\u5237\u65B0\u8BD5\u8BD5'
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'mon-weather hidden-xs' },
	                Target
	            );
	        }
	    }]);

	    return Weather;
	}(_react2.default.Component);

	exports.default = Weather;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WeatherActions = function () {
	    function WeatherActions() {
	        _classCallCheck(this, WeatherActions);

	        this.generateActions('getWeatherSuccess');
	    }

	    _createClass(WeatherActions, [{
	        key: 'getWeather',
	        value: function getWeather() {
	            var _this = this;

	            $.ajax({
	                url: '/api/weather',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getWeatherSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取天气失败');
	            });
	        }
	    }]);

	    return WeatherActions;
	}();

	exports.default = _alt2.default.createActions(WeatherActions);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-11.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _WeatherActions = __webpack_require__(35);

	var _WeatherActions2 = _interopRequireDefault(_WeatherActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WeatherStore = function () {
	    function WeatherStore() {
	        _classCallCheck(this, WeatherStore);

	        this.bindActions(_WeatherActions2.default);
	        this.loading = true;
	        this.error = false;
	        this.weather = null;
	        this.city = '北京';
	    }

	    _createClass(WeatherStore, [{
	        key: 'onGetWeatherSuccess',
	        value: function onGetWeatherSuccess(data) {
	            this.loading = false;

	            if (data.code === 200) {
	                this.city = data.raw.city;
	                this.weather = data.raw.weather;
	            } else if (data.code === 404) {
	                this.error = true;
	                toastr.warning(data.meta);
	            } else {
	                this.error = true;
	                toastr.warning('查询天气失败');
	            }
	        }
	    }]);

	    return WeatherStore;
	}();

	exports.default = _alt2.default.createStore(WeatherStore);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _LoginActions = __webpack_require__(38);

	var _LoginActions2 = _interopRequireDefault(_LoginActions);

	var _LoginStore = __webpack_require__(39);

	var _LoginStore2 = _interopRequireDefault(_LoginStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Login = function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	        _this.state = _LoginStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _LoginStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _LoginStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }

	        /**
	         * 处理登陆，注册的按钮事件
	         * @param option 0————login 1————sign
	         */

	    }, {
	        key: 'handleClick',
	        value: function handleClick(option) {
	            var email = this.state.email,
	                password = this.state.password,
	                prePassword = this.state.prePassword,
	                name = this.state.username;
	            var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	            if (option === 0) {
	                if (email === '' || !reg.test(email)) {
	                    this.refs.loginEmail.getDOMNode().focus();
	                    toastr.warning("邮箱不可为空或则邮箱不符合规则");
	                }
	                if (password === '') {
	                    this.refs.loginPwd.getDOMNode().focus();
	                    toastr.warning("密码不可为空");
	                } else if (email !== '' && password !== '') _LoginActions2.default.login(email, password);
	            } else if (option === 1) {
	                if (email === '' || !reg.test(email)) {
	                    this.refs.email.getDOMNode().focus();
	                    toastr.error("邮箱不可为空或邮箱不符合规则");
	                } else if (password === '') {
	                    this.refs.password.getDOMNode().focus();
	                    toastr.error("密码不可为空");
	                } else if (prePassword === '') {
	                    this.refs.prePassword.getDOMNode().focus();
	                    toastr.warning("请确认密码");
	                } else if (name === '') {
	                    this.refs.user.getDOMNode().focus();
	                    toastr.error("用户名不可为空");
	                } else _LoginActions2.default.sign(email, password, prePassword, name);
	            }
	        }
	    }, {
	        key: 'changeForm',
	        value: function changeForm(form) {
	            var $preForm = void 0,
	                $newForm = void 0;
	            var $signForm = $('.sign-form'),
	                $loginForm = $('.login-form');
	            var location = window.location;
	            switch (form) {
	                case 0:
	                    $preForm = $signForm;
	                    $newForm = $loginForm;
	                    location.hash = 'login';
	                    break;
	                case 1:
	                    $preForm = $loginForm;
	                    $newForm = $signForm;
	                    location.hash = 'sign';
	                    break;
	            }

	            $preForm.css('display', 'none');
	            $newForm.css('display', 'block');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container mon-login mon-main' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-4 col-sm-4 col-xs-12 col-md-offset-4 col-sm-offset-4 mon-auth' },
	                        _react2.default.createElement('span', { className: 'fa fa-github animated shake' }),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { href: '/auth/github', className: 'btn btn-primary' },
	                                '\u767B\u9646'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	}(_react2.default.Component);

	exports.default = Login;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginActions = function () {
	    function LoginActions() {
	        _classCallCheck(this, LoginActions);

	        this.generateActions('doPasswordFail', 'loginSuccess', 'loginFail', 'doSignSuccess', 'doSignFail', 'changeEmail', 'changePassword', 'changeName', 'changePrePassword');
	    }

	    /**
	     * 登陆
	     * @param email
	     * @param password
	     * @param prePwd
	     */


	    _createClass(LoginActions, [{
	        key: 'login',
	        value: function login(email, password) {
	            var _this = this;

	            $.ajax({
	                type: 'POST',
	                url: '/api/login',
	                cache: false,
	                dataType: 'json',
	                data: {
	                    email: email,
	                    password: password
	                }
	            }).done(function (data) {
	                _this.actions.loginSuccess(data);
	            }).fail(function (data) {
	                _this.actions.loginFail;
	            });
	        }

	        /**
	         * 注册
	         * @param email
	         * @param password
	         * @param prePwd
	         */

	    }, {
	        key: 'sign',
	        value: function sign(email, password, prePwd, userName) {
	            var _this2 = this;

	            if (password !== prePwd) {
	                this.actions.doPasswordFail();
	            } else {
	                $.ajax({
	                    url: '/api/user',
	                    dataType: 'json',
	                    type: 'post',
	                    cache: false,
	                    data: {
	                        email: email,
	                        password: password,
	                        name: userName
	                    }
	                }).done(function (data) {
	                    _this2.actions.doSignSuccess(data);
	                }).fail(function (data) {
	                    _this2.actions.doSignFail(data);
	                });
	            }
	        }
	    }]);

	    return LoginActions;
	}();

	exports.default = _alt2.default.createActions(LoginActions);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _LoginActions = __webpack_require__(38);

	var _LoginActions2 = _interopRequireDefault(_LoginActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginStore = function () {
	    function LoginStore() {
	        _classCallCheck(this, LoginStore);

	        this.bindActions(_LoginActions2.default);
	        //登陆信息
	        this.email = '';
	        this.password = '';
	        //注册信息
	        this.username = '';
	        this.prePassword = '';
	        // 状态信息
	        this.stateInfo = '';
	        this.err = '';
	    }

	    /**
	     * 密码和确认密码不一样的错误
	     */


	    _createClass(LoginStore, [{
	        key: 'onDoPasswordFail',
	        value: function onDoPasswordFail() {
	            this.stateInfo = '两次密码不一样';
	            this.err = true;
	            toastr.warning(this.stateInfo);
	        }

	        /**
	         * @param email 登陆邮箱
	         * @param passwod 登陆密码
	         */

	    }, {
	        key: 'onLoginSuccess',
	        value: function onLoginSuccess(data) {
	            if (data.code === 200) {
	                var localStorage = window.localStorage,
	                    sessionStorage = window.sessionStorage;
	                localStorage.setItem('user', JSON.stringify(data));
	                sessionStorage.setItem('profile', JSON.stringify(data.data));
	                window.location = '/';
	            } else if (data.code === 400) {
	                toastr.error('登陆失败');
	            }
	        }

	        /**
	         * 登陆失败
	         * @param data
	         */

	    }, {
	        key: 'onLoginFail',
	        value: function onLoginFail() {
	            this.stateInfor = '服务器错误';
	            this.err = true;
	            toastr.error(this.stateInfor);
	        }

	        /**
	         * 注册成功
	         */

	    }, {
	        key: 'onDoSignSuccess',
	        value: function onDoSignSuccess(data) {
	            if (data.code === 200) {
	                toastr.success("注册成功,3秒后将跳转到首页");
	                setTimeout(function () {
	                    window.location = '/';
	                }, 3000);
	            } else if (data.code === 400) {
	                toastr.warning("邮箱或用户名已经被注册");
	            }
	        }

	        /**
	         * 注册失败
	         */

	    }, {
	        key: 'onSignFail',
	        value: function onSignFail(data) {
	            this.stateInfo = '服务器错误';
	            toastr.warning(this.stateInfo);
	        }
	    }, {
	        key: 'onChangeEmail',
	        value: function onChangeEmail(event) {
	            this.email = event.target.value;
	        }
	    }, {
	        key: 'onChangePassword',
	        value: function onChangePassword(event) {
	            this.password = event.target.value;
	        }
	    }, {
	        key: 'onChangeName',
	        value: function onChangeName(event) {
	            this.username = event.target.value;
	        }
	    }, {
	        key: 'onChangePrePassword',
	        value: function onChangePrePassword(event) {
	            this.prePassword = event.target.value;
	        }
	    }]);

	    return LoginStore;
	}();

	exports.default = _alt2.default.createStore(LoginStore);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _UserActions = __webpack_require__(41);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _UserStore = __webpack_require__(42);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _NoticePoint = __webpack_require__(22);

	var _NoticePoint2 = _interopRequireDefault(_NoticePoint);

	var _UpdateBlock = __webpack_require__(43);

	var _UpdateBlock2 = _interopRequireDefault(_UpdateBlock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var User = function (_React$Component) {
	    _inherits(User, _React$Component);

	    function User(props) {
	        _classCallCheck(this, User);

	        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

	        _this.state = _UserStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(User, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _UserStore2.default.listen(this.onChange);
	            _UserActions2.default.getUser();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            // Fetch new charachter data when URL path changes
	            if (prevProps.params.id !== this.props.params.id) {
	                _UserActions2.default.getUser(this.props.params.id);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _UserStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var content = void 0;
	            if (this.state.auth) {
	                content = _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-3 col-sm-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-center mon-user-img' },
	                            _react2.default.createElement('img', { src: this.state.avatar_url || '/img/dd9901f664234eb44f6b217e7fa04e17.jpg', width: '200', alt: 'loading' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-user-name' },
	                            this.state.username
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-vcard-stats' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/profile/followers', className: 'mon-link' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    this.state.followers
	                                ),
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Followers'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/profile/following', className: 'mon-link' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    this.state.following
	                                ),
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Following'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/profile/contribute/articles', className: 'mon-link' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    this.state.contribute
	                                ),
	                                _react2.default.createElement(
	                                    'b',
	                                    null,
	                                    'Contribute'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'nav mon-ability-list' },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/setting' },
	                                    _react2.default.createElement('span', { className: 'fa fa-cog' }),
	                                    '\u8BBE\u7F6E'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/center' },
	                                    _react2.default.createElement('span', { className: 'fa fa-user' }),
	                                    '\u4E2D\u5FC3'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/star' },
	                                    _react2.default.createElement('span', { className: 'fa fa-star' }),
	                                    '\u6536\u85CF'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'a',
	                                    { href: 'javascript:;', 'data-toggle': 'collapse', 'data-target': '#my-contribute' },
	                                    _react2.default.createElement('span', { className: 'fa fa-pencil-square' }),
	                                    '\u6295\u7A3F'
	                                ),
	                                _react2.default.createElement(
	                                    'ul',
	                                    { className: 'nav collapse mon-contribute', id: 'my-contribute' },
	                                    _react2.default.createElement(
	                                        'li',
	                                        null,
	                                        _react2.default.createElement(
	                                            _reactRouter.Link,
	                                            { to: '/post/article' },
	                                            _react2.default.createElement('span', { className: 'fa fa-file' }),
	                                            '\u6587\u7AE0'
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/profile/notice' },
	                                    _react2.default.createElement('span', { className: 'fa fa-bell' }),
	                                    '\u901A\u77E5',
	                                    _react2.default.createElement(_NoticePoint2.default, null)
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(_reactRouter.RouteHandler, null)
	                );
	            } else {
	                content = _react2.default.createElement('div', null);
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                content,
	                _react2.default.createElement(_UpdateBlock2.default, null)
	            );
	        }
	    }]);

	    return User;
	}(_react2.default.Component);

	User.contextTypes = {
	    router: _react2.default.PropTypes.func.isRequired
	};

	exports.default = User;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserActions = function () {
	    function UserActions() {
	        _classCallCheck(this, UserActions);

	        this.generateActions('getUserSuccess', 'getUserFail', 'getUserLocal');
	    }

	    _createClass(UserActions, [{
	        key: 'getUser',
	        value: function getUser() {
	            var _this = this;

	            $.ajax({
	                url: '/api/profile',
	                cache: false,
	                type: 'get'
	            }).done(function (data) {
	                _this.actions.getUserSuccess(data);
	            }).fail(function () {
	                _this.actions.getUserFail();
	            });
	        }
	    }]);

	    return UserActions;
	}();

	exports.default = _alt2.default.createActions(UserActions);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _UserActions = __webpack_require__(41);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserStore = function () {
	    function UserStore() {
	        _classCallCheck(this, UserStore);

	        this.bindActions(_UserActions2.default);
	        this.username = '';
	        this.avatar_url = '';
	        this.star = 0;
	        this.followers = 0;
	        this.contribute = 0;
	        this.following = 0;
	        this.domain = '';
	        this.auth = false;
	    }

	    _createClass(UserStore, [{
	        key: 'onGetUserSuccess',
	        value: function onGetUserSuccess(data) {
	            if (data.code === 200) {
	                this.auth = true;
	                this.username = data.raw.username;
	                this.avatar_url = data.raw.avatar_url;
	                this.followers = data.raw.followers || 0;
	                this.following = data.raw.following || 0;
	                this.contribute = data.raw.contribute || 0;
	                this.star = data.raw.star || 0;
	                this.doamin = data.raw.domain;
	                sessionStorage.profile = JSON.stringify(data.raw);
	            } else {
	                window.location = '/login';
	            }
	        }
	    }, {
	        key: 'onGetUserLocal',
	        value: function onGetUserLocal() {
	            var profile = sessionStorage.profile;
	            profile = JSON.parse(profile);
	            this.auth = true;
	            this.username = profile.username;
	            this.avatar_url = profile.avatar_url;
	            this.followers = profile.followers.length;
	            this.following = profile.following.length;
	            this.contribute = profile.contribute.length;
	            this.star = profile.star.length;
	            this.doamin = profile.domain;
	        }
	    }, {
	        key: 'onGetUserFail',
	        value: function onGetUserFail() {
	            toastr.error('服务器错误');
	        }
	    }]);

	    return UserStore;
	}();

	exports.default = _alt2.default.createStore(UserStore);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _UpdateBlockActions = __webpack_require__(44);

	var _UpdateBlockActions2 = _interopRequireDefault(_UpdateBlockActions);

	var _UpdateBlockStore = __webpack_require__(45);

	var _UpdateBlockStore2 = _interopRequireDefault(_UpdateBlockStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var UpdateBlock = function (_React$Component) {
	    _inherits(UpdateBlock, _React$Component);

	    function UpdateBlock(props) {
	        _classCallCheck(this, UpdateBlock);

	        var _this = _possibleConstructorReturn(this, (UpdateBlock.__proto__ || Object.getPrototypeOf(UpdateBlock)).call(this, props));

	        _this.state = _UpdateBlockStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(UpdateBlock, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _UpdateBlockStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _UpdateBlockStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var $updateModal = $("#updateModal");
	            var title = $updateModal.find("input[name='title']").val(),
	                summary = $updateModal.find("textarea[name='summary']").val(),
	                tags = $updateModal.find("input[name='tag']").val().replace(/\s+/g, ","),
	                content = $updateModal.find("textarea[name='content']").val();

	            tags = tags.split(',');
	            var tag = [];
	            tags.map(function (data) {
	                tag.push(data);
	            });

	            _UpdateBlockActions2.default.update(title, summary, tag, content, $("#_id").val());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'updateModal', className: 'modal fade', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel', 'data-backdrop': 'static' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal-dialog' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { 'aria-hidden': 'true' },
	                                    '\xD7'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'h4',
	                                null,
	                                '\u66F4\u65B0'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            _react2.default.createElement(
	                                'form',
	                                { role: 'form' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-info' },
	                                        '\u6807\u9898'
	                                    ),
	                                    _react2.default.createElement('input', { name: 'title', type: 'text', className: 'form-control' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-info' },
	                                        '\u7B80\u4ECB'
	                                    ),
	                                    _react2.default.createElement('textarea', { name: 'summary', cols: '30', rows: '4', className: 'form-control' })
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-info' },
	                                        '\u6807\u7B7E'
	                                    ),
	                                    _react2.default.createElement('input', { name: 'tag', type: 'text', className: 'form-control' })
	                                ),
	                                _react2.default.createElement('input', { id: '_id', type: 'hidden', name: '_id' }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'form-group' },
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'text-info' },
	                                        '\u4E3B\u4F53\u5185\u5BB9'
	                                    ),
	                                    _react2.default.createElement('textarea', { id: 'updateContent', name: 'content', cols: '30', rows: '10', className: 'form-control' })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                { className: 'btn btn-primary pull-right', onClick: this.handleClick.bind(this) },
	                                '\u4FDD\u5B58\u66F4\u65B0'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return UpdateBlock;
	}(_react2.default.Component);

	exports.default = UpdateBlock;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UpdateBlockActions = function () {
	    function UpdateBlockActions() {
	        _classCallCheck(this, UpdateBlockActions);

	        this.generateActions('changeTitle', 'changeSummary', 'changeTags', 'changeContent', 'updateSuccess');
	    }

	    _createClass(UpdateBlockActions, [{
	        key: 'update',
	        value: function update(title, summary, tags, content, _id) {
	            var _this = this;

	            var params = {
	                params: {
	                    title: title,
	                    summary: summary,
	                    tags: tags,
	                    content: content
	                },
	                _id: _id
	            };

	            $.ajax({
	                url: '/api/article',
	                type: 'put',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.updateSuccess(data);
	            }).fail(function () {
	                toastr.warning('更新失败');
	            });
	        }
	    }]);

	    return UpdateBlockActions;
	}();

	exports.default = _alt2.default.createActions(UpdateBlockActions);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _UpdateBlockActions = __webpack_require__(44);

	var _UpdateBlockActions2 = _interopRequireDefault(_UpdateBlockActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UpdateBlockStore = function () {
	    function UpdateBlockStore() {
	        _classCallCheck(this, UpdateBlockStore);

	        this.bindActions(_UpdateBlockActions2.default);
	        this.title = '';
	        this.summary = '';
	        this.tag = [];
	        this.tags = '';
	        this.content = '';
	    }

	    _createClass(UpdateBlockStore, [{
	        key: 'onChangeTitle',
	        value: function onChangeTitle(event) {

	            this.title = event.target.value;
	        }
	    }, {
	        key: 'onChangeSummary',
	        value: function onChangeSummary(event) {
	            this.summary = event.target.value;
	        }
	    }, {
	        key: 'onChangeTags',
	        value: function onChangeTags(event) {
	            var _this = this;

	            var tags = event.target.value.replace(/\s+/g, ",");
	            tags = tags.split(',');
	            this.tag = [];
	            tags.map(function (data) {
	                _this.tag.push(data);
	            });
	        }
	    }, {
	        key: 'onChangeContent',
	        value: function onChangeContent(event) {
	            this.content = event.target.value;
	        }
	    }, {
	        key: 'onUpdateSuccess',
	        value: function onUpdateSuccess(data) {
	            if (data.code === 200) {
	                toastr.success(data.meta);
	            } else if (data.code === 500) {
	                toastr.warning(data.meta);
	            }
	        }
	    }]);

	    return UpdateBlockStore;
	}();

	exports.default = _alt2.default.createStore(UpdateBlockStore);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SetActions = __webpack_require__(47);

	var _SetActions2 = _interopRequireDefault(_SetActions);

	var _SetStore = __webpack_require__(48);

	var _SetStore2 = _interopRequireDefault(_SetStore);

	var _Upload = __webpack_require__(49);

	var _Upload2 = _interopRequireDefault(_Upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Set = function (_React$Component) {
	    _inherits(Set, _React$Component);

	    function Set(props) {
	        _classCallCheck(this, Set);

	        var _this = _possibleConstructorReturn(this, (Set.__proto__ || Object.getPrototypeOf(Set)).call(this, props));

	        _this.state = _SetStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Set, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _SetStore2.default.listen(this.onChange);
	            _SetActions2.default.getProfile();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _SetStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var domain = this.state.domain,
	                email = this.state.email,
	                username = this.state.username,
	                intro = this.state.intro,
	                avatar_url = $("#user_img").attr('src');
	            var error = false;

	            var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
	                regDomain = /^[0-9a-zA-Z-]{1,20}$/;

	            if (!regEmail.test(email)) {
	                _SetActions2.default.emailValidateFail(1);
	                error = true;
	            } else {
	                _SetActions2.default.emailValidateFail(0);
	            }
	            if (username.length > 15 || username === '') {
	                _SetActions2.default.nameValidateFail(1);
	                error = true;
	            } else {
	                _SetActions2.default.nameValidateFail(0);
	            }
	            if (!regDomain.test(domain)) {
	                _SetActions2.default.domainValidateFail(1);
	                error = true;
	            } else {
	                _SetActions2.default.domainValidateFail(0);
	            }

	            if (!error) {
	                _SetActions2.default.changeProfile(domain, username, email, intro, avatar_url);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var account = void 0;
	            switch (this.state.account) {
	                case 1:
	                    account = _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-10 mon-account' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: this.state.github },
	                            _react2.default.createElement('span', { className: 'fa fa-github' })
	                        )
	                    );
	                    break;
	                case 2:
	                    account = _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-10 mon-account' },
	                        _react2.default.createElement('a', { className: 'fa fa-facebook' })
	                    );
	                    break;
	                case 3:
	                    account = _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-10 mon-account' },
	                        _react2.default.createElement('a', { className: 'fa fa-weibo' })
	                    );
	                    break;
	                default:
	                    account = _react2.default.createElement(
	                        'div',
	                        { className: 'col-sm-10 mon-account' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: this.state.github },
	                            _react2.default.createElement('span', { className: 'fa fa-github' })
	                        )
	                    );

	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
	                _react2.default.createElement(
	                    'legend',
	                    null,
	                    '\u8BBE\u7F6E'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-horizontal', role: 'form' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement('label', { className: 'col-sm-2 control-label' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-3' },
	                            _react2.default.createElement('img', { id: 'user_img', src: this.state.avatar_url, alt: 'loading', width: '200' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-7' },
	                            _react2.default.createElement(_Upload2.default, { img: '#user_img' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' + this.state.domainValidate },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'individuality_domain', className: 'col-sm-2 control-label' },
	                            '\u4E2A\u6027\u57DF\u540D'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            _react2.default.createElement('input', { type: 'text', id: 'individuality_domain', className: 'form-control', onChange: _SetActions2.default.changeDomain, placeholder: '\u6570\u5B57\uFF0C\u82F1\u6587\uFF0C\u7834\u6298\u7EBF', value: this.state.domain }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: this.state.domainValidate === '' ? 'hide' : 'text-danger' },
	                                '*\u4E2A\u6027\u57DF\u540D\u683C\u5F0F\u9519\u8BEF\u6216\u592A\u957F'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' + this.state.nameValidate },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'individuality_username', className: 'col-sm-2 control-label' },
	                            '\u7528\u6237\u540D'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            _react2.default.createElement('input', { type: 'text', id: 'individuality_username', className: 'form-control', onChange: _SetActions2.default.changeUserName, placeholder: '\u957F\u5EA6\u4E0D\u8D85\u8FC710', value: this.state.username, max: '15' }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: this.state.nameValidate === '' ? 'hide' : 'text-danger' },
	                                '*\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A\u6216\u662F\u8D85\u8FC715\u4E2A\u5B57'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' + this.state.emailValidate },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'individuality_email', className: 'col-sm-2 control-label' },
	                            '\u90AE\u7BB1'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            _react2.default.createElement('input', { type: 'email', id: 'individuality_email', className: 'form-control', onChange: _SetActions2.default.changeEmail, placeholder: 'example@example.com', value: this.state.email }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: this.state.emailValidate === '' ? 'hide' : 'text-danger' },
	                                '*\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group ' + this.state.introValidate },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'individuality_intro', className: 'col-sm-2 control-label' },
	                            '\u4E2A\u4EBA\u7B80\u4ECB'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-sm-10' },
	                            _react2.default.createElement('textarea', { type: 'email', id: 'individuality_intro', className: 'form-control', onChange: _SetActions2.default.changeIntro, placeholder: '\u7559\u4E0B\u4F60\u7684\u5B9D\u8D1D\u7B80\u4ECB\u5427', rows: '3', value: this.state.intro }),
	                            _react2.default.createElement(
	                                'span',
	                                { className: this.state.introValidate === '' ? 'hide' : 'text-danger' },
	                                '*\u7B80\u4ECB\u5B57\u6570\u8D85\u51FA50'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'fomr-group' },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'individuality_account', className: 'col-sm-2 control-label' },
	                            this.state.account === 0 ? "绑定社交账号" : "已绑定的账号"
	                        ),
	                        account
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn btn-primary pull-right', onClick: this.handleClick.bind(this) },
	                        '\u4FDD\u5B58\u8BBE\u7F6E'
	                    )
	                )
	            );
	        }
	    }]);

	    return Set;
	}(_react2.default.Component);

	exports.default = Set;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SetActions = function () {
	    function SetActions() {
	        _classCallCheck(this, SetActions);

	        this.generateActions('changeProfileSuccess', 'changeProfileFail', 'getProfileSuccess', 'getProfileLocal', 'changeDomain', 'changeEmail', 'changeUserName', 'changeIntro', 'domainValidateFail', 'nameValidateFail', 'emailValidateFail', 'introValidateFail');
	    }

	    _createClass(SetActions, [{
	        key: 'changeProfile',
	        value: function changeProfile(domain, username, email, intro, avatar_url) {
	            var _this = this;

	            var localStorage = window.localStorage;
	            var userProfile = localStorage.getItem('user');
	            userProfile = JSON.parse(userProfile);
	            var params = {
	                params: {
	                    email: email,
	                    domain: domain,
	                    username: username,
	                    introduce: intro,
	                    avatar_url: avatar_url
	                }
	            };
	            console.log(params.params);
	            $.ajax({
	                url: '/api/user',
	                type: 'put',
	                cache: 'false',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.changeProfileSuccess(data);
	            }).fail(function (data) {
	                _this.actions.changeProfileFail();
	            });
	        }
	    }, {
	        key: 'getProfile',
	        value: function getProfile() {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/profile',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this2.actions.getProfileSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取个人资料失败');
	            });
	        }
	    }]);

	    return SetActions;
	}();

	exports.default = _alt2.default.createActions(SetActions);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _SetActions = __webpack_require__(47);

	var _SetActions2 = _interopRequireDefault(_SetActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SetStore = function () {
	    function SetStore() {
	        _classCallCheck(this, SetStore);

	        this.bindActions(_SetActions2.default);
	        this.avatar_url = '';
	        this.username = '';
	        this.domain = '';
	        this.email = '';
	        this.account;
	        this.intro = '';
	        this.github = 'javascript:;';
	        /* 输入检测时输出状态 */
	        this.domainValidate = '';
	        this.nameValidate = '';
	        this.emailValidate = '';
	        this.introValidate = '';
	    }

	    _createClass(SetStore, [{
	        key: 'onChangeProfileSuccess',
	        value: function onChangeProfileSuccess(data) {
	            if (data.code === 200) {
	                toastr.success('修改用户资料成功');
	            } else if (data.code === 500) {
	                toastr.error('服务器错误');
	            } else {
	                toastr.warning(data.meta);
	            }
	        }
	    }, {
	        key: 'onChangeProfileFail',
	        value: function onChangeProfileFail() {
	            toastr.error('服务器错误');
	        }
	    }, {
	        key: 'onGetProfileSuccess',
	        value: function onGetProfileSuccess(data) {

	            if (data !== undefined && data.code === 200) {
	                this.avatar_url = data.raw.avatar_url;
	                this.username = data.raw.username;
	                this.domain = data.raw.domain;
	                this.email = data.raw.email;
	                this.account = data.raw.account;
	                this.intro = data.raw.introduce;
	                this.github = data.raw.github || 'javascript:;';
	            }
	        }
	    }, {
	        key: 'onGetProfileLocal',
	        value: function onGetProfileLocal(data) {
	            this.avatar_url = data.raw.avatar_url;
	            this.username = data.raw.username;
	            this.domain = data.raw.domain;
	            this.email = data.raw.email;
	            this.account = data.raw.account;
	            this.intro = data.raw.introduce;
	            this.github = data.raw.github || 'javascript:;';
	        }
	    }, {
	        key: 'onProfileFail',
	        value: function onProfileFail() {
	            toastr.error('hehe');
	        }
	    }, {
	        key: 'onChangeDomain',
	        value: function onChangeDomain(event) {
	            this.domain = event.target.value;
	        }
	    }, {
	        key: 'onChangeEmail',
	        value: function onChangeEmail(event) {
	            this.email = event.target.value;
	        }
	    }, {
	        key: 'onChangeUserName',
	        value: function onChangeUserName(event) {
	            this.username = event.target.value;
	        }
	    }, {
	        key: 'onChangeIntro',
	        value: function onChangeIntro(event) {
	            this.intro = event.target.value;
	        }

	        /**
	         * @param option 1--error 0--not error
	         */

	    }, {
	        key: 'onDomainValidateFail',
	        value: function onDomainValidateFail(option) {
	            if (option === 1) {
	                this.domainValidate = 'has-error';
	            } else if (option === 0) {
	                this.domainValidate = '';
	            }
	        }
	    }, {
	        key: 'onNameValidateFail',
	        value: function onNameValidateFail(option) {
	            if (option === 1) {
	                this.nameValidate = 'has-error';
	            } else if (option === 0) {
	                this.nameValidate = '';
	            }
	        }
	    }, {
	        key: 'onEmailValidateFail',
	        value: function onEmailValidateFail(option) {
	            if (option === 1) {
	                this.emailValidate = 'has-error';
	            } else if (option === 0) {
	                this.emailValidate = '';
	            }
	        }
	    }, {
	        key: 'onIntroValidateFail',
	        value: function onIntroValidateFail(option) {
	            if (option === 1) {
	                this.introValidate = 'has-error';
	            } else if (option === 0) {
	                this.introValidate = '';
	            }
	        }
	    }]);

	    return SetStore;
	}();

	exports.default = _alt2.default.createStore(SetStore);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _UploadActions = __webpack_require__(50);

	var _UploadActions2 = _interopRequireDefault(_UploadActions);

	var _UploadStore = __webpack_require__(51);

	var _UploadStore2 = _interopRequireDefault(_UploadStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Upload = function (_React$Component) {
	    _inherits(Upload, _React$Component);

	    function Upload(props) {
	        _classCallCheck(this, Upload);

	        var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

	        _this.state = _UploadStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Upload, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _UploadStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _UploadStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            $("#file_loader").removeClass('mon-upload-block').addClass('mon-upload-block-o');
	        }
	    }, {
	        key: 'closeClick',
	        value: function closeClick() {
	            $("#file_loader").removeClass('mon-upload-block-o').addClass('mon-upload-block');
	        }
	    }, {
	        key: 'upload',
	        value: function upload() {
	            _UploadActions2.default.upload(this.state.file, this.props.img, $("#_token").val());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { className: 'btn btn-info', onClick: this.handleClick.bind(this) },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'fa fa-file' },
	                        '\u4E0A\u4F20\u56FE\u7247'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'file_loader', className: 'mon-upload-block animated flipInX' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'file_loader_file', className: 'mon-upload' },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'uploader', className: 'btn btn-info' },
	                            '\u9009\u62E9\u6587\u4EF6'
	                        ),
	                        _react2.default.createElement('input', { type: 'file', id: 'uploader', className: 'mon-fileloader', onChange: _UploadActions2.default.changeFile }),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-muted' },
	                            '\u56FE\u7247\u9009\u62E9\u5C3A\u5BF8\u4E3A800*400'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'preview_block', className: 'mon-preview-block' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-preview-img' },
	                            _react2.default.createElement('img', { src: '/img/tmp.gif', id: 'img-preview', width: '200', alt: 'loading' }),
	                            _react2.default.createElement('input', { id: 'upload_img_value', type: 'hidden' }),
	                            _react2.default.createElement('input', { id: 'upload_img_width', type: 'hidden' }),
	                            _react2.default.createElement('input', { id: 'upload_img_height', type: 'hidden' }),
	                            _react2.default.createElement('input', { id: 'upload_img_X', type: 'hidden' }),
	                            _react2.default.createElement('input', { id: 'upload_img_Y', type: 'hidden' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'loader', className: 'loader-inner ball-pulse mon-loader' },
	                            _react2.default.createElement('div', null),
	                            _react2.default.createElement('div', null),
	                            _react2.default.createElement('div', null),
	                            _react2.default.createElement('div', null),
	                            _react2.default.createElement('div', null)
	                        ),
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'btn btn-danger', htmlFor: 'uploader' },
	                            _react2.default.createElement(
	                                'label',
	                                { htmlFor: 'uploader' },
	                                _react2.default.createElement('span', { className: 'fa fa-history' }),
	                                '\u91CD\u65B0\u9009\u62E9\u56FE\u7247'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'btn btn-primary', onClick: this.upload.bind(this) },
	                            _react2.default.createElement('span', { className: 'fa fa-check-circle' }),
	                            '\u786E\u5B9A'
	                        )
	                    ),
	                    _react2.default.createElement('span', { className: 'fa fa-close mon-close', onClick: this.closeClick.bind(this) })
	                )
	            );
	        }
	    }]);

	    return Upload;
	}(_react2.default.Component);

	exports.default = Upload;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _underscore = __webpack_require__(32);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function uploadLoad(option) {
	    if (option === 0) {
	        $("#loader").removeClass('mon-loader').addClass('mon-loader-o');
	    } else {
	        $("#loader").removeClass('mon-loader-o').addClass('mon-loader');
	    }
	}

	var UploadActions = function () {
	    function UploadActions() {
	        _classCallCheck(this, UploadActions);

	        this.generateActions('changeFile');
	    }

	    _createClass(UploadActions, [{
	        key: 'upload',
	        value: function upload(target, preImg, token) {
	            var _this = this;

	            uploadLoad(0);

	            // 裁剪时的图片大小
	            var $tracker = $(".jcrop-holder img");
	            var raw_width = $tracker.css('width'),
	                raw_height = $tracker.css('height');
	            raw_width = raw_width.split('p')[0];
	            raw_height = raw_height.split('p')[0];

	            var formData = new FormData(),
	                params = {
	                width: $("#upload_img_width").val() || raw_width,
	                height: $("#upload_img_height").val() || raw_height,
	                X: $("#upload_img_X").val() || 0,
	                Y: $("#upload_img_Y").val() || 0,
	                raw_width: raw_width,
	                raw_height: raw_height
	            };
	            formData.append('file', target);
	            formData.append('params', JSON.stringify(params));
	            //formData.append('token',token);

	            $.ajax({
	                url: '/api/upload',
	                contentType: false,
	                type: 'post',
	                cache: false,
	                dataType: 'json',
	                processData: false,
	                timeout: 10000,
	                data: formData,
	                headers: {
	                    'x-http-token': token
	                }
	            }).success(function (data) {
	                _this.actions.uploadSuccess(data, preImg);
	            }).fail(function () {
	                toastr.error('上传图片不成功');
	            }).error(function () {
	                toastr.warning('上传时间超时');
	                uploadLoad(1);
	            });
	        }
	    }, {
	        key: 'uploadSuccess',
	        value: function uploadSuccess(data, preImg) {
	            uploadLoad(1);
	            this.actions.uploadSuccessAfter();
	            if (data.code === 200) {
	                $(preImg).attr('src', '/img/upload/' + data.raw);
	                $(preImg + '_value').val('/img/upload/' + data.raw);
	                //$(preImg+'_width').val(width);
	                //$(preImg+'_height').val(height);
	                //$(preImg+'_X').val(X);
	                //$(preImg+'_Y').val(Y);
	            } else {
	                toastr.warning('上传图片不成功');
	            }
	        }
	    }, {
	        key: 'uploadSuccessAfter',
	        value: function uploadSuccessAfter() {
	            $("#file_loader").removeClass('mon-upload-block-o').addClass('mon-upload-block');
	            $("#file_loader_file").removeClass('mon-upload-o').addClass('mon-upload');
	            $("#preview_block").removeClass('mon-preview-block-o').addClass('mon-preview-block');
	        }
	    }]);

	    return UploadActions;
	}();

	exports.default = _alt2.default.createActions(UploadActions);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _UploadActions = __webpack_require__(50);

	var _UploadActions2 = _interopRequireDefault(_UploadActions);

	var _underscore = __webpack_require__(32);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UploadStore = function () {
	    function UploadStore() {
	        _classCallCheck(this, UploadStore);

	        this.bindActions(_UploadActions2.default);
	        this.file = {};
	        this.croper = {};

	        // 保存参数的块
	        this.width = '';
	        this.height = '';
	        this.X = '';
	        this.Y = '';
	    }

	    _createClass(UploadStore, [{
	        key: 'onChangeFile',
	        value: function onChangeFile(event) {
	            var _this = this;

	            var target = this.file = event.target.files[0];
	            var croper,
	                isChange = false;

	            $("#file_loader_file").removeClass('mon-upload').addClass('mon-upload-o');
	            $("#preview_block").removeClass('mon-preview-block').addClass('mon-preview-block-o');

	            if ((typeof FileReader === 'undefined' ? 'undefined' : _typeof(FileReader)) !== undefined) {
	                var acceptType = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

	                if (_underscore2.default.indexOf(acceptType, target.type) !== -1) {
	                    var fileReader = new FileReader(),
	                        result;
	                    fileReader.readAsDataURL(target);
	                    fileReader.onload = function (e) {
	                        result = e.target.result;
	                        $("#img-preview").attr('src', result).Jcrop({
	                            onChange: function onChange(event) {
	                                $("#upload_img_width").val(event.w);
	                                $("#upload_img_height").val(event.h);
	                                $("#upload_img_X").val(event.x);
	                                $("#upload_img_Y").val(event.y);
	                            }
	                        }, function () {
	                            croper = this;
	                            isChange = true;
	                        });
	                        if (isChange) {
	                            _this.croper = croper;
	                        }
	                        _this.croper.setImage(result); // 设置图片
	                    };
	                } else {
	                    toastr.warning('不支持的图片格式');
	                }
	            }
	        }
	    }]);

	    return UploadStore;
	}();

	exports.default = _alt2.default.createStore(UploadStore);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _NoticeActions = __webpack_require__(53);

	var _NoticeActions2 = _interopRequireDefault(_NoticeActions);

	var _NoticeStore = __webpack_require__(54);

	var _NoticeStore2 = _interopRequireDefault(_NoticeStore);

	var _reactRouter = __webpack_require__(3);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Notice = function (_React$Component) {
	    _inherits(Notice, _React$Component);

	    function Notice(props) {
	        _classCallCheck(this, Notice);

	        var _this = _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).call(this, props));

	        _this.state = _NoticeStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Notice, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _NoticeStore2.default.listen(this.onChange);
	            _NoticeActions2.default.getNoticesList();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _NoticeStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'readed',
	        value: function readed(_id) {
	            _NoticeActions2.default.getNotice(_id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var Target = null;
	            if (this.state.loading === false && this.state.notices.length !== 0) {
	                Target = this.state.notices.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: data.notice._id, 'data-item': data.notice._id, className: 'mon-conlist-item mon-notice-item media animated flipInX' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/member/' + data.user.domain },
	                                _react2.default.createElement('img', { src: data.user.avatar_url, alt: 'loading', width: '60' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-info' },
	                                data.notice.content
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    new Date(data.notice.create_time).toLocaleDateString()
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'btn btn-danger mon-read', onClick: _this2.readed.bind(_this2, data.notice._id) },
	                            '\u5DF2\u8BFB'
	                        )
	                    );
	                });
	            } else if (this.state.loading === false && this.state.notices.length === 0) {
	                Target = _react2.default.createElement(
	                    'div',
	                    { className: 'bg-primary mon-padding' },
	                    '\u6CA1\u6709\u79C1\u4FE1\u6216\u901A\u77E5'
	                );
	            } else if (this.state.loading === true) {
	                Target = _react2.default.createElement(_Loading2.default, null);
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'bg-info mon-bg-title mon-padding' },
	                    '\u901A\u77E5\uFF0F\u79C1\u4FE1'
	                ),
	                Target
	            );
	        }
	    }]);

	    return Notice;
	}(_react2.default.Component);

	exports.default = Notice;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticeActions = function () {
	    function NoticeActions() {
	        _classCallCheck(this, NoticeActions);

	        this.generateActions('getNoticesListSuccess', 'getNoticeSuccess');
	    }

	    _createClass(NoticeActions, [{
	        key: 'getNoticesList',
	        value: function getNoticesList() {
	            var _this = this;

	            $.ajax({
	                url: '/api/notices',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getNoticesListSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取通知失败');
	            });
	        }
	    }, {
	        key: 'getNotice',
	        value: function getNotice(_id) {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/notice/' + _id,
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this2.actions.getNoticeSuccess({ data: data, _id: _id });
	            }).fail(function () {
	                toastr.warning('网络链接不正常');
	            });
	        }
	    }]);

	    return NoticeActions;
	}();

	exports.default = _alt2.default.createActions(NoticeActions);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _NoticeActions = __webpack_require__(53);

	var _NoticeActions2 = _interopRequireDefault(_NoticeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticeStore = function () {
	    function NoticeStore() {
	        _classCallCheck(this, NoticeStore);

	        this.bindActions(_NoticeActions2.default);
	        this.notices = [];
	        this.loading = true;
	    }

	    _createClass(NoticeStore, [{
	        key: 'onGetNoticesListSuccess',
	        value: function onGetNoticesListSuccess(data) {
	            if (data.code === 500) {
	                toastr.warning('获取通知失败');
	            } else if (data.code === 404) {
	                toastr.warning('用户不存在');
	            } else if (data.code === 200) {
	                this.notices = data.raw;
	            }
	            this.loading = false;
	        }
	    }, {
	        key: 'onGetNoticeSuccess',
	        value: function onGetNoticeSuccess(raw) {
	            var data = raw.data,
	                item = raw._id;
	            if (data.code === 500) {
	                toastr.error('服务器错误');
	            } else if (data.code === 404) {
	                toastr.warning('通知（私信）不存在');
	            } else if (data.code === 200) {
	                $('[data-item="' + item + '"]').fadeOut("normal", function () {
	                    $(this).remove();
	                });
	            }
	            if (data.count === 0) {
	                this.notices = [];
	            }
	        }
	    }]);

	    return NoticeStore;
	}();

	exports.default = _alt2.default.createStore(NoticeStore);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _StarListActions = __webpack_require__(56);

	var _StarListActions2 = _interopRequireDefault(_StarListActions);

	var _StarListStore = __webpack_require__(57);

	var _StarListStore2 = _interopRequireDefault(_StarListStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var StarList = function (_React$Component) {
	    _inherits(StarList, _React$Component);

	    function StarList(props) {
	        _classCallCheck(this, StarList);

	        var _this = _possibleConstructorReturn(this, (StarList.__proto__ || Object.getPrototypeOf(StarList)).call(this, props));

	        _this.state = _StarListStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(StarList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _StarListStore2.default.listen(this.onChange);

	            // profile
	            if (this.props.params.domain === undefined) {
	                _StarListActions2.default.getStarList(0, null);
	            } else {
	                _StarListActions2.default.getStarList(1, this.props.params.domain);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _StarListStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'prevPage',
	        value: function prevPage() {
	            //let props = this.props;
	            _StarListActions2.default.getStarList(0, null, null, this.state.skip - 1);
	            _StarListActions2.default.changeSkip(0);
	        }
	    }, {
	        key: 'nextPage',
	        value: function nextPage() {
	            //let props = this.props;
	            _StarListActions2.default.getStarList(0, null, null, this.state.skip + 1);
	            _StarListActions2.default.changeSkip(1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var List = void 0,
	                SkipPage = void 0,
	                disabled = '',
	                disabledN = '';
	            if (this.state.skip === 0) {
	                disabled = 'disabled';
	            }
	            if (this.state.skip >= this.state.count / 10 - 1 || this.state.count < 10) {
	                disabledN = 'disabled';
	            }
	            if (this.state.starList.length === 0) {
	                List = _react2.default.createElement(
	                    'p',
	                    { className: 'bg-info' },
	                    '\u8FD8\u6CA1\u6709\u6536\u85CF\u4EFB\u4F55\u4E1C\u897F'
	                );
	                SkipPage = null;
	            } else {
	                List = this.state.starList.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'media mon-conlist-item', key: data._id },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/article/' + data._id },
	                                _react2.default.createElement('img', { src: data.abbreviations || '/img/abbreviations.png', alt: 'loading', width: '80' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { className: 'text-primary', to: '/article/' + data._id },
	                                data.title
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'mon-conlist-info' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'fa fa-clock-o' },
	                                    new Date(data.create_time).toLocaleDateString()
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted' },
	                                '\u7B80\u4ECB\uFF1A',
	                                data.summary || '什么鬼也没有'
	                            )
	                        )
	                    );
	                });

	                SkipPage = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-skip' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn mon-page mon-prev-page ' + disabled, onClick: this.prevPage.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-arrow-left' })
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn mon-page mon-next-page ' + disabledN, onClick: this.nextPage.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-arrow-right' })
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9 animated fadeInUp mon-padding' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'bg-info mon-bg-title mon-padding' },
	                    '\u6536\u85CF\u5217\u8868'
	                ),
	                List,
	                SkipPage
	            );
	        }
	    }]);

	    return StarList;
	}(_react2.default.Component);

	exports.default = StarList;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarListActions = function () {
	    function StarListActions() {
	        _classCallCheck(this, StarListActions);

	        this.generateActions('getStarListSuccess', 'changeSkipSuccess');
	    }

	    /**
	     * 获取收藏列表
	     * @param what　0--通过id 获取用户　１－－通过domain 获取用户
	     * @param user
	     * @param option　　'all','article','music','animate'
	     * @param skip
	     */


	    _createClass(StarListActions, [{
	        key: 'getStarList',
	        value: function getStarList(what, user) {
	            var _this = this;

	            var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'all';
	            var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	            console.log('hehe');
	            var params = {
	                what: what,
	                user: {},
	                option: option,
	                skip: skip
	            };

	            if (what === 0) {
	                params.user = { _id: user };
	            } else {
	                params.user = { domain: user };
	            }

	            $.ajax({
	                url: '/api/stars',
	                cache: false,
	                type: 'post',
	                data: JSON.stringify(params),
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getStarListSuccess(data);
	            }).fail(function (data) {
	                toastr.error('链接出现问题');
	            });
	        }
	    }, {
	        key: 'changeSkip',
	        value: function changeSkip(option) {
	            this.actions.changeSkipSuccess(option);
	        }
	    }]);

	    return StarListActions;
	}();

	exports.default = _alt2.default.createActions(StarListActions);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-10-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _StarListActions = __webpack_require__(56);

	var _StarListActions2 = _interopRequireDefault(_StarListActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarListStore = function () {
	    function StarListStore() {
	        _classCallCheck(this, StarListStore);

	        this.bindActions(_StarListActions2.default);
	        this.starList = [];
	        this.skip = 0;
	        this.count = 0;
	    }

	    _createClass(StarListStore, [{
	        key: 'onGetStarListSuccess',
	        value: function onGetStarListSuccess(data) {
	            if (data.code === 500) {
	                toastr.error('服务器错误');
	            } else if (data.code === 200) {
	                this.starList = data.raw._raw;
	                this.count = data.raw.count;
	            }
	        }
	    }, {
	        key: 'onChangeSkipSuccess',
	        value: function onChangeSkipSuccess(option) {
	            if (option === 0) {
	                this.skip = this.skip - 1;
	            } else {
	                this.skip = this.skip + 1;
	            }
	        }
	    }]);

	    return StarListStore;
	}();

	exports.default = _alt2.default.createStore(StarListStore);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-10-27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var NotFound = function (_React$Component) {
	    _inherits(NotFound, _React$Component);

	    function NotFound(props) {
	        _classCallCheck(this, NotFound);

	        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
	    }

	    _createClass(NotFound, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mon-table' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        this.props.state
	                    )
	                )
	            );
	        }
	    }]);

	    return NotFound;
	}(_react2.default.Component);

	exports.default = NotFound;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _PostArticleActions = __webpack_require__(60);

	var _PostArticleActions2 = _interopRequireDefault(_PostArticleActions);

	var _PostArticleStore = __webpack_require__(61);

	var _PostArticleStore2 = _interopRequireDefault(_PostArticleStore);

	var _Upload = __webpack_require__(49);

	var _Upload2 = _interopRequireDefault(_Upload);

	var _markdown = __webpack_require__(62);

	var _markdown2 = _interopRequireDefault(_markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-3.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var PostArticle = function (_React$Component) {
	    _inherits(PostArticle, _React$Component);

	    function PostArticle(props) {
	        _classCallCheck(this, PostArticle);

	        var _this = _possibleConstructorReturn(this, (PostArticle.__proto__ || Object.getPrototypeOf(PostArticle)).call(this, props));

	        _this.state = _PostArticleStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(PostArticle, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _PostArticleStore2.default.listen(this.onChange);
	            this.refs.title.getDOMNode().focus();
	            _PostArticleActions2.default.getToken();

	            var markdown = _markdown2.default.markdown;
	            $("#some-textarea").markdown({
	                autofocus: false,
	                savable: false,
	                onPreview: function onPreview(e) {
	                    var previewContent;

	                    if (e.isDirty()) {
	                        var originalContent = e.getContent();

	                        previewContent = markdown.toHTML(originalContent);
	                    } else {
	                        previewContent = "写下你的大作吧！！！";
	                    }
	                    return previewContent;
	                }
	            });
	            if (window.localStorage.getItem('postArticle') !== null) {
	                $(".fog").css('display', 'block');
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _PostArticleStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            _PostArticleActions2.default.postArticle(this.state.title, this.state.summary, this.state.tag, $("#upload_img_value").val(), this.state.content, this.state.token);
	        }
	    }, {
	        key: 'saveArticle',
	        value: function saveArticle() {
	            var localStorage = window.localStorage;
	            var article = {
	                title: this.state.title,
	                summary: this.state.summary,
	                tags: this.state.tag,
	                content: this.state.content,
	                abbreviations: $("#upload_img_value").val(),
	                post: false
	            };
	            localStorage.setItem('postArticle', JSON.stringify(article));
	            toastr.success('保存稿件成功');
	        }
	    }, {
	        key: 'showExplain',
	        value: function showExplain() {}
	    }, {
	        key: 'load',
	        value: function load(loadable) {
	            if (loadable) {
	                _PostArticleActions2.default.loadEditContent(true);
	            }
	            $(".fog").css('display', 'none');
	        }
	    }, {
	        key: 'showExplain',
	        value: function showExplain(type) {
	            if (type == 0) {
	                $(".explain-block").show();
	            } else {
	                $(".explain-block").hide();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'bg-success mon-padding mon-bg-title' },
	                    '\u6587\u7AE0\u6295\u7A3F'
	                ),
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-horizontal' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-1' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'label label-default', htmlFor: 'title' },
	                                '\u6587\u7AE0\u6807\u9898'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-11' },
	                            _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'title', ref: 'title', value: this.state.title, onChange: _PostArticleActions2.default.changeTitle, placeholder: '\u6587\u7AE0\u6807\u9898' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-1' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'label label-default', htmlFor: 'tag' },
	                                '\u6587\u7AE0\u6807\u7B7E'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-11' },
	                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'tag', ref: 'tag', value: this.state.tag, onChange: _PostArticleActions2.default.changeTag, placeholder: '\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u7B7E (\u6807\u7B7E\u95F4\u4EE5\u7A7A\u683C\u5206\u9694)' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-1' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'label label-default', htmlFor: 'summary' },
	                                '\u6587\u7AE0\u7B80\u4ECB'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-11' },
	                            _react2.default.createElement('textarea', { className: 'form-control', name: 'summary', id: 'summary', rows: '5', value: this.state.summary, onChange: _PostArticleActions2.default.changeSummary, placeholder: '\u6587\u7AE0\u7B80\u4ECB' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-1' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'label label-default' },
	                                '\u5C01\u9762\u56FE\u7247'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-8' },
	                            _react2.default.createElement(_Upload2.default, { img: '#upload_img' }),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted' },
	                                '\u8BF7\u9009\u62E9\u60A8\u7684\u6587\u7AE0\u5C01\u9762\u56FE\u7247\u3002\u5C01\u9762\u56FE\u7247\u4E0D\u5F97\u5305\u542B\u4EE4\u4EBA\u53CD\u611F\u7684\u4FE1\u606F\uFF0C\u5C3A\u5BF8\u4E3A480*270\u50CF\u7D20\u3002 \u8BF7\u52FF\u4F7F\u7528\u4E0E\u5185\u5BB9\u65E0\u5173\uFF0C\u6216\u5206\u8FA8\u7387\u4E0D\u4E3A16:9\u7684\u56FE\u7247\u4F5C\u4E3A\u5C01\u9762\u56FE\u7247\u3002'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-3' },
	                            _react2.default.createElement('img', { src: this.state.abbreviations || "/img/tmp.gif", id: 'upload_img', width: '120', alt: 'loading' })
	                        )
	                    ),
	                    _react2.default.createElement('input', { type: 'hidden', id: '_token', value: this.state.token }),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', 'class': 'text-info', onClick: this.showExplain.bind(this, 0) },
	                        '\u7F16\u8F91\u8BF4\u660E'
	                    ),
	                    _react2.default.createElement('textarea', { id: 'some-textarea', name: 'content', 'data-provide': 'markdown', rows: '15', value: this.state.content, onChange: _PostArticleActions2.default.changeContent }),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn btn-info mon-post-btn', onClick: this.saveArticle.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-clock-o' }),
	                        '\u4FDD\u5B58'
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn btn-success pull-right mon-post-btn', onClick: this.handleClick.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-check-circle-o' }),
	                        '\u63D0\u4EA4\u7A3F\u4EF6'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'fog' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-tip animated flipInX' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '\u4F60\u5DF2\u7ECF\u4FDD\u5B58\u4E86\u7A3F\u4EF6\uFF0C\u662F\u5426\u52A0\u8F7D'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'btn btn-danger', onClick: this.load.bind(this, false) },
	                                '\u5426'
	                            ),
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'btn btn-primary', onClick: this.load.bind(this, true) },
	                                '\u662F'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'explain-block fadeLeft' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'mon-bg-title' },
	                        '\u8BF4\u660E'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'explain-close-btn', 'aria-hidden': 'true', onClick: this.showExplain.bind(this, 1) },
	                        '\xD7'
	                    ),
	                    _react2.default.createElement(
	                        'ol',
	                        { className: 'nav' },
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            '1. \u6587\u7AE0\u7F16\u8F91\u91C7\u7528markdown\u683C\u5F0F\u8FDB\u884C\u7F16\u5199\uFF0C\u5EFA\u8BAE\u5148\u8BA4\u8BC6markdown\u7684\u683C\u5F0F\u4F7F\u7528',
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'http://sspai.com/25137' },
	                                '\u4F20\u9001\u95E8'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            '2. \u6587\u7AE0\u4E2D\u53EF\u4EE5\u5BF9\u4EE3\u7801\u8FDB\u884C\u9AD8\u4EAE\uFF0C\u6BD4\u5982\uFF1A',
	                            _react2.default.createElement(
	                                'pre',
	                                null,
	                                '```javascript',
	                                _react2.default.createElement('br', null),
	                                '// bad',
	                                _react2.default.createElement('br', null),
	                                'var a;',
	                                _react2.default.createElement('br', null),
	                                _react2.default.createElement('br', null),
	                                '// good',
	                                _react2.default.createElement('br', null),
	                                'let a;',
	                                _react2.default.createElement('br', null),
	                                '```'
	                            ),
	                            '\u5728\u5E38\u89C4\u7684\u4EE3\u7801\u683C\u5F0F\u7B26\u53F7\u540E\u9762\u6DFB\u52A0\u8BED\u8A00\uFF0C\u6BD4\u5982',
	                            _react2.default.createElement(
	                                'code',
	                                null,
	                                'javascript'
	                            ),
	                            '\u6216',
	                            _react2.default.createElement(
	                                'code',
	                                null,
	                                'css'
	                            ),
	                            '\u7B49\u3002\u9AD8\u4EAE\u4EE3\u7801\u652F\u6301\u591A\u79CD\u8BED\u8A00\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\u3002'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            null,
	                            '3. \u672C\u7F16\u8F91\u5668\u4E0B\u65B9\u6709\u4E00\u4E2A\u4FDD\u5B58\u6309\u94AE\uFF0C\u5F53\u4F60\u70B9\u51FB\u4FDD\u5B58\u65F6\uFF0C\u7A0B\u5E8F\u4F1A\u4FDD\u5B58\u5F53\u524D\u7684\u6587\u7AE0\u5185\u5BB9\uFF0C\u5305\u88F9\u6807\u9898\u7B49\uFF0C\u4F46\u4E0D\u5305\u62EC\u5C01\u9762\u3002\u5F53\u4F60\u4E0B\u4E00\u6B21\u8FDB\u5165\u6295\u7A3F\u9875\u65F6\uFF0C\u4F1A\u81EA\u52A8\u52A0\u8F7D\u4F60\u6700\u540E\u4E00\u6B21\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8FDB\u884C\u539F\u5EA6\u56DE\u590D\u3002'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PostArticle;
	}(_react2.default.Component);

	exports.default = PostArticle;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-3.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PostArticleActions = function () {
	    function PostArticleActions() {
	        _classCallCheck(this, PostArticleActions);

	        this.generateActions('changeTitle', 'changeAbbreviations', 'changeTag', 'changeContent', 'changeSummary', 'changeMusic', 'postArticleSuccess', 'getTokenSuccess', 'loadEditContentSuccess');
	    }

	    _createClass(PostArticleActions, [{
	        key: 'getToken',
	        value: function getToken() {
	            var _this = this;

	            $.ajax({
	                url: '/api/token',
	                type: 'get',
	                cache: false
	            }).done(function (data) {
	                _this.actions.getTokenSuccess(data);
	            });
	        }
	    }, {
	        key: 'postArticle',
	        value: function postArticle(title, summary, tags, abbreviations, content, token) {
	            var _this2 = this;

	            var params = {
	                params: {
	                    title: title,
	                    summary: summary,
	                    tags: tags,
	                    abbreviations: abbreviations,
	                    content: content,
	                    create_time: new Date().getTime(),
	                    token: $("#_token").val()
	                },
	                token: token
	            };

	            $.ajax({
	                url: '/api/article',
	                type: 'post',
	                dataType: 'json',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this2.actions.postArticleSuccess(data);
	            }).fail(function () {
	                toastr.error('发表文章不成功');
	            });
	        }
	    }, {
	        key: 'loadEditContent',
	        value: function loadEditContent(load) {
	            var _this3 = this;

	            if (load) {
	                setTimeout(function () {
	                    _this3.actions.loadEditContentSuccess();
	                    //clearTimeout(id);
	                }, 200);
	            } else {
	                return false;
	            }
	        }
	    }]);

	    return PostArticleActions;
	}();

	exports.default = _alt2.default.createActions(PostArticleActions);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-3.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _PostArticleActions = __webpack_require__(60);

	var _PostArticleActions2 = _interopRequireDefault(_PostArticleActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PostArticleStore = function () {
	    function PostArticleStore() {
	        _classCallCheck(this, PostArticleStore);

	        this.bindActions(_PostArticleActions2.default);
	        this.title = '';
	        this.abbreviations = '';
	        this.tag = [];
	        this.content = '';
	        this.summary = '';
	        this.token = '';
	    }

	    _createClass(PostArticleStore, [{
	        key: 'onChangeTitle',
	        value: function onChangeTitle(event) {
	            this.title = event.target.value;
	        }
	    }, {
	        key: 'onChangeAbbreviations',
	        value: function onChangeAbbreviations(event) {
	            this.abbreviations = event.target.value;
	        }
	    }, {
	        key: 'onChangeTag',
	        value: function onChangeTag(event) {
	            var _this = this;

	            var tags = event.target.value.replace(/\s+/g, ",");
	            tags = tags.split(',');
	            this.tag = [];
	            tags.map(function (data) {
	                _this.tag.push(data);
	            });
	        }
	    }, {
	        key: 'onChangeContent',
	        value: function onChangeContent(event) {
	            this.content = event.target.value;
	        }
	    }, {
	        key: 'onChangeSummary',
	        value: function onChangeSummary(event) {
	            this.summary = event.target.value;
	        }
	    }, {
	        key: 'onPostArticleSuccess',
	        value: function onPostArticleSuccess(data) {
	            switch (data.code) {
	                case 200:
	                    toastr.success('发表文章成功');
	                    break;
	                case 403:
	                    toastr.warning('你还没有权限发表文章');
	                    break;
	                case 406:
	                    toastr.warning('这个用户不存在');
	                    break;
	                case 500:
	                    toastr.error('发表文章不成功');
	                    break;
	            }
	        }
	    }, {
	        key: 'onGetTokenSuccess',
	        value: function onGetTokenSuccess(data) {
	            if (data.code === 200) {
	                this.token = data.token;
	            }
	        }
	    }, {
	        key: 'onLoadEditContentSuccess',
	        value: function onLoadEditContentSuccess() {
	            var localStorage = window.localStorage,
	                editContent = localStorage.getItem('postArticle');
	            editContent = JSON.parse(editContent);
	            this.summary = editContent.summary;
	            this.title = editContent.title;
	            this.abbreviations = editContent.abbreviations;
	            this.tag = editContent.tags;
	            this.content = editContent.content;
	        }
	    }]);

	    return PostArticleStore;
	}();

	exports.default = _alt2.default.createStore(PostArticleStore);

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _MyContributeActions = __webpack_require__(69);

	var _MyContributeActions2 = _interopRequireDefault(_MyContributeActions);

	var _MyContributeStore = __webpack_require__(70);

	var _MyContributeStore2 = _interopRequireDefault(_MyContributeStore);

	var _reactRouter = __webpack_require__(3);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var MyContribute = function (_React$Component) {
	    _inherits(MyContribute, _React$Component);

	    function MyContribute(props) {
	        _classCallCheck(this, MyContribute);

	        var _this = _possibleConstructorReturn(this, (MyContribute.__proto__ || Object.getPrototypeOf(MyContribute)).call(this, props));

	        _this.state = _MyContributeStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(MyContribute, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _MyContributeStore2.default.listen(this.onChange);
	            _MyContributeActions2.default.getContribute(this.props.params.column, 0);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.params.column !== this.props.params.column) {
	                _MyContributeActions2.default.getContribute(this.props.params.column, 0);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _MyContributeStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(column, _id, target) {
	            _MyContributeActions2.default.delete(column, _id, '#' + target);
	        }
	    }, {
	        key: 'update',
	        value: function update(column, _id) {
	            _MyContributeActions2.default.get(column, _id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var List = void 0;
	            if (this.state.loading) {
	                List = _react2.default.createElement(_Loading2.default, null);
	            } else if (this.state.list.length !== 0) {
	                List = this.state.list.map(function (data, index) {
	                    var option = 'article';
	                    switch (_this2.props.params.column) {
	                        case 'articles':
	                            option = 'article';
	                            break;
	                        case 'musics':
	                            option = 'music';
	                            break;
	                        case 'animtes':
	                            option = 'animate';
	                            break;
	                    }
	                    return _react2.default.createElement(
	                        'div',
	                        { id: "myContribute_" + data.data._id, className: 'media mon-conlist-item', key: 'contribute:' + data.data._id },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/' + option + '/' + data.data._id },
	                                _react2.default.createElement('img', { src: data.data.abbreviations || '/img/abbreviations.png', alt: 'loading', width: '80' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/' + option + '/' + data.data._id, className: 'text-primary mon-conlist-title' },
	                                data.data.title
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted mon-conlist-info' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '\u6295\u7A3F\u65E5\u671F\uFF1A',
	                                    new Date(data.data.create_time).toLocaleDateString()
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '\u6D4F\u89C8\u6B21\u6570\uFF1A',
	                                    data.data.browser_count
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted' },
	                                data.data.summary
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'mon-fixed-btn' },
	                                _react2.default.createElement(
	                                    'button',
	                                    { className: 'btn btn-danger', onClick: _this2.delete.bind(_this2, option, data.data._id, "myContribute_" + data.data._id) },
	                                    '\u5220\u9664'
	                                ),
	                                _react2.default.createElement(
	                                    'button',
	                                    { className: 'btn btn-primary', onClick: _this2.update.bind(_this2, option, data.data._id) },
	                                    '\u66F4\u6539'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'mon-conlist-index' },
	                            index + 1
	                        )
	                    );
	                });
	            } else if (this.state.error) {
	                List = _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;' },
	                        _react2.default.createElement('span', { className: 'fa fa-circle' }),
	                        '\u5237\u65B0'
	                    )
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'animated flipInX mon-contribute' },
	                List
	            );
	        }
	    }]);

	    return MyContribute;
	}(_react2.default.Component);

	exports.default = MyContribute;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MyContributeActions = function () {
	    function MyContributeActions() {
	        _classCallCheck(this, MyContributeActions);

	        this.generateActions('getContributeSuccess', 'getContributeFail', 'deleteSuccess', 'getSuccess', 'getFail');
	    }

	    _createClass(MyContributeActions, [{
	        key: 'getContribute',
	        value: function getContribute(column, skip) {
	            var _this = this;

	            var params = {
	                option: {
	                    skip: skip,
	                    limit: 10
	                },
	                query: 'profile'
	            };

	            $.ajax({
	                url: '/api/' + column,
	                type: 'post',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                dataType: 'json',
	                data: JSON.stringify(params),
	                timeOut: 10000
	            }).done(function (data) {
	                _this.actions.getContributeSuccess(data);
	            }).fail(function () {
	                _this.actions.getContributeFail();
	            }).error(function () {
	                _this.actions.getContributeFail();
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(column, _id, target) {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/' + column + '/' + _id,
	                type: 'delete',
	                contentType: 'application/json;charset=utf-8',
	                cache: false
	            }).done(function (data) {
	                _this2.actions.deleteSuccess({ data: data, target: target });
	            }).fail(function () {
	                toastr.warning('删除不成功');
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(column, _id) {
	            var _this3 = this;

	            $.ajax({
	                url: '/api/' + column + '/' + _id + '/false',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this3.actions.getSuccess(data);
	            }).fail(function () {
	                _this3.actions.getFail();
	            });
	        }
	    }]);

	    return MyContributeActions;
	}();

	exports.default = _alt2.default.createActions(MyContributeActions);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _MyContributeActions = __webpack_require__(69);

	var _MyContributeActions2 = _interopRequireDefault(_MyContributeActions);

	var _markdown = __webpack_require__(62);

	var _markdown2 = _interopRequireDefault(_markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MyContributeStore = function () {
	    function MyContributeStore() {
	        _classCallCheck(this, MyContributeStore);

	        this.bindActions(_MyContributeActions2.default);
	        this.loading = true;
	        this.error = false;
	        this.list = [];
	    }

	    _createClass(MyContributeStore, [{
	        key: 'onGetContributeSuccess',
	        value: function onGetContributeSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {
	                this.list = data.raw._raw;
	            } else if (data.code === 500) {
	                this.error = true;
	            }
	        }
	    }, {
	        key: 'onGetContributeFail',
	        value: function onGetContributeFail() {
	            this.loading = false;
	            this.error = true;
	        }
	    }, {
	        key: 'onDeleteSuccess',
	        value: function onDeleteSuccess(raw) {

	            var data = raw.data,
	                target = raw.target;

	            if (data.code === 200) {
	                toastr.success('删除成功');
	                $(target).fadeOut(function () {
	                    $(this).remove();
	                });
	            } else {
	                toastr.warning(data.meta);
	            }
	        }
	    }, {
	        key: 'onGetSuccess',
	        value: function onGetSuccess(data) {

	            if (data.code === 200) {
	                var target = data.raw.article;
	                var $updateModal = $("#updateModal");
	                $updateModal.on('show.bs.modal', function (event) {
	                    var modal = $(this),
	                        tags = target.tags.toString().replace(/,/g, ' ');
	                    modal.find("input[name='title']").val(target.title);
	                    modal.find("textarea[name='summary']").val(target.summary);
	                    modal.find("input[name='tag']").val(tags);
	                    modal.find("textarea[name='content']").val(target.content);
	                    modal.find("input[name='_id']").val(target._id);

	                    var markdown = _markdown2.default.markdown;
	                    $("#updateContent").markdown({
	                        autofocus: false,
	                        savable: false,
	                        onPreview: function onPreview(e) {
	                            var previewContent;

	                            if (e.isDirty()) {
	                                var originalContent = e.getContent();

	                                previewContent = markdown.toHTML(originalContent);
	                            } else {
	                                previewContent = "写下你的大作吧！！！";
	                            }
	                            return previewContent;
	                        }
	                    });
	                });
	                $updateModal.modal('show');
	            } else {
	                toastr.warning('获取数据失败');
	            }
	        }
	    }, {
	        key: 'onGetFail',
	        value: function onGetFail() {
	            toastr.warning('获取数据失败');
	        }
	    }]);

	    return MyContributeStore;
	}();

	exports.default = _alt2.default.createStore(MyContributeStore);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ProfileCenterActions = __webpack_require__(72);

	var _ProfileCenterActions2 = _interopRequireDefault(_ProfileCenterActions);

	var _ProfileCenterStore = __webpack_require__(73);

	var _ProfileCenterStore2 = _interopRequireDefault(_ProfileCenterStore);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ProfileCenter = function (_React$Component) {
	    _inherits(ProfileCenter, _React$Component);

	    function ProfileCenter(props) {
	        _classCallCheck(this, ProfileCenter);

	        var _this = _possibleConstructorReturn(this, (ProfileCenter.__proto__ || Object.getPrototypeOf(ProfileCenter)).call(this, props));

	        _this.state = _ProfileCenterStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(ProfileCenter, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ProfileCenterStore2.default.listen(this.onChange);
	            _ProfileCenterActions2.default.getProfile();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ProfileCenterStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Target = null,
	                More = null;
	            if (this.state.starsCount > 7) {
	                More = _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-3 col-xs-12 mon-more' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/profile/star', className: 'mon-muted' },
	                        _react2.default.createElement('span', { className: 'fa fa-plus' })
	                    )
	                );
	            }
	            if (this.state.loading) {
	                Target = _react2.default.createElement(_Loading2.default, null);
	            } else if (this.state.loading === false && this.state.stars.length > 0) {
	                Target = this.state.stars.map(function (data) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: data._id, className: 'media col-md-6 col-xs-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/article/' + data._id },
	                                _react2.default.createElement('img', { src: data.abbreviations || '/img/abbreviations.png', width: '120', alt: 'loading' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/article/' + data._id, className: 'text-primary' },
	                                data.title
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted' },
	                                data.summary || '什么鬼也没有'
	                            )
	                        )
	                    );
	                });
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mon-badge mon-tab' },
	                    _react2.default.createElement('span', { className: 'fa fa-folder-open text-info' }),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/profile/contribute/articles', className: 'mon-muted' },
	                        '\u4E2A\u4EBA\u6295\u7A3F'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'badge' },
	                        this.state.contribute
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mon-tab' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-badge' },
	                        _react2.default.createElement('span', { className: 'fa fa-file-text text-success' }),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/profile/star', className: 'mon-muted' },
	                            '\u6536\u85CF'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'badge' },
	                            this.state.starsCount
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-star-list clearfix' },
	                        Target,
	                        More
	                    )
	                )
	            );
	        }
	    }]);

	    return ProfileCenter;
	}(_react2.default.Component);

	exports.default = ProfileCenter;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileCenterActions = function () {
	    function ProfileCenterActions() {
	        _classCallCheck(this, ProfileCenterActions);

	        this.generateActions('getProfileSuccess');
	    }

	    _createClass(ProfileCenterActions, [{
	        key: 'getProfile',
	        value: function getProfile() {
	            var _this = this;

	            $.ajax({
	                url: '/api/profile/center',
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                timeOut: 3000
	            }).done(function (data) {
	                _this.actions.getProfileSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取资料失败');
	            }).error(function () {
	                toastr.warning('获取资料失败');
	            });
	        }
	    }]);

	    return ProfileCenterActions;
	}();

	exports.default = _alt2.default.createActions(ProfileCenterActions);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ProfileCenterActions = __webpack_require__(72);

	var _ProfileCenterActions2 = _interopRequireDefault(_ProfileCenterActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProfileCenterStore = function () {
	    function ProfileCenterStore() {
	        _classCallCheck(this, ProfileCenterStore);

	        this.bindActions(_ProfileCenterActions2.default);
	        this.contribute = 0;
	        this.stars = [];
	        this.starsCount = 0;
	        this.loading = true;
	    }

	    _createClass(ProfileCenterStore, [{
	        key: 'onGetProfileSuccess',
	        value: function onGetProfileSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {
	                this.contribute = data.raw.profile.contribute.length;
	                this.stars = data.raw.stars._raw;
	                this.starsCount = data.raw.stars.count;
	            } else {
	                toastr.warning('获取资料失败');
	            }
	        }
	    }]);

	    return ProfileCenterStore;
	}();

	exports.default = _alt2.default.createStore(ProfileCenterStore);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _underscore = __webpack_require__(32);

	var _FollowActions = __webpack_require__(75);

	var _FollowActions2 = _interopRequireDefault(_FollowActions);

	var _FollowStore = __webpack_require__(76);

	var _FollowStore2 = _interopRequireDefault(_FollowStore);

	var _Pagination = __webpack_require__(77);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Follow = function (_React$Component) {
	    _inherits(Follow, _React$Component);

	    function Follow(props) {
	        _classCallCheck(this, Follow);

	        var _this = _possibleConstructorReturn(this, (Follow.__proto__ || Object.getPrototypeOf(Follow)).call(this, props));

	        _this.state = _FollowStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Follow, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _FollowStore2.default.listen(this.onChange);
	            var page = this.props.params.page;
	            if (page === undefined) {
	                page = 1;
	            }
	            var column = this.props.params.follow;
	            _FollowActions2.default.getFollows(column, page);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
	                var page = this.props.params.page;
	                if (page === undefined) {
	                    page = 1;
	                }
	                _FollowActions2.default.getFollows(this.props.params.follow, page);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _FollowStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(auth_id) {
	            var $self = $("[data-self=" + auth_id + "]");
	            if ($self.data('option').toString() === '0') {
	                _FollowActions2.default.addFollow($self, auth_id);
	            } else {
	                _FollowActions2.default.unFollow($self, auth_id);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var followers = void 0,
	                Title = void 0;

	            Title = this.props.params.follow === 'followers' ? '关注我的' : '我关注的';

	            if (this.state.follows.length === 0) {
	                followers = _react2.default.createElement(
	                    'p',
	                    { className: 'bg-danger mon-padding' },
	                    '\u6CA1\u6709\u4EFB\u4F55\u6570\u636E'
	                );
	            } else {
	                followers = this.state.follows.map(function (data, index) {
	                    var FollowBtn = void 0;
	                    if (data.following) {
	                        FollowBtn = _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', 'data-self': data.user._id.toString(), 'data-option': '1', onClick: _this2.handleClick.bind(_this2, data.user._id.toString()) },
	                            '\u53D6\u6D88\u5173\u6CE8'
	                        );
	                    } else {
	                        FollowBtn = _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', 'data-self': data.user._id.toString(), 'data-option': '0', onClick: _this2.handleClick.bind(_this2, data.user._id.toString()) },
	                            '\u5173\u6CE8'
	                        );
	                    }
	                    return _react2.default.createElement(
	                        'div',
	                        { key: data.user._id, className: 'listgroup animated flipInX' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'position pull-left' },
	                                index + 1
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'pull-left thumb-lg' },
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/member/' + data.user.domain },
	                                    _react2.default.createElement('img', { className: 'media-object', width: '80', src: data.user.avatar_url })
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'media-body' },
	                                _react2.default.createElement(
	                                    'h4',
	                                    { className: 'media-heading followers-name' },
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/member/' + data.user.domain },
	                                        data.user.username
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'followers-intro' },
	                                    data.user.introduce
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'follow' },
	                                    FollowBtn
	                                )
	                            )
	                        )
	                    );
	                });
	            }

	            var pagination = this.state.follows.length !== 0 ? _react2.default.createElement(_Pagination2.default, null) : null;
	            return _react2.default.createElement(
	                'div',
	                { className: 'col-md-9 col-sm-9' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'bg-success mon-padding mon-bg-title' },
	                    Title
	                ),
	                followers,
	                pagination
	            );
	        }
	    }]);

	    return Follow;
	}(_react2.default.Component);

	exports.default = Follow;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FollowActions = function () {
	    function FollowActions() {
	        _classCallCheck(this, FollowActions);

	        this.generateActions('getFollowSuccess', 'changeFollowId', 'addFollowSuccess', 'unFollowSuccess');
	    }

	    _createClass(FollowActions, [{
	        key: 'getFollows',
	        value: function getFollows(column, page) {
	            var _this = this;

	            var url = '/api/' + column;

	            var params = {
	                option: {
	                    skip: page,
	                    limit: 10
	                }
	            };

	            $.ajax({
	                url: url,
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                dataType: 'json',
	                type: 'post',
	                date: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.getFollowSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取数据失败');
	            });
	        }
	    }, {
	        key: 'addFollow',
	        value: function addFollow($self, auth_id) {
	            var _this2 = this;

	            var params = {
	                _id: auth_id
	            };

	            $.ajax({
	                url: '/api/follow',
	                dataType: 'json',
	                type: 'post',
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this2.actions.addFollowSuccess([$self, data]);
	            }).fail(function () {
	                toastr.error('关注不成功');
	            });
	        }
	    }, {
	        key: 'unFollow',
	        value: function unFollow($self, auth_id) {
	            var _this3 = this;

	            var params = {
	                _id: auth_id
	            };

	            $.ajax({
	                url: '/api/follow',
	                type: 'delete',
	                cache: false,
	                contentType: 'application/json;charset=UTF-8',
	                dataType: 'json',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this3.actions.unFollowSuccess([$self, data]);
	            }).fail(function () {
	                toastr.warning('取消关注不成功');
	            });
	        }
	    }]);

	    return FollowActions;
	}();

	exports.default = _alt2.default.createActions(FollowActions);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-12.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _FollowActions = __webpack_require__(75);

	var _FollowActions2 = _interopRequireDefault(_FollowActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FollowStore = function () {
	    function FollowStore() {
	        _classCallCheck(this, FollowStore);

	        this.bindActions(_FollowActions2.default);
	        this.follows = [];
	        this.loading = true;
	        this.error = false;
	    }

	    _createClass(FollowStore, [{
	        key: 'onGetFollowSuccess',
	        value: function onGetFollowSuccess(data) {
	            this.loading = true;
	            if (data.code === 200) {
	                this.follows = data.raw;
	            } else if (data.code === 500) {
	                toastar.warning('获取数据失败');
	                this.error = true;
	            }
	        }

	        /**
	         * 添加关注
	         * @param data {type : [$self,data]}
	         */

	    }, {
	        key: 'onAddFollowSuccess',
	        value: function onAddFollowSuccess(data) {
	            switch (data[1].code) {
	                case 400:
	                    toastr.error('本地用户不存在');
	                    break;
	                case 200:
	                    toastr.success('关注成功');
	                    data[0].text('取消关注');
	                    data[0].data("option", 1);
	                    break;
	                case 304:
	                    toastr.warning('你已经关注过这个用户');
	                    break;
	                case 404:
	                    toastr.error('关注的用户不存在');
	                    break;
	            }
	        }
	    }, {
	        key: 'onUnFollowSuccess',
	        value: function onUnFollowSuccess(data) {
	            switch (data[1].code) {
	                case 400:
	                    toastr.error('本地用户不存在');
	                    break;
	                case 200:
	                    toastr.success('取消关注成功');
	                    data[0].text('关注');
	                    data[0].data("option", 0);
	                    break;
	                case 304:
	                    toastr.warning('你还没有关注过这个用户');
	                    break;
	                case 404:
	                    toastr.error('关注的用户不存在');
	                    break;
	            }
	        }
	    }]);

	    return FollowStore;
	}();

	exports.default = _alt2.default.createStore(FollowStore);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _PaginationActions = __webpack_require__(78);

	var _PaginationActions2 = _interopRequireDefault(_PaginationActions);

	var _PaginationStore = __webpack_require__(79);

	var _PaginationStore2 = _interopRequireDefault(_PaginationStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-2.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Pagination = function (_React$Component) {
	    _inherits(Pagination, _React$Component);

	    function Pagination(props) {
	        _classCallCheck(this, Pagination);

	        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

	        _this.state = _PaginationStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Pagination, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _PaginationStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmMout',
	        value: function componentWillUnmMout() {
	            _PaginationStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'nav',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'pagination' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#', 'aria-label': 'Previous' },
	                            _react2.default.createElement(
	                                'span',
	                                { 'aria-hidden': 'true' },
	                                '\xAB'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: 'active' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '1' },
	                            '1 ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'sr-only' },
	                                '(current)'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '2' },
	                            '2'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '3' },
	                            '3'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '4' },
	                            '4'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '5' },
	                            '5'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '' },
	                            _react2.default.createElement(
	                                'span',
	                                { 'aria-hidden': 'true' },
	                                '\xBB'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Pagination;
	}(_react2.default.Component);

	exports.default = Pagination;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by apache on 15-11-2.
	                                                                                                                                                           */


	var PaginationActions = function PaginationActions() {
	    _classCallCheck(this, PaginationActions);

	    this.generateActions();
	};

	exports.default = _alt2.default.createActions(PaginationActions);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _PaginationActions = __webpack_require__(78);

	var _PaginationActions2 = _interopRequireDefault(_PaginationActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by apache on 15-11-2.
	                                                                                                                                                           */


	var PaginationStore = function PaginationStore() {
	    _classCallCheck(this, PaginationStore);

	    this.bindActions(_PaginationActions2.default);
	};

	exports.default = _alt2.default.createStore(PaginationStore);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _ContributeActions = __webpack_require__(81);

	var _ContributeActions2 = _interopRequireDefault(_ContributeActions);

	var _ContributeStore = __webpack_require__(82);

	var _ContributeStore2 = _interopRequireDefault(_ContributeStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-2.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Contribute = function (_React$Component) {
	    _inherits(Contribute, _React$Component);

	    function Contribute(props) {
	        _classCallCheck(this, Contribute);

	        var _this = _possibleConstructorReturn(this, (Contribute.__proto__ || Object.getPrototypeOf(Contribute)).call(this, props));

	        _this.state = _ContributeStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Contribute, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ContributeStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ContributeStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //let domain = this.props.domain;

	            return _react2.default.createElement(
	                'div',
	                { className: 'col-sm-9 col-md-9 animated fadeInUp' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'bg-success mon-padding mon-bg-title' },
	                    '\u4ED6\u7684\u6295\u7A3F'
	                ),
	                _react2.default.createElement(_reactRouter.RouteHandler, null)
	            );
	        }
	    }]);

	    return Contribute;
	}(_react2.default.Component);

	exports.default = Contribute;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by apache on 15-11-2.
	                                                                                                                                                           */


	var ContributeActions = function ContributeActions() {
	    _classCallCheck(this, ContributeActions);

	    this.generateActions();
	};

	exports.default = _alt2.default.createActions(ContributeActions);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ContributeActions = __webpack_require__(81);

	var _ContributeActions2 = _interopRequireDefault(_ContributeActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by apache on 15-11-2.
	                                                                                                                                                           */


	var ContributeStore = function ContributeStore() {
	    _classCallCheck(this, ContributeStore);

	    this.bindActions(_ContributeActions2.default);
	    this.contributes = [];
	    this.animate = [];
	    this.music = [];
	    this.article = [];
	};

	exports.default = _alt2.default.createStore(ContributeStore);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _underscore = __webpack_require__(32);

	var _ArticleActions = __webpack_require__(84);

	var _ArticleActions2 = _interopRequireDefault(_ArticleActions);

	var _ArticleStore = __webpack_require__(85);

	var _ArticleStore2 = _interopRequireDefault(_ArticleStore);

	var _Comment = __webpack_require__(86);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _BtnBlock = __webpack_require__(89);

	var _BtnBlock2 = _interopRequireDefault(_BtnBlock);

	var _Star = __webpack_require__(90);

	var _Star2 = _interopRequireDefault(_Star);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _NotFound = __webpack_require__(58);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Approve = __webpack_require__(93);

	var _Approve2 = _interopRequireDefault(_Approve);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-4.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	//import md from 'markdown';


	var Article = function (_React$Component) {
	    _inherits(Article, _React$Component);

	    function Article(props) {
	        _classCallCheck(this, Article);

	        var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

	        _this.state = _ArticleStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Article, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ArticleStore2.default.listen(this.onChange);
	            _ArticleActions2.default.getArticle(this.props.params.id);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ArticleStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
	                _ArticleActions2.default.getArticle(this.props.params.id);
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	            $(".mon-abbr-back").css('background-image', 'url(' + this.state.abbreviations + ')');
	        }

	        /**
	         * 点击Star组件后触发的函数
	         * @param option　１－－关注＋１　０－－取消关注－１
	         */

	    }, {
	        key: 'handleClick',
	        value: function handleClick(option) {
	            if (option === 1) {
	                this.setState({
	                    stars: this.state.stars + 1
	                });
	            } else {
	                var stars = this.state.stars - 1;
	                this.setState({
	                    stars: stars > 0 ? stars : 0
	                });
	            }
	        }
	    }, {
	        key: 'approveClick',
	        value: function approveClick(option) {
	            if (option === 0) {
	                this.setState({
	                    approve: this.state.approve + 1
	                });
	            } else {
	                this.setState({
	                    disapprove: this.state.disapprove + 1
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Tags = this.state.tags.map(function (data, index) {
	                return _react2.default.createElement(
	                    _reactRouter.Link,
	                    { key: index, to: "/tags/" + data, className: 'mon-article-tag' },
	                    data
	                );
	            });

	            var Article = void 0,
	                Aside = void 0,
	                Abbr = void 0,
	                boundClick = this.handleClick.bind(this, 1),
	                subClick = this.handleClick.bind(this, 0),
	                approveClick = this.approveClick.bind(this, 0),
	                disClick = this.approveClick.bind(this, 1);

	            if (this.state.article) {
	                Abbr = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-abbr' },
	                    _react2.default.createElement('div', { className: 'mon-abbr-back' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-abbr-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-8 col-sm-12 col-xs-12' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'mon-article-title' },
	                                this.state.title
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'mon-article-detail media' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'media-left' },
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/member/' + this.state.createUserDomain },
	                                        _react2.default.createElement('img', { src: this.state.createUserAvatar || '/img/default.png', alt: 'loading' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'media-body' },
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { to: '/member/' + this.state.createUserDomain },
	                                        this.state.createUser
	                                    ),
	                                    _react2.default.createElement(_Star2.default, { star: this.props.params.id, column: 'article', stared: this.state.stared, plusClick: boundClick, subClick: subClick }),
	                                    this.state.stars,
	                                    _react2.default.createElement(
	                                        'p',
	                                        { className: 'mon-detail-time' },
	                                        this.state.createTime
	                                    )
	                                )
	                            )
	                        )
	                    )
	                );

	                Article = _react2.default.createElement(
	                    'div',
	                    { className: 'raw animated fadeInUp clearfix' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-8 col-sm-12 col-xs-12 col-md-offset-2 mon-article' },
	                        _react2.default.createElement('div', { ref: 'content', className: 'mon-article-content', dangerouslySetInnerHTML: { __html: this.state.content } }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-article-tags' },
	                            Tags
	                        ),
	                        _react2.default.createElement(_Comment2.default, { id: this.props.params.id, type: 'article' })
	                    )
	                );

	                Aside = _react2.default.createElement(
	                    'div',
	                    { className: 'raw clearfix' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-8 col-sm-12 col-md-offset-2 col-xs-12 mon-no-padding' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel panel-default' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-body media' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'media-left' },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: '/member/' + this.state.createUserDomain, className: 'mon-article-user' },
	                                        _react2.default.createElement('img', { src: this.state.createUserAvatar || '/img/default.png', alt: 'loading' })
	                                    )
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'media-body' },
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'media-heading' },
	                                        _react2.default.createElement(
	                                            'a',
	                                            { href: '/member/' + this.state.createUserDomain, className: 'mon-user-name' },
	                                            this.state.createUser
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'p',
	                                        null,
	                                        this.state.createUserIntro
	                                    )
	                                )
	                            )
	                        )
	                    )
	                );
	            } else if (this.state.loading) {
	                Article = _react2.default.createElement(_Loading2.default, null);
	            } else {
	                Article = _react2.default.createElement(_NotFound2.default, { state: '404 Not Found' });
	            }
	            return _react2.default.createElement(
	                'div',
	                null,
	                Abbr,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    Article,
	                    Aside,
	                    _react2.default.createElement(_BtnBlock2.default, null)
	                )
	            );
	        }
	    }]);

	    return Article;
	}(_react2.default.Component);

	exports.default = Article;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleActions = function () {
	    function ArticleActions() {
	        _classCallCheck(this, ArticleActions);

	        this.generateActions('getArticleSuccess');
	    }

	    _createClass(ArticleActions, [{
	        key: 'getArticle',
	        value: function getArticle(id) {
	            var _this = this;

	            $.ajax({
	                url: '/api/article/' + id,
	                type: 'get',
	                cache: false
	            }).done(function (data) {
	                _this.actions.getArticleSuccess(data);
	            }).fail(function () {
	                toastr.error('获取文章失败');
	            });
	        }
	    }]);

	    return ArticleActions;
	}();

	exports.default = _alt2.default.createActions(ArticleActions);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-4.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ArticleActions = __webpack_require__(84);

	var _ArticleActions2 = _interopRequireDefault(_ArticleActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleStore = function () {
	    function ArticleStore() {
	        _classCallCheck(this, ArticleStore);

	        this.bindActions(_ArticleActions2.default);
	        this.article = false; // 是否找到
	        this.loading = true;
	        this.error = false;

	        this.approve = 0;
	        this.disapprove = 0;
	        this.abbreviations = '';
	        this.content;
	        this.title = '';
	        this.summary = '';
	        this.createUser = '';
	        this.createUserAvatar = '';
	        this.createTime = '';
	        this.createUserDomain = '';
	        this.createUserIntro = '';
	        this.tags = [];
	        this.stars = 0;
	        this.stared = 'false';
	        this.approved = 2;
	    }

	    _createClass(ArticleStore, [{
	        key: 'onGetArticleSuccess',
	        value: function onGetArticleSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {

	                this.article = true;

	                this.approve = data.raw.article.approve;
	                this.disapprove = data.raw.article.disapprove;
	                this.abbreviations = data.raw.article.abbreviations || '/img/abbreviations.png';
	                this.content = data.raw.article.content;
	                this.title = data.raw.article.title;
	                this.summary = data.raw.article.summary || '这个文章没有简介，呜呜';
	                this.createUser = data.raw.user.username;
	                this.createUserAvatar = data.raw.user.avatar_url;
	                this.createUserDomain = data.raw.user.domain;
	                this.tags = data.raw.article.tags;
	                this.createUserIntro = data.raw.user.introduce;
	                this.createTime = new Date(data.raw.article.create_time).toLocaleDateString("en-US");
	                this.stars = data.raw.article.stars;
	                this.stared = data.raw.stared.toString();
	                this.approved = data.raw.approved;
	            } else if (data.code === 404) {
	                toastr.warning(data.meta);
	            } else if (data.code === 500) {
	                toastr.error('服务器错误');
	                this.error = true;
	            }
	        }
	    }]);

	    return ArticleStore;
	}();

	exports.default = _alt2.default.createStore(ArticleStore);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(32);

	var _reactRouter = __webpack_require__(3);

	var _CommentActions = __webpack_require__(87);

	var _CommentActions2 = _interopRequireDefault(_CommentActions);

	var _CommentStore = __webpack_require__(88);

	var _CommentStore2 = _interopRequireDefault(_CommentStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-8.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Comment = function (_React$Component) {
	    _inherits(Comment, _React$Component);

	    function Comment(props) {
	        _classCallCheck(this, Comment);

	        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));

	        _this.state = _CommentStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Comment, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _CommentStore2.default.listen(this.onChange);
	            _CommentActions2.default.getComment(this.props.id, 0);
	            _CommentActions2.default.getToken();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            //　判断是不是更改了文章
	            if (prevProps.id !== this.props.id) {
	                _CommentActions2.default.getComment(this.props.id, 0);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _CommentStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var reg = /\s/;
	            if (this.state.comment === '' || reg.test(this.state.comment)) {
	                toastr.warning('你还没有写任何东西啊！！！');
	            } else {
	                var params = {
	                    content: this.state.comment,
	                    create_time: new Date().getTime(),
	                    type: this.props.type,
	                    con_id: this.props.id
	                };

	                _CommentActions2.default.postComment(params, this.state.token);
	            }
	        }
	    }, {
	        key: 'getComment',
	        value: function getComment(option) {
	            if (option === 0) {
	                _CommentActions2.default.changeSkip(0);
	                _CommentActions2.default.getComment(this.props.id, this.state.skip - 10);
	            } else {
	                _CommentActions2.default.changeSkip(1);
	                _CommentActions2.default.getComment(this.props.id, this.state.skip + 10);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var CommentList = void 0;
	            if (this.state.commentList.length > 0) {
	                CommentList = this.state.commentList.map(function (data) {
	                    return _react2.default.createElement(
	                        'li',
	                        { key: data.comment._id, className: 'clearfix mon-comment-item' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-1' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/member/' + data.user.domain },
	                                _react2.default.createElement('img', { src: data.user.avatar_url, alt: 'loading', width: '40' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-11' },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { to: '/member/' + data.user.domain, className: 'mon-user-name' },
	                                    data.user.username
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'pull-right' },
	                                    new Date(data.comment.create_time).toLocaleDateString()
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'article',
	                                null,
	                                data.comment.content
	                            )
	                        )
	                    );
	                });
	            } else {
	                CommentList = _react2.default.createElement(
	                    'p',
	                    { className: 'text-danger' },
	                    '\u6CA1\u6709\u8BC4\u8BBA\u4E86'
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'row mon-comment' },
	                _react2.default.createElement(
	                    'form',
	                    { role: 'form' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement('textarea', { name: 'comment', className: 'form-control', rows: '5', placeholder: '\u8F93\u5165\u4F60\u7684\u5927\u8BC4\u5427\uFF01\uFF01\uFF01', onChange: _CommentActions2.default.changeComment })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group clearfix' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: 'btn btn-info pull-right', onClick: this.handleClick.bind(this) },
	                            '\u4FDD\u5B58\u8BC4\u8BBA'
	                        )
	                    ),
	                    _react2.default.createElement('input', { type: 'hidden', name: '_token', value: this.state.token })
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'mon-comment-title' },
	                    '\u8BC4\u8BBA\u5217\u8868'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'mon-comment-list' },
	                    CommentList
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:;', className: 'btn mon-page mon-prev-page', onClick: this.getComment.bind(this, 0) },
	                    _react2.default.createElement('span', { className: 'fa fa-long-arrow-left' })
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { href: 'javascript:;', className: 'btn mon-page mon-next-page', onClick: this.getComment.bind(this, 1) },
	                    _react2.default.createElement('span', { className: 'fa fa-long-arrow-right' })
	                )
	            );
	        }
	    }]);

	    return Comment;
	}(_react2.default.Component);

	exports.default = Comment;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-8.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CommentActions = function () {
	    function CommentActions() {
	        _classCallCheck(this, CommentActions);

	        this.generateActions('getCommentSuccess', 'postCommentSuccess', 'changeComment', 'changeSkip', 'getTokenSuccess');
	    }

	    _createClass(CommentActions, [{
	        key: 'getComment',
	        value: function getComment(id, skip) {
	            var _this = this;

	            var params = {
	                con_id: id
	            };
	            if (skip < 0) {
	                skip = 0;
	                toastr.warning('不能在向前获取评论了');
	                return false;
	            }
	            $.ajax({
	                url: '/api/comment',
	                type: 'post',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                dataType: 'json',
	                data: JSON.stringify({ params: params, option: { skip: skip, limit: 10, sort: { create_time: -1 } } })
	            }).done(function (data) {
	                _this.actions.getCommentSuccess(data);
	            }).fail(function () {
	                toastr.warning('获取评论失败');
	            });
	        }
	    }, {
	        key: 'postComment',
	        value: function postComment(params, token) {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/comment',
	                type: 'put',
	                contentType: 'application/json;charset=utf-8',
	                dataType: 'json',
	                cache: false,
	                data: JSON.stringify({ params: params, token: token })
	            }).done(function (data) {
	                _this2.actions.postCommentSuccess(data);
	            }).fail(function () {
	                toastr.error('网络链接有问题   ');
	            });
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken() {
	            var _this3 = this;

	            $.ajax({
	                url: '/api/token',
	                type: 'get'
	            }).done(function (data) {
	                _this3.actions.getTokenSuccess(data);
	            });
	        }
	    }]);

	    return CommentActions;
	}();

	exports.default = _alt2.default.createActions(CommentActions);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-8.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _CommentActions = __webpack_require__(87);

	var _CommentActions2 = _interopRequireDefault(_CommentActions);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CommentStore = function () {
	    function CommentStore() {
	        _classCallCheck(this, CommentStore);

	        this.bindActions(_CommentActions2.default);
	        this.commentList = [];
	        this.comment = '';
	        this.skip = 0;
	        this.token = '';
	    }

	    _createClass(CommentStore, [{
	        key: 'onGetCommentSuccess',
	        value: function onGetCommentSuccess(data) {
	            if (data.code === 200) {
	                if (data.raw.length === 0) {
	                    toastr.warning('没有评论了');
	                }
	                this.commentList = data.raw;
	            } else {
	                toastr.warning('获取评论失败');
	            }
	        }
	    }, {
	        key: 'onPostCommentSuccess',
	        value: function onPostCommentSuccess(data) {
	            if (data.code === 200) {
	                toastr.success(data.meta);
	                //this.commentList.unshift(data.data);
	                this.commentList = _react2.default.addons.update(this.commentList, { $unshift: [data.data] });
	            } else if (data.code === 400) {
	                toastr.error(data.meta);
	            } else {
	                toastr.warning(data.meta);
	            }
	        }
	    }, {
	        key: 'onChangeComment',
	        value: function onChangeComment(event) {
	            this.comment = event.target.value;
	        }
	    }, {
	        key: 'onChangeSkip',
	        value: function onChangeSkip(option) {
	            if (option === 0) {
	                this.skip = this.skip - 10;
	            } else {
	                this.skip = this.skip + 10;
	            }
	            if (this.skip <= 0) {
	                this.skip = 0;
	            }
	        }
	    }, {
	        key: 'onGetTokenSuccess',
	        value: function onGetTokenSuccess(data) {
	            if (data.code === 200) {
	                this.token = data.token;
	            }
	        }
	    }]);

	    return CommentStore;
	}();

	exports.default = _alt2.default.createStore(CommentStore);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-8.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var BtnBlock = function (_React$Component) {
	    _inherits(BtnBlock, _React$Component);

	    function BtnBlock(props) {
	        _classCallCheck(this, BtnBlock);

	        return _possibleConstructorReturn(this, (BtnBlock.__proto__ || Object.getPrototypeOf(BtnBlock)).call(this, props));
	    }

	    _createClass(BtnBlock, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //$(window).scroll(function() {
	            //    var $window = $(this);
	            //    if($window.scrollTop() < 400) {
	            //        $("#_back").fadeOut();
	            //    } else {
	            //        $("#_back").fadeIn();
	            //    }
	            //});
	        }
	    }, {
	        key: 'handlerClick',
	        value: function handlerClick() {
	            $("html,body").animate({ scrollTop: 0 }, 700);
	        }
	    }, {
	        key: 'shareFB',
	        value: function shareFB() {
	            window.fbAsyncInit = function () {
	                FB.init({
	                    appId: '1162206170473800',
	                    xfbml: true,
	                    version: 'v2.5'
	                });

	                var u = window.location.href;
	                FB.ui({
	                    method: 'share_open_graph',
	                    action_type: 'og.likes',
	                    action_properties: JSON.stringify({
	                        object: u.toString()
	                    })
	                }, function (response) {
	                    // Debug response (optional)
	                });
	            };

	            // (function(d, s, id){
	            //     var js, fjs = d.getElementsByTagName(s)[0];
	            //     if (d.getElementById(id)) {return;}
	            //     js = d.createElement(s); js.id = id;
	            //     js.src = "//connect.facebook.net/en_US/sdk.js";
	            //     fjs.parentNode.insertBefore(js, fjs);
	            // }(document, 'script', 'facebook-jssdk'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'mon-btn-block' },
	                _react2.default.createElement(
	                    'a',
	                    { id: '_back', href: 'javascript:;', className: 'btn btn-default', onClick: this.handlerClick.bind(this) },
	                    _react2.default.createElement('span', { className: 'fa fa-arrow-up' }),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'mon-btn-fix' },
	                        '\u56DE\u5230\u9876\u90E8'
	                    )
	                )
	            );
	        }
	    }]);

	    return BtnBlock;
	}(_react2.default.Component);

	exports.default = BtnBlock;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _StarActions = __webpack_require__(91);

	var _StarActions2 = _interopRequireDefault(_StarActions);

	var _StarStore = __webpack_require__(92);

	var _StarStore2 = _interopRequireDefault(_StarStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Star = function (_React$Component) {
	    _inherits(Star, _React$Component);

	    function Star(props) {
	        _classCallCheck(this, Star);

	        var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, props));

	        _this.state = _StarStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Star, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _StarStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _StarStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(option) {
	            var column = this.props.column,
	                star_id = this.props.star;

	            // option 0-- 关注　１－－ 取消关注
	            if (option === 0) {
	                _StarActions2.default.getStar(star_id, column, this.props.plusClick);
	            } else {
	                _StarActions2.default.unStar(star_id, column, this.props.subClick);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var stared = '',
	                option = 0;

	            if (!this.state.changed && this.props.stared === 'true' || this.state.stared) {
	                stared = 'mon-stared';
	                option = 1;
	            } else {
	                option = 0;
	                stared = '';
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'mon-star' },
	                _react2.default.createElement('a', { id: 'substitute', href: 'javascript:;', className: 'fa fa-heart-o animated ' + stared,
	                    onClick: this.handleClick.bind(this, option) })
	            );
	        }
	    }]);

	    return Star;
	}(_react2.default.Component);

	exports.default = Star;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarActions = function () {
	    function StarActions() {
	        _classCallCheck(this, StarActions);

	        this.generateActions('getStarSuccess', 'unStarSuccess', 'changeStateSuccess');
	    }

	    _createClass(StarActions, [{
	        key: 'getStar',
	        value: function getStar(id, column, _callback) {
	            var _this = this;

	            $.ajax({
	                url: '/api/star',
	                dataType: 'json',
	                type: 'post',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify({ star_id: id, column: column })
	            }).done(function (data) {
	                _this.actions.getStarSuccess({ data: data, _callback: _callback });
	            }).fail(function () {
	                toastr.error('收藏不成功');
	            });
	        }
	    }, {
	        key: 'unStar',
	        value: function unStar(id, column, _callback) {
	            var _this2 = this;

	            $.ajax({
	                url: '/api/star',
	                dataType: 'json',
	                type: 'delete',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify({ star_id: id, column: column })
	            }).done(function (data) {
	                _this2.actions.unStarSuccess({ data: data, _callback: _callback });
	            }).fail(function () {
	                toastr.error('取消收藏不成功');
	            });
	        }
	    }, {
	        key: 'changeState',
	        value: function changeState(option) {
	            var _this3 = this;

	            if (this.$Dispatcher_isDispatching) {
	                console.log('hehe');
	                window.setTimeout(function () {
	                    _this3.actions.changeSuccess(option);
	                });
	            }
	        }
	    }]);

	    return StarActions;
	}();

	exports.default = _alt2.default.createActions(StarActions);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _StarActions = __webpack_require__(91);

	var _StarActions2 = _interopRequireDefault(_StarActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StarStore = function () {
	    function StarStore() {
	        _classCallCheck(this, StarStore);

	        this.bindActions(_StarActions2.default);
	        this.stared = false;
	        this.option = 0;
	        this.changed = false;
	        this.btnClass = 'btn-primary';
	    }

	    _createClass(StarStore, [{
	        key: 'onGetStarSuccess',
	        value: function onGetStarSuccess(o) {
	            var data = o.data,
	                _callback = o._callback;
	            switch (data.code) {
	                case 200:
	                    toastr.success('收藏成功');
	                    this.stared = true;
	                    this.option = 1;
	                    this.changed = true;
	                    this.btnClass = 'btn-danger';
	                    _callback.call(this);
	                    break;
	                case 304:
	                    toastr.warning('你已经收藏过了');
	                    break;
	                case 406:
	                    toastr.warning('你还没登陆');
	                    break;
	                case 403:
	                    toastr.warning(data.meta);
	                    break;
	                case 404:
	                    toastr.warning('没有这个用户');
	                    break;
	                case 505:
	                    toastr.error('服务器错误');
	                    break;
	            }
	        }
	    }, {
	        key: 'unStarSuccess',
	        value: function unStarSuccess(o) {
	            var data = o.data,
	                _callback = o._callback;

	            switch (data.code) {
	                case 200:
	                    toastr.success('取消收藏成功');
	                    this.stared = false;
	                    this.option = 0;
	                    this.changed = true;
	                    this.btnClass = 'btn-primary';
	                    _callback.call(this);
	                    break;
	                case 304:
	                    toastr.warning('你还没有收藏过');
	                    break;
	                case 400:
	                    toastr.warning('你还没登陆');
	                    break;
	                case 404:
	                    toastr.warning('没有这个用户');
	                    break;
	                case 505:
	                    toastr.error('服务器错误');
	                    break;
	            }
	        }
	    }, {
	        key: 'onChangeStateSuccess',
	        value: function onChangeStateSuccess(option) {
	            if (option === 0) {
	                this.stared = true;
	                this.option = 1;
	                this.btnClass = 'btn-danger';
	            } else {
	                this.stared = false;
	                this.option = 0;
	                this.btnClass = 'btn-primary';
	            }
	        }
	    }]);

	    return StarStore;
	}();

	exports.default = _alt2.default.createStore(StarStore);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ApproveActions = __webpack_require__(94);

	var _ApproveActions2 = _interopRequireDefault(_ApproveActions);

	var _ApproveStore = __webpack_require__(95);

	var _ApproveStore2 = _interopRequireDefault(_ApproveStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Approve = function (_React$Component) {
	    _inherits(Approve, _React$Component);

	    function Approve(props) {
	        _classCallCheck(this, Approve);

	        var _this = _possibleConstructorReturn(this, (Approve.__proto__ || Object.getPrototypeOf(Approve)).call(this, props));

	        _this.state = _ApproveStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Approve, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ApproveStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ApproveStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }

	        /**
	         * 点击点赞或踩后的函数
	         * @param point 0 -- 赞　1 --　踩
	         */

	    }, {
	        key: 'handleClick',
	        value: function handleClick(point) {
	            if (this.props.approved !== 2) {
	                toastr.warning('你已经点赞过或踩过了');
	                return;
	            }
	            if (point === 0) {
	                _ApproveActions2.default.approve(point, this.props._id, this.props.column, this.props.approveCallback);
	            } else {
	                _ApproveActions2.default.approve(point, this.props._id, this.props.column, this.props.disCallback);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var approved = '',
	                disapproved = '';
	            switch (this.props.approved) {
	                case 0:
	                    approved = 'mon-approved';
	                    disapproved = ' mon-ban-approve';
	                    break;
	                case 1:
	                    approved = 'mon-ban-approve';
	                    disapproved = ' mon-disapproved';
	                    break;
	                case 2:
	                    break;
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'mon-approve' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-approve-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: "mon-approve-click " + approved, onClick: this.handleClick.bind(this, 0) },
	                            _react2.default.createElement('span', { className: 'fa fa-thumbs-o-up mon-thumb' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-approve-item' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', className: "mon-approve-click-o " + disapproved, onClick: this.handleClick.bind(this, 1) },
	                            _react2.default.createElement('span', { className: 'fa fa-thumbs-o-down mon-thumb' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Approve;
	}(_react2.default.Component);

	exports.default = Approve;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ApproveActions = function () {
	    function ApproveActions() {
	        _classCallCheck(this, ApproveActions);

	        this.generateActions('approveSuccess');
	    }

	    /**
	     * 点赞或踩
	     * @param point　0 --　点赞　1 -- 踩
	     * @param _id　　　目标_id
	     * @param column　栏目
	     * @param _callback 点击后触发的函数
	     */


	    _createClass(ApproveActions, [{
	        key: 'approve',
	        value: function approve(point, _id, column, _callback) {
	            var _this = this;

	            var params = {
	                point: point,
	                _id: _id,
	                column: column
	            };

	            $.ajax({
	                url: '/api/approve',
	                dataType: 'json',
	                type: 'post',
	                cache: false,
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.approveSuccess({ data: data, _callback: _callback, point: point });
	            }).fail(function () {
	                toastr.warning('对不起，不成功');
	            });
	        }
	    }]);

	    return ApproveActions;
	}();

	exports.default = _alt2.default.createActions(ApproveActions);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ApproveActions = __webpack_require__(94);

	var _ApproveActions2 = _interopRequireDefault(_ApproveActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ApproveStore = function () {
	    function ApproveStore() {
	        _classCallCheck(this, ApproveStore);

	        this.bindActions(_ApproveActions2.default);
	    }

	    _createClass(ApproveStore, [{
	        key: 'onApproveSuccess',
	        value: function onApproveSuccess(raw) {
	            var data = raw.data,
	                _callback = raw._callback,
	                point = raw.point;

	            switch (data.code) {
	                case 200:
	                    toastr.success(data.meta);
	                    if (point === 0) {
	                        $(".mon-approve-click").addClass('mon-approved');
	                        $(".mon-approve-click-o").addClass('mon-ban-approve');
	                    } else {
	                        $(".mon-approve-click-o").addClass('mon-disapproved');
	                        $(".mon-approve-click").addClass('mon-ban-approve');
	                    }
	                    _callback.call(this);
	                    break;
	                case 404:
	                    toastr.warning('404,就是404');
	                    break;
	                case 406:
	                    toastr.warning('你还没登陆');
	                    break;
	                case 500:
	                    toastr.error('服务器错误');
	                    break;
	            }
	        }
	    }]);

	    return ApproveStore;
	}();

	exports.default = _alt2.default.createStore(ApproveStore);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _underscore = __webpack_require__(32);

	var _ListActions = __webpack_require__(97);

	var _ListActions2 = _interopRequireDefault(_ListActions);

	var _ListStore = __webpack_require__(98);

	var _ListStore2 = _interopRequireDefault(_ListStore);

	var _CommonList = __webpack_require__(99);

	var _CommonList2 = _interopRequireDefault(_CommonList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var List = function (_React$Component) {
	    _inherits(List, _React$Component);

	    function List(props) {
	        _classCallCheck(this, List);

	        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

	        _this.state = _ListStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        _this.column = '';
	        return _this;
	    }

	    _createClass(List, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ListStore2.default.listen(this.onChange);
	            _ListActions2.default.getList(this.props.params.column, this.props.params.skip);
	            this.column = this.props.params.column;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ListStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProp) {
	            if (!(0, _underscore.isEqual)(prevProp.params, this.props.params)) {
	                _ListActions2.default.getList(this.column, this.props.params.skip);
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var skip = this.props.params.skip === undefined ? 1 : parseInt(this.props.params.skip),
	                disabled = '',
	                disabledN = '';
	            if (skip === 1) {
	                disabled = 'disabled';
	            } else if (this.state.count < 6 || skip >= this.state.count / 6) {
	                disabledN = 'disabled';
	            }
	            var Page = _react2.default.createElement(
	                'div',
	                { className: 'row mon-skip' },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/' + this.column + '/' + (skip - 1), className: 'btn mon-page mon-prev-page ' + disabled },
	                    _react2.default.createElement('span', { className: 'fa fa-arrow-left' })
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/' + this.column + '/' + (skip + 1), className: 'btn mon-page mon-next-page ' + disabledN },
	                    _react2.default.createElement('span', { className: 'fa fa-arrow-right' })
	                )
	            );
	            return _react2.default.createElement(
	                'div',
	                { id: 'lists', className: 'container mon-main' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-8 col-md-offset-2 col-sm-12 col-xs-12' },
	                        _react2.default.createElement(_CommonList2.default, { list: this.state.list, column: '/article/' })
	                    )
	                ),
	                Page
	            );
	        }
	    }]);

	    return List;
	}(_react2.default.Component);

	List.contextTypes = {
	    router: _react2.default.PropTypes.func.isRequired
	};

	exports.default = List;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListActions = function () {
	    function ListActions() {
	        _classCallCheck(this, ListActions);

	        this.generateActions('getListSuccess');
	    }

	    /**
	     * 获取列表
	     * @param column
	     * @param skip
	     */


	    _createClass(ListActions, [{
	        key: 'getList',
	        value: function getList(column, skip) {
	            var _this = this;

	            var _skip = skip === undefined ? 1 : parseInt(skip);
	            if (_skip <= 0) {
	                toastr.warning('找不到内容');
	                return false;
	            }
	            /*
	             * 通过column,获取是哪一个栏目的列表
	             * skip 从那个开始
	             */
	            $.ajax({
	                url: '/api/' + column,
	                type: 'post',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                data: JSON.stringify({ option: { skip: (_skip - 1) * 6, limit: 6, sort: { create_time: -1 } } })
	            }).done(function (data) {
	                _this.actions.getListSuccess(data);
	            }).fail(function () {
	                toastr.error('获取内容失败，请刷新重试');
	            });
	        }
	    }]);

	    return ListActions;
	}();

	exports.default = _alt2.default.createActions(ListActions);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-10.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ListActions = __webpack_require__(97);

	var _ListActions2 = _interopRequireDefault(_ListActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListStore = function () {
	    function ListStore() {
	        _classCallCheck(this, ListStore);

	        this.bindActions(_ListActions2.default);
	        this.list = [];
	        this.count = 0;
	        this.loading = true;
	    }

	    _createClass(ListStore, [{
	        key: 'onGetListSuccess',
	        value: function onGetListSuccess(data) {
	            if (data.code === 200) {
	                this.list = data.raw._raw;
	                this.count = data.raw.count;
	                this.loading = false;
	            } else if (data.code === 500) {
	                toastr.error('服务器错误');
	            }
	        }
	    }]);

	    return ListStore;
	}();

	exports.default = _alt2.default.createStore(ListStore);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 16-4-6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var CommonList = function (_React$Component) {
	    _inherits(CommonList, _React$Component);

	    function CommonList(props) {
	        _classCallCheck(this, CommonList);

	        return _possibleConstructorReturn(this, (CommonList.__proto__ || Object.getPrototypeOf(CommonList)).call(this, props));
	    }

	    _createClass(CommonList, [{
	        key: 'render',
	        value: function render() {
	            var column = this.props.column;
	            var List = this.props.list.map(function (data) {
	                var abbreviations = data.data.abbreviations || '/img/abbreviations.png';
	                return _react2.default.createElement(
	                    'li',
	                    { key: data.data._id, className: 'animated fadeInUp' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: column + data.data._id, className: 'mon-top' },
	                        _react2.default.createElement('div', { className: 'mon-overlay', style: { backgroundImage: 'url(' + abbreviations + ')' } }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mon-title' },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement('img', { src: data.user && data.user.avatar_url, alt: 'loading' }),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    data.user && data.user.username
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'pull-right' },
	                                    new Date(data.data.create_time).toLocaleDateString()
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'h2',
	                                null,
	                                data.data.title
	                            )
	                        )
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'ul',
	                { className: 'nav' },
	                List
	            );
	        }
	    }]);

	    return CommonList;
	}(_react2.default.Component);

	exports.default = CommonList;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _underscore = __webpack_require__(32);

	var _reactRouter = __webpack_require__(3);

	var _Contribute = __webpack_require__(80);

	var _Contribute2 = _interopRequireDefault(_Contribute);

	var _NotFound = __webpack_require__(58);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _NoticeSender = __webpack_require__(101);

	var _NoticeSender2 = _interopRequireDefault(_NoticeSender);

	var _MemberActions = __webpack_require__(104);

	var _MemberActions2 = _interopRequireDefault(_MemberActions);

	var _MemberStore = __webpack_require__(105);

	var _MemberStore2 = _interopRequireDefault(_MemberStore);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Member = function (_React$Component) {
	    _inherits(Member, _React$Component);

	    function Member(props) {
	        _classCallCheck(this, Member);

	        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, props));

	        _this.state = _MemberStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Member, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _MemberStore2.default.listen(this.onChange);
	            _MemberActions2.default.getMember(this.props.params.domain);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
	                _MemberActions2.default.getMember(this.props.params.domain);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _MemberStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(option, _id) {

	            // option 0 -- 关注　1 -- 取消关注
	            _MemberActions2.default.follow(option, _id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var domain = this.props.params.domain,
	                FollowBtn = '',
	                click = void 0,
	                FollowInfo = void 0,
	                Mem = void 0,
	                contribute = null;

	            if (this.state.followed) {
	                FollowInfo = '已关注';
	                FollowBtn = 'btn-default';
	                click = this.handleClick.bind(this, 1, this.state._id);
	            } else {
	                FollowInfo = '关注';
	                FollowBtn = 'btn-info';
	                click = this.handleClick.bind(this, 0, this.state._id);
	            }

	            if (this.state.member) {
	                Mem = _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-3 col-sm-3' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-center' },
	                        _react2.default.createElement('img', { src: this.state.avatar_url || '/img/dd9901f664234eb44f6b217e7fa04e17.jpg', width: '200', alt: 'loading' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-user-name' },
	                        this.state.username
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-vcard-stats' },
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/member/' + domain + '/followers', className: 'mon-link' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                this.state.followers
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Followers'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/member/' + domain + '/following', className: 'mon-link' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                this.state.following
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Following'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/member/' + domain + '/star', className: 'mon-link' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                this.state.star
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                'Star'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mon-center mon-member' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-muted mon-bg-title' },
	                            '\u4E2A\u4EBA\u7B80\u4ECB'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-success bg-info mon-member-intr' },
	                            this.state.introduce
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#noticeSender' },
	                            '\u79C1\u4FE1'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: "btn " + FollowBtn, onClick: click },
	                            FollowInfo
	                        )
	                    )
	                );

	                contribute = _react2.default.createElement(_Contribute2.default, { option: '0', domain: this.props.params.domain });
	            } else if (this.state.loading) {
	                Mem = _react2.default.createElement(_Loading2.default, null);
	            } else if (!this.state.member && !this.state.error) {
	                Mem = _react2.default.createElement(_NotFound2.default, { state: '404 Not Found' });
	            } else if (this.state.error) {
	                Mem = _react2.default.createElement(_NotFound2.default, { state: '500 \u670D\u52A1\u5668\u9519\u8BEF' });
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    Mem,
	                    contribute
	                ),
	                _react2.default.createElement(_NoticeSender2.default, { receiver: this.state._id })
	            );
	        }
	    }]);

	    return Member;
	}(_react2.default.Component);

	Member.contextTypes = {
	    router: _react2.default.PropTypes.func.isRequired
	};

	exports.default = Member;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _NoticeSenderActions = __webpack_require__(102);

	var _NoticeSenderActions2 = _interopRequireDefault(_NoticeSenderActions);

	var _NoticeSenderStore = __webpack_require__(103);

	var _NoticeSenderStore2 = _interopRequireDefault(_NoticeSenderStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var NoticeSender = function (_React$Component) {
	    _inherits(NoticeSender, _React$Component);

	    function NoticeSender(props) {
	        _classCallCheck(this, NoticeSender);

	        var _this = _possibleConstructorReturn(this, (NoticeSender.__proto__ || Object.getPrototypeOf(NoticeSender)).call(this, props));

	        _this.state = _NoticeSenderStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(NoticeSender, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _NoticeSenderStore2.default.listen(this.onChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _NoticeSenderStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            _NoticeSenderActions2.default.postNotice(this.state.content, this.props.receiver);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Loading = void 0;
	            if (this.state.loading) {
	                Loading = _react2.default.createElement(
	                    'div',
	                    { 'class': 'loader-inner ball-pulse' },
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null),
	                    _react2.default.createElement('div', null)
	                );
	            } else {
	                Loading = null;
	            }
	            return _react2.default.createElement(
	                'div',
	                { id: 'noticeSender', className: 'modal fade', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel', 'data-backdrop': 'static' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal-dialog' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-header' },
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { 'aria-hidden': 'true' },
	                                    '\xD7'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'h4',
	                                { className: 'modal-title' },
	                                '\u79C1\u4FE1'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-body' },
	                            _react2.default.createElement(
	                                'form',
	                                { role: 'form' },
	                                _react2.default.createElement('textarea', { name: 'content', rows: '10', className: 'form-control', placeholder: '\u8F93\u5165\u4F60\u60F3\u5BF9\u4ED6\u8BF4\u7684\u8BDD', onChange: _NoticeSenderActions2.default.changeContent })
	                            ),
	                            Loading
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'modal-footer' },
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	                                'Close'
	                            ),
	                            _react2.default.createElement(
	                                'button',
	                                { type: 'button', className: 'btn btn-primary', onClick: this.handleClick.bind(this) },
	                                '\u63D0\u4EA4'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return NoticeSender;
	}(_react2.default.Component);

	exports.default = NoticeSender;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticeSenderActions = function () {
	    function NoticeSenderActions() {
	        _classCallCheck(this, NoticeSenderActions);

	        this.generateActions('changeContent', 'postNoticeSuccess', 'postNoticeLoad');
	    }

	    _createClass(NoticeSenderActions, [{
	        key: 'postNotice',
	        value: function postNotice(content, receiver) {
	            var _this = this;

	            var params = {
	                params: {
	                    content: content,
	                    create_time: new Date().getTime(),
	                    type: 1,
	                    receiver: receiver
	                }
	            };

	            $.ajax({
	                url: '/api/notice',
	                type: 'post',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.postNoticeSuccess(data);
	            }).fail(function () {
	                toastr.warning('发送私信失败');
	            });
	        }
	    }]);

	    return NoticeSenderActions;
	}();

	exports.default = _alt2.default.createActions(NoticeSenderActions);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _NoticeSenderActions = __webpack_require__(102);

	var _NoticeSenderActions2 = _interopRequireDefault(_NoticeSenderActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NoticeSenderStore = function () {
	    function NoticeSenderStore() {
	        _classCallCheck(this, NoticeSenderStore);

	        this.bindActions(_NoticeSenderActions2.default);
	        this.content = '';
	        this.loading = false;
	    }

	    _createClass(NoticeSenderStore, [{
	        key: 'onChangeContent',
	        value: function onChangeContent(event) {
	            this.content = event.target.value;
	        }
	    }, {
	        key: 'onPostNoticeSuccess',
	        value: function onPostNoticeSuccess(data) {
	            this.loading = false;
	            if (data.code === 500) {
	                toastr.warning('发送私信失败');
	            } else if (data.code === 404) {
	                toastr.warning('用户不存在');
	            } else if (data.code === 200) {
	                toastr.success('发送私信成功');
	            }
	        }
	    }, {
	        key: 'onPostNoticeLoad',
	        value: function onPostNoticeLoad() {
	            this.loading = true;
	        }
	    }]);

	    return NoticeSenderStore;
	}();

	exports.default = _alt2.default.createStore(NoticeSenderStore);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MemberActions = function () {
	    function MemberActions() {
	        _classCallCheck(this, MemberActions);

	        this.generateActions('getMemberSuccess', 'followSuccess');
	    }

	    _createClass(MemberActions, [{
	        key: 'getMember',
	        value: function getMember(domain) {
	            var _this = this;

	            $.ajax({
	                url: '/api/member/' + domain,
	                type: 'get',
	                cache: false,
	                contentType: 'application/json;charset=utf-8'
	            }).done(function (data) {
	                _this.actions.getMemberSuccess(data);
	            }).fail(function () {
	                toastr.error('获取信息失败');
	            });
	        }
	    }, {
	        key: 'follow',
	        value: function follow(option, _id) {
	            var _this2 = this;

	            var type = option === 0 ? 'post' : 'delete';
	            $.ajax({
	                url: '/api/follow',
	                type: type,
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                data: JSON.stringify({ _id: _id }),
	                cache: false,
	                timeOut: 4000
	            }).done(function (data) {
	                _this2.actions.followSuccess(data);
	            }).fail(function () {
	                toastr.error('网络错误');
	            }).error(function () {
	                toastr.warning('操作超时');
	            });
	        }
	    }]);

	    return MemberActions;
	}();

	exports.default = _alt2.default.createActions(MemberActions);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _MemberActions = __webpack_require__(104);

	var _MemberActions2 = _interopRequireDefault(_MemberActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MemberStore = function () {
	    function MemberStore() {
	        _classCallCheck(this, MemberStore);

	        this.bindActions(_MemberActions2.default);
	        this.member = false;
	        this._id = '';
	        this.username = '';
	        this.avatar_url = '';
	        this.followers = 0;
	        this.following = 0;
	        this.contribute = 0;
	        this.article = [];
	        this.animate = [];
	        this.music = [];
	        this.introduce = 'heh';
	        this.star = 0;
	        this.followed = false;
	        this.loading = true;
	        this.error = false;
	    }

	    _createClass(MemberStore, [{
	        key: 'onGetMemberSuccess',
	        value: function onGetMemberSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {
	                this.member = true;
	                var user = data.raw._raw;
	                this._id = user._id;
	                this.username = user.username;
	                this.avatar_url = user.avatar_url;
	                this.followers = user.followers.length;
	                this.following = user.following.length;
	                this.contribute = user.contribute.length;
	                this.animate = user.animate;
	                this.music = user.music;
	                this.article = user.article;
	                this.introduce = user.introduce;
	                this.star = user.star.length;
	                this.followed = data.raw.followed;
	            } else if (data.code === 500) {
	                toastr.error('服务器错误');
	                this.error = true;
	            } else if (data.code === 404) {
	                toastr.warning('找不到这个人');
	            }
	        }
	    }, {
	        key: 'onFollowSuccess',
	        value: function onFollowSuccess(data) {
	            switch (data.code) {
	                case 200:
	                    toastr.success(data.meta);
	                    this.followed = !this.followed;
	                    break;
	                case 304:
	                case 400:
	                    toastr.warning(data.meta);
	                    break;
	                case 404:
	                    toastr.warning(data.meta);
	                    break;
	                case 500:
	                    toastr.error(data.meta);
	                    break;
	            }
	        }
	    }]);

	    return MemberStore;
	}();

	exports.default = _alt2.default.createStore(MemberStore);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ConList = __webpack_require__(107);

	var _ConList2 = _interopRequireDefault(_ConList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ConArticle = function (_React$Component) {
	    _inherits(ConArticle, _React$Component);

	    function ConArticle(props) {
	        _classCallCheck(this, ConArticle);

	        return _possibleConstructorReturn(this, (ConArticle.__proto__ || Object.getPrototypeOf(ConArticle)).call(this, props));
	    }

	    _createClass(ConArticle, [{
	        key: 'render',
	        value: function render() {
	            var Result = void 0;
	            if (this.props.params.domain !== undefined) {
	                Result = _react2.default.createElement(_ConList2.default, { tab: this.props.params.column || 'article', domain: this.props.params.domain });
	            }

	            return _react2.default.createElement(
	                'div',
	                null,
	                Result
	            );
	        }
	    }]);

	    return ConArticle;
	}(_react2.default.Component);

	exports.default = ConArticle;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _underscore = __webpack_require__(32);

	var _ConListActions = __webpack_require__(108);

	var _ConListActions2 = _interopRequireDefault(_ConListActions);

	var _ConListStore = __webpack_require__(109);

	var _ConListStore2 = _interopRequireDefault(_ConListStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ConList = function (_React$Component) {
	    _inherits(ConList, _React$Component);

	    function ConList(props) {
	        _classCallCheck(this, ConList);

	        var _this = _possibleConstructorReturn(this, (ConList.__proto__ || Object.getPrototypeOf(ConList)).call(this, props));

	        _this.state = _ConListStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(ConList, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _ConListStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _ConListStore2.default.listen(this.onChange);
	            var props = this.props;
	            _ConListActions2.default.getConList(props.tab + 's', props.domain, 0);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (!(0, _underscore.isEqual)(prevProps, this.props)) {
	                _ConListActions2.default.getConList(this.props.tab + 's', this.props.domain, 0);
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'prevPage',
	        value: function prevPage() {
	            var props = this.props;
	            _ConListActions2.default.getConList(props.tab + 's', props.domain, this.state.skip - 1);
	            _ConListActions2.default.changeSkip(0);
	        }
	    }, {
	        key: 'nextPage',
	        value: function nextPage() {
	            var props = this.props;
	            _ConListActions2.default.getConList(props.option, props.tab, props.domain, this.state.skip + 1);
	            _ConListActions2.default.changeSkip(1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var option = this.props.tab;
	            var List = void 0,
	                SkipPage = void 0,
	                disabled = '',
	                disabledN = '';
	            if (this.state.skip === 0) {
	                disabled = 'disabled';
	            }
	            if (this.state.skip >= this.state.count / 5 - 1 || this.state.count < 4) {
	                disabledN = 'disabled';
	            }
	            if (this.state.contributes.length > 0) {
	                List = this.state.contributes.map(function (data, index) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: 'media mon-conlist-item', key: 'contribute:' + data.data._id },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/' + option + '/' + data.data._id },
	                                _react2.default.createElement('img', { src: data.data.abbreviations || '/img/abbreviations.png', alt: 'loading', width: '80' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/' + option + '/' + data.data._id, className: 'text-primary mon-conlist-title' },
	                                data.data.title
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted mon-conlist-info' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '\u6295\u7A3F\u65E5\u671F\uFF1A',
	                                    new Date(data.data.create_time).toLocaleDateString()
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '\u6D4F\u89C8\u6B21\u6570\uFF1A',
	                                    data.data.browser_count
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted' },
	                                data.data.summary
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'mon-conlist-index' },
	                            index + 1
	                        )
	                    );
	                });

	                SkipPage = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-skip' },
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn mon-page mon-prev-page ' + disabled, onClick: this.prevPage.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-arrow-left' })
	                    ),
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'javascript:;', className: 'btn mon-page mon-next-page ' + disabledN, onClick: this.nextPage.bind(this) },
	                        _react2.default.createElement('span', { className: 'fa fa-arrow-right' })
	                    )
	                );
	            } else {
	                List = _react2.default.createElement(
	                    'p',
	                    { className: 'bg-info mon-padding' },
	                    '\u5C1A\u6CA1\u6709\u4EFB\u4F55\u6295\u7A3F'
	                );

	                SkipPage = null;
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'animated flipInX' },
	                List,
	                SkipPage
	            );
	        }
	    }]);

	    return ConList;
	}(_react2.default.Component);

	exports.default = ConList;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ConListActions = function () {
	    function ConListActions() {
	        _classCallCheck(this, ConListActions);

	        this.generateActions('getConListSuccess', 'subSkip', 'plusSkip');
	    }

	    /**
	     * 获取列表
	     * @param tab
	     * @param domain
	     * @param skip
	     */


	    _createClass(ConListActions, [{
	        key: 'getConList',
	        value: function getConList(tab, domain, skip) {
	            var _this = this;

	            var params = {
	                option: { skip: skip * 6, limit: 6, sort: { create_time: 1 } },
	                query: 'domain',
	                value: domain
	            },
	                url = '/api/' + tab;

	            $.ajax({
	                url: url,
	                type: 'post',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                data: JSON.stringify(params)
	            }).done(function (data) {
	                _this.actions.getConListSuccess(data);
	            }).fail(function (data) {
	                toastr.error('网络链接有问题');
	            });
	        }
	    }, {
	        key: 'changeSkip',
	        value: function changeSkip(option) {
	            if (option === 0) {
	                this.actions.subSkip();
	            } else if (option === 1) {
	                this.actions.plusSkip();
	            }
	        }
	    }]);

	    return ConListActions;
	}();

	exports.default = _alt2.default.createActions(ConListActions);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-11-14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _ConListActions = __webpack_require__(108);

	var _ConListActions2 = _interopRequireDefault(_ConListActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ConListStore = function () {
	    function ConListStore() {
	        _classCallCheck(this, ConListStore);

	        this.bindActions(_ConListActions2.default);
	        this.contributes = [];
	        this.count = 0;
	        this.skip = 0;
	    }

	    _createClass(ConListStore, [{
	        key: 'onGetConListSuccess',
	        value: function onGetConListSuccess(data) {
	            if (data.code === 200) {
	                this.contributes = data.raw._raw;
	                this.count = data.raw.count;
	            } else if (data.code === 500) {
	                toastr.error('服务器错误');
	            }
	        }
	    }, {
	        key: 'onSubSkip',
	        value: function onSubSkip() {
	            this.skip = this.skip - 1;
	        }
	    }, {
	        key: 'onPlusSkip',
	        value: function onPlusSkip() {
	            this.skip = this.skip + 1;
	        }
	    }]);

	    return ConListStore;
	}();

	exports.default = _alt2.default.createStore(ConListStore);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var MemberCenter = function (_React$Component) {
	    _inherits(MemberCenter, _React$Component);

	    function MemberCenter() {
	        _classCallCheck(this, MemberCenter);

	        return _possibleConstructorReturn(this, (MemberCenter.__proto__ || Object.getPrototypeOf(MemberCenter)).apply(this, arguments));
	    }

	    _createClass(MemberCenter, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "container mon-main" },
	                _react2.default.createElement(_reactRouter.RouteHandler, null)
	            );
	        }
	    }]);

	    return MemberCenter;
	}(_react2.default.Component);

	exports.default = MemberCenter;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _MemberFollowActions = __webpack_require__(112);

	var _MemberFollowActions2 = _interopRequireDefault(_MemberFollowActions);

	var _MemberFollowStore = __webpack_require__(113);

	var _MemberFollowStore2 = _interopRequireDefault(_MemberFollowStore);

	var _Loading = __webpack_require__(33);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _reactRouter = __webpack_require__(3);

	var _NotFound = __webpack_require__(58);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 15-12-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var MemberFollow = function (_React$Component) {
	    _inherits(MemberFollow, _React$Component);

	    function MemberFollow(props) {
	        _classCallCheck(this, MemberFollow);

	        var _this = _possibleConstructorReturn(this, (MemberFollow.__proto__ || Object.getPrototypeOf(MemberFollow)).call(this, props));

	        _this.state = _MemberFollowStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(MemberFollow, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _MemberFollowStore2.default.listen(this.onChange);
	            _MemberFollowActions2.default.getFollow(this.props.params.domain, this.props.params.follow, this.props.params.skip);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _MemberFollowStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Follows = void 0;
	            if (this.state.follows.length > 0 && this.state.loading === false && this.state.error === false) {
	                Follows = this.state.follows.map(function (data) {

	                    return _react2.default.createElement(
	                        'div',
	                        { key: data.user._id, className: 'media mon-follow-item col-md-3 animated fadeIn' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-left' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/member/' + data.user.domain },
	                                _react2.default.createElement('img', { src: data.user.avatar_url, alt: 'loading' })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'media-body' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/member/' + data.user.domain },
	                                data.user.username
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'text-muted mon-follow-intr' },
	                                data.user.introduce
	                            )
	                        )
	                    );
	                });
	            } else if (this.state.loading === true) {
	                Follows = _react2.default.createElement(_Loading2.default, null);
	            } else if (this.state.follows.length === 0) {
	                Follows = _react2.default.createElement(
	                    'p',
	                    { className: 'bg-info mon-bg-title mon-padding' },
	                    '\u6CA1\u6709\uFF0C\u5C31\u662F\u6CA1\u6709\uFF0C\u4F60\u54AC\u6211'
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'raw' },
	                Follows
	            );
	        }
	    }]);

	    return MemberFollow;
	}(_react2.default.Component);

	exports.default = MemberFollow;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MemberFollowActions = function () {
	    function MemberFollowActions() {
	        _classCallCheck(this, MemberFollowActions);

	        this.generateActions('getFollowSuccess', 'getFollowFail');
	    }

	    /**
	     * 获取following或followers
	     * @param follow
	     */


	    _createClass(MemberFollowActions, [{
	        key: 'getFollow',
	        value: function getFollow(domain, follow, skip) {
	            var _this = this;

	            var url = '/api/' + follow;

	            var params = {
	                where: {
	                    domain: domain
	                },
	                option: {
	                    skip: skip || 0,
	                    limit: 10
	                }
	            };

	            $.ajax({
	                url: url,
	                type: 'post',
	                contentType: 'application/json;charset=utf-8',
	                dataType: 'json',
	                cache: false,
	                data: JSON.stringify(params),
	                timeout: 10000
	            }).done(function (data) {
	                _this.actions.getFollowSuccess(data);
	            }).fail(function () {
	                _this.actions.getFollowFail();
	            }).error(function () {
	                _this.actions.getFollowFail();
	            });
	        }
	    }]);

	    return MemberFollowActions;
	}();

	exports.default = _alt2.default.createActions(MemberFollowActions);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 15-12-1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _MemberFollowActions = __webpack_require__(112);

	var _MemberFollowActions2 = _interopRequireDefault(_MemberFollowActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MemberFollowStore = function () {
	    function MemberFollowStore() {
	        _classCallCheck(this, MemberFollowStore);

	        this.bindActions(_MemberFollowActions2.default);
	        this.follows = [];
	        this.loading = true;
	        this.error = false;
	    }

	    _createClass(MemberFollowStore, [{
	        key: 'onGetFollowSuccess',
	        value: function onGetFollowSuccess(data) {
	            this.loading = false;
	            if (data.code === 200) {
	                this.follows = data.raw;
	            } else if (data.code === 400) {
	                toastr.warning(data.meta);
	            } else if (data.code === 500) {
	                this.error = true;
	                toastr.error(data.meta);
	            }
	        }
	    }, {
	        key: 'onGetFollowFail',
	        value: function onGetFollowFail() {
	            this.loading = false;
	            this.error = true;
	        }
	    }]);

	    return MemberFollowStore;
	}();

	exports.default = _alt2.default.createStore(MemberFollowStore);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TagListActions = __webpack_require__(115);

	var _TagListActions2 = _interopRequireDefault(_TagListActions);

	var _TagListStore = __webpack_require__(116);

	var _TagListStore2 = _interopRequireDefault(_TagListStore);

	var _CommonList = __webpack_require__(99);

	var _CommonList2 = _interopRequireDefault(_CommonList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by apache on 16-4-6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var TagList = function (_React$Component) {
	    _inherits(TagList, _React$Component);

	    function TagList(props) {
	        _classCallCheck(this, TagList);

	        var _this = _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).call(this, props));

	        _this.state = _TagListStore2.default.getState();
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(TagList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _TagListStore2.default.listen(this.onChange);
	            _TagListActions2.default.getList(this.props.params.tag);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _TagListStore2.default.unlisten(this.onChange);
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(state) {
	            this.setState(state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var List = null;
	            if (this.state.list.length > 0) {
	                List = _react2.default.createElement(_CommonList2.default, { list: this.state.list, column: '/article/' });
	            } else {
	                List = _react2.default.createElement(
	                    'div',
	                    { className: 'mon-table' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        '\u627E\u4E0D\u5230 T_T'
	                    )
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { id: 'lists', className: 'container mon-main' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-8 col-md-offset-2 col-sm-12 col-xs-12' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'mon-article-tag' },
	                            this.props.params.tag
	                        ),
	                        List
	                    )
	                )
	            );
	        }
	    }]);

	    return TagList;
	}(_react2.default.Component);

	exports.default = TagList;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 16-4-6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TagListActions = function () {
	    function TagListActions() {
	        _classCallCheck(this, TagListActions);

	        this.generateActions('getListSuccess');
	    }

	    _createClass(TagListActions, [{
	        key: 'getList',
	        value: function getList(tag) {
	            var _this = this;

	            $.ajax({
	                url: '/api/articles/tag/' + tag,
	                type: 'get',
	                dataType: 'json',
	                contentType: 'application/json;charset=utf-8',
	                cache: false,
	                timeOut: 5000
	            }).done(function (data) {
	                _this.actions.getListSuccess(data);
	            }).fail(function () {
	                toastr.warning('加载不了');
	            });
	        }
	    }]);

	    return TagListActions;
	}();

	exports.default = _alt2.default.createActions(TagListActions);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by apache on 16-4-6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	var _TagListActions = __webpack_require__(115);

	var _TagListActions2 = _interopRequireDefault(_TagListActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TagListStore = function () {
	    function TagListStore() {
	        _classCallCheck(this, TagListStore);

	        this.bindActions(_TagListActions2.default);
	        this.list = [];
	    }

	    _createClass(TagListStore, [{
	        key: 'onGetListSuccess',
	        value: function onGetListSuccess(data) {
	            console.log(data);
	            if (data.code === 200) {
	                this.list = data.raw._raw;
	            } else {
	                toastr.warning(data.meta);
	            }
	        }
	    }]);

	    return TagListStore;
	}();

	exports.default = _alt2.default.createStore(TagListStore);

/***/ })
]);