//Functional imports
import React, { useEffect } from 'react';
import { Route } from "react-router-dom"
import { connect } from 'react-redux';

//Component Imports
import { getAllMentorData, getStudentData } from '../../../../utils/redux/actions/AppActions'
import StudentNavBar from './StudentNavbar';
import SMentors from './SMentors';
import SProfile from './SProfile';
import MentorList from './SMentors';

//Style Imports
import { ThemeProvider } from 'styled-components'
import { MainContainer } from '../../../../style/StyledComponents'


export const SDash = (props) => {
    const UID = props.user_id
    useEffect(() => {
        props.getStudentData(UID);
        props.getAllMentorData();
    });
    return(
        <>
        <StudentNavBar />
        <Route path={'/dash/mentors'}>
            <SMentors />
        </Route>
        <Route path={'/dash/profile'}>
            <SProfile />
        </Route>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        first_name: state.app.first_name,
        last_name: state.app.last_name,
        interests: state.app.interests,
        state: state.app.state,
        country: state.app.country,
        career_goals: state.app.career_goals,
        preferred_times: state.app.preferred_times,
        time_zone: state.app.time_zone,
        img_url: state.app.img_url,
        user_id: state.auth.user_id,
        role: state.auth.role,
    }
}
export default connect(mapStateToProps, { getStudentData, getAllMentorData })(SDash); 