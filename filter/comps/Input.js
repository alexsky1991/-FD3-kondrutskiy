const Input = React.createClass({

	render() {
		{console.log(this.props)}
		return React.DOM.input({type: 'text', value: this.props.content, onInput: this.props.clickInput})
	}
})