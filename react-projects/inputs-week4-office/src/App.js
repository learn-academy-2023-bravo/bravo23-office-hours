// import
import React, {useState} from "react"

// functional component declaration
const App = () => {
  // state values, inputs, and event listener method
  const [userInput, setUserInput] = useState("")
  // custom function for userInput
  const handleChange = (e) => {
   setUserInput(e.target.value)
  }

  // return to the UI
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
      {userInput}
      <h3>Bad</h3>
      <h3>Mod</h3>
    </>
  )
}

// export
export default App