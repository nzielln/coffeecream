import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const TABLE = `${API_BASE}/table`


export const getTables = async () => {
    const res = await axios.get(TABLE);
    return res.data
}

export const getTableById = async (id) => {
    const res = await axios.get(`${TABLE}/${id}`);
    return res.data
}

export const createTable = async (table) => {
    const res = await axios.post(TABLE, table);
    return res.data
}

export const deleteTable = async (id) => {
    const res = await axios.delete(`${TABLE}/${id}`);
    return res.data
}

export const updateTable = async (table) => {
    const res = await axios.put(`${TABLE}/${table._id}`, table);
    return res.data
}