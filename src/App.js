//Functional Imports
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//Style Imports
import logo from './style/content/logo.svg';
import './style/App.css';

//Component Imports
import LoginForm from "./components/Landing/Login/LoginForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./utils/privateRoute";

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/student" component={Dashboard}/>
      <PrivateRoute path="/mentor" component={Dashboard}/>
      <PrivateRoute path="/admin" component={Dashboard}/>
    </Router>
    </>
  );
}

export default App;
