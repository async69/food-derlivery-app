import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"
import { simulateLogic } from "./logic"

const url = "/foods"
const Food = new StateArrayModel({ stateName: "foods" })

Food.createSlice()
Food.setURL(url)

export const {
  reducer,
  stateName
} = Food.getEntity()

export const {
  Add, Fetch, Edit, Remove, Patch
} = Food.getAPIHandles()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = Food.getSelectors()

export { selectData as selectFoods }