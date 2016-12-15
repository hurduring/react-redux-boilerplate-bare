import React from 'react';
import { actions } from '../actions';

import { connect } from 'react-redux';


const Counter = ({ counter, dispatch }) => (
  <div>
    <h1>Countfdsafsefdsar</h1>
    {counter}
    <hr />
    <button onClick={() => dispatch(actions.incrementAsync(5))}>next</button>
    <hr />
  </div>
);

const stateToProps = ({ counter }) => {
  return { counter };
};

export default connect(stateToProps)(Counter);
