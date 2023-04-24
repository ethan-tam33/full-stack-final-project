const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("./../middleware/auth");
const Course = require("../models/Course");
const Post = require("../models/Post");

router.post(
  "/newCourse",
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {id, courseName, rating } = req.body;
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
        rating,
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


router.post(
  "/newPost",
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {id, courseName, rating, semester, professor, review } = req.body;
    try {
      let course = await Course.findOne({
        courseName
      });
      if (!course) {
        return res.status(400).json({
          msg: "Course Doesn't Exist",
        });
      }

      p = new Post({
        review,
        rating,
        semester,
        professor
      });
      
      course.posts.push(p);
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

<<<<<<< HEAD
router.post("/posts",
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {courseName} = req.body.courseName;
    try {
      let course = await Course.findOne({
        courseName
      });
      if (!course) {
        return res.status(500).send("Not a Valid Course");
      }
      res.status(200).json({ "posts": course.posts });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Fetching Posts");
  }
}
) 

router.get("/me", auth, async (req, res) => {
=======
router.get("/me", async (req, res) => {
>>>>>>> main
  try {
    const course = await Course.find();
    res.json(course);
  } catch (e) {
    res.send({ message: "Error in Fetching Course" });
  }
});


module.exports = router;
