import React from 'react'
import {Link} from 'react-router-dom'
import AdminNavData from './navbardata/AdminNavdata'

function AdminNavbar() {
    return (
        <div>
            <div className="admin-nav-menu">
                <ul className="nav-menu-items">
                    {AdminNavData.map((item,index)=>{
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

export default AdminNavbar;