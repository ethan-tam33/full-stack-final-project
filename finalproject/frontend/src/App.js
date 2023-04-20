import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link, useHistory, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Header from './components/Header';
import Class from './components/Class';

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
        element={<Navigate to="/login" replace />}
    />
      <Route path="/class" element={<Class />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;