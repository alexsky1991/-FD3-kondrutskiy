import React from 'react';

import Company from '../company'
import Table from '../table'

import { voteEvent } from '../events';

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

	sortClients = clients => {

		return clients.filter(el => {
		 	if(this.state.sort === 'all')
		 		return el

		 	if(this.state.sort === 'active') 
		 		return el.balance > 0
		 	
		 	if(this.state.sort === 'blocked')
		 		return el.balance < 0

		})

	}
	

	componentDidMount = () => {

		voteEvent.addListener('changeCompany', title => (
			this.setState({company: title} )
		));

		voteEvent.addListener('removeClient', clientId => {
			let new_list = this.state.clients.filter(el => el.id !== clientId)
			this.setState({clients: new_list})
		});

		voteEvent.addListener('sortClients', status => {
			if(status === 'all')
				status = false

			this.setState({sort: status})
		});

		voteEvent.addListener('changeBalance', value => {
			let new_list = this.state.clients.map(el=> {
				if(el.id === value[0]) 
					el.balance = value[1]
				
				return el;
			})

			this.setState({clients: new_list})
		});

		voteEvent.addListener('changeFamily', value => {
			let new_list = this.state.clients.map(el=> {
				if(el.id === value[0]) 
					el.family = value[1]
				
				return el;
			})

			this.setState({clients: new_list})
		});

		voteEvent.addListener('addClient', () => {

			let arr_id = this.state.clients.map(el=> el.id);

			let max_id = Math.max(...arr_id)

			let new_list = [...this.state.clients, {
				id: max_id  + 1,
				family: '',
				name: 'Григорий',
				patronymic: 'Григорьевич',
				balance: 100
			}];
			
			this.setState({clients: new_list})

		});
	}



	render() {
		console.log('render main')

		let { company, clients, sort } = this.state;

		if(sort)
			clients = this.sortClients(clients)

		return (
			<div className="wrapper">
				<Company company={company}/>
				<Table clients={clients}/>
			</div>
			
		)
	}

}

