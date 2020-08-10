import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { user, dispatch } = useContext(UserContext);
  return (
    <div className="ui raised very padded text  segment">
      {user.handle ? <p>Hi User</p> : <p>Login please</p>}
      <button onClick={() => dispatch({ type: "LOGIN", handle: "me" })}>
        Login
      </button>
    </div>
  );
}

export default Profile;
