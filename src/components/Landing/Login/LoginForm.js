import React, { useState, useEffect } from "react";
import axios from 'axios'

//import {BASE_URL} from '../src/constants'

const initialFormValues = {
    ///// TEXT INPUTS /////
    email: '',
    password: '',
  }


export default function LoginForm(props) {

    const [users, setUsers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)

    const updateForm = (inputName, inputValue) => {
   
        setFormValues({...formValues, [inputName]: inputValue })

    }

    const onChange = (evt) => {
        const { name, value}  = evt.target
        updateForm(name, value)
    }

    
    const onSubmit = (evt) => {
        evt.preventDefault();
        
        const User = {
            email: formValues.email.trim(),
            password: formValues.password, 
        }
      
          //prevent further action if either email is empty string after trimming
      
          if ( !User.email ) {
            return;
          }
      
          axios.post('https://school-in-the-clouds.herokuapp.com/', User)
            .then(res => {
              setUsers([...users, res.data])
              // on success clear the form
              setFormValues(initialFormValues);
          })
          .catch(err => {
            debugger;
            // backend should reject if email / password combo does not exist
          })

        };

    return(
        <>
        <h1>Login</h1>

        <form className='form container' /*onSubmit={onSubmit}*/ >
            <div className='form-group inputs'>
                <label htmlFor="foo">
                    Username:
                    <input 
                        type='text'
                        name='username'
                        onChange={onChange}
                        value={formValues.username}
                        placeholder='enter your username'
                        maxLength='30' // check database for max length>
                    />
                </label>

                <label htmlFor="bar">
                    Password:
                    <input 
                        type='text'
                        name='password'
                        onChange={onChange}
                        value={formValues.password}
                        placeholder='enter your password'
                        maxLength='30' // real world: check database for max length>
                    />
                </label>

                <div className='submit'>
                    <button disabled={!formValues.username || !formValues.password}>submit</button>
                </div>
            </div>  
        </form>
        </>
    );
}