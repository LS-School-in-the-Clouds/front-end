//Functional imports
import React, { useEffect } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux';

//Component Imports
import { getStudentData } from '../../../../utils/redux/actions/AppActions'
import StudentNavBar from './StudentNavbar';
import SMentors from './SMentors';
import SProfile from './SProfile';


export const SDash = ({ user_id }) => {
    const UID = user_id
    useEffect(() => {
        getStudentData(UID)
    }, []);
    return(
        <>
        <StudentNavBar />
        <Route path={'/dash/mentors'}>
            <SMentors />
        </Route>
        <Route path={'/dash/profile'}>
            <SProfile />
        </Route>  
        <h1>I'm for Students!</h1>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        first_name: state.first_name,
        last_name: state.last_name,
        interests: state.interests,
        state: state.state,
        country: state.country,
        career_goals: state.career_goals,
        preferred_times: state.preferred_times,
        time_zone: state.time_zone,
        img_url: state.img_url,
        user_id: state.user_id,
    }
}
export default connect(mapStateToProps, { getStudentData })(SDash); 