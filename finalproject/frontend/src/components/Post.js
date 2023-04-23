//import React from 'react';

import styles from "../css/post.module.css"

export default function Post ({p}) {
    return (
        <div className={styles.post}>
            <h2>Rating: {p.rating} / 5</h2>
            {/* <p> User: {props.username}</p> */}
            <p style={{ fontWeight: 'bold' }}>Semester: {p.semester}</p>
            <p style={{ fontWeight: 'bold' }}>Professor: {p.professor}</p>
            <p>Review: {p.review}</p>
            
        </div>
    )
}


