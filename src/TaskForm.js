import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && dueDate.trim()) {
      addTask({ task, dueDate });
      setTask('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <input
        type="text"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Enter due date"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
