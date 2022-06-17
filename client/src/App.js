import { React, useEffect, useState, useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import User from "./containers/user";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";
import Chat from "./containers/chat";
import Signup from "./containers/signup"
import {socket, SocketContext} from "./hooks/useChatSocket"
import { ProvideAuth } from "./hooks/useProvideAuth";
import AuthSync from "./components/AuthSync";
import PrivateRoute from "./components/privateRoute";

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
                            <AuthSync>
                                <div>
                                    <NavBar />
                                    <Routes>
                                        <Route exact path="/" element={<PrivateRoute />} > 
                                            <Route exact path="/" element={<Index />} />
                                        </Route>
                                        <Route exact path="/login" element={<Login />} />
                                        <Route exact path="/admin" element={<PrivateRoute />} >
                                            <Route exact path="/admin" element={<Admin />} />
                                        </Route>
                                        <Route exact path="/user" element={<PrivateRoute />} >
                                            <Route exact path="/user" element={<User />} />
                                        </Route>
                                        <Route exact path="/chat" element={<Chat />} />
                                        <Route exact path="/signup" element={<Signup />} />
                                    </Routes>
                                </div>
                            </AuthSync>
                        </Router>
                </SocketContext.Provider>
            </ProvideAuth>
        </>
    );
}

export default App;
