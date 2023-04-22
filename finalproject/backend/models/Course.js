const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
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