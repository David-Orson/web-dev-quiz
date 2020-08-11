import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { state } = useContext(UserContext);
  return (
    <div className="ui raised very padded text  segment">
      {state.authenticated ? (
        <div>
          <h2>Enjoy the tests</h2>
          {state.js1.passed ? (
            <div>
              <i class="green check square icon"></i>
              <p>You have passed The JavaScript Quiz!</p>
            </div>
          ) : (
            <div>
              <i class="red times circle icon"></i>
              <p>not yet passed Js1.</p>
            </div>
          )}
        </div>
      ) : (
        <p>
          You are currently taking the quiz as a guest, signup/login to save
          your progress.
        </p>
      )}
    </div>
  );
}

export default Profile;
