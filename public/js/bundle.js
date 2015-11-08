(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var ArticleActions = (function () {
    function ArticleActions() {
        _classCallCheck(this, ArticleActions);

        this.generateActions('getArticleSuccess');
    }

    _createClass(ArticleActions, [{
        key: 'getArticle',
        value: function getArticle(id) {
            var _this = this;

            $.ajax({
                url: '/api/getArticle',
                type: 'post',
                data: { id: id },
                cache: false
            }).done(function (data) {
                _this.actions.getArticleSuccess(data);
            }).fail(function () {
                toastr.error('获取文章失败');
            });
        }
    }]);

    return ArticleActions;
})();

exports['default'] = _alt2['default'].createActions(ArticleActions);
module.exports = exports['default'];

},{"../alt":17}],2:[function(require,module,exports){
/**
 * Created by apache on 15-11-8.
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

var CommentActions = (function () {
    function CommentActions() {
        _classCallCheck(this, CommentActions);

        this.generateActions('getCommentSuccess', 'postCommentSuccess', 'changeComment', 'changeSkip');
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
        value: function postComment(params) {
            var _this2 = this;

            $.ajax({
                url: '/api/comment',
                type: 'put',
                contentType: 'application/json;charset=utf-8',
                dataType: 'json',
                cache: false,
                data: JSON.stringify({ params: params })
            }).done(function (data) {
                _this2.actions.postCommentSuccess(data);
            }).fail(function () {
                toastr.warning('评论不成功');
            });
        }
    }]);

    return CommentActions;
})();

exports['default'] = _alt2['default'].createActions(CommentActions);
module.exports = exports['default'];

},{"../alt":17}],3:[function(require,module,exports){
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

var ContributeActions = function ContributeActions() {
    _classCallCheck(this, ContributeActions);

    this.generateActions();
};

exports['default'] = _alt2['default'].createActions(ContributeActions);
module.exports = exports['default'];

},{"../alt":17}],4:[function(require,module,exports){
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

},{"../alt":17}],5:[function(require,module,exports){
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
                toastr.warning('取消关注者失败');
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

},{"../alt":17}],6:[function(require,module,exports){
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

},{"../alt":17}],7:[function(require,module,exports){
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

},{"../alt":17}],8:[function(require,module,exports){
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

},{"../alt":17}],9:[function(require,module,exports){
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

},{"../alt":17}],10:[function(require,module,exports){
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

},{"../alt":17}],11:[function(require,module,exports){
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

},{"../alt":17}],12:[function(require,module,exports){
/**
 * Created by apache on 15-11-3.
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

var PostArticleActions = (function () {
    function PostArticleActions() {
        _classCallCheck(this, PostArticleActions);

        this.generateActions('changeTitle', 'changeAbbreviations', 'changeTag', 'changeContent', 'changeSummary', 'postArticleSuccess');
    }

    _createClass(PostArticleActions, [{
        key: 'postArticle',
        value: function postArticle(title, summary, tags, abbreviations, content) {
            var _this = this;

            var localStorage = window.localStorage,
                userProfile = localStorage.getItem('user');
            userProfile = JSON.parse(userProfile);
            var params = {
                params: {
                    title: title,
                    summary: summary,
                    tags: tags,
                    abbreviations: abbreviations,
                    content: content,
                    create_user_id: userProfile.raw._id,
                    create_user_name: userProfile.raw.username,
                    create_time: Math.round(new Date().getTime() / 1000)
                }
            };

            $.ajax({
                url: '/api/article',
                type: 'post',
                dataType: 'json',
                cache: false,
                contentType: 'application/json;charset=utf-8',
                data: JSON.stringify(params)
            }).done(function (data) {
                _this.actions.postArticleSuccess(data);
            }).fail(function () {
                toastr.error('发表文章不成功');
            });
        }
    }]);

    return PostArticleActions;
})();

exports['default'] = _alt2['default'].createActions(PostArticleActions);
module.exports = exports['default'];

},{"../alt":17}],13:[function(require,module,exports){
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

},{"../alt":17}],14:[function(require,module,exports){
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

},{"../alt":17}],15:[function(require,module,exports){
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

},{"../alt":17}],16:[function(require,module,exports){
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

},{"../alt":17}],17:[function(require,module,exports){
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

},{"alt":"alt"}],18:[function(require,module,exports){
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

},{"./Footer":24,"./Nav":27,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
/**
 * Created by apache on 15-11-4.
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

var _actionsArticleActions = require('../actions/ArticleActions');

var _actionsArticleActions2 = _interopRequireDefault(_actionsArticleActions);

var _storesArticleStore = require('../stores/ArticleStore');

var _storesArticleStore2 = _interopRequireDefault(_storesArticleStore);

var _markdown = require('markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var Article = (function (_React$Component) {
    _inherits(Article, _React$Component);

    function Article(props) {
        _classCallCheck(this, Article);

        _get(Object.getPrototypeOf(Article.prototype), 'constructor', this).call(this, props);
        this.state = _storesArticleStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Article, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesArticleStore2['default'].listen(this.onChange);
            _actionsArticleActions2['default'].getArticle(this.props.params.id);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesArticleStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
                _actionsArticleActions2['default'].getArticle(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            var markdown = _markdown2['default'].markdown;
            var content = markdown.toHTML(this.state.content);
            this.refs.content.getDOMNode().innerHTML = content;
        }
    }, {
        key: 'render',
        value: function render() {
            var tags = this.state.tags.map(function (data, index) {
                return _react2['default'].createElement(
                    'span',
                    { key: index, className: 'mon-article-tag' },
                    data
                );
            });

            var recommends = this.state.recommends.map(function (data, index) {
                return _react2['default'].createElement(
                    'li',
                    { key: index },
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/article/' + data._id },
                        _react2['default'].createElement(
                            'a',
                            { href: 'javascript:;', className: 'mon-re-item', title: data.title },
                            data.title
                        )
                    )
                );
            });
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'raw animated fadeInUp' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-8 col-sm-8 mon-article' },
                        _react2['default'].createElement(
                            'p',
                            { className: 'mon-article-title' },
                            this.state.title
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mon-article-detail' },
                            _react2['default'].createElement(
                                'a',
                                { href: '/u/' + this.state.createUserDomain },
                                _react2['default'].createElement('img', { src: this.state.createUserAvatar, alt: 'loading', width: '40' })
                            ),
                            _react2['default'].createElement(
                                'a',
                                { href: '/u/' + this.state.createUserDomain },
                                this.state.createUser
                            ),
                            _react2['default'].createElement(
                                'span',
                                null,
                                '|'
                            ),
                            _react2['default'].createElement(
                                'span',
                                null,
                                this.state.createTime
                            )
                        ),
                        _react2['default'].createElement(
                            'p',
                            { className: 'bg-success mon-article-summary' },
                            this.state.summary
                        ),
                        _react2['default'].createElement('div', { ref: 'content', className: 'mon-article-content' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'mon-article-tags' },
                            tags
                        ),
                        _react2['default'].createElement(_Comment2['default'], { id: this.props.params.id })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-4 col-sm-4 mon-offset' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-body media' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'media-left' },
                                    _react2['default'].createElement(
                                        'a',
                                        { href: '/u/' + this.state.createUserDomain, className: 'mon-article-user' },
                                        _react2['default'].createElement('img', { src: this.state.createUserAvatar, alt: 'loading' })
                                    )
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'media-body' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'media-heading' },
                                        _react2['default'].createElement(
                                            'a',
                                            { href: '/u/' + this.state.createUserDomain, className: 'mon-user-name' },
                                            this.state.createUser
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        this.state.createUserIntro
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'panel panel-info' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-heading' },
                                '推荐文章'
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'mon-recommend' },
                                recommends
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Article;
})(_react2['default'].Component);

exports['default'] = Article;
module.exports = exports['default'];

},{"../actions/ArticleActions":1,"../stores/ArticleStore":39,"./Comment":20,"markdown":59,"react":"react","react-router":"react-router","underscore":"underscore"}],20:[function(require,module,exports){
/**
 * Created by apache on 15-11-8.
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

var _underscore = require('underscore');

var _reactRouter = require('react-router');

var _actionsCommentActions = require('../actions/CommentActions');

var _actionsCommentActions2 = _interopRequireDefault(_actionsCommentActions);

var _storesCommentStore = require('../stores/CommentStore');

var _storesCommentStore2 = _interopRequireDefault(_storesCommentStore);

var Comment = (function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment(props) {
        _classCallCheck(this, Comment);

        _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this, props);
        this.state = _storesCommentStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Comment, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesCommentStore2['default'].listen(this.onChange);
            _actionsCommentActions2['default'].getComment(this.props.id, 0);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            //　判断是不是更改了文章
            if (prevProps.id !== this.props.id) {
                _actionsCommentActions2['default'].getComment(this.props.id, 0);
            }
        }
    }, {
        key: 'ComponentWillUnMount',
        value: function ComponentWillUnMount() {
            _storesCommentStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var params = {
                content: this.state.comment,
                create_time: new Date().getTime(),
                type: 'article',
                con_id: this.props.id
            };

            _actionsCommentActions2['default'].postComment(params);
        }
    }, {
        key: 'getComment',
        value: function getComment(option) {
            if (option === 0) {
                _actionsCommentActions2['default'].changeSkip(0);
                console.log(this.state.skip);
                _actionsCommentActions2['default'].getComment(this.props.id, this.state.skip - 10);
            } else {
                _actionsCommentActions2['default'].changeSkip(1);
                console.log(this.state.skip);
                _actionsCommentActions2['default'].getComment(this.props.id, this.state.skip + 10);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var CommentList = undefined;
            if (this.state.commentList.length > 0) {
                CommentList = this.state.commentList.map(function (data) {
                    return _react2['default'].createElement(
                        'li',
                        { key: data.comment._id, className: 'clearfix mon-comment-item' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-1' },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/u/' + data.user.domain },
                                _react2['default'].createElement('img', { src: data.user.avatar_url, alt: 'loading', width: '40' })
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-11' },
                            _react2['default'].createElement(
                                'div',
                                null,
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/u/' + data.user.domain, className: 'mon-user-name' },
                                    data.user.username
                                ),
                                _react2['default'].createElement(
                                    'span',
                                    { className: 'pull-right' },
                                    new Date(data.comment.create_time).toLocaleDateString()
                                )
                            ),
                            _react2['default'].createElement(
                                'article',
                                null,
                                data.comment.content
                            )
                        )
                    );
                });
            } else {
                CommentList = _react2['default'].createElement(
                    'p',
                    { className: 'text-danger' },
                    '没有评论了'
                );
            }

            return _react2['default'].createElement(
                'div',
                { className: 'row mon-comment' },
                _react2['default'].createElement(
                    'form',
                    { role: 'form' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement('textarea', { name: 'comment', className: 'form-control', rows: '5', placeholder: '输入你的大评吧！！！', onChange: _actionsCommentActions2['default'].changeComment })
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group clearfix' },
                        _react2['default'].createElement(
                            'a',
                            { href: 'javascript:;', className: 'btn btn-info pull-right', onClick: this.handleClick.bind(this) },
                            '保存评论'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'p',
                    { className: 'mon-comment-title' },
                    '评论列表'
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'mon-comment-list' },
                    CommentList
                ),
                _react2['default'].createElement(
                    'a',
                    { href: 'javascript:;', className: 'btn mon-page mon-prev-page', onClick: this.getComment.bind(this, 0) },
                    _react2['default'].createElement('span', { className: 'fa fa-long-arrow-left' })
                ),
                _react2['default'].createElement(
                    'a',
                    { href: 'javascript:;', className: 'btn mon-page mon-next-page', onClick: this.getComment.bind(this, 1) },
                    _react2['default'].createElement('span', { className: 'fa fa-long-arrow-right' })
                )
            );
        }
    }]);

    return Comment;
})(_react2['default'].Component);

exports['default'] = Comment;
module.exports = exports['default'];

},{"../actions/CommentActions":2,"../stores/CommentStore":40,"react":"react","react-router":"react-router","underscore":"underscore"}],21:[function(require,module,exports){
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

var _actionsContributeActions = require('../actions/ContributeActions');

var _actionsContributeActions2 = _interopRequireDefault(_actionsContributeActions);

var _storesContributeStore = require('../stores/ContributeStore');

var _storesContributeStore2 = _interopRequireDefault(_storesContributeStore);

var Contribute = (function (_React$Component) {
    _inherits(Contribute, _React$Component);

    function Contribute(props) {
        _classCallCheck(this, Contribute);

        _get(Object.getPrototypeOf(Contribute.prototype), 'constructor', this).call(this, props);
        this.state = _storesContributeStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Contribute, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesContributeStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesContributeStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var Contributes = undefined;
            if (this.state.contributes.length === 0) {
                Contributes = _react2['default'].createElement(
                    'p',
                    { className: 'bg-danger mon-padding' },
                    '我还没有分享任何东西'
                );
            } else {
                Contributes = this.state.contributes.map(function (data, index) {});
            }
            return _react2['default'].createElement(
                'div',
                { className: 'col-sm-9 col-md-9 animated fadeInUp' },
                _react2['default'].createElement(
                    'p',
                    { className: 'bg-success mon-padding mon-bg-title' },
                    '我的贡献分享'
                ),
                Contributes
            );
        }
    }]);

    return Contribute;
})(_react2['default'].Component);

exports['default'] = Contribute;
module.exports = exports['default'];

},{"../actions/ContributeActions":3,"../stores/ContributeStore":41,"react":"react"}],22:[function(require,module,exports){
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

            var followers = undefined;
            if (this.state.followers.length === 0) {
                followers = _react2['default'].createElement(
                    'p',
                    { className: 'bg-danger mon-padding' },
                    '还没有人关注我'
                );
            } else {
                followers = this.state.followers.map(function (data, index) {
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
            }

            var pagination = this.state.followers.length !== 0 ? _react2['default'].createElement(_Pagination2['default'], null) : null;
            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
                _react2['default'].createElement(
                    'p',
                    { className: 'bg-success mon-padding mon-bg-title' },
                    '关注我的'
                ),
                followers,
                pagination
            );
        }
    }]);

    return Followers;
})(_react2['default'].Component);

exports['default'] = Followers;
module.exports = exports['default'];

},{"../actions/FollowersActions":4,"../stores/FollowersStore":42,"./Pagination":30,"react":"react","react-router":"react-router","underscore":"underscore"}],23:[function(require,module,exports){
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

            var following = undefined;
            if (this.state.following.length === 0) {
                following = _react2['default'].createElement(
                    'p',
                    { className: 'bg-danger mon-padding' },
                    '这家伙还没有关注任何人'
                );
            } else {
                following = this.state.following.map(function (data, index) {
                    return _react2['default'].createElement(
                        'div',
                        { key: data._id, className: 'listgroup' },
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
            }

            var pagination = this.state.following.length !== 0 ? _react2['default'].createElement(_Pagination2['default'], null) : null;

            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
                _react2['default'].createElement(
                    'p',
                    { className: 'bg-success mon-padding mon-bg-title' },
                    '我关注的'
                ),
                following,
                pagination
            );
        }
    }]);

    return Following;
})(_react2['default'].Component);

exports['default'] = Following;
module.exports = exports['default'];

},{"../actions/FollowingActions":5,"../stores/FollowingStore":43,"./Pagination":30,"react":"react","react-router":"react-router","underscore":"underscore"}],24:[function(require,module,exports){
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

},{"react":"react"}],25:[function(require,module,exports){
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

},{"../actions/HomeActions":6,"../stores/HomeStore":44,"react":"react"}],26:[function(require,module,exports){
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

},{"../actions/LoginActions":7,"../stores/LoginStore":45,"react":"react"}],27:[function(require,module,exports){
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

},{"../actions/NavActions":8,"../stores/NavStore":46,"react":"react"}],28:[function(require,module,exports){
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

},{"react":"react"}],29:[function(require,module,exports){
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

},{"../actions/NoticeActions":9,"../stores/NoticeStore":47,"react":"react"}],30:[function(require,module,exports){
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
                        { className: 'active' },
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

},{"../actions/PaginationActions":10,"../stores/PaginationStore":48,"react":"react"}],31:[function(require,module,exports){
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

},{"../actions/PostAnimateActions":11,"../stores/PostAnimateStore":49,"react":"react"}],32:[function(require,module,exports){
/**
 * Created by apache on 15-11-3.
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

var _actionsPostArticleActions = require('../actions/PostArticleActions');

var _actionsPostArticleActions2 = _interopRequireDefault(_actionsPostArticleActions);

var _storesPostArticleStore = require('../stores/PostArticleStore');

var _storesPostArticleStore2 = _interopRequireDefault(_storesPostArticleStore);

var _markdown = require('markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var PostArticle = (function (_React$Component) {
    _inherits(PostArticle, _React$Component);

    function PostArticle(props) {
        _classCallCheck(this, PostArticle);

        _get(Object.getPrototypeOf(PostArticle.prototype), 'constructor', this).call(this, props);
        this.state = _storesPostArticleStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(PostArticle, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesPostArticleStore2['default'].listen(this.onChange);
            this.refs.title.getDOMNode().focus();
            var localStorage = window.localStorage;
            var postArticle = localStorage.getItem('postArticle');
            postArticle = JSON.parse(postArticle);
            if (postArticle.post !== undefined && postArticle.post === false) {
                toastr.warning('是否加载保存的稿件');
            }
            var markdown = _markdown2['default'].markdown;
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
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            _storesPostArticleStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            console.log(this.state.summary);
            console.log(this.state.content);
            _actionsPostArticleActions2['default'].postArticle(this.state.title, this.state.summary, this.state.tag, this.state.abbreviations, this.state.content);
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
                abbreviations: this.state.abbreviations,
                post: false
            };
            localStorage.setItem('postArticle', JSON.stringify(article));
            toastr.success('保存稿件成功');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
                _react2['default'].createElement(
                    'p',
                    { className: 'bg-success mon-padding mon-bg-title' },
                    '文章投稿'
                ),
                _react2['default'].createElement(
                    'form',
                    { className: 'form-horizontal' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-1' },
                            _react2['default'].createElement(
                                'label',
                                { className: 'label label-default', htmlFor: 'title' },
                                '文章标题'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-11' },
                            _react2['default'].createElement('input', { type: 'email', className: 'form-control', id: 'title', ref: 'title', onChange: _actionsPostArticleActions2['default'].changeTitle, placeholder: '文章标题' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-1' },
                            _react2['default'].createElement(
                                'label',
                                { className: 'label label-default', htmlFor: 'tag' },
                                '文章标签'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-11' },
                            _react2['default'].createElement('input', { type: 'text', className: 'form-control', id: 'tag', ref: 'tag', onChange: _actionsPostArticleActions2['default'].changeTag, placeholder: '请输入文章标签 (标签间以空格分隔)' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-1' },
                            _react2['default'].createElement(
                                'label',
                                { className: 'label label-default', htmlFor: 'summary' },
                                '文章简介'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-11' },
                            _react2['default'].createElement('textarea', { className: 'form-control', name: 'summary', id: 'summary', rows: '5', onChange: _actionsPostArticleActions2['default'].changeSummary, placeholder: '文章简介' })
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-1' },
                            _react2['default'].createElement(
                                'label',
                                { className: 'label label-default' },
                                '封面图片'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-8' },
                            _react2['default'].createElement(
                                'a',
                                { href: 'javascript:;', className: 'btn btn-info' },
                                '上传封面图片'
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: 'text-muted' },
                                '请选择您的文章封面图片。封面图片不得包含令人反感的信息，尺寸为480*270像素。 请勿使用与内容无关，或分辨率不为16:9的图片作为封面图片。'
                            )
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-3' },
                            _react2['default'].createElement('img', { src: '/img/cover-night.png', alt: 'loading' })
                        )
                    ),
                    _react2['default'].createElement('textarea', { id: 'some-textarea', name: 'content', 'data-provide': 'markdown', rows: '15', onChange: _actionsPostArticleActions2['default'].changeContent }),
                    _react2['default'].createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-info mon-post-btn', onClick: this.saveArticle.bind(this) },
                        _react2['default'].createElement('span', { className: 'fa fa-clock-o' }),
                        '保存'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { href: 'javascript:;', className: 'btn btn-success pull-right mon-post-btn', onClick: this.handleClick.bind(this) },
                        _react2['default'].createElement('span', { className: 'fa fa-check-circle-o' }),
                        '提交稿件'
                    )
                )
            );
        }
    }]);

    return PostArticle;
})(_react2['default'].Component);

exports['default'] = PostArticle;
module.exports = exports['default'];

},{"../actions/PostArticleActions":12,"../stores/PostArticleStore":50,"markdown":59,"react":"react"}],33:[function(require,module,exports){
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

},{"../actions/ProfileCenterActions":13,"../stores/ProfileCenterStore":51,"react":"react"}],34:[function(require,module,exports){
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
                { className: 'col-md-9 col-sm-9 animated fadeInUp' },
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

},{"../actions/SetActions":14,"../stores/SetStore":52,"react":"react"}],35:[function(require,module,exports){
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

},{"../actions/StarActions":15,"../stores/StarStore":53,"react":"react"}],36:[function(require,module,exports){
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

},{"../actions/UserActions":16,"../stores/UserStore":54,"react":"react","react-router":"react-router"}],37:[function(require,module,exports){
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

},{"./routes":38,"react":"react","react-router":"react-router"}],38:[function(require,module,exports){
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

var _componentsContribute = require('./components/Contribute');

var _componentsContribute2 = _interopRequireDefault(_componentsContribute);

var _componentsPostArticle = require('./components/PostArticle');

var _componentsPostArticle2 = _interopRequireDefault(_componentsPostArticle);

var _componentsArticle = require('./components/Article');

var _componentsArticle2 = _interopRequireDefault(_componentsArticle);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: '/article' },
        _react2['default'].createElement(_reactRouter.Route, { path: ':id', handler: _componentsArticle2['default'] })
    ),
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
        _react2['default'].createElement(_reactRouter.Route, { path: 'contribute', handler: _componentsContribute2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: 'notice', handler: _componentsNotice2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { path: 'star', handler: _componentsStar2['default'] }),
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/post' },
            _react2['default'].createElement(_reactRouter.Route, { path: 'animate', handler: _componentsPostAnimate2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'music' }),
            _react2['default'].createElement(_reactRouter.Route, { path: 'article', handler: _componentsPostArticle2['default'] })
        )
    ),
    _react2['default'].createElement(_reactRouter.Route, { path: '*', handler: _componentsNotFound2['default'] })
);
module.exports = exports['default'];

},{"./components/App":18,"./components/Article":19,"./components/Contribute":21,"./components/Followers":22,"./components/Following":23,"./components/Home":25,"./components/Login":26,"./components/NotFound":28,"./components/Notice":29,"./components/PostAnimate":31,"./components/PostArticle":32,"./components/ProfileCenter":33,"./components/Set":34,"./components/Star":35,"./components/User":36,"react":"react","react-router":"react-router"}],39:[function(require,module,exports){
/**
 * Created by apache on 15-11-4.
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

var _actionsArticleActions = require('../actions/ArticleActions');

var _actionsArticleActions2 = _interopRequireDefault(_actionsArticleActions);

var ArticleStore = (function () {
    function ArticleStore() {
        _classCallCheck(this, ArticleStore);

        this.bindActions(_actionsArticleActions2['default']);
        this.content = '';
        this.title = '';
        this.summary = '';
        this.createUser = '';
        this.createUserAvatar = '';
        this.createTime = '';
        this.createUserDomain = '';
        this.createUserIntro = '';
        this.tags = [];
        this.recommends = [];
    }

    _createClass(ArticleStore, [{
        key: 'onGetArticleSuccess',
        value: function onGetArticleSuccess(data) {
            if (data.code === 200) {
                console.log(data);
                var options = {
                    weekday: "long", year: "numeric", month: "short",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                };
                this.content = data.raw.article.content;
                this.title = data.raw.article.title;
                this.summary = data.raw.article.summary || '这个文章没有简介，呜呜';
                this.createUser = data.raw.article.create_user_name;
                this.createUserAvatar = data.raw.user.avatar_url;
                this.createUserDomain = data.raw.user.domain;
                this.tags = data.raw.article.tags;
                this.createUserIntro = data.raw.user.introduce;
                this.createTime = new Date(data.raw.article.create_time * 1000).toLocaleTimeString();
                this.recommends = data.raw.recommend;
            } else if (data.code === 400) {
                toastr.warning(data.meta);
            }
        }
    }]);

    return ArticleStore;
})();

exports['default'] = _alt2['default'].createStore(ArticleStore);
module.exports = exports['default'];

},{"../actions/ArticleActions":1,"../alt":17}],40:[function(require,module,exports){
/**
 * Created by apache on 15-11-8.
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

var _actionsCommentActions = require('../actions/CommentActions');

var _actionsCommentActions2 = _interopRequireDefault(_actionsCommentActions);

var CommentStore = (function () {
    function CommentStore() {
        _classCallCheck(this, CommentStore);

        this.bindActions(_actionsCommentActions2['default']);
        this.commentList = [];
        this.comment = '';
        this.skip = 0;
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
    }]);

    return CommentStore;
})();

exports['default'] = _alt2['default'].createStore(CommentStore);
module.exports = exports['default'];

},{"../actions/CommentActions":2,"../alt":17}],41:[function(require,module,exports){
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

var _actionsContributeActions = require('../actions/ContributeActions');

var _actionsContributeActions2 = _interopRequireDefault(_actionsContributeActions);

var ContributeStore = function ContributeStore() {
    _classCallCheck(this, ContributeStore);

    this.bindActions(_actionsContributeActions2['default']);
    this.contributes = [];
    this.animate = [];
    this.music = [];
    this.article = [];
};

exports['default'] = _alt2['default'].createStore(ContributeStore);
module.exports = exports['default'];

},{"../actions/ContributeActions":3,"../alt":17}],42:[function(require,module,exports){
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

},{"../actions/FollowersActions":4,"../alt":17}],43:[function(require,module,exports){
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

},{"../actions/FollowingActions":5,"../alt":17}],44:[function(require,module,exports){
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

},{"../actions/HomeActions":6,"../alt":17}],45:[function(require,module,exports){
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

},{"../actions/LoginActions":7,"../alt":17}],46:[function(require,module,exports){
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

},{"../actions/NavActions":8,"../alt":17}],47:[function(require,module,exports){
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

},{"../actions/NoticeActions":9,"../alt":17}],48:[function(require,module,exports){
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

},{"../actions/PaginationActions":10,"../alt":17}],49:[function(require,module,exports){
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

},{"../actions/PostAnimateActions":11,"../alt":17}],50:[function(require,module,exports){
/**
 * Created by apache on 15-11-3.
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

var _actionsPostArticleActions = require('../actions/PostArticleActions');

var _actionsPostArticleActions2 = _interopRequireDefault(_actionsPostArticleActions);

var PostArticleStore = (function () {
    function PostArticleStore() {
        _classCallCheck(this, PostArticleStore);

        this.bindActions(_actionsPostArticleActions2['default']);
        this.title = '';
        this.abbreviations = '';
        this.tag = [];
        this.content = '';
        this.summary = '';
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

            var tags = event.target.value.split(" ");
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
            if (data.code === 200) {
                toastr.success('发表文章成功');
            } else if (data.code === 400) {
                toastr.warning('这个用户不存在');
            } else if (data.code === 500) {
                toastr.error('发表文章不成功');
            }
        }
    }]);

    return PostArticleStore;
})();

exports['default'] = _alt2['default'].createStore(PostArticleStore);
module.exports = exports['default'];

},{"../actions/PostArticleActions":12,"../alt":17}],51:[function(require,module,exports){
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

},{"../actions/ProfileCenterActions":13,"../alt":17}],52:[function(require,module,exports){
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

},{"../actions/SetActions":14,"../alt":17}],53:[function(require,module,exports){
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

},{"../actions/StarActions":15,"../alt":17}],54:[function(require,module,exports){
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

},{"../actions/UserActions.js":16,"../alt":17}],55:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],56:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],57:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],58:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":57,"_process":56,"inherits":55}],59:[function(require,module,exports){
// super simple module for the most common nodejs use case.
exports.markdown = require("./markdown");
exports.parse = exports.markdown.toHTML;

},{"./markdown":60}],60:[function(require,module,exports){
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = require("util");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
}

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );

},{"util":58}]},{},[37]);
