var Component = React.createClass({

    displayName: 'Component',

    getInitialState: function() {
        return { 
            arr_list: this.props.list,
            item_color: ''
        };
    },

    propTypes: {
        name: React.PropTypes.string.isRequired,
        list:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              name: React.PropTypes.string.isRequired,
              price: React.PropTypes.number.isRequired,
              number: React.PropTypes.number.isRequired,
              url: React.PropTypes.string.isRequired
            })
          )
    },

    deleteItem: function(name) {

        var arr = this.state.arr_list.filter(e => {
            return e.name != name
        })

        this.setState(({arr_list}) => ({arr_list: arr}))
    },

    clickStr: function(name) {
        this.setState(({item_color}) => ({item_color: name}))
    },

    render(){
        var {list, name} = this.props;

        var table = this.state.arr_list.map(e => {
            return  React.createElement(Str, {key:e.name, name: e.name, price: e.price, number: e.number, url: e.url, deleteItem: this.deleteItem, clickStr: this.clickStr, class_name: this.state.item_color == e.name ? 'red' : ''})  
          
        });

        var panel = React.DOM.div({className: 'shop_str'}, 
            React.DOM.span(null , 'Имя'),
            React.DOM.span(null , 'Цена'),
            React.DOM.span(null , 'Количество'),
            React.DOM.span(null , 'Картинка'),
            React.DOM.span(null , 'Управление'),
        )

        var shop = React.DOM.div({className: 'shop'}, panel, table)

        return React.DOM.div(null,
            React.DOM.h1(null, `Магазин ${name}`), shop
        )
    
    },
})