import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { taskService } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    setTasks(await taskService.getAll());
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (title) => {
    await taskService.create({ title });
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await taskService.toggle(id);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await taskService.remove(id);
    fetchTasks();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          My Tasks
        </Typography>
        <TaskForm onAdd={handleAdd} />
        {loading ? (
          <Box textAlign="center" mt={4}>Loading...</Box>
        ) : (
          <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        )}
      </Paper>
    </Container>
  );
}

export default App;