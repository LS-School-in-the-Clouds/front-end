

//functionial imports
import React, { useState } from "react";
import { connect } from "react-redux";
import { logInSubmit } from "../../../utils/redux/actions/AuthActions"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

////// STYLING ////////
const MainContainer = styled.div`
width:40%;
display:flex;
flex-direction:column;
justify-content:center;
margin:0 auto;
margin-top:30%;
font-size:1.1rem;


// BLACK BOX CSS

width: 400px;
height: 500px;
left: 300px;
top: 100px;
background: #000000;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
border-radius: 40px;


form {
    margin-top:20px;
    height:auto;
    display:flex;
    justify-content:center;
    
}
.submit {
    margin-top:30px;
    text-align:center;
    
}
input {
    border-radius: 20px;
    margin-top:10px;
}
button {
  border-radius: 100px;
  width:90%;
  height: 50px;
}



`
const initialForm = {
    username: '',
    password: '',
  }


function Login(props) {

    const [form, setForm] = useState(initialForm);
    const history = useHistory();
    const onChange = (ev) => {
        setForm({...form,
        [ev.target.name]: ev.target.value
        })
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        props.logInSubmit(form)
        setForm(initialForm)
        history.push('/dash')
        };


  




    return(
    <MainContainer className='LoginForm'>
        <h1>Login</h1>
        <form className='login' onSubmit={onSubmit} >
            <div className='form-group inputs'>
                <label htmlFor="foo">
                    Username:
                    <input 
                        type='text'
                        name='username'
                        onChange={onChange}
                        value={form.username}
                        placeholder='enter your username'
                        maxLength='30' // check database for max length>
                    />
                </label>

                <label htmlFor="bar">
                    Password:
                    <input 
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={form.password}
                        placeholder='enter your password'
                        maxLength='30' // real world: check database for max length>
                    />
                </label>

                <div className='submit'>
                    <button className='button primary' disabled={!form.username || !form.password}>submit</button>
                </div>
            </div>  
        </form>
    </MainContainer>
    );
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { logInSubmit }) (Login)

