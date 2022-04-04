import React, {useState, useEffect } from "react";
import { getMemoryById } from "../../modules/MemoryManager";
import { useParams, useNavigate } from "react-router-dom";
import { deleteMemory } from "../../modules/MemoryManager";

export const MemoryDetail = () => {
    const [memory, setMemory] = useState({ title: "", memory: ""});
    const [isLoading, setIsLoading] = useState(true);

    const {memoryId} = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        setIsLoading(true);
        deleteMemory(memoryId).then(() =>
        navigate("/memories")
        );
    };

    useEffect(() => {
        console.log("useEffect", memoryId)
        getMemoryById(memoryId)
            .then(memory => {
                setMemory(memory);
                setIsLoading(false);
            });
    }, [memoryId]);

    return(
        <section className="memory">
            <h3 className="memory_title">{memory.title}</h3>
            <div className="memory_memory">{memory.memory}</div>    
            <div className="memory_child">Child:{memory.child?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Erase Memory
            </button>
        </section>
    );
}
