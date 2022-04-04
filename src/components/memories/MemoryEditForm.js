import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMemoryById, updateMemory } from "../../modules/MemoryManager";

export const MemoryEditForm = () => {
    const [memory, setMemory] = useState({ title: "", memory: "" });
    const [isLoading, setIsLoading] = useState(false);

    const {memoryId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...memory };
        stateToChange[evt.target.id] = evt.target.value;
        setMemory(stateToChange);
    };

    const updateExistingMemory = evt => {
        evt.preventDefault()
        setIsLoading(true);

        //this is an edit, so the ID is needed
        const editedMemory = {
            id: memoryId,
            title: memory.title,
            memory: memory.memory
        };

        updateMemory(editedMemory)
            .then(() => navigate("/memories")
            )
    }

    useEffect(() => {
        getMemoryById(memoryId)
            .then(memory => {
                setMemory(memory);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="title">Memory Title</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title" 
                            value={memory.title}   
                        />
                        <label htmlFor="memory">Memory</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="memory"
                            value={memory.memory}
                        />
                    </div>
                    <div className="alignRight">
                        <button 
                        type="button" disabled={isLoading}
                        onClick={updateExistingMemory}
                        className="btn btn-primary"
                        >Update Memory</button>
                        </div>
                </fieldset>
            </form>
        </>
    );
}