import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import HorizontalHeader from "./HorizontalHeader";
import order from "./../Data/order.json"
import foods from "../Data/food.json"
import drinks from "../Data/drinks.json"
import {getCartSession, getUserSession} from "../BACKEND/DATABASE/SERVICES/AuthServices";

const CoffeeCream = () => {
    const [current_user, setCurrentUser] = useState([])
    useEffect( () => {
        getUserSession().then(r => setCurrentUser(r));
    }, [])


    let logged_in = false;
    if (current_user._id !== undefined) {
        logged_in = true;
    }

    return (
        <>

            <div className="row" style={{"height": "100%"}}>
                <div className="col-8" style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "45px", "paddingBottom": "45px"}}>
                    <HorizontalHeader loggedin={logged_in}/>
                    <Outlet context={[current_user, setCurrentUser, logged_in]}/>
                </div>
                <div className="col-4">
                    <ShoppingCart current_user={current_user} logged_in={logged_in}/>
                </div>
            </div>
        </>

    );
};

export default CoffeeCream;