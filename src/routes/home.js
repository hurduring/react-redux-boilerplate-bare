import React from 'react';
import { Link } from 'react-router';
import Test from '../components/test/test';
import TestClass from '../components/test-class/test-class';
import './main.scss';

const Home = () => (
  <div>
    <h1>zzzzzzzzzzzz</h1>
    <p>111111111111</p>
    <Test />
    <TestClass />
    <Link to="/counter" className="derp">
      Go to
    </Link>
  </div>
);

export default Home;
