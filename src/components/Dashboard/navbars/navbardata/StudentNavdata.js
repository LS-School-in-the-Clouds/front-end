import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as IconName from 'react-icons/im'


 const StudentNavData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaIcons.FaTasks/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Mentor',
        path: '/mentor',
        icon: <MdIcons.MdGroup/>,
        className: 'admin-nav-text',
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IconName.ImProfile/>,
        className: 'admin-nav-text',
    },
]

export default StudentNavData;