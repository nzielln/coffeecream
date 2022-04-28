import React from "react";
import MenuItem from "./MenuItem";
import {signOut} from "../../BACKEND/DATABASE/SERVICES/AuthServices";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const HorizontalMenu = ({items, logged_in}) => {
    const navigate = useNavigate()
    const logOut = () => {
        signOut().then(r => console.log())
        localStorage.clear()
        navigate("/login")
    }

    const goToDashboard = (e) => {
        navigate("/dashboard")
    }

    return (
        <div className="c-hmenu d-flex justify-content-start position-absolute top-50 start-0 translate-middle-y">
            <div className="c-menu-item d-flex justify-content-between align-items-center p-2">
                {
                    items.map(item => {
                        return <MenuItem item={item}/>;
                    })
                }
                {
                    localStorage.getItem("logged_in") === "Employee" ?
                        <button className="c-button-noline p-0 m-0 d-flex align-items-center me-3" onClick={() => goToDashboard()}>
                            <h4 className="c-small-medium m-0" style={{"width": "100%", "textAlign": "right"}}>Dashboard</h4>
                        </button> : null
                }

                {
                    logged_in ?
                        <button className="c-button-noline p-0 m-0 d-flex align-items-center me-3" onClick={() => logOut()}>
                            <h4 className="c-small-medium m-0" style={{"width": "100%", "textAlign": "right"}}>Sign
                                out</h4>
                        </button> : null
                }
            </div>
        </div>
    );
};

export default HorizontalMenu;