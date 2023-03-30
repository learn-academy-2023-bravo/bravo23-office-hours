- Pictures from https://publicdomainvectors.org/en/free-clipart/Printable-dice/39193.html


🎲 Challenge: Dice Roller
As a developer, you are tasked with creating a dice application. The application will allow the user to role a standard six-sided dice and see the result of each roll. As the user rolls the dice, each roll gets logged creating a list of all the previous rolls.  

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The dice UI will be in its own component as will the roll log UI. App.js controls of all the data in state (react state), renders the other components (component calls), and passes data to the dice and roll component (props).

App.js will be the logic component
All other components (children components) will be display components.

📚 User Stories
As a user, I can see a square box on the screen with a black border and a white background.
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


As a user, I can click on the box to roll the dice and see the result of my roll in the box.
As a user, I can see my roll logged and see the roll log continue to grow as I roll the dice.
🏔 Stretch Goals
As a user, I can see the image of a dice face when I roll the dice.
As a user, I can click a restart button that clears my roll log.