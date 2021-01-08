import {
  RECEIVED_MENTORS,
  RECEIVED_MENTORS_FOR_STUDENT,
  ADDED_MY_MENTOR,
} from "../actions/MattyActions";

const initialState = {
  mentorList: [],
  myMentorsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_MENTORS:
      return {
        ...state,
        mentorList: action.payload,
      };
    case RECEIVED_MENTORS_FOR_STUDENT:
      return {
        ...state,
        myMentorsList: action.payload,
      };
    case ADDED_MY_MENTOR:
      return {
        state,
      };
    default:
      return state;
  }
};

export default reducer;