import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(<Route
        {...rest}
        render={(props) => {
            if(localStorage.getItem("token")) {
                console.log("magic")
                return(<Component {...props}/>);
            } else {
                console.log("dog")
                return <Redirect to="/"/>;   
            }
        }}
    />)
}

export default PrivateRoute;