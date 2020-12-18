const express = require("express");
const router = require("./routes");
const multer = require("multer");
const db = require("./config/connection");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "/images");
  },
  filaneme: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

app.post("/uploadFile", upload.single("upload1"), (req, res) => {
  res.status(200).json({
    file: req.file,
  });
});

app.use(router);
app.use(errorHandler);

app.listen(4000, () => {
  console.log(`server ready on port 4000`);
});
