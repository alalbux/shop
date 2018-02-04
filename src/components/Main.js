import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product  from './Product';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Product' component={Product}/>
    </Switch>
  </main>
)

export default Main
