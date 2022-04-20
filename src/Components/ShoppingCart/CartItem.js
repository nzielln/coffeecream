import React from "react";
import FoodIconSmallest from "../Icons/FoodIconSmallest";

const CartItem = ({item, foods, drinks}) => {
    let m_item;
    if (item.type === "Food") {
        m_item = foods.find(f => f.item_id === item.item_id)
    } else if (item.type === "Drinks"){
        m_item = drinks.find(f => f.item_id === item.item_id)
    }

    return (
        <div className="c-cart-card d-flex align-items-center justify-content-between mb-3">
            <FoodIconSmallest item={m_item}/>
            <div className="c-cart-card-content">
                <div className="c-cart-line c-cart-item mb-2">
                    <h4 className="c-small-medium">{m_item.name}</h4>
                    {m_item.price.toString().split(".")[1].length === 1 ?
                        <h4 className="c-small-bold">${m_item.price}0</h4> :
                        <h4 className="c-small-bold">${m_item.price}</h4>}
                </div>
                <div className="c-options mb-3">
                    {
                        item.options.map(opt => {
                            if (opt.cost === 0) {
                                return <div className="c-cart-line">
                                    <h5 className="c-xsmall-normal">{opt.extra}</h5>
                                </div>;
                            } else {
                                return <div className="c-cart-line ">
                                    <h5 className="c-xsmall-normal">{opt.extra}</h5>
                                    {opt.cost.toString().split(".")[1].length === 1 ?
                                        <h4 className="c-xsmall-medium">${opt.cost}0</h4> : <h4>${opt.cost}</h4>}

                                </div>;

                            }
                        })
                    }

                </div>
                {
                    item.type === "Food" ?
                        <div className="c-instructions">
                            <h3 className="c-xsmall-medium mb-1">Instructions</h3>
                            <h5 className="c-xsmall-normal">{item.special_instruction}</h5>
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