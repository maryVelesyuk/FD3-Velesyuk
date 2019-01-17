import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    let str = this.props.text;
    let regexp = /<br ?\/?>/gi;
    let result = str.split(regexp);
    let arr=[];

    result.forEach((item,i) => {
      arr.push(<br key={i} />);
      arr.push(item);
    }
    );
    arr.shift();

    return <div className="br2jsx">{arr}</div>;
  }
}

export default BR2JSX;
