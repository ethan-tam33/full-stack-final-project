import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    const [option, setOption] = useState("");
  return (
    <div>
      <h1>Rate My Courses</h1>
    <h2>Select A Course</h2>
    <select value={option} onChange={(e) => setOption(e.target.value)}>
		<option value="">Select a course</option>
		<option value="CS61A.html">CS61A</option>
		<option value="CS61B">CS61B</option>
		<option value="CS61C">CS61C</option>
		<option value="CS70">CS70</option>
        <option value="EECS16A">EECS16A</option>
        <option value="EECS16B">EECS16B</option>
        <option value="CS198-99">CS198-99</option>
	</select>
    <button onClick={console.log(option)}>
        Submit
    </button>
    </div>
  );
}

export default Main;