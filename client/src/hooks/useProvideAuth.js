import axios from "axios";
import React, { useState, useContext } from "react";

const authContext = React.createContext();

export const useAuth = () => {
    return useContext(authContext);
};

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return (
        <>
            <authContext.Provider value={auth}>{children}</authContext.Provider>
        </>
    );
}

export function useProvideAuth() {
    const [Auth, setAuthobject] = useState({
        Name: localStorage.getItem('Name'),
        Email: localStorage.getItem('Email'),
        loggedIn: false,
    });

    const loginAuth = (Name, Email) => {
        setAuth({
            Name: Name,
            Email: Email,
            loggedIn: true,
        });

        localStorage.removeItem('Name')
        localStorage.removeItem('Email')
        localStorage.removeItem('loggedIn')

        localStorage.setItem('Name', Name)
        localStorage.setItem('Email', Email)
        localStorage.setItem('loggedIn', true)
    };

    const setAuth = (AuthObject) => {
        setAuthobject(AuthObject);
    };

    const logoutAuth = () => {
        setAuth({
            Name: null,
            Email: null,
            loggedIn: false,
        });

        localStorage.removeItem('Name')
        localStorage.removeItem('Email')
        localStorage.removeItem('loggedIn')
        axios.get("/api/user/logout");
    };

    return {
        Auth,
        loginAuth,
        logoutAuth
    }
}
