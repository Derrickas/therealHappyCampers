import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return <Dashboard />;



  
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

//database 
const  db = require('../../config/connection')


function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />

      </div>
    </Router>
  );
}

export default App;
