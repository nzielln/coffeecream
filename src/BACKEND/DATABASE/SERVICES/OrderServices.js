import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const ORDER = `${API_BASE}/order`


export const getOrders = async () => {
    const res = await axios.get(ORDER);
    return res.data
}

export const getOrderById = async (id) => {
    const res = await axios.get(`${ORDER}/${id}`);
    return res.data
}

export const createOrder = async (order) => {
    const res = await axios.post(ORDER, order);
    return res.data
}

export const deleteOrder = async (id) => {
    const res = await axios.delete(`${ORDER}/${id}`);
    return res.data
}

export const updateOrder= async (order) => {
    const res = await axios.put(`${ORDER}/${order._id}`, order);
    return res.data
}