const Check = React.createClass({

	render() {
		return React.DOM.input({type: 'checkbox', checked: this.props.check, onChange: this.props.clickCheck})
	}
})