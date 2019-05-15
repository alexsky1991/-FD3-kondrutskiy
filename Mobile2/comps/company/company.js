import React from 'react';

import { voteEvent } from '../events';

import './company.css';

export default class Compamy extends React.PureComponent{


	changeName = e => {
		if(e.target.className === 'company_button')
			voteEvent.emit('changeCompany', e.target.innerHTML)

	}


	render() {
		console.log('render company')

		const { company } = this.props;

		return (
			<div className="company">
				<div className="company_panel" onClick={this.changeName}>
					<div className="company_button">Velcom</div>
					<div className="company_button">MTC</div>
				</div>
				<div className="company_name">Компания: {company}</div>
			</div>
			
		)
	}

}

