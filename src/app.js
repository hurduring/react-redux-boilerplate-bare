import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import Header from './containers/header';
import Footer from './containers/footer';
import About from './containers/about';
import Counter from './containers/counter';

const App = () => (
  <BrowserRouter>
    <div>
      <Match pattern="/" component={Header} />
      
      <Match exactly pattern="/" component={About} />
      <Match pattern="/counter" component={Counter} />

      <Match pattern="/" component={Footer} />
    </div>
  </BrowserRouter>
);

export default App;
