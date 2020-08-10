import React from "react";

function Login() {
  return (
    <div className="ui raised very padded text container segment">
      <h2>Login</h2>
      <form noValidate>
        <div>
          <label>Email Address</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
      </form>
    </div>
  );
}

export default Login;
