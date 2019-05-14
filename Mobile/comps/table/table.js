import React from 'react';
import { voteEvent } from '../events';

import Client from '../client'

import './table.css';

export default class Table extends React.PureComponent{

	sortClients = e => {
		if(e.target.className === 'table_panel_button')
			voteEvent.emit('sortClients', e.target.id)
	}

	addClient = () => {
		voteEvent.emit('addClient')
	}

	render() {
		console.log('render table');

		const { clients } = this.props;

		return (
			<div>
				<div className="table_panel" onClick={this.sortClients}>
					<div id='all' className="table_panel_button">Все</div>
					<div id='active' className="table_panel_button">Активные</div>
					<div id='blocked' className="table_panel_button">Заблокированные</div>
				</div>
				<div className="table">
					<div className="table_line line_title">
						<div className="table_item">Фамилия</div>
						<div className="table_item">Имя</div>
						<div className="table_item">Отчество</div>
						<div className="table_item">Баланс</div>
						<div className="table_item">Статус</div>
						<div className="table_item">Редактировать</div>
						<div className="table_item">Удалить</div>
					</div>
					{
						clients.map(el => {
							return (
								<Client key={el.id} info={el}/>
							)
						})
					}

				</div>
				<div className="table_add" onClick={this.addClient}>Добавить клиента</div>
			</div>
			
		)
	}

}

