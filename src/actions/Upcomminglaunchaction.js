export const GET_POSTS_UPCOMMING = 'GET_POSTS_UPCOMMING'
export const GET_POSTS_SUCCESS_UPCOMMING = 'GET_POSTS_SUCCESS_UPCOMMING'
export const GET_POSTS_FAILURE_UPCOMMING = 'GET_POSTS_FAILURE_UPCOMMING'

export const getPosts = () => ({ type: GET_POSTS_UPCOMMING })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS_UPCOMMING,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE_UPCOMMING })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
