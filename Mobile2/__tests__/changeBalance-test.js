"use strict";

import {changeBalance} from '../modules/changeBalance';

const arr = [{id:1, balance : 50},{id:2,balance : 70}];

const value = [1, 80];

const res = [{id:1, balance : 80},{id:2, balance : 70}];

test('проверка изменения баланса', () => {

  expect(changeBalance(value, arr)).toEqual(res);

});
