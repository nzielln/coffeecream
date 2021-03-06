import React, {useState} from "react";
import HorizontalMenu from "./HorizontalMenu";
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
];

const HorizontalHeader = ({logged_in}) => {
    return (
        <div className="c-site-header d-flex align-content-center justify-content-center position-relative">
            <HorizontalMenu items={menu_items} logged_in={logged_in}/>
            <Link to="/home" className="c-no-link">
                <h2 className="c-title d-flex align-items-center m-0">coffee & cream</h2>
            </Link>

        </div>

    );
};

export default HorizontalHeader;