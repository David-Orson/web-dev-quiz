const { admin, db } = require("../utility/admin");

const firebaseConfig = require("../utility/firebaseConfig");

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const { validateSignupData } = require("../utility/validators");

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
