var Item = React.createClass({
  
  displayName: 'Item',

  propTypes: {
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        image: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
      })
    )  
  },

  render: function() {
       
      var productCode = this.props.products.map (v => 
          React.DOM.tr({key: v.id, className: 'Product'},
            React.DOM.td(null, v.name),
            React.DOM.td(null, v.price),
            React.DOM.td(null,
              React.DOM.img({src: v.image}, ),  
            ),
            React.DOM.td(null, v.count),   
          ),
        );
    
  return React.DOM.tbody( null, productCode);
  },
})