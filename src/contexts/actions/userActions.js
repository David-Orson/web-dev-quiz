import { LOGIN } from "../types";

export const loginUser = (dispatch) => {
  dispatch({ type: LOGIN, handle: "me" });
};
