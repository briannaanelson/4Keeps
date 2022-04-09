import React from "react";
import { Link } from "react-router-dom";
import "./User.css"

export const UserCard = ({user, handleDeleteUser}) => {
    return (
        <div className="user-card">
             <img src={'./images/account1.png'} className="Elephant"></img>
            <div className="usercard-content">
                <h3><span className="user_name">
                    {user.name}
                </span></h3>
                <p>Email: 
                    {user.email}
                </p>
                <p>Address: 
                {user.address}
               </p>
               <Link to={`/users/${user.id}/edit`}>
                   <button> Edit Information </button>
               </Link>
               
            </div>
        </div>
    )
}