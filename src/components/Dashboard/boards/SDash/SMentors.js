
import React from "react"

import { useHistory, useParams} from 'react-router-dom';

import styled from 'styled-components'
import StudentNavBar from './StudentNavbar';

// for use when props are passed through

// export default function MentorList(props) {
//     return (
//       <div className="mentor-list"> 
//         {props.mentor.map(mentor => (
//           <SMentors key={mentor.index} mentor={mentor} />
//         ))}
//       </div>
//     );
//   }

const StyledMentor = styled.div`
  
  color: black;
  font-weight: bold;
  width: 100%;
  //margin-left: 5%;
  
  //display: flex;
  /* justify-content: space-between; */
  border-color: black;
  border: 5px solid black;
  box-sizing: border-box

  form {
      color:white;
      margin: auto;
      width: 100%;
      background-color:black;
      display:flex;
      justify-content:space-around;
      //border-radius: 10px;
      
  }

  input {
      margin: auto;
      //border-radius:10px;
  }

  h1 {
      margin: 5%;
      font-size:24px;
  }

  .mentor-card {
      background-color: #FFD089;
      padding:2%;
      border-radius:14px;
      margin:5%;
      //width: 80%;
  }

   .mentor-card button {
    background-color: #C4C4C4;
    margin:auto;
    display:flex;
    justify-content:center;
    &:hover {
      transform: scale(1.2); // cheap for performance
      transition: all 0.3s ease-in-out; // added
    }
    transition: all 0.3s ease-in-out;
  }
  /* &:hover { // & represents the div
    color: crimson;
    background-color: cyan;
    transition: all 0.4s ease-in-out;
  } */
  /* transition: all 0.4s ease-in-out; */

  @media (max-width: 550px) {
    width:100%;
  }
` 



const SMentors = (props) => {

    //const { index } = props.mentor;

    //const history = useHistory();

    return(

        // ADD NAV BAR

        <StyledMentor>

            <div>

            <form>
                <h1>Browse Mentors</h1>
                <input type="text" placeholder="Search..."></input> 
            </form>

            <br />

            {/* onClick={() => history.push(`/dash/mentors/${index}`*/}
            <div className="mentor-card">
                <div className="mentor-name">
                Name: <em>NAME</em>
                </div>

                <div className="mentor-title">
                JOB TITLE <em>MENTOR JOB TITLE</em>
                </div>

                <div className="mentor-timezone">
                TIMEZONE <em>MENTOR TIMEZONE</em>
                </div>

                <div className="mentor-city">
                CITY <em>MENTOR CITY</em>
                </div>

                <button> Add Mentor</button>
            </div>

            

            <div className="mentor-card">
                <div className="mentor-name">
                Name: <em>NAME</em>
                </div>

                <div className="mentor-title">
                JOB TITLE <em>MENTOR JOB TITLE</em>
                </div>

                <div className="mentor-timezone">
                TIMEZONE <em>MENTOR TIMEZONE</em>
                </div>

                <div className="mentor-city">
                CITY <em>MENTOR CITY</em>
                </div>

                <button> Add Mentor</button>

            </div>
         </div>

        </StyledMentor>
    )
}

const mapStateToProps = (state) => {
    return{
        tasks: state.app.tasks
    }
}

export default connect(mapStateToProps, { getAllTaskData }) (SMentors)