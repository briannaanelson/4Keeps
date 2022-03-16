import React, {useState} from "react"
import { ApplicationViews } from "../ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const Keeps = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("4keeps_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("4keeps_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("4keeps_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("4keeps_user") !== null)
    }

    return (
        <>
             <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
             <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> 
        </>
    )
}