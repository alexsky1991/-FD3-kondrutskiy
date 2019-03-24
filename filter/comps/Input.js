const Input = React.createClass({

	render() {

		return React.DOM.input({type: 'text', value: this.props.content, onInput: this.props.clickInput})
	}
})