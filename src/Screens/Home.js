import React from "react";
import HorizontalHeader from "../Components/HorizontalHeader";
import {Link} from "react-router-dom";
const menu_items = [
    {
        name: "Profile",
        path: "profile"

    },
    {
        name: "Menu",
        path: "menu"

    }
]
const Home = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center position-relative" style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "25px", "paddingBottom": "25px"}}>
                <HorizontalHeader loggedin={false}/>
                <div className="c-home d-flex flex-column justify-content-center align-content-center">
                    <h3 className="c-large-normal" style={{"textAlign": "center"}}>Scan a table to get started.</h3>
                    <Link className="c-link" to="/cc/login"> <span className="d-flex justify-content-center"><img src="./Assets/phone.svg" alt=""/></span></Link>
                </div>
            </div>

        </>
    );
};

export default Home;