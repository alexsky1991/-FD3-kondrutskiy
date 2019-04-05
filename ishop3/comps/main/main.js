import React from 'react';
import Table from '../table'
import Card from '../card'
import Editor from '../editor'

import './main.css'

export default class Main extends React.Component {

    state = { 
        arr_list: this.props.list,
        item_color: '',
        card: false,
        editor: false
    };

    deleteItem = id => {
        const arr = this.state.arr_list.filter(e => e.id != id);
        this.setState({
                arr_list: arr,
                card: false,
                editor: false
            })
    }

    clickStr = (props) => {
        const {class_name, id} = props;
        this.setState({
                item_color: class_name ? '' : id,
                card: class_name ? false : {id: props.id, price: props.price, name: props.name}
            })
    }

    openEditor = props => {
        this.setState({
            editor: {id: props.id, name: props.name, price: props.price,    url: props.url, quantity: props.quantity},
            card: false
            })
    }

    changeItem = props => {
        const arr = this.state.arr_list.map(e => {
            if(e.id == props.id) 
                e = props
        
            return e
        });

        this.setState({
            arr_list: arr,
            editor: false
        })
    }

    render(){
        const {list, name} = this.props,
            {arr_list, item_color, card, editor} = this.state; 

        return <div>
                    <h1>{name}</h1>

                    <Table arr_list={arr_list} item_color={item_color}
                        deleteItem={this.deleteItem} clickStr={this.clickStr}
                        openEditor={this.openEditor}/>

                    <button>Новый продукт</button>
                    {card && !editor && <Card card = {card}/>}

                    {editor && <Editor editor = {editor} changeItem = {this.changeItem}/>}
                </div>
    
    }
}



