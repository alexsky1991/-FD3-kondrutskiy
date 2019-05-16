"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../comps/main';

test('работа Main', () => {

  const component = renderer.create(
    <Main />
  );


  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
 