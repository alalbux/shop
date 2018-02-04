import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/product'>Products</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
