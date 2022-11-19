import React from 'react'
import { Route, Navigate } from 'react-router-dom'

function Privateroute({component: Component, ...rest}) {
    const token = localStorage.getItem("token")
    if(token){
        return <Route {...rest} component={Component} />
    }else{
        return <Navigate to="/signin" />
    }
}

export default Privateroute
