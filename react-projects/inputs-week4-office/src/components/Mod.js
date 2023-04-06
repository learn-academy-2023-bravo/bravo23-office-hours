// import
import React from "react"

// functional component declaration
const Mod = ({userInput}) => {
  // return to the UI
  return(
    <>
      {userInput && <p>I am gonna let you finish but Beyonce is {userInput}</p>}
    </>
  )
}

// export
export default Mod