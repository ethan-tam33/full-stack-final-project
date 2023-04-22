const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("./../middleware/auth");
const Course = require("../models/Course");



//assume we get a valid request for now
/*New Posts will be in format:
req = {
    "body": {
        "id": 1,
        "post": {
            The actual post object
        }
    }
} 
This route simply creates course objects, so I can use them later.
*/

router.post(
  "/newCourse",
  // [
  //   check("username", "Please Enter a Valid Username").not().isEmpty(),
  //   check("email", "Please enter a valid email").isEmail(),
  //   check("password", "Please enter a valid password").isLength({
  //     min: 6,
  //   }),
  // ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {id, courseName, stars } = req.body;
    try {
      let c = await Course.findOne({
        courseName
      });
      if (c) {
        return res.status(400).json({
          msg: "Course Already Exists",
        });
      }

      course = new Course({
        id,
        courseName,
        stars,
      });

      const salt = await bcrypt.genSalt(10);
      course.id = await bcrypt.hash(id, salt);

      await course.save();

      const payload = {
        course: {
          id: course.id,
          // Add more fields to the payload
        },
      };

      jwt.sign(
        payload,
        "randomString",
        // Make a new hash String
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);





// router.post("/newCourse",
//         async (req, res) => {
//             const errors = validationResult(req)
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({errors: errors.array(),
//                 });
//             }
//             const { id, name, stars } = req.body;
//             try {
//                 let course = await Course.findOne({
//                   name
//                 });
//                 if (course) {
//                   return res.status(400).json({
//                     msg: "Course Already Exists",
//                   });
//                 }
          
//                 course = new Course({
//                   "id": id,
//                   "name": name,
//                   "stars": stars,
//                 });
//                 await course.save();
//             } catch (err) {
//                 console.log(err.message);
//                 res.status(500).send("Error in Saving");
//             }
//         }
// );

/* 
Add newPost to a course. Does course lookup by name. I guess this is ok?
For some reason it's not working. Somebody help.
*/

router.post("/newPost",
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(),
            });
        }
        //do we do course lookup by name or ID?
        //do name for now I guess...
        if (!req.body.name) {
            res.status(400).json({ msg: "NO COURSE NAME!"})
        }
        const { name, post } = req.body;
        //find CourseID;
        try {
            let course = await Course.findOne({ "name": name });
            if (!course) {
              return res.status(400).json({
                msg: "No Such Course! Try Different ID?",
              })
            }
            course.posts.push(post)
            course.save();
        } catch (err) {
            console.log(err.message)
            res.status(500).send("Error in Saving")
    }
});

module.exports = router;
