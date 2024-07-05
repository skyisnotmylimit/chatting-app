import { IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./myStyles.css";
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
const chatData = {
  name: "Shubham Gupta",
  timeStamp: "today",
}
var props = chatData;
function ChatArea() {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>{props.name[0]}</p>
        <div className='header-text'>
            <p className='con-title'>{props.name}</p>
            <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </div>
      <div className='messages-container'>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className='text-input-area'>
        <input placeholder='Type a message' className='search-box'/> 
        <IconButton>
            <SendIcon/>
        </IconButton>  
      </div>    
    </div>
  );
}

export default ChatArea
