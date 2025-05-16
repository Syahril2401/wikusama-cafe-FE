import React from "react";

const middleware = ({children}) => {
    if(!localStorage.getItem('token')){
        return window.location.href = '/login'
    }
    return children
}

export default middleware