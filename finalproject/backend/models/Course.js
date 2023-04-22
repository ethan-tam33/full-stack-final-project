const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  // holds instances of the Post.js class in an Array
  posts: {
    type: Array,
    default: [],
    required: true,
  }, 
});

// export model user with UserSchema
module.exports = mongoose.model("course", CourseSchema);