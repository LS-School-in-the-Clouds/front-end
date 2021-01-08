//Functional imports
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Route } from "react-router-dom";

//Component imports
import { getMentorData } from '../../../../utils/redux/actions/AppActions'
import MentorNav from './MentorNav';
import MTasks from './MTasks';
import MGroup from './MGroup';
import MProfile from './MProfile';


export const MDash = ({ user_id }) => {
    const UID = user_id
    useEffect(() => {
        getMentorData(UID)
    }, [])
    return(
        <>
        <MentorNav/>
        <Route path={'/dash/tasks'}>
            <MTasks />
        </Route>
        <Route path={'/dash/group'}>
            <MGroup />
        </Route>
        <Route path={'/dash/profile'}>
            <MProfile />
        </Route>
        <h1>I'm for Mentors!</h1>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        first_name: state.first_name,
        last_name: state.last_name,
        interests: state.interests,
        state: state.state,
        country: state.country,
        career: state.career,
        preferred_times: state.preferred_times,
        time_zone: state.time_zone,
        img_url: state.img_url,
        user_id: state.user_id,
    }
}

export default connect(mapStateToProps, { getMentorData })(MDash)