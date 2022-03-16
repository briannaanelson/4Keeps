import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./components/auth/Login.js";
import { Register } from "./components/auth/Register.js";
export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated}) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("4keeps__user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("4keeps__user") !== null)
    
    }

    return(
        <>
            <Routes>
                {/* Render the homepage when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

            
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </>

    )
}