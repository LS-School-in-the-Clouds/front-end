//Functional Imports
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'

//Component Imports
import { postSProfileData } from '../../../../utils/redux/actions/AppActions'
//Style Imports
import styled from 'styled-components';

const initialForm = {
    first_name: '',
    last_name: '',
    interests: '',
    state: '',
    country: '',
    career_goals: '',
    preferred_times: '',
    time_zones: '',
    img_url: '',
    user_id: '',
  }

export const SProfile = (props) => {
    
    const history = useHistory();
    const UID = props.user_id;
    const [form, setForm] = useState(initialForm)
    const onChange = (ev) => {
        setForm({...form,
        [ev.target.name]: ev.target.value
        })
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        props.postSProfileData(UID, form);
        setForm(initialForm);
        history.push('/dash');
        };
    
    return(
        <>
        <SignUpStyle>
            <Form onSubmit={onSubmit}>
                <h2>Hi <span>Student!</span> <br/> Let's get your profile updated</h2>
                <label>What is your first name?
                    <input
                        name="first_name"
                        type="text"
                        placeholder="First Name..."
                        onChange={onChange}
                        value={form.first_name}
                    />
                </label>
                <label> What is your last name? 
                    <input
                        name="last_name"
                        type="text"
                        placeholder="Last Name..."
                        onChange={onChange}
                        value={form.last_name}
                    />
                </label>
                <label> State
                    <input
                        name="state"
                        type="text"
                        placeholder="State..."
                        onChange={onChange}
                        value={form.state}
                    />
                </label>
                <label>Country
                    <input
                        name="country"
                        type="text"
                        placeholder="Country..."
                        onChange={onChange}
                        value={form.country}
                    />
                </label>
                <label>Preferred Times 
                    <input
                        name="preferred_times"
                        type="text"
                        placeholder="Preferred times..."
                        onChange={onChange}
                        value={form.preferred_times}
                />
                </label>
                <label>What are your interests?
                    <input
                        name="interests"
                        type="text"
                        placeholder="finance, politics, etc"
                        onChange={onChange}
                        value={form.interests}
                    />
                </label>
                <button>Submit</button>
            </Form>
        </SignUpStyle>
        </>
    )
}

const Form = styled.form`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputDiv = styled.div`
    justify-content: center;
    align-items: center;

`
const SignUpStyle = styled.div`
    width:40%;
    display:flex;
    flex-direction: column;
    justify-content: center;   
    // BLACK BOX CSS
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 450px;
    height: 90vh;
    background: #000000;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    form {
        margin-top: 20px;
        height: auto;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-self: center;
        
    }
    .submit {
        margin-top: 30px;
        
    }
    input {
        border-radius: 20px;
        margin-top: 10px;
    }
    button {
        border-radius: 100px;
        width: 70%;
        height: 50px;
        display:flex;
        justify-content:center;
        align-self: center;
        align-items: center;
        margin-top: 15px;
        
    }
    option {
        background-color: black;
    }
    span {
        color: #FFD089;
    }
`
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, { postSProfileData })(SProfile)