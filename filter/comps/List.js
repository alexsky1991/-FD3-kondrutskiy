const List = React.createClass({

	render() {

		let list = this.props.arr.map(item => {
			return React.DOM.option({key: item}, item)
		})

		return React.DOM.select({multiple: true}, list)
	}
})