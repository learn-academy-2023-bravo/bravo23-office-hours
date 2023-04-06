// import
import React, {useState} from "react"
import Bad
 from "./components/Bad"
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
      <h3>Good</h3>

      <h3>Bad</h3>
      <Bad userInput={userInput} badText={badText}/>
      
      <h3>Mod</h3>
    </>
  )
}

// export
export default App