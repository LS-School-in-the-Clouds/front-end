//Hooks
import axiosWithAuth from "../../hooks/axiosWithAuth"

//Functional Imports
import axios from "axios";

//ACTION VARIABLES
export const USER_SIGNED_UP = "USER_SIGNED_UP";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const signUpSubmit = form => dispatch => {
    return(
        axiosWithAuth()
        .post("/register", form)
        .then(res => {
            dispatch({ type: USER_SIGNED_UP, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    )
}

export const logInSubmit = form => dispatch => {
    return(
        axiosWithAuth()
        .post('/Login', form)
        .then(res => {
            dispatch({ type: USER_LOGGED_IN, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    )
}
