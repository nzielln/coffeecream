import axios from "axios"

export const API_BASE = "http://localhost:4000/cc/api"
const EMPLOYEES = `${API_BASE}/cc/api/employee`


export const getEmployees = async () => {
    const res = await axios.get(EMPLOYEES);
    return res.data
}

export const getEmployeeById = async (id) => {
    const res = await axios.get(`${EMPLOYEES}/${id}`);
    return res.data
}

export const createEmployee = async (employee) => {
    const res = await axios.post(EMPLOYEES, employee);
    return res.data
}

export const deleteEmployee = async (id) => {
    const res = await axios.delete(`${EMPLOYEES}/${id}`);
    return res.data
}

export const updateEmployee = async (employee) => {
    const res = await axios.put(`${EMPLOYEES}/${employee._id}`, employee);
    return res.data
}