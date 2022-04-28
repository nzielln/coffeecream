import React from "react";
import CartItem from "./CartItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCart, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {createOrder} from "../../BACKEND/DATABASE/SERVICES/OrderServices";
import {useNavigate} from "react-router-dom";

const ShoppingCart = () => {
    //const [cart, setCart] = useState({});
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart)
    console.log(cart)
    const [user, setUser] = useState();
    const dispatch = useDispatch()
    useEffect(   () => {
        async function fetch() {
            await getCart(dispatch);
        }
        fetch();
    }, [])

    console.log(cart)
    let total = parseFloat(cart.total) + cart.tax

    /*useEffect(() => {
        getCartSession().then(r => setCart(r));
    }, []);
    useEffect(() => {
        getUserSession().then(r => setUser(r));
    }, []);*/

    const checkout = (e) => {
        e.preventDefault();
        createOrder(cart).then(r => console.log(r))
        updateCart(dispatch, {})
        navigate("/cc/menu")

    }
    return (
        <>
            <div className="c-cart" style={{"height": "100%"}}>
                <h3 className="c-cart-title c-large-bold">Your Order</h3>
                {Object.keys(cart).length === 0 ?
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
                        <button className="c-button d-flex align-items-center justify-content-between mt-3"
                                onClick={(e) => checkout(e)}
                        >
                            <h3 className="c-medium-medium">Checkout</h3>
                            {cart.total.toString().split(".").length > 1 ?(
                                cart.total.toString().split(".")[1].length === 1?
                                <h5 className="c-medium-bold">${cart.total}0</h5> :
                                <h5 className="c-medium-bold">${cart.total}</h5>) : <h5 className="c-medium-bold">${cart.total}</h5>}
                        </button>
                    </>
                    }
            </div>
        </>

    );
};

export default ShoppingCart;