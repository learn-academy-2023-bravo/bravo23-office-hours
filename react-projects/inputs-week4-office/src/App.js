// import
import React, {useState} from "react"
import Bad
 from "./components/Bad"
import Good from "./components/Good"
import Mod from "./components/Mod"
import "./App.css"

// functional component declaration
const App = () => {
  // state values, inputs
  const [userInput, setUserInput] = useState("")
 

  // custom function for userInput
  const handleChange = (e) => {
   setUserInput(e.target.value)
  }

  // bad robot
  const badText = (input) => {
    const badStatement = []
    for(let i = 0; i < input.length; i++) {
      const bla = ["B", "L", "A"]
      badStatement.push(bla[i % 3])
    }
    return badStatement
  }
  // return to the UI, place event listener method on the appropriate tag
  return(
    <>
      <h1>Once, Twice, Three Times a Robot</h1>
      <input 
        type="text"
        placeholder="Please type something for the robots to repeat"
        value={userInput}
        onChange={handleChange}
      />
      <div className="under">
        <h3>Good Robot</h3>
        <Good userInput={userInput}/>

        <h3>Bad Robot</h3>
        <Bad userInput={userInput} badText={badText}/>
        
        <h3>Mod Robot</h3>
        <Mod userInput={userInput}/>
      </div>
    </>
  )
}

// export
export default App