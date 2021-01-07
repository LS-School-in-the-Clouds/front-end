//Functional imports
import react, { useState } from 'react';
import { useRouteMatch } from "react-router-dom"
import { connect } from 'react-redux';

//Component Imports
import StudentNavBar from './StudentNavbar';
import SMentors from './SMentors';
import SProfile from './SProfile';


export const SDash = (props) => {
    return(
        <>
        <StudentNavBar />
        <h1>I'm for Students!</h1>
        </>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {})(SDash);