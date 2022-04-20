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

            <Button title={"Log in"}/>
            <ClearButton title={"Cancel"}/>

            <FoodIconSmall item={{
                title: "Cold Drink",
                image: "latteiced.jpeg",
            }}/>

            <FoodIconSmallest item={{
                title: "Cold Drink",
                image: "latteiced.jpeg",
                path: "colddrinks"
            }}/>

            <FoodIconLarge item={{
                title: "Cold Drink",
                image: "latteiced.jpeg",
                path: "colddrinks"
            }}/>

            <FoodIconMedium item={{
                title: "Cold Drink",
                image: "latteiced.jpeg",
                path: "colddrinks"
            }}/>

            <WordOptions option={{
                title: "Rice"
            }}/>
            <CharOptions option={{
                title: "S"
            }}/>
            <FoodCard item={{
                title: "Cold Drink",
                image: "latteiced.jpeg",
            }}/>
            <UserIconSmall user={people[0]}/>
            <UserIcon user={people[2]}/>
            <DashItem item={{
                title: "View Orders",
                path: "orders"
            }}/>
            <OrderItem order={order}/>
            <ShoppingCart order={order}/>

        </>
    );
};

export default Scrap;