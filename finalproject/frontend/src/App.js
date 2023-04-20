import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Login from './components/login';
import Main from './components/login';

function App() {
  return (
    <Login></Login>
  );
}

export default App;