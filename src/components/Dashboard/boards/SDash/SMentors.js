import React, { useEffect } from "react"
import { connect } from "react-redux"

import { getAllMentorData } from '../../../../utils/redux/actions/AppActions'

const SMentors = (props) => {
    console.log(props.mentors)
    useEffect(() => {
        getAllMentorData()
    }, [])
    return(
        <>
        <form>
            <h1>Search Functionality!</h1>
            <input type="text" placeholder="Search..."></input>
        </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        mentors: state.app.mentors
    }
}

export default connect(mapStateToProps, { getAllMentorData }) (SMentors)