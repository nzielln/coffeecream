import React from "react";
import {useNavigate} from "react-router-dom";

const Scanner = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/tables");
        
    };
    return (
        <>
            <h3 className="c-large-normal" style={{"textAlign": "center"}}>Scan a table to get
                started.</h3>
            <button className="c-button-noline" onClick={(e) => handleClick(e)}><span
                className="d-flex justify-content-center"><img src="/Assets/phone.svg" alt=""/></span>
            </button>
        </>
    );
};

export default Scanner;