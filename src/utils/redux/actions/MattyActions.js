import axiosWithAuth from "../../hooks/axiosWithAuth";

import API_BASE from "../../keys";

export const RECEIVED_MENTORS = "RECEIVED_MENTORS";
export const RECEIVED_MENTORS_FOR_STUDENT = "RECEIVED_MENTORS_FOR_STUDENT";
export const ADDED_MY_MENTOR = "ADDED_MY_MENTOR";

// to get a list of all mentors so i can check them out run this shit

export const getMentorsList = (dispatch) => {
  return axiosWithAuth()
    .get(`${API_BASE}/mentors`)
    .then((res) => {
      dispatch({ type: RECEIVED_MENTORS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// if i want to get my mentors to print them out, run this shit

export const getMentorsForStudent = (id) => (dispatch) => {
  return axiosWithAuth()
    .get(`${API_BASE}/mentor_to_student/:${id}`)
    .then((res) => {
      dispatch({ type: RECEIVED_MENTORS_FOR_STUDENT, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// if I click on a mentor, to add the mentor, i should run this

export const addMyMentor = (my_id, mentor_id) => {
  return axiosWithAuth()
    .post(`${API_BASE}/mentor-student`, {
      mentor_id: mentor_id,
      student_id: my_id,
    })
    .then((res) => {
      dispatch({ type: ADDED_MY_MENTOR, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
