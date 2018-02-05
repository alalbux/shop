import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Music Shop</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
