import React from "react";
import UsersList from "./components/UsersList/UsersList";
import UsersProvider from "./context/UsersProvider";
import "./App.scss";

function App() {
  return (
    <UsersProvider>
      <UsersList />
    </UsersProvider>
  );
}

export default App;
