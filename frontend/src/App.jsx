import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import AddUserPage from "./pages/AddUserPage";

const API_URL = "http://localhost:5001/users";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = async (user) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
  };

  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setUsers(users.filter((u) => u.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = async (user) => {
    await fetch(`${API_URL}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setEditingUser(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>User Management Dashboard</h1>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <UserPage
                users={users}
                onDeleteUser={deleteUser}
                onEditUser={editUser}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddUserPage
                onAddUser={addUser}
                onUpdateUser={updateUser}
                editingUser={editingUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
