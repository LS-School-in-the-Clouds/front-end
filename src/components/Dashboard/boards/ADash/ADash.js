//Functional imports
import react, { useState } from 'react';

//Component Imports
import AdminNavBar from './AdminNavbar'


export const ADash = (props) => {
    return(
        <>
        <AdminNavBar/>
        <h1>I'm for admins!</h1>
        </>
    );
}

export default ADash;