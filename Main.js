import React, { useState } from "react"
import App from "./App"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import Content from "./content/"
import { MainContext, MainProvider } from "./Context"

export default () => {
  const store = configureStore()
  const [state, setState] = useState({
    one: 10
  })

  const toggleState = newState => {
    setState({
      ...state,
      ...newState
    })
  }

  return (
    <Provider store={store}>
      {/* <MainProvider value={{ state, toggleState, setState }}> */}
        <App />
      {/* </MainProvider> */}
    </Provider>
  )
}