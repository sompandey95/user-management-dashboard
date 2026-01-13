import { useEffect, useState } from "react";

const AddUser = ({ onAddUser, onUpdateUser, editingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    if (editingUser) {
      onUpdateUser({
        id: editingUser.id,
        name,
        email,
        role,
      });
    } else {
      onAddUser({ name, email, role });
    }

    setName("");
    setEmail("");
    setRole("User");
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Admin</option>
        </select>

        <button type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
