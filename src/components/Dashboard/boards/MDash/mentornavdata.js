import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as IconName from 'react-icons/im'


 const MentorNavData = [
    {
        title: 'Home',
        path: '/dash',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text',
    },
    {
        title: 'Tasks',
        path: '/dash/tasks',
        icon: <FaIcons.FaTasks/>,
        className: 'nav-text',
    },
    {
        title: 'Group',
        path: '/dash/group',
        icon: <MdIcons.MdGroup/>,
        className: 'nav-text',
    },
    {
        title: 'Profile',
        path: '/dash/profile',
        icon: <IconName.ImProfile/>,
        className: 'nav-text',
    },
]

export default MentorNavData;