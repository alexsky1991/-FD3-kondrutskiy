import React from 'react'

import './str.css'

export default class Str extends React.Component{

    clickItem = () => {

    	if(confirm('удалить?'))
    		this.props.deleteItem(this.props.id);
    }

    clickPanel = e => {
       if(e.target.value == 'редактировать' || e.target.value == 'удалить' ) 
            return
       
       this.props.clickStr(this.props)
    }
 
	render() {
        const {clickPanel, name, price, quantity, url, id, openEditor, editor, class_name, newItem} = this.props,
		       className = "shop_str " + class_name

        return <div className={className} onClick={this.clickPanel}>
                    <span>{name}</span>
                    <span>{price}</span>
                    <span>{quantity}</span>
                    <img className="img" src={url}/>
                    <span className="span_buttons">

                        <input type="button" disabled={newItem ? true : false} onClick={() => openEditor(this.props)} value="редактировать"/>

                        <input type="button" value="удалить" onClick={this.clickItem} disabled={editor ? true : false}/>
                    </span>
                </div>
	}
}


