import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="ui container">
      <h1>Code Quizzer</h1>
      <Link to="/quiz" className="ui button">
        Start
      </Link>
    </div>
  );
};

export default Home;
