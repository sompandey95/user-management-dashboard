import AddUser from "../components/AddUser";

const AddUserPage = ({ onAddUser, onUpdateUser, editingUser }) => {
  return (
    <div>
      <AddUser
        onAddUser={onAddUser}
        onUpdateUser={onUpdateUser}
        editingUser={editingUser}
      />
    </div>
  );
};

export default AddUserPage;
