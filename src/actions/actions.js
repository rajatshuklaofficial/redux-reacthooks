import {
    USERS_GET,
    USERS_SUCCESS,
    USERS_FAILURE
} from '../constants/constants';


export const getUsers = () => ({
  type: USERS_GET
})

export const getUsersSuccess = users => ({
  type: USERS_SUCCESS,
  users
})

export const getUsersFailure = error => ({
  type: USERS_FAILURE,
  error
})
