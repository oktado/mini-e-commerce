"use strict";
const categoryModel = require("../models/categories");

class categoryController {
  static createCategory = async (req, res, next) => {
    try {
      const categoryData = {
        name: req.body.name,
      };

      const category = await categoryModel.create(categoryData);

      res.status(200).json({
        message: "success create category",
        category: category,
      });
    } catch (error) {
      next(error);
    }
  };

  static deleteCategoryById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCategory = await categoryModel.findByIdAndDelete({
        id: id,
      });

      res.status(200).json({
        message: "Success delete category.",
        deletedCategory,
      });
    } catch (error) {
      next(error);
    }
  };

  static findAllCategory = async (req, res, next) => {
    try {
      const category = await categoryModel.find();

      res.status(200).json({
        category: category,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateCategory = async (req, res, next) => {
    try {
      const { name } = req.params;
      const category = await categoryModel.updateOne(
        { name: name },
        { name: req.body.name }
      );
      res.status(200).json({
        message: "Success update category",
        category,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = categoryController;
