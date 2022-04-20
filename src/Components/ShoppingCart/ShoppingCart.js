import React from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({order, foods, drinks}) => {
    return (
        <div className="c-cart" style={{"height": "100%"}}>
            <h3 className="c-cart-title c-large-bold">Your Order</h3>
            {
                order.items.map(item => {
                    return <CartItem item={item} foods={foods} drinks={drinks}/>
                })
            }
            <div className="c-cart-total mt-3">
                <div>
                    <h5 className="c-xsmall-normal">Subtotal</h5>
                    {order.subtotal.toString().split(".")[1].length === 1 ?
                        <h5 className="c-xsmall-medium">${order.subtotal}0</h5> :
                        <h5 className="c-xsmall-medium">${order.subtotal}</h5>}

                </div>

                <div>
                    <h5 className="c-xsmall-normal">Tax</h5>
                    {order.total_tax.toString().split(".")[1].length === 1 ?
                        <h5 className="c-xsmall-medium">${order.total_tax}0</h5> :
                        <h5 className="c-xsmall-medium">${order.total_tax}</h5>}
                </div>

            </div>
            <button className="c-button d-flex align-items-center justify-content-between mt-3">
                <h3 className="c-medium-medium">Checkout</h3>
                {order.total.toString().split(".")[1].length === 1 ?
                    <h5 className="c-medium-bold">${order.total}0</h5> :
                    <h5 className="c-medium-bold">${order.total}</h5>}
            </button>
        </div>
    );
}

export default ShoppingCart