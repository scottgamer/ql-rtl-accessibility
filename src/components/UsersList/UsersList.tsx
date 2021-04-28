import React, { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import axios from "axios";

const UsersList = (): JSX.Element => {
  const { users, setUsers } = useContext(UsersContext);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const Users = users.map((user) => (
    <li key={user.id}>
      {user.name} {user.username}
    </li>
  ));

  return (
    <>
      <h1>Registered users</h1>
      <button onClick={fetchUsers}>Fetch users</button>
      <h2>List of users</h2>
      <ul>{Users}</ul>
    </>
  );
};

export default UsersList;
