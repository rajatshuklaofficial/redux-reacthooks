import { all, call, put, takeEvery, spawn, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
//import { push } from 'react-router-redux'
import agent from '../agents'

import {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
    login,
    login_success,
    login_faliure,
    getAllProducts,
    getAllProducts_success,
    getAllProducts_faliure,
} from '../actions/actions';
import {
    USERS_GET,
    USERS_SUCCESS,
    USERS_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
    ALLPRODUCTS,
    ALLPRODUCTS_SUCCESS,
    ALLPRODUCTS_FALIURE,
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

function* loginFunc(action) {
    try {
        const response = yield axios.post('https://locadtestherokuapi.herokuapp.com/api/users/login', action.payload);
        if (response.status === 200) {
            let token = (response.data)?response.data.token.split(" "):null
            token?localStorage.setItem('token_locad', token[1]):null
            yield put(login_success(response.data));
        }
    } catch (err) {
        console.log(err);
        yield put(login_faliure(err));
    }
}

function* getAllProductFunc(action) {
    console.log("dskjhfkjhvkdfjhvdjkh")
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token_locad')}` }
        };
    try{
        const response = yield axios.get('https://locadtestherokuapi.herokuapp.com/api/products/allProducts',config)
        console.log("all products=======================>")
        console.log(response.data)
        if (response.status === 200) {
            yield put(getAllProducts_success(response.data));
        }
    }catch(err){
        console.log(err)
        yield put(getAllProducts_faliure(err))
    }
}

function* usersSagas () {
  yield takeLatest(USERS_GET, getUsersSaga);
}

function* loginSaga () {
  yield takeLatest(LOGIN, loginFunc);
}

function* allProductsSaga () {
  yield takeLatest(ALLPRODUCTS, getAllProductFunc);
}


export default function* rootSaga() {
  yield all([
    usersSagas(),
    loginSaga(),
    allProductsSaga()
  ])
}