import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as IconName from 'react-icons/im'


export const AdminNavData = [
    {
        title: 'Home',
        path: '/dash',
        icon: <AiIcons.AiFillHome/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Mentors',
        path: '/dash/mentors',
        icon: <FaIcons.FaTasks/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Tasks',
        path: '/dash/tasks',
        icon: <MdIcons.MdGroup/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Profile',
        path: '/dash/profile',
        icon: <IconName.ImProfile/>,
        className: 'admin-nav-text',
    },
]

export default AdminNavData;