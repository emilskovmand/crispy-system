import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import { AuthProvider } from "./hooks/useProvideAuth";
import Admin from "./containers/administration";
import Index from "./containers";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/admin" element={<Admin />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
