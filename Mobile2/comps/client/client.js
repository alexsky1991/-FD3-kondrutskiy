import React from 'react';
import { voteEvent } from '../events';

import './client.css';

export default class Client extends React.PureComponent{

	state = {
		redact: false
	}

	removeClient = id => {
		voteEvent.emit('removeClient', id)
	}

	redactInfo = () => {
		this.setState({redact: !this.state.redact})
	}

	changeBalance = id => {
		this.setState({redact: false})
		voteEvent.emit('changeBalance', [id, this.balanceInput.value])
	}

	changeFamily = id => {
		this.setState({redact: false})
		voteEvent.emit('changeFamily', [id, this.familyInput.value])
	}

	render() {
		const { redact } = this.state

		const { family, name, patronymic, balance, id } = this.props.info;

		console.log(`render ${family}`)

		let status = balance > 0 ? ' active' : ' blocked'

		return (
			<div className="table_line">
				<div>
					{redact ? 
						<input 
							type="text" 
							ref={input => this.familyInput = input}
							onBlur={() => this.changeFamily(id)} defaultValue={family}/> : family 
						}
				</div>
				<div>{name}</div>
				<div>{patronymic}</div>
				<div>
					{redact ? 
						<input 
							type="text" 
							ref={input => this.balanceInput = input}
							onBlur={() => this.changeBalance(id)} defaultValue={balance}/> : balance}
				</div>
				<div className={status}>{status}</div>
				<div>
					<div className="table_item_button" about="reduct" onClick={this.redactInfo}>
						Редактировать
					</div>
				</div>
				<div>
					<div className="table_item_button" about="remove" onClick={() => this.removeClient(id)}>
						Удалить
					</div>
				</div>
			</div>
			
		)
	}

}

