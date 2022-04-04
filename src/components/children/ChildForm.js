import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addChild } from "../../modules/ChildManager";

export const ChildForm = () => {
    const [child, setChild]= useState({
        name:"",
        birthday:""
    });

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {

        const newChild = {...child}
        let selectedVal = event.target.value

        newChild[event.target.id] = selectedVal

        setChild(newChild)
    }
    const handleClickSaveChild = (event) => {
        event.preventDefault()

        const childName = child.name
        const childBirthday = child.birthday

        if(childName === "" || childBirthday ===""){
            window.alert("Please enter your child's name AND birthday.")
        }else{
            addChild(child)
                .then(() => navigate("/children"))
        }
    }

    return(
        <form className="childForm">
            <h2 className="childForm_title">New Child</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Child Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Child Name"
                    value= {child.name} />  
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="birthday"> Child's Birthday:</label>
                    <input type="date" id="birthday" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Child's Birhtday"
                    value={child.birthday} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleClickSaveChild}>
                    Add Child
                </button>
        </form>
    )
};