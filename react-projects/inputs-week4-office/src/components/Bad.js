// import
import React from "react"

// functional component declaration
const Bad = ({userInput, badText}) => {



  // return to the UI
  return(
    <>
      {userInput && <p>I hear you saying {badText(userInput)}. Is that correct?</p>}
    </>
  )
}

// export
export default Bad