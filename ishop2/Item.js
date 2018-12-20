var Item = React.createClass({
  
  displayName: 'Item',

  propTypes: {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    image: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    cbClicked: React.PropTypes.func.isRequired,
    cbProductDelete: React.PropTypes.func,
    selectedProductId: React.PropTypes.number
  },

  goodClicked: function(EO){
    this.props.cbClicked(this.props.id);
  },

clickedDelete: function(EO){
    this.props.cbProductDelete(this.props.id);
},

  render: function() {

    return React.DOM.tr( {
        className: (this.props.selectedProductId!=this.props.id) ? "Product" : "ProductSelected" ,
        onClick: this.goodClicked },
          React.DOM.td(null, this.props.name),
          React.DOM.td(null, this.props.price),
          React.DOM.td(null, 
            React.DOM.img({ src: this.props.image, alt: this.props.name},)
          ),
          React.DOM.td(null, this.props.count),
          React.DOM.td(null, 
            React.DOM.input({defaultValue: 'Delete', type: 'button', onClick: this.clickedDelete}, )
          ),
    );

  },
})