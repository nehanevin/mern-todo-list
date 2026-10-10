// One task: checkbox to complete, title (struck through if done), delete button
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      <span className={task.completed ? "done" : ""}>{task.title}</span>
      <button className="delete" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
