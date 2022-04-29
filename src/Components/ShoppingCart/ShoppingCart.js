import React from "react";
import CartItem from "./CartItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCart, getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {createOrder} from "../../BACKEND/DATABASE/SERVICES/OrderServices";
import {useNavigate} from "react-router-dom";

const ShoppingCart = () => {
    //const [cart, setCart] = useState({});
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        async function fetch() {
            await getUser(dispatch);
        }

        fetch();
    }, []);
    const user = useSelector(state => state.user)
    console.log(user)
    console.log(cart)
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getCart(dispatch);
        }

        fetch();
    }, []);

    let total = parseFloat(cart.total) + cart.tax;

    const checkout = (e) => {
        e.preventDefault();
        createOrder(cart).then(r => console.log(r));
        updateCart(dispatch, {});
        navigate("/cc/menu");

    };

    const cancel = () => {
        updateCart(dispatch, {});
    };


    return (
            <>
                <div className="c-cart" style={{"height": "100%"}}>
                    {localStorage.getItem("logged_in") === "Employee" ?
                        <>
                            <div className="d-flex flex-column align-items-center justify-content-center"
                                 style={{"height": "100%", "width": "100%"}}>
                                <h3 className="c-cart-title c-large-bold mb-2">Welcome, {user.first_name}!</h3>
                                <img src="/Images/cafe.jpeg" alt=""
                                     style={{"objectFit": "cover", "width": "100%","height": "100%", "borderRadius": "15px"}}
                                />
                            </div>
                        </>:
                        <>
                            <div className="d-flex justify-content-between" style={{"width": "100%"}}>
                                <h3 className="c-cart-title c-large-bold mb-2">Your Order, {user.first_name}!</h3>
                                <button
                                    className="c-button-noline c-medium-normal p-0 m-0 d-flex align-items-top justify-content-end me-3 shadow-none"
                                    style={{"width": "40%"}}
                                    onClick={() => cancel()}>Cancel Order
                                </button>
                            </div>
                            <h3 className="c-cart-title c-medium-medium"><span
                                className="c-medium-bold">Table: </span>{cart.table && cart.table.tag}</h3>
                            {Object.keys(cart).length === 0 || Object.keys(cart).length === 1 ?
                                <div className="d-flex flex-column align-items-center justify-content-center"
                                     style={{"marginTop": "50%"}}>
                                    <h3 className="c-large-medium">Your cart is empty!</h3>
                                    <i className="fas fa-shopping-cart c-food-icon pt-2" style={{"fontSize": "24px"}}/>
                                </div>
                                :
                                <>
                                    {
                                        cart.drink_items.map && cart.drink_items.map(item => {
                                            return <CartItem item={item}/>;
                                        })
                                    }
                                    {
                                        cart.food_items.map && cart.food_items.map(item => {
                                            return <CartItem item={item}/>;
                                        })
                                    }
                                    {
                                        cart.merch.map && cart.merch.map(item => {
                                            return <CartItem item={item}/>;
                                        })
                                    }
                                    { cart.food_items.length === 0  && cart.drink_items.length === 0  && cart.merch.length === 0 ? null : <div className="c-cart-total mt-3">
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

                                    </div>}
                                    {cart.food_items.length === 0  && cart.drink_items.length === 0  && cart.merch.length === 0 ? null :
                                    <button className="c-button d-flex align-items-center justify-content-between mt-3"
                                            onClick={(e) => checkout(e)}>
                                        <h3 className="c-medium-medium">Checkout</h3>
                                        {cart.total.toString().split(".").length > 1 ? (
                                                cart.total.toString().split(".")[1].length === 1 ?
                                                    <h5 className="c-medium-bold">${cart.total}0</h5> :
                                                    <h5 className="c-medium-bold">${cart.total}</h5>) :
                                            <h5 className="c-medium-bold">${cart.total}</h5>}
                                    </button>}
                                </>
                            }
                        </>
                    }
                </div>
            </>

    );
};

export default ShoppingCart;