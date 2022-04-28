import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const CAFE = `${API_BASE}/cafe`


export const getCafes = async () => {
    const res = await axios.get(CAFE);
    return res.data
}

export const getCafeById = async (id) => {
    const res = await axios.get(`${CAFE}/${id}`);
    return res.data
}

export const createCafe = async (cafe) => {
    const res = await axios.post(CAFE, cafe);
    return res.data
}

export const deleteCafe = async (id) => {
    const res = await axios.delete(`${CAFE}/${id}`);
    return res.data
}

export const updateCafe = async (cafe) => {
    const res = await axios.put(`${CAFE}/${cafe._id}`, cafe);
    return res.data
}