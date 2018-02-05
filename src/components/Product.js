import React from 'react';
import PropTypes from 'prop-types';

const Product = ({product, children, onClick}) => (
  <div className="item" onClick={onClick}>
      <h2 className="product-title">{product.name}</h2>
      <strong className="product-price">{product.price}</strong>

      {children}  
  </div>
)
console.log(Product.product);

Product.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  product: PropTypes.object.isRequired
}

export default Product