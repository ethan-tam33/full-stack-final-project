const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  // holds instances of the Post.js class in an Array
  posts: {
    type: Array,
    required: true,
  }
  }, 
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);