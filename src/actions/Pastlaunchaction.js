export const GET_POSTS_PAST = 'GET_POSTS_PAST'
export const GET_POSTS_SUCCESS_PAST = 'GET_POSTS_SUCCESS_PAST'
export const GET_POSTS_FAILURE_PAST = 'GET_POSTS_FAILURE_PAST'

export const getPosts = () => ({ type: GET_POSTS_PAST })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS_PAST,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE_PAST })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches/past')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
