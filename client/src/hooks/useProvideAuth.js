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
        Name: null,
        Email: null,
        loggedIn: false,
    });

    const loginAuth = (Name, Email) => {
        setAuth({
            Name: Name,
            Email: Email,
            loggedIn: true,
        });

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
    };

    return {
        Auth,
        loginAuth,
        logoutAuth
    }
}
