import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
export default function Searchbar({query, onSearchChange}) {
  return (
    <div style={{display: "flex"}}>
        <div style={{flex: 4}}><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="search-items" fullWidth label="Search" value={query} variant="standard" onChange={(e) => onSearchChange(e.target.value)} />
      </Box></div>
    </div>
  )
}
