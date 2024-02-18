import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ tasks, toggleTask, deleteTask, filter }) => {
  const filteredTasks = filter === 'all'
    ? tasks
    : filter === 'completed'
      ? tasks.filter(task => task.completed)
      : tasks.filter(task => !task.completed);

  return (
    <ul>
      {filteredTasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
