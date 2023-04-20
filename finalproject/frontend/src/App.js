import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link, useHistory, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Main from './components/main';
import Header from './components/header';
import Login from './components/Login';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/home" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/" element={<Login />} />
        <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
      </Routes>
    </Router>
    </div>
  );
}

export default App;