import React, { useState, useContext } from "react";

export const AuthContext = React.createContext({
    Name: null,
    Email: null,
    loggedIn: false,
    setAuth: () => {},
});

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [Auth, setAuthobject] = useState(null);

    const loginAuth = (Name, Email) => {
        setAuth({
            Name: Name,
            Email: Email,
            loggedIn: true,
        });
    };

    const setAuth = (AuthObject) => {
        setAuth(AuthObject);
    };

    const logoutAuth = () => {
        setAuth({
            Name: null,
            Email: null,
            loggedIn: false,
        });
    };

    const contextValue = {
        Auth: Auth,
        loginAuth: loginAuth,
        logoutAuth: logoutAuth,
    };

    return (
        <>
            <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
        </>
    );
}
