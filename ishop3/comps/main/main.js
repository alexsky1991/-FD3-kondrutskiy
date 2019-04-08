import React from 'react';
import Table from '../table'
import Card from '../card'

import './main.css'

export default class Main extends React.Component {

    state = { 
        arr_list: this.props.list,
        item_color: '',
        card: false,
        editor: false,
        mode: false,
        newItem: false
    };

    deleteItem = id => {
        const arr = this.state.arr_list.filter(e => e.id != id);
        this.setState({
                arr_list: arr,
                card: false
            })
    }

    clickStr = (props) => {
        if(this.state.mode || this.state.newItem)
            return;

        const {class_name, id} = props;
        this.setState({
                card: class_name ? false : props,
                editor: false
            })
    }

    openEditor = props => {
         if(this.state.mode)
            return;

        this.setState({
                card: props,
                editor: true
            })
    }

    modeCard = () => {

        this.setState({
            mode: true
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
            card: false,
            editor: false,
            mode: false
        })
    }

    addForm = () => {
        this.setState({
            newItem: true,
            card: true,
            editor: true
        })
    }

    addItem = (props) => {
        const new_id = this.state.arr_list.slice(-1)[0].id + 1;

        const newItem = {
            id: new_id,
            name: props.name,
            price: props.price,
            url: props.url,
            quantity: props.quantity
        }

        const arr = this.state.arr_list.slice();
        arr.push(newItem);
       this.setState({arr_list: arr})
    }

    removeCard = () => {

        this.setState({
            card: false,
            editor: false,
            mode: false,
            newItem: false
        })
    }

    render(){
        const {list, name} = this.props,
            {arr_list, item_color, card, editor, newItem} = this.state; 

        return <div>
                    <h1>{name}</h1>

                    <Table arr_list={arr_list} item_color={item_color} card={card}
                        deleteItem={this.deleteItem} clickStr={this.clickStr}
                        openEditor={this.openEditor} editor={editor} newItem={newItem}/>

                    <input type="button" value="Новый продукт" disabled={editor ? true : false} onClick={this.addForm}/>

                    {card && <Card card = {card} editor={editor} changeItem = {this.changeItem} modeCard={this.modeCard} newItem = {newItem}
                    addItem={this.addItem} removeCard={this.removeCard}/>}
                    
                </div>
    
    }
}



