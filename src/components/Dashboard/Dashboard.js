//Functional imports
import React from "react";
import { Link, Route, Switch } from "react-router-dom"

//Component imports
import Navbar from "./Navbar";

const Dashboard = () => {
    return(
        <>
            <Navbar>
                <Switch>
                    <Route path="/foo">
                        <foo />
                    </Route>
                    <Route path="/foo">
                        <foo />
                    </Route>
                    <Route path="/foo">
                        <foo />
                    </Route>
                    <Route path="/foo">
                        <foo />
                    </Route>
                </Switch>
            </Navbar>
            
        </>
    );
}

export default Dashboard;