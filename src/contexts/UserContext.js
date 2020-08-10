import React, { createContext, useState, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext(null);

const UserProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, {});

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
