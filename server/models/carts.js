const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        type: mongoose.Types.ObjectId,
        ref: "item",
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cart = mongoose.model("Carts", cartSchema);
module.exports = cart;
