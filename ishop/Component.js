var Component = React.createClass({

    displayName: 'Component',

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

    render: function(){
        var {list, name} = this.props;
        console.log(name);

        var table = list.map(e => {
            
            return  React.DOM.div({key: e.name, className: 'shop_str'}, 
                        React.DOM.span(null, e.name),
                        React.DOM.span(null, e.price),
                        React.DOM.span(null, e.number),
                        React.DOM.img({src:`${e.url}`, className: 'img'}),
                )
            
        });

        var panel = React.DOM.div({className: 'shop_str'}, 
            React.DOM.span(null , 'Имя'),
            React.DOM.span(null , 'Цена'),
            React.DOM.span(null , 'Количество'),
            React.DOM.span(null , 'Картинка'),
        )

        var shop = React.DOM.div({className: 'shop'}, panel, table)

        return React.DOM.div(null,
            React.DOM.h1(null, `Магазин ${name}`), shop
        )
    
    },
})