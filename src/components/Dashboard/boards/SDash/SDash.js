//Functional imports
import react, { useState } from 'react';

//Component Imports
import StudentNavBar from './StudentNavbar'
 
export const SDash = ({props}) => {
    return(
        <>
        <StudentNavBar/>
        {/* <SMentors /> */}
        <h1>I'm for Students!</h1>
        </>
    );
}

export default SDash;