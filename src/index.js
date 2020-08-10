import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import UserProvider from "./contexts/UserContext";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
