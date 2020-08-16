import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import { appReducer } from './appReducer'
import { filterReducer } from './filterReducer'
import { sortReducer } from './sortReducer'

export const rootReducer = (history) => combineReducers({
  app: appReducer,
  router: connectRouter(history),
  authToken: authReducer,
  users: usersReducer,
  filters: filterReducer,
  sortBy: sortReducer
})
