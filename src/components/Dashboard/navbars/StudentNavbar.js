import React from 'react'
import { Link } from 'react-router-dom'
import StudentNavData from './navbardata/StudentNavdata'

function StudentNavBar() {
    return (
        <div>
            <div className="nav-menu">
                <ul className="nav-menu-items">
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
