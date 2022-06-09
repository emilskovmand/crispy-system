import React, { useState, useContext } from "react";

export const UserContext = React.createContext({
    Name: null,
    Email: null,
    loggedIn: false,
    setUser: () => {},
});

export const useUserContext = () => {
    return useContext(UserContext);
};

export function UserProvider({ children }) {
    const [user, setUserobject] = useState(null);

    const loginUser = (Name, Email) => {
        setUser({
            Name: Name,
            Email: Email,
            loggedIn: true,
        });
    };

    const setUser = (userObject) => {
        setUser(userObject);
    };

    const logoutUser = () => {
        setUser({
            Name: null,
            Email: null,
            loggedIn: false,
        });
    };

    const contextValue = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
    };

    return (
        <>
            <UserContext.Provider value={contextValue}>
                {children}
            </UserContext.Provider>
        </>
    );
}
