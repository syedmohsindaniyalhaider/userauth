import { createContext } from "react";

const initialContext = {
  users: [],
  applyPass: (id) => {},
  acceptPass: (id) => {},
  rejectPass: (id) => {},
  addUser: (item) => {},
  removeUser: (id) => {},
};

const UserContext = createContext(initialContext);

export default UserContext;
