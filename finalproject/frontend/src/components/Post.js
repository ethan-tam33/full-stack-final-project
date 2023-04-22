//import React from 'react';

import styles from "../css/post.module.css"

export default function Post ({props}) {
    return (
        <div className={styles.post}>
            <h2>Rating: {props.rating} / 5</h2>
            {/* <p> User: {props.username}</p> */}
            <p style={{ fontWeight: 'bold' }}>Semester: {props.semester}</p>
            <p style={{ fontWeight: 'bold' }}>Professor: {props.professor}</p>
            <p>Review: {props.review}</p>
            
        </div>
    )
}


