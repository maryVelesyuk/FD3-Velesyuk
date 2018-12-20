var IshopBlock = React.createClass({

  displayName: 'IshopBlock',

  propTypes: {
    title: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        count: React.PropTypes.string.isRequired,
      })
    ),
    products: React.PropTypes.array.isRequired    
  },

  render: function() {

    var titleCode = this.props.title.map (i =>
      React.DOM.tr({key: i.id, className: 'TableTitle'},
        React.DOM.td(null, i.name),
        React.DOM.td(null, i.price),
        React.DOM.td(null, i.image),
        React.DOM.td(null, i.count),
      ),
    );


    return React.DOM.table({className: 'Ishop'}, 
      React.DOM.thead(null, titleCode),
      React.createElement(Item, {products: this.props.products} ),
    );

  },

})