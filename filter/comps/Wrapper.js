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

		this.setState({content: value},this.changeArray);

	},

	changeArray: function() {
		let arr_prob = this.props.arr_str;

		if(this.state.content)
			arr_prob = arr_prob.filter(el => el.indexOf(this.state.content) > -1)

		if(this.state.check)
			arr_prob = arr_prob.slice().sort()

		this.setState({
			arr: arr_prob
		})
	},
 
	clickButton: function() {
		this.setState({
			check: false,
			content: ''
		}, this.changeArray)

	},

	clickCheck: function(e) {
		this.setState({check: e.target.checked}, this.changeArray)
	},

	render() {
		const {arr_str} = this.props,
			  {check, content, arr} = this.state;
 		
		const button = React.createElement(Button, {clickButton: this.clickButton}),
		      input = React.createElement(Input, {clickInput: this.clickInput, content:content}),
			  checkbox = React.createElement(Check, {check: check, clickCheck: this.clickCheck}),
			  
			  div = React.DOM.div(null, checkbox, input, button),

			  list = React.createElement(List, {arr: arr})

		return React.DOM.div(null, div, list)
	}
})