import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";
import { useTasks } from "./components/hooks/useTasks.js";
import "./App.css";

function App() {
  const {
    visibleTasks,
    addTask,
    deleteTask,
    toggleTask,
    filter,
    setFilter,
    counts,
    clearCompleted,
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

      <div className="footer">
        <span>
          {counts.active} task
          {counts.active !== 1 ? "s" : ""} remaining
        </span>

        <button
          className="clear-btn"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;