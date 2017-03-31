/**
 * Created by Denis on 31.03.2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cards = function () {
    function Cards() {
        _classCallCheck(this, Cards);

        this._arr = [];
        this._tripPoints = [];
    }

    /**
     * Сортировка карточек по пунктам отправления и назначения
     *
     * Используется метод с таблицой смежности (самой таблицы не строилось, сразу вставлялись значения следующего
     * или предыдущего города
     */


    _createClass(Cards, [{
        key: '_sort',
        value: function _sort() {
            var index = void 0;
            for (var i = 0; i < this._arr.length; i++) {
                var startFlag = true;
                for (var j = 0; j < this._arr.length; j++) {
                    if (this._arr[i].from === this._arr[j].to) {
                        this._arr[i].prev = j;
                        this._arr[j].next = i;
                        startFlag = false;
                        break;
                    }
                }
                if (startFlag) {
                    index = i;
                }
            }

            var buff = [];
            while (buff.length !== this._arr.length) {
                var elem = {};
                Object.assign(elem, this._arr[index]);
                delete elem.prev;
                delete elem.next;
                buff.push(elem);
                index = this._arr[index].next;
            }

            this._arr = buff;
        }

        /**
         * Формирует читаемый маршрут из карточек и записывает в _tripPoints
         *
         * Структура обрабатываемых карточек:
         * Object{
         *      from - пункт отправки (обязательное поле)
         *      to - пункт прибытия (обязательное поле)
         *      transport - вид транспорта (обязательное поле) (car, plane, train)
         *      transport_info {
         *          gate - терминал
         *          flight - рейс
         *          number - номер (вагона, машины ...)
         *          seat - место
         *          info - дополнительная информация
         *      }
         *}
         * @param {String} cards массив карточек
         */

    }, {
        key: 'createTripDescription',
        value: function createTripDescription(cards) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                try {
                    _this._arr = JSON.parse(cards);
                } catch (err) {
                    reject(err.toString());
                }

                _this._sort();
                _this._arr.forEach(function (elem) {
                    var result = 'Take ' + elem.transport + ' from ' + elem.from + ' to ' + elem.to + '. ';

                    var transportInfo = elem.transport_info;
                    Object.keys(transportInfo).forEach(function (key) {});
                    _this._tripPoints.push(result);
                });
                resolve(_this._tripPoints);
            });
        }
    }, {
        key: '_getDataForTransport',
        value: function _getDataForTransport(info) {
            switch (info) {
                case 'car':
                    {

                        break;
                    }
                case 'plane':
                    {

                        break;
                    }
                case 'train':
                    {

                        break;
                    }
            }
        }
    }]);

    return Cards;
}();

exports.default = Cards;
//# sourceMappingURL=cards.js.map