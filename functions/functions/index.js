const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./utility/fbAuth");

const cors = require("cors");
app.use(cors());

const {
  signup,
  login,
  getAuthenticatedUser,
  userPassedTest,
} = require("./handlers/users");

app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/passed", FBAuth, userPassedTest);

exports.api = functions.region("europe-west1").https.onRequest(app);
