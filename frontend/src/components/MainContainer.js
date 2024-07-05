import React from 'react'
import "./myStyles.css";
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroup from './CreateGroup';
import UserGroups from './UserGroups';
import { Outlet } from 'react-router-dom';
function MainContainer() {
  return (
    <div className='main-container'>
        <Sidebar/> 
        <Outlet/>
        {/* <ChatArea props={chatData}/> */}
        {/* <Welcome/> */}
        {/* <CreateGroup/> */}
        {/* <UserGroups/> */}
    </div>
  )
}

export default MainContainer
