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
import { useNavigate } from 'react-router-dom';
import { light } from '@mui/material/styles/createPalette';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
function Sidebar() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey);
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
  const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
      <div className={"sb-header"+((lightTheme)?"":" dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon className={"icon" + ((lightTheme)?"":" dark")}/> 
          </IconButton>
        </div>
        <div>
          <IconButton onClick={()=>{navigate('users')}}>
            <PersonAddIcon className={"icon" + ((lightTheme)?"":" dark")}/>
          </IconButton>
          <IconButton onClick={()=>{navigate('groups')}}>
            <GroupAddIcon className={"icon" + ((lightTheme)?"":" dark")}/>
          </IconButton>
          <IconButton onClick={()=>{navigate('create-groups')}}>
            <AddCircleIcon className={"icon" + ((lightTheme)?"":" dark")}/>
          </IconButton>
          <IconButton onClick={()=>{dispatch(toggleTheme())}}>
            {lightTheme && <NightlightIcon className={"icon" + ((lightTheme)?"":" dark")}/>}
            {!lightTheme && <LightModeIcon className={"icon" + ((lightTheme)?"":" dark")}/>}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + ((lightTheme)?"":" dark")}>
        <IconButton>
          <SearchIcon className={"icon" + ((lightTheme)?"":" dark")}/>
        </IconButton>
        <input placeholder='search' className={"search-box" + ((lightTheme)?"":" dark")}/>
      </div>
      <div className={"sb-conversations" + ((lightTheme)?"":" dark")}>
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} key={conversation.name} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
