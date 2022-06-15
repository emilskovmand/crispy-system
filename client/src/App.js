import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import User from "./containers/user";
import { ProvideAuth } from "./hooks/useProvideAuth";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";
import axios from "axios";

function App() {

    // change the base url of axios to our api
    // axios.defaults.baseURL = process.env.REACT_APP_SERVER_API_URL
    
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
                        </Routes>
                    </div>
                </Router>
            </ProvideAuth>
        </>
    );
}

export default App;
