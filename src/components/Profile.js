import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser } from "../contexts/actions/userActions";

function Profile() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div className="ui raised very padded text  segment">
      {state.authenticated ? (
        <div>
          <p>Hi {state.credentials.handle}</p>
          {state.js1.passed ? <p>Passed Js1!</p> : <p>not yet passed Js1.</p>}
        </div>
      ) : (
        <p>Login please</p>
      )}
      <button onClick={() => loginUser(dispatch)}>Login</button>
    </div>
  );
}

export default Profile;
