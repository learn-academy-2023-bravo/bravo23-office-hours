// import
import React, {useState} from "react"
import "./App.css"
import Box from "./components/Box"
import Log from "./components/Log"
import dice1 from "./assets/dice1.png"
import dice2 from "./assets/dice2.png"
import dice3 from "./assets/dice3.png"
import dice4 from "./assets/dice4.png"
import dice5 from "./assets/dice5.png"
import dice6 from "./assets/dice6.png"

// declare functional component
const App = () => {

  // data needed for the component
  const [roll, setRoll] = useState(1)
  const [log, setLog] = useState([])

  const diceArray = [
    dice1, dice2, dice3, dice4, dice5, dice6
  ]
  const [dice, setDice] = useState(dice1)
  
  const rollDice = () => {
    let diceNumber = Math.ceil(Math.random() * 5)
    setRoll(diceNumber)
    setLog([...log, diceNumber])
    setDice(diceArray[diceNumber])
  }

  const startOver = () => {
    setRoll(1)
    setLog([])
    setDice(dice1)
  }

  // return statement with JSX, what is being seen on the UI
  return(
    <>
      <h1>Let's Roll</h1>
      <Box 
        roll={roll} 
        rollDice={rollDice} 
        dice={dice}
        startOver={startOver} 
      />
      <Log rollLog={log}/>
    </>
  )
}

// export, so the component can be accessed
export default App