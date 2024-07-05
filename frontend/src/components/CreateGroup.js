import { IconButton } from '@mui/material'
import React from 'react'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
function CreateGroup() {
  return (
    <div className='createGroups-container'>
        <input placeholder='Enter Group Name' className='search-box'/>
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
      
    </div>
  )
}

export default CreateGroup
