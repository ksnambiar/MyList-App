import React, {Fragment, useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


import ItemList from './ItemList'
import Searchbar from './Searchbar';
import AddItem from './AddItem';

function Dashboard({classes}) {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const onAdd = (item) => {
    console.log("add item called")
    setItems([...items, item])
  }
  return (
    <div style={{display:"flex", flexDirection: "row", margin: 20}}>
        <div style={{flex: 1, marginRight: 10}}>
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <div style={{margin: 20}}>
            <div>
            <Searchbar query={query} onSearchChange={(text) => setQuery(text)} />
            </div>
            <div>
            <ItemList items={query.length > 0 ? items.filter((item) => item.indexOf(query) !== -1) : items} />
            </div>
            </div>
        </Card></Box>
            
        </div>
        <div style={{flex: 1, marginLeft: 10}}>
        <AddItem onAdd={onAdd} />
        </div>
    </div>
  )
}


export default Dashboard;
