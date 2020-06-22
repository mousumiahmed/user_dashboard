export const GET_POSTS_LATEST = 'GET_POSTS_LATEST'
export const GET_POSTS_SUCCESS_LATEST = 'GET_POSTS_SUCCESS_LATEST'
export const GET_POSTS_FAILURE_LATEST = 'GET_POSTS_FAILURE_LATEST'

export const getPosts = () => ({ type: GET_POSTS_LATEST })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS_LATEST,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE_LATEST })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches/latest')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}