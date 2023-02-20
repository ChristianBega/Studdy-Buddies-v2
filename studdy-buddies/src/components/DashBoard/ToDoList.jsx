import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

export default function ToDoList () {

    return (
        <div className='calendarContainer'>
          <TextField className='todoText' label="Enter To-Do's Here"/>
          <List>
            <ListItem
              secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              }>
              <ListItemText
                primary="Single-line item"
              />
              </ListItem>
          </List>
        </div>
    );
}