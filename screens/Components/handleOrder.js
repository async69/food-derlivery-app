import Axios from "axios"
import endPoints from "../../config/endPoints"

export default async ({
  foodID, customerID
}, setIsVisible, enableLoader) => {
  console.log({
    foodID, customerID
  })
  const response = await Axios.post(endPoints.baseURL + "/orders", {
    "foodId": foodID,
    "customerId": customerID
  }).catch(err => {
    console.warn("Error Occured")
    console.info(err)
  })
  enableLoader(false)
  setIsVisible(false)
  return response
}