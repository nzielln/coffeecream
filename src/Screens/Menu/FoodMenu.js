import React from "react";
import menu from "../../Data/menu.json"
import FoodIconLarge from "../../Components/Icons/FoodIconLarge";

const FoodMenu = () => {

    return (
        <div className="c-menu-grid" style={{"paddingLeft": "160px", "paddingRight": "160px", "paddingTop": "150px"}}>
            {
                menu.map(m => {
                    return <FoodIconLarge item={m}/>
                })
            }

        </div>
    );
}

export default FoodMenu;