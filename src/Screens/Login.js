import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {signInCustomer, signInEmployee} from "../BACKEND/DATABASE/SERVICES/AuthServices";

const LogIn = () => {
    const navigate = useNavigate()
    const [c_display, setCDisplay] = useState()
    const [e_display, setEDisplay] = useState("")
    const [type, setType] = useState("")
    const email = useRef();
    const password = useRef();

    const setCustomer = () => {
        setEDisplay("none")
        setType("Customer")

    }

    const setEmployee = () => {
        setCDisplay("none")
        setType("Employee")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const creds = {
            email: email.current.value,
            password: password.current.value
        }

        if (type === "Employee") {
            signInEmployee(creds).then(r => console.log(r))
            navigate("/dashboard")
        } else {
            signInCustomer(creds).then(r => console.log(r))
            navigate("/cc/menu")
        }

    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <div className="d-flex mb-3 align-items-center justify-content-evenly mb-5" style={{"width": "30%"}}>
                <button type="submit" className="c-button-small c-medium-medium mt-3" style={{"display": `${c_display}`}} onClick={() => setCustomer()}>Customer</button>
                <button type="submit" className="c-button-small c-medium-medium mt-3" style={{"display": `${e_display}`}} onClick={() => setEmployee()}>Employee</button>

            </div>
            <h4 className="c-large-medium mb-4">Log in</h4>

            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly" onSubmit={(event) => handleSubmit(event)}>
                    <input type="email"
                           id="email"
                           className="c-input mb-2"
                           placeholder="Enter email"
                           ref={email}
                    />
                    <input type="password"
                           id="password"
                           className="c-input mb-2"
                           placeholder="Password"
                           ref={password}
                    />

                <button type="submit" className="c-button c-medium-medium mt-3" onClick={(event) => handleSubmit(event)}>Log in</button>

            </form>
            <h5 className="c-small-normal mt-5">New here? <Link to="/cc/create" className="c-link c-small-medium">Create an account</Link></h5>

        </div>
);
}

export default LogIn;