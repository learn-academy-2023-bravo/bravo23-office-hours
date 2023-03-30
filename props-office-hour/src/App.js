// import
import React, {useState} from "react"
import "./App.css"
import Box from "./components/Box"

// declare functional component
const App = () => {

  // data needed for the component
  const [roll, setRoll] = useState(1)
  const rollDice = () => {
    let diceNumber = Math.ceil(Math.random() * 5)
    setRoll(diceNumber)
  }

  // return statement with JSX, what is being seen on the UI
  return(
    <>
      <h1>Let's Roll</h1>
      <Box roll={roll} rollDice={rollDice} />
    </>
  )
}

// export, so the component can be accessed
export default App