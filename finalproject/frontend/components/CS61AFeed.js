import { useState } from 'react';
import React from 'react';

const CS61AFeed = () => {

    const [allReviews, setNewBlock] = useState([]);

    const updateBlock = (review) => {
        setNewBlock([review, ...allReviews])
    }


    const posts = allBlocks.map((color) => <Block color = {color}></Block>);

}