/**
 * Created by Denis on 31.03.2017.
 */
'use strict';
/**
 * API для сортировки карточек путешественника
 */
export default class Cards {
    constructor() {
        this._arr = [];
        this._tripPoints = [];
    }

    /**
     * Сортировка карточек по пунктам отправления и назначения
     *
     * Используется метод с таблицой смежности (самой таблицы не строилось, сразу вставлялись значения следующего
     * или предыдущего города
     * @private
     */
    _sort() {
        let index;
        for (let i = 0; i < this._arr.length; i++) {
            let startFlag = true;
            for (let j = 0; j < this._arr.length; j++) {
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

        let buff = [];
        while (buff.length !== this._arr.length) {
            let elem = {};
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
     *      }
     *      info - дополнительная информация
     *}
     * @param {String} cards массив карточек
     */
    createTripDescription(cards) {
        return new Promise((resolve, reject) => {
            try {
                this._arr = JSON.parse(cards);
            } catch (err) {
                reject(err.toString());
            }

            this._sort();
            this._arr.forEach(elem => {
                let result = `Take ${elem.transport} from ${elem.from} to ${elem.to}. `;
                result += this._getDataForTransport(elem.transport, elem.transport_info);
                if(this._checkUndef(elem.info)) result += `${elem.info}. `;
                this._tripPoints.push(result);
            });
            resolve(this._tripPoints);
        });
    }

    /**
     * Функция формирующая информацию о транспорте относительно его вида
     * @param {string} transport - наименование вида транспорта
     * @param {object} info - ифнормация о транспорте
     * @return {string} - собранная текстовая информация
     * @private
     */
    _getDataForTransport(transport, info) {
        let result = '';
        switch (transport) {
            case 'car': {
                if(this._checkUndef(info.number)) result += `Number: ${info.number}. `;
                break;
            }
            case 'plane': {
                if(this._checkUndef(info.flight)) result += `Flight: ${info.flight}. `;
                if(this._checkUndef(info.gate)) result += `Gate: ${info.gate}. `;
                if(this._checkUndef(info.seat)) result += `Seat: ${info.seat}. `;
                break;
            }
            case 'train': {
                if(this._checkUndef(info.number)) result += `Wagon number: ${info.number}. `;
                if(this._checkUndef(info.seat)) result += `Seat: ${info.seat}. `;
                break;
            }
        }
        return result;
    }

    /**
     * Функция проверяющая на undefined
     * @param undefinedVar
     * @return {boolean}
     * @private
     */
    _checkUndef(undefinedVar){
        return typeof undefinedVar !== 'undefined';
    }
}