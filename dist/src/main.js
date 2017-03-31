'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Denis on 30.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _cards = require('./objects/cards');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);
    }

    /**
     *
     * @param {Object} req запрос
     * @return Promise resolve - {String}, reject - {String}
     */


    _createClass(Main, [{
        key: 'analyse',
        value: function analyse(req) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.getBody(req).then(function (body) {
                    var cards = new _cards2.default();
                    try {
                        cards = JSON.parse(body);
                    } catch (err) {
                        reject(err.toString());
                    }
                    cards.sort();
                });
            });
        }

        /**
         * Метод достает тело запроса
         * @param req
         * @return {Promise} resolve - {String} тело запроса
         */

    }, {
        key: 'getBody',
        value: function getBody(req) {
            var body = [];
            return new Promise(function (resolve) {
                req.on('data', function (chunk) {
                    body.push(chunk);
                }).on('end', function () {
                    body = Buffer.concat(body).toString();
                    resolve(body.toString());
                });
            });
        }
    }]);

    return Main;
}();

exports.default = Main;
//# sourceMappingURL=main.js.map