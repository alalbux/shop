import React from 'react';
import ProductAPI from '../api';
import { Link } from 'react-router-dom';

const ProductList = () => (
  <div>
    <ul>
      {
        ProductAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/product/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)


export default ProductList
