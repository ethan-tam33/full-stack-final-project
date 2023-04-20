import { useState } from 'react';
import React from 'react';

const Course = () => {

  const [allReviews, setNewBlock] = useState([]);

  const updateBlock = (review) => {
      setNewBlock([review, ...allReviews])
  }

  


}

// class Course {
//     constructor(courseName) {
//       this.courseName = courseName;
//       this.stars = 0;
//       this.reviews = [];
//     }
  
//     // method to add a new review to the course
//     addReview(username, stars, semester, professor, review) {
//       const newReview = new Post(username, stars, semester, professor, review);
//       this.reviews.push(newReview);
//       this.calculateStars();
//     }
  
//     // method to calculate the average stars for the course
//     calculateStars() {
//       let totalStars = 0;
//       for (let review of this.reviews) {
//         totalStars += review.getStars();
//       }
//       this.stars = totalStars / this.reviews.length;
//     }
//   }


  