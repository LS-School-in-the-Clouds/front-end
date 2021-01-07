import React from "react"
import {Link} from 'react-router-dom'
import MentorNavData from './MentorNavData'
import '../../../../style/Navbar.css'

const MentorNavbar = () => {
    return(
        <>
            <div className="nav-menu">
                <ul className="nav-menu-items"> 
                    {MentorNavData.map((item,index)=>{
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    ) 
}

export default MentorNavbar;