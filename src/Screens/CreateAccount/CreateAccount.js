import React, {useRef} from "react";
import {Link, useNavigate} from "react-router-dom";

const CreateAccount = () => {
    const nav = useNavigate();
    const fname = useRef()
    const lname = useRef()
    const email = useRef()
    const password = useRef()
    const phone = useRef()
    const dob = useRef()
    const street = useRef()
    const city = useRef()
    const state = useRef()
    const zip = useRef()

    const clickHandler = (e) => {
        e.preventDefault();
        let date = new Date(dob.current.value)
        let now = new Date()
        const user = {
            first_name: fname.current.value,
            last_name: lname.current.value,
            phone_number: phone.current.value,
            email: email.current.value,
            image: "person.jpeg",
            password: password.current.value,
            age: Math.abs(now.getFullYear() - date.getFullYear()),
            address: {
                city: city.current.value,
                state: state.current.value,
                street: street.current.value,
                zipcode: zip.current.value,
            }

        }
        nav("/cc/payment", {state: {user: user}});
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <h4 className="c-large-medium mb-0">Enter Personal Details</h4>
            <h5 className="c-small-normal mt-1 mb-4">For a more personalized experience.</h5>

            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly" onSubmit={(e) => clickHandler(e)}>
                <input type="text"
                       id="fname"
                       className="c-input mb-2"
                       placeholder="First Name"
                       ref={fname}
                />
                <input type="text"
                       id="lname"
                       className="c-input mb-2"
                       placeholder="Last Name"
                       ref={lname}
                />
                <input type="text"
                       id="email"
                       className="c-input mb-2"
                       placeholder="Email"
                       ref={email}
                />
                <input type="password"
                       id="password"
                       className="c-input mb-2"
                       placeholder="Password"
                       ref={password}
                />

                <input type="tel"
                       id="phone"
                       className="c-input mb-2"
                       placeholder="Phone Number"
                       ref={phone}
                />
                <input type="text"
                       id="dob"
                       className="c-input mb-2"
                       placeholder="Birthday"
                       onFocus={(e) => e.target.type = 'date'}
                       ref={dob}
                />
                <input type="text"
                       id="address"
                       className="c-input mb-2"
                       placeholder="Address"
                       ref={street}
                />
                <input type="text"
                       id="city"
                       className="c-input mb-2"
                       placeholder="City"
                       ref={city}
                />
                <input type="text"
                       id="state"
                       className="c-input mb-2"
                       placeholder="State"
                       ref={state}
                />
                <input type="text" pattern="[0-9]*"
                       id="zipcode"
                       className="c-input mb-2"
                       placeholder="Zipcode"
                       ref={zip}
                />

                <button onClick={(e) => clickHandler(e)} type="submit"
                        className="c-button c-medium-medium mt-3">Continue
                </button>

            </form>
            <h5 className="c-small-normal mt-2">Already have an account? <Link to="/cc/login"
                                                                               className="c-link c-small-medium">Log
                in</Link></h5>

        </div>
    );
};

export default CreateAccount;