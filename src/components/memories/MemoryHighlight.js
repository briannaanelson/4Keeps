import React, { useState, useEffect} from "react";
import { getMemoryById } from "../../modules/MemoryManager";

export const MemoryHighlight = ({memoryId}) => {
    const [memory, setMemory] = useState({});

    useEffect(() => {
        getMemoryById(memoryId).then(memory => {
            setMemory(memory);
        });
    }, [memoryId]);

    return(
        <div className="memory-highlight">
            <div>
                <h3>{memory.title}</h3>
                <p>{memory.memory}</p>
            </div>
        </div>
    );
};