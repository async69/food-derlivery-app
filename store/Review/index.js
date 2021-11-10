import StateArrayModel from "../../wrappers/StateModels/StateArrayModel"

const url = "/feedbacks"
const Review = new StateArrayModel({ stateName: "feedbacks" })

Review.createSlice()
Review.setURL(url)

export const {
  reducer,
  stateName
} = Review.getEntity()

export const {
  Add, Fetch, Edit, Remove, Patch
} = Review.getAPIHandles()

export const {
  selectAddStatus, selectFetchStatus, selectEditStatus, selectDeleteStatus,
  selectData, selectPatchStatus
} = Review.getSelectors()

export { selectData as selectReviews }