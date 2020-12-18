"use strict";

const jwt = require("jsonwebtoken");

const userModel = require("../models/users");

const authentication = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      throw new Error("invalid token");
    }
    const payload = jwt.verify(accesstoken, "r4hasi4");

    const user = await userModel.findById(payload.userID);

    req.user = {
      userID: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
