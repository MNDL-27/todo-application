// API configuration for the frontend
// Use environment variable if available, otherwise fallback to localhost
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_URL = `${API_BASE}/api/tasks`;
export const AUTH_URL = `${API_BASE}/api/auth`;

// Log the API base URL in development for debugging
if (import.meta.env.DEV) {
  console.log('API Base URL:', API_BASE);
  console.log('API URL:', API_URL);
  console.log('AUTH URL:', AUTH_URL);
}
