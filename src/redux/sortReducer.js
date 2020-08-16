import { ASC, SORT_USERNAME } from './types'

const initialState = {
  sortType: ASC
}

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_USERNAME:
      return {
        ...state,
        sortType: action.sortType
      }
    default: return state
  }
}
