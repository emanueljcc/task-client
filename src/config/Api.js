const PORT = 4002;
const URL = `http://localhost:${PORT}/api/tasks`;

async function getAll() {
    try {
        const res = await fetch(URL);
        const data = res.json();

        return data;

    } catch (error) {
        throw error;
    }
}

async function getId(id) {
    try {
        console.log(id)
    } catch (error) {
        throw error;
    }
}

async function create(data) {
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const saved = await fetch(URL, options);
        return saved.json();

    } catch (error) {
        throw error;
    }
}

async function remove(id) {
    try {
        const options = {
            method: "DELETE"
        };

        const response = await fetch(`${URL}/${id}`, options);
        return response.json();

    } catch (error) {
        throw error;
    }
}

async function update(data) {
    try {
        // console.log(data)
        const options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(`${URL}/${data._id}`, options);

        return response.json();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    create,
    remove,
    update,
    getId
}