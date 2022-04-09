import React, { useState, useEffect } from "react";
import { ChildCard } from "./ChildCard";
import { deleteChild, getAllChildren, getChildById } from "../../modules/ChildManager";
import { useNavigate } from "react-router-dom";
import "./ChildList.css"

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
        <><body>
       <div className="childpage">
        <section className="section-content" >
            <button type="button"
            className="btn"
            onClick={() => {navigate("/children/create")}}>
                Add Child
            </button>
       
            <div className="container-cards" >
                {children.map(child => 
                    <ChildCard key={child.id} child={child}
                    handleDeleteChild={handleDeleteChild} />)}
            </div>
            </section>
           </div>
           </body> 
        </>
    );
};
