import React from 'react';
import { Link } from 'react-router';
import './main.scss';

const Header = ({ routes }) => (
  <div>
    <h1>Header</h1>
    <Link to="/counter">Go to counter</Link>
    <Link to="/">Go to about</Link>
  </div>
);

export default Header;
