import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import User from "./containers/user";
import { AuthProvider } from "./hooks/useProvideAuth";
import Admin from "./containers/administration";
import Index from "./containers";
import NavBar from "./containers/navBar";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/admin" element={<Admin />} />
                        <Route exact path="/user" element={<User />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
