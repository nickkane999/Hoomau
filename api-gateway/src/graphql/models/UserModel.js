const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  profession: {
    type: String,
  },
  createdDate: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
