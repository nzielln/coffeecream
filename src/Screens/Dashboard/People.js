import React, {useRef, useState} from "react";
import Person from "../../Components/Dashboard/Person";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    getEmployees,
    signUpEmployee,
    updateEmployee,
    deleteEmployee
} from "../../BACKEND/DATABASE/ACTIONS/EmployeeActions";
import {getCafe} from "../../BACKEND/DATABASE/ACTIONS/CafeActions";
import {Modal} from "react-bootstrap";

const People = () => {
    const [modal, setModal] = useState(false);
    const [all, setAll] = useState("-light");
    const [manager, setManager] = useState("");
    const [crew, setCrew] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getEmployees(dispatch);
        }

        fetch();
    }, []);
    useEffect(() => {
        async function fetch() {
            await getCafe(dispatch);
        }

        fetch();
    }, []);
    const employees = useSelector(state => state.employees);
    const cafe = useSelector(state => state.cafe);
    console.log(cafe)

    const [people, setPeople] = useState(employees);

    //FOR FORM
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const phone = useRef();
    const manages = useRef();
    const img = useRef()
    const frm = useRef()

    const setA = (e) => {
        setAll(all === "" ? "-light" : "");
        setCrew("");
        setManager("");
        setPeople(employees);
    };

    const setC = (e) => {
        setCrew(crew === "" ? "-light" : "");
        setAll("");
        setManager("");
        setPeople(employees.filter(o => !o.is_manager));

    };

    const setM = (e) => {
        setManager(manager === "" ? "-light" : "");
        setAll("");
        setCrew("");
        setPeople(employees.filter(o => o.is_manager));

    };


    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);

    };
    const addUser = async (e) => {
        e.preventDefault();
        let user = {
            first_name: fname.current.value,
            last_name: lname.current.value,
            email: email.current.value,
            cafe: manages.current.value ? manages.current.value : cafe[0].name,
            phone_number: phone.current.value.toString(),
            image: img.current.value,
            is_manager: manages.current.value !== "",
            password: "password"
        }
        signUpEmployee(dispatch, user).then(() => {
            setPeople(employees)
        }).catch((err) => {
            if(err.response.status === 409) {
                showModal()
            }
        })
        frm.current.reset()

    }

    return (
        <div style={{"width": "100%"}}>
            <div className="d-flex " style={{"width": "40%"}}>
                <button className={`c-button${all} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setA(e)}
                >All
                </button>
                <button className={`c-button${manager} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setM(e)}
                >Managers
                </button>
                <button className={`c-button${crew} c-less-padding c-medium-medium m-2`}
                        onClick={(e) => setC(e)}
                >Crew
                </button>

            </div>
            <form action="" id="user-form" ref={frm} onSubmit={(e) => addUser(e)}/>
            <table className="c-items-table border-top" style={{"width": "100%"}}>
                <thead>
                <tr>
                    <th scope="col" id="c-img" className="c-medium-medium">Image</th>
                    <th scope="col" className="c-medium-medium">First Name</th>
                    <th scope="col" className="c-medium-medium">Last Name</th>
                    <th scope="col" className="c-medium-medium">Email</th>
                    <th scope="col" className="c-medium-medium">Phone Number</th>
                    <th scope="col" className="c-medium-medium">Manages</th>
                    <th scope="col" id="c-icon" className="c-medium-medium">Icons</th>
                </tr>
                </thead>
                <tbody className="c-table-content">
                {
                    people.map(person => {
                        return <Person person={person} setPeople={setPeople}/>;
                    })
                }
                <tr className="c-small-normal c-table-row">

                    <td>


                        <select className="c-table-input" ref={img} name="img" id="img" form="user-form">
                            <option className="c-table-input" value=""/>
                            <option className="c-table-input" value="lee.jpeg">Lee</option>
                            <option className="c-table-input" value="dni.jpeg">Daniel</option>
                            <option className="c-table-input" value="bo.jpeg">Bo</option>
                            <option className="c-table-input" value="jean.jpeg">Jean</option>
                            <option className="c-table-input" value="sophie.jpeg">Sophie</option>
                            <option className="c-table-input" value="john.jpeg">John</option>
                            <option className="c-table-input" value="kim.jpeg">Kim</option>
                            <option className="c-table-input" value="person.jpeg">Jane</option>
                            <option className="c-table-input" value="lili.jpeg">Lily</option>
                            <option className="c-table-input" value="joshs.jpeg">Josh</option>

                        </select>
                    </td>
                    <td><label className="c-table-label" htmlFor="fname">
                        <input className="c-table-input" ref={fname} id="fname" type="text" form="user-form"
                               placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="lname">
                        <input className="c-table-input" ref={lname} id="lname" type="text" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="email">
                        <input className="c-table-input" ref={email} id="email" type="email" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="phone">
                        <input className="c-table-input" ref={phone}
                               id="phone" type="tel" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="manager">
                        <input className="c-table-input"
                               ref={manages}
                               form="user-form"
                               id="manager"
                               type="text"
                               placeholder="+"/>
                    </label></td>
                    <td >
                        <div className="d-flex align-items-center justify-content-center">
                            <input className="c-submit-input c-small-medium" form="user-form" type="submit"
                                   onClick={(e) => addUser(e)}
                                   value="Add Employee"/>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>
            <div>
            </div>
            <Modal className="c-modal d-flex justify-content-center" show={modal} onHide={() => hideModal()}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="c-medium-medium">Employee email is already in use. Please try again.</h4>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default People;
