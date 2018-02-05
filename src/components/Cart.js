import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Button from './Button';

const Cart = ({products, removeProduct}) => {
  const total = products.map(product => product.price).reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0)

  return (
    <div>
      <div>
        <h3>{products.length ? `Carrinho (${products.length})` : 'Seu carrinho está vazio :('}</h3>
      </div>

      <div className="products">
        {
          products.map(product => (
            <Product key={product._id} product={product}>
              <button onClick={() => removeProduct(product._id)} className="product-remove">&times;</button>
            </Product>
          ))
        }
      </div>

      <div className="total">
        <div className="cart-price">
          <p>
            Total
            <strong>{total}</strong>
          </p>
        </div>
        <Button disabled={(total <= 0) && 'disabled'}>Finalizar compra</Button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  visible: PropTypes.bool,
  products: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired
}

Cart.defaultProps = {
  visible: false,
  products: []
}

export default Cart
