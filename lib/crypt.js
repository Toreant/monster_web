'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Created by apache on 15-11-25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var crypt = (function () {
    function crypt() {
        _classCallCheck(this, crypt);
    }

    _createClass(crypt, [{
        key: 'getMd5String',

        // md5加密
        value: function getMd5String(str) {
            var md5sum = _crypto2.default.createHash('md5');
            md5sum.update(str);
            return md5sum.digest('hex');
        }

        //

    }, {
        key: 'getShaString',
        value: function getShaString(str) {
            var sha = _crypto2.default.createHash("sha1");
            sha.update(str);
            str = sha.digest('hex');
            return str;
        }
    }]);

    return crypt;
})();

exports.default = new crypt();