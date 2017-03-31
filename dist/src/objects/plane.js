'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transport = require('./transport');

var _transport2 = _interopRequireDefault(_transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Denis on 30.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Plane = function (_Transport) {
    _inherits(Plane, _Transport);

    function Plane(type, seat) {
        _classCallCheck(this, Plane);

        return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, type, seat));
    }

    return Plane;
}(_transport2.default);

exports.default = Plane;
//# sourceMappingURL=plane.js.map