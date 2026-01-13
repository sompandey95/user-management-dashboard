# User Management Dashboard (Full Stack)

A full-stack **User Management Dashboard** built using **React**, **Node.js**, and **Express**.  
This project demonstrates core frontend and backend concepts such as CRUD operations, REST API integration, state management, and clean project architecture.

This application is designed as an **admin-style dashboard module**, similar to what is used internally in real-world products and enterprise systems.

---

## 🚀 Features

- View list of users in a tabular format
- Add new users with role selection
- Edit existing user details
- Delete users
- Client-side routing using React Router
- RESTful backend APIs built with Express
- Clean separation between frontend and backend

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- React Router
- CSS

### Backend
- Node.js
- Express.js
- REST APIs
- CORS

---

## 📂 Project Structure

user-management-dashboard/
│
├── backend/
│   ├── index.js
│   ├── package.json
│
├── src/
│   ├── components/
│   │   ├── AddUser.jsx
│   │   ├── UserList.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── UserPage.jsx
│   │   └── AddUserPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
│
├── public/
├── package.json
├── vite.config.js
└── README.md

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository

git clone https://github.com/sompandey95/user-management-dashboard.git  
cd user-management-dashboard

---

### 2️⃣ Start the Backend Server

cd backend  
npm install  
node index.js

Backend runs on:  
http://localhost:5000

---

### 3️⃣ Start the Frontend Application

npm install  
npm run dev

Frontend runs on:  
http://localhost:5173

---

## 🔄 API Endpoints

GET    /users        – Fetch all users  
POST   /users        – Add a new user  
PUT    /users/:id    – Update user details  
DELETE /users/:id    – Delete a user  

---

## 🧠 Key Learnings

- Built a full-stack CRUD application using REST APIs
- Managed shared state and component communication in React
- Implemented client-side routing using React Router
- Integrated frontend with backend using Fetch API
- Followed clean folder structure and modular design
- Understood real-world frontend ↔ backend interaction

---

## 📌 Future Enhancements

- Search and filter functionality
- Role-based access control
- Authentication and authorization
- Database integration (MongoDB / PostgreSQL)
- Improved UI and responsiveness

---

## 👤 Author

Som Pandey  
B.Tech Computer Science (2026)

---

## 📄 License

This project is open-source and available for learning and educational purposes.
EOF
