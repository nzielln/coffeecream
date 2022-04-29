import React from "react";
import HorizontalHeader from "../Components/Menu/HorizontalHeader";
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
import OrderItem from "../Components/Dashboard/OrderItem";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import ItemDetailPage from "./Menu/ItemDetailPage";

const Scrap = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center">
                <HorizontalHeader/>
                <div className="c-home d-flex flex-column justify-content-center align-content-center">
                    <h3 className="c-large-normal" style={{"textAlign": "center"}}>Scan a table to get started.</h3>
                    <span className="d-flex justify-content-center"><img src="./Assets/phone.svg" alt=""/></span>
                </div>
            </div>

        </>
    );
};

export default Scrap;