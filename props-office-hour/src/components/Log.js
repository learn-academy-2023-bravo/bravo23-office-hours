import React from "react"

// declare functional component
const Log = (props) => {
  // data needed for the component
  console.log(props)

  // return statement with JSX, what is being seen on the UI
  return(
    <div id="logStyle">
      <h3>Roll Log</h3>
      {props.rollLog.map((value) => {
        return`${value}, `
      })}
    </div>
  )
}

// export, so the component can be accessed
export default Log