import React from "react";
import HorizontalHeader from "../Components/HorizontalHeader";
import Button from "./../Components/Button";
import FoodIconMedium from "../Components/Icons/FoodIconMedium";
import FoodIconSmall from "../Components/Icons/FoodIconSmall";
import FoodIconSmallest from "../Components/Icons/FoodIconSmallest";
import FoodIconLarge from "../Components/Icons/FoodIconLarge";
import WordOptions from "../Components/WordOptions";
import CharOptions from "../Components/CharOptions";
import FoodCard from "../Components/FoodCard";
import people from "./../Data/people.json"
import UserIconSmall from "../Components/UserIconSmall";
import UserIcon from "../Components/UserIcon";
import DashItem from "../Components/Dashboard/DashItem";
import ClearButton from "../Components/ClearButton";
import order from  "./../Data/order.json"
import OrderLine from "./Dashboard/OrderLine";
import OrderItem from "../Components/Dashboard/OrderItem";
import CartItem from "../Components/ShoppingCart/CartItem";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import Item from "../Components/Dashboard/Item";
import items from "../Data/food.json"
import Person from "../Components/Dashboard/Person";
import HorizontalMenu from "../Components/Menu/HorizontalMenu";
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