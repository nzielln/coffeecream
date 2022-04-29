import React from "react";
import {Modal} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {deleteMenu, getMenus, updateMenu} from "../../BACKEND/DATABASE/ACTIONS/MenuActions";
import {useDispatch, useSelector} from "react-redux";

const Item = ({item}) => {
    const [c_item, setItem] = useState(item)
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getMenus(dispatch);
        }

        fetch();
    }, []);
    const menu = useSelector(state => state.menu);

    const name = useRef();
    const price = useRef();
    const dietary = useRef();
    const calories = useRef();
    const description = useRef();
    const ingredients = useRef();

    const showModal = () => {
        setModal(true);

    };
    const hideModal = () => {
        setModal(false);

    };
    const removeItem = async (e) => {
        e.preventDefault();
        await deleteMenu(dispatch, c_item._id);
        setItem(null)
    };

    const updateItem = async (e) => {
        e.preventDefault();
        let new_item = {
            ...item,
            name: name.current.value ? name.current.value : c_item.name,
            desc: description.current.value ? description.current.value : c_item.desc,
            ingredients: ingredients.current.value ? ingredients.current.value.split(", ") : c_item.ingredients,
            price: price.current.value ? price.current.value : c_item.price,
            nutritional_information: {
                calories: calories.current.value ? calories.current.value : c_item.nutritional_information.calories,
                dietary_group: dietary.current.value ? dietary.current.value : c_item.nutritional_information.dietary_group
            },
        };
        await updateMenu(dispatch, new_item);
        hideModal();
    };

    if (!c_item) {
        return null;
    }
    return (
        <tr className="c-small-normal c-table-row">
            <td>{c_item.name}</td>
            <td>{c_item.type}</td>
            <td>${c_item.price.toString().split(".")[1].length === 1 ?
                c_item.price + 0 : c_item.price}
            </td>
            <td>{c_item.nutritional_information.dietary_group}</td>
            <td>{c_item.desc}</td>
            <td className="c-button-row c-small-normal">
                <div className="d-flex align-items-center justify-content-around">
                    <button className="c-button-noline d-flex align-items-center justify-content-center"
                            onClick={showModal}
                    >
                        <i className="fa-solid fa-pen d-flex align-items-center justify-content-center"/>
                    </button>
                    <Modal className="c-modal d-flex justify-content-center" show={modal} onHide={hideModal}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                            <h4 className="c-medium-bold">Edit Item</h4>
                            <form
                                className="c-small-normal c-modal-form d-flex flex-column align-items-center justify-content-center">

                                <label className="c-table-label c-xsmall-medium" htmlFor="name">
                                    Name
                                    <input className="c-table-input" ref={name} id="name" type="text" form="user-form"
                                           placeholder={c_item.name}
                                    />

                                </label>
                                <label className="c-table-label c-xsmall-medium" htmlFor="price">
                                    Price
                                    <input className="c-table-input" ref={price} id="price"
                                           type="text" form="user-form" placeholder={`$${c_item.price}`}
                                    />

                                </label>


                                <label className="c-table-label c-xsmall-medium" htmlFor="diet">
                                    Dietary Group
                                    <select className="c-table-input" ref={dietary} name="img" id="img"
                                            form="item-form">
                                        <option className="c-table-input" value="">Select Dietary Group</option>
                                        <option className="c-table-input" value="None">None</option>
                                        <option className="c-table-input" value="Vegan">Vegan</option>
                                        <option className="c-table-input" value="Vegetarian">Vegetarian</option>
                                        <option className="c-table-input" value="Gluten Free">Gluten Free</option>
                                        <option className="c-table-input" value="Dairy Free">Dairy Free</option>
                                        <option className="c-table-input" value="Kosher">Kosher</option>
                                        <option className="c-table-input" value="Halal">Hala</option>

                                    </select>
                                </label>

                                <label className="c-table-label c-xsmall-medium"
                                       htmlFor="calories">
                                    Calories
                                    <input className="c-table-input" ref={calories} id="caloried"
                                           type="text" form="user-form"
                                    />

                                </label>

                                <label className="c-table-label c-xsmall-medium" htmlFor="desc"> Description
                                    <input className="c-table-input" ref={description}
                                           id="desc" type="tel" form="user-form" placeholder={c_item.desc}
                                    />
                                </label>


                                <label className="c-table-label c-xsmall-medium" htmlFor="ingredients"> Ingredients
                                    <textarea className="c-textarea c-edit mb-4" ref={ingredients} id="ingredients"
                                              placeholder={c_item.ingredients.join(", ")}
                                              rows="5" form="item-form"/>

                                </label>


                                <div className="d-flex justify-content-center">
                                    <input className="c-submit c-small-medium" form="user-form" type="submit"
                                           onClick={(e) => updateItem(e)}
                                           value="Update Item"/>
                                </div>

                            </form>
                        </Modal.Body>

                    </Modal>

                    <button className="c-button-noline d-flex align-items-center justify-content-center"
                            onClick={(e) => removeItem(e)}
                    >
                        <i className="fa-regular fa-trash-can d-flex align-items-center justify-content-center"/>
                    </button>
                </div>
            </td>

        </tr>

    );
};

export default Item;