import React from 'react';
import ProductAPI from '../api';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import Button from './Button';


class ProductDetails extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      products: ProductAPI,

      cart: {
        products: []
      }
    }

    this.addProduct = this.addProduct.bind(this)
  }

  addProduct (product) {
      const { cart } = this.state
      product = {...product}
  
      this.setState({
        cart: {
          products: [...cart.products, product]
        }
      })
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
  render () {
    const item = ProductAPI.get(this.props.match.params.id);
          return (          
            <div>
              <h1>{item.name}</h1>
              <h2>price: {item.price}</h2>
              <Button onClick={() => this.addProduct(item)}>Comprar</Button>
              <Link to='/'>Back</Link>
            </div>
          )
  }
}

export default ProductDetails
