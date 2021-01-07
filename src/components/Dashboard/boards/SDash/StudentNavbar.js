import React from 'react'
import { Link } from 'react-router-dom'
import StudentNavData from './StudentNavdata'

function StudentNavBar() {
    return (
        <div>
            <div className="student-nav-menu">
                <ul className="student-nav-menu-items">
                    {StudentNavData.map((item,index)=>{
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
        </div>
    )
}

export default StudentNavBar
