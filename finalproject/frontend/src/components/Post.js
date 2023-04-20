import { useState } from 'react';
import React from 'react';

import styles from "../css/post.module.css"

export default function Post (date, comment) {
    return (
        <div className={styles.container}>
            <h1>{comment}</h1>
            <p>{date}</p>
        </div>
    )
}


// const Post = (props) => {

//   return (
//     <div className="post">
//       {props.courseName};






//     </div>


//   );


// }







// class Post {
//     constructor(username, stars, semester, professor, review) {
//       this.username = username;
//       this.stars = stars;
//       this.semester = semester;
//       this.professor = professor;
//       this.review = review;
//     }
  
//     // getter methods
//     getUsername() {
//       return this.username;
//     }
  
//     getStars() {
//       return this.stars;
//     }
  
//     getSemester() {
//       return this.semester;
//     }
  
//     getProfessor() {
//       return this.professor;
//     }
  
//     getReview() {
//       return this.review;
//     }
  
//     // setter methods
//     setUsername(username) {
//       this.username = username;
//     }
  
//     setStars(stars) {
//       this.stars = stars;
//     }
  
//     setSemester(semester) {
//       this.semester = semester;
//     }
  
//     setProfessor(professor) {
//       this.professor = professor;
//     }
  
//     setReview(review) {
//       this.review = review;
//     }
//   }