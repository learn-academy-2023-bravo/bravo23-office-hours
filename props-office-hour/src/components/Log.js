import React from "react"

// declare functional component
const Log = (props) => {
  // data needed for the component
  console.log(props)

  // return statement with JSX, what is being seen on the UI
  return(
    <>
      <h2>Roll Log</h2>
      <h3>
        {props.rollLog.map((value) => {
          return`${value}, `
        })}
      </h3>
    </>
  )
}

// export, so the component can be accessed
export default Log