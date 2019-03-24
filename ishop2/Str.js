var Str = React.createClass({

	getInitialState: function() {
   		return { 
    		color: false
    	};
  	},

	clickStr: function() {
        this.setState(({color}) => ({color: !color}))
    },

    clickItem: function() {

    	if(confirm('удалить?'))
    		this.props.deleteItem(this.props.name);
    },
 
	render() {
		const {color} = this.state

		let className = "shop_str"

		if(color)
			className += " red"

		return React.DOM.div({className: className, onClick: this.clickStr}, 
                        React.DOM.span(null, this.props.name),
                        React.DOM.span(null, this.props.price),
                        React.DOM.span(null, this.props.number),
                        React.DOM.img({src:`${this.props.url}`, className: 'img'}),
                        React.DOM.span({onClick: this.clickItem}, 'удалить'),
                )
	}
	
})