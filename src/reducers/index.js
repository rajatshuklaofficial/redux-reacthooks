import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'



import { fromJS } from 'immutable';



import {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
    login,
    login_success,
    login_faliure,
    getAllProducts,
    getAllProducts_success,
    getAllProducts_faliure
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

const initialState = fromJS({
  users:null,
  allProducts:null
});

const rootReducer = (state = initialState , action) => {
  console.log(action)
  console.log(action.type)
  switch (action.type) {
    case USERS_SUCCESS:
      return state.set('users', fromJS(action.users));
    case ALLPRODUCTS_SUCCESS:
      return state.set('allProducts',fromJS(action.allProducts));
    default:
      return state
  }
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    rootReducer,
  })

