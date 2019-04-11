import React from 'react';

import './RainbowFrame.css';

export default class RainbowFrame extends React.Component{

	constructor() {
		super();
		this.content = '';
	}

	drawImage = colors => {
		const items = colors.map(el => this.drawBorder(el))

		return items[colors.length - 1]
	}

	drawBorder = color => {
		const border = `4px solid ${color}`;

		return this.content = this.content ? 
					<div style={{border}}>{this.content}</div> : 
					<div style={{border}}>{this.props.children}</div>
	}
	
	render = () => this.drawImage(this.props.colors)

}

