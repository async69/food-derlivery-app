export const stateName = "authentication"

export const constants = {
  "SET_TOKEN": "SET_TOKEN",
  "SET_ID": "SET_ID",
  "SET_USER_DETAILS": "SET_USER_DETAILS",
  "SET_CURRENT_SCREEN": "SET_CURRENT_SCREEN"
}

export const initialState = {
  token: "",
  id: "",
  userData: {},
  currentScreen: ""
}

export const screenTypes = {
  "PENDING": "PENDING",
  "COMPLETED": "COMPLETED"
}

export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }

    case constants.SET_ID: {
      return {
        ...state,
        id: action.payload
      }
    }

    case constants.SET_USER_DETAILS: {
      return {
        ...state,
        userData: action.payload
      }
    }

    case constants.SET_CURRENT_SCREEN: {
      return {
        ...state,
        currentScreen: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export const selectUserContent = state => {
  return state.entities[stateName]
}