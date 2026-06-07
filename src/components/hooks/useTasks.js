import { useState } from "react";

export function useTask() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(), //generate unique id everytime
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = () => {};
  const toggleTask = () => {};

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
}
