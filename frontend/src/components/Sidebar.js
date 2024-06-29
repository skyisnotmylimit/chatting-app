import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import "./myStyles.css";
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
function Sidebar() {
  const [conversations,setconversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp : "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp : "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp : "today",
    },
  ]);
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon/> 
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon/>
          </IconButton>
          <IconButton>
            <GroupAddIcon/>
          </IconButton>
          <IconButton>
            <AddCircleIcon/>
          </IconButton>
          <IconButton>
            <NightlightIcon/>
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
