import { IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./myStyles.css";
import {useSelector} from 'react-redux';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
const chatData = {
  name: "Shubham Gupta",
  timeStamp: "today",
}
var props = chatData;
function ChatArea() {
  const lightTheme = useSelector((state)=>state.themeKey);
  return (
    <div className='chatArea-container'>
      <div className={'chatArea-header' + ((!lightTheme)?' dark':'')}>
        <p className='con-icon'>{props.name[0]}</p>
        <div className='header-text'>
            <p className='con-title'>{props.name}</p>
            <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </div>
      <div className={'messages-container'+ ((!lightTheme)?' dark':'')}>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className={'text-input-area'+ ((!lightTheme)?' dark':'')}>
        <input placeholder='Type a message' className={'search-box'+ ((!lightTheme)?' dark':'')}/> 
        <IconButton>
            <SendIcon/>
        </IconButton>  
      </div>    
    </div>
  );
}

export default ChatArea
