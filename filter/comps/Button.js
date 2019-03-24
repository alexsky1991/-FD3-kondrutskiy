const Button = React.createClass({

	render() {
		return React.DOM.button({onClick: this.props.clickButton}, 'сброс')
	}
})