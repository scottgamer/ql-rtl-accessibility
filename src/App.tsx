import React from "react";
import UsersList from "./components/UsersList/UsersList";
import UsersProvider from "./context/UsersProvider";
import "./App.scss";
import AcceptanceForm from "./components/AcceptanceForm/AcceptanceForm";

function App() {
  return (
    <UsersProvider>
      <AcceptanceForm />
      <UsersList />
    </UsersProvider>
  );
}

export default App;
