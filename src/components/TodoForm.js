import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [hasDateTime, setHasDateTime] = useState(false);
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, hasDateTime ? dateTime : null);
    setTitle('');
    setHasDateTime(false);
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='Task-title'
        type="text"
        placeholder=" Write down your task for today "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label id='date'>
        Include Date and Time:
        <input 
          type="checkbox"
          checked={hasDateTime}
          onChange={() => setHasDateTime(!hasDateTime)}
        />
      </label>
      {hasDateTime && (
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      )}
      <button type="submit">Add Task </button>
    </form>
  );
};

export default TodoForm;
// 