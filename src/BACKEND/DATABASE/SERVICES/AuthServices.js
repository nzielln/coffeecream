import axios from "axios"
const api = axios.create({
    withCredentials: true
})

export const API_BASE = "http://localhost:4000/cc/api"
const AUTH = `${API_BASE}/people`
const CART = `${API_BASE}/cart`
const AUTH_EMPLOYEE = `${AUTH}/employee`
const AUTH_CUSTOMER = `${AUTH}/customer`

export const signInEmployee = async (employee) => {
    const res = await api.post(`${AUTH_EMPLOYEE}/signin`, employee);
    return res.data
}


export const signInCustomer = async (customer) => {
    const res = await api.post(`${AUTH_CUSTOMER}/signin`, customer);
    return res.data
}

export const signUpEmployee = async (employee) => {
    const res = await api.post(`${AUTH_EMPLOYEE}/signup`, employee);
    return res.data
}


export const signUpCustomer = async (customer) => {
    const res = await api.post(`${AUTH_CUSTOMER}/signup`, customer);
    return res.data
}

export const signOut = async () => {
    const res = await api.post(`${AUTH}/signout`);
    return res.data
}

export const updateUserSession = async (user) => {
    const res = await api.post(`${AUTH}/update`, user);
    return res.data
}


export const getUserSession = async () => {
    const res = await api.post(`${AUTH}/get`);
    return res.data
}

export const updateCartSession = async (cart) => {
    const res = await api.post(`${CART}/update`, cart);
    return res.data
}


export const getCartSession = async () => {
    const res = await api.post(`${CART}/get`);
    return res.data
}
