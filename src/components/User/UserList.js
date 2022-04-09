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
        <div className="container-cards" style={{ backgroundImage: `url(${'./images/background4.png'})`}}>
        <section className="section-content">
            <h1 className="title">My Account</h1>
                {users.map(user =>
                    <UserCard key={user.id} user={user} 
                    handleDeleteUser={handleDeleteUser} />)}
            
        </section>
        </div>
        </>
    );
};