import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addMemory } from "../../modules/MemoryManager";
import { getAllChildren } from "../../modules/ChildManager";

export const MemoryForm = () => {
    //Define the initial state of the form inputs with useState

    const [memory, setMemory] = useState({
        title: "",
        memory: "",
        childId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const [children, setChildren] = useState([]);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        //create a copy, make changes, and then set state.
        const newMemory = {...memory}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")){
            selectedVal = parseInt(selectedVal)
        }
        newMemory[event.target.id] = selectedVal

        //update State
        setMemory(newMemory)
    }

    useEffect(() => {
        getAllChildren().then(setChildren)
    }, []);

    const handleClickSaveMemory = (event) => {
        event.preventDefault() //prevent browser from submitting the form

        const childId = memory.childId

        if (childId === 0) {
            window.alert("Please select a child!")
        } else {
            addMemory(memory)
                .then(() => navigate("/memories"))
        }
    }

    return (
        <form className="memoryForm">
            <h2 className="memoryForm_title">New Memory</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Memory Title:</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form_control" placeholder="Memory Title"  value={memory.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="memory">Memory:</label>
                    <input type="text" id="memory" onChange={handleControlledInputChange} required autoFocus className="form_control" placeholder="Write all you can about this specific memory!" value={memory.memory} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="child">Assign to Child:</label>
                    <select value={memory.childId} name="childId" id="childId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0"> Select a child</option>
                        {children.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveMemory}>
                Save Memory
            </button>
            </form>

    )

}