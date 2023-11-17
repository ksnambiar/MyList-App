import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Fastfood } from '@mui/icons-material';

export default function ItemList(props) {
    const { items } = props;
  return (
    <div>{items.length > 0 ? <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {items.map((item) => <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Fastfood />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item} />
    </ListItem>)}
  </List> : <div>
    No items in the list
    </div>}</div>
  )
}
