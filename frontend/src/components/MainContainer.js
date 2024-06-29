import React from 'react'
import "./myStyles.css";
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
const chatData = {
  name: "Shubham Gupta",
  timeStamp: "today",
}
function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar/> 
        <ChatArea props={chatData}/>
    </div>
  )
}

export default MainContainer
