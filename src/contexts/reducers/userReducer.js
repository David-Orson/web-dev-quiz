import { LOGIN } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, handle: action.handle };
    case "LOGOUT":
      return { ...state, handle: false };
    default:
      return state;
  }
};

export default authReducer;
