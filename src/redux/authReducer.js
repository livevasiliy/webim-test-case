import { SET_AUTH_TOKEN } from './types'

const initialState = {
  token: !!localStorage.getItem('auth_token') === true
      ? localStorage.getItem('auth_token')
      : ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: localStorage.setItem('auth_token', action.payload)
      }
    default: return state
  }
}
