const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("express")();

const cors = require("cors");
app.use(cors());

admin.initializeApp();

app.post("/signup", signup);
