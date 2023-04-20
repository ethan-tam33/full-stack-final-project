import { useState } from "react";
import "../css/login.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

const URL = 'http://localhost:3030/user';

const Login = ({ h }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log({
      username,
      password
    })
    console.log({ "username": username, 
    "password": password });

    axios.post(URL + '/login', { "username": username, 
        "password": password })
        .then((res) => {
            console.log("LOGGED IN!");
            console.log(res.data.token);
            navigate("/main");
            //this needs to store the token for future use
        })
        .catch((err) => (console.log(err.response.data)));
  }

  return <div className="login-page">
      <div className="login-text">
          LOGIN
      </div>
    <div>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      LOGIN
    </button>
    <div>Don't have an account?<Link to="/home">Sign Up</Link></div>
  </div>
}

export default Login;
