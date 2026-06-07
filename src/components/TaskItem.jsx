function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className="task-items">
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>{task.title}</span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
export default TaskItem;
