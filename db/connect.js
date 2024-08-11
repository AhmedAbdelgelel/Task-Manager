const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to database");
  } catch (error) {
    console.error("ERROR: ", error.message);
  }
};
module.exports = connectDB;
