const mongoose = require("mongoose");

/*
The rationale for creating this was that
we were dealing with "ghost" posts the entire time, we never formally
defined what it'll look like. I'm not sure if other
Post schemas can fit inside a Course schema, but either way it's good to
formally define what Posts should look like.
*/

const PostSchema = mongoose.Schema({
  review: {
      type: String,
      required: true,
  }, 
  rating: {
      type: Number,
      required: true,
  }, 
  semester: {
      type: String,
      required: true,
  }, 
  professor: {
      type: String,
      required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("post", PostSchema);