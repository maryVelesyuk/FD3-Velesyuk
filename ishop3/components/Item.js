import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {
  
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    cbClicked: PropTypes.func.isRequired,
    cbProductDelete: PropTypes.func,
    selectedProductId: PropTypes.number,
  };

  goodClicked = (EO) => {
    this.props.cbClicked(this.props.id);
  };

  clickedDelete = (EO) => {
      this.props.cbProductDelete(this.props.id);
  };

  render() {

    return (
      <tr className= {(this.props.selectedProductId!=this.props.id) ? "Product" : "ProductSelected"}
        onClick = {this.goodClicked }>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
          <td><img src= {this.props.image} alt= {this.props.name} /></td>
          <td>{this.props.count}</td>
          <td><input defaultValue= 'Delete' type= 'button' onClick= {this.clickedDelete} /></td>
      </tr>
    );
  }
}

export default Item;