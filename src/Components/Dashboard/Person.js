import React, {useRef, useState} from "react";
import UserIconSmall from "../UserIconSmall";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteEmployee, getEmployees, updateEmployee} from "../../BACKEND/DATABASE/ACTIONS/EmployeeActions";
import {Modal} from "react-bootstrap";
import {parsePath} from "react-router-dom";

const Person = ({person, setPeople}) => {
    const [c_person, setPerson] = useState(person)
    const [modal, setModal] = useState(false)
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const phone = useRef();
    const manages = useRef();
    const img = useRef();

    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getEmployees(dispatch);
        }

        fetch();
    }, []);
    const employees = useSelector(state => state.employees);

    const removeEmployee = async (e) => {
        e.preventDefault();
        await deleteEmployee(dispatch, c_person.email);
        setPerson(null)
    };

    if (!person) {
        return null;
    }

    const updateUser = async (e) => {
        e.preventDefault();
        let user = {
            ...person,
            first_name: fname.current.value ? fname.current.value : c_person.first_name,
            last_name: lname.current.value ? lname.current.value : c_person.last_name,
            email: email.current.value ? email.current.value : c_person.email,
            phone_number: phone.current.value ? phone.current.value : c_person.phone_number,
            image: img.current.value ? img.current.value : c_person.image,
            is_manager: manages.current.value ? manages.current.value : c_person.is_manager,
        }
        await updateEmployee(dispatch, user);
        hideModal()
    };

    const showModal = () => {
        setModal(true)

    }
    const hideModal = () => {
        setModal(false)

    }

    return (
        <>
            <tr className="c-small-normal c-table-row">

                <td>
                    <UserIconSmall user={person}/>
                </td>
                <td>{c_person.first_name}</td>
                <td>{c_person.last_name}</td>
                <td>{c_person.email}</td>
                <td>{c_person.phone_number}</td>
                <td>{c_person.is_manager ? c_person.cafe : null}</td>
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
                                <h4 className="c-medium-bold">Edit Employee</h4>
                                <form
                                    className="c-small-normal c-modal-form d-flex flex-column align-items-center justify-content-center">
                                    <select className="c-table-input" ref={img} name="img" id="img"
                                            form="user-form">
                                        <option className="c-table-input" value="">Select an image</option>
                                        <option className="c-table-input" value="lee.jpeg">Lee</option>
                                        <option className="c-table-input" value="dni.jpeg">Daniel</option>
                                        <option className="c-table-input" value="bo.jpeg">Bo</option>
                                        <option className="c-table-input" value="jean.jpeg">Jean</option>
                                        <option className="c-table-input" value="sophie.jpeg">Sophie</option>
                                        <option className="c-table-input" value="john.jpeg">John</option>
                                        <option className="c-table-input" value="kim.jpeg">Kim</option>
                                        <option className="c-table-input" value="c_person.jpeg">Jane</option>
                                        <option className="c-table-input" value="lili.jpeg">Lily</option>
                                        <option className="c-table-input" value="joshs.jpeg">Josh</option>

                                    </select>
                                    <label className="c-table-label" htmlFor="fname">
                                        <input className="c-table-input" ref={fname} id="fname" type="text" form="user-form"
                                               placeholder={c_person.first_name}
                                               onFocus={(e) => e.target.placeholder === "" }
                                        />
                                    </label>
                                    <label className="c-table-label" htmlFor="lname">
                                        <input className="c-table-input" ref={lname} id="lname"
                                               type="text" form="user-form" placeholder={c_person.last_name}
                                               onFocus={(e) => e.target.placeholder === "" }
                                        />
                                    </label>
                                    <label className="c-table-label" htmlFor="email">
                                        <input className="c-table-input" ref={email} id="email"
                                               type="email" form="user-form" placeholder={c_person.email}
                                               onFocus={(e) => e.target.placeholder === "" }
                                        />
                                    </label>
                                    <label className="c-table-label" htmlFor="phone">
                                        <input className="c-table-input" ref={phone}
                                               id="phone" type="tel" form="user-form" placeholder={c_person.phone_number}
                                               onFocus={(e) => e.target.placeholder === "" }
                                        />
                                    </label>
                                    <label className="c-table-label" htmlFor="manager">
                                        <input
                                               className="c-table-input"
                                               onFocus={(e) => e.target.placeholder === "" }
                                               ref={manages}
                                               placeholder={c_person.is_manager.toString().charAt(0).toUpperCase() + c_person.is_manager.toString().substring(1)}
                                               form="user-form"
                                               id="manager"
                                               type="text"/>
                                    </label>
                                    <div className="d-flex justify-content-center">
                                        <input className="c-submit c-small-medium" form="user-form" type="submit"
                                               onClick={(e) => updateUser(e)}
                                               value="Update Employee"/>
                                    </div>

                                </form>
                            </Modal.Body>

                        </Modal>

                        <button className="c-button-noline d-flex align-items-center justify-content-center"
                                onClick={(e) => removeEmployee(e)}
                        >
                            <i className="fa-regular fa-trash-can d-flex align-items-center justify-content-center"/>
                        </button>
                    </div>
                </td>

            </tr>

        </>

    );
};

export default Person;

