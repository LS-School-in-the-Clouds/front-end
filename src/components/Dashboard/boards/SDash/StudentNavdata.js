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
        className: 'student-nav-text',
    },
    {
        title: 'Mentors',
        path: '/mentors',
        icon: <MdIcons.MdGroup/>,
        className: 'student-nav-text',
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IconName.ImProfile/>,
        className: 'student-nav-text',
    },
]

export default StudentNavData;