/**
 * Created by Denis on 30.03.2017.
 */
'use strict';

var _cards = require('./src/objects/cards');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

fs.readFile('./src/cards.json', 'utf8', function (err, data) {
    if (err) throw err;

    var cards = new _cards2.default();
    cards.createTripDescription(data).then(function (response) {
        console.log('Route:');
        response.forEach(function (elem) {
            console.log(elem);
        });
    }).catch(function (err) {
        console.log('' + err);
    });
});
//# sourceMappingURL=main.js.map