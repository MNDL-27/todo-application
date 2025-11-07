# 📝 To-Do List Application

A full-stack MERN (MongoDB, Express, React, Node.js) task management application with user authentication, smart categorization, and an elegant purple-themed interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-atlas-green.svg)

---

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based login/registration with encrypted passwords
- ✅ **Full CRUD Operations** - Create, read, update, and delete tasks seamlessly
- 📅 **Due Date Management** - Set optional deadlines for better task planning
- 🎯 **Smart Categorization** - Auto-organized into Overdue, Upcoming, No Date, and Completed sections
- 🔄 **Flexible Sorting** - Sort by status, date (earliest/latest), or alphabetically
- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Vite, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Authentication** | JWT, bcryptjs |
| **Styling** | Custom CSS with gradient themes |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (free tier available)
- Git (for cloning the repository)

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MNDL-27/todo-application.git
cd todo-application
```

### 2️⃣ Backend Setup

```bash
# Install dependencies
npm install

# Create environment file
touch .env

# Add your environment variables to .env:
# MONGODB_URI=your_mongodb_connection_string
# PORT=5000
# JWT_SECRET=your_secure_jwt_secret
```

**Example `.env` file:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
PORT=5000
JWT_SECRET=your_super_secret_key_change_this_in_production
```

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Update API URL in src/config.js if needed
```

### 4️⃣ Run the Application

**Backend (Terminal 1):**
```bash
# From root directory
npm run dev
# Server runs on http://localhost:5000
```

**Frontend (Terminal 2):**
```bash
# From frontend directory
cd frontend
npm run dev
# App runs on http://localhost:3000
```

🎉 **Open your browser and navigate to** `http://localhost:3000`

---

## 📁 Project Structure

```
todo-application/
├── config/
│   └── db.js                    # MongoDB connection
├── middleware/
│   └── auth.js                  # JWT authentication
├── models/
│   ├── User.js                  # User schema
│   └── Task.js                  # Task schema
├── routes/
│   ├── authRoutes.js            # Auth endpoints
│   └── taskRoutes.js            # Task CRUD endpoints
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.jsx         # Login/Register
│   │   │   ├── TaskForm.jsx     # Task creation
│   │   │   ├── TaskList.jsx     # Task categories
│   │   │   └── TaskRow.jsx      # Single task
│   │   ├── App.jsx              # Main component
│   │   ├── config.js            # API config
│   │   └── main.jsx             # Entry point
│   └── package.json
├── server.js                    # Express server
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |

### Tasks
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all user tasks | ✅ |
| POST | `/api/tasks` | Create new task | ✅ |
| PUT | `/api/tasks/:id` | Update task | ✅ |
| DELETE | `/api/tasks/:id` | Delete task | ✅ |

---

## 🔒 Security Features

- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ JWT token authentication (7-day expiration)
- ✅ Protected API routes with middleware
- ✅ Input validation and sanitization
- ✅ CORS configuration
- ✅ Environment variable protection

---

## 🎨 Key UI Features

- **Purple Gradient Theme** - Modern and visually appealing
- **Color-Coded Sections** - Red for overdue, blue for upcoming, green for completed
- **Smart Date Display** - Shows "Today", "Tomorrow", or formatted dates
- **Hover Animations** - Smooth transitions and interactive elements
- **Loading States** - User feedback during async operations
- **Error Handling** - Clear error messages for better UX

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Here's how you can contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/MNDL-27/todo-application.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and structure
- Write clear commit messages
- Test your changes thoroughly before submitting
- Update documentation if needed
- Be respectful and constructive in discussions

---

## 🐛 Found a Bug?

If you find a bug, please open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 💡 Feature Requests

Have an idea to improve the app? Open an issue with the `enhancement` label and describe:
- The feature you'd like to see
- Why it would be useful
- Any implementation ideas

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**MNDL-27**

- GitHub: [@MNDL-27](https://github.com/MNDL-27)
- Repository: [todo-application](https://github.com/MNDL-27/todo-application)

---

## 🙏 Acknowledgments

- Built with the MERN stack ecosystem
- Inspired by modern task management applications
- Thanks to the open-source community for the amazing tools
- MongoDB Atlas for reliable cloud database hosting

---

## 📊 Project Status

✅ **Active Development** - This project is actively maintained and open for contributions!

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Made with ❤️ and JavaScript**
