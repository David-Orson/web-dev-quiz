import { LOGIN, SET_USER } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, handle: action.handle };
    case "LOGOUT":
      return { ...state, handle: false };
    case SET_USER:
      console.log(action.payload);
      return { ...state, handle: action.payload.credentials.handle };
    default:
      return state;
  }
};

export default authReducer;
