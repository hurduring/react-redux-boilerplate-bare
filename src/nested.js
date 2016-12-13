import React from 'react';
import { Match } from 'react-router';

export default (route) => {
  return (<Match {...route} render={(props) => {
      return (<route.component {...props} routes={route.routes}/>);
    }
  }/>)
};