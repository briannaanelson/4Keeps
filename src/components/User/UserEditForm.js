import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../modules/UserManager";

export const UserEditForm = () => {
    const [user, setUser] = useState({name:"", address:"", email: ""})
    const [isLoading, setIsLoading] = useState(false);

    const {userId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = {...user};
        stateToChange [evt.target.id] = evt.target.value;
        setUser(stateToChange);
    };

    const updateExistingUser = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedUser = {
            id: userId,
            name: user.name,
            address: user.address,
            email: user.email
        };
        updateUser(editedUser)
        .then(() => navigate("/users"))
    }

    useEffect(() => {
        getUserById(userId)
        .then(user => {
            setUser(user);
            setIsLoading(false);
        });
    }, []);

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                <label htmlFor="name">Name </label>

                    <input type="text" required className="form-control"
                    onChange={handleFieldChange} id="name" value={user.name} />
                    
                    <label htmlFor="address">Address:</label>
                     <input type="text" required className="form-control"
                     onChange={handleFieldChange} id="address" value={user.address} />
                    
                    <label htmlFor="email">Email:</label>
                     <input type="text" required className="form-control"
                     onChange={handleFieldChange} id="email" value={user.email} />
                    
                </div>

                <div className="alignRight"> 
                <button type="button" disabled={isLoading}
                onClick={updateExistingUser} className="btn btn-primary">Update</button>
                </div>
            </fieldset>
        </form>        
        </>
    )


}