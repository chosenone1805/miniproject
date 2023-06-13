import React from 'react';

const TaskItem = ({ task, deleteTask, markTaskAsComplete }) => {
  const { id, task: taskName, dueDate, completed } = task;

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleComplete = () => {
    markTaskAsComplete(id);
  };

  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-details">
        <p className="task-name">{taskName}</p>
        <p className="due-date">{dueDate}</p>
      </div>
      <div className="task-actions">
        <button className="complete-btn" onClick={handleComplete}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
