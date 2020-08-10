import { SET_USER } from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, handle: action.payload };
    default:
      return state;
  }
};

export default authReducer;
