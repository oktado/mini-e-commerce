const Router = require("express").Router();
const userController = require("../controller/users");
const authorization = require("../middleware/authorization");
const authentication = require("../middleware/authentication");

Router.get("/", authentication, authorization, userController.getUserData);

Router.post("/register", userController.register);

Router.post("/login", userController.login);

module.exports = Router;
