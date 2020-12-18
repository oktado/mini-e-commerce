const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Images = mongoose.model("Images", imageSchema);
module.exports = Images;
