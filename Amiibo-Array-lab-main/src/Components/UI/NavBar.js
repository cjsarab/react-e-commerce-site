import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
        <ul className="nav-links">
            <li className="home-button"><Link to="/">Home</Link></li>
            <li className="basket-button"><Link to="/basket">Basket</Link></li>
        </ul>
    </div>
  );
};

export default NavBar;