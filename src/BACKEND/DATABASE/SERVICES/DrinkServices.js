import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const DRINK = `${API_BASE}/cc/api/drink`


export const getDrinks = async () => {
    const res = await axios.get(DRINK);
    return res.data
}

export const getDrinkById = async (id) => {
    const res = await axios.get(`${DRINK}/${id}`);
    return res.data
}

export const createDrink = async (drink) => {
    const res = await axios.post(DRINK, drink);
    return res.data
}

export const deleteDrink = async (id) => {
    const res = await axios.delete(`${DRINK}/${id}`);
    return res.data
}

export const updateDrink= async (drink) => {
    const res = await axios.put(`${DRINK}/${drink._id}`, drink);
    return res.data
}