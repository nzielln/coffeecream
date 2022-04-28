import React, {useEffect, useState} from "react";
import FoodIconSmallest from "../Icons/FoodIconSmallest";
import {getFoods} from "../../BACKEND/DATABASE/SERVICES/FoodServices";
import {getDrinks} from "../../BACKEND/DATABASE/SERVICES/DrinkServices";
import {getMerches} from "../../BACKEND/DATABASE/SERVICES/MerchServices";
import {getMenus} from "../../BACKEND/DATABASE/SERVICES/MenuServices";

const CartItem = ({item}) => {
    const [menu, setMenu] = useState();

    let m_item = item.item;
    console.log(m_item);

    return (
        <div className="c-cart-card d-flex align-items-center justify-content-between mb-3">
            <FoodIconSmallest item={m_item}/>
            <div className="c-cart-card-content">
                <div className="c-cart-line c-cart-item mb-2">
                    <h4 className="c-small-medium">{m_item.name}</h4>

                    {m_item.price.toString().split(".").length > 1 ? (
                            m_item.price.toString().split(".")[1].length === 1 ?
                                <h5 className="c-medium-bold">${m_item.price}0</h5> :
                                <h5 className="c-medium-bold">${m_item.price}</h5>) :
                        <h5 className="c-medium-bold">${m_item.price}</h5>}
                </div>
                <div className="c-options mb-3">
                    {item.type === "Drinks" ? <h4 className="c-xsmall-normal">{item.size}</h4> : null}
                    {item.type === "Merch" ? null :

                        item.options.filter(o => o.option !== "0" || o.option === "").map(opt => {

                            if (opt.cost === 0) {
                                return <div className="c-cart-line">
                                    <h5 className="c-xsmall-normal">{opt.option}</h5>
                                </div>;
                            } else {
                                return <div className="c-cart-line ">
                                    <h5 className="c-xsmall-normal"><span className="c-xsmall-medium">{opt.type}:</span>  {opt.option}</h5>
                                    {opt.cost === "0" ? null : (opt.cost.toString().split(".").length > 1 ?
                                        (opt.cost.toString().split(".")[1].length === 1 ?
                                            <h4 className="c-xsmall-medium">${opt.cost}0</h4> :
                                            <h4 className="c-xsmall-medium">${opt.cost}</h4>)
                                        : <h4 className="c-xsmall-medium">${opt.cost}</h4>)}

                                </div>;

                            }
                        })
                    }

                </div>
                {
                    item.type === "Food" ?
                        <div className="c-instructions">
                            <h3 className="c-xsmall-medium mb-1">Instructions</h3>
                            <h5 className="c-xsmall-normal">{item.special_instructions}</h5>
                        </div> : ""

                }
                <div className="c-cart-buttons d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center justify-content-between"
                         style={{"width": "100px"}}
                    >
                        <button className="c-button-noline d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-pen"/>
                        </button>
                        <button className="c-button-noline d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-plus"/>
                        </button>
                        <button className="c-button-noline d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-minus"/>
                        </button>
                    </div>
                    <button className="c-button-noline d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-info"/>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CartItem;