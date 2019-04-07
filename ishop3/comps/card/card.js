import React from 'react'

import './card.css'

export default class Card extends React.Component {

	state = {
		card_editor: this.props.editor,
		id: this.props.card.id,
		name: this.props.card.name,
		price: this.props.card.price,
		url: this.props.card.url,
		quantity: this.props.card.quantity,
	}

	componentWillReceiveProps(props) {
		this.setState({card_editor: props.editor})

		if(this.state.id != props.card.id) {
			this.setState({
				id: props.card.id,
				name: props.card.name,
				price: props.card.price,
				url: props.card.url,
				quantity: props.card.quantity,
			})
		}

		
	}

	changeInput = e => {
		console.log(34)
		this.props.modeCard();
		const info = e.target.dataset.name;
		const value = e.target.value;

		const parent = e.target.parentNode;

		if(parent.childNodes.length > 3)
			parent.removeChild(parent.lastElementChild)
		
		if(value == '') {
			let item = document.createElement('span');
			item.id = 'span';
			item.innerHTML = 'Please, fill the field';
			parent.appendChild(item);

		} 
		
		if(info == 'name') 
			this.setState({name: value})
		
		if(info == 'price') 
			this.setState({price: value})

		if(info == 'url') 
			this.setState({url: value})

		if(info == 'quantity') 
			this.setState({quantity: value})
	}


	render() {
		const {card_editor, id, name, price, url, quantity } = this.state;
		const {changeItem, newItem, addItem, removeCard} = this.props;
		console.log(name, price, url, quantity)

		// if(newItem) {
		// 	console.log(document.querySelectorAll('input[type=text]'));
		// 	[...document.querySelectorAll('input[type=text]')].forEach(e => {
		// 		e.trigger('click');
		// 	})
		// }


		return <div className="card">
			<div>ID: {id}</div>
			<div><span className="card_left">Name:</span> {card_editor ? <input type="text" value={name} data-name="name" onChange={this.changeInput}/> : name}</div>

			<div><span className="card_left">Price:</span> {card_editor ? <input type="text" value={price} data-name="price" onChange={this.changeInput}/> : price}</div>

			<div><span className="card_left">URL:</span> {card_editor ? <input type="text" value={url} data-name="url" onChange={this.changeInput}/> : url}</div>

			<div><span className="card_left">Quantity:</span> {card_editor ? <input type="text" data-name="quantity" value={quantity} onChange={this.changeInput}/> : quantity}</div>

			<div className="editor_buttons">
				{newItem ? 
					<input type="button" value="Add" onClick={() => addItem(this.state)} disabled={[name, price, url, quantity].some(e => e=='' || e==undefined) ? true : false}/>
				 :
					<input type="button" value="Save" onClick={() => changeItem(this.state)} disabled={[name, price, url, quantity].some(e => e=='') ? true : false}/>
				}
					<input type="button" value="Cansel" onClick ={removeCard}/>
				</div>
		</div>
	}
}