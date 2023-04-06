// import
import React from "react"

// functional component declaration
const Bad = ({userInput, badText}) => {



  // return to the UI
  return(
    <>
      {badText(userInput)}
    </>
  )
}

// export
export default Bad