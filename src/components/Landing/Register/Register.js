//Functional Imports
import React, { useState } from "react";
import { connect } from "react-redux";

//Component Imports
import { signUpSubmit } from "../../../utils/redux/actions/AuthActions"

//Style Imports

const initialState = {
    username: "",
    email: "",
    password: "",
    role: ""
}

const Register = (props) => {

    const [form, setForm] = useState({ initialState })
    const handleSubmit = (ev) =>{
        ev.PreventDefault();
        // submit();
        signUpSubmit(form)
    };

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setForm({
            ...form,
            [ev.target.name]: ev.target.value
        })
        // change(name);
    };


    return (
        <div>
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
                <div className="container">
                    <label>Role
                        <select name='role' value={form.role} onChange={handleChange}>
                            <option value="">Select your role</option>
                            <option name="role" value='student'>Student</option>
                            <option name="role" value='mentor'>Mentor</option>
                            <option name="role" value='admin'>Admin</option>     
                        </select>
                    </label>
                </div>
                <button id="submit">Sign Up!</button>
            </form>
        </div>
    )
}

    const mapStateToProps = (state) => {
        return state;
    };

export default connect(mapStateToProps, {signUpSubmit})(Register)