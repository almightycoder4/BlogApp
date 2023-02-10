const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: {
    type: String,
    require: true,
    min: 8,
  },
  name: String,
  userimg: String,
  gender: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = { User };
