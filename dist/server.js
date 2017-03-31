/**
 * Created by Denis on 29.03.2017.
 */
'use strict';

var _main = require('./src/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http');
var PORT = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
    res.setHeader('Content-type', 'text/plain');
    new _main2.default().analyse(req).then(function (response) {
        res.write(response);
        res.end();
    }).catch(function (err) {
        res.write(err);
        res.end();
    });
});

console.log('Server listen ' + PORT + ' port');
server.listen(PORT);
//# sourceMappingURL=server.js.map