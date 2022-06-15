import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import User from "./containers/user";
import { ProvideAuth } from "./hooks/useProvideAuth";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";
import Chat from "./containers/chat";
import axios from "axios";

function App() {
    
    return (
        <>
            <ProvideAuth>
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
            </ProvideAuth>
        </>
    );
}

export default App;
