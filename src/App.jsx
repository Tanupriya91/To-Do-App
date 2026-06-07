import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import { useTasks } from "./components/hooks/useTasks.js";
import "./App.css";

function App() {
  const {tasks, addTask} = useTasks();
  const tasks = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Finish React project",
      completed: true,
    },
    {
      id: 3,
      title: "Go for a walk",
      completed: false,
    },
  ];

  return (
    <div className="app">
      <Header />
      <TaskInput />
      <FilterBar />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
