import * as actions from '../actions/Latestlaunch.js'

export const initialState = {
  loading: false,
  hasErrors: false,
  latestlaunch: {},
}

export default function LatestlaunchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_LATEST:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS_LATEST:
      return { latestlaunch:action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE_LATEST:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}