import React from "react";
import {Link} from "react-router-dom";

const FoodIconSmallest = ({item}) => {
    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center me-3">
                <img className="c-f-smallest" src={`/Images/${item.image}`} alt=""/>
            <h3 className="c-medium-bold">{item.title}</h3>
        </div>
    );
}

export default FoodIconSmallest;