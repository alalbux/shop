import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';


const Product = () => (
  <Switch>
    <Route exact path='/product' component={ProductList}/>
    <Route path='/product/:id' component={ProductDetails}/>
  </Switch>
  
)

export default Product
