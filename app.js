const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect"); // Import the connectDB module
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
require("dotenv").config();

connectDB();
//middlewares
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);
app.use("/", (req, res, next) => {
  res.send("Default Home Page");
});
app.use(notFound);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
