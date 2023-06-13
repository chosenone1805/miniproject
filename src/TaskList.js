import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, markTaskAsComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markTaskAsComplete={markTaskAsComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
