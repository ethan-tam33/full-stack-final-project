import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link, useHistory, Navigate } from 'react-router-dom';
import Login from './components/login';
import Main from './components/main';
import Header from './components/header';
import Class from './components/Class';
import SignUp from './components/SignUp'
import NewPost from './components/NewPost'

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Routes>
        <Route path="/home" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/" element={<Login />} />
        <Route path ="/newpost" element={<NewPost />}/>
        <Route
        path="*"
        element={<Navigate to="/main" replace />}
    />
      <Route path="/class" element={<Class />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;