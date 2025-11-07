// Single task row with toggling and removal controls.
import PropTypes from 'prop-types';

function TaskRow({ task, toggleTask, deleteTask }) {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // Reset time parts for comparison
    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);
    
    if (taskDate.getTime() === today.getTime()) {
      return 'Today';
    } else if (taskDate.getTime() === tomorrow.getTime()) {
      return 'Tomorrow';
    }
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const isOverdue = () => {
    if (!task.dueDate || task.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today;
  };

  return (
    <li className={`task-row${task.completed ? ' completed' : ''}${isOverdue() ? ' overdue' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(event) => toggleTask(task._id, event.target.checked)}
        />
        <div className="task-content">
          <span className="task-title">{task.title}</span>
          {task.dueDate && (
            <span className={`due-date${isOverdue() ? ' overdue-text' : ''}`}>
              {isOverdue() && '⚠️ '}{formatDate(task.dueDate)}
            </span>
          )}
        </div>
      </label>
      <button className="delete" type="button" onClick={() => deleteTask(task._id)}>
        Delete
      </button>
    </li>
  );
}

TaskRow.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    dueDate: PropTypes.string,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskRow;
