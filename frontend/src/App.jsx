import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from './components/Auth.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import { API_URL } from './config.js';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('default'); // default, dateAsc, dateDesc, titleAsc

  const getHeaders = () => ({
    Authorization: `Bearer ${token}`,
  });

  const fetchTasks = async () => {
    if (!token) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(API_URL, { headers: getHeaders() });
      setTasks(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        handleLogout();
      }
      setError('Failed to load tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getSortedTasks = () => {
    const tasksCopy = [...tasks];

    if (sortBy === 'dateAsc') {
      // Earliest date first
      return tasksCopy.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sortBy === 'dateDesc') {
      // Latest date first
      return tasksCopy.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
    } else if (sortBy === 'titleAsc') {
      // Alphabetical order
      return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: incomplete first, then by due date, then by creation date
      return tasksCopy.sort((a, b) => {
        if (a.completed !== b.completed) {
          return a.completed ? 1 : -1;
        }
        
        if (a.dueDate && b.dueDate) {
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        
        if (a.dueDate && !b.dueDate) return -1;
        if (!a.dueDate && b.dueDate) return 1;
        
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken(null);
    setUsername(null);
    setTasks([]);
  };

  const addTask = async (title, dueDate) => {
    try {
      await axios.post(
        API_URL,
        { title, dueDate },
        { headers: getHeaders() }
      );
      
      // Re-fetch to maintain sort order
      fetchTasks();
    } catch (err) {
      setError('Failed to add task.');
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      await axios.put(
        `${API_URL}/${id}`,
        { completed },
        { headers: getHeaders() }
      );
      
      // Re-fetch to maintain sort order
      fetchTasks();
    } catch (err) {
      setError('Failed to update task.');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, { headers: getHeaders() });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  if (!token) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>📝 To-Do List</h1>
        <div className="user-info">
          <span>👤 {username}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      
      <TaskForm addTask={addTask} />
      
      <div className="controls">
        <label className="sort-label">
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
            <option value="default">Smart (Status & Date)</option>
            <option value="dateAsc">Date: Earliest First</option>
            <option value="dateDesc">Date: Latest First</option>
            <option value="titleAsc">Title: A-Z</option>
          </select>
        </label>
      </div>
      
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p className="status">Loading tasks...</p>
      ) : (
        <TaskList tasks={getSortedTasks()} toggleTask={toggleTask} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
