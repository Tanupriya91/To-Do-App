import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(()=>{
    const saved = localStorage.getItem("tasks");

    return saved
      ? JSON.parse(saved)
      : [];
  });
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  },[tasks])
  const visibleTasks = tasks.filter((task) => {
    if (filter === "all") return true;

    if (filter === "active") {
      return !task.completed;
    }

    return task.completed;
  });
  const clearCompleted = () => {
  setTasks((prevTasks) =>
    prevTasks.filter((task) => !task.completed)
  );
};

  const counts = {
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(), //generate unique id everytime
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  return {
    tasks,
    visibleTasks,
    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,
    filter,
    setFilter,
    counts,
  };
}
