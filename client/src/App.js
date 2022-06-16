import { React, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {useEffect, useContext} from "react"
import Login from "./containers/login";
import User from "./containers/user";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";
import axios from "axios"
import Chat from "./containers/chat";
import axios from "axios";
import {socket, SocketContext} from "./hooks/useChatSocket"

function App() {
    var io = useContext(SocketContext)

    useEffect(() => {
      
    
      return () => {
        if (socket.connected) {
            io.disconnect();
        }
      }
    }, [])
    

    return (
        <>
            <ProvideAuth>
                <SocketContext.Provider value={socket}>
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
                </SocketContext.Provider>
            </ProvideAuth>
        </>
    );
}

export default App;
