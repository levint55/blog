import jsonPlaceholder from '../apis/JSONPlaceholder';

export const fetchPosts = async () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POST',
      payload: response
    })
  }
};