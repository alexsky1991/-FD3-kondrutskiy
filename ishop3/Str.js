var Str = React.createClass({

    clickItem: function() {

    	if(confirm('удалить?'))
    		this.props.deleteItem(this.props.id);
    },

    clickPanel: function() {
       this.props.clickStr(this.props)
    },
 
	render() {
		const className = "shop_str " + this.props.class_name

		return React.DOM.div({className: className, onClick: this.clickPanel}, 
                        React.DOM.span(null, this.props.name),
                        React.DOM.span(null, this.props.price),
                        React.DOM.span(null, this.props.number),
                        React.DOM.img({src:`${this.props.url}`, className: 'img'}),
                        React.DOM.span({onClick: this.clickItem},
                            React.DOM.button(null,'удалить')
                        ),
                )
	}
	
})