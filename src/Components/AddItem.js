import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function AddItem({onAdd}) {    
    const [name, setName] = useState("");
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined"><div style={{display: "flex", flexDirection: "column", margin: 20}}>
        <div style={{marginBottom: 20}}><TextField id="add-item-input" fullWidth label="Add Item" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} /></div>
        <div><Button variant="contained" fullWidth={true} onClick={()=>{
            onAdd(name);
            setName("");
            }} disabled={!name.length}>Add</Button></div>
    </div></Card>
    </Box>
    
  )
}
