import React from 'react'

import './card.css'

export default class Card extends React.Component {

	state = {
		card_editor: this.props.editor,
		id: this.props.card.id,
		name: this.props.card.name,
		price: this.props.card.price,
		url: this.props.card.url,
		quantity: this.props.card.quantity
	}
	
	componentDidUpdate(prevProps) {

		if(prevProps.editor != this.props.editor)
			this.setState({card_editor: this.props.editor});

		if(prevProps.card.id != this.props.card.id) {
			this.setState({
				id: this.props.card.id,
				name: this.props.card.name,
				price: this.props.card.price,
				url: this.props.card.url,
				quantity: this.props.card.quantity,
			}, () => {
				if(prevProps.card.id != this.props.card.id)
					this.validate();
			})
		}

	}


	componentDidMount() {
		if(this.props.newItem)
			this.validate();
	}


	validate = () => {

		[...document.querySelectorAll('input[type=text]')].forEach(el => {
				
			const value = el.value;
			const parent = el.parentNode;

			if(parent.childNodes.length > 2)
				parent.removeChild(parent.lastElementChild)

			if(value == '') {
				let item = document.createElement('span');
				item.id = 'span';
				item.innerHTML = 'Please, fill the field';
				parent.appendChild(item);
			} 
		})
	}


	checkInput = e => {

		const value = e.target.value;

		if(e.target.tagName != 'INPUT')
			return;

		if(e.target.value == "Cansel" || e.target.value == "Save")
			return;

		if(e.target.value == 'Add')
			return


		this.props.modeCard();

		const info = e.target.dataset.name;

		if(info == 'name') 
			this.setState({name: value})
		
		if(info == 'price') 
			this.setState({price: value})

		if(info == 'url') 
			this.setState({url: value})

		if(info == 'quantity') 
			this.setState({quantity: value})

		this.validate();

	}


	render() {

		const {card_editor, id, name, price, url, quantity } = this.state;
		const {changeItem, newItem, addItem, removeCard} = this.props;

		return <div className="card">
			<div>ID: {id}</div>
			<div><span className="card_left">Name:</span>{card_editor ? <input type="text" value={name} data-name="name" onChange={this.checkInput}  /> : name}</div>

			<div><span className="card_left">Price:</span>{card_editor ? <input type="text" value={price} data-name="price" onChange={this.checkInput}/> : price}</div>

			<div><span className="card_left">URL:</span>{card_editor ? <input type="text" value={url} data-name="url" onChange={this.checkInput}/> : url}</div>

			<div><span className="card_left">Quantity:</span>{card_editor ? <input type="text" data-name="quantity" value={quantity} onChange={this.checkInput}/> : quantity}</div>

			{card_editor &&
				<div className="editor_buttons">
					{newItem ? 
						<input type="button" value="Add" onClick={() => addItem(this.state)} disabled={[name, price, url, quantity].some(e => e=='' || e==undefined) ? true : false}/>
					 :
						<input type="button" value="Save" onClick={() => changeItem(this.state)} disabled={[name, price, url, quantity].some(e => e=='') ? true : false}/>
					}
						<input type="button" value="Cansel" onClick ={removeCard}/>
				</div>
			}
		</div>
	}
}