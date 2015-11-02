(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
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

var FollowersActions = (function () {
    function FollowersActions() {
        _classCallCheck(this, FollowersActions);

        this.generateActions('getFollowersSuccess', 'changeFollowId', 'addFollowSuccess');
    }

    _createClass(FollowersActions, [{
        key: 'getFollowers',
        value: function getFollowers(page) {
            var _this = this;

            var params = {
                arrayId: [48561100, 56115067],
                option: { skip: (page - 1) * 10, limit: 10 }
            };
            $.ajax({
                url: '/api/users',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(params)
            }).done(function (data) {
                _this.actions.getFollowersSuccess(data);
            }).fail(function () {
                toastr.warning('获取关注者失败');
            });
        }
    }, {
        key: 'addFollow',
        value: function addFollow($self, auth_id) {
            var _this2 = this;

            var params = {
                where: { auth_id: 48561100 },
                auth_id: auth_id
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
    }]);

    return FollowersActions;
})();

exports['default'] = _alt2['default'].createActions(FollowersActions);
module.exports = exports['default'];

},{"../alt":13}],2:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
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

var FollowingActions = (function () {
    function FollowingActions() {
        _classCallCheck(this, FollowingActions);

        this.generateActions('getFollowingSuccess', 'changeFollowId', 'unFollowSuccess');
    }

    _createClass(FollowingActions, [{
        key: 'getFollowing',
        value: function getFollowing(page) {
            var _this = this;

            var localStorage = window.localStorage,
                userProfile = JSON.parse(localStorage.getItem('user'));

            var params = {
                where: { _id: userProfile.raw._id },
                option: { skip: (page - 1) * 10, limit: 10 }
            };
            $.ajax({
                url: '/api/following',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(params)
            }).done(function (data) {
                _this.actions.getFollowingSuccess(data);
            }).fail(function () {
                toastr.warning('获取关注者失败');
            });
        }
    }, {
        key: 'unFollow',
        value: function unFollow($self, auth_id) {
            var _this2 = this;

            var localStorage = window.localStorage,
                userProfile = JSON.parse(localStorage.getItem('user'));
            var params = {
                where: { _id: userProfile.raw._id },
                auth_id: auth_id
            };

            $.ajax({
                url: '/api/unFollow',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(params)
            }).done(function (data) {
                _this2.actions.unFollowSuccess([$self, data]);
            }).fail(function () {
                toastr.error('关注不成功');
            });
        }
    }]);

    return FollowingActions;
})();

exports['default'] = _alt2['default'].createActions(FollowingActions);
module.exports = exports['default'];

},{"../alt":13}],3:[function(require,module,exports){
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

},{"../alt":13}],4:[function(require,module,exports){
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

},{"../alt":13}],5:[function(require,module,exports){
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

},{"../alt":13}],6:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var NoticeActions = (function () {
    function NoticeActions() {
        _classCallCheck(this, NoticeActions);

        this.generateActions('getToastrSuccess');
    }

    _createClass(NoticeActions, [{
        key: 'getToastr',
        value: function getToastr() {
            this.actions.getToastrSuccess();
        }
    }]);

    return NoticeActions;
})();

exports['default'] = _alt2['default'].createActions(NoticeActions);
module.exports = exports['default'];

},{"../alt":13}],7:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var PaginationActions = function PaginationActions() {
    _classCallCheck(this, PaginationActions);

    this.generateActions();
};

exports['default'] = _alt2['default'].createActions(PaginationActions);
module.exports = exports['default'];

},{"../alt":13}],8:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var PostAnimateActions = (function () {
    function PostAnimateActions() {
        _classCallCheck(this, PostAnimateActions);

        this.generateActions('postAnimateSuccess');
    }

    _createClass(PostAnimateActions, [{
        key: 'postAnimate',
        value: function postAnimate() {
            this.actions.postAnimateSuccess();
        }
    }]);

    return PostAnimateActions;
})();

exports['default'] = _alt2['default'].createActions(PostAnimateActions);
module.exports = exports['default'];

},{"../alt":13}],9:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var ProfileCenterActions = function ProfileCenterActions() {
    _classCallCheck(this, ProfileCenterActions);

    this.generateActions();
};

exports['default'] = _alt2['default'].createActions(ProfileCenterActions);
module.exports = exports['default'];

},{"../alt":13}],10:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var SetActions = (function () {
    function SetActions() {
        _classCallCheck(this, SetActions);

        this.generateActions('changeProfileSuccess', 'changeProfileFail', 'getProfileSuccess', 'getProfileLocal', 'changeDomain', 'changeEmail', 'changeUserName', 'changeIntro', 'domainValidateFail', 'nameValidateFail', 'emailValidateFail', 'introValidateFail');
    }

    _createClass(SetActions, [{
        key: 'changeProfile',
        value: function changeProfile(domain, username, email, intro) {
            var _this = this;

            var localStorage = window.localStorage;
            var userProfile = localStorage.getItem('user');
            userProfile = JSON.parse(userProfile);
            var params = {
                where: { auth_id: userProfile.raw.auth_id },
                params: {
                    email: email,
                    domain: domain,
                    username: username,
                    introduce: intro
                }
            };
            $.ajax({
                url: '/api/user',
                type: 'put',
                cahce: 'false',
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
                url: '/api/session',
                type: 'post',
                cache: false
            }).done(function (data) {
                _this2.actions.getProfileSuccess(data);
            }).fail(function () {});
        }
    }]);

    return SetActions;
})();

exports['default'] = _alt2['default'].createActions(SetActions);
module.exports = exports['default'];

},{"../alt":13}],11:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var StarActions = (function () {
    function StarActions() {
        _classCallCheck(this, StarActions);

        this.generateActions('getStarSuccess');
    }

    _createClass(StarActions, [{
        key: 'getStar',
        value: function getStar() {
            var _this = this;

            var params = {
                arrayId: [56115100, 48561100]
            };
            params = JSON.stringify(params);
            $.ajax({
                url: '/api/getStar',
                cache: false,
                type: 'post',
                data: params,
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }).done(function (data) {
                _this.actions.getStarSuccess(data);
            }).fail(function (data) {
                toastr.error('链接出现问题');
            });
        }
    }]);

    return StarActions;
})();

exports['default'] = _alt2['default'].createActions(StarActions);
module.exports = exports['default'];

},{"../alt":13}],12:[function(require,module,exports){
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
        value: function getUser() {
            var _this = this;

            $.ajax({
                url: '/api/session',
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

},{"../alt":13}],13:[function(require,module,exports){
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

},{"alt":"alt"}],14:[function(require,module,exports){
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

},{"./Footer":17,"./Nav":20,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
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

var _underscore = require('underscore');

var _actionsFollowersActions = require('../actions/FollowersActions');

var _actionsFollowersActions2 = _interopRequireDefault(_actionsFollowersActions);

var _storesFollowersStore = require('../stores/FollowersStore');

var _storesFollowersStore2 = _interopRequireDefault(_storesFollowersStore);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var Followers = (function (_React$Component) {
    _inherits(Followers, _React$Component);

    function Followers(props) {
        _classCallCheck(this, Followers);

        _get(Object.getPrototypeOf(Followers.prototype), 'constructor', this).call(this, props);
        this.state = _storesFollowersStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Followers, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesFollowersStore2['default'].listen(this.onChange);
            var page = this.props.params.page;
            if (page === undefined) {
                page = 1;
            }
            _actionsFollowersActions2['default'].getFollowers(page);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
                _actionsFollowersActions2['default'].getFollowers(this.params.page);
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesFollowersStore2['default'].unlisten(this.onChange);
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
            _actionsFollowersActions2['default'].addFollow($self, auth_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var followers = this.state.followers.map(function (data, index) {
                return _react2['default'].createElement(
                    'div',
                    { key: data.auth_id, className: 'listgroup' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'media' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'position pull-left' },
                            index + 1
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/characters/' + data.auth_id },
                                _react2['default'].createElement('img', { className: 'media-object', src: data.avatar_url })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'media-body' },
                            _react2['default'].createElement(
                                'h4',
                                { className: 'media-heading followers-name' },
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/characters/' + data.auth_id },
                                    data.username
                                )
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: 'followers-intro' },
                                data.introduce
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'follow' },
                                _react2['default'].createElement('span', { className: 'fa fa-star-o' }),
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', 'data-self': data.auth_id.toString(), onClick: _this.handleClick.bind(_this, data.auth_id) },
                                    '关注'
                                )
                            )
                        )
                    )
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9' },
                followers,
                _react2['default'].createElement(_Pagination2['default'], null)
            );
        }
    }]);

    return Followers;
})(_react2['default'].Component);

exports['default'] = Followers;
module.exports = exports['default'];

},{"../actions/FollowersActions":1,"../stores/FollowersStore":31,"./Pagination":23,"react":"react","react-router":"react-router","underscore":"underscore"}],16:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
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

var _underscore = require('underscore');

var _actionsFollowingActions = require('../actions/FollowingActions');

var _actionsFollowingActions2 = _interopRequireDefault(_actionsFollowingActions);

var _storesFollowingStore = require('../stores/FollowingStore');

var _storesFollowingStore2 = _interopRequireDefault(_storesFollowingStore);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var Following = (function (_React$Component) {
    _inherits(Following, _React$Component);

    function Following(props) {
        _classCallCheck(this, Following);

        _get(Object.getPrototypeOf(Following.prototype), 'constructor', this).call(this, props);
        this.state = _storesFollowingStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Following, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesFollowingStore2['default'].listen(this.onChange);
            var page = this.props.params.page;
            if (page === undefined) {
                page = 1;
            }
            _actionsFollowingActions2['default'].getFollowing(page);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
                _actionsFollowingActions2['default'].getFollowing(this.params.page);
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesFollowingStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(_id) {
            var $self = $("[data-self=" + _id + "]");
            _actionsFollowingActions2['default'].unFollow($self, _id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var followers = this.state.following.map(function (data, index) {
                return _react2['default'].createElement(
                    'div',
                    { key: data.auth_id, className: 'listgroup' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'media' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'position pull-left' },
                            index + 1
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/characters/' + data.auth_id },
                                _react2['default'].createElement('img', { className: 'media-object', src: data.avatar_url })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'media-body' },
                            _react2['default'].createElement(
                                'h4',
                                { className: 'media-heading followers-name' },
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/characters/' + data.auth_id },
                                    data.username
                                )
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: 'followers-intro' },
                                data.introduce
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'follow' },
                                _react2['default'].createElement('span', { className: 'fa fa-star-o' }),
                                _react2['default'].createElement(
                                    'a',
                                    { href: 'javascript:;', 'data-self': data._id, onClick: _this.handleClick.bind(_this, data._id) },
                                    '取消关注'
                                )
                            )
                        )
                    )
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9' },
                followers,
                _react2['default'].createElement(_Pagination2['default'], null)
            );
        }
    }]);

    return Following;
})(_react2['default'].Component);

exports['default'] = Following;
module.exports = exports['default'];

},{"../actions/FollowingActions":2,"../stores/FollowingStore":32,"./Pagination":23,"react":"react","react-router":"react-router","underscore":"underscore"}],17:[function(require,module,exports){
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

},{"react":"react"}],18:[function(require,module,exports){
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

},{"../actions/HomeActions":3,"../stores/HomeStore":33,"react":"react"}],19:[function(require,module,exports){
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
                                    { htmlFor: 'login_email' },
                                    '邮箱'
                                ),
                                _react2['default'].createElement('input', { id: 'login_email', className: 'form-control ', ref: 'loginEmail', onChange: _actionsLoginActions2['default'].changeEmail, type: 'email', placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { htmlFor: 'login_pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'login_pwd', className: 'form-control ', ref: 'loginPwd', onChange: _actionsLoginActions2['default'].changePassword, type: 'password', placeholder: '密码' })
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
                                    { htmlFor: 'sign_email' },
                                    '邮箱'
                                ),
                                _react2['default'].createElement('input', { id: 'sign_email', className: 'form-control', ref: 'email', onChange: _actionsLoginActions2['default'].changeEmail, type: 'email', placeholder: '邮箱' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { htmlFor: 'sign_name' },
                                    '用户名'
                                ),
                                _react2['default'].createElement('input', { id: 'sign_name', className: 'form-control', ref: 'user', onChange: _actionsLoginActions2['default'].changeName, type: 'text', placeholder: '用户名' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { htmlFor: 'sign_pwd' },
                                    '密码'
                                ),
                                _react2['default'].createElement('input', { id: 'sign_pwd', className: 'form-control', max: '8', ref: 'password', onChange: _actionsLoginActions2['default'].changePassword, type: 'password', placeholder: '密码' })
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'form-group' },
                                _react2['default'].createElement(
                                    'label',
                                    { htmlFor: 'sign_pre_pwd' },
                                    '确认密码'
                                ),
                                _react2['default'].createElement('input', { id: 'sign_pre_pwd', className: 'form-control', max: '8', ref: 'prePassword', onChange: _actionsLoginActions2['default'].changePrePassword, type: 'password', placeholder: '密码' })
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

},{"../actions/LoginActions":4,"../stores/LoginStore":34,"react":"react"}],20:[function(require,module,exports){
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
                                    { href: '/profile', className: 'mon-user' },
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
                                    { href: '/profile/setting' },
                                    '设置'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    'a',
                                    { href: '/profile/notice' },
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

},{"../actions/NavActions":5,"../stores/NavStore":35,"react":"react"}],21:[function(require,module,exports){
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

},{"react":"react"}],22:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsNoticeActions = require('../actions/NoticeActions');

var _actionsNoticeActions2 = _interopRequireDefault(_actionsNoticeActions);

var _storesNoticeStore = require('../stores/NoticeStore');

var _storesNoticeStore2 = _interopRequireDefault(_storesNoticeStore);

var Notice = (function (_React$Component) {
    _inherits(Notice, _React$Component);

    function Notice(props) {
        _classCallCheck(this, Notice);

        _get(Object.getPrototypeOf(Notice.prototype), 'constructor', this).call(this, props);
        this.state = _storesNoticeStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Notice, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesNoticeStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesNoticeStore2['default'].unlisten(this.onChange);
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
                { className: 'col-md-9 col-sm-9' },
                'Toastr'
            );
        }
    }]);

    return Notice;
})(_react2['default'].Component);

exports['default'] = Notice;
module.exports = exports['default'];

},{"../actions/NoticeActions":6,"../stores/NoticeStore":36,"react":"react"}],23:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
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

var _actionsPaginationActions = require('../actions/PaginationActions');

var _actionsPaginationActions2 = _interopRequireDefault(_actionsPaginationActions);

var _storesPaginationStore = require('../stores/PaginationStore');

var _storesPaginationStore2 = _interopRequireDefault(_storesPaginationStore);

var Pagination = (function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).call(this, props);
        this.state = _storesPaginationStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Pagination, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesPaginationStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnMout',
        value: function componentWillUnMout() {
            _storesPaginationStore2['default'].unlisten(this.onChange);
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
                'nav',
                null,
                _react2['default'].createElement(
                    'ul',
                    { className: 'pagination' },
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '#', 'aria-label': 'Previous' },
                            _react2['default'].createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '«'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        { 'class': 'active' },
                        _react2['default'].createElement(
                            'a',
                            { href: '1' },
                            '1 ',
                            _react2['default'].createElement(
                                'span',
                                { className: 'sr-only' },
                                '(current)'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '2' },
                            '2'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '3' },
                            '3'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '4' },
                            '4'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '5' },
                            '5'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            'a',
                            { href: '' },
                            _react2['default'].createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '»'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Pagination;
})(_react2['default'].Component);

exports['default'] = Pagination;
module.exports = exports['default'];

},{"../actions/PaginationActions":7,"../stores/PaginationStore":37,"react":"react"}],24:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsPostAnimateActions = require('../actions/PostAnimateActions');

var _actionsPostAnimateActions2 = _interopRequireDefault(_actionsPostAnimateActions);

var _storesPostAnimateStore = require('../stores/PostAnimateStore');

var _storesPostAnimateStore2 = _interopRequireDefault(_storesPostAnimateStore);

var PostAnimate = (function (_React$Component) {
    _inherits(PostAnimate, _React$Component);

    function PostAnimate(props) {
        _classCallCheck(this, PostAnimate);

        _get(Object.getPrototypeOf(PostAnimate.prototype), 'constructor', this).call(this, props);
        this.state = _storesPostAnimateStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(PostAnimate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesPostAnimateStore2['default'].listen(this.onChange);
            _actionsPostAnimateActions2['default'].postAnimate();
            console.log('did mount');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            console.log('will update animate');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(preProps, prevState) {
            console.log('did update animate');
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesPostAnimateStore2['default'].unlisten(this.onChange);
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
                { className: 'col-md-9 col-sm-9' },
                '动漫投稿'
            );
        }
    }]);

    return PostAnimate;
})(_react2['default'].Component);

exports['default'] = PostAnimate;
module.exports = exports['default'];

},{"../actions/PostAnimateActions":8,"../stores/PostAnimateStore":38,"react":"react"}],25:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
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

var _actionsProfileCenterActions = require('../actions/ProfileCenterActions');

var _actionsProfileCenterActions2 = _interopRequireDefault(_actionsProfileCenterActions);

var _storesProfileCenterStore = require('../stores/ProfileCenterStore');

var _storesProfileCenterStore2 = _interopRequireDefault(_storesProfileCenterStore);

var ProfileCenter = (function (_React$Component) {
    _inherits(ProfileCenter, _React$Component);

    function ProfileCenter(props) {
        _classCallCheck(this, ProfileCenter);

        _get(Object.getPrototypeOf(ProfileCenter.prototype), 'constructor', this).call(this, props);
        this.state = _storesProfileCenterStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(ProfileCenter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesProfileCenterStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesProfileCenterStore2['default'].unlisten(this.onChange);
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
                { className: 'col-md-9 col-sm-9' },
                '个人用户中心'
            );
        }
    }]);

    return ProfileCenter;
})(_react2['default'].Component);

exports['default'] = ProfileCenter;
module.exports = exports['default'];

},{"../actions/ProfileCenterActions":9,"../stores/ProfileCenterStore":39,"react":"react"}],26:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsSetActions = require('../actions/SetActions');

var _actionsSetActions2 = _interopRequireDefault(_actionsSetActions);

var _storesSetStore = require('../stores/SetStore');

var _storesSetStore2 = _interopRequireDefault(_storesSetStore);

var Set = (function (_React$Component) {
    _inherits(Set, _React$Component);

    function Set(props) {
        _classCallCheck(this, Set);

        _get(Object.getPrototypeOf(Set.prototype), 'constructor', this).call(this, props);
        this.state = _storesSetStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Set, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesSetStore2['default'].listen(this.onChange);
            _actionsSetActions2['default'].getProfile();
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesSetStore2['default'].unlisten(this.onChange);
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
                intro = this.state.intro;
            var error = false;

            console.log(intro);

            var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
                regDomain = /^[0-9a-zA-Z-]{1,20}$/;

            if (!regEmail.test(email)) {
                _actionsSetActions2['default'].emailValidateFail(1);
                error = true;
            } else {
                _actionsSetActions2['default'].emailValidateFail(0);
            }
            if (username.length > 15 || username === '') {
                _actionsSetActions2['default'].nameValidateFail(1);
                error = true;
            } else {
                _actionsSetActions2['default'].nameValidateFail(0);
            }
            if (!regDomain.test(domain)) {
                _actionsSetActions2['default'].domainValidateFail(1);
                error = true;
            } else {
                _actionsSetActions2['default'].domainValidateFail(0);
            }

            if (!error) {
                _actionsSetActions2['default'].changeProfile(domain, username, email, intro);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var account = undefined;
            switch (this.state.account) {
                case 1:
                    account = _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-10 mon-account' },
                        _react2['default'].createElement('span', { className: 'fa fa-github' })
                    );
                    break;
                case 2:
                    account = _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-10 mon-account' },
                        _react2['default'].createElement('span', { className: 'fa fa-facebook' })
                    );
                    break;
                case 3:
                    account = _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-10 mon-account' },
                        _react2['default'].createElement('span', { className: 'fa fa-weibo' })
                    );
                    break;
                default:
                    account = _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-10 mon-account' },
                        _react2['default'].createElement(
                            'a',
                            { href: '/auth/github' },
                            _react2['default'].createElement('span', { className: 'fa fa-github' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: '/auth/facebook' },
                            _react2['default'].createElement('span', { className: 'fa fa-facebook' })
                        ),
                        _react2['default'].createElement(
                            'a',
                            { href: '/auth/weibo' },
                            _react2['default'].createElement('span', { className: 'fa fa-weibo' })
                        )
                    );

            }
            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9' },
                _react2['default'].createElement(
                    'legend',
                    null,
                    '设置'
                ),
                _react2['default'].createElement(
                    'form',
                    { className: 'form-horizontal', role: 'form' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group ' + this.state.domainValidate },
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'individuality_domain', className: 'col-sm-2 control-label' },
                            '个性域名'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'text', id: 'individuality_domain', className: 'form-control', onChange: _actionsSetActions2['default'].changeDomain, placeholder: '数字，英文，破折线', value: this.state.domain }),
                            _react2['default'].createElement(
                                'span',
                                { className: this.state.domainValidate === '' ? 'hide' : 'text-danger' },
                                '*个性域名格式错误或太长'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group ' + this.state.nameValidate },
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'individuality_username', className: 'col-sm-2 control-label' },
                            '用户名'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'text', id: 'individuality_username', className: 'form-control', onChange: _actionsSetActions2['default'].changeUserName, placeholder: '长度不超过10', value: this.state.username, max: '15' }),
                            _react2['default'].createElement(
                                'span',
                                { className: this.state.nameValidate === '' ? 'hide' : 'text-danger' },
                                '*用户名不能为空或是超过15个字'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group ' + this.state.emailValidate },
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'individuality_email', className: 'col-sm-2 control-label' },
                            '邮箱'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('input', { type: 'email', id: 'individuality_email', className: 'form-control', onChange: _actionsSetActions2['default'].changeEmail, placeholder: 'example@example.com', value: this.state.email }),
                            _react2['default'].createElement(
                                'span',
                                { className: this.state.emailValidate === '' ? 'hide' : 'text-danger' },
                                '*邮箱格式错误'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group ' + this.state.introValidate },
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'individuality_intro', className: 'col-sm-2 control-label' },
                            '个人简介'
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-10' },
                            _react2['default'].createElement('textarea', { type: 'email', id: 'individuality_intro', className: 'form-control', onChange: _actionsSetActions2['default'].changeIntro, placeholder: '留下你的宝贝简介吧', rows: '3', value: this.state.intro }),
                            _react2['default'].createElement(
                                'span',
                                { className: this.state.introValidate === '' ? 'hide' : 'text-danger' },
                                '*简介字数超出50'
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'fomr-group' },
                        _react2['default'].createElement(
                            'label',
                            { htmlFor: 'individuality_account', className: 'col-sm-2 control-label' },
                            this.state.account === 0 ? "绑定社交账号" : "已绑定的账号"
                        ),
                        account
                    ),
                    _react2['default'].createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-primary pull-right', onClick: this.handleClick.bind(this) },
                        '保存设置'
                    )
                )
            );
        }
    }]);

    return Set;
})(_react2['default'].Component);

exports['default'] = Set;
module.exports = exports['default'];

},{"../actions/SetActions":10,"../stores/SetStore":40,"react":"react"}],27:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsStarActions = require('../actions/StarActions');

var _actionsStarActions2 = _interopRequireDefault(_actionsStarActions);

var _storesStarStore = require('../stores/StarStore');

var _storesStarStore2 = _interopRequireDefault(_storesStarStore);

var Star = (function (_React$Component) {
    _inherits(Star, _React$Component);

    function Star(props) {
        _classCallCheck(this, Star);

        _get(Object.getPrototypeOf(Star.prototype), 'constructor', this).call(this, props);
        this.state = _storesStarStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Star, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesStarStore2['default'].listen(this.onChange);
            _actionsStarActions2['default'].getStar();
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesStarStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('div', { className: 'col-md-9 col-sm-9' });
        }
    }]);

    return Star;
})(_react2['default'].Component);

exports['default'] = Star;
module.exports = exports['default'];

},{"../actions/StarActions":11,"../stores/StarStore":41,"react":"react"}],28:[function(require,module,exports){
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
            _actionsUserActions2['default'].getUser();
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
            var content = undefined;
            if (this.state.auth) {
                content = _react2['default'].createElement(
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
                                { to: '/profile/followers' },
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
                                { to: '/profile/following' },
                                _react2['default'].createElement(
                                    'a',
                                    { className: 'mon-link' },
                                    _react2['default'].createElement(
                                        'span',
                                        null,
                                        this.state.following
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
                                { to: '/profile/contribute' },
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
                                    _reactRouter.Link,
                                    { to: '/profile/setting' },
                                    _react2['default'].createElement('span', { className: 'fa fa-cog' }),
                                    '设置'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/profile/center' },
                                    _react2['default'].createElement('span', { className: 'fa fa-user' }),
                                    '中心'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                null,
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/profile/star' },
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
                                            _reactRouter.Link,
                                            { to: '/post/animate' },
                                            _react2['default'].createElement('span', { className: 'fa fa-video-camera' }),
                                            '动漫'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'li',
                                        null,
                                        _react2['default'].createElement(
                                            _reactRouter.Link,
                                            { to: '/post/music' },
                                            _react2['default'].createElement('span', { className: 'fa fa-music' }),
                                            '音乐'
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'li',
                                        null,
                                        _react2['default'].createElement(
                                            _reactRouter.Link,
                                            { to: '/post/article' },
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
                                    _reactRouter.Link,
                                    { to: '/profile/notice' },
                                    _react2['default'].createElement('span', { className: 'fa fa-bell' }),
                                    '通知'
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(_reactRouter.RouteHandler, null)
                );
            } else {
                content = _react2['default'].createElement('div', null);
            }

            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                content
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

},{"../actions/UserActions":12,"../stores/UserStore":42,"react":"react","react-router":"react-router"}],29:[function(require,module,exports){
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

},{"./routes":30,"react":"react","react-router":"react-router"}],30:[function(require,module,exports){
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

var _componentsSet = require('./components/Set');

var _componentsSet2 = _interopRequireDefault(_componentsSet);

var _componentsNotice = require('./components/Notice');

var _componentsNotice2 = _interopRequireDefault(_componentsNotice);

var _componentsStar = require('./components/Star');

var _componentsStar2 = _interopRequireDefault(_componentsStar);

var _componentsNotFound = require('./components/NotFound');

var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

var _componentsPostAnimate = require('./components/PostAnimate');

var _componentsPostAnimate2 = _interopRequireDefault(_componentsPostAnimate);

var _componentsProfileCenter = require('./components/ProfileCenter');

var _componentsProfileCenter2 = _interopRequireDefault(_componentsProfileCenter);

var _componentsFollowers = require('./components/Followers');

var _componentsFollowers2 = _interopRequireDefault(_componentsFollowers);

var _componentsFollowing = require('./components/Following');

var _componentsFollowing2 = _interopRequireDefault(_componentsFollowing);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: 'profile', handler: _componentsUser2['default'] },
        _react2['default'].createElement(_reactRouter.Route, { path: 'setting', handler: _componentsSet2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: 'center', handler: _componentsProfileCenter2['default'] }),
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: 'followers', handler: _componentsFollowers2['default'] },
            _react2['default'].createElement(_reactRouter.Route, { path: ':page', handler: _componentsFollowers2['default'] })
        ),
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: 'following', handler: _componentsFollowing2['default'] },
            _react2['default'].createElement(_reactRouter.Route, { path: ':page', handler: _componentsFollowing2['default'] })
        ),
        _react2['default'].createElement(_reactRouter.Route, { path: 'contribute', handler: _componentsUser2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: 'notice', handler: _componentsNotice2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: 'star', handler: _componentsStar2['default'] }),
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/post' },
            _react2['default'].createElement(_reactRouter.Route, { path: 'animate', handler: _componentsPostAnimate2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'music' }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'article' })
        )
    ),
    _react2['default'].createElement(_reactRouter.Route, { path: '*', handler: _componentsNotFound2['default'] })
);
module.exports = exports['default'];

},{"./components/App":14,"./components/Followers":15,"./components/Following":16,"./components/Home":18,"./components/Login":19,"./components/NotFound":21,"./components/Notice":22,"./components/PostAnimate":24,"./components/ProfileCenter":25,"./components/Set":26,"./components/Star":27,"./components/User":28,"react":"react","react-router":"react-router"}],31:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
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

var _actionsFollowersActions = require('../actions/FollowersActions');

var _actionsFollowersActions2 = _interopRequireDefault(_actionsFollowersActions);

var FollowersStore = (function () {
    function FollowersStore() {
        _classCallCheck(this, FollowersStore);

        this.bindActions(_actionsFollowersActions2['default']);
        this.followers = [];
    }

    _createClass(FollowersStore, [{
        key: 'onGetFollowersSuccess',
        value: function onGetFollowersSuccess(data) {
            var _this = this;

            if (data.code === 200) {
                data.raw.map(function (obj) {
                    _this.followers.push(obj);
                });
            }
        }
    }, {
        key: 'onChangeFollowId',
        value: function onChangeFollowId(event) {
            this.followId = event.target.value;
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
                    break;
                case 304:
                    toastr.warning('你已经关注过这个用户');
                    break;
                case 404:
                    toastr.error('关注的用户不存在');
                    break;
            }
        }
    }]);

    return FollowersStore;
})();

exports['default'] = _alt2['default'].createStore(FollowersStore);
module.exports = exports['default'];

},{"../actions/FollowersActions":1,"../alt":13}],32:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
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

var _actionsFollowingActions = require('../actions/FollowingActions');

var _actionsFollowingActions2 = _interopRequireDefault(_actionsFollowingActions);

var FollowingStore = (function () {
    function FollowingStore() {
        _classCallCheck(this, FollowingStore);

        this.bindActions(_actionsFollowingActions2['default']);
        this.following = [];
    }

    _createClass(FollowingStore, [{
        key: 'onGetFollowingSuccess',
        value: function onGetFollowingSuccess(data) {
            var _this = this;

            console.log(data);
            if (data.code === 200) {
                data.raw.map(function (obj) {
                    _this.following.push(obj);
                });
            }
        }
    }, {
        key: 'onChangeFollowId',
        value: function onChangeFollowId(event) {
            this.followId = event.target.value;
        }

        /**
         * 添加关注
         * @param data {type : [$self,data]}
         */
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

    return FollowingStore;
})();

exports['default'] = _alt2['default'].createStore(FollowingStore);
module.exports = exports['default'];

},{"../actions/FollowingActions":2,"../alt":13}],33:[function(require,module,exports){
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

},{"../actions/HomeActions":3,"../alt":13}],34:[function(require,module,exports){
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
                var _localStorage = window.localStorage;
                _localStorage.setItem('user', JSON.stringify(data));
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

},{"../actions/LoginActions":4,"../alt":13}],35:[function(require,module,exports){
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
                var _localStorage = window.localStorage;
                _localStorage.setItem('user', '');
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

},{"../actions/NavActions":5,"../alt":13}],36:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsNoticeActions = require('../actions/NoticeActions');

var _actionsNoticeActions2 = _interopRequireDefault(_actionsNoticeActions);

var NoticeStore = (function () {
    function NoticeStore() {
        _classCallCheck(this, NoticeStore);

        this.bindActions(_actionsNoticeActions2['default']);
    }

    _createClass(NoticeStore, [{
        key: 'onGetToastrSuccess',
        value: function onGetToastrSuccess() {
            toastr.success('hehe');
        }
    }]);

    return NoticeStore;
})();

exports['default'] = _alt2['default'].createStore(NoticeStore);
module.exports = exports['default'];

},{"../actions/NoticeActions":6,"../alt":13}],37:[function(require,module,exports){
/**
 * Created by apache on 15-11-2.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsPaginationActions = require('../actions/PaginationActions');

var _actionsPaginationActions2 = _interopRequireDefault(_actionsPaginationActions);

var PaginationStore = function PaginationStore() {
    _classCallCheck(this, PaginationStore);

    this.bindActions(_actionsPaginationActions2['default']);
};

exports['default'] = _alt2['default'].createStore(PaginationStore);
module.exports = exports['default'];

},{"../actions/PaginationActions":7,"../alt":13}],38:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsPostAnimateActions = require('../actions/PostAnimateActions');

var _actionsPostAnimateActions2 = _interopRequireDefault(_actionsPostAnimateActions);

var PostAnimateStore = (function () {
    function PostAnimateStore() {
        _classCallCheck(this, PostAnimateStore);

        this.bindActions(_actionsPostAnimateActions2['default']);
    }

    _createClass(PostAnimateStore, [{
        key: 'onPostAnimateSuccess',
        value: function onPostAnimateSuccess() {
            console.log('post animate success');
        }
    }]);

    return PostAnimateStore;
})();

exports['default'] = _alt2['default'].createStore(PostAnimateStore);
module.exports = exports['default'];

},{"../actions/PostAnimateActions":8,"../alt":13}],39:[function(require,module,exports){
/**
 * Created by apache on 15-11-1.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsProfileCenterActions = require('../actions/ProfileCenterActions');

var _actionsProfileCenterActions2 = _interopRequireDefault(_actionsProfileCenterActions);

var ProfileCenterStore = function ProfileCenterStore() {
    _classCallCheck(this, ProfileCenterStore);

    this.bindActions(_actionsProfileCenterActions2['default']);
};

exports['default'] = _alt2['default'].createStore(ProfileCenterStore);
module.exports = exports['default'];

},{"../actions/ProfileCenterActions":9,"../alt":13}],40:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsSetActions = require('../actions/SetActions');

var _actionsSetActions2 = _interopRequireDefault(_actionsSetActions);

var SetStore = (function () {
    function SetStore() {
        _classCallCheck(this, SetStore);

        this.bindActions(_actionsSetActions2['default']);
        this.username = '';
        this.domain = '';
        this.email = '';
        this.account;
        this.intro = '';
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
            } else if (data.code === 400) {
                toastr.warning('修改用户资料不成功');
                console.log(data);
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
                this.username = data.raw.username;
                this.domain = data.raw.domain;
                this.email = data.raw.email;
                this.account = data.raw.account;
                this.intro = data.raw.introduce;
            }
        }
    }, {
        key: 'onGetProfileLocal',
        value: function onGetProfileLocal(data) {
            this.username = data.raw.username;
            this.domain = data.raw.domain;
            this.email = data.raw.email;
            this.account = data.raw.account;
            this.intro = data.raw.introduce;
        }
    }, {
        key: 'onProfileFail',
        value: function onProfileFail() {
            toastr.error('hehe');
        }
    }, {
        key: 'onChangeDomain',
        value: function onChangeDomain(event) {
            console.log('heh');
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
})();

exports['default'] = _alt2['default'].createStore(SetStore);
module.exports = exports['default'];

},{"../actions/SetActions":10,"../alt":13}],41:[function(require,module,exports){
/**
 * Created by apache on 15-10-30.
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

var _actionsStarActions = require('../actions/StarActions');

var _actionsStarActions2 = _interopRequireDefault(_actionsStarActions);

var StarStore = (function () {
    function StarStore() {
        _classCallCheck(this, StarStore);

        this.bindActions(_actionsStarActions2['default']);
    }

    _createClass(StarStore, [{
        key: 'onGetStarSuccess',
        value: function onGetStarSuccess(data) {
            console.log(data);
        }
    }]);

    return StarStore;
})();

exports['default'] = _alt2['default'].createStore(StarStore);
module.exports = exports['default'];

},{"../actions/StarActions":11,"../alt":13}],42:[function(require,module,exports){
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
        this.auth = false;
    }

    _createClass(UserStore, [{
        key: 'onGetUserSuccess',
        value: function onGetUserSuccess(data) {
            if (data.code === 200) {
                this.auth = true;
                this.username = data.raw.username;
                this.avatar_url = data.raw.avatar_url;
                this.followers = data.raw.followers.length;
                this.following = data.raw.following.length;
                this.contribute = data.raw.contribute.length;
                this.star = data.raw.star.length;
                this.doamin = data.raw.domain;
            } else {
                window.location = '/login';
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

},{"../actions/UserActions.js":12,"../alt":13}]},{},[29]);
