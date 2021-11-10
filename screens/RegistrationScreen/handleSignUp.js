import Axios from "axios"
import endPoints from "../../config/endPoints"

export default async (dataObj, setUserToken, enableLoader, setID) => {
  try {
    const response = await Axios.post(endPoints.baseURL + "/users", dataObj)
    setUserToken(response.data.token)
    setID(response.data.user._id)
    if (enableLoader) {
      enableLoader(false)
    }
    return {
      status: response.status,
      data: response.data
    }
  } catch(e) {
    if (enableLoader) {
      enableLoader(false)
    }
    return {
      status: 400
    }
  }
}