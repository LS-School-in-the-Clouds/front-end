//Functional imports

import React,{ useEffect } from 'react';
import { Route } from 'react-router-dom';

//Component Imports

import { getAdminData } from '../../../../utils/redux/actions/AppActions';
import AdminNavBar from './AdminNavbar';
import AMentors from './AMentors';
import ATasks from './ATasks.js';
import ASettings from './ASettings';
import { connect } from 'react-redux';


export const ADash = (props) => {
    const UID = props.user_id
    useEffect(() => {
        getAdminData(UID);
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
        school_district: state.school_district,
        school_name: state.school_name,
        state: state.state,
        country: state.country,
        img_url: state.img_url,
        user_id: state.user_id,
    }
}

export default connect(mapStateToProps, { getAdminData })(ADash)