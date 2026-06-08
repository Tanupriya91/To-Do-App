import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import { useTasks } from "./components/hooks/useTasks.js";
import "./App.css";

function App() {
  const {
    tasks,
    visibleTasks,
    addTask,
    deleteTask,
    toggleTask,
    filter,
    setFilter,
    counts,
  } = useTasks();

  return (
    <div className="app">
      <Header />
      <TaskInput onAdd={addTask} />
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />

      <TaskList
        tasks={visibleTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
}
<footer className="footer">
  {counts.active} task{counts.active !== 1 ? "s" : ""} remaining
</footer>;

export default App;
