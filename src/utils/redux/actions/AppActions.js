//Hooks
import axiosWithAuth from "../../hooks/axiosWithAuth";

//Functional Imports
import API_BASE from "../../keys";
export const RECEIVED_ADMIN = "RECEIVED_ADMIN";
export const RECEIVED_MENTOR = "RECIEVED_MENTOR";
export const RECEIVED_STUDENT = "RECEIVED_STUDENT";
export const RECEIVED_ALL_MENTORS = "RECEIVED_ALL_MENTORS";
export const UPDATE_STUDENT_PROFILE = "UPDATE_STUDENT_PROFILE";

//Style Imports

export const getAdminData = id => dispatch => {
    axiosWithAuth()
    .get(`${API_BASE}/admins/${id}`)
    .then(res => {
        dispatch({ type: RECEIVED_ADMIN, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getMentorData = id => dispatch => {
    axiosWithAuth()
    .get(`${API_BASE}/mentors/${id}`)
    .then(res => {
        dispatch({ type: RECEIVED_MENTOR, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getStudentData = id => dispatch => {
    axiosWithAuth()
    .get(`${API_BASE}/students/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: RECEIVED_STUDENT, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getAllMentorData = () => dispatch => {
    axiosWithAuth()
    .get(`${API_BASE}/mentors`)
    .then(res => {
        dispatch({ type: RECEIVED_ALL_MENTORS, payload: res.data })
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const postSProfileData = (id, form) => dispatch => {
    axiosWithAuth()
    console.log(id)
    .post(`${API_BASE}/students/${id}`, form)
    .then(res => {
        dispatch({ type: UPDATE_STUDENT_PROFILE, payload: res.data });
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}