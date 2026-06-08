import { useState } from "react";

function TaskInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    onAdd(inputValue);

    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setInputValue("");
    }
  };

  return (
    <form
      className="task-input"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button
        type="submit"
        disabled={!inputValue.trim()}
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;