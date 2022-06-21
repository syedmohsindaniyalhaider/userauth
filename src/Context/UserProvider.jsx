import React, { useContext, useReducer } from "react";
import Course from "./UserContext";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const existingUserIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const existingUser = state.users[existingUserIndex];
      let updatedUsers;
      if (existingUser) {
        const updatedUser = {
          ...existingUser,
        };
        updatedUsers = [...state.users];
        updatedUsers[existingUserIndex] = updatedUser;
      } else {
        updatedUsers = state.users.concat(action.payload);
      }
      return {
        users: updatedUsers,
      };
    case "APPLY_PASS": {
      const existingUserIndex = state.users.findIndex(
        (item) => item.id === action.payload
      );
      const existingUser = state.users[existingUserIndex];
      let updatedUsers;
      if (existingUser) {
        const updatedUser = {
          ...existingUser,
          greenPass: "Requested",
        };
        updatedUsers = [...state.users];
        updatedUsers[existingUserIndex] = updatedUser;
      }
      return {
        users: updatedUsers,
      };
    }
    case "ACCEPT_PASS": {
    }
    case "REJECT_PASS": {
    }
    case "REMOVE_USER": {
    }
    case "CLEAR_USER": {
      return initialState;
    }
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const addUserHandler = (item) => {
    dispatch({ type: "ADD_USER", payload: item });
  };
  const applyGreenPass = (id) => {
    dispatch({ type: "APPLY_PASS", payload: id });
  };
  const acceptGreenPass = (id) => {
    dispatch({ type: "ACCEPT_PASS", payload: id });
  };
  const rejectGreenPass = (id) => {
    dispatch({ type: "REJECT_PASS", payload: id });
  };
  const removeUserHandler = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  const userContext = {
    users: state.users,
    applyPass: applyGreenPass,
    acceptPass: acceptGreenPass,
    rejectPass: rejectGreenPass,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
  };

  return (
    <>
      <Course.Provider value={userContext}>{children}</Course.Provider>
    </>
  );
};

export default UserProvider;
