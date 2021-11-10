import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"

const url = "/orders"
const Order = new StateArrayModel({ stateName: "orders" })

Order.createSlice()
Order.setURL(url)

export const {
  reducer,
  stateName
} = Order.getEntity()

export const {
  Add, Fetch, Edit, Remove, Patch
} = Order.getAPIHandles()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = Order.getSelectors()

export { selectData as selectOrders }