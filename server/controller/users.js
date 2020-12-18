"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users");

class UserController {
  static register = async (req, res, next) => {
    try {
      // const { username, password, role } = req.body;
      const userData = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
        role: req.body.role,
      };
      const user = await userModel.create(userData);

      res.status(200).json({
        message: "Success create user.",
        user: user,
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({
        username: username,
      });
      if (!user) {
        throw new Error("invalid username/password");
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("invalid username/password");
      }

      const tokenPayload = {
        userID: user._id,
      };

      const jwtToken = jwt.sign(tokenPayload, "r4hasi4");

      res.status(200).json({
        message: "login success",
        accessToken: jwtToken,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserData = async (req, res, next) => {
    try {
      const userData = await userModel.find();
      res.status(200).json({
        userData: userData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = UserController;
