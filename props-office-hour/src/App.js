// import
import React from "react"
import "./App.css"
import Box from "./components/Box"

// declare functional component
const App = () => {
  // data needed for the component

  // return statement with JSX, what is being seen on the UI
  return(
    <>
      <h1>Let's Roll</h1>
      <Box />
    </>
  )
}

// export, so the component can be accessed
export default App