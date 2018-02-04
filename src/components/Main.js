import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product  from './Product';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Product}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/product/:id' component={ProductDetails}/>
    </Switch>
  </main>
)

export default Main
