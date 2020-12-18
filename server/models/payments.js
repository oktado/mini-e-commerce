const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Types.ObjectId,
      ref: "item",
    },
    member: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const payment = mongoose.model("Payments", paymentSchema);
module.exports = payment;
