import React from "react";
import food from "../../Data/foodmenu.json"
import drinks from "../../Data/drinkmenu.json"
import merch from "../../Data/merchmenu.json"
import {useParams} from "react-router-dom";
import menu from "../../Data/menu.json";
import FoodIconMedium from "../../Components/Icons/FoodIconMedium";


const ItemsMenu = () => {
    let params = useParams();
    let menu = params.submenu;
    let items;
    if (menu === "food") {
        items = food
    } else if (menu === "drinks") {
        items = drinks
    } else {
        items = merch
    }
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-between"
             style={{"paddingLeft": "160px", "paddingRight": "160px", "paddingTop": "120px", "flexBasis": "33.333333%"}}>
            {
                items.map(m => {
                    return <FoodIconMedium item={m}/>
                })
            }

        </div>
    );
}

export default ItemsMenu;