import React, { useEffect} from "react"
import { connect } from "react-redux"

import { getAllTaskData } from '../../../../utils/redux/actions/AppActions'

const SMentors = (props) => {
    useEffect(() => {
        getAllTaskData();
        console.log(props.tasks)
    })
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
        tasks: state.app.tasks
    }
}

export default connect(mapStateToProps, { getAllTaskData }) (SMentors)