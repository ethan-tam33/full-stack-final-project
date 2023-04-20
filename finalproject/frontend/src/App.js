import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link, useHistory, Navigate } from 'react-router-dom';
import Login from './components/login';
import Main from './components/main';
import Header from './components/header';


function App() {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
    </Router>
    </div>
  );
}

export default App;