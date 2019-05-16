"use strict";

import {removeClient} from '../../modules/removeClient';

const arr = [{id:1},{id:2}]

test('проверка удаления клиента', () => {

  expect(removeClient(1,[{id:1},{id:2}])).toEqual([{id:2}]);

});
