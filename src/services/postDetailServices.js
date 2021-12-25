const axios = require("axios");

export async function getPost(postId) {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASEURL}/posts/${postId}`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
export default {getPost};