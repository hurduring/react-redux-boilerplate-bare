import React from 'react';
import { Link } from 'react-router';
import MatchWithSubRoutes from '../nested';

import './main.scss';

const Header = ({ routes }) => (
  <div>
    <h1>Header</h1>

    <Link to="/counter">Go to counter</Link>
    <Link to="/about">Go to about</Link>
    
     {routes.map((route, i) => (
      <MatchWithSubRoutes key={i} {...route}/>
    ))}
    
  </div>
);

export default Header;
