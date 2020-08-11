import {
  SET_USER,
  PASSED_TEST,
  SET_AUTHENTICATED,
  REMOVE_AUTHENTICATED,
} from "../types";

const authReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_USER:
      return { ...state, authenticated: true, ...action.payload };
    case PASSED_TEST:
      return { ...state, js1: { passed: true } };
    case SET_AUTHENTICATED:
      return { ...state, authenticated: true };
    case REMOVE_AUTHENTICATED:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
