// import
import React from "react"


// declare functional component
const Box = (props) => {
  // data needed for the component

  // return statement with JSX, what is being seen on the UI
  return(
    <>
      <div className="box" onClick={props.rollDice}>
        <img src={props.dice} alt={`black dice with ${props.roll} white dots`} height="200"/>
      </div>
      <button onClick={props.startOver}>Restart</button>
    </>
  )
}

// export, so the component can be accessed
export default Box