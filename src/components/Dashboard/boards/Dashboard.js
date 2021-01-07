//Functional imports
import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom"

//Component imports
import Navbar from "./MDash/MentorNav";
import { getAdminData, getMentorData, getStudentData } from "../../../utils/redux/actions/AuthActions";
import ADash from "./ADash/ADash";
import MDash from "./MDash/MDash";
import SDash from "./SDash/SDash";
//Style imports

const Dashboard = ({ role, user_id }) => {
    const id = user_id;

    if (role === "admin") {
        getAdminData(id);
        return(
            <ADash />
        )
    };

    if (role === "mentor") {
        getMentorData(id);
        return(
            <MDash />
        )
    };

    if (role === "student") {
        getStudentData(id);
        return(
            <SDash />
        )
    };
    
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

const mapStateToProps = (state) => {
    return{
        role: state.role,
        user_id: state.user_id,
    }

}

export default connect(mapStateToProps, { getStudentData, getMentorData, getAdminData } )(Dashboard);