const axios = require("axios");

export async function userDetails(userId) {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASEURL}/users/${userId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}



export default { userDetails };