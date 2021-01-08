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


export const MDash = ( props ) => {
    const UID = props.user_id
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
        first_name: state.app.first_name,
        last_name: state.app.last_name,
        interests: state.app.interests,
        state: state.app.state,
        country: state.app.country,
        career: state.app.career,
        preferred_times: state.app.preferred_times,
        time_zone: state.app.time_zone,
        img_url: state.app.img_url,
        user_id: state.app.user_id,
    }
}

export default connect(mapStateToProps, { getMentorData })(MDash)