import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { globalColors } from 'theme/globalColors';

const SearchText = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      <IconButton type="button" sx={{ p: '10px', color:globalColors.blue }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search here..."
      />
      
    </Paper>
  )
}

export default SearchText