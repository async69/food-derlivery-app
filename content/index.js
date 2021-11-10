import React, { useContext, useEffect } from "react"
import { MainContext } from "../Context"

const Content = ({ fetchTemplates, templates }) => {
  const { state, toggleState, setState } = useContext(MainContext)
  useEffect(() => {
    toggleState({ one: 1 })
    setState({ aaa: 1 })
  }, [toggleState])

  useEffect(() => {
    console.log("here", state)
  }, [state])

  console.log("here", state)
  return (
    <></>
  )
}

export default Content