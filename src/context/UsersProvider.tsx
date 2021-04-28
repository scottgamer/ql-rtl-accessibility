import React, { createContext, ReactNode, useState } from "react";
import { User } from "../interfaces/User";

interface UsersContextProps {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const UsersContext = createContext<UsersContextProps>({
  users: [],
  setUsers: () => {},
});

interface UsersProviderProps {
  children: ReactNode;
}

const UsersProvider = ({ children }: UsersProviderProps): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
