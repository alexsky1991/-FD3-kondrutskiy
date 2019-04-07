import React from 'react';

import './editor-item.css'

export default class EditorItem extends React.Component {

	changeEditorItem = e => {

		if(document.getElementById('span')) {
			e.target.parentNode.removeChild(document.getElementById('span'))
		}

		
		if(e.target.value == '') {
			let item = document.createElement('span');
			item.id = 'span';
			item.innerHTML = 'Please, fill the field';
			e.target.parentNode.appendChild(item);
		}

		this.props.changeInput(e.target)
		
	}

	render() {

		const { item } = this.props;

		return <div>
					{item[0]}<input data-name={item[0]} type="text" value={item[1]} onChange={this.changeEditorItem}/>
				</div>
	}
}