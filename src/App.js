//Functional Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Style Imports
import './style/App.css';

//Component Imports
import Login from "./components/Landing/Login/Login";
import Landing from "./components/Landing/Landing";
import Register from "./components/Landing/Register/Register";
import Dashboard from "./components/Dashboard/boards/Dashboard";
import PrivateRoute from "./utils/hooks/PrivateRoute";

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/dash" component={Dashboard}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;