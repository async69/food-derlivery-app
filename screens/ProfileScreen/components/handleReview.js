import Axios from "axios";
import endPoints from "../../../config/endPoints";

export default async (
  { content, restaurantId, customerId },
  setIsVisible,
  enableLoader
) => {
  console.log({
    content: content,
    restaurantId: restaurantId,
    customerId: customerId,
  });
  const response = await Axios.post(endPoints.baseURL + "/feedbacks", {
    content: content,
    restaurantId: restaurantId,
    customerId: customerId,
  });
  if (enableLoader) {
    enableLoader(false);
  }
  setIsVisible(false);
  return response;
};
