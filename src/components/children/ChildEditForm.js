import { getConfig } from "@testing-library/react";
import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getChildById, updateChild } from "../../modules/ChildManager";

export const ChildEditForm = () => {
    const [child, setChild] = useState({name:"", birthday: "",})
    const [isLoading, setIsLoading] = useState(false);

    const {childId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = {...child};
        stateToChange [evt.target.id] = evt.target.value;
        setChild(stateToChange);
    };

    const updateExistingChild = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedChild = {
            id: childId,
            name: child.name,
            birthday: child.birthday
        };

        updateChild(editedChild)
            .then(() => navigate("/children")
            )
    }

    useEffect(() => {
        getChildById(childId)
        .then(child => {
            setChild(child);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type ="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={child.name}
                    />
                    <label htmlFor="name">Child Name:</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="birthday"
                    value={child.birthday}
                    />
                    <label htmlFor="birthday">Child's Birhtday:</label>
                </div>
                <div className="alignRight">
                    <button type="button" disbaled={isLoading}
                    onClick={updateExistingChild} className="btn btn-primarty">
                        Submit Changes
                    </button>
                </div>
            </fieldset>
        </form>
        
        </>
    );

}