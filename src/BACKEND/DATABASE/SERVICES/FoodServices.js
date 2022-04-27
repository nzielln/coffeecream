import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const FOOD = `${API_BASE}/food`


export const getFoods = async () => {
    const res = await axios.get(FOOD);
    return res.data
}

export const getFoodById = async (id) => {
    const res = await axios.get(`${FOOD}/${id}`);
    return res.data
}

export const createFood = async (food) => {
    const res = await axios.post(FOOD, food);
    return res.data
}

export const deleteFood = async (id) => {
    const res = await axios.delete(`${FOOD}/${id}`);
    return res.data
}

export const updateFood = async (food) => {
    const res = await axios.put(`${FOOD}/${food._id}`, food);
    return res.data
}