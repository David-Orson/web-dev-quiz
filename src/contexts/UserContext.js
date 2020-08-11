import React, { createContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";

export const UserContext = createContext(null);

const initialState = {
  authenticated: false,
  credentials: {},
  js1: { passed: false },
};

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
