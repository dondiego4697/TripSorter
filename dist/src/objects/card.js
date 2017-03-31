"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 30.03.2017.
 */

var Card =
/**
 *
 * @param {string} from Начало движения
 * @param {string} to Конец движения
 * @param {string} type Тип транспорта
 * @param {string} seat Место
 */
function Card(from, to, type, seat) {
  _classCallCheck(this, Card);

  this.from = from;
  this.to = to;
  this.type = type;
  this.seat = seat;
};

exports.default = Card;
//# sourceMappingURL=card.js.map