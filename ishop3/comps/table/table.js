import React from 'react';
import Str from '../str';

import './table.css';

export default class Table extends React.Component {

	render() {
		const {arr_list, item_color, deleteItem, clickStr,	openEditor} = this.props;

		const display = arr_list.map(e =>  <Str  key={e.id} id={e.id}
                        class_name={item_color == e.id ? 'red' : ''} 
                        name={e.name} price={e.price} 
                        quantity={e.quantity} url={e.url}
                        deleteItem={deleteItem} clickStr={clickStr}
                        openEditor={openEditor}>
                    </Str>          
                ),
       		 panel = <div className="shop_str">
                        <span>Имя</span>
                        <span>Цена</span>
                        <span>Количество</span>
                        <span>Картинка</span>
                        <span>Управление</span>
                    </div>

       		 return <div className="shop">
                        {panel}
                        {display}
                    </div>


	}

}