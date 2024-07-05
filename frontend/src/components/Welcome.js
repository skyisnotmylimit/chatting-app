import React from 'react'
import logo from "../images/chat.png"
function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt='Logo'/>
        <p>View and text directly to people present in the chat rooms.</p>
    </div>
  )
}

export default Welcome
