import React from 'react';
import ReactDOM from 'react-dom';

import Main from './comps/Main';

const text = "первый<br>второй<br/>третий<br />последний";

const text_correct  = text.replace(/<br\s?\/?>/g, '<br/>');

ReactDOM.render(
  <Main text={text_correct}/>, 
  		document.getElementById('container') 
);

