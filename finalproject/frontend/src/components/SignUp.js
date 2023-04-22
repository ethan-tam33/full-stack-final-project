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

  const handleSubmit = (e) => {
    const currUsername = signUpValues.username;
    const currEmail = signUpValues.email;
    const currPassword = signUpValues.password;

      if (!regex.test(currEmail) || currPassword.length < 6 || currUsername.length < 6) {
        alert("Invalid email, username, or password. Please try again")
      } else {
        console.log({ "username": currUsername, "email": currEmail, 
        "password": currPassword });
    
        axios.post(
          URL + '/signup', { "username": currUsername, "email": currEmail, "password": currPassword })
             .then((res) => {
                console.log("LOGGED IN!");
                console.log(res.data.token);
                navigate("/login");
             })
             .catch((err) => (console.log(err.response.data)));
        
        setSignUpValues({
            username: "",
            email: "",
            password: "",
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
        <button type="submit" style={{ marginTop: '4px', marginLeft: '40px'}}>SIGNUP</button>
      </form>
    <div>Already have an account?<Link to="/login">Log In</Link></div>
  </div>
  )
}

export default SignUp;
