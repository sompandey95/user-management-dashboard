import UserList from "../components/UserList";

const UserPage = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div>
      <UserList
        users={users}
        onDeleteUser={onDeleteUser}
        onEditUser={onEditUser}
      />
    </div>
  );
};

export default UserPage;
