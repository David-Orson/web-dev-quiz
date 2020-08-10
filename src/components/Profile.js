import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser } from "../contexts/actions/userActions";

function Profile() {
  const { user, dispatch } = useContext(UserContext);
  return (
    <div className="ui raised very padded text  segment">
      {user.handle ? <p>Hi {user.handle}</p> : <p>Login please</p>}
      <button onClick={() => loginUser(dispatch)}>Login</button>
    </div>
  );
}

export default Profile;
