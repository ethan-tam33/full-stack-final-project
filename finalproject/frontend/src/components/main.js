import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Rate My Courses</h1>
    <h2>Select A Course</h2>
    <select name="course" onchange="location = this.value;">
		<option value="">Select a course</option>
		<option value="CS61A.html">CS61A</option>
		<option value="CS61B">CS61B</option>
		<option value="CS61C">CS61C</option>
		<option value="CS70">CS70</option>
        <option value="EECS16A">EECS16A</option>
        <option value="EECS16B">EECS16B</option>
        <option value="CS198-99">CS198-99</option>
	</select>
    </div>
  );
}

export default Main;