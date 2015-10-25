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

},{"../alt":3}],2:[function(require,module,exports){
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

        this.generateActions('doPasswordFail', 'loginSuccess', 'loginFail', 'doSignSuccess', 'doSignFail', 'changeEmail', 'changePassword');
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
        value: function sign(email, password, prePwd) {
            if (password !== prePwd) {
                this.actions.doPasswordFail();
            } else {
                $.post('/api/sign', {
                    eamil: email,
                    password: password
                }, function (data) {
                    if (data.err) {
                        this.actions.doSignFail(data);
                    } else {
                        this.actions.doSignSuccess();
                    }
                });
            }
        }
    }]);

    return LoginActions;
})();

exports['default'] = _alt2['default'].createActions(LoginActions);
module.exports = exports['default'];

},{"../alt":3}],3:[function(require,module,exports){
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

},{"alt":"alt"}],4:[function(require,module,exports){
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

},{"./Footer":5,"./Nav":8,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
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

},{"react":"react"}],6:[function(require,module,exports){
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
            _actionsHomeActions2['default'].getData();
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

},{"../actions/HomeActions":1,"../stores/HomeStore":11,"react":"react"}],7:[function(require,module,exports){
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
    }, {
        key: 'handleClick',
        value: function handleClick() {
            console.log("login");
            _actionsLoginActions2['default'].login(this.state.email, this.state.password);
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
                                _react2['default'].createElement('input', { id: 'login-email', className: 'form-control', onChange: _actionsLoginActions2['default'].changeEmail, type: 'email', required: true, autoFocus: true, placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'login-pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'login-pwd', className: 'form-control', onChange: _actionsLoginActions2['default'].changePassword, type: 'password', required: true, placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'a',
                                { href: 'javascript:;', onClick: this.handleClick.bind(this), className: 'btn btn-primary btn-block' },
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
                                    { href: 'http://www.baidu.com' },
                                    _react2['default'].createElement('span', { className: 'fa fa-github' })
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
                                    _react2['default'].createElement('span', { className: 'fa fa-weibo' })
                                ),
                                _react2['default'].createElement(
                                    'a',
                                    { href: '' },
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
                                    { 'for': 'login-email' },
                                    '邮箱'
                                ),
                                _react2['default'].createElement('input', { id: 'login-email', className: 'form-control', type: 'email', required: true, placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'login-pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'login-pwd', className: 'form-control', type: 'password', required: true, placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { 'for': 'login-pwd' },
                                    '确认密码'
                                ),
                                _react2['default'].createElement('input', { id: 'login-pwd', className: 'form-control', type: 'password', required: true, placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'a',
                                { href: 'javascript:;', onclick: 'handleclick', className: 'btn btn-primary btn-block' },
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

},{"../actions/LoginActions":2,"../stores/LoginStore":12,"react":"react"}],8:[function(require,module,exports){
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

var Nav = (function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav() {
        _classCallCheck(this, Nav);

        _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
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
                            { className: 'navbar-form navbar-right', role: 'search' },
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
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
})(_react2['default'].Component);

exports['default'] = Nav;
module.exports = exports['default'];

},{"react":"react"}],9:[function(require,module,exports){
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

},{"./routes":10,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
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

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] })
);
module.exports = exports['default'];

},{"./components/App":4,"./components/Home":6,"./components/Login":7,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
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

},{"../actions/HomeActions":1,"../alt":3}],12:[function(require,module,exports){
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
        this.email = '';
        this.authId = '';
        this.password = '';
        this.stateInfo = ''; // 登陆状态信息
        this.err = false;
    }

    /**
     * 密码和确认密码不一样的错误
     */

    _createClass(LoginStore, [{
        key: 'onDoPasswordFail',
        value: function onDoPasswordFail() {
            this.stateInfo = '两次密码不一样';
            this.err = true;
        }

        /**
         * @param email 登陆邮箱
         * @param passwod 登陆密码
         */
    }, {
        key: 'onLoginSuccess',
        value: function onLoginSuccess(data) {
            console.log(data);
        }

        /**
         * 登陆失败
         * @param data
         */
    }, {
        key: 'onLoginFail',
        value: function onLoginFail() {
            this.stateInfor = '邮箱未注册，或密码不正确';
            this.err = true;
            toastr.error(this.stateInfor);
        }

        /**
         * 注册成功
         */
    }, {
        key: 'onDoSignSuccess',
        value: function onDoSignSuccess() {}

        /**
         * 注册失败
         */
    }, {
        key: 'onSignFail',
        value: function onSignFail(data) {
            this.err = true;
            if (!data.error) {
                switch (data.failId) {
                    case 1:
                        this.stateInfo = '邮箱已经被注册了';break;
                    case 2:
                        this.stateInfo = '邮箱不支持';break;
                }
                return toastr.warning(this.stateInfo);
            } else {
                this.stateInfo = '服务器错误';
                return toastr.error(this.stateInfo);
            }
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
    }]);

    return LoginStore;
})();

exports['default'] = _alt2['default'].createStore(LoginStore);
module.exports = exports['default'];

},{"../actions/LoginActions":2,"../alt":3}]},{},[9]);
