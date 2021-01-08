//Functional imports
import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, useParams, Route, Switch } from "react-router-dom"

//Component imports
import Navbar from "./MDash/MentorNav";
import { getAdminData, getMentorData, getStudentData } from "../../../utils/redux/actions/AppActions";
import ADash from "./ADash/ADash";
import MDash from "./MDash/MDash";
import SDash from "./SDash/SDash";

//Style imports

const Dashboard = ({ role, user_id }) => {
    if (role === "admin") {
        return(
            <ADash />
        )
    };

    if (role === "mentor") {
        return(
            <MDash />
        )
    };

    if (role === "student") {
        return(
            <SDash />
        )
    };
    
    return(
        <>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        role: state.auth.role,
        user_id: state.auth.user_id,
    }

}

export default connect(mapStateToProps, { getStudentData, getMentorData, getAdminData } )(Dashboard);