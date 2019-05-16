"use strict";

import {changeFamily} from '../modules/changeFamily';

const arr = [{id:1, family: 50},{id:2,family : 70}];

const value = [1, 80];

const res = [{id:1, family : 80},{id:2, family : 70}];

test('проверка изменения фамилии', () => {

  expect(changeFamily(value, arr)).toEqual(res);

});
