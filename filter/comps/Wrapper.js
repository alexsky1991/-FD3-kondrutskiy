const Wrapper = React.createClass({

	getInitialState: function() {
		return {
			check: false,
			content: ''
		}
	},

	clickInput: function(e) {
		const value = e.target.value
		this.setState(({content}) => ({content: value}))
	},
 
	clickButton: function() {
		this.setState(({content}) => ({content: '',check: false}))
	},

	clickCheck: function() {
		this.setState(({check}) => ({check: !check}))
	},

	render() {
		const {arr_str} = this.props,
			  {check, content} = this.state
 
		let arr = check ? arr_str.slice().sort() : arr_str

		if(content) 
			arr = arr.filter(el => el.indexOf(content) > -1)
		
		const button = React.createElement(Button, {clickButton: this.clickButton}),
		      input = React.createElement(Input, {clickInput: this.clickInput, content:content}),
			  checkbox = React.createElement(Check, {check: check, clickCheck: this.clickCheck}),
			  
			  div = React.DOM.div(null, checkbox, input, button),

			  list = React.createElement(List, {arr: arr})

		return React.DOM.div(null, div, list)
	}
})