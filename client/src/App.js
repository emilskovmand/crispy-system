import { React, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import User from "./containers/user";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";
import axios from "axios"
import Chat from "./containers/chat";
import { useProvideAuth} from './hooks/useProvideAuth'

function App() {
    const [authChecked, setAuthChecked] = useState(false);
    const Auth = useProvideAuth()

    useEffect(() => {
        if (!authChecked) {
            setAuthChecked(true)
            const name = localStorage.getItem('Name')
            const email = localStorage.getItem('Email')
    
            axios.get('/api/user/getUser').then((response) => {
                if (response.status === 200) {
                    if (name === response.data.name) {
                        Auth.loginAuth(name, email)
                    } else {
                        axios.get('/api/user/logout')
                    }
                } else {
                    console.log("Jeg loggede ud")
                    Auth.logoutAuth()
                }
            })
        }

        return () => {
        }
    }, [Auth])

    return (
        <>
            <Router>
                <div>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/admin" element={<Admin />} />
                        <Route exact path="/user" element={<User />} />
                        <Route exact path="/chat" element={<Chat />} />
                    </Routes>
                </div>
            </Router>
    
        </>
    );
}

export default App;
