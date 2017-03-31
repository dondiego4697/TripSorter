/**
 * Created by Denis on 30.03.2017.
 */
'use strict';

import Cards from './src/objects/cards';
let fs = require('fs');

fs.readFile('./src/cards.json', 'utf8', (err, data) => {
    if (err) throw err;

    let cards = new Cards();
    cards.createTripDescription(data).then(response => {
        console.log('Route:');
        response.forEach(elem=>{
            console.log(elem);
        });
    }).catch(err => {
        console.log(`${err}`);
    });
});