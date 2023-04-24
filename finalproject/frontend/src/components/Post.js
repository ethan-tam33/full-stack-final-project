//import React from 'react';

import styles from "../css/post.module.css"

<<<<<<< HEAD
export default function Post ({p}) {
    return (
        <div className={styles.post}>
            <h2>Rating: {p.rating} / 5</h2>
            {/* <p> User: {props.username}</p> */}
            <p style={{ fontWeight: 'bold' }}>Semester: {p.semester}</p>
            <p style={{ fontWeight: 'bold' }}>Professor: {p.professor}</p>
            <p>Review: {p.review}</p>
            
=======
export default function Post ({ rating, semester, professor, review }) {
    return (
        <div className={styles.post}>
            <h2>Rating: {rating} / 5</h2>
            {/* <p> User: {props.username}</p> */}
            <p style={{ fontWeight: 'bold' }}>Semester: {semester}</p>
            <p style={{ fontWeight: 'bold' }}>Professor: {professor}</p>
            <p>Review: {review}</p>
>>>>>>> main
        </div>
    )
}


