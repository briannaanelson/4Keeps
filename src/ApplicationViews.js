import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./components/auth/Login.js";
import { Register } from "./components/auth/Register.js";
import { MemoryList } from "./components/memories/MemoryList.js";
import { MemoryForm } from "./components/memories/MemoryForm.js";
import { MemoryEditForm } from "./components/memories/MemoryEditForm.js";
import { MemoryDetail } from "./components/memories/MemoryDetail.js";
import { ChildList } from "./components/children/ChildList.js";
import { ChildForm } from "./components/children/ChildForm.js";
import { ChildEditForm } from "./components/children/ChildEditForm.js";
import { UserList } from "./components/User/UserList";
import { UserEditForm } from "./components/User/UserEditForm";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated}) => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("4keeps__user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("4keeps__user") !== null)
    
    }

    return(
        <>
            <Routes>
                {/* Render the homepage when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the memory list when @ http://localhost:3000/memories */}
                <Route exact path="/memories" element={<PrivateRoute> <MemoryList /> </PrivateRoute>} />
                <Route path="/memories/create" element={<MemoryForm />} />
                <Route path="/memories/:memoryId/edit" element= {<PrivateRoute> <MemoryEditForm /> </PrivateRoute>} />
                <Route path="/memories/:memoryId" element= {<PrivateRoute> <MemoryDetail /> </PrivateRoute>} />

                {/* Render the childrens list when @ http://localhost:3000/children */}
                <Route path="children" element={<PrivateRoute> <ChildList /> </PrivateRoute>} />
                <Route path="/children/create" element={<ChildForm />} />
                <Route path="/children/:childId/edit" element= {<PrivateRoute> <ChildEditForm /> </PrivateRoute>} />

                {/* Render the user account page when @ http://localhost:3000/users */}
                <Route path="users" element={<PrivateRoute> <UserList /> </PrivateRoute>} />
                <Route path="/users/:userId/edit" element= {<PrivateRoute> <UserEditForm /> </PrivateRoute>}/>

            
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
        </>

    )
}