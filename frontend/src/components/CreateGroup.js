import { IconButton } from '@mui/material'
import React from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { useSelector } from 'react-redux';

function CreateGroup() {
  const lightTheme = useSelector((state)=>(state.themeKey));
  return (
    <div className={'createGroups-container' +(lightTheme?'':' dark')}>
        <input placeholder='Enter Group Name' className={'search-box'+((lightTheme)?'':' dark')}/>
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroup
