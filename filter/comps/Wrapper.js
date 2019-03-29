const Wrapper = React.createClass({

	getInitialState: function() {
		return {
			check: false,
			content: '',
			arr: this.props.arr_str
		}
	},

	clickInput: function(e) {
		const value = e.target.value;
		console.log(value);
		let arr_prob = this.props.arr_str;

		if(value) 
			arr_prob = this.props.arr_str.filter(el => el.indexOf(this.state.content) > -1)
		
		if(this.state.check)
			arr_prob = this.state.check ? arr_prob.slice().sort() : arr_prob

		this.setState({
			arr: arr_prob
		})
	},
 
	clickButton: function() {
		this.setState({
			check: false
		})

	},

	clickCheck: function() {
		this.setState(({check}) => ({check: !check}))

		this.clickInput();
	},

	render() {
		const {arr_str} = this.props,
			  {check, content, arr} = this.state
 
		// let arr = check ? arr_str.slice().sort() : arr_str

		// if(content) 
		// 	arr = arr.filter(el => el.indexOf(content) > -1)
		
		const button = React.createElement(Button, {clickButton: this.clickButton}),
		      input = React.createElement(Input, {clickInput: this.clickInput, content:content}),
			  checkbox = React.createElement(Check, {check: check, clickCheck: this.clickCheck}),
			  
			  div = React.DOM.div(null, checkbox, input, button),

			  list = React.createElement(List, {arr: arr})

		return React.DOM.div(null, div, list)
	}
})