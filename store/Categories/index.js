import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"

const url = "/categories"
const Category = new StateArrayModel({ stateName: "categories" })

Category.createSlice()
Category.setURL(url)

export const {
  reducer,
  stateName
} = Category.getEntity()

export const {
  Add, Fetch, Edit, Remove, Patch
} = Category.getAPIHandles()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = Category.getSelectors()

export { selectData as selectCategories }