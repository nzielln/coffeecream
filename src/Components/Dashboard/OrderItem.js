import React from "react";
import foods from "../../Data/food.json";
import drinks from "../../Data/drinks.json";
import Button from "../Button";
import ClearButton from "../ClearButton";

const OrderItem = ({order}) => {
    let buttons;
    if (!order.completed) {
        buttons =
            <div className="c-order-buttons d-flex align-items-center justify-content-between">
                <Button title={"Complete"}/>
                <ClearButton title={"Cancel"}/>
            </div>;
    } else {
        buttons =
            <div className="c-order-buttons d-flex align-items-center justify-content-center">
                <ClearButton title={"Completed"}/>
            </div>;
    }

    return (
        <div className="c-order-card m-0">
            <div className="c-order-header c-table-number">
                <h4 className="c-med-large-medium">Table</h4>
                <h4 className="c-med-large-medium">{order.table}</h4>
            </div>
            <div className=" c-order-header c-order-items">
                <h4 className="c-med-large-medium">Items</h4>
                <h4 className="c-med-large-medium">{order.items.length}</h4>
            </div>
            <div>
                {
                    order.items.map(item => {
                        let m_item;
                        if (item.type === "Food") {
                            m_item = foods.filter((f) => f.item_id === item.item_id)[0];

                        } else {
                            m_item = drinks.filter((f) => f.item_id === item.item_id)[0];
                        }

                        return (
                            <div className="c-order-content">
                                <div className="c-order-header c-order-name c-med-large-medium mb-1">
                                    <h4 className="c-med-large-medium">{m_item.name}</h4>
                                    {item.type === "Drink" ? <h4 className="c-med-large-medium">{item.size}</h4> : ""}
                                </div>
                                <div className="c-order-options">
                                    <div className="c-order-extras c-small-normal d-flex align-content-center">
                                        {
                                            item.options.map((opt, i) => {
                                                if (item.options.length - 1 === i) {
                                                    return <h5 className="c-small-normal">{opt.extra} </h5>;
                                                } else {
                                                    return <h5 className="c-small-normal">{opt.extra},&nbsp;  </h5>;
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="c-order-instructions c-small-normal">
                                        {item.special_instruction !== "" ?
                                            <h5 className="c-small-normal">{item.special_instruction}</h5> : ""}
                                    </div>
                                </div>
                            </div>

                        );
                    })
                }

            </div>
            {buttons}
        </div>
    );
};

export default OrderItem;