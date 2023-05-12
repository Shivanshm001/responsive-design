import axios from "axios";

export const createPost = (postData) => async (dispatch) => {
  const postDataResult = await axios.post(
    "http://3.233.82.34:8080/post/api/post/add",
    postData,
    {
      headers: {
        "Accept-Language": "en",
        // "Authorization" : `Bearer ${postData.token}`
      },
    }
  );
  console.log("postDataResult", postDataResult);
  dispatch({
    type: "SET_POST_DATA",
    payload: postDataResult.data,
  });
  return postDataResult.data
};

export const setLikes = (likeObject) => (dispatch) => {
  dispatch({
    type: "SET_LIKES_DATA",
    payload: likeObject,
  });
};
