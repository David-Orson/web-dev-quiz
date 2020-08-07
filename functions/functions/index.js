const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

app.post("/signup", signup);
