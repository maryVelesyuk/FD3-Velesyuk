var IshopBlock = React.createClass({

  displayName: 'IshopBlock',

  propTypes: {
    products: React.PropTypes.array.isRequired,
    /*
    answers:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
      })
    )
    */
  },

  render: function() {

    var productCode=this.props.products.map( v =>
        React.DOM.div({key:v.id,className:'Product'},
          React.DOM.span({className:'Name'},v.name),
          React.DOM.span({className:'Price'},v.price),
          React.DOM.span({className:'Image'},
            React.DOM.img({src:v.image}),
          ),
          React.DOM.span({className:'Residual'},v.count),
        )
      );
    return React.DOM.div( {className:'IshopBlock'}, 
      React.DOM.div( {className:'Products'}, productCode ),

    );
  },

});