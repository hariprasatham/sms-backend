const mongoose = require("mongoose");
require("dotenv").config()

const CONNECTION_STRING = process.env.MONGODB_URI;

async function dbConfig() {
  try {
    const connect = await mongoose.connect(CONNECTION_STRING);
    console.log("connection establised")
  } catch (error) {
    console.log(error);
  }
}


module.exports = dbConfig;