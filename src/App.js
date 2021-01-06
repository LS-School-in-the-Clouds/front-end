//Functional Imports
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


//Style Imports
import './style/App.css';

//Component Imports
import Login from "./components/Landing/Login/Login";
import Landing from "./components/Landing/Landing";
import Register from "./components/Landing/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./utils/hooks/PrivateRoute";

const App = () => {
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