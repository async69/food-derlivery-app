import Axios from "axios";

const baseURL = "http://192.168.1.4:3000/api";

export default handleLogin = async (
  dataObj,
  setUserToken,
  setID,
  enableLoader
) => {
  try {
    const response = await Axios.post(baseURL + "/auth", dataObj);
    setUserToken(response.data.token);
    setID(response.data.user._id);
    if (enableLoader) {
      enableLoader(false);
    }
    return {
      status: response.status,
      data: response.data,
    };
  } catch (e) {
    if (enableLoader) {
      enableLoader(false);
    }
    return {
      status: 400,
    };
  }
};

export const handleUserUpdate = async (token, setUserDetails) => {
  Axios.defaults.headers["x-auth-token"] = token;
  const response = await Axios.get(baseURL + "/profiles/me");
  console.log(response.data, "yab");
  setUserDetails(response.data);

  return response;
};
