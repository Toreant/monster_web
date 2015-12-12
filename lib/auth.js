'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by apache on 15-10-25.
 */

var auth = (function () {
    function auth() {
        _classCallCheck(this, auth);
    }

    _createClass(auth, [{
        key: 'isAuth',

        // 是否登陆
        value: function isAuth(req, res, next) {
            if (req.session.user !== undefined) {
                next();
            } else {
                res.json({
                    meta: '你还没登陆',
                    code: 406
                });
            }
        }

        // 是否未登陆

    }, {
        key: 'isNotAuth',
        value: function isNotAuth(req, res, next) {
            if (req.session.user === undefined) {
                next();
            } else {
                res.json({
                    meta: '你已经登陆了',
                    code: 304
                });
            }
        }
    }]);

    return auth;
})();

exports.default = new auth();