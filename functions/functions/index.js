const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

const { signup } = require("./handlers/users");

app.post("/signup", signup);

exports.api = functions.region("europe-west1").https.onRequest(app);
