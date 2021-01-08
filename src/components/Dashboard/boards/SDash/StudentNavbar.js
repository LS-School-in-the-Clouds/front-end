//Functional Imports
import React from 'react'
import { NavLink } from 'react-router-dom'

//Component Imports
import StudentNavData from './StudentNavdata'
import styled from 'styled-components'

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

const LogOut = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    width: 230px;
    height: 75px;
`