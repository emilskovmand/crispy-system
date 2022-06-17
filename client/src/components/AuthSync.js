import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useProvideAuth'
import axios from "axios"

export default function AuthSync({children}) {
    const Authentication = useAuth()
    const [synced, setSynced] = useState(false);

    useEffect(() => {
        if (!synced) {
            var name = localStorage.getItem('Name')
            var email = localStorage.getItem('Email')

            axios.get("api/user/getUser").then(response => {
                if (response.data.name === name) {
                    Authentication.loginAuth(response.data.name, response.data.email)
                } else {
                    Authentication.logoutAuth();
                }
            })
        }

        return () => {

        }
    }, [])
  return (
    <>
        {children}
    </>
  )
}
