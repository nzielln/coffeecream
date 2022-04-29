import React, {useState} from "react";
import foods from "../../Data/food.json";
import drinks from "../../Data/drinks.json";
import Button from "../Button";
import ClearButton from "../ClearButton";
import {deleteOrder, updateOrder} from "../../BACKEND/DATABASE/ACTIONS/OrderActions";
import {useDispatch, useSelector} from "react-redux";
import {updateTables} from "../../BACKEND/DATABASE/ACTIONS/TableActions";

const OrderItem = ({order}) => {
    let buttons;
    const dispatch = useDispatch()
    const [c_order, setOrder] = useState(order)
    const orders = useSelector(state => state.orders)
    const complete = async () => {
        let new_order = {
            ...order,
            completed: true
        }
        await updateOrder(dispatch, new_order)
        setOrder(new_order)
    }

    const cancel = async () => {
        let new_order = {
            ...c_order,
            cancelled: true
        }

        let table = {
            ...c_order.table,
            reserved: false
        }
        updateOrder(dispatch, new_order).then(() => {
            updateTables(dispatch, table)
        })
        setOrder(null)
    }
    if(!c_order) {
        return null
    }

    if (!c_order.completed) {
        buttons =
            <div className="c-order-buttons d-flex align-items-center justify-content-between">
                <Button title={"Complete"} handleClick={() => complete()}/>
                <ClearButton title={"Cancel"} handleClick={() => cancel()}/>
            </div>;
    } else if (c_order.cancelled) {
        buttons =
            <div className="c-order-buttons d-flex align-items-center justify-content-center">
                <ClearButton title={"Cancelled"}/>
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
                <h4 className="c-med-large-medium">{c_order.table.tag}</h4>
            </div>
            <div className=" c-order-header c-order-items">
                <h4 className="c-med-large-medium">Items</h4>
                <h4 className="c-med-large-medium">{c_order.food_items.length + c_order.drink_items.length + c_order.merch.length}</h4>
            </div>
            <div>
                {
                    c_order.food_items.map(item => {
                        return (<div className="c-order-content">
                            <div className="c-order-header c-order-name c-med-large-medium mb-1">
                                <h4 className="c-med-large-medium">{item.item.name}</h4>
                            </div>
                            <div className="c-order-options">
                                <div className="c-order-extras c-small-normal d-flex flex-column align-content-center">
                                    {
                                        item.options.map((opt, i) => {
                                            if (item.options.length - 1 === i) {
                                                return <h5 className="c-small-normal"><span className="c-small-medium">{opt.type}:</span> {opt.option} </h5>;
                                            } else {
                                                return <h5 className="c-small-normal"><span className="c-small-medium">{opt.type}:</span> {opt.option},&nbsp;  </h5>;
                                            }
                                        })
                                    }
                                </div>
                                <div className="c-order-instructions c-small-normal">
                                    {item.special_instructions !== "" ?
                                        <h5 className="c-small-normal">{item.special_instructions}</h5> : ""}
                                </div>
                            </div>
                        </div>)
                    })

                }
                {
                    c_order.drink_items.map(item => {
                        return (<div className="c-order-content">
                            <div className="c-order-header c-order-name c-med-large-medium mb-1">
                                <h4 className="c-med-large-medium">{item.item.name}</h4>
                                <h4 className="c-med-large-medium">{item.size}</h4>
                            </div>
                            <div className="c-order-options">
                                <div className="c-order-extras c-small-normal d-flex flex-column align-content-center">
                                    {
                                        item.options.map((opt, i) => {
                                            if (item.options.length - 1 === i) {
                                                return <h5 className="c-small-normal"><span className="c-small-medium">{opt.type}:</span> {opt.option} </h5>;
                                            } else {
                                                return <h5 className="c-small-normal"><span className="c-small-medium">{opt.type}:</span> {opt.option},&nbsp;  </h5>;
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>)
                    })

                }
                {
                    c_order.merch.map(item => {
                        return (<div className="c-order-content">
                            <div className="c-order-header c-order-name c-med-large-medium mb-1">
                                <h4 className="c-med-large-medium">{item.item.name}</h4>
                            </div>
                        </div>)
                    })

                }

            </div>
            {buttons}
        </div>
    );
};

export default OrderItem;