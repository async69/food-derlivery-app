import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { simulateLogic } from "./logic"

const url = "/restaurants"
const Restaurant = new StateArrayModel({ stateName: "restaurant" })

Restaurant.createSlice()
Restaurant.setURL(url)

export const {
  reducer,
  stateName
} = Restaurant.getEntity()

// Restaurant.enableCustomAct((dispatch, action) => {
//   const response = Restaurant.getAPICallType(action.payload.onSuccess)
//   if (response) {
//     const { type, apiType } = response
//     simulateLogic({
//       type,
//       apiType,
//       dispatch,
//       action
//     })
//   }
// })

export const {
  Add, Fetch, Edit, Remove, Patch
} = Restaurant.getAPIHandles()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = Restaurant.getSelectors()

export { selectData as selectRestaurants }