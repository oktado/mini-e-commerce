"use strict";
const multer = require("multer");
const upload = multer({ storage: storage });

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "/images");
  },
  filaneme: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalName);
  },
});
