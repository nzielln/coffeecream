import * as emp_services from "../SERVICES/EmployeeServices";
import * as auth_services from "../SERVICES/AuthServices"

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_EMPLOYEE_BY_ID = "GET_EMPLOYEE_BY_ID";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const SIGNUP_EMPLOYEE = "REMOVE_EMPLOYEE";
export const SIGNIN_EMPLOYEE = "REMOVE_EMPLOYEE";


export const deleteEmployee = async (dispatch, email) => {
    const status = await emp_services.deleteEmployeeEmail(email);
    dispatch({
        type: REMOVE_EMPLOYEE,
        email: email
    })

}
export const getEmployees = async (dispatch) => {
    const employees = await emp_services.getEmployees();
    dispatch({
        type: GET_EMPLOYEES,
        all_employees: employees
    })

}

export const getEmployeeById = async (dispatch, id) => {
    const employees = await emp_services.getEmployeeById(id);
    dispatch({
        type: GET_EMPLOYEE_BY_ID,
        employee: employees
    })

}

export const updateEmployee = async (dispatch, employee) => {
    const status = await emp_services.updateEmployee(employee);
    dispatch({
        type: UPDATE_EMPLOYEE,
        employee: employee
    })

}

export const signUpEmployee = async (dispatch, employee) => {
    const status = await auth_services.signUpEmployee(employee);
    console.log(status)
    dispatch({
        type: SIGNUP_EMPLOYEE,
        employee: employee
    })

}

export const signInEmployee = async (dispatch, creds) => {
    const status = await auth_services.signInEmployee(creds);
    dispatch({
        type: SIGNIN_EMPLOYEE,

    })

}
