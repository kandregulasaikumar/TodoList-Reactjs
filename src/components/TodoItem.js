import React from 'react';

// ... (existing code)

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      {task.date && task.time && (
        <span style={{ marginLeft: '10px' }}>
          {task.date} {task.time}
        </span>
      )}
      <button onClick={() => deleteTask(task.id)} className='delete'>Delete</button>
    </li>
  );
};

export default TodoItem;

