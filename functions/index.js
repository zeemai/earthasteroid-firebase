const functions = require("firebase-functions");
const express = require("express");
const app = express();

const FBAuth = require("./util/fbAuth");

const { signup, login, forgotPassword } = require("./handlers/users");

//user route
app.post("/signup", signup);
app.post("/login", login);
app.post("/password/reset", forgotPassword);

exports.api = functions.region("europe-west1").https.onRequest(app);
