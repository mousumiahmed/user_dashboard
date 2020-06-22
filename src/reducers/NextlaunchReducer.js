import * as actions from '../actions/Nextlaunchaction.js'

export const initialState = {
  loading: false,
  hasErrors: false,
  nextlaunch: {},
}

export default function NextlaunchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_NEXT:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS_NEXT:
      return { nextlaunch:action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE_NEXT:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}