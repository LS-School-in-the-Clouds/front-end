import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as IconName from 'react-icons/im'



 const StudentNavData = [
    {
        title: 'Home',
        path: '/dash',
        icon: <AiIcons.AiFillHome/>,
        className: 'student-nav-text',
    },
    {
        title: 'Mentors',
        path: '/dash/mentors',
        icon: <MdIcons.MdGroup/>,
        className: 'student-nav-text',
    },
    {
        title: 'Profile',
        path: '/dash/profile',
        icon: <IconName.ImProfile/>,
        className: 'student-nav-text',
    },
]

export default StudentNavData;