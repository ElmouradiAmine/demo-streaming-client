import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
 
  <header className="header">
    <Link to="/">
      <h1 className="header__heading">
        DEMO Streaming
      </h1>
    </Link>
    <div className="header__cta">
      <button className="btn" type="button">Log in</button>
      <button className="btn btn--filled" type="button">Start your free trial</button>
    </div>
  </header>
  
);

export default Header;
