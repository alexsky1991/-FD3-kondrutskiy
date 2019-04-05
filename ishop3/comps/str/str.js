import React from 'react'

import './str.css'

export default class Str extends React.Component{

    clickItem = () => {

    	if(confirm('удалить?'))
    		this.props.deleteItem(this.props.id);
    }

    clickPanel = () => {
       this.props.clickStr(this.props)
    }
 
	render() {
        const {clickPanel, name, price, quantity, url, id, openEditor} = this.props,
		       className = "shop_str " + this.props.class_name

        return <div className={className} onClick={this.clickPanel}>
                    <span>{name}</span>
                    <span>{price}</span>
                    <span>{quantity}</span>
                    <img className="img" src={url}/>
                    <span className="span_buttons">
                        <button onClick={() => openEditor(this.props)}>редактировать</button>
                        <button onClick={this.clickItem}>удалить</button>
                    </span>
                </div>
	}
}


