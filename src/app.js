import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import MatchWithSubRoutes from './nested';

import Header from './containers/header';
import About from './containers/about';
import Counter from './containers/counter';

const routes = [
  {
    pattern: '/',
    component: Header,
    routes: [
      {
        pattern: '/about',
        component: Counter
      },
      {
        pattern: '/counter',
        component: About
      }
    ]
  }
];

const App = () => (
  <BrowserRouter>
    <div>
      {routes.map((route, i) => (
        <MatchWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </BrowserRouter>
);

export default App;
