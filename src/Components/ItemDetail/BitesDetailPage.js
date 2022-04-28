import React, {useRef} from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import WordOptions from "../WordOptions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useNavigate} from "react-router-dom";

const BitesDetailPage = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        async function fetch() {
            await getUser(dispatch);
        }

        fetch();
    }, []);

    const addToOrder = (e) => {
        e.preventDefault();
        let new_order = {
            item: item,
            count: 1,
            options: [
            ],
            type: "Food"
        };

        const sub = new_order.options.reduce((a, b) => a + parseFloat(b.cost), 0);
        let updated_cart;
        if (Object.keys(cart).length === 0) {
            updated_cart = {
                customer: user._id,
                total: (parseFloat(new_order.item.price) + sub + 0.75).toString(),
                table: 2,
                tax: 0.75,
                completed: false,
                discount: 0,
                subtotal: (parseFloat(new_order.item.price) + 0.75).toString(),
                drink_items: [],
                food_items: [new_order],
                merch: []
            };
        } else {
            updated_cart = {
                ...cart,
                total: (parseFloat(cart.total) + parseFloat(new_order.item.price) + sub).toString(),
                subtotal: (parseFloat(cart.subtotal) + parseFloat(new_order.item.price)).toString(),
                food_items: [...cart.food_items, new_order]
            };
        }
        updateCart(dispatch, updated_cart);
        navigate("/cc/menu")

    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <form action=""
                  onSubmit={(e) => addToOrder(e)}
                  className="c-form d-flex flex-column align-items-center justify-content-evenly">

                <button type="submit"
                        className="c-button c-medium-medium mt-3"
                        onClick={(e) => addToOrder(e)}
                >Add To Cart
                </button>

            </form>
        </div>
    );
};

export default BitesDetailPage;