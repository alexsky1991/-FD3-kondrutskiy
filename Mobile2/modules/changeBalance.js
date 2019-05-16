const changeBalance = (value,arr) => {
	let new_list = arr.map(el=> {
		if(el.id === value[0]) 
			el.balance = value[1]
		
		return el;
	})

	return new_list
}

export {changeBalance}