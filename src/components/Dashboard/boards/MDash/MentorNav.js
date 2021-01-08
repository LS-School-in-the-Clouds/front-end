import React from "react"
import { NavLink } from 'react-router-dom'
import MentorNavData from './mentornavdata'
import '../../../../style/Navbar.css'

const MentorNavbar = () => {
    return(
        <>
            <div className="nav-menu">
                <ul className="nav-menu-items"> 
                    {MentorNavData.map((item,index)=>{
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
        </>
    ) 
}

export default MentorNavbar;