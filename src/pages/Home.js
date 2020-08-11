import React from "react";
import { Link } from "@reach/router";

import Profile from "../components/Profile";

const Home = () => {
  return (
    <div className="ui raised very padded text segment">
      <Profile />
      <h3>Welcome to Code Quizzer!</h3>
      <p>
        This is a JavaScript quiz for beginners! Passing Score is 8/10 and the
        answers are multiple choice. Enjoy!
      </p>
      <Link to="/quiz" className="ui button blue">
        Start
      </Link>
    </div>
  );
};

export default Home;
