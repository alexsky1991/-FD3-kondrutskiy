"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Main from '../comps/main';
import Client from '../comps/client';
import Table from '../comps/table';

test('работа Main', () => {

  const component = renderer.create(
    <Main />
  );


  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonAdd = component.root.find( el => el.props.className=='table_add' ); 
 
  buttonAdd.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('работа Client', () => {

  const client = {
    id: 1,
    family: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    balance: 200
  };

  const component = renderer.create(
    <Client key={client.id} info={client}/>
  );


  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonRemove = component.root.find( el => el.props.about=='remove' ); 
 
  buttonRemove.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonReduct = component.root.find( el => el.props.about=='reduct' ); 
 
  buttonReduct.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('работа кнопок фильтрации', () => {

	const clients = [{id: 1,family: 'Иванов',name: 'Иван',patronymic: 'Иванович',balance: 200},
	{id: 2,family: 'Сидоров',name: 'Сидор',patronymic: 'Сидорович',balance: 25},
	{id: 3,family: 'Петров',name: 'Петр',patronymic: 'Петрович',balance: 180},
	{id: 4,family: 'Григорьев',name: 'Григорий',patronymic: 'Григорьевич',balance:-200}];

	const component = renderer.create(
	    <Table clients={clients}/>
	  );

	let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    let comp = component.root.find( el => el.props.className=='table_panel' ); 

	comp.simulate('click', {
   		target: { id: 'active', className:'table_panel_button' }
    });

    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

})


 