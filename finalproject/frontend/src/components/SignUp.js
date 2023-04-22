import { useState } from "react";
import "../css/login.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const URL = 'http://localhost:3030/user';


const SignUp = ({ h }) => {

  const [signUpValues, setSignUpValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [records, setRecords] = useState([]);
  console.log("Being called!")


  const handleSubmit = (e) => {
      if (!regex.test(signUpValues.email)) {
        console.log("Invalid email.");
      } else {
        setRecords([...records, signUpValues])
        console.log({ "username": signUpValues.username, "email": signUpValues.email, 
        "password": signUpValues.password });
    
        axios.post(URL + '/signup', { "username": signUpValues.username, "email": signUpValues.email, 
            "password": signUpValues.password })
            .then((res) => {
                console.log("LOGGED IN!");
                console.log(res.data.token);
                navigate("/login");
            })
            .catch((err) => (console.log(err.response.data)));
        
        setSignUpValues({
            fullName: "",
            address: "",
            number: "",
            occupation: ""
        });
      }
    }

  return (
   <div className="login-page">
      <div className="login-text">
          SIGNUP
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="username"
          value={signUpValues.username}
          onChange={(e) =>
            setSignUpValues({ ...signUpValues, username: e.target.value })
          }
        ></input>
        <br />
        <input
          placeholder="email"
          value={signUpValues.email}
          onChange={(e) =>
            setSignUpValues({ ...signUpValues, email: e.target.value })
          }
        ></input>
        <br />
        <input
          placeholder="password"
          value={signUpValues.password}
          onChange={(e) =>
            setSignUpValues({ ...signUpValues, password: e.target.value })
          }
        ></input>
        <br />
        <button type="submit" style={{ marginTop: '4px'}}>SIGNUP</button>
      </form>
    <div>Already have an account?<Link to="/login">Log In</Link></div>
  </div>
  )
}

export default SignUp;
