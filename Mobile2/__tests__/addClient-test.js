"use strict";

import {addClient} from '../modules/addClient';

const arr = [{id:1},{id:2}]

test('проверка добавления клиента', () => {

  expect(addClient(arr)).toEqual([{id:1},{id:2}, {
		id: 3,
		family: '',
		name: 'Григорий',
		patronymic: 'Григорьевич',
		balance: 100
	}]);

});
