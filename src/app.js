import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import Home from './containers/home';

const App = () => (
  <BrowserRouter>
    <div>
      <Match pattern="/" component={Home}/>
    </div>
  </BrowserRouter>
);

export default App;
