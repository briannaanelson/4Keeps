const API = "http://localhost:8088"

export const getMemoryById = (memoryId) => {
    return fetch(`${API}/memories/${memoryId}`)
    .then(res => res.json())
}

export const getAllMemories = () => {
    return fetch(`${API}/memories`)
    .then(res => res.json())
}

export const deleteMemory = (id) => {
    return fetch(`${API}/memories/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addMemory = (newMemory) => {
    return fetch(`${API}/memories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMemory)
    }).then(response => response.json())
}

export const updateMemory = (editedMemory) => {
    return fetch(`${API}/memories/${editedMemory.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editedMemory)
    }).then(data => data.json());
}

//get random memory 

export const getRandomId = () => {
    return fetch(`${API}/memories`)
    .then(result => result.json())
    .then(memories => {
        const randomIndex = Math.floor(Math.random() * memories.length);
        const randomMemory = memories[randomIndex];
        return randomMemory.id;
    });
}