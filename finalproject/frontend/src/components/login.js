import { useState } from "react";
import "../css/login.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import Header from './header'

const URL = 'http://localhost:3030/user';

const Login = ({ h }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log({
      username,
      email,
      password
    })
    console.log({ "username": username, "email": email, 
    "password": password });

    axios.post(URL + '/signup', { "username": username, "email": email, 
        "password": password })
        .then((res) => {
            console.log("LOGGED IN!");
            console.log(res.data.token);
            navigate("/main");
        })
        .catch((err) => (console.log(err.response.data)));
  }

  return <div>
    <h1 text-align="center"> Rate My Courses</h1>
      <div className="login-page">
      <div className="login-text">
          SIGNUP
      </div>
    <div>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      SIGNUP
    </button>
  </div>
  <div>Don't have an account? <Link to="/main">Sign Up</Link></div>
  </div>
}

export default Login;
