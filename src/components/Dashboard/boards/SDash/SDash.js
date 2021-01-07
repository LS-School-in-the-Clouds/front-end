//Functional imports
import react, { useState } from 'react';
import { useRouteMatch, Route, useParams} from "react-router-dom"
import { connect } from 'react-redux';

//Component Imports
import StudentNavBar from './StudentNavbar';
import SMentors from './SMentors';
import SProfile from './SProfile';


export const SDash = (props) => {
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
    return state;
}

export default connect(mapStateToProps, {})(SDash);