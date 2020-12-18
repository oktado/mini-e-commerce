const Router = require("express").Router();
const userRouter = require("./users");
const categoryRouter = require("./categories");
const itemRouter = require("./items");

Router.use("/users", userRouter);

Router.use("/categories", categoryRouter);

Router.use("/items", itemRouter);

module.exports = Router;
