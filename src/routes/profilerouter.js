const express = require("express");
const profileRouter = express.Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const { UserAuth } = require("../Middelwares/auth.js");

profileRouter.get("/profile/view", UserAuth, async (req, res) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;

    const decodetoken = await jwt.verify(token, "rahul");

    const userProfile = await User.findOne({ _id: decodetoken._id });
    if (!userProfile) {
      throw new Error("invalid user");
    }
    res.send(userProfile);
  } catch (error) {
    res.status(400).send("Opps: " + error.message);
  }
});
profileRouter.get("/profile/edit", UserAuth, async (req, res) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;

    const decodetoken = await jwt.verify(token, "rahul");

    const userProfile = await User.findOne({ _id: decodetoken._id });
    if (!userProfile) {
      throw new Error("invalid user");
    }
    res.send(userProfile);
  } catch (error) {
    res.status(400).send("Opps: " + error.message);
  }
});
module.exports = profileRouter;
