//Action imports
import "../actions/AuthActions";
import { USER_LOGGED_IN, USER_SIGNED_UP } from "../actions/AuthActions";

const initialState = {
    user_id: "",
    username: "",
    email: "",
    password: "",
    role: "",
    token: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNED_UP:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            }
        case USER_LOGGED_IN:
            return {
                ...state,
                user_id: action.payload.user_id,
                role: action.payload.role,
            }
        default:
            return state;
    }
}

export default reducer