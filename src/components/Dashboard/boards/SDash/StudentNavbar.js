//Functional Imports
import React from 'react'
import { NavLink } from 'react-router-dom'

//Component Imports
import StudentNavData from './StudentNavdata'

const StudentNavBar = (props) => {
    return (
        <div>
            <div className="student-nav-menu">
                <ul className="student-nav-menu-items">
                    {StudentNavData.map((item,index)=>{
                        return (
                            <li key={index} className={item.className}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </div>
    )
}

export default StudentNavBar
