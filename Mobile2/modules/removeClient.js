
const removeClient = (id, arr) => {
	let new_list = arr.filter(el => el.id !== id);	
	return new_list;
}

export {removeClient}