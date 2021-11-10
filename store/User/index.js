import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"

const url = "/users"
const User = new StateArrayModel({ stateName: "users" })

User.createSlice()
User.setURL(url)

User.setAPICalls({
  Edit: (data) => {
    return data
  }
})

export const {
  reducer,
  stateName
} = User.getEntity()

export const {
  Add, Fetch, Edit, Remove, Patch
} = User.getAPICalls()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = User.getSelectors()

export { selectData as selectUsers }