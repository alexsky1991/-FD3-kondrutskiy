import React from 'react';
import EditorItem from '../editor-item'

import './editor.css';

export default class Editor extends React.Component{

	state = {
		id: this.props.editor.id,
		warning: false,
		name: this.props.editor.name,
		price: this.props.editor.price,
		url: this.props.editor.url,
		quantity: this.props.editor.quantity
		
	}

	componentWillReceiveProps(nextProps) {
	  	this.setState({ 
			id: nextProps.editor.id,
			name: nextProps.editor.name,
			price: nextProps.editor.price,
			url: nextProps.editor.url,
			quantity: nextProps.editor.quantity
	  	});
	}

	changeInput = props => {
		let info = props.dataset.name;
		let value = props.value;

		if(value == '') {
			this.setState({warning: true})
		} else {
			this.setState({warning: false})
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

		const {id, warning} = this.state;
		const { changeItem } = this.props;

		const {name, price, url, quantity} = this.state;

		return <div className="editor">
				<div>ID: {id}</div>

				{Object.entries({name, price, url, quantity}).map(item => 
					<EditorItem item={item} key={item[0]} changeInput={this.changeInput}/>
				)}

				<div className="editor_buttons">
					<input type="button" value="Save" onClick={() => changeItem(this.state)} disabled={warning ? true : false}/>

					<input type="button" value="Cansel" />
				</div>
			</div>
	}

}