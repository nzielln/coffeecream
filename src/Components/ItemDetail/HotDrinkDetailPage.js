import React from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import CharOptions from "../CharOptions";
import {useRef, useState, useEffect} from "react";
import {size} from "./ColdDrinkDetailPage"
import {useDispatch, useSelector} from "react-redux";
import {getCart, getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useNavigate} from "react-router-dom";

const HotDrinkDetailPage = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetch() {
            getCart(dispatch)
        }
        fetch()
    }, [])
    useEffect(() => {
        async function fetch() {
            getUser(dispatch)
        }
        fetch()
    }, [])
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)

    const [serving_size, setSize] = useState("M")
    const [shots, setShots] = useState(0)
    const [teas, setTeas] = useState(0)
    const caffeine = useRef();
    const shot = useRef();
    const tea = useRef();
    const sweetner = useRef();
    const diary = useRef();
    const flavor = useRef();
    const topping = useRef();

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
                    option: caffeine.current ? caffeine.current.value : "",
                    type: "Caffeine",
                    cost: "0",
                },
                {
                    option: shot.current ? shot.current.value.toString() : "",
                    type: "Shots",
                    cost: shots.current ? (shot.current.value > 2 ? (shot.current.value * 0.50).toString() : "0") : "0",
                },
                {
                    option: tea.current !== undefined ? (tea.current.value === "Tea Bags" ? "0" : tea.current.value.toString()) : "0",
                    type: "Tea Bags",
                    cost: "0",
                }
            ],
            type: "Drinks"
        }

        const sub = new_order.options.reduce((a,b) => a + parseFloat(b.cost), 0)
        let updated_cart;
        if (Object.keys(cart).length < 2) {
            updated_cart = {
                ...cart,
                customer: user._id,
                total: (parseFloat(new_order.item.price) + sub + 0.75).toString(),
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
                subtotal:(parseFloat(cart.subtotal) + parseFloat(new_order.item.price)).toString(),
                drink_items: [...cart.drink_items, new_order]
            }


        }
        if(!cart.table) {
            navigate("/tables", {state: {new_cart: updated_cart}})
        } else {
            updateCart(dispatch, updated_cart)
            navigate("/cc/menu")
        }


    }

    const increaseShot = (e) => {
        e.preventDefault()
        setShots(shots + 1)
    }

    const decreaseShot = (e) => {
        e.preventDefault()
        setShots(shots - 1)
    }

    const increaseTea = (e) => {
        e.preventDefault()
        setTeas(teas + 1)
    }

    const decreaseTea = (e) => {
        e.preventDefault()
        setTeas(teas - 1)
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
            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly"
                  onSubmit={(e) => addToOrder(e)}
            >

                {item.subtype.includes("Tea") ? null : <>
                    <select name="caffeine" ref={caffeine} id="caffeine" className="form-select mb-2">
                        <option value="Caffeine">Caffeine</option>
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
                    <option value="None">Sweetner</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Brown Sugar">Brown Sugar</option>
                    <option value="Splenda">Splenda</option>
                    <option value="Honey">Honey</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Cane Syrup">Cane Syrup</option>
                </select>

                <select name="dairy" ref={diary} id="dairy" className="form-select mb-2">
                    <option value="Whole Milk">Dairy</option>
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
                    <option value="None">Flavor</option>
                    <option value="Caramel">Caramel</option>
                    <option value="Hazelnut">Hazelnut</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Mixed Berry">Mixed Berry</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Cinnamon">Cinnamon</option>
                    <option value="Pecan">Pecan</option>
                </select>

                <select name="topping" ref={topping} id="topping" className="form-select mb-2">
                    <option value="None">Topping</option>
                    <option value="Caramel">Caramel</option>
                    <option value="Cinnamon">Cinnamon</option>
                    <option value="Mocha">Mocha</option>
                    <option value="Whipped Cream">Whipped Cream</option>
                    <option value="Foam">Cold Foam</option>
                    <option value="Sweet Foam">Vanilla Sweet Cream Cold Foam</option>
                </select>
                {
                    item.subtype === "Hot Tea" ?
                        <div className="c-shots d-flex align-items-center justify-content-between mb-2">
                            <button
                                onClick={(e) => decreaseTea(e)}
                            ><i className="fa-solid fa-minus"/></button>
                            <input type="number" ref={tea} value={teas === 0 ? "Tea Bags" : teas} id="tea" placeholder="Tea Bags"/>
                            <button
                                onClick={(e) => increaseTea(e)}
                            ><i className="fa-solid fa-plus"/></button>
                        </div>
                        : null
                }


                <button type="submit" className="c-button c-medium-medium mt-3" onClick={(e) => addToOrder(e)}>Add To Cart</button>

            </form>
        </div>
    );
}

export default HotDrinkDetailPage;