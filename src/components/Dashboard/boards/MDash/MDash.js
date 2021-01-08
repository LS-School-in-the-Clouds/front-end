//Functional imports
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Route } from "react-router-dom";

//Component imports
import { getMentorData } from '../../../../utils/redux/actions/AppActions'
import MentorNav from './MentorNav';
import MTasks from './MTasks';
import MGroup from './MGroup';
import MProfile from './MProfile';

//styled import 
import styled from 'styled-components'


export const MDash = ({ user_id }) => {
    const UID = user_id
    useEffect(() => {
        getMentorData(UID)
    }, [])
    return(
        <>
        <MentorNav/>
        <Route path={'/dash/tasks'}>
            <MTasks />
        </Route>
        <Route path={'/dash/group'}>
            <MGroup />
        </Route>
        <Route path={'/dash/profile'}>
            <MProfile />
        </Route>
        
        <MainContainer>
            <section>
                <h1>Tasks</h1>
                <input type='text' placeholder="Search..."/> 
            </section>
            <div>
                <StyleP>Have students thinkg about interests</StyleP>
                <p>01/23/21</p>
                <h6>Assigned by: John</h6>
            <div>

            </div>
            </div>
                       
        </MainContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        first_name: state.first_name,
        last_name: state.last_name,
        interests: state.interests,
        state: state.state,
        country: state.country,
        career: state.career,
        preferred_times: state.preferred_times,
        time_zone: state.time_zone,
        img_url: state.img_url,
        user_id: state.user_id,
    }
}

export default connect(mapStateToProps, { getMentorData })(MDash)


const StyleP = styled.p`
    font-size: 22px;
    color: black;
`

const MainContainer = styled.div`
    border: 2px solid #E3C8FD;
    border-radius: 20px;
    width: 50%;
    margin: 10px 0 0 20%;
    height: 100vh;
    background-color: black;
    

section{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}


h1{
    margin-left: 50px;
    margin-top: 30px;
}

h5{
    color: black;

}
h6{
    width: 51%;
}

input[type='text']{
    border-radius: 25px;
    width: 500px;
    margin-top: 13px;
    color: black;
}

div{
    background-color: #E3C8FD;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    width: 95%;
    margin: 20px auto 0 auto;
    padding: 10px 0 10px 0;
    border-radius: 15px;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 51%;
    
}
`