function TaskInput(){
    return (
        <form className="task-input">
            <input
            type="text"
            placeholder="Add a new task..."
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}
export default TaskInput;
