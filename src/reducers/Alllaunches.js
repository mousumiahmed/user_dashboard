import * as actions from '../actions/Allaction.js'

export const initialState = {
  loading: false,
  hasErrors: false,
  all: {},
}

export default function AlllaunchesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS:
      return { all:action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
