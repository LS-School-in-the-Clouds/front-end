//Functional Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Style Imports
import './style/App.css';
import styled from 'styled-components' 
import { ThemeProvider } from 'styled-components'

//Component Imports
import Login from "./components/Landing/Login/Login";
import Landing from "./components/Landing/Landing";
import Register from "./components/Landing/Register/Register";
import Dashboard from "./components/Dashboard/boards/Dashboard";
import PrivateRoute from "./utils/hooks/PrivateRoute";

import StudentOnboarding from './components/Onboarding/StudentOnb.js'
import AdminOnboarding from './components/Onboarding/AdminOnb.js'
import MentorOnboarding from './components/Onboarding/MentorOnb.js'

import SMentors from '../src/components/Dashboard/boards/SDash/SMentors'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={SMentors}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/dash" component={Dashboard}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;