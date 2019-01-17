import React from 'react';
import PropTypes from 'prop-types';

import './IshopBlock.css';

import Item from './Item';

class IshopBlock extends React.Component {

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ),  
  };

  state = { 
    selectedProductId: null,
    productsArr : this.props.products,
  };

  productSelected = (id) => {
    console.log('выбран товар с id: '+ id);
    this.setState({selectedProductId: id});
  };

  deleteProduct = (id) => {
    confirm("Вы уверены?") ? (
      this.setState({productsArr: this.state.productsArr.filter( code => code.id != id)})
    ): null;
  };

  render() {

    var productCode = this.state.productsArr.map( v => 
      <Item key= {v.id} id= {v.id}
      name= {v.name} price= {v.price} image= {v.image} 
      count= {v.count} 
      cbClicked= {this.productSelected}
      cbProductDelete= {this.deleteProduct}
      selectedProductId= {this.state.selectedProductId }
      />
    );

    return (
    <table className= 'Ishop'> 
      <thead> 
        <tr className= 'TableTitle'>
          <td>Name</td>
          <td>Price</td>
          <td>Image</td>
          <td>Count</td>
          <td>Delete</td>
        </tr>
      </thead>  
      <tbody>{productCode}</tbody>
    </table>  
    );
  }

}

export default IshopBlock;