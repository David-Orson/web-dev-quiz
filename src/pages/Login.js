import React, { useState, useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser } from "../contexts/actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(dispatch, email, password);
  };
  return (
    <div className="ui raised very padded text container segment">
      <h2>Login</h2>

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
      <button className="ui button blue" onClick={handleSubmit}>
        login
      </button>
    </div>
  );
}

export default Login;
