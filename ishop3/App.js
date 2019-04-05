
import React from 'react';
import ReactDOM from 'react-dom'; 

import Main from './comps/main';

import list_products from './products.json';

const name_shop = 'Shop';

ReactDOM.render(<Main name={name_shop} list={list_products}/>,  document.getElementById('container'))

