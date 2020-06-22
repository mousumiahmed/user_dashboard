import * as actions from '../actions/Pastlaunchaction.js'

export const initialState = {
  loading: false,
  hasErrors: false,
  pastlaunch: {},
}

export default function PastlaunchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_PAST:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS_PAST:
      return { pastlaunch:action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE_PAST:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}