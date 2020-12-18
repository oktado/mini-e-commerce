const express = require("express");
const router = require("./routes");
const db = require("./config/connection");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.listen(4000, () => {
  console.log(`server ready on port 4000`);
});
