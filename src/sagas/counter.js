import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { actions, types } from '../actions'

function* incrementAsync(action) {
  yield call(delay, 0, null);
  yield put(actions.increment(action.payload));
}

export function* incrementAsyncSaga() { // eslint-disable-line
  yield* takeLatest(types.INCREMENT_ASYNC, incrementAsync)
}