/* import "./styles.css"; */
import "./styles.css";

import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const task = {
      id: Math.random().toString(36).substr(2, 9),
      ...newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const markTaskAsComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        markTaskAsComplete={markTaskAsComplete}
      />
    </div>
  );
};

export default App;
