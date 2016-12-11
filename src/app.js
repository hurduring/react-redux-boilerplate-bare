import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/home';
import Counter from './containers/counter';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Router>
);

export default App;
