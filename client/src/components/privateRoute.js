import { useState, useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useProvideAuth"

import React from 'react'

export default function PrivateRoute({ permission = undefined, children }) {
    const user = useAuth();

    return (
        <>
            {user.Auth.loggedIn && <> 
                <Outlet />
            </>}
            {!user.Auth.loggedIn && <> 
                <Navigate to="/login" />
            </>}  
        </>
      )
}
