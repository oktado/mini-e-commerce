"use strict";
const itemModel = require("../models/items");

class itemController {
  static createItem = async (req, res, next) => {
    try {
      const itemData = {
        name: req.body.name,
        image: req.file.originalname,
        quantity: req.body.quantity,
        categories: req.body.categories,
        description: req.body.description,
        price: req.body.price,
        currency: req.body.currency,
      };

      const item = await itemModel.create(itemData);

      res.status(200).json({
        message: "Success create item.",
        item: item,
      });
    } catch (error) {
      next(error);
    }
  };

  static deleteItemById = async (req, res, next) => {
    try {
      const { id } = req.param;
      const deletedItem = await itemModel.deleteOne({
        _id: id,
      });

      res.status(200).json({
        message: "Success deleted item",
        deletedItem,
      });
    } catch (error) {
      next(error);
    }
  };

  static getItem = async (req, res, next) => {
    try {
      const item = await itemModel.find();

      res.status(200).json({
        item: item,
      });
    } catch (error) {
      next(error);
    }
  };

  static getItemByName = async (req, res, next) => {
    try {
      const { name } = req.param;
      const item = await itemModel.findOne({
        name: name,
      });
      if (!books) {
        throw new Error("Not Found");
      }
      res.status(200).json({
        item: item,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateItem = async (req, res, next) => {
    try {
      const { id } = req.param;
      const updateItem = await itemModel.updateOne(
        { _id: id },
        { quantity: req.body.quantity }
      );

      res.status(200).json({
        message: "Success update item.",
        updateItem: updateItem,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = itemController;
