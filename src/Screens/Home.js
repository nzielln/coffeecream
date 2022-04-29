import React from "react";
import HorizontalHeader from "../Components/Menu/HorizontalHeader";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";

const Home = () => {
    return (
        <>
                <div style={{
                    "height": "100%",
                    "paddingLeft": "50px",
                    "paddingRight": "50px",
                    "paddingTop": "45px",
                    "paddingBottom": "45px"
                }}>
                    <HorizontalHeader logged_in={localStorage.getItem("logged_in")}/>
                    <div className="d-flex flex-column justify-content-center position-relative" style={{
                        "paddingLeft": "50px",
                        "paddingRight": "50px",
                        "paddingTop": "25px",
                        "paddingBottom": "25px"
                    }}>
                        <div className="c-home d-flex flex-column justify-content-center align-content-center">
                            <Outlet/>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Home;