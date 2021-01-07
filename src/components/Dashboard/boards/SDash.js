//Functional imports
import react, { useState } from 'react';

//Component Imports
import StudentNavBar from '../navbars/StudentNavbar'
 
export const SDash = ({props}) => {
    return(
        <>
        <StudentNavBar/>
        <h1>I'm for Students!</h1>
        </>
    );
}

export default SDash;