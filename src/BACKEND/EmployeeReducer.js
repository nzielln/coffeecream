import {SIGNIN_EMPLOYEE, SIGNUP_EMPLOYEE, REMOVE_EMPLOYEE, UPDATE_EMPLOYEE, GET_EMPLOYEES, GET_EMPLOYEE_BY_ID } from "./DATABASE/ACTIONS/EmployeeActions";

const EmployeeReducer = (state = [], action) => {
    switch(action.type) {
        case SIGNUP_EMPLOYEE:
            return [...state, action.employee];
        case SIGNIN_EMPLOYEE:
            return state;
        case REMOVE_EMPLOYEE:
            return state.filter(e => e.email !== action.email);
        case UPDATE_EMPLOYEE:
            return state.map(e => e._id === action.employee._id ? action.employee : e);
        case GET_EMPLOYEES:
            return action.all_employees;
        case GET_EMPLOYEE_BY_ID:
            return action.employee;
        default:
            return state;
    }
}

export default EmployeeReducer;