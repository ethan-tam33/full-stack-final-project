const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
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
router.post("/newCourse",
        async (req, res) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(),
                });
            }
            const { id, name, stars } = req.body;
            try {
                let course = await Course.findOne({
                  "name": name
                });
                if (course) {
                  return res.status(400).json({
                    msg: "Course Already Exists",
                  });
                }
          
                course = new Course({
                  "id": id,
                  "name": name,
                  "stars": stars,
                });

                course.save();
            } catch (err) {
                console.log(err.message);
                res.status(500).send("Error in Saving");
            }
        }
)

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
