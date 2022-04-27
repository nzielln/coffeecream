import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const MENU = `${API_BASE}/menu`


export const getMenus = async () => {
    const res = await axios.get(MENU);
    return res.data
}

export const getMenuById = async (id) => {
    const res = await axios.get(`${MENU}/${id}`);
    return res.data
}

export const getMenuByType = async (type) => {
    const res = await axios.get(`${MENU}/type/${type}`);
    return res.data
}

export const getMenuBySubType = async (subtype) => {
    const res = await axios.get(`${MENU}/subtype/${subtype}`);
    return res.data
}

export const getMenuByGroup = async (group) => {
    const res = await axios.get(`${MENU}/group/${group}`);
    return res.data
}

export const createMenu = async (menu) => {
    const res = await axios.post(MENU, menu);
    return res.data
}

export const deleteMenu = async (id) => {
    const res = await axios.delete(`${MENU}/${id}`);
    return res.data
}

export const updateMenu= async (menu) => {
    const res = await axios.put(`${MENU}/${menu._id}`, menu);
    return res.data
}