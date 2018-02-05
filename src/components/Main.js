import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product  from './Product';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';

console.log(Route);
const Main = () => (      
        <main>
          <Switch>
            <Route exact path='/' component={Product}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/product/:id' component={ProductDetails}/>
          </Switch>
        </main>
    )
export default Main
