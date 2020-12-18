const Router = require("express").Router();
const categoryController = require("../controller/categories");
const authorization = require("../middleware/authorization");
const authentication = require("../middleware/authentication");

Router.get("/", authentication, categoryController.findAllCategory);
Router.post(
  "/",
  authentication,
  authorization,
  categoryController.createCategory
);
Router.delete(
  "/",
  authentication,
  authorization,
  categoryController.deleteCategoryById
);
Router.put(
  "/",
  authentication,
  authorization,
  categoryController.updateCategory
);

module.exports = Router;
