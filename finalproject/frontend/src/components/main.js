import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import styles from "../css/main.module.css"

const Main = () => {
  // const [option, setOption] = useState('');
  
  const classData = ["CS61A", "CS61B", "CS70", "EECS61A", "EECS16B", "CS198-99"]
  
  // function siteRedirect() {
  //   var selectbox = document.getElementById("select-id");
  //   var selectedValue = selectbox.options[selectbox.selectedIndex].value;
  //   window.location.href = selectedValue;
  // }

  return (
    <div>
      <h1>Rate My Courses</h1>
    <h2>Select A Course</h2>

    <div id="select-id">
      {/* <select name="course">
      <option value="">Select a course</option>
      <option value="CS61A.html" onselect={() => console.log("Test 2")}>CS61A</option>
      <option value="CS61B">CS61B</option>
      <option value="CS61C">CS61C</option>
      <option value="CS70">CS70</option>
        <option value="EECS16A">EECS16A</option>
        <option value="EECS16B">EECS16B</option>
        <option value="CS198-99">CS198-99</option>
      </select> */}
      {classData.map(className => {return (<button className={styles.classButton}><Link to={"/Class?className=" + className}>{className}</Link></button>)})}
    </div>
    
  {/* <button onclick="siteRedirect()">Go</button> */}

  
    
    
    </div>
  );
}

export default Main;