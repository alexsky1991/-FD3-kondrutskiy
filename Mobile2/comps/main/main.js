import React from 'react';

import Table from '../table'

import { voteEvent } from '../events';

import {removeClient, addClient, changeBalance, changeFamily, sortClients} 
	from '../../modules';


import './main.css';

let listClients = [
	{
		id: 1,
		family: 'Иванов',
		name: 'Иван',
		patronymic: 'Иванович',
		balance: 200
	},
	{
		id: 2,
		family: 'Сидоров',
		name: 'Сидор',
		patronymic: 'Сидорович',
		balance: 250
	},
	{
		id: 3,
		family: 'Петров',
		name: 'Петр',
		patronymic: 'Петрович',
		balance: 180
	},
	{
		id: 4,
		family: 'Григорьев',
		name: 'Григорий',
		patronymic: 'Григорьевич',
		balance: -200
	}
];

export default class Main extends React.PureComponent{

	state = {
		company: "Velcom",
		clients: listClients,
		sort: false
	}

	componentDidMount = () => {

		voteEvent.addListener('changeCompany', title => (
			this.setState({company: title} )
		));

		voteEvent.addListener('removeClient', clientId => {
			let new_list = removeClient(clientId, this.state.clients);
			this.setState({clients: new_list})
		});

		voteEvent.addListener('sortClients', status => {
			if(status === 'all')
				status = false

			this.setState({sort: status})
		});

		voteEvent.addListener('changeBalance', value => {
			let new_list = changeBalance(value, this.state.clients);

			this.setState({clients: new_list})
		});

		voteEvent.addListener('changeFamily', value => {
			let new_list = changeFamily(value, this.state.clients);
			this.setState({clients: new_list})
		});

		voteEvent.addListener('addClient', () => {
			let new_list = addClient(this.state.clients)
			this.setState({clients: new_list})

		});
	}



	render() {
		console.log('render mai')

		let { company, clients, sort } = this.state;

		if(sort)
			clients = sortClients(clients, sort)

		return (
			<div className="wrapper">
				<Table clients={clients}/>
			</div>
			
		)
	}

}

