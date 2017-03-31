/*
/!**
 * Created by Denis on 29.03.2017.
 *!/
'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

import Main from './main';

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/plain');
    new Main().analyse(req).then(response => {
        res.write(response);
        res.end();
    }).catch(err => {
        res.write(err);
        res.end();
    });
});

console.log(`Server listen ${PORT} port`);
server.listen(PORT);*/
"use strict";
//# sourceMappingURL=server.js.map