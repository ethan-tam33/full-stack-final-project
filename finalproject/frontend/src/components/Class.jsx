import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export default function Class() {
    const [className, setClassName] = useState('')
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState('');

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('className');
        setClassName(name);
    }, location.search)

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
            {/* <h2>{rating}</h2> */}

        </div>
    )
}