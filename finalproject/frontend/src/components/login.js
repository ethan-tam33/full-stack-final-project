import { useState } from "react";
import "../css/login.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const URL = 'http://localhost:3030/user';

const Login = ({ h }) => {

  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const currUsername = userInformation.username;
    const currPassword = userInformation.password;

    console.log({ "username": currUsername, 
    "password": currPassword });

    console.log("Working!");

    axios.post(
      URL + '/login', { "username": currUsername, "password": currPassword})
         .then((res) => {
            console.log("LOGGED IN!");
            console.log(res.data.token);
            navigate("/main");
            //this needs to store the token for future use
          })
         .catch((err) => (console.log(err.response.data)));
    
    setUserInformation({
        username: "",
        password: "",
    });
  }

  return (<div>
    
      <div className="login-page">
      <h1>Rate My Courses</h1>
      <div className="login-text">
          LOGIN
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="username"
          value={userInformation.username}
          onChange={(e) =>
            setUserInformation({ ...userInformation, username: e.target.value })
          }
        ></input>
        <br />
        <input
          placeholder="password"
          value={userInformation.password}
          onChange={(e) =>
            setUserInformation({ ...userInformation, password: e.target.value })
          }
        ></input>
        <br />
        <button type="submit" style={{ marginTop: '4px', marginLeft: '45px'}}>LOGIN</button>
      </form>
    <div>Don't have an account?<Link to="/home">Sign Up</Link></div>
  </div>
  </div>
  )
}

export default Login;

