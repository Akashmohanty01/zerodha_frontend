import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Menu from "./landing_page/components/Menu";
import Login from "./landing_page/signup/Login";
import Dashboard from "./landing_page/components/Dashboard";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsAuthenticated(!!user);
    }, []);

    return (
        <Router>
            {isAuthenticated ? <Menu /> : <Navbar />}
            <Routes>
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}
