import React, { useContext } from "react";
import { Link } from "@reach/router";

import { UserContext } from "../contexts/UserContext";

import logo from "../Assets/code-quizzer-dark.png";

function Navbar() {
  const { state } = useContext(UserContext);
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Code Quizzer" />
      </Link>
      {state.authenticated ? null : (
        <div className="ui container">
          <div className="ui segment padded">
            <Link to="/login" className="ui button basic blue">
              Login
            </Link>
            <Link to="signup" className="ui button blue">
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
