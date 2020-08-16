import {
  SET_AUTH_TOKEN,
  FETCH_USERS,
  HIDE_ALERT,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  SEARCH_USERNAME,
  SORT_USERNAME,
} from './types'
import UserService from '../services/users'
import AuthService from '../services/auth'
import { push } from 'connected-react-router'
const userService = new UserService()

export function setAuthToken (values) {
  return async dispatch => {
    try {
      const authService = new AuthService()
      const authResponse = await authService.getAuthToken(values)

      if (authResponse.status === 200) {
        dispatch({ type: SET_AUTH_TOKEN, payload: authResponse.token })
      }

      dispatch(showAlert(authResponse.errorMsg))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)

      return false

    } catch (e) {
      dispatch(showAlert(e.message))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }
  }
}

export function fetchUsers () {
  return async dispatch => {
    try
    {
      dispatch(showLoader())
      if (!!localStorage.getItem('auth_token')) {
        const users = await userService.fetchAllUsers()
        dispatch({ type: FETCH_USERS, payload: users })
        dispatch(hideLoader())
      } else {
        dispatch(push('/login'))
      }
    } catch (e) {
      dispatch(showAlert(e.message))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 300)
      dispatch(hideLoader())
    }
  }
}

export function showLoader () {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader () {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert (text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert () {
  return {
    type: HIDE_ALERT,
    payload: null,
  }
}

export function filterUsername (username) {
  return {
    type: SEARCH_USERNAME,
    payload: username
  }
}

export function sortUsernameBy (sortType) {
  return {
    type: SORT_USERNAME,
    sortType,
  }
}
