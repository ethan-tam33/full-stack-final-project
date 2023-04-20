const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stars: {
    type: Double,
    required: true,
  },
  // holds instances of the Post.js class in an Array
  reviews: {
    type: Array,
    required: true,
  }, 
});

// export model user with UserSchema
module.exports = mongoose.model("course", CourseSchema);