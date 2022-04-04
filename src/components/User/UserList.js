import React, { useState, useEffect}  from "react";
import { UserCard } from "./UserCard";
import { deleteUser, getAllUsers, getUserById } from "../../modules/UserManager";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = () => {
        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        });
    };

    const handleDeleteUser = id => {
        deleteUser(id)
        .then(() => getAllUsers().then(setUsers));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <>
        <section className="section-content">
            <h3 className="title">My Account</h3>
            
            <div className="container-cards">
                {users.map(user =>
                    <UserCard key={user.id} user={user} 
                    handleDeleteUser={handleDeleteUser} />)}
            </div>
        </section>
        </>
    );
};