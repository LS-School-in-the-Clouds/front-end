//Functional imports

import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Component Imports

import { getAdminData } from '../../../../utils/redux/actions/AppActions';
import AdminNavBar from './AdminNavbar';
import AMentors from './AMentors';
import ATasks from './ATasks.js';
import ASettings from './ASettings';



export const ADash = (props) => {
    const UID = props.user_id
    useEffect(() => {
        getAdminData(UID);
        console.log(UID)
    }, [])
    return(
        <>
        <AdminNavBar/>
        <Route path={'/dash/mentors'}>
            <AMentors />
        </Route>
        <Route path={'/dash/tasks'}>
            <ATasks />
        </Route>
        <Route path={'/dash/settings'}>
            <ASettings />
        </Route>
        <h1>I'm for admins!</h1>
        </>
    );
}

const mapStateToProps = (state) => {
    return{ 
        school_district: state.app.school_district,
        school_name: state.app.school_name,
        state: state.app.state,
        country: state.app.country,
        img_url: state.app.img_url,
        user_id: state.auth.user_id,
    }
}

export default connect(mapStateToProps, { getAdminData })(ADash)