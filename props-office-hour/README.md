- Pictures from https://publicdomainvectors.org/en/free-clipart/Printable-dice/39193.html


🎲 Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.  

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state (react state), renders the other components (component calls), and passes data to the dice and roll component (props).

App.js will be the logic component
All other components (children components) will be display components.

📚 User Stories
1. As a user, I can see a square box on the screen with a black border and a white background.
- √ change App.js to a basic functional component
```js
// import
import React from "react"

// declare functional component
const App = () => {
  // data needed for the component

  // return statement with JSX, what is being seen on the UI
  return(
    <>
    </>
  )
}

// export, so the component can be accessed
export default App
```
- √ create a component called Box
- √ Box will display an empty border with a white background
- create a div with css className attribute called box
- use css to create the box
  ```css
  .box {
    height: 300px;
    width: 300px;
    border: 6px outset black;
  }
  ```

2. As a user, I can click on the box to roll the dice and see the result of my roll in the box.
- add an onClick attribute to the div that has the styling for my box on Box.js
- onClick will trigger the rollDice function
- create a function named rollDice
- input: none
- output: result of the roll will be a number
- since the value of the roll will be changed need react state
```js
  // import on App.js
  import {useState} from "react"
  // data that is needed, place in between the component declaration and the return statement
  const [roll, setRoll] = useState(1)
  const rollDice = () => {
    let diceNumber = Math.ceil(Math.random() * 5)
    setRoll(diceNumber)
  }
```
- function call will be performed by onClick attribute on Box.js
  - pass the function and state variable as props on Box component call 
  - accept props on Box.js
  - pass function into the onClick attribute
  - reference the state variable to display the value
```js
  // App.js
    <>
      <h1>Let's Roll</h1>
      <Box roll={roll} rollDice={rollDice} />
    </>
  // Box.js
    const Box = (props) => {
    // data needed for the component

    // return statement with JSX, what is being seen on the UI
    return(
      <div className="box" onClick={props.rollDice}>
        {props.roll}
      </div>
    )
  }
```

3. As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
- rinse and repeat for the log react state
- initial value will be []
- copy the values from the state variable and add values of each additional roll
```js
  const [roll, setRoll] = useState(1)
  const [log, setLog] = useState([])
  const rollDice = () => {
    let diceNumber = Math.ceil(Math.random() * 5)
    setRoll(diceNumber)
    setLog([diceNumber])
  }
```
- add spacing by iterating across each value and returning a comma and space between each value
```js
  <h3>
    {props.rollLog.map((value) => {
      return`${value}, `
    })}
  </h3>
```

🏔 Stretch Goals
1. As a user, I can see the image of a dice face when I roll the dice.
- create assets folder in src directory
- upload images into assets folder
- create a dice array to store images
- create a state variable to update which image is rolled by using dice number variable as the index
- pass variable as prop to Box component
- using img tag to display dice state variable instead of roll

2. As a user, I can click a restart button that clears my roll log.
- create a function that will set all state variables to the initial value
- pass function as props to Box.js
- create button on Box.js to perform function call

🎁 Bonus Styling
- inline styling on Box
- referencing tags on App.css
- using id attributes on Log
- using class attributes on Box
- change browser title on index.html
- add favicon on index.html (save image as favicon.ico) 
reference: https://medium.com/@jenniferdobak/the-public-folder-and-favicons-in-create-react-app-8dc2cc1d492b