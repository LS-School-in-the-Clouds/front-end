//Functional Imports
import React, { useState } from "react";
import { connect } from "react-redux";

//Component Imports
import { signUpSubmit } from "../../../utils/redux/actions/AuthActions"
import { useHistory } from 'react-router-dom'
//Style Imports
import styled from 'styled-components'

    ////////// STYLING //////////
import { SignUpStyle } from '../../../style/StyledComponents/index' 

const initialState = {
    username: "",
    email: "",
    password: "",
    role: ""
}

const Register = (props) => {
    const history = useHistory()
    const [form, setForm] = useState( initialState )
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        props.signUpSubmit(form)
        history.push('/login')
    };

    const handleChange = (ev) => {
        setForm({
            ...form,
            [ev.target.name]: ev.target.value
        })
        console.log(form)
    };



    return (
        <SignUpStyle>
            <form className="form container" onSubmit={handleSubmit}>
                <div className="form-group inputs"></div>
                    <h2>Join School in the Cloud</h2>
                <div className="container">
                    <label>UserName
                        <input
                            name='username'
                            type='text'
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username..."
                     />
                    </label>
                </div>
                <div className="container">
                <label>Email
                    <input
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email..."
                    />
                </label>
                </div>
                <div className="container">
                    <label>Password
                        <input
                            name="password"
                            type='password'
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password..."
                        />
                    </label>
                </div>
                <div className="container loginRole">
                    <label>Role
                        <select name='role' value={form.role} onChange={handleChange}>
                            <option value="">Select your role</option>
                            <option name="role" value='3'>Student</option>
                            <option name="role" value='2'>Mentor</option>
                            <option name="role" value='1'>Admin</option>     
                        </select>
                    </label>
                </div>
                <button id="submit" className='button primary'>Sign Up!</button>
            </form>
        </SignUpStyle>
    )
}

    const mapStateToProps = (state) => {
        return state;
    };

export default connect(mapStateToProps, { signUpSubmit })(Register)