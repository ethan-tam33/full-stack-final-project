const express = require("express");
const user = require("./routes/user");
const course = require("./routes/course");
const InitiateMongoServer = require("./config/db");


//comment for testing
// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 3030;

const cors = require('cors')

app.use(cors());
app.options('*', cors());

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */
 app.use("/user", user);
 app.use("/course", course);


app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});