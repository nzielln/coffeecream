import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import HorizontalHeader from "./HorizontalHeader";
import order from "./../Data/order.json"

const CoffeeCream = () => {
    console.log(useLocation().pathname)
    console.log(order)
    return (
        <>

            <div className="row" style={{"height": "100%"}}>
                <div className="col-8" style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "45px", "paddingBottom": "45px"}}>
                    <HorizontalHeader loggedin={true}/>
                    <Outlet/>
                </div>
                <div className="col-4">
                    <ShoppingCart order={order}/>
                </div>
            </div>
        </>

    );
};

export default CoffeeCream;