import jsonPlaceholder from "../apis/JSONPlaceholder";

// Before Refactor
// export const fetchPosts = async () => {
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({
//       type: 'FETCH_POST',
//       payload: response
//     })
//   }
// };

// After Refactor
export const fetchPosts = async () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POST",
    payload: response,
  });
};
