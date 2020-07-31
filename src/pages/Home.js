import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div className="ui container">
      <Link to="/quiz" className="ui button yellow">
        Start
      </Link>
    </div>
  );
};

export default Home;
