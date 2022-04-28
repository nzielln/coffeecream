import React, {useRef, useState, useEffect} from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import CharOptions from "../CharOptions";
import {getCartSession, getUserSession, updateCartSession} from "../../BACKEND/DATABASE/SERVICES/AuthServices";
import {useDispatch, useSelector} from "react-redux";
import {updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useNavigate} from "react-router-dom";

export const size = [
    {
        size: "S",
        quant: "12 oz"
    },
    {
        size: "M",
        quant: "16 oz"
    },
    {
        size: "L",
        quant: "20 oz"
    }
]

const ColdDrinkDetailPage = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)

    /*const [cart, setCart] = useState({});
    const [user, setUser] = useState();
    useEffect(() => {
        getCartSession().then(r => setCart(r));
    }, []);
    useEffect(() => {
        getUserSession().then(r => setUser(r));
    }, []);*/

    const [serving_size, setSize] = useState("")
    const [shots, setShots] = useState(0)
    const caffeine = useRef();
    const shot = useRef();
    const sweetner = useRef();
    const diary = useRef();
    const flavor = useRef();
    const topping = useRef();
    const ice = useRef();

    const addToOrder = (e) => {
        e.preventDefault();
        let s;
        if (serving_size === "S") {
            s = "Small"
        } else if (serving_size === "M") {
            s = "Medium"
        } else {
            s = "Large"
        }

        e.preventDefault();
        let exp_milk = ["Oatmilk", "Coconut Milk", "Almond Milk"]
        let new_order = {
            item: item,
            count: 1,
            size: s,
            options: [
                {
                    option: topping.current.value,
                    type: "Topping",
                    cost: "0"
                },
                {
                    option: flavor.current.value,
                    type: "Flavor",
                    cost: "0"
                },
                {
                    option: diary.current.value,
                    type: "Dairy",
                    cost: exp_milk.includes(diary.current.value ) ? "0.50" : "0"
                },
                {
                    option: sweetner.current.value,
                    type: "Sweetner",
                    cost: "0"
                },
                {
                    option: caffeine.current.value,
                    type: "Caffeine",
                    cost: "0",
                },
                {
                    option: shot.current.value.toString(),
                    type: "Shots",
                    cost: shot.current.value > 2 ? (shot.current.value * 0.50).toString() : "0",
                },
                {
                    option: ice.current.value,
                    type: "Ice",
                    cost: "0",
                }
            ],
                type: "Drinks"
        }
        const sub = new_order.options.reduce((a,b) => a + parseFloat(b.cost), 0)

        let updated_cart;
        if (Object.keys(cart).length === 0) {
            updated_cart = {
                customer: user._id,
                total: (parseFloat(new_order.item.price) + sub + 0.75).toString(),
                table: 2,
                tax: 0.75,
                completed: false,
                discount: 0,
                subtotal: (parseFloat(new_order.item.price )+ 0.75).toString(),
                drink_items: [new_order],
                food_items: [],
                merch: []
            }

        } else {
            updated_cart = {
                ...cart,
                total: (parseFloat(cart.total) + parseFloat(new_order.item.price) + sub).toString(),
                subtotal: (parseFloat(cart.subtotal) + parseFloat(new_order.item.price)).toString(),
                drink_items: [...cart.drink_items, new_order]
            }
        }
        updateCart(dispatch, updated_cart)
        navigate("/cc/menu")

    }

    const increaseShot = (e) => {
        e.preventDefault()
        setShots(shots + 1)

    }

    const decreaseShot = (e) => {
        e.preventDefault()
        setShots(shots - 1)
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-4 mt-4">Choose a Size</h4>
            <div className="d-flex align-items-center justify-content-between" style={{"width": "120px"}}>
                {
                    size.map(m => {
                        return <button className="c-button-noline" onClick={(e) => {
                            e.preventDefault();
                            setSize(m);
                        }
                        }><CharOptions option={m}/></button>;
                    })
                }

            </div>
            <h4 className="c-large-bold mb-5 mt-5">Options</h4>
            <form action=""
                  onSubmit={(e) => addToOrder(e)}
                  className="c-form  d-flex flex-column align-items-center justify-content-evenly">

                {item.subtype.includes("Tea") ? null : <>
                    <select name="caffeine" ref={caffeine} id="caffeine" className="form-select mb-2">
                        <option value="">Caffeine</option>
                        <option value="Caffeine">Caffeine</option>
                        <option value="Decaf">Decaf</option>
                    </select>
                    <div className="c-shots d-flex align-items-center justify-content-between mb-2">
                        <button
                            onClick={(e) => decreaseShot(e)}
                        ><i className="fa-solid fa-minus"/></button>
                        <input type="number" ref={shot} value={shots === 0 ? "Shots" : shots} id="shots"
                               placeholder="Shots"/>
                        <button
                            onClick={(e) => increaseShot(e)}
                        ><i className="fa-solid fa-plus"/></button>
                    </div>
                </>}

                <select name="sweetner" ref={sweetner} id="sweetner" className="form-select mb-2">
                    <option value="">Sweetner</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Brown Sugar">Brown Sugar</option>
                    <option value="Splenda">Splenda</option>
                    <option value="Honey">Honey</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Cane Syrup">Cane Syrup</option>
                </select>

                <select name="dairy" ref={diary} id="dairy" className="form-select mb-2">
                    <option value="">Dairy</option>
                    <option value="Whole Milk">Whole Milk</option>
                    <option value="2% Milk">2% Milk</option>
                    <option value="1% Milk">1% Milk</option>
                    <option value="Almond Milk">Almond Milk</option>
                    <option value="OatMilk">Oatmilk</option>
                    <option value="Soymilk">Soymilk</option>
                    <option value="Coconut Milk">Coconutmilk</option>
                    <option value="Half & Half">Half & Half</option>
                </select>

                <select name="flavors" ref={flavor} id="flavors" className="form-select mb-2">
                    <option value="">Flavor</option>
                    <option value="Caramel">Caramel</option>
                    <option value="Hazelnut">Hazelnut</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Mixed Berry">Mixed Berry</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Cinnamon">Cinnamon</option>
                    <option value="Pecan">Pecan</option>
                </select>

                <select name="topping" ref={topping} id="topping" className="form-select mb-2">
                    <option value="">Topping</option>
                    <option value="Caramel">Caramel</option>
                    <option value="Cinnamon">Cinnamon</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Whipped Cream">Whipped Cream</option>
                    <option value="Foam">Cold Foam</option>
                    <option value="Sweet Foam">Vanilla Sweet Cream Cold Foam</option>
                </select>
                <select name="ice" ref={ice} id="ice" className="form-select mb-2">
                    <option value="">Ice</option>
                    <option value="Regular">Regular</option>
                    <option value="Less">Less Ice</option>
                    <option value="Extra">Extra Ice</option>
                    <option value="None">No Ice</option>
                </select>

                <button type="submit" onClick={(e) => addToOrder(e)} className="c-button c-medium-medium mt-3">Add To Cart</button>

            </form>
        </div>
    );
}

export default ColdDrinkDetailPage;