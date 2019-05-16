
const sortClients = (arr, sort) => {

	return arr.filter(el => {
	 	if(sort === 'all')
	 		return el

	 	if(sort === 'active') 
	 		return el.balance > 0
	 	
	 	if(sort === 'blocked')
	 		return el.balance < 0

	})
}

export {sortClients};