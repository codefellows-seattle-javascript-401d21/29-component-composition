import React from 'react'
import turtleSay from 'cowsay-browser'

class Landing extends React.Component {
  render() {
    return(
      <div className="turtlesay">
        <pre>{turtleSay.say({ text: "If you thunk it, take note of it", f: 'turtle' })}</pre>
      </div>
    )
  }
}
export default Landing
