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
    };

    return {
        Auth,
        loginAuth,
        logoutAuth
    }
}
