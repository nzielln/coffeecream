import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const CUSTOMER = `${API_BASE}/cc/api/customer`


export const getCustomers = async () => {
    const res = await axios.get(CUSTOMER);
    return res.data
}

export const getCustomerById = async (id) => {
    const res = await axios.get(`${CUSTOMER}/${id}`);
    return res.data
}

export const createCustomer = async (customer) => {
    const res = await axios.post(CUSTOMER, customer);
    return res.data
}

export const deleteCustomer = async (id) => {
    const res = await axios.delete(`${CUSTOMER}/${id}`);
    return res.data
}

export const updateCustomer = async (customer) => {
    const res = await axios.put(`${CUSTOMER}/${customer._id}`, customer);
    return res.data
}