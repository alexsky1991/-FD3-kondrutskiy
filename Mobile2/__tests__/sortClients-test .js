"use strict";

import {sortClients} from '../modules/sortClients';

const arr = [{balance: 6}, {balance: -5}];

const arr_active = [{balance: 6}];

const arr_blocked = [{balance: -5}];

 
test('проверка сортировки клиентов', () => {

  expect(sortClients(arr, 'all')).toEqual(arr);

  expect(sortClients(arr, 'active')).toEqual(arr_active);

  expect(sortClients(arr, 'blocked')).toEqual(arr_blocked);

});
