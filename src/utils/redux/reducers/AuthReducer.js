//Action imports
import "../actions/AuthActions";
import { SIGN_UP_COMPLETE } from "../actions/AuthActions";

const initialState = {
    username: "",
    email: "",
    password: "",
    role: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_COMPLETE:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            }
        default:
            return state;
    }
}

export default reducer