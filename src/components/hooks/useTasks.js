import { useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(), //generate unique id everytime
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prevTasks)=>
    prevTasks.filter((task) => task.id !== id)
);
  };

  const toggleTask = () => {
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
    task.id === id
? {
    ...task,
    completed: !task.completed,
}
:task
));
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  };
}
