import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Post from './Post'

export default function Class() {
    const [className, setClassName] = useState('')
    const [posts, setPosts] = useState('');
    const [rating, setRating] = useState('');

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('className');
        setClassName(name);
    }, location.search)

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

            <h1>{className}</h1>
            <h2>{course}</h2>

            <h2>Rating: {rating} / 5</h2>

            <br></br>

            <h3>Your Rating: {<input size="4"></input>} / 5</h3>

            <h3>Share your tips/review of the course here: </h3>
                
                
            {<textarea id="w3review" name="w3review" rows="10" cols="50"></textarea>}
            <br></br>
            <br></br>
            <label for="semester">Choose the semeseter you took the class: </label>
            <select name="semester" id="semester">
                <option value="sp23">Spring 2023</option>
                <option value="f22">Fall 2022</option>
                <option value="sp22">Spring 2022</option>
                <option value="f21">Fall 2021</option>
            </select>

            <br></br>
            <br></br>

            <label for="professors">Choose the professor you took the class with: </label>
            <select name="professors" id="professors">
                {profs.map((p) => {return (<option value={p}>{p}</option>)})}
            </select>
            <br></br>
            <input type="submit" value="submit"></input>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* we need to iterate over the posts array here to show them as it gets updated*/}

            {<Post rating="5" username="Bob123" semester="Fall 2022" professor="Denero" review="I loved this class!"></Post>}
            {<Post rating="2" username="Tara321" semester="Spring 2021" professor="Denero" review="I hated this class!" ></Post>}
            
            





        </div>
    )
}