
const addClient = arr => {

	let arr_id = arr.map(el=> el.id);

	let max_id = Math.max(...arr_id)

	let new_list = [...arr, {
		id: max_id  + 1,
		family: '',
		name: 'Григорий',
		patronymic: 'Григорьевич',
		balance: 100
	}];

	return new_list;
}

export {addClient}