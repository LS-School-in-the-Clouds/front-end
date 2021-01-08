import React, { useState, useContext, useEffect } from "react";
import axiosWithAuth from "./../../../../utils/hooks/axiosWithAuth";
import { connect } from "react-redux"

import { getAllTaskData } from '../../../../utils/redux/actions/AppActions'



const MTasks = (props) => {

  useEffect(() => {
    getAllTaskData()
  }, [])

  return(
    <div>
      {tasks.map((task) => {
        <h3>task.description</h3>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user_id: state.user_id
  }
}

export default connect(mapStateToProps, { getAllTaskData }) (MTasks)