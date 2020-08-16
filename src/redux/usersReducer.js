import {
  CREATE_USER,
  FETCH_USER,
  FETCH_USERS,
  UPDATE_USER,
} from './types'

const initialState = {
  users: [],
  user: {}
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload }
    case CREATE_USER:
      return { ...state, users: state.users.concat([action.payload]) }
    case FETCH_USER:
      return { ...state, user: action.payload }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.userId
          ? { ...user, user: {...action.payload.userData} }
          : user
        )
      }
    default: return state
  }
}
