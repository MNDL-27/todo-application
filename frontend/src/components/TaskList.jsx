// Displays task collection and delegates actions to each row.
import PropTypes from 'prop-types';
import TaskRow from './TaskRow.jsx';

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (!tasks.length) {
    return <p className="status">No tasks yet. Start by adding one!</p>;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Categorize tasks
  const overdueTasks = tasks.filter(task => {
    if (!task.dueDate || task.completed) return false;
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today;
  });

  const upcomingTasks = tasks.filter(task => {
    if (task.completed) return false;
    if (!task.dueDate) return false;
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate >= today;
  });

  const noDateTasks = tasks.filter(task => !task.completed && !task.dueDate);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="tasks-container">
      {overdueTasks.length > 0 && (
        <div className="task-section overdue-section">
          <h3 className="section-title">⚠️ Overdue ({overdueTasks.length})</h3>
          <ul className="task-list">
            {overdueTasks.map((task) => (
              <TaskRow key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
          </ul>
        </div>
      )}

      {upcomingTasks.length > 0 && (
        <div className="task-section upcoming-section">
          <h3 className="section-title">📅 Upcoming ({upcomingTasks.length})</h3>
          <ul className="task-list">
            {upcomingTasks.map((task) => (
              <TaskRow key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
          </ul>
        </div>
      )}

      {noDateTasks.length > 0 && (
        <div className="task-section">
          <h3 className="section-title">📝 No Due Date ({noDateTasks.length})</h3>
          <ul className="task-list">
            {noDateTasks.map((task) => (
              <TaskRow key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
          </ul>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section completed-section">
          <h3 className="section-title">✅ Completed ({completedTasks.length})</h3>
          <ul className="task-list">
            {completedTasks.map((task) => (
              <TaskRow key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
