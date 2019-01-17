import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    let childrenJSX = this.props.children;
    let colorsArr = this.props.colors;

    for (let i = 0; i < colorsArr.length; i++) {
      childrenJSX = <div style = {{border:"solid 5px " + colorsArr[i], padding:"10px", display: "inline-block"}}> {childrenJSX} </div>
    }

    return (
      childrenJSX
    );
  }

}

export default RainbowFrame;
