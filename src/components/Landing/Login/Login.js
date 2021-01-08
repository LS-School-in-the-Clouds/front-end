

//functionial imports
import React, { useState } from "react";
import { connect } from "react-redux";
import { logInSubmit } from "../../../utils/redux/actions/AuthActions"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

////// STYLING ////////
import { MainContainer } from '../../../style/StyledComponents'

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

