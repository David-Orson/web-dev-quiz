const { admin, db } = require("../utility/admin");

const firebaseConfig = require("../utility/firebaseConfig");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const {
  validateSignupData,
  validateLoginData,
} = require("../utility/validators");
const { database } = require("firebase-admin");

exports.signup = async (req, res) => {
  try {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      handle: req.body.handle,
    };

    const { valid, errors } = validateSignupData(newUser);

    if (!valid) return res.status(400).json(errors);

    let token, userId;
    const doc = await db.doc(`/users/${newUser.handle}`).get();

    const creds = doc.exists
      ? res.status(400).json({ handle: "This username is unavailable" })
      : await firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);

    userId = creds.user.uid;

    const idToken = await creds.user.getIdToken();

    token = idToken;

    const userCredentials = {
      handle: newUser.handle,
      email: newUser.email,
      createdAt: new Date().toISOString(),
      userId,
    };

    const done = await db.doc(`/users/${newUser.handle}`).set(userCredentials);

    if (done) {
      return res.status(201).json({ token });
    }
  } catch (err) {
    console.error(err);
    if (err.code === "auth/email-already-in-use") {
      return res.status(400).json({ email: "Email is already in use " });
    } else {
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    }
  }
};

exports.login = async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const { valid, errors } = validateLoginData(user);

    if (!valid) return res.status(400).json(errors);

    const creds = await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);

    const token = await creds.user.getIdToken();

    if (token) {
      return res.status(200).json({ token });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(403)
      .json({ general: "Wrong credentials, please try again" });
  }
};
