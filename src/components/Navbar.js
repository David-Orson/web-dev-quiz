import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>Code Quizzer</h1>
      </Link>
      <Link to="/login" className="ui button basic yellow">
        Login
      </Link>
    </div>
  );
}

export default Navbar;
