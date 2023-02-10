const mongoose = require("mongoose");
const config = require("../config/config");

async function connectDB() {
  const result = await mongoose.connect(config.DB_CONNECTION_URL);
  return result;
}
module.exports = connectDB;
