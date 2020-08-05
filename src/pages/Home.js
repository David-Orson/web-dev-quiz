import React, { useContext } from "react";
import { Link } from "@reach/router";

import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  /* const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN" });
  }; */

  return (
    <div className="ui raised very padded text container segment">
      <button onClick={() => setUser(true)}>Login</button>
      {user ? <p>Hi User</p> : <p>Login please</p>}
      <h3>Welcome to Code Quizzer!</h3>
      <p>
        This is a JavaScript quiz for beginners! Passing Score is 8/10 and the
        answers are multiple choice. Enjoy!
      </p>
      <Link to="/quiz" className="ui button yellow">
        Start
      </Link>
    </div>
  );
};

export default Home;
