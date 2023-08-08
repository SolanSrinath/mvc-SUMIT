const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", routes);
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://root:root@cluster0.syi4byt.mongodb.net/test")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("err"));

app.listen(4000, () => {
  console.log("server running at 4000");
});
