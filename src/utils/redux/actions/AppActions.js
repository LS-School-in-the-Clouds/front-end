//Hooks
import axiosWithAuth from "../../hooks/axiosWithAuth";

//Functional Imports
import API_BASE from "../../keys";
export const RECEIVED_ADMIN = "RECEIVED_ADMIN";
export const RECEIVED_MENTOR = "RECIEVED_MENTOR";
export const RECEIVED_STUDENT = "RECEIVED_STUDENT";
export const RECEIVED_ALL_MENTORS = "RECEIVED_ALL_MENTORS";

//Style Imports

export const getAdminData = id => dispatch => {
    return(
        axiosWithAuth()
        .get(`${API_BASE}/admin/:${id}`)
        .then(res => {
            dispatch({ type: RECEIVED_ADMIN, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    );
}

export const getMentorData = id => dispatch => {
    return(
        axiosWithAuth()
        .get(`${API_BASE}/mentor/:${id}`)
        .then(res => {
            dispatch({ type: RECEIVED_MENTOR, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    );
}

export const getStudentData = id => dispatch => {
    return(
        axiosWithAuth()
        .get(`${API_BASE}/student/:${id}`)
        .then(res => {
            dispatch({ type: RECEIVED_STUDENT, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    );
}

export const getAllMentorData = () => dispatch => {
    return (
        axiosWithAuth()
        .get(`${API_BASE}/mentors`)
        .then(res => {
            dispatch({ type: RECEIVED_ALL_MENTORS, payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    );
}

export const putProfileData = (id, form) => dispatch => {
    return(
        axiosWithAuth()
        .put(`${API_BASE}/students/:${id}`, form)
    )
}