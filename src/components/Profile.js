import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser } from "../contexts/actions/userActions";

function Profile() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div className="ui raised very padded text  segment">
      {state.credentials.handle ? (
        <p>Hi {state.handle}</p>
      ) : (
        <p>Login please</p>
      )}
      <button onClick={() => loginUser(dispatch)}>Login</button>
    </div>
  );
}

export default Profile;
