import React from 'react'
import {Link} from 'react-router-dom'
import AdminNavData from './AdminNavdata'
import styled from 'styled-components'

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

const LogOutButton = styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    width: 230px;
    height: 75px;
`