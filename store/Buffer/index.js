export const stateName = "buffer"

export const constants = {
  "SET_CURRENT_RESTAURANT": "SET_CURRENT_RESTAURANT",
  "SET_CURRENT_CATEGORY": "SET_CURRENT_CATEGORY",
  "SET_CURRENT_DATA": "SET_CURRENT_DATA",
  "SET_CURRENT_OBJECT": "SET_CURRENT_OBJECT"
}

export const initialState = {
  currentRestaurant: "",
  currentCategory: "",
  currentData: "",
  currentObject: "",
}

export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_CURRENT_RESTAURANT: {
      return {
        ...state,
        currentRestaurant: action.payload
      }
    }

    case constants.SET_CURRENT_CATEGORY: {
      return {
        ...state,
        currentCategory: action.payload
      }
    }

    case constants.SET_CURRENT_DATA: {
      return {
        ...state,
        currentData: action.payload
      }
    }

    case constants.SET_CURRENT_OBJECT: {
      return {
        ...state,
        currentObject: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const selectBufferContent = state => {
  return state.entities[stateName]
}