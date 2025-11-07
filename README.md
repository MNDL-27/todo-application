# 📝 To-Do List Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing tasks with authentication, due dates, and smart sorting features.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)

## ✨ Features

- 🔐 **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- ✅ **CRUD Operations** - Create, Read, Update, and Delete tasks
- 📅 **Due Dates** - Set optional due dates for tasks
- 🔔 **Smart Categorization** - Auto-organized sections:
  - ⚠️ Overdue tasks
  - 📅 Upcoming tasks
  - 📝 Tasks without dates
  - ✅ Completed tasks
- 🔄 **Multiple Sorting Options**:
  - Smart (Status & Date)
  - Date: Earliest First
  - Date: Latest First
  - Title: Alphabetical
- 🎨 **Modern UI** - Beautiful purple gradient theme with smooth animations
- 📱 **Responsive Design** - Works on all screen sizes

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **PropTypes** - Type checking

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- npm or yarn package manager

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/MNDL-27/todo-app-mern.git
cd todo-app-mern
```

### 2. Backend Setup
```bash
# Install backend dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URI and JWT secret
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key_here
```

### 3. Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install frontend dependencies
npm install

# Update API URL in src/config.js if needed
```

## 💻 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
npm run dev
```
Backend will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:3000

### Production Build

**Backend:**
```bash
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 📁 Project Structure

```
todo-app-mern/
├── config/
│   └── db.js              # Database connection
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── User.js            # User schema
│   └── Task.js            # Task schema
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   └── taskRoutes.js      # Task CRUD routes
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.jsx       # Login/Register component
│   │   │   ├── TaskForm.jsx   # Task creation form
│   │   │   ├── TaskList.jsx   # Task list with sections
│   │   │   └── TaskRow.jsx    # Individual task row
│   │   ├── App.jsx            # Main app component
│   │   ├── config.js          # API configuration
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
├── server.js              # Entry point
├── package.json
├── .env.example
├── LICENSE
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected Routes)
- `GET /api/tasks` - Get all tasks for logged-in user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Environment variables for sensitive data

## 🎨 UI Features

- Gradient purple theme
- Smooth hover animations
- Color-coded task sections
- Overdue task highlighting
- Today/Tomorrow smart date display
- Loading states
- Error handling with user feedback

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### Frontend (src/config.js)
```javascript
export const API_BASE = 'http://localhost:5000';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**MNDL-27**
- GitHub: [@MNDL-27](https://github.com/MNDL-27)

## 🙏 Acknowledgments

- Inspired by modern task management applications
- Built as part of Full Stack Development learning
- MongoDB Atlas for cloud database hosting

---

**Made with ❤️ using MERN Stack**
