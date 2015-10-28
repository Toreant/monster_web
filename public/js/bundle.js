(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
    function HomeActions() {
        _classCallCheck(this, HomeActions);

        this.generateActions('getPage');
    }

    _createClass(HomeActions, [{
        key: 'getData',
        value: function getData() {
            $.post('/api/app/1', {}, function (data) {
                console.log(data);
            });
        }
    }]);

    return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":5}],2:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var LoginActions = (function () {
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

            console.log(email + " " + password + " " + prePwd + " " + userName);
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
})();

exports['default'] = _alt2['default'].createActions(LoginActions);
module.exports = exports['default'];

},{"../alt":5}],3:[function(require,module,exports){
/**
 * Created by apache on 15-10-25.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var NavActions = (function () {
    function NavActions() {
        _classCallCheck(this, NavActions);

        this.generateActions('changeState', 'checkLoginSuccess', 'checkLoginFail', 'signOutSuccess', 'signOutFail');
    }

    _createClass(NavActions, [{
        key: 'checkLogin',
        value: function checkLogin() {
            var _this = this;

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
})();

exports['default'] = _alt2['default'].createActions(NavActions);
module.exports = exports['default'];

},{"../alt":5}],4:[function(require,module,exports){
/**
 * Created by apache on 15-10-27.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var UserActions = (function () {
    function UserActions() {
        _classCallCheck(this, UserActions);

        this.generateActions('getUserSuccess', 'getUserFail');
    }

    _createClass(UserActions, [{
        key: 'getUser',
        value: function getUser(domain) {
            var _this = this;

            $.ajax({
                url: '/api/getUser',
                data: { domain: domain },
                cache: false,
                type: 'post'
            }).done(function (data) {
                _this.actions.getUserSuccess(data);
            }).fail(function () {
                _this.actions.getUserFail();
            });
        }
    }]);

    return UserActions;
})();

exports['default'] = _alt2['default'].createActions(UserActions);
module.exports = exports['default'];

},{"../alt":5}],5:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],6:[function(require,module,exports){
/**
 * Created by apache on 15-10-23.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_Nav2['default'], null),
                _react2['default'].createElement(_reactRouter.RouteHandler, null),
                _react2['default'].createElement(_Footer2['default'], null)
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Footer":7,"./Nav":10,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
/**
 * Created by apache on 15-10-23.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'footer',
                { className: 'mon-footer' },
                _react2['default'].createElement(
                    'div',
                    { className: 'container' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-4 col-sm-4' },
                        _react2['default'].createElement(
                            'p',
                            null,
                            '友情链接'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://www.bilibili.com/' },
                            '哔哩哔哩'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://www.acfun.tv/' },
                            'acfun'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://music.163.com/' },
                            '网易云音乐'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-4 col-sm-4' },
                        _react2['default'].createElement(
                            'p',
                            null,
                            '技术栈'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://www.gulpjs.com.cn/' },
                            _react2['default'].createElement('img', { src: '/img/gulp.svg', width: '40', alt: 'loading' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'https://nodejs.org/en/' },
                            _react2['default'].createElement('img', { src: '/img/node.svg', width: '50', alt: 'loading' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://www.bootcss.com/' },
                            'bootstrap'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://facebook.github.io/react/' },
                            'react'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'https://www.mongodb.org' },
                            _react2['default'].createElement('img', { src: '/img/mongo.png', width: '50', alt: 'loading' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://www.bootcss.com/p/lesscss/' },
                            _react2['default'].createElement('img', { src: '/img/less.png', width: '50', alt: 'loading' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-4 col-sm-4' },
                        _react2['default'].createElement(
                            'p',
                            null,
                            '关注我的账号'
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://weibo.com/u/1894138207/' },
                            _react2['default'].createElement('span', { className: 'fa fa-weibo' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'https://github.com/Toreant/' },
                            _react2['default'].createElement('span', { className: 'fa fa-github' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: 'http://music.163.com/#/user/home?id=38777415' },
                            '网易云音乐'
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"react":"react"}],8:[function(require,module,exports){
/**
 * Created by apache on 15-10-23.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
        this.state = _storesHomeStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesHomeStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(nextProps, preProps) {}
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesHomeStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'jumbotron mon-home' },
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Monster 分享你的乐趣'
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        '独乐乐，不如猪乐乐'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { href: '/login', className: 'btn btn-primary' },
                        '登陆'
                    )
                )
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeActions":1,"../stores/HomeStore":15,"react":"react"}],9:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsLoginActions = require('../actions/LoginActions');

var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);

var _storesLoginStore = require('../stores/LoginStore');

var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);

var Login = (function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        _get(Object.getPrototypeOf(Login.prototype), 'constructor', this).call(this, props);
        this.state = _storesLoginStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Login, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesLoginStore2['default'].listen(this.onChange);
            var hash = window.location.hash;
            hash = hash.split('#')[1];
            var $sinForm = $(".sign-form"),
                $loginForm = $(".login-form");
            if (hash === 'login') {
                $sinForm.css('display', 'none');
                $loginForm.css('display', 'block');
            } else if (hash === 'sign') {
                $sinForm.css('display', 'block');
                $loginForm.css('display', 'none');
            } else {
                $sinForm.css('display', 'none');
                $loginForm.css('display', 'block');
                window.location.hash = 'login';
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesLoginStore2['default'].unlisten(this.onChange);
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
                } else if (email !== '' && password !== '') _actionsLoginActions2['default'].login(email, password);
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
                } else _actionsLoginActions2['default'].sign(email, password, prePassword, name);
            }
        }
    }, {
        key: 'changeForm',
        value: function changeForm(form) {
            var $preForm = undefined,
                $newForm = undefined;
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
            return _react2['default'].createElement(
                'div',
                { className: 'container mon-login' },
                _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    _react2['default'].createElement('div', { className: 'col-md-8 col-sm-8' }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-4 col-sm-4' },
                        _react2['default'].createElement(
                            'form',
                            { className: 'login-form' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-legend' },
                                _react2['default'].createElement(
                                    'span',
                                    null,
                                    '登陆'
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: this.changeForm.bind(this, 1), className: 'form-change' },
                                    _react2['default'].createElement('span', { className: 'fa fa-arrow-circle-o-right' }),
                                    '注册'
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'login-email' },
                                    '邮箱'
                                ),
                                _react2['default'].createElement('input', { id: 'login-email', className: 'form-control ', ref: 'loginEmail', onChange: _actionsLoginActions2['default'].changeEmail, type: 'email', autoFocus: true, placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'login-pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'login-pwd', className: 'form-control ', ref: 'loginPwd', onChange: _actionsLoginActions2['default'].changePassword, type: 'password', placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'a',
                                { href: 'javascript:;', onClick: this.handleClick.bind(this, 0), className: 'btn btn-primary btn-block' },
                                '登陆'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'mon-other-login' },
                                _react2['default'].createElement(
                                    'p',
                                    null,
                                    '其他账户登陆'
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/auth/github' },
                                    _react2['default'].createElement('span', { className: 'fa fa-github' })
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-weibo' })
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/auth/facebook' },
                                    _react2['default'].createElement('span', { className: 'fa fa-facebook-square' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'form',
                            { className: 'sign-form' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-legend' },
                                _react2['default'].createElement(
                                    'span',
                                    null,
                                    '注册'
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: this.changeForm.bind(this, 0), className: 'form-change' },
                                    _react2['default'].createElement('span', { className: 'fa fa-arrow-circle-o-right' }),
                                    '登陆'
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'sign-email' },
                                    '邮箱'
                                ),
                                _react2['default'].createElement('input', { id: 'sign-email', className: 'form-control', ref: 'email', onChange: _actionsLoginActions2['default'].changeEmail, type: 'email', placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'sign-name' },
                                    '用户名'
                                ),
                                _react2['default'].createElement('input', { id: 'sign-name', className: 'form-control', ref: 'user', onChange: _actionsLoginActions2['default'].changeName, type: 'text', placeholder: '用户名' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'sign-pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'sign-pwd', className: 'form-control', max: '8', ref: 'password', onChange: _actionsLoginActions2['default'].changePassword, type: 'password', placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'sign-pwd' },
                                    '确认密码'
                                ),
                                _react2['default'].createElement('input', { id: 'sign-pwd', className: 'form-control', max: '8', ref: 'prePassword', onChange: _actionsLoginActions2['default'].changePrePassword, type: 'password', placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'a',
                                { href: 'javascript:;', onClick: this.handleClick.bind(this, 1), className: 'btn btn-primary btn-block' },
                                '登陆'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
})(_react2['default'].Component);

exports['default'] = Login;
module.exports = exports['default'];

},{"../actions/LoginActions":2,"../stores/LoginStore":16,"react":"react"}],10:[function(require,module,exports){
/**
 * Created by apache on 15-10-23.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesNavStore = require('../stores/NavStore');

var _storesNavStore2 = _interopRequireDefault(_storesNavStore);

var _actionsNavActions = require('../actions/NavActions');

var _actionsNavActions2 = _interopRequireDefault(_actionsNavActions);

var Nav = (function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, props);
        this.state = _storesNavStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Nav, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesNavStore2['default'].listen(this.onChange);
            _actionsNavActions2['default'].checkLogin();
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesNavStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            _actionsNavActions2['default'].signOut();
        }
    }, {
        key: 'render',
        value: function render() {
            var SUBNAV = undefined;
            if (this.state.loginState) {
                SUBNAV = _react2['default'].createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right mon-subnav' },
                    _react2['default'].createElement(
                        'li',
                        { className: 'dropdown' },
                        _react2['default'].createElement(
                            'a',
                            { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                            _react2['default'].createElement('img', { src: this.state.avatar, width: '30', alt: 'loading' }),
                            ' ',
                            _react2['default'].createElement('span', { className: 'caret' })
                        ),
                        _react2['default'].createElement(
                            'ul',
                            { className: 'dropdown-menu' },
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/u/' + this.state.domain, className: 'mon-user' },
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        'Signed as '
                                    ),
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        this.state.userName
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/u/' + this.state.domain + '/setting' },
                                    '设置'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/u/' + this.state.doamin + '/toastr' },
                                    '通知'
                                )
                            ),
                            _react2['default'].createElement('li', { role: 'separator', className: 'divider' }),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: this.signOut.bind(this) },
                                    '退出'
                                )
                            )
                        )
                    )
                );
            } else {
                SUBNAV = _react2['default'].createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '/login#login' },
                            '登陆'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '/login#sign' },
                            '注册'
                        )
                    )
                );
            }
            return _react2['default'].createElement(
                'nav',
                { className: 'navbar navbar-default mon-nav', id: 'mon-fixed-nav' },
                _react2['default'].createElement(
                    'div',
                    { className: 'container' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2['default'].createElement(
                            'button',
                            { className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#my-nav' },
                            _react2['default'].createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle'
                            ),
                            _react2['default'].createElement('span', { className: 'icon-bar' }),
                            _react2['default'].createElement('span', { className: 'icon-bar' }),
                            _react2['default'].createElement('span', { className: 'icon-bar' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: '/', className: 'navbar-brand' },
                            _react2['default'].createElement(
                                'span',
                                { className: 'icon-name' },
                                'Monster'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'collapse navbar-collapse', id: 'my-nav' },
                        _react2['default'].createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/' },
                                    '首页'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/anime' },
                                    '动漫'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/music' },
                                    '音乐'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/article' },
                                    '文章'
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'form',
                            { className: 'navbar-form navbar-left', role: 'search' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: '输入搜索' })
                            ),
                            _react2['default'].createElement(
                                'button',
                                { type: 'submit', className: 'btn btn-default search-btn' },
                                'Submit'
                            )
                        ),
                        SUBNAV
                    )
                )
            );
        }
    }]);

    return Nav;
})(_react2['default'].Component);

exports['default'] = Nav;
module.exports = exports['default'];

},{"../actions/NavActions":3,"../stores/NavStore":17,"react":"react"}],11:[function(require,module,exports){
/**
 * Created by apache on 15-10-27.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var NotFound = (function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound() {
        _classCallCheck(this, NotFound);

        _get(Object.getPrototypeOf(NotFound.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NotFound, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    '404 Not Found'
                )
            );
        }
    }]);

    return NotFound;
})(_react2['default'].Component);

exports['default'] = NotFound;
module.exports = exports['default'];

},{"react":"react"}],12:[function(require,module,exports){
/**
 * Created by apache on 15-10-27.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _actionsUserActions = require('../actions/UserActions');

var _actionsUserActions2 = _interopRequireDefault(_actionsUserActions);

var _storesUserStore = require('../stores/UserStore');

var _storesUserStore2 = _interopRequireDefault(_storesUserStore);

var User = (function (_React$Component) {
    _inherits(User, _React$Component);

    function User(props) {
        _classCallCheck(this, User);

        _get(Object.getPrototypeOf(User.prototype), 'constructor', this).call(this, props);
        this.state = _storesUserStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesUserStore2['default'].listen(this.onChange);
            _actionsUserActions2['default'].getUser(this.props.params.domain);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // Fetch new charachter data when URL path changes
            if (prevProps.params.id !== this.props.params.id) {
                _actionsUserActions2['default'].getUser(this.props.params.id);
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesUserStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-3 col-sm-3' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mon-center' },
                            _react2['default'].createElement('img', { src: this.state.avatar_url, width: '200', alt: 'loading' })
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mon-user-name' },
                            this.state.username
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mon-vcard-stats' },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/u/' + this.state.doamin + '/followers' },
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'mon-link' },
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        this.state.followers
                                    ),
                                    _react2['default'].createElement(
                                        'b',
                                        null,
                                        'Followers'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/u/' + this.state.doamin + '/following' },
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'mon-link' },
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        this.state.followers
                                    ),
                                    _react2['default'].createElement(
                                        'b',
                                        null,
                                        'Following'
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/u/' + this.state.doamin + '/contribute' },
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'mon-link' },
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        this.state.contribute
                                    ),
                                    _react2['default'].createElement(
                                        'b',
                                        null,
                                        'Contribute'
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'ul',
                            { className: 'nav mon-ability-list' },
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-cog' }),
                                    '设置'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-user' }),
                                    '中心'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-star' }),
                                    '关注'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', 'data-toggle': 'collapse', 'data-target': '#my-contribute' },
                                    _react2['default'].createElement('span', { className: 'fa fa-pencil-square' }),
                                    '投稿'
                                ),
                                _react2['default'].createElement(
                                    'ul',
                                    { className: 'nav collapse mon-contribute', id: 'my-contribute' },
                                    _react2['default'].createElement(
                                        'li',
                                        null,
                                        _react2['default'].createElement(
                                            'a',
                                            { href: '' },
                                            _react2['default'].createElement('span', { className: 'fa fa-video-camera' }),
                                            '动漫'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'li',
                                        null,
                                        _react2['default'].createElement(
                                            'a',
                                            { href: '' },
                                            _react2['default'].createElement('span', { className: 'fa fa-music' }),
                                            '音乐'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'li',
                                        null,
                                        _react2['default'].createElement(
                                            'a',
                                            { href: '' },
                                            _react2['default'].createElement('span', { className: 'fa fa-file' }),
                                            '文章'
                                        )
                                    )
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-bell' }),
                                    '通知'
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-9 col-sm-9' },
                        _react2['default'].createElement(_reactRouter.RouteHandler, null)
                    )
                )
            );
        }
    }]);

    return User;
})(_react2['default'].Component);

User.contextTypes = {
    router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = User;
module.exports = exports['default'];

},{"../actions/UserActions":4,"../stores/UserStore":18,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
/**
 * Created by apache on 15-10-22.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":14,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
/**
 * Created by apache on 15-10-23.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsLogin = require('./components/Login');

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsUser = require('./components/User');

var _componentsUser2 = _interopRequireDefault(_componentsUser);

var _componentsNotFound = require('./components/NotFound');

var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: 'u', handler: _componentsUser2['default'] },
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: ':domain' },
            _react2['default'].createElement(_reactRouter.Route, { path: 'setting', handler: _componentsNotFound2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'follower', handler: _componentsUser2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'following', handler: _componentsUser2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'contribute', handler: _componentsUser2['default'] })
        )
    ),
    _react2['default'].createElement(_reactRouter.Route, { path: '*', handler: _componentsNotFound2['default'] })
);
module.exports = exports['default'];

},{"./components/App":6,"./components/Home":8,"./components/Login":9,"./components/NotFound":11,"./components/User":12,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        this.bindActions(_actionsHomeActions2['default']);
        this.userId = '';
    }

    //HomeActions 中的方法

    _createClass(HomeStore, [{
        key: 'onGetPage',
        value: function onGetPage() {
            $.post('/api/app', {}, function (data) {
                console.log(data);
            });
        }
    }]);

    return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeActions":1,"../alt":5}],16:[function(require,module,exports){
/**
 * Created by apache on 15-10-24.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsLoginActions = require('../actions/LoginActions');

var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);

var LoginStore = (function () {
    function LoginStore() {
        _classCallCheck(this, LoginStore);

        this.bindActions(_actionsLoginActions2['default']);
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
            console.log(data);
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
})();

exports['default'] = _alt2['default'].createStore(LoginStore);
module.exports = exports['default'];

},{"../actions/LoginActions":2,"../alt":5}],17:[function(require,module,exports){
/**
 * Created by apache on 15-10-25.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavActions = require('../actions/NavActions');

var _actionsNavActions2 = _interopRequireDefault(_actionsNavActions);

var NavStore = (function () {
    function NavStore() {
        _classCallCheck(this, NavStore);

        this.bindActions(_actionsNavActions2['default']);
        this.loginState = false;
        this.userName = '';
        this.avatar = '';
        this.doamin = '';
    }

    _createClass(NavStore, [{
        key: 'onChangeState',
        value: function onChangeState(data) {
            this.loginState = true;
            this.userName = data.username;
            this.avatar = data._json === undefined ? data.avatar_url : data._json.avatar_url;
            this.domain = data._json === undefined ? data.domain : data._json.username;
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
                window.location = '/';
            } else if (data.code === 400) {
                toastr.error('退出不成功');
            }
        }
    }, {
        key: 'onSignOutFail',
        value: function onSignOutFail() {
            toastr.error("服务器错误");
        }
    }]);

    return NavStore;
})();

exports['default'] = _alt2['default'].createStore(NavStore);
module.exports = exports['default'];

},{"../actions/NavActions":3,"../alt":5}],18:[function(require,module,exports){
/**
 * Created by apache on 15-10-27.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsUserActionsJs = require('../actions/UserActions.js');

var _actionsUserActionsJs2 = _interopRequireDefault(_actionsUserActionsJs);

var UserStore = (function () {
    function UserStore() {
        _classCallCheck(this, UserStore);

        this.bindActions(_actionsUserActionsJs2['default']);
        this.username = '';
        this.avatar_url = '';
        this.star = 0;
        this.followers = 0;
        this.contribute = 0;
        this.following = 0;
        this.domain = '';
    }

    _createClass(UserStore, [{
        key: 'onGetUserSuccess',
        value: function onGetUserSuccess(data) {
            console.log(data);
            if (data.code === 200) {
                this.username = data.raw[0].username;
                this.avatar_url = data.raw[0].avatar_url;
                this.followers = data.raw[0].followers.length;
                this.following = data.raw[0].following.length;
                this.contribute = data.raw[0].contribute.length;
                this.star = data.raw[0].star.length;
                this.doamin = data.raw[0].domain;
            } else {
                toastr.error('获取联系人失败');
            }
        }
    }, {
        key: 'onGetUserFail',
        value: function onGetUserFail() {
            toastr.error('服务器错误');
        }
    }]);

    return UserStore;
})();

exports['default'] = _alt2['default'].createStore(UserStore);
module.exports = exports['default'];

},{"../actions/UserActions.js":4,"../alt":5}]},{},[13]);
