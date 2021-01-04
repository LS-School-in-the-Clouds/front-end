import React from "react";

const LoginForm = () => {


    const handleChange = () => {

    }

    return(
        <>
        <h1>Login</h1>
        <form>
            <label htmlFor="foo">
                Name:
                <input type="text" name="foo" value={handleChange}></input>
            </label>
            <label htmlFor="bar">
                Password:
                <input type="text" name="bar"></input>
            </label>
            <button>Submit</button>
        </form>
        </>
    );
}

export default LoginForm;