import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({user, handleDeleteUser}) => {
    return (
        <div className="card">
            <div className="card-content">
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