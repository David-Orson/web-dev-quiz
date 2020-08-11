import React, { useState, useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { loginUser } from "../contexts/actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(dispatch, email, password);
  };
  return (
    <div className="ui raised very padded text segment">
      <h1>Login</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="ui button blue">login</button>
      </form>
    </div>
  );
}

export default Login;
