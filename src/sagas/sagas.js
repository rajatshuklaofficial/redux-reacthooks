import { all, call, put, takeEvery, spawn } from 'redux-saga/effects'
//import { push } from 'react-router-redux'
import agent from '../agents'

import {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
} from '../actions/actions';
import {
    USERS_GET,
    USERS_SUCCESS,
    USERS_FAILURE,
} from '../constants/constants';

//import * as routes from '../constants/routes'

function *getUsersSaga () {
  try {
    const data = yield call(agent.Users.get)
    console.log(data)
    yield put(getUsersSuccess(data))
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

function* usersSagas () {
  yield all([
    takeEvery(USERS_GET, getUsersSaga)
  ])
}

export default function* rootSaga() {
  yield all([
    usersSagas()
  ])
}