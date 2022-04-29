import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import HorizontalHeader from "./Menu/HorizontalHeader";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../BACKEND/DATABASE/ACTIONS/AuthActions";


const CoffeeCream = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    useEffect(   () => {
        async function fetch() {
            await getUser(dispatch);
        }
        fetch();
    }, [])

    if(!localStorage.getItem("logged_in")) {
        navigate("/login")
    }

    return (
        <>
            <div className="row" style={{"height": "100%"}}>
                <div className="col-8" style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "45px", "paddingBottom": "45px"}}>
                    <HorizontalHeader logged_in={localStorage.getItem("logged_in")}/>
                    <Outlet/>
                </div>
                <div className="col-4">
                    <ShoppingCart/>
                </div>
            </div>
        </>

    );
};

export default CoffeeCream;