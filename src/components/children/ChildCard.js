import React from "react";
import { Link } from "react-router-dom";
import "./Child.css"

export const ChildCard = ({ child, handleDeleteChild }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2> Name: <span className="child-name">
                    {child.name}
                </span></h2>
                <img src={'./images/kennedyCropped.png'} className="Kennedy"></img>
                <p>Birthday: {child.birthday}</p>
                <Link to={`/children/${child.id}/edit`}>
                    <button>Edit Child</button>
                </Link>
                <button type="button" onClick={() => handleDeleteChild(child.id)}>Remove Child</button>
            </div>
        </div>
    );

}