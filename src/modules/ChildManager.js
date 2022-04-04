const API = "http://localhost:8088"

export const getChildById = (childId) => {
    return fetch(`${API}/children/${childId}`)
    .then(res => res.json())
}

export const getAllChildren = () => {
    return fetch(`${API}/children`)
    .then(res => res.json())
}

export const deleteChild = (id) => {
    return fetch(`${API}/children/${id}`,{
        method: "DELETE"

    }).then(result => result.json())
}

export const addChild = (newChild) => {
    return fetch(`${API}/children`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChild)
    }).then(response => response.json())
}

export const updateChild = (editedChild) => {
    return fetch(`${API}/children/${editedChild.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editedChild)
    }).then(data => data.json());
}