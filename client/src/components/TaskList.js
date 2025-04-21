import React from 'react';
import { List, ListItem, ListItemText, IconButton, Checkbox, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <List>
    {tasks.map(task => (
      <ListItem
        key={task.id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        }
        sx={{
          bgcolor: task.completed ? 'action.selected' : 'background.paper',
          mb: 1,
          borderRadius: 1,
        }}
      >
        <Checkbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          color="primary"
        />
        <ListItemText
          primary={task.title}
          sx={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'text.secondary' : 'text.primary',
          }}
        />
      </ListItem>
    ))}
  </List>
);

export default TaskList;