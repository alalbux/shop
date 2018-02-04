import React from 'react';
import ProductAPI from '../api';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
  const item = ProductAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!item) {
    return <div>Sorry, but the product was not found</div>
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>price: {item.price}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

export default ProductDetails