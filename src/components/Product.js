import React from 'react';
import ProductAPI from '../api';
import { Link } from 'react-router-dom';


const Product = () => (
  <div>
    <ul className='products'>
      {
        ProductAPI.all().map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>
              <div className='item'>
                <h2 className='title'>{p.name}</h2> 
                <p className='price'>{p.price}</p>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
  
)

export default Product
