import React from 'react'
import "./myStyles.css";
function MessageSelf() {
  var props2 = {
    name: "You",
    message: "This is sample message",
  }
  return (
    <div className='self-message-container'>
      <div className='message-box'>
        <p className='con-lastMessage'>{props2.message}</p>
        <p className='self-timeStamp'>12:00 am</p>
      </div>
    </div>
  )
}

export default MessageSelf
