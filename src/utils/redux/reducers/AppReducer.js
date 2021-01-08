//Action imports
import { RECEIVED_STUDENT, RECEIVED_MENTOR, RECEIVED_ADMIN } from '../actions/AppActions'

const initialState = {
    school_district: "",
    school_name: "",
    user_id: "",
    first_name: "",
    last_name: "",
    interests: "",
    state: "",
    country: "",
    career: "",
    career_goals: "",
    preferred_times: "",
    time_zone: "",
    img_url: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVED_ADMIN:
            return{
                ...state,
                school_district: action.payload.school_district,
                school_name: action.payload.school_name,
                state: action.payload.state,
                country: action.payload.country,
                img_url: action.payload.img_url,
                user_id: action.payload.user_id,
            }
        case RECEIVED_MENTOR:
            return{
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                interests: action.payload.interests,
                state: action.payload.state,
                country: action.payload.country,
                career: action.payload.career,
                preferred_times: action.payload.preferred_times,
                time_zone: action.payload.time_zone,
                img_url: action.payload.img_url,
                user_id: action.payload.user_id,
            }
        case RECEIVED_STUDENT:
            return{
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                interests: action.payload.interests,
                state: action.payload.state,
                country: action.payload.country,
                career_goals: action.payload.career,
                preferred_times: action.payload.preferred_times,
                time_zone: action.payload.time_zone,
                img_url: action.payload.img_url,
                user_id: action.payload.user_id,
            }
        default:
            return state;
    }
}