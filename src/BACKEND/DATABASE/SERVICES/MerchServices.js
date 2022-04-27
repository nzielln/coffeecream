import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const MERCH = `${API_BASE}/merch`


export const getMerches = async () => {
    const res = await axios.get(MERCH);
    return res.data
}

export const getMerchById = async (id) => {
    const res = await axios.get(`${MERCH}/${id}`);
    return res.data
}

export const createMerch = async (merch) => {
    const res = await axios.post(MERCH, merch);
    return res.data
}

export const deleteMerch = async (id) => {
    const res = await axios.delete(`${MERCH}/${id}`);
    return res.data
}

export const updateMerch= async (merch) => {
    const res = await axios.put(`${MERCH}/${merch._id}`, merch);
    return res.data
}