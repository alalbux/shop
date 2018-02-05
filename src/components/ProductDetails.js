import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({product}) => (
  <div className="details">
      <ul>
          <li>{product.name}</li>
      </ul>  
  </div>
)

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductDetails
