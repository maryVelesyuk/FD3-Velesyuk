var IshopBlock = React.createClass({

  displayName: 'IshopBlock',

  propTypes: {
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        image: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
      })
    ),  
  },

  getInitialState: function() {
    return { 
      selectedProductId: null,
      productsArr : this.props.products
    };
  },

  productSelected: function (id) {
    console.log('выбран товар с id: ', id);
    this.setState({selectedProductId: id});
  },

  deleteProduct: function(id){
    confirm("Вы уверены?") ? (
      this.setState({productsArr: this.state.productsArr.filter( code => code.id != id)})
    ): null;
  },

  render: function() {

    var productCode = this.state.productsArr.map( v => 
      React.createElement( Item, { key:v.id, id: v.id,
      name: v.name, price: v.price, image: v.image, 
      count: v.count, 
      cbClicked: this.productSelected,
      cbProductDelete: this.deleteProduct,
      selectedProductId:this.state.selectedProductId }
      ),
    );

    return React.DOM.table({className: 'Ishop'}, 
      React.DOM.thead(null, 
        React.DOM.tr({className: 'TableTitle'},
          React.DOM.td(null, 'Name'),
          React.DOM.td(null, 'Price'),
          React.DOM.td(null, 'Image'),
          React.DOM.td(null, 'Count'),
          React.DOM.td(null, 'Delete'),
        ),  
      ),
      React.DOM.tbody(null, productCode)
    );

  },


})