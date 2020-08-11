import { SET_USER, PASSED_TEST } from "../types";

const authReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SET_USER:
      return { ...state, authenticated: true, ...action.payload };
    case PASSED_TEST:
      return { ...state, js1: { passed: true } };
    default:
      return state;
  }
};

export default authReducer;
