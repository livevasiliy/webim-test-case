import { SEARCH_USERNAME } from './types'

const initialState = ''

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERNAME:
      return action.payload
    default: return state
  }
}
