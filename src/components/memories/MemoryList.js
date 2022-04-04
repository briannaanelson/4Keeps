import React, { useState, useEffect } from "react";
import { MemoryCard } from "./MemoryCard";
import { getAllMemories, getMemoryById, deleteMemory, getRandomId } from "../../modules/MemoryManager";
import { useNavigate } from "react-router-dom";
import { MemoryHighlight } from "./MemoryHighlight";

export const MemoryList = () => {
    const [memories, setMemories] = useState([]);
    const [highlightId, setHighlightId] = useState(0);

    const getMemories = () => {
        return getAllMemories().then(memoriesFromAPI => {
            setMemories(memoriesFromAPI)
        });
    };

    const refreshHighlightMemory = () => {
        getRandomId().then(setHighlightId);
    };

    const handleDeleteMemory = id => {
        deleteMemory(id)
        .then(() => getAllMemories().then(setMemories));
    };

    const navigate = useNavigate();

    useEffect(() => {
        getMemories();
    }, []);

    useEffect(() => {
        refreshHighlightMemory();
    }, []);

    

    return(
    <>
    <>
    <h1>Memory Highlight</h1>
    <button onClick={refreshHighlightMemory}>Reload</button>
    {
    highlightId && <MemoryHighlight memoryId={highlightId} />
    }
    </>
    <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/memories/create")}}>
            New Memory
        </button>  
        </section>
            <div className="container-cards">
                {memories.map(memory =>
                    <MemoryCard key={memory.id} memory={memory}
                    handleDeleteMemory={handleDeleteMemory} />)}
            </div>    
            </>
    );  
};