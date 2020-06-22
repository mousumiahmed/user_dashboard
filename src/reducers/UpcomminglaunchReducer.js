import * as actions from '../actions/Upcomminglaunchaction.js'

export const initialState = {
  loading: false,
  hasErrors: false,
  upcomminglaunch: {},
}

export default function UpcomminglaunchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_UPCOMMING:
      return { ...state, loading: true }
    case actions.GET_POSTS_SUCCESS_UPCOMMING:
      return { upcomminglaunch:action.payload, loading: false, hasErrors: false }
    case actions.GET_POSTS_FAILURE_UPCOMMING:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}