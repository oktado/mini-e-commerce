const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
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

const category = mongoose.model("Categories", categorySchema);
module.exports = category;
