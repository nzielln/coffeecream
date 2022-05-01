import React, {useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {signInCustomer, signInEmployee} from "../BACKEND/DATABASE/SERVICES/AuthServices";
import HorizontalHeader from "../Components/Menu/HorizontalHeader";
import {useDispatch} from "react-redux";
import {updateCart} from "../BACKEND/DATABASE/ACTIONS/AuthActions";

const LogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [c_display, setCDisplay] = useState()
    const [e_display, setEDisplay] = useState("")
    const [type, setType] = useState("Customer")
    const [msg, setMsg] = useState("")
    const email = useRef();
    const password = useRef();
    if (localStorage.getItem("logged_in")) {
        navigate("/home")
    }

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
            signInEmployee(creds).then(r => console.log()).catch((err) => {
                if(err.response.status === 404) {
                    setMsg("Invalid credentials. Please check your email and password and try again.")
                }
            })
            localStorage.setItem("logged_in", type)
            navigate("/dashboard")
        } else {
            signInCustomer(creds).then(() => {
                localStorage.setItem("logged_in", type)
                if (location.state && location.state.new_cart) {
                    updateCart(dispatch, location.state.new_cart).then(() =>
                    {
                        navigate("/cc/menu")
                    })
                } else {
                    navigate("/tables")
                }
            }).catch((err) => {
                if(err.response.status === 404) {
                    setMsg("Invalid credentials. Please check your email and password and try again.")
                }
            })
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
                    <h4 className="c-xsmall-normal">{msg}</h4>

                </form>
                <h5 className="c-small-normal mt-5">New here? <Link to="/create" className="c-link c-small-medium">Create an account</Link></h5>
            </div>

);
}

export default LogIn;