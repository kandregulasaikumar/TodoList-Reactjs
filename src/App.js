import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, dateTime) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      date: dateTime ? new Date(dateTime).toLocaleDateString() : null,
      time: dateTime ? new Date(dateTime).toLocaleTimeString() : null,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} filter={filter} />
    </div>
  );
};

export default App;
