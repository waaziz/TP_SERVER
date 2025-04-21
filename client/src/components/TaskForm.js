import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    await onAdd(title);
    setTitle('');
    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="New Task"
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        disabled={loading}
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? 'Adding...' : 'Add'}
      </Button>
    </Box>
  );
};

export default TaskForm;