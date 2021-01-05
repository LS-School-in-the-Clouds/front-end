import React from "react";

const Register = (props) => {
    
    const onSubmit = (event) =>{
        event.PreventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name,value,type,checked} = event.target;
        change(name);
    };

    return (
        <div>
            <form className="form container" onSubmit={onSubmit}>
                <div className="form-group inputs"></div>
                    <h2>Join School in the Cloud</h2>
                <div className="container ">
                    <label>UserName
                        <input
                            name='username'
                            type='text'
                            value='change this'
                            onChange={onChange}
                     />
                    </label>
                </div>
                <div className="container">
                <label>Email
                    <input
                        name='email'
                        type='email'
                        value='change This'
                        onChange={onChange}
                    />
                </label>
                </div>
                <div className="container">
                    <label>Password
                        <input
                            name="password"
                            type='password'
                            value='change'
                        />
                    </label>
                </div>
                <div className="container">
                    <label>Role
                        <select name='role' value="change this" onChange={onChange}>
                            <option value="">Select your role</option>
                            <option value='student'>Student</option>
                            <option value='mentor'>Mentor</option>
                            <option value='admin'>Admin</option>     
                        </select>
                    </label>
                </div>
                <button id="submit" disabled={disabled}>Sign Up!</button>
            </form>
        </div>
    )
}

export default Register;