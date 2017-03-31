/**
 * Created by Denis on 30.03.2017.
 */

import Cards from './objects/cards';

export default class Main {
    constructor() {

    }

    /**
     *
     * @param {Object} req запрос
     * @return Promise resolve - {String}, reject - {String}
     */
    analyse(req) {
        return new Promise((resolve, reject) => {
            this.getBody(req).then(body => {
                let cards = new Cards();
                try {
                    cards = JSON.parse(body);
                } catch (err) {
                    reject(err.toString());
                }
                cards.sort();
            })
        });
    }

    /**
     * Метод достает тело запроса
     * @param req
     * @return {Promise} resolve - {String} тело запроса
     */
    getBody(req) {
        let body = [];
        return new Promise((resolve) => {
            req.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                body = Buffer.concat(body).toString();
                resolve(body.toString());
            });
        });
    }
}