import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Post from './Post'

export default function Class() {
    const [className, setClassName] = useState('')
    const [allPosts, setNewPost] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [numberOfRatings, setNumberOfRatings] = useState(0);

    const location = useLocation(); 

    useEffect(() => {
        console.log(location);
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('className');
        setClassName(name);
    }, location.search)

    const updatePosts = (post) => {
        setNewPost([post, ...allPosts])
    }

    var profs = []
    var course = "";
    if (className === "CS61A") {
        profs = ["Denero", "Farid"]
        course = "Structure and Interpretation of Computer Programs"
    } else if (className === "CS61B") {
        profs = ["Hug", "Hilfinger"]
        course = "Data Structures"
    } else if (className === "CS70") {
        profs = ["Ayazifar", "Rao"]
        course = "Discrete Math and Probability Theory"
    } else if (className === "EECS16A") {
        profs = ["Waller", "Subramanian"]
        course = "Designing Information Devices and Systems I"
    } else if (className === "EECS16B") {
        profs = ["Ramchandran", "Niknejad"]
        course = "Designing Information Devices and Systems II"
    } else if (className === "CS198-99") {
        profs = ["WBD"]
        course = "Introduction to Fullstack Development"
    }

    function updateAverageRating(newRating, numberOfRatings) {
        // Calculate the new average rating by averaging the current rating and the new rating
        const newAverageRating = (averageRating * numberOfRatings + newRating) / (numberOfRatings + 1);
      
        // Update the average rating state variable with the new average rating
        setAverageRating(newAverageRating);
      
        // You can return the new average rating if needed
        return newAverageRating;
    }

    function handleAddRating(newRating) {
        // Update the number of ratings
        setNumberOfRatings(numberOfRatings + 1);
    
        // Update the average rating using the updateAverageRating function
        const newAverageRating = updateAverageRating(newRating, numberOfRatings);
        setAverageRating(newAverageRating);
      }

    const posts = allPosts.filter((post) => {return post.props.course === className})

    // useEffect(() => {
    //     fetch('/comments/61a')
    //     .then((data) => setComments(data));
    // }, [])

    // useEffect(() => {
    //     fetch('/rating/' + className)
    //     .then((data) => setRating(data));
    // }, [className])

    // when we click post button
    // first: make a post request (adds the new data we just got)
    // second: make a get request (grabs the new data)
    

    // const comments  = {
    //     "61b" : {
    //       "" : {
    //         "date" : "01-02-2023",
    //         "comment": "This class sucks"
    //       },
    //        "" : {
    //         "date" : "01-02-2023",
    //         "comment": "This class sucks"
    //       }
    //     }
    //   }
    
    // comments.map((class) => {class.map((comment) => return (<Post date={comment.date} comment={comment.comment}/>))}

    return (
        
        <div id="container">
            {
                function getData() {
                    // Get review
                    var textarea = document.getElementById("review");
                    var review = textarea.value;

                    // Get prof
                    var selectProf = document.getElementById("professor");
                    var selectOptionProf = selectProf.options[selectProf.selectedIndex];
                    var prof = selectOptionProf.value;

                    // Get semester
                    var selectSem = document.getElementById("semester");
                    var selectOptionSem = selectSem.options[selectSem.selectedIndex];
                    var sem = selectOptionSem.value;

                    // Get username
                    // hm, how do we do this?
                    // var selectSem = document.getElementById("semester");
                    // var selectOptionSem = selectSem.options[selectSem.selectedIndex];
                    // var sem = selectOptionSem.value;

                    // Get rating
                    var selectRat = document.getElementById("rating");
                    var selectOptionRat = selectRat.options[selectRat.selectedIndex];
                    var rating = selectOptionRat.value;
                  
                    // Do something with the data, like display it in an alert
                    var post = <Post course={className} rating={rating} username="Bob123" semester={sem} professor={prof} review={review}></Post>
                    updatePosts(post);
                    handleAddRating(rating);

                    console.log(1);
                   
                  }

            }

            <h1>{className}</h1>
            <h2>{course}</h2>


            {/* need to calculate rating to update average rating of class each time*/}
            <h2>Rating: {averageRating} / 5</h2>

            <br></br>

            <h3>Your Rating: {<input id="rating" size="4"></input>} / 5</h3>

            <h3>Share your tips/review of the course here: </h3>
                
                
            {<textarea id="review" name="review" rows="10" cols="50"></textarea>}
            <br></br>
            <br></br>
            <label for="semester">Choose the semeseter you took the class: </label>
            <select name="semester" id="semester">
                <option value="Spring 2023">Spring 2023</option>
                <option value="Fall 2022">Fall 2022</option>
                <option value="Spring 2022">Spring 2022</option>
                <option value="Fall 2021">Fall 2021</option>
            </select>

            <br></br>
            <br></br>

            <label for="professors">Choose the professor you took the class with: </label>
            <select name="professors" id="professors">
                {profs.map((p) => {return (<option value={p}>{p}</option>)})}
            </select>
            <br></br>
            <button onclick="getData()">Submit</button>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* we need to iterate over the posts array here to show them as it gets updated*/}

            {posts}
            {<Post rating="5" username="Bob123" semester="Fall 2022" professor="Denero" review="I loved this class!"></Post>}
            {<Post rating="2" username="Tara321" semester="Spring 2021" professor="Denero" review="I hated this class!" ></Post>}
            
            





        </div>
    )
}