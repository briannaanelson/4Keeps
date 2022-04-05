import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"


 

export const NavBar = ({clearUser, isAuthenticated}) => {
    const history = useNavigate()
    
    const handleLogout = () => {
        clearUser();
        history('/');
    }


return (
    <div className="nav_all">
    <body>  
        <nav class="nav">  
                <div className="logo1">
                    <Link className="logo" to="/">
                    <img src={'/images/4keeps8.png'} alt="logo"></img>
                    </Link>
                </div>        
                <div className="nav__links">
                    <ul>
                   <li> <Link className="navbar_link" to="/">Home. </Link></li>

                   <li> <Link className="navbar_link" to="/memories"> Memories. </Link></li>

                   <li> <Link className="navbar_link" to="/children">Children. </Link></li>

                   <li> <Link className="navbar_link" to="/users">My Account. </Link></li>
                   
                   {isAuthenticated
                  ? <li>  <span className="navbar_link" onClick={handleLogout}>Logout. </span></li>
        
                   :<li> <Link className="navbar_link" to="/login">Login. </Link></li>}
                    </ul>
                </div>
            </nav>
    </body>
    </div>
    );
};


