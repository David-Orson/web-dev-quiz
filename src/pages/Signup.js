import React, { useState, useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser, signupUser } from "../contexts/actions/userActions";

function Signup() {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user, dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(dispatch, email, password);
  };
  return (
    <div className="ui raised very padded text container segment">
      <h2>Login</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="ui button blue" onClick={handleSubmit}>
        login
      </button>
    </div>
  );
}

export default Signup;
