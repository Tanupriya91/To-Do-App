import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import { useTasks } from "./components/hooks/useTasks.js";
import "./App.css";

function App() {
  const {tasks, addTask} = useTasks();
  

  return (
    <div className="app">
      <Header />
      <TaskInput onAdd={addTask}/>
      <FilterBar />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
