// import
import React from "react"

// functional component declaration
const Good = ({userInput}) => {
  // return to the UI
  return(
    <>
      {userInput && <p>I hear you saying {userInput}. Is that correct?</p>}
    </>
  )
}

// export
export default Good