const Router = require("express").Router();
const itemController = require("../controller/items");
const authorization = require("../middleware/authorization");
const authentication = require("../middleware/authentication");
const upload = require("../middleware/upload");

Router.get("/", authentication, itemController.getItem);

Router.get("/:id", authentication, itemController.getItemByName);

Router.post(
  "/",
  authentication,
  authorization,
  upload.single("images"),
  itemController.createItem
);

Router.delete(
  "/:id",
  authentication,
  authorization,
  itemController.deleteItemById
);

Router.patch("/:id", authentication, authorization, itemController.updateItem);

module.exports = Router;
