export const GET_POSTS_NEXT = 'GET_POSTS_NEXT'
export const GET_POSTS_SUCCESS_NEXT = 'GET_POSTS_SUCCESS_NEXT'
export const GET_POSTS_FAILURE_NEXT = 'GET_POSTS_FAILURE_NEXT'

export const getPosts = () => ({ type: GET_POSTS_NEXT })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS_NEXT,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE_NEXT })

export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches/next')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}
