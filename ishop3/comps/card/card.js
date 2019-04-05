import React from 'react'

import './card.css'

export default class Card extends React.Component {


	render() {
		const {name, price} = this.props.card

		return <div className="card">
			<div>карточка продукта: {name}</div>
			<div>Price: {price}</div>
		</div>
		
	}
}