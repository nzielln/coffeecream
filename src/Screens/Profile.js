import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser, updateCart, updateUser} from "../BACKEND/DATABASE/ACTIONS/AuthActions";
import UserIcon from "../Components/UserIcon";
import FoodCard from "../Components/FoodCard";
import {Modal} from "react-bootstrap";
import {useRef} from "react";
import {getCustomerById, updateCustomer} from "../BACKEND/DATABASE/SERVICES/CustomerServices";

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const fname = useRef();
    const lname = useRef();
    const street = useRef();
    const state = useRef();
    const zipcode = useRef();
    const dob = useRef();
    const city = useRef();
    const phone = useRef();
    useEffect( () => {
        let ls = localStorage.getItem("logged_in")
        if (!ls || ls !== "Customer") {
            navigate("/login")
        }
    })
    useEffect(() => {
        async function fetch() {
            await getUser(dispatch)
        }
        fetch()
    }, [])
    const user = useSelector(state => state.user)

    if(!user._id) {
        return null
    }


    const showModal = () => {
        setModal(true);

    };
    const hideModal = () => {
        setModal(false);

    };

    const updateCus = async (e) => {
        e.preventDefault()
        let date = new Date(dob.current.value);
        let now = new Date();
        let now_str = now.toISOString().split("T")[0]
        let db_user = await getCustomerById(user._id)
        let updated_user = {
            ...user,
            first_name: fname.current.value === "" ? user.first_name : fname.current.value,
            last_name: lname.current.value === "" ? user.last_name : lname.current.value,
            phone_number: phone.current.value === "" ? user.phone_number : phone.current.value,
            age: dob.current.value !== now_str ? Math.abs(now.getFullYear() - date.getFullYear()) : user.age,
            address: {
                city: city.current.value === "" ? user.address.city : city.current.value,
                state: state.current.value === "" ? user.address.state : state.current.value,
                street: street.current.value === "" ? user.address.street : street.current.value,
                zipcode: zipcode.current.value === "" ? user.address.zipcode : zipcode.current.value,
            },
            password: db_user.password

        }

        await updateCustomer(updated_user)
        await updateUser(dispatch, updated_user)
        await getUser(dispatch)
        hideModal()
    }

    return (
        <div className="row c-profile" style={{"width": "100%", "paddingLeft": "10%", "paddingRight": "10%"}}>
            <div className="row " style={{"width": "35%"}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <UserIcon user={user}/>
                        <h3 className="ms-5 c-large-bold">{user.first_name} {user.last_name}</h3>
                    </div>
                    <button className="c-button-light d-flex align-items-center justify-content-center"
                            onClick={showModal}
                    >
                        <i className="fa-solid fa-pen d-flex align-items-center justify-content-center"/>
                    </button>

                    <Modal className="c-modal d-flex justify-content-center" show={modal} onHide={hideModal}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                            <h4 className="c-medium-bold">Edit Profile</h4>
                            <form
                                className="c-small-normal c-modal-form d-flex flex-column align-items-center justify-content-center">

                                <label className="c-table-label c-xsmall-medium" htmlFor="fname">
                                    First Name
                                    <input className="c-table-input" ref={fname} id="fname" type="text" form="profile-form"
                                           placeholder={user.first_name}
                                    />

                                </label>

                                <label className="c-table-label c-xsmall-medium" htmlFor="lname">
                                    Last Name
                                    <input className="c-table-input" ref={lname} id="lname" type="text" form="profile-form"
                                           placeholder={user.last_name}
                                    />

                                </label>

                                <label className="c-table-label c-xsmall-medium" htmlFor="street">
                                    Street
                                    <input className="c-table-input" ref={street} id="street"
                                           type="text" form="profile-form" placeholder={user.address.street}
                                    />

                                </label>
                                <label className="c-table-label c-xsmall-medium" htmlFor="city">
                                    City
                                    <input className="c-table-input" ref={city} id="city"
                                           type="text" form="profile-form" placeholder={user.address.city}
                                    />

                                </label>
                                <label className="c-table-label c-xsmall-medium" htmlFor="state">
                                    State
                                    <input className="c-table-input" ref={state} id="state"
                                           type="text" form="profile-form" placeholder={user.address.state}
                                    />

                                </label>

                                <label className="c-table-label c-xsmall-medium" htmlFor="zip">
                                    Zipcode
                                    <input className="c-table-input" ref={zipcode} id="zip"
                                           type="text" form="profile-form" placeholder={user.address.zipcode}
                                    />

                                </label>


                                <label className="c-table-label c-xsmall-medium" htmlFor="phone">
                                    Phone Number
                                    <input className="c-table-input" ref={phone} id="phone"
                                           type="text" form="profile-form" placeholder={user.phone_number}
                                    />

                                </label>

                                <label className="c-table-label c-xsmall-medium"
                                       htmlFor="date">
                                    Date of Birth
                                    <input className="c-table-input" ref={dob} id="date" value={new Date().toISOString().split("T")[0]}
                                           type="date" form="profile-form"
                                    />

                                </label>

                                <div className="d-flex justify-content-center">
                                    <input className="c-submit c-small-medium" form="profile-form" type="submit"
                                           onClick={(e) => updateCus(e)}
                                           value="Update Your Profile"/>
                                </div>

                            </form>
                        </Modal.Body>

                    </Modal>

                </div>



            </div>

            <div className="row">
                <div className="col d-flex flex-column justify-content-start">
                    <h4 className="c-medium-bold mt-5 mb-5">Details</h4>
                    <h4 className="c-medium-medium">Address</h4>
                    <h5 className="c-small-normal mb-3">{user.address.street}, {user.address.city}, {user.address.state}</h5>
                    <h4 className="c-medium-medium">Phone Number</h4>
                    <h5 className="c-small-normal mb-3">{user.phone_number}</h5>
                    <h4 className="c-medium-medium">Age</h4>
                    <h5 className="c-small-normal">{user.age}</h5>

                </div>
                <div className="col d-flex flex-column">
                    <h4 className="c-medium-medium">Recent Orders</h4>
                    {user.orders.length > 0 ?
                        <div className="c-menu-grid-four">
                            {
                                user.orders[0].drink_items.length > 0 ?
                                    <FoodCard item={user.orders[0].drink_items[0].item}/>
                                    : null
                            }
                            {
                                user.orders[0].food_items.length > 0 ?
                                    <FoodCard item={user.orders[0].food_items[0].item}/>
                                    : null
                            }
                            {
                                user.orders[0].merch.length > 0 ?
                                    <FoodCard item={user.orders[0].merch[0].item}/>
                                    : null
                            }
                            </div>
                        : null

                    }

                </div>

            </div>


        </div>
    );
}

export default Profile;