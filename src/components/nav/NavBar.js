import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = ({clearUser, isAuthenticated}) => {
    const history = useNavigate()
    
    const handleLogout = () => {
        clearUser();
        history('/');
    }


return (
    <ul className="navbar">
        <li className="navbar_item">
        <Link className="navbar__link" to="/">Home</Link>    
    </li>

        
        <li className="navbar_item">
        <span className="navbar_link" onClick={handleLogout}>Logout</span>
    </li>
        <li className="navbar__item">
            <Link className="navbar__link" to="/login">Login</Link>
    </li>
        </ul>

    );
};