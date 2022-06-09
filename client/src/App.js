import { Routes, Route } from "react-router-dom";
import Login from "./containers/login";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="admin" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
