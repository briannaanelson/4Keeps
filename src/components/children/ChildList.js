import React, { useState, useEffect } from "react";
import { ChildCard } from "./ChildCard";
import { deleteChild, getAllChildren, getChildById } from "../../modules/ChildManager";
import { useNavigate } from "react-router-dom";

export const ChildList = () => {
    const [children, setChildren] = useState([]);
    const navigate = useNavigate();

    const getChildren = () => {
        return getAllChildren().then(childrenFromAPI => {
            setChildren(childrenFromAPI)
        });
    };

    const handleDeleteChild = id => {
        deleteChild(id)
        .then(() => getAllChildren().then(setChildren));
    };

    useEffect(() => {
        getChildren();
    }, []);

    return(
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {navigate("/children/create")}}>
                Add Child
            </button>
        </section>
            <div className="container-cards">
                {children.map(child => 
                    <ChildCard key={child.id} child={child}
                    handleDeleteChild={handleDeleteChild} />)}
            </div>
        </>
    );
};