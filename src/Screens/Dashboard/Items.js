import React from "react";
import Item from "../../Components/Dashboard/Item";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMenus, createMenu} from "../../BACKEND/DATABASE/ACTIONS/MenuActions";
import {useRef} from "react";
import {Modal} from "react-bootstrap";

const Items = () => {
    const [modal, setModal] = useState(false);
    const [all, setAll] = useState("-light");
    const [drinks, setDrinks] = useState("");
    const [food, setFood] = useState("");
    const [merch, setMerch] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getMenus(dispatch);
        }

        fetch();
    }, []);
    const menu = useSelector(state => state.menu);

    const [fullMenu, setFullMenu] = useState(menu);

    //FOR FORM
    const name = useRef();
    const category = useRef();
    const price = useRef();
    const dietary = useRef();
    const calories = useRef();
    const description = useRef();
    const ingredients = useRef();
    const sub = useRef();

    const setA = (e) => {
        setAll(all === "" ? "-light" : "");
        setFood("");
        setDrinks("");
        setMerch("");
        setFullMenu(menu);
    };

    const setD = (e) => {
        setDrinks(drinks === "" ? "-light" : "");
        setFood("");
        setAll("");
        setMerch("");
        setFullMenu(menu.filter(o => o.type === "Drinks"));

    };

    const setM = (e) => {
        setMerch(merch === "" ? "-light" : "");
        setFood("");
        setAll("");
        setDrinks("");
        setFullMenu(menu.filter(o => o.type === "Merch"));

    };
    const setF = (e) => {
        setFood(food === "" ? "-light" : "");
        setDrinks("");
        setAll("");
        setMerch("");
        setFullMenu(menu.filter(o => o.type === "Foods"));

    };
    let food_options = <label className="c-table-label" htmlFor="sub">
        <select className="c-table-input" ref={sub} name="img" id="sub"
                form="item-form">
            <option className="c-table-input" value="">Subtype</option>
            <option className="c-table-input" value="Sandwich">Sandwich</option>
            <option className="c-table-input" value="Bowl">Bowl</option>
            <option className="c-table-input" value="Plate">Plate</option>
            <option className="c-table-input" value="Bites">Bites</option>
            <option className="c-table-input" value="Pastry">Pastry</option>
            <option className="c-table-input" value="Soup">Soup</option>

        </select>
    </label>

    let drink_options = <label className="c-table-label" htmlFor="sub">
        <select className="c-table-input" ref={sub} name="img" id="sub"
                form="item-form">
            <option className="c-table-input" value="">Subtype</option>
            <option className="c-table-input" value="Hot Coffee">Hot Coffee</option>
            <option className="c-table-input" value="Cold Coffee">Cold Coffee</option>
            <option className="c-table-input" value="Hot Tea">Hot Tea</option>
            <option className="c-table-input" value="Cold Tea">Cold Tea</option>
            <option className="c-table-input" value="Hot Drink">Hot Drink</option>
            <option className="c-table-input" value="Cold Drink">Cold Drink</option>

        </select></label>;
    let merch_options = <label className="c-table-label" htmlFor="sub">
        <select className="c-table-input" ref={sub} name="img" id="sub"
                form="item-form">
            <option className="c-table-input" value="">Subtype</option>
            <option className="c-table-input" value="Mugs">Mugs</option>
            <option className="c-table-input" value="Bottles">Bottles</option>
            <option className="c-table-input" value="Bags">Bags</option>
            <option className="c-table-input" value="Supplies">Supplies</option>
            <option className="c-table-input" value="Gifts">Gifts</option>

        </select>
    </label>;
    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);

    };

    const addItem = async (e) => {
        console.log("HERE")
        e.preventDefault();
        hideModal();
        let item = {
            name: name.current.value,
            desc: description.current.value,
            ingredients: ingredients.current.value.split(", "),
            image: "item.jpeg",
            price: price.current.value,
            nutritional_information: {
                calories: calories.current.value,
                dietary_group: dietary.current.value
            },
            type: category.current.value,
            subtype: sub.current.value
        };
        await createMenu(dispatch, item)
        setFullMenu(menu)

    };
    return (
        <div style={{"width": "100%"}}>
            <div className="d-flex " style={{"width": "40%"}}>
                <button className={`c-button${all} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setA(e)}
                >All
                </button>
                <button className={`c-button${drinks} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setD(e)}
                >Drinks
                </button>
                <button className={`c-button${food} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setF(e)}
                >Food
                </button>
                <button className={`c-button${merch} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setM(e)}
                >Merchandise
                </button>

            </div>
            <form action="" id="item-form" onSubmit={(e) => addItem(e)}/>

            <table className="c-items-table border-top" style={{"width": "100%"}}>
                <thead>
                <tr>
                    <th scope="col" className="c-medium-medium">Name</th>
                    <th scope="col" className="c-medium-medium">Category</th>
                    <th scope="col" className="c-medium-medium">Price</th>
                    <th scope="col" className="c-medium-medium">Dietary Group</th>
                    <th scope="col" className="c-medium-medium">Description</th>
                    <th scope="col" id="c-icon" className="c-medium-medium">Icons</th>
                </tr>
                </thead>
                <tbody className="c-table-content">
                {
                    fullMenu.map(item => {
                        return <Item item={item}/>;
                    })
                }
                <tr className="c-small-normal c-table-row">

                    <td><label className="c-table-label" htmlFor="name">
                        <input className="c-table-input" id="name" type="text" form="item-form"
                               placeholder="+"
                               ref={name}
                        />
                    </label></td>
                    <td><label className="c-table-label" htmlFor="category">
                        <select className="c-table-input" ref={category} name="img" id="img"
                                form="item-form">
                            <option className="c-table-input" value="">Type</option>
                            <option className="c-table-input" value="Drinks">Drink</option>
                            <option className="c-table-input" value="Foods">Foods</option>
                            <option className="c-table-input" value="Merch">Merch</option>

                        </select>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="price">
                        <input className="c-table-input" id="price" type="text" form="item-form" placeholder="+"
                               ref={price}/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="diet">
                        <select className="c-table-input" ref={dietary} name="img" id="img"
                                form="item-form">
                            <option className="c-table-input" value=""/>
                            <option className="c-table-input" value="None">None</option>
                            <option className="c-table-input" value="Vegan">Vegan</option>
                            <option className="c-table-input" value="Vegetarian">Vegetarian</option>
                            <option className="c-table-input" value="Gluten Free">Gluten Free</option>
                            <option className="c-table-input" value="Dairy Free">Dairy Free</option>
                            <option className="c-table-input" value="Kosher">Kosher</option>
                            <option className="c-table-input" value="Halal">Hala</option>

                        </select>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="desc">
                        <input className="c-table-input"
                               form="item-form"
                               id="desc"
                               type="text"
                               placeholder="+"
                               ref={description}/>
                    </label></td>
                    <td>
                        <div>
                            <button className="c-submit-input c-small-medium c-button" type="submit"
                                   onClick={showModal}
                            >Add New Item</button>
                        </div>
                        <Modal className="c-modal d-flex justify-content-center" show={modal} onHide={() => hideModal()}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                                <h4 className="c-medium-bold">Add Nutritional Information</h4>
                                <h4 className="c-small-medium">{name.current && name.current.value}</h4>
                                <form
                                    className="c-small-normal c-modal-form d-flex flex-column align-items-center justify-content-center">
                                    {category.current && category.current.value === "Foods" ? food_options : null}
                                    {category.current && category.current.value === "Drinks" ? drink_options : null}
                                    {category.current && category.current.value === "Merch" ? merch_options : null}
                                    <label className="c-table-label" htmlFor="fname">
                                        <input className="c-table-input" ref={calories} id="calories" type="text"
                                               form="item-form"
                                               placeholder="Calories"
                                               onFocus={(e) => e.target.placeholder === ""}
                                        />
                                    </label>
                                    <label className="c-table-label d-flex flex-column align-items-center "
                                           htmlFor="lname">
                                        <h4 className="c-medium-medium mb-3 mt-2">Ingredients</h4>
                                        <textarea className="c-textarea mb-4" ref={ingredients} id="ingredients"
                                                  placeholder="Enter ingredients, separated by a comma."
                                                  rows="5" form="item-form"
                                        />
                                    </label>
                                    <div className="d-flex justify-content-center" style={{"width": "85px"}}>
                                        <input className="c-submit c-small-medium" form="item-form" type="submit"
                                               onClick={(e) => addItem(e)}
                                               value="Save"/>
                                    </div>

                                </form>
                            </Modal.Body>

                        </Modal>


                    </td>

                </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Items;