import React from 'react';
import ProductAPI from '../api';
import { Switch, Route } from 'react-router-dom';
import Product  from './Product';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';

class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      products: ProductAPI,

      cart: {
        products: []
      }
    }

    //this.details = this.details.bind(this);
  }

  addProduct (product) {
    const { cart } = this.state
    product = {...product}

    this.setState({
      cart: {
        products: [...cart.products, product]
      }
    })

    this.addProductCart = this.addProductCart.bind(this)
    //this.removeProductFromCart = this.removeProductFromCart.bind(this
  }
  removeProduct (productId) {
        const { cart } = this.state

        this.setState({
          cart: {
            ...cart,
            products: cart.products.filter(product => product._id !== productId)
          }
        })
    }

  addProductCart (product) {
      const { cart } = this.state
      product = {...product}

      this.setState({
        cart: {
          products: [...cart.products, product]
        }
      })
    }

  removeProductCart (productId) {
      const { cart } = this.state

      this.setState({
        cart: {
          ...cart,
          products: cart.products.filter(product => product._id !== productId)
        }
      })
    }

  render () {
        const { cart } = this.state
       
        return (      
        <main>
          <Switch>
            <Route exact path='/' component={Product}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/product/:id' component={ProductDetails}/>
          </Switch>
          <Cart
            products={cart.products}
          />
        </main>
    )
  }
}

export default Main
