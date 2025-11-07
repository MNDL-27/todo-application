// Controlled form for creating new tasks.
import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      return;
    }

    addTask(trimmed, dueDate || null);
    setTitle('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          className="date-input"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
