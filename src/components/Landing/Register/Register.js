//Functional Imports
import React, { useState } from "react";
import { connect } from "react-redux";

//Component Imports
import { signUpSubmit } from "../../../utils/redux/actions/AuthActions"
import { useHistory } from 'react-router-dom'
//Style Imports
import styled from 'styled-components'

    ////////// STYLING //////////
    const SignUpStyle = styled.div`
    
         
         width:40%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:0 auto;
        margin-top:30%;
        

              // BLACK BOX CSS

        width: 450px;
        height: 700px;
        left: 300px;
        top: 100px;
        background: #000000;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 40px;

        form {
            margin-top:20px;
            height:auto;
            width:70%;
            display:flex;
            flex-direction:column;
            align-self:center;
           

        }
        .submit {
            margin-top:30px;
            
            
        }
        input {
            border-radius: 20px;
            margin-top:10px;
        }
      button {
          border-radius: 100px;
          width:70%;
          height: 50px;
          display:flex;
          justify-content:center;
          align-self:center;
          align-items:center;
          margin-top:15px;
          
      }

      option {
          background-color:black;
      }
        
`

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
        const {name, value} = ev.target;
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