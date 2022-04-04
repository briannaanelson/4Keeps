import React from "react";
import { Link } from "react-router-dom";

export const ChildCard = ({ child, handleDeleteChild }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2> Name: <span className="child-name">
                    {child.name}
                </span></h2>
                <p>Birthday: {child.birthday}</p>
                <Link to={`/children/${child.id}/edit`}>
                    <button>Edit Child</button>
                </Link>
                <button type="button" onClick={() => handleDeleteChild(child.id)}>Remove Child</button>
            </div>
        </div>
    );

}