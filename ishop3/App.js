"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import IshopBlock from './components/IshopBlock';

let productList = require('./products.json');

ReactDOM.render(
  <IshopBlock 
    products= {productList}
  />, 
  document.getElementById('container') 
);

