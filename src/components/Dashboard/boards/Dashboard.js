//Functional imports
import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, useParams, Route, Switch } from "react-router-dom"

//Component imports
import Navbar from "./MDash/MentorNav";
import { getAdminData, getMentorData, getStudentData } from "../../../utils/redux/actions/AuthActions";
import ADash from "./ADash/ADash";
import MDash from "./MDash/MDash";
import SDash from "./SDash/SDash";
import PrivateRoute from "../../../utils/hooks/PrivateRoute";
import SMentors from "./SDash/SMentors";
//Style imports

const Dashboard = ({ role, user_id }) => {
    const UID = user_id;
    if (role === "admin") {
        getAdminData(UID);
        return(
            <ADash />
        )
    };

    if (role === "mentor") {
        getMentorData(UID);
        return(
            <MDash />
        )
    };

    if (role === "student") {
        getStudentData(UID);
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
        role: state.role,
        user_id: state.user_id,
    }

}

export default connect(mapStateToProps, { getStudentData, getMentorData, getAdminData } )(Dashboard);