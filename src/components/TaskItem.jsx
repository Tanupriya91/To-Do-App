
function TaskItem({ task }) {
  return (
    <div className="task-items">
      <div className="left">
        <input 
            type="checkbox" 
            checked={task.completed} 
            readOnly 
            />

        <span
            className={
                task.completed
                ? "completed"
                : ""
                }
                >
                    {task.title}
                    </span>

      </div>

      <button className="delete-btn">
        Delete
      </button>

    </div>
  );
}
export default TaskItem;