const API = "http://localhost:8088"

export const getUserById = (userId) => {
    return fetch(`${API}/users/${userId}`)
    .then(res => res.json())
}

export const getAllUsers = () => {
    return fetch(`${API}/users`)
    .then(res => res.json())
}

export const deleteUser = (id) => {
    return fetch(`${API}/users/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addUser = (newUser) => {
    return fetch(`${API}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(response => response.json());
}

export const updateUser = (editedUser) => {
    return fetch(`${API}/users/${editedUser.id}`, {
        method: "PATCH",
        headers: {
            "content-Type" : "application/json"
        },
        body: JSON.stringify(editedUser)
    }).then(data => data.json());
}