const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      max: 9999999,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
      validate: {
        validator: (val) => {
          return /^[A-Z]/.test(val);
        },
        message: `invalid name format`,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      validate: {
        validator: (val) => {
          return /^[A-Z]/.test(val);
        },
        message: `invalid name format`,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const item = mongoose.model("Items", itemSchema);
module.exports = item;
