import React from 'react';
import { Link } from 'react-router';
import './main.scss';

const Home = () => (
  <div>
    <h1>123123</h1>
    <p>13902819308129381290</p>
    <Link to="/counter" className="derp">
      Go to
    </Link>
  </div>
);

export default Home;
