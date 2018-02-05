import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Button from './Button';

const Cart = ({products, removeProduct}) => {
  const total = products.map(product => product.price).reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0)

  return (
    <div className="cart">
      <div>
        <h3>{products.length ? `Carrinho (${products.length})` : 'Seu carrinho está vazio :('}</h3>
      </div>
      <div className="products-container">  
        <div className="products">
            {
            products.map(product => (
                <Product key={product.id} product={product}>
                <button onClick={() => removeProduct(product.id)} className="remove">&times;</button>
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
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

Cart.defaultProps = {
  products: []
}

export default Cart