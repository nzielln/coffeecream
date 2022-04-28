import React, {useEffect, useState} from "react";
import HorizontalHeader from "../../Components/HorizontalHeader";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCafe} from "../../BACKEND/DATABASE/ACTIONS/CafeActions";
import {getEmployeeById} from "../../BACKEND/DATABASE/ACTIONS/EmployeeActions";


const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect( () => {
        let ls = localStorage.getItem("logged_in")
        if (!ls || ls !== "Employee") {
            navigate("/login")
        }
    })
    useEffect(() => {
        async function fetch() {
            await getCafe(dispatch)
        }
        fetch()
    }, [])

    return (
        <div className="row" style={{"height": "100%"}}>
            <div  style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "45px", "paddingBottom": "45px"}}>

                <HorizontalHeader logged_in={localStorage.getItem("logged_in")}/>
                <div className="d-flex flex-column align-items-center">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;