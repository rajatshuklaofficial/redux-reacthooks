import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'



import { fromJS } from 'immutable';



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

const initialState = fromJS({
  users:null
});

const rootReducer = (state = initialState , action) => {
  console.log(action.users)
  console.log(action.type)
  switch (action.type) {
    case USERS_SUCCESS:
      return state.set('users', fromJS(action.users));
    default:
      return state
  }
}

export default history =>
  combineReducers({
    router: connectRouter(history),
    rootReducer,
  })

