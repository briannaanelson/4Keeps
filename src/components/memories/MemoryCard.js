import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Memory.css"


export const MemoryCard = ({memory}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Memory: <span className="content-memorytitle">
                   {memory.title}
                 </span></h3>
                 
                 <p>About {memory.memory}</p>
                 <Link to={`/memories/${memory.id}`}>
                     <button>Expand Memory</button>
                </Link>
                <Link to={`/memories/${memory.id}/edit`}>
                    <button>Edit</button>
                </Link>
                
                </div>
            </div>
    );
}