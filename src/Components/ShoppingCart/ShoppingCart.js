import React from "react";
import CartItem from "./CartItem";
import {useEffect, useState} from "react";
import {getCartSession} from "../../BACKEND/DATABASE/SERVICES/AuthServices";

const ShoppingCart = ({current_user, logged_in}) => {
    const [cart, setCart] = useState()
    useEffect( () => {
        getCartSession().then(r => setCart(r));
    }, [])

    return (
        <>

            <div className="c-cart" style={{"height": "100%"}}>
                <h3 className="c-cart-title c-large-bold">Your Order</h3>
                {cart ?
                    <>
                        {
                            cart.drink_items.map(item => {
                                return <CartItem item={item}/>;
                            })
                        }
                        {
                            cart.food_items.map(item => {
                                return <CartItem item={item}/>;
                            })
                        }
                        <div className="c-cart-total mt-3">
                            <div>
                                <h5 className="c-xsmall-normal">Subtotal</h5>
                                {cart.subtotal.toString().split(".")[1].length === 1 ?
                                    <h5 className="c-xsmall-medium">${cart.subtotal}0</h5> :
                                    <h5 className="c-xsmall-medium">${cart.subtotal}</h5>}

                            </div>

                            <div>
                                <h5 className="c-xsmall-normal">Tax</h5>
                                {cart.tax.toString().split(".")[1].length === 1 ?
                                    <h5 className="c-xsmall-medium">${cart.tax}0</h5> :
                                    <h5 className="c-xsmall-medium">${cart.tax}</h5>}
                            </div>

                        </div>
                        <button className="c-button d-flex align-items-center justify-content-between mt-3">
                            <h3 className="c-medium-medium">Checkout</h3>
                            {cart.total.toString().split(".")[1].length === 1 ?
                                <h5 className="c-medium-bold">${cart.total}0</h5> :
                                <h5 className="c-medium-bold">${cart.total}</h5>}
                        </button>
                    </>
                    :
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{"marginTop": "50%"}}>
                        <h3 className="c-large-medium">Your cart is empty!</h3>
                        <i className="fas fa-shopping-cart c-food-icon pt-2" style={{"fontSize": "24px"}}/>
                    </div>}
            </div>
        </>

    );
};

export default ShoppingCart;