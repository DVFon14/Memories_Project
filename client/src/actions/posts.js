import * as api from "../api";

//we are using redux thunk here because we need asynchronous logic
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
